---
layout: post
title:  "0930 데이터 분석 TIL"
date:   2022-09-30 09:05:09 +0900
categories: 2022_likelion
published: false
---
# 0930 SQL TIL 



## 👩🏻‍💻 데이터리안 SQL 강의 _ 송혜정님, 
[백문이불여일타] 데이터 분석을 위한 중급 SQL

## 📚 오늘의 TIL (1) - 집계함수

**Cheat Sheet**을 통해 SQL 리마인드 하는 것을 추천.

### 🐾　사이트 목록　🐾
1. 이론강의 실습 사이트 (w3school) - 회원 가입 필요 없음 <br/>
<https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all> <br><br/>
![w3school_ex](/assets/img/sql_img_20220930/w3school_ex.png){:width="90%" height="90%"} <br/><br/>

2. 문제풀이 사이트 (HackerRank) - 회원가입 필요 <br/>


3. 리트코드 (Leetcode) - 회원가입 필요 <br/>
<https://leetcode.com/> <br/>

<br/>

### 🐾　집계함수　🐾
#### COUNT
COUNT 함수는 `null` 값이 있다면 `null` 값은 제외하고 개수를 세어 준다.
```sql
SELECT COUNT(*)
FROM Products
```

#### AVG와 SUM
AVG 함수는 `null`값을 빼고 평균을 구해주는 함수이다. 즉, 다섯 개의 값 중에 1개의 `null` 값이 존재한다고 하면 그 값을 제외한 네 개의 값에 대한 평균을 반환해준다. `null` 값을 없는 것처럼 평균을 구하고 싶다면 AVG 함수를, `null`값을 0으로 취급하고 싶다면 다음 코드를 참고하면 되겠다. <br/>
```sql
SELECT SUM(Visits)/COUNT(*)
FROM sample
```
SUM 함수도 마찬가지로 `null`값을 제외한 값의 합을 반환해준다.
<br/><br/>



### 🐾　GROUP BY　🐾
`GROUP BY 기준`을 통해 `기준`을 기준으로 묶어서 표현할 수 있다. 그룹을 묶으려는 `기준`이 꼭 `SELECT`문에도 포함되어야 한다.
```sql
SELECT SupplierID, CategoryID, AVG(Price)
FROM Products
GROUP BY SupplierID, CategoryID
```

아래처럼 `GROUP BY` 다음에 숫자를 써서 표현할 수도 있다. 이는 `SELECT`문 안의 첫 번째, 두 번째에 대하여 그룹으로 묶었다는 의미이다. 그러나 숫자로 표현하는 것은 무엇으로 그룹화했는지 한 눈에 보이지 않기 때문에 협업하는 과정에서 추천하지 않는다.
```sql
SELECT SupplierID, CategoryID, AVG(Price)
FROM Products
GROUP BY 1, 2
```

<br/>


### 🐾　HAVING　🐾
`GROUP BY`로 그룹화한 후 특정 조건으로 필터링하고 싶을 때는 `WHERE`절을 이용하는 게 아니라 `HAVING`을 이용해 조건을 걸어줘야한다. 
```sql
SELECT SupplierID, CategoryID, AVG(Price)
FROM Products
GROUP BY SupplierID, CategoryID
HAVING AVG(Price) >= 100
```
<br/>

### 🐾　AS　🐾
`AS`는 alias의 약자로, 기존의 컬럼이나 우리가 새로 만들어준 컬럼의 별명을 따로 지정해줄 수 있다.

```sql
SELECT SupplierID, CategoryID, AVG(Price) AS avg_price
FROM Products
GROUP BY SupplierID, CategoryID
HAVING avg_price >= 100
```

<br/>

***



## 오늘의 문제 _ Hackerrank

각각의 문제 제목을 누르면 해당 링크로 넘어갈 수 있다.

### 🐾　집계함수 예제　🐾

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

### 🐾　GROUP BY 예제　🐾
#### [Top Earners](https://www.hackerrank.com/challenges/earnings-of-employees/problem?isFullScreen=true)
We define an employee's total earnings to be their monthly `salary x months` worked, and the maximum total earnings to be the maximum total earnings for any employee in the Employee table. Write a query to find the maximum total earnings for all employees as well as the total number of employees who have maximum total earnings. Then print these values as 2 space-separated integers. <br/>
-> 돈을 제일 많이 번 사람의 금액과 그 금액을 받은 사람의 수를 찾아라.
```sql
SELECT salary*months AS earnings, COUNT(*)
FROM employee
GROUP BY earnings 
ORDER BY earnings DESC
LIMIT 1
```

<br/>

***
쨘! 오늘 예제를 풀면서 rank가 하나 더 올랐다!
![rankup_2ndstar](/assets/img/sql_img_20220930/rankup_2ndstar.png){:width="90%" height="90%"} <br/>

***

## 📚 오늘의 TIL (2) - CASE
### 🐾　CASE　🐾
```sql
SELECT CASE
            WHEN categoryid = 1 THEN '음료'
            WHEN categoryid = 2 THEN '조미료'
            ELSE '기타'
        END AS 'categoryname', *
FROM Products
```
![case_ex](/assets/img/sql_img_20220930/case_ex.png){:width="90%" height="90%"} <br/>

```sql
SELECT CASE
            WHEN categoryid = 1 THEN '음료'
            WHEN categoryid = 2 THEN '소스'
            ELSE '이외'
       END AS new_category
     , AVG(Price)
FROM Products
GROUP BY new_category
```

### 🐾　예제 - [Hackerrank의 Type of Triangle](hackerrank.com/challenges/what-type-of-triangle/problem?h_r=internal-search&isFullScreen=true)　🐾
🌟 `WHEN`절의 순서도 고려해야한다. <br/>
조건을 만족하는 `WHEN`절을 만나면 거기서 멈추고 그 밑으론 내려오지 않는다!
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
category별 평균을 가로로 보고 싶을 때!

### 🐾　Table Pivoting　🐾

```sql
SELECT AVG(CASE WHEN categoryid = 1 THEN price ELSE NULL END) AS category1_price
     , AVG(CASE WHEN categoryid = 2 THEN price ELSE NULL END) AS category2_price
     , AVG(CASE WHEN categoryid = 3 THEN price ELSE NULL END) AS category3_price
FROM Products
```

### 🐾　예제 - [Leetcode의 1179. Reformat Department Table](https://leetcode.com/problems/reformat-department-table/)　🐾

`month`별 `revenue` 값의 합을 id별로 나타내자.
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

### 🐾　추가 예제　🐾
#### 예제 1. 식사 금액과 팁의 관계
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


#### 예제 2
Q. records 테이블에서 각 도시(city)에서 카테고리별(category)로 주문수가 얼마나 되는지, 카테고리별 총 주문 금액은 얼마나 되는지 알고 싶다면 어떻게 쿼리를 짜면 좋을까요. 총 주문 금액은 매출(sales)을 기준으로 계산해주세요.
```sql
SELECT city
     , category
     , COUNT(DISTINCT order_id) AS cnt_orders
     , SUM(sales) AS sum_sales
FROM records
GROUP BY city, category

```

***

### 🐾　RFM Segmentation　🐾
RFM은 고객 세분화 모영으로, CRM 마켓팅 등 실무에서 고객을 분류할 때 자주 사용하는 모형이다. 
- Recency
    - 얼마나 최근에 구매했는지
- Frequency
    - 얼마나 자주 구매했는지
- Monetary
    - 얼마나 많은 금액을 구매했는지

#### CASE와 IF 응용하기
1. customer_stats 테이블의 last_order_date 컬럼을 이용하여 각 고객의 Recency 점수를 계산해봅시다. Recency 점수가 1점인 사용자, 0점인 사용자는 각각 몇 명인가요? 조건 계산에는 CASE를 사용해주세요.
2. customer_stats 테이블의 last_order_date, cnt_orders 컬럼을 이용하여 각 고객의 Recency, Frequency 점수를 계산해봅시다. 아래 표를 채워넣어주세요. 조건 계산에는 IF를 사용해주세요.

```sql
SELECT CASE WHEN last_order_date >= '2020-12-01' THEN 1 ELSE 0 END AS recency
    , IF(cnt_orders >= 3, 1, 0) AS Frequency
    , COUNT(DISTINCT customer_id) as customers
    
FROM customer_stats
GROUP BY recency, Frequency
ORDER BY recency DESC, Frequency DESC
```

![case_if_app](/assets/img/sql_img_20220930/case_if_app.png){:width="70%" height="70%"} <br/><br/>


#### RFM 분석 2단계. 고객 분류하기
```sql
SELECT IF(last_order_date >= '2020-12-01', 1, 0) as recency
     , IF(cnt_orders >= 3, 1, 0) AS frequency
     , IF(sum_sales < 500, 0, 1) AS monetary
     , COUNT(customer_id) AS customers
FROM customer_stats
GROUP BY recency, frequency, monetary
```
![RFM_2_classify](/assets/img/sql_img_20220930/RFM_2_classify.png){:width="90%" height="90%"} <br/>


### 🐾　Table Pivot　🐾
#### Step 1. CASE 문 사용
Q. records 테이블을 이용해 전체 order_id, 카테고리 값이 ‘Furniture’인 경우의 order_id 값을 뽑아오는 쿼리를 작성해보세요. 아래와 같은 형식으로 결과를 출력해주세요. <br/>
```sql
SELECT order_id
     , CASE WHEN category = 'Furniture' THEN order_id END AS furniture_order_id
FROM records
```
![case_furniture](/assets/img/sql_img_20220930/case_furniture.png){:width="90%" height="90%"} <br/><br/>
#### Step 2. COUNT DISTINCT
Q. records 테이블을 이용해 전체 주문수와 카테고리 값이 ‘Furniture’인 경우의 주문수를 세는 쿼리를 작성해보세요. <br/>
```sql
SELECT COUNT(DISTINCT order_id) AS cnt_orders
     , SUM(CASE WHEN category = 'Furniture' THEN 1 END) AS cnt_furniture_orders
FROM records
```
![step2_cnt_distinct](/assets/img/sql_img_20220930/step2_cnt_distinct.png){:width="70%" height="70%"} <br/>

#### Step 3. region 그룹 기준 추가
Q. records 테이블을 이용해 region별 전체 주문수와, 카테고리 값이 ‘Furniture’인 주문수를 계산하는 쿼리를 작성해주세요. 아래와 같이 결과를 볼 수 있으면 됩니다. <br/>
```sql
SELECT region
     , COUNT(DISTINCT order_id) AS cnt_orders
     , SUM(CASE WHEN category = 'Furniture' THEN 1 END) AS cnt_furniture_orders
FROM records
GROUP BY region
```
<br/>

![step3_region](/assets/img/sql_img_20220930/step3_region.png){:width="90%" height="90%"} <br/><br/>


### 예제 - [지역별 주문의 특징](https://solvesql.com/problems/characteristics-of-orders/)<br/>
![question_region_order](/assets/img/sql_img_20220930/question_region_order.png) <br/><br/>
[코드]
```sql
SELECT region AS Region
     , COUNT(DISTINCT CASE WHEN category = 'Furniture' THEN order_id END) AS Furniture
     , COUNT(DISTINCT CASE WHEN category = 'Office Supplies' THEN order_id END) AS 'Office Supplies'
     , COUNT(DISTINCT CASE WHEN category = 'Technology' THEN order_id END) AS Technology
     
FROM records
GROUP BY region
ORDER BY region
```
[결과] <br/>

![query_region_order](/assets/img/sql_img_20220930/query_region_order.png){:width="90%" height="90%"} <br/>



<!-- ### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾 -->
