---
layout: post
title:  "2022_likelion TIL"
date:   2022-11-23 14:00:09 +0900
categories: Python_DataAnalysis
---
# [ 1123 ] Kaggle - Benz Boosting Model
#### ๐ฉ๐ปโ๐ป ์ค๋์ฝ๋ ์ค์๊ฐ ๊ฐ์ _ ๋ฐ์กฐ์๋
์ค๋๋ **[[ Kaggle ] Mercedes-Benz Greener Manufacturing](https://www.kaggle.com/competitions/mercedes-benz-greener-manufacturing/submissions)** ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ง๊ณ  ์ค์ต์ ์งํํ์๋ค. ํด๋น ํฌ์คํธ๋ ๋ถ์คํ ๋ชจ๋ธ 3๋์ฅ XGBoost, LightGBM, CatBoost๋ฅผ ์ ์ฉํ ๋ด์ฉ์ ๋ํด ์์ฑํ  ์์ ์ด๋ค.

![](/assets/img/img_221124/kaggle_benz.png){: .center }

์ถ์ฒ : [Mercedes-Benz Greener Manufacturing](https://www.kaggle.com/competitions/mercedes-benz-greener-manufacturing/overview)

<!-- ๐ ์ด๋ฒ ํฌ์คํธ์์๋ **์ด๋ก  ๋ฐ ๊ฐ๋**์ ์ค์ฌ์ ์ผ๋ก ๋ค๋ฃฐ ์์ ์ด๋ค. -->

<br/>

***


## ๐ ์ด๋ก  ๋ฐ ๊ฐ๋ 

<!-- ### 1. Bagging๊ณผ Boosting
#### Bagging
* Bootstrap Agreggating์ ์ฝ์
* ๋ฐ์ดํฐ์์ ์ค๋ณต์ ํ์ฉํ์ฌ ์ ๋ฐ์ดํฐ์๊ณผ ๊ฐ์ ํฌ๊ธฐ์ ๋ฐ์ดํฐ์์ ๋ง๋๋ ๊ณผ์ ์ ๋งํ๋ค.
* ๋ชจ๋  ํธ๋ฆฌ๋ค์ ๋์ผํ ๋ฐ์ดํฐ์์ผ๋ก๋ง ํ๋ จ์ํค๊ฒ ๋๋ฉด, ํธ๋ฆฌ๋ค์ ์๊ด์ฑ(correlation)์ ๊ต์ฅํ ์ปค์ง ๊ฒ์ด๋ค. 
* ๋ฐ๋ผ์ ๋ฐฐ๊น์ ์๋ก ๋ค๋ฅธ ๋ฐ์ดํฐ์๋ค์ ๋ํด ํ๋ จ ์ํด์ผ๋ก์จ, ํธ๋ฆฌ๋ค์ ๋น์๊ดํ์์ผ ์ค๋ค.
```
1. ๋ถํธ์คํธ๋ฉ ๋ฐฉ๋ฒ์ ํตํด T๊ฐ์ ํ๋ จ ๋ฐ์ดํฐ์์ ์์ฑํ๋ค.
2. T๊ฐ์ ๊ธฐ์ด ๋ถ๋ฅ๊ธฐ(ํธ๋ฆฌ)๋ค์ ํ๋ จ์ํจ๋ค.
3. ํธ๋ฆฌ๋ค์ ํ๋์ ๋ถ๋ฅ๊ธฐ๋ก ๊ฒฐํฉํ๋ค. (RandomForest)
```

#### Boosting
  * ์ฌ๋ฌ ์์ ํธ๋ฆฌ๋ฅผ ์ฐ๊ฒฐํ์ฌ ํธํฅ๊ณผ ๋ถ์ฐ์ ์ค์ฌ์ ๊ฐ๋ ฅํ ํธ๋ฆฌ๋ฅผ ์์ฑ
  * ์ด์  ํธ๋ฆฌ์์ ํ๋ ธ๋ ๋ถ๋ถ์ ๊ฐ์ค์น๋ฅผ ์ฃผ๋ฉฐ ์ง์์ ์ผ๋ก ํ์ตํด ๋๊ฐ๋ค.

#### ๐ก Bagging๊ณผ Boosting
* **Bagging** : **<font color='red'>overfitting</font>** ๋ฌธ์ ์ ์ ํฉ
* **Boosting** : **<font color='red'>๊ฐ๋ณ ํธ๋ฆฌ ์ฑ๋ฅ</font>** ์ด ์ค์ํ  ๋ ์ฃผ๋ก ์ฌ์ฉ

### 2. ์ ํ ํ๊ท <font color='lightgray'>Linear Regression</font>

1. ๋ค๋ฅธ ๋ชจ๋ธ์ ๋นํด ์๋ฆฌ๊ฐ ๊ฐ๋จํ๋ค
2. ํ์ต ์๋๊ฐ ๋งค์ฐ ๋น ๋ฅด๋ค
3. ์กฐ์ ํด ์ค ํ๋ผ๋ฏธํฐ๊ฐ ์ ๋ค
4. ์ด์์น์ ์ํฅ์ ํฌ๊ฒ ๋ฐ๋๋ค.
5. ๋ฐ์ดํฐ๊ฐ ์์นํ ๋ณ์๋ก๋ง ์ด๋ฃจ์ด์ ธ์์ ๊ฒฝ์ฐ, ๋ฐ์ดํฐ์ ๊ฒฝํฅ์ฑ์ด ๋๋ ทํ  ๊ฒฝ์ฐ, ์ฌ์ฉํ๊ธฐ์ ์ข๋ค.

#### ์ ํ ํ๊ท ๋ชจ๋ธ์ ๋จ์ ์ ๋ณด์ํ ๋ชจ๋ธ
* Ridge
* Lasso
* ElasticNet


### 3. Bagging

#### โ RandomForest



#### โ Extra Tree
![](/assets/img/img_221124/extratree.png){: .center width="80%"}
* ๊ทน๋๋ก Randomized๋ ๋ชจ๋ธ
* Random Forest์ ๊ฐ์ด ํ๋ณด ๊ธฐ๋ฅ์ ๋ฌด์์ ํ์ ์งํฉ์ด ์ฌ์ฉ๋จ
* ๊ฐ์ฅ ์ฐจ๋ณ์ ์ธ ์๊ณ๊ฐ์ ์ฐพ๋ ๋์  ๊ฐ ํ๋ณด ๊ธฐ๋ฅ์ ๋ํด ์๊ณ๊ฐ์ด ๋ฌด์์๋ก ๊ทธ๋ ค์ง
* ๋ฌด์์๋ก ์์ฑ๋ ์๊ณ๊ฐ ์ค ๊ฐ์ฅ ์ข์ ๊ฒ์ด ๋ถํ  ๊ท์น์ผ๋ก ์ ํ๋จ
* ์ผ๋ฐ์ ์ผ๋ก ๋ ํฐ ํธํฅ ์ฆ๊ฐ๋ฅผ ํฌ์์ํค๋ฉด์ ๋ชจ๋ธ์ ๋ถ์ฐ์ ์กฐ๊ธ ๋ ์ค์ผ ์ ์์!


### 4. Boosting

#### โ GBM (Gradient Boosting Machine)
* ํ๊ท / ๋ถ๋ฅ ๋ถ์ ์ํ ๊ฐ๋ฅ
* ์์ธก ๋ชจํ์ ์์๋ธ ๋ฐฉ๋ฒ๋ก  ์ค ๋ถ์คํ ๊ณ์ด์ ์ํจ
* ๋จธ์ ๋ฌ๋ ์๊ณ ๋ฆฌ์ฆ ์ค์์๋ ๊ฐ์ฅ ์์ธก ์ฑ๋ฅ์ด ๋๋ค๊ณ  ์๋ ค์ง
* ๊ณ์ฐ๋์ด ์๋นํ ๋ง์ด ํ์ํ๊ธฐ ๋๋ฌธ์ => ํ๋์จ์ด ํจ์จ์ ์ผ๋ก ๊ตฌํํ๋ ๊ฒ์ด ์ค์
* Residual fitting
* ๊ตฌํํ ๋ํ์  ๋ผ์ด๋ธ๋ฌ๋ฆฌ : Xgboost, Catboost, LightGBM ๋ฑ
```
1. Random Forest์ ๋ค๋ฅด๊ฒ ๋ฌด์์์ฑ์ด ์๋ค.
2. ๋งค๊ฐ๋ณ์๋ฅผ ์ ์กฐ์ ํด์ผ ํ๊ณ  ํ๋ จ ์๊ฐ์ด ๊ธธ๋ค.
3. ๋ฐ์ดํฐ์ scale์ ๊ตฌ์ ๋ฐ์ง ์๋๋ค.
4. ๊ณ ์ฐจ์์ ํฌ์ํ ๋ฐ์ดํฐ์ ์ ์๋ํ์ง ์๋๋ค.
```

#### โ XGBoost 
* Extreme Gradient Boosting
* ๋ชจ๋  ๊ฐ๋ฅํ ํธ๋ฆฌ๋ฅผ ๋์ดํ์ฌ ์ต์ ์ ํธ๋ฆฌ๋ฅผ ์ฐพ๋ ๊ฒ์ด ๊ฑฐ์ ๋ถ๊ฐ๋ฅ
* 2์ฐจ ๊ทผ์ฌ์์ ๋ฐํ์ผ๋ก ํ ์์คํจ์๋ฅผ ํ ๋๋ก ๋งค iteration๋ง๋ค ํ๋์ leaf๋ก๋ถํฐ ๊ฐ์ง๋ฅผ ๋๋ ค๋๊ฐ๋ ๊ฒ์ด ํจ์จ์ 
* ์์คํจ์๊ฐ ์ต๋ํ ๊ฐ์ํ๋๋ก ํ๋ ๋ถํ ์ ์ ์ฐพ๋ ๊ฒ์ด ๋ชฉํ
* ๋๋น ์ฐ์  ํ์์ฒ๋ผ ๋๊ฒ ํธ๋ฆฌ๋ฅผ ํ์ฑ
* eval_metrics
    * rmse, mae, logloss, error, merror, mlogloss, auc, map


#### ์ฃผ์ ๋งค๊ฐ๋ณ์ ๐
  * **learning_rate** : ๋์์๋ก ๊ณผ์ ํฉ๋๊ธฐ ์ฌ์
  * **n_estimators** : ์์ฑํ  weaker learner ์. learning_rate๊ฐ ๋์ ๋ n_estimators๋ฅผ ๋์ฌ์ผ ๊ณผ์ ํฉ ๋ฐฉ์ง
      * ๋๋ฌด ๋ฎ์ผ๋ฉด underfitting
      * ๋๋ฌด ๋์ผ๋ฉด overfitting
  * **gamma** : leaf ๋ธ๋์ ์ถ๊ฐ ๋ถํ ์ ๊ฒฐ์ ํ  ์ต์ ์์ค ๊ฐ์๊ฐ.
      * ํด๋น๊ฐ๋ณด๋ค ์์ค์ด ํฌ๊ฒ ๊ฐ์ํ  ๋ ๋ถ๋ฆฌ
      * ๊ฐ์ด ๋์์๋ก ๊ณผ์ ํฉ ๋ฐฉ์ง
  * **min_child_weight** : ๊ด์ธก์น์ ๋ํ ๊ฐ์ค์น ํฉ์ ์ต์
      * ๊ฐ์ด ๋์์๋ก ๊ณผ์ ํฉ ๋ฐฉ์ง -->

## 1. Gradient Boosting Model
* **XGBoost**
    * learning_rate ๋ฎ์ถ๋ฉด n_estimators ๋์ฌ์ฃผ๊ธฐ
    * gamma ๋์ฌ์ ๊ณผ์ ํฉ ๋ฐฉ์ง
    * xgb tree ๊ทธ๋ฆฌ๊ธฐ
        * xgb.plot_tree
    * xgb ํผ์ฒ ์ค์๋ ๊ทธ๋ฆฌ๊ธฐ
        * xgb.plot_importance
* **lightGBM**
    * boosting type
        * goss / efb
    * lgbm tree ๊ทธ๋ฆฌ๊ธฐ
        * lgbm.plot_tree
            * show_info : split_gain, interval_value, internal_count, leaf_count
    * lgbm ํผ์ฒ ์ค์๋ ๊ทธ๋ฆฌ๊ธฐ
        * lgbm.plot_importance
* **CatBoost**
    * grow_policy
        * SymmetricTree - ๋์นญํธ๋ฆฌ
        * Lossguide - ๋ฆฌํ๋ณ
        * Depthwise - ๊น์ด๋ณ
    * randomized_research
        * ์ฃผ์ด์ง parater์์ best parameter ์กฐํฉ ์ฐพ์๋ด๊ธฐ
        * ํด๋น ๊ฒฐ๊ณผ๋ฅผ ๋ฐ์ดํฐํ๋ ์์ผ๋ก ๋ํ๋ด์ ์๊ฐํํ๊ธฐ
        * `pd.DataFrame({"train-R2-mean": df_result.loc["train-R2-mean"], "test-R2-mean" :  df_result.loc["test-R2-mean"] }).plot()`
    * ๐ค cat_features๋ฅผ ์ง์ ํด์ ์ค์ตํ๋ ์ด์ ?
        * ์ ์ฒ๋ฆฌ / ์ธ์ฝ๋ฉ ์์ด ์ฝ๊ฒ ๋ชจ๋ธ์ ํ์ต์ํค๊ธฐ ์ํด์

## 2. ๋ฒ์ฃผํ ๋ฐ์ดํฐ ๋ค๋ฃจ๊ธฐ
๋ฒ์ฃผํ ๋ฐ์ดํฐ๋ฅผ ์ ์ฒ๋ฆฌ ํ์ง ์๊ณ  category type์ผ๋ก data type๋ง ๋ฐ๊ฟ์ฃผ๋ฉด ์์์ ํ์ตํ๋ค.

```python
train[cat_col] = train[cat_col].astype("category")
test[cat_col] = test[cat_col].astype("category")
```



## 3. ๋ถ๊ท ํ ๋ฐ์ดํฐ
* ์์ฐ๊ณผ์  ์๋ถ์ฌ๋ถ
    * 95% ํ๋ฅ ๋ก ์ ์ ์ ํ์, 5% ํ๋ฅ ๋ก ๋ถ๋ํ์ ๋ง๋ค์ด๋ด๋ ๊ณต์ฅ
* ์ํ์ ์ฌ๋ถ
* ์ํ๋์ถ์ฌ๋ถ ํ๋จ
* ์ ์ฉ์นด๋ ์ฌ๊ธฐ
* ๊ฒ์, ๊ด๊ณ  ์ด๋ทฐ์ง
* ์ง์ง, ํด์ผ, ์ฌ๋ ์์ธก

## 4. Confusion Matrix (ํผ๋ ํ๋ ฌ)

![](/assets/img/img_221124/confusion_matrix.png){: .center width="60%"}
- **TN(True Negative, Negative Negative)**: ์ค์ ๋ Negative์ธ๋ฐ, Negative๋ก ์์ธกํจ.
    - Negative๊ฐ ๋ง์! โ  ์๋ย ๊ฒ์ ์ฌ๋ฐ๋ฅด๊ฒ ํ๋ฆฌ๋ค๊ณ  ์์ธกํจ
- **FP(False Positive, Negative Positive)**: ์ค์ ๋ Negative์ธ๋ฐ, Positive๋ก ์์ธกํจ.
    - Positive๊ฐ ์๋์ผ! โ ์๋ย ๊ฒ์ ์ฌ๋ฐ๋ฅด์ง ์๊ฒ ๋ง๋ค๊ณ  ์์ธกํจ
- **FN(False Negative, Positive Negative)**: ์ค์ ๋ Positive์ธ๋ฐ, Negative๋ก ์์ธกํจ.
    - Negative๊ฐ ์๋์ผ! โ ๋ง๋ ๊ฒ์ ์ฌ๋ฐ๋ฅด์ง ์๊ฒ ํ๋ฆฌ๋ค๊ณ  ์์ธกํจ
- **TP(True Positive, Positive Positive)**: ์ค์ ๋ Positive์ธ๋ฐ, Positive๋ก ์์ธกํจ.
    - Positive๊ฐ ๋ง์! โ ๋ง๋ ๊ฒ์ ์ฌ๋ฐ๋ฅด๊ฒ ๋ง๋ค๊ณ  ์์ธกํจ

## 5. ๋ถ๋ฅ ๋ชจ๋ธ์ ํ๊ฐ ๋ฐฉ๋ฒ : Accuracy

### Accuracy
![](/assets/img/img_221124/accuracy.png){: .center width="80%"}

- ์์ธก ๊ฒฐ๊ณผ ์ ์ฒด ๊ฑด์ ์ค ์ค์  ๊ฐ์ ์ฌ๋ฐ๋ฅด๊ฒ ์์ธกํ ๋น์จ์ ๋ํ๋ธ๋ค.
- ๋ฐ๋ผ์ ์ ํ๋๋ 0์์ 1์ฌ์ด์ ๊ฐ์ ๊ฐ์ง๋ค.
- ๋ค์ ์ฝ๋๋ฅผ ์ด์ฉํด ์ ํ๋๋ฅผ ๊ณ์ฐํ  ์ ์์
```python
from sklearn.metrics import accuracy_score
accuracy_score(df.y, pred)
```

### Example

|์ค์ ๊ฐ / ์์ธก๊ฐ|์ผ๋ฐํ์|์ํ์|
|:---:|:---:|:---:|
|์ผ๋ฐํ์|90|1|
|์ํ์|7|2|

์ํ์๋ฅผ ์์ธกํ๋ ๋ถ๋ฅ ์์คํ์ด ์๋ค๊ณ  ํ์. ํด๋น ๋ถ๋ฅ๊ธฐ๋ก **100๋ช**์ ํ์์ ์์ฌ๋ถ๋ฅผ ํ๋จํ๋ค๊ณ  ํ์ ๋์ ๊ฒฐ๊ณผ๊ฐ ์์ ๊ฐ์ ๋ ์ ํ๋๋ ์ผ๋ง๋ ๋ ๊น?

โก๏ธ **์ ํ๋**๋ ( 2 + 90 ) / ( 2 + 7 + 1 + 90 ) X  100 = **<font color='darkred'>92 (%)</font>**

92 %์ ์ ํ๋๋ก ๊ต์ฅํ ๋์ ์ ํ๋๋ฅผ ๋ณด์ฌ์ฃผ์ง๋ง,
**์ํ์**๋ง ๋ถ๋ฆฌํด์ ์๊ฐํ๋ฉด 2 + 7 = **9 (๋ช)** ์ ์ํ์ ์ค **2๋ช**๋ง ๋ง๊ฒ ์์ธกํ ๊ฒ์ด๋ฏ๋ก ๋ชจ๋ธ ์ ์ฒด์ ์ ํ๋๋ ๋์ง๋ง **<mark style='background-color: #fff5b1'>์ ์ ํ์ํ๋ ์ํ์ ์์ธก ์ฑ๋ฅ</mark>**์ 2 / 9 X 100 = **<font color='red'>์ฝ 22 (%)</font>**๋ก ๋งค์ฐ ๋ฎ์์ ์ ์ ์๋ค.

#### โก๏ธ ๋ค๋ฅธ ํ๊ฐ ๋ฐฉ๋ฒ์ด ํ์ํ๋ค !




## 6. ์ ์๋ ๋ค๋ฅธ ํ๊ฐ ๋ฐฉ๋ฒ
### โ Precision
![](/assets/img/img_221124/precision.png){: .center width="40%"}

* ์ ๋ฐ๋
* **<mark style='background-color: #fff5b1'>์์ธก๊ฐ</mark>** ์ค์ ์ผ๋ง๋ ๋ง์๋์ง
  * **์์ธก์ Positive๋ก ํ ๋์ ์ค ์์ธก๊ฐ**๊ณผ **์ค์ ๊ฐ์ด Positive๋ก ์ผ์น**ํ ๋ฐ์ดํฐ์ ๋น์จ
* **Positive ์์ธก ์ฑ๋ฅ**์ ๋์ฑ ์ ๋ฐํ๊ฒ ์ธก์ ํ๊ธฐ ์ํ ํ๊ฐ ์งํ <br/>
 โก๏ธ ์ ๋ฐ๋๋ FP๋ฅผ ๋ฎ์ถ๋ ๋ฐ ์ด์ ์ ๋ง์ถค
* 1์ข ์ค๋ฅ
  * ์ค์  Negative ๋ฐ์ดํฐ ์์ธก์ Positive ์์ฑ์ผ๋ก ์๋ชป ํ๋จํ๊ฒ ๋๋ฉด ์๋ฌด์ ํฐ ์ํฅ์ด ๋ฐ์ํ๋ ๊ฒฝ์ฐ
```python
from sklearn.metrics import precision_score
precision_score(y_test, y_pred)
```


### โ Recall
![](/assets/img/img_221124/recall.png){: .center width="40%"}

* ์ฌํ๋
* **<mark style='background-color: #fff5b1'>์ค์ ๊ฐ</mark>** ์ค์ ์ผ๋ง๋ ๋ง์๋์ง
  * ์ฌํ๋(๋ฏผ๊ฐ๋)๋ ํ์ค์์ Negative์ผ ๋ ์์ธก์ด ์ด๋ป๊ฒ ์ด๋ฃจ์ด์ง๋์ง์ ๋ํ ์ ๋ณด๋ ์ ๊ณตํ์ง ์์.
* 2์ข ์ค๋ฅ
```python
from sklearn.metrics import recall_score
recall_score(df.y, pred)
```


### โ F1 Score

* **1์ข ์ค๋ฅ <font color='lightgray'>FP</font>**
    * ์ค์ ๋ Negative์ธ๋ฐ Positive๋ก ์์ธก
    * ์์ ์ด ์๋๋ฐ, ์์ ์ผ๋ก ์์ธก
    * ๋ฌด๊ณ ํ ํผ๊ณ ์ธ์๊ฒ ์ ์ฃ ์ ๊ณ 
    * ์คํธ๋ฉ์ผ์ด ์๋๋ฐ ์คํธ๋ฉ์ผ๋ก ์์ธก
* **2์ข ์ค๋ฅ <font color='lightgray'>FN</font>**
    * ์ค์ ๋ Positive์ธ๋ฐ Negative๋ก ์์ธก
    * ์์ ์ธ๋ฐ, ์์ ์ด ์๋ ๊ฒ์ผ๋ก ์์ธก
    * ํ์ฌ๊ฐ ๋ฌ๋๋ฐ ํ์ฌ๊ฐ ์๋๋ผ๊ณ  ์์ธก

## ๐ก ์ํ๋ฆฌ, ์ค๋ฆฌ์ฝ
์ด๋ ๊ฒ ์ธ์ฐ๋ฉด precision๊ณผ recall์ ๋ ํท๊ฐ๋ฆฌ๊ฒ ์ธ์ธ ์ ์๋ค!





<br/>

***

## ๐ป ์ค์ต ์์  ์ฝ๋
### : ๐ Benz Boosting Model

#### 1. XGBoost

```python
# xgboost๋ gradient boosting tree(GBT)์ ๋ณ๋ ฌ ํ์ต์ ๊ตฌํํ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์๋๋ค.
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
# SymmetricTree - ๋์นญํธ๋ฆฌ
# Lossguide - ๋ฆฌํ๋ณ 
# Depthwise - ๊น์ด๋ณ
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


### ๋ค์ ํฌ์คํธ์์ ๋ง๋์ ๐


<br/>

***

## ์ฐธ๊ณ  <br/>

### ๐ค learning rate์ n_estimator?
learning_rate๋ฅผ ์ค์ธ๋ค๋ฉด ๊ฐ์ค์น ๊ฐฑ์ ์ ๋ณ๋ํญ์ด ๊ฐ์ํด์, ์ฌ๋ฌ ํ์ต๊ธฐ๋ค์ ๊ฒฐ์  ๊ฒฝ๊ณ(decision boundary) ์ฐจ์ด๊ฐ ์ค์ด๋ค๊ฒ ๋๋ค.

n_estimators ๋ฅผ ๋๋ฆฐ๋ค๋ฉด ์์ฑํ๋ ์ฝํ ๋ชจ๋ธ(weak learner, tree)๊ฐ ๋์ด๋๊ฒ ๋๊ณ , ์ฝํ ๋ชจ๋ธ์ด ๋ง์์ง๋งํผ ๊ฒฐ์  ๊ฒฝ๊ณ(decision boundary)๊ฐ ๋ง์์ง๋ฉด์ ๋ชจ๋ธ์ด ๋ณต์กํด์ง๊ฒ ๋๋ค. 

์ฆ, ๋ถ์คํ์๊ณ ๋ฆฌ์ฆ์์ n_estimators์ learning_rate๋ trade-off ๊ด๊ณ์๋๋ค. n_estimators(๋๋ learning_rate)๋ฅผ ๋๋ฆฌ๊ณ , learning_rate(๋๋ n_estimators)์ ์ค์ธ๋ค๋ฉด ์๋ก ํจ๊ณผ๊ฐ ์์๋๋ค.

### ๐ค Boosting ๋ชจ๋ธ ์๊ฐํ
๋ฐฐ๊น ๋ชจ๋ธ์ ์๊ฐํ๊ฐ ์ด๋ ค์ 3rd party ๋๊ตฌ๋ฅผ ๋ฐ๋ก ์ค์นํด์ผ ์๊ฐํ ๊ฐ๋ฅํฉ๋๋ค. ๊ทธ๊ฒ๋ ๊ฐ๋ณ ํธ๋ฆฌ๋ฅผ ์๊ฐํ ํ๋ ๊ฒ์ ์ด๋ ต์ต๋๋ค. ๊ทธ๋ฐ๋ฐ ๋ถ์คํ ๋ชจ๋ธ์ ์ ์๊ฐํ๊ฐ ๊ฐ๋ฅํ ๊น์?

=> ๋ฐฐ๊น๋ชจ๋ธ์ ๋ณ๋ ฌ์ ์ผ๋ก ํธ๋ฆฌ๋ฅผ ์ฌ๋ฌ ๊ฐ ์์ฑํฉ๋๋ค. ๊ทธ๋ฐ๋ฐ ๋ถ์คํ์ ์์ฐจ์ ์ผ๋ก ์์ฑํ๊ธฐ ๋๋ฌธ์๋๋ค.


### ๐ค ๋ถ์คํ ๋ชจ๋ธ์ ์ overfitting์ ๋ฏผ๊ฐํ ๊น์?
์ด์  ํธ๋ฆฌ (์ด์  ํ์ต) ๊ฐ ๋ค์ ํธ๋ฆฌ (๋ค์ ํ์ต) ์ ์ํฅ์ ์ฃผ๊ธฐ ๋๋ฌธ์ด๋ค.

### โ๏ธ n_jobs
๊ฐ๋ ์ฑ๋ฅ์ด ๋ฎ์ ์ฅ๋น์์ n_jobs=-1๋ก ์ฌ์ฉํ๋ฉด ๋ธํธ๋ถ์ด dead kernel์ด ๋๋ ํ์์ด ๋ํ๋๋ค. ์ฑ๋ฅ์ด ๋ฎ์ ์ฅ๋น์ด๊ฑฐ๋ ๋ค๋ฅธ ์์์ ๋ง์ด ์งํํ๊ณ  ์๋ค๋ฉด n_jobs = 1๋ก ์ค์ ํ๋ฉด ์ข ๋ซ๋ค.

### ๐ฅ ๋ฐ์ดํฐ ๋ถ์๊ฐ์๊ฒ ML๊ธฐ์ ์ง๋ฌธ์ผ๋ก ์์ฃผ ๋ฑ์ฅํ๋ ์ง๋ฌธ
- Cross Validation์ ๋ฌด์์ด๊ณ  ์ด๋ป๊ฒ ํด์ผํ๋์?
- ํ๊ท / ๋ถ๋ฅ์ ์๋ง์ metric์ ๋ฌด์์ผ๊น์?
- ์๊ณ  ์๋ metric์ ๋ํด ์ค๋ชํด์ฃผ์ธ์. (ex. RMSE, MAE, recall, precision โฆ)
- ์ ๊ทํ๋ฅผ ์ ํด์ผํ ๊น์? ์ ๊ทํ์ ๋ฐฉ๋ฒ์ ๋ฌด์์ด ์๋์?
- Local Minima์ Global Minima์ ๋ํด ์ค๋ชํด์ฃผ์ธ์.
- ์ฐจ์์ ์ ์ฃผ์ ๋ํด ์ค๋ชํด์ฃผ์ธ์
- dimension reduction๊ธฐ๋ฒ์ผ๋ก ๋ณดํต ์ด๋ค ๊ฒ๋ค์ด ์๋์?


### ๐ค confusion matrix์ ๊ธฐ์ค?
confusion matrix ๊ฐ ์ฑ๋ง๋ค ๋ธ๋ก๊ทธ๋ง๋ค ์ํค๋ง๋ค ์ฌ์ดํธ๋ง๋ค ์์ ๊ฐ ๋ค ๋ค๋ฆ๋๋ค. ์ด๋ค ๊ธฐ์ค์ผ๋ก ๋ด์ผ ํ ๊น์?

-> ์ฌ์ดํท๋ฐ ๊ธฐ์ค์ผ๋ก ๋ณด๋ ๊ฒ ๋ ํผ๋์ค๋ฝ๋ค.

### ์๋ฃ

* **[๋ฉ์ฌ 7๊ธฐ ์ผ์ฐ์ผ์ฐ ๋ณต์ต] 5๏ธโฃ ๋ง์ด๊ฐ์์ด 5๏ธโฃ ํ๋ ค์ข์**



<!-- ### ๐พใใ๐พ
### ๐พใใ๐พ
### ๐พใใ๐พ
### ๐พใใ๐พ
### ๐พใใ๐พ
### ๐พใใ๐พ 
<font color='dodgerblue'> ์์ ํ๋ </font>
<font color='lightgray'>Miss</font>
<mark style='background-color: #f1f8ff'> ์ฐํ ํ๋ </mark>
<mark style='background-color: #fff5b1'> ์ฐํ ๋ธ๋ </mark>
<mark style='background-color: #ffdce0'> ์ฐํ ๋นจ๊ฐ </mark>
<mark style='background-color: #dcffe4'> ์ฐํ ์ด๋ก </mark>
<mark style='background-color: #f5f0ff'> ์ฐํ ๋ณด๋ผ </mark>
<mark style='background-color: #f6f8fa'> ์ฐํ ํ์ </mark>
-->
