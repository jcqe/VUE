const Controller = require("egg").Controller;

class SearchController extends Controller {
	async tagsearch() {
		let res = await this.ctx.service.search.tagsearch(this.ctx.request.query);
		this.ctx.response.body = res;
	}
	async sayhellow() {
		let res = await this.ctx.service.search.sayhellow(this.ctx.request.query);
		this.ctx.response.body = res;
	}
	async getuserid() {
		let res = await this.ctx.service.search.getuserid(this.ctx.request.query);
		this.ctx.response.body = res;
	}
	async addfans() {
		let res = await this.ctx.service.search.addfans(this.ctx.request.body);
		this.ctx.response.body = res;
	}
	async delfans() {
		let res = await this.ctx.service.search.delfans(this.ctx.request.body);
		this.ctx.response.body = res;
	}
	async selfans() {
		let res = await this.ctx.service.search.selfans(this.ctx.request.body);
		this.ctx.response.body = res;
	}
}

module.exports = SearchController;