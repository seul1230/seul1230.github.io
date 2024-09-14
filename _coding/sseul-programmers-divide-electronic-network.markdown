---
layout: post
title:  "그래프탐색 DFS | 프로그래머스 고득점kit 전력망을 둘로 나누기 | Python"
description: <strong>💚 Level 2</strong><font color='gray'><br/>- 난이도 ★★☆☆<br/>- 그래프탐색 DFS<br/>- Union-Find</font>
date:   2024-05-14 13:30:09 +0900
categories: coding
tags: [그래프탐색, 유니온파인드 Union-Find]
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

# 프로그래머스 고득점kit 전력망을 둘로 나누기 | Python

<p align='center'>
<img src='/assets/img/coding/prog_divide_elec_network.png' width='100%'>
<figcaption><a href='https://school.programmers.co.kr/learn/courses/30/lessons/43165?language=python3'>📌 프로그래머스 고득점kit 전력망을 둘로 나누기 문제 바로가기</a></figcaption>
</p>

<br/>

## 🔎 문제 설명

<strong>💚 Level 2</strong>

<pre class="callout">
- 난이도 ★★☆☆
- 그래프탐색 DFS
- Union-Find
</pre>


두 가지 접근으로 풀이할 수 있다. 각각의 풀이법은 아래에 설명과 함께 올려놓았다!


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

### 1️⃣ DFS를 이용한 코드

끊는 전선 1개를 어떻게 처리해줄지만 안다면 기본적인 BFS로 간단하게 풀리는 문제이다. 나는 그래프 <code>tree</code> 에서 해당 전선을 뺐다가 다시 넣어주는 방식으로 진행하였다.

<font color='lightgray'>그리고 사실 <code>answer</code>는 최댓값이 <code>n</code>이므로 <code>n</code>으로 초기화해줘도 된다.</font>

<br/>

```python
from collections import deque
def solution(n, wires):
    tree = [[] for _ in range(n+1)]
    for wire in wires:
        x, y = wire
        tree[x].append(y)
        tree[y].append(x)
    
    def bfs(now):
        visited = [0] * (n+1)
        queue = deque([now])
        visited[now] = 1
        
        cnt = 1
        while queue:
            x = queue.popleft()
            for node in tree[x]:
                if not visited[node]:
                    queue.append(node)
                    visited[node] = 1
                    cnt += 1
        return cnt
    
    answer = 1e9
    for wire in wires:
        a, b = wire
        tree[a].remove(b)
        tree[b].remove(a)
        answer = min(answer,abs(bfs(a)-bfs(b)))
        tree[a].append(b)
        tree[b].append(a)

    return answer
```

<br/>

### 2️⃣ Union Find를 이용한 코드

끊는 전선 1개를 정했다면 각각의 트리의 루트 노드가 2개 나오게 된다. 이 방법을 이용해서 방법을 찾는다.<br/>

이번 문제를 통해 Union Find로 부모 노드 찾는 방법을 알았다. 더 연습해서 자유롭게 사용할 수 있도록 해야겠다.

```python
import copy
def solution(n, wires):
    parent = [x for x in range(n+1)]

    def find_parent(parent, x):
        if parent[x]!=x:
            return find_parent(parent, parent[x])
        return parent[x]

    def union_parent(parent, a, b):
        a = find_parent(parent, a)
        b = find_parent(parent, b)
        if a < b:
            parent[b] = a
        else:
            parent[a] = b
    
    answer = 1e9
    for i in range(len(wires)):
        parent_copy = copy.deepcopy(parent)
        for idx, (a, b) in enumerate(wires):
            if i==idx: 
                continue
            union_parent(parent_copy, a, b)
        x, y = wires[i]

        for a, b in wires:
            parent_copy[a] = find_parent(parent_copy, a)
            parent_copy[b] = find_parent(parent_copy, b)
        answer = min(abs(parent_copy.count(parent_copy[x])-parent_copy.count(parent_copy[y])), answer)
    
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
