---
layout: post
title:  "그래프탐색 BFS | BOJ 백준 1325번 효율적인 해킹 | Python"
description: <strong>🩶 Silver 1</strong><font color='gray'><br/>- 난이도 ★★☆☆<br/>- 그래프탐색 BFS</font>
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

# BOJ 백준 1325번 효율적인 해킹 | Python

<p align='center'>
<img src='/assets/img/coding/boj_1325.png' width='100%'>
<figcaption><a href='https://www.acmicpc.net/problem/1325'>📌 백준 1325번 문제 바로가기</a></figcaption>
</p>



## 🔎 문제 설명

<strong>🩶 실버 1</strong>
```
- 난이도 ★★☆☆
- 그래프탐색 BFS
```


기본적인 그래프탐색을 구현만 할 수 있다면 쉽게 풀 수 있는 문제다! 그러나 시간초과가 항상 문제가 되는...

나는 BFS/DFS로 구현을 해서 해결했으나, Python3로는 계속 시간초과가 떠서 Pypy3로 제출해서 성공했다. 다른 방법이 있나 더 찾아봐야겠다.



<br/><br/>


📌 문제 풀이 큰 틀은 다음과 같다.

- A가 B를 신뢰한다 = B를 해킹하면 A도 해킹이 된다!
- 그래프 탐색으로 해결


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

N, M = map(int, input().split())
computers = [[] for _ in range(N+1)]
for _ in range(M):
    a, b = map(int, input().split())
    computers[b].append(a)
    
answer = 0
ans_lst = []

def bfs(node):
    visited = [0 for _ in range(N+1)]
    queue = deque([node])
    visited[node] = 1
    cnt = 1

    while queue:
        now = queue.popleft()
        for n in computers[now]:
            if not visited[n]:
                visited[n] = 1
                queue.append(n)
                cnt += 1
    return cnt

for i in range(1, N+1):
    if len(computers[i]) > 0:
        tmp = bfs(i)
        if answer < tmp:
            answer = tmp
            ans_lst=[i]
        elif answer == tmp:
            ans_lst.append(i)

print(*ans_lst)
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
