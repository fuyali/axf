requirejs.config({
	baseUrl: './libs/',
	paths: {
		'jquery' : 'jquery',
		'flexible' : 'flexible',
		'underscore' : 'underscore',
		'backbone' : 'backbone',
		'css' : 'css',
		'text' : 'text',
		'swiper' : 'swiper-3.3.1.min',
		'publicData' : 'publicData',
		'home' : '/home/js/home',
		'sscs' : '/sscs/js/sscs',
		'cart' : '/cart/js/cart',
		'mine' : '/mine/js/mine'
	}
})


requirejs(['jquery','flexible','underscore','backbone','css!../common/css/reset.css','css!../common/css/common.css'],function($,Flexible,_,Backbone,commonJs,resetCss,commonCss){
	var Router = Backbone.Router.extend({
			'routes':{
	 		//锚点名 --->  函数名
	 		'' : 'homeFunc',
	 		'home' : 'homeFunc',
	 		'sscs' : 'sscsFunc',
	 		'cart' : 'cartFunc',
	 		'mine' : 'mineFunc'
	 	},
	 	homeFunc : function(){
	 		requirejs(['home'],function(Home){
	 			Home.init();
	 			Home.swiperData();
	 			Home.repeatHome();
	 		})
	 	},
	 	sscsFunc : function(){
	 		requirejs(['sscs'],function(Sscs){
	 			Sscs.init();
//	 			Sscs.menu('热销榜');
	 		})
	
	 	},
	 	cartFunc : function(){
	 		requirejs(['cart'],function(Cart){
	 			Cart.init();
	 		})
	 	},
	 	mineFunc : function(){
	 		requirejs(['mine'],function(Mine){
	 			Mine.init();
	 		})
	 	}
	})
	
	new Router();
    Backbone.history.start();
})
