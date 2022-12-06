---
layout: post
title:  "2022_likelion TIL"
date:   2022-11-21 09:00:09 +0900
categories: SpecialLecture
---
# [ AI ] 인공지능과 머신러닝, 그리고 딥러닝
#### 👩🏻‍💻 K-MOOC 실습으로 배우는 머신러닝 강의
📙 해당 포스트는 [K-MOOC 강의](http://www.kmooc.kr/courses/course-v1:SSUk+SSMOOC20K+2022_T1/course/) 내용과 추가로 다른 자료들을 찾아 내용을 작성하였으며, **이론 및 개념**을 중심적으로 다룰 예정이다.

<br/>

***


- [\[ AI \] 인공지능과 머신러닝, 그리고 딥러닝](#-ai--인공지능과-머신러닝-그리고-딥러닝)
      - [👩🏻‍💻 K-MOOC 실습으로 배우는 머신러닝 강의](#-k-mooc-실습으로-배우는-머신러닝-강의)
  - [인공지능과 머신러닝, 그리고 딥러닝](#인공지능과-머신러닝-그리고-딥러닝)
    - [🤔 인공지능 \> 머신러닝 \> 딥러닝](#-인공지능--머신러닝--딥러닝)
      - [➡️ 차이점](#️-차이점)
    - [🔎 고양이랑 강아지를 어떻게 구분할까?](#-고양이랑-강아지를-어떻게-구분할까)
  - [인공지능의 역사](#인공지능의-역사)
    - [👶 인공지능 태동기](#-인공지능-태동기)
    - [🫅 인공지능 황금기](#-인공지능-황금기)
    - [🥶 첫 번째 AI 겨울과 두 번째 AI 겨울](#-첫-번째-ai-겨울과-두-번째-ai-겨울)
    - [👑 LeNet-5의 등장](#-lenet-5의-등장)
    - [👑 AlexNet의 등장](#-alexnet의-등장)
      - [➡️ 급성장 원인](#️-급성장-원인)
  - [참고](#참고)
    - [다음 포스트에서 만나요 🙌](#다음-포스트에서-만나요-)

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
    * PyTorch
      * Facebook에서 개발하여 2016년 공개한 파이썬 기반의 오픈소스 머신러닝 라이브러리
    * Keras
      * 다양한 인공지능 엔진에서 지원
      * 2015년에 공개된 파이썬 기반의 오픈소스 신경망 라이브러리
      * 텐서플로, 파이토치와 함께 널리 사용

#### ➡️ 차이점
인공지능은 컴퓨터가 인간의 사고를 모방하는 모든 것을 뜻하고, 머신러닝은 컴퓨터가 스스로 학습하는 것, 딥러닝은 인공신경망으로 머신러닝을 구현하는 등 인간 뇌의 동작 방식에서 착안하여 개발한 학습 방법이라고 생가갛면 될 것 같다.


### 🔎 고양이랑 강아지를 어떻게 구분할까?
![](/assets/img/img_221121/ai_dog_cat.png){: .center width="70%"}

강아지와 고양이 사진을 학습시켜서 최종적으로 강아지와 고양이를 잘 구분하는 함수를 만들어준다. 이 함수에 강아지랑 고양이 이미지를 넣어주면 인공지능 모형이 스스로 분류에 필요한 특징을 찾아내고 강아지인지 고양이인지 분류를 가능할 수 있게 된다.


## 인공지능의 역사

![](/assets/img/img_221121/ai_history.png){: .center width="90%"}
### 👶 인공지능 태동기
1943년 워런 매 컬러 (Warren McCulloch)와 월터 피츠 (Walter Pitts)는 최초로 뇌의 뉴런 개념을 발표했다. 1950년에는 앨런 튜링 (Alan Turing)이 인공지능이 사람과 같은 지능을 가졌는지 테스트할 수 있는 유명한 튜링 테스트 Turing Test를 발표한다. 많은 과학자가 참여한 1956년 다트머스 AI 콘퍼런스 (Dartmouth AI Conference)에서는 인공지능에 대한 장밋빛 전망이 최고조에 도달했다.

### 🫅 인공지능 황금기
대표적으로 1957년 프랑크 로젠블라트(Frank Rosenblatt)가 로지스틱 회귀의 초기 버전으로 볼 수 있는 퍼셉트론 Perceptron을 발표했다. 1959년에는 데이비드 허블 (David Hubel)과 토르스텐 비셀 (Torsten Wiesel)이 고양이를 사용해 시각 피질에 있는 뉴런 기능을 연구했다. 나중에 두 사람은 그 공로를 인정받아 노벨상을 수상했다고 한다. 

### 🥶 첫 번째 AI 겨울과 두 번째 AI 겨울
컴퓨터 성능의 한계로 인해 간단한 문제를 해결하는 수준에 머무르게 되자 첫 번째 AI 겨울이 찾아왔다. 
이 기간에는 인공지능에 대한 연구와 투자가 크게 감소했다. 
후에, 전문가 시스템 expert system이 등장하면서 두 번째 AI 붐이 찾아왔지만, 역시 또 한계를 드러내고 두 번째 AI 겨울을 맞이한다.

### 👑 LeNet-5의 등장
🥶 두 번째 AI 겨울 기간에도 여전히 인공지능에 대해 연구한 사람들이 있었다. 
이들의 연구가 차츰 빛을 보면서 다시 인공지능 기술이 주목받기 시작했다. <br/><br/>

![](/assets/img/img_221121/lenet5.png){: .center width="90%"}<br/>


1998년 얀 르쿤 (Yann Lecun)이 신경망 모델을 만들어 손글씨 숫자를 인식하는 데 성공했다. 이 신경망의 이름을 **LeNet-5**라고 하며 최초의 합성곱 신경망이다.

### 👑 AlexNet의 등장
그 이후 2012년에 제프리 힌턴 (Geoffrey Hinton)의 팀이 이미지 분류 대회인 ImageNet에서 기존의 머신러닝 방법을 누르고 압도적인 성능으로 우승했다. <br/><br/>

![](/assets/img/img_221121/alexnet.png){: .center width="90%"}<br/>


힌턴이 사용한 모델의 이름은 **AlexNet**이며 역시 합성곱 신경망을 사용했다. 이때부터 이미지 분류 작업에 합성곱 신경망이 널리 사용되기 시작했다고 한다.


#### ➡️ 급성장 원인
LeNet-5나 AlexNet과 같이 인공 신경망이 이전과 다르게 놀라운 성능을 달성하게 된 배경으로 크게 3가지를 꼽을 수 있다.

1. 대용량의 데이터
2. 컴퓨터 성능의 향상
3. 혁신적인 알고리즘 개발


<!-- ## 💻 실습 예제 코드 -->

## 참고
[🤖 AI란 무엇인가?](https://hongong.hanbit.co.kr/ai-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5-%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D-%EB%94%A5%EB%9F%AC%EB%8B%9D-%EC%B0%A8%EC%9D%B4%EC%A0%90-%EC%B4%9D%EC%A0%95%EB%A6%AC/)

[[AI 이야기] 어린이도 잘 아는 ‘강아지’와 ‘고양이’…AI는 왜 구별하지 못할까](https://magazine.hankyung.com/business/article/202009099351b)

[K-MOOC 실습으로 배우는 머신러닝](http://www.kmooc.kr/courses/course-v1:SSUk+SSMOOC20K+2022_T1/course/)

### 다음 포스트에서 만나요 🙌

**[다음 포스트](https://seul1230.github.io/speciallecture/2022-11-21-likelion-TIL2/)**에서는 [K-MOOC 실습으로 배우는 머신러닝](http://www.kmooc.kr/courses/course-v1:SSUk+SSMOOC20K+2022_T1/course/) 중 PCA에서 내가 부족한 부분들을 정리해 더 작성할 예정이다.


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
