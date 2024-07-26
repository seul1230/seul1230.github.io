---
layout: post
title:  "투포인터 & 에라토스테네스의 체 | BOJ 백준 1644번 소수의 연속합 | Python, Java"
description: <strong>💛 Gold 3</strong><font color='gray'><br/>- 난이도 ★☆☆☆<br/>- 투포인터<br/>- 에라토스테네스의 체</font>
date:   2024-07-25 20:30:09 +0900
categories: coding
tags: [투포인터, 에라토스테네스의 체]
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

# BOJ 백준 1644번 소수의 연속합 | Python, Java

<p align='center'>
<img src='/assets/img/coding/boj_1644.png' width='100%'>
<figcaption><a href='https://www.acmicpc.net/problem/1644'>📌 백준 1644번 문제 바로가기</a></figcaption>
</p>


## 🔎 문제 설명

<strong>💛 골드 3</strong>
<div class="callout">
<pre>
- 난이도 ★☆☆☆
- 투포인터
- 에라토스테네스의 체
</pre>
</div>

<br/>


#### 문제 풀이

1. 소수 배열 구하기
2. 특정 수가 되는 소수 연속합 개수 구하기 <br/><br/>



> 💡 에라토스테네스의 체

소수를 구하는 건 사실 소수의 개념만 알고 있다면 너무 쉬운 문제다. 그러나 이 문제에서는 일반적인 방법으로는 <code>시간초과</code> 를 면할 수 없기 때문에 <strong>에라토스테네스의 체</strong>로 문제에 접근해야 한다. <br/><a color="lightgray">📌 에라토스테네스의 체가 뭔데?</a><br/><small>이번에 처음 알게 된 에라토스테네스의 체에 관한 설명은 아래에 간단하게 정리하고자 한다. 이걸로만 풀리는 문제가 있다고 하니 알아두면 좋을 것 같다!</small>

다시 돌아와서 이렇게 에라토스테네스의 체로 소수 배열을 구했다면, 연속합이 특정 수가 되는 횟수를 구할 땐 <font color="purple"><strong>투포인터</strong></font>를 사용하였다. 연속합 문제 유형은 투포인터를 이용하면 비교적 빠르게 계산할 수 있다. 코드는 바로 아래 첨부하였다.



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
import sys
input = sys.stdin.readline
N = int(input())
prime_test = [False,False] + [True] * (N-1)
primes = []
for i in range(N+1):
    if prime_test[i]:
        for j in range(2*i, N+1, i):
            if prime_test[j]:
                prime_test[j] = False
        primes.append(i)
answer = 0
total = 0
end = 0
for start in range(len(primes)):
    while total < N and end < len(primes):
        total += primes[end]
        end += 1
    if total == N:
        answer += 1
    total -= primes[start]

print(answer)
```

<br/><br/>

### Java 버전

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        Boolean[] isPrimes = new Boolean[N+1];
        List<Integer> primes = new ArrayList<>();
        Arrays.fill(isPrimes, true);
        isPrimes[1] = false;

        int answer = 0;
        for (int i=2;i*i<=N;i++){
            if (isPrimes[i]) {
                for (int j=2*i;j<=N;j+=i) {
                    isPrimes[j] = false;
                }
            }
        }
        for (int i=2;i<=N;i++){
            if (isPrimes[i]) primes.add(i);
        }

        int tempTotal = 0;
        int end = 0;
        for (int start=0;start<primes.size();start++) {
            while (tempTotal < N && end < primes.size()) {
                tempTotal += primes.get(end++);
            }
            if (tempTotal == N) answer ++;
            tempTotal -= primes.get(start);

        }
        System.out.println(answer);
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
