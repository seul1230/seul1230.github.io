---
layout: post
title:  "After Boostcourse 9th Study"
date:   2023-04-23 13:50:09 +0900
categories: Data_AI
---
# [ DL ] 고급 합성곱 신경망 구조

<strong>비전 시스템을 위한 딥러닝 <font color='lightgray'>Deep Learning for Vision Systems</font></strong> 전공 수업을 들으며 배운 내용을 정리하고자 한다.

본 포스트에서는 고급 합성곱 신경망 구조 <font color='lightgray'>Advanced CNN Architectures</font>에 대해 정리하겠다.


## CNN의 디자인 패턴

CNN을 이용해 딥러닝 모델을 설계할 때 일반적으로 다음과 같은 패턴 구조를 따른다.

#### 1️⃣ 첫 번째 패턴 : 특징 추출과 분류
* 합성곱 신경망은 크게 특징 추출을 맡는 부분과 분류를 맡는 부분으로 나뉨
* 특징 추출 : 일련의 합성곱층 <font color='lightgray'>Conv</font>
* 분류 : 전결합층 <font color='lightgray'>FC</font>
* LeNet, AlexNet, 인셉션, ResNet 등
<p align='center'><img src='/assets/img/DLsystem/cnn_architecture.png' width='70%'></p>

#### 2️⃣ 두 번째 패턴 : 이미지 깊이 🔼, 이미지 크기 🔽
* 모든 층의 입력은 <strong>이미지</strong>
* 각 층은 이전 층에서 생성된 새로운 이미지에 **합성곱 연산**을 적용함
  * **입력층**에서 깊이가 1이면 회색조 (색상 채널)
  * **이후 계층**에서 깊이는 이전 층에서 추출된 특징을 나타내는 **특징 맵**이 됨
* 모든 합성곱 신경망에서 <mark>합성곱층을 지날 때마다 이미지의 깊이가 증가하고 크기는 감소하는 경향</mark>

#### 3️⃣ 세 번째 패턴 : 전결합층 FC
* 대부분 모든 FC층은 유닛수가 같거나, 유닛 수가 감소하는 경향
* 유닛수가 증가하는 경우는 거의 없음
* 이어지는 모든 FC층의 유닛을 같게 해서 신경망의 학습 능력이 저해되는 현상은 발생되지 않음


## 합성곱 신경망 살펴보기


<p align='center'>
<img src="https://latex.codecogs.com/svg.image?Conv&space;=&space;\frac{input&space;-&space;kernel&space;&plus;&space;2*padding}{stride}&plus;1" title="https://latex.codecogs.com/svg.image?Conv = \frac{input - kernel + 2*padding}{stride}+1" /></p>

### 📌 LeNet -5
* 1998년 르쿤 연구진 발표
* 직관적인 구조
* 가중치를 가진 5개의 층 > 모델의 계산 복잡도와 직결
  * 3개의 합성곱층
  * 2개의 전결합층
  * <font color='lightgray'>pooling 층은 가중치를 가지지 않음</font>
* 1998년 당시, ReLU는 발견되기 이전 > tanh와 sigmoid 함수를 쓰는 것이 일반적이었음

<p align='center'><img src='/assets/img/DLsystem/LeNet.png' width='70%'></p>

* 각 합성층의 필터 수
  * 6 > 16 > 120
* 각 합성층의 커널 크기
  * 5 x 5
* Pooling 층 <font color='lightgray'>AveragePooling</font>
  * 수용 영역 크기 : 2 x 2
* 활성화 함수  Tanh 함수


### 📌 AlexNet
* 알렉스크리체프스키 연구진 
* LeNet이 MNIST에 대해서는 AlexNet보다는 높은 성능을 보임
* AlexNet은 MNIST보다 복잡도가 높은 이미지넷 문제 해결을 위해 제안됨
* 🏆 2012, ILSVRC
* 120만 장의 이미지, 1000 클래스 
* CV에서 본격적으로 딥러닝을 최초로 도입하여 합성곱 신경망의 응용이 확산되는 계기가 되었음
  * 이전에는 음성 인식 등 소수 분야에서만 딥러닝 적용되고 있었음

<p align='center'><img src='/assets/img/DLsystem/AlexNet.png' width='70%'></p>

* 가중치를 가진 8개의 층
  * 5개의 합성곱층
  * 3개의 전결합층

* 핪성곱층의 필터 크기 : 11 x 11, 5 x 5, 3 x 3
* MaxPooling 사용
* 과적합 방지를 위한 Dropout 0.5
  * Dropout을 통해 비활성화된 뉴런은 순반향 + 역전파 계산에서 **모두** 배제
  * 뉴런 간의 상호 적응 방지
  * 다양한 조합의 뉴런에 도움을 주는 유용한 특징 학습
* 활성화함수 ReLU
  * 학습 시간 단축
  * 기울기 소실 문제 해결
* 데이터 강화
* 국소 응답 정규화 <font color='lightgray'>Local response normalization</font>
  * 가중치가 빨리 수렴되도록
  * BN과 다름
* 가중치 규제화
  * 0.00005의 가중치 감쇠 적용
* 다중 GPU 사용
  * 2개의 GPU에 신경망을 나눠 담아 학습하는 복잡한 방식
  * 각 층을 두 GPU 메모리에 분리하고, GPU가 서로 통신하도록

### 📌 VGGNet
* 2014, 옥스퍼드 대학 VGG 연구 그룹 제안
* AlexNet보다 깊이 있는 신경망
* AlexNet보다 파라미터 개수 적음 ▶️ 연산효율성 👍
* 새로 고안된 요소 없이 LeNet과 AlexNet과 동일 (신경망 층수만 더 많음)

<p align='center'><img src='/assets/img/DLsystem/VGG16.png' width='70%'></p>


* 가중치를 가진 층 16개로 구성
  * 합성곱층 13개
  * 전결합층 3개
  * 모든 층의 하이퍼파라미터가 동일하게 설정 > 이해하기 쉽다 !
  
* <mark>신경망의 구조를 단순화시킴</mark>
* VGGNet에서 합성곱층의 필터 크기를 3 x 3으로 줄였음
  * AlexNet보다 더 세밀한 특징을 추출하기 위해

#### ⭐️ 수용영역의 크기가 같을 때

<font color='gray'>수용영역 : 출력의 한 점에 영향을 미치는 입력 이미지의 범위</font>

크기가 큰 하나의 커널보다 **크기가 작은 커널**을 **여러 개** 쌓은 쪽이 성능이 더 좋다. 

<p align='center' class='callout'>
커널을 여러 개 쌓으면서 비선형층을 늘리는 것 🟰 신경망의 층수를 늘리는 것</p>

신경망의 층수를 늘리는 것과 같은 효과를 내면서 **파라미터 수는 억제**하여 더 낮은 비용으로 더 복잡한 특징을 학습할 수 있다.

* 층수를 늘리고 합성곱 필터의 크기를 줄이면서 규제화와 같은 효과 발생 ⭐️


### 📌 인셉션과 GoogLeNet

* 2014, 구글 발표
* 신경망 내부적으로 계산 자원의 효율을 높였음
  
* 입셉션 신경망 구조를 구현한 GoogLeNet은 22개 층으로 구성
  * VGGNet보다 층수가 많음
  * 파라미터 수는 VGGNet의 1/12에 불가함
  * VGGNet : 1억 3800만 개, GoogLeNet : 1300만 개

#### 인셉션 신경망 구조
구글은 AlexNet, VGGNet에서 따온 고전적 CNN 구조 따르지만 인셉션 모듈이라는 새로운 요소 도입하였다.

기존 신경망 구조들은 각 층마다 합성곱층의 커널 크기, 풀링층의 배치 등 파라미터를 결정하기 위해 다양한 시행착오를 거쳐야했다. 

인셉션에서는 이들을 직접 결정하는 대신 블록 전체에 똑같은 설정 (인셉션 모듈)을 적용했다. 이를 적용해 구성한 모델이 바로 GoogLeNet이다.


<p align='center'><img src='/assets/img/DLsystem/Inception_modeuls.png' width='70%'></p>

기존 방식에서는 합성곱층과 풀링층을 번갈아 쌓았다면, 인셉션 구조에서는 오른쪽과 같이 입셉션 모듈과 풀링층을 쌓아 특징 추출기를 구성하였다.

* 인셉션 모듈의 구성
  * 1 x 1 합성곱층, 3 x 3 합성곱층, 5 x 5 합성곱층, 3 x 3 최대풀링층
  * 각 층의 출력 ▶️ <strong>연접 처리 <font color='lightgray'>cnocatenation</font></strong>를 통해 하나의 출력으로 합쳐짐 ▶️ 다음 단계의 입력


* **차원 축소 적용**
  * 단순 인셉션 모듈은 크기가 큰 필터를 포함하기 때문에 계산 비용이 큼
  * 1 x 1 합성곱층을 도입하면 
  * 입력의 깊이를 축소하고 연산량을 줄일 수 있음
  * 병목층이라고도 함
  * <mark>합성곱층 앞 / 최대풀링층 뒤</mark>


<p align='center'><img src='/assets/img/DLsystem/inception_1x1.png' width='70%'></p>

#### GoogLeNet 구조
<p align='center'><img src='/assets/img/DLsystem/googlenet.png' width='90%'></p>


### 📌 ResNet <font color='lightgray'>Residual Neural Network</font>

* 2015, 마이크로소프트 리서치 팀 제안
* **잔차 모듈 + 스킵 연결**
* 은닉층 > **강한 배치 정규화** 적용
  * 배치 정규화가 강하게 적용되어 복잡도를 훨씬 낮출 수 있음
  * 신경망이 지나치게 깊어지면 과적합 발생
  * ResNet은 **배치정규화**를 통해 **과적합** 문제 해결 💡


* **스킵 연결**
  * 뒤쪽의 기울기를 앞쪽 층에 직접 전달하는 별도의 경로 추가
  * activation 통과하기 전 정보도 함께 넣어줌
  * **항등 함수를 학습**할 수 있어 층이 쌓여도 앞쪽 층보다 성능이 하락하지 않음

* **잔차 블록**
  * 합성곱층 + 스킵 연결 추가
  * 잔차 블록에는 풀링층이 없음
  * 주 경로와 지름길 경로로 전달되는 정보의 차원이 동일해야 연산 가능
  * **지름길 경로**
    * 입력을 주 경로의 ReLU 입력 전으로
  * **주 경로**
    * 일련의 합성곱 연산 및 활성화 함수
    * 각 학성곱 층마다 배치 정규화 적용 ▶️ 과적합 방지 + 학습 속도 향상
      * [ Conv + BN + ReLU ] x 3

<p align='center'><img src='/assets/img/DLsystem/residual_block.png' width='70%'></p>
