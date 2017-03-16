//自定义AMD模块，并导出两个方法
// [] 可以填写依赖的模块
//本身依赖的模块回比本身先加载
define([],function(){
	
	return {
		add: function(a,b){
			return a + b;
		},
		diff: function(a,b){
			return a - b;
		}
	};
})
//什么叫模块化开发？面试题