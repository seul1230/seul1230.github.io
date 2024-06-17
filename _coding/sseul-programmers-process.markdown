---
layout: post
title:  "스택/큐 | 프로그래머스 고득점kit 프로세스 | Python"
description: <strong>💚 Level 2</strong><font color='gray'><br/>- 난이도 ★☆☆☆<br/>- 스택/큐</font>
date:   2024-06-14 17:30:09 +0900
categories: coding
tags: [스택/큐]
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

# 프로그래머스 고득점kit 프로세스 | Python

<p align='center'>
<img src='/assets/img/coding/prog_process.png' width='100%'>
<figcaption><a href='https://school.programmers.co.kr/learn/courses/30/lessons/42587'>📌 프로그래머스 고득점kit 프로세스 문제 바로가기</a></figcaption>
</p>

<br/>

## 🔎 문제 설명

<strong>💚 Level 2</strong>
```
- 난이도 ★☆☆☆
- 스택/큐
```

스택과 큐를 이용해서 풀 수 있는 문제다. 해당 문제는 간단해서 문제에서 알려준 프로세스대로 코딩하면 쉽게 풀린다.<br/>
스택 ver. 코드와 큐 ver. 코드 둘 다 아래에 작성해 놓았다.

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

- 스택을 이용한 버전

```python
def solution(priorities, location):
    answer = 0
    queue = [(idx, pri) for idx, pri in enumerate(priorities)]

    while queue:
        idx, now = queue.pop(0)
        if queue and now < max(list(zip(*queue))[1]):
            queue.append((idx,now))
        else:
            answer += 1
            if location == idx:
                return answer
```

<br/>

- 큐를 이용한 버전

```python
from collections import deque
def solution(priorities, location):
    answer = 0
    idx_prior = [(idx, pri) for idx, pri in enumerate(priorities)]
    queue = deque(idx_prior)

    while queue:
        idx, now = queue.popleft()
        if queue and now < max(list(zip(*queue))[1]):
            queue.append((idx,now))
        else:
            answer += 1
            if location == idx:
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
