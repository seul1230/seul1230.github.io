---
layout: post
title:  "Algorithm study"
date:   2023-05-26 12:00:09 +0900
categories: CS
---
# [ Algorithm ] 완전탐색 Brute-Force 

코딩 테스트를 준비하면서 보다 탄탄한 기초를 위해 공부한 알고리즘을 하나씩 정리해보고자 한다. 

본 포스트는 **완전탐색**에 대해 정리한 내용이다.


## 완전탐색 <font color='lightgray'>Brute-Force / Exhaustive search</font>

완전탐색은 영어로 Brute-Force / Exhaustive search 라고 하고, 말 그대로 **모든 경우의 수**를 시도하는 방법이다. 완전탐색은 다음과 같은 경우에 자주 쓰인다.
* 구현이 간단하고, 해가 존재하면 항상 찾음
* **🔥 입력 값의 범위가 작은 경우**

모든 경우의 수를 돌기 때문에 그만큼 경우의 수가 많아지면 시간을 많이 소요한다는 단점이 있기 때문에 주의해야 한다. 이에 해당하는 알고리즘으로 **BFS**, **DFS**, **비트마스크**에 대해 정리하였다.

<!-- ## CNN의 디자인 패턴 -->
<h3 class='line-mark-pink'>완전탐색 : BFS</h3>

**너비 우선 탐색 <font color='lightgray'> BFS, Breadth-First Search</font>** 이란 루트 노드에서 시작해 **인접한 노드**를 먼저 탐색하는 방법을 말한다. 뒤에서 DFS 할 때도 나오겠지만, 이 두 알고리즘은 특히 **✅ <font color='darkgreen'>어떤 노드를 방문했는지</font>** 기억해야 한다. 이 부분이 빠진다면 무한루프에 빠질 위험이 있다. 


<p align='center'><img src='/assets/img/Algorithm/bfs.gif' width='50%'><figcaption><a href='https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2Fanalytics-vidhya%2Fa-quick-explanation-of-dfs-bfs-depth-first-search-breadth-first-search-b9ef4caf952c&psig=AOvVaw1oaFOzbhqkE3FOMTbnSL_X&ust=1685158478413000&source=images&cd=vfe&ved=0CBIQjhxqFwoTCLj769WGkv8CFQAAAAAdAAAAABAW'>출처 : A quick explanation of DFS & BFS (Depth First Search & Breadth-First Search)</a></figcaption></p>

BFS 같은 경우는 방문한 노드를 차례로 in-out 할 수 있어야하기 때문에 **FIFO <font color='lightgray'>First-In First-Out</font> 큐**를 사용한다. 해당 알고리즘은 두 노드 사이의 **<font color='darkred'>최단 경로</font>**를 찾거나 **<font color='darkred'>임의의 경로</font>**를 찾을 때 효과적으로 쓰인다.

간단한 예를 들어 이를 파이썬으로 구현해보자.

<p class='callout'><strong>[문제]</strong>
X로부터 출발하여 도달할 수 있는 도시 중에서, 최단 거리가 K인 모든 도시의 번호를 한 줄에 하나씩 오름차순으로 출력해라. 이 때 도달할 수 있는 도시 중에서, 최단 거리가 K인 도시가 하나도 존재하지 않으면 -1을 출력한다.<figcaption><a href='https://www.acmicpc.net/problem/18352'>[BOJ] 18352. 특정 거리의 도시 찾기</a></figcaption></p> 


```python
import sys
from collections import deque

def bfs(graph, start, route):
  queue = deque(start)
  while queue:
    now = queue.popleft()
    for node in graph[now]:
      # if not visited
      if route[node] == -1:
        route[node] + route[now] + 1
        queue.append(node)
  return

city, road, distance, start = map(int, sys.stdin.readline().split())

route = [-1] * (city + 1)
route[start] = 0

graph = [[] for _ in range(city+1)]

# directed graph
for _ in range(road):
  a, b = map(int, sys.stdin.readline().split())
  graph[a].append(b)

bfs(graph, start, route)

# if answer distance K exist
if route.count(distance):
  for i in range(1, city+1):
    if route[i] == distance:
      print(i)
else:
  print(-1)
```


<h3 class='line-mark-pink'>완전탐색 : DFS</h3>

**깊이 우선 탐색 <font color='lightgray'> DFS, Depth-First Search</font>** 이란 루트 노드에서 시작해서 다음 브랜치로 넘어가기 전에 **해당 브랜치**를 **끝까지 탐색**하고 넘어가는 방법을 말한다. 


<p align='center'><img src='/assets/img/Algorithm/dfs.gif' width='50%'><figcaption><a href='https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2Fanalytics-vidhya%2Fa-quick-explanation-of-dfs-bfs-depth-first-search-breadth-first-search-b9ef4caf952c&psig=AOvVaw1oaFOzbhqkE3FOMTbnSL_X&ust=1685158478413000&source=images&cd=vfe&ved=0CBIQjhxqFwoTCLj769WGkv8CFQAAAAAdAAAAABAW'>출처 : A quick explanation of DFS & BFS (Depth First Search & Breadth-First Search)</a></figcaption></p>

DFS는 재귀로 구현이 가능하며, BFS와 마찬가지로 **✅ <font color='darkgreen'>어떤 노드를 방문했는지</font>** 체크해줘야 한다. BFS보다 **구현이 간단하다**는 장점이 있지만, **단순 검색 속도는 상대적으로 느리다는** 단점을 가지고 있다. DFS는 **<font color='darkred'>모든 노드</font>를 방문**할 때 주로 사용한다. 

이번에도 간단한 예를 들어 파이썬으로 구현해보겠다.
<p class='callout'><strong>[문제]</strong>
숫자 N과 number가 주어질 때, N과 사칙연산만 사용해서 표현 할 수 있는 방법 중 N 사용횟수의 최솟값을 return 하도록 solution 함수를 작성하세요. 
(1<= N <=9, 1<= number <=32000)

<strong>[예시]</strong> N = 5, number = 12
12 = 5 + 5 + (5 / 5) + (5 / 5)
12 = 55 / 5 + 5 / 5
12 = (55 + 5) / 5

➡️ <strong>answer = 4</strong>
<figcaption><a href='https://school.programmers.co.kr/learn/courses/30/lessons/42895'>[프로그래머스] N으로 표현</a></figcaption></p>


```python
def solution (N, number):
  answer = 0

  # set : 중복 처리, in 탐색 유리
  calc = [set() for i in range(9)]

  # N < 8
  for i in range(1, 9):
    # possible number
    # small << big
    calc[i].add(int(str(N)*i))

    for j in range(i//2 + 1):
      # first, second for calculation (first < second)
      for first in calc[j]:
        for second in calc[i-j]:
          calc[j].add(first + second)
          calc[j].add(first - second)
          calc[j].add(second - first)
          calc[j].add(first * second)

          if first != 0:
            calc[j].add(second / first)
          if second != 0:
            calc[j].add(first / second)
    
    # find the minimum Ns
    if number in calc[j]:
      return i

  # 최솟값 > 8 : -1 반환
  return -1
```



<h3 class='line-mark-pink'>완전탐색 : 비트마스크</h3>

#### Q. 왜 비트마스크를 사용할까?
* DP, 순열, 배열 활용만으로 해결할 수 없는 문제를 해결하기 위해
* 적은 메모리 사용량
* 빠른 수행시간
* 집합을 배열의 인덱스로 표현할 수 있음

설명만으로는 감이 잘 오지 않으니, 아래 문제를 비트마스크로 접근해보자.

<p class='callout'><strong>[문제]</strong>
비어있는 공집합 S가 주어졌을 때, 아래 연산을 수행하는 프로그램을 작성하시오. 
(1 ≤ x ≤ 20)<br/>

* <strong>add x</strong>: S에 x를 추가한다. S에 x가 이미 있는 경우에는 연산을 무시한다.<br/>
* <strong>remove x</strong>: S에서 x를 제거한다. S에 x가 없는 경우에는 연산을 무시한다.<br/>
* <strong>check x</strong>: S에 x가 있으면 1을, 없으면 0을 출력한다. <br/>
* <strong>toggle x</strong>: S에 x가 있으면 x를 제거하고, 없으면 x를 추가한다.<br/>
* <strong>all</strong>: S를 {1, 2, ..., 20} 으로 바꾼다.<br/>
* <strong>empty</strong>: S를 공집합으로 바꾼다.
<figcaption><a href='https://www.acmicpc.net/problem/11723'>[BOJ] 11723. 집합</a></figcaption></p>

```python
import sys

m = int(sys.stdin.readline())
s = 0b0 

for _ in range(m):
  order = sys.stdin.readline()
  try:
    command, num = order.split()
    num = int(num)

    if com == 'add':
      s = s | (0b1 << num)
    elif com == 'remove':
      s = s & ~(0b1 << num)
    elif com == 'check':
      
```