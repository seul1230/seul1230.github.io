---
layout: post
title:  "0926 데이터 분석 TIL (1)"
date:   2022-09-26 09:10:09 +0900
categories: 2022_likelion
---
# 0926 데이터 분석 TIL (1) 

** 이미지 삽입 방법 공부해서 이미지 삽입까지 하고 마무리하기 ** <br/>
** 오늘 TIL은 너무 길어서 두 개로 나눠야겠다. **

## 👩🏻‍💻 오늘코드 실시간 강의 _ 박조은님
매주 월요일에서 목요일 내내 박조은님과 함께 데이터 분석에 대해 배운다. <br/>
조은님 조곤조곤 목소리도 너무 좋으시고 질문에도 친절하게 답변해주시고,, 쉬는시간이랑 점심시간 너무 잘 지켜주셔서 행복..🫶🏻

## 📚 오늘의 TIL - 파이썬 데이터 분석 기초

### Census Dataset
Census Dataset(인구 조사 데이터)는 총계수, 표본조사, 관리기록과 같은 방법론을 사용하여 정기적으로 수집된다. 인구조사 데이터가 수집 또는 생성된 후, 인구조사 데이터는 서로 다른 지리적 영역에 대한 인구 집단의 수 또는 추정치를 나타내기 위해 요약된다.<br/>
**[ 출처 ]** [What is Census Data?](https://www.socialsciencespace.com/2020/01/what-is-census-data/#:~:text=Census%20data%20is%20collected%20at,people%20for%20different%20geographic%20areas.)<br/>
**[ Dataset ]** [Census Dataset 보러가기](https://pandas-profiling.ydata.ai/examples/master/census/census_report.html) <br/>
![census_example]

### 데이터셋 불러오기
Seaborn에 내장된 데이터 불러오기
```python
df = sns.load_dataset(“mpg”)
df
```

### 데이터셋 일부만 가져오기
head / tail
```python
# head / tail
# df.iloc[:5] / df.iloc[-5:]
df.head()
```
sample (데이터셋 중 임의의 데이터 하나)
```python
# sample
df.sample()
```


### pandas-profiling
: 매번 봐야 하는 기술통계값 코드 한 줄로 보기
버전 호환성 이슈로 아래 버전으로 설치하길 권장한다.
```python
!pip install pandas-profiling==3.1.0
```
```python
from pandas_profiling import ProfileReport
profile = ProfileReport(df, title="Pandas Profiling Report")
```
주피터 노트북이 있는 위치에 html 파일 만들기
```python
profile.to_file(“pandas_profile_report.html”)
```
![profilereport] <br/>
![open_profiling_report] <br/>
**[ 추가 Profiling Report 보러가기 ]** 
[타이타닉 profiling report](https://pandas-profiling.ydata.ai/examples/master/titanic/titanic_report.html)


### 더 자세히 
![toggle_num] 
[ 수치형 데이터 ]
- 4분위값
- 표준편차
- 평균
- 메모리 크기

![toggle_cat] <br/>
[ 범주형 데이터 ]

### 💡 통계 용어들에 대해 공부해보자.

- Variance
    - 확률변수가 기댓값으로부터 얼마나 떨어진 곳에 분포하는지를 가늠하는 숫자. 얼마나 넓게 퍼져있는지를 나타낸다. 
    - [위키백과>분산](https://ko.wikipedia.org/wiki/%EB%B6%84%EC%82%B0)를 참고했음.
- Standard deviation
    - 분산의 제곱근을 취한 값
- Covariance (공분산)
    - 두 변수가 각자의 평균으로부터 멀어지는 값
- Correlation coefficient (상관계수)
    - 두 변수 사이의 통계적 관계를 표현하기 위해 특정한 상관 관계의 정도를 수치적으로 나타낸 계수
- Skewness (왜도)
    - symmetrical bell curve 혹은 normal distribution에서 왜곡 정도를 말한다. 데이터 분포의 대칭성이 얼마나 결핍되었는지를 측정한다. 완전히 대칭인 분포는 skewness가 0이다. 데이터에 따라 왜도 값이 정의되지 않을 수도 있다.
￼
    - skewness가 -0.5~0.5일 경우 : 대칭적
    - skewness가 -1~0.5일 경우 : 적당히 치우침
    - skewness가 1보다 크거나 -1보다 작은 경우 : 상당히 치우침
    - skewness가 0이면 평균과 중앙값이 같다.
    - skewness가 양수일 때는 확률밀도함수의 오른쪽 부분에 긴 꼬리, 자료가 왼쪽에 더 많이 분포 <br/>
![skew_pic] <br/>
```python
# skew를 통해 전체 수치변수에 대한 왜도 구하기
df.skew()
```
![skew값코드로확인] <br/>
- Kurtosis (첨도)
    - 확률 분포의 뾰족한 정도를 나타내는 척도
    - 관측치들이 어느 정도 집중적으로 중심에 몰려 있는가를 측정할 때 사용한다.
    - 첨도값(K)이 3에 가까우면 산포도가 정규분포에 가깝다.
    - 3보다 작을 경우에는(K<3) 산포는 정규분포보다 더 뾰족한 분포(꼬리가 얇은 분포)
```python
df.kurt().sort_values(ascending = False)
```

![kurt코드로확인] <br/>
Skewness와 Kurtosis는 오늘 수업에서 처음 들어봤다. <br/>
더 구체적인 예시를 알고 싶다면 [Skewness와 Kurtosis 설명](https://dining-developer.tistory.com/17)를 참고하면 좋을 것 같다.
<br/>



### sweetviz
- 설치 링크 : [https://pypi.org/project/sweetviz/](https://pypi.org/project/sweetviz/)
- 코랩에서 진행하기 때문에 오늘은 다음 코드로 `sweetviz`를 설치하겠다.
```python
!pip install sweetviz
```
```python
import sweetviz as sv
my_report = sv.analyze(df)
# my_report = sv.analyze(df, target_feat ='mpg')
my_report.show_html()
```

`sv.analyze(df)`에서 타겟 변수는 범주형이 아닌 수치와 bool 값만 가능하다. <br/>
![sweetviz_report]

### autoviz
- `autoviz`에 대한 [깃허브 링크](https://github.com/fbdesignpro/sweetviz)
- interactive 시각화
```python
!pip install autoviz
```
```python
from autoviz.AutoViz_Class import AutoViz_Class
AV = AutoViz_Class()
```
```python
filename = "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/mpg.csv"
sep = ","
dft = AV.AutoViz(
    filename,
    sep=",",
    depVar="",
    dfte=None,
    header=0,
    verbose=0,
    lowess=False,
    chart_format="html",
    # chart_format="bokeh",
    max_rows_analyzed=150000,
    max_cols_analyzed=30,
    # save_plot_dir=None
)
```


###  위와 같은 추상화된 도구를 사용하게 되면 😐
기술통계에 대해 자동으로 시각화되지만 <br/>
대용량 데이터로 report를 출력하려고 하면 시간이 오래 걸리고, 미세한 컨트롤이 불가능하다는 단점이 있다.

## 📚 오늘의 TIL - EDA 수치형 변수

### 데이터에서 결측치 보기
```python
# 결측치의 합계
df.isnull().sum()
```
![결측치합계] <br/>
```python
# 결측치의 비율
df.isnull().mean() * 100
```
![결측치비율] <br/>
```python
plt.figure(figsize = (12,8))
sns.heatmap(df.isnull(), cmap = "gray")
# plt.colormaps()를 이용하면 heatmap 색 변경 가능
```
![결측치_heatmap] <br/>
더 다양한 color에 대해 알아보고 싶다면 [matplotlib 공식 문서](https://matplotlib.org/stable/tutorials/colors/colormaps.html)를 참고하면 된다.

### 데이터의 기술 통계 보기
```python
# 수치 데이터 요약
df.describe()
```
![기술통계보기_describe] <br/>

```python
# 문자열 데이터 요약
df.describe(include = "object)
```
![기술통계보기_object] <br/>
만약 특정 열의 값의 요약을 보고 싶다면
```python
# df["cylinders"].astype(str).describe() -> Series형으로 출력
# df[["cylinders"]].astype(str).describe() -> DataFrame으로 출력
df[["cylinders","model_year"]].astype(str).describe()
```
![특정열요약] <br/>

### 수치형 변수
```python
# hist()를 통해 전체 수치변수에 대한 히스토그램 
df.hist()
# .hist()만 했을 때 나오는 로그 제외하고 그래프만 출력하기
plt.show
```
![수치형변수hist] <br/>
다음은 위의 코드를 바탕으로 그래프 크기와  `bin`의 개수를 조정해서 나타낸 코드이다.
```python
# hist()를 통해 전체 수치변수에 대한 히스토그램 그리기
df.hist(figsize = (12,10), bins = 50)
# .hist()만 했을 때 나오는 로그 제외하고 그래프만 출력하기
plt.show
```
![수치형변수hist_변경] <br/>

[ 참고 ] [seaborn 공식사이트 overview](https://seaborn.pydata.org/tutorial/function_overview.html)
![rel_dis_catplot] <br/>

### 1개의 수치변수 가지고 kdeplot 그리기

```python
# displot을 통해 히스토그램과 kdeplot 그리기
sns.displot(data = df, kde = True)
```
수정할 것 <br/>
여기서 **KDE(Kernel Density Estimate)**는 커널함수(kernel function)를 이용한 밀도추정 방법의 하나로서 KDE를 알기 위해서는 먼저 밀도추정(density estimation)이 무엇인지 알아야 한다. <br/>
**[ 참고 ]** [KDE의 정의](https://darkpgmr.tistory.com/147#:~:text=Kernel%20Density%20Estimation(KDE)%EC%9D%B4%EB%9E%80,%EC%9D%B4%20%EB%AC%B4%EC%97%87%EC%9D%B8%EC%A7%80%20%EC%95%8C%EC%95%84%EC%95%BC%20%ED%95%9C%EB%8B%A4.)
<br/>

![displot전체] <br/>
```python
# sns.displot(data = df, x = "mpg", kde = True)
sns.displot(data = df, x = "mpg", kde = True, hue = "origin", col = "origin", bins = 50)
```
![displot_group] <br/>


### kde plot으로 밀도함수 표현하기
```python
# kdeplot, rugplot으로 밀도함수 표현하기
sns.kdeplot(data = df, x = "mpg")
```
![kde_밀도함수] <br/>

### kde plot과 rug plot으로 밀도함수 표현하기
: 그래프 적분하면 1
```python
# kdeplot, rugplot으로 밀도함수 표현하기
sns.kdeplot(data = df, x = "mpg")
sns.rugplot(data = df, x = "mpg")
```
![kde_rug_밀도함수] <br/>

### agg로 기술 통계 값 구하기 _ skew, kurt
```python
# mpg 값에 대해 agg로 skew, kurt 값 구하기
df["mpg"].agg(["skew", "kurt"])
```
![agg_skew_kurt] <br/>

### boxplot으로 사분위 수 표현하기
💡 **사분위수란?** <br/>
사분위수는 데이터를 4등분 한 것이다. 통계의 변량을 도수 분포로 정리하였을 때 적은 것으로부터 1/4, 1/2, 3/4 자리의 변량값이다. 임의의 확률변수 축에서 확률분포를 4등분하는 값의 조합이다.

<br/>

![boxplot_IQR] <br/>

### violinplot으로 데이터 값 살펴보기
가운데 까만 박스는 boxplot을, 하얀 점은 중앙값을 의미한다.<br/>
![violin_살펴보기] <br/>

### Standard Scaling
```python
# boxplot 으로 전체 변수 시각화하기
sns.boxplot(data = df)
```
![boxplot으로전체변수] <br/>
```python
# 전체 볌수의 표준편차 구하기
df.std()
```
```python
sns.violinplot(data = df)
```
![violinplot으로전체변수_선] <br/>
`weight`만 범위가 달라 한눈에 어떤 분포를 가지고 있는지 알기 어렵다. <br/>
-> **정규화**를 진행하자. <br/>
표준화(Standard Scaling)을 위해 먼저 숫자형 데이터만 가지고 오자.
```python
df_num = df.select_dtypes(include = "number")
df_num.head(1)
```
다음으로, `(관측치 - 평균)/표준편차`로 정규화를 진행하겠다.
```python
# 표준화
df_std = (df_num - df_num.mean())/df_num.std()
df_std.describe().round(2)
```
이렇게 scaling한 데이터를 위에서 했던 것처럼 violinplot으로 나타내면 다음과 같이 예쁘고 고르게 그려지는 것을 볼 수 있다.
```python
sns.violinplot(data = df_std)
```
![cool_violinplot] <br/>

### 2개 이상의 수치변수 이용해 시각화하기

```python
# scatterplot 을 통해 2개의 수치변수 비교하기
sns.scatterplot(data = df, x = "mpg", y = "horsepower")
```
![2개이상_scatter] <br/>

### 회귀 시각화
```python
# regplot 으로 회귀선 그리기
sns.regplot(data = df, x = "mpg", y = "horsepower")
```
![regplot_2개] <br/>

### 잔차 시각화
- residplot
```python
# 회귀선의 잔차를 시각화 하기 -> 값의 차이값
sns.residplot(data = df, x = "mpg", y = "horsepower")
```
![residplot_2개] <br/>
- regplot
: regplot은 hue 기능 가지고 있지 않음 -> **lmplot** 이용하자. 
```python
# lmplot 을 통해 범주값에 따라 색상, 서브플롯 그리기
sns.lmplot(data = df, x = "mpg", y = "horsepower", hue = "origin", col = "origin")
```
![lmplot_subplot] <br/>
💡 그렇다면 lmplot은 regplot 보다 더 많은 기능을 쓸 수 있는데 굳이 regplot을 쓸 이유가 있나?

- jointplot
```python
# jointplot 2개의 수치변수 표현하기
sns.jointplot(data = df, x = "mpg", y = "horsepower")
sns.jointplot(data = df, x = "mpg", y = "horsepower", kind = "kde")
sns.jointplot(data = df, x = "mpg", y = "horsepower", kind = "hexa")
```
위의 jointplot 코드를 실행시키면 각각 다음과 같다.
![jointplot] ![jointplot_kde] ![jointplot_hexa]


### pairplot
>`pairplot`은 시간이 오래 걸리기 때문에 <br/>
일부 샘플을 추출해서 그려보고 샘플의 수를 늘려가며 그리는 것을 추천한다.
한번에 그래프를 그려볼 수 있다.

```python
sns.pairplot(data = df.sample(100))
```
![pairplot_1] <br/>
```python
sns.pairplot(data = df.sample(100), hue = "origin")
```
![pairplot_2] <br/>
origin값을 기준으로 kde plot으로 색을 다르게 해서 나타내준다.

### lineplot
```python
# lineplot으로 model_year, mpg를 시각화 합니다.
sns.lineplot(data = df, x = "model_year", y = "mpg")
```
![lineplot] <br/>

### relplot
: 주로 변수 간의 관계를 표현할 때 쓴다.
```python
# relplot 으로 범주형 변수에 따라 서브플롯을 그립니다.
sns.relplot(data = df, x = "model_year", y = "mpg", hue = "origin", col = "origin")
```
![relplot_cat_subplots] <br/>
그렇다면 전체 변수에 대한 relplot은 어떨까?
```python
# relplot 으로 전체 수치 변수에 대한 시각화를 합니다.
sns.relplot(data = df)
```
![relplot_entire] <br/>
정규화의 문제일 수 있으니 정규화했던 데이터를 사용해보자.
```python
sns.relplot(data = df_std)
```
![relplot_entire_std] <br/>
정규화된 데이터로도 시각화해봤지만 전체 변수에 대한 relplot으로는 데이터를 분석하기 쉽지 않다. <br/>
-> relplot의 kind 옵션을 통해 선그래프를 그린다.

### relplot과 kind 옵션을 이용해 선그래프 그리기
```python
# relplot 의  kind 옵션을 통해 선그래프를 그립니다.
sns.relplot(data = df, x = "model_year", y = "mpg", hue = "origin",
            col = "origin", kind = "line", ci = None)
```
> 위 코드에서 오류가 난다면 `ci = None`을 `errorbar = None`으로 바꿔보자. `seaborn`이 최신 버전이라면 `ci`는 작동하지 않을 수 있다. 
<br/>

![rel_kind_line] <br/>

### 💡 pandas 에서 corr 값을 구할 때 어떤 기본 값을 사용할까?
: 피어슨 상관계수 <br/>
![pearson] <br/>

- 특정 변수들의 상관관계를 수치화된 값으로 알아내고 싶을 때 사용한다.
    - 상관분석에서는 상관관계의 정도를 나타내는 단위로 모상관계수로 ρ를 사용하며 표본 상관 계수로 r 을 사용한다.
    - r 값은 X 와 Y 가 완전히 동일하면 +1, 전혀 다르면 0, 반대방향으로 완전히 동일 하면 –1 을 가진다.
    - 결정계수(coefficient of determination)는 r^2 로 계산하며 이것은 X 로부터 Y 를 예측할 수 있는 정도를 의미한다.


`heatmap`을 통해 상관계수를 시각화해보자.
> 이때, diversing한 데이터는 그에 맞는 color 쓰는 것이 좋다.

```python
# coolwarm : 음수는 blue, 양수는 red
sns.heatmap(corr, cmap = "coolwarm")
```
![heatmap_coolwarm] <br/>

위의 히트맵에서 수치를 표현하고 싶다면 `annot = True` 추가하기
```python
# coolwarm : 음수는 blue, 양수는 red
sns.heatmap(corr, cmap = "coolwarm", annot = True)
```
![heatmap_coolwarm2] <br/>

### 💡 위의 heatmap을 보면 heatmap의 특징을 찾을 수 있다.
자기상관계수는 대각행렬을 기준으로 대칭되어 같은 값이 출력되기 때문에, 위와 같은 형태로 전체를 heatmap으로 나타내면 가독성이 떨어질 수 있다. <br/>
가독성을 높이기 위해 `mask`를 이용해서 대각행렬 기준으로 한쪽의 데이터들만 나타내보자. 
```python
# np.ones_like로 heatmap의 마스크값 구하기
mask = np.triu(np.ones_like(corr))
# mask 적용해서 히트맵 출력
sns.heatmap(corr, cmap = "coolwarm", annot = True, mask = mask)
```
위의 코드에서 `np.triu`는 matrix를 상삼각행렬로 만드는 numpy path이다. `mask = mask` 코드가 `1`로 표시된 부분을 제외하고 출력하게 한다. 한편 `mask` 형태는 다음과 같다.
```python
# array([[1., 1., 1., 1., 1., 1., 1.],
#        [0., 1., 1., 1., 1., 1., 1.],
#        [0., 0., 1., 1., 1., 1., 1.],
#        [0., 0., 0., 1., 1., 1., 1.],
#        [0., 0., 0., 0., 1., 1., 1.],
#        [0., 0., 0., 0., 0., 1., 1.],
#        [0., 0., 0., 0., 0., 0., 1.]])
```
**[ 마스크 적용 전과 적용 후 Heatmap 한 번에 보기 ]** <br/>
![heatmap_coolwarm2] <br/>
![heatmap_mask] <br/>