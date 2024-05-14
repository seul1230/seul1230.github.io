---
layout: post
title:  "DP 동적프로그래밍 | BOJ 백준 11055번 가장 큰 증가하는 부분 수열 | Python"
description: <strong>🩶 Silver 2</strong><font color='gray'><br/>- 난이도 ★★☆☆<br/>- DP 동적프로그래밍</font>
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

# BOJ 백준 11055번 가장 긴 증가하는 부분 수열 | Python

<p align='center'>
<img src='/assets/img/coding/boj_11055.png' width='100%'>
<figcaption><a href='https://www.acmicpc.net/problem/11055'>📌 백준 11055번 문제 바로가기</a></figcaption>
</p>

<br/>

## 🔎 문제 설명

<strong>🩶 실버 2</strong>
```
- 난이도 ★★☆☆
- DP 동적프로그래밍
```


<code>dp</code> for문에 증가하는 부분 수열의 길이를 저장하는 것이 포인트! <br/>
이중 for문을 이용해서 이제까지 증가하는 부분수열의 길이가 가장 긴 값에 <code>+1</code> 을 해주었다.

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
A = list(map(int, input().split()))
dp = [1] * 1001

for i in range(1, N):
    for j in range(i):
        if A[i] > A[j]:
            dp[i] = max(dp[j]+1, dp[i])
print(max(dp))
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
