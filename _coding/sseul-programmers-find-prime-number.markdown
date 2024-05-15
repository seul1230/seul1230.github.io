---
layout: post
title:  "완전탐색 | 프로그래머스 고득점kit 소수 찾기 | Python"
description: <strong>💚 Level 2</strong><font color='gray'><br/>- 난이도 ★☆☆☆<br/>- 완전탐색</font>
date:   2024-05-15 13:30:09 +0900
categories: coding
tags: [완전탐색]
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

# 프로그래머스 고득점kit 소수 찾기 | Python

<p align='center'>
<img src='/assets/img/coding/prog_find_prime_numbers.png' width='100%'>
<figcaption><a href='https://school.programmers.co.kr/learn/courses/30/lessons/42839'>📌 프로그래머스 고득점kit 소수 찾기 문제 바로가기</a></figcaption>
</p>

<br/>

## 🔎 문제 설명

<strong>💚 Level 2</strong>
```
- 난이도 ★☆☆☆
- 완전탐색
```

<code>itertools</code> 의 <code>permutations</code> 를 이용하면 쉽게 풀리는 문제다. 시간초과도 나지 않는 무난한 문제!<br/>
아, 난 이제까지 <code>set</code> 에 원소를 더할 때 <code>add</code> 함수를 이용해서 더해줬는데 <code>|=</code> 로도 더할 수 있다고 한다! 아래는 이 방법을 이용해 원소를 더한 코드이다.

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
# 소수 찾는 함수
def find_prime(x):
    # 0과 1은 소수가 아니다
    if x < 2:
        return False
    for i in range(2,x):
        if x % i == 0:
            return False
    return True

from itertools import permutations
def solution(numbers):
    answer = 0
    numbers = list(numbers)
    possible = set()
    for i in range(1,len(numbers)+1):
        possible |= set(map(int, [''.join(a) for a in permutations(numbers, i)]))

    for p in possible:
        answer += find_prime(p)

    return answer
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
