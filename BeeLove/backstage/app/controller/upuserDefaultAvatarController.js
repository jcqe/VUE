const Controller = require("egg").Controller;

class upuserDefaultAvatarController extends Controller {
	async upuserDefaultAvatar() {
		let res = await this.ctx.service.upuserDefaultAvatarService.upuserDefaultAvatar();
		this.ctx.response.body = res;
	}
}

module.exports = upuserDefaultAvatarController;