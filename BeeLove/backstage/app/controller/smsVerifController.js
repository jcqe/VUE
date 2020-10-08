'use strict';
const Controller = require('egg').Controller;
class smsVerifController extends Controller {
  async smsVerif() {
    const { ctx } = this;
    let num = await ctx.service.smsVerifService.smsVerif(ctx.request.body)
    ctx.body = { msg: "短信已发送", verifCode: num }
  }
}
module.exports = smsVerifController;
