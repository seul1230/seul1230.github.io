---
layout: post
title:  "완전탐색 | BOJ 백준 20922번 겹치는 건 싫어 | Python"
description: <strong>🩶 Silver 1</strong><font color='gray'><br/>- 난이도 ★☆☆☆<br/>- 투포인터</font>
date:   2024-04-02 14:30:09 +0900
categories: coding
tags: [투포인터]
---
# BOJ 백준 20922번 겹치는 건 싫어

<p align='center'>
<img src='/assets/img/coding/boj_20922.png' width='100%'>
<figcaption><a href='https://www.acmicpc.net/problem/20922'>📌 백준 20922번 문제 바로가기</a></figcaption>
</p>



## 문제 설명

<strong>🩶 실버 1</strong>
```
- 난이도 ★☆☆☆
- 투포인터
```

처음엔 count 메소드나 Counter 라이브러리를 가져와서 중복되는 수의 개수를 세어줄까 했지만, <code>시간 초과</code> 의 문제가 발생한다.<br/>
그래서 연속 구간의 시작과 끝을 움직이면서, 끝쪽에 있는 수의 개수를 조절해가면서 풀도록 설계하였다. 실버 1이었지만 투포인터를 생각해낸다면 체감 상으로는 훨씬 쉬웠던 문제였다. 코드는 다음과 같다.



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


## 내 코드

```python
import sys
input = sys.stdin.readline

from collections import defaultdict

N, K = map(int, input().split())
arr = list(map(int, input().split()))
cnt_dict = defaultdict(int)

end = 0
max_len = 0
cnt = 0

for start in range(N):
    while end < N:
        now = arr[end]
        if cnt_dict[now] + 1 > K: 
            break
        cnt_dict[now] += 1
        end += 1
        max_len = max(max_len, end - start)
    cnt_dict[arr[start]] -= 1

print(max_len)
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
