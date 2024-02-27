---
layout: post
title:  "Connect Network on Ubuntu"
date:   2023-06-09 11:30:09 +0900
color: "danger"
style: fill
description: Linux 가상머신(Ubuntu 20.04)에서 무선 네트워크 연결하는 법
categories: Tips
tags: [HowTo, linux, network, ubuntu, ver20.04]
---
# [ Linux ] 가상머신에서 무선 네트워크 연결하는 법

UTM을 이용하여 가상머신에서 네트워크 연결을 연결하려다 찾은 방법을 공유하고자 한다. 구글링에 애를 먹은 거에 비하면 그 과정은 상당히 간단하다. 해당 글 작성 시점 기준 내가 사용한 Ubuntu의 버전은 **20.04.6 LTS**이다. 

참고 : [ubuntu cannot connect to internet](https://www.youtube.com/watch?v=DSa8e1HwYEc)


### How to connect network

#### ✅ IP 확인하기

일단 해당 서버와 연결된 네트워크를 확인하는 명령어는 <code>ip a</code> 혹은 <code>ip address</code>이다. 

#### 1️⃣ Network 설정 바꿔주기

아래의 명령어를 실행시키면 network 설정이 작성된 파일을 열어 수정할 수 있다. <br>**`network > ethernets > ensxx > dhcp4`**가 <code>true</code>로 설정되어 있는지 확인하자. 

```bash
$ sudo nano /etc/netplan/00-installer-config.yaml
```

<p align='center'><img src='/assets/img/linux/network_settings.png' width='90%'><figcaption>00-installer-config.yaml</figcaption></p>

혹시나 이외에 다른 변수들이 지정되어 있다면 주석처리를 해보도록 하자. 참고로, 나는 이 라인들을 남겨뒀다가 네트워크 연결에 어려움을 겪었었다. 이 부분만 잘 처리해주면 네트워크는 어렵지 않게 진행할 수 있다. 


#### 2️⃣ netplan 적용하기

```bash
$ sudo netplan generate
$ sudo netplan apply
```

<p align='center'><img src='/assets/img/linux/apply_netplan.png' width='90%'></p>

#### 3️⃣ 인터넷 연결 테스트하기

```bash
$ ping google.com
```

<p align='center'><img src='/assets/img/linux/ping_google.png' width='90%'></p>

여기까지 진행했을 떄 위와 같이 문제 없이 인터넷 연결이 잘 되는 것을 확인할 수 있었다. 그러나 아직도 연결 문제가 해결되지 않는다면, 다음 단계를 진행해보자. 

#### 🔎 If you still have problems..

이렇게 했을 때도 네트워크 연결에 문제가 있다면 <code>resolv.conf</code>를 확인해야 한다. 

```bash
$ sudo nano /etc/resolv.conf
```

해당 파일을 열어 <code>nameserver</code>에 8.8.8.8을 추가해주자.





<br>

## Next Post..
