---
layout: post
title:  "2022_likelion TIL"
date:   2022-11-21 17:00:09 +0900
categories: SpecialLecture
---
# [ 1121 Special Lecture TIL ] 머신러닝 - 군집화 (Clustering)
## 👩🏻‍💻 K-MOOC 실습으로 배우는 머신러닝 강의

📙 이번 포스트는 [K-MOOC 강의](http://www.kmooc.kr/courses/course-v1:SSUk+SSMOOC20K+2022_T1/course/) 내용과 추가로 다른 자료들을 찾아 내용을 작성하였으며, **이론 및 개념**에 대해 공부하고 **예제 실습**도 진행한 후 내용을 정리하였다.

**[[ 1121 Special Lecture TIL ] 인공지능과 머신러닝, 그리고 딥러닝](https://seul1230.github.io/speciallecture/2022-11-21-likelion-TIL1/)**와 같은 날 작성된 포스트이다. 



<br/>

***

## 1. 군집화 <font color='lightgray'>Clustering</font>
![](/assets/img/img_221121/clustering.png){: .center width="50%"} 

유사한 속성들을 갖는 관측치를 묶어 전체 데이터를 몇 개의 군집 (그룹) 으로 나누는 것을 군집화라 한다. 
* 군집화 기준
  * 군집 내 유사도 최대화
    * 동일한 군집에 속한 관측치들은 서로 유사할수록 좋음
  * 군집 간 유사도 최소화
    * 상이한 군집에 속한 관측치들은 서로 다를수록 좋음


## 2. 분류와 군집화는 어떻게 다를까?
![](/assets/img/img_221121/class_cluster.png){: .center width="70%"} 

* **분류 <font color='lightgray'>Classification</font>**
  * 사전 정의된 범주가 있는 labeled data로부터 예측 모델을 학습하는 문제
  * Supervised Learning (지도 학습)
* **군집화 <font color='lightgray'>Clustering</font>**
  * 사전 정의된 범주가 없는 unlabeled data에서 최적의 그룹을 찾아나가는 문제
  * Unsupervised Learning (비지도 학습)


## 3. 군집화 활용  <font color = 'lightgray'>Application</font>
군집화는 특히 **세분화 <font color = 'lightgray'>Segmentation</font>**에서 활용된다.

* **E-commerce**
  * 온라인 쇼핑몰
    * 고객 특정 유형으로 분류 ➡️ 맞춤 서비스 제공
    * 새로운 고객 유형 발견 ➡️ 마케팅 전략에 활용

* **Tracking**
  * 이미지 / 영상

* **Anomaly detection**
  * 이상검출
  * 제조 / 물류 분야

## 4. 군집화 알고리즘 <font color = 'lightgray'>Clustering Algorithm</font>

* **K-Means (Centroid)**
* **K-Medoids**
* **Mean Shift (Centroid)**
* **Gaussian Mixture Model (정규분포)**
* **DBSCAN (밀도)**


## 마무리하면서..



### 다음 포스트에서 만나요 🙌
<!-- 다음 포스트에서는 [K-MOOC 실습으로 배우는 머신러닝](http://www.kmooc.kr/courses/course-v1:SSUk+SSMOOC20K+2022_T1/course/)에서 내가 부족한 부분들을 정리해 더 작성할 예정이다. -->

<br/>

***

## 참고


[K-MOOC 실습으로 배우는 머신러닝](http://www.kmooc.kr/courses/course-v1:SSUk+SSMOOC20K+2022_T1/course/)

[머신러닝 - PCA (Principal Component Analysis)](https://velog.io/@swan9405/PCA)

[Stack Exchange - Making sense of principal component analysis, eigenvectors & eigenvalues](https://stats.stackexchange.com/questions/2691/making-sense-of-principal-component-analysis-eigenvectors-eigenvalues)

[[sklearn] PCA (Principal Component Analysis)](https://m.blog.naver.com/pjc1349/221996214527)





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
