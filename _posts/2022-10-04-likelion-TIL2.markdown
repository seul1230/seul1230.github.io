---
layout: post
title:  "2022_likelion TIL"
date:   2022-10-04 00:00:09 +0900
categories: 2022_likelion
---
# 1004 데이터 분석 TIL (2) _ 서울 특별시 다산콜센터(☎120)의 주요 민원에 대한 답변 정보

## 👩🏻‍💻 오늘코드 실시간 강의 _ 박조은님


## 📚 오늘의 TIL - 서울 특별시 다산콜센터(☎120)의 주요 민원에 대한 답변 정보

### 🐾　데이터　🐾
앞의 TIL에서 저장한 "seoul-120-list.csv" 파일을 이용한다. 서울 특별시 다산콜센터(☎120)의 주요 민원 제목와 내용 번호 등을 수집하였으며 `(2304, 6)`의 shape을 가지고 있다.

### 🐾　120 주요질문 문서 정보 받아오기　🐾
[서울정보소통광장 120 주요질문](https://opengov.seoul.go.kr/civilappeal/view/?nid=23194045)에서 문서 정보를 가져오자.  <br/>
![doc_info]() <br/><br/>



#### 전치행렬 Transpose
```python
ta01 = table[[0,1]].set_index(0).T
ta02 = table[[2,3]].set_index(2).T
```
위의 두 행렬을 concat하려면 index를 통일해주어야한다.
```python
ta02.index = ta01.index
df_desc = pd.concat([ta01, ta02], axis = 1)
```



<!-- ### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾 -->
