define(['text!/home/home.html','swiper'],function(home,swiper){
	 var init = function(){
	  	$('#container').html(home);
	 }
	 //轮播图数据
	var swiperData = function(){
			 $.get('http://www.vrserver.applinzi.com/aixianfeng/apihome.php',function(data){
			 	var obj = JSON.parse(data);
			 	var swiperWrapper = $('.swiper-wrapper');
			 	 obj.data.slide.forEach(function(item){
//			 	 console.log(item)
			 		$(`
			 		<div class="swiper-slide">
			 			<a href="">
			 				<img src="${item.activity.img}" alt="">
			 			</a>
			 		</div>
			 		`).appendTo(swiperWrapper);
			 	});
			 		var mySwiper = new Swiper ('.swiper-container', {
				    direction: 'horizontal',
				    autoplay:2000,
				    loop: true,
				    pagination: '.swiper-pagination',
				    paginationClickable:true,
				    autoplayDisableOnInteraction:false,
			 	 });
			 });
				 
	}
	//加载重复页面
	var repeatHome = function(){
//		$.get('http://www.vrserver.applinzi.com/aixianfeng/apicategory.php',{category},function(data){
//			console.log(data)
//		})
		var str = '';
	 for(var i = 1; i <= 6; i++){
	 	str += `<div class="xhsg">
				<h2>优选水果<a href=“#>更多&nbsp;&nbsp;></a></h2>
				<div class="xhsg_banner"><a href="#"><img src="/home/img/yxsg_banner.jpg" alt=""></a></div>
				<div class="place_order">
					<div class="xh_order">
						<a href="#"><img src="/home/img/yx_order1.jpg" alt=""></a>
						<div class="xh_text">
							<p>爱鲜蜂·特小甜西瓜</p>
							<p><i>精选</i>1.5-2.5kg/每粒</p>
							<div class="xh_plus">
								<p>￥11.8</p>
								<span class="plus_btn"></span>
							</div>
						</div>
					</div>

					<div class="xh_order">
						<a href="#"><img src="/home/img/yx_order2.jpg" alt=""></a>
						<div class="xh_text">
							<p>爱鲜蜂·特小甜西瓜大个</p>
							<p><i>精选</i>1.5-2.5kg/每粒</p>
							<div class="xh_plus">
								<p>￥11.8</p>
								<span class="plus_btn"></span>
							</div>
						</div>
					</div>

					<div class="xh_order">
						<a href="#"><img src="/home/img/yx_order3.jpg" alt=""></a>
						<div class="xh_text">
							<p>爱鲜蜂·特小甜西瓜</p>
							<p><i>精选</i>1.5-2.5kg/每粒</p>
							<div class="xh_plus">
								<p>￥11.8</p>
								<span class="plus_btn"></span>
							</div>
						</div>
					</div>
				</div>
			</div>`;
	 }
	 		$('#main').append(str);
	}
	return {
		init : init,
		swiperData : swiperData,
		repeatHome : repeatHome

	}
	
	
	
})