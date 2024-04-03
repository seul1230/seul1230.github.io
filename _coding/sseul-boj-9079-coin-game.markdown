---
layout: post
title:  "완전탐색 | BOJ 백준 9079번 동전게임 | Python"
description: <strong>🩶 Silver 2</strong><font color='gray'><br/>- 난이도 ★★☆☆<br/>- 완전탐색(BFS) & 비트마스킹</font>
date:   2024-03-26 15:30:09 +0900
categories: coding
tags: [완전탐색, 비트마스킹, 실버2]
---
# BOJ 백준 9079번 동전게임

<p align='center'>
<img src='/assets/img/coding/boj_9079.png' width='100%'>
<figcaption><a href='https://www.acmicpc.net/problem/9079'>📌 백준 9079번 문제 바로가기</a></figcaption>
</p>

## 문제 설명

<strong>🩶 실버 2</strong>
```
- 난이도 ★★☆☆
- 완전탐색 & 비트마스킹
```


C언어 수업에서 동전 뒤집기 문제를 했던 기억이 나서 반가웠지만, 예상 외로 생각해야할 것이 꽤나 많았던 문제. 


뒤집을 수 있는 모든 경우의 수를 <code>how</code> 에 넣어놓고 하나씩 돌려주었다. 
0과 1로만 구성된 9자리의 수가 나오면, 이를 2진수라고 생각하고 10진수로 다시 바꿔주어서 해당 index의 방문 여부를 고려해주어 불필요한 계산을 줄였다. 

> ✅ 10진수가 <code>0</code> 이거나 <code>511</code> 이면 반복문 종료!

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
from collections import deque
input = sys.stdin.readline
T = int(input())

def game(coins: str):
    visited = [0 for _ in range(512)]
    how = [(0,1,2),(3,4,5),(6,7,8),
           (0,3,6),(1,4,7),(2,5,8),
           (0,4,8),(2,4,6)]
    # 2진수 -> 10진수
    queue = deque([(int(coins, 2), 0)])
    visited[int(coins, 2)]=1

    while queue:
        coin, cnt = queue.popleft()
        if coin == 0 or coin == 511:
            return cnt
        for h in how:
            new = flip(list(bin(coin)[2:].zfill(9)), h)
            idx = int(new, 2)
            if not visited[idx]:
                visited[idx] = 1
                queue.append((idx, cnt + 1))
    return -1

def flip(coin, how):
    for h in how:
        coin[h] = '1' if coin[h] == '0' else '0'
    return ''.join(coin)

for t in range(T):
    tmp = []
    for i in range(3):
        c = input().split()
        tmp.append(''.join(['1' if ht=='H' else '0' for ht in c]))

    print(game(''.join(tmp)))
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
