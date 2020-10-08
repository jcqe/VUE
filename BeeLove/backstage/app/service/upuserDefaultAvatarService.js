const Service = require("egg").Service;
const fs = require("fs");
const path = require("path");
/* 用户默认头像 */
class upuserDefaultAvatarService extends Service {
	async upuserDefaultAvatar() {
		const file = this.ctx.request.files[0];
		const toFileName = "/public/userAvatar/"/* + Date.now() */ + file.filename;
		let to = path.dirname(__dirname) + toFileName;
		await fs.copyFileSync(file.filepath, to);
		await fs.unlinkSync(file.filepath);
		const newUrl = "http://localhost:9999" + toFileName;
		
		let obj = {
			url: newUrl,
			states: 1
		}
		return obj;
	}
}

module.exports = upuserDefaultAvatarService;
