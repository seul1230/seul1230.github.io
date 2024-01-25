---
layout: post
title:  "End of 2023, Start of 2024, AI-OCR"
date:   2024-01-10 12:00:09 +0900
categories: Data_AI
# published: false
---
# [ DL ] AI-OCR이란? 

2023 하반기에 하나금융융합기술원 인턴으로 참여하면서 개인적으로도 열심히 공부했고 고마운 분들께 많은 것을 얻을 수 있었다. 이때 공부한 것을 여기에 조금씩 기록해 나가고자 한다. 

📌 오늘의 주제 : <strong>AI-OCR</strong>

<h3 class='line-mark-pink'>1. OCR 개념</h3>

<h4 class='line-mark-gray'> OCR = Text detection + Text recognition </h4>

<strong>OCR <font color='lightgray'>Optical Character Recognition</font></strong> 은 광학 문자 인식으로, 이미지에 있는 글씨를 인지하여 텍스트 데이터로 치환해주는 기술을 말한다. OCR은 크게 문자 영역을 검출하는 **Text detection**과 검출된 영역의 문자를 인식하는 **Text recognition**으로 구분할 수 있다. 이 두 가지 기술을 통해 이미지 속 문자를 읽을 수 있다. 자동차 번호판 인식, 신용카드 번호 인식 등 일상생활에서도 OCR을 쉽게 찾아볼 수 있다.

**Text detection**은 일반적인 Object detection 중 문자를 찾아내는 태스크라고 볼 수 있다. 문자가 가지는 독특한 특성을 고려해 지속적으로 발전해 왔다고 한다.

**Text recognition**은 앞서 검출된 영역의 문자가 어떤 문자인지 인식해 내는 것을 말한다. 검출된 영역 속 문자가 MNIST 데이터처럼 깔끔하지 않고 다양한 각도와 형태로 존재할 수 있기 때문에 다른 모델 구조가 필요하다.

<br/>

<p class='line-mark-gray'>
<strong>✅ AI-OCR</strong></p>

- 원하는 데이터만 추출하고, 이를 사람이 원하는 방식으로 가공까지 가능
- 방대한 서류를 분석하고 분류하는 데 유용


<h3 class='line-mark-pink'>2. OCR before Deep Learning</h3>

처음부터 OCR에 딥러닝이 쓰였던 건 아니다. 보통은 아래와 같은 프로세스로 진행되었다고 한다.

<p align='center'>
<img src='/assets/img/Data_AI/TesseractOCR_1.png' width='45%'></p>

딥러닝 이전에 사용했던 OCR 엔진 중 하나로 **Tesseract OCR**를 간단하게 설명하자면, 아래 그림에서 Connected Component Analysis 단계에서 문자 영역을 검출한 후 Find Lines and Words 단계에서 라인 또는 단어 단위를 추출한다. 이후 Recognize Word 단계에서 단어 단위 이미지를 Text로 변환하기 위해 문자를 하나씩 인식하고 다시 결합하는 과정을 거친다.

<p align='center'>
<img src='/assets/img/Data_AI/TesseractOCR_2.png' width='60%'>
<figcaption><a href='https://arxiv.org/pdf/1811.06193.pdf'>Architecture of Tesseract OCR</a></figcaption>
</p>

위 방법은 필요한 단계가 많기 때문에 다소 복잡하고 시간이 오래 걸린다. 현재는 이 점 때문에 딥러닝을 적용하여 원하는 단위로 문자를 검출하고 이를 한 번에 인식하도록 아키텍처를 단순하게 하여 빠르게 OCR 인식을 하고 있다. 

<h3 class='line-mark-pink'>3. Text detection</h3>

위에서 봤듯이, 딥러닝 이전에도 OCR은 **Text detection + Text recognition**의 기본적인 흐름은 동일했다. 

그럼 이제 딥러닝을 이용해서 Text detection 하는 법에 대해 알아보자. 이미지에서 텍스트를 찾아낼 때 단순히 object detection이나 segmentation 기법을 생각할 수 있다. 그러나 Text detection은 텍스트의 특성도 고려해 주어야 한다. 문자 하나하나가 모여 단어를 만들고, 단어가 모여 문장이 된다. 그렇기 때문에 이미지에서 문자를 검출할 때에 검출하기 위한 최소 단위를 정해야 한다는 것이다.

<p align='center'>
<img src='/assets/img/Data_AI/text_detections.png' width='70%'>
<figcaption><a href='https://arxiv.org/pdf/1704.03155v2.pdf'>다양한 Text detection 기법</a></figcaption>
</p>

위 그림은 EAST:An Efficient and Accurate Scene Text Detector(2017) 논문에서 소개된 다양한 Text detection 기법을 정리한 것이다.

당시 detection에 있어서 주로 Text의 Bounding box를 구하는 방식에 초점을 맞추었다. 그림에서도 알 수 있듯이, 여러 방향(가로/세로/대각선 등)으로 써 있는 텍스트 박스를 구하는 방식을 다양하게 연구했다. 

<h4 class='line-mark-gray'> 3.1. Text detection - Regression </h4>

[TextBoxes: A Fast Text Detector with a Single Deep Neural Network](https://arxiv.org/pdf/1611.06779.pdf)

<p align='center'>
<img src='/assets/img/Data_AI/textboxes.png' width='90%'>
<figcaption><a href='https://arxiv.org/pdf/1611.06779.pdf'>TextBoxes 모델 구조</a></figcaption>
</p>


이전에는 글자 단위로 인식하여 결합하는 방식을 활용해왔다고 얘기한 바 있다. 해당 논문은 딥러닝을 활용해 단어 단위로 detection하는 법에 대해 설명한다. 네트워크 기본 구조로는 [SSD: single shot multibox detector](https://arxiv.org/pdf/1512.02325.pdf)를 사용하여 빠르게 문자 영역을 탐지해내었다. 


<details>
<summary class='line-mark-gray'><font color='gray'>[click!] 🔎  <strong>사물 탐지 알고리즘의 일반적인 프레임워크</strong></font></summary><br/>
<div markdown="1">

<p align='center'>
<img src='/assets/img/Data_AI/region_proposal.png' width='60%'>
</p>


<strong>1️⃣ 영역 제안 (Region Proposal)</strong><br/>
이미지에서 시스템이 처리할 영역 RoI (Regions of Interest) 를 제안하는 딥러닝 모델 또는 알고리즘을 말한다. 그리고 이때 RoI는 이미지 내 물체가 존재할 것이라 예상되는 영역을 의미한다.

<strong>2️⃣ 특징 추출 및 예측</strong><br/>
각 박스 영역의 시각적 특징을 추출한다. 이러한 특징을 평가해서 물체 존재 여부와 클래스를 판단한다.

<strong>3️⃣ 비최대 억제 NMS, Non-Maximum Suppression</strong><br/>
이 단계쯤이면 모델이 같은 물체에 대해 복수의 박스를 발견했을 가능성이 높다. NMS는 중복된 박스들을 탐지하고 통합하여 물체 하나마다 하나의 박스만 남도록 하는 역할을 한다.

<strong>4️⃣ 평가 지표</strong><br/>
이미지 분류의 정확도, 정밀도, 재현율 등과 비슷하게 사물탐지에도 성능을 측정하는 고유의 평가 지표가 있다. 그 중 가장 널리 쓰이는 지표로는 평균평균정밀도 (mean average precision, MAP) 와 PR 곡선 (Precision-Recall curve), 중첩률 (Intersection over Union, IoU) 가 있다. 




</div>
</details>
<br/>

<p align='center'>
<img src='/assets/img/Data_AI/verticaloffset.png' width='60%'>
<figcaption><a href='https://arxiv.org/pdf/1611.06779.pdf'>vertical offset 설명</a></figcaption>
</p>


기존의 SSD는 Regression을 위한 Convolution layer에서 3 x 3 크기의 kernel을 갖는다.  그렇지만 단어는 일반적으로 가로로 쓰기 때문에 Aspect ratio(종횡비)가 크다는 특징이 있다. 그래서 이 논문에서는 SSD를 조금 변형해서 1 x 5 크기의 convolution filer를 정의하여 사용한다. 추가로 Anchor box의 aspect ratio를 1, 2, 3, 5, 7로 두고, 이에 vertical offset을 적용해서 세로 방향으로도 촘촘하게 배열된 단어에도 대응하도록 했다. 

<h4 class='line-mark-gray'> 3.2. Text detection - Segmentation </h4>



<h3 class='line-mark-gray'>Reference</h3>

- [11. OCR 기술의 개요](https://velog.io/@xpelqpdj0422/11.-OCR-%EA%B8%B0%EC%88%A0%EC%9D%98-%EA%B0%9C%EC%9A%94)
- [각종 문서, 이제 AI가 간편하게 처리한다! AI-OCR로 달라진 미래 산업](https://blog.naver.com/hanwhadays/223021763201)