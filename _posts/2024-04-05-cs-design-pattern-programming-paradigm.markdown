---
layout: post
tags: [Computer Science]
title:  "Summary | 디자인 패턴 & 프로그래밍 패러다임 | Design Pattern & Programming Paradigm"
date:   2024-04-05 12:00:09 +0900
description: <strong>[ 공부 & 정리 ]</strong><br/>디자인 패턴 & 프로그래밍 패러다임<br/>Design Pattern & Programming Paradigm
categories: CS
---
# [ CS ] 디자인 패턴 & 프로그래밍 패러다임 개념 Summary

CS 개념 중 디자인 패턴 & 프로그래밍 패러다임을 공부하고 다음에 볼 수 있도록 한 페이지에 정리하고 있다. 참고한 도서나 페이지들은 밑에 첨부하였다. 더 자세한 내용을 공부하고 싶다면 아래 참고한 페이지를 보자!

### 1. 디자인 패턴 <font color='lightgray'>Design Pattern</font>

디자인 패턴은 프로그램을 설계할 때 발생했던 문제를 객체 간의 상호 관계 등을 이용하여 해결할 수 있도록 하나의 '규약' 형태로 만들어 놓은 것을 의미한다.
싱글톤, 팩토리, 전략, 옵저버, 프록시, 이터레이터, 노출모듈, MVC, MVP, MVVM 패턴 등이 있다.

나는 간단하게 싱글톤, 프록시, MVC 패턴에 관해서 정리했다.





#### 📌 싱글톤 패턴
싱글톤 패턴은 하나의 클래스에 하나의 인스턴스만 가진다.

<p>
<img src='/assets/img/cs_algorithm/singleton.png' width='60%'>
<figcaption><a href='https://refactoring.guru/ko/design-patterns/singleton'>싱글턴 패턴</a></figcaption>
</p>

하나의 클래스를 기반으로 여러 개의 개별적인 인스턴스를 만들 수 있지만, 그렇게 하지 않고 하나의 클래스를 기반으로 단 하나의 인스턴스를 만들어 이를 기반으로 로직을 만드는 데 쓰인다. 이 인스턴스에 대한 전역 접근​(액세스) 지점을 제공하는 생성 디자인 패턴이라고 할 수 있다. 



- 데이터베이스 연결 모듈에 많이 사용 (예: 몽고DB, MySQL)
- **의존성 주입** -> 모듈 간 강한 결합 느슨하게 만들어줌

- 😆 모듈을 쉽게 교체, 테스팅 쉬움
- 😢 클래스 늘어나 복잡성 증가, 모듈들 더욱 분리

<br/>

#### 📌 MVC 패턴
MVC 패턴은 모델/뷰/컨트롤러로 이루어진 디자인 패턴이다.

- <details><summary>[click] 애플리케이션의 구성 요소를 <font color='blue'>3가지 역할</font>로 구분</summary>
  <code>모델</code> : 애플리케이션의 데이터인 데이터베이스, 상수, 변수<br>
  <code>뷰</code> : 사용자 인터페이스 요소, 모델을 기반으로 사용자가 볼 수 있는 화면, 변경 발생 시 컨트롤러에 전달<br/>
  <code>컨트롤러</code> : 모델과 뷰를 잇는 다리 역할, 이벤트같은 메인 로직 담당, 모델과 뷰의 생명주기 관리, 모델이나 뷰의 변경 통지를 받으면 이를 해석하여 각각의 구성 요소에 해당 내용 알림<br/>


- 옵저버 패턴 사용됨
- 개발 프로세스에서 각각의 구성 요소만 집중해서 개발할 수 있음

- 😆 재사용성 & 확장성 용이
- 😢 복잡해질수록 모델-뷰 관계 복잡
- <font color='gray'>예) Spring</font>

<br/>

#### 📌 프록시 패턴
프록시 패턴은 대상 객체로 접근하기 전에 그 흐름을 가로채는 계층이 있는 디자인 패턴이다.

- 객체의 속성, 변환 등 보완
- 데이터 검증, 캐싱, 로깅에 사용됨

<br/>

##### ➕ ) 프록시 서버
<hr/>
서버와 클라이언트 사이에서 다른 네트워크 서비스에 간접적으로 접속할 수 있게 해주는 컴퓨터 시스템이나 응용 프로그램

- 버퍼 오버플로우를 방지하거나
- 웹 서버 앞단에서 디도스 공격 방어/HTTPS 구축에 쓰임

<br/>

### 2. 프로그래밍 패러다임 <font color='lightgray'>Programming Paradigm</font>

- 선언형 : What을 풀어내는가
    - 함수형 프로그래밍

- 명령형
    - 객체지향 프로그래밍
    - 절차지향형
<br/>

#### 객체지향 프로그래밍
객체들의 집합 -> 프로그램의 상호 작용 표현. 데이터를 객체로 취급하여 객체 내부에 선언된 메서드 활용

- SOLID 원칙
    - S: 단일 책임, O: 개방-폐쇄, L: 리스코프 치환, I: 인터페이스 분리, D: 의존 역전

- 😆 코드 재사용 용이, 유지보수 쉬움, 대형 프로젝트 적합
- 😢 처리속도 상대적으로 느림, 용량 문제 발생 가능, 설계시 오래 걸림

<br/>

#### 절차형 프로그래밍
로직이 수행되어야 할 연속적인 계산 과정으로 이루어짐

- 😆 코드의 가독성이 좋음. 실행 속도가 빠름 -> 계산 많은 작업에 쓰임
- 😢 모듈화하기 어렵고 유지 보수성이 떨어짐

<br/>

### Reference

- <a href='https://gyoogle.dev/blog/'>Github | Tech Interview for developer</a>
- <a href='https://search.shopping.naver.com/book/catalog/32478035848?cat_id=50010920&frm=PBOKMOD&query=%EB%A9%B4%EC%A0%91%EC%9D%84+%EC%9C%84%ED%95%9C+CS+%EC%A0%84%EA%B3%B5%EC%A7%80%EC%8B%9D+%EB%85%B8%ED%8A%B8&NaPm=ct%3Dludml5mg%7Cci%3D8eed0626498340559f74403a9499a0751cfa7c8b%7Ctr%3Dboknx%7Csn%3D95694%7Chk%3D0b890457c2551c5575ab5fde2ca31121551119b2'>책 | 면접을 위한 CS 전공지식 노트</a>