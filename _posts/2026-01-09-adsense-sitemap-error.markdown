---
layout: post
title:  "블로그 | 사이트맵(Sitemap) 에러로 블로그 노출이 안 된다면? 해결법"
description: Sitemap Error 때문에 검색 노출이 안 된다면 들어오세요!
# categories: 
date:  2025-01-09 14:00:10 +0900
# style: fill
use_math: true
color: warning
tags: [Blog, Ads, Info]
---
# 블로그 | 사이트맵(Sitemap) 에러로 블로그 노출이 안 된다면? 해결법

안녕하세요. 이번에는 제가 겪은 애드센스 사이트맵 에러에 작성해볼까 합니다.

사이트맵은 웹사이트에 어떤 페이지들이 있고, 이들이 어떻게 구성되어 있는지 검색엔진에게 알려주는 역할을 합니다. 즉, 키워드로 검색했을 때 해당 페이지들이 검색 엔진에 노출이 된다는 의미죠.

<br>

저는 깃블로그(GitBlog)를 운영 중입니다. 다른 블로그와 차이점이 있다면, 네이버나 티스토리는 사이트맵이 자동으로 생성되어 별다른 노력 없이 자신의 블로그 글을 검색할 수 있습니다.

<p align='center'>
<img src='/assets/img/info/blog_ex.png' width='500px'> 
<figcaption>블로그에 광고 게시 중<font color="lightgray"></font> <a href=""></a></figcaption>
</p>

사실 자기 만족으로 블로그를 작성 중이라면 큰 문제가 되지 않을 수 있지만, 저는 <a href='https://adsense.google.com/intl/ko_kr/start/'>구글 애드센스</a>를 활용하여 블로그에 광고도 게재하고 있습니다. 사이트맵 에러로 인해 트래픽 노출이 막히면 수익에 집계되지 않게 되기 때문에 이 문제를 해결하려고 몇 달을 애를 먹었더랬죠 🥲

<br>

## Sitemap Invalid XML tag error

구글에 블로그 글을 노출시키는 방법은 <a href="https://search.google.com/search-console/about">Google Search Console</a>을 이용해 sitemap을 등록하는 것입니다. 이 페이지에서 내 블로그에 있는 글들을 관리하고, 어떤 검색어로 얼마나 클릭이 되었는지 전체적인 Overview를 확인할 수 있습니다.

<br>

<p align='center'>
<img src='/assets/img/info/search_console.png' width='800px'> 
<figcaption>Google Search Console 페이지<font color="lightgray"></font> <a href=""></a></figcaption>
</p>

<br>

비록 트래픽이 많진 않지만 제 글들이 하나씩 올라가는 걸 보면서 뿌듯해 했는데요ㅎ 2024년 10월 이후로 Sitemap이 읽히지 않고 있었어요! 아래 사진을 보면 아시겠지만 사이트맵에 에러가 있어서 그 이후로 새로 작성한 글들이 검색 노출이 되지 않고 있었습니다.

<br>


<p align='center'>
<img src='/assets/img/info/sitemap_page.png' width='800px'> 
<figcaption>문제의 사이트맵 오류<br><font color="lightgray">Sitemap can be read, but has errors</font> <a href=""></a></figcaption>
</p>

<br>

제가 겪은 에러는 `Invalid XML tag` 였습니다. Parent tag `urlset`에서 유효하지 않은 `script` 태그가 있어서 Status는 계속 error라고 뜨더라구요. 그러나 놀라운 점은 제 sitemap에는 `<script>` 태그가 없다는 것입니다. 이게 무슨..!

이를 해결하기 위해 여러 방법을 시도해보았습니다. XML validator 사이트에 제 `sitemap.xml`을 넣어 유효한지 확인도 하고, 여러 번 다시 제출하기도 했습니다. Search Console은 다이렉트로 메시지나 문의사항을 넣을 수 없게 되어 있어 커뮤니티로도 다른 능력자의 조언을 받기도 했습니다만 모두 제 경우에는 무용지물이었어요.

<br>

## 간단하게 해결

이런 역경에도 이후에 작성한 블로그 글들을 검색 엔진에 노출시킨 방법을 공유하겠습니다.

좀 번거로울 수 있지만 Search Console 페이지에서 URL inspection을 통해 내가 작성한 글의 URL을 넣어 Indexing을 요청하는 것입니다!

<br>

<p align='center'>
<img src='/assets/img/info/url_inspection.png' width='800px'> 
<figcaption>Google Search Console URL inspection<font color="lightgray"></font> <a href=""></a></figcaption>
</p>

<br>

위 검색창에 새로운 블로그 주소를 입력하면, 아래처럼 URL의 현재 인덱싱 상태를 알 수 있습니다. 여기서 검색 엔진에 노출이 되지 않은 상태라면 `URL is not on Google`라고 뜨는데, `Request Indexing` 버튼을 눌러 인덱싱해주면 됩니다.

<br>

<p align='center'>
<img src='/assets/img/info/not_indexed.png' width='700px'> 
<figcaption>인덱싱 전 검색이 안 되는 상태 <font color="lightgray"></font> <a href=""></a></figcaption>
</p>

<p align='center'>
<img src='/assets/img/info/good_url.png' width='700px'> 
<figcaption>인덱싱 성공 ✨<font color="lightgray"></font> <a href=""></a></figcaption>
</p>

<br>


이제 며칠 뒤 다시 URL inspection을 해주면 성공적으로 등록이 된 것입니다! <font color="lightgray">저는 혹시 몰라 제 블로그의 `sitemap.xml`도 매번 수정해주고 있긴 합니다. </font>

정말 별 건 아닌데 오래 걸렸던 문제라 같은 문제를 겪고 있는 분들이 저와 같이 시간 낭비하지 않도록 글을 작성해 보았어요 호호!


<p align='center'>
<img src='/assets/img/etc/bye.png' width='200px'> 
<figcaption>안뇽 - ⟢</figcaption>
</p>

혹시 더 궁금한 점이 있다면, 아래 댓글이나 메일로 편하게 알려주세요!

<br>

## 참고



<br/><br/><br/>


