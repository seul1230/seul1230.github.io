---
layout: post
title:  "그래프탐색 BFS | BOJ 백준 2667번 단지번호붙이기 | Python"
description: <strong>🩶 Silver 1</strong><font color='gray'><br/>- 난이도 ★☆☆☆<br/>- 그래프탐색 BFS</font>
date:   2024-04-25 16:30:09 +0900
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

# BOJ 백준 2667번 단지번호붙이기 | Python

<p align='center'>
<img src='/assets/img/coding/boj_2667.png' width='100%'>
<figcaption><a href='https://www.acmicpc.net/problem/2667'>📌 백준 2667번 문제 바로가기</a></figcaption>
</p>



## 🔎 문제 설명

<strong>🩶 실버 1</strong>
```
- 난이도 ★☆☆☆
- 그래프탐색 BFS
```


기본적인 그래프탐색 문제로, 풀이는 어렵지 않다. 마지막 문제 조건을 빼먹지 말자!

> 각 단지에 속하는 집의 수를 오름차순으로 정렬하여 출력



<br/><br/>


### 📌 문제 풀이 큰 틀

- 집을 방문하면 노드 값 <code>0</code> 으로 업데이트
- 단지 번호 수를 리스트로 저장


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
import sys
from collections import deque
input = sys.stdin.readline

N = int(input())
town = [list(map(int, list(input().strip()))) for _ in range(N)]

def bfs(x, y):
    queue = deque([(x,y)])
    town[x][y] = 0
    dx = [0,0,1,-1]
    dy = [1,-1,0,0]
    cnt = 1
    
    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx = x+dx[i]
            ny = y+dy[i]
            if 0<= nx <N and 0<= ny <N:
                if town[nx][ny]:
                    town[nx][ny] = 0
                    queue.append((nx,ny))
                    cnt += 1
    return cnt

ans_cnt = []
for i in range(N):
    for j in range(N):
        if town[i][j]:
            ans_cnt.append(bfs(i, j))
print(len(ans_cnt))
for ans in sorted(ans_cnt):
    print(ans)
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
