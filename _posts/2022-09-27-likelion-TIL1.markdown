---
layout: post
title:  "0927 데이터 분석 TIL"
date:   2022-09-27 09:05:09 +0900
categories: 2022_likelion
---
# 0927 데이터 분석 TIL (1) _ EDA 범주형 변수

## 👩🏻‍💻 오늘코드 실시간 강의 _ 박조은님



## 📚 오늘의 TIL - EDA 범주형 변수

**범주형 변수**에 대한 데이터 분석도 **수치형 변수**와 크게 다르지 않다. 오늘은 어제와 중복되는 내용은 빼고 적는다.

###  범주형 변수에 대한 기술통계 보기
```python
df.describe(include = "object")
```
![desribe_cat](/assets/img/img_220927/describe_cat.png) <br/>

```python
df.describe(include = "all")
```
위의 코드를 활용하면 범주형 변수와 수치형 변수 모두에 대한 기술 통계를 볼 수 있다. `include` 말고도  `exclude`라는 파라미터를 이용할 수도 있다. 

### 범주형 변수
countplot을 이용하여 범주형 데이터 `origin`의 유일값의 빈도수를 시각화해보자. <br/>
먼저 **범주형 데이터**가 유일값을 몇 개나 가지고 있는지 보자.
```python
# nunique 값 구하기
df.nunique()
```
![nunique_cat](/assets/img/img_220927/nunique_cat.png) <br/>
#### `unique`와 `nunique`
`unique()`는 데이터에 유일값이 어떤 것들이 있는지 알고 싶을 때 사용하는 함수이고, `nunique()`는 데이터에 있는 유일값들의 수를 출력해주는 함수이다. 
<br/>
다음은 범주형 데이터 `origin`의 유일값의 빈도수를 시각화하는 코드이다.

```python
sns.countplot(data = df, y = "origin")
```
막대를 가로 방향으로 나오게 하려면 `y` 파라미터를 이용하고 세로 방향으로 나오게 하려면 `x` 파라미터를 이용하면 된다. 위의 코드는 `y` 파라미터를 이용한 그래프이다.
<br/>

![countp_origin] <br/>

### N개 변수의 빈도수 구하기
**1개** 변수의 빈도수 구하기
```python
# origin의 빈도수 구하기
df["origin"].value_counts()
# ---------------
# 다음과 같이 출력됨
# usa       249
# japan      79
# europe     70
```
**2개 이상의 변수**에 대한 빈도수 구하기

```python
# countplot 으로 origin 의 빈도수를 시각화 하고 cylinders 로 다른 색상으로 표현하기
sns.countplot(data = df, x = "origin", hue = "cylinders")
```
![origin_cylinder] <br/>
위 그래프는 cylinder의 값의 종류가 3개 이상이라 잘 권장하지 않는다. 보통 다음과 같이 각각의 바의 개수가 더 적은 시각화를 선호한다. `cylinder`와 `origin`의 위치를 바꿔보았다. 
```python
# countplot 으로 cylinder 의 빈도수를 시각화 하고 origin 로 다른 색상으로 표현하기
sns.countplot(data = df, x = "cylinders", hue = "origin")
```
![cylinder_origin] <br/>

#### pd.crosstab으로 시각화한 값 직접 구하기
```python
# pd.crosstab 으로 시각화한 값 직접 구하기
#### 기본코드 ####
# pd.crosstab(index = df["origin"], columns = df["cylinders"])
#### 내가 시각화한 코드 ####
pd.crosstab(df.origin, df.cylinders, margins=True).style.background_gradient(cmap='summer_r')
```
![crosstab_origin] <br/>

### 범주형 vs 수치형 변수
```python
# barplot 으로 origin 별 mpg 값 구하기
sns.barplot(data = df, x = "origin", y = "mpg")
```
`ci`가 데이터가 많아지면 시간이 오래 걸리기 때문에 꼭 필요하지 않다면 `ci = None`을 써주는 편이다.
![bar_origin_mpg] <br/>

### Groupby를 통한 연산
```python
df.groupby("origin").mean()
```
![group_origin] <br/>
```python
# groupby를 통해 origin 별로 그룹화 하고 mpg 의 평균 구하기
df.groupby("origin")[["mpg"]].mean()
```
![group_mpg] <br/>

### Pivot table을 통한 연산
> groupby로 구할 수 있는 것을 왜 pivot_table로 구할까? <br/> : 직관적인 사용법 <br/>- 조은님

![pivot_pandas] <br/>
```python
# origin별 mpg에 대한 pivot_table
pd.pivot_table(data = df, index = "origin", values = "mpg")
```
![pivot_origin] <br/>

```python
# barplot 으로 합계 값 구하기
sns.barplot(data = df, x = "origin", y = "mpg", hue = "cylinders", estimator = sum)
```
![bar_sum] <br/>

#### groupby를 통해 위 시각화에 대한 값 구하기
```python
df.groupby(["origin", "cylinders"])[["mpg"]].mean()
```
![groupby_mean] <br/>
**Unstack** 사용하기 <br/>
![unstack_pandas] <br/>

```python
df.groupby(["origin", "cylinders"])[["mpg"]].mean().unstack
```
![groupby_mean_unstack] <br/>
pivot table로도 나타내보자.
> pivot_table은 연산을 하고, pivot은 연산을 하지 않는다.

```python
# pivot_table 를 통해 위 시각화에 대한 값을 구하기
pd.pivot_table(data = df, index = "origin", columns = "cylinders", values = "mpg")
```
![pivot_unstack] <br/>

### Boxplot과 사분위수
> 막대그래프는 대표값만 표시해서 데이터의 분포를 관찰하기가 어렵다. <br/>- 조은님

```python
# boxplot 으로 origin 별 mpg 의 기술통계 값 구하기
sns.boxplot(data = df, x = "origin", y = "mpg")
```
![box_mpg] <br/>

groupby로 origin 값에 따른 mpg의 기술통계 구하기
```python
df.groupby("origin")["mpg"].describe()
############
# count    70.000000
# mean     27.891429
# std       6.723930
# min      16.200000
# 25%      24.000000
# 50%      26.500000
# 75%      30.650000
# max      44.300000
# Name: europe, dtype: float64
```

### Boxplot 이해하기
참고 : [위키백과 > 상자 수염 그림](https://ko.wikipedia.org/wiki/%EC%83%81%EC%9E%90_%EC%88%98%EC%97%BC_%EA%B7%B8%EB%A6%BC) <br/>
![box_wiki] <br/>
1. 백분위 수 : 데이터를 백등분 한 것
2. 사분위 수 : 데이터를 4등분 한 것
3 .중위수 : 데이터의 정 가운데 순위에 해당하는 값. <br/> (관측치의 절반은 크거나 같고 나머지 절반은 작거나 같다.)
4. 제 3사분위 수 (Q3) : 중앙값 기준으로 상위 50% 중의 중앙값, 전체 데이터 중 상위 25%에 해당하는 값
5. 제 1사분위 수 (Q1) : 중앙값 기준으로 하위 50% 중의 중앙값, 전체 데이터 중 하위 25%에 해당하는 값
6. 사분위 범위 수(IQR) : 데이터의 중간 50% (Q3 - Q1)
<br/>

#### Europe에 해당하는 값에 대해 boxplot 그리기
```python
desc = df.groupby("origin")["mpg"].describe()
eu = desc.loc["europe"]
eu
```
-> Europe에 해당하는 기술통계만을 `eu`에 저장한다.

```python
# IQR, 이상치를 제외한 최댓값, 최솟값 구하기
Q3 = eu["75%"]
Q1 = eu["25%"]
IQR = Q3 - Q1
OUT_MAX = (1.5 * IQR) + Q3
OUT_MIN = Q1 - (1.5 * IQR)
Q3, Q1, IQR, OUT_MAX, OUT_MIN
#### 출력결과 ####
# (30.65, 24.0, 6.649999999999999, 40.625, 14.025000000000002)
```
boxplot으로 시각화하면,
```python
# europe 에 해당되는 값에 대해 boxplot 그리기
sns.boxplot(data = df[df["origin"] == "europe"], x = "mpg")
```
![europe_boxplot] <br/>

다른 그래프로도 나타내보자. boxenplot과 violinplot을 이용하겠다.
```python
# boxenplot 그리기
sns.boxenplot(data = df[df["origin"] == "europe"], x = "mpg")
```
![boxen_europe] <br/>
```python
# violinplot 그리기
sns.violinplot(data = df[df["origin"] == "europe"], x = "mpg")
```
![violin_europe] <br/>

### 산점도를 통한 범주형 데이터 표현
> scatterplot으로 범주형 데이터를 표현하게 되면 점이 겹칠 수 있다는 점이 단점이다. <br/> - 조은님

#### scatterplot
![scatter_origin] <br/>

#### stripplot
```python
# stripplot
sns.stripplot(data = df, x = "origin", y = "mpg")
```
![strip_origin] <br/>

#### swarmplot
```python
# swarmplot
sns.swarmplot(data = df, x = "origin", y = "mpg")
```
![swarm_origin] <br/>

### catplot
catplot은 기본값이 stripplot이기 때문에 별다른 파라미터를 지정해주지 않으면 위의 stripplot과 비슷한 형태로 나온다.
```python
sns.catplot(data = df, x = "origin", y = "mpg")
```
![cat_origin] <br/>

#### catplot으로 boxplot 그리기
```python
# catplot 으로 boxplot그리기
# col_wrap 이용하면 한 줄에 그래프 몇 개 출력할 지 지정할 수 있음.
sns.catplot(data = df, x = "origin", y = "mpg", kind = "box", col = "cylinders")
```
![cat_box] <br/>

#### catplot으로 violin 그리기
```python
# catplot 으로 violinplot그리기
sns.catplot(data = df, x = "origin", y = "mpg", kind = "violin", col = "cylinders")
```
![cat_violin] <br/>

#### catplot으로 countplot 그리기
```python
# catplot 으로 countplot그리기
sns.catplot(data = df, x = "origin", kind = "count", col = "cylinders")
```
![cat_count] <br/>

### FacetGrid
: subplot 그리게 해준다. 