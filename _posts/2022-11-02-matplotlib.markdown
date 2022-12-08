---
layout: post
title:  "1102 matplotlib study"
date:   2022-11-02 03:30:09 +0900
categories: DataAnalysis
---
# Matplotlib 활용하기

## PYCON KOREA 2022
[YouTube 혼란한 Matplotlib에서 질서 찾기](https://youtu.be/ZTRKojTLE8M) 

해당 포스트는 위의 **YouTube 혼란한 Matplotlib에서 질서 찾기** 영상을 보고 matplotlib의 활용법에 대해 공부하면서 정리한 글이다.

### [ <mark style='background-color: #fff5b1'>TO DO</mark> ]
**1. 안 예쁜 Matplotlib 그림을 예쁘게** - 딱 seaborn만큼만

**2. 고급 그리는 법 알아보기** - 이게 Matplotlib으로 된다고?

**3. 질서 찾기** - 복잡한 과정을 체계적으로 수행하는 법

<br/>

1️⃣ **시각화 환경 설정 <font color = 'lightgray'>배색, 스타일</font>**     ➡️ seaborn

2️⃣ **화면 구성 <font color = 'lightgray'>크기, 분할, 여백지정</font>**    ; matplotlib

3️⃣ **데이터 얹기 <font color = 'lightgray'>데이터 종류 & 목적</font>**    ; seaborn, scikitlearn, NetworkX, GeoPandas

4️⃣ **부가 요소 설정 <font color = 'lightgray'>정량적 전달력 강화</font>**  ; matplotlib

5️⃣ **중요 데이터 강조 <font color = 'lightgray'>색 요소 변경</font>**     ; matplotlib

6️⃣ **보조 요소 설정 <font color = 'lightgray'>정석적 전달력 강화</font>**  ; matplotlib

#### 문제 1. 안 예쁜 Matplotlib

**해결 1. seaborn 사전 설정**

```python
import seaborn as sns

sns.set_context("talk")         # 발표에 적당한 사이즈로
sns.set_palette("Set2")         # 배색 변경
sns.set_style("whitegrid")      # 눈금, 배경, 격자 설정
```

이 작업은 코드 맨 처음에 딱 한 번만 하면 됨!

