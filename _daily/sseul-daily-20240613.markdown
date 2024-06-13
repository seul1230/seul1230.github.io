---
layout: post
title:  "여행 | 🇯🇵 일본 | 대학생 여자 둘이서 3박4일 오사카 & 교토 여행 후기 !"
description: <strong>🗓️ 2023.01.17 - 2023.01.20</strong><font color='gray'><br/>- 교토 1박 / 오사카 2박<br/>- 기요미즈데라, 도톤보리, 난바, 그리고 유니버셜 스튜디오 재팬</font>
date:   2024-06-13 16:30:09 +0900
categories: daily
tags: [🇯🇵 일본]
---

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7280083909521856"
     crossorigin="anonymous"></script>
<!-- <ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-7280083909521856"
     data-ad-slot="4964002703"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

<br/> -->

# 🇯🇵 일본 | 대학생 여자 둘이서 3박4일 오사카 & 교토 여행 후기

일본에 2023년 초에 갔으니까 여행을 다녀온지는 1년 반 정도 되겠다. 사진첩에서 추억여행 하는 김에 기록하려고 꺼내보았다!


<대표 사진>

코로나19가 어느 정도 진정되자마자 동기랑 목적지를 정하고 비행기 예약부터 했다. 일본어 듣기랑 원어민이랑 가벼운 일상회화 정도는 가능했기 때문에 더 부담없이 밀어붙인 것도 있었던 것 같다. 내가,,, 이러려고 게임하면서 일본어를 공부했지-!

마침 게임에서 만난 일본인 친구가 야끼니꾸 사주러 오사카에 와준다고 해서 이 친구랑도 약속을 잡았다. 다시 생각해봐도 너무 고맙다! 고마워 당근아 🥕 <font color='lightgray'>게임 닉네임이 당근이었다.</font> 

비행기 티켓도 예매하고 약속도 정하니까 두근두근 완저니 설레버려. 극P 둘이서 가는 자유여행이었기 때문에 계획은 노션으로 제법 체계적으로 짰다.

<노션 페이지>

### 여행 가기 전

우리가 여행 계획 세우기 전에 중요하게 고려한 부분은 <code>대중교통</code>, <code>숙소</code>, 그리고 <code>여행 중 발생하는 경비</code> 정도 였다.

[x] 교통카드 or 교통패스
[x] 숙소 고려요소 - 최소한의 보안 & 교통
[x] 먹고 싶은 음식 리스트업
[x] 공동 경비 모아서 한 번에 지불 - 나머지는 개인이

<br/>

이걸 고려해서 여행 전에 미리 결제한 리스트는 요정도 되겠다.

<p align='center'>
<img src='/assets/img/daily/japan_before_money.png' width='80%'>
<figcaption>📌 여행 전 정산 현황</figcaption>
</p>

<br/>

사실 3박4일이면 오사카랑 교토 둘다 둘러보기엔 짧은 시간이다. 좀 더 시간이 넉넉했다면 더 좋았겠지만 그렇진 않아서 계획은 교토 1박 / 오사카 2박으로 정하고 다음과 같이 노션에 계획을 세웠다. 이때 정리한 맛집 리스트는 아래에 >>

{% capture carousel_images %}
/assets/img/daily/restaurant_kyoto.png
/assets/img/daily/restaurant_osaka.png
{% endcapture %}
{% include elements/carousel.html %}

<p align='center'>
<!-- <img src='/assets/img/daily/restaurant_kyoto.png' width='80%'>
<img src='/assets/img/daily/restaurant_osaka.png' width='80%'> -->
<figcaption>📌 오사카랑 교토 맛집 리스트<br/><font color='lightgray'>그림 오른쪽을 누르면 다음 리스트로 넘어간다.</font></figcaption>
</p>

<br/>



### 1일차 - 교토

<br/>

### 2일차 - 교토 & 오사카

<br/>

### 3일차 - 유니버셜 스튜디오 재팬

<br/>

### 4일차 - 한국으로 !

<br/>

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

<!-- <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7280083909521856"
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

<br/> -->


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
