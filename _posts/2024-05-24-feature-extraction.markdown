---
layout: post
title:  "빅데이터 | 특성 추출 Feature Extraction"
date:   2024-05-24 14:30:09 +0900
style: border
color: info
description: <strong>[ 공부 & 정리 ]</strong><br/>Feature Extraction - PCA / t-SNE / LDA
# categories: tips
tags: [AI/ML/DL]
---
# [ 빅데이터 ] 특성 추출 Feature Extraction - PCA / t-SNE / LDA

일반적으로 데이터가 많으면 모델의 성능이 더 향상된다. 그러나 실제 데이터셋은 불필요한 정보를 포함하고 있거나, 유사한 의미를 가지고 있지만 여러 feature로 나눠져 있는 경우가 많다. 그만큼 많은 시간이 소요되기 때문에 데이터 feature 를 적당히 줄여주는 작업도 필요하다. feature 를 줄이는 방법에는 크게 Feature Selection 과 Feature Extraction 방법으로 나눌 수 있다. 지난 번 Feature Selection에 이어 Feature Extraction에 대해 알아보자. 

> 지난 포스트<br/> [[ 빅데이터 ] 특성 선택 Feature Selection - Filter / Wrapper / Embedded](https://seul1230.github.io/blog/feature-selection)<br/> [[ 빅데이터 ] 차원의 저주 (The curse of dimensionality) 란?](https://seul1230.github.io/blog/curse-of-dimensionality)


<br/>


### 특성 추출 Feature Extraction 이란?

> 기존 feature 들의 조합으로 유용한 feature 를 새롭게 생성하는 방법

Feature Extraction은 고차원의 원본 feature 공간을 저차원의 새로운 feature 공간으로 투영한 방법이다. 특성들 사이에 특성이나 관계를 잘 표현할 수 있는 새로운 선형/비선형 결합 변수를 만들어 데이터를 줄인다.


⭐️⭐️ 이로 인한 효과는 다음과 같다.
- feature 개수 많이 줄일 수 있음
- feature 간 상관관계 고려 용이

단, 이렇게 추출된 변수의 해석이 어렵다는 단점이 있다. 

<br/>


### Methods

#### 1️⃣ 주성분 분석 PCA

일반적으로 차원을 축소할 때 주성분 분석 (PCA) 을 주로 사용한다. 

<p class='line-mark-blue'><strong>💡 원리</strong></p>

1. 데이터에 가장 가까운 초평면을 정의
2. 이 평면에 데이터를 투영시킨다.
3. train set에서 분산이 최대인 축을 찾는다.


<p class='line-mark-gray'><strong>❓ 분산이 최대인 축을 찾는 이유</strong></p>

<p align='center'><img src='/assets/img/Data_AI/pca_compare.png' width='50%'><figcaption>PCA 평면 후보 PC1, PC2 <a href='https://environmentalcomputing.net/graphics/multivariate-vis/pca/'>[출처]</a></figcaption></p>

> 분산이 큰 축일수록 더 많은 정보를 가지고 있다.

즉, 이 말은 원본 데이터를 최대한 보존하기 떄문에 원본 위치 정보를 더 잘 복원할 수 있다는 말이 된다. 최대한 정보 손실을 줄이기 위해 분산이 최대인 축을 찾아서 차원 축소를 진행한다. 위 그림의 경우 분산이 더 큰 PC2를 축으로 하는 것이 좋다.

그럼에도 불구하고, 선형 분석 방식으로 투영하기 때문에 차원이 감소되면서 데이터들이 뭉개져 군집 또한 변별력을 잃을 수 있다.



<br/>

#### 2️⃣ t-SNE

PCA는 선형 차원 축소 기법으로, PCA 분석을 통해 차원을 줄이는 과정에서 군집의 변별력이 사라지는 경우가 있다. 이러한 문제를 해결할 수 있는 차원 감소 방법으로 t-SNE 방식을 사용한다.

t-SNE는 비선형 차원 축소 기법으로, 대략적인 원리는 다음과 같다. 

<p class='line-mark-blue'><strong>💡 원리</strong></p>

<p align='center'><img src='/assets/img/Data_AI/t-sne-visual-explanation.png' width='70%'><figcaption>t-SNE 계산 방법 <a href='https://spotintelligence.com/2023/12/22/practical-guide-t-sne/'>[출처]</a></figcaption></p>

1. 임의의 점(A)을 하나 선택해 다른 점(B)까지의 거리를 측정한다.
2. 점 A 를 T 분포 그래프 가운데 위치시킨다.
3. A 로부터 B 까지 거리에 있는 T 분포 값을 <code>친밀도 similarity</code> 라고 하고, 친밀도가 가까운 값끼리 묶는다.

<br/>

<p class='line-mark-blue'><strong>💡 장점 & 단점</strong></p>
- 군집이 뭉개지는 PCA 의 단점을 해결
- 매번 계산할 때마다 축의 위치가 바뀌어 다른 모양으로 나타남
- 데이터의 군집성과 같은 특성은 유지가 되어 시각화를 통한 데이터 분석에서는 유용
- 특성 값이 매번 바뀌기 때문에 머신러닝 모델의 학습 feature 로 사용되기에는 다소 어려움


<p align='center'><img src='/assets/img/Data_AI/t_SNE_feature.png' width='70%'><figcaption>수행할 때마다 데이터 군집은 동일하지만 군집 대표값들이 계속 바뀌는 모습</figcaption></p>




<br/>

#### 3️⃣ LDA

<strong>LDA</strong> 도 PCA와 마찬가지로 선형 판별 분석법으로 매우 유사하다. 데이터를 저차원 공간에 투영해 차원을 축소하는 방법으로, PCA와 달리 지도학습 분류 문제에서 사용하기 쉽도록 <strong>개별 클래스를 분별할 수 있는 기준을 최대한 유지하면서 차원을 축소</strong>한다. 그리고 PCA와 달리 LDA는 지도학습이기 때문에 target 값을 넣어줘야 한다.

그래서 PCA 는 입력 데이터의 분산이 가장 큰 축을 찾았지만, LDA 는 <strong>입력 데이터의 결정 값 클래스를 최대한으로 분리할 수 있는 축</strong>을 찾는다.

> 클래스 간 분산은 최대화, 클래스 내부 분산은 최소화

<br/>

<p class='line-mark-blue'><strong>💡 활용 분야</strong></p>
LDA의 이러한 특성 때문에 토픽모델링 태스크에서도 활용되었었다. 문서 내 단어들에 토픽을 부여하고, 문서-토픽, 토픽-단어 확률을 학습해나가면서 가장 높은 확률을 가진 토픽을 찾아낸다. 현재는 물론 LLM이 성능이 훨씬 뛰어나다!

<p align='center'><img src='/assets/img/Data_AI/lda_topicmodeling.png' width='70%'><figcaption>문서에서 LDA를 이용해 주제를 찾는 모습</figcaption></p>



<br/>




## Reference

- [텍스트분석 – 토픽모델링(LDA)](http://bigdata.emforce.co.kr/index.php/2020072401/)
- [PCA vs t-SNE](https://amazelimi.tistory.com/entry/PCA-vs-t-SNE)

<br><br><br>


