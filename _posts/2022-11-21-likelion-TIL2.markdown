---
layout: post
title:  "2022_likelion TIL"
date:   2022-11-21 13:00:09 +0900
categories: SpecialLecture
---
# [ AI / ML ] ๋จธ์ ๋ฌ๋ - PCA (Principal Component Analysis) 
#### ๐ฉ๐ปโ๐ป K-MOOC ์ค์ต์ผ๋ก ๋ฐฐ์ฐ๋ ๋จธ์ ๋ฌ๋ ๊ฐ์
๐ ํด๋น ํฌ์คํธ๋ [K-MOOC ๊ฐ์](http://www.kmooc.kr/courses/course-v1:SSUk+SSMOOC20K+2022_T1/course/) ๋ด์ฉ๊ณผ ์ถ๊ฐ๋ก ๋ค๋ฅธ ์๋ฃ๋ค์ ์ฐพ์ ๋ด์ฉ์ ์์ฑํ์์ผ๋ฉฐ, **์ด๋ก  ๋ฐ ๊ฐ๋**์ ๋ํด ๊ณต๋ถํ๊ณ  **์์  ์ค์ต**๋ ์งํํ ํ ๋ด์ฉ์ ์ ๋ฆฌํ์๋ค.

**[[ AI ] ์ธ๊ณต์ง๋ฅ๊ณผ ๋จธ์ ๋ฌ๋, ๊ทธ๋ฆฌ๊ณ  ๋ฅ๋ฌ๋](https://seul1230.github.io/speciallecture/2022-11-21-likelion-TIL1/)**์ ๊ฐ์ ๋  ์์ฑ๋ ํฌ์คํธ์ด๋ค. 

<br/>


***

## ๋ชฉ์ฐจ
- [\[ AI / ML \] ๋จธ์ ๋ฌ๋ - PCA (Principal Component Analysis)](#-ai--ml--๋จธ์ ๋ฌ๋---pca-principal-component-analysis)
      - [๐ฉ๐ปโ๐ป K-MOOC ์ค์ต์ผ๋ก ๋ฐฐ์ฐ๋ ๋จธ์ ๋ฌ๋ ๊ฐ์](#-k-mooc-์ค์ต์ผ๋ก-๋ฐฐ์ฐ๋-๋จธ์ ๋ฌ๋-๊ฐ์)
  - [๋ชฉ์ฐจ](#๋ชฉ์ฐจ)
  - [1. ์ฃผ์ฑ๋ถ ๋ถ์ Principal Component Analysis](#1-์ฃผ์ฑ๋ถ-๋ถ์-principal-component-analysis)
      - [๋ฐ๋ผ์ PCA๋ ์ฃผ๋ก](#๋ฐ๋ผ์-pca๋-์ฃผ๋ก)
  - [2. PCA์ ์๋ฆฌ How It Works](#2-pca์-์๋ฆฌ-how-it-works)
  - [3. ๋ถ์ฐ์ ์ต๋๋ก ๋ณด์กดํ  ์ ์๋ ์ถ์ ์ ํํ๋ ์ด์ ?](#3-๋ถ์ฐ์-์ต๋๋ก-๋ณด์กดํ -์-์๋-์ถ์-์ ํํ๋-์ด์ )
  - [4. PCA ์ ์ฉ](#4-pca-์ ์ฉ)
      - [Step 1 : ๋ฐ์ดํฐ ์ ๊ทํ (๊ฐ ๋ณ์ ๊ฐ๋ค์ ํ๊ท  = 0)](#step-1--๋ฐ์ดํฐ-์ ๊ทํ-๊ฐ-๋ณ์-๊ฐ๋ค์-ํ๊ท --0)
      - [Step 2 : ์ต์ ํ ๋ฌธ์  ์ ์](#step-2--์ต์ ํ-๋ฌธ์ -์ ์)
      - [Step 3 : ์ต์ ํด ๋์ถ](#step-3--์ต์ ํด-๋์ถ)
      - [Step 4 : ๊ณ ์ ๋ฒกํฐ (eigenvector) ๋ค์ ๊ณ ์ ๊ฐ (eigenvalue) ๊ธฐ์ค์ผ๋ก ๋ด๋ฆผ์ฐจ์ ์ ๋ ฌ](#step-4--๊ณ ์ ๋ฒกํฐ-eigenvector-๋ค์-๊ณ ์ ๊ฐ-eigenvalue-๊ธฐ์ค์ผ๋ก-๋ด๋ฆผ์ฐจ์-์ ๋ ฌ)
      - [Step 5 : ๋ณ์ ์ถ์ถ์ ํตํ ๋ฐ์ดํฐ ๋ณํ](#step-5--๋ณ์-์ถ์ถ์-ํตํ-๋ฐ์ดํฐ-๋ณํ)
      - [Step 6 : ์ถ์ถ๋ ๋ณ์ ์ค ์ผ๋ถ๋ง์ ์ฌ์ฉํ์ฌ ๋ฐ์ดํฐ ์ญ๋ณํ](#step-6--์ถ์ถ๋-๋ณ์-์ค-์ผ๋ถ๋ง์-์ฌ์ฉํ์ฌ-๋ฐ์ดํฐ-์ญ๋ณํ)
  - [5. ๊ฒฐ๊ณผ ํ์ธ](#5-๊ฒฐ๊ณผ-ํ์ธ)
  - [๐ป ์ค์ต ์์  ์ฝ๋](#-์ค์ต-์์ -์ฝ๋)
  - [๋ง๋ฌด๋ฆฌํ๋ฉด์..](#๋ง๋ฌด๋ฆฌํ๋ฉด์)
    - [๋ค์ ํฌ์คํธ์์ ๋ง๋์ ๐](#๋ค์-ํฌ์คํธ์์-๋ง๋์-)
  - [์ฐธ๊ณ ](#์ฐธ๊ณ )

<br/>

***

## 1. ์ฃผ์ฑ๋ถ ๋ถ์ <font color='lightgray'>Principal Component Analysis</font>

์ฐจ์์ถ์(dimensionality reduction)์ ๋ณ์์ถ์ถ(feature extraction) ๊ธฐ๋ฒ์ผ๋ก ๋๋ฆฌ ์ฐ์ด๊ณ  ์๋ **<mark style='background-color: #fff5b1'>PCA (Principal Component Analysis)</mark>**์ ๋น์ง๋ํ์ต <font color = 'gray'>Unsupervised Learning</font>์์ 
์๋ฃ์ **์ค๋ณต๋ ์ ๋ณด๊ฐ ๋ง์ ๊ฒฝ์ฐ**, ์๋ฃ๊ฐ ๊ฐ๋ ์ฐจ์๋ณด๋ค **๋ ์์ ์์ ์ฐจ์์ผ๋ก๋** ์๋ฃ์ ๋ด์ฌํ ์ ๋ณด๋ฅผ ์ค๋ชํ  ์ ์์ ๊ฒ์ด๋ผ๋ ์์ด๋์ด์์ ์๊ฐ๋ ๊ฐ๋์ด๋ค. 

![](/assets/img/img_221121/pca.png){: .center width="80%"} 

* **์ฃผ์ฑ๋ถ์ด๋** 
  * ์ ์ฒด ๋ฐ์ดํฐ (๋๋ฆฝ๋ณ์)์ ๋ถ์ฐ์ ๊ฐ์ฅ ์ ์ค๋ชํ๋ ์ฑ๋ถ
* **๋ณ์์ ๊ฐ์ = ์ฐจ์์ ๊ฐ์** <br/>
  โ ์ฐจ์์ด ์ฆ๊ฐํ ์๋ก ๋ฐ์ดํฐ๊ฐ ํํํด์ผ ํ๋ ๊ณต๊ฐ์ ๋ณต์กํด์ง๋ค. <br/>



#### ๋ฐ๋ผ์ PCA๋ ์ฃผ๋ก
* ๋ณ์๊ฐ ๋๋ฌด ๋ง์ ๊ธฐ์กด ๋ณ์๋ฅผ ์กฐํฉํด ์๋ก์ด ๋ณ์๋ฅผ ๊ฐ์ง๊ณ  ๋ชจ๋ธ๋ง์ ํ๋ ค๊ณ  ํ๊ฑฐ๋
* **ํ๊ท ๋ถ์**๊ณผ ๊ฐ์ ์ข์๊ด๊ณ ๋ถ์์ ํ  ๋ **๋ค์ค ๊ณต์ฐ์ฑ <font color='gray'>multicollinearity</font>**์ ์์ ๊ธฐ ์ํด ์ฌ์ฉํ๋ค.

## 2. PCA์ ์๋ฆฌ <font color='lightgray'>How It Works</font>

๋ฐ์ดํฐ์ ์ฐจ์์ ์ถ์ํ  ๋ ๊ธฐ์กด์ ์ ๋ณด๊ฐ ์ต๋ํ ๋ณด์กด๋  ์ ์๋ ์๋ก์ด ์ถ์ ์ฐพ์์ผ ํ๋ค. ์ด๋ ๊ฒ ์ฐพ์ ์ถ์ Principle Component๋ผ๊ณ  ํ๋ฉฐ, ์ฃผ๋ก ์ค์ฌ์ PC๋ผ๊ณ  ๋ถ๋ฅธ๋ค. <br/><br/>

![](/assets/img/img_221121/pca_pc.gif){: .center width="100%"} <br/>


PC๋ฅผ ์ฐพ๊ธฐ ์ํด์๋ covaiance matrix(๊ณต๋ถ์ฐ ํ๋ ฌ) ์ eigen vector(๊ณ ์  ๋ฒกํฐ) ๊ฐ์ ์ฐพ์์ผ ํ๊ณ , ์ด ๊ฐ ์ค ๊ฐ์ฅ ํฐ ๊ฐ์ด ์ฐ๋ฆฌ๊ฐ ์ํ๋ PC ์ ๋ง์กฑํ๋ค๊ณ  ๋ณผ ์ ์๋ค. 

## 3. ๋ถ์ฐ์ ์ต๋๋ก ๋ณด์กดํ  ์ ์๋ ์ถ์ ์ ํํ๋ ์ด์ ?
![](/assets/img/img_221121/pca_variance.png){: .center width="80%"} <br/>

์์ ๊ทธ๋ฆผ์ฒ๋ผ ๊ฐ๋จํ 2์ฐจ์ ๋ฐ์ดํฐ์์ด ์์ ๋ c2์ ์ง์ ์ ์ ํํ๋ ๊ฒ์ด ๋ถ์ฐ์ ๊ฐ์ฅ ์ ๊ฒ ๋ํ๋ด๋ ๋ฐฉ๋ฒ์ธ๋ฐ, ์ด๋ ๊ฒ ๋๋ฉด ๋ฐ์ดํฐ๋ฅผ ์ ์คํ๊ธฐ๊ฐ ์ฌ์์ง๋ค.

๋ฐ๋ผ์, ๋ค๋ฅธ ๋ฐฉํฅ์ผ๋ก ํฌ์ํ๋ ๊ฒ ๋ณด๋ค ๋ถ์ฐ์ ์ต๋๋ก ๋ณด์กดํ  ์ ์๋ ์ถ์ ์ ํํ๋ ๊ฒ์ด ์ ๋ณด๋ฅผ ๊ฐ์ฅ ์ ๊ฒ ์์คํ  ์ ์๋ค๊ณ  ์๊ฐํ  ์ ์๋ค. ๋ถ์ฐ์ด ์ปค์ ธ์ผ ๋ฐ์ดํฐ๋ค์ฌ์ด์ ์ฐจ์ด์ ์ด ๋ชํํด์ง๊ณ , ๊ทธ๊ฒ์ด ๋ชจ๋ธ์ ๋์ฑ ์ข์ ๋ฐฉํฅ์ผ๋ก ๋ง๋ค ์ ์์ ๊ฒ์ด๊ธฐ ๋๋ฌธ์ด๋ค.

## 4. PCA ์ ์ฉ
#### Step 1 : ๋ฐ์ดํฐ ์ ๊ทํ (๊ฐ ๋ณ์ ๊ฐ๋ค์ ํ๊ท  = 0)
![](/assets/img/img_221121/pca_regularization.png){: .center width="80%"} <br/>

#### Step 2 : ์ต์ ํ ๋ฌธ์  ์ ์
* ๋ฐ์ดํฐ๋ฅผ ์ฌ์์ํจ ํ์ ๋ถ์ฐ์ ์ต๋ํํ๋ ์๋ก์ด ์ถ์ ์ฐพ๋ ๊ฒ์ด ๋ชฉํ!

![](/assets/img/img_221121/max_variance.png){: .center width="60%"} <br/>

#### Step 3 : ์ต์ ํด ๋์ถ

![](/assets/img/img_221121/Lagrangian.png){: .center width="80%"} <br/>

* Lagrangian multiplier๋ฅผ ์ฌ์ฉํ์ฌ ์ ์ฝ์์ ๋ชฉ์ ์์ ์ถ๊ฐํ ์ ๋ชฉ์ ์ ์์ฑ
* ์ ๋ชฉ์ ์์ ๋ฏธ๋ถํ์ฌ ๊ธฐ์ธ๊ธฐ๊ฐ 0์ด ๋๋ ์ ์์ ์ต์ ํด ๋ฐ์

#### Step 4 : ๊ณ ์ ๋ฒกํฐ (eigenvector) ๋ค์ ๊ณ ์ ๊ฐ (eigenvalue) ๊ธฐ์ค์ผ๋ก ๋ด๋ฆผ์ฐจ์ ์ ๋ ฌ
* ๊ฐ ๊ณ ์ ๋ฒกํฐ๋ ์ ํ๋ณํ๋ ๊ณต๊ฐ์์ ์๋ก ์ง๊ตํ๋ ์๋ก์ด ์ถ์ด ๋จ

#### Step 5 : ๋ณ์ ์ถ์ถ์ ํตํ ๋ฐ์ดํฐ ๋ณํ

![](/assets/img/img_221121/extracted_data.png){: .center width="80%"} <br/>


#### Step 6 : ์ถ์ถ๋ ๋ณ์ ์ค ์ผ๋ถ๋ง์ ์ฌ์ฉํ์ฌ ๋ฐ์ดํฐ ์ญ๋ณํ

<br/>

![](/assets/img/img_221121/inverse_transform.png){: .center width="80%"} <br/>

## 5. ๊ฒฐ๊ณผ ํ์ธ

โก๏ธ **Scree Plot** 

![](/assets/img/img_221121/elbow_point.png){: .center width="50%"} <br/>

์์ ๊ทธ๋ํ์์ ๋ค๋ชจ์น ๊ณณ์ฒ๋ผ ์ ๋ณด์ ๊ฐ์๋์ด ํ ์ค์ด๋๋ ๊ตฌ๊ฐ์ Elbow point๋ผ๊ณ  ๋ถ๋ฅธ๋ค. Eigenvalue์ Elbowpoint๋ฅผ ํ์ธํ๊ณ  ์ ์ ํ๊ฒ ๋ช ์ฐจ์์ผ๋ก ์ถ์ํ ์ง ๊ฒฐ์ ํ๋ค.

<br/>

โก๏ธ **Loading Plot**

![](/assets/img/img_221121/loading_plot.png){: .center width="50%"} <br/>

ํด๋น plot์ ๊ฐ ์ฃผ์ฑ๋ถ์ ๋ง๋ค ๋, ๊ธฐ์กด ๋ฐ์ดํฐ x์ ๊ฐ ๋ณ์๊ฐ ๊ธฐ์ฌํ๋ ์ ๋๋ฅผ ํ๋จํ์ฌ ์ฌํ์ ์ธ ๋ณ์์ ๋ํ ํด์์ ํ  ๋ ์ฌ์ฉํ  ์ ์๋ค. 

<br/>

*** 

## ๐ป ์ค์ต ์์  ์ฝ๋ 
```python
import seaborn as sns
import pandas as pd
from sklearn.decomposition import PCA

url = "https://archive.ics.uci.edu/ml/machine-learning-datebase/iris/irs.data"
df = pd.read_csv(url, 
                 naems = ['sepal length', 'sepal width', 'petal length',
                          'petal width', 'target'])
```

![](/assets/img/img_221121/df_iris.png){: .center width="60%"} <br/>


```python
# Use only continuous data
data = df[df.columns[0:4]]

# Create PCA object with number of principal component
pca = PCA(n_components = len(df.columns) - 1)
pca_fit = pca.fit(data)
```

```python
print('\n====== PCA Reulst Summary ======\n')
print('Singular value : \n', pca.singular_values_)
print('\n Singular vector : \n', pca.components_.T)
print('\n Explain Standard deviations : \n', np.sqrt(pca.explained_variance_))
print('\n Explain Variance Ratio : \n', pca.explained_variance_ratio_)
print('\n Noise Variance : \n', pca.noise_variance_)
```

```
====== PCA Reulst Summary ======

Singular value : 
 [25.08986398  6.00785254  3.42053538  1.87850234]

 Singular vector : 
 [[ 0.36158968  0.65653988 -0.58099728  0.31725455]
 [-0.08226889  0.72971237  0.59641809 -0.32409435]
 [ 0.85657211 -0.1757674   0.07252408 -0.47971899]
 [ 0.35884393 -0.07470647  0.54906091  0.75112056]]

 Explain Standard deviations : 
 [2.05544175 0.49218246 0.28022118 0.15389291]

 Explain Variance Ratio : 
 [0.92461621 0.05301557 0.01718514 0.00518309]

 Noise Variance : 
 0.0
 ```

```python
# Scree Plot
plt.title("Scree Plot")
plt.xlabel("Number of Components")
plt.ylabel("Cumulative Explained Variance")
plt.plot(pca.explained_variance_, 'o-')
```

![](/assets/img/img_221121/scree_plot.png){: .center width="60%"} <br/>


```python
# get predict values
pca_pred = pd.DataFrame(pca.fit_transform(data))
pca_pred = pd.concat([pca_pred, df['target']], axis = 1)
pca_pred
```

![](/assets/img/img_221121/pca_pred.png){: .center width="60%"} <br/>


```python
sns.scatterplot(pca_pred[0], pca_pred[1], data = pca_pred, hue = 'target',
                style = 'target', s = 100);
```

![](/assets/img/img_221121/scatterplot_pca.png){: .center width="60%"} <br/>



## ๋ง๋ฌด๋ฆฌํ๋ฉด์..
์ง๋ํ์ต๋ง ์ฃผ๋ก ๋ค๋ฃจ๋ค ๋ณด๋ PCA๋ ๊ฐ๋๋ง ์๊ณ  ์๊ณ  ์ง์  ํด๋ณผ ๊ธฐํ๊ฐ ์์๋๋ฐ ์ด๋ฒ์ ํด๋น ๋ด์ฉ์ ๋ํด ์ ๋ฆฌํ๋ฉด์ ์ฐ์ฐํ ์ฐจ์ ์ถ์ ์ค์ต ์ฝ๋๋ฅผ ๋ฐ๊ฒฌํ๋ค. ์ง์  ํด๋ณด๋ ๊ฐ๋จํ๊ณ  ๋ ์ง๊ด์ ์ผ๋ก ํด๋น ๋ด์ฉ์ ๋ํด ์ดํดํ  ์ ์์๋ค. ๋น์ง๋ํ์ต์ ๋ค๋ฃจ๊ฒ ๋๋ ๊ทธ ์ด๋ ๋  ์ค๋ ๊ณต๋ถํ ๋ด์ฉ์ด ๋์์ด ๋๊ธธ!!

### ๋ค์ ํฌ์คํธ์์ ๋ง๋์ ๐
<!-- ๋ค์ ํฌ์คํธ์์๋ [K-MOOC ์ค์ต์ผ๋ก ๋ฐฐ์ฐ๋ ๋จธ์ ๋ฌ๋](http://www.kmooc.kr/courses/course-v1:SSUk+SSMOOC20K+2022_T1/course/)์์ ๋ด๊ฐ ๋ถ์กฑํ ๋ถ๋ถ๋ค์ ์ ๋ฆฌํด ๋ ์์ฑํ  ์์ ์ด๋ค. -->

<br/>

***

## ์ฐธ๊ณ 


[K-MOOC ์ค์ต์ผ๋ก ๋ฐฐ์ฐ๋ ๋จธ์ ๋ฌ๋](http://www.kmooc.kr/courses/course-v1:SSUk+SSMOOC20K+2022_T1/course/)

[๋จธ์ ๋ฌ๋ - PCA (Principal Component Analysis)](https://velog.io/@swan9405/PCA)

[Stack Exchange - Making sense of principal component analysis, eigenvectors & eigenvalues](https://stats.stackexchange.com/questions/2691/making-sense-of-principal-component-analysis-eigenvectors-eigenvalues)

[[sklearn] PCA (Principal Component Analysis)](https://m.blog.naver.com/pjc1349/221996214527)





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
