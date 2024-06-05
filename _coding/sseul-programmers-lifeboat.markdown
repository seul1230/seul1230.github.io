---
layout: post
title:  "그리디 | 프로그래머스 고득점kit 구명보트 | Python"
description: <strong>💚 Level 2</strong><font color='gray'><br/>- 난이도 ★☆☆☆<br/>- 그리디<br/>- 투포인터</font>
date:   2024-06-05 19:30:09 +0900
categories: coding
tags: [그리디, 투포인터]
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

# 프로그래머스 고득점kit 구명보트 | Python

<p align='center'>
<img src='/assets/img/coding/prog_lifeboat.png' width='100%'>
<figcaption><a href='https://school.programmers.co.kr/learn/courses/30/lessons/42885'>📌 프로그래머스 고득점kit 구명보트 문제 바로가기</a></figcaption>
</p>

<br/>

## 🔎 문제 설명

<strong>💚 Level 2</strong>
```
- 난이도 ★☆☆☆
- 그리디
- 투포인터
```

> 문제 조건을 잘 보자!

문제를 잘 안 읽어서 시간이 생각보다 오래 걸렸다. 

<br/>

문제 조건은 다음과 같다.
- <strong>⭐️ 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없다.</strong>
- 구명보트의 무게 제한을 초과하여 탈 수 없다.
- 구명보틑를 최대한 적게 사용하여 모든 사람을 구출하자

<br/>

최대 두 사람만 탑승할 수 있다는 조건을 생각하면 제일 가벼운 사람과 제일 무거운 사람을 엮어줘야 한다. 가벼운 사람과 무거운 사람을 <code>투 포인터</code> 로 접근해 계산해 주었고, 더 자세한 코드는 밑에 남겨두었다. 

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
def solution(people, limit):
    answer = 0
    people = sorted(people)
    start, end = 0, len(people) - 1

    # 제일 가벼운 - 무거운 사람 묶는 게 Best
    while start < end:
        if people[start] + people[end] <= limit:
            start += 1
            answer += 1
        end -= 1
            
    return len(people) - answer
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
