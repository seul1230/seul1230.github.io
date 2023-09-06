---
layout: post
title:  "Cloud Week 1"
date:   2023-02-02 14:50:09 +0900
categories: Data_AI
published: false
---
# [ Cloud ] 컴퓨터 네트워크 역사

작년 9월에 제1회 **하나 디지털 파워 온 프로젝트** 에서 금융과 디지털을 융합한 자유주제로 예선과 본선을 통과하여 AWS 에서 제공하는 전문교육 및 금융감독원 교육을 확정받고 약 두 달 간 연구 프로젝트를 함께 진행하게 되었다. 

<p align='center'>
<img src='/assets/img/2023_cloud/hana_project.png' width='70%'>
</p>

본 포스트는 연구 프로젝트 전에 받게 되는 교육을 받고 스스로 공부한 내용을 정리한 것이다. 이전에도 전공 수업이나 자격증 공부 등으로 **컴퓨터 네트워크** 에 대해 공부한 적이 있었으나 성적이 잘 나오는 정도에 그쳐서 잘 기억이 나지 않았는데, 이렇게 다시 복습하고 공부할 기회가 생겨 기뻤고 재밌게 공부할 수 있었다! 😆


- [\[ Cloud \] 컴퓨터 네트워크 역사](#-cloud--컴퓨터-네트워크-역사)
  - [네트워크의 개요](#네트워크의-개요)
      - [PC의 등장](#pc의-등장)
      - [World Wide Web, www](#world-wide-web-www)
      - [데이터 시대의 시작](#데이터-시대의-시작)
      - [빅데이터](#빅데이터)
  - [홈 네트워크의 등장](#홈-네트워크의-등장)
  - [인터넷 접속하기](#인터넷-접속하기)
    - [\[ 인터넷 접속 순서 🌐 \]](#-인터넷-접속-순서--)
  - [참고](#참고)


## 네트워크의 개요
1969년, 미국 국방 관련 연구 자료를 공유하고 핵 공격으로 군사 지휘 통제 체계가 파괴되는 것을 막기 위해 전산망을 연결하는 ARPANET 이 개발되었다. ARPANET 은 세계 최초의 패킷 스위칭 네트워크로, 현재의 인터넷의 기원으로 알려져 있다. 


<p align='center'>
<img src='/assets/img/2023_cloud/altair_8800.png' width='70%'>
</p>

#### PC의 등장
그로부터 5년 후, 1974년 미국에서 개인용 컴퓨터 **<font color='lightgray'>Altair 8800</font>**가 처음 만들어지게 된다. 이때 개인용 컴퓨터 (Personal Computer) 의 첫 글자를 가져와서 현재 우리가 컴퓨터를 말할 때 쓰는 PC 가 여기서 유래된 것이고, 기술이 점차 발전하면서 IBM 에서 만든 개인용 컴퓨터 'IBM PC' 가 세계적으로 인기가 끌면서 본격적으로 쓰이기 시작했다. 


#### World Wide Web, www
<p align='center'>
<img src='/assets/img/2023_cloud/www.png' width='70%'>
</p>

컴퓨터는 계속해서 발전하고, 1990년대에 이르러서는 인터넷이 급격히 발전하여 개인도 인터넷을 사용할 수 있을 정도로 보급이 이루어지기 시작했다. 우리가 잘 아는 www **<font color='lightgray'>World Wide Web</font>** 로 시작하는 인터넷 주소도 이즈음에 등장했다. 영국의 컴퓨터 과학자 팀 버너스 리 (Tim Berners-Lee) 는 다른 텍스트에 대한 링크를 포함하는 하이퍼텍스트(HyperText)을 이용하여 정보공간 항해의 '무한경로 URL' 개념으로 www 를 처음 고안하여 개발했다. 


#### 데이터 시대의 시작
<p align='center'>
<img src='/assets/img/2023_cloud/messenger_1.png' width='50%'> &nbsp;&nbsp;
<img src='/assets/img/2023_cloud/messenger_2.png' width='30%'>
</p>

개인이 인터넷을 이용할 수 있게 되면서 다양한 메신저 프로그램이 인기를 끌게 되었다. 각 개인이 인터넷에 정보를 남기게 되면서 방대한 데이터가 모이기 시작하여 **데이터 시대의 시작**이라고 부를 수 있는 시기가 도래하게 된다. 


#### 빅데이터
<p align='center'>
<img src='/assets/img/2023_cloud/big_data.png' width='70%'>
</p>

이렇게 많은 양의 다양한 데이터가 쌓이면서 **빅데이터**라는 개념이 등장하게 되었다. 빅데이터의 특징은 크게 3가지로 3V 라고도 흔히 말한다. 
* **Velocity** : 데이터의 생성 속도
  * 데이터들이 실시간에 가깝게 생산될 뿐만 아니라 처리되고 분석된다.
* **Volume** : 데이터의 양
  * 데이터의 양이 많아지면서 수십 TB 에서 수십 PB 이상으로 증가하게 되었다.
* **Variety** : 데이터의 다양성
  * 데이터의 종류는 형태에 따라 정형 / 반정형 / 비정형으로 구분할 수 있다.


**💡 Data Warehouse vs Data Lake**<br>
빅데이터를 보다 잘 활용하기 위해 나온 개념이 Data Warehouse 와 Data Lake 이다. Data Warehouse 가 저장된 데이터를 '분석'하는 것이 주목적이라면, Data Lake 는 데이터가 분석에 사용될지 안될지 확실하지 않아도 '일단 저장'하는 것이 목적이다. 생성된 데이터가 가공 및 저장되는 속도에 비해, 데이터가 생성되는 속도가 현저히 빨라지기 시작했다. 생성되는 속도를 따라잡지 못하고, 비정형 데이터도 이용되기 시작하면서 일단 저장하는 Data Lake 의 개념이 등장하였다. 

<br>

## 홈 네트워크의 등장
왼쪽이 공유기, 오른쪽이 모뎀 사진이다.
<p align='center'>
<img src='/assets/img/2023_cloud/router.png' width='30%'> &nbsp;&nbsp;&nbsp;
<img src='/assets/img/2023_cloud/modem.png' width='40%'>
</p>

* **공유기 <font color='lightgray'>Router</font>**
  * 사무실 / 가정에서 **1개의 회선**을 사용하여 인터넷 이용할 수 있는 기기
  * **집**에 있는 네트워크 - **인터넷 제공 업체** 네트워크 연결
  * 문 : 문을 열고 나가면 다른 공간으로 나갈 수 있다.
  * 즉, 서로 다른 네트워크를 연결하기 위해 게이트웨이 <font color='lightgray'>Gateway</font> 장비가 필요하며 라우터가 이에 해당
  * Gateway 를 통해서 네트워크를 빠져나가 다른 네트워크로 들어간다.
  * 예시) IpTime, D-Link, EasyNey, Netis



* **모뎀 <font color='lightgray'>Modem</font>**
  * **아날로그** 신호의 통신회선인 **전화선**을 이용하여 디지털 통신 장비와 통신
  * 디지털 신호 ➡️ 아날로그 신호 : 변조 Modulation
  * 아날로그 신호 ➡️ 디지털 신호 : 복조 Demodulation


## 인터넷 접속하기
맥OS 를 사용한다면 IP 주소를 별다른 명령어 없이 확인해볼 수 있다.

```
시스템 환경설정 > 네트워크 > wifi > TCP/IP
```

<p align='center'>
<img src='/assets/img/2023_cloud/DHCP_DNS.png' width='60%'>
</p>

* DHCP : 자동으로 IP 주소를 배포해주는 서비스
* DNS : IP 주소를 도메인으로 변환시켜줌
  * `www.naver.com` 과 같이 문자로 입력해주면
  * 일반적으로, 컴퓨터는 데이터 가공 없이 인지할 수 없음
  * 문자열 주소 ➡️ 비트로 변환 ➡️ IP 주소로 변경 ➡️ 비트로 변환
  * **인터넷 주소**를 **IP 주소**로 바꿔주는 것까지 담당 
  * 예시) KT DNS (168.126.63.1), Google DNS (8.8.8.8)

<font color='darkred'>⚠️ DNS 서버가 무너지면 사이트에 하나도 접속하지 못하게 됨</font>


### <U>[ 인터넷 접속 순서 🌐 ]</U>
**<font color='darkblue'>1️⃣ 통신환경 설정</font>** : 통신을 위한 IP 주소 설정

**<font color='darkblue'>2️⃣ 웹 브라우저 프로그램 실행</font>**

**<font color='darkblue'>3️⃣ 웹 페이지 도메인 주소 입력</font>**

**<font color='darkblue'>4️⃣ DNS 동작</font>**<br>
**<font color='lightgray'>Domain Name Service</font>** <br>
= 사용자가 입력한 도메인 네임 주소를 컴퓨터가 이해할 수 있는 주소인 IP로 변경해주는 서비스<br>
✔️ 사용자가 웹 브라우저에 입력한 **도메인 네임 주소**는 반드시 DNS 서비스를 통해 **IP**로 변경되어야 통신이 가능

**<font color='darkblue'>5️⃣ 웹 서비스 요청</font>**

**<font color='darkblue'>6️⃣ HTTP와 HTTPS</font>**

* **HTTP** 
  * Hypertext Transfer Protocol
  * 웹 서비스를 제공할 때 사용하는 프로토콜
  * **암호화되지 않은 평문**으로만 작성되어 있어 입력한 모든 정보를 패킷 분석기를 이용해서 아무나 분석 가능할 수 있기 때문에 HTTPs 프로토콜을 이용한다. 
* **HTTPs**
  * Hypertext Transfer Protocol Over Secure Socket Layer
  * 기존의 HTTP 프로토콜에 보안 기능 Security (SSL, TLS 등)을 추가하여 사용자의 데이터를 **암호화**하여 안전 통신할 수 있게 됨


## 참고

[altair 8800](https://www.google.com/url?sa=i&url=https%3A%2F%2Fadwaterandstir.com%2F2017%2F08%2F14%2Fbut-what-could-you-actually-do-with-an-altair-8800%2F&psig=AOvVaw2lgXOVPA4EoCEAQ60a14uX&ust=1675420624651000&source=images&cd=vfe&ved=0CBEQjhxqFwoTCICmxKzS9vwCFQAAAAAdAAAAABAD)

[빅데이터](http://wiki.hash.kr/index.php/%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0)

[Samsung SDS : 빅데이터로 가치를 만드는 호수 ‘데이터 레이크’ 이야기](https://www.samsungsds.com/kr/insights/big_data_lake.html)

[www 팀 버너스리](https://ko.wikipedia.org/wiki/%ED%8C%80_%EB%B2%84%EB%84%88%EC%8A%A4%EB%A6%AC)