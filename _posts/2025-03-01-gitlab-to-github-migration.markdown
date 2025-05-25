---
layout: post
title:  "개발 | GitLab에서 Github으로 마이그레이션하기 (깃 마이그레이션: 커밋 기록 포함 저장소 클론)"
description: 🚀 깃랩에서 깃허브로 커밋 기록 포함해서 클론하기!
date:  2025-03-01 19:00:10 +0900
style: fill
use_math: true
color: info
tags: [dev]
---
# GitLab에서 Github으로 마이그레이션하기 (커밋 기록 포함 저장소 클론)

부트캠프에 참여하면서 Gitlab에서 작업을 했는데, 기간이 끝나고 github 내 레포에서 관리할 방법을 찾다가 동료에게서 '마이그레이션'이라는 개념을 알게 되었다. 단순히 저장소 안에 있는 파일들만 가져오는 것이 아니라 gitlab에서 커밋했던 기록까지 미러링할 수 있어서 이 방식을 채택하였다. 실제로 그 방법은 생각보다 간단하다!

다른 개발자들도 같은 고민을 분명 하게 되는 날이 올 것이라 생각해 내가 했던 과정을 간단하게 정리하고자 한다.

<br><br><br>

<p align="center">
➿ ➿ ➿
</p>

<br/>

## 📌 저장소 미러링하기 

GitLab에서 GitHub로 저장소를 옮기려면 **Git의 모든 히스토리(브랜치, 태그, 커밋 로그)를 유지하면서 복사**해야 한다.   
이 과정에서 `git clone --bare`와 `git push --mirror`를 사용할 것이다.

<br/>

> 1️⃣ 터미널을 실행시킨다.

Git이 설치되어 있다는 전제 하에 설명할 예정이다. Git이 설치되어 있는지 확인하는 명령어는 다음과 같다.

```sh
git --version
```

<br/>

> 2️⃣ 기존 GitLab 저장소를 `bare` 형식으로 복제한다.

`--bare` 옵션을 사용하면 일반적인 `git clone`과 달리, 소스 코드 없이 Git의 모든 히스토리 (브랜치, 태그, 커밋 정보)만 복제된다.

<table width="100%">
  <thead>
    <tr>
      <th><strong>명령어</strong></th>
      <th><strong>설명</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>git clone &lt;url&gt;</code></td>
      <td><strong>일반 복제</strong>: 소스 코드 + <code>.git</code> 폴더 포함</td>
    </tr>
    <tr>
      <td><code>git clone --bare &lt;url&gt;</code></td>
      <td><strong>Bare 복제</strong>: 소스 코드 없이 Git 메타데이터만 포함 (마이그레이션용)</td>
    </tr>
  </tbody>
</table>


```sh
git clone --bare https://gitlab.com/user/old-repository.git
```

<br/>

> 3️⃣ 새로운 Github 저장소로 `mirror-push` 진행

이제 복제한 GitLab 저장소를 새로운 Github 저장소로 전송하자.

```sh
cd old-repository.git
git push --mirror https://github.com/user/new-repository.git
```

`--mirror` 옵션을 사용하면 Git의 모든 브랜치, 태그, 커밋 내역을 새로운 저장소에 복사할 수 있다. 

<br/>


## 💬 push가 거부됐다면?

> 4️⃣ 민감 정보가 포함된 파일과 불필요한 디렉토리 지우기

물론 이런 일이 있어선 안 되지만, 마이그레이션 과정에서 민감한 정보가 포함된 파일이 있다면 push했을 때 git이 거부하는 메시지를 보낸다. 이 과정에서 문제가 되는 건, 민감한 정보가 한 번이라도 커밋 기록에 포함된다면 노출될 위험이 있다는 부분이다. 그래서 민감한 정보가 발생한 모든 커밋에서 해당 정보를 지워주는 작업이 필요하다. 

또한, 특정 디렉토리는 제외하고 마이그레이션을 하고 싶을 때도 있다. 이때는 아래의 방법을 사용하면 된다.

#### 1️⃣ git filter-repo 설치하기
Git 기본 명령어로는 특정 파일을 삭제해도 과거 커밋 기록에 남아 있기 때문에, `git filter-repo`를 이용해 과거 모든 커밋에서 해당 파일을 삭제해야 한다. 

> ✅ macOS (Homebrew 사용)

```sh
brew install git-filter-repo
```
<br/>

> ✅ Linux (Ubuntu/Debian)

```sh
sudo apt update
sudo apt install git-filter-repo
```
<br/>

> ✅ Windows

직접 다운로드 받아서 아래 명령어 실행
```sh
curl -L https://github.com/newren/git-filter-repo/releases/latest/download/git-filter-repo.tar.xz | tar -xJf - -C /usr/local/bin
chmod +x /usr/local/bin/git-filter-repo
```
<br/>

#### 2️⃣ 특정 파일이나 디렉토리 삭제
특정 파일이나 디렉토리가 포함된 커밋을 모든 Git 기록에서 제거하려면 다음의 명령어를 실행해야 한다.


```sh
git filter-repo --path {file-path or directory-name} --invert-paths
```

만약 루트 디렉토리 안에 `secret` 이라는 디렉토리의 커밋 기록을 삭제해야 한다면, 아래의 명령어로 가능하다.

```sh
git filter-repo --path secret --invert-paths
```
<br/>

자, 이제 해당 파일이 과거 커밋에서도 사라지며, Git에서 추적되지 않는다 🎉🎉

<br/><br/>

<p align="center">
➿ ➿ ➿
</p>

<br/>

## 📌 정리 및 확인하기

GitLab에서 Github으로 마이그레이션할 때는 `git clone --bare`를 사용해 소스 코드 없이 Git 히스토리만 복제해야 핟나. `git push --mirror`를 사용하면 Git의 모든 브랜치와 태그를 새로운 저장소로 한 번에 전송할 수 있다.

위에서 진행한 모든 절차를 완료했다면, 새로운 Github 저장소를 확인하고 제대로 이전되었는지 체크하자!

<br/><br/>


## 참고

- [gitlab에서 github로 저장소(repository) commit log를 유지하며 클론하기](https://lazyren.github.io/devlog/gitlab-to-github-repo-clone.html)

<br/><br/><br/>

