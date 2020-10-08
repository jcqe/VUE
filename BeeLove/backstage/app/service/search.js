const Service = require("egg").Service;

/* sql语句:
insert into students(name,stuno,sex,class_id) values('金文刚',4073,'男',1);
delete from students where name='xmj';
update course set name='web全栈' where name='c++';
select id from user where id=?;
 */
class SearchService extends Service {
        async tagsearch(res) {
                let sql = `select id,nickname,education,place,avatar,TIMESTAMPDIFF(YEAR,birth,now())as age from user where ${res.result}`
                let list = await this.ctx.app.mysql.query(sql);
                return list;
        }
        async sayhellow(res) {
                let sql = `select id,nickname,education,place,avatar,TIMESTAMPDIFF(YEAR,birth,now())as age from user where id=${res.id}`
                let list = await this.ctx.app.mysql.query(sql);
                return list;
        } 

        async getuserid(res) {
                let sql = `select id,sex,nickname from user where username=${res.username}`
                let list = await this.ctx.app.mysql.query(sql);
                return list;
        }
        async addfans(res) {
                let sql = `INSERT INTO fans (user_id, fans_id) VALUES ('${res.user_id}', '${res.fans_id}')`
                let list = await this.ctx.app.mysql.query(sql);
                return list.affectedRows;
        }
        async delfans(res) {
                let sql = `DELETE FROM fans WHERE user_id = '${res.user_id}' and fans_id= '${res.fans_id}'`
                let list = await this.ctx.app.mysql.query(sql);
                return list.affectedRows;
        }
        async selfans(res) {
                console.log(res.user_id,res.fans_id)
                let sql = `select * FROM fans where user_id = '${res.user_id}' and fans_id= '${res.fans_id}'`
                let list = await this.ctx.app.mysql.query(sql);
                return list;
        }
}

module.exports = SearchService;
