---
layout: post
title:  "2022_likelion TIL"
date:   2022-11-08 12:00:09 +0900
categories: Python_DataAnalysis
published: false
---
# [ 1108 TIL ] 

## π©π»βπ» μ€λμ½λ μ€μκ° κ°μ _ λ°μ‘°μλ

<!-- **π FinanceDataReaderλ₯Ό ν΅ν μ¬λ¬ μ’λͺ© daily price plotlyλ‘ λΉκ΅**

μ΄μ  κ²μλ¬Ό [**1005 λ°μ΄ν° λΆμ TIL - II**](https://seul1230.github.io/2022_likelion/2022-10-05-likelion-TIL2/)κ³Ό μ΄μ΄μ§λ λ΄μ©μ΄λ€. -->


<br/>

***

## π μ΄λ‘  λ° κ°λ π

#### 


***

## π» μ€μ΅ μμ  μ½λ

### 1. λ°μ΄ν° λ‘λ

ν΄λΉ λ°μ΄ν°λ μ»¬λΌμ΄ 80κ° μ λλ‘ λ§μ νΈμ μνκΈ° λλ¬Έμ, μ΄λ₯Ό μ λΆ displayν΄μ£Όλ €λ©΄ λ€μ μ½λλ₯Ό μ€νν΄μΌνλ€.

```python
pd.set_option('display.max_columns', None)
```

μ΄μ  

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




### λ€μ ν¬μ€νΈμμ λ§λμ π




<!-- ### πΎγγπΎ
### πΎγγπΎ
### πΎγγπΎ
### πΎγγπΎ
### πΎγγπΎ
### πΎγγπΎ 
<font color='dodgerblue'> μμ νλ </font>
<font color='lightgray'>Miss</font>
<mark style='background-color: #f1f8ff'> μ°ν νλ </mark>
<mark style='background-color: #fff5b1'> μ°ν λΈλ </mark>
<mark style='background-color: #ffdce0'> μ°ν λΉ¨κ° </mark>
<mark style='background-color: #dcffe4'> μ°ν μ΄λ‘ </mark>
<mark style='background-color: #f5f0ff'> μ°ν λ³΄λΌ </mark>
<mark style='background-color: #f6f8fa'> μ°ν νμ </mark>
-->
