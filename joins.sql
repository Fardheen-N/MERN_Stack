create table orders(orderId integer primary key,customerId integer,orderDate date,totalAmount integer);
create table customers(customerId integer primary key,customerName varchar(30),city varchar(30));
alter table orders modify orderDate varchar(10);

insert into orders values(1,111,'2023-05-06',98);
insert into orders values(2,222,'2023-06-01',18);
insert into orders values(3,111,'2023-04-02',100);
insert into orders values(4,333,'2023-02-01',942);
insert into orders values(5,444,'2023-05-06',128);
insert into orders values(6,444,'2023-05-03',92);

insert into customers values(111,'Chandra','tirupur');
insert into customers values(222,'Ani','Coimbatore');
insert into customers values(333,'Dhivya','Pollachi');
insert into customers values(444,'waseem','tanjavur');

select * from orders;
select * from customers;
select customers.customerName,orders.totalAmount from customers inner join orders on customers.customerId = orders.customerId;