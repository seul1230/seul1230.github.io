---
layout: post
title:  "Cloud Week 1"
date:   2023-02-04 17:50:09 +0900
categories: Data_AI
---
# [ Cloud ] TCP/IP 네트워크 ( OSI 7 Layer, TCP/IP Protocal Suite )


본 포스트는 하나 금융과 함께 하는 연구 프로젝트 전에 받게 되는 교육을 받고 스스로 공부한 내용을 정리한 것이다. 컴퓨터 네트워크 기초에 관한 내용은 [이전 포스트](https://seul1230.github.io/data_ai/2023-02-02-Cloud-Week1-part2/)에 가볍게 정리해놓았으니 한 번 읽어봐도 좋을 것 같다. 

## 표준 프로토콜
네트워크 상에서 통신이 이루어지기 위해서는 모든 시스템 간에 알맞은 프로토콜이 필요하다. 

네트워크 표준 모델이 없던 과거에는 자신들의 장비끼리 통신이 되도록 만들다 보니 벤더가 서로 다르면 호환성 문제가 발생했다. 
이 때문에 서로 연결하여 안정된 방법을 개발하기 위해 네트워킹 표준의 필요성이 제기되었고, 결국 1947년 ISO <font color='lightgray'>International Organization for Standardization</font> 국제 표준 기구가 탄생하게 되었다. 이 ISO 기구가 모든 종류의 컴퓨터 시스템 간 통신을 가능하도록 네트워크 시스템 설계를 위해 제안한 모델이 이제 네트워크를 공부하는 사람이라면 모를 수 없는 **OSI 7계층** 이다.


OSI 7계층은 네트워크 표준 모델로 알려져 있지만, 실제로 현재 쓰이고 있지는 않은 개념적 모델이다. 이와 함께 알아두면 좋은 모델이 바로 **DoD <font color='lightgray'>Department of Defence</font>** 이다. 이 모델은 TCP/IP 를 개발한 미 국방성 <font color='lightgray'>DARPA</font> 에서 만든 4계층 프로토콜이다. 

<p align='center'>
<img src='/assets/img/2023_cloud/osi_dod_seul.png' width='50%'>
</p>


TCP/IP protocol suite 는 OSI 모델이 나오기 전에 개발되어 
TCP/IP 개발자는 구조를 설명하기 위해 OSI 모델을 사용하지 않았고, 그래서 OSI 7 layer 가 실제로 많이 쓰이지 않고 현재 개념적 모델로만 존재를 하는 것이다. 


### TCP/IP 모델
보통 OSI 7 Layer 에 대해서는 잘 알고 있지만, DoD에 대해 잘 모르는 사람들도 있으니 (예를 들면, 나..) 정리하고 넘어가도록 하겠다. 

<p align='center'>
<img src='/assets/img/2023_cloud/dod_seul.png' width='20%'>
</p>

TCP/IP 모델은 Application, Transport, Internet, Network Interface 총 4계층으로 이루어져있다. 보통 Application 층에서 데이터가 만들어진다고 보고, Transport와 Internet 층에서 IP address 를 다루며 엄밀히 따졌을 때 여기까지가 TCP/IP 모델이다. 마지막 계층은 Network Interface, NetWork Interface Card (NIC) 라고도 부른다.

그럼 이 TCP/IP 모델을 통해 각 레이어에서 데이터를 어떻게 주고 받는지 알아보도록 하자.


## Encapsulation & De-encapsulation

### ✅ <mark style='background-color: #f1f8ff'>Encapsulation</mark> <font color='lightgray'>캡슐화</font>
전송용 데이터 만들기

#### Layer 4 PDU
데이터가 Layer 4에 들어오면 TCP로 처리할지 UDP로 처리할지 결정해주어야한다. TCP와 UDP가 어떤 차이가 있을까 비교해보자.

```
L4 header (TCP/UDP) + Data => segment
```

* **TCP**
  * 큰 데이터를 전송하기 위해 만들어짐
  * **정확**하고 **안정**적
  * 큰 데이터를 나눠서 전달하는 과정에서 데이터에 손실이 일어났을 때,
    * 받고자 하는 데이터를 못 받았는데, 뒤에 나머지 데이터가 먼저 채워져버림 🤦‍♀️
    * 데이터를 나눠서 전달했기 때문에 중간 데이터가 없어지면 곤란
  * **신뢰성** 필요
    * 중간에 데이터가 손실되어 못 받았으니 다시 전송해줘!
    * HTTP, HTTPs 등

* **UDP**
  * 데이터가 작고 빠른 전송이 요구될 때
  * 데이터 손실이 일어나도 크기가 작기 때문에 데이터를 다시 보내면 해결
  * <mark style='background-color: #fff5b1'>DNS</mark>, 보이스톡, 스트림 등

#### Layer 3 PDU
Layer 4 로부터 Segment 가 들어오면 이제 어디에서 어디로 전송시킬지 정보를 담아줘야 한다. L3 header 에는 IP Address 가 들어있어야하며, 보통 IPv4/IPv6 정보가 들어있다. 

```
L3 header (IP Address) + Segment => Packet (Datagram)
```

#### Layer 2 PDU
Layer 3 으로부터 받은 Packet 을 환경 (네트워크 작동 방식) 에 따라 변환해줘야한다. 이 작업을 위해서는 Driver 가 필요하다. 

```
L2 header (Mac Address) + Packet => L2 footer
```

드라이버는 정상적으로 하드웨어를 인식해서 앞에 물리적 주소 Mac Address 정보를 담은 L2 header 를 넣어주고, 뒤에는 L2 footer 을 붙여서 Frame 으로 만들어준다. 

* 네트워크 작동 방식
  * Ethernet
    * 전송할 상대를 찾은 후 데이터를 전송
  * WLAN

#### Layer 1
이렇게 만들어진 Frame 을 전기적 신호로 전송한다.


### ✅ <mark style='background-color: #f1f8ff'>De-encapsulation</mark> <font color='lightgray'>역캡슐화</font>
쉽게 말하자면, Encapsulation 에서 붙인 header 를 각 레이어에서 제거해주는 것을 바로 De-encapsulation이라고 한다.

#### Layer 2
Layer 1 에서부터 받은 전기적 신호 (비트) 를 Layer 2에서 Frame 형태로 분석한다. Header 에 있는 Mac Address 를 확인하여 나한테 온 게 맞다면 header를 제거하고 패킷 부분만 윗 레이어로 올려보낸다. 만약 나한테 온 게 아니라면 폐기한다.

#### Layer 3
Layer 2 에서 받은 Packet 에서 IP Address 를 체크한다. OS 계층의 주소가 맞다면 또 header 를 제거하고, segment 에 해당되는 부분만 윗 레이어로 올려보낸다.

#### Layer 4
Layer 3 에서 받은 segment 에서 TCP/UDP 정보를 확인한 후, header 를 제거한 데이터 부분을 Application 레이어에 전달한다. 이때 TCP/UDP 정보 뿐만 아니라 Port 정보도 함께 보고 어떤 Application으로 줄지 결정한다.


## Network Device
✔️ **2계층 전용 장비** - L2 switch<br>
&nbsp; : Mac Address 가지고 통신함.

✔️ **3계층 전용 장비** - Router (L3 switch)<br>
&nbsp; : 라우터 기능도 있으면서 switch 기능도 함. IP Address 를 다룸.

✔️ **4계층 전용 장비** - L4 switch (SLB)<br>
&nbsp; : Port Address 에 TCP/UDP 정보도 모두 포함.

➡️ 현재 집에 있는 대부분의 공유기는 위의 3가지 Layer 에 대한 장치를 모두 가지고 있음!

<br>

<font color='gray'>✔️ 1계층 전용 장비<br>
지금은 찾아보기 힘들지만 과거엔 1계층에 Hub 라는 장치도 있었다.<br>
- Switch Hub <br>
&nbsp;  : 스위치는 관리자가 장치 내부를 조작할 수 있지만, <br>
&nbsp;&nbsp;&nbsp;    스위치 허브는 관리자가 접근해서 할 수 있는 게 없기 때문에 전원만 연결하는 멍청한 스위치라고도 한다.
</font>



## 참고

