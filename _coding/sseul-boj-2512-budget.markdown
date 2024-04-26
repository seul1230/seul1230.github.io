---
layout: post
title:  "이분탐색 | BOJ 백준 2512번 예산 | Python"
description: <strong>🩶 Silver 2</strong><font color='gray'><br/>- 난이도 ★☆☆☆<br/>- 이분탐색</font>
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

# BOJ 백준 2512번 예산 | Python

<p align='center'>
<img src='/assets/img/coding/boj_2512.png' width='100%'>
<figcaption><a href='https://www.acmicpc.net/problem/2512'>📌 백준 2512번 문제 바로가기</a></figcaption>
</p>



## 🔎 문제 설명

<strong>🩶 실버 2</strong>
```
- 난이도 ★☆☆☆
- 이분탐색
```

이분탐색의 대표적인 예시 문제이다. '[백준 나무 자르기 문제](https://www.acmicpc.net/problem/2805)' 와 상황이 거의 비슷한 문제라 이 문제를 접했다면 어렵지 않게 해결할 수 있다.

<br/>

📌 문제 풀이 큰 틀은 다음과 같다.

- <code><strong>기준점(mid)</strong></code> = 가능한 한 최대의 총 예산
- 정해진 총액 이하에서 기준점을 기준으로 합을 계산


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

N = int(input())
cities = list(map(int, input().split()))
budget = int(input())


start, end = 0, max(cities)
answer = 0
total = 0

while start <= end:
    total = 0
    mid = (start + end)//2

    for i in cities:
        if mid > i:
            total += i
        else:
            total += mid

    if total > budget:
        end = mid - 1
    else:
        start = mid + 1
        answer = mid

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
