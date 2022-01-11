SELECT * FROM bvt_demo.car;
select * from bvt_demo.car order by date_entered desc;
select * from bvt_demo.car order by date_entered asc limit 1;
select * from bvt_demo.car where color is null and date_entered is not null;
select * from bvt_demo.car where color is not null;
select id, make, color from bvt_demo.car order by date_entered asc limit 1;


insert into bvt_demo.car(make, color, date_entered)
Values ('Ford', 'blue', now());

update bvt_demo.car set make = "honda", color = "silver" where id = "3";

delete from bvt_demo.car where id = "2";
delete from bvt_demo.car where make = "honda";
delete from bvt_demo.car where id in( 3,5,6);
