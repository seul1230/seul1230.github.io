---
layout: post
tags: [Computer Science]
title:  "Summary | 자료구조 Data Structure 정리"
date:   2024-04-05 12:00:09 +0900
description: <strong>[ 공부 & 정리 ]</strong><br/>자료구조<br/>- 리스트, 스택, 큐, 데크, 트리
categories: CS
---
# [ CS ] 자료구조 정리 | Data Structure Summary

CS 개념 중 자료구조를 공부하고 다음에 볼 수 있도록 한 페이지에 정리하고 있다. 참고한 도서나 페이지들은 밑에 첨부하였다. 더 자세한 내용을 공부하고 싶다면 아래 참고한 페이지를 보자!

<br/>

## 자료구조

자료구조는 컴퓨터 상 자료를 효율적으로 저장하기 위해 만들어진 논리적인 구조이다. 각 문제에 맞는 효율적인 알고리즘을 활용하여 성능을 높일 수 있다.

<br/>

자료구조는 크게 선형과 비선형 2가지로 나눌 수 있다.
- <code>선형</code>: 리스트, 스택, 큐, 데크
- <code>비선형</code>: 트리, 그래프

<br/>

### 📍 선형 구조

데이터를 연속적으로 연결한 자료 구조이다.

#### 1️⃣ 리스트

<strong>선형 리스트</strong><br/>
- 배열과 같이 연속되는 기억 장소에 저장되는 리스트
- 대표적인 구조 <code>배열</code>

- 😇 가장 간편한 자료구조. 접근이 빠르다
- 👿 자료 삽입, 삭제 시 기존 자료의 이동이 필요

<br/>

<strong>연결 리스트</strong><br/>
- 노드의 포인터로 연결시킨 리스트
  - <code>포인터</code>: 메모리 저장 공간을 가리키는 변수
- 😇 자료 삽입, 삭제가 편리
- 👿 포인터가 추가되어 메모리 공간 추가로 필요. 포인터를 통해 찾기 때문에 검색 시간 느림

<br/>

#### 2️⃣ 스택
스택은 한 방향으로만 자료를 넣고 꺼낼 수 있는 <code>LIFO</code> <font color='lightgray'>Last-In-First-Out</font> 형식의 자료구조이다. 

- push & pop
- Top은 스택에서 가장 위에 있는 데이터로, 스택 포인터라고도 불림

- <strong>스택 응용</strong>
  - <code>인터럽트 처리</code>: 현재 명령어 위치를 스택에 push, 인터럽트 처리 후 명령어 pop해서 받아옴
  - <code>함수 호출</code>: 현재 진행 중인 명령어 주소를 스택에 저장
  - <code>후위표현 연산</code>, <code>DFS</code>

<br/>

<p class='line-mark-gray'><strong>📥 push - 추가</strong></p>

  - 스택 포인터 Top 값 1 증가
  - Top이 가리키는 곳에 데이터 삽입
  - 스택에 추가할 공간이 없으면 오버플로


<p class='line-mark-gray'><strong> 📤 pop - 삭제</strong></p>
  - 스택 포인터 Top 값 1 감소
  - Top이 가리키는 곳의 데이터 삭제
  - 스택에 삭제할 데이터가 없으면 언더플로

<br/>

#### 3️⃣ 큐
큐는 한쪽 끝에서는 삽입, 다른 한쪽 끝에서는 삭제가 이루어지는 <code>FIFO</code> <font color='lightgray'>First-In-First-Out</font> 형식의 자료구조이다. 

- Enqueue & Dequeue
- 꺼내는 쪽에서 가장 가까운 데이터를 Front
- 넣는 쪽에서 가장 가까운 데이터를 Rear

<br/>

#### 4️⃣ 데크
데크는 큐의 양쪽 끝에서 삽입과 삭제를 할 수 있는 자료 구조이다. 

- 2개의 포인터를 사용하여, 양쪽의 삭제/삽입이 가능하다
- 데크를 이용해 스택과 큐의 구현이 가능하다

<br/>


### 📍 비선형 구조
데이터를 비연속적으로 연결한 자료 구조

#### 1️⃣ 트리
트리는 데이터를 계층화시킨 자료구조이다.

- 그래프의 특수한 형태로 노드와 선분으로 되어 있음
- 정점 사이에 사이클이 형성되어 있지 않음
- 자료 사이의 관계성이 계층 형식으로 나타나는 비선형 구조

- 인덱스를 조작하는 방법으로 가장 많이 사용하는 구조
- 배열과 달리 노드들이 포인터로 연결되어 노드의 상한선이 없다.

<br/>

<p class='line-mark-gray'><strong>🔁 트리 순회 방법</strong></p>

- <strong><code>전위 순회</code></strong>
  - root -> left -> right
- <strong><code>중위 순회</code></strong>
  - left -> root -> right
- <strong><code>후위 순회</code></strong>
  - left -> right -> root

<br/>

✅ Infix -> prefix, postfix로 변환하기 참고

<br/>

#### 2️⃣ 그래프
그래프는 Node와 Edge를 하나로 모아놓은 자료 구조이다. 
트리는 그래프의 특수 형태로, 사이클이 없는 그래프라고 생각하면 된다.

- DFS
- BFS

<br/>

#### 3️⃣ 트리와 그래프의 차이

<strong>📌 공통점</strong><br/>
두 자료형 모두 Node와 Edge로 구성되어 있다.


<strong>📌 차이점</strong><br/>
Tree의 경우 계층적 구조로 이루어져 있어 상하관계로 나타낼 수 있다.<br/>
Graph의 경우 edge로 연결된 두 노드 간에 동일한 입장을 가진다.<br/>

Tree는 root부터 leaf 노드까지 단방향으로 이어져 있어서 사이클을 형성하지 못 한다.<br/>
Graph는 edge가 양방향성을 가져 사이클을 형성할 수 있다.

<br/>



## Reference

- [수제비 2022 정보리기사 필기 책](https://m.yes24.com/Goods/Detail/115456412)