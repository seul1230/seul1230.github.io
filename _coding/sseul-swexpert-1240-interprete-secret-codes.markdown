---
layout: post
title:  "구현 | SW Expert Academy 1240번 단순 2진 암호코드 | Python"
description: <strong>💙 D3</strong><font color='gray'><br/>- 난이도 ★☆☆☆<br/>- 구현</font>
date:   2024-05-17 16:30:09 +0900
categories: coding
tags: [그래프탐색]
---
<br/>

<script async src="https://pageaD4.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7280083909521856"
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

# SW Expert Academy 1240번 단순 2진 암호코드 | Python

<p align='center'>
<img src='/assets/img/coding/swea_1240_1.png' width='100%'>
<img src='/assets/img/coding/swea_1240_2.png' width='100%'>
<img src='/assets/img/coding/swea_1240_3.png' width='100%'>
<figcaption><a href='https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV15FZuqAL4CFAYD'>📌 SW Expert Academy 1240. [S/W 문제해결 응용] 1일차 - 단순 2진 암호코드 문제 바로가기</a></figcaption>
</p>



## 🔎 문제 설명

<strong>💙 D3</strong>
```
- 난이도 ★☆☆☆
- 구현
```

단순 구현이라 코드 작성이 어렵지 않았으나, 몇 가지 예외가 있어서 애를 먹었다. 댓글에서 힌트를 얻었다.

>  저같은분 있을 까봐 남겨둬요~ 앞에서부터 무조건 7개씩 끊으면 되는건줄 알았는데 꼭 그런 케이스만 있는건 아닙니다!

암호가 아닌 부분은 0으로 채워져 있다. 당연히 앞에서부터 무조건 7개씩 끊으면 될 줄 알았는데 이걸 고려하지 않으면 3/10 점을 받을 것이다..!


<br/>

<script async src="https://pageaD4.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7280083909521856"
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
T = int(input())
for t in range(T):
    N, M = map(int, input().split())
    secrets = [input() for _ in range(N)]
    answer = 0

    def transform(secret: str):
        signal = ['0001101','0011001','0010011','0111101',
                  '0100011','0110001','0101111','0111011',
                  '0110111','0001011']
        numbers = []
        for i in range(len(secret)//7):
            sig = secret[7*i:7*(i+1)]
            if sig in signal:
                num = signal.index(sig)
                numbers.append(str(num))
        return ''.join(numbers)

    def correct(nums):
        nums = list(map(int, list(nums)))
        odd, even = 0, 0
        for idx, n in enumerate(nums):
            if idx%2==0:
                odd += n
            else:
                even += n
        if (3 * odd + even)%10 > 0:
            return 0
        return sum(nums)

    for secret in secrets:
        if set(secret) != set('0'):
            last = secret[::-1].index('1')
            number = transform(secret[-last-56:-last])
            answer = correct(number)

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
