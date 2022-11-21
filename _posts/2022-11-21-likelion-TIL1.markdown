---
layout: post
title:  "2022_likelion TIL"
date:   2022-11-21 09:00:09 +0900
categories: SpecialLecture
---
# [ 1121 Special Lecture TIL ] 인공지능과 머신러닝, 그리고 딥러닝
## 👩🏻‍💻 K-MOOC 실습으로 배우는 머신러닝 강의
오늘도 화이팅 :)

오늘은 조은님 건강상의 이유로 [K-MOOC 강의](http://www.kmooc.kr/courses/course-v1:SSUk+SSMOOC20K+2022_T1/course/)로 대체되었다.

📙 이번 포스트는 강의 내용과 추가로 다른 자료들을 찾아 내용을 작성하였으며, **이론 및 개념**을 중심적으로 다룰 예정이다.

<br/>

***

## 인공지능과 머신러닝, 그리고 딥러닝
최근 머신러닝이 각광받으면서 많은 사람들이 **머신러닝**을 이용하면 이것이 **인공지능**이라고 생각하는 경우가 많다. 그렇지만 **머신러닝**은 **인공지능**의 하위 개념으로, 이외에도 **인공지능**을 구현하는 방법엔 여러 가지가 있다.

![](/assets/img/img_221121/ai_ml_dl.png){: .center width="70%"}

### 🤔 인공지능 > 머신러닝 > 딥러닝
* **인공지능 <font color='lightgray'>artificial intelligence</font>**
  * 사람처럼 학습하고 추론할 수 있는 지능을 가진 컴퓨터 시스템

* **머신러닝 <font color='lightgray'>machine learning</font>**

  * **머신 <font color = 'lightgray'>Machine</font> = 기계**
  * **러닝 <font color = 'lightgray'>Learning</font> = 학습**
  * 기계가 학습한다 / 컴퓨터가 학습한다

  * 규칙을 일일이 프로그래밍하지 않아도 자동으로 데이터에서 규칙을 학습하는 알고리즘을 연구하는 분야
  * 인공지능 하위 분야에서 지능을 구현하기 위한 소프트웨어를 담당하는 핵심 분야
  * 통계학과 깊은 관련이 있음
  * 대표 라이브러리 : Scikit Learn

* **딥러닝 <font color='lightgray'>deep learning</font>**
  ![](/assets/img/img_221121/neural_dl.png){: .center width="70%"}

  * 많은 머신러닝 알고리즘 중에 **인공 신경망 <font color='gray'>artificial neural network</font>**을 기반으로 한 방법들을 통칭
  * 종종 사람들은 인공 신경망과 딥러닝을 크게 구분하지 않고 사용
  * 대표 라이브러리 : Tensorflow, PyTorch
  
  ![](/assets/img/img_221121/tensorflow-pytorch.png){: .center width="70%"}

    * Tensorflow
      * 구글이 만든 딥러닝 라이브러리
      * CPU와 GPU를 사용해 인공신경망 모델을 효율적으로 훈련
      * 모델 구축과 서비스에 필요한 다양한 도구를 제공
      * 텐서플로 2.0부터는 신경망 모델을 빠르게 구성할 수 있는 케라스 Keras를 핵심 API로 채택
    * Keras
      * 다양한 인공지능 엔진에서 지원
      * 2015년에 공개된 파이썬 기반의 오픈소스 신경망 라이브러리
      * 텐서플로, 파이토치와 함께 널리 사용

#### ➡️ 차이점
인공지능은 컴퓨터가 인간의 사고를 모방하는 모든 것을 뜻하고, 머신러닝은 컴퓨터가 스스로 학습하는 것, 딥러닝은 인공신경망으로 머신러닝을 구현하는 등 인간 뇌의 동작 방식에서 착안하여 개발한 학습 방법이라고 생가갛면 될 것 같다.


### 🔎 고양이랑 강아지를 어떻게 구분할까?
![](/assets/img/img_221121/ai_dog_cat.png){: .center width="70%"}

강아지와 고양이 사진을 학습시켜서 최종적으로 강아지와 고양이를 잘 구분하는 함수를 만들어준다. 이 함수에 강아지랑 고양이 이미지를 넣어주면 인공지능 모형이 스스로 분류에 필요한 특징을 찾아내고 강아지인지 고양이인지 분류를 가능할 수 있게 된다.





<!-- ## 💻 실습 예제 코드 -->

## 참고
[🤖 AI란 무엇인가?](https://hongong.hanbit.co.kr/ai-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5-%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D-%EB%94%A5%EB%9F%AC%EB%8B%9D-%EC%B0%A8%EC%9D%B4%EC%A0%90-%EC%B4%9D%EC%A0%95%EB%A6%AC/)

[[AI 이야기] 어린이도 잘 아는 ‘강아지’와 ‘고양이’…AI는 왜 구별하지 못할까](https://magazine.hankyung.com/business/article/202009099351b)

[K-MOOC 실습으로 배우는 머신러닝](http://www.kmooc.kr/courses/course-v1:SSUk+SSMOOC20K+2022_T1/course/)

### 다음 포스트에서 만나요 🙌

다음 포스트에서는 [K-MOOC 실습으로 배우는 머신러닝](http://www.kmooc.kr/courses/course-v1:SSUk+SSMOOC20K+2022_T1/course/) 중 Support Vector Machine에서 내가 부족한 부분들을 정리해 더 작성할 예정이다.


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
