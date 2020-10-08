const Service = require("egg").Service;

/* sql语句:
insert into students(name,stuno,sex,class_id) values('金文刚',4073,'男',1);
delete from students where name='xmj';
update course set name='web全栈' where name='c++';
select id from user where id=?;
 */
class testService extends Service {
	async test() {
		return "OK";
		// r.affectedRows
	}
}

module.exports = testService;
