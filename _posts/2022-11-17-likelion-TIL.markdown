---
layout: post
title:  "2022_likelion TIL"
date:   2022-11-17 14:00:09 +0900
categories: Python_DataAnalysis
---
# [ 1116 ] Kaggle - Benz Manufacturing
#### ๐ฉ๐ปโ๐ป ์ค๋์ฝ๋ ์ค์๊ฐ ๊ฐ์ _ ๋ฐ์กฐ์๋
์ด๋ฒ ์๊ฐ์๋ Kaggle์์ ๋ง๊ฐ๋ Kaggle์ [**Mercedes-Benz Greener Manufacturing**](https://www.kaggle.com/c/mercedes-benz-greener-manufacturing) ๋ฐ์ดํฐ๋ฅผ ๋ฐํ์ผ๋ก ์ฝ๋๋ฅผ ์ง๋ณด์๋ค.

๐ ์ด๋ฒ ํฌ์คํธ์์๋ **์ด๋ก  ๋ฐ ๊ฐ๋**์ ์ค์ฌ์ ์ผ๋ก ๋ค๋ฃฐ ์์ ์ด๋ค.
<br/>

***

## ๐ 0801 Benz Linear Regression

Kaggle์ [Mercedes-Benz Greener Manufacturing](https://www.kaggle.com/c/mercedes-benz-greener-manufacturing)์ ๋ฐ์ดํฐ์์ ์ด์ฉํ์๋ค.

### 1. Hold-out-validation
* ์ ์ถํด ๋ณด๊ธฐ ์ ์ ์ด๋ ์ ๋์ ์ค์ฝ์ด๊ฐ ๋์ฌ์ง ํ์ธ
* ๐ cross_validation์ ๋นํด ์๋๊ฐ ๋น ๋ฅด๋ค.
* ๐ ์ ๋ขฐ๋๋ ๋จ์ด์ง๋ค.


### 2. ํ์ต - ๊ฒ์ฆ set ๋๋๊ธฐ
* train_test_split
* X_train, X_valid, y_train, y_valid

### 3. Linear Regression
* `from sklearn.linear_model import LinearRegression`
* regplot์ผ๋ก ์๊ฐํํด๋ณด๊ธฐ
```python
sns.regplot(x = y_valid, y = model_lr.predict(X_valid))
```

#### ๐ ์ฅ์ 
  * ๊ฐ๋จํ๊ณ  ์ดํดํ๊ธฐ ์ฝ๋ค. 
  * ์ ํํ๊ท์ ๋ง๋ ๋ฐ์ดํฐ์์ ์ฌ์ฉํ๋ค๋ฉด ์ข์ ์ฑ๋ฅ์ ๋ผ ์๋ ์๋ค.
  * ์ ํํ๊ท๋ณด๋ค ํธ๋ฆฌ ๊ณ์ด ๋ชจ๋ธ์ ์ฌ์ฉํ๋ฉด ๊ฐ์ dataset์์๋ ํจ์ฌ ๋ ๋์ ์ฑ๋ฅ์ ๋ณด์ฌ์ค๋ค.

#### ๐ ๋จ์ 
  * ์ค๋ช๋ ฅ์ด ๋จ์ด์ง๋ค.
  * ํ๊ท๋ชจ๋ธ์ ์ด์์น์ ๋ฏผ๊ฐํ๊ณ , ๋ค๋ฅธ ์์น ๋ฐ์ดํฐ์ ๋ํด ์ ์ฒ๋ฆฌ๊ฐ ๋ง์ด ํ์ํ๋ค.

### 4. Ordinal Encoding
* error ์์ ๋ ค๋ฉด
    * handle_unknown : โuse_encoded_valueโ
    * unknown_value ์ค์ ๊น์ง!

### 5. One-Hot-Encoding
* ์ํซ์ธ์ฝ๋ฉ์ ๋ฒ์ฃผํ ๋ณ์์!
* ๊ทธ ํ ์์น ๋ฐ์ดํฐ์ ํฉ์น๊ธฐ
    * concat
    * ์ธ๋ฑ์ค ๊ฐ์ด ๋ง์ง ์์ผ๋ฉด ์ ๋๋ก ๋ณํฉ๋์ง ์์์ ์์
    * ์ธ๋ฑ์ค ๋ง์ถฐ์ฃผ๊ธฐ

<br/>

***

## ๐ 0802 Benz tree model
### 1. ์ด์์น ์ ๊ฑฐ
* ํ๊ท๋ชจ๋ธ์ ์ด์์น์ ์ํฅ์ ํฌ๊ฒ ๋ฐ์ผ๋ฏ๋ก ์ ๊ฑฐํด์ฃผ์.
* y๊ฐ 200๋ณด๋ค ํฐ ๊ฐ ์ ๊ฑฐํด์ฃผ๊ธฐ

### 2. One-Hot-Encoding
* 0801 ํ์ผ๊ณผ ๋ค๋ฅด๊ฒ ์์นํ ๋ณ์ ๋ฒ์ฃผํ ๋ณ์๋ฅผ ๊ตฌ๋ถํ์ง ์๊ณ  ์งํ!

### 3. Extra Tree model
![](/assets/img/img_221116/extra_tree_model.png){: .center width="60%"}
* ๊ฐ์ฅ ์ฐจ๋ณ์ ์ธ ์๊ณ๊ฐ์ ์ฐพ๋ ๋์ 
* **๊ฐ ํ๋ณด ๊ธฐ๋ฅ์ ๋ํด ์๊ณ๊ฐ**์ด ๋ฌด์์๋ก ๊ทธ๋ ค์ง๊ณ 
* **๋ฌด์์๋ก ์์ฑ๋ ์๊ณ๊ฐ ์ค ๊ฐ์ฅ ์ข์ ๊ฒ**์ -> ๋ถํ  ๊ท์น์ผ๋ก!
    * ๋ถ๊ธฐ ์ง์ ์ ๋๋ค์ผ๋ก ์ ํํ๊ธฐ ๋๋ฌธ์ randomforest๋ณด๋ค ์๋๊ฐ ๋น ๋ฅด๊ณ  ๋ ๋ง์ ํน์ฑ์ ๊ณ ๋ คํ  ์ ์๋ค.
    * randomforest์ ๋์ผํ ์๋ฆฌ๋ฅผ ์ด์ฉํ๊ธฐ ๋๋ฌธ์ ๋ง์ ํน์ง์ ๊ณต์ ํ๋ค.
    * randomforest์ ๋น๊ตํ์ ๋ ์ฑ๋ฅ์ด ๋ฏธ์ธํ๊ฒ ์ฐ์์ ์์

### 4. Bagging๊ณผ Boosting
![](/assets/img/img_221116/bagging_boosting.png){: .center}
* ๋ฐฐ๊น
    * **ํ๋ จ์ธํธ**์์ **์ค๋ณต์ ํ์ฉ**ํด์ **์ํ๋ง**ํ์ฌ ์ฌ๋ฌ๊ฐ ๋ชจ๋ธ์ ํ๋ จ ํ๋ ์์๋ธ ๋ฐฉ์
    * ๊ฐ์ ํ๋ จ ์ํ์ ์ฌ๋ฌ ๊ฐ์ ๋ชจ๋ธ์ ๊ฑธ์ณ ์ฌ์ฉํด์ ๋ชจ๋  ๋ชจ๋ธ์ด ํ๋ จ์ ๋ง์น๋ฉด ์์๋ธ์ ๋ชจ๋  ์์ธก๊ธฐ์ ์์ธก์ ๋ชจ์์ ์๋ก์ด ์ํ์ ๋ํ ์์ธก์ ๋ง๋ค๊ฒ ๋ฉ๋๋ค. 
    * ๋ฐฐ๊น ๋ฐฉ์์ **๋ถํธ์คํธ๋ํ**์ ํด์ **ํธ๋ฆฌ๋ฅผ ๋ณ๋ ฌ์ **์ผ๋ก ์ฌ๋ฌ ๊ฐ ๋ง๋ค๊ธฐ ๋๋ฌธ์ **<mark style='background-color: #fff5b1'>์ค๋ฒํผํ ๋ฌธ์ </mark>์ ์ข ๋ ์ ํฉ**ํฉ๋๋ค.
* ๋ถ์คํ
    * ์ฌ๋ฌ ์์ ํธ๋ฆฌ๋ฅผ ์ฐ๊ฒฐํ๋ฉฐ **ํธํฅ๊ณผ ๋ถ์ฐ์ ์ค์ฌ** ๊ฐ๋ ฅํ ํธ๋ฆฌ๋ฅผ ์์ฑ
    * ์ฝํ **๋ชจ๋ธ์ ์ฌ๋ฌ๊ฐ ์ฐ๊ฒฐ**ํด์ **๊ฐํ ๋ชจ๋ธ**์ ๋ง๋ค์ด ๋ด๊ธฐ ์ํ ์์๋ธ ๋ฐฉ์์๋๋ค. ๋ถ์คํ์ ์์ด๋์ด๋ ์์ ๋ชจ๋ธ๋ค์ ๋ณด์ํด ๋๊ฐ๋ฉด์ ์ผ๋ จ์ ๋ชจ๋ธ๋ค์ ํ์ต์์ผ ๋๊ฐ๋ ๊ฒ์๋๋ค.
    * ๋ถ์คํ์์ ๋ํ์ ์ธ ๋ชจ๋ธ ์ค ํ๋๋ **์์ด๋ค**์๋๋ค. 
      * ์์๋ธ์ ์ด์ ๊น์ง์ ์ค์ฐจ๋ฅผ ๋ณด์ ํ๋๋ก ๋ชจ๋ธ์ ์์ฐจ์ ์ผ๋ก ์ถ๊ฐ
    * ์ต์ ํ๋ ๊ทธ๋๋์ธํธ ๋ถ์คํ ๊ตฌํ์ผ๋ก ๊ฐ์ฅ ์ ๋ชํ ๊ฒ์ด ์ง๋๋ฒ์ ๊ฐ์ฌ๋๊ป์ ์์์์ ์ธ๊ธํ์  XGBoost ์๋๋ค.
    * **<mark style='background-color: #fff5b1'>๊ฐ๋ณ ํธ๋ฆฌ์ ๋ฎ์ ์ฑ๋ฅ</mark>**์ด ๋ฌธ์ ์ผ ๋๋ **์ด์  ํธ๋ฆฌ์ ์ค์ฐจ๋ฅผ ๋ณด์**ํด ๊ฐ๋ฉด์ ๋ง๋ค๊ธฐ ๋๋ฌธ์ ๋ถ์คํ์ด ์ข ๋ ์ ํฉํฉ๋๋ค.

### 5. ๊ฒฝ์ฌํ๊ฐ๋ฒ
![](/assets/img/img_221116/gradient_descent.png){: .center}
* ๋ชฉ์ 
    * ์์คํจ์๊ฐ ๊ฐ์ฅ ์๊ณ , ์์ธก์ ์ ํ๋ ๋ชจ๋ธ์ ํ๋ผ๋ฏธํฐ๋ฅผ ์ฐพ๊ธฐ ์ํจ
* ์์ธก๊ฐ๊ณผ ์ ๋ต๊ฐ ์ฌ์ด์ ์์ค์ด ๊ฐ์ฅ ์์ ์ง์ ์ ์ฐพ๊ธฐ ์ํด์ ๊ธฐ์ธ๊ธฐ๊ฐ 0์ธ ์ง์ ์ ์ฐพ์๋ธ๋ค.
* ์ด ์ง์ ์ ์ฐพ๊ธฐ ์ํด ๊ฒฝ์ฌ๋ฅผ ์ ์  ๋ด๋ฆฌ๋ ๊ฒ์ ๊ฒฝ์ฌํ๊ฐ๋ฒ์ด๋ผ๊ณ  ํ๋ค.

* **learning rate**
    * ํ์ต๋ฅ ์ ์๋ฏธํ๋๋ฐ ๋ณดํญ์ด๋ผ๊ณ  ๋ฒ์ญํ๊ธฐ๋ ํจ
    * ๋ณดํญ์ด ๋๋ฌด ํฌ๋ฉด ๋์ถฉ ์ฐพ๊ธฐ ๋๋ฌธ์ ์ต์์ ์ ์ง๋์น๊ณ  ๋ฐ์ฐํ๊ธฐ๋ ํจ
![](/assets/img/img_221116/learning_rate.png){: .center}

### 6. GBM (Gradient Boosting Machine)
* ํ๊ท / ๋ถ๋ฅ ๋ถ์ ์ํํ  ์ ์๋ ์์ธก ๋ชจํ
* ์์ธก๋ชจํ์ ensemble ๋ฐฉ๋ฒ๋ก  ์ค ๋ถ์คํ ๊ณ์ด์ ์ํ๋ ์๊ณ ๋ฆฌ์ฆ
* ML ์๊ณ ๋ฆฌ์ฆ ์ค์์๋ ๊ฐ์ฅ ์์ธก ์ฑ๋ฅ์ด ๋๋ค๊ณ  ์๋ ค์ง ์๊ณ ๋ฆฌ์ฆ
* ๊ณ์ฐ๋์ด ๋ง์ด ํ์ํ๊ธฐ ๋๋ฌธ์, ํ๋์จ์ด ํจ์จ์ ์ผ๋ก ๊ตฌํํ๋ ๊ฒ์ด ์ค์

### 7. Gradient Boosting Tree
![](/assets/img/img_221116/gradient_boosting.png){: .center}
* GBT๋ผ๊ณ ๋ ๋ถ๋ฆ
* **๋ถ์คํ**์ด๋ผ๋ ์์๋ธ ๊ธฐ๋ฒ์ ์ด์ฉํด **๋ด๋ถ์ ์ผ๋ก ์ฌ๋ฌ ๋ชจ๋ธ์ ์์ฑ**ํ ํ ๋ชจ๋ธ๋ค์ **์ขํฉ**ํด ์ต์ข ๋ชจ๋ธ์ ์์ฑ
* **ํน์ง**
  * ๋๋คํฌ๋ ์คํธ์ ๋ค๋ฅด๊ฒ **๋ฌด์์์ฑ์ด ์๋ค**.
  * ๋งค๊ฐ๋ณ์ ์ ์กฐ์ ํด์ผํ๋ค.
  * **ํ๋ จ์๊ฐ**์ด ๊ธธ๋ค.
  * ๋ฐ์ดํฐ์ **scale**์ ๊ตฌ์ ๋ฐ์ง ์๋๋ค.
  * **๊ณ ์ฐจ์**์ **ํฌ์ํ ๋ฐ์ดํฐ**์ ์ ์๋ํ์ง ์๋๋ค.


### 8. XGBoost (Extreme Gradient Boosting)
![](/assets/img/img_221116/xgboost.png){: .center}

* ๋ชจ๋  ๊ฐ๋ฅํ ํธ๋ฆฌ๋ฅผ ๋์ดํ์ฌ ์ต์  ํธ๋ฆฌ ์ฐพ๋ ๊ฒ์ ๊ฑฐ์ ๋ถ๊ฐ๋ฅ
* 2์ฐจ ๊ทผ์ฌ์์ ๋ฐํ์ผ๋ก ํ ์์คํจ์๋ฅผ ํ ๋๋ก ๋งค iteration๋ง๋ค ํ๋์ leaf๋ก๋ถํฐ ๊ฐ์ง๋ฅผ ๋๋ ค๋๊ฐ๋ ๊ฒ์ด ํจ์จ์ 
* ์์ค ํจ์๊ฐ ์ต๋ํ ๊ฐ์ํ๋๋ก ํ๋ split point๋ฅผ ์ฐพ๋ ๊ฒ์ด ๋ชฉํ ๐ค 

#### ๐ ์ฅ์ 
  * GBM ๋๋น ๋น ๋ฅธ ์ํ ์๊ฐ (๋ณ๋ ฌ ์ฒ๋ฆฌ)
  * ๊ณผ์ ํฉ ๊ท์ 
  * ๋ถ๋ฅ / ํ๊ท์์ญ์์ ๋ฐ์ด๋ ์์ธก ์ฑ๋ฅ ๋ฐํ
  * Earlly Stopping ๊ธฐ๋ฅ์ด ์์
  * ๋ค์ํ hyper parameter ์ ๊ณต


#### ๐ ๋จ์ 
  * GBM๋ณด๋ค ๋น ๋ฅด์ง๋ง ์ฌ์ ํ ํ์ต ์๊ฐ์ ๋๋ฆผ
  * hyper parameter ํ๋ํ๊ฒ ๋๋ฉด ์๊ฐ์ด ๋ ์ค๋ ๊ฑธ๋ฆผ
  * overfitting ์ํ์ฑ
* ํด๋น ๋ชจ๋ธ ํ์ฉํ ํ์  ํฌ์คํธ + ๋ฏธ๋ํ์ 3 ์ฝ๋ ๋ฐ ๊ณผ์  ๋ค์ ์ฝ์ด๋ณด๊ธฐ

### 9. LightGBM
* Light Gradient Boosting Machine
* **GOSS(Gradient based One Side Sampling)**๊ณผ **EFB(Exclusive Feature Bundling)**์ ์ ์ฉ
    * **<mark style='background-color: #fff5b1'>GOSS ๊ธฐ๋ฐ ๋จ์ถ ์ํ๋ง</mark>**
        * ๋ฐ์ดํฐ์์ ํฐ Gradient๋ฅผ ๊ฐ์ง ๋ชจ๋  ์ธ์คํด์ค๋ฅผ ์ ์ง
        * ์์ Gradient๋ฅผ ๊ฐ์ง ์ธ์คํด์ค๋ฅผ ๋ฌด์์๋ก Sampling ์ํํจ
        * ๋ง์ด ํ๋ฆฐ ๋ฐ์ดํฐ ์์ฃผ๋ก ์ํ๋ง => ํ์ ์ค์
        * ๋๊ท๋ชจ ๋ฐ์ดํฐ ์ธ์คํด์ค๋ฅผ ๋ค๋ฃจ๊ธฐ ์ํ ๊ฒ
    * **<mark style='background-color: #fff5b1'>EFB ๋ฐฐํ์  ํน์ฑ ๋ฌถ์</mark>**
        * ๋๊ท๋ชจ Features ์๋ฅผ ๋ค๋ฃจ๊ธฐ ์ํ ๊ฒ
* XGBoost์ ๋น๊ตํด ์ ํ๋ ์ ์ง, ํ์ต ์๊ฐ์ ๋จ์ถ 

#### ๐ ์ฅ์ 
  * ๋ ๋น ๋ฅธ ํ๋ จ ์๋์ ๋ ๋์ ํจ์จ์ฑ
  * ์ ์ ๋ฉ๋ชจ๋ฆฌ ์ฌ์ฉ๋
  * ๋ ๋์ ์ ํ๋
  * ๋ณ๋ ฌ, ๋ถ์ฐ ๋ฐ GPU ํ์ต ์ง์
  * ๋๊ท๋ชจ ๋ฐ์ดํฐ ์ฒ๋ฆฌ


#### ๐ ๋จ์ 
  * overfitting์ ๋ฏผ๊ฐ
  * ์์ ๋ฐ์ดํฐ์ ๋ํด์ ๊ณผ์ ํฉ๋๊ธฐ ์ฌ์

<br/>

***

## ์ฐธ๊ณ 

### ๐ค ์ฌ์ดํท๋ฐ์ผ๋ก ์ธ์ฝ๋ฉํ ์ด์ ?
numpy์ pandas์ ๋ฐ์ดํฐ๋ฅผ ๋ค๋ฃจ๋ ์ฐ์ต์ ํด๋ณด๊ธฐ์ ์ข๋ค

### ๐ค GPU์ CPU
GPU๋ Graphics Processing Unit์ ์ฝ์๋ก ์ผ๋ฐ์ ์ผ๋ก ๊ทธ๋ํฝ ์นด๋๋ฅผ ์๋ฏธํฉ๋๋ค. ๋ฅ๋ฌ๋ ์๊ณ ๋ฆฌ์ฆ์ ๋ณธ์ง์ ์ผ๋ก ๊ต์ฅํ ๋ง์ ๋จ์ ์ฌ์น์ฐ์ฐ(ํ๋ ฌ ๊ณฑ์ ๋ฑ)์ ์ํํ๊ฒ ๋ฉ๋๋ค. ๋จ์ ์ฌ์น ์ฐ์ฐ์ ๋ณ๋ ฌํ๊ฐ ์์ฃผ ์ฝ๊ธฐ ๋๋ฌธ์, GPU๋ฅผ ํตํด ํ๊บผ๋ฒ์ ์ฌ๋ฌ ์ฝ์ด๋ฅผ ์ด์ฉํด ์ฐ์ฐ์ด ๊ฐ๋ฅํฉ๋๋ค.

CPU๋ ๊ณ์ฐ ๋ฅ๋ ฅ์ด ์ข์ง์๋์? ๋ผ๊ณ  ์๊ฐํ  ์ ์์ง๋ง, CPU์๋ ๋จ์ ์ฌ์น ์ฐ์ฐ์ ๋ด๋นํ  ์ ์๋ ์ฐ์ ๋ผ๋ฆฌ์ฐ์ฐ(ALU) ์ฅ์น๊ฐ 1๊ฐ์ด๋ฏ๋ก ๋ณต์กํ ๋จ์ผ ๊ณ์ฐ์์๋ GPU๋ณด๋ค๋ ์ ๋ฆฌํ์ง๋ง, ๋ณ๋ ฌ ์์์ ๋ถ๋ฆฌํ๋ฏ๋ก GPU๋ณด๋ค ๋ฅ๋ฌ๋์์ ์ฑ๋ฅ์ด ๋จ์ด์ง๊ฒ ๋ฉ๋๋ค.

โก๏ธ **CPU๋ณด๋ค ๋จ์ ๋ณ๋ ฌ ์ฐ์ฐ์ ์ฐ์ํ GPU๋ฅผ ๋ฅ๋ฌ๋์ ํ๋ฉด์ ํ์ต์ ์ฌ์ฉํ๊ฒ ๋ฉ๋๋ค!**


### ๐ค ์ฑ๋ฅ์ ๊ณ ๋ ค ์์ด GBM ์์ ํ๋ จ์๊ฐ์ ์ค์ด๋ ค๋ฉด ์ด๋ป๊ฒ ํ๋ฉด ์ข์๊น์?
learning_rate ๋ฅผ ์ฌ๋ฆฌ๋ฉด ํ์ต์๊ฐ์ ์ค์ด๋ค์ง๋ง ์ ๋๋ก ๋ loss(์์ค)๊ฐ 0์ด ๋๋ ์ง์ ์ ์ ๋๋ก ์ฐพ์ง ๋ชปํ  ์๋ ์๋ค.

### ๐ค absolute loss๋ณด๋ค squared loss๋ฅผ ๋ ๋ง์ด ์ฌ์ฉํ๋ ์ด์ ?
![](/assets/img/img_221116/absolute_squared_loss.png){: .center width="70%"}
**absolute loss**๋ ๊ธฐ์ธ๊ธฐ๊ฐ +, - ๋ฐฉํฅ์ ๋ฐ๋ผ ๊ฐ์ ๊ธฐ์ธ๊ธฐ๊ฐ ๋์ค๊ธฐ ๋๋ฌธ์ ๋ฐฉํฅ์ ์ ์ ์์ง๋ง ๊ธฐ์ธ๊ธฐ๊ฐ ๊ฐ์์ ๋ฏธ**๋ถ์ ํ์ ๋ ๋ฐฉํฅ์ ๋ฐ๋ผ ๊ฐ์ ๋ฏธ๋ถ๊ฐ์ด ๋์์ ๊ธฐ์ธ๊ธฐ๊ฐ ํฐ์ง, ์์์ง ๋น๊ต**ํ  ์ ์๋ค. ๊ทธ๋์ **squared loss** ๋ฅผ ๋ ๋ง์ด ์ฌ์ฉํ๋ค.

### ๐ค ์ ๋ถ์คํ ๊ณ์ด ๋ชจ๋ธ์ด ์ค์น๊ฐ ์ ๋๊ธฐ๋ ํ์ง๋ง ์ค์น์ ์คํจํ๋ ๊ฒฝ์ฐ๊ฐ ์๊ธธ๊น์?
๊ตฌ๋ํ๋ ค๋ฉด ๋ค๋ฅธ ์ธ์ด ํ๊ฒฝ์ด ํจ๊ป ํ์ํ ๊ฒฝ์ฐ๊ฐ ๋ง์ต๋๋ค. ๊ธฐ์กด์ ๋ค๋ฅธ ๋๊ตฌ๋ฅผ ์ค์นํ๋ค๊ฐ ํด๋น ์ธ์ด ํ๊ฒฝ ๋๊ตฌ๋ฅผ ์ค์นํด ๋จ๋ ๋ถ๋ค์ ๋น๊ต์  ์ ์ค์น๊ฐ ๋์ง๋ง, ์ฒ์ ์ค์นํ  ๋๋ ์คํจํ๋ ๊ฒฝ์ฐ๊ฐ ๋ง์ต๋๋ค.

conda ๋ ๋น๊ต์  ํจํค์ง์ด ์ ๋์ด ์์ด์ ๊ด๋ จ๋ ํ๊ฒฝ์ ์ ๊ตฌ์ฑํด ์ค๋๋ค. ๊ทธ๋์ ๋๋๋ก์ด๋ฉด conda ๋ก ์ค์นํด์ผ ์คํธ๋ ์ค๊ฐ ์ค์ด๋ญ๋๋ค.

<!-- ## ๐ป ์ค์ต ์์  ์ฝ๋ -->



### ๋ค์ ํฌ์คํธ์์ ๋ง๋์ ๐

[๐ป ์ค์ต ์์  ์ฝ๋]๋ ์ถํ ์์ฑํ  ์์ ์ด๋ค.


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
