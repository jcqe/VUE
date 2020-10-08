const Controller = require("egg").Controller;

class loginController extends Controller {
	// 登录
	async login() {
        let user=this.ctx.request.body;
		let res = await this.ctx.service.loginService.login(user);
		this.ctx.response.body = res;
	}
	// 注册
	async register() {
        let user=this.ctx.request.body;
		let res = await this.ctx.service.loginService.register(user);
		this.ctx.response.body = res;
	}
}

module.exports = loginController;