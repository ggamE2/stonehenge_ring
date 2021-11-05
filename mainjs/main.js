
$(function(){


var ht = $(window).height();		
$("section").height(ht);
	
$(window).on("resize",function(){
  var ht = $(window).height();	
  $("section").height(ht);
});    
    
  
//section위에서 마우스 휠을 움직이면
$("section").on("mousewheel",function(event,delta){    
		
if (delta > 0) {  
  var prev = $(this).prev().offset().top;
  $("html,body").stop().animate({"scrollTop":prev},800);
			 			 
  }else if (delta < 0) {  
    var next = $(this).next().offset().top;
     $("html,body").stop().animate({"scrollTop":next},800);           
  }
          
 });
    
 
$(window).scroll(function(){  // 화면 스크롤시 아래코드실행....
      var num = $(this).scrollTop();  // 스크롤값을 가져온다.
      if( num > 200 ){  // 스크롤을 200 이상했을시 보이고 이하는 감추기
          $(".header").css("background","rgba(255,255,255,0.6)");          
      }else{
          $(".header").css("background","transparent");		  
      }
 });    
    
//MENU
$(".gnb>li").on("mouseover",function(){
$(this).find(".subm").stop().slideDown();
$(".gnb_back").stop().slideDown(); 
$(".header").css("background","rgba(255,255,255,0.6)");      
});  
$(".gnb>li").on("mouseleave",function(){
$(this).find(".subm").stop().slideUp();
$(".gnb_back").stop().slideUp();
$(".header").css("background","transparent");    
}); 
    
   /* gnb_r li on */
	$(window).on("scroll",function(){	
	
		//변수 ht에 현재 브라우저의 넓이값 저장
		var ht = $(window).height();
		
		//변수 scroll에 현재 문서가 스크롤된 거리 저장
		var scroll = $(window).scrollTop();
						
		for(var i=0; i<7;i++){
			if(scroll>=ht*i && scroll< ht*(i+1)){
				$(".gnb_r li").removeClass();
				$(".gnb_r li").eq(i).addClass("on");
			};
		}								
	});       
    
    
});//function end 










