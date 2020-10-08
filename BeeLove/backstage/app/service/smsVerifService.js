const Service = require('egg').Service;
const Core = require('@alicloud/pop-core');
class smsVerifService extends Service {
    async smsVerif(obj) {
        console.log(obj)
        var client = new Core({
            accessKeyId: 'LTAI4G4TRTuU5osidPTTtQ1w',
            accessKeySecret: 'uPjk0xuhIZcJfh21JbMvO4aAWpIn5r',
            endpoint: 'https://dysmsapi.aliyuncs.com',
            apiVersion: '2017-05-25'
        });
        // 随机生成验证码
        const num = Math.floor((Math.random() + 1) * 1000)
        var params = {
            "RegionId": "cn-hangzhou",
            "PhoneNumbers": `${obj.phone}`,
            "SignName": "BeeLove",
            "TemplateCode": "SMS_200694580",
            "TemplateParam": `{"code":${num}}`
        }
        var requestOption = {
            method: 'POST'
        };

        client.request('SendSms', params, requestOption).then((result) => {
            console.log(JSON.stringify(result));
        }, (ex) => {
            console.log(ex);
        })

        return num;
    }
}
module.exports = smsVerifService;