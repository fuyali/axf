define(['text!/cart/cart.html','sscs','publicData'],function(cart,sscs,PubData){
	
	//点击加号按钮
		$(document).on('click','.cart_order .plus_btn',function(){
             var index = $(this).parents().closest('li').index();
			var item = PubData.readAllItem()[index];		
			if(!item){
				return;
			}
			PubData.saveItem(item);
			showGoods();
		})
		
		//点击减号
		$(document).on('click','.cart_order .minus',function(){
			var index = $(this).parents().closest('li').index();
			var item = PubData.readAllItem()[index];		
			PubData.reduceItem(item);
			showGoods();
		})
		
	
	var init = function () {
		$('#container').html(cart);
		//一开始时候的数据
		showGoods();
	}
	
	var showGoods = function(){
		 // 读取localStroage中的数据，并解析，放在页面上显示
		 var arr =JSON.parse(localStorage.getItem('cart'))||[];
		 var $cartList = $('.cart_list');
		 $cartList.empty();
		 arr.forEach(function(ele){
		 	$(`<li>
						<img src="/cart/img/shop3.png" alt="">
						<a href="javascript:;" class="clear">
							<img src="${ele.img}" alt="">
							<h6>${ele.name}</h6>
							<p>￥${ele.market_price}</p>
						</a>
						<div class="plus_mul">
							<span class="minus"></span>
							<p class="number">${ele.count}</p>
							<span class="plus_btn"></span>
						</div>
					</li>`).appendTo($cartList)
		 })
	}
	return {
		init : init
	}
})
