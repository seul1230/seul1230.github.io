---
layout: post
title:  "2022_likelion TIL"
date:   2022-11-23 14:00:09 +0900
categories: Python_DataAnalysis
---
# [ 1123 ] Kaggle - Benz Boosting Model
## 👩🏻‍💻 오늘코드 실시간 강의 _ 박조은님
오늘도 화이팅 :)

오늘도 **[[ Kaggle ] Mercedes-Benz Greener Manufacturing](https://www.kaggle.com/competitions/mercedes-benz-greener-manufacturing/submissions)** 데이터를 가지고 실습을 진행하였다. 해당 포스트는 부스팅 모델 3대장 XGBoost, LightGBM, CatBoost를 적용한 내용에 대해 작성할 예정이다.

![](/assets/img/img_221124/kaggle_benz.png){: .center }

출처 : [Mercedes-Benz Greener Manufacturing](https://www.kaggle.com/competitions/mercedes-benz-greener-manufacturing/overview)

<!-- 📙 이번 포스트에서는 **이론 및 개념**을 중심적으로 다룰 예정이다. -->

<br/>

***


## 📙 이론 및 개념 

<!-- ### 1. Bagging과 Boosting
#### Bagging
* Bootstrap Agreggating의 약자
* 데이터에서 중복을 허용하여 원 데이터셋과 같은 크기의 데이터셋을 만드는 과정을 말한다.
* 모든 트리들을 동일한 데이터셋으로만 훈련시키게 되면, 트리들의 상관성(correlation)은 굉장히 커질 것이다. 
* 따라서 배깅은 서로 다른 데이터셋들에 대해 훈련 시킴으로써, 트리들을 비상관화시켜 준다.
```
1. 부트스트랩 방법을 통해 T개의 훈련 데이터셋을 생성한다.
2. T개의 기초 분류기(트리)들을 훈련시킨다.
3. 트리들을 하나의 분류기로 결합한다. (RandomForest)
```

#### Boosting
  * 여러 얕은 트리를 연결하여 편향과 분산을 줄여서 강력한 트리를 생성
  * 이전 트리에서 틀렸던 부분에 가중치를 주며 지속적으로 학습해 나간다.

#### 💡 Bagging과 Boosting
* **Bagging** : **<font color='red'>overfitting</font>** 문제에 적합
* **Boosting** : **<font color='red'>개별 트리 성능</font>** 이 중요할 때 주로 사용

### 2. 선형 회귀 <font color='lightgray'>Linear Regression</font>

1. 다른 모델에 비해 원리가 간단하다
2. 학습 속도가 매우 빠르다
3. 조정해 줄 파라미터가 적다
4. 이상치에 영향을 크게 받는다.
5. 데이터가 수치형 변수로만 이루어져있을 경우, 데이터의 경향성이 뚜렷할 경우, 사용하기에 좋다.

#### 선형 회귀 모델의 단점을 보완한 모델
* Ridge
* Lasso
* ElasticNet


### 3. Bagging

#### ✅ RandomForest



#### ✅ Extra Tree
![](/assets/img/img_221124/extratree.png){: .center width="80%"}
* 극도로 Randomized된 모델
* Random Forest와 같이 후보 기능의 무작위 하위 집합이 사용됨
* 가장 차별적인 임계값을 찾는 대신 각 후보 기능에 대해 임계값이 무작위로 그려짐
* 무작위로 생성된 임계값 중 가장 좋은 것이 분할 규칙으로 선탁됨
* 일반적으로 더 큰 편향 증가를 희생시키면서 모델의 분산을 조금 더 줄일 수 있음!


### 4. Boosting

#### ✅ GBM (Gradient Boosting Machine)
* 회귀 / 분류 분석 수행 가능
* 예측 모형의 앙상블 방법론 중 부스팅 계열에 속함
* 머신러닝 알고리즘 중에서도 가장 예측 성능이 높다고 알려짐
* 계산량이 상당히 많이 필요하기 때문에 => 하드웨어 효율적으로 구현하는 것이 중요
* Residual fitting
* 구현한 대표적 라이브러리 : Xgboost, Catboost, LightGBM 등
```
1. Random Forest와 다르게 무작위성이 없다.
2. 매개변수를 잘 조정해야 하고 훈련 시간이 길다.
3. 데이터의 scale에 구애받지 않는다.
4. 고차원의 희소한 데이터에 잘 작동하지 않는다.
```

#### ✅ XGBoost 
* Extreme Gradient Boosting
* 모든 가능한 트리를 나열하여 최적의 트리를 찾는 것이 거의 불가능
* 2차 근사식을 바탕으로 한 손실함수를 토대로 매 iteration마다 하나의 leaf로부터 가지를 늘려나가는 것이 효율적
* 손실함수가 최대한 감소하도록 하는 분할점을 찾는 것이 목표
* 너비 우선 탐색처럼 넓게 트리를 형성
* eval_metrics
    * rmse, mae, logloss, error, merror, mlogloss, auc, map


#### 주요 매개변수 👇
  * **learning_rate** : 높을수록 과적합되기 쉬움
  * **n_estimators** : 생성할 weaker learner 수. learning_rate가 높을 땐 n_estimators를 높여야 과적합 방지
      * 너무 낮으면 underfitting
      * 너무 높으면 overfitting
  * **gamma** : leaf 노드의 추가 분할을 결정할 최소 손실 감소값.
      * 해당값보다 손실이 크게 감소할 때 분리
      * 값이 높을수록 과적합 방지
  * **min_child_weight** : 관측치에 대한 가중치 합의 최소
      * 값이 높을수록 과적합 방지 -->

## 1. Gradient Boosting Model
* **XGBoost**
    * learning_rate 낮추면 n_estimators 높여주기
    * gamma 높여서 과적합 방지
    * xgb tree 그리기
        * xgb.plot_tree
    * xgb 피처 중요도 그리기
        * xgb.plot_importance
* **lightGBM**
    * boosting type
        * goss / efb
    * lgbm tree 그리기
        * lgbm.plot_tree
            * show_info : split_gain, interval_value, internal_count, leaf_count
    * lgbm 피처 중요도 그리기
        * lgbm.plot_importance
* **CatBoost**
    * grow_policy
        * SymmetricTree - 대칭트리
        * Lossguide - 리프별
        * Depthwise - 깊이별
    * randomized_research
        * 주어진 parater에서 best parameter 조합 찾아내기
        * 해당 결과를 데이터프레임으로 나타내서 시각화하기
        * `pd.DataFrame({"train-R2-mean": df_result.loc["train-R2-mean"], "test-R2-mean" :  df_result.loc["test-R2-mean"] }).plot()`
    * 🤔 cat_features를 지정해서 실습하는 이유?
        * 전처리 / 인코딩 없이 쉽게 모델을 학습시키기 위해서

## 2. 범주형 데이터 다루기
범주형 데이터를 전처리 하지 않고 category type으로 data type만 바꿔주면 알아서 학습한다.

```python
train[cat_col] = train[cat_col].astype("category")
test[cat_col] = test[cat_col].astype("category")
```



## 3. 불균형 데이터
* 생산과정 양불여부
    * 95% 확률로 정상 제품을, 5% 확률로 불량품을 만들어내는 공장
* 암환자 여부
* 은행대출여부 판단
* 신용카드 사기
* 게임, 광고 어뷰징
* 지진, 해일, 재난 예측

## 4. Confusion Matrix (혼동 행렬)

![](/assets/img/img_221124/confusion_matrix.png){: .center width="60%"}
- **TN(True Negative, Negative Negative)**: 실제는 Negative인데, Negative로 예측함.
    - Negative가 맞아! ⇒  아닌 것을 올바르게 틀리다고 예측함
- **FP(False Positive, Negative Positive)**: 실제는 Negative인데, Positive로 예측함.
    - Positive가 아니야! ⇒ 아닌 것을 올바르지 않게 맞다고 예측함
- **FN(False Negative, Positive Negative)**: 실제는 Positive인데, Negative로 예측함.
    - Negative가 아니야! ⇒ 맞는 것을 올바르지 않게 틀리다고 예측함
- **TP(True Positive, Positive Positive)**: 실제는 Positive인데, Positive로 예측함.
    - Positive가 맞아! ⇒ 맞는 것을 올바르게 맞다고 예측함

## 5. 분류 모델의 평가 방법 : Accuracy

### Accuracy
- 예측 결과 전체 건수 중 실제 값을 올바르게 예측한 비율을 나타낸다.
- 따라서 정확도는 0에서 1사이의 값을 가진다.
- 다음 코드를 이용해 정확도를 계산할 수 있음
```python
from sklearn.metrics import accuracy_score
accuracy_score(df.y, pred)
```

### Example

|실제값 / 예측값|일반환자|암환자|
|:---:|:---:|:---:|
|일반환자|90|1|
|암환자|7|2|

암환자를 예측하는 분류 시스템이 있다고 하자. 해당 분류기로 **100명**의 환자의 암여부를 판단했다고 했을 때의 결과가 위와 같을 때 정확도는 얼마나 될까?

➡️ **정확도**는 ( 2 + 90 ) / ( 2 + 7 + 1 + 90 ) X  100 = **<font color='darkred'>92 (%)</font>**

92 %의 정확도로 굉장히 높은 정확도를 보여주지만,
**암환자**만 분리해서 생각하면 2 + 7 = **9 (명)** 의 암환자 중 **2명**만 맞게 예측한 것이므로 모델 전체의 정확도는 높지만 **<mark style='background-color: #fff5b1'>정작 필요했던 암환자 예측 성능</mark>**은 2 / 9 X 100 = **<font color='red'>약 22 (%)</font>**로 매우 낮음을 알 수 있다.

#### ➡️ 다른 평가 방법이 필요하다 !




## 6. 제안된 다른 평가 방법
### ✅ Precision
![](/assets/img/img_221124/precision.png){: .center width="40%"}

* 정밀도
* **<mark style='background-color: #fff5b1'>예측값</mark>** 중에 얼마나 맞았는지
  * **예측을 Positive로 한 대상 중 예측값**과 **실제값이 Positive로 일치**한 데이터의 비율
* **Positive 예측 성능**을 더욱 정밀하게 측정하기 위한 평가 지표 <br/>
 ➡️ 정밀도는 FP를 낮추는 데 초점을 맞춤
* 1종 오류
  * 실제 Negative 데이터 예측을 Positive 양성으로 잘못 판단하게 되면 업무상 큰 영향이 발생하는 경우
```python
from sklearn.metrics import precision_score
precision_score(y_test, y_pred)
```


### ✅ Recall
![](/assets/img/img_221124/recall.png){: .center width="40%"}

* 재현도
* **<mark style='background-color: #fff5b1'>실제값</mark>** 중에 얼마나 맞았는지
  * 재현도(민감도)는 현실에서 Negative일 때 예측이 어떻게 이루어지는지에 대한 정보는 제공하지 않음.
* 2종 오류
```python
from sklearn.metrics import recall_score
recall_score(df.y, pred)
```


### ✅ F1 Score

* **1종 오류 <font color='lightgray'>FP</font>**
    * 실제는 Negative인데 Positive로 예측
    * 임신이 아닌데, 임신으로 예측
    * 무고한 피고인에게 유죄 선고
    * 스팸메일이 아닌데 스팸메일로 예측
* **2종 오류 <font color='lightgray'>FN</font>**
    * 실제는 Positive인데 Negative로 예측
    * 임신인데, 임신이 아닌 것으로 예측
    * 화재가 났는데 화재가 아니라고 예측

## 💡 예프리, 실리콜
이렇게 외우면 precision과 recall을 덜 헷갈리게 외울 수 있다!





<br/>

***

## 💻 실습 예제 코드
### : 🛞 Benz Boosting Model

#### 1. XGBoost

```python
# xgboost는 gradient boosting tree(GBT)의 병렬 학습을 구현한 라이브러리입니다.
import xgboost as xgb

model_xgb = xgb.XGBRegressor(random_state = 42, n_jobs = -1,
                             learning_rate = 0.05, n_estimators = 200, gamma = 10)
# fit
model_xgb.fit(X_train, y_train)
```

```python
xgb.plot_importance(model_xgb);
```

```python
xgb.plot_tree(model_xgb, num_trees=1)
fig = plt.gcf()
fig.set_size_inches(30, 20)
```
![](/assets/img/img_221124/xgb.png){: .center width="80%"}


```python
score_xgb = model_xgb.score(X_valid, y_valid)
score_xgb = round(score_xgb, 5)
```

```python
y_pred_xgb = model_xgb.predict(X_test)
y_pred_xgb
```



#### 2. Light GBM

```python
# lightgbm 
import lightgbm as lgbm
model_lgbm = lgbm.LGBMRegressor(random_state = 42, n_jobs = -1,
                                learning_rate = 0.01, n_estimators = 400)
# fit
model_lgbm.fit(X_train, y_train)
```

```python
lgbm.plot_importance(model_lgbm)
```

```python
lgbm.plot_tree(model_lgbm, figsize=(20, 20), tree_index=0, 
               show_info=['split_gain', 'internal_value', 'internal_count', 'leaf_count'])
```
![](/assets/img/img_221124/lgbm.png){: .center width="90%"}

```python
score_lgbm = model_lgbm.score(X_valid, y_valid)
score_lgbm = round(score_lgbm, 5)
```

```python
# predict
y_pred_lgbm = model_lgbm.predict(X_test)
y_pred_lgbm
```

#### 3. CatBoost

```python
# catboost
# eval_metric='R2'
from catboost import CatBoostRegressor
model_cat = CatBoostRegressor(
            eval_metric = 'R2',
            verbose = False,
            random_state=42
    )
```
```python
# SymmetricTree - 대칭트리
# Lossguide - 리프별 
# Depthwise - 깊이별
from scipy.stats import randint
from sklearn.utils.fixes import loguniform

param_grid = {
    'n_estimators': randint(100, 300),
    'depth': randint(1, 5),
    'learning_rate': loguniform(1e-3, 0.1),
    'min_child_samples': randint(10, 40),
    'grow_policy': ['SymmetricTree', 'Lossguide', 'Depthwise']
}
```
```python
# randomized_search
result = model_cat.randomized_search(param_grid, X_train, y_train, cv=3, n_iter=10)
result
```
```python
df_result = pd.DataFrame(result)
df_result = df_result.loc[["train-R2-mean", "test-R2-mean"], "cv_results"]
df_result
```
```python
pd.DataFrame({"train-R2-mean": df_result.loc["train-R2-mean"], 
              "test-R2-mean" :  df_result.loc["test-R2-mean"] }).tail(3)
```
```python
pd.DataFrame({"train-R2-mean": df_result.loc["train-R2-mean"]
              "test-R2-mean" :  df_result.loc["test-R2-mean"] }).plot()
```
![](/assets/img/img_221124/r2_mean_all.png){: .center width="60%"}

```python
pd.DataFrame({"train-R2-mean": df_result.loc["train-R2-mean"], 
              "test-R2-mean" :  df_result.loc["test-R2-mean"] }).tail(50).plot()
```
![](/assets/img/img_221124/r2_mean_tail.png){: .center width="60%"}

```python
# fit
model_cat.fit(X_train, y_train)

# valid score
score_cat = model_cat.score(X_valid, y_valid)
score_cat = round(score_cat, 5)

# predict
y_pred = model_cat.predict(X_test)
```


### 다음 포스트에서 만나요 🙌


<br/>

***

## 참고 <br/>

### 🤔 learning rate와 n_estimator?
learning_rate를 줄인다면 가중치 갱신의 변동폭이 감소해서, 여러 학습기들의 결정 경계(decision boundary) 차이가 줄어들게 된다.

n_estimators 를 늘린다면 생성하는 약한 모델(weak learner, tree)가 늘어나게 되고, 약한 모델이 많아진만큼 결정 경계(decision boundary)가 많아지면서 모델이 복잡해지게 된다. 

즉, 부스팅알고리즘에서 n_estimators와 learning_rate는 trade-off 관계입니다. n_estimators(또는 learning_rate)를 늘리고, learning_rate(또는 n_estimators)을 줄인다면 서로 효과가 상쇄된다.

### 🤔 Boosting 모델 시각화
배깅 모델은 시각화가 어려워 3rd party 도구를 따로 설치해야 시각화 가능합니다. 그것도 개별 트리를 시각화 하는 것은 어렵습니다. 그런데 부스팅 모델은 왜 시각화가 가능할까요?

=> 배깅모델은 병렬적으로 트리를 여러 개 생성합니다. 그런데 부스팅은 순차적으로 생성하기 때문입니다.


### 🤔 부스팅 모델은 왜 overfitting에 민감할까요?
이전 트리 (이전 학습) 가 다음 트리 (다음 학습) 에 영향을 주기 때문이다.

### ❗️ n_jobs
가끔 성능이 낮은 장비에서 n_jobs=-1로 사용하면 노트북이 dead kernel이 되는 현상이 나타난다. 성능이 낮은 장비이거나 다른 작업을 많이 진행하고 있다면 n_jobs = 1로 설정하면 좀 낫다.

### 🔥 데이터 분석가에게 ML기술질문으로 자주 등장하는 질문
- Cross Validation은 무엇이고 어떻게 해야하나요?
- 회귀 / 분류시 알맞은 metric은 무엇일까요?
- 알고 있는 metric에 대해 설명해주세요. (ex. RMSE, MAE, recall, precision …)
- 정규화를 왜 해야할까요? 정규화의 방법은 무엇이 있나요?
- Local Minima와 Global Minima에 대해 설명해주세요.
- 차원의 저주에 대해 설명해주세요
- dimension reduction기법으로 보통 어떤 것들이 있나요?


### 🤔 confusion matrix의 기준?
confusion matrix 가 책마다 블로그마다 위키마다 사이트마다 순서 가 다 다릅니다. 어떤 기준으로 봐야 할까요?

-> 사이킷런 기준으로 보는 게 덜 혼란스럽다.

### 자료

* **[멋사 7기 으쌰으쌰 복습] 5️⃣ 마이갓영운 5️⃣ 히려좋아**



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
