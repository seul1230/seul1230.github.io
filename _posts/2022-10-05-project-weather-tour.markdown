---
layout: post
title:  "Project | Weather Tour Application"
date:   2022-10-05 22:52:09 +0900
description: <strong>[ 프로젝트 ] 2021 전공심화 프로젝트 </strong> <br/>- Weather Tour Application <br/><br/><p align='center'><img src ="/assets/img/img_weathertour/corona_travel.png" width="90%"</p>
style: border
color: success
categories: Projects
tags: [AI, Android Studio]
---
# [ Project ] 2021 Weather Tour Application

## Project
**2021-1 전공심화프로젝트**



## 🌿 Background

![](/assets/img/img_weathertour/corona_travel.png){: .center width="50%"}

(2021 4월 기준) COVID 19로 인해 국내 여행을 떠나려는 사람이 늘어나고 있다. 
위의 그림은 한국문화관광연구원에서 실시한 2020년 2~4월에 대한 응답과 2021년 1~3월의 응답에 대한 통계자료로, 코로나19 이후 **2021 1분기**에 국내여행 비율이 **51.8%로 증가**한 것을 확인할 수 있다.

대부분의 사람들은 학생 또는 직장인의 신분으로 시간/공간 상에서 자유롭지 못하다. 그렇기 때문에 이들은 여행을 떠날 수 있는 날이 한정적이다. 그래서 우리는 국내 관광지의 날씨를 미리 알아내어 **원하는 날짜**에 **가장 여행하기 알맞은 관광지**를 추천해주는 앱을 구상하였다.

![](/assets/img/img_weathertour/weather_map.png){: .center width="50%"}

## 🔎 About Project
* 기간 : 2021.04.26 ~ 2021.06.11
* 전공심화공동체를 이루어 전공에서 배운 지식을 심화하여 프로젝트 진행
  * 전공심화공동체 : 전공 관련 교내외 공모전 및 대회 준비, 전공 관련 자격증 취득, 전공 지식 실무 연구 및 개발, 소논문 작성 등을 위한 동일 전공생으로 구성된 학습공동체

### 선택 전공과목
🤖 **머신러닝** (교과목 : 기계학습) + 📡 **Socket programming** (교과목 : 컴퓨터 네트워크)

### 데이터셋

![](/assets/img/img_weathertour/weather_opened.png){: .center width="90%"}

* **기상청 지상(종관, ASOS) 데이터**

* **공공데이터 기상정보 API** (기온, 풍속, 하늘상태, 습도, 강수확률)
  * 관광코스별 관광지 상세 날씨 조회서비스

➡️ 계절마다 조건 세분화 후 점수 책정 



### 🏆 프로젝트 결과
최우수상
<br/>


### 맡은 역할
* 인공지능 코드
* 파이썬 소켓 통신
* 안드로이드 스튜디오 코드 구현


## 🗂 Reference

Q-learning을 구현할 때는 [Open Source](https://github.com/shiluyuan/Reinforcement-Learning-in-Path-Finding)를 이용하였다.

<br/><br/><br/>

---
## 🧐 개념 설명 <br/>



<br/><br/><br/>

---

## 💻 구현 &nbsp;&nbsp;<font color='lightgray'>Implementation</font>

#### 1. 데이터 불러오기
```python
import io
import pandas as pd
data_spring = pd.read_csv('spring.csv',encoding='CP949')
data_summer = pd.read_csv('summer.csv',encoding='CP949')
data_fall = pd.read_csv('fall.csv',encoding='CP949')
data_winter = pd.read_csv('winter.csv',encoding='CP949')
```

#### 2. 결측치 제거
```python
df_spring = df_spring.fillna(0)
df_summer = df_summer.fillna(0)
df_fall = df_fall.fillna(0)
df_winter = df_winter.fillna(0)
df_spring_test = df_spring_test.fillna(0)
```


```python
df_sp=df_spring.drop(['지점','일시'],axis=1)
df_su=df_summer.drop(['지점','일시'],axis=1)
df_fa=df_fall.drop(['지점','일시'],axis=1)
df_wi=df_winter.drop(['지점','일시'],axis=1)
df_spring_test=df_spring_test.drop(['지점','일시'],axis=1)
```

```python
train_spring = df_sp.drop('지점명', axis=1)
train_summer = df_su.drop('지점명', axis=1)
train_fall = df_fa.drop('지점명', axis=1)
train_winter = df_wi.drop('지점명', axis=1)
test_spring = df_spring_test.drop('지점명',axis=1)
```

#### 3. 계절별 기상 관측 데이터에 따라 점수 매기기

모든 계절에 대해 **강수, 평균기온, 상대습도, 평균풍속**를 고려하여 점수를 매겨주었다. 이 관측치들은 계절마다 상이하게 나타나므로 계절별로 평균기온을 구하고 외출하기 좋은 기상 정보를 각각 구해서 기준을 정해주었다.

#### 4. 모델 학습 및 성능 비교

이렇게 점수를 매겨준 데이터를 통합해서 **7:3**의 비율로 모델에 학습할 학습데이터와 평가 데이터로 나누어주었다.

```python
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(train_spring, y_label_spring, test_size=0.3, random_state=42)
```

이때 sklearn의 **KNeighbors, SVM, Random Forest** 모델로 학습해보고 R2 score을 기준으로 성능을 비교하였다. 

  ||KNeighbors|SVM|Forest|
  |:---:|:---:|:---:|:---:|
  |R2 score|0.6986|0.6318|0.9558|

✅ Random Forest Regressor가 가장 성능이 높음

#### 5. 소켓 프로그래밍

원래 프로젝트의 초기 목표는 **4번**까지였다. 팀원들과 함께 우리 생활에 도움이 될 수 있는 주제를 골라 데이터를 수집하고 전처리 후, 그것을 성공적으로 예측해서 관광지를 추천해주는 것까지가 성공적으로 진행이 됐기 때문에 우리는 여기서 멈추지 않고 한 번 더 생각하기로 하였다.

해당 학기에 **컴퓨터 네트워크** 과목에서 **Socket Programming**의 개념을 배웠다. 난 백엔드를 배워본 적은 없지만 해당 통신 방법을 사용하면 앱으로 나타낼 수 있을 것이라 생각했고, 이를 구현해내었다.

아래에 일부 코드를 올려놓겠다.

<br/>

**[ Server ]**

```python
from socket import *
from datetime import datetime, timedelta
import numpy as np
HOST = ""
PORT = 12000
s = socket(AF_INET, SOCK_STREAM)
print ('Socket created')
s.bind((HOST, PORT))
print ('Socket bind complete')
s.listen(1)
print ('Socket now listening')
```


```python
#접속 승인
conn, addr = s.accept()
print("Connected by ", addr)

#데이터 수신
rc = conn.recv(1024)
rc = rc.decode("utf8").strip()
if not rc: break
print("Received: " + rc)
date=rc[0:8]
time=rc[8:]
print('date:',date)
print('time:',time)
```

```python
#현재 날짜 정보
time1 = datetime.now() 
#원하는 날짜 정보 
want_day_s = datetime(int(rc[0:4]),int(rc[4:6]),int(rc[6:8]),int(rc[8:10]),0,0) 

# 오늘과 원하는 날짜의 차이 
# 2면 모레, 1이면 내일, 0이면 오늘 날씨 선택한 것
interval = (want_day_s - time1).days 

#모레를 선택했는데 현재 시각이 새벽 여섯시 전이면 오류 메시지 보내기
if(interval == 2) and (int(time1[12:14]) <= int(6)): 
    res = "새벽 6시 이후 모레 날씨 정보가 업데이트 됩니다!"
    conn.sendall(res.encode("utf-8"))
    conn.close()
    s.close()
    exit()

#오늘, 내일, 모레 이외의 선택을 했을 시 오류 메시지 보내기
if(interval != 1) and (interval != 0) and (interval != 2): 
    res = "오늘, 내일, 모레의 예보만을 지원합니다!"
    conn.sendall(res.encode("utf-8"))
    conn.close()
    s.close()
    exit()

#하루 전날 날짜 정보 받기
pre_day_s = want_day_s + timedelta(days=-1) 

pre_day_s=str(pre_day_s)
pre_day_s=pre_day_s[:11]
pre_day_s=pre_day_s.replace('-','')

want_day_s=str(want_day_s)

#원하는 pre_day의 형태로 변환
pre_day = pre_day_s + "00" 
print('pre_day_s',pre_day_s)

#원하는 want_day 형태로 변환
want_day = want_day_s[:16] 
print('want_day', want_day)
```

다음은 기상자료개방포털에서 Open API를 사용하여 

```python
import pandas as pd
from pandas import json_normalize
import json
import requests
from bs4 import BeautifulSoup

url = 'http://apis.data.go.kr/1360000/TourStnInfoService/getTourStnVilageFcst'

x_test = pd.DataFrame(columns=['tm','spotName','th3','wd','ws','sky','rhm','pop'])

```

발급받은 API 키는 다른 것으로 변환하여 업로드하였다.

```python
for ID in range(1,439):
    No = [29, 248, 249, 250]
    if ID in No:
        continue
    course_id = str(ID)
    queryString = "?" + \
      "ServiceKey=" + "0000000000000000" + \
      "&pageNo=" + "1"+ \
      "&numOfRows=" + "140" + \
      "&dataType=" + "JSON" + \
      "&CURRENT_DATE=" + pre_day + \
      "&HOUR=" + "24" + \
      "&COURSE_ID=" + course_id
      
    queryURL = url + queryString
    response = requests.get(queryURL)

    r_dict = json.loads(response.content)
    data = json_normalize(r_dict['response']['body']['items']['item'])

    li = ['tm','spotName','th3','wd','ws','sky','rhm','pop']
    
    #tm : 선택한 시각으로 부터 3시간 기온 (예 : 09면 09-12)
    #wd : 풍향
    #ws : 풍속
    #sky: 하늘 상태
    # 1: 맑음, 2: 구름 조금, 3: 구름많이, 4:흐림, 5: 비, 6:비눈, 7:눈비, 8:눈
    #rhm: 습도
    #pop: 강수확률

    #필요한 column만 data에 저장
    data = data.loc[:,li]
    
    #오전 오후 저녁 시간선택에 맞는 데이터만 추출
    List = []
    for i in range(0,len(data['tm'])):
        if want_day not in data.loc[i,'tm']:
                List.append(i)
    data = data.drop(List,axis = 0)
    #print(data.head())
    x_test = x_test.append(data,ignore_index=True)
    #print(x_test.head())
x_test = x_test.drop_duplicates(['spotName'], keep='first')
```

<br/>

**[ Client ]**

```python

```

```python

```

```python

```

```python

```

***

### 최종 결과물

![](https://user-images.githubusercontent.com/86948867/182041916-bfdd6630-6b9c-4a88-b276-5e1fb104c325.png){: .center}

<br/><br/>

---

## ➡️ &nbsp;프로젝트를 마무리하며..

해당 프로젝트는 **기계학습**과 **컴퓨터네트워크** 수업을 수강하면서 팀원들과 스스로 심화해본 프로젝트였기 때문에 더 의미가 있는 것 같다. 

## 이미지 및 자료 출처

[[실시간 전국 날씨] 오후 5시 현재 대체로 흐리고 곳에 따라 비](https://www.joongang.co.kr/article/23690397#home)

[한국문화관광연구원](https://know.tour.go.kr/ptourknow/cardnewsView19Re.do?mstSeq=298)

<!--
<sup id="a1">[2](#f2)</sup>
 <b id="f1">1</b> 천예은, 김세빈, 이자윤, 우지환, _설명 가능한 AI 기술을 활용한 신용평가 모형에 대한 연구_, 한국데이터정보과학회지(2021). [↩](#a1)

<b id="f2">2</b> 천예은, 김세빈, 이자윤, 우지환, _설명 가능한 AI 기술을 활용한 신용평가 모형에 대한 연구_, 한국데이터정보과학회지(2021). [↩](#a1) -->


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
-->
