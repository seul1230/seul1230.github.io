---
layout: page
title: About
permalink: /about/
weight: 7
---

<h2 margin-bottom="0px">About Me</h2>


<div class="row justify-content-left align-items-center p-4 display-flex">
  <div class="col-lg-4 col-md-6 text-center mt-4" >
    <!-- Fine Circle Responsive Image -->
    <div id="container" class="my-2">
      <div id="dummy"></div>
      <div id="element">
        <img src="/assets/profile_img.png"  class="circle-image" ><br/><br/><br/><br/>
      </div>
    </div>
  </div>
  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
  <div class="text-muted"><br/><br/>Hi, I am <strong>sseul</strong> :wave:<br/><br/>안녕하세요 예수리입니다 :) <br/>현재 빅데이터/AI 개발자를 희망하고 있습니다. </div>
</div>


<div class="row">
    {% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
    {% include about/skills.html title="Tools" source=site.data.other-skills %}
</div>
<br/>
<div class="row">
    {% include about/timeline.html %}
</div>
