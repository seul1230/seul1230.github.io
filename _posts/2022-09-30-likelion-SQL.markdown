---
layout: post
title:  "0930 SQL TIL"
date:   2022-09-30 09:05:09 +0900
categories: SpecialLecture
published: false
---
# 0930 SQL TIL 



#### π©π»βπ» λ°μ΄ν°λ¦¬μ SQL κ°μ _ μ‘νμ λ, 
[λ°±λ¬Έμ΄λΆμ¬μΌν] λ°μ΄ν° λΆμμ μν μ€κΈ SQL

## π μ€λμ TIL (1) - μ§κ³ν¨μ

**Cheat Sheet**μ ν΅ν΄ SQL λ¦¬λ§μΈλ νλ κ²μ μΆμ².

### πΎγμ¬μ΄νΈ λͺ©λ‘γπΎ
1. μ΄λ‘ κ°μ μ€μ΅ μ¬μ΄νΈ (w3school) - νμ κ°μ νμ μμ <br/>
<https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all> <br><br/>
![w3school_ex](/assets/img/sql_img_20220930/w3school_ex.png){:width="90%" height="90%"} <br/><br/>

2. λ¬Έμ νμ΄ μ¬μ΄νΈ (HackerRank) - νμκ°μ νμ <br/>


3. λ¦¬νΈμ½λ (Leetcode) - νμκ°μ νμ <br/>
<https://leetcode.com/> <br/>

<br/>

### πΎγμ§κ³ν¨μγπΎ
#### COUNT
COUNT ν¨μλ `null` κ°μ΄ μλ€λ©΄ `null` κ°μ μ μΈνκ³  κ°μλ₯Ό μΈμ΄ μ€λ€.
```sql
SELECT COUNT(*)
FROM Products
```

#### AVGμ SUM
AVG ν¨μλ `null`κ°μ λΉΌκ³  νκ· μ κ΅¬ν΄μ£Όλ ν¨μμ΄λ€. μ¦, λ€μ― κ°μ κ° μ€μ 1κ°μ `null` κ°μ΄ μ‘΄μ¬νλ€κ³  νλ©΄ κ·Έ κ°μ μ μΈν λ€ κ°μ κ°μ λν νκ· μ λ°νν΄μ€λ€. `null` κ°μ μλ κ²μ²λΌ νκ· μ κ΅¬νκ³  μΆλ€λ©΄ AVG ν¨μλ₯Ό, `null`κ°μ 0μΌλ‘ μ·¨κΈνκ³  μΆλ€λ©΄ λ€μ μ½λλ₯Ό μ°Έκ³ νλ©΄ λκ² λ€. <br/>
```sql
SELECT SUM(Visits)/COUNT(*)
FROM sample
```
SUM ν¨μλ λ§μ°¬κ°μ§λ‘ `null`κ°μ μ μΈν κ°μ ν©μ λ°νν΄μ€λ€.
<br/><br/>



### πΎγGROUP BYγπΎ
`GROUP BY κΈ°μ€`μ ν΅ν΄ `κΈ°μ€`μ κΈ°μ€μΌλ‘ λ¬Άμ΄μ ννν  μ μλ€. κ·Έλ£Ήμ λ¬ΆμΌλ €λ `κΈ°μ€`μ΄ κΌ­ `SELECT`λ¬Έμλ ν¬ν¨λμ΄μΌ νλ€.
```sql
SELECT SupplierID, CategoryID, AVG(Price)
FROM Products
GROUP BY SupplierID, CategoryID
```

μλμ²λΌ `GROUP BY` λ€μμ μ«μλ₯Ό μ¨μ ννν  μλ μλ€. μ΄λ `SELECT`λ¬Έ μμ μ²« λ²μ§Έ, λ λ²μ§Έμ λνμ¬ κ·Έλ£ΉμΌλ‘ λ¬Άμλ€λ μλ―Έμ΄λ€. κ·Έλ¬λ μ«μλ‘ νννλ κ²μ λ¬΄μμΌλ‘ κ·Έλ£Ήννλμ§ ν λμ λ³΄μ΄μ§ μκΈ° λλ¬Έμ νμνλ κ³Όμ μμ μΆμ²νμ§ μλλ€.
```sql
SELECT SupplierID, CategoryID, AVG(Price)
FROM Products
GROUP BY 1, 2
```

<br/>


### πΎγHAVINGγπΎ
`GROUP BY`λ‘ κ·Έλ£Ήνν ν νΉμ  μ‘°κ±΄μΌλ‘ νν°λ§νκ³  μΆμ λλ `WHERE`μ μ μ΄μ©νλ κ² μλλΌ `HAVING`μ μ΄μ©ν΄ μ‘°κ±΄μ κ±Έμ΄μ€μΌνλ€. 
```sql
SELECT SupplierID, CategoryID, AVG(Price)
FROM Products
GROUP BY SupplierID, CategoryID
HAVING AVG(Price) >= 100
```
<br/>

### πΎγASγπΎ
`AS`λ aliasμ μ½μλ‘, κΈ°μ‘΄μ μ»¬λΌμ΄λ μ°λ¦¬κ° μλ‘ λ§λ€μ΄μ€ μ»¬λΌμ λ³λͺμ λ°λ‘ μ§μ ν΄μ€ μ μλ€.

```sql
SELECT SupplierID, CategoryID, AVG(Price) AS avg_price
FROM Products
GROUP BY SupplierID, CategoryID
HAVING avg_price >= 100
```

<br/>

***



## μ€λμ λ¬Έμ  _ Hackerrank

κ°κ°μ λ¬Έμ  μ λͺ©μ λλ₯΄λ©΄ ν΄λΉ λ§ν¬λ‘ λμ΄κ° μ μλ€.

### πΎγμ§κ³ν¨μ μμ γπΎ

#### [Revising Aggregations - Averages](https://www.hackerrank.com/challenges/revising-aggregations-the-average-function/problem?isFullScreen=true)
Query a count of the number of cities in CITY having a Population larger than 100,000.
```sql
SELECT AVG(population)
FROM CITY
WHERE DISTRICT = "California"
```

#### [Revising Aggregations - Sum](https://www.hackerrank.com/challenges/revising-aggregations-sum/problem?isFullScreen=true)
Query the total population of all cities in CITY where District is California.
```sql
SELECT SUM(population)
FROM city
WHERE district = "California"
```

#### [Revising Aggregations - Count](https://www.hackerrank.com/challenges/revising-aggregations-the-count-function/problem?isFullScreen=true)
Query a count of the number of cities in CITY having a Population larger than 100,000.
```sql
SELECT COUNT(district)
FROM city
WHERE population > 100000
```


#### [Average Population](https://www.hackerrank.com/challenges/average-population/problem?isFullScreen=true)
Query the average population for all cities in CITY, rounded down to the nearest integer.
```sql
SELECT ROUND(AVG(population))
FROM city
```

#### [Population Density Difference](https://www.hackerrank.com/challenges/average-population/problem?isFullScreen=true)
Query the difference between the maximum and minimum populations in CITY.

```sql
SELECT MAX(population) - MIN(population)
FROM city
```

#### [Weather Observation Station 4](https://www.hackerrank.com/challenges/weather-observation-station-4/problem?isFullScreen=true)
Find the difference between the total number of CITY entries in the table and the number of distinct CITY entries in the table.
```sql
SELECT COUNT(city) - COUNT(DISTINCT(city))
FROM station
```

<br/>

### πΎγGROUP BY μμ γπΎ
#### [Top Earners](https://www.hackerrank.com/challenges/earnings-of-employees/problem?isFullScreen=true)
We define an employee's total earnings to be their monthly `salary x months` worked, and the maximum total earnings to be the maximum total earnings for any employee in the Employee table. Write a query to find the maximum total earnings for all employees as well as the total number of employees who have maximum total earnings. Then print these values as 2 space-separated integers. <br/>
-> λμ μ μΌ λ§μ΄ λ² μ¬λμ κΈμ‘κ³Ό κ·Έ κΈμ‘μ λ°μ μ¬λμ μλ₯Ό μ°ΎμλΌ.
```sql
SELECT salary*months AS earnings, COUNT(*)
FROM employee
GROUP BY earnings 
ORDER BY earnings DESC
LIMIT 1
```

<br/>

***
μ¨! μ€λ μμ λ₯Ό νλ©΄μ rankκ° νλ λ μ¬λλ€!
![rankup_2ndstar](/assets/img/sql_img_20220930/rankup_2ndstar.png){:width="90%" height="90%"} <br/>

***

## π μ€λμ TIL (2) - CASE
### πΎγCASEγπΎ
```sql
SELECT CASE
            WHEN categoryid = 1 THEN 'μλ£'
            WHEN categoryid = 2 THEN 'μ‘°λ―Έλ£'
            ELSE 'κΈ°ν'
        END AS 'categoryname', *
FROM Products
```
![case_ex](/assets/img/sql_img_20220930/case_ex.png){:width="90%" height="90%"} <br/>

```sql
SELECT CASE
            WHEN categoryid = 1 THEN 'μλ£'
            WHEN categoryid = 2 THEN 'μμ€'
            ELSE 'μ΄μΈ'
       END AS new_category
     , AVG(Price)
FROM Products
GROUP BY new_category
```

### πΎγμμ  - [Hackerrankμ Type of Triangle](hackerrank.com/challenges/what-type-of-triangle/problem?h_r=internal-search&isFullScreen=true)γπΎ
π `WHEN`μ μ μμλ κ³ λ €ν΄μΌνλ€. <br/>
μ‘°κ±΄μ λ§μ‘±νλ `WHEN`μ μ λ§λλ©΄ κ±°κΈ°μ λ©μΆκ³  κ·Έ λ°μΌλ‘  λ΄λ €μ€μ§ μλλ€!
```sql
SELECT CASE
            WHEN a = b AND b = c THEN 'Equilateral'
            WHEN a >= b + c OR b >= a + c OR c >= a + b THEN 'Not A Triangle'
            WHEN a = b OR b = c OR a = c THEN 'Isosceles'
            ELSE 'Scalene'            
        END
FROM triangles
```
<br/>
categoryλ³ νκ· μ κ°λ‘λ‘ λ³΄κ³  μΆμ λ!

### πΎγTable PivotingγπΎ

```sql
SELECT AVG(CASE WHEN categoryid = 1 THEN price ELSE NULL END) AS category1_price
     , AVG(CASE WHEN categoryid = 2 THEN price ELSE NULL END) AS category2_price
     , AVG(CASE WHEN categoryid = 3 THEN price ELSE NULL END) AS category3_price
FROM Products
```

### πΎγμμ  - [Leetcodeμ 1179. Reformat Department Table](https://leetcode.com/problems/reformat-department-table/)γπΎ

`month`λ³ `revenue` κ°μ ν©μ idλ³λ‘ λνλ΄μ.
```sql
SELECT id
     , SUM(CASE WHEN month = 'Jan' THEN revenue ELSE NULL END) AS Jan_Revenue
     , SUM(CASE WHEN month = 'Feb' THEN revenue ELSE NULL END) AS Feb_Revenue
     , SUM(CASE WHEN month = 'Mar' THEN revenue ELSE NULL END) AS Mar_Revenue
     , SUM(CASE WHEN month = 'Apr' THEN revenue ELSE NULL END) AS Apr_Revenue
     , SUM(CASE WHEN month = 'May' THEN revenue ELSE NULL END) AS May_Revenue
     , SUM(CASE WHEN month = 'Jun' THEN revenue ELSE NULL END) AS Jun_Revenue
     , SUM(CASE WHEN month = 'Jul' THEN revenue ELSE NULL END) AS Jul_Revenue
     , SUM(CASE WHEN month = 'Aug' THEN revenue ELSE NULL END) AS Aug_Revenue
     , SUM(CASE WHEN month = 'Sep' THEN revenue ELSE NULL END) AS Sep_Revenue
     , SUM(CASE WHEN month = 'Oct' THEN revenue ELSE NULL END) AS Oct_Revenue
     , SUM(CASE WHEN month = 'Nov' THEN revenue ELSE NULL END) AS Nov_Revenue
     , SUM(CASE WHEN month = 'Dec' THEN revenue ELSE NULL END) AS Dec_Revenue
FROM Department
GROUP BY id
```
<br/>

***

### πΎγμΆκ° μμ γπΎ
#### μμ  1. μμ¬ κΈμ‘κ³Ό νμ κ΄κ³
```sql
SELECT day
    , SUM(tip) AS tip_daily
    , SUM(total_bill) AS revenue_daily
    , SUM(tip)*100/SUM(total_bill) AS tip_revenue_pct
    
FROM tips
GROUP BY day
ORDER BY tip_revenue_pct DESC
```
<br/>


#### μμ  2
Q. records νμ΄λΈμμ κ° λμ(city)μμ μΉ΄νκ³ λ¦¬λ³(category)λ‘ μ£Όλ¬Έμκ° μΌλ§λ λλμ§, μΉ΄νκ³ λ¦¬λ³ μ΄ μ£Όλ¬Έ κΈμ‘μ μΌλ§λ λλμ§ μκ³  μΆλ€λ©΄ μ΄λ»κ² μΏΌλ¦¬λ₯Ό μ§λ©΄ μ’μκΉμ. μ΄ μ£Όλ¬Έ κΈμ‘μ λ§€μΆ(sales)μ κΈ°μ€μΌλ‘ κ³μ°ν΄μ£ΌμΈμ.
```sql
SELECT city
     , category
     , COUNT(DISTINCT order_id) AS cnt_orders
     , SUM(sales) AS sum_sales
FROM records
GROUP BY city, category

```

***

### πΎγRFM SegmentationγπΎ
RFMμ κ³ κ° μΈλΆν λͺ¨μμΌλ‘, CRM λ§μΌν λ± μ€λ¬΄μμ κ³ κ°μ λΆλ₯ν  λ μμ£Ό μ¬μ©νλ λͺ¨νμ΄λ€. 
- Recency
    - μΌλ§λ μ΅κ·Όμ κ΅¬λ§€νλμ§
- Frequency
    - μΌλ§λ μμ£Ό κ΅¬λ§€νλμ§
- Monetary
    - μΌλ§λ λ§μ κΈμ‘μ κ΅¬λ§€νλμ§

#### CASEμ IF μμ©νκΈ°
1. customer_stats νμ΄λΈμ last_order_date μ»¬λΌμ μ΄μ©νμ¬ κ° κ³ κ°μ Recency μ μλ₯Ό κ³μ°ν΄λ΄μλ€. Recency μ μκ° 1μ μΈ μ¬μ©μ, 0μ μΈ μ¬μ©μλ κ°κ° λͺ λͺμΈκ°μ? μ‘°κ±΄ κ³μ°μλ CASEλ₯Ό μ¬μ©ν΄μ£ΌμΈμ.
2. customer_stats νμ΄λΈμ last_order_date, cnt_orders μ»¬λΌμ μ΄μ©νμ¬ κ° κ³ κ°μ Recency, Frequency μ μλ₯Ό κ³μ°ν΄λ΄μλ€. μλ νλ₯Ό μ±μλ£μ΄μ£ΌμΈμ. μ‘°κ±΄ κ³μ°μλ IFλ₯Ό μ¬μ©ν΄μ£ΌμΈμ.

```sql
SELECT CASE WHEN last_order_date >= '2020-12-01' THEN 1 ELSE 0 END AS recency
    , IF(cnt_orders >= 3, 1, 0) AS Frequency
    , COUNT(DISTINCT customer_id) as customers
    
FROM customer_stats
GROUP BY recency, Frequency
ORDER BY recency DESC, Frequency DESC
```

![case_if_app](/assets/img/sql_img_20220930/case_if_app.png){:width="70%" height="70%"} <br/><br/>


#### RFM λΆμ 2λ¨κ³. κ³ κ° λΆλ₯νκΈ°
```sql
SELECT IF(last_order_date >= '2020-12-01', 1, 0) as recency
     , IF(cnt_orders >= 3, 1, 0) AS frequency
     , IF(sum_sales < 500, 0, 1) AS monetary
     , COUNT(customer_id) AS customers
FROM customer_stats
GROUP BY recency, frequency, monetary
```
![RFM_2_classify](/assets/img/sql_img_20220930/RFM_2_classify.png){:width="90%" height="90%"} <br/>


### πΎγTable PivotγπΎ
#### Step 1. CASE λ¬Έ μ¬μ©
Q. records νμ΄λΈμ μ΄μ©ν΄ μ μ²΄ order_id, μΉ΄νκ³ λ¦¬ κ°μ΄ βFurnitureβμΈ κ²½μ°μ order_id κ°μ λ½μμ€λ μΏΌλ¦¬λ₯Ό μμ±ν΄λ³΄μΈμ. μλμ κ°μ νμμΌλ‘ κ²°κ³Όλ₯Ό μΆλ ₯ν΄μ£ΌμΈμ. <br/>
```sql
SELECT order_id
     , CASE WHEN category = 'Furniture' THEN order_id END AS furniture_order_id
FROM records
```
![case_furniture](/assets/img/sql_img_20220930/case_furniture.png){:width="90%" height="90%"} <br/><br/>
#### Step 2. COUNT DISTINCT
Q. records νμ΄λΈμ μ΄μ©ν΄ μ μ²΄ μ£Όλ¬Έμμ μΉ΄νκ³ λ¦¬ κ°μ΄ βFurnitureβμΈ κ²½μ°μ μ£Όλ¬Έμλ₯Ό μΈλ μΏΌλ¦¬λ₯Ό μμ±ν΄λ³΄μΈμ. <br/>
```sql
SELECT COUNT(DISTINCT order_id) AS cnt_orders
     , SUM(CASE WHEN category = 'Furniture' THEN 1 END) AS cnt_furniture_orders
FROM records
```
![step2_cnt_distinct](/assets/img/sql_img_20220930/step2_cnt_distinct.png){:width="70%" height="70%"} <br/>

#### Step 3. region κ·Έλ£Ή κΈ°μ€ μΆκ°
Q. records νμ΄λΈμ μ΄μ©ν΄ regionλ³ μ μ²΄ μ£Όλ¬Έμμ, μΉ΄νκ³ λ¦¬ κ°μ΄ βFurnitureβμΈ μ£Όλ¬Έμλ₯Ό κ³μ°νλ μΏΌλ¦¬λ₯Ό μμ±ν΄μ£ΌμΈμ. μλμ κ°μ΄ κ²°κ³Όλ₯Ό λ³Ό μ μμΌλ©΄ λ©λλ€. <br/>
```sql
SELECT region
     , COUNT(DISTINCT order_id) AS cnt_orders
     , SUM(CASE WHEN category = 'Furniture' THEN 1 END) AS cnt_furniture_orders
FROM records
GROUP BY region
```
<br/>

![step3_region](/assets/img/sql_img_20220930/step3_region.png){:width="90%" height="90%"} <br/><br/>


### μμ  - [μ§μ­λ³ μ£Όλ¬Έμ νΉμ§](https://solvesql.com/problems/characteristics-of-orders/)<br/>
![question_region_order](/assets/img/sql_img_20220930/question_region_order.png) <br/><br/>
[μ½λ]
```sql
SELECT region AS Region
     , COUNT(DISTINCT CASE WHEN category = 'Furniture' THEN order_id END) AS Furniture
     , COUNT(DISTINCT CASE WHEN category = 'Office Supplies' THEN order_id END) AS 'Office Supplies'
     , COUNT(DISTINCT CASE WHEN category = 'Technology' THEN order_id END) AS Technology
     
FROM records
GROUP BY region
ORDER BY region
```
[κ²°κ³Ό] <br/>

![query_region_order](/assets/img/sql_img_20220930/query_region_order.png){:width="90%" height="90%"} <br/>



<!-- ### πΎγγπΎ
### πΎγγπΎ
### πΎγγπΎ
### πΎγγπΎ
### πΎγγπΎ
### πΎγγπΎ -->
