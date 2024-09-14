---
layout: post
title:  "그래프탐색 BFS | SW Expert Academy 1249번 보급로 | Python"
description: <strong>💙 D4</strong><font color='gray'><br/>- 난이도 ★★☆☆<br/>- 그래프탐색 BFS</font>
date:   2024-05-01 16:30:09 +0900
categories: coding
tags: [그래프탐색]
---
<br/>

<script async src="https://pageaD4.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7280083909521856"
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

# SW Expert Academy 1249번 보급로 | Python

<p align='center'>
<img src='/assets/img/coding/swe_1249_1.png' width='100%'>
<img src='/assets/img/coding/swe_1249_2.png' width='100%'>
<img src='/assets/img/coding/swe_1249_3.png' width='100%'>
<img src='/assets/img/coding/swe_1249_4.png' width='100%'>
<figcaption><a href='https://swexpertacademy.com/main/code/problem/problemDetail.do?problemLevel=3&problemLevel=4&contestProbId=AV15QRX6APsCFAYD&categoryId=AV15QRX6APsCFAYD&categoryType=CODE&problemTitle=&orderBy=INQUERY_COUNT&selectCodeLang=ALL&select-1=4&pageSize=10&pageIndex=1'>📌 SW Expert Academy 1249.[S/W 문제해결 응용] 4일차 - 보급로 문제 바로가기</a></figcaption>
</p>



## 🔎 문제 설명

<strong>💙 D4</strong>

<pre class="callout">
- 난이도 ★★☆☆
- 그래프탐색 BFS
</pre>


보자마자 그래프탐색이 떠올랐다. 문제는 길을 메우는 데 걸리는 시간을 어떻게 처리해줄 것인가로, <code>(nx, ny)까지 기존에 걸렸던 시간</code>과 <code>이전 위치 (x,y)에서 (nx,ny)까지의 거리</code>를 비교해서 더 작은 값으로 대체해주었다. 



<br/>

<script async src="https://pageaD4.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7280083909521856"
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
T = int(input())
for t in range(T):
    N = int(input())
    maps = [list(map(int, list(input()))) for _ in range(N)]

    def bfs(map_size):
        queue = deque([(0,0)])
        visited = [[float('inf') for _ in range(N)] for _ in range(N)]
        visited[0][0] = 0

        dx = [0,0,1,-1]
        dy = [1,-1,0,0]

        while queue:
            x, y = queue.popleft()
            for i in range(4):
                nx = x+dx[i]
                ny = y+dy[i]
                if 0<=nx<N and 0<=ny<N:
                    tmp = visited[x][y] + maps[nx][ny]
                    if tmp < visited[nx][ny]:
                        queue.append((nx,ny))
                        visited[nx][ny] = tmp
        return visited[map_size-1][map_size-1]

    print(f'#{t+1}',bfs(N))
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
