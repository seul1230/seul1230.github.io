---
layout: post
title:  "그래프탐색 BFS/DFS | 프로그래머스 고득점kit 단어 변환 | Python, Java"
description: <strong>💚 Level 3</strong><font color='gray'><br/>- 난이도 ★★☆☆<br/>- 그래프탐색 BFS/DFS</font>
date:   2024-05-15 17:30:09 +0900
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

# 프로그래머스 고득점kit 단어 변환 | Python, Java

<p align='center'>
<img src='/assets/img/coding/prog_transform_words.png' width='100%'>
<figcaption><a href='https://school.programmers.co.kr/learn/courses/30/lessons/43163'>📌 프로그래머스 고득점kit 단어 변환 문제 바로가기</a></figcaption>
</p>

<br/>

## 🔎 문제 설명

<strong>💚 Level 3</strong>

<pre class="callout">
- 난이도 ★★☆☆
- 그래프탐색 BFS/DFS
</pre>

보통의 그래프탐색과 달리 이 문제는 방문 여부를 저장해줄 필요는 없다. <code>한 번에 한 개의 알파벳만 바꿀 수 있는지</code> 만 확인해서 해당하는 노드만 돌려주면 충분히 시간초과 없이 해결할 수 있다. 

처음엔 전체 문자열에서 1개의 문자를 빼서 비교하는 식으로 했는데, 그냥 <code>for문</code> 으로 돌리면서 다른 문자가 1회 나오는 값만 찾으면 되는 거였다! 그리고 변환횟수를 같이 인자로 넘겨주어 저장할 수 있도록 했다. 코드는 밑에 첨부해놓았다.

*(2024.09.29 자바 풀이 추가)

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

### Python 버전 코드 (BFS)
```python
from collections import deque

def possible(a, b):
    cnt = 0
    for x, y in zip(a,b):
        if x != y:
            cnt += 1
    if cnt == 1:
        return True
    return False

def bfs(begin, words, target):
    queue = deque([(begin, 0)])
    while queue:
        x, cnt = queue.popleft()
        if x == target:
            return cnt
        for word in words:
            if possible(x,word):
                queue.append((word, cnt+1))

def solution(begin, target, words):
    if target not in words:
        return 0
    return bfs(begin, words, target)
```


### 자바 버전 코드 (DFS)
```java
import java.util.*;
import java.io.*;
class Solution {
    static int answer = 0;
    static boolean[] visited;
    public int solution(String begin, String target, String[] words) {
        answer = 0;
        visited = new boolean[words.length];
        dfs(begin, target, words, 0);
        return answer;
    }
    
    private void dfs(String now, String target, String[] words, int cnt) {
        if (now.equals(target)) {
            answer = cnt;
            return;
        }
        for (int i=0; i<words.length; i++) {
            if (visited[i]) continue;
            if (possible(now, words[i])) {
                visited[i] = true;
                dfs(words[i], target, words, cnt + 1);
                visited[i] = false;
            }
        }
    }
    
    private boolean possible(String a, String b) {
        int cnt = 0;
        for (int i=0; i<a.length(); i++) {
            if (cnt > 2) break; 
            if (a.charAt(i)!=b.charAt(i)) {
                cnt ++;
            }
        }
        if (cnt == 1) return true;
        return false;
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
