---
layout: post
title:  "2022_likelion TIL"
date:   2022-11-03 16:00:09 +0900
categories: Python_DataAnalysis
---
# [ 1103 TIL ] Kaggle competition - Titanic
## 👩🏻‍💻 오늘코드 실시간 강의 _ 박조은님
오늘도 화이팅 :)

## 📚 오늘의 TIL - Kaggle competition : Titanic

이번 시간에는 Kaggle에서 현재 진행 중인 **Titanic - Machine Learning from Disaster** 데이터를 바탕으로 코드를 짜고 kaggle에 제출까지 해보았다.

## 📙 이론 및 개념

#### 🤔 저번 시간까지 활용했던 pima 당뇨병 데이터보다 titanic 데이터가 좀 더 어려운 이유?

- 여러 데이터 타입, 결측치, 더 큰 데이터 크기
<br/>

#### 🤔 titanic data에서 train과 test 다른 점?

- 정답 컬럼의 유무 / Index <br/>
    지도학습 train의 경우, 정답이 제공되지만 test는 정답이 제공되지 않는다. <br/>
    kaggle에 제출해서 성능을 확인해야 한다.

### Data Preprocessing
* 데이터 전처리
* 정규화
    * 숫자 스케일의 차이가 클 때 값을 정규분포로 만들어 주거나 스케일 값을 변경해 주는 것
* 이상치 / 결측치
    * 이상치 / 결측치를 제거하거나 대체
* 인코딩
    * 호칭, 탑승지의 위치 등 문자 데이터를 수치화
    * 너무 범위가 큰 수치 데이터를 구간화

### Subplots
`plt.subplots`를 활용해 다양한 그래프를 한 눈에 비교할 수 있도록 코드를 짜보자.

```python
fig, axes = plt.subplots(nrows = 2, ncols = 2, figsize = (16,8))
sns.heatmap(train.isnull(), ax = axes[0, 0])
sns.heatmap(X_test.isnull(), ax = axes[0, 1])
sns.barplot(data = train.isnull(), ax = axes[1, 0], ci = None)
sns.barplot(data = X_test.isnull(), ax = axes[1, 1], ci = None)
```



### 학습, 예측에 사용할 컬럼만 가져오기
* 수치형 데이터만 가져오기
    * `X_train.select_dtypes(include = "number").columns.tolist()`
* test 에 있는 데이터의 행은 삭제를 하면 안 됨 
    * 삭제하면 예측해야 하는 문제인데 예측을 못 하기 때문에


#### 🤔 정답 데이터 없어도 성능평가해볼 수 있을까?
- `hold-out-validation` 이라든지 `cross_validation`을 사용해서 구할 수 있다!
  - `hold-out-validation` : valid 가 한 조각 
  - `cross_validation` : valid 가 여러 조각

### Scoring

#### 🤔 R2 score?
: R2 Score는 회귀 모델이 얼마나 '설명력' 이 있느냐를 의미한다다. 
**'실제 값의 분산 대비 예측값의 분산 비율'** 로 요약 될 수 있으며, 예측 모델과 실제 모델이 얼마나 강한 상관관계(Correlated)를 가지는가로 설명력을 요약할 수도 있다. 회귀 모델을 평가할 때 사용

> 피처엔지니어링도 많이 할수록 꼭 점수가 오른다는 보장은 없습니다.<br/>피처엔지니어링을 제대로 도메인지식, EDA를 통해서 생존여부에 중요한 역할을 하는 변수를 찾아서 전처리 해주면 성능이 더 나아질 수 있습니다! <br/> - 조은님

### Tree Algorithm 분석하기

✔️ **지니 불순도**
* 집합에 이질적인 것이 얼마나 섞였는지를 측정하는 지표이며 CART 알고리즘에서 사용한다. 어떤 집합에서 한 항목을 뽑아 무작위로 라벨을 추정할 때 틀릴 확률을 말한다. 집합에 있는 항목이 모두 같다면 지니 불순도는 최솟값(0)을 갖게 되며 이 집합은 완전히 순수하다고 할 수 있다.<br/><br/>

✔️ **엔트로피 - 정보획득량**
* ID3, C4.5 그리고 C5.0 트리 생성 알고리즘에서 사용되고 있다. 
* 정보 획득량(information gain)은 정보 이론의 엔트로피의 개념에 근거를 두고 있다.
* 기술적인 관점에서 보면 정보는 발생 가능한 사건이나 메시지의 확률분포의 음의 로그로 정의할 수 있다.
* 각 사건의 정보량은 그 기댓값, 또는 평균이 섀넌 엔트로피인 확률변수를 형성<br/><br/>

✔️ **섀넌 엔트로피**
* 정보 엔트로피라고도 함
* 2 개의 공정한 동전을 던질 때 정보 엔트로피는 발생 가능한 모든 결과의 개수에 밑이 2 인 로그를 취한 것과 같다. 2 개의 동전을 던지면 4 가지 결과가 발생할 수 있고, 엔트로피는 2 비트가 된다. 일반적으로 정보 엔트로피는 모든 발생가능한 결과의 평균적인 정보가 된다.<br/><br/>

#### 🤔 지니불순도와 엔트로피를 사용하는 목적?
- 분류가 잘 되엇는지 확인!!!!
- 분류를 했을 때 True, False 로 완전히 나뉘지 않는데 이 때 값이 얼마나 섞여있는지 수치로 확인하기 위해서.
- 0에 가까울 수록 다른 값이 섞여있지 않은 상태. 
- 분류의 분할에 대한 품질을 평가하고 싶을 때 사용.


### Name에서 호칭 분리
* str.replace
    * .str
    * expand = True
* 익명함수 lambda


## 💻 실습 예제 코드

### 1. 데이터셋 로드
**pd.read_csv**의 **index_col** 성질을 이용하면 `PassengerId`를 index로 해서 데이터를 불러올 수 있다. 
```python
train = pd.read_csv('dataset/titanic/train.csv', index_col = "PassengerId")
train
```
![titanic_train](/assets/img/img_221101/titanic_train.png){: .center} <br/><br/>

test data도 똑같이 불러오자.
```python
X_test = pd.read_csv('dataset/titanic/test.csv', index_col = "PassengerId")
display(X_test.head())
X_test.shape
```
![titanic_test](/assets/img/img_221101/titanic_test.png){: .center} <br/><br/>

### 2. train을 X와 y로 분리
train data를 X와 y로 분리해주자. 이때 y로 쓰일 label은 `Survived`이다. 
```python
X_train = train.drop(['Survived'], axis = 1)
y_train = train['Survived']
display(X_train.head())
```

### 3. label 빈도수 시각화
이렇게 분리해준 label값의 빈도수를 시각화해보자.
```python
sns.countplot(x = y_train)
```

### 4. 결측치 확인
이 데이터에는 결측치가 많이 포함되어 있다. 결측치가 얼마나 있는지 시각화해보자.
```python
fig, axes = plt.subplots(nrows = 2, ncols = 2, figsize = (16,8))
sns.heatmap(train.isnull(), ax = axes[0, 0])
sns.heatmap(X_test.isnull(), ax = axes[0, 1])
sns.barplot(data = train.isnull(), ax = axes[1, 0], ci = None)
sns.barplot(data = X_test.isnull(), ax = axes[1, 1], ci = None)
```

결측치의 비율을 확인하려면 간단하게 다음과 같이 실행시키면 된다.
```python
X_test.isnull().mean() * 100
```





### 5. 파생변수 만들기

#### 가족의 수
```python
X_train['family'] = X_train['Parch'] + X_train['SibSp'] + 1
X_test['family'] = X_test['Parch'] + X_test['SibSp'] + 1
```

#### 성별
```python
X_train['Gender'] = X_train['Sex'] == 'female'
X_test['Gender'] = X_test['Sex'] == 'female'
```

#### **Name**에서 호칭만 뽑아와서 **title**에 저장하기
```python
X_train['title'] = X_train['Name'].map(lambda x : x.split('.')[0].split(' ')[-1].strip())
X_test['title'] = X_test['Name'].map(lambda x : x.split('.')[0].split(' ')[-1].strip())
```

#### **title**에서 빈도수가 작은 값은 **etc**로 묶어주기
```python
X_train['title'] = X_train['title'].str.replace('Miss', 'Ms')
X_test['title'] = X_test['title'].str.replace('Miss', 'Ms')

# 2개 이하 -> etc로 묶엊우기
title_count = X_train["title"].value_counts()
title = title_count[title_count > 2].index.to_list()

X_train['TitleEtc'] = X_train['title'].map(lambda x : x if x in title else 'etc')
X_test['TitleEtc'] = X_test['title'].map(lambda x : x if x in title else 'etc')
```

#### Cabin 앞글자만 따오기
```python
# 첫 알파벳만 따로 파생변수 지정
# 없는 값에 의미 부여 -> 'N'으로 대체
X_train["Cabin_initial"] = X_train["Cabin"].fillna('N')
X_train["Cabin_initial"] = X_train["Cabin_initial"].str[0]

X_test["Cabin_initial"] = X_test["Cabin"].fillna('N')
X_test["Cabin_initial"] = X_test["Cabin_initial"].str[0]

# T Cabin 하나밖에 없음 + test data에 없음
X_train['Cabin_initial'] = X_train['Cabin_initial'].replace('T', 'A')
```




### 6. 학습, 예측에 사용할 Columns
```python
feature_names = X_train.select_dtypes(include = "number").columns.tolist()
feature_names.append('Gender')
feature_names
```


***
𖤐 [youtube 영상](https://www.youtube.com/watch?v=ZTRKojTLE8M) 보고 Thread에 ‘봤어요!’ 남기기

이 유튜브에 대한 내용은 후에 따로 정리할 예정이다. 포스트를 올리게 되면 해당 글을 수정해 링크도 걸어두겠다.


### 다음 포스트에서 만나요 🙌




<!-- ### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾 -->
