---
layout: post
title:  "TIL | COVID19 EDA"
date:   2022-10-11 14:00:09 +0900
categories: Python_DataAnalysis
tags: [TIL]
published: false
---
# [ 1011 ] 서울특별시 코로나 확진자 EDA
#### 👩🏻‍💻 오늘코드 실시간 강의 _ 박조은님
이번 시간에는 **서울특별시 코로나 확진자** 데이터를 가지고 EDA를 진행해보겠다. 데이터는 서울시에서 공개한 코로나19 발생동향 분석 데이터를 활용하였다.

![](/assets/img/img_221011/seoul_corona.png){: .center width="80%"}

출처 : [서울특별시 코로나19](http://www.seoul.go.kr/coronaV/coronaStatus.do)

<!-- 📙 이번 포스트에서는 **이론 및 개념**을 중심적으로 다룰 예정이다. -->

<br/>

***

<!-- ## 📙 이론 및 개념 -->

## 💻 실습 예제 코드
### : 😷 서울특별시 코로나 확진자 EDA

### 1. 날짜 형식 데이터 처리하기

다음 코드를 이용해 문자열로 된 컬럼을 날짜 형식으로 바꿔줄 수 있다.

```python
df["확진일"] = pd.to_datetime(df["확진일"])
```

이때, **format**을 함께 지정해줄 수 있다. 시간 형식 지정자에 대해서 알아보자.


|시간 형식 지정자| &nbsp; |의미| &nbsp; |결과|
|:---:|---|:---:|---|:---:|
|%a||요일 (영어)| |Sun, Mon, ... , Sat|
|%A||요일 (영어)||Sunday, Monday, ... , Saturday|
|%w||요일 (0부터 일요일)||0, 1, 2, 3, 4, 5, 6|
|%d||날짜||01, 02, ..., 31|
|%b||월 (영어)||Jan, Feb, ... , Dec|
|%B||월 (영어)||Januaray, Feburary, ... , December|
|%m||월||01, 02, ... , 12|
|%y||연||00, 01, ... , 99|
|%Y||연||1960, 2002, 2020, ... |
|%H||시간 (24시간)||00, 01, ... , 23|
|%I||시간 (12시간)||01, 02, ... , 12|
|%M||분||00, 01, ... , 59|
|%S||초||00, 01, ... , 59|

<br/>

**[ format 지정 ]**
```python
df["확진일"] = pd.to_datetime(df["확진일"], format='%Y/%m/%d')
```

이렇게 날짜 형식으로 바꿔주고 나면 이제 accessor dt에 접근할 수 있다. 이제 여기서 연 / 월 / 일 / 요일을 뽑아낼 수 있는데, 코드는 다음과 같다. 

<br/>

**[ 파생변수 - 연 / 월 / 일 / 요일 ]**
```python
df["연도"] = df["확진일"].dt.year
df["월"] = df["확진일"].dt.month
df["일"] = df["확진일"].dt.day
df["요일"] = df["확진일"].dt.dayofweek
```

## 2. 전체 확진일 데이터 만들기
이제 전체 확진일 데이터를 만들어서 그 기간 동안의 확진자 수를 시각화해보겠다.

먼저, 전체 기간 데이터를 만들기 위해 첫 확진일과 마지막 확진일자를 찾는다.

```python
last_day = df.iloc[0]["확진일"]   # Timestamp('2021-12-26 00:00:00')
first_day = df.iloc[-1]["확진일"] # Timestamp('2020-01-24 00:00:00')
```

**data_range**를 이용해 전체 기간 데이터를 만들어보자. 

```python
all_day = pd.date_range(start = first_day, end = last_day)
all_day
```
```
DatetimeIndex(['2020-01-24', '2020-01-25', '2020-01-26', '2020-01-27',
               '2020-01-28', '2020-01-29', '2020-01-30', '2020-01-31',
               '2020-02-01', '2020-02-02',
               ...
               '2021-12-17', '2021-12-18', '2021-12-19', '2021-12-20',
               '2021-12-21', '2021-12-22', '2021-12-23', '2021-12-24',
               '2021-12-25', '2021-12-26'],
              dtype='datetime64[ns]', length=703, freq='D')
```

이를 좀 더 보기 편하게 데이터프레임 형식으로 나타내면 다음처럼 볼 수 있다.

```python
df_all_day = all_day.to_frame()
df_all_day
```

![](/assets/img/img_221011/df_all_day.png){: .center  width="20%"}

위의 데이터프레임에 시각화하고자 하는 값 **확진수**를 넣어주자.

```python
df_all_day["확진수"] = df["확진일"].value_counts().sort_index()
del df_all_day[0]
df_all_day["확진수"] = df_all_day["확진수"].fillna(0).astype(int)
```

**누적 확진 수**도 추가해서 한 그래프 안에 시각화해서 나타내보자. 누적합계는 **cumsum** 함수를 이용해서 구할 수 있다.

```python
df_all_day["누적확진수"] = df_all_day["확진수"].cumsum()
```

**확진수**를 보조축으로 해서 그래프를 그려보면 다음과 같은 그래프를 확인할 수 있다!

```python
df_all_day.plot(secondary_y = "확진수", figsize = (10, 3))
```
![](/assets/img/img_221011/sum_cumsum.png){: .center width="90%"}



## 3. 거주지 '기타'로 묶어주기
데이터에 희소값이 존재한다면 이는 대체로 제거해주는 편이 성능이 높게 나온다. 

**`replace`** 를 이용해서 **희소값** 에 해당하는 값을 모두 **기타**로 묶어줄 수 있다. 정규표현식을 사용해 대체해주는 방법도 있다. 이때는 **`regex = True`**를 추가해서 정규표현식을 사용하자.

```python
# 타시도 => 기타로 변경하기
df['거주구'] = df['거주구'].replace('타시도', '기타')
```

이제 거주구의 빈도수를 시각화해보자.

```python
# gu_count 변수에 담긴 값 시각화 하기
gu_count = df['거주구'].value_counts()
gu_count.plot(kind = 'bar', title = '거주구별 확진자 수', rot = 0, figsize = (15,10))
```

![](/assets/img/img_221011/gu_counts.png){: .center width="80%"}

## 4. 거주구와 연도월에 대한 빈도수 시각화

```python
gu_month = pd.crosstab(df['거주구'], df['연도월'])
gu_month.head()
```

![](/assets/img/img_221011/gu_month.png){: .center width="80%"}

```python
gu_month.T.style.background_gradient(cmap = "summer")
```

![](/assets/img/img_221011/gu_month_summer.png){: .center width="80%"}

## 5. 여행력에 따른 확진자 수 시각화

```python
df.loc[df['접촉력'].str.contains('해외유입'), '해외유입'] = '해외'
df.loc[~df['접촉력'].str.contains('해외유입'), '해외유입'] = '국내'
```

```python
pd.crosstab(df['거주구'], df['해외유입']).head()
# 비율을 구하고 싶다면 normalize = True 이용
pd.crosstab(df['거주구'], df['해외유입'], normalize = True).head()
```
<p align='center'>

<img src = '/assets/img/img_221011/gu_travel.png' width='24%'> <img src = '/assets/img/img_221011/gu_travel_ratio.png' width='30%'> 
<!-- ![](/assets/img/img_221011/gu_month_summer.png){: width="30%"}![](/assets/img/img_221011/gu_month_summer.png){:  width="30%"} -->

</p>

```python
pd.crosstab(df['거주구'], df['해외유입']).plot(kind = 'bar', rot = 0, stacked = True, figsize = (15, 10), legend = 'reverse')
```

![](/assets/img/img_221011/gu_travel_stacked.png){: .center width="80%"}

## 6. 거주구에 따른 요일별 확진자 빈도수

```python
df_gu_weekday = pd.pivot_table(data = df, index = '거주구', columns = '요일명', values = '환자', aggfunc = 'count')
df_gu_weekday[weekday_list].style.bar()
```

![](/assets/img/img_221011/df_gu_weekday.png){: .center width="80%"}

## 7. 연도 - 월 - 환자 수

```python
df.groupby(['연도', '월'])['환자'].count().unstack(level=-1)
```

![](/assets/img/img_221011/year_month_patient.png){: .center width="80%"}



### 다음 포스트에서 만나요 🙌


<br/>

***

## 참고 <br/>

### 🤔 str.replace와 replace 차이점
**<mark style='background-color: #f5f0ff'>str.replace</mark>**는 **<font color='red'>일부</font>만 일치**해도 replace해주고, **<mark style='background-color: #f5f0ff'>replace</mark>**는 **<font color='red'>전체</font>가 일치**해야 replace를 해준다. <br/>
replace는 **dataframe**과 **series**에 모두 사용가능하며, str.replace는 **Series에만** 사용 가능하다.


### 🤔 치사율을 구할 땐 normalize = True로 비율을 구하면 안된다?
**사망**에 대해 **normalize = True**로 비율을 구하면 전체 사망자 수에 대한 비율을 구하는 것으로, 치사율과는 다른 값을 나타낸다. 치사율은 **`사망자 수 / (퇴원환자 수 + 사망자 수) * 100`**으로 구한다.

### 🤔 regex = True 써주는 이유?
나중에 **regex = False** 인 경우가 **default**로 바뀔 수도 있다.
```
FutureWarning: The default value of regex will change from True to False in a future version.
```

### 출처

[판다스 - to_datetime : format, dt](https://steadiness-193.tistory.com/171)

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
