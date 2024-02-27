---
layout: post
title:  "Summary | ROS2 I (Node, Package)"
date:   2023-06-05 21:00:09 +0900
description: ROS 기초 I (Node, Package)
style: border
color: info
# categories: IT_trend
tags: [ROS2, node, package]
---
# [ ROS2 ] ROS 기초 I (Node, Package)

최근 '딥러닝시스템'이란 과목을 수강하면서 간단한 텀프로젝트를 진행하고 있다. 

해당 프로젝트는 NVDIA Jestson Nano 보드를 이용하여 **Objection Detection** 하는 것이 목표이며, 본 포스트는 프로젝트 진행에 있어 보다 높은 이해를 위해 정리하는 목적으로 작성되었다. 

## ROS <font color='lightgray'>Robot Operating System</font>

<h3 class='line-mark-blue'>ROS란?</h3>

<br>

<p align='center' font-size='120%'><strong>"로보틱스 소프트웨어 개발을 
전 세계 레벨에서 공통 작업이 가능하도록 하는 환경을 구축하자!"</strong>
</p>

<br>

ROS는 **로봇 공학 애플리케이션을 위한 오픈 소스 소프트웨어 개발 킷** (SDK)으로, 로봇을 개발하는 과정에서 기능의 구현, 하드웨어의 통제 등을 위해 사용된다. 이는 연구에서 배포 및 생산에 이르기까지 모든 산업 분야의 개발자에게 **<mark style='background-color: #fff5b1'>표준 소프트웨어 플랫폼</mark>**을 제공하는 것을 목적으로 만들어졌다. 

#### [ ROS의 예시 ]
- **서빙 로봇** (KT AO Robot, 애슐리퀸즈 등)
  - 호출 및 지정 테이블 목적지 지정
  - 목적지까지 자율 주행 및 장애물 회피
  - 음식 서빙 및 식기 회수 후 복귀 및 반복
- **베달 로봇** (배민로봇 딜리)
  - 음식 픽업 및 배달지 지정
  - 목적지까지 자율주행 및 장애물 회피
  - 배달 완료 후 다시 반복
- **바리스타 로봇** (성수동 카페 Cafe.bot)
  - 고객의 주문 접수
  - 집게 손을 이용해 Pick & Place
  - 가판대에 내려둔 뒤 다시 반복


<h3 class='line-mark-blue'>ROS의 특징</h3>

ROS는 로보틱스 연구 및 개발 과정에서 코드를 **Package화**하여 **<mark style='background-color: #fff5b1'>재사용을 극대화</mark>**하는 것에 초점을 맞춘 SDK이다. 이를 위해 Node 단위의 분산 프로세스, 공유 및 재배포를 쉽게 하기 위한 Package 단위 관리, 다양한 프로그래밍 언어 지원 기능 등을 갖추었다. 

- **다양한 운영체제 지원** (Linux, Mac OS, Window 등)
- **다양한 프로그래밍 언어 지원** (Python, C 등)
- **Package 지향으로 인한 높은 재사용성**
- **활발한 커뮤니티 교류**
- **오픈 소스**

<br>

## 임베디드 보드 <font color='lightgray'>Embedded Board</font>

이번 프로젝트에서 내가 사용하는 임베디드 보드는 NVDIA에서 나온 Jetson Nano 보드이다. 임베디드 보드란 뭘까?

<p align='center'><img src='/assets/img/ros/jetson_nano.jpeg' width='70%'><figcaption><a href='https://www.nvidia.com/ko-kr/autonomous-machines/embedded-systems/jetson-nano/product-development/'>Jetson Nano</a></figcaption></p>

**임베디드 보드**는 로봇 개발에 사용되는 대표적인 HW이다. **PC 이외의 장비에 사용되는 칩이 내장된 PCB 등의 메인보드**를 말하는데, 다음과 같이 불리기도 한다.

- **Single Board**
  - CPU, 램 등의 PC의 기본적 부품이 한 보드에 내장된 형태의 메인보드
- **Development Board**
  - 센서와 구동계 등을 연결하고 코딩을 하는 등의 특정 시스템 개발을 목적으로 만든 메인보드

<br>

## Node와 Package
<h3 class='line-mark-blue'>Node란?</h3>

**Node**는 **<mark style='background-color: #fff5b1'>실행 가능한 최소 단위의 프로세서</mark>**를 말한다. 

로봇 개발을 위해서는 로봇을 구성하는 **여러 센서들**과 이 센서들을 통해 얻은 **센서 데이터**를 바탕으로 **지속적으로 판단하고 동작**하는 시스템이 필요하다. 그래서 필요한 게 Node.

<p align='center'><img src='/assets/img/ros/Nodes-TopicandService.gif' width='90%'><figcaption><a href='https://docs.ros.org/en/foxy/Tutorials/Beginner-CLI-Tools/Understanding-ROS2-Nodes/Understanding-ROS2-Nodes.html'>Understanding nodes</a></figcaption></p>


각 노드의 역할을 목적에 맞게 세분화시켜서 각 노드들 간의 의존성을 줄이고 독립성을 높여서 다른 목적의 작업에서도 일부 노드를 재사용할 수 있다.

### +) Topic, Service, Action
뒤에서 다룰 예정이지만 간단하게 짚고 넘어가자.<br/>
Node들 사이에 Topic, Service, Action, Parameter를 통해 다른 노드로 데이터를 주고 받을 수 있다. 


<h3 class='line-mark-blue'>Package란?</h3>

Package는 ROS를 구성하는 기본 단위이자 개발 단위이다. 

**하나 이상의 Node**를 포함하고 있으며, 다른 패키지의 Node를 실행하기 위한 설정 파일, 프로세스를 실행할 수 있는 **ROS 의존성 라이브러리** 등을 가진다. Package는 다음과 같이 바라볼 수 있다. 

- **파일** 관점
  - 관련된 라이브러리, 모델링 파일, 설정 파일을 모아둔 폴더
- **기능** 관점
  - 시뮬레이션, HW 관련, 모델링, 원격 조종 등으로 분리시킨 모듈

또, <code>colcon build</code>가 수행되는 빌드의 단위이기도 하다.


<h3 class='line-mark-blue'>Package 만들기 : ament</h3>

```bash
$ ros2 pkg create --build-type ament-type ament_python <pkg_name> --dependencies rclpy <dependency>
```

위의 코드를 실행하면 빌드를 위한 기본 파일 구조를 만들 수 있다. <code>colcon build</code>를 통해 빌드하고, 검사 후 build 폴더로 바로가기를 생성한다.


<h3 class='line-mark-blue'>Node, Package 관련 명령어</h3>

#### Node의 실행

```bash
$ ros2 run <node_name>
```
#### 실행 중 Node들의 리스트 확인

```bash
$ ros2 node list
```
#### 특정 Node 정보 살펴보기

```bash
$ ros2 node info <node_name>
```
#### 사용가능 Package 리스트 확인

```bash
$ ros2 pkg list
```

#### 사용하고 싶은 패키지에서 사용가능한 Node 확인

```bash
$ ros2 pkg executables <package_name>
```




<br>

## Next Post..
[다음 포스트](https://seul1230.github.io/it_trend/2023-06-06-ROS2-topic-service-action/)에서는 Topic, Service, Action에 대해 정리할 예정이다. 