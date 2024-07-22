---
layout: post
title:  "[ 자바 ] 인터페이스(Interface) vs 추상클래스(abstract class) 비교 정리!"
description: <font color="lightgray">내가 공부하다 헷갈려서 정리하는 자바</font><br/>📌 인터페이스 vs 추상클래스 뭐가 다르고 언제 쓸까?
categories: 
date:  2024-07-22 15:00:10 +0900
# style: fill
color: info
tags: [Java]
---
# [ 자바 ] 인터페이스(Interface) vs 추상클래스(abstract class) 비교 정리! 

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

## 📌 정리 <font color='lightgray'>---------</font>

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

## 참고 <font color='lightgray'>---------</font>

- [ ☕ 인터페이스 vs 추상클래스 용도 차이점 - 완벽 이해 ](https://inpa.tistory.com/entry/JAVA-%E2%98%95-%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4-vs-%EC%B6%94%EC%83%81%ED%81%B4%EB%9E%98%EC%8A%A4-%EC%B0%A8%EC%9D%B4%EC%A0%90-%EC%99%84%EB%B2%BD-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)
- [ Abstract Class(추상 클래스)와 Interface(인터페이스)의 차이 ](https://2jinishappy.tistory.com/281)

<br/><br/><br/>


