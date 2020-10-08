import Vue from "vue";
import VueRouter from "vue-router";

import personalcenter from "../views/PersonalCenter.vue"; // 个人中心
import inbox from "../views/Inbox.vue"; // 收件箱
import about from "../views/About.vue"; // 关于我们
import home from "../views/home.vue"; // 首页
import login from "../views/login.vue"; // 登录
import register from "../views/register.vue"; // 注册
import search from "../views/Search.vue"; // 搜索

/* PersonalCenter个人中心的子组件 */
import makefriends from "../components/PersonalCenter/info/makefriends.vue";
import completeinfo from "../components/PersonalCenter/info/completeinfo.vue";
import myphoto from "../components/PersonalCenter/info/myphoto.vue";
import myfriends from "../components/PersonalCenter/info/myfriends.vue";
import myaccountnumber from "../components/PersonalCenter/info/myaccountnumber.vue";
/* PersonalCenter个人中心的子组件 */

Vue.use(VueRouter);

const routes = [
	
	{ // 打开网页
		path: "/",
		name: "",
		component: home
	},

	{
		/* 个人中心路由 */
		path: "/personalcenter",
		name: "personalcenter",
		component: personalcenter,
		beforeEnter(to,from,next) {
			let username = sessionStorage.getItem("username");
			if (username === null) {
				next("/login/loginform");
			} else {
				next();
			}
		},
		children: [{
				path: "makefriends",
				name: "makefriends",
				component: makefriends
			},
			{
				path: "completeinfo",
				name: "completeinfo",
				component: completeinfo
			},
			{
				path: "myphoto",
				name: "myphoto",
				component: myphoto
			},
			{
				path: "myfriends",
				name: "myfriends",
				component: myfriends
			},
			{
				path: "myaccountnumber",
				name: "myaccountnumber",
				component: myaccountnumber
			},

		]
	},

	{ // 首页
		path: "/home",
		name: "home",
		component: home
	},

	{ // 收件箱
		path: "/inbox",
		name: "inbox",
		component: inbox,
		beforeEnter(to,from,next) {
			let username = sessionStorage.getItem("username");
			if (username === null) {
				next("/login/loginform");
			} else {
				next();
			}
		}
	},

	{ // 注册
		path: "/register",
		name: "register",
		component: register
	},

	{ // 登录
		path: "/login",
		name: "login",
		component: login,
		children: [{
				path: "loginform",
				component: () => import("@/components/login/loginform.vue")
			},
			{
				path: "phonelogin",
				component: () => import("@/components/login/phonelogin.vue")
			}
		]
	},
	{ // 晒幸福
	    path: "/showhappy",
	    name: "/showhappy",
	    component: () =>
	        import ("@/views/showhappy.vue"),
	},
	{ // 搜索
		path: "/search",
		name: "search",
		component: search
	},
	{ // 关于我们
		path: "/about",
		name: "about",
		component: about
	},


];

const router = new VueRouter({
	mode: "hash",
	base: process.env.BASE_URL,
	routes
});

export default router;
