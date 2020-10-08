import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login.vue"; // 登录
import home from "../views/home.vue"; // 主页

Vue.use(VueRouter);

const routes = [
	{ path: '/login', redirect: '/login/loginform' },
	{ // 登录
		path: "/login",
		name: "login",
		component: login,
		children: [
			{ path: "loginform", component: () => import("@/components/login/loginform.vue") },
		]
	},
	{ path: '/', redirect: '/home/homepage' },
	{ path: '/home', redirect: '/home/homepage' },
	{ // 管理主页
		path: "/home",
		component: home,
		children: [
			{ path: "homepage", component: () => import("@/components/home/centerBody/homepage.vue") },//主页
			{ path: "usermanage", component: () => import("@/components/home/centerBody/usermanage.vue") },//账号状态管理
			{ path: "feedback", component: () => import("@/components/home/centerBody/feedback.vue") },//用户反馈
			{ path: "aboutus", component: () => import("@/components/home/centerBody/aboutus.vue") },//关于我们
		]
	},

];
const router = new VueRouter({
	mode: "hash",
	base: process.env.BASE_URL,
	routes
});

export default router;