---
layout: post
title:  "DP 동적프로그래밍 | BOJ 백준 21317번 징검다리 건너기 | Python"
description: <strong>🩶 Silver 1</strong><font color='gray'><br/>- 난이도 ★★★★<br/>- DP 동적프로그래밍</font>
date:   2024-04-02 13:30:09 +0900
categories: coding
tags: [DP 동적프로그래밍]
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

# BOJ 백준 21317번 징검다리 건너기 | Python

<p align='center'>
<img src='/assets/img/coding/boj_21317_1.png' width='100%'>
<img src='/assets/img/coding/boj_21317_2.png' width='100%'>
<figcaption><a href='https://www.acmicpc.net/problem/21317'>📌 백준 21317번 문제 바로가기</a></figcaption>
</p>

<br/>

## 🔎 문제 설명

<strong>🩶 실버 1</strong>

<pre class="callout">
- 난이도 ★★★★
- DP 동적프로그래밍
</pre>


집중력을 잃지 않는 게 중요하다...!

사실 매우 큰 점프 1회로 제한되어 있지 않았다면 코드가 이렇게 복잡해지진 않았을 것 같다. <br/>
매우 큰 점프를 했을 때 안 했을 때 <code>최소 에너지</code>를 찾기 위해 리스트 2개로 알아보았다. 

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
jump = []

dp = [float('inf')] * 21
dp[0] = 0

for n in range(N-1):
    small, big = map(int, input().split())
    jump.append((small, big))
    # 매우 큰 점프를 안 하는 경우 dp
    if n+1 < N:
        dp[n+1] = min(dp[n+1], dp[n]+small)
    if n+2 < N:
        dp[n+2] = min(dp[n+2], dp[n]+big)
K = int(input())

if N == 2:
    print(jump[0][0])
elif N == 3:
    print(min(jump[0][0]+jump[1][0], jump[0][1]))
elif N > 3:
    energy_list = [dp[N-1]]

    # 매우 큰 점프를 하는 경우 dp1
    for i in range(N-3):
        dp1 = dp.copy()
        dp1[i+3] = dp1[i] + K
        for j in range(i+4, N):
            dp1[j] = min(dp1[j-2]+jump[j-2][1], dp1[j-1]+jump[j-1][0])
        energy_list.append(dp1[N-1])
    print(min(energy_list))
else:
    print(0)
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
