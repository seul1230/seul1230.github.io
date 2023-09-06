---
layout: post
title:  "Cloud Week 1"
date:   2023-02-02 17:50:09 +0900
categories: Data_AI
published: false
---
# [ Cloud ] 컴퓨터 네트워크 기초 ( LAN, WAN, ARP, IP Subnetting )


본 포스트는 하나 금융과 함께 하는 연구 프로젝트 전에 받게 되는 교육을 받고 스스로 공부한 내용을 정리한 것이다. 컴퓨터 네트워크 역사에 관한 내용은 [이전 포스트](https://seul1230.github.io/data_ai/2023-02-02-Cloud-Week1-part1/)에 가볍게 정리해놓았으니 한 번 읽어봐도 좋을 것 같다. 그럼 이제 컴퓨터 네트워크 기초 용어에 대해 알아보자. 

## LAN 과 WAN
* **LAN <font color='lightgray'>Local Area Network</font>**
  * 회사 내부 네트워크
  * 보통 Ethernet 환경으로 이루어져있음
  * Ethernet = LAN + 무선 통신 ➡️ 라고 생각하면 됨
  * 각 기기들의 고유 주소 MAC Address 를 가지고 호스트 간의 데이터를 주고 받음
* **WAN <font color='lightgray'>Wide Area Network</font>**
  * 회사 외부 네트워크

### Ethernet 과 ARP 프로토콜
**Ethernet** (이더넷) 은 짧은 거리의 컴퓨터를 연결하기 위해 개발되었으며, 당시 이더넷의 개발자 멧칼프가 하와이 대학에서 하와이 섬을 연결하기 위한 무선 네트워크 ALOHA 에 착안하였다고 한다. 

Ethernet 은 각 기기들의 고유 주소 **MAC Address** 를 가지고 데이터를 주고 받는데, 이떄 가운데 스위치는 각 기기들의 Mac Address 를 모른다. 

🤔 **그럼 어떻게 Mac 주소를 알아내어 목적지 IP 주소를 가진 기기와 통신을 할 수 있는 걸까?**

스위치는 기기의 IP 주소와 그에 매칭되는 Mac 주소를 저장할 수 있는 캐시 테이블을 가지고 있다. 이때 ARP <font color='lightgray'>Address Resolution Protocol</font> 프로토콜을 통해 Mac 주소를 학습한다. **ARP Cache Table** 은 임시적으로 정보를 저장하는 휘발성 테이블로, 한동안 통신을 하지 않으면 자동적으로 정보가 삭제된다. 다음 그림이 바로 ARP Cache Table 이다. 터미널 창에서 `arp -a` 명령어를 통해 확인할 수 있다!

<p align='center'>
<img src='/assets/img/2023_cloud/arp_cache_table.png' width='70%'>
</p>

## IP Subnetting
### IP Address 란?

### CIDR 표기법 <font color='lightgray'>Classless Inter-Domain Routing</font>

### 라우터와 스위치



### 예제 1 : Host ID 를 나눠서 N 개의 네트워크를 만들어라 !
* IP 주소 : 192.168.10.0
* Subnet Mask : 255.255.255.0 / 24

**✔️ 2 개의 네트워크로 나누면 ?**

### 예제 2 : IP Address 를 N 개 만드려면 필요한 네트워크의 개수는 ?
* IP 주소 : 192.168.10.0
* Subnet Mask : 255.255.255.0 / 24

**✔️ IP 주소가 54 개 필요한 네트워크가 몇 개 만들어질 수 있는가 ?**

## 참고

