---
layout: post
title:  "구현/시뮬레이션 | BOJ 백준 15683번 감시 | Java"
description: <strong>💛 Gold 3</strong><font color='gray'><br/>- 난이도 ★★☆☆<br/>- 구현/시뮬레이션</font>
date:   2024-12-09 12:30:09 +0900
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

# BOJ 백준 15683번 감시 | Java

<p align='center'>
<img src='/assets/img/coding/boj_15683_1.png' width='100%'>
<img src='/assets/img/coding/boj_15683_2.png' width='100%'>
<img src='/assets/img/coding/boj_15683_3.png' width='100%'>
<figcaption><a href='https://www.acmicpc.net/problem/15683'>📌 백준 15683번 문제 바로가기</a></figcaption>
</p>



## 🔎 문제 설명

<strong>💛 골드 3</strong>

<pre class="callout">
- 난이도 ★★☆☆
- 구현/시뮬레이션
</pre>

백준 15683번 문제는 삼성 기출 문제로, 삼성기출 단골 유형인 시뮬레이션으로 푸는 문제다. 일단 문제 길이가 엄청나서 놓치는 부분 없이 잘 이해하는 것이 중요하다. 

감시카메라가 회전을 할 수 있다는 점이 이 문제를 복잡하게 만드는데, 여기서 주목해야하는 점은 N과 M의 범위가 상당히 작고 감시카메라의 개수도 적다는 점이다. 이러면 시간적 제약에서 벗어나 <strong>순열</strong> 을 적용할 수 있다. 

<br>

> 어떻게 순열을 사용한다는 거야?

감시카메라가 회전할 수 있는 방향은 위에서 봤을 때 상하좌우 총 4개이므로, 각각의 CCTV가 어느 방향으로 회전할지 순열로 미리 정해놓고 이를 시뮬레이션하면서 사각지대를 찾는다. 조합이 아닌 이유는 감시카메라가 1~5번까지 존재하는데 중복되는 카메라가 있을 수 있기 때문이다. 

문제에서 헷갈릴 만한 포인트들을 정리해서 남길테니 혹시라도 이 글을 찾아본 다른 사람에게 도움이 되었으면 좋겠다!

<br>


> 💡 문제 이해 포인트

<p align='center'>
<img src='/assets/img/coding/boj_15683_4.png' width='100%'>
<figcaption>감시카메라 번호에 따른 감시 방향</figcaption>
</p>

- CCTV는 회전시킬 수 있는데, 회전은 항상 90도 방향으로 해야 하며, 감시하려고 하는 방향이 가로 또는 세로 방향이어야 한다.
- CCTV는 벽을 통과할 수 없다.
- <strong>CCTV는 CCTV를 통과할 수 있다.</strong>


추가로 내가 문제 풀이에 도움이 되었던 반례를 아래에 코드와 함께 첨부하였다. 나 같은 경우는 5번 감시카메라가 회전할 필요 없어서 따로 처리했었는데, 이 부분에서 오류가 있었다. 

내가 풀었던 문제 중에서 문제가 엄청 긴 편에 속한다. 코드를 더 줄이거나 백트래킹을 적용할 수 있는 방법을 좀 더 모색해봐야겠다.



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
public class Main_15683_G3_감시 {
	static final int INF = Integer.MAX_VALUE;
	static int N, M, answer, directions[];
	static char board[][], copyMap[][];
	static List<CCTV> cctvList;

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());
		board = new char[N][M];
		cctvList = new ArrayList<>();
		answer = INF;
		for (int i=0; i<N; i++) {
			st = new StringTokenizer(br.readLine());
			for (int j=0; j<M;j ++) {
				board[i][j] = st.nextToken().charAt(0);
				if (board[i][j] != '0' && board[i][j] != '6' && board[i][j] != '5')
					cctvList.add(new CCTV(i, j, board[i][j]-'0'));
			}
		}

		// 5번은 회전할 필요 없음
		for (int i=0; i<N; i++) {
			for (int j=0; j<M; j++) {
				if (board[i][j]=='5') cctv5(i, j);
			}
		}

		directions = new int[cctvList.size()];
		permutation(0);
		System.out.println(answer);
	}

	private static void permutation(int depth) {
		if (depth == cctvList.size()) {
			copyMap = new char[N][M];
			for (int i=0; i<N; i++) copyMap[i] = Arrays.copyOf(board[i], M);
			for (int i=0; i<cctvList.size(); i++) {
				setDirection(cctvList.get(i), directions[i]);
			}
			countBlind();
			return;
		}
		for (int i=0; i<4; i++) {
			if (cctvList.get(depth).no == 5) directions[depth] = 0;
			else directions[depth] = i;
			permutation(depth+1);
		}
	}

	private static void cctv5 (int x, int y) {
		for (int i=0; i<N-x; i++) {
			if (board[x+i][y] == '6') break;
			if (board[x+i][y] == '0') board[x+i][y] = '#';
		}
		for (int i=0; i<=x; i++) {
			if (board[x-i][y] == '6') break;
			if (board[x-i][y] == '0') board[x-i][y] = '#';
		}
		for (int i=0; i<M-y; i++) {
			if (board[x][y+i] == '6') break;
			if (board[x][y+i] == '0') board[x][y+i] = '#';
		}
		for (int i=0; i<=y; i++) {
			if (board[x][y-i] == '6') break;
			if (board[x][y-i] == '0') board[x][y-i] = '#';
		}
	}

	// 상우하좌(시계방향)
	static int[] dx = {-1,0,1,0};
	static int[] dy = {0,1,0,-1};

	// BFS
	private static void watch(CCTV cctv, int dir) {
		Queue<CCTV> q = new LinkedList<>();
		q.add(cctv);

		while (!q.isEmpty()) {
			CCTV now = q.poll();
			int nx = now.x + dx[dir], ny = now.y + dy[dir];
			if (0>nx || nx>=N || 0>ny || ny>=M || copyMap[nx][ny] == '6') break;
			if (copyMap[nx][ny]=='0') {
				copyMap[nx][ny] = '#';
				q.add(new CCTV(nx, ny, cctv.no));
			} else {
				q.add(new CCTV(nx, ny, cctv.no));
			}
		}
	}

	// 2번은 2 방향만, 1,3,4는 4방향 다 고려
	private static void setDirection(CCTV cctv, int dir) {
		if (cctv.no == 2) {
			if (dir % 2 == 0) {
				watch(cctv, 0); watch(cctv, 2);
			} else {
				watch(cctv, 1); watch(cctv, 3);
			}
		} else if (cctv.no == 1) {
			watch(cctv, dir);
		} else if (cctv.no == 3) {
			watch(cctv, dir);
			watch(cctv, (dir+1)%4);
		} else {
			watch(cctv, dir);
			watch(cctv, (3+dir)%4);
			watch(cctv, (dir+1)%4);
		}
	}
	private static void countBlind() {
		int cnt = 0;
		for (int i=0; i<N; i++) {
			for (int j = 0; j < M; j++) {
				if (copyMap[i][j] == '0') cnt++;
			}
		}
		answer = Math.min(answer, cnt);
	}

	static class CCTV {
		int x, y, no;
		public CCTV(int x, int y, int no) {
			this.x = x;
			this.y = y;
			this.no = no;
		}
	}
}
```

## 🔫 반례

[질문 게시판](https://www.acmicpc.net/board/search/all/problem/15683)을 참고했다. 

```
5 2
0 0
0 0
3 0
0 0
6 0
answer) 5

5 5
0 0 0 0 0
6 2 0 0 4
0 0 0 4 0
5 0 0 5 0
6 0 0 0 0
answer) 3
```


아래 코드는 회전하는 로직을 제대로 짰는지 확인할 때 쓰면 편하다.
```
3 3
0 0 0
0 1 0
0 0 0
ans) 7

3 3
0 0 0
0 2 0
0 0 0
ans)6

3 3
0 0 0
0 3 0
0 0 0
ans)6

3 3
0 0 0
0 4 0
0 0 0
ans)5

3 3
0 0 0
0 5 0
0 0 0
ans)4
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
