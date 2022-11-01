---
layout: post
title:  "2022_likelion TIL"
date:   2022-10-05 09:00:09 +0900
categories: Python_DataAnalysis
---
# [ 1005 TIL - I ] 서울특별시 다산콜센터(120)의 주요 민원

## 👩🏻‍💻 오늘코드 실시간 강의 _ 박조은님
📚 서울특별시 다산콜센터(120)의 주요 민원

이전 게시물 [**1004 데이터 분석 TIL (2)**](https://seul1230.github.io/2022_likelion/2022-10-04-likelion-TIL2/)의 복습 내용이다.





### 📑 <mark style='background-color: #f6f8fa'> 이론 및 개념</mark> 📑

#### map과 apply
- 반복문을 사용하지 않고 벡터 연산을 통해 한 줄로 연산 가능 (빠른 연산)
- 함수나 dict에 따라 일괄적으로 한 번에 바꿀 수 있는 map을 자주 사용함

<!-- <div align="center"> -->

||Series|DataFrame|사용 예|
|---|:---:|:---:|---|
|map|O|X|df['컬럼명'].map(함수 / dict)|
|apply|O|O|df.apply(함수)|
|applymap|X|O|df.applymap(함수)|

<!-- </div> -->

#### lambda
- 이름이 없는 익명 함수
```python
df["생산연도"] = df["생산일"].map(lambda x : x[:4] + "연도")
```

#### progress_map
- 진행 상황을 보면서 mapping시켜줌
- tqdm.pandas()
```python
from tqdm.notebook import tqdm
tqdm.pandas()
view = df['내용번호'].progress_map(get_view_page)
```

#### concat과 merge
[ 참고 문서 ] : [Pandas 공식 문서](https://pandas.pydata.org/pandas-docs/stable/getting_started/intro_tutorials/08_combine_dataframes.html#min-tut-08-combine)

##### concat
- **Inner join** : 두 DataFrame의 기준 컬럼에서 둘 다 존재하는 데이터만 join
- **Outer join** : 두 DataFrame의 모든 Data를 합치기
- **reindex** : 인덱스 번호 재설정
- ignore_index가 `False`면 -> 기존 Index 유지, `True`면 -> 기존 Index 무시
- **axis = 1** : 행방향으로 데이터 병합

##### merge 
- 기존 데이터와 병합
  
  ```python
  pd.merge(left, right, how, on, left_on, right_on, left_index, right_index)
  ```
- **on** : 두 DataFrame을 Join할 기준 컬럼명(컬럼명이 동일할 경우)
- **left_on** : Join할 기준 컬럼의 왼쪽 DataFrame의 컬럼명
- **right_on** : Join할 기준 컬럼의 오른쪽 DataFrame의 컬럼명
- ex) 내용번호와 생산일을 기준으로 병합한다고 하면 코드는 다음과 같다.
  ```python
  df_detail = df.merge(df_view, on = ["내용번호", "생산일"])
  ```

### 다음 포스트에서 만나요 🙌
뒷 내용은 [**1005 데이터 분석 TIL (2)**](https://seul1230.github.io/2022_likelion/2022-10-05-likelion-TIL2/)에서 이어서 작성한다.

FinanceDataReader를 이용해 여러 종목 수익률 비교를 해볼 예정이다.



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
