---
layout: post
title:  "TIL | 네이버 금융 뉴스 웹스크래핑"
tags: [TIL]
date:   2022-09-28 09:05:09 +0900
categories: Python_DataAnalysis
---
# [ 0928 ] 네이버 금융 뉴스 웹스크래핑



#### 👩🏻‍💻 오늘코드 실시간 강의 _ 박조은님
오늘도 어김없이 조은님 목소리는 스윗하시다 🤍


## 📚 오늘의 TIL - 네이버 금융 뉴스 웹스크래핑

- [\[ 0928 \] 네이버 금융 뉴스 웹스크래핑](#-0928--네이버-금융-뉴스-웹스크래핑)
      - [👩🏻‍💻 오늘코드 실시간 강의 \_ 박조은님](#-오늘코드-실시간-강의-_-박조은님)
  - [📚 오늘의 TIL - 네이버 금융 뉴스 웹스크래핑](#-오늘의-til---네이버-금융-뉴스-웹스크래핑)
    - [🐾　뉴스 한 페이지를 수집하는 함수　🐾](#뉴스-한-페이지를-수집하는-함수)
    - [🐾　 반복문을 사용해 10페이지까지 수집　🐾](#-반복문을-사용해-10페이지까지-수집)
      - [tqdm의 trange](#tqdm의-trange)
      - [그럼 이제 10페이지까지 수집하는 코드를 보자.](#그럼-이제-10페이지까지-수집하는-코드를-보자)
      - [10페이지까지 수집하는 함수를 만들어보자.](#10페이지까지-수집하는-함수를-만들어보자)
    - [🐾　네이버 금융 개별종목 수집　🐾](#네이버-금융-개별종목-수집)
      - [1. url 얻어오기](#1-url-얻어오기)
      - [2. Requests 모듈 사용해 URL에 접근](#2-requests-모듈-사용해-url에-접근)
      - [3. response.status\_code가 200 OK라면 정상 응답](#3-responsestatus_code가-200-ok라면-정상-응답)
      - [4. response의 text 값 받아오기](#4-response의-text-값-받아오기)
      - [5. html text를 BeautifulSoup을 통해 html 해석](#5-html-text를-beautifulsoup을-통해-html-해석)
        - [💡 find\_all과 select의 차이는 뭘까?](#-find_all과-select의-차이는-뭘까)
      - [6. soup.select를 통해 원하는 태그에 접근](#6-soupselect를-통해-원하는-태그에-접근)
    - [🐾　데이터 수집 시작　🐾](#데이터-수집-시작)
      - [페이지별 데이터 수집 함수 만들기](#페이지별-데이터-수집-함수-만들기)
      - [반복문을 통한 전체 일자 데이터 수집하기](#반복문을-통한-전체-일자-데이터-수집하기)
      - [데이터프레임에 종목코드와 종목명을 추가하기](#데이터프레임에-종목코드와-종목명을-추가하기)
      - [위의 하나로 합쳐서 파일로 저장하는 함수 만들기](#위의-하나로-합쳐서-파일로-저장하는-함수-만들기)
    - [다음 포스트에서 만나요 🙌](#다음-포스트에서-만나요-)




### 🐾　뉴스 한 페이지를 수집하는 함수　🐾
다음은 저번 시간 과제로 내가 완성한 코드이다. 뉴스 한 페이지를 받아와서 페이지 정보는 제외하고 컬럼명을 통일시켜서 하나의 데이터프레임으로 만들었다. 
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
함수를 호출해보면 다음과 같이 잘 불러와지는 것을 볼 수 있다.
```python
get_one_page_news(item_code, page_no).head()
```


### 🐾　 반복문을 사용해 10페이지까지 수집　🐾
#### tqdm의 trange
tqdm의 trange를 이용하여 10페이지까지 수집할 예정이다. 먼저 tqdm의 trange이 뭔지에 대해 알아보겠다.
```python
import time
from tqdm import trange

page_no = 0
news_list = []
for i in trange(100):
    i == 1

```
![trange](/assets/img/img_220928/trange.png){: width="70%" height="70%"} <br/>
위처럼 진행바가 보이면서 반복문을 돌게 된다.

#### 그럼 이제 10페이지까지 수집하는 코드를 보자.
```python
import time
from tqdm import trange

# 카카오의 정보 받아오기
item_code = df_krx.loc[df_krx["Name"] == "카카오", "Symbol"].values[0]

news_list = []
for page_no in trange(1,11):
    temp = get_one_page_news(item_code, page_no)
    news_list.append(temp)
    # 서버에 무리가 가는 것을 막기 위해 딜레이를 걸어주자. 
    time.sleep(0.1) 
```

#### 10페이지까지 수집하는 함수를 만들어보자.


<br/><br/><br/>

### 🐾　네이버 금융 개별종목 수집　🐾
![samsung_finance](/assets/img/img_220928/samsung_finance.png){: width="100%" height="100%"} <br/>
#### 1. url 얻어오기
**검사 > 네트워크 > Docs > Request**에 있는 url을 get <br/>
![url_get](/assets/img/img_220928/url_get.png){: width="70%" height="70%"} <br/><br/>
여기서 얻은 url로 들어가게 되면 다음과 같이 '일별시세'에만 해당하는 페이지가 열린다.<br/>
![daily_sise](/assets/img/img_220928/daily_sise.png) <br/><br/>
`<table>` tag 안에 있어도 `pd.read_html(url)`로 데이터를 못 가져오는 경우도 있다. 이때 아래 그림과 같이 `ValueError: No tables found`라는 오류가 발생한다. <br/>
![valueerror_notables](/assets/img/img_220928/valueerror_notables.png) <br/><br/>
이는 정상적으로 정보를 요청하지 않았기 때문이다. 이때 Selenium 이용하면 데이터를 수집할 수 있지만 시간이 오래 걸린다. -> **Requests**를 사용하자.

#### 2. Requests 모듈 사용해 URL에 접근
- **Requests** 공식 문서 : 
[**[Requests : HTTP for Humans]**](https://requests.readthedocs.io/en/latest/)
```python
response = requests.get(url)
response
# <Response [200]>
```

#### 3. response.status_code가 200 OK라면 정상 응답
[HTTP 상태 코드에 대해 알아보기](https://ko.wikipedia.org/wiki/HTTP_%EC%83%81%ED%83%9C_%EC%BD%94%EB%93%9C)를 참고하면 이때 출력되는 상태에 대해 더 자세히 알아볼 수 있다. <br/>
`Response [200]`가 나오면 요청을 성공적으로 받았으며 인식했고 수용했다는 뜻이다.

#### 4. response의 text 값 받아오기
```python
reponse.text
```
코드를 실행하면 '방문하시려는 페이지의 주소가 잘못 입력되었거나, ...'와 같은 오류메시지가 출력된다. 이 또한 정상적인 요청이 아니기 때문이다. <br/>
정상적으로 요청을 보내려면 header를 먼저 봐야한다. header 중 **user agent**를 가져와 코드에 추가해주면 이 이슈는 해결된다! 로봇이 아니라 브라우저를 쓰는 사용자라는 뜻을 의미한다. 내 경우엔 user-agent가 'Mozilla/5.0'였다.
```python
print(url)
response = requests.get(url, headers={"user-agent": "Mozilla/5.0"})
response
```
```python
response.text
```
위의 코드를 재실행해주면 다음과 같은 '일별시세'에 해당하는 `text`값이 출력된다.<br/>
![response_text_front](/assets/img/img_220928/response_text_front.png) <br/><br/>

#### 5. html text를 BeautifulSoup을 통해 html 해석

requests만을 가지고 데이터를 잘 가져왔지만 구조를 한 눈에 보기 어렵다. 이때 이용하는 것이 BeautifulSoup이다. 다음 코드를 실행해 결과를 보겠다. 
```python
from bs4 import BeautifulSoup as bs
html = bs(response.text)
```
![bs_text](/assets/img/img_220928/bs_text.png){: width="70%" height="70%"} <br/><br/>
이처럼 구조적으로 text를 출력이 된다. 눈이 편안해지는 느낌. <br/>
이제 [BeautifulSoup 공식 문서](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)를 확인해서 몇 가지 데이터를 더 확인해보자.
```python
html.title
# <title>네이버 금융</title>

html.a
# <a href="/item/sise_day.naver?code=005930&amp;page=1">1</a>

html.find_all("a")[:3]
# [<a href="/item/sise_day.naver?code=005930&amp;page=1">1</a>,
#  <a href="/item/sise_day.naver?code=005930&amp;page=2">2</a>,
#  <a href="/item/sise_day.naver?code=005930&amp;page=3">3</a>]
```

```python
html.select("a")
# [<a href="/item/sise_day.naver?code=005930&amp;page=1">1</a>,
#  <a href="/item/sise_day.naver?code=005930&amp;page=2">2</a>,
#  <a href="/item/sise_day.naver?code=005930&amp;page=3">3</a>,
#  <a href="/item/sise_day.naver?code=005930&amp;page=4">4</a>,
#  <a href="/item/sise_day.naver?code=005930&amp;page=5">5</a>,
#  <a href="/item/sise_day.naver?code=005930&amp;page=6">6</a>,
#  <a href="/item/sise_day.naver?code=005930&amp;page=7">7</a>,
#  <a href="/item/sise_day.naver?code=005930&amp;page=8">8</a>,
#  <a href="/item/sise_day.naver?code=005930&amp;page=9">9</a>,
#  <a href="/item/sise_day.naver?code=005930&amp;page=10">10</a>,
#  <a href="/item/sise_day.naver?code=005930&amp;page=11">
#  				다음<img alt="" border="0" height="5" src="https://ssl.pstatic.net/static/n/cmn/bu_pgarR.gif" width="3"/>
#  </a>,
#  <a href="/item/sise_day.naver?code=005930&amp;page=660">맨뒤
#  				<img alt="" border="0" height="5" src="https://ssl.pstatic.net/static/n/cmn/bu_pgarRR.gif" width="8"/>
#  </a>]
html.table
```
##### 💡 find_all과 select의 차이는 뭘까?

: find_all는 다양한 파라미터가 있고 attribute를 이용해 **콕 집어서** 특정 링크에만 있는 데이터를 가져오게 할 수 있다. select는 inspect에 들어가서 selector를 복사해올 수 있어 편하게 활용할 수 있으며, hierachical하게 출력해준다. <br/>

![findall_example](/assets/img/img_220928/findall_example.png){: width="70%" height="70%"} <br/>
```python
### 규호님의 친절한 설명 ###
#find
soup.find('div').find('p')
#select
soup.select_one('div > p')
``` 

<br/>

#### 6. soup.select를 통해 원하는 태그에 접근
> **select** 기능은 알고 있으면 좋다. - 조은님

select는 이런 식으로 응용할 수 있다. 중간에 tag를 건너뛰면 '[]'와 같이 아무것도 출력되지 않으니 구조를 잘 보고 적용하도록 하자. 

```python
# body > table.Nnavi
html.select("table.Nnavi")
############## 출력결과 ##############
# [<caption>페이지 네비게이션</caption>]
####################################

# body > table.type2 > tr > th
html.select("body > table.type2 > tr > th")
############## 출력결과 ##############
# [<th>날짜</th>,
#  <th>종가</th>,
#  <th>전일비</th>,
#  <th>시가</th>,
#  <th>고가</th>,
#  <th>저가</th>,
#  <th>거래량</th>]
####################################
```

### 🐾　데이터 수집 시작　🐾

#### 페이지별 데이터 수집 함수 만들기
다음은 특정 종목의 특정 페이지에 있는 데이터(table)을 수집해오는 함수 코드이다. 
```python
def get_day_list(item_code, page_no):
    """
    일자별 시세를 페이지별로 수집
    == sudo code ==
    1. url을 만든다.
    2. requests를 통해 html 문서를 받아온다.
    3. read_html을 통해 table 태그를 읽어온다.
    4. 결측행을 제거
    5. 데이터프레임 반환
    """ 
    # 1. url을 만든다.
    url = f"https://finance.naver.com/item/sise_day.naver?code={item_code}&page={page_no}"

    # 2. requests를 통해 html 문서를 받아온다.
    response = requests.get(url, headers = {"user-agent": "Mozilla/5.0"})

    # 3. read_html을 통해 table 태그를 읽어온다.
    data = pd.read_html(response.text)[0]

    # 4. 결측행을 제거
    data = data.dropna()

    # 5. 데이터프레임 반환
    return data
```
이제 코드가 잘 만들어졌는지 확인해보자.
```python
item_code = "005930"
item_name = "삼성전자"
page_no = 1
```
```python
# 함수가 잘 만들어졌는지 확인하기
get_day_list(item_code, page_no)
```
다음과 같이 데이터를 잘 받아오는 것을 볼 수 있다. `item_code`와 `page_no`를 바꿔줘도 잘 작동한다. <br/>
![get_day_list_ex](/assets/img/img_220928/get_day_list_ex.png){: width="70%" height="70%"} <br/>
<br/><br/>


#### 반복문을 통한 전체 일자 데이터 수집하기
> 기간이 긴 데이터를 수집할 때는 서버에 부담을 주지 않기 위해 time.sleep()을 해준다. - 조은님

그 중에 우리는 최근에 상장한 종목 중에 **쏘카**의 정보를 받아오도록 하겠다. 데이터가 적으니까 ㅎ.ㅎ
```python
# 최근 상장 종목 중 추천 주 -> 쏘카
item_code = "403550"
item_name = "쏘카"
```
현재 쏘카의 일별시세는 3page까지 있다. 그러나 page_no가 4로 입력이 되어도 3page 정보가 나오고, 10으로 입력이 되어도 3page 정보가 중복해서 나오기 때문에 이를 반복문으로 제어하도록 하자.  

```python
import time

# web page 시작번호
page_no = 1

# 데이터를 저장할 빈 변수 선언
item_list = []
curr_day = ""
while True:
    # 페이지별 데이터 수집해오기
    df_item = get_day_list(item_code, page_no)

    # 마지막 날짜를 가져오자
    last_day = df_item.iloc[-1]["날짜"]
    print(page_no, curr_day, last_day)

    # 같은 페이지라면 반복문 탈출
    if last_day == curr_day:
        break

    item_list.append(df_item)
    page_no += 1

    # curr_day 갱신해주기
    curr_day = last_day

    time.sleep(0.1)
```
이렇게 페이지별로 얻은 item_list를 concat 시켜주자.
```python
df_day = pd.concat(item_list).reset_index(drop = True)
```
![soca_concat](/assets/img/img_220928/soca_concat.png){: width="70%" height="70%"} <br/>

#### 데이터프레임에 종목코드와 종목명을 추가하기
```python
df_day["종목코드"] = item_code
df_day["종목명"] = item_name
df_day.head(5)
```
![df_day](/assets/img/img_220928/df_day.png){: width="70%" height="70%"} <br/><br/>

컬럼 순서를 변경해주자. 다음 col 리스트 순서대로 변경하는 코드는 다음과 같다.
```python
cols = ['종목코드', '종목명', '날짜', '종가', '전일비', '시가', '고가', '저가', '거래량']
df_day = df_day[cols]
df_day.head(5)
```
![df_day_recol](/assets/img/img_220928/df_day_recol.png){: width="70%" height="70%"} <br/><br/>

그럼 이제 중복데이터를 제거해보자.
```python
# drop_duplicates : row들 끼리 data를 비교하여 같은 값이 있으면 row중 하나를 삭제
# df.shape를 전/후로 출력하여 삭제된 row가 있는지 확인
df_day = df_day.drop_duplicates()
```

#### 위의 하나로 합쳐서 파일로 저장하는 함수 만들기
위에서 배운 내용을 바탕으로 모든 과정을 한번에 수행하는 함수를 만들어보았다. 
```python
def get_item_list(item_code, item_name):
    """
    일별 시세를 수집하는 함수
    
    """
    # web page 시작번호
    page_no = 1
    # 데이터를 저장할 빈 변수 선언
    item_list = []
    curr_day = ""
    while True:
        # 페이지별 데이터 수집해오기
        df_item = get_day_list(item_code, page_no)

        # 마지막 날짜를 가져오자
        last_day = df_item.iloc[-1]["날짜"]
        # print(page_no, curr_day, last_day)

        # 같은 페이지라면 반복문 탈출
        if last_day == curr_day:
            break

        item_list.append(df_item)
        page_no += 1

        # curr_day 갱신해주기
        curr_day = last_day
        time.sleep(0.1)
    
    # 페이제별로 얻은 데이터, 즉 item_list를 하나로 합쳐주기
    df_day = pd.concat(item_list).reset_index(drop = True)
    df_day["종목코드"] = item_code
    df_day["종목명"] = item_name
    cols = ['종목코드', '종목명', '날짜', '종가', '전일비', '시가', '고가', '저가', '거래량']
    df_day = df_day[cols].drop_duplicates()

    # 최근 날짜 구해서 '종목명_종목코드_날짜'로 파일이름 저장
    date = df_day.iloc[0]["날짜"]
    file_name = f"{item_name}_{item_code}_{date}.csv"
    df_day.to_csv(file_name, index = False)
    
    return df_day
```
함수가 잘 만들어졌는지 쏘카와 카카오 종목을 대입해보자. 
```python
item_code = "403550"
item_name = "쏘카"

get_item_list(item_code, item_name)
```

![get_item_list_soca](/assets/img/img_220928/get_item_list_soca.png) <br/><br/>
```python
item_code = "323410"
item_name = "카카오뱅크"

get_item_list(item_code, item_name)
```
![get_item_list_kakao](/assets/img/img_220928/get_item_list_kakao.png) <br/><br/>

### 다음 포스트에서 만나요 🙌
뒷 내용은 [**[0928] ETF 수집**](https://seul1230.github.io/2022_likelion/2022-09-28-likelion-TIL2/)에서 이어서 작성한다.