---
layout: post
title:  "2022_likelion TIL"
date:   2022-12-08 16:00:09 +0900
categories: Python_DataAnalysis
---
# [ 1208 ] Image Classification ์ค์ต
#### ๐ฉ๐ปโ๐ป ์ค๋์ฝ๋ ์ค์๊ฐ ๊ฐ์ _ ๋ฐ์กฐ์๋
ํด๋น ํฌ์คํธ๋ [**TensorFlow - ์ด๋ฏธ์ง ๋ถ๋ฅ**](https://www.tensorflow.org/tutorials/images/classification) ํํ ๋ฆฌ์ผ์ ์ฐธ๊ณ ํด CNN ๋ ์ด์ด๋ฅผ ์์๋ณด์๋ค.


<!-- ๐ ์ด๋ฒ ํฌ์คํธ์์๋ **์ด๋ก  ๋ฐ ๊ฐ๋**์ ์ค์ฌ์ ์ผ๋ก ๋ค๋ฃฐ ์์ ์ด๋ค. -->



<br/>

***


## ๐ ์ด๋ก  ๋ฐ ๊ฐ๋ <br/>

### 1. ํฉ์ฑ๊ณฑ ์ ๊ฒฝ๋ง <font color='lightgray'>CNN, Convolutional Neural Network</font> <br/>

#### [ <mark style='background-color: #fff5b1'>CNN ๋ฑ์ฅ๋ฐฐ๊ฒฝ</mark> ]
**๋ค์ธต ํผ์ํธ๋ก  MLP**๋ ์ด๋ฏธ์ง ํฝ์๋ง๋ค **๋ค๋ฅธ ๊ฐ์ค์น ๊ฐ**์ ๋ถ์ฌํ๋ฉฐ, ํฝ์ ๊ฐ ํ๋๋ง ๋ฌ๋ผ์ ธ๋ ๋ค๋ฅด๊ฒ ๊ณ์ฐ๋๋ค. <br/>

![](/assets/img/img_221208/mlp_cnn.png){: .center width='70%'}


โก๏ธ **CNN**์ ํตํด ๊ฐ์ฒด์ ์์น๊ฐ ๋ฐ๋์ด๋ ๊ฐ์ ํน์ง์ ์ถ์ถํ๋๋ก ๊ฐ ์์ญ์ **์ธ์  ๋ฐ์ดํฐ**๋ฅผ ์กฐ์ฌํด ํน์ง์ ํ์ํ์ !

#### [ <mark style='background-color: #fff5b1'>CNN์ด๋?</mark> ]
CNN์ ์ด๋ฏธ์ง๋ฅผ ๋ถ์ํ๊ธฐ ์ํด ํจํด์ ์ฐพ๋๋ฐ ์ ์ฉํ ์๊ณ ๋ฆฌ์ฆ์ผ๋ก ๋ฐ์ดํฐ์์ ์ด๋ฏธ์ง๋ฅผ ์ง์  ํ์ตํ๊ณ  ํจํด์ ์ฌ์ฉํด ์ด๋ฏธ์ง๋ฅผ ๋ถ๋ฅํ๋ค. CNN์ ํต์ฌ์ ์ธ ๊ฐ๋์ ์ด๋ฏธ์ง์ **๊ณต๊ฐ์ ๋ณด๋ฅผ ์ ์งํ๋ฉฐ ํ์ต์ ํ๋ค**๋ ๊ฒ์ด๋ค. CNN์ **ํํฐ๋ง ๊ธฐ๋ฒ**์ ์ธ๊ณต ์ ๊ฒฝ๋ง์ ์ ์ฉํจ์ผ๋ก์จ ์ด๋ฏธ์ง๋ฅผ ๋์ฑ ํจ๊ณผ์ ์ผ๋ก ์ฒ๋ฆฌํ๊ธฐ ์ํด  Yann LeCun ์ด ์ ์ํ์์ผ๋ฉฐ ํ์ฌ ๋ฅ ๋ฌ๋์์ ์ด์ฉ๋๊ณ  ์๋ ํํ์ CNN์ด ์ ์๋์๋ค. `(image_height, image_width, color_channels)` ์ ํ์๋ฅผ ์ฌ์ฉํ๋ฉฐ, ์ด๋ color_channels ๋ (**<font color='red'>R</font>**,**<font color='green'>G</font>**,**<font color='blue'>B</font>**)๋ฅผ ๋ํ๋ธ๋ค. TF API๋ ๋ค์์ ๋ฐฉ๋ฒ์ผ๋ก ์ฌ์ฉํ๋ค.

```python
model.add(layers.Conv2D(filters=64, kernel_size=(3, 3), activation='relu'))
model.add(layers.MaxPooling2D(pool_size=(2, 2)))
```

![](/assets/img/img_221208/cnn_how.gif){: .center width='70%'}

**1๏ธโฃ Convolution ์ฐ์ฐ์ ํ๋ฉด ํํฐ๋ฅผ ํต๊ณผ์์ผ์ filters ๊ฐ์๋งํผ ํผ์ฒ๋งต์ ์์ฑํ๋ค.**<br/><br/>
**2๏ธโฃ ํผ์ฒ๋งต Output์ Activation Function ์ ํต๊ณผ์์ผ์ ์กํฐ๋ฒ ์ด์์ ์์ฑํ๋ค.** <br/>
    => ReLU ๋ฑ์ ์ฌ์ฉํ๊ฒ ๋๋ฉด ์ถ๋ ฅ๊ฐ์ ํ์ฑํ ํจ์๋ฅผ ์ ์ฉํ ์กํฐ๋ฒ ์ด์๋งต์ ๋ฐํํ๋ค. <br/><br/>
**3๏ธโฃ Pooling ์๋ Max, Average, Min ๋ฑ ์ฌ๋ฌ ๋ฐฉ๋ฒ์ด ์๋๋ฐ, ๋ณดํต MaxPooling ์ ์ฃผ๋ก ์ฌ์ฉํ๋ค.** <br/>
    => ํ๋ฐฑ์ด๋ฏธ์ง์์๋ MinPooling ์ ์ฌ์ฉํ๊ธฐ๋ ํ๋ค.<br/><br/>
**4๏ธโฃ CNN ๊ด๋ จ ๋ผ๋ฌธ** 
* **VGG16**, **VGG19** : ์ธต์ 16๊ฐ, 19๊ฐ ๋งํผ ๊น๊ฒ ๋ง๋  ๊ฒ์ ์๋ฏธ
* 30~50์ธต๊น์ง ์๊ธฐ๋ ํ๊ณ  100์ธต ์ ๋ ์๊ธฐ๋ ํฉ๋๋ค. ์ธต์ ์๋ฅผ ๋ชจ๋ธ์ ์ด๋ฆ์ ๋ถ์ด๊ธฐ๋ ํฉ๋๋ค. <br/>
    => ๊ณผ๊ฑฐ์ ๋นํด GPU ๋ฑ์ ์ฐ์ฐ์ ๋ ๋ง์ด ์ง์ํ๊ธฐ ๋๋ฌธ์ ์ฐ์ฐ์ด ๋นจ๋ผ์ง ๋๋ถ์ด๊ธฐ๋ ํฉ๋๋ค. <br/>

**5๏ธโฃ Padding, Stride** <br/>
* **Padding**, **Stride** : ์๋ ฅ๊ณผ ์ถ๋ ฅ์ฌ์ด์ฆ๋ฅผ ์กฐ์ 
* Stride๋ ํํฐ์ ์ด๋ ๋ณดํญ์ ์กฐ์ ํ๊ธฐ๋ ํจ

<br/>

**๐ CNN ์๋์๋ฆฌ ๋ณด๋ฌ๊ฐ๊ธฐ** <br/>
CNN Explainer : <https://poloclub.github.io/cnn-explainer/>

![](/assets/img/img_221208/cnn_how.png){: .center width='70%'}




### 2. Pooling
* ํฉ์ฑ๊ณฑ์ธต์์ ๋ฐ์ ์ต์ข **Activation Map** (์ถ๋ ฅ ๋ฐ์ดํฐ) ์ ํฌ๊ธฐ๋ฅผ ์ค์ด๊ฑฐ๋ ํน์  ๋ฐ์ดํฐ ๊ฐ์กฐ
* ๋ฐ์ดํฐ ์ฌ์ด์ฆ ์ค์ฌ์ฃผ๋ฉฐ ๋ธ์ด์ฆ ์์์ํค๊ณ , ๋ฏธ์ธํ ๋ถ๋ถ์์ ์ผ๊ด์ ์ธ ํน์ง ์ ๊ณต
* Max pooling / Average Pooling / Min Pooling
* **<mark style='background-color: #fff5b1'>Pooling์ ํด์ฃผ๋ ์ด์ </mark>**
    * ํ๋ผ๋ฏธํฐ๋ฅผ ์ค์ฌ์ ์ด๋ฏธ์ง ์ถ์ํ -> **overfitting** ๋ฐฉ์ง
    * ํ๋ผ๋ฏธํฐ๊ฐ ์ค์ด์ ๊ณ์ฐ์ด ๊ฐ์, ํ๋์จ์ด์ ์๋ ๋ฆฌ์์ค๊ฐ ์ ์ฝ๋จ
    * ์ด๋ฏธ์ง ํฌ๊ธฐ๋ฅผ ์ค์ฌ **๊ณ์ฐ์ ํจ์จ**์ ์ผ๋ก ํ๊ณ  **๋ฐ์ดํฐ๋ฅผ ์์ถ**ํ๋ ํจ๊ณผ
    * **์๋ ์ฆ๊ฐ**
* ๋์ฒด์ ์ผ๋ก ์ปฌ๋ฌ์ด๋ฏธ์ง์์๋ MaxPooling ์ ๊ฐ์ฅ ๋ง์ด ์ฌ์ฉํ๋ ํธ์ด๋ค.
* ํ๋ฐฑ์ด๋ฏธ์ง์์๋ MinPooling ์ ์ฌ์ฉํ๊ธฐ๋ ํ๋ค.


### 3. Padding

![](/assets/img/img_221208/padding.png){: .center width='70%'}

* valid
    * ์ ํจํ ์์ญ๋ง ์ถ๋ ฅ์ด ๋ฉ๋๋ค. ๋ฐ๋ผ์ ์ถ๋ ฅ ์ด๋ฏธ์ง ์ฌ์ด์ฆ๋ ์๋ ฅ ์ฌ์ด์ฆ๋ณด๋ค ์์
* same
    * ์ถ๋ ฅ ์ด๋ฏธ์ง ์ฌ์ด์ฆ๊ฐ ์๋ ฅ ์ด๋ฏธ์ง ์ฌ์ด์ฆ์ ๋์ผ


* [**CNN Explainer**](https://poloclub.github.io/cnn-explainer/)์ ๋ค์ด๊ฐ๋ฉด CNN์ ์๋ฆฌ๋ฅผ ๋์ผ๋ก ํ์ธํ๊ณ  Hyperparameter๋ฅผ ๋ฐ๊ฟ์ฃผ์์ ๋ ํํฐ๊ฐ ์ด๋ป๊ฒ ์๋ํ๋์ง ๋ณผ ์ ์๋ค.

![](/assets/img/img_221208/understanding_hyperparameter.png){: .center width='60%'}


### 4. Image Overfitting ๋ฌธ์ ๊ฐ ๋ฐ์ํ๋ ๊ฒฝ์ฐ
* ์ด๋ฏธ์ง ์ ์ฒ๋ฆฌ
    * ์ค์ ์ ์ธ ์ด์  - ๋ธ์ด์ฆ ๋ฐ์ดํฐ๊ฐ ๋ง๋ค
* ํ๋ จ ์์ ๊ฐ ์ ์ ๋
    * ๋ชจ๋ธ์ ์๋ก์ด ์์ ์์ ๋ชจ๋ธ์ ์ฑ๋ฅ์ ๋ถ์ ์ ์ธ ์ํฅ์ ๋ฏธ์น๋ ์ ๋๊น์ง ํ๋ จ ์์ ์ ๋ธ์ด์ฆ๋ ์์น ์๋ ์ธ๋ถ๊น์ง ํ์ตํจ
    * ๋ฐ์ดํฐ ์ฆ๊ฐ, ๋๋กญ์์ ์ถ๊ฐ ๋ฑ

### 5. ์ด๋ฏธ์ง๋ฅผ ๋ก๋ํ๋ ๋ฐฉ๋ฒ
1๏ธโฃ **matplotlib.pyplot**์ **imread()**๋ฅผ ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ <br/>
2๏ธโฃ **PIL** <font color='lightgray'>Pillow</font> ๋ก ๋ถ๋ฌ์ค๋ ๋ฐฉ๋ฒ <br/>
&nbsp; => PIL ๋ก **์ ๊ณ ๋๋ฆฌ๊ณ ๋ก๊ธฐ๊ณ **๊ฐ ๋ค ๊ฐ๋ฅ. <br/>
&nbsp; => TF ๋ด๋ถ์์๋ PIL ์ด๋ OpenCV๋ฅผ ์ฌ์ฉํด์ **์ ๊ณ ๋๋ฆฌ๊ณ ๋ก๊ธฐ๊ณ ** <br/>
&nbsp; => ์ด๋ฏธ์ง ํธ์ง๊ธฐ๋ฅผ ๋ง๋ค ์๋ ์์.<br/>
3๏ธโฃ **OpenCV**๋ก ๋ถ๋ฌ์ค๋ ๋ฐฉ๋ฒ : Computer Vision ์ ์ฃผ๋ก ์ฌ์ฉํ๋ ๋๊ตฌ๋ก ๋์์์ฒ๋ฆฌ ๋ฑ์ ์ฃผ๋ก ์ฌ์ฉ

### 6. keras์ ImageDataGenerator 
* ๊ณต๊ฐ ๋ ๋ฒจ ๋ณํ
    * Flip : ์ํ, ์ข์ฐ ๋ฐ์ 
    * Rotation : ํ์ 
    * Shift : ์ด๋
    * Zoom : ํ๋, ์ถ์
    * Shear : ๋ํ๊ธฐ
* ํฝ์ ๋ ๋ฒจ ๋ณํ
    * Bright : ๋ฐ๊ธฐ ์กฐ์ 
    * Channel Shift : RGB ๊ฐ ๋ณ๊ฒฝ
    * ZCA Whitening : Whitening ํจ๊ณผ





<br/>

***

## ๐ป ์ค์ต ์์  ์ฝ๋
### : CNN tutorial

**๋ฐ์ดํฐ์ ๋ถ๋ฌ์ค๊ธฐ** - CIFAR10 ๋ฐ์ดํฐ์ธํธ
```python
(train_images, train_labels), (test_images, test_labels) = datasets.cifar10.load_data()

# Normalize pixel values to be between 0 and 1
train_images, test_images = train_images / 255.0, test_images / 255.0
```

**๋ฐ์ดํฐ ํ์ธ**

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


**ํฉ์ฑ๊ณฑ ์ธต ๋ง๋ค๊ธฐ**

```python
model = models.Sequential()
model.add(layers.Conv2D(filters = 32, kernel_size = (3, 3), 
                        activation='relu', input_shape=(32, 32, 3)))
model.add(layers.MaxPooling2D(pool_size = (2, 2)))
model.add(layers.Conv2D(filters = 64, kernel_size = (3, 3), activation='relu'))
model.add(layers.MaxPooling2D(pool_size = (2, 2)))
model.add(layers.Conv2D(filters = 64, kernel_size = (3, 3), activation='relu'))
```

## ๐ป ์ค์ต ์์  ์ฝ๋
### : Image Classification
ํด๋น ํํ ๋ฆฌ์ผ์ ๊ฝ 5๊ฐ์ง ์ด๋ฏธ์ง๋ฅผ ํ์ตํ๊ณ  ๋ถ๋ฅํ๋ ์์ ์ด๋ค. ['daisy', 'dandelion', 'roses', 'sunflowers', 'tulips'] 5๊ฐ์ง ๊ฝ์ ๋ถ๋ฅํ๋ค.

**[ ์ด๋ฏธ์ง ํ์ธ ]**
```python
roses = list(data_dir.glob('roses/*'))
PIL.Image.open(str(roses[0]))
```
![](/assets/img/img_221208/rose_0.png){: .center width='30%'} 


**[ ๋ฐ์ดํฐ ์๊ฐํํ๊ธฐ ]**
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


**[ ์ฑ๋ฅ์ ๋์ด๋๋ก ๋ฐ์ดํฐ์ ๊ตฌ์ฑํ๊ธฐ ]** <br/>
๋ฒํผ๋ง๋ prefetch๋ฅผ ์ฌ์ฉํ์ฌ I/O๋ฅผ ์ฐจ๋จํ์ง ์๊ณ  ๋์คํฌ์์ ๋ฐ์ดํฐ ์์ฑํ  ์ ์๋๋ก ํ๊ฒ ๋ค. prefetch๋ ํ๋ จํ๋ ๋์ ๋ฐ์ดํฐ ์ ์ฒ๋ฆฌ ๋ฐ ๋ชจ๋ธ ์คํ์ ์ค์ฒฉ์ํจ๋ค.
```python
AUTOTUNE = tf.data.AUTOTUNE

train_ds = train_ds.cache().shuffle(1000).prefetch(buffer_size=AUTOTUNE)
val_ds = val_ds.cache().prefetch(buffer_size=AUTOTUNE)
```

**[ ๋ฐ์ดํฐ ์ฆ๊ฐ ]**
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

**[ ๋ชจ๋ธ ๋ง๋ค๊ธฐ ]**
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

### ๋ค์ ํฌ์คํธ์์ ๋ง๋์ ๐


<br/>

***
## ์ฐธ๊ณ 
**๐ค Multi class ์์ธก๊ฐ์ด ๋์์ ๋ ๊ฐ์ฅ ํฐ index๋ฅผ ๋ฐํํ๋ Numpy ๋ฉ์๋?** <br/>
np.argmax() ๋ฅผ ํตํด ๊ฐ์ฅ ํฐ ๊ฐ์ ์ธ๋ฑ์ค๋ฅผ ๋ฐํ๋ฐ์ ํด๋น ํด๋์ค์ ๋ต์ผ๋ก ์ฌ์ฉํ๋ค.

**๐ค softmax์ sigmoid**<br/>
softmax ๋ n๊ฐ์ ํ๋ฅ ๊ฐ์ ๋ฐํํ๊ณ  ์ ์ฒด์ ํฉ์ 1์ด ๋๋ค. 2๊ฐ ์ค์ ํ๋๋ฅผ ์์ธกํ  ๋๋ softmax ๋ฅผ ์ฌ์ฉํ  ์๋ ์๊ธฐ๋ ํ์ง๋ง ๋ณดํต sigmoid ๋ฅผ ์ฌ์ฉํ๋ค.

**๐ค round์ int์ ์ฐจ์ด?**<br/>
์๊ณ๊ฐ์ ์ ํ๊ณ  ํฌ๊ณ ์๋ค๋ก ํ๋จ์ ํด์ผํ๋๋ฐ astype(int) ๋ ๋ง์ง๋ง์ ์์ซ์ ์ ์๋ฅด๊ณ  ์ถ์ ๋ ์ฌ์ฉํ๊ณ  ์ฐ์  ์๊ณ๊ฐ๋ณด๋ค ํฐ์ง ์์์ง ํ๋จํ๋ ๊ณผ์ ์ด ๋๋ฝ๋์๋ค.

**๐ค ์ปจ๋ณผ๋ฃจ์ ๋ ์ด์ด๋ฅผ ํต๊ณผํ ๊ฒฐ๊ณผ 10๊ฐ์ ํผ์ฒ๋ฅผ ๋ฌด์์ด๋ผ๊ณ  ๋ถ๋ฅผ๊น์?**<br/>
Feature map

**๐ค ํผ์ฒ๋งต์ด relu ํ์ฑํ ํจ์๋ฅผ ํต๊ณผํ ๊ฒ์ ๋ฌด์์ด๋ผ๊ณ  ๋ถ๋ฅผ๊น์?**<br/>
Activation Map

**๐ค DNN์ ์ด๋ฏธ์ง ๋ฐ์ดํฐ์ ์ฌ์ฉํ์ ๋ ์ด๋ค ๋จ์ ์ด ์์๊น์?**<br/>
์ธ์ ๊ณต๊ฐ์ ๋ํ ์ ๋ณด๋ฅผ ์ ์คํ๊ฒ ๋๋ค. Flatten์ ํตํด 1์ฐจ์ ๋ฒกํฐ ํํ๋ก ์ฃผ์์ ํด์ผํ๊ธฐ ๋๋ฌธ์ด๋ค.<br/>
1) flatten() ์ผ๋ก 1์ฐจ์ ๋ฒกํฐ ํํ๋ก ์ฃผ์์ ํด์ผ ํ๊ธฐ ๋๋ฌธ์ ์ธ์  ๊ณต๊ฐ์ ๋ํ ์ ๋ณด๋ฅผ ์์ด๋ฒ๋ฆฌ๊ฒ ๋ฉ๋๋ค. <br/>
2) 1์ฐจ์ ํํ๋ก ์ฃผ์์ ํด์ฃผ๊ฒ ๋๋ฉด ์๋ ฅ๊ฐ์ด ์ปค์ ๊ณ์ฐ์ด ์ค๋ ๊ฑธ๋ฆฝ๋๋ค. <br/>
3) Conv๊ณผ Pooling ์ฐ์ฐ์ ํ๊ฒ ๋๋ฉด ๋ฐ์ดํฐ์ ๊ณต๊ฐ์ ์ธ ํน์ง์ ํ์ตํ์ฌ ์ด๋ค ํจํด์ด ์๋์ง๋ฅผ ์๊ฒ ๋๋ฉฐ <br/>
4) Pooling ์ ํตํด ๋ฐ์ดํฐ๋ฅผ ์์ถํ๋ฉด ๋ฐ์ดํฐ์ ์ฉ๋์ด ์ค์ด๋ค๋ฉฐ, ์ถ์ํ๋ฅผ ํ๊ธฐ ๋๋ฌธ์ ๋๋ฌด ์์ธํ ํ์ตํ์ง ์๊ฒ ๋ฉ๋๋ค. ์ค๋ฒํผํ์ ๋ฐฉ์งํด ์ค๋๋ค.

### ์๋ฃ

[CNN (Convolutional Neural Network) ๊ฐ๋](https://sungwookkang.com/1408)

[TensorFlow - ์ด๋ฏธ์ง ๋ถ๋ฅ](https://www.tensorflow.org/tutorials/images/classification)


<!-- ### ๐พใใ๐พ
### ๐พใใ๐พ
### ๐พใใ๐พ
### ๐พใใ๐พ
### ๐พใใ๐พ
### ๐พใใ๐พ 
<font color='dodgerblue'> ์์ ํ๋ </font>
<font color='lightgray'>Miss</font>
<mark style='background-color: #f1f8ff'> ์ฐํ ํ๋ </mark>
<mark style='background-color: #fff5b1'> ์ฐํ ๋ธ๋ </mark>
<mark style='background-color: #ffdce0'> ์ฐํ ๋นจ๊ฐ </mark>
<mark style='background-color: #dcffe4'> ์ฐํ ์ด๋ก </mark>
<mark style='background-color: #f5f0ff'> ์ฐํ ๋ณด๋ผ </mark>
<mark style='background-color: #f6f8fa'> ์ฐํ ํ์ </mark>
-->
