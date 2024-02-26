---
layout: post
tags: [TIL Python]
title:  "2022 멋사 AI | 2주차 TIL"
date:   2022-09-22 16:10:09 +0900
published: false
categories: Python_DataAnalysis
---
# [ 0920 - 0923 ] 멋사 TIL


 **[ 0920 TUE ] 파이썬과 판다스 기초**
> python 들여쓰기 4칸 권장  (Python 공식문서) 


### If 문 
-  if-elif-else문 기본 구조
```python
if 조건문:
    수행할 문장A
    수행할 문장B
    ...
elif 조건문:
    수행할 문장C
    수행할 문장D
else:
    수행할 문장E
    수행할 문장F
    ...
```

### 반복문
 - For문
 - Range 함수 `range(start, end, step)`
: `start`에서 `end-1`까지 `step`만큼 이동
 - Enumerate
: `index`와 `value`에 동시에 접근하면서 `loop` 돌릴 수 있음
 - While 문
: 조건식이 `true`인 경우에 계속해서 반복하는 문법. <br/> &nbsp; 조건식이 `false`가 되면 반복을 멈추고 while문 종료


### Format
 : `"%형식문자"`로 지정하면 % 뒤의 출력 대상들이 `1:1`로 대응되어 출력<br/>
&nbsp;&nbsp; - `%s` : 문자열, `%d` : 정수, `%f` : 실수<br/>
&nbsp;&nbsp; -  `%03d` : 정수를 `3`칸에 맞추어 출력하는데 앞의 빈칸은 `0`으로 채워라.<br/>
&nbsp;&nbsp; -  `%6.2f` : 실수를 전체 `6`칸, 소수 이하 `2`칸에 맞추어 출력해라.


   
### Function (함수)
 - def func
```python
def order():     
    print('주문하실 음료를 알려주세요') drink = input() 
    print(drink, '주문하셨습니다.') 
```
 - `func` ? <br/>
Docstring 볼 수 있음. 모듈, 함수, 클래스 또는 메소드 정의의 첫 번째 명령문으로 발생하는 문자열 리터럴
 - `func` ?? <br/>
Docstring에 대한 소스 코드를 확인할 수 있음


### 문자열 전처리
 - `replace` 
: 문자열 변경
 - `split` 
: 문자열 분리
 - `strip` 
: 양옆 공백 제거 <br/>
`rstrip` : 오른쪽 공백 제거 <br/>
`lstrip` : 왼쪽 공백 

<br/>

### Pandas
#### : 파이썬의 대표적인 데이터 분석 도구
 - DataFrame 
: 2차원 index & column
 - tolist 
: list 형태로 변경
 - drop
 `axis = 1` : 열 제거,  `axis = 0` : 행 제거
 - inplace 
: 기존 데이터프레임에 변경된 설정으로 덮어쓰겠다는 의미
 - shape
: 데이터프레임의 크기를 출력
 - dtypes
: 데이터의 타입만
 - describe     
수치형 데이터의 기술통계값 / `include = "object"` 추가하면 범주형 데이터의 기술통계값


<br/>

***
<br/>

  **[ 0921 WED ] 판다스 기초와 Seaborn**
> 지난 시간 실습 내용 복습 
>   > 파이썬에서 2개 이상의 데이터 다룰 때는 리스트 자료형으로  -> df[[‘약품명’, ‘종류’]]<br/>

### DataFrame
  - `loc`
   : 행을 기준으로 데이터프레임  가져올 때 
    ex) df.loc[:2, [‘약품명’, ‘가격’]]
  - `iloc`
   : 인덱스를 기준으로 데이터프레임을 가져옴
    ex) df.iloc[:3, :2]
  - `set_index(idx)`
   : idx 값으로 인덱스 설정 
  - `str.contains(word)`
   : word 포함 여부에 따라 bool로 반환
    ex) df[df[‘약품명’].str.contains(“vita”)] -> “vita” 포함하는 데이터만 가져오기
  - `str.upper()` / `str.lower()`
   : Series형 자료를 대 / 소문자로 바꿔줌
  - Accessors
   - dt
    : Series형 -> DateTime, Timedelta, Period
   - cat
    : Series형 -> Categorical
   - str
    : Series -> String
   - sparse
    : Series -> Sparse 
  - sort
    - `sort_values`
      : by = [기준], ascending = True / False
  - corr : 상관계수
  - `value_counts()` : 한개의 값에 대한 빈도수
    - normalize = True 추가하면 비율로 볼 수 있음
  - `Grouby`를 통한 dataset별 기술통계
    ex) df.groupby(“dataset”)[[“x”, “y”]].describe()

### 앤스컴 콰르텟
  : 기술통계량은 유사하지만 분포나 그래프가 매우 다른 4개의 데이터셋

### seaborn
  : `matplotlib` 기반 파이썬 데이터 시각화 라이브러리 <br/>
    High-level interface + informative statistical graphics
  - count plot
  - bar plot
  - box plot
  - violin plot : 히스토그램의 밀도 추정
    - `hue`는 label을 구별할 수 있는 기능
  - displot : 변수 1~2개의 값 분포를 나타내기 위해 주로 사용
    - `kde`는 kernel density estimate로, 비율을 시각화하여 1~2개의 변수에 대한 분포를 그릴 수 있음
  - relplot : 두 가지 변수의 관계를 나타내기 위해 주로 사용
  - catplot : 범주형 변수와 연속형 변수간의 관계를 나타내기 위해 주로 사용
  - scatterplot : 데이터의 분포를 점으로 나타냄
  - regplot : 회귀선을 구할 수 있음 -> `hue` 지원 안 됨 -> lmplot 이용하자
  - lmplot -> `col_wrap = 2`하면 한 줄에 그래프 두개씩 표현 가능

### 상관계수의 범위
  - 범위 : `-1` ~ `+1`
  - 보통 Pearson linear correlation, PLCC 의미
  - `1`에 가까울수록 강한 양의 상관관계를 나타냄  
    

### 일부 데이터만 가져오기
  - `head(n=5)` / `tail(n=5)` : 데이터의 처음 / 끝에서 다섯개씩 가져옴
  - `sample(fraction, random_state)` : 랜덤으로 데이터 fraction 비율만큼 보여주기



<br/>

***
<br/>

  **[ 0922 THU ] Insight Day**
### 🤹 [오전] 복습 + [오후] 발표 + 재잘재잘 회고 + 자기주도학습
인사이트 데이는 처음인데 강의 안 듣고 재잘재잘팀이랑 얘기해서 그런가 뭔가 신이 난다! 어제 정한 `EDA`라는 키워드로 복습 자료를 만들었는데 운 좋게 TOP3 팀으로 뽑혀서 발표도 하게 됐다. Lucky ~ 🍀 한 번 뽑히니까 담주도 욕심이 난다. 열심히 해보쟝 :) 🐶 댕댕e와 냥냥e 🐱 최고!!

### Github pages 생성 및 Post Upload하기
`github.io`라는 주소가 멋있어서 깃허브 블로그를 시작해보자고 마음을 먹었다. 만만하게 봤는데 macOS가 아직 서툴기도 하고 다른 블로그보다 복잡해서 github page를 생성하기만 했는데도 꽤 많은 시간이 걸렸다ㅜㅜ 자세한 과정은 다음 포스트에 첨부해야지. 커스텀은,, 차차 해야겠다!

<br/>