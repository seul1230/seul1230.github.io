---
layout: post
title:  "이분탐색 | BOJ 백준 2630번 색종이 만들기 | Python"
description: <strong>🩶 실버 2</strong><font color='gray'><br/>- 난이도 ★☆☆☆<br/>- 분할탐색 (재귀)</font>
date:   2024-04-25 14:30:09 +0900
categories: coding
tags: [분할탐색, 실버2]
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

# BOJ 백준 2630번 색종이 만들기 | Python

<p align='center'>
<img src='/assets/img/coding/boj_3079.png' width='100%'>
<figcaption><a href='https://www.acmicpc.net/problem/3079'>📌 백준 3079번 문제 바로가기</a></figcaption>
</p>



## 문제 설명

<strong>🩶 실버 2</strong>
```
- 난이도 ★☆☆☆
- 분할정복
```

분할정복은 큰 문제를 작은 문제로 분할하여 해결하는 방법이다. 크기가 커지지만 않으면 굉장히 효율적인 방법으로, 시간복잡도는 O(NlogN)을 가진다. 그러나 재귀를 사용하기 때문에 크기가 커지면 메모리가 제한적이라는 단점이 있다.

이 문제는 많이 접하지 않았다면 풀이에 시간을 꽤나 소요했을 것이다. 



<br/>

📌 문제 풀이 큰 틀은 다음과 같다.

- 다른 색을 발견하면 색종이를 4개로 자르기
- 같은 색으로만 된 종이가 나온다면, 개수 추가


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

N = int(input())
papers = []
for _ in range(N):
    papers.append(list(map(int, input().split())))
    
white, blue = 0, 0

def solution(x, y, n):
    global white, blue
    color = papers[x][y]
    for i in range(x, x+n):
        for j in range(y, y+n):
            if color != papers[i][j]:
                # 잘라진 종이가 모두 같은 색이 아니라면 네 개로 자르기
                solution(x, y, n//2)
                solution(x + n//2, y, n//2)
                solution(x + n//2, y + n//2, n//2)
                solution(x, y + n//2, n//2)
                return
    # 모두 같은 색이면 더해주기
    if color == 0:
        white += 1
    else:
        blue += 1
solution(0, 0, N)     
print(white)
print(blue)
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
