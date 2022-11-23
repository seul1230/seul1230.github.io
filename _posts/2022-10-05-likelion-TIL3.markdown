---
layout: post
title:  "2022_likelion TIL"
date:   2022-10-05 12:00:09 +0900
categories: Python_DataAnalysis
---
# [ 1005 ] FinanceDataReader를 통한 여러 종목 daily price plotly로 비교

## 👩🏻‍💻 오늘코드 실시간 강의 _ 박조은님

**📚 FinanceDataReader를 통한 여러 종목 daily price plotly로 비교**

이전 게시물 [**[ 1005 ] FinanceDataReader를 통한 여러 종목 수익률 비교**](https://seul1230.github.io/2022_likelion/2022-10-05-likelion-TIL2/)과 이어지는 내용이다.


<br/>

***

## 📑 이론 및 개념 📑

#### Python 데이터 시각화 도구

-  **BI (Business Intelligence)** : Tableau 등 기업 내의 다양한 부서의 누적된 정보를 모아 분석, 가공하여 경영상의 의사 결정에 도움을 얻기 위한 개념
    - 🙁 : 라이센스 비용 부담
- **Bokeh** : 대화형 시각화를 만들기 위한 파이썬 라이브러리로, Autobiz에서 시각화하는 과정에서 사용됨
- **seaborn** : matplotlib 기반 데이터 시각화 라이브러리
    - **FacetGrid**
      - 데이터셋의 하위 집합 내에서 개별적으로 변수의 분포 또는 여러 변수 간의 관계를 시각화
    - **PairGrid** 
      - 작은 subplot의 그리드를 빠르게 그려 각각의 데이터 시각화
    - **🫢 둘의 차이점** 
      - 하나의 범주형 변수를 범주값에 따라 여러 개로 나눠 그려주는 FacetGrid와 달리 PairGrid는 여러 변수를 나눠 그림

#### plotly를 이용해 동적 시각화
- 설치 코드 
  - `!pip install plotly --upgrade`

##### **plotly 내장 stocks 데이터**를 이용해 그래프를 그리자
  - **데이터** 
    - `px.data.stocks()`
  - **선그래프** 
    - `px.line(df, x = "date", y = "GOOG")`
    - interactive 시각화는 보통 한글 설정이 필요없음

- **facet_col**
  - subplot을 그리려면 columns의 이름을 정해줘야한다.
  - `df_1.columns.name = "company"`
  - `px.area(df_1, facet_col = "company", facet_col_wrap = 2)`

- **hover_data**
  - `hover_data= {“date”: “|%Y-%m-%d”}`
  - 그래프 hover시에 date의 형식을 지정해줄 수 있음.
- **Range Slider와 시계열 그래프**
  - `fig.update_xaxes(rangeslider_visible = True)`

<br/>

**🤔 plotly가 기능이 더 많은데 matplotlib을 사용하는 이유?**

- matplotlib의 속도가 훨씬 빠름
- 속도 높이기 위한 방법
  - 대표값을 표시해야 한다면 그래프에서 계산하지 않고 미리 계산해서 시각화 하기

#### 캔들 차트 <font color="lightgray">Candle Chart</font>
- 참고 문서 : https://plotly.com/python/candlestick-charts/
- 외국 : **<font color = "green">초록</font>**이 상승, **<font color = "red">빨강</font>**이 하락


#### OHLC 차트 <font color="lightgray">Open-High-Low-Close</font>
- Range Slider 제외하려면?
  - 밑의 코드 추가해주기
  - `fig.update_layout(xaxis_rangeslider_visible=False)`


***

## 💻 실습 예제 코드

### 1. 필요한 라이브러리 로드

```python
# plotly 최신버전을 사용해 주세요. 최신버전이 아닐 때 동작하지 않을 수 있습니다.
!pip install plotly --upgrade
```

```python
import plotly.express as px
```

### 2. plotly 예제 따라하기

[참고 : Time Series and Date Axes in Python](https://plotly.com/python/time-series/)

```python
# px 에서 내장하고 있는 data.stocks 데이터를 불러옵니다.
df = px.data.stocks()
```
![](/assets/img/img_221005/data_stocks.png){: .center width="60%"}<br/><br/>

### 3. 일별 수익률 선그래프 그리기

```python
px.line(df, x = "date", y = "GOOG", title = "일별 시세")
```

![](/assets/img/img_221005/line_GOOG.png){: .center width="50%"}<br/><br/>

```python
# pandas API
df.set_index("date").plot()
```
![](/assets/img/img_221005/date_plot.png){: .center width="50%"}<br/><br/>

```python
_ = df.set_index("date").plot(kind = "area", subplots = True)
```
![](/assets/img/img_221005/date_subplots_area.png){: .center width="50%"}<br/><br/>

```python
px.line(df.set_index("date"))
```
![](/assets/img/img_221005/date_subplots_line_px.png){: .center width="50%"}<br/><br/>

### 4. 일별 수익률 막대그래프 그리기

```python
df_1 = df.set_index("date") - 1
```
![](/assets/img/img_221005/date_profits.png){: .center width="50%"}<br/><br/>

```python
px.bar(df_1["GOOG"])
```
![](/assets/img/img_221005/date_profits_GOOG.png){: .center width="50%"}<br/><br/>

### 5. facet_col을 이용한 서브플롯 그리기

```python
df_1.columns.name = "company"
df_1.columns
```
```
Index(['GOOG', 'AAPL', 'AMZN', 'FB', 'NFLX', 'MSFT'], dtype='object', name='company')
```

```python
# px.area 로 수익률 분포를 그립니다.
# facet_col 을 통해 서브플롯을 그릴 수 있습니다.
px.area(df_1, facet_col = "company", facet_col_wrap = 2)
```
![](/assets/img/img_221005/profits_facetcol_company.png){: .center width="50%"}<br/><br/>

### 6. 여러 종목을 하나의 그래프로 표현하기

```python
# px.line 으로 전체 데이터의 수익률을 구합니다.
# hover_data={"date": "|%Y-%m-%d"} 로 시간을 표현할 수 있습니다.
px.line(df, hover_data={"date": "|%Y-%m-%d"})
```
![](/assets/img/img_221005/profits_hover.png){: .center width="50%"}<br/><br/>

### 7. Range Slider와 함께 시계열 그래프 그리기

```python
fig = px.line(df_1["GOOG"])
fig.update_xaxes(rangeslider_visible=True)
fig.show()
```
![](/assets/img/img_221005/profits_rangeslider.png){: .center width="50%"}<br/><br/>

### 8. Candle Chart 그리기

[참고 : Candlestick Charts in Python](https://plotly.com/python/candlestick-charts/)

```python
# plotly.graph_objects 를 go라는 별칭으로 불러옵니다.
import plotly.graph_objects as go
from datetime import datetime

df = pd.read_csv('https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv')
```

```python
df = pd.read_csv('https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv')
fig = go.Figure(data=[go.Candlestick(x=df['Date'],
                open=df['AAPL.Open'],
                high=df['AAPL.High'],
                low=df['AAPL.Low'],
                close=df['AAPL.Close'])])

fig.show()
```
![](/assets/img/img_221005/go_candlestick.png){: .center width="50%"}<br/><br/>


### 8. OHLC 차트 <font color = "lightgray">Open-High-Low-Close</font>

[참고 : OHLC Charts in Python](https://plotly.com/python/ohlc-charts/)

![](/assets/img/img_221005/ohlc_chart_def.png){: .center width="50%"}<br/><br/>

```python
# go.Ohlc를 그립니다.
fig = go.Figure(data=[go.Ohlc(x=df['Date'],
                open=df['AAPL.Open'],
                high=df['AAPL.High'],
                low=df['AAPL.Low'],
                close=df['AAPL.Close'])])

fig.show()
```

![](/assets/img/img_221005/go_ohlc.png){: .center width="50%"}<br/><br/>

### 9. Candlestick without RangeSlider
```python
fig = go.Figure(data=[go.Candlestick(x=df['Date'],
                open=df['AAPL.Open'],
                high=df['AAPL.High'],
                low=df['AAPL.Low'],
                close=df['AAPL.Close'])])

fig.update_layout(xaxis_rangeslider_visible=False)
```
![](/assets/img/img_221005/candle_wo_rangeslider.png){: .center width="50%"}<br/><br/>

### 10. 직접 수집한 주가 데이터로 시각화 해보기

#### 데이터 불러오기
```python
# FinanceDataReader의 DataReader는 미국 주식의 경우 종목코드대신 티커(Ticker)를 사용합니다.
# 티커는 약자와 비슷합니다.(마이크로소프트:MSFT, 스타벅스:SBUX 등)
amd = fdr.DataReader("amd", "2022")
amd
```

![](/assets/img/img_221005/amd_df.png){: .center width="50%"}<br/><br/>

#### 선그래프 그리기
```python
px.line(amd, y = "Close", title = "Advanced Micro Devices 일별 종가")
px.line(amd.iloc[:,:4], title = "Advanced Micro Devices 일별 종가")
```
![](/assets/img/img_221005/amd_line.png){: .center}<br/><br/>



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
