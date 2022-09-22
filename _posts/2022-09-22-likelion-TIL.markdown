---
layout: post
title:  "2022 멋사 AI | 1주차 TIL"
date:   2022-09-22 16:10:09 +0900
categories: 2022_likelion🦁
---

## **[ 0919 MON ] 파이썬 기초**


<br/>

***
<br/>

## **[ 0920 TUE ] 파이썬과 판다스 기초**
> python 들여쓰기 4칸 권장  (Python 공식문서) 

<br/>

### If 문 <br/>
### 반복문
#### - For문
#### - Range 함수 `range(start, end, step)`
##### : `start`에서 `end-1`까지 `step`만큼 이동
#### - Enumerate
##### : `index`와 `value`에 동시에 접근하면서 `loop` 돌릴 수 있음
#### - While 문
##### : 조건식이 `true`인 경우에 계속해서 반복하는 문법. <br/> &nbsp;&nbsp; 조건식이 `false`가 되면 반복을 멈추고 while문 종료
<br/>

### Format
#### : `"%형식문자"`로 지정하면 % 뒤의 출력 대상들이 `1:1`로 대응되어 출력
##### &nbsp;&nbsp; - `%s` : 문자열, `%d` : 정수, `%f` : 실수
##### &nbsp;&nbsp; -  `%03d` : 정수를 `3`칸에 맞추어 출력하는데 앞의 빈칸은 `0`으로 채워라.
##### &nbsp;&nbsp; -  `%6.2f` : 실수를 전체 `6`칸, 소수 이하 `2`칸에 맞추어 출력해라.

<br/>
   
### Function (함수)
#### def func
```python
def order():     
    print('주문하실 음료를 알려주세요') drink = input() 
    print(drink, '주문하셨습니다.') 
```
#### `func` ?
##### Docstring 볼 수 있음. 모듈, 함수, 클래스 또는 메소드 정의의 첫 번째 명령문으로 발생하는 문자열 리터럴
#### `func` ??
##### Docstring에 대한 소스 코드를 확인할 수 있음

<br/>


<br/>

***
<br/>

##  **[ 0921 WED ] 판다스 기초와 Seaborn**

<br/>