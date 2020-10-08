const Service = require("egg").Service;
const fs = require("fs");
const path = require("path");
/* sql语句:
insert into students(name,stuno,sex,class_id) values('金文刚',4073,'男',1);
delete from students where name='xmj';
update course set name='web全栈' where name='c++';
select id from user where id=?;
 */
// affectedRows
class personalcenterService extends Service {
	async deleteemail() {
		/* 删除邮件 */
		let id = this.ctx.request.query.id;
		let sql = "delete from inbox where id=?";
		let res = await this.ctx.app.mysql.query(sql, [id]);
		if (res.affectedRows == 1) {
			return {
				status: 1,
				msg: "删除成功"
			};
		} else {
			return {
				status: 0,
				msg: "删除失败"
			};
		}
	}
	
	async reply() {
		/* 回复 */
		let username = this.ctx.request.body.username;
		let guid = "select id from user where username=?";
		let r = await this.ctx.app.mysql.query(guid, [username]);
		
		let sender_id = r[0].id;
		let user_id = this.ctx.request.body.person_id;
		let content = this.ctx.request.body.content;
		let sendtime = this.ctx.request.body.sendtime;
		
		let sql = "insert into inbox(sender_id,user_id,content,sendtime) values(?,?,?,?)";
		let res = await this.ctx.app.mysql.query(sql, [sender_id,user_id,content,sendtime]);
		
		if (res.affectedRows == 1) {
			return {
				status: 1,
				msg: "回复成功"
			};
		} else {
			return {
				status: 0,
				msg: "回复失败"
			};
		}
		
	}
	
	async getinbox() {
		/* 显示收件箱信息 */
		let username = this.ctx.request.query.username;
		let guid = "select id from user where username=?";
		let r = await this.ctx.app.mysql.query(guid, [username]);
		let user_id = r[0].id;
		
		let sql1 = "select * from inbox where user_id=?";
		let res1 = await this.ctx.app.mysql.query(sql1, [user_id]);
		// let infoid = 
		if (res1.length == 0) {
			return {
				status: 0,
				msg: "收件箱为空"
			}
		} else {
			let arr = [];
			for (let i = 0; i < res1.length; i++) {
				let sql2 = "select id,nickname from user where id=?";
				let res2 = await this.ctx.app.mysql.query(sql2, [res1[i].sender_id]);
				let obj = {
					time: res1[i].sendtime,
					content: res1[i].content,
					id: res2[0].id,
					nickname: res2[0].nickname,
					infoid: res1[i].id
				};
				arr.push(obj);
			}
			return {
				status: 1,
				msg: "取到",
				arr
			};
		}
	}
	
	async sendtoinbox() {
		/* 发送邮件 */
		let username = this.ctx.request.body.username;
		let guid = "select id from user where username=?";
		let r = await this.ctx.app.mysql.query(guid, [username]);
		let sender_id = r[0].id;
		let user_id = this.ctx.request.body.friends_id;
		let sendtime = this.ctx.request.body.sendtime;
		let content = this.ctx.request.body.content;
		
		let sql = "insert into inbox(user_id,sender_id,sendtime,content) values(?,?,?,?)";
		let res = await this.ctx.app.mysql.query(sql, [user_id,sender_id,sendtime,content]);
		
		if (res.affectedRows == 1) {
			return {
				status: 1,
				msg: "发送成功"
			}
		} else {
			return {
				status: 0,
				msg: "发送失败"
			}
		}
		
	}
	async reportperson() {
		/* 举报 */
		let username = this.ctx.request.body.username;
		let guid = "select id from user where username=?";
		let r = await this.ctx.app.mysql.query(guid, [username]);
		let user_id = r[0].id;
		let person_id = this.ctx.request.body.person_id;
		let content = this.ctx.request.body.content;
		
		let sql = "insert into report(user_id,person_id,content) values(?,?,?)";
		let res = await this.ctx.app.mysql.query(sql, [user_id, person_id, content]);
		if (res.affectedRows == 1) {
			return {
				status: 1,
				msg: "举报成功"
			};
		} else {
			return {
				status: 0,
				msg: "举报失败"
			};
		}
	}

	async agreemakefriends() {
		/* 同意加好友 */
		let username = this.ctx.request.query.username;
		let person_id = this.ctx.request.query.person_id;
		let guid = "select id from user where username=?";
		let r = await this.ctx.app.mysql.query(guid, [username]);
		let user_id = r[0].id;

		let sql = "insert into friends(user_id,friends_id) values(?,?)";
		let res1 = await this.ctx.app.mysql.query(sql, [user_id, person_id]);
		let res2 = await this.ctx.app.mysql.query(sql, [person_id, user_id]);
		
		let sql3 = "delete from addfriendstatus where user_id=? && person_id";
		let res3 = await this.ctx.app.mysql.query(sql3, [user_id, person_id]);

		if (res1.affectedRows == 1 && res2.affectedRows == 1 && res3.affectedRows == 1) {
			return {
				status: 1,
				msg: "添加好友成功"
			};
		} else {
			return {
				status: 0,
				msg: "添加好友失败"
			};
		}
	}

	async ignorefriendsapply() {
		/* 忽略加好友 */
		let username = this.ctx.request.query.username;
		let person_id = this.ctx.request.query.person_id;
		let guid = "select id from user where username=?";
		let r = await this.ctx.app.mysql.query(guid, [username]);
		let user_id = r[0].id;
		
		let sql = "delete from addfriendstatus where user_id=? && person_id";
		let res = await this.ctx.app.mysql.query(sql, [user_id, person_id]);
		
		if (res.affectedRows == 1) {
			return {
				status: 1,
				msg: "已忽略"
			};
		} else {
			return {
				status: 0,
				msg: "忽略出错"
			};
		}
	}

	async attente() {
		/* 关注 */
		let username = this.ctx.request.query.username;
		let guid = "select id from user where username=?";
		let r = await this.ctx.app.mysql.query(guid, [username]);

		let person_id = this.ctx.request.query.person_id;
		let user_id = r[0].id;

		let sql1 = "select id from fans where user_id=? && fans_id=?";
		let res1 = await this.ctx.app.mysql.query(sql1, [user_id, person_id]);
		if (res1.length == 0) {
			let sql2 = "insert into fans(user_id,fans_id) values(?,?)";
			let res2 = await this.ctx.app.mysql.query(sql2, [user_id, person_id]);

			if (res2.affectedRows == 1) {
				return {
					status: 1,
					msg: "关注成功"
				};
			} else {
				return {
					status: 0,
					msg: "关注失败"
				};
			}
		} else {
			return {
				status: 2,
				msg: "已经关注过了"
			};
		}
	}

	async aplmyfriend() {
		/* 加好友 */
		let username = this.ctx.request.query.username;
		let guid = "select id from user where username=?";
		let r = await this.ctx.app.mysql.query(guid, [username]);

		let person_id = this.ctx.request.query.person_id;
		let user_id = r[0].id;

		let sql1 = "select id from friends where user_id=? && friends_id=?";
		let res1 = await this.ctx.app.mysql.query(sql1, [user_id, person_id]);

		if (res1.length == 0) {

			let sql2 = "select id from addfriendstatus where user_id=? && person_id=?";
			let res2 = await this.ctx.app.mysql.query(sql2, [user_id, person_id]);

			if (res2.length == 0) {
				let sql3 = "insert into addfriendstatus(user_id,person_id) values(?,?)";
				let res3 = await this.ctx.app.mysql.query(sql3, [user_id, person_id]);

				if (res3.affectedRows == 1) {
					return {
						status: 1,
						msg: "加好友信息发送成功"
					};
				} else {
					return {
						status: 0,
						msg: "加好友信息发送失败"
					};
				}
			} else {
				return {
					status: 2,
					msg: "已经发送过加好友的信息了"
				};
			}
		} else {
			return {
				status: 3,
				msg: "你们已经是好友了"
			};
		}
	}

	async addtoblacklist() {
		/* 拉黑 */
		let username = this.ctx.request.query.username;
		let guid = "select id from user where username=?";
		let r = await this.ctx.app.mysql.query(guid, [username]);

		let person_id = this.ctx.request.query.person_id;
		let user_id = r[0].id;

		let sql1 = "select id from blacklist where user_id=? && person_id=?";
		let res1 = await this.ctx.app.mysql.query(sql1, [user_id, person_id]);
		if (res1.length == 0) {
			let sql2 = "insert into blacklist(user_id,person_id) values(?,?)";
			let res2 = await this.ctx.app.mysql.query(sql2, [user_id, person_id]);

			if (res2.affectedRows == 1) {
				return {
					status: 1,
					msg: "拉黑成功"
				};
			} else {
				return {
					status: 0,
					msg: "拉黑失败"
				};
			}
		} else {
			return {
				status: 2,
				msg: "已经拉黑过了"
			};
		}
	}

	async showdetails() {
		/* 个人中心今日推荐显示详细信息 */

		let id = this.ctx.request.query.id;
		let sql1 = "select * from user where id=?";
		let res1 = await this.ctx.app.mysql.query(sql1, [id]);
		let mf = res1[0];
		let carpurchase = mf.carpurchase;
		if (mf.carpurchase == 0) {
			carpurchase = "无车";
		} else {
			carpurchase = "有车";
		}
		let avatar = res1[0].avatar;
		if (avatar == null) {
			avatar = "http://localhost:9999/public/userAvatar/userdefaultavatar.png";
		}
		let sql2 = "select url from user_photo where user_id=?";
		let res2 = await this.ctx.app.mysql.query(sql2, [id]);
		let obj = {
			id,
			avatar,
			nickname: mf.nickname,
			marriage: mf.marriage,
			height: mf.height,
			salary: mf.salary,
			carpurchase,
			national: mf.national,
			education: mf.education,
			introduction: mf.introduction,
			urlArr: res2
		};
		return obj;
	}

	async userbaseinfo() {
		let url = "http://localhost:9999/public/userAvatar/userdefaultavatar.png"; // 默认头像地址

		let username = this.ctx.request.query.username;
		let sql1 = "select id,nickname,avatar from user where username=?";
		let res1 = await this.ctx.app.mysql.query(sql1, [username]);
		if (res1[0].avatar != null) {
			url = res1[0].avatar;
		}
		let user_id = res1[0].id;

		let sql2 = "select * from inbox where user_id=? && isread=0";
		let res2 = await this.ctx.app.mysql.query(sql2, [user_id]);
		let notread = res2.length; // 未读邮件

		let obj = {
			url,
			nickname: res1[0].nickname,
			notread
		};
		return obj;
	}

	async getbaseinfo() {
		let username = this.ctx.request.query.username;
		let sql = "select * from user where username=?";
		let res = await this.ctx.app.mysql.query(sql, [username]);
		let user = res[0];
		let carpurchase;
		if (user.carpurchase == 0) {
			carpurchase = "无车";
		} else {
			carpurchase = "有车";
		}
		let obj = {
			nickname: user.nickname,
			sex: user.sex,
			birth: user.birth,
			place: user.place,
			marriage: user.marriage,
			education: user.education,
			salary: user.salary,
			national: user.national,
			carpurchase
		};

		return obj;
	}

	async updateinfohasavatar() { // 有头像

		let username = this.ctx.request.body.username;
		let nickname = this.ctx.request.body.nickname;
		let birth = this.ctx.request.body.birth;
		let marriage = this.ctx.request.body.marriage;
		let place = this.ctx.request.body.place;
		let education = this.ctx.request.body.education;
		let salary = this.ctx.request.body.salary;
		let national = this.ctx.request.body.national;
		let carpurchase = this.ctx.request.body.carpurchase;
		if (carpurchase == "有车") {
			carpurchase = 1;
		} else {
			carpurchase = 0;
		}
		const file = this.ctx.request.files[0];
		const toFileName = "/public/userAvatar/" + Date.now() + file.filename;
		let to = path.dirname(__dirname) + toFileName;
		await fs.copyFileSync(file.filepath, to);
		await fs.unlinkSync(file.filepath);
		let avatar = "http://localhost:9999" + toFileName;
		let sql =
			"update user set avatar=?,nickname=?,birth=?,marriage=?,place=?,education=?,salary=?,national=?,carpurchase=? where username=?";
		let res = await this.ctx.app.mysql.query(sql, [avatar, nickname, birth, marriage, place, education, salary, national,
			carpurchase, username
		]);

		if (res.affectedRows == 1) {
			return {
				avatar,
				msg: "修改成功"
			}
		} else {
			return "修改失败";
		}

	}

	async updateinfonoavatar() { // 无头像
		let username = this.ctx.request.body.username;
		let nickname = this.ctx.request.body.nickname;
		let birth = this.ctx.request.body.birth;
		let marriage = this.ctx.request.body.marriage;
		let place = this.ctx.request.body.place;
		let education = this.ctx.request.body.education;
		let salary = this.ctx.request.body.salary;
		let national = this.ctx.request.body.national;
		let carpurchase = this.ctx.request.body.carpurchase;
		if (carpurchase == "有车") {
			carpurchase = 1;
		} else {
			carpurchase = 0;
		}
		let sql =
			"update user set nickname=?,birth=?,marriage=?,place=?,education=?,salary=?,national=?,carpurchase=? where username=?";
		let res = await this.ctx.app.mysql.query(sql, [nickname, birth, marriage, place, education, salary, national,
			carpurchase, username
		]);
		if (res.affectedRows == 1) {
			return "修改成功";
		} else {
			return "修改失败";
		}
	}

	async uploadphoto() {
		let username = this.ctx.request.body.username;
		const file = this.ctx.request.files[0];

		const toFileName = "/public/userphoto/" + Date.now() + file.filename;
		let to = path.dirname(__dirname) + toFileName;
		await fs.copyFileSync(file.filepath, to);
		await fs.unlinkSync(file.filepath);
		let url = "http://localhost:9999" + toFileName;

		let sql1 = "select id from user where username=?";
		let res1 = await this.ctx.app.mysql.query(sql1, [username]);

		let user_id = res1[0].id;

		let sql2 = "insert into user_photo(url,user_id) values(?,?)";
		let res2 = await this.ctx.app.mysql.query(sql2, [url, user_id]);

		if (res2.affectedRows == 1) {
			return "上传成功";
		} else {
			return "上传失败";
		}
	}

	async showmyphoto() {
		let username = this.ctx.request.body.username;
		let sql1 = "select id from user where username=?";
		let res1 = await this.ctx.app.mysql.query(sql1, [username]);

		let user_id = res1[0].id;


		let sql = "select * from user_photo where user_id=?";
		let res = await this.ctx.app.mysql.query(sql, [user_id]);
		return res;
	}

	async deletephoto() {
		let id = this.ctx.request.body.id;
		let sql = "delete from user_photo where id=?";
		let res = await this.ctx.app.mysql.query(sql, [id]);
		if (res.affectedRows == 1) {
			return "删除成功";
		} else {
			return "删除失败";
		}
	}

	async updatepwd() { // 修改密码
		let username = this.ctx.request.body.username;
		let newpwd = this.ctx.request.body.newpwd;
		let oldpwd = this.ctx.request.body.oldpwd;

		let sql1 = "select password from user where username=?";
		let res1 = await this.ctx.app.mysql.query(sql1, [username]);
		let dboldpwd = res1[0].password; // 数据库的旧密码

		if (oldpwd === dboldpwd) {
			let sql2 = "update user set password=? where username=?";
			let res2 = await this.ctx.app.mysql.query(sql2, [newpwd, username]);
			if (res2.affectedRows == 1) {
				return {
					msg: "修改成功！",
					status: 1
				};
			} else {
				return {
					msg: "修改失败！",
					status: 0
				};
			}
		} else {
			return {
				msg: "旧密码错误！",
				status: 0
			};
		}


		// return 1;
		// affectedRows
	}

	async showqst() {
		/* 显示密保 */
		let username = this.ctx.request.body.username;
		let sql = "select qst from user where username=?";
		let res = await this.ctx.app.mysql.query(sql, [username]);
		return res;
	}

	async verificationsqt() {
		/* 验证密保 */
		let username = this.ctx.request.body.username;
		let asw = this.ctx.request.body.asw;

		let sql = "select asw from user where username=?";
		let res = await this.ctx.app.mysql.query(sql, [username]);
		if (res[0].asw == asw) {
			return {
				status: 1,
				msg: "密保正确，验证通过"
			};
		} else {
			return {
				status: 0,
				msg: "密保错误，验证失败"
			};
		}
	}

	async resetpwd() {
		/* 重置密码 */
		let username = this.ctx.request.body.username;
		let newpwd = this.ctx.request.body.newpwd;
		let sql = "update user set password=? where username=?";
		let res = await this.ctx.app.mysql.query(sql, [newpwd, username]);
		if (res.affectedRows == 1) {
			return {
				status: 1,
				msg: "修改成功"
			};
		} else {
			return {
				status: 0,
				msg: "修改失败"
			};
		}
		// affectedRows
	}

	async setnewsecret() {
		/* 修改密保 */
		let username = this.ctx.request.body.username;
		let newqst = this.ctx.request.body.newqst;
		let newasw = this.ctx.request.body.newasw;

		let sql = "update user set qst=?,asw=? where username=?";
		let res = await this.ctx.app.mysql.query(sql, [newqst, newasw, username]);

		if (res.affectedRows == 1) {
			return {
				status: 1,
				msg: "修改成功"
			};
		} else {
			return {
				status: 0,
				msg: "修改失败"
			};
		}
	}

	async feedback() {
		/* 反馈 */
		let username = this.ctx.request.body.username;
		let time = this.ctx.request.body.time;
		let content = this.ctx.request.body.content;
		let getid = "select id from user where username=?";
		let r = await this.ctx.app.mysql.query(getid, [username]);
		let user_id = r[0].id;

		let sql = "insert into feedback(user_id,content,time) values(?,?,?)";
		let res = await this.ctx.app.mysql.query(sql, [user_id, content, time]);

		if (res.affectedRows == 1) {
			return {
				status: 1,
				msg: "发送成功"
			};
		} else {
			return {
				status: 0,
				msg: "发送失败"
			};
		}
	}

	async recommended() {
		/* 今日推荐 */
		/* 最多返回8个 */
		/* 暂未控制数量*/
		let username = this.ctx.request.query.username;
		let sql1 = "select sex from user where username=?";
		let res1 = await this.ctx.app.mysql.query(sql1, [username]);
		let sex;
		if (res1[0].sex == "男") {
			sex = "女";
		} else {
			sex = "男";
		}

		let sql2 = "select id,nickname,avatar from user where sex=? && avatar!='null'";
		let res2 = await this.ctx.app.mysql.query(sql2, [sex]);
		return res2;
	}

	async showmyfriends() {
		let username = this.ctx.request.query.username;
		let sql1 = "select id from user where username=?";
		let res1 = await this.ctx.app.mysql.query(sql1, [username]);
		let user_id = res1[0].id;

		let sql2 = "select friends_id,friends_remarks from friends where user_id=?";
		let res2 = await this.ctx.app.mysql.query(sql2, [user_id]);
		let arr = [];
		for (let i = 0; i < res2.length; i++) {


			let temp = "";
			if (res2[i].friends_remarks == "" || res2[i].friends_remarks == null) {
				/* 如果未给好友设置备注就返回好友的昵称 */
				let sql3 = "select nickname from user where id=?";
				let res3 = await this.ctx.app.mysql.query(sql3, [res2[i].friends_id]);
				temp = res3[0].nickname;
			} else {
				/* 有备注返回备注 */
				temp = res2[i].friends_remarks;
			}

			let obj = {
				friends_id: res2[i].friends_id, // 好友id
				name: temp
			};

			arr.push(obj);
		}

		/* 处理好友请求 */
		let list = [];
		let sql4 = "select person_id from addfriendstatus where user_id=?";
		let res4 = await this.ctx.app.mysql.query(sql4, [user_id]);
		if (res4.length == 0) {
			list = [];
		} else {
			for (let i = 0; i < res4.length; i++) {
				let sql5 = "select id,nickname from user where id=?";
				let res5 = await this.ctx.app.mysql.query(sql5, [res4[i].person_id]);
				let list1 = {
					person_id: res5[0].id,
					nickname: res5[0].nickname
				};
				list.push(list1);
			}
		}
		let alg = {
			arr1: arr,
			arr2: list
		};
		return alg;
	}

	async changeremarks() {
		let username = this.ctx.request.query.username;
		let friends_remarks = this.ctx.request.query.friends_remarks;
		let friends_id = this.ctx.request.query.friends_id;

		let gidsql = "select id from user where username=?";
		let r = await this.ctx.app.mysql.query(gidsql, [username]);
		let user_id = r[0].id;

		let sql = "update friends set friends_remarks=? where friends_id=? && user_id=?";
		let res = await this.ctx.app.mysql.query(sql, [friends_remarks, friends_id, user_id]);
		if (res.affectedRows == 1) {
			return {
				status: 1,
				msg: "修改成功"
			};
		} else {
			return {
				status: 0,
				msg: "修改失败"
			};
		}
	}

	async delfriend() {
		/* 删除好友 */
		let friends_id = this.ctx.request.query.friends_id;
		let username = this.ctx.request.query.username;
		let gidsql = "select id from user where username=?";
		let r = await this.ctx.app.mysql.query(gidsql, [username]);
		let user_id = r[0].id;

		let sql1 = "delete from friends where user_id=? && friends_id=?";
		let sql2 = "delete from friends where user_id=? && friends_id=?";
		let res1 = await this.ctx.app.mysql.query(sql1, [user_id, friends_id]);
		let res2 = await this.ctx.app.mysql.query(sql2, [friends_id, user_id]);

		if (res1.affectedRows == 1 && res2.affectedRows == 1) {
			return {
				status: 1,
				msg: "删除成功"
			};
		} else {
			return {
				status: 0,
				msg: "删除失败"
			};
		}
	}


}
// affectedRows
module.exports = personalcenterService;
