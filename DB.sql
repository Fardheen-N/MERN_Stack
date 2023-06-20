create table student(Id int,Name varchar ,Gender varchar);
insert into student values(1,'chandra','M');
insert into student values(2,'ani','M');
insert into student values(3,'dhivya','F');
alter table student add email varchar(10);
update student set email = "chandra@gmail.com" where Id = 1;
update student set email = "anikris@gmail.com" where Id = 2;
update student set email = "parami@gmail.com" where Id = 3;
insert into student values(4,'akilan','M','akilan@gmail.com');
insert into student values(5,'Gokul raj','M','goose@gmail.com');
insert into student values(6,'fayaz','M','fataz@gmail.com');
insert into student values(7,'samantha','F','sam@gmail.com');
insert into student values(8,'dharsan','M','PG@gmail.com');
insert into student values(9,'dhanush','M','DDM@gmail.com');
insert into student values(10,'Ana de armas','F','anadeArmas@gmail.com');
select Name from student where Gender = 'M';
-- HW
create table tutor(Id int,Name varchar,Gender varchar);
insert into tutor values(1,'Raylieh','M');
insert into tutor values(2,'raiden','F');
select * from tutor ;

alter table student add mark int;
update student set mark = 89 where Id=1;
update student set mark = 98 where Id=2;
update student set mark = 91 where Id=3;
update student set mark = 100 where Id=4;
update student set mark = 67 where Id=5;
update student set mark = 78 where Id=6;
update student set mark = 52 where Id=7;
update student set mark = 90 where Id=8;
update student set mark = 47 where Id=9;
update student set mark = 82 where Id=10;

select * from student;
select student.Name,tutor.Name from student inner join tutor on student.Gender = tutor.Gender; 
select avg(mark) from student;
select count(Name) from student;
