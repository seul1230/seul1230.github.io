---
layout: post
title:  "그리디 | [2024 KAKAO WINTER INTERNSHIP] 프로그래머스 도넛과 막대 그래프 | Python"
description: <strong>💚 Level 2</strong><font color='gray'><br/>- 난이도 ★★★☆<br/>- 2024 KAKAO WINTER INTERNSHIP<br/>- 그리디</font>
date:   2024-06-25 16:10:09 +0900
categories: coding
tags: [그리디]
---

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7280083909521856"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-7280083909521856"
     data-ad-slot="4964002703"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

<br/>

# 프로그래머스 도넛과 막대 그래프 | Python

<p align='center'>
<img src='/assets/img/coding/prog_doughnut_bar_graph_1.png' width='100%'>
<img src='/assets/img/coding/prog_doughnut_bar_graph_2.png' width='100%'>
<img src='/assets/img/coding/prog_doughnut_bar_graph_3.png' width='100%'>
<img src='/assets/img/coding/prog_doughnut_bar_graph_4.png' width='100%'>
<figcaption><a href='https://school.programmers.co.kr/learn/courses/30/lessons/258711'>📌 프로그래머스 도넛과 막대 그래프 문제 바로가기</a></figcaption>
</p>

<br/>

## 🔎 문제 설명

<strong>💚 Level 2</strong>

<pre class="callout">
- 난이도 ★★★☆
- 그리디
- [2024 KAKAO WINTER INTERNSHIP]
</pre>


프로그래머스 Level 2 치고 풀기 쉽지 않았던 문제다. 처음엔 당연히 그래프가 나와서 그래프탐색으로 도넛 모양, 막대 모양, 8자 모양 그래프를 각각 구하려고 했는데 <code>edge</code> 개수가 1M 개라는 점에서 시간초과가 날 것이라고 예상했다. 또한, 도넛과 8자 모양을 세는 걸 고민하는 데 시간을 많이 썼다.

<br/>

> ✅ input 간선과 output 간선으로 푸는 문제

- <strong>📍 <mark style='background-color: #f5f0ff'>생성한 정점의 번호</mark></strong>
  - 이해하기 어려웠음
  - 이 정점을 기준으로 도넛, 막대, 8자 모양 그래프가 생김
  - <font color='darkred'>output 만 존재하는 정점</font>

- <strong>🍩 <mark style='background-color: #f5f0ff'>도넛 모양 그래프</mark></strong>
  - 루트에서 시작해서 루트로 돌아올 수 있는 그래프
  - 8자 모양 그래프와 어떻게 구분할지 생각해야 함
    - <font color='darkred'>생성한 정점 output 개수 중 다른 모양 그래프 개수 빼면 될 듯</font>
<br/>

- <strong>🥖 <mark style='background-color: #f5f0ff'>막대 모양 그래프</mark></strong>
  - 마지막 노드 기준으로 <font color='darkred'>input 1개 이상, output 0개</font>
<br/>

- <strong>🥨 <mark style='background-color: #f5f0ff'>8자 모양 그래프</mark></strong>
  - 루트 1개를 기준으로 도넛 모양 그래프가 2개 존재
  - <font color='darkred'>input 2개 이상, output 2개</font>


<br/>

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7280083909521856"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-7280083909521856"
     data-ad-slot="4964002703"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

<br/>


## 💻 내 코드


```python
def solution(edges):
    N = 0 # 마지막 정점 번호

    index, doughnut, bar, eight = 0, 0, 0, 0
    input_edge = [0 for _ in range(1000001)]
    output_edge = [0 for _ in range(1000001)]
    
    for a, b in edges:
        N = max(N, a, b)
        output_edge[a] += 1
        input_edge[b] += 1
        
    for node in range(1,N+1):
        if input_edge[node] == 0 and output_edge[node] >= 2:
            index = node
        if input_edge[node] >= 2 and output_edge[node] == 2:
            eight += 1
        if input_edge[node] >= 1 and output_edge[node] == 0:
            bar += 1

    doughnut = output_edge[index] - eight - bar
    return [index, doughnut, bar, eight]
```



<br/>

개인적으로 문제 이해에 도움되었던 페이지를 남긴다.<br/>
✔️ [[해설] 초보자를 위한 상세한 해설](https://school.programmers.co.kr/questions/69108)


<br/><br/><br/>








<!--
<sup id="a1">[2](#f2)</sup>
 <b id="f1">1</b> 천예은, 김세빈, 이자윤, 우지환, _설명 가능한 AI 기술을 활용한 신용평가 모형에 대한 연구_, 한국데이터정보과학회지(2021). [↩](#a1)

<b id="f2">2</b> 천예은, 김세빈, 이자윤, 우지환, _설명 가능한 AI 기술을 활용한 신용평가 모형에 대한 연구_, 한국데이터정보과학회지(2021). [↩](#a1) -->


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
