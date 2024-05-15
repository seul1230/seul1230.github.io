---
layout: post
title:  "해시 | 프로그래머스 고득점kit 베스트앨범 | Python"
description: <strong>💚 Level 3</strong><font color='gray'><br/>- 난이도 ★☆☆☆<br/>- 해시<br/>- Union-Find</font>
date:   2024-05-14 18:30:09 +0900
categories: coding
tags: [해시]
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

# 프로그래머스 고득점kit 베스트앨범 | Python

<p align='center'>
<img src='/assets/img/coding/prog_best_album.png' width='100%'>
<figcaption><a href='https://school.programmers.co.kr/learn/courses/30/lessons/42579'>📌 프로그래머스 고득점kit 베스트앨범 문제 바로가기</a></figcaption>
</p>

<br/>

## 🔎 문제 설명

<strong>💚 Level 3</strong>
```
- 난이도 ★☆☆☆
- 해시
```

어렵지 않은 유형이나 딕셔너리 정렬법을 알고 있지 않다면 못 푸는 문제이다. 장르별로 재생횟수 총합 딕셔너리 <code>total_play_dict</code> 와 장르별 고유번호 + 재생횟수를 저장한 <code>lst_play_dict</code> 를 이용해 풀이하였다. 

### 해시의 장단점
해시는 자료의 검색, 읽기, 저장 속도가 빠르다는 장점이 있다. 그리고 중복 여부를 한 번에 판별하기 쉽다. <br/>
반면, 저장 공간을 더 많이 필요로 하고 key가 달라도 해시 값이 같을 경우 충돌이 발생한다는 단점이 있다. <font color='lightgray'> 파이썬은 이를 개방 주소법, 충돌할 때 다음 빈자리를 찾아 자료를 저장한다고 한다. </font>


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
from collections import defaultdict

def solution(genres, plays):
    answer = []
    
    # 가장 많은 장르 > 가장 많은 노래 > 낮은 고유 번호
    total_play_dict = defaultdict(int)
    lst_play_dict = defaultdict(list)
    for idx, (genre, play) in enumerate(zip(genres, plays)):
        total_play_dict[genre] += play
        lst_play_dict[genre].append((idx, play))
    total_play_dict = sorted(total_play_dict.items(), key=lambda x: -x[1])

    for genre,_ in total_play_dict:
        playlist = lst_play_dict[genre]
        playlist = sorted(playlist, key=lambda x: (-x[1], x[0]))
        cnt = 0
        for idx, play in playlist:
            if cnt == 2:
                break
            answer.append(idx)
            cnt += 1
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
