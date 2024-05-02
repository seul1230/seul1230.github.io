---
layout: post
title:  "그래프탐색 DFS | BOJ 백준 9663번 N-Queen | SW Expert Academy 2806번 N-Queen | Python"
description: <strong>💛 Gold4 / D3</strong><font color='gray'><br/>- 난이도 ★★★☆<br/>- 그래프탐색 DFS</font>
date:   2024-05-02 16:30:09 +0900
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

# BOJ 백준 9663번 N-Queen | SW Expert Academy 2806번 N-Queen | Python

<p align='center'>
<img src='/assets/img/coding/swexpert_2806_1.png' width='100%'>
<img src='/assets/img/coding/swexpert_2806_2.png' width='100%'>
<figcaption><a href='https://www.acmicpc.net/problem/9663'>📌 백준 9663번 N-Queen 문제 바로가기</a><br/><a href='https://swexpertacademy.com/main/code/problem/problemDetail.do?problemLevel=1&problemLevel=2&problemLevel=3&contestProbId=AV5PzOCKAigDFAUq&categoryId=AV5PzOCKAigDFAUq&categoryType=CODE&problemTitle=&orderBy=FIRST_REG_DATETIME&selectCodeLang=ALL&select-1=3&pageSize=10&pageIndex=1'>📌 SW Expert Academy 2806번 문제 바로가기</a></figcaption>
</p>



## 🔎 문제 설명

<strong>💛 백준 Gold4 / SW Expert D2</strong>
```
- 난이도 ★★★☆
- 그래프탐색 DFS
```

백준 그리고 SW Expert Academy 사이트에 거의 완전히 같은 문제라 같이 가져왔다. 

보드가 나와있어서 단순히 2차원 배열로 해결할 수 있지만, 상하좌우와 대각선에서 겹치지 않는지만 확인하면 된다. 그래서 단순히 1차원 배열 인덱스를 열 번호, 배열값을 행 번호로 저장하면 1차원으로도 충분히 구현이 가능하다. 



<br/>

### 📌 문제 풀이 큰 틀

- <code>attack</code> 함수를 통해 상하좌우, 대각선에서 겹치는지 확인
- 겹치지 않는다면 DFS로 계속 탐색 진행
- 1차원 배열 인덱스를 열 번호, 배열값을 행 번호로 저장


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

SW Expert Academy 문제 기준 코드이다. 아마 백준에서는 T에 관한 부분만 제거를 해주면 쉽게 통과할 수 있을 것이다. 

```python
T = int(input())

def attack(node):
    for i in range(node):
        if board[i] == board[node] or abs(board[i]-board[node]) == abs(i-node):
            return True
    return False

def dfs(start):
    global cnt
    if start == N:
        cnt += 1
        return
    for i in range(N):
        board[start] = i
        if not attack(start):
            dfs(start+1)

for t in range(T):
    cnt = 0
    N = int(input())
    board = [-1 for _ in range(N)]
    dfs(0)
    
    print(f'#{t+1} {cnt}')
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
