---
layout: post
title:  "이분탐색 | BOJ 백준 3079번 입국심사 | Python"
description: <strong>💛 Gold 5</strong><font color='gray'><br/>- 난이도 ★★★☆<br/>- 이분탐색</font>
date:   2024-04-23 14:30:09 +0900
categories: coding
tags: [이분탐색]
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

# BOJ 백준 3079번 입국심사 | Python

<p align='center'>
<img src='/assets/img/coding/boj_3079.png' width='100%'>
<figcaption><a href='https://www.acmicpc.net/problem/3079'>📌 백준 3079번 문제 바로가기</a></figcaption>
</p>



## 🔎 문제 설명

<strong>💛 골드 5</strong>
```
- 난이도 ★★★☆
- 이분탐색
```

이분탐색을 떠올리는 데 조금 시간이 걸렸다. 그리고 각 심사대별로 어떻게 시간을 분배해 계산해줄지 찾는 것이 관건이었다. 이분탐색은 실버까지는 쉽게 풀리나, 골드처럼 조금만 문제를 꼬아도 생각하기 까다로운 문제인 것 같다. 더 연습해야지,,!



<br/>

📌 문제 풀이 큰 틀은 다음과 같다.

- <code><strong>기준점(mid)</strong></code> = 상근이와 친구들이 심사를 받는데 걸리는 총 시간
- 총 시간을 각 심사대별 시간으로 나누어 <strong>검사 가능한 인원 수 <code>ppl</code></strong>를 계산한다.


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
import sys
input = sys.stdin.readline

N, M = map(int, input().split())
T = []
for n in range(N):
    T.append(int(input()))

start, end = min(T), max(T)*M
answer = float('inf')

while start <= end:
    ppl = 0
    mid = (start + end)//2
    
    for t in T:
        ppl += mid // t

    if ppl >= M:
        end = mid - 1
        answer = min(answer, mid)
    else:
        start = mid + 1
    
print(answer)
```


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
