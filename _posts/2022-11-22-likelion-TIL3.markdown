---
layout: post
title:  "2022_likelion TIL"
date:   2022-11-22 16:00:09 +0900
categories: SpecialLecture
---
# [ AI / ML / DL ] Neural Networks Basic - Basic Structure, Multi-layered Structure
#### π©π»βπ» K-MOOC μ€μ΅μΌλ‘ λ°°μ°λ λ¨Έμ λ¬λ κ°μ
π ν΄λΉ ν¬μ€νΈλ [K-MOOC κ°μ](http://www.kmooc.kr/courses/course-v1:SSUk+SSMOOC20K+2022_T1/course/) λ΄μ©κ³Ό μΆκ°λ‘ λ€λ₯Έ μλ£λ€μ μ°Ύμ λ΄μ©μ μμ±νμμΌλ©°, **μ΄λ‘  λ° κ°λ**μ λν΄ κ³΅λΆνκ³  **μμ  μ€μ΅**λ μ§νν ν λ΄μ©μ μ λ¦¬νμλ€.


<!-- κ΅°μ§νμ λν μ΄λ‘ μ λ³΄κ³  μΆλ€λ©΄ <br/>
π **[[ ML ] λ¨Έμ λ¬λ - κ΅°μ§ν (Clustering)](https://seul1230.github.io/speciallecture/2022-11-21-likelion-TIL3/)** μ¬κΈ°λ‘! -->

<br/>

***

## λͺ©μ°¨

- [\[ AI / ML / DL \] Neural Networks Basic - Basic Structure, Multi-layered Structure](#-ai--ml--dl--neural-networks-basic---basic-structure-multi-layered-structure)
      - [π©π»βπ» K-MOOC μ€μ΅μΌλ‘ λ°°μ°λ λ¨Έμ λ¬λ κ°μ](#-k-mooc-μ€μ΅μΌλ‘-λ°°μ°λ-λ¨Έμ λ¬λ-κ°μ)
  - [λͺ©μ°¨](#λͺ©μ°¨)
  - [1. Basic Structure](#1-basic-structure)
      - [π€ νΌμνΈλ‘ μ΄λ](#-νΌμνΈλ‘ μ΄λ)
  - [2. Multi-layered Structure](#2-multi-layered-structure)
    - [νμ±ν ν¨μ Activation Functions](#νμ±ν-ν¨μ-activation-functions)
      - [1. λΉμ ν ν¨μ Nonlinear Functions](#1-λΉμ ν-ν¨μ-nonlinear-functions)
      - [2. μκ·Έλͺ¨μ΄λ ν¨μμ κΈ°μΈκΈ° μμ€](#2-μκ·Έλͺ¨μ΄λ-ν¨μμ-κΈ°μΈκΈ°-μμ€)
      - [3. tanh ν¨μ](#3-tanh-ν¨μ)
      - [4. ReLU ν¨μ](#4-relu-ν¨μ)
      - [5. Leaky ReLU](#5-leaky-relu)
      - [6. Softmax function](#6-softmax-function)
      - [7. μΆλ ₯μΈ΅μ νμ±ν ν¨μμ μ€μ°¨ ν¨μμ κ΄κ³](#7-μΆλ ₯μΈ΅μ-νμ±ν-ν¨μμ-μ€μ°¨-ν¨μμ-κ΄κ³)
  - [π» μ€μ΅ μμ  μ½λ](#-μ€μ΅-μμ -μ½λ)
    - [λ€μΈ΅ νΌμνΈλ‘ μΌλ‘ μκΈμ¨ λΆλ₯νκΈ°](#λ€μΈ΅-νΌμνΈλ‘ μΌλ‘-μκΈμ¨-λΆλ₯νκΈ°)
  - [λ§λ¬΄λ¦¬νλ©΄μ..](#λ§λ¬΄λ¦¬νλ©΄μ)
    - [λ€μ ν¬μ€νΈμμ λ§λμ π](#λ€μ-ν¬μ€νΈμμ-λ§λμ-)
  - [μ°Έκ³ ](#μ°Έκ³ )

<br/>

***


## 1. Basic Structure

λ‘μ§μ€ν± νκ·λ μΈκ³΅ μ κ²½λ§μ μ΄λ£¨λ νλμ perceptronμ ν΄λΉνλ€κ³  λ³Ό μ μλ€. 

#### π€ νΌμνΈλ‘ μ΄λ
λ₯ λ¬λμ μ΄ν΄νκΈ° μν΄μλ μ°μ  μΈκ³΅ μ κ²½λ§μ λν μ΄ν΄κ° νμνλ°, νΌμνΈλ‘ (Perceptron)μ΄ λ°λ‘ μ΄κΈ°μ μΈκ³΅ μ κ²½λ§μ΄λ€.

![](/assets/img/img_221121/neuron.png){: .center width="60%"}

νΌμνΈλ‘ μ μ€μ  λλ₯Ό κ΅¬μ±νλ μ κ²½ μΈν¬ λ΄λ°μ λμκ³Ό μ μ¬νλ€. λ΄λ°μ κ°μ§λκΈ°μμ μ νΈλ₯Ό λ°μλ€μ΄κ³ , μ΄ μ νΈκ° μΌμ μΉ μ΄μμ ν¬κΈ°λ₯Ό κ°μ§λ©΄ μΆμ­λκΈ°λ₯Ό ν΅ν΄μ μ νΈλ₯Ό μ λ¬νλ€.

xλ μλ ₯κ°μ μλ―Ένλ©°, Wλ κ°μ€μΉ(Weight), yλ μΆλ ₯κ°μλλ€. κ·Έλ¦Ό μμ μμ μΈκ³΅ λ΄λ°μ ν΄λΉλ©λλ€. μ€μ  μ κ²½ μΈν¬ λ΄λ°μμμ μ νΈλ₯Ό μ λ¬νλ μΆμ­λκΈ°μ μ­ν μ νΌμνΈλ‘ μμλ κ°μ€μΉκ° λμ ν©λλ€. κ°κ°μ μΈκ³΅ λ΄λ°μμ λ³΄λ΄μ§ μλ ₯κ° λ κ°κ°μ κ°μ€μΉ μ ν¨κ» μ’μ°©μ§μΈ μΈκ³΅ λ΄λ°μ μ λ¬λλ€.

## 2. Multi-layered Structure

### νμ±ν ν¨μ <font color = 'lightgray'>Activation Functions</font>

![](/assets/img/img_221121/activation_functions.png){: .center width="80%"}

#### 1. λΉμ ν ν¨μ <font color = 'lightgray'>Nonlinear Functions</font>

**λΉμ ν νμ±ν ν¨μ(Activation function)**λ μλ ₯μ λ°μ μνμ  λ³νμ μννκ³  μΆλ ₯μ μμ±νλ ν¨μμ΄λ€. 

μΈκ³΅ μ κ²½λ§μ λ₯λ ₯μ λμ΄κΈ° μν΄μλ μλμΈ΅μ μ¬λ¬ κ° μΆκ°ν΄μΌ νλ€. κ·Έλ°λ° λ§μ½ νμ±ν ν¨μλ‘ μ ν ν¨μλ₯Ό μ¬μ©νκ² λλ©΄ μλμΈ΅μ μμ μκ° μλ€. νμ±ν ν¨μλ‘ μ ν ν¨μλ₯Ό μ ννκ³  μλμΈ΅μ κ³μ μμλ μλμΈ΅μ 1ν μΆκ°ν κ²κ³Ό λμΌν ν¨κ³Όλ₯Ό μ£ΌκΈ° λλ¬Έμ΄λ€. 

<div align='center'>
  <math xmlns="http://www.w3.org/1998/Math/MathML">
    <mi>f</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mi>W</mi>
    <mi>x</mi>
  </math> 

  &nbsp;&nbsp;β‘οΈ&nbsp;&nbsp;

  <math xmlns="http://www.w3.org/1998/Math/MathML">
    <mi>y</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mi>f</mi>
    <mo stretchy="false">(</mo>
    <mi>f</mi>
    <mo stretchy="false">(</mo>
    <mi>f</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo stretchy="false">)</mo>
    <mo stretchy="false">)</mo>
  </math>

  &nbsp;&nbsp;β‘οΈ&nbsp;&nbsp;

  <math xmlns="http://www.w3.org/1998/Math/MathML">
    <mi>W</mi>
    <mi>&#xD7;</mi>
    <mi>W</mi>
    <mi>&#xD7;</mi>
    <mi>W</mi>
    <mi>&#xD7;</mi>
    <mi>x</mi>
  </math>

  &nbsp;&nbsp;β‘οΈ&nbsp;&nbsp;
  
  <math xmlns="http://www.w3.org/1998/Math/MathML">
    <mi>y</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mi>k</mi>
    <mi>x</mi>
  </math>

</div>

<br/>


β μ ν ν¨μλ₯Ό μ¬μ©ν κ²μ΄ μλ¬΄ μλ―Έκ° μλ κ²μ μλκ³ , νμ΅ κ°λ₯ν κ°μ€μΉκ° μλ‘ μκΈ΄λ€λ μ μμ μλ―Έκ° μκΈ΄ νλ€. μ΄μ μ ν ν¨μλ₯Ό μ¬μ©ν μΈ΅μ νμ±ν ν¨μλ₯Ό μ¬μ©νλ μλμΈ΅κ³Ό κ΅¬λΆνκΈ° μν΄ **μ νμΈ΅ (linear layer)** μ΄λ **ν¬μ¬μΈ΅ (projection layer)** λ±μ λ€λ₯Έ ννμ μ¬μ©νμ¬ νννκΈ°λ νλ€.

#### 2. μκ·Έλͺ¨μ΄λ ν¨μμ κΈ°μΈκΈ° μμ€


![](/assets/img/img_221121/NN_works.gif){: .center width="80%"}


μ μΈκ³΅ μ κ²½λ§μ νμ΅ κ³Όμ μ λ€μκ³Ό κ°λ€. 

μ°μ  μΈκ³΅ μ κ²½λ§μ μλ ₯μ λν΄μ **μμ ν(forward propagation)** μ°μ°μ νκ³ , κ·Έλ¦¬κ³  μμ ν μ°μ°μ ν΅ν΄ λμ¨ μμΈ‘κ°κ³Ό μ€μ κ°μ μ€μ°¨λ₯Ό **μμ€ ν¨μ(loss function)**μ ν΅ν΄ κ³μ°νκ³ , κ·Έλ¦¬κ³  μ΄ μμ€(loss)μ λ―ΈλΆμ ν΅ν΄μ **κΈ°μΈκΈ°(gradient)**λ₯Ό κ΅¬νκ³ , μ΄λ₯Ό ν΅ν΄ **μ­μ ν(back propagation)**λ₯Ό μννλ€.


μ­μ ν κ³Όμ μμ 0μ κ°κΉμ΄ μμ£Ό μμ κΈ°μΈκΈ°κ° κ³±ν΄μ§κ² λλ©΄, μλ¨μλ κΈ°μΈκΈ°κ° μ μ λ¬λμ§ μκ² λ©λλ€. μ΄λ¬ν νμμ **κΈ°μΈκΈ° μμ€(Vanishing Gradient)** λ¬Έμ λΌκ³  νλ€.

![](/assets/img/img_221121/gradient_vanishing.png){: .center width="80%"}

μκ·Έλͺ¨μ΄λ ν¨μλ₯Ό μ¬μ©νλ μλμΈ΅μ μ¬λ¬ κ° μκ² λλ©΄ 0μ κ°κΉμ΄ κΈ°μΈκΈ°κ° κ³μ κ³±ν΄μ§λ©΄ μλ¨μμλ κ±°μ κΈ°μΈκΈ°λ₯Ό μ νλ°μ μ μκ² λλ€. λ€μ λ§ν΄ λ§€κ°λ³μ Wκ° μλ°μ΄νΈ λμ§ μμ νμ΅μ΄ λμ§ μλλ€.

β‘οΈ μκ·Έλͺ¨μ΄λ ν¨μλ₯Ό μλμΈ΅μμ μ¬μ©νλ κ² μ§μ β

#### 3. tanh ν¨μ
**νμ΄νΌλ³Όλ¦­νμ  νΈ ν¨μ(Hyperbolic tangent function)**λ μλ ₯κ°μ -1κ³Ό 1 μ¬μ΄μ κ°μΌλ‘ λ³ννλ€. 

![](/assets/img/img_221121/tanh.png){: .center width="60%"}

tanh ν¨μλ μκ·Έλͺ¨μ΄λ ν¨μμλ λ¬λ¦¬ 0μ μ€μ¬μΌλ‘ νκ³  μλλ°, μ΄λλ¬Έμ μκ·Έλͺ¨μ΄λ ν¨μμ λΉκ΅νλ©΄ λ°νκ°μ λ³νν­μ΄ λ ν¬λ€. κ·Έλμ μκ·Έλͺ¨μ΄λ ν¨μλ³΄λ€λ κΈ°μΈκΈ° μμ€ μ¦μμ΄ μ μ νΈμλλ€. κ·Έλμ μλμΈ΅μμ μκ·Έλͺ¨μ΄λ ν¨μλ³΄λ€λ λ§μ΄ μ¬μ©λλ νΈμ΄λ€. 


#### 4. ReLU ν¨μ

μΈκ³΅ μ κ²½λ§μμ κ°μ₯ μ΅κ³ μ μΈκΈ°λ₯Ό μ»κ³  μλ ν¨μλ‘, μμμ λ€μκ³Ό κ°λ€.

  <math xmlns="http://www.w3.org/1998/Math/MathML">
    <mi>f</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mi>m</mi>
    <mi>a</mi>
    <mi>x</mi>
    <mo stretchy="false">(</mo>
    <mn>0</mn>
    <mo>,</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
  </math> 

![](/assets/img/img_221121/relu.png){: .center width="60%"}

ReLU ν¨μλ νΉμ  μμκ°μ μλ ΄νμ§ μμΌλ―λ‘ **κΉμ μ κ²½λ§**μμ μκ·Έλͺ¨μ΄λ ν¨μλ³΄λ€ ν¨μ¬ λ μ μλνλ€. ReLU ν¨μλ μκ·Έλͺ¨μ΄λ ν¨μμ tanh ν¨μμ κ°μ΄ μ΄λ€ μ°μ°μ΄ νμν κ²μ΄ μλλΌ λ¨μ μκ³κ°μ΄λ―λ‘ **μ°μ° μλ**λ λΉ λ₯΄λ€.

κ·Έλ¬λ ReLU ν¨μλ λ¬Έμ μ μ κ°μ§κ³  μλ€. 
μλ ₯κ°μ΄ μμλ©΄ κΈ°μΈκΈ°λ 0μ΄ λλ€. κ·Έλ¦¬κ³  μ΄ λ΄λ°μ λ€μ νμμν€λ κ²μ΄ λ§€μ° μ΄λ ΅λ€. μ΄ λ¬Έμ λ₯Ό **μ£½μ λ λ£¨(dying ReLU)**λΌκ³  νλ€. κ·Έλμ μ μλ ν¨μκ° Leaky ReLUμ΄λ€. 

####  5. Leaky ReLU
dying ReLU λ¬Έμ λ₯Ό λ³΄μνκΈ° μν΄ ReLUμ λ³ν ν¨μλ€μ΄ λ±μ₯νκΈ° μμνλ€. κ·Έ μ€ νλκ° **Leaky ReLU**μ΄λ€. Leaky ReLUλ μλ ₯κ°μ΄ μμμΌ κ²½μ°μ 0μ΄ μλλΌ 0.001κ³Ό κ°μ λ§€μ° μμ μλ₯Ό λ°ννλλ‘ λμ΄μλ€. μμμ λ€μκ³Ό κ°λ€.
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>f</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mi>m</mi>
  <mi>a</mi>
  <mi>x</mi>
  <mo stretchy="false">(</mo>
  <mi>a</mi>
  <mi>x</mi>
  <mo>,</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
</math>


![](/assets/img/img_221121/leaky_relu.png){: .center width="60%"}

#### 6. Softmax function
**multi-class classification**μ ν  λ μ£Όλ‘ μ¬μ©νλ Softmax ν¨μλ₯Ό **μΆλ ₯μΈ΅**μ μ μ©νμ¬ λΆλ₯ λ¬Έμ λ₯Ό μμΈ‘νλ€.

![](/assets/img/img_221121/softmax.png){: .center width="60%"}


#### 7. μΆλ ₯μΈ΅μ νμ±ν ν¨μμ μ€μ°¨ ν¨μμ κ΄κ³

λ€μμ κ° λ¬Έμ μ λ°λ₯Έ **μΆλ ₯μΈ΅**μ **νμ±ν ν¨μ**μ **λΉμ© ν¨μ**μ κ΄κ³μ΄λ€.

<br/>

|λ¬Έμ |νμ±ν ν¨μ|λΉμ© ν¨μ|
|---|---|---|
|μ΄μ§ λΆλ₯|Sigmoid|nn.BCELoss()|
|λ€μ€ ν΄λμ€ λΆλ₯|Softmax|nn.CrossEntropyLoss()|
|νκ·|μμ|MSE|

<br/>

**β μ£Όμν  μ ** : nn.CrossEntropyLoss()λ Softmax ν¨μλ₯Ό μ΄λ―Έ ν¬ν¨νκ³  μλ€.

> μ€ν ν¬λ λνκ΅μ λ₯ λ¬λ κ°μ cs231nμμλ ReLUλ₯Ό λ¨Όμ  μλν΄λ³΄κ³ , κ·Έλ€μμΌλ‘ LeakyReLUλ ELU κ°μ ReLUμ λ³νλ€μ μλν΄λ³΄λ©°, sigmoidλ μ¬μ©νμ§ λ§λΌκ³  κΆμ₯ν©λλ€.



***

## π» μ€μ΅ μμ  μ½λ 

### λ€μΈ΅ νΌμνΈλ‘ μΌλ‘ μκΈμ¨ λΆλ₯νκΈ°




```python
from sklearn.datasets import load_digits
import matplotlib.pyplot as plt  # μκ°νλ₯Ό μν λ§·νλ‘―λ¦½
%matplotlib inline
digits = load_digits()  # 1,979κ°μ μ΄λ―Έμ§ λ°μ΄ν° λ‘λ


images_and_labels = list(zip(digits.images, digits.target))
for index, (image, label) in enumerate(images_and_labels[:5]):  # 5κ°μ μνλ§ μΆλ ₯
    plt.subplot(2, 5, index + 1)
    plt.axis('off')
    plt.imshow(image, cmap=plt.cm.gray_r, interpolation='nearest')
    plt.title('sample: %i' % label)
```

![](/assets/img/img_221121/digits_samples.png){: .center width="60%"}


```python
X = digits.data  # μ΄λ―Έμ§. μ¦, νΉμ± νλ ¬
Y = digits.target  # κ° μ΄λ―Έμ§μ λν λ μ΄λΈ


import torch
import torch.nn as nn
from torch import optim


model = nn.Sequential(
    nn.Linear(64, 32),  # input_layer = 64, hidden_layer1 = 32
    nn.ReLU(),
    nn.Linear(32, 16),  # hidden_layer2 = 32, hidden_layer3 = 16
    nn.ReLU(),
    nn.Linear(16, 10)  # hidden_layer3 = 16, output_layer = 10
)


X = torch.tensor(X, dtype=torch.float32)
Y = torch.tensor(Y, dtype=torch.int64)


loss_fn = nn.CrossEntropyLoss()  # μ΄ λΉμ© ν¨μλ μννΈλ§₯μ€ ν¨μλ₯Ό ν¬ν¨νκ³  μμ.
optimizer = optim.Adam(model.parameters())
losses = []


for epoch in range(100):
  optimizer.zero_grad()
  y_pred = model(X)  # forwar μ°μ°
  loss = loss_fn(y_pred, Y)
  loss.backward()
  optimizer.step()

  if epoch % 10 == 0:
    print('Epoch {:4d}/{} Cost: {:.6f}'.format(
        epoch, 100, loss.item()
    ))

  losses.append(loss.item())


plt.plot(losses)
```
```
Epoch    0/100 Cost: 2.380815
Epoch   10/100 Cost: 2.059323
... μ€λ΅ ...
Epoch   90/100 Cost: 0.205398
```

![](/assets/img/img_221121/losses.png){: .center width="60%"}



## λ§λ¬΄λ¦¬νλ©΄μ..



### λ€μ ν¬μ€νΈμμ λ§λμ π
<!-- λ€μ ν¬μ€νΈμμλ [K-MOOC μ€μ΅μΌλ‘ λ°°μ°λ λ¨Έμ λ¬λ](http://www.kmooc.kr/courses/course-v1:SSUk+SSMOOC20K+2022_T1/course/)μμ λ΄κ° λΆμ‘±ν λΆλΆλ€μ μ λ¦¬ν΄ λ μμ±ν  μμ μ΄λ€. -->

<br/>

***

## μ°Έκ³ 


[K-MOOC μ€μ΅μΌλ‘ λ°°μ°λ λ¨Έμ λ¬λ](http://www.kmooc.kr/courses/course-v1:SSUk+SSMOOC20K+2022_T1/course/)

[Wikidocs](https://wikidocs.net/60683)

<https://excelsior-cjh.tistory.com/177>

<!-- ### πΎγγπΎ
### πΎγγπΎ
### πΎγγπΎ
### πΎγγπΎ
### πΎγγπΎ
### πΎγγπΎ 
<font color='dodgerblue'> μμ νλ </font>
<font color='lightgray'>Miss</font>
<mark style='background-color: #f1f8ff'> μ°ν νλ </mark>
<mark style='background-color: #fff5b1'> μ°ν λΈλ </mark>
<mark style='background-color: #ffdce0'> μ°ν λΉ¨κ° </mark>
<mark style='background-color: #dcffe4'> μ°ν μ΄λ‘ </mark>
<mark style='background-color: #f5f0ff'> μ°ν λ³΄λΌ </mark>
<mark style='background-color: #f6f8fa'> μ°ν νμ </mark>
-->
