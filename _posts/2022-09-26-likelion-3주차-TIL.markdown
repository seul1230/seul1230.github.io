---
layout: post
title:  "0926 데이터 분석 TIL"
date:   2022-09-26 09:10:09 +0900
categories: 2022_likelion
---
# 0926 데이터 분석 TIL

** 이미지 삽입 방법 공부해서 이미지 삽입까지 해서 마무리하기 **

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

![toggle_cate] <br/>
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
    - symmetrical bell curve 혹은 normal distribution에서 왜곡 정도를 말한다. 데이터 분포의 대칭성이 얼마나 결핍되었는지를 측정한다. 완전히 대칭인 분포는 skewness가 0이다.
￼
    - skewness가 -0.5~0.5일 경우 : 대칭적
    - skewness가 -1~0.5일 경우 : 적당히 치우침
    - skewness가 1보다 크거나 -1보다 작은 경우 : 상당히 치우침
    - skewness가 0이면 평균과 중앙값이 같다.
    - skewness가 양수일 때는 확률밀도함수의 오른쪽 부분에 긴 꼬리, 자료가 왼쪽에 더 많이 분포
- Kurtosis (첨도)
    - 분포 그래프의 꼬리 부분
    - 정점(peakness)이나 평탄도(flatness)가 아니라 극단적인 값들을 한 꼬리와 다른 꼬리로 설명하는 데 사용된다. 분포에 존재하는 특이치(outlier)의 척도다.
<br/><br/>
Skewness와 Kurtosis는 오늘 수업에서 처음 들어봤다. <br/>
더 구체적인 예시를 알고 싶다면 [Skewness와 Kurtosis 설명](https://dining-developer.tistory.com/17)를 참고하면 좋을 것 같다.

- pandas 에서 corr 값을 구할 때 어떤 기본 값을 사용할까?
    - 피어슨 상관계수



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

