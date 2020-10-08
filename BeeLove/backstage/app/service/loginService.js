const Service = require("egg").Service;

/* sql语句:
insert into students(name,stuno,sex,class_id) values('金文刚',4073,'男',1);
delete from students where name='xmj';
update course set name='web全栈' where name='c++';
select id from user where id=?;
 */
class loginService extends Service {
	// 登录
	async login(user) {
		var result = await this.app.mysql.query(`select * from user where username=${user.username}`);
		// canuse 1 代表账号可用
		if (result.length < 1) {
			return {
				status: 1,
				msg: "用户不存在"
			}
		} else {
			if (user.password == result[0].password) {
				let canuse = result[0].canuse;
				if (canuse == 1) {
					return {
						status: 0,
						msg: "恭喜您，登陆成功",
					}
				} else {
					return {
						status: 1,
						msg: "该账号已被封",
					}
				}
				
			} else {
				return {
					status: 1,
					msg: "密码错误"
				}
			}
		}
	}
	// 注册
	async register(user) {
		console.log(user.username,user.password,user.nickname,user.sex,user.birth,user.marriage,user.canuse,
			user.height,user.place,user.education,user.salary,user.introduction,user.qst,user.asw,user.avatar,user.label);
		let sql=`insert into user(username,password,nickname,sex,birth,marriage,canuse,height,place,education,salary,introduction,qst,asw,avatar,label) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
		var result = await this.app.mysql.query(sql,[user.username,user.password,user.nickname,user.sex,user.birth,user.marriage,user.canuse,user.height,user.place,user.education,user.salary,user.introduction,user.qst,user.asw,user.avatar,user.label]);
		// canuse 1 代表账号可用
		console.log(result);
		if (result.affectedRows == 1) {
			return {
				status: 1,
				msg: "注册成功"
			}
		} else {
			return {
				status: 0,
				msg: "注册失败"
			}
		}
			
	}
}

module.exports = loginService;
