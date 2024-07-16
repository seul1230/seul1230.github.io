---
layout: post
title:  "이분탐색 | 프로그래머스 고득점kit 입국심사 | Python, Java"
description: <strong>💚 Level 3</strong><font color='gray'><br/>- 난이도 ★★★☆<br/>- 이분탐색</font>
date:   2024-07-16 18:30:09 +0900
categories: coding
tags: [이분탐색]
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

# 프로그래머스 고득점kit 입국심사 | Python, Java

<p align='center'>
<img src='/assets/img/coding/prog_immigration.png' width='100%'>
<figcaption><a href='https://school.programmers.co.kr/learn/courses/30/lessons/43238'>📌 프로그래머스 고득점kit 입국심사 문제 바로가기</a></figcaption>
</p>

<br/>

## 🔎 문제 설명

<strong>💚 Level 3</strong>
```
- 난이도 ★★★☆
- 이분탐색
```

해당 문제는 이분탐색으로 풀었다. 일단 제한사항을 보면 <code>n</code> 의 범위가 1,000,000,000 이기 때문에 완탐으로 풀면 큰일나는 문제라는 걸 알 수 있다. 

<br/>

이분탐색으로 풀이할 때 기준은 다음과 같이 놓고 풀이했다. 

> mid = 심사 총 시간 <br/>
> ppl = 심사 총 시간 동안 심사할 수 있는 인원

<br/>

이분탐색 문제는 처음에 봤을 때 이분탐색이라는 걸 떠올리기 쉽지 않다. 아직 더 많이 풀어보면서 감을 익혀야 할 듯하다. 



최근 자바를 배우면서 파이썬으로 풀었던 문제를 다시 자바로 풀어보고 있다. 자바 코드도 밑에 첨부하였다. 비록 지금은 파이썬 사고를 자바로 구현하는 단계지만, 나중에는 자바로도 척척 풀어낼 수 있길! 

<font color='lightgray'>파이썬 외길 인생에게 자바 입력은 생각보다 어렵다..!</font>


<br/><br/>

### 📌 이번 문제에서 기억하면 좋은 자바 문법 

> 배열에서 최대값 찾기 

```java
// array 배열에서 max를 반환, 없다면 0을 반환
Arrays.stream(array).max().orElse(0);
```



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

### Python 버전

```python
def solution(n, times):
    answer = 0
    
    # total time range
    # end : most inefficient
    start, end = 1, max(times) * n
    
    # binary search
    while start <= end:
        
        # how much ppl
        checked = 0
        
        # all examiners equally mid minutes
        mid = (start + end) // 2
        
        # examiners
        for time in times:
            # (checked for mid mins) per examiners
            checked += mid // time
        
        # enough
        if checked >= n:
            answer = mid
            end = mid - 1
        
        # not enough
        else:
            start = mid + 1

    return answer
```

<br/><br/><br/>

### Java 버전

```java
import java.util.*;
class Solution {
    static long start;
    static long end;
    static long mid;
    static long solution(int n, int[] times) {
        long answer = 0;
        
        // total time -> answer
        start = 0;
        end = (long) n * Arrays.stream(times).max().orElse(0);
        
        while (start<=end) {
            long ppl = 0;
            mid = (start + end)/2;
            for (int time : times) {
                ppl +=  mid/time;
            }
            if (ppl >= n) {
                answer = mid;
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
        return answer;
    }
}
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
