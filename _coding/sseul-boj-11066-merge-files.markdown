---
layout: post
title:  "DP | BOJ 백준 11066번 파일 합치기 | Java"
description: <strong>💛 Gold 3</strong><font color='gray'><br/>- 난이도 ★★☆☆<br/>- DP</font>
date:   2024-12-09 12:30:09 +0900
categories: coding
tags: [DP 동적프로그래밍]
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

# BOJ 백준 11066번 파일 합치기 | Java

<p align='center'>
<img src='/assets/img/coding/boj_11066_1.png' width='100%'>
<figcaption><a href='https://www.acmicpc.net/problem/11066'>📌 백준 11066번 문제 바로가기</a></figcaption>
</p>



## 🔎 문제 설명

<strong>💛 골드 3</strong>

<pre class="callout">
- 난이도 ★★☆☆
- DP 동적 프로그래밍
</pre>

접근은 좋았으나 로직을 잘못 생각해서 풀이에 상당히 오랜 시간을 썼던 문제다. 

<br>




> 💡 문제 이해 포인트

- 두 개의 파일을 합칠 때 필요한 비용 = 두 파일 크기의 합
- 구간합과 동적프로그래밍을 활용하여 해결하자!

위 내용을 생각해보면, 2개씩 파일을 합칠 때는 최종 <code>answer</code> 에 각각의 파일이 가지고 있는 비용을 더한다. 그리고 3개 이상의 원소가 합쳐질 때부터는 1개의 파일(혹은 이미 합쳐진 파일) 비용 x에 현재 파일의 비용 y라고 한다면, 파일을 합칠 때 발생하는 총 비용은 x+y+(x+y) 이다.  

또한 연속된 파일들을 합치는 것이기 때문에 dp 배열을 선언할 때는 i부터 j까지의 파일을 합칠 때 발생하는 총 비용으로 생각하였다. 그렇기 때문에 <code>i부터 j까지 합칠 때 발생하는 총 비용</code> 은 dp[i][j]로, 2차원으로 설계하였다.

여기까지 이해가 됐다면 아래로 넘어가 코드로 구현하자. 정답 코드는 추가 주석 코드와 함께 맨 아래 첨부하였다.

<br>

> 내가 헷갈린 부분

- i부터 j까지 파일을 합칠 때
  -  i~j++로 먼저 dp를 계산, 이후에 i++ => 🥲 계산 순서가 엉망이 되어 연산이 제대로 되지 않음
  -  k개씩 합쳐서 k를 점차 늘려가는 방식 => 👍 (바로 아래 코드)

```java
// DP (3개 이상 합칠 때부터)
for (int k = 2; k < K; k++){
	for (int i = 1; i <= K - k; i++){
		int j = i + k;
		dp[i][j] = INF;
		for (int p = i; p < j; p++)
			dp[i][j] = Math.min(dp[i][j], dp[i][p] + dp[p + 1][j] + sum[j] - sum[i - 1]);
	}
}
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

```java
public class Main_11066_G3_파일_합치기 {
	static int K, files[];
	static final int INF = Integer.MAX_VALUE;
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		int T = Integer.parseInt(br.readLine());
		for (int t=0; t<T; t++) {
			K = Integer.parseInt(br.readLine());
			files = Arrays.stream(br.readLine().split(" "))
			  				.mapToInt(Integer::parseInt).toArray();

			sb.append(makeFinalFile(1, K)+"\n");
		}
		System.out.print(sb);
	}

	private static int makeFinalFile(int from, int to) {
		int dp[][] = new int[K+1][K+1];
		int sum[] = new int[K+1];			// 누적합 -> i ~ j까지 원소의 합을 구하려면 sum[j] - sum[i-1]

		// 초기화
		for (int i=1; i<K+1; i++) sum[i] = sum[i-1] + files[i-1];
		// 원소 2개 합칠 때
		for (int i=1; i<K; i++) dp[i][i+1] = files[i] + files[i-1];

		// DP (3개 이상 합칠 때부터)
		for (int k = 2; k < K; k++){
			for (int i = 1; i <= K - k; i++){
				int j = i + k;
				dp[i][j] = INF;
				for (int p = i; p < j; p++)
					dp[i][j] = Math.min(dp[i][j], dp[i][p] + dp[p + 1][j] + sum[j] - sum[i - 1]);
			}
		}

//		내가 잘못 설계했던 부분 
//		for (int i=1; i<K+1; i++) {
//			for (int j=i; j<K+1; j++) {
//				dp[i][j] = INF;
//				for (int k=i; k<j; k++) {
//					dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k+1][j] + sum[j] - sum[i-1]);
//				}
//			}
//		}

		return dp[from][to];
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
