---
layout: post
title:  "Project | Q-routing으로 건물들 간 최단 거리 구하기 | Shortest Path using Q-routing"
description: <strong>[ 프로젝트 ] 2021 Hackathon </strong> <br/>- 교내 건물들 간 최단거리 찾기<br/><br/><p align='center'><img src='/assets/img/2021_hackathon_img/thumbnail.png' width='100%'></p>
date:   2022-07-30 22:52:09 +0900
style: border
color: success
categories: Projects
tags: [Project, Q-learning, Q-routing, Unsupervised, OpenCV]
---
# [ Project ] 2021 Hackathon : Q-routing 이용하여 교내 건물들 간 최단거리 찾기

## Project
교내 SW * AI 중심대학추진단 주관 2021 제10회 SW인공지능 해커톤

## 🌿 Background
![maps](/assets/img/2021_hackathon_img/real_map.png){: .center width="30%"} <br/>
Naver나 Daum과 같은 기존의 지도앱은 최단 거리 및 다양한 경로를 잘 추천해주지만 학교 내의 길 같은 경우, 실제로 최단경로를 검색했을 때 교내 경로 정보가 부족해 실제의 최단 경로와 차이가 나는 것을 발견했다. 이는 계단이나 작은 길 등을 고려하지 않고 주로 큰 길을 다루기 때문으로 보였다. 

## 🔎 About Project
* 기간 : 2021.10.01 ~ 2021.10.02
* 코로나 시국에 맞춰 공개된 주제들 중 하나를 선택하여 24시간 동안 팀을 이뤄 해결하는 대회

직접 학교 구석구석을 다니면서 길을 확인하였고, 당시 코로나 19로 운영되지 않는 곳은 제외하였다. 건물의 입구 노드와, 직선으로 가지 못해 꺾어야 하거나 더 가깝게 가기 위한 곳에 각각 노드를 두고 opencv를 이용하여 노드를 자동으로 인식하게 하였습니다. 이를 토대로 노드들을 잇는 선 중에 건물의 외각선을 지나지 않는 경로만 추출하여 이를 csv 파일로 저장하고 이를 바탕으로 q-routing을 통해 특정 구간의 최적경로를 파악하는 인공지능 알고리즘을 구현하였다.
<br/>

<!-- ![univ](https://github.com/seul1230/2021_hackerton/blob/master/sejongUniv.png?raw=true){: width="31%"} ▶️
![](https://github.com/seul1230/2021_hackerton/blob/master/%EA%B1%B4%EB%AC%BC+%EC%9E%A5%EC%95%A0%EB%AC%BC+%EA%B8%B8%EB%85%B8%EB%93%9C.png?raw=true){:  width="31%"} ▶️
![](https://github.com/seul1230/2021_hackerton/blob/master/%EA%B1%B4%EB%AC%BC+%EA%B8%B8%EB%85%B8%EB%93%9C%20%EC%A7%81%EC%84%A0%20%EC%9D%B4%EC%9D%80%20%EA%B7%B8%EB%A6%BC.png?raw=true){: width="31%"} -->

<p align='center'><img src='/assets/img/2021_hackathon_img/final_color_map.png' width='70%'><figcaption>광개토관 - 학술정보원 - 진관홀 최적거리</figcaption></p>


🔴 **빨간색 노드** : 건물 입구 <br/>
🟢 **초록색 노드** : 코너
<br/>


### 🏆 프로젝트 결과
은상
<br/>


### 맡은 역할
* 팀장
* 인공지능 코드
* 모든 약도 디자인
* 파이썬 소켓 통신
* 안드로이드 스튜디오 기초 코드


## 🗂 Reference

Q-learning을 구현할 때는 [Open Source](https://github.com/shiluyuan/Reinforcement-Learning-in-Path-Finding)를 참고하였다. 위 알고리즘은 두 지점 사이 가장 작은 cost를 반환해 주어, 최단 거리를 구하는 데 활용할 수 있다. 

이는 소규모 네트워크를 사용한 예이고, 70K개의 node와 20K개의 edge가 있는 크고 복잡한 네트워크에서 시도했을 때, Q-learning 알고리즘은 여전히 ​​빠르며 몇 분 안에 깊이가 10인 모든 최단 경로를 찾을 수 있다고 하니 참고하자!

<br/>

> 전통적인 최단 경로 알고리즘에는 BFS(Breadth First Search), DFS(Depth First Search) 및 Dijkstra 알고리즘 정도가 있다. <br/>그러나 BFS와 DFS는 매우 느리고 크고 복잡한 그래프의 경우 그래프 트리가 점점 더 깊어짐에 따라 기하급수적인 시간이 걸린다. 내 경험에 따르면 70K개의 node와 200K개의 edge 그래프가 있을 때 BFS와 DFS는 5 depth를 검색하는 데 몇 시간이 걸린다. 따라서 최단 경로가 6 depth 이상이면 불가능하다는 한계가 존재한다.

<br/><br/>

---
## 🧐 개념 설명 <br/>

### Q-Learning
Q-Learning은 Model이 없이(Model-Free) 학습하는 강화학습의 한 방법으로, 현재 상태로부터 시작하여 모든 연속적인 단계들을 거쳤을 때 전체 보상의 예측값을 극대화시킨다. 이것은 한 상태에서 다른 상태로의 전이가 확률적으로 일어나거나 보상이 확률적으로 주어지는 환경에서도 별다른 변형 없이 적용될 수 있다.

-> 이 방법을 이용하면 목표까지 도달하는 Q를 계산하여 최적의 루트를 판단할 수 있겠다!!!


#### 더 자세히
![q_learning](https://user-images.githubusercontent.com/86948867/181782592-9743e629-7a5e-45e2-b731-54ccefe4366a.png){: .center width = "30%"}

이때, 강화학습은 State → Action에 따른 Reward가 주어지는 방식으로 진행된다.


① Q(s,a)는 현재상태(s)에서 a라는 행동을 할때의 값

② Q(s',a')는 한스텝후의상태(s+1)에서 a'라는 행동을 할때의 값

③ max(Q(s',a'))는 한스텝후의 상태(s+1)에서 얻을 수 있는 가장 큰 Q값으로, 가장 의미있는 action을 할때의 값


#### 간단하게 정리하면,

> 현재 상태의 Q = 보상 + 학습률 * 다음 상태에서의 최대 Q 값


다음상태에서의 Q값은 알고있다는 전제 하에 현재 상태의 Q를 구한다.

즉, 사람이 생각하듯 출발지부터 어디로 갈지 선택해나가는것이 아니라, 최종 목표지점부터 거꾸로 계산해오며 최적의 길을 찾아낸다.

<br/><br/>

위의 Q-learning 을 적용한 Q-routing 기법을 적용했다고 생각하면 될 것 같다!

> So I develop a algorithm using reinforcemenet learning in path finding problem. In reinforcemnt learning problem, we have action, rewards and states and discount rate. To solve traditional problem, we have Q-learning. Q-learning can be used to find an optimal action-selection policy for any given (finite) Markov decision process (MDP). Similarly, to solve best-path-finding problem, we have Q-rounting. <br/>The difference between Q-Learning and Q-Rounting is that, Q-Rounting doesn't have a discount rate, and for each state, it will choose the minimun furture cost instead of maximum future reward.

<br/><br/><br/>

---

## 💻 구현 &nbsp;&nbsp;<font color='lightgray'>Implementation</font><br/>

### 1. 교내 건물 및 모든 입구, 코너 약도 그리기
우리는 직접 학교를 돌아다니며, 사람들이 통행할 수 있는 통로와 입구를 파악하였다. 이때 코로나 19로 인해 폐쇄된 입구는 해당 서비스를 이용하는 신입생들에게 혼란을 줄 수 있을 것이라 판단해 배제하고 그렸다. 

🔴 **빨간색 노드** : 건물 입구 <br/>
🟢 **초록색 노드** : 코너 <br/>
🟪 **보라색** : 통행할 수 없는 길이나 건물


### 2. OpenCV를 이용해 노드 인식하기
길을 찾아주기 위해서는 건물의 입구와 코너 노드를 다르게 인식해야했기에 **<font color = "green">코너 노드</font>**와 **<font color = "red">건물 입구 노드</font>**의 원의 크기는 다르게 설정을 해주었다. 

그 후, OpenCV에서 크기별로 원을 추출하는 함수를 통해 노드를 인식하고, 외곽선을 추출하는 함수를 통해 건물 및 통행할 수 없는 길을 인식해 각각의 좌표 정보를 얻었다.

```python
import cv2
from google.colab.patches import cv_imshow
src = cv2.imread("/content/gdrive/MyDrive/AI-SW-HACK/only_purple_map.png") #원본 이미지
#cv_imshow(src)
dst = src.copy()
gray = cv2.cvtColor(src, cv2.COLOR_BGR2GRAY)

ret, binary = cv2.threshold(gray, 127, 255, cv2.THRESH_BINARY)
binary = cv2.bitwise_not(binary)

contours, hierarchy = cv2.findContours(binary, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_NONE)

for i in range(len(contours)):
    cv2.drawContours(dst, [contours[i]], 0, (0, 0, 0), 2)
    #cv2.putText(dst, str(i), tuple(contours[i][0][0]), cv2.FONT_HERSHEY_COMPLEX, 0.8, (0, 0, 0), 2)
    print(i, hierarchy[0][i])
    
    #cv2.waitKey(0)

cv_imshow(dst)


import cv2
from google.colab.patches import cv_imshow

src2 = cv2.imread("/content/gdrive/MyDrive/AI-SW-HACK/purple_map3.png") #원본 이미지
#cv_imshow(src2)
dst2 = src2.copy()
gray2 = cv2.cvtColor(src2, cv2.COLOR_BGR2GRAY)

circles = cv2.HoughCircles(gray2, cv2.HOUGH_GRADIENT, 1, 10, param1 = 50, param2 = 21, minRadius = 13, maxRadius = 17)
circles2 = cv2.HoughCircles(gray2, cv2.HOUGH_GRADIENT, 1, 5, param1 = 25, param2 = 10, minRadius = 7, maxRadius = 10)
print(circles[0])
print(circles2[0])
for i in circles[0]:
    cv2.circle(dst2, (i[0], i[1]), i[2], (0, 255, 0), 2)

for i in circles2[0]:
    cv2.circle(dst2, (i[0], i[1]), i[2], (255, 0, 0), 2)
    

cv_imshow(dst2)

```
위의 코드를 실행하면 아래와 같이 잘 검출되는 것을 볼 수 있다. <br/>

<div align='center'><img src='/assets/img/2021_hackathon_img/outline.png' width="37%"/><img src='/assets/img/2021_hackathon_img/red_green_node.png' width="37%"/></div>
<br/><br/>

### 3. 출발 - 도착 - 두 노드 사이의 거리 정보 저장
해커톤 대회 시간, 24시간이라는 짧은 시간 안에 Q-learning 코드를 직접 구현하는 것은 어렵다고 판단! <br/>
Q-learning은 [오픈 소스](https://github.com/shiluyuan/Reinforcement-Learning-in-Path-Finding)를 참고하기로 하고, 해당 소스 코드에서 우리가 얻어내야할 정보가 무엇인지 찾아내었다.

> 출발 - 도착 - 두 노드 사이의 거리 정보

**🤔 여기서 문제!**

사람은 **길**로만 다닐 수 있고, 건물을 통과할 수 없다. <br/>
노드끼리 선을 이을 때 어떻게 하면 건물을 통과하는 선들은 지울 수 있을까?

이 부분에서 팀원들과 정말 많은 아이디어를 내고 고민했던 것 같다. 

> 두 점을 이은 사진에서 외곽선의 개수를 추출하여 처음의 외곽선의 개수와 비교를 한다. 만일 두 점을 이은 사진에서의 외곽선의 개수가 더 많다면, 두 점을 이음으로써 보라색 도형이 쪼개져 외곽선의 갯수가 늘어나게 된다.<br/> 해당 길은 사람이 지나갈 수 없는 길로 판단하고 정보에 담지 않았다.

통행가능한 길을 하얀색 선으로 이미지에 나타내면, 다음과 같이 건물을 통과하는 선이 없는 것을 확인할 수 있다.

![](/assets/img/2021_hackathon_img/red_green_w_line.png){: .center width="70%"}<br/><br/>

다음 코드는 여기서 얻은 노드 및 거리 정보를 csv에 담아 저장하는 코드이다.

```python
all_circle = []

for i in range(len(circles[0])):
  tmp = [int(circles[0][i][0]),int(circles[0][i][1])]
  all_circle.append(tmp)
for i in range(len(circles2[0])):
  tmp = [int(circles2[0][i][0]),int(circles2[0][i][1])]
  all_circle.append(tmp)  

print(all_circle)

############## 지금까지 구한 리스트 정보 정리 ##############

#circles --> 건물 노드 좌표
#circles2 --> 도로 노드 좌표

#circles[0][i][0] : i번째 건물 노드의 중심의 x좌표
#circles[0][i][1] : i번째 건물 노드의 중심의 y좌표

#all_circle --> 모든 노드(건물+도로) 좌표
#all_circle[i][0] : i번째 노드의 중심의 x좌표
#all_circle[i][1] : i번째 노드의 중심의 y좌표

#len(contours) : 외곽선의 갯수
#contours[i] : i번째 도형의 외곽선
#contours[i][j][0][0] : i번째 도형의 외곽선의 점들 중 j번째 점의 x좌표
#contours[i][j][0][1] : i번째 도형의 외곽선의 점들 중 j번째 점의 y좌표

 for k in range(len(contours)):
   #print('______________________')
   for m in range(len(contours[k])):
     x = contours[k][m][0][0]
     y = contours[k][m][0][1]

import math

# 두 점 사이의 거리 구하는 함수
def distance(x1, y1, x2, y2):
    result = math.sqrt( math.pow(x1 - x2, 2) + math.pow(y1 - y2, 2))
    return result

#original 출발점, connected 도착점 weight 사이 거리값

original = []
connected = []
weight = []

for i in range(len(all_circle)):
  for j in range(i+1,len(all_circle)):
    dst3 = src.copy()
    dst3 = cv2.line(dst3, (all_circle[i][0],all_circle[i][1]), (all_circle[j][0],all_circle[j][1]), (255,255,255), 8, 8, 0)
    gray3 = cv2.cvtColor(dst3, cv2.COLOR_BGR2GRAY)
    ret3, binary3 = cv2.threshold(gray3, 127, 255, cv2.THRESH_BINARY)
    binary3 = cv2.bitwise_not(binary3)
    contours3, hierarchy3 = cv2.findContours(binary3, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_NONE)

    # 사람이 다닐 수 없는 길이면 continue
    if(len(contours3)>len(contours)):
      continue
    else:
      dst2 = cv2.line(dst2, (all_circle[i][0],all_circle[i][1]), (all_circle[j][0],all_circle[j][1]), (255,255,255), 1, 8, 0)
      # csv를 만들기 위한 리스트 구현
      ori = int(i)
      con = int(j)
      wei = distance(all_circle[i][0],all_circle[i][1],all_circle[j][0],all_circle[j][1])
      original.append(ori)
      connected.append(con)
      weight.append(wei)

cv_imshow(dst2)

tmp_pdf = {
    'original':original,
    'connected':connected,
    'weight':weight
}

pdf = pd.DataFrame(tmp_pdf)
# pdf --> csv
# 구글 드라이브 내 AI-SW-HACK 폴더에 gragh라는 이름으로 csv 저장
pdf.to_csv('/content/gdrive/MyDrive/AI-SW-HACK/graph.csv',header=True, index=False)
```

### 4. Q-learning

```python
from get_dict import get_dict
from get_R_Q import initial_R
from get_R_Q import initial_Q
from get_result import get_result

import pandas as pd
import time

data = pd.read_csv("/content/gdrive/MyDrive/AI-SW-HACK/graph.csv")
graph = get_dict(data)

A = graph["A"]
Z = graph["Z"]
weight = graph["weight"]
A_Z_dict = graph["A_Z_dict"]

##
start = 40
end = [51]

R = initial_R(A,Z,weight,A_Z_dict)
Q = initial_Q(R)

alpha = 0.7 # learning rate
epsilon = 0.1 #greedy policy
n_episodes = 1000

time0 = time.time()
result = get_result(R,Q,alpha,epsilon,n_episodes,start,end)
print("time is:",time.time() - time0)

print(result["ends_find"])
print(result["cost"])
print(result["routes_number"])

print(result["all_routes"])
```


### 5. 출발 - 도착 노드까지 최적 경로 보여주기


```python
Final_routes = result["all_routes"][end[0]][0]

SHOW = Look.copy()

path = '/content/gdrive/MyDrive/AI-SW-HACK/Show_image/show_image0.jpg'
cv2.imwrite(path,SHOW)

for i in range(0,len(Final_routes)-1):
  num1 = Final_routes[i]
  num2 = Final_routes[i+1]
  SHOW = cv2.line(SHOW, (all_circle[num1][0],all_circle[num1][1]), (all_circle[num2][0],all_circle[num2][1]), (255,255,255), 8, 8, 0)
  path = '/content/gdrive/MyDrive/AI-SW-HACK/Show_image/show_image' + str(i+1) + '.jpg'
  cv2.imwrite(path,SHOW)
  #cv_imshow(SHOW)

cv_imshow(SHOW)
```

![](/assets/img/2021_hackathon_img/final_node_map.png){: .center width="70%"}<br/><br/>

### 6. 위의 과정 비디오로 만들어주기

```python
import glob

img_array = []
for filename in glob.glob('/content/gdrive/MyDrive/AI-SW-HACK/Show_image/*.jpg'):
    img = cv2.imread(filename)
    height, width, layers = img.shape
    size = (width,height)
    img_array.append(img)
 
 
out = cv2.VideoWriter('/content/gdrive/MyDrive/AI-SW-HACK/Show_video/show_video.avi',cv2.VideoWriter_fourcc(*'DIVX'), 1, size)
 
for i in range(len(img_array)):
    out.write(img_array[i])
out.release()
```
### 최종 결과물

![](/assets/img/2021_hackathon_img/final_video.gif){: .center width="70%"}<br/><br/>

### 추가 구현 및 Future Work

중간에 경유지를 추가하는 경우의 최단거리도 구현할 수 있었다. 내가 아이패드로 그렸던 컬러 지도 이미지에 위에서 얻은 최단루트를 겹치게 되면 다음과 같은 이미지를 구할 수 있다. 

<p align='center'><img src='/assets/img/2021_hackathon_img/final_color_map.png' width='70%'><figcaption>광개토관 - 학술정보원 - 진관홀 최단거리</figcaption></p>

이를 추가로 더 응용시킨다면, N개의 건물들을 최단 거리로 방문할 수 있는 거리를 제안할 수 있겠다!

---

## ➡️ &nbsp;결론





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
