create database cows_list;
use cows_list;

drop table if exists 'cows';

create table 'cows';
  'id' tinyint auto_increment unique,
  'name' varchar(30) unique,
  'description' varchar(200),
  primary key ('id')
);