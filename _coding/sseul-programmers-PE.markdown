---
layout: post
title:  "그리디 | 프로그래머스 고득점kit 체육복 | Python"
description: <strong>💚 Level 1</strong><font color='gray'><br/>- 난이도 ★☆☆☆<br/>- 그리디</font>
date:   2024-06-25 14:30:09 +0900
categories: coding
tags: [그리디]
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

# 프로그래머스 고득점kit 체육복 | Python

<p align='center'>
<img src='/assets/img/coding/prog_pe.png' width='100%'>
<figcaption><a href='https://school.programmers.co.kr/learn/courses/30/lessons/42862'>📌 프로그래머스 고득점kit 체육복 문제 바로가기</a></figcaption>
</p>

<br/>

## 🔎 문제 설명

<strong>💚 Level 1</strong>

<pre class="callout">
- 난이도 ★☆☆☆
- 그리디
</pre>


<code>lost</code> 배열에 대해 for문을 돌리면서 불가능한 경우를 <code>impossible</code> 로 세어줬다. 그리고 여분 체육복을 빌려준 경우는 <code>reserve</code> 배열에서 제거해주는 식으로 반복문을 돌면 쉽게 풀린다.

정답은 모든 경우 <code>n - impossible</code> 가 된다.



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
def solution(n, lost, reserve):
    impossible = 0
    # 여분 체육복이 있어도 도난당할 수 있음
    lost_set = list(set(lost) - set(reserve))
    reserve_set = list(set(reserve) - set(lost))
    
    for now in lost_set:
        if now - 1 in reserve_set:
            reserve_set.pop(reserve_set.index(now-1))
            continue
        if now + 1 in reserve_set:
            reserve_set.pop(reserve_set.index(now+1))
            continue
        # 빌릴 수 없는 경우 count
        impossible += 1
                
    return n - impossible
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
