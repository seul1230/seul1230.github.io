---
layout: post
title:  "2022_likelion TIL"
date:   2022-10-04 09:00:09 +0900
categories: Python_DataAnalysis
---
# [ 1004 TIL - I ] 웹 데이터 수집
## 👩🏻‍💻 오늘코드 실시간 강의 _ 박조은님
오늘도 화이팅 :)

## 📚 오늘의 TIL - 서울정보소통광장 데이터 수집

오늘은 [서울정보소통광장](https://opengov.seoul.go.kr/civilappeal/list)에서 데이터를 수집할 예정이다. 링크 안의 내용까지 가져올 것!

### 🐾　실습 전 필요한 도구 설치하기　🐾

**Requests** - 작은 브라우저로 웹사이트를 읽어온다. <br/>
```shell
conda install -c anaconda requests
```

**Beautifulsoup4** - 읽어온 웹 사이트를 해석한다. <br/>
```shell
conda install -c anaconda beautifulsoup4
```

**Tqdm** - 진행 상태를 확인하는 목적 <br/>
```shell
conda install -c conda-forge tqdm
```



### 🐾　HTTP 상태 코드　🐾
**1xx (정보)**: 요청을 받았으며 프로세스를 계속한다 <br/>
**2xx (성공)**: 요청을 성공적으로 받았으며 인식했고 수용하였다 <br/>
**3xx (리다이렉션)**: 요청 완료를 위해 추가 작업 조치가 필요하다 <br/>
**4xx (클라이언트 오류)**: 요청의 문법이 잘못되었거나 요청을 처리할 수 없다 <br/>
**5xx (서버 오류)**: 서버가 명백히 유효한 요청에 대해 충족을 실패했다 <br/><br/>
-> 더 자세한 설명은 [위키피디아](https://ko.wikipedia.org/wiki/HTTP_100%EC100%83100%81100%ED100%83100%9C_100%EC100%BD100%94100%EB100%93100%9C)를 참고하자.


### 🐾　서울120 데이터 수집　🐾
1. Inspect > Network > Request url을 참고해 원하는 페이지의 url을 알아낸다.
2. requests를 통해 http 통신으로 원하는 url에 요청을 보내 응답을 받아온다.
3. 데이터가 없는 페이지의 경우 예외처리를 해준다.
4. 없는 페이지가 아니라면 링크 번호 수집을 위해 a 태그의 href 부분을 참고해 "내용 번호"에 번호를 넣어준다.
5. 반복문을 활용하여 위의 내용을 반복하여 민원 제목과 내용 등을 받아온다.
6. 가져온 정보를 목록 + 본문으로 데이터프레임 형태로 연결한다.

<br/>

### 💡 **tqdm**은 목록을 수집할 때 사용하기 어렵다. 그 이유는 뭘까?
범위가 정해져 있지 않아서.


### 🐾　서울특별시 다산콜센터(120)의 주요 민원에 대한 답변 정보를 가져오자　🐾
#### 상세 페이지 접근을 위해 a 태그 안의 링크 번호를 가져오자.
```python
# 120 다산 콜센터의 첫 페이지를 먼저 불러와 크롤링할 내용 확인
# items_per_page 값을 조절해 몇 개씩 볼 건지 지정
base_url = "https://opengov.seoul.go.kr/civilappeal/list?items_per_page=50&page=1"
print(base_url)
```

pd.read_html을 이용해 base_url의 table 정보를 받아오자.
```python
table = pd.read_html(base_url, encoding = "utf-8")
table[0].head(/assets/img/img_221004/.png){:width="100%" height="100%"}
```

잘 받아오는 것을 알 수 있다. 그러나 상세 정보 링크가 없기 때문에 **requests**를 이용하여 데이터를 받아오도록 하겠다.


```python
# a 태그 안의 상세 페이지 접근을 위한 링크 번호 수집
html = bs(response.text)
html.select("td.data-title.aLeft > a")

a_link_no = []
for a_tag in a_list:
    a_link_no.append(a_tag["href"].split('/')[-1])
a_link_no[:5]
```

**a_link_no** 값을 "내용번호" 컬럼에 넣어주자.
```python
table[0]["내용번호"] = a_link_no
table[0].head(/assets/img/img_221004/.png){:width="100%" height="100%"}
```

#### 특정 페이지를 수집하는 함수 만들기
```python
def get_one_page(items_per_page, page_no):
    """
    120 주요질문의 특정 페이지 목록을 수집
    1. page마다 url이 변경되도록 f-string을 이용한다.
    2. requests를 통해 http 통신으로 원하는 url에 요청을 보내 응답을 받아온다.
    3. pd.read_html을 사용해서 table tag로 게시물을 읽어온다.
    4. 3번 결과의 0번 인덱스에서 가져온 정보를 목록 + 본문으로 데이터프레임 형태로 연결한다.
    5. html tag를 파싱할 수 있게 bs 이용
    6. 목록 안에 있는 a tag를 찾는다.
    7. a tag 안 href에서 내용번호만 받아와 리스트에 저장한다.
    8. 내용번호 컬럼을 만들고 a tag의 리스트를 추가한다.
    """
    
    # url 설정 및 응답 받아오기
    url = f"https://opengov.seoul.go.kr/civilappeal/list?items_per_page={items_per_page}&page={page_no}"
    response = requests.get(url)

    # table tag
    table = pd.read_html(response.text)[0]

    # tag parsing 할 수 있게 bs 이용
    html = bs(response.text)

    # a tag 안 href에서 내용번호만 받아와 리스트에 저장
    a_list = html.select("td.data-title.aLeft > a")
    a_link_no = []
    for a_tag in a_list:
        a_link_no.append(a_tag["href"].split('/')[-1])
    
    # table에 내용번호 컬럼을 만들고 추가
    table["내용번호"] = a_link_no
    
    
    return table
```
```python
# 함수가 잘 동작하는지 확인
get_one_page(items_per_page=15, page_no=5)
```
![get_one_page_1004](/assets/img/img_221004/get_one_page_1004.png){:width="100%" height="100%"} <br/><br/>


#### 없는 페이지를 지정해주면 어떻게 될까?
```python
# 없는 페이지도 확인
get_one_page(items_per_page=50, page_no=500)
```
-> ValueError : Length of values (0) does not match length of index (1)
<br/>

#### 예외를 처리해주도록 하자. 
**`iterms_per_page`**를 `50`으로 설정하고 `500` 페이지를 보고자 할 때는 없는 페이지므로, 위와 같은 **`ValueError`**가 발생한다. 또, **`iterms_per_page`**를 `50`으로 설정하고 `200` 페이지를 보고자 할 때는 데이터가 없는 빈 데이터프레임이 출력이 된다. 이 경우를 예외처리해주도록 하자. 
```python
def get_one_page(items_per_page, page_no):
    """
    120 주요질문의 특정 페이지 목록을 수집
    1. page마다 url이 변경되도록 f-string을 이용한다.
    2. requests를 통해 http 통신으로 원하는 url에 요청을 보내 응답을 받아온다.
    3. pd.read_html을 사용해서 table tag로 게시물을 읽어온다.
    4. 3번 결과의 0번 인덱스에서 가져온 정보를 목록 + 본문으로 데이터프레임 형태로 연결한다.
    5. html tag를 파싱할 수 있게 bs 이용
    6. 목록 안에 있는 a tag를 찾는다.
    7. a tag 안 href에서 내용번호만 받아와 리스트에 저장한다.
    8. 내용번호 컬럼을 만들고 a tag의 리스트를 추가한다.
    """
    
    # url 설정 및 응답 받아오기
    url = f"https://opengov.seoul.go.kr/civilappeal/list?items_per_page={items_per_page}&page={page_no}"
    response = requests.get(url)

    # table tag
    table = pd.read_html(response.text)[0]


    ## 예외 처리 ##
    # ValueError가 발생하지 않지만 200 페이지인 경우 데이터가 존재하지 않음
    if table.shape[0] == 0:
        return f"{page_no}페이지를 찾을 수 없습니다."
    
    # 없는 페이지에 대한 ValueError 처리
    try:
        # tag parsing 할 수 있게 bs 이용
        html = bs(response.text)

        # a tag 안 href에서 내용번호만 받아와 리스트에 저장
        a_list = html.select("td.data-title.aLeft > a")
        
        # table에 내용번호 컬럼을 만들고 추가
        table["내용번호"] = [a_tag["href"].split('/')[-1] for a_tag in a_list]
    except:
        return f"{page_no}페이지를 찾을 수 없습니다."
    
    return table
```

```python
# 없는 페이지도 확인
get_one_page(items_per_page=50, page_no=200)
get_one_page(items_per_page=50, page_no=500)
# -> 200페이지를 찾을 수 없습니다.
# -> 500페이지를 찾을 수 없습니다.
```


#### 예외처리
**`raise`** 문을 통해 중간에 오류가 발생해도 다음 코드를 실행해야할 때는 예외 메시지만 출력하는 방법도 있다.  <br/>
**`try - except`** 문은 서비스는 계속 제공하면서 오류가 발생할 때에 로그를 남길 때 사용한다. <br/>
cross-site scripting과 같은 보안 상의 이슈를 고려해서 예외처리를 진행해주어야한다. 


#### get_one_page 함수를 이용하여 반복문을 통한 여러 페이지 수집하기

```python
# 게시물이 없으면 멈춥니다.
page_no = 40
items_per_page = 50
table_list = []

while True:
    df_tmp = get_one_page(items_per_page, page_no)

    if type(df_tmp) == str:
        print("수집이 완료되었습니다.")
        break
    print(page_no, end = ', ')
    df_tmp['페이지'] = page_no
    table_list.append(df_tmp)
    page_no += 1

    # 서버에 부담을 주지 않기 위해 delay
    time.sleep(0.01)
```

#### 데이터 병합하기
이렇게 페이지별로 모은 데이터를 하나로 병합해보자.
```python
df = pd.concat(table_list)
df
```
![get_pages_120](/assets/img/img_221004/get_pages_120.png){:width="100%" height="100%"} <br/><br/>

reset_index를 진행해주면 다음과 같이 나온다.
![get_pages_120_reset](/assets/img/img_221004/get_pages_120_reset.png){:width="100%" height="100%"} <br/><br/>

#### 파일로 저장하고 저장된 파일 확인하기
![final_df](/assets/img/img_221004/final_df.png){:width="100%" height="100%"} <br/><br/>

### 다음 포스트에서 만나요 🙌
뒷 내용은 [**1004 데이터 분석 TIL (2)**](https://seul1230.github.io/2022_likelion/2022-10-03-likelion-TIL2/)에서 이어서 작성한다.



<!-- ### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾 -->
