SELECT * FROM angular_final.entrys;
delete from angular_final.entrys where id >4;

insert into angular_final.entrys (date, entry) values (now(), "help");

set @row_num = -1;
update angular_final.entrys set id = (@row_num:=@row_num +1);

select table_rows
   FROM INFORMATION_SCHEMA.TABLES
   WHERE TABLE_SCHEMA = angular_final.entrys;
   
   SELECT 
    COUNT(*)
    as row_num
FROM
    angular_final.entrys;
    
    
    set @row_num = ( seLECT COUNT(*) FROM angular_final.entrys);