const Controller = require("egg").Controller;

class ShowHappyController extends Controller {
    //获取晒幸福数据
    async getHappy() {
        let obj = this.ctx.request.query;
        let res = await this.ctx.service.showHappyService.getHappy(obj);
        this.ctx.response.body = res;
    }

    //发表故事
    async publishStory() {
        let files = this.ctx.request.files;
        let obj = this.ctx.request.body;
        let res = await this.ctx.service.showHappyService.publishStory(obj, files);
        this.ctx.response.body = res;
    }

    //点赞likeStory
    async likeStory() {
        let obj = this.ctx.request.query;
        let res = await this.ctx.service.showHappyService.likeStory(obj);
        this.ctx.response.body = res;
    }
}

module.exports = ShowHappyController;