---
layout: post
title:  "1014 SQL TIL"
date:   2022-10-14 09:05:09 +0900
categories: SpecialLecture
published: false
---
# 1014 SQL TIL 



## π©π»βπ» λ°μ΄ν°λ¦¬μ SQL κ°μ _ μ‘νμ λ, 
[λ°±λ¬Έμ΄λΆμ¬μΌν] λ°μ΄ν° λΆμμ μν μ€κΈ SQL

## π μ€λμ TIL 

## JOIN


### μ€μ΅ μμ 

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
μκ° κ³μ°νλ ν¨μ νμ© :)

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

## μκ° ν¨μ
#### **DATE_ADD**(κΈ°μ€λ μ§, INTERVAL)
* SELECT DATE_ADD(NOW(), INTERVAL 1 SECOND)
* SELECT DATE_ADD(NOW(), INTERVAL 1 DAY)
* SELECT DATE_ADD(NOW(), INTERVAL 1 MONTH)
* SELECT DATE_ADD(NOW(), INTERVAL -1 YEAR)

#### **DATE_SUB**(κΈ°μ€λ μ§, INTERVAL)
* SELECT DATE_SUB(NOW(), INTERVAL 1 SECOND)


## μ§ν©μ°μ° <font color = 'lightgray'>UNION</font>

UNION (ν©μ§ν©)μ μ΄μ©ν΄ λ κ°μ μΏΌλ¦¬λ₯Ό ν©μ³λ³΄μ.
```sql
-- Product νμ΄λΈμμ Priceκ° 10 μ΄ν λλ 200 μ΄μμΈ μνλ€λ§ μΆλ ₯νμΈμ.
SELECT *
FROM Products
WHERE price <= 5

UNION

SELECT *
FROM Products
WHERE price >= 200
```
λ κ°μ μ§ν©μ ν©μΉ ν©μ§ν© κ²°κ³Όκ° κΆκΈνλ€λ©΄, **LEFT JOIN**κ³Ό **RIGHT JOIN**, κ·Έλ¦¬κ³  **UNION**μ μ΄μ©νμ¬ κ΅¬ν  μ μλ€.
```sql
SELECT *
FROM customers
     LEFT JOIN orders on customers.CustomerID = orders.CustomerID
UNION
SELECT *
FROM customers
     RIGHT JOIN orders on customers.CustomerID = orders.CustomerID
```




### λ§μ§λ§ ν΄μ»€λ­ν¬ λ¬Έμ  (μ΄λ €μ β­οΈ)

#### [Symmetric Pairs](https://www.hackerrank.com/challenges/symmetric-pairs/problem?h_r=internal-search)

Two pairs (X1, Y1) and (X2, Y2) are said to be symmetric pairs if X1 = Y2 and X2 = Y1.

Write a query to output all such symmetric pairs in ascending order by the value of X. List the rows such that X1 β€ Y1.

```sql
--- Xμ Yκ° κ°μ λμ κ²½μ°κ° 2κ°μΈ κ²½μ°
SELECT X, Y
FROM functions
WHERE X = Y
GROUP BY X, Y 
HAVING COUNT(*) = 2
-- ORDER BY X 

UNION

--- Xμ Yκ° λ€λ₯Ό λμ Symmetric pairs μ°ΎκΈ°
SELECT f1.X, f1.Y
FROM functions AS f1
     INNER JOIN functions AS f2 ON f1.X = f2.Y
                                   AND f1.Y = f2.X
WHERE f1.X < f1.Y
ORDER BY X
```

UNIONν  λ μ λ ¬μ ν­μ λ§μ§λ§ μΏΌλ¦¬μλ§ ORDER BY μ‘°κ±΄ κ±Έμ΄μ€μΌ νλ€. μ΄λ ORDER BYλ μ μ²΄ μΏΌλ¦¬μ λν΄ μλνλ€.


***



```sql
--- Q1. orders νμ΄λΈ μμ λͺ μΌ μΉμ λ°μ΄ν°κ° λ€μ΄μλμ? order_purchase_timestamp μ»¬λΌμ κΈ°μ€μΌλ‘ λ°μ΄ν°μ μμ μμ κ³Ό λ μμ μ μλ €μ£ΌμΈμ.
SELECT MIN(order_purchase_timestamp), MAX(order_purchase_timestamp)
FROM olist_orders_dataset

--- Q2. κ³ κ°λ€μ μ΄λ€ μ£Ό(state)μ μ΄κ³  μλμ? customers νμ΄λΈ μμ customer_state μ»¬λΌμ μ°Έκ³ νμ¬ olist κ³ κ°λ€μ΄ μ΄λ€ μ£Όμ μ΄κ³  μλμ§ μμλ΄μλ€. μ΄ μ λ³΄λ₯Ό μ£Όλ¬Έ λ°μ΄ν°(orders)μ μ°κ²°νλ €λ©΄ μ΄λ€ μ»¬λΌμ μ¬μ©ν΄μΌ νλμ?
SELECT customer_state
FROM olist_customers_dataset as customers
     LEFT JOIN olist_orders_dataset as orders ON customers.customer_unique_id = orders.customer_id
GROUP BY customer_state


---Q3. κ³ κ°λ€μ κ²°μ  λ°μ΄ν°λ μ΄λ€ νμ΄λΈμ μλμ? μ£Όλ¬Έ νλμ κ²°μ  λ‘κ·Έκ° νλ λΆμ΄μλ 1:1 κ΄κ³μΈκ°μ, μλλ©΄ μ£Όλ¬Έ νλμ κ²°μ  λ‘κ·Έκ° μ¬λ¬κ° μμ μ μλ 1:N κ΄κ³μΈκ°μ? κ²°μ  κΈμ‘μ μ΄λ€ μ»¬λΌμ λ³΄κ³  μ μ μλμ? orders νμ΄λΈκ³Ό κ²°μ  λ°μ΄ν°λ μ΄λ€ μ»¬λΌμ κΈ°μ€μΌλ‘ μ°κ²°ν  μ μλμ?
SELECT pay.order_id, COUNT(payment_value)
 FROM olist_order_payments_dataset as pay
     INNER JOIN olist_orders_dataset as orders
     ON pay.order_id = orders.order_id
GROUP BY order_id

---Q4. orders, customers, payments νμ΄λΈμ μ¬μ©νμ¬ 2017λμ λ§€μΆμ΄ λ§μ΄ λμ€λ μ£Ό(customer_state)κ° μ΄λμΈμ§ μμλ΄μλ€. 2017λ λ§€μΆ Top 3 μ£Όλ₯Ό κΌ½μμ£ΌμΈμ.
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

---Q. orders, payments λ νμ΄λΈμ κ°μ§κ³  2017λ 5μ 1μΌλΆν° 2017λ 11μ 19μΌκΉμ§ μ΄ μΌνλͺ°μ μΌμΌ λ§€μΆμ‘μ κ³μ°ν΄λ΄μλ€. λ§€μΆμ΄ μΌμ΄λλ μμ μ orders νμ΄λΈμ order_purchase_timestamp μ»¬λΌμ μ°Έκ³ νκ³ , λ§€μΆ κΈμ‘μ payments νμ΄λΈμ payment_value μ»¬λΌμ μ°Έκ³ νμΈμ.
SELECT DATE(order_purchase_timestamp) AS dt
     , SUM(pay.payment_value) as total_sales
FROM olist_orders_dataset AS orders
     INNER JOIN olist_order_payments_dataset AS pay
             ON orders.order_id = pay.order_id
WHERE order_purchase_timestamp BETWEEN '2017-05-01 00:00:00' AND '2017-11-19 23:59:59'
GROUP BY dt
ORDER BY dt
LIMIT 1000

---Q. orders, payments λ νμ΄λΈμ κ°μ§κ³  2017λ 5μ 1μΌλΆν° 2017λ 11μ 19μΌκΉμ§ μ΄ μΌνλͺ°μ μΌλ³ κ²°μ  μ μ (PU; Paying User)μ, λ§€μΆμ‘, ARPPU(Average Revenue Per Paying User)λ₯Ό κ³μ°ν΄λ΄μλ€. λ§€μΆμ΄ μΌμ΄λλ μμ μ orders νμ΄λΈμ order_purchase_timestamp μ»¬λΌμ μ°Έκ³ νκ³ , λ§€μΆ κΈμ‘μ payments νμ΄λΈμ payment_value μ»¬λΌμ μ°Έκ³ νμΈμ.
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

-- - ARPU = μ μ²΄ λ§€μΆ/μ μ²΄ μ μ 


-- Q. 2017λ 5μ 1μΌλΆν° 2017λ 11μ 19μΌκΉμ§ μ£Ό(state)λ³ μΌμΌ λ§€μΆμ‘μ μκ³  μΆμ΅λλ€. 2017λ λ§€μΆ Top 3 μ§μ­μ΄μλ βSPβ, βRJβ, βMGβ μ£Ό κ°κ°μ μΌμΌ λ§€μΆμ‘κ³Ό μΌμΌ μ μ²΄ λ§€μΆμ‘μμ μ°¨μ§νλ λΉμ€μ κ³μ°ν΄μ£ΌμΈμ. orders, customers, payments νμ΄λΈμ μ΄μ©νκ³ , μΏΌλ¦¬ λ§μΌλ‘ κ³μ°μ΄ μ΄λ ΅λ€λ©΄ κ΅¬κΈ μ€νλ λ μνΈλ μμμ νμ©νλ κ²λ μ’μ λ°©λ²μλλ€.
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
<!-- ### πΎγγπΎ
### πΎγγπΎ
### πΎγγπΎ
### πΎγγπΎ
### πΎγγπΎ
### πΎγγπΎ -->
