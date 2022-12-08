---
layout: post
title:  "2022_likelion TIL"
date:   2022-12-08 16:00:09 +0900
categories: Python_DataAnalysis
---
# [ 1208 ] Image Classification 실습
#### 👩🏻‍💻 오늘코드 실시간 강의 _ 박조은님
해당 포스트는 [**TensorFlow - 이미지 분류**](https://www.tensorflow.org/tutorials/images/classification) 튜토리얼을 참고해 CNN 레이어를 쌓아보았다.


<!-- 📙 이번 포스트에서는 **이론 및 개념**을 중심적으로 다룰 예정이다. -->



<br/>

***


## 📙 이론 및 개념 <br/>

### 1. 합성곱 신경망 <font color='lightgray'>CNN, Convolutional Neural Network</font> <br/>

#### [ <mark style='background-color: #fff5b1'>CNN 등장배경</mark> ]
**다층 퍼셉트론 MLP**는 이미지 픽셀마다 **다른 가중치 값**을 부여하며, 픽셀 값 하나만 달라져도 다르게 계산된다. <br/>

![](/assets/img/img_221208/mlp_cnn.png){: .center width='70%'}


➡️ **CNN**을 통해 객체의 위치가 바뀌어도 같은 특징을 추출하도록 각 영역의 **인접 데이터**를 조사해 특징을 파악하자 !

#### [ <mark style='background-color: #fff5b1'>CNN이란?</mark> ]
CNN은 이미지를 분석하기 위해 패턴을 찾는데 유용한 알고리즘으로 데이터에서 이미지를 직접 학습하고 패턴을 사용해 이미지를 분류한다. CNN의 핵심적인 개념은 이미지의 **공간정보를 유지하며 학습을 한다**는 것이다. CNN은 **필터링 기법**을 인공 신경망에 적용함으로써 이미지를 더욱 효과적으로 처리하기 위해  Yann LeCun 이 제안하였으며 현재 딥 러닝에서 이용되고 있는 형태의 CNN이 제안되었다. `(image_height, image_width, color_channels)` 의 텐서를 사용하며, 이때 color_channels 는 (**<font color='red'>R</font>**,**<font color='green'>G</font>**,**<font color='blue'>B</font>**)를 나타낸다. TF API는 다음의 방법으로 사용한다.

```python
model.add(layers.Conv2D(filters=64, kernel_size=(3, 3), activation='relu'))
model.add(layers.MaxPooling2D(pool_size=(2, 2)))
```

![](/assets/img/img_221208/cnn_how.gif){: .center width='70%'}

**1️⃣ Convolution 연산을 하면 필터를 통과시켜서 filters 개수만큼 피처맵을 생성한다.**<br/><br/>
**2️⃣ 피처맵 Output에 Activation Function 을 통과시켜서 액티베이션을 생성한다.** <br/>
    => ReLU 등을 사용하게 되면 출력값에 활성화 함수를 적용한 액티베이션맵을 반환한다. <br/><br/>
**3️⃣ Pooling 에는 Max, Average, Min 등 여러 방법이 있는데, 보통 MaxPooling 을 주로 사용한다.** <br/>
    => 흑백이미지에서는 MinPooling 을 사용하기도 한다.<br/><br/>
**4️⃣ CNN 관련 논문** 
* **VGG16**, **VGG19** : 층을 16개, 19개 만큼 깊게 만든 것을 의미
* 30~50층까지 쌓기도 하고 100층 정도 쌓기도 합니다. 층의 수를 모델의 이름에 붙이기도 합니다. <br/>
    => 과거에 비해 GPU 등의 연산을 더 많이 지원하기 때문에 연산이 빨라진 덕분이기도 합니다. <br/>

**5️⃣ Padding, Stride** <br/>
* **Padding**, **Stride** : 입력과 출력사이즈를 조정
* Stride는 필터의 이동 보폭을 조정하기도 함

<br/>

**🚀 CNN 작동원리 보러가기** <br/>
CNN Explainer : <https://poloclub.github.io/cnn-explainer/>

![](/assets/img/img_221208/cnn_how.png){: .center width='70%'}




### 2. Pooling
* 합성곱층에서 받은 최종 **Activation Map** (출력 데이터) 의 크기를 줄이거나 특정 데이터 강조
* 데이터 사이즈 줄여주며 노이즈 상쇄시키고, 미세한 부분에서 일관적인 특징 제공
* Max pooling / Average Pooling / Min Pooling
* **<mark style='background-color: #fff5b1'>Pooling을 해주는 이유</mark>**
    * 파라미터를 줄여서 이미지 추상화 -> **overfitting** 방지
    * 파라미터가 줄어서 계산이 감소, 하드웨어에 있는 리소스가 절약됨
    * 이미지 크기를 줄여 **계산을 효율**적으로 하고 **데이터를 압축**하는 효과
    * **속도 증가**
* 대체적으로 컬러이미지에서는 MaxPooling 을 가장 많이 사용하는 편이다.
* 흑백이미지에서는 MinPooling 을 사용하기도 한다.


### 3. Padding

![](/assets/img/img_221208/padding.png){: .center width='70%'}

* valid
    * 유효한 영역만 출력이 됩니다. 따라서 출력 이미지 사이즈는 입력 사이즈보다 작음
* same
    * 출력 이미지 사이즈가 입력 이미지 사이즈와 동일


* [**CNN Explainer**](https://poloclub.github.io/cnn-explainer/)에 들어가면 CNN의 원리를 눈으로 확인하고 Hyperparameter를 바꿔주었을 때 필터가 어떻게 작동하는지 볼 수 있다.

![](/assets/img/img_221208/understanding_hyperparameter.png){: .center width='60%'}


### 4. Image Overfitting 문제가 발생하는 경우
* 이미지 전처리
    * 중점적인 이유 - 노이즈 데이터가 많다
* 훈련 예제가 적을 때
    * 모델은 새로운 예제에서 모델의 성능에 부정적인 영향을 미치는 정도까지 훈련 예제의 노이즈나 원치 않는 세부까지 학습함
    * 데이터 증강, 드롭아웃 추가 등

### 5. 이미지를 로드하는 방법
1️⃣ **matplotlib.pyplot**의 **imread()**를 사용하는 방법 <br/>
2️⃣ **PIL** <font color='lightgray'>Pillow</font> 로 불러오는 방법 <br/>
&nbsp; => PIL 로 **접고돌리고땡기고**가 다 가능. <br/>
&nbsp; => TF 내부에서도 PIL 이나 OpenCV를 사용해서 **접고돌리고땡기고** <br/>
&nbsp; => 이미지 편집기를 만들 수도 있음.<br/>
3️⃣ **OpenCV**로 불러오는 방법 : Computer Vision 에 주로 사용하는 도구로 동영상처리 등에 주로 사용

### 6. keras의 ImageDataGenerator 
* 공간 레벨 변형
    * Flip : 상하, 좌우 반전
    * Rotation : 회전
    * Shift : 이동
    * Zoom : 확대, 축소
    * Shear : 눕히기
* 픽셀 레벨 변형
    * Bright : 밝기 조정
    * Channel Shift : RGB 값 변경
    * ZCA Whitening : Whitening 효과





<br/>

***

## 💻 실습 예제 코드
### : CNN tutorial

**데이터셋 불러오기** - CIFAR10 데이터세트
```python
(train_images, train_labels), (test_images, test_labels) = datasets.cifar10.load_data()

# Normalize pixel values to be between 0 and 1
train_images, test_images = train_images / 255.0, test_images / 255.0
```

**데이터 확인**

```python
class_names = ['airplane', 'automobile', 'bird', 'cat', 'deer',
               'dog', 'frog', 'horse', 'ship', 'truck']

plt.figure(figsize=(10,10))
for i in range(25):
    plt.subplot(5,5,i+1)
    plt.xticks([])
    plt.yticks([])
    plt.grid(False)
    plt.imshow(train_images[i])
    # The CIFAR labels happen to be arrays, 
    # which is why you need the extra index
    plt.xlabel(class_names[train_labels[i][0]])
plt.show()
```
![](/assets/img/img_221208/CIFAR.png){: .center width='30%'} 


**합성곱 층 만들기**

```python
model = models.Sequential()
model.add(layers.Conv2D(filters = 32, kernel_size = (3, 3), 
                        activation='relu', input_shape=(32, 32, 3)))
model.add(layers.MaxPooling2D(pool_size = (2, 2)))
model.add(layers.Conv2D(filters = 64, kernel_size = (3, 3), activation='relu'))
model.add(layers.MaxPooling2D(pool_size = (2, 2)))
model.add(layers.Conv2D(filters = 64, kernel_size = (3, 3), activation='relu'))
```

## 💻 실습 예제 코드
### : Image Classification
해당 튜토리얼은 꽃 5가지 이미지를 학습하고 분류하는 예제이다. ['daisy', 'dandelion', 'roses', 'sunflowers', 'tulips'] 5가지 꽃을 분류한다.

**[ 이미지 확인 ]**
```python
roses = list(data_dir.glob('roses/*'))
PIL.Image.open(str(roses[0]))
```
![](/assets/img/img_221208/rose_0.png){: .center width='30%'} 


**[ 데이터 시각화하기 ]**
```python
import matplotlib.pyplot as plt

plt.figure(figsize=(10, 10))
for images, labels in train_ds.take(1):
  for i in range(9):
    ax = plt.subplot(3, 3, i + 1)
    plt.imshow(images[i].numpy().astype("uint8"))
    plt.title(class_names[labels[i]])
    plt.axis("off")
```
![](/assets/img/img_221208/flowers.png){: .center width='50%'} 

<br/>


**[ 성능을 높이도록 데이터셋 구성하기 ]** <br/>
버퍼링된 prefetch를 사용하여 I/O를 차단하지 않고 디스크에서 데이터 생성할 수 있도록 하겠다. prefetch는 훈련하는 동안 데이터 전처리 및 모델 실행을 중첩시킨다.
```python
AUTOTUNE = tf.data.AUTOTUNE

train_ds = train_ds.cache().shuffle(1000).prefetch(buffer_size=AUTOTUNE)
val_ds = val_ds.cache().prefetch(buffer_size=AUTOTUNE)
```

**[ 데이터 증강 ]**
```python
data_augmentation = keras.Sequential(
  [
    layers.RandomFlip("horizontal",
                      input_shape=(img_height,
                                  img_width,
                                  3)),
    layers.RandomRotation(0.1),
    layers.RandomZoom(0.1),
  ]
)
```

**[ 모델 만들기 ]**
```python
num_classes = len(class_names)

model = Sequential([
  data_augmentation,
  layers.Rescaling(1./255),
  layers.Conv2D(16, 3, padding='same', activation='relu'),
  layers.MaxPooling2D(),
  layers.Conv2D(32, 3, padding='same', activation='relu'),
  layers.MaxPooling2D(),
  layers.Conv2D(64, 3, padding='same', activation='relu'),
  layers.MaxPooling2D(),
  layers.Dropout(0.2),
  layers.Flatten(),
  layers.Dense(128, activation='relu'),
  layers.Dense(num_classes, name="outputs")
])
```

### 다음 포스트에서 만나요 🙌


<br/>

***
## 참고
**🤔 Multi class 예측값이 나왔을 때 가장 큰 index를 반환하는 Numpy 메소드?** <br/>
np.argmax() 를 통해 가장 큰 값의 인덱스를 반환받아 해당 클래스의 답으로 사용한다.

**🤔 softmax와 sigmoid**<br/>
softmax 는 n개의 확률값을 반환하고 전체의 합은 1이 된다. 2개 중에 하나를 예측할 때는 softmax 를 사용할 수도 있기는 하지만 보통 sigmoid 를 사용한다.

**🤔 round와 int의 차이?**<br/>
임계값을 정하고 크고작다로 판단을 해야하는데 astype(int) 는 마지막에 소숫점을 자르고 싶을 때 사용하고 우선 임계값보다 큰지 작은지 판단하는 과정이 누락되었다.

**🤔 컨볼루션 레이어를 통과한 결과 10개의 피처를 무엇이라고 부를까요?**<br/>
Feature map

**🤔 피처맵이 relu 활성화 함수를 통과한 것을 무엇이라고 부를까요?**<br/>
Activation Map

**🤔 DNN을 이미지 데이터에 사용했을 때 어떤 단점이 있을까요?**<br/>
인접공간에 대한 정보를 유실하게 된다. Flatten을 통해 1차원 벡터 형태로 주입을 해야하기 때문이다.<br/>
1) flatten() 으로 1차원 벡터 형태로 주입을 해야 하기 때문에 인접 공간에 대한 정보를 잃어버리게 됩니다. <br/>
2) 1차원 형태로 주입을 해주게 되면 입력값이 커서 계산이 오래 걸립니다. <br/>
3) Conv과 Pooling 연산을 하게 되면 데이터의 공간적인 특징을 학습하여 어떤 패턴이 있는지를 알게 되며 <br/>
4) Pooling 을 통해 데이터를 압축하면 데이터의 용량이 줄어들며, 추상화를 하기 때문에 너무 자세히 학습하지 않게 됩니다. 오버피팅을 방지해 줍니다.

### 자료

[CNN (Convolutional Neural Network) 개념](https://sungwookkang.com/1408)

[TensorFlow - 이미지 분류](https://www.tensorflow.org/tutorials/images/classification)


<!-- ### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾 
<font color='dodgerblue'> 예쁜 파랑 </font>
<font color='lightgray'>Miss</font>
<mark style='background-color: #f1f8ff'> 연한 파랑 </mark>
<mark style='background-color: #fff5b1'> 연한 노랑 </mark>
<mark style='background-color: #ffdce0'> 연한 빨강 </mark>
<mark style='background-color: #dcffe4'> 연한 초록 </mark>
<mark style='background-color: #f5f0ff'> 연한 보라 </mark>
<mark style='background-color: #f6f8fa'> 연한 회색 </mark>
-->
