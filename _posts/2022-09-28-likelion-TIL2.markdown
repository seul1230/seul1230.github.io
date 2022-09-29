---
layout: post
title:  "0928 데이터 분석 TIL"
date:   2022-09-28 16:05:09 +0900
categories: 2022_likelion
---
# 0928 데이터 분석 TIL (2) _ ETF 데이터 수집



## 👩🏻‍💻 오늘코드 실시간 강의 _ 박조은님

[**0928 데이터 분석 TIL (1)**](https://seul1230.github.io/2022_likelion/2022-09-28-likelion-TIL1/)와 이어지는 TIL 내용이다. 
<br/>

## 📚 오늘의 TIL - ETF 데이터 수집

- [🐾　ETF(상장지수펀드)　🐾](#---etf-----------)
- [🐾　JSON 타입으로 데이터 받기　🐾](#---json---------------)
  * [Pandas와 Requests를 통해 데이터를 받아볼까.](#pandas--requests--------------)
    + [💡 CRUD?](#---crud-)
    + [💡 웹 스크래핑과 API 비교](#-----------api---)
  * [JSON에서 원하는 데이터 찾기](#json-------------)
  * [JSON 데이터를 DataFrame 형태로 만들기](#json------dataframe--------)
- [🐾　데이터 확인　🐾](#------------)
- [🐾　오늘 날짜로 파일 저장하기　🐾](#--------------------)
  * [파일 이름 정하기](#---------)
  * [파일로 저장하고 불러오기](#-------------)


### 🐾　ETF(상장지수펀드)　🐾
- 기초지수의 성과를 추적하는 것이 목표인 인덱스펀드
- 거래소에 상장되어 있어서 개별주식과 마찬가지로 기존의 주식계좌를 통해 거래를 할 수 있다. 그 구성종목과 수량 등 자산구성내역(PDF)이 투명하게 공개되어 있고, 장중에는 실시간으로 순자산가치(NAV)가 제공되어 거래에 참고하실 수 있다. 
- ETF는 1좌를 거래할 수 있는 최소한의 금액만으로 분산투자 효과를 누릴 수 있어 효율적인 투자수단이며, 펀드보다 운용보수가 낮고 주식에 적용되는 거래세도 붙지 않는다. 

**[ 출처 ]** : [ETF - 네이버 금융](https://finance.naver.com/sise/etf.nhn) <br/>


### 🐾　JSON 타입으로 데이터 받기　🐾
#### Pandas와 Requests를 통해 데이터를 받아볼까.
[ETF - 네이버 금융](https://finance.naver.com/sise/etf.nhn) 페이지에서 데이터를 받아오고 싶어서 url을 다음과 지정한 후 코드를 실행해보니, `pd.read_html`이나 `requests.get(url).text`로는 내가 원하는 정보를 얻을 수 없다.
```python
url = "https://finance.naver.com/sise/etf.nhn"
print(url)
```
이번에도 '검사 > Network > JS > Request URL'로 가서 url 정보를 얻어오겠다. 이때 callback은 이슈가 있을 수 있어 제외하고 requests 라이브러리를 통해 url을 받아오겠다. 
```python
# requests 라이브러리를 통해 url을 받아옵니다.
url = "https://finance.naver.com/api/sise/etfItemList.nhn?etfType=0&targetColumn=market_sum&sortOrder=desc"
response = requests.get(url)
response
```
```python
response.text
```
![etf_json](/assets/img/img_220927/.png){: width="30%" height="30%"} <br/>

##### 💡 CRUD?
##### 💡 웹 스크래핑과 API 비교
- 웹 스크래핑은 브라우저에 보여지는 정보를 사용자가 자동화된 툴로 수집하는 것이다.
- API(Application Programming Interface)
    - [Naver API 공통 가이드](https://developers.naver.com/docs/common/openapiguide/apilist.md#%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EB%B0%A9%EC%8B%9D-%EC%98%A4%ED%94%88-api)
    - [공공데이터 API 이용 가이드](https://www.data.go.kr/ugs/selectPublicDataUseGuideView.do)

#### JSON에서 원하는 데이터 찾기
result > etfItemList 의 하위 구조로 목록을 찾고자 하는 데이터를 가져오는 코드이다. 
```python
etfItemList = etf_json["result"]["etfItemList"]
print(len(etfItemList))
etfItemList[-1]
```
<br/>

![json_etfItemList](/assets/img/img_220927/.png){: width="30%" height="30%"} <br/><br/>

#### JSON 데이터를 DataFrame 형태로 만들기
```python
df = pd.DataFrame(etfItemList)
df.head()
```
![json_dataframe](/assets/img/img_220927/.png){: width="30%" height="30%"} <br/><br/>

### 🐾　데이터 확인　🐾
데이터의 `column`은 `itemcode`, `etfTabCode`, `itemname`, `nowVal`, `risefall`, `changeVal`, `changeRate`, `nav`, `threeMonthEarnRate`, `quant`, `amount`, `marketSum` 으로 이루어져 있다.
<br/>
`itemname`는 자산 운용사의 이름을 포함하고 있다.
<br/>
자산 운용사의 이름만 따로 "브랜드"의 열에 지정을 해주자.

```python
df["브랜드"] = df["itemname"].str.split(expand = True)[0]
df.head(2)
```
![df_brand](/assets/img/img_220927/.png){: width="30%" height="30%"} <br/><br/>
음! 잘 추가되었군.

### 🐾　오늘 날짜로 파일 저장하기　🐾

우선 오늘 날짜를 알아오자. 파이썬 표준라이브러리 `datetime` 를 이용한다.

#### 파일 이름 정하기
```python
from datetime import datetime
today = datetime.today().strftime("%Y-%m-%d")
# '2022-09-28'

file_name = f"etf-{today}_raw.csv"
# 'etf-2022-09-28_raw.csv'
```
#### 파일로 저장하고 불러오기
```python
df.to_csv(file_name, index = False)

# itemcode 숫자 앞의 0 이 지워진다면 dtype={"itemcode": np.object} 로 타입을 지정해 주면 문자형태로 읽어옵니다.
pd.read_csv(file_name, dtype={"itemcode": np.object})
```
![etf_raw_0928](/assets/img/img_220927/.png){: width="30%" height="30%"} <br/>



<!-- ### 🐾　ETF란　🐾
### 🐾　ETF란　🐾
### 🐾　ETF란　🐾
### 🐾　ETF란　🐾
### 🐾　ETF란　🐾
### 🐾　ETF란　🐾 -->
