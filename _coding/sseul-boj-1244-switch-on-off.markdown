---
layout: post
title:  "구현/시뮬레이션 | BOJ 백준 1244번 스위치 켜고 끄기 | Java"
description: <strong>🩶 Silver 4</strong><font color='gray'><br/>- 난이도 ★☆☆☆<br/>- 구현/시뮬레이션</font>
date:   2024-12-07 12:30:09 +0900
categories: coding
tags: [시뮬레이션]
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

# BOJ 백준 1244번 스위치 켜고 끄기 | Java

<p align='center'>
<img src='/assets/img/coding/boj_1244_1.png' width='100%'>
<img src='/assets/img/coding/boj_1244_2.png' width='100%'>
<figcaption><a href='https://www.acmicpc.net/problem/1244'>📌 백준 1244번 문제 바로가기</a></figcaption>
</p>



## 🔎 문제 설명

<strong>🩶 실버 4</strong>

<pre class="callout">
- 난이도 ★☆☆☆
- 구현/시뮬레이션
</pre>

가볍게 손풀기로 풀려고 했지만 생각보다 오래 걸렸던 문제라 기록을 남긴다. 어렵진 않지만 문제를 생각보다 잘 이해해야 하는 문제로, [질문 게시판](https://www.acmicpc.net/board/search/all/problem/1244)에 많은 사람들이 도움을 요청하는 모습을 볼 수 있다. <font color="lightgray">정답 비율이 무려 20%라구..</font>

문제에서 헷갈릴 만한 포인트들을 정리해서 남길테니 혹시라도 이 글을 찾아본 다른 사람에게 도움이 되었으면 좋겠다!

<br>


> 💡 문제 이해 포인트

- 문제 출력 형식: 스위치 상태를 20개씩 끊어서 출력해야 함
- 여학생이 자신이 받은 번호로부터 좌우가 대칭인 스위치 범위까지 스위치 상태를 바꾼다.
  - <strong>자신이 받은 번호는 항상 스위치 상태를 바꾼다</strong>


추가로 내가 문제 풀이에 도움이 되었던 반례를 아래에 첨부하였다. 위의 문제 이해 포인트를 모두 알맞게 적용했음에도 여전히 안 된다면 남학생 코드에서 놓치고 있는 포인트가 있을 수 있다. 



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
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main_1244_S4_스위치_켜고_끄기 {
	static int N, switches[];
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		N = Integer.parseInt(br.readLine());
		switches = new int[N];
		StringTokenizer st = new StringTokenizer(br.readLine());
		for (int i = 0; i < N; i++) switches[i] = Integer.parseInt(st.nextToken());

		int t = Integer.parseInt(br.readLine());
		int gender, num;
		for (int i = 0; i < t; i++) {
			st = new StringTokenizer(br.readLine());
			gender = Integer.parseInt(st.nextToken());
			num = Integer.parseInt(st.nextToken());
			operateSwitch(gender, num);
		}
		for (int j = 0; j < N; j++) {
			System.out.print(switches[j] + " ");
			if ((j + 1) % 20 == 0) System.out.println();
		}
	}

	private static void operateSwitch(int gender, int num) {
		if (gender == 1) {
			for (int i=num; i<=N; i+=num) switches[i-1] ^= 1;
			return;
		}
		switches[--num] ^= 1;
		for (int i=1; i<N; i++) {
			if (0>(num-i) || (num+i)>=N) break;
			if (switches[num+i]!=switches[num-i]) break;
			switches[num + i] ^= 1;
			switches[num - i] ^= 1;
		}
	}
}

/*
반례
8
0 1 0 1 0 0 0 1
2
1 8
2 7
*/
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
