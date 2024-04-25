---
layout: post
title:  "분할정복 | BOJ 백준 17829번 222-풀링 | Python"
description: <strong>🩶 실버 2</strong><font color='gray'><br/>- 난이도 ★★★☆<br/>- 분할정복 (재귀)</font>
date:   2024-04-25 16:30:09 +0900
categories: coding
tags: [분할정복, 실버2]
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

# BOJ 백준 17829번 222-풀링 | Python

<p align='center'>
<img src='/assets/img/coding/boj_17829_1.png' width='100%'>
<img src='/assets/img/coding/boj_17829_2.png' width='100%'>
<figcaption><a href='https://www.acmicpc.net/problem/17829'>📌 백준 17829번 문제 바로가기</a></figcaption>
</p>



## 🔎 문제 설명

<strong>🩶 실버 2</strong>
```
- 난이도 ★★★☆
- 분할정복
```


전공 수업에서 CNN 합성곱 계산을 했던 기억이...ㅎ

<p align='center'>
<img src="https://latex.codecogs.com/svg.image?&space;L_{out}=\left[\frac{L_{in}&plus;2\times{padding}-kernel_{size}}{stride}&plus;1\right]" title=" L_{out}=\left[\frac{L_{in}+2\times{padding}-kernel_{size}}{stride}+1\right]" /><figcaption>PyTorch에서 Conv2D 클래스 출력 공식</figcaption></p>



일단 문제 설정이 너무 웃펐다. 특히 마지막 문장...🫠<br/>
> 랩실 활동에 치여 삶이 사라진 종욱이를 애도하며 종욱이의 궁금증을 대신 해결해주자.




<br/><br/>

### 🚀 힌트

이 문제를 풀면서 느꼈는데 이게 가장 큰 힌트다. 잊지 말자!!
```
분할정복은 큰 문제를 작은 문제로 분할하여 해결하는 방법이다.
```


<br/>

📌 문제 풀이 큰 틀은 다음과 같다.

- 각 2 x 2 사각형에서 두 번째로 큰 숫자만 뽑아와서 임시 리스트로 저장
- 1 x 1이 될 때까지 반복


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
input = sys.stdin.readline
N = int(input())
squares = []
for _ in range(N):
    squares.append(list(map(int, input().split())))
    
def solution(x, y, n):
    if n == 2:
        answer = [squares[x][y], squares[x+1][y], squares[x][y+1], squares[x+1][y+1]]
        answer.sort()
        return answer[-2]

    lu = solution(x, y, n//2)
    ld = solution(x+n//2, y, n//2)
    ru = solution(x, y+n//2, n//2)
    rd = solution(x+n//2, y+n//2, n//2)
    answer = [lu, ld, ru, rd]
    answer.sort()
    return answer[-2]

answer = solution(0,0,N)
print(answer)
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
