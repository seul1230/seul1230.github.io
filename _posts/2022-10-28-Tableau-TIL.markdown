---
layout: post
title:  "2022_likelion TIL"
date:   2022-10-07 09:00:09 +0900
categories: SpecialLecture
published: false
---
# [ 1028 Special Lecture TIL ] Tableau

#### 👩🏻‍💻 통계 강의 _ 강승일 강사님


<br/>

***

## 📚 오늘의 TIL - <br/>

### 🐾　데이터 시각화　🐾
데이터를 시각적으로 표현하는 것

**데이터 시각적 분석**이란,
데이터 시각화를 기본으로 하되
**인사이트**를 구하고 스토리텔링을 추가해
다른 사람과 **공유, 협업, 피드백** 및 **업데이트** 과정을 지속, 발전시키는 것

-> Dashboard에 interactive한 내용 추가해주는 것이 좋음.


### 1. 데이터 파악하기
1) 피벗 적용하기
Tableau narrow & tall 지향 
각각의 변수마다 다양한 member끼리 비교하기 쉽기 때문에
-> 열 방향으로 되어 있는 데이터를 행 방향으로

2) 중복된 값 제거하기

3) 데이터의 수준 살펴 보기


### 태블로
태블로는 스스로 데이터를 보고 이해하는 셀프 서비스의 분석 영역에서 조직과 조직 구성원이 데이텉를 활용하는데 도움을 준다.
현재 태블로는 데이터 분석 분야의 신뢰받는 리더로서 사람과 조직이 한층 더 데이터 기반의 의사결정을 할 수 있도록 지원한다.



### 라이브 연결 vs 추출 연결
Tableau 유료 버전 라이브 연결 가능! 데이터가 거의 바로 동기화.

추출연결은 압축시켜서 메모리에 저장되기 때문에 대용량 데이터에도 강하다. 그러나 데이터 자동 최신화는 안됨.
1) 큰 데이터 집합 지원
2) 빠르다
3) 성능을 개선할 수 있다.
추출 데이터 원본을 사용하는 뷰와 상호 작용하는 경우, 원래 데이터에 대한 연결에 기반하는 뷰와 상호 작용할 때보다 일반적으로 성능이 개선됨.

4) 추가 가능 지원
5) 데이터에 오프라인 액세스 제공



### 🐾　실습　🐾
**주문 (SUPERSTORE_2019-2022)**

* 데이터 해석기 -> 불필요한 값들은 날리고 해석할 수 있게 됨

* `DATEPART`는 날짜 type의 필드를 정수로 바꿔줌 
```sql
DATEPART('year', [주문 일자])       # 년도
DATEPART('quarter', [주문 일자])    # 분기
```

* DATETRUNC -> Rollup
```sql
DATETRUNC('year', [주문 일자])       # 년도까지만
DATETRUNC('month', [주문 일자])      # 년도 - 월까지만
DATETRUNC('quarter', [주문 일자])    # 분기별로
```


### 측정값과 차원
일반적으로 측정값은 숫자 형식이고,
액션 (drag-drop 또는 double-click) 하면 집계를 통해 차트를 만들고,

차원은 그 숫자들로 만들어진 차트를 어떻게 나눠서 볼 것인지를 결정한다.

![측정값_차원](/assets/img/img_20221028/측정값_차원.png){:width = "70%"} <br/><br/>
*Gray line*을 기준으로 아래가 **측정값**, 위가 **차원**이다.


![tableau_example](/assets/img/img_20221028/tableau_example.png) <br/><br/>

차원변수를 올려놓을수록 막대가 세세하게 나눠진다.

### 불연속형과 연속형
파란색 필드 = 불연속형 = 개별적으로 구분

유한한 범위, 뷰에 추가하면 머리글을 추가함

초록색 필드 = 연속형 = 단절이 없고 끊어지지 않는 무한대 범위, 뷰에 추가하면 축을 추가한다.

### Tableau에서 '계산된 필드 만들기'란?
1. 데이터 원본에는 없는 **새로운 필드**를 만드는 것
2. 겉으로 드러나지 않는 **인사이트를 발굴**하는 요소

**계산 유형**

1) 기본 계산
    데이터 원본 세부 수준(행 수준 계산) 또는 Viz 세부 수준(집계 계산)에서 값 또는 member를 변환할 수 있다.
    ```SUM([수익])/SUM([매출])```
2) LOD (Level of Detail expression, 세부 수준)식
    LOD 계산을 사용하면 계산할 세부 수준을 세부적으로 제어할 수 있다. Viz의 세부 수준을 기준으로 더 세분화된 수준 (INCLUDE), 덜 세분화된 수준 (EXCLUDE) 또는 완전히 독립적인 수준 (FIXED)에서 LOD 계산을 수행할 수 있다.
    ```{FIXED [고객번호] : MIN([주문 일자])}```
    고객번호를 고정하고 이를 기준으로 첫 주문 일자 계산하기.
3) 테이블 계싼
   테이블 계산을 사용하면 Viz 전용 세부 수준에서 값을 변환할 수 있다.
   ```SUM([매출]) / TOTAL(SUM([매출]))```






```sql
// 평균 이상이란, 합계 매출이 합계 매출들의 평균보다 크거나 같으면 True, 아니면 False

SUM([매출]) >= WINDOW_AVG(SUM([매출]))
```


### 🐾　　🐾

### 🐾　　🐾

### 🐾　　🐾

### 🐾　　🐾



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
-->
