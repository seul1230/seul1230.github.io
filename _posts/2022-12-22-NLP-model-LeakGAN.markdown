---
layout: post
title:  "TIL | LeakGAN - NLP Text Generation Model"
date:   2022-12-21 03:50:09 +0900
categories: Data_AI
tags: [TIL, GAN, NLP]
---
# [ NLP ] LeakGAN : Generative Adversarial Nets

<!-- LeakGAN : Long Text Generation via Adversarial Training with Leaked Information -->


본 포스트에서는 **[저번 포스트](https://seul1230.github.io/data_ai/2022-12-20-NLP-model-GAN/)**에 이어 문장 생성 모델에 관한 프로젝트를 진행하기 위해 공부한 내용을 정리하였다. LeakGAN에 대해 알아보자. 

## 기존 연구에서 문제점
* 문장이 완성되어야 신호를 줄 수 있는 D 때문에 문장이 길어질 경우 D의 신호가 희박해짐
* 미리 정의된 도메인에서 문장을 생성하는 시도는 있었음.

**💡 Idea** <br/>
* 전체를 생성하는 문제 ➡️ 여러 부분을 생성하는 문제로 변경하자 (Hierarchical Task)
* 정해진 도메인의 데이터 뿐만 아니라 다른 데이터도 생성하자.


## LeakGAN이란
**LSTM으로 구성된 Manager**와 **Worker간의 상호작용**을 통해서 문장 구조를 암묵적으로 학습할 수 있고, **길고 짧은 텍스트 생성**에서 모두 성능을 향상시킬 수 있다.
* 판별자 : high-level feature들을 생성자에게 유출
* 생성자 : Manager, Worker로 구성
  * Manager : 현재 생성한 단어로 latent vector를 추출, Worker에게 전달
  * Worker : latent vector로 다음 단어 예측

[LeakGAN](https://paperswithcode.com/sota/text-generation-on-coco-captions)은 현재 **텍스트 생성 <font color='lightgray'>Text Generation</font>**의 SOTA 모델이다. 

<p align='center'>
<img src='/assets/img/data_ai_img/coco_img.png' width="50%">
</p>

이때의 데이터셋으로는 [COCO Image Captions](https://paperswithcode.com/dataset/coco-captions)를 사용했으며, 330,000개 이상의 이미지를 설명하는 150만 개 이상의 캡션 데이터를 담고 있다.

<br>

## LeakGAN의 구조

<p align='center'>
<img src='/assets/img/data_ai_img/leakgan.png' width="90%">
</p>

위 그림은 LeakGAN의 구조를 시각화해놓은 그림이다. 
**high-level MANAGER 모듈**과 **low-level WORKER 모듈**로 구성된 **hierarchical 생성자 G**에 대해 구체적으로 설명하겠다. 


**<mark style='background-color: #f1f8ff'>MANAGER</mark>**는 LSTM(Long Short Term Memory)이며 중재자 역할을 한다. <br/>
각 단계에서 생성자 D의 high-level feature representation <font color='lightgray'>(예: CNN의 feature map)</font> 을 받아서 이를 사용하여 해당 time step에서 WORKER 모듈의 <mark style='background-color: #dcffe4'>goal</mark>을 형성한다. 판별자 D의 정보는 내부적으로 관리되고 생성자 G에게 그러한 정보를 제공하지 않기로 되어 있다. <font color='lightgray'>(D의 정보 유출)</font>. 


다음으로 MANAGER에 의해 생성된 <mark style='background-color: #dcffe4'>목표 임베딩</mark>이 주어지면 <br/>
**<mark style='background-color: #f1f8ff'>WORKER</mark>**는 먼저 현재 생성된 단어를 다른 LSTM으로 인코딩한 다음 <br/>
LSTM의 출력과 목표 임베딩을 결합하여 현재 상태에서 최종 조치를 취한다. 


이와 같이 D의 guiding signal는 scalar reward signal 측면에서 
마지막에 G에 사용할 수 있을 뿐만 아니라 G가 개선되도록 생성 프로세스 중에 목표 임베딩 벡터 측면에서도 사용할 수 있다.

#### 구조 정리
**Hierarchical Structure of G** <br>
D의 유출된 정보를 이용하기 위해 MANAGER-WORKER 계층 구조를 가진다.
* **Manager** : 각 time step에서 유출 정보 ft를 이용해 goal vector(gt) 생성
  * 이전 시점의 goal vector와 현재 벡터 Embedding
* **Worker** : manager의 gt와 현재 단어를 토대로 다음 단어 생성

---
## 💻 코드 실습 - LeakGAN

**참고 코드 - IMAGE COCO**

<https://github.com/CR-Gjx/LeakGAN/blob/master/Image%20COCO/LeakGANModel.py>

<https://github.com/CR-Gjx/LeakGAN/blob/master/Image%20COCO/Discriminator.py>

<br/>

**참고 코드 - Synthetic Data**

<https://github.com/CR-Gjx/LeakGAN/blob/master/Synthetic%20Data/LeakGANModel.py>

<https://github.com/CR-Gjx/LeakGAN/blob/master/Synthetic%20Data/Discriminator.py>


## 참고

[week1-1 NLI, Topic modeling, Text Generation](https://velog.io/@ttogle918/week1-1)

[SlideShare](https://www.slideshare.net/gyuhyeonNam/study-long-text-generation-via-adversarial-training-with-leaked-information)