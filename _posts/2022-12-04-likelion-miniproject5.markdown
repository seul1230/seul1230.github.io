---
layout: post
title:  "Mini Project | 청경채 성장 예측"
date:   2022-12-04 15:00:09 +0900
categories: Projects
tags: [likelion, AI]
---
# [ MiniProject V ] 청경채 성장 예측 AI 경진대회

### 🦁 Project 
멋쟁이사자처럼 AI School 7th **MiniProject 5** <br/>

**🙆‍♀️🙆 Team 7ㅏ즈아** <br/>
으쌰으쌰3팀 - 오9오9 <br/>
조예슬, 김예지, 이정은, 임종우, 권태윤

**🗓️ When**<br/>
2022.11.30 - 2022.12.04

<br/>

<p align='center'><img src='https://user-images.githubusercontent.com/72390138/205493584-af95700c-c420-4f95-a5fc-d1c05bb27bc7.png'></p>


이번 미니 프로젝트로 **오9오9** 팀은 2022년 9월에 마감한 [**청경채 성장 예측 AI 경진대회**](https://dacon.io/competitions/official/235961/overview/description)를 주제로 모델을 만들고 높은 성능을 낼 수 있는 방법에 대해 모색하기로 하였다. 

### 📃 summary     
<p align='center'><img src="https://user-images.githubusercontent.com/72390138/205493735-e21c9908-44e8-45e9-8a9c-f3942f203fa7.png" width="60%"></p>    

4차 산업혁명 시대를 맞아 농업 분야에서도 AI 기술이 널리 사용되어 IT 기술을 동원한 스마트팜 등 더욱 효율적인 작물 재배가 가능해지고 있습니다. 작물의 효율적인 생육을 위한 최적의 환경을 도출한다면 식물 재배에 큰 도움이 될 것이며, 청경채 뿐만 아닌 모든 작물 재배율이 좋아질 것입니다. 미래의 작물 재배에서는 이 데이터를 가지고 인공지능을 이용하여 작물별 맞춤형 솔루션을 농업인들이 편리하고 친근하게 생활 속에서 활용하는 첫 걸음을 내딛을 수 있을 것입니다.    

### 🗂️ Dataset

**dacon 청경채 예측 데이터** : [https://dacon.io/competitions/official/235961/data](https://dacon.io/competitions/official/235961/data) 
[청경채 성장 예측 AI 경진대회](https://dacon.io/competitions/official/235961/data)에서 제공된 데이터를 다운받아 이용하였다. 

<br/>

**📁 train input dataset[folder]**   

![image](https://user-images.githubusercontent.com/72390138/205494867-68e0c49a-3740-4fe4-8812-da281ace0524.png){: .center width="90%"}   
총 58개 청경채 케이스를 각 청경채 케이스 별 환경 데이터(1분 간격)으로 구성되어 있음

<br/>

**📁 train target dataset[folder]**                  
<p align='center'>
<img src="https://user-images.githubusercontent.com/72390138/205494955-e4752ba6-3a90-41de-a1ee-ec2929ea8dd6.png" width="50%">
</p> 
총 58개 청경채 케이스를 rate column의 각 청경채 케이스 별 잎 면적 증감률(1일 간격)로 구성되어 있음       

<br/>

**📂 train(input+target) shape**                   
train(input+target) (1813, 43)         
test(input+target) (195, 43)            
  
<br/><br/>

### 📊 Visualization
1️⃣ 내부온도관측치, 내부습도관측치, 총추정광량, 월별 rate        
![image](https://user-images.githubusercontent.com/72390138/205497279-d59cb01a-a52e-44f7-9cef-c34381f8fcfd.png){: .center width="90%"}          

<br/>

2️⃣ 적색, 청색, 백색, 총추 추정광량 별 rate
![image](https://user-images.githubusercontent.com/72390138/205497255-0030b727-3f14-4c07-b22b-806a05334616.png){: .center width="90%"}                
백색과 총추는 100에서, 적색과 청색은 0에서 성장률이 높다.     

<br/>
  
3️⃣ EC와 CO2의 냉방상태       
![image](https://user-images.githubusercontent.com/72390138/205496256-fe545a8c-16b8-4644-a339-030a2d05f271.png){: .center width="90%"}          
EC관측치가 클수록 냉방상태는 적었으며, 반대로 작을수록 냉방상태는 높은 것을 확인할 수 있다.   

<br/>

4️⃣ 각 CASE 별 잎면적 증감률(rate) 변화      
![image](https://user-images.githubusercontent.com/72390138/205496376-956636fd-c78d-433e-b690-bdb8764cfe71.png){: .center width="90%"}         
분포를 일정하게 만들기 위한 Scaling 과정이 필요함이 보였다.    

### 💻 Closer Look

나는 Tensorflow보다는 PyTorch가 익숙해서 **PyTorch**를 기반으로 코드를 짰으며, 회의 시간에 코드 리뷰를 진행하여 다양한 의견을 들을 수 있었다. 

내 코드에 대해 간단하게 설명하자면, 레이어를 쌓을 때 활성화 함수는 **ReLU** 를 사용했으며, 각각의 레이어에 대해 **xavier_normal** 를 이용해 가중치를 초기화해주었다. 대회 규칙에 따라 **`100 * RMSE`** 평가 산식을 이용해 loss를 줄여주었고, Optimizer는 **Adam** optimizer를 사용하였다.

후에 알아보니 활성화 함수로 ReLU 함수를 사용하였을 때는
출력값이 0으로 수렴하는 현상을 발생시키기 때문에 **He Initialization**을 적용해준다고 한다. He Initialization은 표준편차가 (루트 2/n) 인 정규분포를 따르도록 가중치 초기화해준다고 한다. 나중에 이 레이어 가중치 초기화 방법을 적용해 코드를 다시 작성해봐야겠다.

<br/>
<font color='gray'>출처 : </font>

[[Deep Learning] Weight Initialization(기울기 초기화), Xavier , He](https://acdongpgm.tistory.com/215)




### ➡️ 시도 History와 최종 성능 비교

|Baseline|Final Score|
|:---:|:---:|
|31.6858|19.0545|

<br/>






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
