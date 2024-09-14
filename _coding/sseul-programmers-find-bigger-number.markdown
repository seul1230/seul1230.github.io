---
layout: post
title:  "그리디 | 프로그래머스 고득점kit 큰 수 만들기 | Python"
description: <strong>💚 Level 2</strong><font color='gray'><br/>- 난이도 ★★☆☆<br/>- 그리디 (LIFO)</font>
date:   2024-05-21 16:30:09 +0900
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

# 프로그래머스 고득점kit 큰 수 만들기 | Python

<p align='center'>
<img src='/assets/img/coding/prog_best_album.png' width='100%'>
<figcaption><a href='https://school.programmers.co.kr/learn/courses/30/lessons/42579'>📌 프로그래머스 고득점kit '큰 수 만들기' 문제 바로가기</a></figcaption>
</p>

<br/>

## 🔎 문제 설명

<strong>💚 Level 2</strong>

<pre class="callout">
- 난이도 ★★☆☆
- 그리디 (LIFO)
</pre>


LIFO 방식을 이용하여 코드를 작성하였다. 앞에서부터 수를 스택에 넣어주고 이전에 마지막으로 넣은 값 <code>stack[-1]</code> 보다 큰 값을 만나면 <code>stack[-1]</code> 를 빼준다.

```python
stack.pop()
```

이걸 <code>k</code> 번 반복해주면 된다. 밑에 코드를 첨부해놓았다.

<br/>


### 그리디 알고리즘이란

> 매 선택에서 지금 이 순간이 당장 최적인 답을 선택하여 적합한 결과를 도출하자

그 순간에 대해서는 최적이지만 종합적으로 봤을 때는 최적이라는 보장이 없다는 단점이 있다. 그래서 그리디 알고리즘은 <font color='red'>부분의 최적해들의 집합이 곧 전체 문제의 해답이 될 때</font> 사용할 수 있다. 즉, 이번 문제는 그리디로 푸는 것이 적합하다!


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
def solution(number, k):
    stack = []
    out_len = len(number) - k
    for num in number:
        while stack and k > 0 and stack[-1] < num:
            stack.pop()
            k -= 1
        stack.append(num)
    return ''.join(stack[:out_len])
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
