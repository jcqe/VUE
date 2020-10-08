const Controller = require("egg").Controller;

class personalcenterController extends Controller {
	async userbaseinfo() {
		let res = await this.ctx.service.personalcenterService.userbaseinfo();
		this.ctx.response.body = res;
	}
	async getbaseinfo() {
		let res = await this.ctx.service.personalcenterService.getbaseinfo();
		this.ctx.response.body = res;
	}
	async updateinfohasavatar() {
		let res = await this.ctx.service.personalcenterService.updateinfohasavatar();
		this.ctx.response.body = res;
	}
	async updateinfonoavatar() {
		let res = await this.ctx.service.personalcenterService.updateinfonoavatar();
		this.ctx.response.body = res;
	}
	async uploadphoto() {
		let res = await this.ctx.service.personalcenterService.uploadphoto();
		this.ctx.response.body = res;
	}
	async showmyphoto() {
		let res = await this.ctx.service.personalcenterService.showmyphoto();
		this.ctx.response.body = res;
	}
	async deletephoto() {
		let res = await this.ctx.service.personalcenterService.deletephoto();
		this.ctx.response.body = res;
	}
	async updatepwd() {
		let res = await this.ctx.service.personalcenterService.updatepwd();
		this.ctx.response.body = res;
	}
	async showqst() {
		let res = await this.ctx.service.personalcenterService.showqst();
		this.ctx.response.body = res;
	}
	async verificationsqt() {
		let res = await this.ctx.service.personalcenterService.verificationsqt();
		this.ctx.response.body = res;
	}
	async resetpwd() {
		let res = await this.ctx.service.personalcenterService.resetpwd();
		this.ctx.response.body = res;
	}
	async setnewsecret() {
		let res = await this.ctx.service.personalcenterService.setnewsecret();
		this.ctx.response.body = res;
	}
	async feedback() {
		let res = await this.ctx.service.personalcenterService.feedback();
		this.ctx.response.body = res;
	}
	async recommended() {
		let res = await this.ctx.service.personalcenterService.recommended();
		this.ctx.response.body = res;
	}
	async showmyfriends() {
		let res = await this.ctx.service.personalcenterService.showmyfriends();
		this.ctx.response.body = res;
	}
	async changeremarks() {
		let res = await this.ctx.service.personalcenterService.changeremarks();
		this.ctx.response.body = res;
	}
	async delfriend() {
		let res = await this.ctx.service.personalcenterService.delfriend();
		this.ctx.response.body = res;
	}
	async showdetails() {
		let res = await this.ctx.service.personalcenterService.showdetails();
		this.ctx.response.body = res;
	}
	async attente() {
		let res = await this.ctx.service.personalcenterService.attente();
		this.ctx.response.body = res;
	}
	async aplmyfriend() {
		let res = await this.ctx.service.personalcenterService.aplmyfriend();
		this.ctx.response.body = res;
	}
	async addtoblacklist() {
		let res = await this.ctx.service.personalcenterService.addtoblacklist();
		this.ctx.response.body = res;
	}
	async agreemakefriends() {
		let res = await this.ctx.service.personalcenterService.agreemakefriends();
		this.ctx.response.body = res;
	}
	async ignorefriendsapply() {
		let res = await this.ctx.service.personalcenterService.ignorefriendsapply();
		this.ctx.response.body = res;
	}
	async reportperson() {
		let res = await this.ctx.service.personalcenterService.reportperson();
		this.ctx.response.body = res;
	}
	async sendtoinbox() {
		let res = await this.ctx.service.personalcenterService.sendtoinbox();
		this.ctx.response.body = res;
	}
	async getinbox() {
		let res = await this.ctx.service.personalcenterService.getinbox();
		this.ctx.response.body = res;
	}
	async reply() {
		let res = await this.ctx.service.personalcenterService.reply();
		this.ctx.response.body = res;
	}
	async deleteemail() {
		let res = await this.ctx.service.personalcenterService.deleteemail();
		this.ctx.response.body = res;
	}
	
}

module.exports = personalcenterController;