---
layout: post
title:  "TIL | 콜센터 주요 민원 답변 정보"
date:   2022-10-04 14:00:09 +0900
categories: Python_DataAnalysis
tags: [TIL]
published: false
---
# [ 1004 ] 서울 특별시 다산콜센터 (☎ 120) 의 주요 민원에 대한 답변 정보

#### 👩🏻‍💻 오늘코드 실시간 강의 _ 박조은님
이전 게시물 [**[ 1004 ] 웹 데이터 수집**](https://seul1230.github.io/2022_likelion/2022-10-04-likelion-TIL1/)과 이어지는 내용이다.
서울 특별시 다산콜센터(☎120)의 주요 민원에 대한 답변 정보를 가지고 실습 예제를 풀어보자.

### 🐾　데이터　🐾
앞의 TIL에서 저장한 "seoul-120-list.csv" 파일을 이용한다. 서울 특별시 다산콜센터(☎120)의 주요 민원 제목와 내용 번호 등을 수집하였으며 `(2304, 6)`의 shape을 가지고 있다.

### 🐾　120 주요질문 문서 정보 받아오기　🐾
[서울정보소통광장 120 주요질문](https://opengov.seoul.go.kr/civilappeal/view/?nid=23194045)에서 문서 정보를 가져오자.  <br/><br/>

![doc_info](/assets/img/img_221004/doc_info.png) <br/>

```python
url = "https://opengov.seoul.go.kr/civilappeal/view/?nid=23194045"
response = requests.get(url)
html = bs(response.text)
# get_text를 활용해 tag 안의 text 정보만 가져온다.
content = html.select("div > div.line-all")[0].get_text()
content
```
출력 결과
```
'\n\xa0서울의 감성을 담은 다양하고 새로운 경험을 제공하기 위해 만들어진 라이프스타일 플랫폼 브랜드로 서울이 만들고 세계가 함께 쓰는 브랜드 입니다.\xa0 \xa0 - 서울의 감성을 담은 기업과 협업하여 브랜드 상품을 발굴. \xa0 -\xa0사용을 원하는 중소기업에게 서울메이드 브랜드 제공 등 \xa0 -\xa0 관련홈페이지 :\xa0서울메이드 (https://seoulmade.com/) \xa0※ 상세문의사항 :\xa0서울산업진흥원\xa0브랜드전략팀 02-2222-3764 '
```
```python
# table은 pd 잘 이용하면 데이터를 쉽게 가져올 수 있다. 
table = pd.read_html(response.text)[-1]
table
```
![seoul120_table](/assets/img/img_221004/seoul120_table.png)<br/><br/>


#### 전치행렬 <font color = 'lightgray'>Transpose</font>
```python
ta01 = table[[0,1]].set_index(0).T
ta02 = table[[2,3]].set_index(2).T
```
위의 두 행렬을 concat하려면 index를 통일해주어야한다.
```python
ta02.index = ta01.index
df_desc = pd.concat([ta01, ta02], axis = 1)
```

#### Table에서 분류만 수집하기
해당 문의가 어떤 분류에 해당하는지 알기 위해 `분류`를 수집해보자.
```python
def get_desc(response):
    """ 분류 수집하기 """
    table = pd.read_html(response.text)[-1]
    tb01 = table[[0, 1]].set_index(0).T
    tb02 = table[[2, 3]].set_index(2).T
    tb02.index = tb01.index
    df_desc = pd.concat([tb01, tb02], axis=1)
    return df_desc

get_desc(response)
```

#### 내용 수집 함수 만들기

```python
def get_view_page(view_no):
    """ 
    내용과 분류를 수집하는 함수 만들기
    1) url을 만들어 준다.
    2) requests로 요청을 보낸다.
    3) 분류를 수집하는 response 값을 넘겨 함수를 호출해서 문서 정보 데이터프레임을 반환한다.
    4) 내용을 bs 으로 text만 추출한다.
    5) 3) 내용, 내용번호를 함께 데이터프레임에 추가한다.
    6) 반복문 대신 map이나 apply를 사용할 것이기 때문에 time.sleep으로 delay를 걸어준다.
    7) 5)까지의 내용 반환한다.
    """
    # 1) url을 만들어 준다.
    url = f"https://opengov.seoul.go.kr/civilappeal/view/?nid={view_no}"

    #2) requests로 요청을 보낸다.
    response = requests.get(url)

    # 3) 분류를 수집하는 response 값을 넘겨 함수를 호출해서 문서 정보 데이터프레임을 반환한다.
    df_desc = get_desc(response)

    # 4) 내용을 bs 으로 text만 추출한다.
    html = bs(response.text)

    content = html.select("div > div.line-all")[0]
    
    if len(content) > 0:
        # 5) 3)의 내용, 내용번호를 함께 데이터프레임에 추가한다.
        content = content.get_text()
        # 특수 문자 제거
        content = content.replace('\n',' ')
        content = content.replace('\xa0',' ')
    else:
        content = ""
    df_desc["내용"] = content
    df_desc["내용번호"] = view_no

    # 6) 반복문 대신 map이나 apply를 사용할 것이기 때문에 time.sleep으로 delay를 걸어준다.
    time.sleep(0.01)

    return df_desc    
```
#### Tqdm
progress_apply를 사용하면 진행상태를 확인하며 데이터를 가져올 수 있다.
```python
# tqdm.notebook 의 tqdm 을 통해 수집 진행상태를 확인합니다.
# progress_apply 를 사용하면 진행상태를 확인하며 데이터를 가져올 수 있습니다.
from tqdm.notebook import tqdm
tqdm.pandas()
view = df['내용번호'].progress_map(get_view_page)
```

#### 가져온 view를 concat해주기
```python
# 수집한 내용을 tolist() 를 통해 리스트로 변환 후 concat 으로 병합합니다.
df_view = pd.concat(view.tolist())
# 기존 데이터와 병합하여 내용이 함께 수집된 것을 확인합니다.
df_detail = df.merge(df_view, on = ["내용번호", "생산일"])
df_detail
```

#### 파일 최종 수정 및 저장
```python
# 사용할 컬럼만 남기기
df_final = df_detail[['번호', '분류', '제목', '내용', '내용번호']]
file_name = "seoul-120-sample.csv"
# csv 파일로 저장합니다.
df_final.to_csv(file_name, index = False)
```

![final_120_sample](/assets/img/img_221004/final_120_sample.png) <br/>

<!-- ### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾 -->
