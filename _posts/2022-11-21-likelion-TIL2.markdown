---
layout: post
title:  "2022_likelion TIL"
date:   2022-11-21 09:00:09 +0900
categories: SpecialLecture
---
# [ 1121 Special Lecture TIL ] ML - PCA (Principal Component Analysis) 
## 👩🏻‍💻 K-MOOC 실습으로 배우는 머신러닝 강의
오늘도 화이팅 :)

오늘은 조은님 건강상의 이유로 [K-MOOC 강의](http://www.kmooc.kr/courses/course-v1:SSUk+SSMOOC20K+2022_T1/course/)로 대체되었다. **[[ 1121 Special Lecture TIL ] 인공지능과 머신러닝, 그리고 딥러닝](https://seul1230.github.io/speciallecture/2022-11-21-likelion-TIL1/)**와 같은 날 작성된 포스트이다. 

📙 이번 포스트는 강의 내용과 추가로 다른 자료들을 찾아 내용을 작성하였으며, **이론 및 개념**을 중심적으로 다룰 예정이다.

<br/>

***

## 주성분 분석 <font color='lightgray'>Principal Component Analysis</font>

차원축소(dimensionality reduction)와 변수추출(feature extraction) 기법으로 널리 쓰이고 있는 **<mark style='background-color: #fff5b1'>PCA (Principal Component Analysis)</mark>**은 비지도학습 <font color = 'gray'>Unsupervised Learning</font>에서 
자료에 **중복된 정보가 많을 경우**, 자료가 갖는 차원보다 **더 작은 수의 차원으로도** 자료에 내재한 정보를 설명할 수 있을 것이라는 아이디어에서 소개된 개념이다. 

![](/assets/img/img_221121/pca.png){: .center width="80%"} 

* **주성분이란** 
  * 전체 데이터 (독립변수)의 분산을 가장 잘 설명하는 성분
* **변수의 개수 = 차원의 개수** <br/>
  → 차원이 증가할수록 데이터가 표현해야 하는 공간은 복잡해진다. <br/>



#### 따라서 PCA는 주로
* 변수가 너무 많아 기존 변수를 조합해 새로운 변수를 가지고 모델링을 하려고 하거나
* **회귀 분석**과 같은 종속관계 분석을 할 때 **다중 공산성 <font color='gray'>multicollinearity</font>**을 없애기 위해 사용한다.

## PCA의 원리 <font color='lightgray'>How It Works</font>

데이터의 차원을 축소할 때 기존의 정보가 최대한 보존될 수 있는 새로운 축을 찾아야 한다. 이렇게 찾은 축을 Principle Component라고 하며, 주로 줄여서 PC라고 부른다. <br/><br/>

![](/assets/img/img_221121/pca_pc.gif){: .center width="100%"} <br/>


PC를 찾기 위해서는 covaiance matrix(공분산 행렬) 의 eigen vector(고유 벡터) 값을 찾아야 하고, 이 값 중 가장 큰 값이 우리가 원하는 PC 에 만족한다고 볼 수 있다. 

## 분산을 최대로 보존할 수 있는 축을 선택하는 이유?
![](/assets/img/img_221121/pca_variance.png){: .center width="80%"} <br/>

위의 그림처럼 간단한 2차원 데이터셋이 있을 때 c2의 직선을 선택하는 것이 분산을 가장 적게 나타내는 방법인데, 이렇게 되면 데이터를 유실하기가 쉬워진다.

따라서, 다른 방향으로 투영하는 것 보다 분산을 최대로 보존할 수 있는 축을 선택하는 것이 정보를 가장 적게 손실할 수 있다고 생각할 수 있다. 분산이 커져야 데이터들사이의 차이점이 명확해지고, 그것이 모델을 더욱 좋은 방향으로 만들 수 있을 것이기 때문이다.

## PCA 적용
#### Step 1 : 데이터 정규화 (각 변수 값들의 평균 = 0)
![](/assets/img/img_221121/pca_regularization.png){: .center width="80%"} <br/>

#### Step 2 : 최적화 문제 정의
* 데이터를 사영시킨 후의 분산을 최대화하는 새로운 축을 찾는 것이 목표!

![](/assets/img/img_221121/max_variance.png){: .center width="60%"} <br/>

#### Step 3 : 최적해 도출

![](/assets/img/img_221121/Lagrangian.png){: .center width="80%"} <br/>

* Lagrangian multiplier를 사용하여 제약식을 목적식에 추가한 새 목적식 생성
* 새 목적식을 미분하여 기울기가 0이 되는 점에서 최적해 발생

#### Step 4 : 고유벡터 (eigenvector) 들을 고유값 (eigenvalue) 기준으로 내림차순 정렬
* 각 고유벡터는 선형변환된 공간에서 서로 직교하는 새로운 축이 됨

#### Step 5 : 변수 추출을 통한 데이터 변환

![](/assets/img/img_221121/extracted_data.png){: .center width="80%"} <br/>


#### Step 6 : 추출된 변수 중 일부만을 사용하여 데이터 역변환

<br/>

![](/assets/img/img_221121/inverse_transform.png){: .center width="80%"} <br/>

## 결과 확인

➡️ **Scree Plot** 

![](/assets/img/img_221121/scree_plot.png){: .center width="80%"} <br/>

위의 그래프에서 네모친 곳처럼 정보의 감소량이 확 줄어드는 구간을 Elbow point라고 부른다. Eigenvalue의 Elbowpoint를 확인하고 적절하게 몇 차원으로 축소할지 결정한다.

<br/>

➡️ **Loading Plot**

![](/assets/img/img_221121/loading_plot.png){: .center width="80%"} <br/>

해당 plot은 각 주성분을 만들 때, 기존 데이터 x의 각 변수가 기여하는 정도를 판단하여 사후적인 변수에 대한 해석을 할 때 사용할 수 있다.

<!-- ## 💻 실습 예제 코드 -->

## 참고


[K-MOOC 실습으로 배우는 머신러닝](http://www.kmooc.kr/courses/course-v1:SSUk+SSMOOC20K+2022_T1/course/)

[머신러닝 - PCA (Principal Component Analysis)](https://velog.io/@swan9405/PCA)

[Stack Exchange - Making sense of principal component analysis, eigenvectors & eigenvalues](https://stats.stackexchange.com/questions/2691/making-sense-of-principal-component-analysis-eigenvectors-eigenvalues)


### 다음 포스트에서 만나요 🙌
<!-- 다음 포스트에서는 [K-MOOC 실습으로 배우는 머신러닝](http://www.kmooc.kr/courses/course-v1:SSUk+SSMOOC20K+2022_T1/course/)에서 내가 부족한 부분들을 정리해 더 작성할 예정이다. -->


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
