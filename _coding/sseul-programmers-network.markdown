---
layout: post
title:  "그래프탐색 BFS | 프로그래머스 고득점kit 네트워크 | Python"
description: <strong>💚 Level 3</strong><font color='gray'><br/>- 난이도 ★☆☆☆<br/>- 그래프탐색 BFS</font>
date:   2024-06-05 17:30:09 +0900
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

# 프로그래머스 고득점kit 네트워크 | Python

<p align='center'>
<img src='/assets/img/coding/prog_network_1.png' width='100%'>
<figcaption><a href='https://school.programmers.co.kr/learn/courses/30/lessons/43162'>📌 프로그래머스 고득점kit 네트워크 문제 바로가기</a></figcaption><br/>

{% capture carousel_images %}
/assets/img/coding/prog_network_2.png
/assets/img/coding/prog_network_3.png
{% endcapture %}
{% include elements/carousel.html %}
<figcaption><a href='https://school.programmers.co.kr/learn/courses/30/lessons/43162'>📌 입출력 예 설명</a><br/><font color='lightgray'>그림 오른쪽을 누르면 2번째 예시도 볼 수 있다!</font></figcaption>
</p>

<br/>

## 🔎 문제 설명

<strong>💚 Level 3</strong>

<pre class="callout">
- 난이도 ★☆☆☆
- 그래프탐색 BFS
</pre>


생각보다 간단하고 금방 풀렸던 문제. <br/>
문제를 꼬아놓지 않아서 그래프탐색 문제 유형만 숙지하고 있다면 누구나 바로 풀 수 있다. 

방문여부를 기록하면서 그래프 탐색을 수행하고, 방문하지 않은 노드를 만날 때마다 그래프 탐색을 돌려주는 방식으로 진행하였다. 더 자세한 코드는 아래에 남겨놓았다.

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
def solution(n, computers):
    answer = 0
    visited = [0 for _ in range(n)]
    
    def bfs(start):
        queue = deque([start])
        visited[start] = 1
        while queue:
            now = queue.popleft()
            for i in range(n):
                if computers[now][i] and not visited[i]:
                    queue.append(i)
                    visited[i] = 1
    
    for i in range(n):
        if not visited[i]:
            bfs(i)
            answer += 1
    
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
