---
layout: post
title:  "완전탐색 | BOJ 백준 14501번 퇴사 | Python"
description: <strong>🩶 Silver 3</strong><font color='gray'><br/>- 난이도 ★★☆☆<br/>- 완전탐색(DFS) & 동적프로그래밍(DP)</font>
date:   2024-03-27 15:30:09 +0900
categories: coding
tags: [완전탐색, DP 동적프로그래밍]
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

# BOJ 백준 14501번 퇴사 | Python

<p align='center'>
<img src='/assets/img/coding/boj_14501.png' width='100%'>
<figcaption><a href='https://www.acmicpc.net/problem/14501'>📌 백준 14501번 문제 바로가기</a></figcaption>
</p>

```
- 첫째 줄에 N (1 ≤ N ≤ 15)이 주어진다.
- 둘째 줄부터 N개의 줄에 Ti와 Pi가 공백으로 구분되어서 주어지며, 1일부터 N일까지 순서대로 주어진다. 
  (1 ≤ Ti ≤ 5, 1 ≤ Pi ≤ 1,000)
```
```
첫째 줄에 백준이가 얻을 수 있는 최대 이익을 출력한다.
```

## 🔎 문제 설명

<strong>🩶 실버 3</strong>
```
- 난이도 ★★☆☆
- 완전탐색 & 동적프로그래밍
```


전형적인 완전탐색 문제. 이 문제는 2가지 풀이법이 있다. 

1. <strong>완전탐색</strong> <br/>
   - 걸리는 시간과 비용을 모두 고려해야 하기 때문에 <code>T</code> 와 <code>P</code> 를 넘겨주면서 재귀로 풀 수 있다. <br/>
   - 상담하지 않고 지나간다면 <code>T+1</code> 와 <code>P</code> 그대로 반환.
   - &nbsp;



2. <strong>동적 프로그래밍 (DP)</strong> <br/>
   - for문을 2개 돌려서 그때그때의 최대가 되는 값을 계산
   - N 값이 커진다면 시간 복잡도 고려해야 함


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


### 1. 완전탐색
```python
N = int(input())
reserv = []
for _ in range(N):
    # t: 기간 / p: 받을 수 있는 금액
    t, p = map(int, input().split())
    reserv.append((t,p))
    
result = [0 for _ in range(N+1)]
answer = 0

def search(time, price):
    global answer
    answer = max(answer, price)
    if time >= N: return
    if time + reserv[time][0] <= N:
        search(time + reserv[time][0], price + reserv[time][1])
    search(time + 1, price)
    return

search(0,0)
print(answer)
```

### 2. 동적 프로그래밍 (DP)

```python
N = int(input())
reserv = []
for _ in range(N):
    # t: 기간 / p: 받을 수 있는 금액
    t, p = map(int, input().split())
    reserv.append((t,p))

result = [0 for _ in range(N+1)]

## DP 동적프로그래밍
for i in range(N):
    for j in range(i+reserv[i][0], N+1):
        if result[j] < result[i] + reserv[i][1]:
            result[j] = result[i] + reserv[i][1]
            
print(result[-1])
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
