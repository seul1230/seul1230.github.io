---
layout: post
title:  "RL | 강화학습이란?"
description: <font color="lightgray">내가 쉽게 기억하려고 쓰는 강화학습 정리</font><br/>📌 강화학습의 개념은 정확히 무엇일까?
categories: 
date:  2024-10-18 09:00:10 +0900
# style: fill
published: false
use_math: true
color: info
tags: [RL]
---
# RL | 강화학습이란?

> 강화학습 = 알파고?

강화학습의 개념은 간단하면서도 이해하지 않으면 어렵게 느껴지기 쉽다. 그래서 쉬운 용어로 개념을 정리해보고자 글을 쓴다.

<br/><br/>

## 강화학습이란

<pre class="callout">
머신러닝의 한 종류로 어떠한 환경(environment)에서 어떤 행동(action)을 했을 때 그것이 잘 된 행동인지 잘못된 행동인지를
나중에 판단하고 보상/벌칙을 줌으로써 반복을 통해 스스로 학습하게 하는 학습 분야
</pre>

쉽게 말하자면, 주체가 어떤 상황에서 어떤 행동을 취했을 때의 결과를 기록해뒀다가 이를 반복을 통해서 스스로 최적의 결과를 찾을 수 있게 하는 것이다. 여기서 몇 가지 의문점이 떠오를 수 있다. 도움이 되는 행동인지 아닌지를 왜 나중에 판단하는 것일까? 환경이란 뭘까? 어떻게 작동하는지 더 자세히 알아보면서 이 질문들을 해결해보도록 하자.

<br/>

### How it works?

- `Agent(주체)` : 특정 환경에서 행동을 결정함
- `Environment(환경)` : 그 결정에 대한 보상을 내림
  - 보상은 즉시 결정되기 보다 여러 행동을 취한 후에 한꺼번에 결정되는 경우가 많음
  - 특정 행동을 취했을 때 바로 그 행동에 대한 평가를 내릴 수 없는 경우가 많기 때문 (연쇄적)

스스로 학습하는 과정에서 주로 딥러닝에서 다룬 인공 신경망을 사용하여 환경과 에이전트의 상태 등을 입력받아 인공 신경망이 행동을 결정하고, 보상이 있으면 이전 입력값과 행동들을 긍정적으로 학습한다.

<br/><br/>

## 강화학습의 원리 - 마르코프 의사 결정 과정

> Markov Decision Process (MDP)

강화학습 시스템 개발에 있어 MDP에 대해 이해하는 것은 중요하다. 바로 강화학습이 마르코프 의사 결정 과정(MDP)에 학습의 개념을 넣은 것이기 때문이지!

<br/>

### 마르코프 가정 <font color='lightgray'>Markov Assumption</font>

마르코프 의사 과정을 들어가기 앞서 마르코프 가정에 대해서 알아야 한다.

> 마르코프 가정이란?

<strong>상태가 연속적인 시간에 따라 이어질 때 어떠한 시점의 상태는 그 시점 바로 이전의 상태에만 영향을 받는다</strong>는 가정이다. 실제로 마르코프 가정으로 어려운 문제를 단순화하고 만족스러운 결과를 얻는 경우가 많다고 한다. 알고리즘을 공부했던 사람이라면 모를 수 없는 동적 프로그래밍이 이와 비슷한 개념이라고 생각하면 이해하기 좋을 것 같다.


> 마르코프 가정 수식 <br/>
$$P(S_t | S_1,S_2,...,S_{t-1})=P(S_t|S_{t-1})$$


- 좌변
  - 어떠한 시점 $t$에서의 상태 $S_{t}$는 최초의 상태 $S_1$에서 바로 이전의 상태 $S_{t-1}$까지에 영향을 받는다.
  - 연속적으로 존재하며 일어나는 일련의 상태를 표현
  - 실제로 계산하는 건 어려움
- 우변
  - 연쇄적으로 모든 이전 상태가 반영된다고 가정하는 마르코프 가정을 적용하면 이처럼 단순화할 수 있다.


<br/>

### 마르코프 의사 결정 과정

마르코프 의사 결정 과정 MDP는 마르코프 가정을 기반으로 한 의사 결정 모델이다.

> 마르코프 의사 결정
$$MDP=(S, A, P, R, \gamma)$$

MDP는 상태 집합 $S$, 행동 집합 $A$, 상태 전이 확률 $P$, 보상 함수 $R$, 할인 요인 $\gamma$으로 구성되어 있다.




<br/><br/>



<br/><br/>



<br/><br/>


> 🌱 자바 공부를 시작한지도 일주일이 지났다!

인터페이스와 추상 클래스를 배웠는데 지나고 나니 둘이 비슷하게 느껴져서 각자 사용하는 목적과 차이를 제대로 짚고 넘어가고자 한다.

## 인터페이스 vs 추상클래스 한눈에 비교

<div class="table-responsive">
    <table class="table align-middle table-hover w-100 d-block d-md-table">
    <thead>
        <tr>
            <th style="background-color: gray"></th>
            <th style="background-color: gray">추상 클래스 (abstract class)</th>
            <th style="background-color: gray">인터페이스 (interface)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>사용 가능한 변수</td>
            <td>제한 없음</td>
            <td>static final</td>
        </tr>
        <tr>
            <td>접근 제한자</td>
            <td>제한 없음</td>
            <td>public</td>
        </tr>
        <tr>
            <td>메소드</td>
            <td>제한 없음</td>
            <td>abstract, default, static, private</td>
        </tr>
        <tr>
            <td>상속 키워드</td>
            <td>extends</td>
            <td>implements</td>
        </tr>
        <tr>
            <td>다중 상속 가능</td>
            <td>X</td>
            <td>O</td>
        </tr>
        <tr>
            <td>공통점</td>
            <td colspan="2">
                1. 추상 메서드 <font color="lightgray">(클래스에 구현부가 없는 메서드가 있음)</font> <br/>
                2. 객체를 생성할 수 없다 (인스턴스화 x)<br/>
                3. 구현/상속 받은 클래스는 반드시 추상 메서드를 구현해야 한다.<br/>
            </td>
        </tr>
    </tbody>
    </table>
</div>

<br/><br/>

### 인터페이스 <font color='lightgray'>interface</font>

- 모든 멤버변수는 <code>public static final</code>이며 생략 가능하다.
- 모든 메서드는 <code>public abstract</code>이며 생략 가능하다.
- 상속에 얽매이지 않고 공통 기능이 필요할 때마다 추상 메서드 정의 - 구현
  - 추상 클래스보다 더 자유롭게 붙였다 뗐다 할 수 있다
- `has a` 관계일 때 (포함)
- 클래스와 별도로, <strong>객체가 같은 동작을 한다</strong>는 것을 보장하기 위해 사용!

```java
// 다중 구현 지원
public class Customer implements Buy, Sell
```


<br/><br/>

### 추상 클래스 <font color='lightgray'>abstract class</font>

- 하위 클래스의 공통점을 모아 추상화한 클래스
- 추상 메서드를 통해 중복되는 클래스 멤버들을 통합 및 확장 가능
- `is a` 관계일 때 (상속)
- 인터페이스와 달리, 추상 클래스는 <strong>클래스 간 연관관계를 구축</strong>하기 위해 사용!

```java
// 단일 상속만 허용
public class Customer extends Person
```

<br/><br/>

## 📌 정리 & 활용 <font color='lightgray'>---------</font>

인터페이스와 추상 클래스 (abstract) 모두 <strong>추상 메서드를 통해 구현/상속을 통한 메서드 강제 구현</strong> 규칙을 가지는 추상화 클래스이다.

- <code>인터페이스</code> : `implements`
  - 인터페이스에 정의된 메서드를 각 클래스 목적에 맞게 기능 구현
  - 추상클래스에서는 못하는 다중 구현을 통한 추상화 설계를 해야할 때 쓰임
  - 구현 객체가 같은 동작을 한다는 것을 보장!
- <code>추상클래스</code> : `extends`
  - 자신의 기능을 하위 클래스로 확장시키자
  - 상수만 정의할 수 있는 인터페이스와 달리 추상 클래스 중복 멤버 통합이 가능하다
  - 클래스 간 연관관계를 구축

<br/>

### 💻 코드로 이해하기

```java
abstract class Creature {}

abstract class Animal extends Creature {}
abstract class Fish extends Creature {}

interface Swim {
    void Swimming();
}
interface Walk {
    void Walk();
}

// 마커 인터페이스 : 단순 타입 체크용 (Serializable, Cloneable, ...)
interface Breedable {}

class Cat extends Animal implements Breedable{
    @Override
    public void Walk(){...}

    public static void child(Cat a){
        if (a instanceof Cat) {
            System.out.println("새끼");
        } else {
            System.out.println("알");
        }
    }
}
class Person extends Animal implements Swim {
    @Override
    public void Swimming(){...}

    @Override
    public void Walk(){...}
}

class Whale extends Fish implements Swim {
    @Override
    public void Swimming(){...}
}
```

<br/><br/>

## 참고

- [ ☕ 인터페이스 vs 추상클래스 용도 차이점 - 완벽 이해 ](https://inpa.tistory.com/entry/JAVA-%E2%98%95-%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4-vs-%EC%B6%94%EC%83%81%ED%81%B4%EB%9E%98%EC%8A%A4-%EC%B0%A8%EC%9D%B4%EC%A0%90-%EC%99%84%EB%B2%BD-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)
- [ Abstract Class(추상 클래스)와 Interface(인터페이스)의 차이 ](https://2jinishappy.tistory.com/281)

<br/><br/><br/>


