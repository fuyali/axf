define([],function(){
	   // 常量
    const CARTKEY = 'cart';
	  var readAllItem = function () {
        return JSON.parse(localStorage.getItem(CARTKEY)) || [];
    };
    var saveData = function (arr) {
        localStorage.setItem(CARTKEY, JSON.stringify(arr));
    };
	return {
		//增加
		saveItem : function(obj,tag){
			tag = tag || null;
			var arr = JSON.parse(localStorage.getItem(CARTKEY)) || [];
			var flag = true;
			arr.forEach(function(ele){
			if(ele.name == obj.name){
					ele.count++;
					if(tag){
						tag.html(ele.count);	
					}
					flag = false;
				}
			})
			if(flag){
				obj.count = 1;
				if(tag){
					tag.html(obj.count);	
				}
				arr.push(obj);
			}
			
			localStorage.setItem(CARTKEY,JSON.stringify(arr));
		},
		reduceItem : function(obj,tag,minus){
			tag = tag || null;
			minus = minus || null;
			//点击减号的时候获取本地数据
			var arr = JSON.parse(localStorage.getItem(CARTKEY));
			//从本地数据中减少点击的当前对象的数量，如果为1，就让减号和数量消失
			arr.forEach(function(ele,i){
					if(ele.name == obj.name){
						if(ele.count == 1){
							if(tag){
								tag.hide();
							}
							if(minus){
								minus.hide();
							}
							arr.splice(i,1)
						}else{
							ele.count--;
							if(tag){
								tag.html(ele.count);	
							}
						}
					}
					
				})

			localStorage.setItem(CARTKEY,JSON.stringify(arr));
		},
		readAllItem: readAllItem
	
	}
})