const Controller = require("egg").Controller;

class homeuserController extends Controller {
	async homeuser() {
		let res = await this.ctx.service.homeuserService.homeuser();
		this.ctx.response.body = res;
	}
	async findfate() {
		let res = await this.ctx.service.findfateService.findfate();
		this.ctx.response.body = res;
	}
}

module.exports = homeuserController;