---
layout: post
title:  "누적합 & 구현 | SW Expert Academy 2001번 파리 퇴치 | Python"
description: <strong>💙 D2</strong><font color='gray'><br/>- 난이도 ★★☆☆<br/>- 누적합 / 구현</font>
date:   2024-05-01 16:30:09 +0900
categories: coding
tags: [누적합, 구현]
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

# SW Expert Academy 2001번 파리 퇴치 | Python

<p align='center'>
<img src='/assets/img/coding/swexpert_2001_1.png' width='100%'>
<img src='/assets/img/coding/swexpert_2001_2.png' width='100%'>
<img src='/assets/img/coding/swexpert_2001_3.png' width='100%'>
<figcaption><a href='https://swexpertacademy.com/main/code/problem/problemDetail.do?problemLevel=1&problemLevel=2&problemLevel=3&contestProbId=AV5PzOCKAigDFAUq&categoryId=AV5PzOCKAigDFAUq&categoryType=CODE&problemTitle=&orderBy=FIRST_REG_DATETIME&selectCodeLang=ALL&select-1=3&pageSize=10&pageIndex=1'>📌 SW Expert Academy 2001번 문제 바로가기</a></figcaption>
</p>



## 🔎 문제 설명

<strong>💙 D2</strong>

<pre class="callout">
- 난이도 ★★☆☆
- 누적합 / 구현
</pre>


<code>N</code>과 <code>M</code>의 범위가 그렇게 크지 않아서 4중 for문으로도 충분히 풀 수 있는 문제다. 조금 더 커지면 누적합으로 풀어야할 듯하다. 그래서 통과한 풀이도 1) for문 구현, 2) 누적합 이렇게 2개다. 2차원 배열 누적합은 처음인데 처음 접하면 시간을 많이 잡아먹을 것 같다. 더 연습해서 익숙하게 해야겠다는 생각이 들었다!



<br/>

### 📌 문제 풀이 큰 틀

✅ <strong>구현</strong><br/>
for문 돌릴 범위 제한 <br/>

✅ <strong>누적합</strong><br/>
(0,0)에서부터의 누적합을 미리 돌리고 나중에 파리채의 크기에 해당하는 합만을 구한다.


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

### 1️⃣ 구현

```python
T = int(input())

for t in range(T):
    N, M = map(int,input().split())
    graph = [list(map(int, input().split())) for _ in range(N)]
    
    ans = 0
    deads = []

    for i in range(N-M+1):
        for j in range(N-M+1):
            dead = 0
            for k in range(M):
                for l in range(M):
                    dead += graph[i+k][j+l]
            deads.append(dead)

    print(f'#{t+1} {max(deads)}')'
```

<br/>

### 2️⃣ 누적합
```python
T = int(input())

for t in range(T):
    N, M = map(int,input().split())
    graph = [list(map(int, input().split())) for _ in range(N)]
    
    ans = 0
    prefixsum = [[0 for _ in range(N+1)] for _ in range(N+1)]

    for i in range(1, N+1):
        for j in range(1, N+1):
            prefixsum[i][j] = graph[i-1][j-1] + prefixsum[i-1][j] + prefixsum[i][j-1] - prefixsum[i-1][j-1]

    for i in range(N-M+1):
        for j in range(N-M+1):
            dead = prefixsum[i+M][j+M] - prefixsum[i][j+M] - prefixsum[i+M][j] + prefixsum[i][j]
            ans = max(dead, ans)

    print(f'#{t+1} {ans}')
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
