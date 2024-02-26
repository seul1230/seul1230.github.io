---
layout: post
title:  "TIL | SMOTE for Imbalance Data"
date:   2022-11-28 14:00:09 +0900
categories: Python_DataAnalysis
tags: [TIL, SMOTE, Imbalance Data]
published: false
---
# [ 1128 ] ML 불균형 데이터 SMOTE와 분류 측정지표
#### 👩🏻‍💻 오늘코드 실시간 강의 _ 박조은님
해당 포스트는 [**Kaggle - Credit Card Fraud**](https://www.kaggle.com/mlg-ulb/creditcardfraud)의 데이터셋을 이용해 **불균형 데이터**가 무엇인지 알아보고 어떻게 **처리**하고 **평가**할지에 대해 작성되었다.

![](/assets/img/img_221128/kaggle_creditcardfraud.png){: .center }

출처 : [Credit Card Fraud Detection](https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud)

<!-- 📙 이번 포스트에서는 **이론 및 개념**을 중심적으로 다룰 예정이다. -->

<br/>

***


## 📙 이론 및 개념 
### 1. F1 score
* F1 score의 필요성
    * 참으로 예측하는 수를 줄이면 Precision이 올라감
    * 반대로 참으로 예측하는 수를 높이면 recall이 올라감
    * precision과 recall은 **tradeoff** 관계
    * threshold를 올리면 더 확실한 경우에만 참으로 판단
    * threshold를 내리면 recall은 올라가소 precision은 내려감
    * 한 쪽만 채용해서는 예측 성능 평가 지표로서 **불완전**
* F1 score는 precision과 recall의 조화평균
    * precision과 recall을 균형 있게 가지고 있을 경우 F1 score이 상대적으로 올라감

### 2. ROC curve

![](/assets/img/img_221128/roc_curve.png){: .center width="60%"}

* 예측값이 **확률**인 분류 문제에 사용
* Threshold에 따라서 달라지는 TP 비율과 FP 비율을 표시한 그래프
* 완벽한 분류기는 ROC 곡선이 **<mark style='background-color: #ffdce0'>왼쪽 위</mark>**로 붙어있다. 
    * FP rate = 0
    * TP rate = 1
* 그러나 현실적으로 불가능하기 때문에 
    * FP rate를 최대한 적게, TP rate를 높이는 것이 목표

**[ 현 위의 점의 의미 ]**

![](/assets/img/img_221128/roc_curve.gif){: .center width="80%"}

**[ 현의 휨 정도의 의미 ]**

![](/assets/img/img_221128/roc_curve2.gif){: .center width="80%"}

두 그룹을 더 잘 구별할 수 있을수록 ROC 커브는 좌상단에 붙게 된다.

➡️ <mark style='background-color: #ffdce0'>ROC 커브</mark>는 **이진 분류기의 성능**을 표현하는 커브이고, 가능한 **모든 threshol**d에 대해 **FPR과 TPR의 비율**을 표현한 것이다.


### 3. AUC
* Area Under Curve
* ROC curve 아래의 곡면의 넓이
* 넓을수록 더 좋은 모델
* TRP
    * tp/(tp+fn)
    * 실제 양성 샘플 중 양성으로 예측된 것
* FRP
    * fp/(fp+tn)
    * 실제 음성 샘플 중 양성으로 잘못 예측된 것
* TPR은 1에 가까울 수록 좋고, FPR은 0에 가까울 수록 좋음

### 4. Data Sampling
불균형 데이터의 문제를 해결하기 위해 전체 데이터에서 sampling을 하는 방식을 달리한다. Undersampling과 oversampling이 있는데, 모두 목표는 두 값의 비율이 비슷하게 맞춰주는 것이다.
* Undersampling
    * 값이 더 많은 쪽에서 일부만 샘플링
    * 구현 쉽지만 전체 데이터 줄어서 모델 성능 하락 우려
* Oversampling
    * 값이 더 적은 쪽에서 일부만 샘플링
    * 없는 값을 어떻게 만들지가 관건
    * SMOTE : Synthetic Minority Over-sampling Technique

### 5. SMOTE
* **S**ynthetic **M**inority **O**ver-sampling **T**echnique
* 합성 소수자 오버샘플링 기법
* 적은 값을 늘릴 때 k-근접 이웃 값을 이용하여 합성된 새로운 값 추가
* 새로 생성된 값을 좌표평면에 나타내면
    * k-근접 이웃의 중간에 위치하게 됨
* [ 참고 문서 - imblearn.over_sampling.**SMOTE** ](https://imbalanced-learn.org/stable/references/generated/imblearn.over_sampling.SMOTE.html)

### 6. AI 겨울
![](/assets/img/img_221121/ai_history.png){: .center width="90%"}

인공지능은 1940년대에도 있었던 개념이며, 그 때부터 현재까지 하드웨어의 기술적 한계와 데이터의 부족으로 인한 2번의 AI 겨울이 있었다.

#### 퍼셉트론 <font color='lightgray'>Perceptron</font>
사람의 신경망을 모방하였으며, 기계가 다층 구조를 통해 학습하도록 만드는 기술

#### ANN의 한계
* Artifical Neural Network
* 학습 데이터에 따른 과적합 문제 -> 사전훈련을 통해 과적합 방지
* 그러나 학습시간이 너무 느림 -> GPU 발전, 빠른 학습시간

### 7. 순전파와 역전파
* 순전파 forward propagation
    * 입력층 -> 출력층 방향으로 예측값의 연산 진행
    * 입력층, 은닉층을 지나며 각 층에서 가중치와 함께 연산
    * 출력층에서 모든 연산을 마친 예측값 도출
* 역전파 back propagation
    * 출력층 -> 입력층 방향으로 가중치 업데이트
    * 속도는 느리지만 안정적인 결과를 얻을 수 있어 기계학습에 널리 사용

### 8. 활성화 함수  <font color='lightgray'>Activation function</font>
* 은닉층과 출력층의 뉴런에서 출력값을 결정하는 함수로 가중치 생성
* 입력값들의 수학적 선형 결합을 다양한 형태의 nonlinear / linear 결합으로 변환하는 역할
* Activation function 종류
  * sigomid
  * tanh
  * ReLU
  * Leaky ReLU

### 9. 기울기 소실 문제 <font color='lightgray'>Gradient Vanishing</font>
* 기울기 소실 : 깊은 인공 신경망을 학습할 때 역전파 과정에서 입력층으로 갈수록 기울기가 점차 작아지는 현상
    * ANN의 문제
* 기울기 폭주 : 기울기가 커져 가중치들이 발산되기도 함.
    * RNN(순환 신경망)에서 쉽게 발생
* 2번째 겨울

### 10. 기울기 소실 완화 방법
* 은닉층의 activation function으로 ReLU / Leaky ReLU 사용
* ReLU
    * Gradient Vanishing 문제 해결
    * 미분 계산 훨씬 간편 -> 학습 속도 개선
    * Dying ReLU : x가 0보다 작거나 같으면 가중치를 0으로 반환)
* Leaky ReLU
    * Dying ReLU 문제를 해결하기 위해 제안된 변형 함수
    * 입력값이 음수일 때 0이 아니라 0에 가까운 매우 작은 수를 반환하여 문제 해결

### 11. 딥러닝 학습 과정
* 출력값과 실제값을 비교하여 그 차이가 최소화하는 가중치와 편향의 조합 찾기
* 오차를 최소화하는 가중치를 스스로 탐색 (역전파)
* 알맞은 손실함수를 찾아 최소화하기 위해 고안된 방법 : 경사하강법
    * optimizer로 경사하강법의 원리를 이용





<br/>

***

## 💻 실습 예제 코드
### : 


### 다음 포스트에서 만나요 🙌


<br/>

***

## 참고 <br/>

### 🤔 

### 자료
[공돌이의 수학 정리 노트 - ROC](https://angeloyeo.github.io/2020/08/05/ROC.html)




<!-- ### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾 
<font color='dodgerblue'> 예쁜 파랑 </font>
<font color='lightgray'>Miss</font>
<mark style='background-color: #f1f8ff'> 연한 파랑 </mark>
<mark style='background-color: #fff5b1'> 연한 노랑 </mark>
<mark style='background-color: #ffdce0'> 연한 빨강 </mark>
<mark style='background-color: #dcffe4'> 연한 초록 </mark>
<mark style='background-color: #f5f0ff'> 연한 보라 </mark>
<mark style='background-color: #f6f8fa'> 연한 회색 </mark>
-->
