module.exports = app => {
	const {
		router,
		controller
	} = app;
	router.get("/infsearch", controller.search.tagsearch); // 搜索
	router.get("/test", controller.testController.test); // 测试
	router.post("/login", controller.loginController.login); // 登录
	router.post("/homeuser", controller.homeuserController.homeuser); // 首页请求用户数据

	router.post("/findfate", controller.homeuserController.findfate); // 交友搜缘分
	router.get("/userbaseinfo", controller.personalcenterController.userbaseinfo); // 个人中心获取头部用户基本信息
	router.get("/getbaseinfo", controller.personalcenterController.getbaseinfo); // 个人中心显示用户基本信息
	router.post("/updateinfohasavatar", controller.personalcenterController.updateinfohasavatar); // 个人中心修改用户基本信息有头像
	router.post("/updateinfonoavatar", controller.personalcenterController.updateinfonoavatar); // 个人中心修改用户基本信息无头像
	router.post("/uploadphoto", controller.personalcenterController.uploadphoto); // 个人中心上传照片
	router.post("/showmyphoto", controller.personalcenterController.showmyphoto); // 个人中心显示我的照片
	router.post("/deletephoto", controller.personalcenterController.deletephoto); // 个人中心删除照片
	router.post("/updatepwd", controller.personalcenterController.updatepwd); // 个人中心修改密码
	router.post("/showqst", controller.personalcenterController.showqst); // 个人中心找回密码显示密保
	router.post("/verificationsqt", controller.personalcenterController.verificationsqt); // 个人中心找回密码验证密保
	router.post("/resetpwd", controller.personalcenterController.resetpwd); // 个人中心找回密码重置密码
	router.post("/setnewsecret", controller.personalcenterController.setnewsecret); // 个人中心找回密码修改密保
	router.post("/feedback", controller.personalcenterController.feedback); // 个人中心反馈
	router.get("/recommended", controller.personalcenterController.recommended); // 个人中心今日推荐
	router.get("/showmyfriends", controller.personalcenterController.showmyfriends); // 个人中心我的好友
	router.get("/changeremarks", controller.personalcenterController.changeremarks); // 个人中心修改好友备注
	router.get("/delfriend", controller.personalcenterController.delfriend); // 个人中心删除好友
	router.get("/showdetails", controller.personalcenterController.showdetails); // 个人中心今日推荐显示详细信息
	
	router.get("/attente", controller.personalcenterController.attente); // 个人中心今日推荐关注
	router.get("/aplmyfriend", controller.personalcenterController.aplmyfriend); // 个人中心今日推荐加好友
	router.get("/addtoblacklist", controller.personalcenterController.addtoblacklist); // 个人中心今日推荐拉黑
	router.post("/reportperson", controller.personalcenterController.reportperson); // 个人中心举报
	router.post("/sendtoinbox", controller.personalcenterController.sendtoinbox); // 个人中心发送邮件
	router.get("/getinbox", controller.personalcenterController.getinbox); // 收件箱显示信息
	router.post("/reply", controller.personalcenterController.reply); // 收件箱回复

	router.get("/deleteemail", controller.personalcenterController.deleteemail); // 收件箱删除邮件

	router.get("/agreemakefriends", controller.personalcenterController.agreemakefriends); // 个人中心同意加好友
	router.get("/ignorefriendsapply", controller.personalcenterController.ignorefriendsapply); // 个人中心忽略加好友
	router.get("/getHappy", controller.showHappyController.getHappy); //获取晒幸福数据
	router.post("/publishStory", controller.showHappyController.publishStory); //发布故事
	router.get("/likeStory", controller.showHappyController.likeStory) //点赞
	router.post("/register", controller.loginController.register); // 注册
	router.post('/smsverif', controller.smsVerifController.smsVerif); //获取短信验证码
	router.post("/upuserDefaultAvatar", controller.upuserDefaultAvatarController.upuserDefaultAvatar); // 上传用户默认头像

	router.get("/sayhellow", controller.search.sayhellow); /* 打招呼界面 */
	router.get("/getuserid", controller.search.getuserid); /* 根据登录保存的值获取用户ID */
	router.post("/addfans", controller.search.addfans); /* 添加关注 */
	router.post("/delfans", controller.search.delfans); /* 取消关注 */
	router.post("/selfans", controller.search.selfans); /* 判断是否关注 */
};
