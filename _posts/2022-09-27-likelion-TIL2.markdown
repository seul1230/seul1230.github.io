---
layout: post
title:  "0927 데이터 분석 TIL 2"
date:   2022-09-27 13:05:09 +0900
categories: 2022_likelion
---
# 0927 데이터 분석 TIL (2) _ 웹 스크래핑과 크롤링

## 👩🏻‍💻 오늘코드 실시간 강의 _ 박조은님

[**0927 데이터 분석 TIL (1)**](https://seul1230.github.io/2022_likelion/2022-09-27-likelion-TIL1/)와 이어지는 TIL 내용이다. 


## 📚 오늘의 TIL - 웹 스크래핑과 크롤링

### 🐾　Requests : HTTP for Humans　🐾
: 작은 브라우저로 웹사이트를 읽어오는 것이 목적

- GET
    - 필요한 데이터를 Query String에 담아 전송

- POST
    - 전송할 데이터를 HTTP 메시지의 Body의 Form Data에 담아 전송
    - post 는 회원 가입할 때 적은 정보 폼, 물건이나 음식 주문할 때 메시지 입력하고 버튼 누를 때 주로 사용된다.


### FinanceDataReader
: 한국 주식 가격, 미국주식 가격, 지수, 환율, 암호화폐 가격, 종목 리스팅 등 금융 데이터 수집 라이브러리 _ kb 이승준님 <br/>
**참조** [FinanceDataset](https://github.com/financedata-org/FinanceDataReader) <br/>

- KRX Stock Symbol listings: 'KRX', 'KOSPI', 'KODAQ', 'KONEX'
- Global Stock Symbol listings: 'NASDAQ', 'NYSE', 'AMEX' and 'S&P500', 'SSE'(상해), 'SZSE'(심천), 'HKEX'(홍콩), 'TSE'(도쿄)
- KRX delistings: 'KRX-DELISTING'(상장폐지종목), 'KRX-ADMINISTRATIVE' (관리종목)
- ETF Symbol listings(for multiple countries): 'KR', 'US', 'JP'
- Stock price(KRX): '005930'(Samsung), '091990'(Celltrion Healthcare) ...
- Stock price(Word wide): 'AAPL', 'AMZN', 'GOOG' ... (you can specify exchange(market) and symbol)
- Indexes: 'KS11'(코스피지수), 'KQ11'(코스닥지수), 'DJI'(다우존스지수), 'IXIC'(나스닥지수), 'US500'(S&P 500지수) ...
- Exchanges: 'USD/KRX', 'USD/EUR', 'CNY/KRW' ... (조합가능한 화폐별 환율 데이터 일자별)
- Cryptocurrency price data: 'BTC/USD' (Bitfinex), 'BTC/KRW' (Bithumb)


### FinanceDataReader Install
```python
!pip install -U finance-datareader
```
위의 코드를 이용해 **Finance Data Reader**을 설치한다.
[FiananceDataReader 사용자 안내서](https://financedata.github.io/posts/finance-data-reader-users-guide.html)를 참고하면 좋을 것 같다. 
이렇게 다운받은 **Finance Data Reader**의 버전을 확인하려면
```python
import FinanceDataReader as fdr

fdr.__version__
```
를 실행해주자. 나는 오늘 '0.9.42' 버전으로 진행할 예정이다.

### 한국거래소 상장종목 전체 가져오기
> 현재 파이썬 3.10과 이슈가 있다 - 조은님

```python
# 한국거래소 상장종목 전체 가져오기
df = fdr.StockListing("KRX")
df.shape
# (7890, 19) -> 오늘의 데이터 7890
```
#### Dataset Overview

### 🏦 Finance Data Reader 라이브러리에서 정보 불러오기

#### 데이터 수집
> Selenium은 원래 웹페이지를 테스트하기 위한 도구로서, 로그인이 필요하지 않는 페이지의 정보를 가져올 땐 굳이 추천하진 않아요. - 조은님

pandas의 datareader에 가면 Naver Finance도 불러올 수 있지만 한국 금융 데이터는 Finance DataReader가 가장 좋다.
<br/>

```python
df.isnull().sum()
```
![null_fin] <br/>

한편, 데이터를 보면 결측치가 매우 많다. <br/>
이는 채권이나 다른 상품이 포함된 것으로 보인다. 도메인 지식을 좀 더 쌓도록 하자.

#### 상장한 날짜를 기준으로 정렬해서 나타내기
```python
# 상장한 날짜 ListingDate
df.sort_values(by = "ListingDate", ascending = False).head()
```
![ListingDate_sort] <br/>

#### 이번엔 특정 url에 있는 데이터를 불러오는 법에 대해 알아보자.
```python
url = 'http://kind.krx.co.kr/corpgeneral/corpList.do?method=download&searchType=13'
pd.read_html(url)[0]
```
![url_fin] <br/>


encoding 애기하자.



## 📚 오늘의 TIL - 웹 스크래핑과 크롤링

### ☁️ 데이터 수집시 유의사항
- 로봇 배제 표준
    - Robots exclusion standard
    - 일반적으로 접근 제한에 대한 설명을 robots.txt에 기술
    - [Naver robots.txt](www.naver.com/robots.txt) 구경하러 가기<br/>
    ![robots_txt] <br/>
    - 첫 페이지에 대한 접근만 허용한다는 뜻
- 저작권
    - 저작권 정책 살펴보기
    - Open API -> 실제 서버에 영향 끼치지 않을 수 있음

- 무리한 네트워크 요청
    - 서버 트래픽에 방해가 될 수 있음.
    - 영업 침해가 되지 않도록


### ☁️ HTML 구조 이해
간단하게 말하자면 `<tag>`로 구성되어있다.

### ☁️ CSS 구조 이해
스타일 지정할 때 `id` 값은 앞에 `#`을, `class` 값은 앞에 `.`을 붙인다.


### ☁️ pandas만으로 데이터 수집하기

- charset : 인코딩 방식
- QueryString 
    - 검사 > Network > news_news.naver?code=0.0 ...
    - 완료 후 얻은 [url 주소](https://finance.naver.com/item/news_news.naver?code=005930&page=1&sm=title_entity_id.basic&clusterId=)


`reset_index` > `concat` : index 순차적으로 재설정해서 열 이름 기준으로 합쳐주기

`drop = True` 안 하면 index 열 하나 생성됨 -> 해주자.

얕은 복사하게 되면 참조가 계속 일어나게 되어 자료가 동기화된다. -> `copy` 사용하기

> `~`는 **비트와이즈 연산**이라고 값은 반전시키는 연산을 합니다.`~True`이면 `False`가 되는 형식입니다. - 채현님

중복된 데이터가 있다면 제거 `drop_duplicate`


```python
# get_one_page_news 함수 만들기
def get_one_page_news(item_code, page_no):
    """
    get_url 에 item_code, page_no 를 넘겨 url 을 받아오고
    뉴스 한 페이지를 수집하는 함수
    1) URL 을 받아옴
    2) read_html 로 테이블 정보를 받아옴
    3) 데이터프레임 컬럼명을 ["제목", "정보제공", "날짜"]로 변경
    4) temp_list 에 데이터프레임을 추가
    5) concat 으로 리스트 병합하여 하나의 데이터프레임으로 만들기
    6) 결측치 제거
    7) 연관기사 제거
    8) 데이터프레임 반환
    """
    # get_url로 url 받아오기
    url = get_url(item_code, page_no)   

    # read_html로 테이블 정보 받아오기
    table = pd.read_html(url)[:-1]
    
    # 데이터 컬럼명 변경
    cols = ["제목", "정보제공", "날짜"]
    temp_list = []
    for news in table:
        news.columns = cols
        temp_list.append(news)
        # display(news)
    
    # concat으로 하나의 DataFrame
    df_news = pd.concat(temp_list)

    # 결측치 제거 / 중복 제거
    df_news = df_news.dropna()
    df_news_page = df_news.drop_duplicates()
    
    # 연관기사 제거
    df_news_page = df_news_page[~df_news_page["정보제공"].str.contains("연관기사")].copy()

    # 인덱스 재설정
    df_news_page = df_news_page.reset_index(drop = True)

    return df_news_page

```



## 🌱 회고
첫 번째 으쌰으쌰10팀이랑 두 번째로 만나는 회고 시간 ! <br/>
나 혼자 팀원들이랑 내적 친분감 생겨서 다시 보니 반가웠다. 여러분도 그렇죠? 그렇다고 해줘요 ㅎ.ㅎ <br/>
이번 시간엔 팀명을 정했다. 정말 창의적인 후보가 많이 나왔는데, 어쩌다 보니 내가 제시한 팀명으로 결정됐다 👀 <br/>

앞으로 한 달 동안 **성장발육엔텐텐** 잘 부탁드립니다 :)