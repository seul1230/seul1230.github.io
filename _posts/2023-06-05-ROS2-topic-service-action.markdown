---
layout: post
title:  "Summary | ROS2 II"
date:   2023-06-06 01:00:09 +0900
categories: IT_trend
tags: [ROS2, topic, service, action]
---
# [ ROS2 ] ROS 기초 II (Topic, Service, Action)

[이전 포스트](https://seul1230.github.io/it_trend/2023-06-05-ROS2-node-package/)의 내용에서는 Node와 Package에 대해 다루었다. Node와 Package이 무엇인지 궁금하다면 해당 포스트를 방문하기 바란다. 본 포스트에서는 메시지 통신 방식 **Topic, Service, Action**에 대해 알아보자. 

<br>

## Topic 

<h3 class='line-mark-blue'>ROS2 Topic</h3>

ROS2에서는 모듈식 노드를 많이 분할함으로써 복잡한 시스템을 만들 수 있다. 이때 Topic이 **Node 사이에 데이터 <font color='lightgray'>Message</font>가 오가는 길 <font color='lightgray'>Bus</font> 역할**을 한다. 

정리하자면, Topic은 **<mark style='background-color: #fff5b1'>비동기식 단방향</mark> 메시지 송수신 방식**으로 동작한다. 이는 msg 인터페이스 형태의 메시지를 송신하는 publisher와 메시지를 수신하는 subscriber로 이루어져 있다. 공식문서에 게시된 다음의 gif를 통해 Topic이 어떻게 동작하는지 알아보자. 

<p align='center'><img src='/assets/img/ros/Topic-MultiplePublisherandMultipleSubscriber.gif' width='90%'><figcaption><a href='https://docs.ros.org/en/foxy/Tutorials/Beginner-CLI-Tools/Understanding-ROS2-Topics/Understanding-ROS2-Topics.html'>Understanding topics</a></figcaption></p>

Topic은 **여러 Node**에서 데이터를 받을 수 있고, **여러 Node**에게 데이터 전송도 가능하다.

이러한 점 때문일까? ROS 프로그래밍의 70% 이상이 Topic으로 이루어져 있다고 한다. 그만큼 메시지 통신 방식 중 가장 기본적이고 가장 널리 사용된다. 또한, **<mark style='background-color: #fff5b1'>비동기성</mark>**이며 **<mark style='background-color: #fff5b1'>연속성</mark>**이라는 성질을 가지고 있어 **센서 값 전송 및 항시 정보를 주고받아야 하는 부분**에서 주로 사용된다.

Topic을 만들 수 있는 다른 명령어들은 다음 기회에 정리하겠다. 

<br>

## Service

<h3 class='line-mark-blue'>ROS2 Service</h3>

Service는 **<mark style='background-color: #fff5b1'>동기식 양방향</mark> 메시지 송수신 방식**으로 동작한다. 모터 on/off, 순간적 회피 기동, 파라미터 service 등 **<mark style='background-color: #fff5b1'>단발적</mark>이고 <mark style='background-color: #fff5b1'>빠른 통신</mark>이 요구될 때** 많이 사용되는 메시지 통신 기법이다. 

서비스를 요청하는 <code>Service Client</code>와 요청받은 서비스를 수행한 후 응답하는 <code>Service Server</code>로 이루어져 있다. 

<p align='center'><img src='/assets/img/ros/Service-MultipleServiceClient.gif' width='90%'><figcaption><a href='https://docs.ros.org/en/foxy/Tutorials/Beginner-CLI-Tools/Understanding-ROS2-Topics/Understanding-ROS2-Services.html'>Understanding services</a></figcaption></p>

위의 gif를 보면 알 수 있듯이, 하나의 **Service Server**에는 여러 Client Node가 <code>request</code>할 수 있지만 **Server**는 동시에 여러 <code>request</code>를 처리하지는 못한다는 것을 기억해야 한다. 

<br>

## Topic과 Service

<h3 class='line-mark-blue'>둘의 차이점?</h3>

Topic과 Service는 언뜻 보면 비슷해 보이지만 다르다.

Topic은 <code>Publish</code>하면 여러 Node가 <code>Subscribe</code> 가능한 반면, Service는 <code>request</code>가 온 대상에만 <code>response</code>를 주는 1:1의 통신 기법을 가지고 있다고 할 수 있다. 
또, Topic은 대부분 **<mark style='background-color: #fff5b1'>지속적</mark>**으로 publish를 진행할 수 있지만 Service는 **<mark style='background-color: #fff5b1'>단발성</mark>**에 가깝다는 점도 차이점으로 들 수 있다. 


- 분명한 요청의 주체가 존재, 빠르게 동작 완료되는 경우 ➡️ **Service**
- 불특정한 Node가 subscribe의 대상이 되며, 지속적으로 데이터 송수신 일어나는 경우 ➡️ **Topic**

<br>

## Action
<h3 class='line-mark-blue'>Action의 특징</h3>

Action Client는 Action Server가 <code>response</code>를 보내기 전까지 계속 기다리지 않고, 다른 일을 할 수 있다. 또한 Action Client는 <code>request</code> 보낸 뒤에도 지속적으로 <code>feedback</code>을 받을 수 있다. 이때, feedback을 받다고 뭔가가 잘못 돌아가고 있다는 것을 감지한 경우엔 <code>cancel</code>할 수도 있다. 

여러 <code>request</code>를 동시에 작업하는 건 본질적으로 불가하지만 프로그래밍적으로 해결이 가능하다는 특징을 가지고 있다. 

<h3 class='line-mark-blue'>Action의 예시</h3>

<p align='center'><strong>"Action = 내비게이션 ?"</strong></p>

Action은 내비게이션의 작동 원리와 상당히 유사하다. 

목적지 <code>request</code> 받고, 경로검색을 마치면 안내가 시작된다. 운전 도중에도 도로 상황을 고려한 <code>feedback</code>을 계속해서 제공받는다. 목적지에 도착하면 경로 안내를 종료하고 다음 <code>request</code> 대기한다. 

➡️ 실제로 ROS2의 자율 주행 <code>Nav2</code> 프로젝트에서 Action을 적극 활용하고 있다고 한다.


<br>

## Next Post..
[다음 포스트](https://seul1230.github.io/it_trend/2023-06-05-ROS2-DDS-QoS/)는 DDS와 QoS에 대해 정리할 예정이다. 