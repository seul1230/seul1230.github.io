---
layout: post
title:  "Project"
date:   2022-11-03 15:00:09 +0900
categories: Projects
---
# [ MiniProject I ] 월간 신용카드 사기 거래 탐지

### 🦁 Project 
멋쟁이사자처럼 AI School 7th **MiniProject I** <br/>

### 🙆‍♀️🙆 Team
으쌰으쌰2팀 - **7ㅏ즈아** (승후님, 우진님, 하윤님, 준모님)

### 🪪 **월간 신용카드 사기 거래 탐지** 💳

이번 미니 프로젝트로 **7ㅏ즈아** 팀은 2022년 8월에 마감한 [**월간 데이콘 신용카드 사기 거래 탐지 AI 경진대회**](https://dacon.io/competitions/official/235930/data)를 주제로 모델을 만들고 높은 성능을 낼 수 있는 방법에 대해 모색하기로 하였다. 

### 🗂️ Dataset

1. **Train Dataset** (113842개)
- **파일명**: train.csv
- **설명**: 정상, 사기 거래의 여부를 알 수 없는(대부분 정상 거래) 신용 카드 데이터 (Unlabeled)
- **ID** : 신용 카드 거래 ID
- **Column** ('V1', 'V2', 'V3', ... ,'V30) : 비식별화된 신용 카드 거래 Feature



2. **Validation Dataset** (28462개)
- **파일명** : val.csv
- **설명** : 정상, 사기 거래의 여부가 포함된 신용 카드 데이터 (학습 불가능, 규칙 참고)
- **ID** : 신용 카드 거래 ID
- **Column** ('V1', 'V2', 'V3', ... ,'V30) : 비식별화된 신용 카드 거래 Feature
- **Class** : 신용 카드 거래의 정상, 사기 여부 (정상 : 0, 사기 : 1)


3. **Test Dataset** (142503개)
- **파일명**: test.csv
- **설명**: 정상, 사기 거래의 여부를 알 수 없는(대부분 정상 거래) 신용 카드 데이터 (Unlabeled)
- **ID** : 신용 카드 거래 ID
- **Column** ('V1', 'V2', 'V3', ... ,'V30) : 비식별화된 신용 카드 거래 Feature



### 💻 Closer Look

우선 기본으로 제공되는 `sample_submission.csv`를 그대로 제출하니 0.002496675(Public)의 성능이 나왔다.





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
