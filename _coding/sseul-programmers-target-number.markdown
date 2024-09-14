---
layout: post
title:  "그래프탐색 DFS | 프로그래머스 고득점kit 타겟 넘버 | Python"
description: <strong>💚 Level 2</strong><font color='gray'><br/>- 난이도 ★☆☆☆<br/>- 그래프탐색</font>
date:   2024-05-13 13:30:09 +0900
categories: coding
tags: [그래프탐색]
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

# 프로그래머스 고득점kit 타겟 넘버 | Python

<p align='center'>
<img src='/assets/img/coding/prog_target_number.png' width='100%'>
<figcaption><a href='https://school.programmers.co.kr/learn/courses/30/lessons/43165?language=python3'>📌 프로그래머스 고득점kit 타겟 넘버 문제 바로가기</a></figcaption>
</p>

<br/>

## 🔎 문제 설명

<strong>💚 Level 2</strong>

<pre class="callout">
- 난이도 ★☆☆☆
- 그래프탐색 DFS
</pre>


그래프탐색 DFS를 이용하면 그리 어렵지 않은 문제다. 사실 그냥 다 더하고 빼서 <code>target</code> 점수가 되는 값만 세어도 된다.
그러나 재귀로 엄청 깔끔하게 코드로 작성할 수 있어서 가져와 보았다.

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

### 1️⃣ DFS를 이용한 코드

```python
answer = 0

def dfs(idx, now, target, numbers):
    global answer
    num_len = len(numbers)
    if idx == num_len and now == target:
        answer += 1
    if idx < num_len:
        dfs(idx+1, target, now - numbers[idx], numbers)
        dfs(idx+1, target, now + numbers[idx], numbers)
    return

def solution(numbers, target):
    dfs(0, 0, target, numbers)
    return answer
```

### 2️⃣ 재귀를 이용한 코드


```python
def solution(numbers, target):
     # numbers 끝까지 순회하고 target 값 달성했을 때
     if not numbers and target == 0:
          return 1
     # numbers 끝까지 순회했지만 target 값 달성 못했을 때
     elif not numbers:
          return 0
     else:
          return solution(numbers[1:], target-numbers[0]) + solution(numbers[1:], target+numbers[0])
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
