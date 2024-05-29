---
layout: post
title:  "빅데이터 | 특성 선택 Feature Selection"
date:   2024-05-23 14:30:09 +0900
style: border
color: info
description: <strong>[ 공부 & 정리 ]</strong><br/>Feature Selection - Filter / Wrapper / Embedded
# categories: tips
tags: [AI/ML/DL]
---
# [ 빅데이터 ] 특성 선택 Feature Selection - Filter / Wrapper / Embedded

feature 를 줄이는 방법 중 Feature Selection에 대해 알아보자. 기존 데이터의 feature들의 결합 변수를 만들어서 데이터 차원을 축소하는 <code>Extraction</code> 과 달리, <code>Selection</code> 은 target 과 관련성이 높은 feature 만을 선정하여 feature 수를 줄이는 방법이다. 지난 포스트에 Feature Selection 의 Filter / Wrapper / Embedded Method 를 차원의 저주를 해결할 수 있는 방법으로 언급했었다.

> 지난 포스트 : [[ 빅데이터 ] 차원의 저주 (The curse of dimensionality) 란?](https://seul1230.github.io/blog/curse-of-dimensionality)


<br/>


### 특성 선택 Feature Selection 이란?

> target 과 관련성이 높은 feature 만을 선정하여 feature 수를 줄이는 방법

모델링할 때 데이터의 모든 feature 를 사용하는 것은 메모리 측면에서 매우 비효율적이기 때문에 필요한 feature 만 선택해서 사용하고자 한 방법이다.


⭐️⭐️ 이로 인한 효과는 다음과 같다.
- 학습 시간 단축
- 모델 단순화
- 차원의 저주 및 과적합 Over-fitting 방지

<br/>


### Methods

Feature Selection 은 크게 Filter, Wrapper, Embedded 3가지 방법으로 분류된다.

- <code>Filter Method</code> : feature 간 상관관계 파악
- <code>Wrapper Method</code> : Feature Subset의 유용성을 측정
- <code>Embedded Method</code> : Feature Subset의 유용성을 측정하지만, 내장 metric을 사용

<br/>

#### 1️⃣ Filter Method

통계적 측정 방법을 사용하여 feature 간의 상관관계를 파악한 뒤, 높은 상관계수를 가지는 feature를 사용하는 방법이다.

- 가장 많이 사용되는 방법
- 계산속도가 빠르고 변수 간 상관관계 알아내는 데 적합 -> Wrapper 기법 이전 전처리에 사용된다.
- 상관계수가 높은 feature라고 해서 모델에 적합한 feature인 것만은 아니다.

<br/>

<p class='line-mark-blue'><strong>💡 방법론 종류</strong></p>
- <font color='#004080'><strong>상관계수 Correlation Coefficient</strong></font>
  - 두 변수 사이의 통계쩍 관계를 표현하기 위해 특정한 상관관계의 정도를 나타낸 수치
  - ```df.corr()```
- <font color='#004080'><strong>카이제곱 검정 Chi-square Test</strong></font>
  - 카이제곱 분포에 기초한 통계적 방법
  - 관찰된 빈도가 기대되는 빈도와 의미있게 다른지 여부를 검증
- <font color='#004080'><strong>피셔 스코어 Fisher Score</strong></font>
  - 최대가능도 방정식 Maximum Likelihood Function 을 풀기 위해 사용되는 방법
- <font color='#004080'><strong>분산 기반 선택 Variance Threshold</strong></font>
  - 분산이 낮은 변수를 제거하는 방법
  -  다양한 표본에 따라 그다지 변화가 없는 feature는 예측에 별 도움이 되지 않을 가능성이 높다.
- <font color='#004080'><strong>정보 소득 Information Gain</strong></font>
  - 가장 정보 소득이 높은 속성을 선택하는 방법
  - 어떤 feature 를 선택함으로써 데이터를 더 잘 구분하게 된다.
  - IG가 클수록 변별력이 좋다.

<br/>

#### 2️⃣ Wrapper Method

예측 정확도에서 가장 좋은 성능을 보이는 feature subset 을 선택하는 기법이다.

- 일반적으로 Filter Method 보다 예측 정확도가 높다.
- feature 의 조합을 정하여 기계학습을 진행한 뒤, Inference 까지의 일련의 과정을 feature 조합을 바꿔가면서 가장 성능이 좋은 조합을 찾아낸다.
- 반복적으로 학습을 진행 -> 많은 시간을 소요, 부분집합 수 기하급수적 증가 -> 과적합 위험

<br/>

<p class='line-mark-blue'><strong>💡 방법론 종료</strong></p>
- <font color='#004080'><strong>Forward Selection</strong></font>
  - feature 가 없는 상태로 시작해서 성능을 가장 많이 향상시키는 feature를 하나씩 추가하는 방법
  - 더 이상 성능 향상이 없을 때까지 feature 추가
- <font color='#004080'><strong>Backward Elimination</strong></font>
  - 모든 feature 를 가지고 시작해서 가장 영향을 적게 주는 feature를 하나씩 제거하는 방법
  - 더 이상 성능 향상이 없을 때까지 feature 제거
- <font color='#004080'><strong>Stepwise Method</strong></font>
  - Forward Selection 과 Backward Elimination 을 결합하여 사용하는 방법
  - 모든 feature 를 가지고 시작해서 최악의 feature 제거, 모델에서 빠져있는 feature 중 최상의 feature 추가하는 방법
  - 반대로 feature 가 없는 상태에서 시작하여 feature 추가, 삭제를 반복할 수도 있음


<br/>

#### 3️⃣ Embedded Method

앞서 언급된 Filter 와 Wrapper method 의 장점을 결합한 방법이다.

- Feature selection 기능이 자체적으로 추가되어 있는 모델을 사용
  - Lasso, Ridge, Decision Tree 등의 알고리즘은 모델 알고리즘 자체에서 feature selection 수행
- 각각의 feature 를 직접 학습하여 모델의 정확도에 기여하는 feature 선택

<br/>

<p class='line-mark-blue'><strong>💡 방법론 종류</strong></p>
- <font color='#004080'><strong>Lasso Regression</strong></font>
  - L1 정규화를 통해 제약을 주는 방법
- <font color='#004080'><strong>Ridge Regression</strong></font>
  - L2 정규화를 통해 제약을 주는 방법
- <font color='#004080'><strong>Select From Model</strong></font>
  - Decision Tree 기반 알고리즘에서 feature 뽑아오는 방법
- <font color='#004080'><strong>Elastic Net</strong></font>
  - Lasso Regression 과 Ridge Regression 의 페널티를 결합한 하이브리드 방법
  - 페널티는 Lasso의 희소성과 Ridge 회귀의 부드러움 사이 균형을 제공



<br/>




## Reference

- [[ML] Feature Selection (Filter Method & Wrapper Method & Embedded Method)](https://wooono.tistory.com/249)
- [[PP] Data Reduction(2)_Feature Selection(특성 선택)](https://velog.io/@seungwoong12/selection)

<br><br><br>


