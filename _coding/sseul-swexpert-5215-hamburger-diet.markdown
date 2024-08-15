---
layout: post
title:  "조합 & DP | SW Expert Academy 5215번 햄버거 다이어트 | Java"
description: <strong>💙 D3</strong><font color='gray'><br/>- 난이도 ★★☆☆<br/>- 조합<br/>- DP 동적 프로그래밍</font>
date:   2024-08-15 16:30:09 +0900
categories: coding
tags: [조합, DP 동적프로그래밍]
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

# SW Expert Academy 5215번 햄버거 다이어트 | Java

<p align='center'>
<img src='/assets/img/coding/swea_hamburger_diet.png' width='90%'>
<figcaption><a href='https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AWT-lPB6dHUDFAVT'>📌 SW Expert Academy 5215번 문제 바로가기</a></figcaption>
</p>



## 🔎 문제 설명

<strong>💙 D3</strong>
```
- 난이도 ★★☆☆
- 조합
- DP 동적 프로그래밍
```

이 문제는 조합과 동적 프로그래밍 2가지 방법으로 풀 수 있다.

최근에 재귀로 조합을 찾아내는 법을 배웠기 때문에 이걸 이용한 자바 코드를 올리고자 한다. 원래는 자바 입출력도 버거웠는데 이론을 탄탄하게 들으며 많이 배우고 있는 요즘이다. 코드에 대한 설명은 주석으로 대신 하겠다. DP로도 풀 수 있는데 헷갈렸던 기억이 난다. 자바로 다시 한 번 풀어서 아래에 첨부할 예정이다.



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


```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Solution {
	static int N, L, answer;
	static int[] tastes, calories;

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());
		StringBuilder sb = new StringBuilder();
		for (int t=1;t<T+1;t++){
			sb.append("#").append(t).append(" ");
			StringTokenizer st = new StringTokenizer(br.readLine());
			N = Integer.parseInt(st.nextToken());
			L = Integer.parseInt(st.nextToken());

			tastes = new int[N];
			calories = new int[N];
			for (int n=0;n<N;n++) {
				st = new StringTokenizer(br.readLine());
				tastes[n] = Integer.parseInt(st.nextToken());
				calories[n] = Integer.parseInt(st.nextToken());
			}
			answer = 0;
			findBestCombi(0,0,0);
			sb.append(answer).append("\n");
		}
		System.out.println(sb);
	}
	public static void findBestCombi(int depth, int totalTaste, int totalCal){
		if (totalCal > L) return;
		if (depth == N) {
			// 제한 칼로리를 넘지 않고 끝까지 돌았다면, 기존값과 비교해 최고 점수 갱신!
			answer = Math.max(answer, totalTaste);
			return;
		}
		// 해당 재료를 고르면
		findBestCombi(depth+1, totalTaste+tastes[depth], totalCal+calories[depth]);
		// 해당 재료를 고르지 않으면
		findBestCombi(depth+1, totalTaste, totalCal);
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
