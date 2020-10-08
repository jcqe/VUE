const Service = require("egg").Service;
const fs = require('fs');
const path = require("path");

/* sql语句:
insert into students(name,stuno,sex,class_id) values('金文刚',4073,'男',1);
delete from students where name='xmj';
update course set name='web全栈' where name='c++';
select id from user where id=?;
 */
class ShowHappyService extends Service {
    //获取晒幸福数据
    async getHappy(obj) {
        let sql = "select A.*,DATE_FORMAT(A.time,'%Y-%m-%d') time,B.nickname from showhappy A,user B where A.username = B.username "
        if (obj.page) {
            sql += `  limit ${12*(obj.page-1)},12`;
        }
        let res = await this.ctx.app.mysql.query(sql, []);
        return res;
    }

    //发表故事
    async publishStory(obj, files) {
        let url = '';
        for (let i = 0; i < files.length; i++) {
            const toFileName = '/public/upload/' + Date.now() + files[i].filename;
            let to = path.dirname(__dirname) + toFileName;
            await fs.copyFileSync(files[i].filepath, to);
            await fs.unlinkSync(files[i].filepath);
            const newUrl = "http://localhost:9999" + toFileName;
            url += newUrl + ',';
        }
        console.log(url);
        //获取userid
        let sql = "insert into showhappy (username,content,imgurl,time) values (?,?,?,?)";
        let res = await this.ctx.app.mysql.query(sql, [obj.username, obj.content, url, obj.time]);
        return obj;
    }

    //点赞likeStory
    async likeStory(obj) {
        let sql;
        if (obj.flag) {
            sql = "update showhappy set likenum = likenum+1 where id=?"
        } else {
            sql = "update showhappy set likenum = likenum-1 where id=?"
        }
        let res = await this.ctx.app.mysql.query(sql, [obj.id]);
        return res;
    }
}

module.exports = ShowHappyService;