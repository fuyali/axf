define(['text!/sscs/sscs.html','publicData'],function(sscs,PubData){
	
		var objData = null;
			//点击加号按钮
		$(document).on('click','.main_con_btm .plus_btn',function(){
             var par = $(this).parents().closest('li');
			var num =par.find('.number');
			var minus = par.find('.minus');
			num.css('display','block');
			minus.css('display','block');
			
			//点击加号的时候存储本地数据
			//获取数据
			var index = par.index();
			var item =  objData[index];
			
			PubData.saveItem(item,num);
			dataArr();
		})
		//点击减号
		$(document).on('click','.main_con_btm .minus',function(){
			var par = $(this).parents().closest('li');
			var num = par.find('.number');
			var minus = par.find('.minus');
			
			var index = par.index();
			var item =  objData[index];
			PubData.reduceItem(item,num,minus);
			dataArr();
		})
	var init = function () {
		var storage = null;
		$('#container').html(sscs);
		menu('热销榜');
		//点击左边菜单
		$('.main_menu li a').click(function(){
            //清空右边区域
			$('#order_list').empty();
			//将参数传进menu里面
			menu($(this).html())
		})
		dataArr();
		clickLi();
	}
	
	var menu = function(str){
		$.get('http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=' + str,function(data){
			
			objData = JSON.parse(data).data;
			
//			console.log(objData);
			$orderList = $('#order_list');
			
			objData.forEach(function(item){
				$(`<li>
						<a href="javascript:;">
							<img src="${item.img}" alt="">
							<div class="xh_text">
								<h4>${item.name}</h4>
								<p><i>精选</i><span>买一赠一</span></p>
								<p>${item.specifics}</p>
								<p>￥${item.price}<span>${item.market_price}</span></p>
							</div>
						</a>
						<div class="plus_mul">
							<span class="minus"></span>
							<p class="number">0</p>
							<span class="plus_btn"></span>
						</div>
					</li>`).appendTo($orderList);
			})

		})
		
	}
	
	var dataArr = function(){
		 var arr = JSON.parse(localStorage.getItem('cart')) || [];
//		 console.log($('.xh_text'))
		 arr.forEach(function(ele){
//		 	console.log(ele.name)
		 	if(ele.name == $('.xh_text h4').html()){
//		 		console.log( $('.xh_text').parent().parent().index())
		 		$('.xh_text').parent().find('.number').html(ele.count)
		 	}
		 })
	}
	var clickLi = function(){
			// 全部分类
			$('.main_menu ul li:first').find('a').addClass('addLeftBorder');
		
			$('.main_menu ul').click(function(e){
				$('.main_menu ul a').removeClass('addLeftBorder');
				$(e.target).addClass('addLeftBorder');
			})
	}
	return {
		init : init,
//		menu : menu
	}
	
})
