---
layout: post
title:  "스택&큐 | 프로그래머스 고득점kit N으로 표현 | Python"
description: <strong>💚 Level 3</strong><font color='gray'><br/>- 난이도 ★★★☆<br/>- 스택&큐</font>
date:   2024-06-07 17:30:09 +0900
categories: coding
tags: [스택&큐]
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

# 프로그래머스 고득점kit N으로 표현 | Python

<p align='center'>
<img src='/assets/img/coding/prog_express_N.png' width='100%'>
<figcaption><a href='https://school.programmers.co.kr/learn/courses/30/lessons/42895'>📌 프로그래머스 고득점kit N으로 표현 문제 바로가기</a></figcaption>
</p>

<br/>

## 🔎 문제 설명

<strong>💚 Level 3</strong>
```
- 난이도 ★★★☆
- 스택&큐
```

익숙해지지 않는 문제. 나중에 한 번 더 풀어서 쉽게 구현할 수 있도록 해야겠다.

N으로 만들 수 있는 수로 사칙연산을 할 때 N을 최소한으로 사용해야 한다. <br/><font color='lightgray'>예) 555는 5가 3번 사용된 것이다.</font>

<br/>


📌📌📌<br/>
코드의 전체적인 풀이는 다음과 같다.

> 1. N이 9번 이상 사용되면 -1 반환 <br/>➡️ 미리 N이 사용될 횟수 후보(1~8번)를 만든다.
> <br/><br/>
> 2. 횟수 후보 안에서 만들 수 있는 수 <code>numbers[j]</code>, <code>numbers[i-j]</code> 로 사칙연산을 하고 그 결과를 <code>numbers</code> 에 추가 
> <br/>➡️ <code>numbers</code> 에 타깃 넘버 <code>number</code> 가 있으면 횟수 반환


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
def solution(N, number):
    numbers = [set() for _ in range(9)]
    # N 사용횟수 > 8, return -1
    for i in range(1,9):
        numbers[i].add(int(str(N)*i))
        for j in range(i//2+1):
            for x in numbers[j]:
                for y in numbers[i-j]:
                    numbers[i].add(x+y)
                    numbers[i].add(x-y)
                    numbers[i].add(y-x)
                    numbers[i].add(x*y)
                    if y != 0: numbers[i].add(x//y)
                    if x != 0: numbers[i].add(y//x)
        if number in numbers[i]:
            return i
        
    return -1
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
