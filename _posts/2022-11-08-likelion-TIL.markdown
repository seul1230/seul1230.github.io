---
layout: post
title:  "2022_likelion TIL"
date:   2022-11-08 12:00:09 +0900
categories: Python_DataAnalysis
published: false
---
# [ 1108 TIL] 

## 👩🏻‍💻 오늘코드 실시간 강의 _ 박조은님

<!-- **📚 FinanceDataReader를 통한 여러 종목 daily price plotly로 비교**

이전 게시물 [**1005 데이터 분석 TIL - II**](https://seul1230.github.io/2022_likelion/2022-10-05-likelion-TIL2/)과 이어지는 내용이다. -->


<br/>

***

## 📑 이론 및 개념 📑

#### 


***

## 💻 실습 예제 코드

### 1. 데이터 로드

해당 데이터는 컬럼이 80개 정도로 많은 편에 속하기 때문에, 이를 전부 display해주려면 다음 코드를 실행해야한다.

```python
pd.set_option('display.max_columns', None)
```

이제 

```python
data_path = '../dataset/house_prices'
train = pd.read_csv(f'{data_path}/train.csv', index_col = 'Id')
print(train.shape)
train.head(2)
```

![](/assets/img/img_221108/train_df.png){: .center} <br/><br>

```python
test = pd.read_csv(f'{data_path}/test.csv', index_col = 'Id')
print(test.shape)
test.head(2)
```

![](/assets/img/img_221108/test_df.png){: .center} <br/><br>




### 다음 포스트에서 만나요 🙌




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
