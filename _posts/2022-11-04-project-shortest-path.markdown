---
layout: post
title:  "Project"
date:   2022-11-04 22:52:09 +0900
categories: Projects
---
# [ Project ] 2021 Hackathon : 교내 건물들 간 최단거리 찾기

## Project
교내 SW * AI 중심대학추진단 주관 2021 제10회 SW인공지능 해커톤

## 🌿 Background
Naver나 Daum과 같은 기존의 지도앱은 최단 거리 및 다양한 경로를 잘 추천해주지만 학교 내의 길 같은 경우, 실제로 최단경로를 검색했을 때 교내 경로 정보가 부족해 실제의 최단 경로와 차이가 나는 것을 발견했다. 이는 계단이나 작은 길 등을 고려하지 않고 주로 큰 길을 다루기 때문으로 보였다. 

## 🔎 About Project
* 기간 : 2021.10.01 ~ 2021.10.02
* 코로나 시국에 맞춰 공개된 주제들 중 하나를 선택하여 24시간 동안 팀을 이뤄 해결하는 대회

직접 학교 구석구석을 다니면서 길을 확인하였고, 당시 코로나 19로 운영되지 않는 곳은 제외하였다. 건물의 입구 노드와, 직선으로 가지 못해 꺾어야 하거나 더 가깝게 가기 위한 곳에 각각 노드를 두고 opencv를 이용하여 노드를 자동으로 인식하게 하였습니다. 이를 토대로 노드들을 잇는 선 중에 건물의 외각선을 지나지 않는 경로만 추출하여 이를 csv 파일로 저장하고 이를 바탕으로 q-routing을 통해 특정 구간의 최적경로를 파악하는 인공지능 알고리즘을 구현하였다.
<br/>

<!-- ![univ](https://github.com/seul1230/2021_hackerton/blob/master/sejongUniv.png?raw=true){: width="31%"} ▶️
![](https://github.com/seul1230/2021_hackerton/blob/master/%EA%B1%B4%EB%AC%BC+%EC%9E%A5%EC%95%A0%EB%AC%BC+%EA%B8%B8%EB%85%B8%EB%93%9C.png?raw=true){:  width="31%"} ▶️
![](https://github.com/seul1230/2021_hackerton/blob/master/%EA%B1%B4%EB%AC%BC+%EA%B8%B8%EB%85%B8%EB%93%9C%20%EC%A7%81%EC%84%A0%20%EC%9D%B4%EC%9D%80%20%EA%B7%B8%EB%A6%BC.png?raw=true){: width="31%"} -->
![maps](/assets/img/2021_hackathon_img/map.png){: .center} <br/>


🔴 **빨간색 노드** : 건물 입구 <br/>
🟡 **노란색 노드** : 코너

<br/>


### 🏆 프로젝트 결과
은상
<br/>


### 맡은 역할
* 팀장
* 인공지능 코드
* 파이썬 소켓 통신
* 안드로이드 스튜디오 기초 코드


## 🗂 Reference


## 📚 데이터셋
 

<br/><br/><br/>

---
## 🧐 개념 설명 <br/>

### Q-Learning
Q-Learning은 Model이 없이(Model-Free) 학습하는 강화학습의 한 방법으로, 현재 상태로부터 시작하여 모든 연속적인 단계들을 거쳤을 때 전체 보상의 예측값을 극대화시킨다. 이것은 한 상태에서 다른 상태로의 전이가 확률적으로 일어나거나 보상이 확률적으로 주어지는 환경에서도 별다른 변형 없이 적용될 수 있다.

-> 이 방법을 이용하면 목표까지 도달하는 Q를 계산하여 최적의 루트를 판단할 수 있겠다!!!


#### 더 자세히
![q_learning](https://user-images.githubusercontent.com/86948867/181782592-9743e629-7a5e-45e2-b731-54ccefe4366a.png){: .center width = "50%"}

이때, 강화학습은 State → Action에 따른 Reward가 주어지는 방식으로 진행된다.


① Q(s,a)는 현재상태(s)에서 a라는 행동을 할때의 값

② Q(s',a')는 한스텝후의상태(s+1)에서 a'라는 행동을 할때의 값

③ max(Q(s',a'))는 한스텝후의 상태(s+1)에서 얻을 수 있는 가장 큰 Q값으로, 가장 의미있는 action을 할때의 값


#### 간단하게 정리하면,

> 현재 상태의 Q = 보상 + 학습률 * 다음 상태에서의 최대 Q 값


다음상태에서의 Q값은 알고있다는 전제 하에 현재 상태의 Q를 구한다.

즉, 사람이 생각하듯 출발지부터 어디로 갈지 선택해나가는것이 아니라, 최종 목표지점부터 거꾸로 계산해오며 최적의 길을 찾아낸다.


<br/><br/><br/>

---

## 💻 구현 &nbsp;&nbsp;<font color='lightgray'>Implementation</font>

### 

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
