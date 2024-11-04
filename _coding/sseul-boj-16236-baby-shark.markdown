---
layout: post
title:  "시뮬레이션 & BFS | BOJ 백준 16236번 아기 상어 | Java"
description: <strong>💛 Gold 3</strong><font color='gray'><br/>- 난이도 ★★☆☆<br/>- 시뮬레이션 <br/>- 그래프 탐색 BFS</font>
date:   2024-11-04 14:30:09 +0900
categories: coding
use_math: true
tags: [시뮬레이션, 그래프탐색]
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

# BOJ 백준 16236번 아기 상어 | Java

<p align='center'>
<img src='/assets/img/coding/boj_16236.png' width='100%'>
<figcaption><a href='https://www.acmicpc.net/problem/16236'>📌 백준 16236번 문제 바로가기</a></figcaption>
</p>



## 🔎 문제 설명

<strong>💛 골드 3</strong>

<pre class="callout">
- 난이도 ★★☆☆
- 시뮬레이션
- 그래프 탐색 BFS
</pre>


> ❓ 시뮬레이션: 아기 상어가 먹을 수 있는 물고기를 모두 다 먹는 데에 걸리는 시간은?

이 문제는 전형적인 시뮬레이션 문제라고 할 수 있다. 문제를 요약하자면 다음과 같다.

1. 가장 가까운 물고기를 찾아서 먹고 나면 그 위치로부터 또다시 가장 가까운 물고기를 찾아서 먹어야 한다. 
2. 단, 자신보다 몸집이 작은 물고기만 먹을 수 있고 자신보다 큰 몸집을 가진 물고기가 위치한 자리로는 갈 수 없다.
3. 자신과 같은 크기의 몸집을 가진 물고기가 있는 자리는 지나갈 수는 있다.
4. 아기상어가 먹은 <code>물고기 수</code> 가 <code>자신의 사이즈</code> 와 같아진다면 몸집이 +1 된다.

<br/>

> 📌 물고기 수 초기화

이 문제를 풀면서 오래 걸렸던 부분 중 하나는 4번에 대한 이해였다. 몸집이 +1 커진 다음에는 먹은 물고기 수를 초기화해야함을 잊지 말자! 굉장히 오해하기 쉽게 생겼으니까... 다들 풀이가 맞는 것 같은데 왜 안 되지? 라는 생각이 든다면 이 부분을 체크해보자!


<br/><br/>

### 💡 PriorityQueue 를 이용한 BFS

내가 BFS 로 푼 이유는 아기 상어가 상하좌우로 한 칸씩 움직일 수 있기 때문이다. 그리고 여기서 한 가지 주의해야 할 점은 가장 가까운 물고기가 여러 마리일 수 있는데 이때 가장 위에 있는 물고기를 먹고, 위에 있는 물고기 중에서도 가장 왼쪽에 있는 물고기를 먹는다는 점이다. 이 부분을 매번 고려해주기 귀찮아서 <code>Shark</code> 라는 class에 `compareTo` 함수를 정의해서 `PriorityQueue`로 BFS를 구현하였다.

구체적인 코드는 아래에 첨부하였으니 참고하세요!



<br/><br/>




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
import java.util.LinkedList;
import java.util.PriorityQueue;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
	
	static int N, M, fish, tmp;
	static int[][] board;
	static Shark shark;

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		
		N = Integer.parseInt(br.readLine());
		
		fish = 0;
		board = new int[N][N];
		
		for (int i=0; i<N; i++) {
			st = new StringTokenizer(br.readLine());
			for (int j=0; j<N; j++) {
				board[i][j] = Integer.parseInt(st.nextToken());
				if (board[i][j]==9) {
					shark = new Shark(i, j, 0);
					board[i][j] = 0;
				} else if (board[i][j]>0) fish++;
			}
		}
		eatFish();
		System.out.println(shark.time);
	}
	

	static int[] dx = {-1,0,1,0};
	static int[] dy = {0,-1,0,1};
	
	
	private static void eatFish() {
		int time = 0, eat = 0, size = 2;
		while (true) {
			PriorityQueue<Shark> q = new PriorityQueue<>();
			boolean visited[][] = new boolean[N][N];
			boolean noMore = true;

			q.add(shark);
			visited[shark.x][shark.y] = true;
			
			int x, y, nx, ny;
			while (!q.isEmpty()) {
				Shark now = q.poll();
				x = now.x; y = now.y;
				time = now.time;
				
				// 먹을 수 있는 경우
				if (0<board[x][y] && board[x][y]<size)  {
					eat ++; board[x][y] = 0;		// 먹은 후 처리
					shark = new Shark(x, y, time);	// 상어 위치 & 걸린 시간 갱신
					noMore = false;					// 더이상 먹을 수 있는 물고기가 없음 -> 엄마 상어 찾아가기
					break;
				}
				
				for (int i=0; i<4; i++) {
					nx = x+dx[i]; ny = y+dy[i];
					// 지나갈 수 없는 경우
					if (nx<0||nx>=N||ny<0||ny>=N||visited[nx][ny]) continue;
					if (board[nx][ny]>size) continue;

					// 지나갈 수 있다면
					q.add(new Shark(nx, ny, time+1));
					visited[nx][ny] = true;
				}
			}
			if (noMore) return;
			if (eat == size) {				// 먹은 물고기 수와 자신의 몸집 비교
				size ++;
				eat = 0;					// *먹은 물고기 수 초기화
			}
		}
	}

	static class Shark implements Comparable<Shark> {
		int x, y;
		int time;
		
		public Shark(int x, int y, int time) {
			this.x = x;
			this.y = y;
			this.time = time;
		}

		@Override
		public int compareTo(Shark o) {
			return (this.time != o.time)? Integer.compare(this.time, o.time):((this.x == o.x)? Integer.compare(this.y, o.y):Integer.compare(this.x, o.x));
		}
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
