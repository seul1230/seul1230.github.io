---
layout: post
title:  "Giscus | 깃블로그에 댓글 기능 추가하기"
date:   2024-05-20 11:30:09 +0900
color: "danger"
# style: fill
description: <strong>[ 공부 & 정리 ]</strong><br/>Giscus로 깃블로그에 댓글 기능 추가하기 & Utterance의 한계점
categories: tips
tags: [HowTo, linux, network, ubuntu]
---
# [ Tip ] 깃블로그, 티스토리에 댓글 기능 추가하는 법 | Giscus, Utterance

난 기존에 utterance를 이용해서 댓글을 받았었다. 이번에 giscus로 옮겨가면서 그 과정을 여기에 공유하고자 한다. 

## Utterance의 한계점

> Utterance는 대댓글을 달 수 없다. 

Utterance는 Github의 Issue를 사용하여 depth가 1인 게시판이라 기본적으로 대댓글이 불가능한 구조이다. 반면 giscus는 Github의 Discussion을 이용하여 depth가 2인 게시판이라 대댓글이 가능하다는 것이었다. 



<p align='center'><img src='/assets/img/daily/giscus_test.png' width='90%'><figcaption>Giscus를 이용한 댓글창 예시</figcaption></p>

<font color='lightgray'>참고: https://imksh.com/121</font>

<br/>

## Giscus 연결하는 법

### 1. 공개 repository 생성

giscus를 이용하려면 먼저 Github 계정이 있어야하고, 해당 repository에 다음과 같은 설정이 완료되어야 한다.

- [ ] 공개(public)된 repository
- [ ] Discussion 활성화
- [ ] giscus 설치

<p align='center'><img src='/assets/img/daily/discussion.png' width='70%'><figcaption>Discussion 설정</figcaption></p>

repo를 공개로 설정하는 건 깃허브를 이용하는 개발자라면 알 것이라 생각해 생략하겠다. <font color='gray'>모르신다면 댓글로 부탁드려요!</font> Discussion 설정은 <code>Settings > Features > ✅ Discussion</code> 에서 해줄 수 있다. 여기까지 하면 아래 단계까지는 끝났다.

- [x] 공개(public)된 repository <br/>
- [x] Discussion 활성화 <br/>
- [ ] giscus 설치

<br/>

### 2. giscus 설치하기

- [giscus 설치 URL](https://github.com/apps/giscus)

위 링크를 통해 생성한 레포지토리에 giscus를 설치할 수 있다. 

<p align='center'><img src='/assets/img/daily/giscus.png' width='90%'><img src='/assets/img/daily/giscus_configure.png' width='50%'><figcaption>Giscus 설치</figcaption></p>

모든 repo에 설치할 것인지, 선택된 repo에만 설치할 것인지 권한을 물어보는 단계가 나오는데 난 그냥 <code>Only select repositories</code> 를 선택했다. 아! 그리고 아까 1번에서 만들어준 repo명을 입력해줘야 한다!


<p align='center'><img src='/assets/img/daily/repo_access.png' width='90%'><figcaption>Giscus repo 권한 설정</figcaption></p>

<br/>

### 3. giscus 커스텀하기

- [giscus 커스텀 URL](https://giscus.app/ko)

여기까지 왔으면 이제 확인을 해보자. 스크롤을 내리면 아래 언어 / 저장소 설정이 있다.

<p align='center'><img src='/assets/img/daily/repo_check.png' width='70%'><figcaption>Giscus 커스텀 페이지</figcaption></p>

저장소에 아까 만들어준 repo 명을 입력했을 때 위 그림처럼 '<font color='green'>통과했습니다! 이 저장소는 모든 조건을 만족합니다.</font>' 메시지가 나온다면 위 과정에 문제가 없었다는 뜻이다. 만약 안 뜬다면, repo 명을 다시 확인하거나 위 과정에서 빠뜨린 게 없나 다시 만들어보는 것을 추천한다. 

<br/>

<p align='center'><img src='/assets/img/daily/giscus_url.png' width='70%'></p>

위 그림은 해당 블로그 페이지랑 repo 내 Discussion을 어떻게 연결할 것인지 설정해주는 부분이다.

<br/>

{% capture carousel_images %}
/assets/img/daily/giscus_cate_func.png
/assets/img/daily/giscus_cate.png
{% endcapture %}
{% include elements/carousel.html %}

> 그림 오른쪽을 눌러보세요!

위 그림은 작성된 댓글들을 어느 카테고리에서 관리할 건지, 어떤 기능들을 추가할 건지에 관한 내용이다. 기호에 맞게 커스텀해주면 될 듯하다. 나는 <code>✅ 메인 포스트에 반응 남기기</code> 와 <code>✅ 댓글 위에 댓글 상자 배치</code>를 선택해주고, <code>Comments</code> 카테고리에 넣어주었다. 


<br/>

...

<br/>

여기까지 했다면 블로그에 복붙할 코드를 제공해준다. <br/>
아래 script 코드를 블로그 레이아웃 앞부분에 넣어주면.. 이제 하나만 더 하면 된다!

<p align='center'><img src='/assets/img/daily/giscus_code.png' width='70%'></p>

<br/>

### 4. giscus 적용하기

위 script 코드가 작동할 때 <code>giscus</code> class에 댓글창이 열린다. script 코드는 앞에 아무데나 넣어줬다면, 이제 댓글창이 열렸으면 좋은 위치에 아래 코드를 추가로 작성해주자.

```html
<div class="giscus"></div>
```

## 마무리

사실 utterance나 giscus 모두 깃허브 계정 소유자만 댓글을 달 수 있기 때문에 접근성이 떨어진다. 또 깃허브 로그인도 필요해서 번거롭기 때문에 익명 댓글은 어떻게 달 수 있나 하고 찾아봤었다. 익명이 댓글을 더 쓰긴 쉽지만 그 만큼 스팸 댓글이 달릴 가능성도 많다고 한다. 블로그 특성상 개발자들과 소통하는 게 주가 되어야 하기도 하서 대댓글 기능이 있는 giscus로 가기로 했다!! 나중에 같은 고민을 하는 개발자들을 위해 이렇게 글을 남긴다 🐾

<br><br><br>


