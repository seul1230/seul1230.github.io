---
layout: post
title:  "구글코리아 x Project | LLM 기반 사내 데이터 분석 엔진, DBDeep"
description: 📊 <strong> 최근 3개월 간 유의미한 변동내역이 있었던 사업 부문을 알려줘_ </strong> 하면 생성형 AI가 직접 필요한 사내 데이터를 조회, 분석하고 인사이트를 뽑아준다고요?
date:  2025-08-31 12:00:10 +0900
use_math: false
style: border
color: success
categories: Projects
tags: [Project, dev, LLM, RAG, BigQuery, Google]
---
# 구글코리아 연계 | LLM 기반 사내 데이터 분석 엔진, DBDeep



<!-- > 컴퓨터는 자연어로 된 문장을 어떻게 이해할까?

자연어처리(NLP)에서 이 질문은 꽤 오래된 숙제였다. 단어와 문장은 결국 '의미'를 담고 있지만, 컴퓨터는 숫자만을 이해할 수 있기 때문이다.

그렇다면 컴퓨터는 어떻게 '비슷한 문장'을 판단할 수 있을까? 답은 바로 <code>벡터 유사도(Vector Similarity)</code> 에 있다. 

<br/><br/>

오늘은 벡터 유사도에 대해 알아보고, 누가 물어봐도 쉽게 설명할 수 있게 하고자 내용을 정리하고자 한다!

<br><br><br>

<p align="center">
➿ ➿ ➿
</p>

<br/>

## 📌 자연어를 숫자로 바꾸기 : 임베딩 (Embedding)

> Embedding은 단어, 문장, 이미지, 오디오 등 다양한 데이터를 수학적 벡터 형태로 변환하는 과정이다.

자연어를 왜 벡터로 바꾸어야할까? 컴퓨터는 사람과 같이 '언어'를 이해하지 못한다. 우리가 작성한 코드도 컴파일러가 기계어로 바꾸어주어야 그 기계어로 변환된 것을 연산해 주는 것이다. 그럼 어떻게 컴퓨터가 이해할 수 있도록 바꿀 수 있을까?

먼저, 컴퓨터가 연산할 수 있도록 텍스트를 숫자(벡터)로 바꿔야 한다. 이 과정을 임베딩(embedding) 이라고 부르며, 대표적으로 다음과 같은 방식이 있다.
- TF-IDF: 단어의 등장 빈도 기반.
- Word2Vec / GloVe: 단어의 의미 기반 분포 임베딩.
- Sentence-BERT / KoBERT: 문장 단위의 의미를 파악할 수 있는 임베딩 모델.

자연어 처리 성능은 '임베딩 성능'이라는 말이 있을 정도로, 자연어를 벡터로 바꾼 값이 단어의 특징이나 유사성 등 제대로 반영하지 못하면 무용지물이 있으니 잘 선택하도록 하자.

<p align='center'>
<img src='/assets/img/Data_AI/embedding.png' width='100%'>
<figcaption>🔼 벡터 공간에 임베딩된 단어들<br><font color="lightgray">출처: <a href="https://velog.io/@jhoacc/%EC%9E%84%EB%B2%A0%EB%94%A9%EC%9D%B4-%EC%A0%90%EC%9D%B4-%EC%95%84%EB%8B%88%EB%9D%BC-%EB%B2%A1%ED%84%B0%EC%9D%B8-%EC%9D%B4%EC%9C%A0">임베딩이 점이 아니라 벡터인 이유</a></font></figcaption>
</p>

<br/>

예를 들어, "나는 오늘 커피를 마셨어" 와 "오늘은 커피를 마신 날이다" 문장 2개가 있다고 하자.

이 두 문장은 단어 배열은 다르지만 의미는 매우 유사하다. 사람은 쉽게 이해하지만, 컴퓨터는 이 문장을 수치로 바꿔 비교해야만 유사성을 판단할 수 있다.


<br/><br/>

## 📌 벡터 유사도란?

임베딩된 텍스트는 n차원 공간 상의 벡터이다. 특히나 비슷한 의미의 문장은 가까운 벡터 공간에 위치하도록 학습되어 있기 때문에 이 벡터들 간의 유사도를 수학적으로 계산하면, 컴퓨터도 '비슷하다'고 느끼게 만들 수 있는 것이다. 

대표적인 유사도 측정 방법은 다음과 같다.



### 코사인 유사도 <font color="white">Cosine Similarity</font>

> 두 벡터 사이의 각도를 기준으로 유사도를 계산

고등학교 벡터 시간에 배워서 다들 익숙은 할 텐데, 막상 설명해보려고 하니까 수식밖에 기억이 안 나서 애를 먹었다. 방향 유사도, 즉 의미 유사도를 보는 지표로, 간단하게 두 벡터 사이의 각도가 작을수록 유사도가 높다고 생각하면 된다!


<p align='center'>
<img src='/assets/img/Data_AI/cosine_sentence.jpg' width='80%'>
<figcaption>🔼 문장 벡터 시각화 예시<br><font color="lightgray">출처: <a href="https://www.offconvex.org/2018/06/17/textembeddings/">Deep-learning-free Text and Sentence Embedding, Part 1
</a></font></figcaption>
</p>



<br/>

<p align="center">
<mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="0" style="font-size: 123%; position: relative;"><mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D460 TEX-I"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D456 TEX-I"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45A TEX-I"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D456 TEX-I"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D459 TEX-I"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D44E TEX-I"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45F TEX-I"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D456 TEX-I"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D466 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n" space="4"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-mi class="mjx-i" space="4"><mjx-c class="mjx-c1D450 TEX-I"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45C TEX-I"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D460 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D6E9 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="4"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-mfrac space="4"><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mrow><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D434 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c22C5"></mjx-c></mjx-mo><mjx-mi class="mjx-i" space="3"><mjx-c class="mjx-c1D435 TEX-I"></mjx-c></mjx-mi></mjx-mrow></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mrow><mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo><mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D434 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo><mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo><mjx-mtext class="mjx-n"><mjx-c class="mjx-cA0"></mjx-c></mjx-mtext><mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo><mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D435 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo><mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo></mjx-mrow></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac><mjx-mo class="mjx-n" space="4"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-mfrac space="4"><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mrow><mjx-munderover limits="false"><mjx-mo class="mjx-sop"><mjx-c class="mjx-c2211 TEX-S1"></mjx-c></mjx-mo><mjx-script style="vertical-align: -0.285em; margin-left: 0px;"><mjx-texatom size="s" texclass="ORD"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi></mjx-texatom><mjx-spacer style="margin-top: 0.284em;"></mjx-spacer><mjx-texatom size="s" texclass="ORD"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D456 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-texatom></mjx-script></mjx-munderover><mjx-texatom space="2" texclass="ORD"><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D434 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-texatom size="s" texclass="ORD"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D456 TEX-I"></mjx-c></mjx-mi></mjx-texatom></mjx-script></mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-cD7"></mjx-c></mjx-mi><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D435 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-texatom size="s" texclass="ORD"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D456 TEX-I"></mjx-c></mjx-mi></mjx-texatom></mjx-script></mjx-msub></mjx-texatom></mjx-mrow></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mrow><mjx-msqrt><mjx-sqrt><mjx-surd><mjx-mo class="mjx-lop"><mjx-c class="mjx-c221A TEX-S2"></mjx-c></mjx-mo></mjx-surd><mjx-box style="padding-top: 0.341em;"><mjx-munderover limits="false"><mjx-mo class="mjx-sop"><mjx-c class="mjx-c2211 TEX-S1"></mjx-c></mjx-mo><mjx-script style="vertical-align: -0.285em; margin-left: 0px;"><mjx-texatom size="s" texclass="ORD"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi></mjx-texatom><mjx-spacer style="margin-top: 0.284em;"></mjx-spacer><mjx-texatom size="s" texclass="ORD"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D456 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-texatom></mjx-script></mjx-munderover><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D434 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-texatom size="s" texclass="ORD"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D456 TEX-I"></mjx-c></mjx-mi></mjx-texatom></mjx-script></mjx-msub><mjx-msup><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo><mjx-script style="vertical-align: 0.289em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-script></mjx-msup></mjx-box></mjx-sqrt></mjx-msqrt><mjx-mi class="mjx-i"><mjx-c class="mjx-cD7"></mjx-c></mjx-mi><mjx-msqrt><mjx-sqrt><mjx-surd><mjx-mo class="mjx-lop"><mjx-c class="mjx-c221A TEX-S2"></mjx-c></mjx-mo></mjx-surd><mjx-box style="padding-top: 0.341em;"><mjx-munderover limits="false"><mjx-mo class="mjx-sop"><mjx-c class="mjx-c2211 TEX-S1"></mjx-c></mjx-mo><mjx-script style="vertical-align: -0.285em; margin-left: 0px;"><mjx-texatom size="s" texclass="ORD"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi></mjx-texatom><mjx-spacer style="margin-top: 0.284em;"></mjx-spacer><mjx-texatom size="s" texclass="ORD"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D456 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-texatom></mjx-script></mjx-munderover><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D435 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-texatom size="s" texclass="ORD"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D456 TEX-I"></mjx-c></mjx-mi></mjx-texatom></mjx-script></mjx-msub><mjx-msup><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo><mjx-script style="vertical-align: 0.289em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-script></mjx-msup></mjx-box></mjx-sqrt></mjx-msqrt></mjx-mrow></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac></mjx-math><mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>s</mi><mi>i</mi><mi>m</mi><mi>i</mi><mi>l</mi><mi>a</mi><mi>r</mi><mi>i</mi><mi>t</mi><mi>y</mi><mo>=</mo><mi>c</mi><mi>o</mi><mi>s</mi><mo stretchy="false">(</mo><mi>Θ</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mi>A</mi><mo>⋅</mo><mi>B</mi></mrow><mrow><mo data-mjx-texclass="ORD" stretchy="false">||</mo><mi>A</mi><mo data-mjx-texclass="ORD" stretchy="false">||</mo><mtext>&nbsp;</mtext><mo data-mjx-texclass="ORD" stretchy="false">||</mo><mi>B</mi><mo data-mjx-texclass="ORD" stretchy="false">||</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><munderover><mo data-mjx-texclass="OP">∑</mo><mrow data-mjx-texclass="ORD"><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mrow data-mjx-texclass="ORD"><mi>n</mi></mrow></munderover><mrow data-mjx-texclass="ORD"><msub><mi>A</mi><mrow data-mjx-texclass="ORD"><mi>i</mi></mrow></msub><mi>×</mi><msub><mi>B</mi><mrow data-mjx-texclass="ORD"><mi>i</mi></mrow></msub></mrow></mrow><mrow><msqrt><munderover><mo data-mjx-texclass="OP">∑</mo><mrow data-mjx-texclass="ORD"><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mrow data-mjx-texclass="ORD"><mi>n</mi></mrow></munderover><mo stretchy="false">(</mo><msub><mi>A</mi><mrow data-mjx-texclass="ORD"><mi>i</mi></mrow></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup></msqrt><mi>×</mi><msqrt><munderover><mo data-mjx-texclass="OP">∑</mo><mrow data-mjx-texclass="ORD"><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mrow data-mjx-texclass="ORD"><mi>n</mi></mrow></munderover><mo stretchy="false">(</mo><msub><mi>B</mi><mrow data-mjx-texclass="ORD"><mi>i</mi></mrow></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup></msqrt></mrow></mfrac></math></mjx-assistive-mml></mjx-container>
<figcaption>🔼 문제의 코사인 유사도 공식</figcaption>
</p>


<br>

### 자카드 유사도 <font color="white">Jaccard Similarity</font>

> 자카드 유사도는 두 집합 A와 B 사이의 유사성을 측정한다.

공통된 요소가 많을수록, 즉 교집합의 비율이 높을수록 유사한 집합이라고 판단한다.


<br/>


<p align="center"><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="11" style="font-size: 123%; position: relative;"><mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D43D TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D434 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c2C"></mjx-c></mjx-mo><mjx-mi class="mjx-i" space="2"><mjx-c class="mjx-c1D435 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="4"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-mfrac space="4"><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mrow><mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D434 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2229"></mjx-c></mjx-mo><mjx-mi class="mjx-i" space="3"><mjx-c class="mjx-c1D435 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo></mjx-mrow></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mrow><mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D434 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c222A"></mjx-c></mjx-mo><mjx-mi class="mjx-i" space="3"><mjx-c class="mjx-c1D435 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo></mjx-mrow></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac><mjx-mo class="mjx-n" space="4"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-mfrac space="4"><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mrow><mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D434 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2229"></mjx-c></mjx-mo><mjx-mi class="mjx-i" space="3"><mjx-c class="mjx-c1D435 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo></mjx-mrow></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mrow><mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D434 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D435 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D434 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2229"></mjx-c></mjx-mo><mjx-mi class="mjx-i" space="3"><mjx-c class="mjx-c1D435 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo></mjx-mrow></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac></mjx-math><mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>J</mi><mo stretchy="false">(</mo><mi>A</mi><mo>,</mo><mi>B</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mo data-mjx-texclass="ORD" stretchy="false">|</mo><mi>A</mi><mo>∩</mo><mi>B</mi><mo data-mjx-texclass="ORD" stretchy="false">|</mo></mrow><mrow><mo data-mjx-texclass="ORD" stretchy="false">|</mo><mi>A</mi><mo>∪</mo><mi>B</mi><mo data-mjx-texclass="ORD" stretchy="false">|</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mo data-mjx-texclass="ORD" stretchy="false">|</mo><mi>A</mi><mo>∩</mo><mi>B</mi><mo data-mjx-texclass="ORD" stretchy="false">|</mo></mrow><mrow><mo data-mjx-texclass="ORD" stretchy="false">|</mo><mi>A</mi><mo data-mjx-texclass="ORD" stretchy="false">|</mo><mo>+</mo><mo data-mjx-texclass="ORD" stretchy="false">|</mo><mi>B</mi><mo data-mjx-texclass="ORD" stretchy="false">|</mo><mo>−</mo><mo data-mjx-texclass="ORD" stretchy="false">|</mo><mi>A</mi><mo>∩</mo><mi>B</mi><mo data-mjx-texclass="ORD" stretchy="false">|</mo></mrow></mfrac></math></mjx-assistive-mml></mjx-container>
<figcaption>🔼 자카드 유사도 공식</figcaption>
</p>



<p align='center'>
<img src='/assets/img/Data_AI/jaccard_similarity.png' width='80%'>
<figcaption><font color="lightgray">출처: <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmayurdhvajsinhjadeja.medium.com%2Fjaccard-similarity-34e2c15fb524&psig=AOvVaw3LScqutWsZQbCTb1jX0mkK&ust=1750163888612000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKiXn9369Y0DFQAAAAAdAAAAABAL">Jaccard Similarity Made Simple: A Beginner’s Guide to Data Comparison</a></font></figcaption>
</p>






<br>

### 유클리드 거리 <font color="white">Euclidean Distance</font>

> 두 점 사이의 직선 거리를 말한다.

<p align="center"><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="4" style="font-size: 123%; position: relative;"><mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;"><mjx-msqrt><mjx-sqrt><mjx-surd><mjx-mo class="mjx-lop"><mjx-c class="mjx-c221A TEX-S2"></mjx-c></mjx-mo></mjx-surd><mjx-box style="padding-top: 0.45em;"><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45E TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em; margin-left: -0.014em;"><mjx-texatom size="s" texclass="ORD"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-texatom></mjx-script></mjx-msub><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo><mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45D TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-texatom size="s" texclass="ORD"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-texatom></mjx-script></mjx-msub><mjx-msup><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo><mjx-script style="vertical-align: 0.289em;"><mjx-texatom size="s" texclass="ORD"><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-texatom></mjx-script></mjx-msup><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45E TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em; margin-left: -0.014em;"><mjx-texatom size="s" texclass="ORD"><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-texatom></mjx-script></mjx-msub><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo><mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45D TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-texatom size="s" texclass="ORD"><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-texatom></mjx-script></mjx-msub><mjx-msup><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo><mjx-script style="vertical-align: 0.289em;"><mjx-texatom size="s" texclass="ORD"><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-texatom></mjx-script></mjx-msup><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo><mjx-mtext class="mjx-n" space="3"><mjx-c class="mjx-cA0"></mjx-c></mjx-mtext><mjx-mo class="mjx-n"><mjx-c class="mjx-c2E"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="2"><mjx-c class="mjx-c2E"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="2"><mjx-c class="mjx-c2E"></mjx-c></mjx-mo><mjx-mtext class="mjx-n" space="2"><mjx-c class="mjx-cA0"></mjx-c></mjx-mtext><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45E TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em; margin-left: -0.014em;"><mjx-texatom size="s" texclass="ORD"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi></mjx-texatom></mjx-script></mjx-msub><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo><mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45D TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-texatom size="s" texclass="ORD"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi></mjx-texatom></mjx-script></mjx-msub><mjx-msup><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo><mjx-script style="vertical-align: 0.289em;"><mjx-texatom size="s" texclass="ORD"><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-texatom></mjx-script></mjx-msup></mjx-box></mjx-sqrt></mjx-msqrt><mjx-mo class="mjx-n" space="4"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-msqrt space="4"><mjx-sqrt class="mjx-tall"><mjx-surd><mjx-mo class="mjx-n"><mjx-stretchy-v class="mjx-c221A" style="height: 3.6em; vertical-align: -1.05em;"><mjx-beg><mjx-c></mjx-c></mjx-beg><mjx-ext><mjx-c></mjx-c></mjx-ext><mjx-end><mjx-c></mjx-c></mjx-end><mjx-mark></mjx-mark></mjx-stretchy-v></mjx-mo></mjx-surd><mjx-box style="padding-top: 0.451em;"><mjx-munderover><mjx-over style="padding-bottom: 0.192em; padding-left: 0.51em;"><mjx-texatom size="s" texclass="ORD"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi></mjx-texatom></mjx-over><mjx-box><mjx-munder><mjx-row><mjx-base><mjx-mo class="mjx-lop"><mjx-c class="mjx-c2211 TEX-S2"></mjx-c></mjx-mo></mjx-base></mjx-row><mjx-row><mjx-under style="padding-top: 0.167em; padding-left: 0.148em;"><mjx-texatom size="s" texclass="ORD"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D456 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-texatom></mjx-under></mjx-row></mjx-munder></mjx-box></mjx-munderover><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45E TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em; margin-left: -0.014em;"><mjx-texatom size="s" texclass="ORD"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D456 TEX-I"></mjx-c></mjx-mi></mjx-texatom></mjx-script></mjx-msub><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo><mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45D TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-texatom size="s" texclass="ORD"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D456 TEX-I"></mjx-c></mjx-mi></mjx-texatom></mjx-script></mjx-msub><mjx-msup><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo><mjx-script style="vertical-align: 0.289em;"><mjx-texatom size="s" texclass="ORD"><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-texatom></mjx-script></mjx-msup></mjx-box></mjx-sqrt></mjx-msqrt></mjx-math><mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msqrt><mo stretchy="false">(</mo><msub><mi>q</mi><mrow data-mjx-texclass="ORD"><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>p</mi><mrow data-mjx-texclass="ORD"><mn>1</mn></mrow></msub><msup><mo stretchy="false">)</mo><mrow data-mjx-texclass="ORD"><mn>2</mn></mrow></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>q</mi><mrow data-mjx-texclass="ORD"><mn>2</mn></mrow></msub><mo>−</mo><msub><mi>p</mi><mrow data-mjx-texclass="ORD"><mn>2</mn></mrow></msub><msup><mo stretchy="false">)</mo><mrow data-mjx-texclass="ORD"><mn>2</mn></mrow></msup><mo>+</mo><mtext>&nbsp;</mtext><mo>.</mo><mo>.</mo><mo>.</mo><mtext>&nbsp;</mtext><mo>+</mo><mo stretchy="false">(</mo><msub><mi>q</mi><mrow data-mjx-texclass="ORD"><mi>n</mi></mrow></msub><mo>−</mo><msub><mi>p</mi><mrow data-mjx-texclass="ORD"><mi>n</mi></mrow></msub><msup><mo stretchy="false">)</mo><mrow data-mjx-texclass="ORD"><mn>2</mn></mrow></msup></msqrt><mo>=</mo><msqrt><munderover><mo data-mjx-texclass="OP">∑</mo><mrow data-mjx-texclass="ORD"><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mrow data-mjx-texclass="ORD"><mi>n</mi></mrow></munderover><mo stretchy="false">(</mo><msub><mi>q</mi><mrow data-mjx-texclass="ORD"><mi>i</mi></mrow></msub><mo>−</mo><msub><mi>p</mi><mrow data-mjx-texclass="ORD"><mi>i</mi></mrow></msub><msup><mo stretchy="false">)</mo><mrow data-mjx-texclass="ORD"><mn>2</mn></mrow></msup></msqrt></math></mjx-assistive-mml></mjx-container>
<figcaption>🔼 유클리드 거리 공식</figcaption>
</p>

<br>

값이 작을수록 유사하고, 방향성이 아닌 '거리'이기 때문에 코사인 유사도처럼 방향까지 고려한 유사도보다는 의미적으로 덜 민감할 수 있다. 이해를 돕기 위한 사진을 아래에 첨부해두었다.

<br>

<p align='center'>
<img src='/assets/img/Data_AI/euclidean.png' width='50%'>
<figcaption>🔼 유클리드 거리 <br><font color="lightgray">출처: <a href="https://wikidocs.net/24654">위키독스 | 딥러닝을 이용한 자연어 처리 입문</a></font></figcaption>
</p>
<br>

코사인 유사도와 비교하면 이런 느낌이라고 할 수 있겠다.

<p align='center'>
<img src='/assets/img/Data_AI/euclid_cosine.jpg' width='70%'>
<figcaption>🔼 유클리드 거리와 코사인 유사도 <br><font color="lightgray">출처: <a href="https://www.lgcns.com/blog/cns-tech/ai-data/15526/">고객 시선 강탈의 중요 요소 ‘빅데이터 추천 시스템’ ①</a></font></figcaption>
</p>
<br>


<br>

### 맨해튼 거리 <font color="white">Manhattan Distance</font>

> 각 차원에서의 차이의 합으로, 시각적으로는 격자무늬를 걷는 느낌을 생각하면 된다.



<br>

<p align='center'>
<img src='/assets/img/Data_AI/distance_euclidean_manhattan.png' width='60%'>
<figcaption>🔼 유클리드 거리와 맨해튼 거리 <br><font color="lightgray">출처: <a href="https://modulabs.co.kr/blog/cluster-analysis-clustering-grouping">모두의 연구소</a></font></figcaption>
</p>



<br/>

<p align="center">
➿ ➿ ➿
</p>

<br/>

## 🚀 마무리하며

벡터 유사도는 자연어를 수치로 바꾼 다음, 그 수치들 사이의 관계를 통해 문장의 의미 유사도를 판단하는 데 핵심 역할을 한다.

| 유사도 지표          | 잘 맞는 상황                                |
| -------------------- | ------------------------------------------- |
| 코사인 유사도        | 임베딩 벡터 기반 문장/문서 의미 비교        |
| 자카드 유사도        | 토큰 기반 키워드 유사성 비교 (예: BoW, set) |
| 유클리드/맨해튼 거리 | 거리 기반 분류 모델 (KNN 등)에서 유리       |

<br/>

- 코사인 유사도는 벡터의 크기는 무시하고 방향만 고려하기 때문에, 임베딩처럼 의미가 내포된 벡터 비교에 적합하다.
- 자카드 유사도는 중복을 고려하지 않고 집합 간의 순수한 겹침 정도를 판단하므로, BoW나 토큰 기반 문서 비교에 적합하다.
- 유클리드/맨해튼 거리는 각 차원 간의 거리 차이를 직접 반영하므로, 수치 기반 피처 간의 거리 비교나 KNN 분류 등에 자주 활용된다.

<br/>

유사도를 비교할 땐 항상 데이터가 어떤 형태인지, 정확히 어떤 것의 유사도를 비교하고 싶은지 먼저 생각해야 한다. 유사도의 특징을 잘 기억해놨다가 상황에 적합한 유사도를 선택하도록 하자!

<font color="lightgray">*BoW: 단어의 등장 여부나 빈도에만 집중해 숫자 벡터로 변환하는 방법</font>


 -->

## 참고


<br/><br/><br/>

