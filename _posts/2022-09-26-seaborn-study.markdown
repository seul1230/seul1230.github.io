---
layout: post
title:  "0926 data analysis study"
date:   2022-09-26 17:30:09 +0900
categories: Data_AI
---
# [ 0926 스터디 ] 데이터 분석 - 캐글 필사

## 캐글 필사 

[EDA To Prediction (DieTanic)](https://www.kaggle.com/code/ash316/eda-to-prediction-dietanic)

### EDA To prediction _ DieTanic
```python
import numpy as np 
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
plt.style.use('fivethirtyeight')
import warnings
warnings.filterwarnings('ignore')
%matplotlib inline
```

### How many Survived ? 
: 생존자 수를 알아보자.
```python
f,ax=plt.subplots(1,2,figsize=(18,8))
data['Survived'].value_counts().plot.pie(explode=[0,0.1],autopct='%1.1f%%',ax=ax[0],shadow=True)
ax[0].set_title('Survived')
ax[0].set_ylabel('')
sns.countplot('Survived',data=data,ax=ax[1])
ax[1].set_title('Survived')
plt.show()
```
![pie_bar] <br/>
위의 코드를 실행시키면 `train` 데이터에서 총 891명의 승객 중 350명만이 살아남은 것을 알 수 있다. 다른 정보를 분석하기 전에 먼저 다음 코드를 살펴보자. 
```python
plt.subplot(nrows, ncols, index, **kwargs)
```

matplotlib.pyplot 모듈의 subplot() 함수는 여러 개의 그래프를 하나의 그림에 나타내준다. 여기서 `nrows`와 `ncols`는 각각 그래프를 열방향으로 몇 개, 행방향으로 몇 개로 배치할 것이냐를 의미하고 `index`를 활용하면 어디에 무슨 subplot을 배치할지 설정할 수 있다. 
`sharex=ax1` 파라미터를 이용하면 x축을 공유하도록 설정도 가능하다고 하니 [여기](https://codetorial.net/matplotlib/subplot.html)를 참고하면 좋을 것 같다.

### 데이터셋의 Feature를 분석해보자.
#### ⚧ Sex 
성별은 **Categorical Feature**에 속한다. 
```python
# data.groupby(['Sex','Survived'])['Survived'].count()
data.groupby(['Sex','Survived'])[['Survived']].count()
```
data에서 `Sex`와 `Survived`를 기준으로 그룹화하여 생존자 수만 가지고 오는 코드이다. <br/>
![groupby_all] <br/>
![groupby_survived] <br/>
다음 코드를 실행하면 성별에 따른 생존자 수를 시각화할 수 있다.
```python
f,ax=plt.subplots(1,2,figsize=(18,8))
data[['Sex','Survived']].groupby(['Sex']).mean().plot.bar(ax=ax[0])
ax[0].set_title('Survived vs Sex')
sns.countplot('Sex',hue='Survived',data=data,ax=ax[1])
ax[1].set_title('Sex:Survived vs Dead')
plt.show()
```
![sex_survived] <br/>
시각화한 자료를 보자. 원래 배에 타고 있던 남성의 수는 여성의 수보다 훨씬 많았으나, 구조된 여성의 수는 구조된 남성의 수의 약 2배 정도 되는 것을 알 수 있다. 여성의 생존율은 약 75%, 남성의 생존률은 약 18%으로 보인다. 


#### Pclass
승객의 좌석(클래스)은 총 1, 2, 3으로 나누어져 있으며 이것을 우리는 **Ordinal Feature**로 분류한다.

```python
pd.crosstab(data.Pclass,data.Survived,margins=True).style.background_gradient(cmap='summer_r')
```
![Pclass_crosstab] <br/>


```python
f,ax=plt.subplots(1,2,figsize=(18,8))
data['Pclass'].value_counts().plot.bar(color=['#CD7F32','#FFDF00','#D3D3D3'],ax=ax[0])
ax[0].set_title('Number Of Passengers By Pclass')
ax[0].set_ylabel('Count')
sns.countplot('Pclass',hue='Survived',data=data,ax=ax[1])
ax[1].set_title('Pclass:Survived vs Dead')
plt.show()
```
코드는 `Sex`의 코드와 거의 동일하다. 해당 코드는 승객의 좌석 수준에 따라 생존자 수를 분류하여 시각화한 코드이다. 
![Pclass_countplot]
> People say Money Can't Buy Everything. But we can clearly see that Passenegers Of Pclass 1 were given a very high priority while rescue. Even though the the number of Passengers in Pclass 3 were a lot higher, still the number of survival from them is very low, somewhere around 25%. <br/> For Pclass 1 %survived is around 63% while for Pclass2 is around 48%. So money and status matters. Such a materialistic world.

이 코드를 정리하신 분이 덧붙인 markdown이 꽤 흥미로워서 가지고 와보았다.

##### 그럼 이제 성별과 승객 좌석에 따른 생존자 수에 대해 알아보자.
```python
pd.crosstab([data.Sex,data.Survived],data.Pclass,margins=True).style.background_gradient(cmap='summer_r')
```
코드를 보면 먼저 `Sex`에 따라 생존자 수를 나누고, 이후에 `Pclass` (승객 좌석 클래스)에 따라 그룹화해놓았다. <br/>
![sex_Pclass] <br/>
이를 **Factor plot**을 이용해 시각화해주었다.
```python
sns.factorplot('Pclass','Survived',hue='Sex',data=data)
plt.show()
```
![factorplot] <br/>

-> Pclass가 1, 2인 여성의 생존율은 100%에 가깝지만 Pclass가 3인 여성의 생존율은 50%임을 볼 수 있다. 남성의 경우 또한, Pclass가 떨어질 수록 생존률도 낮아진다. <nr/>
-> Pclass 또한 생존자 수를 분류하는 데 중요한 역할을 함을 알 수 있다. 
<br/>
+ <br/>
Factorplot은 주로 그룹별로 개수를 세어 그래프로 나타낼 때 쓰인다고 한다.

#### Age
`Age`는 **나이**를 말하고, **Continuous Feature**, 즉 연속적인 값을 가지는 수치형 데이터이다. 해당 컬럼에 대한 통계를 알아보기 위해 다음과 같은 내장함수를 썼다.
```python
print('Oldest Passenger was of:',data['Age'].max(),'Years')
print('Youngest Passenger was of:',data['Age'].min(),'Years')
print('Average Age on the ship:',data['Age'].mean(),'Years')
```
앞에서 생존자 수와 밀접한 관계를 가지고 있던 `Pclass`와 `Sex` 각각에 대해 `Age`와의 그래프를 `violinplot`으로 나타냈다.
```python
f,ax=plt.subplots(1,2,figsize=(18,8))
sns.violinplot("Pclass","Age", hue="Survived", data=data,split=True,ax=ax[0])
ax[0].set_title('Pclass and Age vs Survived')
ax[0].set_yticks(range(0,110,10))
sns.violinplot("Sex","Age", hue="Survived", data=data,split=True,ax=ax[1])
ax[1].set_title('Sex and Age vs Survived')
ax[1].set_yticks(range(0,110,10))
plt.show()
```
![age_violin] <br/>
-> 탑승한 아이(10세 미만)의 수는 3등석으로 갈수록 크며, 생존율은 좌석에 상관없이 양호한 편이다. <br/>
다른 좌석에 비해 1등석의 20~50세의 생존율이 높은편이며, 여성의 생존율이 훨씬 높다. 
<br/>남성의 경우, 나이가 있을 수록 생존가능성이 줄어듦을 확인할 수 있다.

#### `Age`의 Null값 처리해주기
앞에서 결측치의 개수를 세어봤을 때, `Age`는 177개의 `null` 값을 가지고 있었다. 이러한 `NaN`(Not A Number) 값을 대체하기 위해 데이터셋의 평균 나이를 할당할 수도 있다. <br/>
**그러나** 탑승객의 연령대가 굉장히 다양했기 때문에 4세 아이의 데이터였을지도 모르는 값을 평균 29세를 입력할 순 없다. <br/>
다행히도 이 데이터셋은 `Name`에 'Mr.'나 'Mrs.'와 같은 salutation이 포함되어 있어서 이들에 해당하는 평균값을 각각의 그룹에 할당할 수 있다.
<br/>
<br/>

그럼 이제 `Name`에 대해 정규화를 진행하여 'Mr.'나 'Mrs.' 같이 '.'을 포함하고 있는 데이터를 뽑아서 `Initial`이라는 열을 만들어 넣어주도록 하겠다. 
```python
data['Initial']=0
for i in data:
    data['Initial']=data.Name.str.extract('([A-Za-z]+)\.') #lets extract the Salutations
```
![Name_regex] <br/>
여기서 'Mlle'이나 'Mme'와 같은 오타를 


