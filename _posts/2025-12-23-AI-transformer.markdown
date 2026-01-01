---
layout: post
title:  "AI | 트랜스포머(Transformer) 쉽게 이해하기"
description: 최신 딥러닝 모델의 backbone, 트랜스포머
# categories: 
date:  2025-12-23 14:00:10 +0900
# style: fill
use_math: true
color: 
tags: [AI/ML/DL]
---
# AI | 트랜스포머(Transformer) 쉽게 이해하기

최근에 등장하고 있는 딥러닝 모델의 기반은 대부분 트랜스포머(Transformer)라고 해도 과언이 아니다. Transformer는 자연어 처리(NLP) 분야에서 처음 제안되어 문장을 이해하고 생성하는 능력에서 뛰어난 성능을 보이며, 이후 다양한 영역으로 빠르게 확장되었다.

<p align='center'>
<img src='/assets/img/Data_AI/transformer_detail.png' width='600px'> 
<figcaption>Transformer 전체 구조와 간단한 설명 <a href="https://medium.com/%40amirhossein.abaskohi/navigating-transformers-a-comprehensive-exploration-of-encoder-only-and-decoder-only-models-right-a0b46bdf6abe">< 이미지 출처</a></figcaption>
</p>

대표적으로 GPT, Gemini와 같은 대규모 언어 모델(LLM)은 Transformer 구조의 Decoder를 기반(Decoder-only)으로 문장을 생성하고 추론한다. 또한 Vision Transformer(ViT)처럼 이미지를 작은 패치 단위의 시퀀스로 변환해 처리하는 방식도 등장하면서, 트랜스포머는 텍스트를 넘어 이미지, 음성 등 다양한 멀티모달 영역에서 활용되고 있다.

최근의 모델들은 더 많은 데이터, 더 큰 파라미터 규모, 더 다양한 입력 형태를 다루는 방향으로 발전하고 있다.
이러한 흐름 속에서 트랜스포머는 대규모 학습과 병렬 처리에 최적화된 구조를 가지고 있으며, 시퀀스 전체의 문맥을 한 번에 이해하고 요소 간의 관계를 직접 추론할 수 있다는 장점을 가진다. 또한 텍스트·이미지·음성처럼 서로 다른 입력도 하나의 어텐션 메커니즘으로 유연하게 통합할 수 있고, 구조 자체가 단순해 확장성이 높다는 점에서 현재의 트렌드와 잘 맞는다.


<br>

이번 글에서는 다음 내용을 중심으로 트랜스포머의 핵심 구조와 동작 원리를 정리해보려 한다.

👉 트랜스포머가 어떤 문제를 해결하기 위해 등장했는지<br>
👉 인코더와 디코더는 어떤 역할을 하는지<br>
👉 어텐션 구조와 포지셔널 인코딩이 왜 필요한지<br>


<br>

## 트랜스포머(Transformer) 구조

> RNN의 한계와 트랜스포머

트랜스포머는 기존의 시퀀스 모델이 가지고 있던 구조적 한계를 해결하기 위해 등장했다. 특히 문장의 순서와 문맥이 중요한 자연어 처리(NLP) 분야에서는 오랫동안 RNN(Recurrent Neural Network)과 LSTM(Long Short-Term Memory) 계열 모델이 주력으로 사용되어 왔다.

하지만 문장의 길이가 길어지고, 다뤄야 할 데이터 규모가 커질수록 RNN 계열 모델은 한계를 드러내기 시작했다.

1. **기울기 소실/폭발 (Gradient Vanishing/Exploding)** 
   - 신경망이 깊어질수록, 시퀀스가 길어질수록 gradient가 점점 소실되거나 폭발적으로 증가하는 현상.
   - 이로 인해 모델의 학습이 어려워지거나 불안정해지는 문제가 발생함 <br>
2. **장기 의존성 문제 (Long-Term Dependency)**
   - 문장의 앞부분에서 등장한 정보가 뒤로 갈수록 희석되거나, 시퀀스가 길어질수록 학습 효율이 급격히 저하되는 문제.
   - 이로 인해 문장 전체의 문맥을 고려해야 하는 작업에서는 성능이 제한적이었음<br>
3. **순차 처리 구조**
   - 순차 처리 구조의 RNN 계열 모델은 이전 토큰의 계산이 끝나야 다음 토큰을 처리할 수 있음.
   - GPU와 같은 병렬 연산 환경을 충분히 활용하기 어렵고, 대규모 데이터 학습 시 학습 시간이 크게 증가하는 문제 발생

이러한 한계로 인해, 긴 문맥을 다루거나 대규모 데이터로 학습해야 하는 문제에서는 RNN 계열 모델만으로는 성능과 효율 모두에서 한계를 가질 수밖에 없었다.

<br>

> 인코더(Encoder) + 디코더(Decoder)

트랜스포머는 크게 인코더와 디코더로 구성된다. 그렇다면 인코더와 디코더는 각각 어떤 역할을 수행할까?

<p align='center'>
<img src='/assets/img/Data_AI/transformer.webp' width='400px'> 
<figcaption>Transformer 구조 <a href="https://arxiv.org/abs/1706.03762">< 이미지 출처</a></figcaption>
</p>

<br>

> 인코더 Encoder

인코더는 "이해"를 담당하며, 입력 시퀀스를 문맥이 반영된 표현으로 변환하는 역할을 한다. 인코더 내부에서는 다음 과정이 반복된다.

- **Self-Attention**
  → 각 토큰이 문장 내 다른 모든 토큰을 참고해, 자신에게 중요한 정보를 선택적으로 반영
- **Feed Forward Network**
  → 어텐션을 통해 모은 정보를 비선형적으로 변환해 표현력을 확장



<p align='center'>
<img src='/assets/img/Data_AI/transformer_encoder.png' width='450px'> 
<figcaption>Transformer 구조 중 Encoder</figcaption>
</p>

이 과정을 여러 층 반복하면서 입력 문장은 점점 의미가 잘 정리된 고수준 표현으로 변환된다. 이를 통해 인코더는 입력 문장의 의미를 충분히 반영한 벡터 표현을 만들어내며, 번역·요약과 같이 입력을 이해한 뒤 출력을 생성해야 하는 Seq2Seq 문제에서 핵심적인 역할을 수행했다.

<br>


> 디코더 Decoder

디코더는 트랜스포머에서 "출력 생성"을 담당한다. 이전까지 생성된 토큰들과 입력 벡터를 바탕으로,
가장 그럴듯한 다음 토큰을 하나씩 예측하며 문장을 생성한다.

최근의 대규모 언어 모델(LLM)은 입력과 출력을 명확히 분리하지 않고, 모든 토큰을 하나의 시퀀스로 처리하는 Decoder-only 구조를 사용한다.
즉, 사용자 질의와 지금까지 생성된 모든 토큰을 문맥으로 삼아 다음 토큰(출력/답변)을 생성하는 방식이다.


<p align='center'>
<img src='/assets/img/Data_AI/transformer_decoder.png' width='450px'> 
<figcaption>Transformer 구조 중 Decoder</figcaption>
</p>

<br>

> 💡 인코더와 디코더

트랜스포머의 인코더-디코더 구조에서는 Cross Attention* 을 통해 디코더가 인코더의 출력을 직접 참고한다.
디코더는 지금까지 생성한 토큰들을 기준으로 Query를 만들고,
인코더가 만들어낸 문맥 표현을 Key와 Value로 사용해
입력 시퀀스 중 현재 출력에 가장 중요한 부분을 선택적으로 반영한다. <br>
<font color="lightgray">* Cross Attention에 대해서는 아래에서 다시 자세히 다룹니다!</font> 


<pre class="callout">
이 구조를 통해 트랜스포머는
👉 인코더에서 입력 전체를 한 번에 깊이 이해해 고정된 문맥 표현(Context) 으로 만들고
👉 디코더에서 그 문맥을 참고하며 출력을 순차적으로 생성할 수 있다.
</pre>

<br>

즉, 인코더는 <u>입력을 이해하는 역할</u>,
디코더는 <u>이해된 입력 문맥을 활용해 출력을 만들어내는 역할</u>을 분담함으로써,
번역·요약과 같은 입력과 출력이 명확히 대응되는 Seq2Seq 문제를 효과적으로 해결한다.

<br>



## 어텐션(Attention)

Transformer는 어텐션(Attention) 메커니즘만을 사용해 기존 Seq2Seq 문제를 해결한 모델이다. 복잡한 순환 구조(RNN)를 제거하고, 시퀀스 전체를 한 번에 처리할 수 있도록 설계되었다. 이로 인해 학습 과정에서 병렬 처리가 가능해졌고, 학습 속도가 크게 향상되었다. 또한 긴 시퀀스와 깊은 네트워크에서도 안정적인 학습이 가능해졌다.

어텐션은 쉽게 말하자면, 입력 시퀀스의 특정 부분에 <code>집중</code>하여 불필요한 정보로 인한 학습의 방해를 줄이고 학습 과정의 효율성을 높이는 메커니즘이다. 기본 아이디어는 디코더에서 출력을 생성할 때 입력의 모든 부분이 동등하게 중요한 것이 아니라, 현재 상황에서 더 관련성이 높은 부분에 가중치를 두는 것이다.

기존의 어텐션 메커니즘은 RNN 기반 모델에서 출력 시 특정 입력 위치에 가중치를 두는 방식으로 사용되었다.
반면 트랜스포머는 어텐션을 모델의 핵심 연산으로 사용해, 시퀀스 전체의 전역적인(Global) 문맥과 요소 간의 관계를 직접 학습할 수 있도록 확장했다.

이러한 특성 덕분에 트랜스포머는 자연어 처리뿐 아니라, 이미지·음성·멀티모달 등 다양한 문제에 범용적으로 적용될 수 있는 구조를 갖게 되었다.

### 셀프 어텐션 Self Attention 

셀프 어텐션은 말 그대로 입력 시퀀스 자기 자신에 대해 어텐션을 수행하는 것이다. 즉, Query, Key, Value 모두 같은 입력에서 나온다.

예를 들어 "The animal didn't cross the street because it was too tired"라는 문장에서 'it'이 무엇을 가리키는지 이해하려면, 'it'이라는 단어가 문장의 다른 모든 단어들('The', 'animal', 'street' 등)과 얼마나 관련이 있는지를 계산해야 한다. 셀프 어텐션은 각 단어가 문장 내 다른 모든 단어와의 관계를 학습할 수 있게 한다.

셀프 어텐션은 Query(Q), Key(K), Value(V)라는 세 가지 벡터를 사용해 계산된다.

- `query(Q)` : 현재 토큰이 “어떤 정보를 찾고 있는지”를 표현한 벡터
- `keys(K)` : 각 토큰이 “어떤 특징을 가지고 있는지”를 나타내는 벡터
- `value(V)` : 실제로 전달할 정보가 담긴 벡터

<p align='center'>
<img src='/assets/img/Data_AI/self_attention.webp' width='600px'> 
<figcaption>Self-Attention <a href="https://medium.com/@hugmanskj/transformer%EC%9D%98-%ED%81%B0-%EA%B7%B8%EB%A6%BC-%EC%9D%B4%ED%95%B4-%EA%B8%B0%EC%88%A0%EC%A0%81-%EB%B3%B5%EC%9E%A1%ED%95%A8-%EC%97%86%EC%9D%B4-%ED%95%B5%EC%8B%AC-%EC%95%84%EC%9D%B4%EB%94%94%EC%96%B4-%ED%8C%8C%EC%95%85%ED%95%98%EA%B8%B0-5e182a40459d">< 이미지 출처</a></figcaption>
</p>

각 `query`는 모든 `key`와의 유사도를 계산해 어텐션 스코어를 얻고, 이 스코어를 softmax를 통해 확률 분포 형태의 어텐션 가중치로 변환한다. 이 가중치는 각 `value`에 적용되어 가중합되며, 그 결과 현재 입력 요소에 대해 문맥이 반영된 출력 표현(Attention output)이 생성된다.

1. 입력 임베딩으로부터 Q, K, V를 각각 선형 변환
2. Q와 K의 내적(dot-product) 으로 Attention Score 계산
3. 스코어를 √dₖ로 스케일링 후 softmax → Attention Weight
4. 이 가중치로 V를 가중합 → Attention output


이러한 구조 덕분에 트랜스포머는 시퀀스 내 토큰 간의 장거리 의존성(Long-range dependency)을 거리와 무관하게 직접 모델링할 수 있게 되었고, 기존 RNN 계열 모델이 겪던 한계를 효과적으로 완화할 수 있었다.

<br>

> 마스크드 셀프 어텐션 Masked Self attention

트랜스포머의 디코더에서는 마스크드 셀프 어텐션(Masked Self Attention)을 사용한다.

출력 시퀀스를 생성하는 과정에서 아직 생성되지 않은 미래 토큰을 미리 참조해서는 안 되기 때문이다. 이런 문제를 정보 누수(leakage)라고 한다. 이를 방지하기 위해 디코더의 셀프 어텐션에는 미래(다음) 위치에 대한 어텐션을 차단하는 마스크(mask)를 씌운다. 

마스크드 셀프 어텐션에서는 각 토큰이 자기 자신과 이전 토큰까지만 참고할 수 있고, 이후 위치의 토큰들은 어텐션 계산에서 제외된다. 이러한 제약 덕분에 모델은 출력 토큰(단어/답변)을 왼쪽에서 오른쪽으로 순차적으로 생성하면서도, 어텐션 계산 자체는 행렬 연산으로 구성되어 학습 단계에서는 전체 시퀀스를 한 번에 병렬로 처리할 수 있다.


### 멀티헤드 어텐션 Multi-Head Attention

트랜스포머는 멀티헤드 어텐션(Multi-Head Attention)을 사용한다. 

멀티헤드 어텐션은 동일한 입력에 대해 여러 개의 어텐션을 병렬로 수행함으로써 데이터의 다양한 관계를 동시에 학습할 수 있도록 설계된 구조다.

단일 어텐션만 사용할 경우, 하나의 관점으로만 입력 요소 간의 관계를 파악하게 되어 복잡한 패턴을 충분히 포착하기 어렵다. 이는 마치 ‘여섯 마리 눈먼 쥐와 코끼리’ 이야기처럼, 각각의 일부만 보고 전체를 판단하려는 상황과 유사하다. 멀티헤드 어텐션을 사용하면 단일 어텐션이 놓칠 수 있는 관계를 서로 다른 헤드들이 보완적으로 포착할 수 있으며, 여러 표현 부분공간(representation subspace)에서 정보를 동시에 학습할 수 있다.

<p align='center'>
<img src='/assets/img/Data_AI/multiple_viewpoints_elephants.gif' width='450px'> 
<figcaption>'여섯 마리 눈먼 쥐와 코끼리'와 유사한 그림 <a href="https://cviteacher.wordpress.com/wp-content/uploads/2014/04/blind-men-and-the-elephant.gif"></a></figcaption>
</p>

멀티헤드 어텐션에서는 각 어텐션 헤드(head)가 입력을 서로 다른 하위 표현 공간(subspace) 으로 투영한 뒤,
각기 다른 방식으로 입력 요소 간의 관계를 학습한다. 어떤 헤드는 문장 내의 문법적 관계에 주목할 수도 있고, 다른 헤드는 의미적 유사성이나 장거리 의존성에 더 집중할 수도 있다. 

각 헤드는 전체 차원의 일부만을 사용하지만, 여러 헤드를 병렬로 사용하고 결과를 다시 결합함으로써 전체 정보량은 유지하면서도 다양한 관점을 통합할 수 있다. 이렇게 결합된 결과는 선형 변환을 거쳐 최종 출력으로 사용되며, 복잡한 문맥이나 구조를 가진 데이터에서도 안정적인 성능과 높은 표현력을 보인다.


### 크로스 어텐션 Cross Attention 

크로스 어텐션은 서로 다른 두 시퀀스 사이의 관계를 학습하기 위한 어텐션이다. 트랜스포머의 인코더-디코더 구조에서 디코더가 인코더의 출력을 참고할 때 사용된다. 크로스 어텐션을 통해 디코더는 인코더가 제공한 문맥(Context) 정보를 기반으로 출력 시퀀스의 다음을 예측할 수 있다.  


<p align='center'>
<img src='/assets/img/Data_AI/cross_attention.webp' width='500px'> 
<figcaption>Cross Attention이 일어나는 곳 <a href="https://medium.com/@hugmanskj/transformer%EC%9D%98-%ED%81%B0-%EA%B7%B8%EB%A6%BC-%EC%9D%B4%ED%95%B4-%EA%B8%B0%EC%88%A0%EC%A0%81-%EB%B3%B5%EC%9E%A1%ED%95%A8-%EC%97%86%EC%9D%B4-%ED%95%B5%EC%8B%AC-%EC%95%84%EC%9D%B4%EB%94%94%EC%96%B4-%ED%8C%8C%EC%95%85%ED%95%98%EA%B8%B0-5e182a40459d">< 이미지 출처</a></figcaption>
</p>


셀프 어텐션에서는 Query, Key, Value가 모두 같은 입력에서 생성되었다면, 크로스 어텐션에서는 Query는 디코더에서, Key와 Value는 인코더에서 나온다. 즉, 출력 과정의 각 단계마다 디코더는 현재 생성 중인 토큰을 기준으로 Query를 만들고, 인코더가 입력 시퀀스 전체를 이해한 결과를 Key와 Value로 사용해 비교한다.

이를 통해 디코더는 “지금 이 출력 토큰을 생성하기 위해 입력 문장의 어느 부분을 참고해야 하는가”를 매 단계마다 선택적으로 판단할 수 있다.

기계 번역 작업을 예시로 들어보자면, 영어 "The cat is sleeping"을 한국어로 번역할 때, 디코더가 "고양이"를 생성하는 시점에는 인코더의 "cat" 부분에 높은 가중치를 두게 된다. "자고 있다"를 생성할 때는 "sleeping" 부분에 집중하는 식이다.

<br>

## 포지셔널 인코딩 Positional Encoding 

앞서 살펴본 어텐션(Attention) 연산은 토큰 간의 관계를 계산할 때 순서 정보를 직접적으로 고려하지 않는다.
Self-Attention은 입력 시퀀스를 하나의 집합처럼 처리하기 때문에, 토큰의 위치가 바뀌더라도 동일한 연산 구조를 갖는다.

하지만 자연어에서 단어의 순서는 의미를 결정짓는 중요한 요소다.
예를 들어 “dog bites man”과 “man bites dog”은 동일한 단어로 구성되어 있지만, 순서에 따라 전혀 다른 의미를 갖는다.

이러한 문제를 해결하기 위해 트랜스포머는 포지셔널 인코딩(Positional Encoding) 을 도입했다.

<p align='center'>
<img src='/assets/img/Data_AI/transformer_w_embedding.png' width='500px'> 
<figcaption>Transformer 구조 벡터 <a href="https://medium.com/machine-intelligence-and-deep-learning-lab/transformer-the-self-attention-mechanism-d7d853c2c621">< 이미지 출처</a></figcaption>
</p>


포지셔널 인코딩은 각 토큰이 시퀀스 내에서 어느 위치에 있는지를 나타내는 벡터로, 토큰 임베딩에 더해져 모델에 입력된다. 즉, 트랜스포머는 &nbsp; <code>토큰의 의미 정보(Embedding) + 위치 정보(Positional Encoding)</code>를 함께 사용해 단어의 의미와 순서를 고려해 입력 표현을 구성한다.

트랜스포머 원 논문(Attention Is All You Need)에서는 사인(sin)과 코사인(cos) 함수를 이용한 고정된 포지셔널 인코딩 방식을 제안했다. 각 차원마다 서로 다른 주파수의 사인·코사인 값을 사용함으로써, 모델이 토큰 간의 상대적인 위치 관계를 자연스럽게 학습할 수 있도록 설계되었다. 이 방식은 학습 시 보지 못한 길이의 시퀀스에도 일반화가 가능하다는 장점이 있다.

한편, BERT나 GPT와 같은 최근 모델들에서는 포지셔널 인코딩을 학습 가능한 임베딩 형태로 두는 경우도 많다.
이 경우 모델은 데이터에 맞게 위치 정보를 직접 학습하며, 태스크 특성에 따라 더 유연한 위치 표현을 사용할 수 있다.

포지셔널 인코딩 덕분에 트랜스포머는 순환 구조 없이도 토큰의 순서를 이해할 수 있으며, 어텐션 메커니즘의 병렬 처리 장점을 유지한 채 시퀀스 데이터를 효과적으로 모델링할 수 있다.

<br>

## 안정적인 학습을 위한

트랜스포머는 깊은 구조를 안정적으로 학습하기 위해 몇 가지 보조 메커니즘을 함께 사용한다. 

### 레이어 정규화 Layer Normalization

레이어 정규화는 각 레이어의 hidden vector를 feature 차원 기준으로 정규화하여 학습을 안정화하는 기법이다. 이로서 학습 과정에서 발생할 수 있는 불안정성을 줄이고 모델이 더 빠르게 수렴할 수 있도록 돕는다. 

### 잔차 연결 Residual Connection

잔차 연결은 레이어의 입력을 출력에 그대로 더해주는 구조로, 깊은 네트워크에서도 그래디언트 흐름을 유지하는 데 도움을 준다. 
모델은 Forward 방향으로 입력을 기반으로 예측을 수행하고, Backward 방향으로는 예측값의 loss를 기준으로 그래디언트를 역전파하여 각 레이어의 파라미터를 업데이트한다.

일반적인 레이어가 다음과 같이 동작한다면

$$ y=F(x) $$

역전파 과정에서는 여러 레이어를 거치면서 $\frac{\partial F(x)}{\partial x}$가 연속적으로 곱해진다.

$$ \frac{\partial L}{\partial x}= \frac{\partial L}{\partial y} \cdot \frac{\partial F(x)}{\partial x} $$

이때 $\frac{\partial F(x)}{\partial x}$ 값이 1보다 작으면 그래디언트가 급격히 감소하고, 신경망이 깊어질수록 그래디언트가 점점 약해져, 앞단 레이어까지 전달되지 않는 gradient vanishing 문제가 발생하기 쉽다. 이를 방지할 수 있도록 1 이상을 유지하도록 한 것이 잔차 연결이다.

잔차 연결이 추가되면 레이어는 $\text{ }  y=x+F(x) $ 가 되고, 역전파는 아래처럼 작동한다.

$$ \frac{\partial L}{\partial x}= \frac{\partial L}{\partial y} \cdot \left( \frac{\partial F(x)}{\partial x} + 1 \right) $$

잔차 연결은 레이어의 출력에 입력을 직접 더함으로써, 역전파 시 그래디언트가 비선형 변환을 우회해 전달될 수 있는 경로를 제공한다. 이로 인해 그래디언트가 깊은 레이어에서도 안정적으로 유지되며, 정보 손실과 gradient vanishing 문제가 완화되고, 깊은 네트워크에서도 각 레이어가 원활하게 학습될 수 있다.


<br>

## Pre-training과 Fine-Tuning 학습 패턴

트랜스포머 아키텍처를 더욱 강력한 모델로 만든 핵심 요인 중 하나는 사전 학습(Pre-training)과 미세 조정(Fine-Tuning) 학습 패턴의 정착이다.

<strong>사전 학습 단계</strong>에서 트랜스포머는 대규모 데이터로 언어의 일반적인 구조와 패턴을 학습한다. 이 과정에서 문법, 의미, 문맥 연결과 같은 범용적인 표현 능력을 확보하게 된다. 이후 <strong>미세 조정 단계</strong>에서는 비교적 적은 양의 태스크 특화 데이터만으로도, 해당 문제에 맞게 모델의 출력을 조정할 수 있다.

이러한 구조 덕분에 개발자는 복잡한 신경망 아키텍처를 처음부터 설계할 필요 없이, 이미 사전 학습된 모델을 가져와 자신의 문제에 맞게 조정하는 방식으로 높은 성능을 얻을 수 있다. 특히 대규모 데이터와 연산 자원이 제한된 환경에서도, 검증된 사전 학습 모델을 활용해 효율적으로 문제를 해결할 수 있다는 점이 큰 장점이다.

결과적으로 Pre-training과 Fine-Tuning 패턴은 딥러닝 모델 개발의 **사실상 표준(de facto standard)**으로 자리 잡았으며, 트랜스포머가 자연어 처리뿐 아니라 이미지, 음성, 멀티모달 등 다양한 분야에서 빠르게 확산된 주요 배경이 되었다.

<br>

## 정리

여기까지 트랜스포머의 구조와 역할을 간단히 정리해보았다. 하나씩 개념을 풀어 쓰다 보니, 나도 머릿속이 정리되는 느낌이라 뿌듯하다. 다음에도 이렇게 내가 공부한 내용을 종종 정리해서 올려봐야겠다 ✨

혹시 잘못된 내용이 있거나 더 궁금한 점이 있다면, 아래 댓글이나 메일로 편하게 알려주세요!


## 참고

- [논문 > Attention Is All You Need](https://arxiv.org/abs/1706.03762)
- [Transformer의 큰 그림 이해: 기술적 복잡함 없이 핵심 아이디어 파악하기](https://medium.com/@hugmanskj/transformer%EC%9D%98-%ED%81%B0-%EA%B7%B8%EB%A6%BC-%EC%9D%B4%ED%95%B4-%EA%B8%B0%EC%88%A0%EC%A0%81-%EB%B3%B5%EC%9E%A1%ED%95%A8-%EC%97%86%EC%9D%B4-%ED%95%B5%EC%8B%AC-%EC%95%84%EC%9D%B4%EB%94%94%EC%96%B4-%ED%8C%8C%EC%95%85%ED%95%98%EA%B8%B0-5e182a40459d)
- [Navigating Transformers: A Comprehensive Exploration of Encoder-Only and Decoder-Only Models, Right Shift, and Beyond](https://medium.com/%40amirhossein.abaskohi/navigating-transformers-a-comprehensive-exploration-of-encoder-only-and-decoder-only-models-right-a0b46bdf6abe)




<br/><br/><br/>


