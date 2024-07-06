---
layout: post
title:  "구현 | SW Expert Academy 12712번 파리 퇴치3 | Python"
description: <strong>🩶 D2</strong><font color='gray'><br/>- 난이도 ★☆☆☆<br/>- 구현</font>
date:   2024-07-06 16:30:09 +0900
categories: coding
tags: [구현]
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

# SW Expert Academy 12712번 파리 퇴치3 | Python

<p align='center'>
<img src='/assets/img/coding/prog_kill_flies3_1.png' width='90%'>
<img src='/assets/img/coding/prog_kill_flies3_2.png' width='90%'>
<figcaption><a href='https://swexpertacademy.com/main/code/userProblem/userProblemDetail.do?contestProbId=AXuARWAqDkQDFARa'>📌 SW Expert Academy 12712번 문제 바로가기</a></figcaption>
</p>



## 🔎 문제 설명

<strong>🩶 D2</strong>
```
- 난이도 ★★☆☆
- 구현
```

처음엔 스프레이 노즐에 해당하는 부분의 위치를 하나씩 검사해 파리수를 합하는 쪽으로 생각했으나 너무 코드가 더러워져서 생각을 다시 했다. 

4방향을 한 번에 하나씩 넓혀서 위치 유효검사를 해주면 훨씬 깨끗하게 코드를 작성할 수 있다. 아래에 성공한 코드를 작성해놓았다. <font color='lightgray'>물론 그냥 구현한 거라 이것보다 더 좋은 코드가 존재할 수 있다. 다른 좋은 방법이 더 없나 고민해봐야겠다.</font>



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
dx_p = [1,-1,0,0]
dy_p = [0,0,-1,1]
dx_t = [1,-1,1,-1]
dy_t = [1,-1,-1,1]

def sum_flies(center):
    x, y = center
    plus, times = flies[x][y], flies[x][y]

    # 4방향 한 번에 더하기
    for i in range(4):
        for j in range(1,M):
            nx_p, ny_p = x + dx_p[i]*j, y + dy_p[i]*j
            nx_t, ny_t = x + dx_t[i]*j, y + dy_t[i]*j
            if 0<=nx_p<N and 0<=ny_p<N:
                plus += flies[nx_p][ny_p]
            if 0<=nx_t<N and 0<=ny_t<N:
                times += flies[nx_t][ny_t]
    return max(plus, times)

T = int(input())
for t in range(T):
    answer = 0
    N, M = map(int, input().split())
    flies = [list(map(int,input().split())) for _ in range(N)]
    for i in range(N):
        for j in range(N):
            answer = max(answer, sum_flies((i,j)))

    print(f'#{t+1}', answer)
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
