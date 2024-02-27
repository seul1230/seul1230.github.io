---
layout: post
title:  "Project"
date:   2022-10-25 15:00:09 +0900
categories: Projects
style: border
color: success
published: false
---
# [ MidProject ] 의료기관 개폐업 현황 분석 및 인사이트 도출

### 🦁 Project 
멋쟁이사자처럼 AI School 7th **MidProject** <br/>

**🙆‍♀️🙆 Team 성장발육엔텐텐** <br/>
조예슬, 김영민, 이재모, 임혜진

**🗓️ When**<br/>
2022.10.19 - 2022.10.24


### 📃 summary     

#### 주제 : 의료기관 개폐업 현황 분석 및 인사이트 도출<br/>

**✔️ 주제 선정 배경** <br/>
코로나 이후로 더욱 중요해지고 있는 의료기관의 개업, 폐업과 현황 데이터를 총 인구수 데이터와 합친 후 EDA 분석을 통하여 연도별, 행정구역별, 총인구수와 연령 비율이 의료기관 개폐업 현황과 어떤 관련성을 갖는지 분석하고 의미있는 인사이트를 도출하고자 한다. 

이전에 진행한 미니프로젝트에서 EDA 분석을 통해 도출했던 자료를 활용하는 방법을 모색했다.
미니 프로젝트에서 분석한 자료는 다음과 같다.
* 행정구역별 연령층 비율
* 연도별 연령층 비율
* 연도와 아동층 / 노년층 비율 상관관계
* 연도별 행정구역별 인구비율 추세

<br/>

**✔️ 데이터셋 연계 방안** <br/>
1. 연도별 총인구수 데이터와 연도별 의료기관 개폐업 데이터
2. 2022년 6월 기준 총 인구수 데이터와 2022년 6월 기준 의료기관 현황 데이터

<br/>

**✔️ 가설 설정** <br/>
- 총인구수가 적은 행정구역은 현존하는 의료기관수가 부족할 것으로 예상한다.
- 고령화가 많이 진행된 지역에 현존하는 의료기관이 부족할 것이다.
- 의료기관수는 다른분야(문화, 환경, 교육)의 인프라와도 상관관계가 있을 것이다.
- 연도별 의료기관 개폐업수와 총인구수, 연령층 비율은 상관관계가 있을 것이다.

<br/>

**✔️ 결론 도출 및 배포 계획** <br/>
- EDA와 가설 검증을 통한 시사점 제시
- 문제의식과 해결방안 제시
- Streamlit 활용하여 배포

<br/>

**✔️ 본 프로젝트의 활용 방안 예시** <br/>
각 행정구역별 지방정부 산하 의료기관 확충

### 🗂️ Datasets

**전국인구현황 데이터** : 
미니프로젝트2에서 [행정안전부 주민등록 인구통계 데이터 분석](https://jumin.mois.go.kr/ageStatMonth.do)에서 2015.01 - 2021.12 기간 동안 제공된 데이터를 다운받고 이를 활용해 병합 및 파생변수 추가 등 데이터를 수정해주었다. 

**전국인구현황 데이터** : 
[행정안전부 주민등록 인구통계 데이터 분석](https://jumin.mois.go.kr/ageStatMonth.do)에서 2015.01 - 2021.12 기간 동안 제공된 데이터를 다운받아 이용하였다.

<br/>
  

**1️⃣ 전국인구현황**<br/>
<p align='center'><img src='../../assets/img/MidProject_medical/01.png' width='80%'><figcaption>
^ shape : <code>(31416, 8)</code></figcaption></p>


<br/>

**2️⃣ 보건의료빅데이터개방시스템**<br/>


**📂 train(input+target) shape**                   
train(input+target) (1813, 43)         
test(input+target) (195, 43)   

<table id="2c384d0b-48cb-4ba2-b109-b622349407f5" class="simple-table" ><thead class="simple-table-header"><tr id="7a44d00f-f113-4998-98ed-0599f0e446b8"><th id="ByXL" class="simple-table-header-color simple-table-header" style="width:121.796875px"></th><th id="_fE]" class="simple-table-header-color simple-table-header" style="width:449px">설명</th></tr></thead><tbody><tr id="ab5e8b8f-776b-4c23-a984-4c653350c1a7"><th id="ByXL" class="simple-table-header-color simple-table-header" style="width:121.796875px">행정구역</th><td id="_fE]" class="" style="width:449px"><strong>대한민국 행정구역</strong>
'경상남도', '경기도', '대구광역시', '강원도', '전라남도', '서울특별시', '울산광역시', '인천광역시', '경상북도', '부산광역시', '충청남도', '대전광역시', '충청북도', '전라북도', '광주광역시', '제주특별자치도', '세종특별자치시'</td></tr><tr id="895ebd73-0f3b-45c6-983d-39c98d7db79a"><th id="ByXL" class="simple-table-header-color simple-table-header" style="width:121.796875px">날짜</th><td id="_fE]" class="" style="width:449px">해당 기간 (2008년 ~ 2021년 월별)</td></tr><tr id="f7832669-b4cc-410f-b072-215a2b5caed5"><th id="ByXL" class="simple-table-header-color simple-table-header" style="width:121.796875px">연도</th><td id="_fE]" class="" style="width:449px"><code>날짜</code>에서 ‘년’</td></tr><tr id="91550404-c6b8-4e27-81bd-288d1181a378"><th id="ByXL" class="simple-table-header-color simple-table-header" style="width:121.796875px">연령대</th><td id="_fE]" class="" style="width:449px">0 ~ 100세 이상 (10세 구분)</td></tr><tr id="fd169af5-b6b8-4db4-beba-9212355b26d5"><th id="ByXL" class="simple-table-header-color simple-table-header" style="width:121.796875px">인구수</th><td id="_fE]" class="" style="width:449px">해당 행정구역, 연령대, 날짜에 따른 인구수</td></tr><tr id="c2a67601-92e3-4cb2-b20b-133932102d7a"><th id="ByXL" class="simple-table-header-color simple-table-header" style="width:121.796875px">총인구수</th><td id="_fE]" class="" style="width:449px">해당 행정구역, 날짜별 총 인구수</td></tr><tr id="0d877abd-0cb5-432e-9293-4872c9cf5630"><th id="ByXL" class="simple-table-header-color simple-table-header" style="width:121.796875px">인구비율 (%)</th><td id="_fE]" class="" style="width:449px"><code>인구수</code> / <code>총인구수</code> * 100</td></tr><tr id="326748b5-aa43-428d-8525-8f03d89e0fdd"><th id="ByXL" class="simple-table-header-color simple-table-header" style="width:121.796875px">구분</th><td id="_fE]" class="" style="width:449px">연령대에서 연령 구분 (아동, 청소년, 청년, 중장년, 노년 등)</td></tr></tbody></table>
  
<br/><br/>

<!-- ### 📊 Visualization
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

<br/> -->






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
