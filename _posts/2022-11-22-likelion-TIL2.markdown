---
layout: post
title:  "2022_likelion TIL"
date:   2022-11-22 13:00:09 +0900
categories: SpecialLecture
---
# [ AI / ML ] Logistic Regression
#### π©π»βπ» K-MOOC μ€μ΅μΌλ‘ λ°°μ°λ λ¨Έμ λ¬λ κ°μ
π ν΄λΉ ν¬μ€νΈλ [K-MOOC κ°μ](http://www.kmooc.kr/courses/course-v1:SSUk+SSMOOC20K+2022_T1/course/) λ΄μ©κ³Ό μΆκ°λ‘ λ€λ₯Έ μλ£λ€μ μ°Ύμ λ΄μ©μ μμ±νμμΌλ©°, **μ΄λ‘  λ° κ°λ**μ λν΄ κ³΅λΆνκ³  **μμ  μ€μ΅**λ μ§νν ν λ΄μ©μ μ λ¦¬νμλ€.


<!-- κ΅°μ§νμ λν μ΄λ‘ μ λ³΄κ³  μΆλ€λ©΄ <br/>
π **[[ ML ] λ¨Έμ λ¬λ - κ΅°μ§ν (Clustering)](https://seul1230.github.io/speciallecture/2022-11-21-likelion-TIL3/)** μ¬κΈ°λ‘! -->

<br/>

***

## λͺ©μ°¨
- [\[ AI / ML \] Logistic Regression](#-ai--ml--logistic-regression)
      - [π©π»βπ» K-MOOC μ€μ΅μΌλ‘ λ°°μ°λ λ¨Έμ λ¬λ κ°μ](#-k-mooc-μ€μ΅μΌλ‘-λ°°μ°λ-λ¨Έμ λ¬λ-κ°μ)
  - [λͺ©μ°¨](#λͺ©μ°¨)
  - [Logistic Regression](#logistic-regression)
      - [μ΄μ§ λΆλ₯ Binary Classification](#μ΄μ§-λΆλ₯-binary-classification)
      - [Sigmoid ν¨μ](#sigmoid-ν¨μ)
      - [λΉμ© ν¨μ Cost Function](#λΉμ©-ν¨μ-cost-function)
      - [π€ μ ν νκ·μ λ‘μ§μ€ν± νκ·μ cost function?](#-μ ν-νκ·μ-λ‘μ§μ€ν±-νκ·μ-cost-function)
  - [π» μ€μ΅ μμ  μ½λ](#-μ€μ΅-μμ -μ½λ)
    - [PyTorchλ‘ λ‘μ§μ€νΈ νκ· κ΅¬ννκΈ°](#pytorchλ‘-λ‘μ§μ€νΈ-νκ·-κ΅¬ννκΈ°)
      - [**\[ νμν λκ΅¬ import \]**](#-νμν-λκ΅¬-import-)
      - [**\[ Wμ b κ° μ΄κΈ°ν \]**](#-wμ-b-κ°-μ΄κΈ°ν-)
      - [**\[ λͺ¨λΈ νλ ¨ \]**](#-λͺ¨λΈ-νλ ¨-)
      - [**\[ μμΈ‘ \]**](#-μμΈ‘-)
    - [λ€μ ν¬μ€νΈμμ λ§λμ π](#λ€μ-ν¬μ€νΈμμ-λ§λμ-)
  - [μ°Έκ³ ](#μ°Έκ³ )


<br/>

***

## Logistic Regression
λ‘μ§μ€ν± νκ·λ μ΄λ¦μ νκ·κ° λ€μ΄κ°μ§λ§ **λΆλ₯ <font color = 'lightgray'>Classification</font>** μμμ μ¬μ©ν  μ μλ€. 

#### μ΄μ§ λΆλ₯ Binary Classification 
μ»΄ν¨ν°κ³΅νκ³Ό νμλ€μ΄ μ€κ°κ³ μ¬λ‘ μκ³ λ¦¬μ¦ μνμ λ΄€λ€κ³  κ°μ μ ν΄λ³΄μ.
μ΄λ Passμ Failλ‘ μ±μ μ΄ λλλλ°, κ·Έ μ»€νΈλΌμΈμ κ³΅κ°λμ§ μμλ€. μ΄λ, λ‘μ§μ€ν± νκ·λ₯Ό μ΄μ©ν΄μ λκ²¨λ°μ νμλ€μ λ°μ΄ν°λ‘λΆν° νΉμ  μ μλ₯Ό μ»μμ λ Passμ Failμ νμ νλ λͺ¨λΈμ λ§λ€ μ μλ€. 

ν΄λΉ λ΄μ©μ μ νμΌλ‘ λνλ΄λ©΄ λΆλ₯ μμμ΄ μ μλνμ§ μλλ€. λ‘μ§μ€ν± νκ·λ **Sμ λͺ¨μ**μ κ·Έλνλ₯Ό λ§λ€μ΄μ λΆλ₯ μμΈ‘ μμμ μ§ννλ€. Sμ λͺ¨μμ κ·Έλνλ‘ λ§λ€μ΄ μ€ μ μλ ν¨μ μ€ νλμΈ **μκ·Έλͺ¨μ΄λ**μ λν΄ μμλ³΄μ. 

<br/>

#### Sigmoid ν¨μ

μ ν νκ·μ λ§μ°¬κ°μ§λ‘ λ‘μ§μ€ν± νκ· μ­μ μ΅μ μ Wμ bλ₯Ό μ°Ύλ κ²μ΄ λͺ©νμ΄λ€. 

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>H</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mi>s</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>m</mi>
  <mi>o</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo stretchy="false">(</mo>
  <mi>W</mi>
  <mi>x</mi>
  <mo>+</mo>
  <mi>b</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mfrac>
    <mn>1</mn>
    <mrow>
      <mn>1</mn>
      <mo>+</mo>
      <msup>
        <mi>e</mi>
        <mrow data-mjx-texclass="ORD">
          <mo>&#x2212;</mo>
          <mo stretchy="false">(</mo>
          <mi>W</mi>
          <mi>x</mi>
          <mo>+</mo>
          <mi>b</mi>
          <mo stretchy="false">)</mo>
        </mrow>
      </msup>
    </mrow>
  </mfrac>
  <mo>=</mo>
  <mi>&#x3C3;</mi>
  <mo stretchy="false">(</mo>
  <mi>W</mi>
  <mi>x</mi>
  <mo>+</mo>
  <mi>b</mi>
  <mo stretchy="false">)</mo>
</math>

![](/assets/img/img_221121/sigmoid_W.png){: width="47%"} ![](/assets/img/img_221121/sigmoid_b.png){: width="47%"} 


μκ·Έλͺ¨μ΄λ ν¨μλ μλ ₯κ°μ΄ νμμ΄ μ»€μ§λ©΄ 1μ μλ ΄νκ³ , μλ ₯κ°μ΄ νμμ΄ μμμ§λ©΄ 0μ μλ ΄νλ€. μκ·Έλͺ¨μ΄λ ν¨μμ μΆλ ₯κ°μ 0κ³Ό 1 μ¬μ΄μ κ°μ κ°μ§λλ° μ΄ νΉμ±μ μ΄μ©νμ¬ λΆλ₯ μμμ μ¬μ©ν  μ μλ€. μΆλ ₯κ°μ νλ₯ μ΄λΌκ³  μκ°μ νλ©΄ ν΄λΉ λ μ΄λΈμ μν  νλ₯ μ΄ 50%κ° λμΌλ©΄ ν΄λΉ λ μ΄λΈλ‘ νλ¨νκ³ , ν΄λΉ λ μ΄λΈμ μν  νλ₯ μ΄ 50%λ³΄λ€ λ?μΌλ©΄ μλλΌκ³  νλ¨νλ κ²μΌλ‘ λ³Ό μ μλ€. μ΄μ λ§μ°¬κ°μ§λ‘ **multi-class classification**λ λ‘μ§μ€ν± νκ·λ₯Ό μ΄μ©ν΄ μνν  μ μλ€. 


#### λΉμ© ν¨μ Cost Function

μ΄μ  μλμ κ°μ€μμ μ΅μ μ Wμ bλ₯Ό μ°Ύμ μ μλ cost functionμ μ μν΄μΌ νλ€. 

<br/>

**[ λ‘μ§μ€ν± νκ· κ°μ€ ]**
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>H</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mi>s</mi>
  <mi>i</mi>
  <mi>g</mi>
  <mi>m</mi>
  <mi>o</mi>
  <mi>i</mi>
  <mi>d</mi>
  <mo stretchy="false">(</mo>
  <mi>W</mi>
  <mi>x</mi>
  <mo>+</mo>
  <mi>b</mi>
  <mo stretchy="false">)</mo>
</math>



#### π€ μ ν νκ·μ λ‘μ§μ€ν± νκ·μ cost function?
 β‘οΈ μ ν νκ·μμ μ¬μ©νλ cost function νκ·  μ κ³± μ€μ°¨ <font color='lightgray'>MSE : Mean Squared Error</font>λ₯Ό λ‘μ§μ€ν± νκ·μ cost functionμΌλ‘ μ¬μ©νλ©΄ μλ κΉ?

 λ€μμ μ ν νκ·μμ μ¬μ©νλ MSEμ μμμ΄λ€.
 
 <br/>

 **[ Mean Squared Error ]**

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>c</mi>
  <mi>o</mi>
  <mi>s</mi>
  <mi>t</mi>
  <mo stretchy="false">(</mo>
  <mi>W</mi>
  <mo>,</mo>
  <mi>b</mi>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mfrac>
    <mn>1</mn>
    <mi>n</mi>
  </mfrac>
  <munderover>
    <mo data-mjx-texclass="OP">&#x2211;</mo>
    <mrow data-mjx-texclass="ORD">
      <mi>i</mi>
      <mo>=</mo>
      <mn>1</mn>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mi>n</mi>
    </mrow>
  </munderover>
  <msup>
    <mrow data-mjx-texclass="INNER">
      <mo data-mjx-texclass="OPEN">[</mo>
      <msup>
        <mi>y</mi>
        <mrow data-mjx-texclass="ORD">
          <mo stretchy="false">(</mo>
          <mi>i</mi>
          <mo stretchy="false">)</mo>
        </mrow>
      </msup>
      <mo>&#x2212;</mo>
      <mi>H</mi>
      <mo stretchy="false">(</mo>
      <msup>
        <mi>x</mi>
        <mrow data-mjx-texclass="ORD">
          <mo stretchy="false">(</mo>
          <mi>i</mi>
          <mo stretchy="false">)</mo>
        </mrow>
      </msup>
      <mo stretchy="false">)</mo>
      <mo data-mjx-texclass="CLOSE">]</mo>
    </mrow>
    <mn>2</mn>
  </msup>
</math>

μμ cost function μμμ λ‘μ§μ€ν± νκ·μ κ°μ€μ λμνκ³  λ―ΈλΆνλ©΄ μ¬ν λΉλ³Όλ‘ (non-convex) ννμ κ·Έλνκ° λμ¨λ€.

![](/assets/img/img_221121/sigm_local_min.png){: .center width="60%"}

μμ κ°μ κ·Έλνλ κ²½μ¬ νκ°λ²μ μ¬μ©νμ λ Local minimumμ Global minimum κ°μ΄λΌκ³  μ°©κ°ν΄μ μ΅μ μ κ°μ€μΉ Wκ° μλ λ€λ₯Έ κ°μ ννλ©΄ λͺ¨λΈμ μ±λ₯μ΄ λ?κ² λμ¬ μ μλ€. costκ° μ΅μκ° λλ κ°μ€μΉ Wλ₯Ό μ°Ύμ κ²μ΄ μλκΈ° λλ¬Έμ cost functionμ λͺ©μ μ λ§μ§ μλ€.

μκ·Έλͺ¨μ΄λ ν¨μλ 0κ³Ό 1 μ¬μ΄μ κ°μ μΆλ ₯νλ€. μ€μ κ°μ΄ 1μΌ λ μμΈ‘κ°μ΄ 0μ κ°κΉμμ§λ©΄ μ€μ°¨κ° μ»€μ ΈμΌ νκ³ , μ€μ κ°μ΄ 0μΌ λ μμΈ‘κ°μ΄ 1μ κ°κΉμμ§λ©΄ μ€μ°¨κ° μ»€μ ΈμΌ νλ€. μ΄λ₯Ό μΆ©μ‘±μν€λ ν¨μκ° λ°λ‘ λ‘κ·Έ ν¨μμ΄λ€. μ΄λ₯Ό μ΄μ©ν΄ cost functionμ μ§μ ν΄μ€ μ μλ€.

![](/assets/img/img_221121/sig_cost_graph.png){: .center width="60%"}

μ΄λ₯Ό μμΌλ‘ λνλ΄λ©΄

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtext>if&#xA0;</mtext>
  <mi>y</mi>
  <mo>=</mo>
  <mn>1</mn>
  <mo stretchy="false">&#x2192;</mo>
  <mtext>cost</mtext>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">(</mo>
    <mi>H</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>,</mo>
    <mi>y</mi>
    <mo data-mjx-texclass="CLOSE">)</mo>
  </mrow>
  <mo>=</mo>
  <mo>&#x2212;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mrow>
    <mo data-mjx-texclass="OPEN">(</mo>
    <mi>H</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo data-mjx-texclass="CLOSE">)</mo>
  </mrow>
</math>

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtext>if&#xA0;</mtext>
  <mi>y</mi>
  <mo>=</mo>
  <mn>0</mn>
  <mo stretchy="false">&#x2192;</mo>
  <mtext>cost</mtext>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">(</mo>
    <mi>H</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>,</mo>
    <mi>y</mi>
    <mo data-mjx-texclass="CLOSE">)</mo>
  </mrow>
  <mo>=</mo>
  <mo>&#x2212;</mo>
  <mi>log</mi>
  <mo data-mjx-texclass="NONE">&#x2061;</mo>
  <mrow>
    <mo data-mjx-texclass="OPEN">(</mo>
    <mn>1</mn>
    <mo>&#x2212;</mo>
    <mi>H</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo data-mjx-texclass="CLOSE">)</mo>
  </mrow>
</math>

λ‘ λνλΌ μ μλ€. κ·ΈλΌ μ΄ λ μμμ νλμ μμμΌλ‘ ν΅ν©ν΄λ³΄μ. 

<br/>

**[ λ‘μ§μ€ν± νκ· Cost Function ]**

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtext>cost</mtext>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">(</mo>
    <mi>H</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>,</mo>
    <mi>y</mi>
    <mo data-mjx-texclass="CLOSE">)</mo>
  </mrow>
  <mo>=</mo>
  <mo>&#x2212;</mo>
  <mo stretchy="false">[</mo>
  <mi>y</mi>
  <mi>l</mi>
  <mi>o</mi>
  <mi>g</mi>
  <mi>H</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
  <mo>+</mo>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo>&#x2212;</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
  <mi>l</mi>
  <mi>o</mi>
  <mi>g</mi>
  <mo stretchy="false">(</mo>
  <mn>1</mn>
  <mo>&#x2212;</mo>
  <mi>H</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">)</mo>
  <mo stretchy="false">]</mo>
</math>

μμ cost functionμ λν΄ κ²½μ¬ νκ°λ²μ μννλ©΄μ μ΅μ μ κ°μ€μΉ Wλ₯Ό μ°Ύλλ€. μ΄λ₯Ό μμμΌλ‘ λνλ΄λ©΄ λ€μκ³Ό κ°λ€. 

<br/>

**[ μ΅μ μ W κ΅¬νκΈ° ]**

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>W</mi>
  <mo>:=</mo>
  <mi>W</mi>
  <mo>&#x2212;</mo>
  <mi>&#x3B1;</mi>
  <mfrac>
    <mrow data-mjx-texclass="ORD">
      <mo>&#x2202;</mo>
    </mrow>
    <mrow>
      <mrow data-mjx-texclass="ORD">
        <mo>&#x2202;</mo>
      </mrow>
      <mi>W</mi>
    </mrow>
  </mfrac>
  <mi>c</mi>
  <mi>o</mi>
  <mi>s</mi>
  <mi>t</mi>
  <mo stretchy="false">(</mo>
  <mi>W</mi>
  <mo stretchy="false">)</mo>
</math>



***

## π» μ€μ΅ μμ  μ½λ 

### PyTorchλ‘ λ‘μ§μ€νΈ νκ· κ΅¬ννκΈ°

#### **[ νμν λκ΅¬ import ]**

```python
import torch
import torch.nn as nn
import torch.nn.functional as F
import torch.optim as optim

torch.manual_seed(1)
```
```python
x_data = [[1, 2], [2, 3], [3, 1], [4, 3], [5, 3], [6, 2]]
y_data = [[0], [0], [0], [1], [1], [1]]
x_train = torch.FloatTensor(x_data)
y_train = torch.FloatTensor(y_data)
```

<br/>

#### **[ Wμ b κ° μ΄κΈ°ν ]**

Wμ bλ₯Ό μ λΆ 0μΌλ‘ μ΄κΈ°νν΄μ£Όμ.

```python
W = torch.zeros((2, 1), requires_grad=True)  # ν¬κΈ°λ 2 x 1
b = torch.zeros(1, requires_grad=True)
```


Wμ bλ₯Ό μ λΆ 0μΌλ‘ μ΄κΈ°νν΄μ€ μνμμ μμΈ‘νλ©΄ μμΈ‘κ°μ μ λΆ 0.5κ° λμ¨λ€.
```python
# hypothesis = 1 / (1 + torch.exp(-(x_train.matmul(W) + b)))
hypothesis = torch.sigmoid(x_train.matmul(W) + b)
print(hypothesis)  # μμΈ‘κ°μΈ H(x) μΆλ ₯
```
```
tensor([[0.5000],
        [0.5000],
        [0.5000],
        [0.5000],
        [0.5000],
        [0.5000]], grad_fn=<MulBackward>)
```

<br/>

#### **[ λͺ¨λΈ νλ ¨ ]**


μ΄μ  λͺ¨λΈμ νλ ¨ν΄λ³΄μ.

```python
# λͺ¨λΈ μ΄κΈ°ν
W = torch.zeros((2, 1), requires_grad=True)
b = torch.zeros(1, requires_grad=True)
# optimizer μ€μ 
optimizer = optim.SGD([W, b], lr=1)

nb_epochs = 1000
for epoch in range(nb_epochs + 1):

    # Cost κ³μ°
    hypothesis = torch.sigmoid(x_train.matmul(W) + b)
    # cost = -(y_train * torch.log(hypothesis) +
    #          (1 - y_train) * torch.log(1 - hypothesis)).mean()
    cost = F.binary_cross_entropy(hypothesis, y_train)


    # costλ‘ H(x) κ°μ 
    optimizer.zero_grad()
    cost.backward()
    optimizer.step()

    # 100λ²λ§λ€ λ‘κ·Έ μΆλ ₯
    if epoch % 100 == 0:
        print('Epoch {:4d}/{} Cost: {:.6f}'.format(
            epoch, nb_epochs, cost.item()
        ))
```
```
Epoch    0/1000 Cost: 0.693147
... μ€λ΅ ...
Epoch 1000/1000 Cost: 0.019852
```

 <br/>

μμ μ½λμμλ μ§μ  λ²‘ν° κ³μ°μ ν νμ torchμ Sigmoid ν¨μλ₯Ό μ μ©ν΄μ€¬μ§λ§ μλ μ½λμ²λΌ nn.Moduleμ μ΄μ©ν΄μ ν λ²μ μ°κ²°ν΄μ κ³μ°ν  μλ μλ€. λ μ΄ λ°©λ²μ΄ λ κ°λ¨νκ³  λμ€μ layerμ μκΈ°λ νΈν΄μ nn.Moduleμ λ§μ΄ μ΄λ€. κ·Έλ¦¬κ³  λ€μ μΈκ³΅ μ κ²½λ§μ λ λ°°μ°λ©΄μ λμ€κ² μ§λ§, μκ·Έλͺ¨μ΄λ ν¨μλ μΈκ³΅ μ κ²½λ§μ μλμΈ΅μμλ κ±°μ μ¬μ©λμ§ μλλ€.

```python
model = nn.Sequential(
   nn.Linear(2, 1), # input_dim = 2, output_dim = 1
   nn.Sigmoid() # μΆλ ₯μ μκ·Έλͺ¨μ΄λ ν¨μλ₯Ό κ±°μΉλ€
)

# optimizer μ€μ 
optimizer = optim.SGD(model.parameters(), lr=1)

nb_epochs = 1000
for epoch in range(nb_epochs + 1):

    # H(x) κ³μ°
    hypothesis = model(x_train)

    # cost κ³μ°
    cost = F.binary_cross_entropy(hypothesis, y_train)

    # costλ‘ H(x) κ°μ 
    optimizer.zero_grad()
    cost.backward()
    optimizer.step()

    # 20λ²λ§λ€ λ‘κ·Έ μΆλ ₯
    if epoch % 10 == 0:
        prediction = hypothesis >= torch.FloatTensor([0.5]) # μμΈ‘κ°μ΄ 0.5λ₯Ό λμΌλ©΄ Trueλ‘ κ°μ£Ό
        correct_prediction = prediction.float() == y_train # μ€μ κ°κ³Ό μΌμΉνλ κ²½μ°λ§ Trueλ‘ κ°μ£Ό
        accuracy = correct_prediction.sum().item() / len(correct_prediction) # μ νλλ₯Ό κ³μ°
        print('Epoch {:4d}/{} Cost: {:.6f} Accuracy {:2.2f}%'.format( # κ° μν¬ν¬λ§λ€ μ νλλ₯Ό μΆλ ₯
            epoch, nb_epochs, cost.item(), accuracy * 100,
        ))
```


<br/>

#### **[ μμΈ‘ ]**


νμ΅ λ! νμ΅ ν μ΅μ μ Wμ bλ₯Ό κ°μ§κ³  μμΈ‘κ°μ κ΅¬ν΄λ³΄μ.

```python
hypothesis = torch.sigmoid(x_train.matmul(W) + b)
print(hypothesis)
```
```
tensor([[2.7648e-04],
        [3.1608e-02],
        [3.8977e-02],
        [9.5622e-01],
        [9.9823e-01],
        [9.9969e-01]], grad_fn=<SigmoidBackward>)
```

<br/>

λ§μ§λ§μΌλ‘, test dataμ λν΄μ μμΈ‘κΉμ§!!
```python
prediction = hypothesis >= torch.FloatTensor([0.5])
print(prediction)
```




<!-- ## λ§λ¬΄λ¦¬νλ©΄μ.. -->



### λ€μ ν¬μ€νΈμμ λ§λμ π
<!-- λ€μ ν¬μ€νΈμμλ [K-MOOC μ€μ΅μΌλ‘ λ°°μ°λ λ¨Έμ λ¬λ](http://www.kmooc.kr/courses/course-v1:SSUk+SSMOOC20K+2022_T1/course/)μμ λ΄κ° λΆμ‘±ν λΆλΆλ€μ μ λ¦¬ν΄ λ μμ±ν  μμ μ΄λ€. -->

<br/>

***

## μ°Έκ³ 


[K-MOOC μ€μ΅μΌλ‘ λ°°μ°λ λ¨Έμ λ¬λ](http://www.kmooc.kr/courses/course-v1:SSUk+SSMOOC20K+2022_T1/course/)

[Wikidocs](https://wikidocs.net/57805)

[7 HIDDEN LAYERS](https://7-hiddenlayers.com/deep-learning-2/)

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
