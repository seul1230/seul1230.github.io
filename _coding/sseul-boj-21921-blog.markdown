---
layout: post
title:  "투포인터 | BOJ 백준 21921번 블로그 | Python"
description: <strong>🩶 Silver 3</strong><font color='gray'><br/>- 난이도 ★★☆☆<br/>- 투포인터</font>
date:   2024-04-02 13:30:09 +0900
categories: coding
tags: [투포인터]
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

# BOJ 백준 21921번 블로그 | Python

<p align='center'>
<img src='/assets/img/coding/boj_21921.png' width='100%'>
<figcaption><a href='https://www.acmicpc.net/problem/21921'>📌 백준 21921번 문제 바로가기</a></figcaption>
</p>


<p align='center'>
<img src='/assets/img/coding/boj_21921_1.png' width='100%'>
<figcaption><a href='https://www.acmicpc.net/problem/21921'>📌 백준 21921번 문제 제한</a></figcaption>
</p>

## 🔎 문제 설명

<strong>🩶 실버 3</strong>

<pre class="callout">
- 난이도 ★★☆☆
- 투포인터
</pre>


처음엔 for문을 돌리면서 슬라이싱으로 풀었는데 <code>시간초과</code> 가 났다. <br/>
그래서 그 후엔 불필요하게 반복되는 시간을 줄이고자 투포인터 방식으로 접근하였다.

이건 시작 포인트와 끝 포인트 사이 원소 개수가 정해져 있는 생각보다 쉬운 문제다.  <br/>
시작 포인트 기준으로 새로 포함되는 원소를 더하고, 포함되지 않는 원소를 빼주면서 슬라이싱을 진행하는 식으로 코드를 작성하였다.


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

N, X = map(int,input().split())
blog = list(map(int, input().split()))

inter_sum = 0
max_blog = -1
cnt = 0

if max(blog) == 0:
    max_blog = 0

else:
    inter_sum = sum(blog[:X])
    max_blog = inter_sum
    cnt = 1
    for start in range(X, N):
        inter_sum -= blog[start-X]
        inter_sum += blog[start]

        if inter_sum > max_blog:
            max_blog = inter_sum
            cnt = 1
        elif inter_sum == max_blog:
            cnt += 1
    
if max_blog == 0:
    print('SAD')
else:
    print(max_blog)
    print(cnt)
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
