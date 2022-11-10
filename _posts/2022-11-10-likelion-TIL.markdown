---
layout: post
title:  "2022_likelion TIL"
date:   2022-11-10 14:00:09 +0900
categories: Python_DataAnalysis
---
# [ 1109 TIL ] Kaggle competition - House Prices
## 👩🏻‍💻 오늘코드 실시간 강의 _ 박조은님
오늘도 화이팅 :)

## 📚 오늘의 TIL - Kaggle competition : House Prices

이번 시간에는 Kaggle에서 현재 진행 중인 **House Prices - Advanced Regression Techniques** 데이터를 바탕으로 코드를 짜보았다.

<br/>

***

## 📙 이론 및 개념 <br/>

### 🏡 0701 house prices feature engineering

Kaggle의 [House Prices - Advanced Regression Techniques](https://www.kaggle.com/c/house-prices-advanced-regression-techniques)의 데이터셋을 이용하였다.

### Feature Scaling
 
* Feature의 범위를 조정하여 정규화
* 분산과 표준편차를 조정하여 정규분포 형태를 띄게 하는 것이 목표
* Feature Scaling이 잘 되어 있으면 서로 다른 변수끼리 비교하는 것이 편리
    * 시가총액이 비슷한 회사의 주식들의 등락폭
* Feature Scaling 잘 되어 있으면
    * Feature Scaling 없이 작동하는 알고리즘에서 더 빨리 작동
    * 경사하강법, KNN, Clustering과 같은 거리 기반 알고리즘
    * ML 성능 향상
    * 일부 Feature Scaling은 이상치에 강점이 있음
        * Robust Scaling
* 트리 기반 모델
    * 정보 균일도를 기반으로 되어있기 때문에 트리 기반 모델은 feature scaling 필요 없음
    * 상대적인 크기에 영향을 받음
    * scaling해도 상대적 크기는 같음


### Scaling 방법

* 표준화(Z-score) : 평균을 빼주고 표준편차로 나눠줍니다. 
    * Standard Scaler
    * 평균을 0 표준편차를 1로 만들어 준다
    * fit에는 matrix를 넣어줘야함
    * Series가 아닌 DataFrame으로 넣어주기 위해 대괄호를 두 번 감싸서 데이터프레임으로 넣어주자.
    * 반환값도 matrix 형태이기 때문에 데이터프레임 형태로 파생변수를 만들어준다.
```python
std = StandardScaler()
train[["SalePrice_std"]] = std.fit_transform(train[["SalePrice"]])
```
* Min-Max : 0~1 사이값으로 만듭니다. 
```python
ms = MinMaxScaler()
train[["SalePrice_MinMax"]] = ms.fit_transform(train[["SalePrice"]])
```
* Robust : 중간값을 빼주고 IQR값으로 나눠줍니다. 
```python
rs = RobustScaler()
train[["SalePrice_Robust"]] = rs.fit_transform(train[["SalePrice"]])
```
    * 이상치에 덜 민감
    * 중앙값이 0



#### 💡 Scaling의 Fit

스케일링을 예시로 fit 은 계산하기 위한 평균, 중앙값, 표준편차가 필요하다면 해당 데이터를 기준으로 기술통계값을 구하고 
그 값을 기준으로 transform 에서 계산을 적용해서 값을 변환해 줍니다. 
fit 은 train 에만 사용하고 transform 은 train, test 에 사용합니다. 
fit 은 test 에 사용하지 않습니다. 왜냐하면 기준을 train으로 정하기 위해서 입니다.


### Transformation
* Feature Scaling이 잘 됐지만, 아직 표준정규분포 형태는 아님
* 표준정규분포 형태로 만들기 위해서, Log Transformation이 필요
    * log 함수가 x값에 대해  상대적으로 작은 스케일에서는 키우고, 
    * 큰 스케일에서는 줄여주는 효과
* Robust Scaling의 경우 이상치에 대해서 비교적 강점이 있으나
* 일반적으로 Feature Scaling은 편향된 분포나 이상치에 취약=
* 이미 잘 분포되어 있는 Feature의 경우에는 Transformation이 불필요할수도 있음
* 그러나 편향된 Feature의 경우 log가 적용된 값은 원래 값에 비해서 더 고르게 분포되어 있음.
* 고르게 분포되어있다는 것은, y값을 예측하는 데 더 유용하다는 것을 의미


### 이산화
* Discretisation
* 수치형 변수를 일정 기준으로 나누어 그룹화하는 것
* 우리의 사고방식과 부합하는 측면이 있어 직관적임
* 데이터 분석과 ML 모델에 유리
    * 유사한 예측 강도를 가진 유사 속성을 그룹화하여 모델 성능을 개선하는 데 도움이 됨
    * ML 알고리즘에 힌트를 줄 수도 있고
    * overfitting되지 않도록 도움을 줄 수도 있음
* pandas에서 Equal width binning, Equal frequency binning을 모두 메서드로 지원
    * pandas.cut
        * Equal length buckets
        * 동일한 길이로 나누기
    * pandas.qcut
        * Equal size buckets
        * 동일 개수로 나누기
```
💡 value_counts
 : value_counts(1)해주면 비율 구할 수 있음
```

### 인코딩
* 범주형 feature -> 수치형 feature
* 데이터 시각화에 유리
    * scatterplot이나 lineplot으로 나타내지 못함
* ML 모델에 유리
    * 선형회귀, 딥러닝 모델 등은 categorical feature 이용할 수 없음
    * categorical feature를 처리할 수 있다면, 인코딩 프로세스가 내부에 통합되어 있을 가능성 높음
* pandas를 이용한 인코딩
    * `.astype('category').cat.codes.value_counts()`
    * `pd.get_dummies`

참고 : <https://techblog-history-younghunjo1.tistory.com/99>

* Ordinal-Encoding
    * 직관적
    * 데이터에 추가적인 가치 더해주지 않는다는 단점
    * 크고 작은 게 의미가 있을 때는 상관없지만
    * 순서가 없는 데이터에 적용해 주게 되면 잘못된 해석을 할 수 있음


* One-Hot-Encoding
    * Categorical Feature를 다른 bool 변수(0 또는 1)로 대체하여 해당 관찰에 대해 특정 레이블이 참인지 여부를 나타냄
    * 해당 Feature의 모든 정보를 유지
    * 해당 Feature에 너무 많은 고유값이 있는 경우 Feature을 지나치게 많이 사용 -> 시간 오래 걸림

<br/>
  
#### 💡 pandas로 인코딩 했을 때 단점?
```
pandas.get_dummies는 train 데이터의 특성을 학습하지 않기 때문에 train 데이터에만 있고 test 데이터에는 없는 카테고리를 test 데이터에서 원핫인코딩 된 칼럼으로 바꿔주지 않습니다. sklearn.preprocessing.OneHotEncoder는 train데이터에만 있는 카테고리도 test 데이터에 적용해 줄 수 있습니다.

# pandas 의 get_dummies 를 사용해서 인코딩 하면 train, test 따로 인코딩을 하게 됩니다. 
# train 학습한 것을 기반으로 test 와 동일하게 피처를 생성해 주어야 하는데 이게 조금 다를 수 있습니다.
# 판다스로 train, test 각각 인코딩 했다면 피처의 수, 종류가 다를 수 있습니다. 
# 그런데! 학습, 예측을 할 때는 동일한 피처를 입력해 주어야 합니다. 개수도 동일해야 합니다. 
# pandas 로 인코딩 한다면 set(train.columns) - (test.columns) 이런식으로 비교해서 맞춰주어야 합니다. 
# 또, train 에만 등장하는 피처가 있다면 test 에도 동일하게 만들어 주어야 합니다. 
# 가장 간단한 것은 concat 을 사용하는 방법입니다. 없는 값은 nan 으로 들어가게 되고 다시 train, test 를 나눠주면 됩니다. (test에 등장하는 데이터를 피처로 사용하지 말라는 정책이 있을 때 제외)
```

<bt/>

#### 💡 범주형 데이터 처리

```
최근 부스팅3대장 알고리즘 중에는 범주형 데이터를 알아서 처리해 주는 알고리즘도 있지만 사이킷런에서는 범주형 데이터를 피처로 사용하기 위해서는 별도의 변환작업이 필요합니다.
부스팅3대장 => Xgboost, LightGBM, catBoost
```


### 파생변수
* 이미 존재하는 변수로부터 여러가지 방법을 이용하여 새로운 변수를 만들어냄
* 파생변수 생성으로 인해 데이터 해석이 편리해지고 ML 성능이 올라갈 수도 있지만 오히려 떨어지는 경우도 많음
* 다항식 전개 (Polynomial Expansion)
    * 주어진 다항식의 차수 값에 기반하여 파생변수를 생성할 수 있음<br/>
  
#### 🤔 왜 유용?
  * 데이터를 분석할 때 다항식 전개에 기반한 파생변수 생성 방법은 다소 유용하지 않을 수 있음
      * 다항식 전개에 기반한 변수보다 원래 변수를 보는 게 더 직관적이고 이해하기 쉽기 때문
  * 그러나 머신러닝 모델을 이용할 때 이것이 유용할 수 있음 <br/>

#### 🤔 머신러닝 모델 이용시 왜 유용?
* 머신러닝 모델은 label에 대해서 설명력이 높은 한 두가지 Feature에 의지할 때보다 여러가지 Feature에 기반할 때 성능이 더 뛰어나기 때문
    * 소수의 Feature에 기반하게 되면 과대적합이 일어날 확률이 높아짐


#### 💡 Polynomial Expansion

두 변수간 관계가 선형 비선형이기 때문에 다항식 전개를 사용하는 것이 아니라 더 다양한 피처를 생성하고 성능을 올리기 위해서 다항식 전개 기법을 사용하여 파생 변수를 생성하는 것!


<!-- ## 💻 실습 예제 코드 -->



### 다음 포스트에서 만나요 🙌

[💻 실습 예제 코드]는 추후 작성할 예정이다.


<!-- ### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾 -->
