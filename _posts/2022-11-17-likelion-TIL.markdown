---
layout: post
title:  "TIL | Kaggle - Benz Manufacturing"
date:   2022-11-17 14:00:09 +0900
categories: Python_DataAnalysis
tags: [TIL]
---
# [ 1116 ] Kaggle - Benz Manufacturing
#### 👩🏻‍💻 오늘코드 실시간 강의 _ 박조은님
이번 시간에는 Kaggle에서 마감된 Kaggle의 [**Mercedes-Benz Greener Manufacturing**](https://www.kaggle.com/c/mercedes-benz-greener-manufacturing) 데이터를 바탕으로 코드를 짜보았다.

📙 이번 포스트에서는 **이론 및 개념**을 중심적으로 다룰 예정이다.
<br/>

***

## 🛞 0801 Benz Linear Regression

Kaggle의 [Mercedes-Benz Greener Manufacturing](https://www.kaggle.com/c/mercedes-benz-greener-manufacturing)의 데이터셋을 이용하였다.

### 1. Hold-out-validation
* 제출해 보기 전에 어느 정도의 스코어가 나올지 확인
* 👍 cross_validation에 비해 속도가 빠르다.
* 👎 신뢰도는 떨어진다.


### 2. 학습 - 검증 set 나누기
* train_test_split
* X_train, X_valid, y_train, y_valid

### 3. Linear Regression
* `from sklearn.linear_model import LinearRegression`
* regplot으로 시각화해보기
```python
sns.regplot(x = y_valid, y = model_lr.predict(X_valid))
```

#### 👍 장점
  * 간단하고 이해하기 쉽다. 
  * 선형회귀에 맞는 데이터셋을 사용한다면 좋은 성능을 낼 수도 있다.
  * 선형회귀보다 트리 계열 모델을 사용하면 같은 dataset임에도 훨씬 더 나은 성능을 보여준다.

#### 👎 단점
  * 설명력이 떨어진다.
  * 회귀모델은 이상치에 민감하고, 다른 수치 데이터에 대해 전처리가 많이 필요하다.

### 4. Ordinal Encoding
* error 없애려면
    * handle_unknown : ‘use_encoded_value’
    * unknown_value 설정까지!

### 5. One-Hot-Encoding
* 원핫인코딩을 범주형 변수에!
* 그 후 수치 데이터와 합치기
    * concat
    * 인덱스 값이 맞지 않으면 제대로 병합되지 않을수 있음
    * 인덱스 맞춰주기

<br/>

***

## 🛞 0802 Benz tree model
### 1. 이상치 제거
* 회귀모델은 이상치에 영향을 크게 받으므로 제거해주자.
* y가 200보다 큰 값 제거해주기

### 2. One-Hot-Encoding
* 0801 파일과 다르게 수치형 변수 범주형 변수를 구분하지 않고 진행!

### 3. Extra Tree model
![](/assets/img/img_221116/extra_tree_model.png){: .center width="60%"}
* 가장 차별적인 임계값을 찾는 대신
* **각 후보 기능에 대해 임계값**이 무작위로 그려지고
* **무작위로 생성된 임계값 중 가장 좋은 것**을 -> 분할 규칙으로!
    * 분기 지점을 랜덤으로 선택하기 때문에 randomforest보다 속도가 빠르고 더 많은 특성을 고려할 수 있다.
    * randomforest와 동일한 원리를 이용하기 때문에 많은 특징을 공유한다.
    * randomforest와 비교했을 때 성능이 미세하게 우위에 있음

### 4. Bagging과 Boosting
![](/assets/img/img_221116/bagging_boosting.png){: .center}
* 배깅
    * **훈련세트**에서 **중복을 허용**해서 **샘플링**하여 여러개 모델을 훈련 하는 앙상블 방식
    * 같은 훈련 샘플을 여러 개의 모델에 걸쳐 사용해서 모든 모델이 훈련을 마치면 앙상블은 모든 예측기의 예측을 모아서 새로운 샘플에 대한 예측을 만들게 됩니다. 
    * 배깅 방식은 **부트스트래핑**을 해서 **트리를 병렬적**으로 여러 개 만들기 때문에 **<mark style='background-color: #fff5b1'>오버피팅 문제</mark>에 좀 더 적합**합니다.
* 부스팅
    * 여러 얕은 트리를 연결하며 **편향과 분산을 줄여** 강력한 트리를 생성
    * 약한 **모델을 여러개 연결**해서 **강한 모델**을 만들어 내기 위한 앙상블 방식입니다. 부스팅의 아이디어는 앞의 모델들을 보완해 나가면서 일련의 모델들을 학습시켜 나가는 것입니다.
    * 부스팅에서 대표적인 모델 중 하나는 **에이다**입니다. 
      * 앙상블에 이전까지의 오차를 보정하도록 모델을 순차적으로 추가
    * 최적화된 그래디언트 부스팅 구현으로 가장 유명한 것이 지난번에 강사님께서 수업에서 언급하신 XGBoost 입니다.
    * **<mark style='background-color: #fff5b1'>개별 트리의 낮은 성능</mark>**이 문제일 때는 **이전 트리의 오차를 보완**해 가면서 만들기 때문에 부스팅이 좀 더 적합합니다.

### 5. 경사하강법
![](/assets/img/img_221116/gradient_descent.png){: .center}
* 목적
    * 손실함수가 가장 작고, 예측을 잘 하는 모델의 파라미터를 찾기 위함
* 예측값과 정답값 사이에 손실이 가장 작은 지점을 찾기 위해서 기울기가 0인 지점을 찾아낸다.
* 이 지점을 찾기 위해 경사를 점점 내리는 것을 경사하강법이라고 한다.

* **learning rate**
    * 학습률을 의미하는데 보폭이라고 번역하기도 함
    * 보폭이 너무 크면 대충 찾기 때문에 최소점을 지나치고 발산하기도 함
![](/assets/img/img_221116/learning_rate.png){: .center}

### 6. GBM (Gradient Boosting Machine)
* 회귀 / 분류 분석 수행할 수 있는 예측 모형
* 예측모형의 ensemble 방법론 중 부스팅 계열에 속하는 알고리즘
* ML 알고리즘 중에서도 가장 예측 성능이 높다고 알려진 알고리즘
* 계산량이 많이 필요하기 때문에, 하드웨어 효율적으로 구현하는 것이 중요

### 7. Gradient Boosting Tree
![](/assets/img/img_221116/gradient_boosting.png){: .center}
* GBT라고도 부름
* **부스팅**이라는 앙상블 기법을 이용해 **내부적으로 여러 모델을 생성**한 후 모델들을 **종합**해 최종 모델을 생성
* **특징**
  * 랜덤포레스트와 다르게 **무작위성이 없다**.
  * 매개변수 잘 조정해야한다.
  * **훈련시간**이 길다.
  * 데이터의 **scale**에 구애받지 않는다.
  * **고차원**의 **희소한 데이터**에 잘 작동하지 않는다.


### 8. XGBoost (Extreme Gradient Boosting)
![](/assets/img/img_221116/xgboost.png){: .center}

* 모든 가능한 트리를 나열하여 최적 트리 찾는 것은 거의 불가능
* 2차 근사식을 바탕으로 한 손실함수를 토대로 매 iteration마다 하나의 leaf로부터 가지를 늘려나가는 것이 효율적
* 손실 함수가 최대한 감소하도록 하는 split point를 찾는 것이 목표 𖤐 

#### 👍 장점
  * GBM 대비 빠른 수행 시간 (병렬 처리)
  * 과적합 규제
  * 분류 / 회귀영역에서 뛰어난 예측 성능 발휘
  * Earlly Stopping 기능이 있음
  * 다양한 hyper parameter 제공


#### 👎 단점
  * GBM보다 빠르지만 여전히 학습 시간은 느림
  * hyper parameter 튜닝하게 되면 시간이 더 오래 걸림
  * overfitting 위험성
* 해당 모델 활용한 플젝 포스트 + 미니플젝3 코드 및 과정 다시 읽어보기

### 9. LightGBM
* Light Gradient Boosting Machine
* **GOSS(Gradient based One Side Sampling)**과 **EFB(Exclusive Feature Bundling)**을 적용
    * **<mark style='background-color: #fff5b1'>GOSS 기반 단축 샘플링</mark>**
        * 데이터에서 큰 Gradient를 가진 모든 인스턴스를 유지
        * 작은 Gradient를 가진 인스턴스를 무작위로 Sampling 수행함
        * 많이 틀린 데이터 위주로 샘플링 => 행을 줄임
        * 대규모 데이터 인스턴스를 다루기 위한 것
    * **<mark style='background-color: #fff5b1'>EFB 배타적 특성 묶음</mark>**
        * 대규모 Features 수를 다루기 위한 것
* XGBoost와 비교해 정확도 유지, 학습 시간은 단축 

#### 👍 장점
  * 더 빠른 훈련 속도와 더 높은 효율성
  * 적은 메모리 사용량
  * 더 나은 정확도
  * 병렬, 분산 및 GPU 학습 지원
  * 대규모 데이터 처리


#### 👎 단점
  * overfitting에 민감
  * 작은 데이터에 대해서 과적합되기 쉬움

<br/>

***

## 참고

### 🤔 사이킷런으로 인코딩한 이유?
numpy와 pandas의 데이터를 다루는 연습을 해보기에 좋다

### 🤔 GPU와 CPU
GPU는 Graphics Processing Unit의 약자로 일반적으로 그래픽 카드를 의미합니다. 딥러닝 알고리즘은 본질적으로 굉장히 많은 단순 사칙연산(행렬 곱셈 등)을 수행하게 됩니다. 단순 사칙 연산은 병렬화가 아주 쉽기 때문에, GPU를 통해 한꺼번에 여러 코어를 이용해 연산이 가능합니다.

CPU도 계산 능력이 좋지않나요? 라고 생각할 수 있지만, CPU에는 단순 사칙 연산을 담당할 수 있는 산술논리연산(ALU) 장치가 1개이므로 복잡한 단일 계산에서는 GPU보다는 유리하지만, 병렬 작업에 불리하므로 GPU보다 딥러닝에서 성능이 떨어지게 됩니다.

➡️ **CPU보다 단순 병렬 연산에 우수한 GPU를 딥러닝을 하면서 학습에 사용하게 됩니다!**


### 🤔 성능에 고려 없이 GBM 에서 훈련시간을 줄이려면 어떻게 하면 좋을까요?
learning_rate 를 올리면 학습시간은 줄어들지만 제대로 된 loss(손실)가 0이 되는 지점을 제대로 찾지 못할 수도 있다.

### 🤔 absolute loss보다 squared loss를 더 많이 사용하는 이유?
![](/assets/img/img_221116/absolute_squared_loss.png){: .center width="70%"}
**absolute loss**는 기울기가 +, - 방향에 따라 같은 기울기가 나오기 때문에 방향은 알 수 있지만 기울기가 같아서 미**분을 했을 때 방향에 따라 같은 미분값이 나와서 기울기가 큰지, 작은지 비교**할 수 없다. 그래서 **squared loss** 를 더 많이 사용한다.

### 🤔 왜 부스팅 계열 모델이 설치가 잘 되기도 하지만 설치에 실패하는 경우가 생길까요?
구동하려면 다른 언어 환경이 함께 필요한 경우가 많습니다. 기존에 다른 도구를 설치하다가 해당 언어 환경 도구를 설치해 놨던 분들은 비교적 잘 설치가 되지만, 처음 설치할 때는 실패하는 경우가 많습니다.

conda 는 비교적 패키징이 잘 되어 있어서 관련된 환경을 잘 구성해 줍니다. 그래서 되도록이면 conda 로 설치해야 스트레스가 줄어듭니다.

<!-- ## 💻 실습 예제 코드 -->



### 다음 포스트에서 만나요 🙌

[💻 실습 예제 코드]는 추후 작성할 예정이다.


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
