select * from bvt_demo.school;
select * from bvt_demo.students;


insert into bvt_demo.school (Name, Date_founded, Date_entered)
Values('The School for the CIA', '1776-06-04', now());

insert into bvt_demo.school (Name, Date_founded, Date_entered)
Values('The School for scared children', '1400-11-01', now());

insert into bvt_demo.school (Name, Date_founded, Date_entered)
Values('The School for sAliens living with Humans', '100-1-23', now());

update bvt_demo.school set Name = "The School for Aliens living with humans" where id = "3";
update bvt_demo.school set Name = "Coding Academy" where id = "2";

insert into bvt_demo.students (First_name, Last_name, School_ID, Start_date, Date_entered)
Values('Stan', 'Smith', 1, '1999-01-01', now());

insert into bvt_demo.students (First_name, Last_name, School_ID, Start_date, Date_entered)
Values('Roger', 'Smith', 2, '2005-05-31', now());
update bvt_demo.students set School_ID = 3 where id = "2";

insert into bvt_demo.students (First_name, Last_name, School_ID, Start_date, Date_entered)
Values('Steve', 'Smith', 2, '2010-01-20', now());

insert into bvt_demo.students (First_name, Last_name, School_ID, Start_date, Date_entered)
Values('Francine', 'Rogers', 2, '2000-01-23', now());

insert into bvt_demo.students (First_name, Last_name, School_ID, Start_date, Date_entered)
Values('E.T.', 'Alien', 3, '1997-06-15', now());


select * from bvt_demo.students where School_ID in (1,3) limit 1;
select * from bvt_demo.school order by Date_founded asc;


select First_name, Last_name, Name from bvt_demo.students, bvt_demo.school
where bvt_demo.students.School_ID = bvt_demo.school.School_ID;

set sql_safe_updates = 0;

update bvt_demo.students Set School_ID = 2 where Last_name = "Smith";

delete from bvt_demo.students where School_ID != 2;
