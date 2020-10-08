const Service = require("egg").Service;

/* sql语句:
insert into students(name,stuno,sex,class_id) values('金文刚',4073,'男',1);
delete from students where name='xmj';
update course set name='web全栈' where name='c++';
select id from user where id=?;
 */
class homeuserService extends Service {
	async homeuser() {
		/* 首页请求用户数据 */
		let username = (this.ctx.request.body.username) * 1;
		let sql = "select * from user where username=?";
		let res = await this.ctx.app.mysql.query(sql, [username]);
		return res;
	}
	async findfate() {
		return 1;
	}
	

}

module.exports = homeuserService;
