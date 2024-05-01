---
layout: post
title:  "그래프탐색 BFS | BOJ 백준 14940번 쉬운 최단거리 | Python"
description: <strong>🩶 Silver 1</strong><font color='gray'><br/>- 난이도 ★☆☆☆<br/>- 그래프탐색 (BFS)</font>
date:   2024-05-01 14:30:09 +0900
categories: coding
tags: [그래프탐색]
---
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

# BOJ 백준 14940번 쉬운 최단거리 | Python

<p align='center'>
<img src='/assets/img/coding/boj_14940.png' width='100%'>
<figcaption><a href='https://www.acmicpc.net/problem/14940'>📌 백준 14940번 문제 바로가기</a></figcaption>
</p>



## 🔎 문제 설명

<strong>🩶 실버 1</strong>
```
- 난이도 ★☆☆☆
- 그래프탐색
```

최단거리를 구하는 방법엔 다양한 알고리즘이 있지만, 역시 난 가장 익숙한 BFS로 풀었다. 

이 문제는 최단거리 찾는 유형 중 기본 유형에 속한다. 방문여부를 저장하는 <code>visited</code> 에 거리를 함께 저장했다. [백준 특정 거리의 도시 찾기](https://seul1230.github.io/coding/sseul-boj-18352-shortest-path-cities-py) 문제와 상당히 유사하다. 이전에 접했던 문제라면 역시 어렵지 않다. 



<br/>

### 📌 문제 풀이 큰 틀

- <code>2</code> 찾아서 시작점 위치 찾기
- BFS로 가장 가까운 노드부터 최단거리를 계산
- <code>visited</code> 에 거리를 1씩 더해 '첫 도시 ~ 현재 도시'의 거리를 계산


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

n, m = map(int, input().split())
goal = (-1,-1)
graph = []
for i in range(n):
    tmp = list(map(int, input().split()))
    graph.append(tmp)
    if 2 in tmp:
        goal = (i, tmp.index(2))

# 0은 갈 수 없는 땅, 1은 갈 수 있는 땅, 2는 목표지점
def bfs(goal):
    visited = [[-1 for _ in range(m)] for _ in range(n)]
    dx = [0,0,1,-1]
    dy = [1,-1,0,0]
    
    queue = deque([goal])
    x, y = goal
    visited[x][y] = 0
    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            if 0<=nx<n and 0<=ny<m:
                if not graph[nx][ny]:
                    # graph 값이 0이면 visited 값을 0으로 바꿔줌
                    visited[nx][ny] = 0 
                elif graph[nx][ny] == 1 and visited[nx][ny] == -1:
                    visited[nx][ny] = visited[x][y] + 1
                    queue.append((nx,ny))
    return visited

visited = bfs(goal)

# 첫 번째 출력 시도 -> 틀림
# for i in range(n):
#     print(*visited[i])

# 두 번째 출력 시도 -> 맞음
for i in range(n):
    for j in range(m):
        if graph[i][j] == 0:
            print(0, end = ' ')
        else:
            print(visited[i][j], end = ' ')
    print()
```

<br/>


## 🤷‍♀️ 예외 케이스?
사실 첫 번째 출력 시도로 했을 때 예외가 생기는 케이스를 아직 찾진 못했다. 혹시 이 글을 접하는 코딩 고수님이 있다면 [질문 게시판/(예외케이스) 마지막 출력문을 살짝 바꾸면 ...](https://www.acmicpc.net/board/view/142057) 에 답변 부탁드립니다 🙇‍♀️

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
