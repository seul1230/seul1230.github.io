---
layout: post
title:  "그래프탐색 BFS | 프로그래머스 고득점kit [PCCP 기출문제] 2번 석유 시추 | Python"
description: <strong>💚 Level 2</strong><font color='gray'><br/>- 난이도 ★★☆☆<br/>- 그래프탐색 BFS</font>
date:   2024-07-16 17:30:09 +0900
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

# 프로그래머스 고득점kit [PCCP 기출문제] 2번 석유 시추 | Python

<p align='center'>
<img src='/assets/img/coding/prog_oil_drill.png' width='100%'>
<figcaption><a href='https://school.programmers.co.kr/learn/courses/30/lessons/250136'>📌 프로그래머스 고득점kit [PCCP 기출문제] 2번 석유 시추 문제 바로가기</a></figcaption>
</p>

<br/>

## 🔎 문제 설명

<strong>💚 Level 2</strong>

<pre class="callout">
- 난이도 ★★☆☆
- 그래프탐색 BFS
</pre>


최근 동해에 140억 배럴에 달하는 석유가 묻혀 있을 가능성이 높다는 뉴스를 보았다. 프로그래머스에서 무슨 문제를 풀까 둘러보다가 마침 <code>석유 시추</code> 문제가 보여 풀어보았다.

해당 문제는 기본적인 그래프탐색에 조건을 하나 더 넣은 문제다. 나는 그래프탐색으로 먼저 석유량을 측정하고 (<code>석유량 측정</code>), 시추관을 움직이면서 뽑을 수 있는 석유량을 더해주는 (<code>시추관 뚫기</code>) 방식으로 문제를 해결하였다. 코드는 밑에 첨부해놓았다.

사실 더 고민한다면 여기서 더 나은 풀이 방식으로 해결할 수 있을 것 같다. 조금 더 생각해보고 다른 풀이도 추가하러 와야지!



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
from collections import deque, defaultdict

visited = [[0 for _ in range(500)] for _ in range(500)]

def bfs(x,y,init,land):
    dx = [0,0,1,-1]
    dy = [1,-1,0,0]
    cnt = 1
    n, m = len(land), len(land[0])
    queue = deque([(x,y)])
    visited[x][y] = init
    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx, ny = x+dx[i], y+dy[i]
            if 0<=nx<n and 0<=ny<m and land[nx][ny]:
                if not visited[nx][ny]:
                    queue.append((nx,ny))
                    visited[nx][ny] = init
                    cnt += 1
    return cnt

def solution(land):
    answer = 0
    n,m = len(land), len(land[0])
    init = 1
    oils = defaultdict(int)

    # 석유량 측정
    for i in range(n):
        for j in range(m):
            if land[i][j] and not visited[i][j]:
                oils[init] = bfs(i,j,init,land)
                init += 1 # 석유존 숫자로 구분
    # 시추관 뚫기
    for i in range(m):
        total = 0
        selected = []
        for j in range(n):
            oil_num = visited[j][i]
            if land[j][i] and oil_num not in selected:
                total += oils[oil_num]
                selected.append(oil_num)
        answer = max(answer, total)
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
