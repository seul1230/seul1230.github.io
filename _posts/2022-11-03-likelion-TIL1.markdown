---
layout: post
title:  "2022_likelion TIL"
date:   2022-11-03 16:00:09 +0900
categories: Python_DataAnalysis
---
# [ 1103 ] Kaggle - Titanic
#### ๐ฉ๐ปโ๐ป ์ค๋์ฝ๋ ์ค์๊ฐ ๊ฐ์ _ ๋ฐ์กฐ์๋
์ด๋ฒ ์๊ฐ์๋ Kaggle์์ ํ์ฌ ์งํ ์ค์ธ [**Titanic - Machine Learning from Disaster**](https://www.kaggle.com/competitions/titanic) ๋ฐ์ดํฐ๋ฅผ ๋ฐํ์ผ๋ก ์ฝ๋๋ฅผ ์ง๊ณ  kaggle์ ์ ์ถ๊น์ง ํด๋ณด์๋ค.

***

## ๐ ์ด๋ก  ๋ฐ ๊ฐ๋

#### ๐ค ์ ๋ฒ ์๊ฐ๊น์ง ํ์ฉํ๋ pima ๋น๋จ๋ณ ๋ฐ์ดํฐ๋ณด๋ค titanic ๋ฐ์ดํฐ๊ฐ ์ข ๋ ์ด๋ ค์ด ์ด์ ?

- ์ฌ๋ฌ ๋ฐ์ดํฐ ํ์, ๊ฒฐ์ธก์น, ๋ ํฐ ๋ฐ์ดํฐ ํฌ๊ธฐ
<br/>

#### ๐ค titanic data์์ train๊ณผ test ๋ค๋ฅธ ์ ?

- ์ ๋ต ์ปฌ๋ผ์ ์ ๋ฌด / Index <br/>
    ์ง๋ํ์ต train์ ๊ฒฝ์ฐ, ์ ๋ต์ด ์ ๊ณต๋์ง๋ง test๋ ์ ๋ต์ด ์ ๊ณต๋์ง ์๋๋ค. <br/>
    kaggle์ ์ ์ถํด์ ์ฑ๋ฅ์ ํ์ธํด์ผ ํ๋ค.

### Data Preprocessing
* ๋ฐ์ดํฐ ์ ์ฒ๋ฆฌ
* ์ ๊ทํ
    * ์ซ์ ์ค์ผ์ผ์ ์ฐจ์ด๊ฐ ํด ๋ ๊ฐ์ ์ ๊ท๋ถํฌ๋ก ๋ง๋ค์ด ์ฃผ๊ฑฐ๋ ์ค์ผ์ผ ๊ฐ์ ๋ณ๊ฒฝํด ์ฃผ๋ ๊ฒ
* ์ด์์น / ๊ฒฐ์ธก์น
    * ์ด์์น / ๊ฒฐ์ธก์น๋ฅผ ์ ๊ฑฐํ๊ฑฐ๋ ๋์ฒด
* ์ธ์ฝ๋ฉ
    * ํธ์นญ, ํ์น์ง์ ์์น ๋ฑ ๋ฌธ์ ๋ฐ์ดํฐ๋ฅผ ์์นํ
    * ๋๋ฌด ๋ฒ์๊ฐ ํฐ ์์น ๋ฐ์ดํฐ๋ฅผ ๊ตฌ๊ฐํ

### Subplots
`plt.subplots`๋ฅผ ํ์ฉํด ๋ค์ํ ๊ทธ๋ํ๋ฅผ ํ ๋์ ๋น๊ตํ  ์ ์๋๋ก ์ฝ๋๋ฅผ ์ง๋ณด์.

```python
fig, axes = plt.subplots(nrows = 2, ncols = 2, figsize = (16,8))
sns.heatmap(train.isnull(), ax = axes[0, 0])
sns.heatmap(X_test.isnull(), ax = axes[0, 1])
sns.barplot(data = train.isnull(), ax = axes[1, 0], ci = None)
sns.barplot(data = X_test.isnull(), ax = axes[1, 1], ci = None)
```



### ํ์ต, ์์ธก์ ์ฌ์ฉํ  ์ปฌ๋ผ๋ง ๊ฐ์ ธ์ค๊ธฐ
* ์์นํ ๋ฐ์ดํฐ๋ง ๊ฐ์ ธ์ค๊ธฐ
    * `X_train.select_dtypes(include = "number").columns.tolist()`
* test ์ ์๋ ๋ฐ์ดํฐ์ ํ์ ์ญ์ ๋ฅผ ํ๋ฉด ์ ๋จ 
    * ์ญ์ ํ๋ฉด ์์ธกํด์ผ ํ๋ ๋ฌธ์ ์ธ๋ฐ ์์ธก์ ๋ชป ํ๊ธฐ ๋๋ฌธ์


#### ๐ค ์ ๋ต ๋ฐ์ดํฐ ์์ด๋ ์ฑ๋ฅํ๊ฐํด๋ณผ ์ ์์๊น?
- `hold-out-validation` ์ด๋ผ๋ ์ง `cross_validation`์ ์ฌ์ฉํด์ ๊ตฌํ  ์ ์๋ค!
  - `hold-out-validation` : valid ๊ฐ ํ ์กฐ๊ฐ 
  - `cross_validation` : valid ๊ฐ ์ฌ๋ฌ ์กฐ๊ฐ

### Scoring

#### ๐ค R2 score?
: R2 Score๋ ํ๊ท ๋ชจ๋ธ์ด ์ผ๋ง๋ '์ค๋ช๋ ฅ' ์ด ์๋๋๋ฅผ ์๋ฏธํ๋ค๋ค. 
**'์ค์  ๊ฐ์ ๋ถ์ฐ ๋๋น ์์ธก๊ฐ์ ๋ถ์ฐ ๋น์จ'** ๋ก ์์ฝ ๋  ์ ์์ผ๋ฉฐ, ์์ธก ๋ชจ๋ธ๊ณผ ์ค์  ๋ชจ๋ธ์ด ์ผ๋ง๋ ๊ฐํ ์๊ด๊ด๊ณ(Correlated)๋ฅผ ๊ฐ์ง๋๊ฐ๋ก ์ค๋ช๋ ฅ์ ์์ฝํ  ์๋ ์๋ค. ํ๊ท ๋ชจ๋ธ์ ํ๊ฐํ  ๋ ์ฌ์ฉ

> ํผ์ฒ์์ง๋์ด๋ง๋ ๋ง์ด ํ ์๋ก ๊ผญ ์ ์๊ฐ ์ค๋ฅธ๋ค๋ ๋ณด์ฅ์ ์์ต๋๋ค.<br/>ํผ์ฒ์์ง๋์ด๋ง์ ์ ๋๋ก ๋๋ฉ์ธ์ง์, EDA๋ฅผ ํตํด์ ์์กด์ฌ๋ถ์ ์ค์ํ ์ญํ ์ ํ๋ ๋ณ์๋ฅผ ์ฐพ์์ ์ ์ฒ๋ฆฌ ํด์ฃผ๋ฉด ์ฑ๋ฅ์ด ๋ ๋์์ง ์ ์์ต๋๋ค! <br/> - ์กฐ์๋

### Tree Algorithm ๋ถ์ํ๊ธฐ

โ๏ธ **์ง๋ ๋ถ์๋**
* ์งํฉ์ ์ด์ง์ ์ธ ๊ฒ์ด ์ผ๋ง๋ ์์๋์ง๋ฅผ ์ธก์ ํ๋ ์งํ์ด๋ฉฐ CART ์๊ณ ๋ฆฌ์ฆ์์ ์ฌ์ฉํ๋ค. ์ด๋ค ์งํฉ์์ ํ ํญ๋ชฉ์ ๋ฝ์ ๋ฌด์์๋ก ๋ผ๋ฒจ์ ์ถ์ ํ  ๋ ํ๋ฆด ํ๋ฅ ์ ๋งํ๋ค. ์งํฉ์ ์๋ ํญ๋ชฉ์ด ๋ชจ๋ ๊ฐ๋ค๋ฉด ์ง๋ ๋ถ์๋๋ ์ต์๊ฐ(0)์ ๊ฐ๊ฒ ๋๋ฉฐ ์ด ์งํฉ์ ์์ ํ ์์ํ๋ค๊ณ  ํ  ์ ์๋ค.<br/><br/>

โ๏ธ **์ํธ๋กํผ - ์ ๋ณดํ๋๋**
* ID3, C4.5 ๊ทธ๋ฆฌ๊ณ  C5.0 ํธ๋ฆฌ ์์ฑ ์๊ณ ๋ฆฌ์ฆ์์ ์ฌ์ฉ๋๊ณ  ์๋ค. 
* ์ ๋ณด ํ๋๋(information gain)์ ์ ๋ณด ์ด๋ก ์ ์ํธ๋กํผ์ ๊ฐ๋์ ๊ทผ๊ฑฐ๋ฅผ ๋๊ณ  ์๋ค.
* ๊ธฐ์ ์ ์ธ ๊ด์ ์์ ๋ณด๋ฉด ์ ๋ณด๋ ๋ฐ์ ๊ฐ๋ฅํ ์ฌ๊ฑด์ด๋ ๋ฉ์์ง์ ํ๋ฅ ๋ถํฌ์ ์์ ๋ก๊ทธ๋ก ์ ์ํ  ์ ์๋ค.
* ๊ฐ ์ฌ๊ฑด์ ์ ๋ณด๋์ ๊ทธ ๊ธฐ๋๊ฐ, ๋๋ ํ๊ท ์ด ์๋ ์ํธ๋กํผ์ธ ํ๋ฅ ๋ณ์๋ฅผ ํ์ฑ<br/><br/>

โ๏ธ **์๋ ์ํธ๋กํผ**
* ์ ๋ณด ์ํธ๋กํผ๋ผ๊ณ ๋ ํจ
* 2 ๊ฐ์ ๊ณต์ ํ ๋์ ์ ๋์ง ๋ ์ ๋ณด ์ํธ๋กํผ๋ ๋ฐ์ ๊ฐ๋ฅํ ๋ชจ๋  ๊ฒฐ๊ณผ์ ๊ฐ์์ ๋ฐ์ด 2 ์ธ ๋ก๊ทธ๋ฅผ ์ทจํ ๊ฒ๊ณผ ๊ฐ๋ค. 2 ๊ฐ์ ๋์ ์ ๋์ง๋ฉด 4 ๊ฐ์ง ๊ฒฐ๊ณผ๊ฐ ๋ฐ์ํ  ์ ์๊ณ , ์ํธ๋กํผ๋ 2 ๋นํธ๊ฐ ๋๋ค. ์ผ๋ฐ์ ์ผ๋ก ์ ๋ณด ์ํธ๋กํผ๋ ๋ชจ๋  ๋ฐ์๊ฐ๋ฅํ ๊ฒฐ๊ณผ์ ํ๊ท ์ ์ธ ์ ๋ณด๊ฐ ๋๋ค.<br/><br/>

#### ๐ค ์ง๋๋ถ์๋์ ์ํธ๋กํผ๋ฅผ ์ฌ์ฉํ๋ ๋ชฉ์ ?
- ๋ถ๋ฅ๊ฐ ์ ๋์๋์ง ํ์ธ!!!!
- ๋ถ๋ฅ๋ฅผ ํ์ ๋ True, False ๋ก ์์ ํ ๋๋์ง ์๋๋ฐ ์ด ๋ ๊ฐ์ด ์ผ๋ง๋ ์์ฌ์๋์ง ์์น๋ก ํ์ธํ๊ธฐ ์ํด์.
- 0์ ๊ฐ๊น์ธ ์๋ก ๋ค๋ฅธ ๊ฐ์ด ์์ฌ์์ง ์์ ์ํ. 
- ๋ถ๋ฅ์ ๋ถํ ์ ๋ํ ํ์ง์ ํ๊ฐํ๊ณ  ์ถ์ ๋ ์ฌ์ฉ.


### Name์์ ํธ์นญ ๋ถ๋ฆฌ
* str.replace
    * .str
    * expand = True
* ์ต๋ชํจ์ lambda


## ๐ป ์ค์ต ์์  ์ฝ๋

### 1. ๋ฐ์ดํฐ์ ๋ก๋
**pd.read_csv**์ **index_col** ์ฑ์ง์ ์ด์ฉํ๋ฉด `PassengerId`๋ฅผ index๋ก ํด์ ๋ฐ์ดํฐ๋ฅผ ๋ถ๋ฌ์ฌ ์ ์๋ค. 
```python
train = pd.read_csv('dataset/titanic/train.csv', index_col = "PassengerId")
train
```
![titanic_train](/assets/img/img_221101/titanic_train.png){: .center} <br/><br/>

test data๋ ๋๊ฐ์ด ๋ถ๋ฌ์ค์.
```python
X_test = pd.read_csv('dataset/titanic/test.csv', index_col = "PassengerId")
display(X_test.head())
X_test.shape
```
![titanic_test](/assets/img/img_221101/titanic_test.png){: .center} <br/><br/>

### 2. train์ X์ y๋ก ๋ถ๋ฆฌ
train data๋ฅผ X์ y๋ก ๋ถ๋ฆฌํด์ฃผ์. ์ด๋ y๋ก ์ฐ์ผ label์ `Survived`์ด๋ค. 
```python
X_train = train.drop(['Survived'], axis = 1)
y_train = train['Survived']
display(X_train.head())
```
![x_train_drop](/assets/img/img_221101/x_train_drop.png){: .center} <br/><br/>


### 3. label ๋น๋์ ์๊ฐํ
์ด๋ ๊ฒ ๋ถ๋ฆฌํด์ค label๊ฐ์ ๋น๋์๋ฅผ ์๊ฐํํด๋ณด์.
```python
sns.countplot(x = y_train)
```
![label_count](/assets/img/img_221101/label_count.png){: .center width="50%"} <br/><br/>


### 4. ๊ฒฐ์ธก์น ํ์ธ
์ด ๋ฐ์ดํฐ์๋ ๊ฒฐ์ธก์น๊ฐ ๋ง์ด ํฌํจ๋์ด ์๋ค. ๊ฒฐ์ธก์น๊ฐ ์ผ๋ง๋ ์๋์ง ์๊ฐํํด๋ณด์.
```python
fig, axes = plt.subplots(nrows = 2, ncols = 2, figsize = (16,8))
sns.heatmap(train.isnull(), ax = axes[0, 0])
sns.heatmap(X_test.isnull(), ax = axes[0, 1])
sns.barplot(data = train.isnull(), ax = axes[1, 0], ci = None)
sns.barplot(data = X_test.isnull(), ax = axes[1, 1], ci = None)
```
![nan_eda](/assets/img/img_221101/nan_eda.png){: .center width="70%"} <br/><br/>


๊ฒฐ์ธก์น์ ๋น์จ์ ํ์ธํ๋ ค๋ฉด ๊ฐ๋จํ๊ฒ ๋ค์๊ณผ ๊ฐ์ด ์คํ์ํค๋ฉด ๋๋ค.
```python
X_test.isnull().mean() * 100
```


### 5. ํ์๋ณ์ ๋ง๋ค๊ธฐ

#### ๊ฐ์กฑ์ ์
```python
X_train['family'] = X_train['Parch'] + X_train['SibSp'] + 1
X_test['family'] = X_test['Parch'] + X_test['SibSp'] + 1
```

#### ์ฑ๋ณ
```python
X_train['Gender'] = X_train['Sex'] == 'female'
X_test['Gender'] = X_test['Sex'] == 'female'
```

#### **Name**์์ ํธ์นญ๋ง ๋ฝ์์์ **title**์ ์ ์ฅํ๊ธฐ
```python
X_train['title'] = X_train['Name'].map(lambda x : x.split('.')[0].split(' ')[-1].strip())
X_test['title'] = X_test['Name'].map(lambda x : x.split('.')[0].split(' ')[-1].strip())
```

#### **title**์์ ๋น๋์๊ฐ ์์ ๊ฐ์ **etc**๋ก ๋ฌถ์ด์ฃผ๊ธฐ
```python
X_train['title'] = X_train['title'].str.replace('Miss', 'Ms')
X_test['title'] = X_test['title'].str.replace('Miss', 'Ms')

# 2๊ฐ ์ดํ -> etc๋ก ๋ฌถ์์ฐ๊ธฐ
title_count = X_train["title"].value_counts()
title = title_count[title_count > 2].index.to_list()

X_train['TitleEtc'] = X_train['title'].map(lambda x : x if x in title else 'etc')
X_test['TitleEtc'] = X_test['title'].map(lambda x : x if x in title else 'etc')
```

#### Cabin ์๊ธ์๋ง ๋ฐ์ค๊ธฐ
```python
# ์ฒซ ์ํ๋ฒณ๋ง ๋ฐ๋ก ํ์๋ณ์ ์ง์ 
# ์๋ ๊ฐ์ ์๋ฏธ ๋ถ์ฌ -> 'N'์ผ๋ก ๋์ฒด
X_train["Cabin_initial"] = X_train["Cabin"].fillna('N')
X_train["Cabin_initial"] = X_train["Cabin_initial"].str[0]

X_test["Cabin_initial"] = X_test["Cabin"].fillna('N')
X_test["Cabin_initial"] = X_test["Cabin_initial"].str[0]

# T Cabin ํ๋๋ฐ์ ์์ + test data์ ์์
X_train['Cabin_initial'] = X_train['Cabin_initial'].replace('T', 'A')
```

#### Age์ ๊ฒฐ์ธก์น ์ฑ์์ฃผ๊ธฐ
```python
X_train['Age_fill'] = X_train['Age'].interpolate(method = 'values')
X_test['Age_fill'] = X_test['Age'].interpolate(method = 'values')
```

#### Fare์ ๊ฒฐ์ธก์น ์ฑ์์ฃผ๊ธฐ
```python
X_train["Fare_fill"] = X_train["Fare"]
X_test["Fare_fill"] = X_test["Fare"].fillna(X_test["Fare"].median())
```


### 6. ํ์ต, ์์ธก์ ์ฌ์ฉํ  Columns
```python
feature_names = ['Pclass', 'Fare_fill',
                 'Embarked', 'family', 
                 'Gender', 'TitleEtc',
                 'Age_where'
                ]

X_train = pd.get_dummies(X_train[feature_names])
X_test = pd.get_dummies(X_test[feature_names])
```

#### 7. ๋จธ์ ๋ฌ๋ ์๊ณ ๋ฆฌ์ฆ ๊ฐ์ ธ์ค๊ธฐ
```python
from sklearn.tree import DecisionTreeClassifier

model = DecisionTreeClassifier(random_state = 42)
model.fit(X_train_1, y_train)
```

#### 8. Cross Validation
```python
from sklearn.model_selection import cross_val_predict, cross_validate
y_predict = cross_val_predict(model, X_train_1, y_train,cv=5, n_jobs=-1, verbose=1)

# ์ฑ์ 
from sklearn.metrics import accuracy_score
valid_accuracy = accuracy_score(y_train, y_predict)
valid_accuracy
```


#### 9. ์ ํ๋ ์ธก์ ํ๊ธฐ
```python
max_depth = list(range(3, 15, 2))
max_depth

# max_features ๋น์จ
max_features = [0.3, 0.5, 0.7, 0.8, 0.9]

parameters = {"max_depth" : max_depth, "max_features" : max_features}
parameters


from sklearn.model_selection import GridSearchCV
clf = GridSearchCV(model, parameters, n_jobs = -1, cv = 5, scoring = 'accuracy', verbose = 2)

# ๋ฐ์ดํฐ๋ฅผ ๋จธ์ ๋ฌ๋ ๋ชจ๋ธ๋ก ํ์ต(fit)ํฉ๋๋ค.
clf.fit(X_train_1, y_train)
```

#### 10. Best Estimator
```python
# ์ต์ ์ ํ๋ผ๋ฏธํฐ ๊ฐ์ง ๋ชจํ
best_clf = clf.best_estimator_
best_clf.fit(X_train_1, y_train)

# ์ต๊ณ  ์ฑ๋ฅ
pd.DataFrame(cross_validate(best_clf, X_train_1, y_train,cv=5))['test_score'].mean()
```

#### 11. Feature์ ์ค์๋ ์๊ฐํํ๊ธฐ
```python
sns.barplot(x = best_clf_rf.feature_importances_, y = best_clf_rf.feature_names_in_)
```
![feature_importances](/assets/img/img_221101/feature_importances.png){: .center width="70%"} <br/><br/>


#### 12. ์์ธกํ๊ธฐ
```python
prediction = best_clf.predict(X_test_1)
```

#### 13. Kaggle์ ์ ์ถ
![kaggle_submit](/assets/img/img_221101/kaggle_submit.png){: .center} <br/><br/>

***
๐ค [youtube ์์](https://www.youtube.com/watch?v=ZTRKojTLE8M) ๋ณด๊ณ  Thread์ โ๋ดค์ด์!โ ๋จ๊ธฐ๊ธฐ

์ด ์ ํ๋ธ์ ๋ํ ๋ด์ฉ์ ํ์ ๋ฐ๋ก ์ ๋ฆฌํ  ์์ ์ด๋ค. ํฌ์คํธ๋ฅผ ์ฌ๋ฆฌ๊ฒ ๋๋ฉด ํด๋น ๊ธ์ ์์ ํด ๋งํฌ๋ ๊ฑธ์ด๋๊ฒ ๋ค.


### ๋ค์ ํฌ์คํธ์์ ๋ง๋์ ๐




<!-- ### ๐พใใ๐พ
### ๐พใใ๐พ
### ๐พใใ๐พ
### ๐พใใ๐พ
### ๐พใใ๐พ
### ๐พใใ๐พ -->
