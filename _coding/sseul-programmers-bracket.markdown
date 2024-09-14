---
layout: post
title:  "스택&큐 | 프로그래머스 고득점kit 올바른 괄호 | Python"
description: <strong>💚 Level 2</strong><font color='gray'><br/>- 난이도 ★☆☆☆<br/>- 스택&큐</font>
date:   2024-06-07 16:30:09 +0900
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

# 프로그래머스 고득점kit 올바른 괄호 | Python

<p align='center'>
<img src='/assets/img/coding/prog_bracket.png' width='100%'>
<figcaption><a href='https://school.programmers.co.kr/learn/courses/30/lessons/12909'>📌 프로그래머스 고득점kit 올바른 괄호 문제 바로가기</a></figcaption>
</p>

<br/>

## 🔎 문제 설명

<strong>💚 Level 2</strong>

<pre class="callout">
- 난이도 ★☆☆☆
- 스택&큐
</pre>


괄호 찾기 문제는 대표적인 <code>스택</code> 문제라고 할 수 있다. 실제로 아주 쉬운 문제다 !



> 스택에는 <code>(</code> 만 넣어주고, 짝이 맞는 <code>)</code>를 만나면 스택에서 꺼낸다.



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
def solution(s):
    answer = []
    for x in s:
        if x == '(':
            answer.append(x)
        elif len(answer)==0:  # ')'가 들어왔는데 짝이 안 맞는 경우
            return False
        else:                 # 짝이 맞는 경우
            answer.pop()
    
    return True if len(answer) == 0 else False
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
