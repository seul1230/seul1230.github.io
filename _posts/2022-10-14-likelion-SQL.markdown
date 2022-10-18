---
layout: post
title:  "1014 SQL TIL"
date:   2022-10-14 09:05:09 +0900
categories: SpecialLecture
published: false
---
# 1014 SQL TIL 



## 👩🏻‍💻 데이터리안 SQL 강의 _ 송혜정님, 
[백문이불여일타] 데이터 분석을 위한 중급 SQL

## 📚 오늘의 TIL 

## JOIN


### 실습 예제

#### 183. Customers Who Never Order

Write an SQL query to report all customers who never order anything.

```sql
# Write your MySQL query statement below
SELECT c.name AS Customers
FROM Customers AS c
     LEFT JOIN Orders AS o ON c.id = o.customerId
WHERE o.id IS NULL
```


#### [181. Employees Earning More Than Their Managers](https://leetcode.com/problems/employees-earning-more-than-their-managers/)

Write an SQL query to find the employees who earn more than their managers.

```
Input: 
Employee table:
+----+-------+--------+-----------+
| id | name  | salary | managerId |
+----+-------+--------+-----------+
| 1  | Joe   | 70000  | 3         |
| 2  | Henry | 80000  | 4         |
| 3  | Sam   | 60000  | Null      |
| 4  | Max   | 90000  | Null      |
+----+-------+--------+-----------+
Output: 
+----------+
| Employee |
+----------+
| Joe      |
+----------+
Explanation: Joe is the only employee who earns more than his manager.
```
```sql
SELECT employee.name AS Employee
FROM Employee AS employee
     INNER JOIN Employee AS manager ON employee.managerid = manager.id
WHERE employee.salary > manager.salary
```

#### [197. Rising Temperature](https://leetcode.com/problems/rising-temperature/)
Write an SQL query to find all dates' Id with higher temperatures compared to its previous dates (yesterday).

```
Weather table:
+----+------------+-------------+
| id | recordDate | temperature |
+----+------------+-------------+
| 1  | 2015-01-01 | 10          |
| 2  | 2015-01-02 | 25          |
| 3  | 2015-01-03 | 20          |
| 4  | 2015-01-04 | 30          |
+----+------------+-------------+
Output: 
+----+
| id |
+----+
| 2  |
| 4  |
+----+
Explanation: 
In 2015-01-02, the temperature was higher than the previous day (10 -> 25).
In 2015-01-04, the temperature was higher than the previous day (20 -> 30).
```
시간 계산하는 함수 활용 :)

```sql
# Write your MySQL query statement below
SELECT today.id AS Id
FROM Weather as today
     INNER JOIN Weather as prev_day ON today.RecordDate = DATE_ADD(prev_day.RecordDate, INTERVAL 1 DAY)
WHERE today.temperature > prev_day.temperature     
     
# ["id", "recordDate", "Temperature", "id", "recordDate", "Temperature"]
# [2, "2015-01-02", 25, 1, "2015-01-01", 10], 
# [3, "2015-01-03", 20, 2, "2015-01-02", 25], 
# [4, "2015-01-04", 30, 3, "2015-01-03", 20]
```

## 시간 함수
#### **DATE_ADD**(기준날짜, INTERVAL)
* SELECT DATE_ADD(NOW(), INTERVAL 1 SECOND)
* SELECT DATE_ADD(NOW(), INTERVAL 1 DAY)
* SELECT DATE_ADD(NOW(), INTERVAL 1 MONTH)
* SELECT DATE_ADD(NOW(), INTERVAL -1 YEAR)

#### **DATE_SUB**(기준날짜, INTERVAL)
* SELECT DATE_SUB(NOW(), INTERVAL 1 SECOND)


## 집합연산 <font color = 'lightgray'>UNION</font>

UNION (합집합)을 이용해 두 개의 쿼리를 합쳐보자.
```sql
-- Product 테이블에서 Price가 10 이하 또는 200 이상인 상품들만 출력하세요.
SELECT *
FROM Products
WHERE price <= 5

UNION

SELECT *
FROM Products
WHERE price >= 200
```
두 개의 집합을 합친 합집합 결과가 궁금하다면, **LEFT JOIN**과 **RIGHT JOIN**, 그리고 **UNION**을 이용하여 구할 수 있다.
```sql
SELECT *
FROM customers
     LEFT JOIN orders on customers.CustomerID = orders.CustomerID
UNION
SELECT *
FROM customers
     RIGHT JOIN orders on customers.CustomerID = orders.CustomerID
```




### 마지막 해커랭크 문제 (어려움 ⭐️)

#### [Symmetric Pairs](https://www.hackerrank.com/challenges/symmetric-pairs/problem?h_r=internal-search)

Two pairs (X1, Y1) and (X2, Y2) are said to be symmetric pairs if X1 = Y2 and X2 = Y1.

Write a query to output all such symmetric pairs in ascending order by the value of X. List the rows such that X1 ≤ Y1.

```sql
--- X와 Y가 같을 때의 경우가 2개인 경우
SELECT X, Y
FROM functions
WHERE X = Y
GROUP BY X, Y 
HAVING COUNT(*) = 2
-- ORDER BY X 

UNION

--- X와 Y가 다를 때의 Symmetric pairs 찾기
SELECT f1.X, f1.Y
FROM functions AS f1
     INNER JOIN functions AS f2 ON f1.X = f2.Y
                                   AND f1.Y = f2.X
WHERE f1.X < f1.Y
ORDER BY X
```

UNION할 때 정렬은 항상 마지막 쿼리에만 ORDER BY 조건 걸어줘야 한다. 이때 ORDER BY는 전체 쿼리에 대해 작동한다.


***



```sql
--- Q1. orders 테이블 안에 몇 일 치의 데이터가 들어있나요? order_purchase_timestamp 컬럼을 기준으로 데이터의 시작 시점과 끝 시점을 알려주세요.
SELECT MIN(order_purchase_timestamp), MAX(order_purchase_timestamp)
FROM olist_orders_dataset

--- Q2. 고객들은 어떤 주(state)에 살고 있나요? customers 테이블 안에 customer_state 컬럼을 참고하여 olist 고객들이 어떤 주에 살고 있는지 알아봅시다. 이 정보를 주문 데이터(orders)와 연결하려면 어떤 컬럼을 사용해야 하나요?
SELECT customer_state
FROM olist_customers_dataset as customers
     LEFT JOIN olist_orders_dataset as orders ON customers.customer_unique_id = orders.customer_id
GROUP BY customer_state


---Q3. 고객들의 결제 데이터는 어떤 테이블에 있나요? 주문 하나에 결제 로그가 하나 붙어있는 1:1 관계인가요, 아니면 주문 하나에 결제 로그가 여러개 있을 수 있는 1:N 관계인가요? 결제 금액은 어떤 컬럼을 보고 알 수 있나요? orders 테이블과 결제 데이터는 어떤 컬럼을 기준으로 연결할 수 있나요?
SELECT pay.order_id, COUNT(payment_value)
 FROM olist_order_payments_dataset as pay
     INNER JOIN olist_orders_dataset as orders
     ON pay.order_id = orders.order_id
GROUP BY order_id

---Q4. orders, customers, payments 테이블을 사용하여 2017년에 매출이 많이 나오는 주(customer_state)가 어디인지 알아봅시다. 2017년 매출 Top 3 주를 꼽아주세요.
SELECT customers.customer_state, SUM(pay.payment_value) as 2017_sales
FROM olist_orders_dataset as orders
    INNER JOIN olist_customers_dataset as customers
    ON orders.customer_id = customers.customer_id
    INNER JOIN olist_order_payments_dataset as pay
    ON orders.order_id = pay.order_id
WHERE YEAR(orders.order_purchase_timestamp) = 2017
GROUP BY customers.customer_state
ORDER BY 2017_sales DESC
LIMIT 3

---Q. orders, payments 두 테이블을 가지고 2017년 5월 1일부터 2017년 11월 19일까지 이 쇼핑몰의 일일 매출액을 계산해봅시다. 매출이 일어나는 시점은 orders 테이블의 order_purchase_timestamp 컬럼을 참고하고, 매출 금액은 payments 테이블의 payment_value 컬럼을 참고하세요.
SELECT DATE(order_purchase_timestamp) AS dt
     , SUM(pay.payment_value) as total_sales
FROM olist_orders_dataset AS orders
     INNER JOIN olist_order_payments_dataset AS pay
             ON orders.order_id = pay.order_id
WHERE order_purchase_timestamp BETWEEN '2017-05-01 00:00:00' AND '2017-11-19 23:59:59'
GROUP BY dt
ORDER BY dt
LIMIT 1000

---Q. orders, payments 두 테이블을 가지고 2017년 5월 1일부터 2017년 11월 19일까지 이 쇼핑몰의 일별 결제 유저(PU; Paying User)수, 매출액, ARPPU(Average Revenue Per Paying User)를 계산해봅시다. 매출이 일어나는 시점은 orders 테이블의 order_purchase_timestamp 컬럼을 참고하고, 매출 금액은 payments 테이블의 payment_value 컬럼을 참고하세요.
SELECT DATE(order_purchase_timestamp) AS dt
     , COUNT(DISTINCT orders.customer_id) AS pu
     , ROUND(SUM(pay.payment_value), 2) as revenue_daily
     , SUM(pay.payment_value) / COUNT(DISTINCT orders.customer_id) AS ARPPU
FROM olist_orders_dataset AS orders
     INNER JOIN olist_order_payments_dataset AS pay
             ON orders.order_id = pay.order_id
WHERE order_purchase_timestamp BETWEEN '2017-05-01 00:00:00' AND '2017-11-19 23:59:59'
GROUP BY dt
ORDER BY dt

-- - ARPU = 전체 매출/전체 유저


-- Q. 2017년 5월 1일부터 2017년 11월 19일까지 주(state)별 일일 매출액을 알고 싶습니다. 2017년 매출 Top 3 지역이었던 ‘SP’, ‘RJ’, ‘MG’ 주 각각의 일일 매출액과 일일 전체 매출액에서 차지하는 비중을 계산해주세요. orders, customers, payments 테이블을 이용하고, 쿼리 만으로 계산이 어렵다면 구글 스프레드 시트나 엑셀을 활용하는 것도 좋은 방법입니다.
SELECT DATE(order_purchase_timestamp) AS dt
    -- , COUNT(DISTINCT orders.customer_id) AS pu
     , ROUND(SUM(pay.payment_value), 2) as revenue_daily
    -- , SUM(pay.payment_value) / COUNT(DISTINCT orders.customer_id) AS ARPPU
     , ROUND(SUM(CASE WHEN customer.customer_state = 'SP' THEN pay.payment_value END),2) AS sp
     , ROUND(SUM(CASE WHEN customer.customer_state = 'RJ' THEN pay.payment_value END),2) AS rj
     , ROUND(SUM(CASE WHEN customer.customer_state = 'MG' THEN pay.payment_value END),2) AS mg
     
     , ROUND(ROUND(SUM(CASE WHEN customer.customer_state = 'SP' THEN pay.payment_value END),2) / ROUND(SUM(pay.payment_value), 2) * 100,2) as sp_pct
     , ROUND(ROUND(SUM(CASE WHEN customer.customer_state = 'RJ' THEN pay.payment_value END),2) / ROUND(SUM(pay.payment_value), 2) * 100, 2) as rj_pct
     , ROUND(ROUND(SUM(CASE WHEN customer.customer_state = 'MG' THEN pay.payment_value END),2) / ROUND(SUM(pay.payment_value), 2) * 100,2) as mg_pct
FROM olist_orders_dataset AS orders
     INNER JOIN olist_order_payments_dataset AS pay
             ON orders.order_id = pay.order_id
     INNER JOIN olist_customers_dataset AS customer
             ON orders.customer_id = customer.customer_id
WHERE order_purchase_timestamp BETWEEN '2017-05-01 00:00:00' AND '2017-11-19 23:59:59'
GROUP BY dt
ORDER BY dt
```



<!-- bundler exec jekyll serve --unpublished -->
<!-- ### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾
### 🐾　　🐾 -->
