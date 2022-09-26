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
멋사 AI 매주 월요일에서 목요일은 교육 시간 내내 박조은님과 함께 데이터 분석에 대해 배운다. <br/>
조은님 조곤조곤 목소리도 너무 좋으시고 질문에도 친절하게 답변해주시고,, 쉬는시간이랑 점심시간도 너무 잘 지켜주셔서 행복..🫶🏻 오늘 조은님이 내 이름 불러주셨다..!! 어쩌다 보니 여섯번은 불러주신듯,, 히히


## 📚 오늘의 TIL - 파이썬 데이터 분석 기초

### Census Dataset
Census Dataset(인구 조사 데이터)는 총계수, 표본조사, 관리기록과 같은 방법론을 사용하여 정기적으로 수집된다. 인구조사 데이터가 수집 또는 생성된 후, 인구조사 데이터는 서로 다른 지리적 영역에 대한 인구 집단의 수 또는 추정치를 나타내기 위해 요약된다.<br/>
**[ 출처 ]** [What is Census Data?](https://www.socialsciencespace.com/2020/01/what-is-census-data/#:~:text=Census%20data%20is%20collected%20at,people%20for%20different%20geographic%20areas.)<br/>
**[ Dataset ]** [Census Dataset 보러가기](https://pandas-profiling.ydata.ai/examples/master/census/census_report.html) <br/>
![census_example](assets/img_220926/census_example.png)

### 데이터셋 불러오기
Seaborn에 내장된 데이터 불러오기
```python
df = sns.load_dataset(“mpg”)
df
```

> 현재 mpg dataset은 seaborn에 내장되어 있는 데이터셋입니다. <br/> 메모리에 저장되어 있고, 오늘은 pandas의 dataframe으로 다룰 예정입니다. <br/>저장은 원하면 csv, xls, parquet 등등으로 저장할 수 있습니다. <br/>- 규호님

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

- **Variance**
    - 확률변수가 기댓값으로부터 얼마나 떨어진 곳에 분포하는지를 가늠하는 숫자. 얼마나 넓게 퍼져있는지를 나타낸다. 
    - [위키백과>분산](https://ko.wikipedia.org/wiki/%EB%B6%84%EC%82%B0)를 참고했음.
- **Standard deviation**
    - 분산의 제곱근을 취한 값
- **Covariance (공분산)**
    - 두 변수가 각자의 평균으로부터 멀어지는 값
- **Correlation coefficient (상관계수)**
    - 두 변수 사이의 통계적 관계를 표현하기 위해 특정한 상관 관계의 정도를 수치적으로 나타낸 계수
- **Skewness (왜도)**
    - symmetrical bell curve 혹은 normal distribution에서 왜곡 정도를 말한다. 데이터 분포의 대칭성이 얼마나 결핍되었는지를 측정한다. 완전히 대칭인 분포는 skewness가 0이다. 데이터에 따라 왜도 값이 정의되지 않을 수도 있다.<br/>
    ![skew_pic] <br/>
    - skewness가 -0.5~0.5일 경우 : 대칭적
    - skewness가 -1~0.5일 경우 : 적당히 치우침
    - skewness가 1보다 크거나 -1보다 작은 경우 : 상당히 치우침
    - skewness가 0이면 평균과 중앙값이 같다.
    - skewness가 양수일 때는 확률밀도함수의 오른쪽 부분에 긴 꼬리, 자료가 왼쪽에 더 많이 분포 <br/>

```python
# skew를 통해 전체 수치변수에 대한 왜도 구하기
df.skew()
```
![skew값코드로확인] <br/>
- **Kurtosis (첨도)**
    - 확률 분포의 뾰족한 정도를 나타내는 척도
    - 관측치들이 어느 정도 집중적으로 중심에 몰려 있는가를 측정할 때 사용한다.
    - 첨도값(K)이 3에 가까우면 산포도가 정규분포에 가깝다.
    - 3보다 작을 경우에는(K<3) 산포는 정규분포보다 더 뾰족한 분포(꼬리가 얇은 분포)
```python
df.kurt().sort_values(ascending = False)
```

![kurt값코드로확인] <br/>
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
![autoviz_report] <br/>

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
![autoviz_filelst] <br/>
위의 그림에서 파일을 다운받아 실행하면 아래 그림과 같은 동적인 시각화 파일을 얻을 수 있다. <br/>
![autoviz_example] <br/>


###  위와 같은 추상화된 도구를 사용하게 되면 😐
기술통계에 대해 자동으로 시각화되지만 <br/>
대용량 데이터로 report를 출력하려고 하면 시간이 오래 걸리고, 미세한 컨트롤이 불가능하다는 단점이 있다.

<br/>

### 다음 포스트에서 만나요 🙌
내용이 생각보다 길어져서 남은 내용은 **0926 데이터 분석 TIL (2)**에서 이어서 작성해야겠다.