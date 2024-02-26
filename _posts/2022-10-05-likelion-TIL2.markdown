---
layout: post
title:  "TIL | FinanceDataReader"
date:   2022-10-05 12:00:09 +0900
categories: Python_DataAnalysis
tags: [TIL]
---
# [ 1005 ] FinanceDataReader를 통한 여러 종목 수익률 비교

#### 👩🏻‍💻 오늘코드 실시간 강의 _ 박조은님

이전 게시물 [**[ 1005 ] 서울특별시 다산콜센터(120)의 주요 민원**](https://seul1230.github.io/2022_likelion/2022-10-05-likelion-TIL1/)과 이어지는 내용이다.


<br/>

### 📑 <mark style='background-color: #f6f8fa'> 이론 및 개념</mark> 📑

- Jupyter lab은 좀 더 진화된 버전
- 실습은 Jupyter notebook으로 진행 
- ais7-likelion > ais7 > ‘경로 확인.ipynb’
  - %pwd : 현재 작업 중인 디렉터리 확인
  - 강의 교안 보고 jupyter extension 설치해보기
- Jupyter notebook에서 도움말 보기 : Shift + Tab + Tab

##### FinanceDataReader를 통한 여러 종목 수익률 비교
- esc + o : output 숨기기
- FinanceDataReader
    - 설치 : `!pip install -U finance-datareader`
    - 버전 확인
      ```python
      import FinanceDataReader as fdr
      fdr.__version__
      ```
- KRX 일부 종목 가져오기
  ```python
  fdr.StockListing(“KRX”)
  ```
- 일별 시세 수집 위해 종목코드 찾기
    - left -> df_top10 / right -> df_krx
    ```python
    df_top10.merge(df_krx, left_on = "종목별", right_on = "Name")
  ```

- 일별 시세 수집
  ```python
  # 카카오 035720 
  fdr.DataReader("035720", "2022")["Close"]
  ```
- 여러 종목의 종가 수집
    - list comprehension을 이용하자
  ```python
  item_list = [fdr.DataReader(sym, "2022")["Close"] for sym in df_10["Symbol"]]
  ```

##### 시각화를 위한 폰트 설정
- Koreanize-matplotlib
- 설치 코드 : `!pip install koreanize-matplotlib`
    ```python
    import koreanize_matplotlib
    # 그래프에 retina display 적용
    %config InlineBackend.figure_format = 'retina'
    ```

##### Graph
- 가능한 style 종류 보기
  ```python
  import matplotlib.pyplot as plt
  print(plt.style.available)
  ```
- 그래프 그리기
  ```python
  plt.style.use("ggplot")
  df.plot(figsize = (10,5), title = "2022년 TOP 10 종목 종가")
  ```

- 범례 위치 바꾸기
  ```python
  plt.legend(bbox_to_anchor = (1,1))
  ```

- 기준선 표시
  ```python
  plt.axhline(0, c = 'k')
  ```
  - **k** : black
  - **<font color='red'>r</font>** : red
  - **<font color='dodgerblue'>b</font>** : blue

![2022_top10](/assets/img/img_221005/2022_top10.png){: .center} <br/><br/>

🤔 **pandas plot VS matplotlib**

pandas plot이 matplotlib보다 <br/>
더 한 눈에 알아보기 쉽고 좀 더 간단하게 그래프를 그릴 수 있다.

##### 왜도와 첨도 <font color = 'lightgray'>skewness and kurtness</font>
- **왜도** : 양의 값이면 오른쪽 꼬리가 길고, 음의 값이면 왼쪽 꼬리가 길다.
  ```python
  df_norm.skew()
  ```
- **첨도** : 3보다 작으면 완만 납작, 3보다 크면 뾰족한 분포
  ```python
  df_norm.kurt()
  ```

##### Resampling
- 월별로
  ```python
  df_norm.resample(“M”).median()
  ```


- 분기별로
  ```python
  df_norm.resample(“Q”).median()
  ```

  ![df_norm_Q](/assets/img/img_221005/df_norm_Q.png){: .center} <br/><br/>
  
  ```python
  df_norm['삼성전자'].resample("Q").agg(["mean", "median"])
  ```

  ![df_norm_Q_agg](/assets/img/img_221005/df_norm_Q_agg.png){: .center width="30%"} <br/><br/>

***

### 🚗 <mark style='background-color: #f6f8fa'> 실습 예제 코드 </mark> 🚙

##### 여러 종목 한 번에 시각화하기
```python
# 2개의 종목 비교하기 : "삼성전자", "LG화학" 을 plot으로 시각화 합니다.
df[["삼성전자", "LG화학"]].plot()
```
![sam_lg](/assets/img/img_221005/sam_lg.png){: .center width="70%"} <br/><br/>

삼성과 LG화학의 종가 scale이 다르기 때문에 위처럼 시각화하면 LG화학의 변화를 알기 어렵다. scale을 맞춰주기 위해 추가로 보조축을 지정해주자.

```python
# secondary_y를 사용해 2축 그래프 그리기
df[["삼성전자", "LG화학"]].plot(secondary_y = "LG화학")
```
![sam_lg_secondary](/assets/img/img_221005/sam_lg_secondary.png){: .center width="70%"} <br/><br/>

#### 전체 종목 수익률 시각화
**1. 상장종목 목록 가져오기**
```python
url = "https://finance.naver.com/sise/entryJongmok.naver?&page=1"
df_top10 = pd.read_html(url)[0].dropna()
df_top10
```
![df_top10](/assets/img/img_221005/df_top10.png){: .center width="70%"} <br/><br/>

**2. 전체 상장종목에서 종목코드와 종목명만 가져오기**

```python
df_krx = fdr.StockListing("KRX")
df_krx
```
![df_krx](/assets/img/img_221005/df_krx.png){: .center} <br/><br/>
```python
df_krx = df_krx[["Name", "Code"]]
df_krx
```
![df_krx_name_code](/assets/img/img_221005/df_krx_name_code.png){: .center width="20%"} <br/><br/>

**3. 국내 TOP 10 종목만 가져오자.**
   
```python
for sym in df_10["Code"]:
    print(sym)

item_list = [fdr.DataReader(sym, "2022")["Close"] for sym in df_10["Code"]]

# 수집한 리스트를 axis=1(컬럼)을 기준으로 병합(concat) 합니다.
df = pd.concat(item_list, axis = 1)
df.columns = df_10["Name"]
df
```
![df_merge_item_lst](/assets/img/img_221005/df_merge_item_lst.png){: .center width="90%"} <br/><br/>

**4. 전체 DataFrame 값에 대한 수익률 계산하기**

`LG에너지솔루션`은 최근에 상장해서 이전의 데이터가 없다. 계산할 때 따로 처리를 해주자.

```python
df_norm = df / df.iloc[0] - 1
df_norm["LG에너지솔루션"] = df["LG에너지솔루션"].dropna() / df["LG에너지솔루션"].dropna()[0] - 1
df_norm
```
![df_norm](/assets/img/img_221005/df_norm.png){: .center} <br/><br/>

```python
# df_norm 변수에 담긴 전체 종목에 대한 수익률을 시각화 합니다.
df_norm.plot(figsize = (10,5), title = "2022년 TOP 10 종목 수익률")
plt.axhline(0, c = 'k') # black -> k
plt.legend(bbox_to_anchor = (1,1))
```
![2022_top10](/assets/img/img_221005/2022_top10.png){: .center} <br/><br/>


### 다음 포스트에서 만나요 🙌
뒷 내용은 [**1005 데이터 분석 TIL (3)**](https://seul1230.github.io/2022_likelion/2022-10-05-likelion-TIL3/)에서 이어서 작성한다.
FinanceData를 이용해 여러 종목 수익률을 plotly로 시각화를 해볼 예정이다.



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
