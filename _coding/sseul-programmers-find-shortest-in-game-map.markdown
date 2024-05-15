---
layout: post
title:  "그래프탐색 BFS | 프로그래머스 고득점kit 게임 맵 최단거리 | Python"
description: <strong>💚 Level 2</strong><font color='gray'><br/>- 난이도 ★☆☆☆<br/>- 그래프탐색 BFS</font>
date:   2024-05-15 15:30:09 +0900
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

# 프로그래머스 고득점kit 게임 맵 최단거리 | Python

<p align='center'>
<img src='/assets/img/coding/prog_shortest_game_map_1.png' width='100%'>
<img src='/assets/img/coding/prog_shortest_game_map_2.png' width='100%'>
<figcaption><a href='https://school.programmers.co.kr/learn/courses/30/lessons/1844'>📌 프로그래머스 고득점kit 게임 맵 최단거리 문제 바로가기</a></figcaption>
</p>

<br/>

## 🔎 문제 설명

<strong>💚 Level 2</strong>
```
- 난이도 ★☆☆☆
- 그래프탐색 BFS
```

> BFS를 구현할 수만 있다면 쉽게 풀 수 있는 문제!

최단거리를 구하는 일반적인 방법 중 하나로 출발지에서 목적지까지 <code>1</code> 를 더해가며 마지막 목적지의 거리를 구하는 방법이 있다. 이 문제는 그렇게 풀었으며, 목적지까지 가지 못하는 경우를 고려하면서 코드를 작성했다. 

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
from collections import deque
def solution(maps):
    answer = 0
    n = len(maps)
    m = len(maps[0])
    
    def bfs():
        dx = [0,0,1,-1]
        dy = [1,-1,0,0]
        queue = deque([(0,0)])
        while queue:
            x, y = queue.popleft()
            if (x,y) == (n-1,m-1):
                return maps[n-1][m-1]
            for i in range(4):
                nx = x+dx[i]
                ny = y+dy[i]
                if 0<=nx<n and 0<=ny<m:
                    if maps[nx][ny] == 1:
                        maps[nx][ny] = maps[x][y]+1
                        queue.append((nx,ny))
        # 목적지까지 가지 못한 경우
        return -1
    answer = bfs()
    return answer
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
