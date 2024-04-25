---
layout: post
title:  "그래프탐색 BFS | BOJ 백준 18352번 특정 거리의 도시 찾기 | Python"
description: <strong>🩶 실버 2</strong><font color='gray'><br/>- 난이도 ★☆☆☆<br/>- 그래프탐색 (BFS)</font>
date:   2024-04-25 18:30:09 +0900
categories: coding
tags: [그래프탐색, 실버2]
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

# BOJ 백준 18352번 특정 거리의 도시 찾기 | Python

<p align='center'>
<img src='/assets/img/coding/boj_18352_1.png' width='100%'>
<img src='/assets/img/coding/boj_18352_2.png' width='100%'>
<figcaption><a href='https://www.acmicpc.net/problem/18352'>📌 백준 18352번 문제 바로가기</a></figcaption>
</p>



## 🔎 문제 설명

<strong>🩶 실버 2</strong>
```
- 난이도 ★☆☆☆
- 그래프탐색
```

최단거리를 구하는 방법엔 다양한 알고리즘이 있지만, 난 가장 익숙한 BFS로 풀었다. 

이 문제는 최단거리 찾는 유형 중 기본 유형에 속한다. 방문여부를 저장하는 <code>visited</code> 에 거리를 함께 저장했다.



<br/>

📌 문제 풀이 큰 틀은 다음과 같다.

- BFS로 가장 가까운 노드부터 최단거리를 계산
- <code>visited</code> 에 거리를 1씩 더해 첫 도시 - 도시의 거리를 계산


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
# 최단 거리가 정확히 K인 모든 도시들의 번호 출력

import sys
from collections import deque
input = sys.stdin.readline

# N개의 도시, M개의 도로, 출발 도시 X
N, M, K, X = map(int, input().split())
graph = [[] for _ in range(N+1)]
for _ in range(M):
    a, b = map(int, input().split())
    graph[a].append(b)

queue = deque([X])
visited = [-1 for _ in range(N+1)]
visited[X] = 0

# BFS
def bfs():
    while queue:
        now = queue.popleft()
        for node in graph[now]:
            if visited[node] == -1:
                visited[node] = visited[now] + 1
                queue.append(node)
bfs()
if visited.count(K) == 0:
    print(-1)
else:
    for i in range(N+1):
        if visited[i] == K:
            print(i)
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
