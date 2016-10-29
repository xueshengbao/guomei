
// banner轮播

$(document).ready(function(){
		var flag=true;
		var n=0;
		var next=0;
		var width=$('.two-tp').width();
		function tu(){
			if(!flag){
				return false;
			}
			flag=false;
			next=n+1;
			if(next>=$('.two-tp .tp').length){
				next=0;
			};
			$('.two-tp .uls .lis').removeClass("lis-first").eq(next).addClass("lis-first")
			$('.two-tp .tp').eq(n).animate({opacity:0},800).end().eq(next).animate({opacity:1},800,function(){
				flag=true;
			});
			n=next;
		}
		var t=setInterval(tu,2000);
		$('.two-tp').mouseover(function(){
			clearInterval(t);
		}).mouseout(function(){
			t=setInterval(tu,2000);
		});
	    $('.two-tp .bannerRight').click(function(){
	    	next=n-1;
	    	if(!flag){
				return false;
			}
			flag=false;
			if(next<0){
				next=$('.two-tp .tp').length-1;
			};
	    	$('.two-tp .uls .lis').removeClass("lis-first").eq(next).addClass("lis-first")
			$('.two-tp .tp').eq(n).animate({opacity:0},800).end().eq(next).animate({opacity:1},800,function(){
				flag=true;
			});
			n=next;
	    })
	    $('.two-tp .bannerLeft').click(function(){
	    	tu();
	    })
	   var index=$(".two-tp .uls .lis").index();
	     $(".two-tp .uls .lis").hover(function(){
	     	 var index=$(this).index();
	     	 if(index>n){
             	if(!flag){
			    return;
			 }
			 flag=false;
			 $(".two-tp .tp").eq(n).animate({opacity:0},500);
			 $(".two-tp .tp").eq(index).animate({opacity:1},500,function(){
			 	flag=true;
			 })
          	 }else if(index<n){
             	if(!flag){
			    return;
			 };
			 flag=false;
			 $(".two-tp .tp").eq(n).animate({opacity:0},500);
			 $(".two-tp .tp").eq(index).animate({opacity:1},500,function(){
			 	flag=true;
			 })
         	 };
         	$(".two-tp .uls .lis").removeClass("lis-first").eq(index).addClass("lis-first")
        n=index;
        next=index;
	    },function(){
	    	var index=$(this).index();
	     	 if(index>n){
             	if(!flag){
			    return;
			 }
			 flag=false;
			 $(".two-tp .tp").eq(n).animate({opacity:0},1000);
			 $(".two-tp .tp").eq(index).animate({opacity:1},1000,function(){
			 	flag=true;
			 })
          	 }else if(index<n){
             	if(!flag){
			    return;
			 };
			 flag=false;
			 $(".two-tp .tp").eq(n).animate({opacity:0},1000);
			 $(".two-tp .tp").eq(index).animate({opacity:1},1000,function(){
			 	flag=true;
			 })
         	 };
         	$(".two-tp .uls .lis").removeClass("lis-first").eq(index).addClass("lis-first")
        n=index;
        next=index;
	    })
})

// banner 轮播（选项卡）
// obj：banner图下方选项；
// img：banner图；

jQuery.extend({
		lunbo:function(obj,img){
			obj.hover(function(){
				var index=$(this).index();
				obj.removeClass("index").eq(index).addClass("index");
				img.css("display","none").eq(index).css("display","block");
			},function(){
				var index=$(this).index();
				obj.removeClass("index").eq(index).addClass("index");
				img.css("display","none").eq(index).css("display","block");
			})
		}
})
$(document).ready(function(){
	$.lunbo($(".lis:nth-child(1) .nth div"),$(".two-tp .tp:nth-child(1) img"))
	$.lunbo($(".lis:nth-child(2) .nth div"),$(".two-tp .tp:nth-child(2) img"))
	$.lunbo($(".lis:nth-child(3) .nth div"),$(".two-tp .tp:nth-child(3) img"))
	$.lunbo($(".lis:nth-child(4) .nth div"),$(".two-tp .tp:nth-child(4) img"))
	$.lunbo($(".lis:nth-child(5) .nth div"),$(".two-tp .tp:nth-child(5) img"))
	$.lunbo($(".lis:nth-child(6) .nth div"),$(".two-tp .tp:nth-child(6) img"))
	$.lunbo($(".lis:nth-child(7) .nth div"),$(".two-tp .tp:nth-child(7) img"))
	$.lunbo($(".lis:nth-child(8) .nth div"),$(".two-tp .tp:nth-child(8) img"))
	$.lunbo($(".lis:nth-child(9) .nth div"),$(".two-tp .tp:nth-child(9) img"))
	$.lunbo($(".lis:nth-child(10) .nth div"),$(".two-tp .tp:nth-child(10) img"))
})


// home


$(document).ready(function(){
	$('.ht-left .beijing').hover(function(){
		$('.beijing .big-box').css("display","block")
		$('.ht-left .beijing').css("background","#fff")
	},function(){
		$('.beijing .big-box').css("display","none")
		$('.ht-left .beijing').css("background","#F1F1F1")
	})
})
$(document).ready(function(){
	$('.ht-right-three').hover(function(){
		$('.right-wdjd').css("display","block")
		$('.ht-right-three').css("background","#fff")
	},function(){
		$('.right-wdjd').css("display","none")
		$('.ht-right-three').css("background","#F1F1F1")
	})
})
$(document).ready(function(){
	$('.ht-right-nine').hover(function(){
		$('.wzhdh-nr').css("display","block")
		$('.ht-right-nine').css("background","#fff")
	},function(){
		$('.wzhdh-nr').css("display","none")
		$('.ht-right-nine').css("background","#F1F1F1")
	})
})
$(document).ready(function(){
	$('.ht-right-eight').hover(function(){
		$('.khfw-nr').css("display","block")
		$('.ht-right-eight').css("background","#fff")
	},function(){
		$('.khfw-nr').css("display","none")
		$('.ht-right-eight').css("background","#F1F1F1")
	})
})
$(document).ready(function(){
	$('.ht-right-six').hover(function(){
		$('.sjjd-nr').css("display","block")
		$('.ht-right-six').css("background","#fff")
	},function(){
		$('.sjjd-nr').css("display","none")
		$('.ht-right-six').css("background","#F1F1F1")
	})
})



// 猜你喜欢


$(document).ready(function(){
	var width=$('.four-bottom').width();
	var n=0;
	var next=0;
	$('.replace').click(function(){
		next=n+1;
		if(next>=$('.four-bottom').length){
			next=0;
		}
		$('.four-bottom').eq(next).css("left",width)
		$('.four-bottom').eq(n).animate({left:-width},600)
		$('.four-bottom').eq(next).animate({left:0},600)
		n=next;
	})
})


// banner-left


$(document).ready(function(){
	$('.tleft-fenlei').hover(function(){
		var aa=$(this).index();
		$('.menu').eq(aa).css("display","block")
	},function(){
		var aa=$(this).index();
		$('.menu').eq(aa).css("display","none")
	})
})


// floor轮播
// box：大盒子；
// tp：轮播图；
// lis：轮播图下方选项；
// left：向左按钮；
// right：向右按钮；

jQuery.extend({
	banner:function(box,tp,lis,left,right){
		$(document).ready(function(){
			var flag=true;
			var n=0;
			var next=0;
			var width=box.width();
			function tu(){
				if(!flag){
					return false;
				}
				flag=false;
				next=n+1;
				if(next>=tp.length){
					next=0;
				};
				lis.removeClass("lis1-first").eq(next).addClass("lis1-first")
				tp.eq(n).animate({opacity:0},1000).end().eq(next).animate({opacity:1},1000,function(){
					flag=true;
				});
				n=next;
			}
			var t=setInterval(tu,2500);
			box.mouseover(function(){
				clearInterval(t);
				right.animate({width:30},0)
				left.animate({width:30},0)
			}).mouseout(function(){
				t=setInterval(tu,2500);
				right.animate({width:0},0)
				left.animate({width:0},0)
			});
		    right.click(function(){
		    	next=n-1;
		    	if(!flag){
					return false;
				}
				flag=false;
				if(next<0){
					next=tp.length-1;
				};
		    	lis.removeClass("lis1-first").eq(next).addClass("lis1-first")
				tp.eq(n).animate({opacity:0},1000).end().eq(next).animate({opacity:1},1000,function(){
					flag=true;
				});
				n=next;
		    })
		    left.click(function(){
		    	tu();
		    })
		     var index=lis.index();
		     lis.click(function(){
		     	 var index=$(this).index();
		     	 if(index>n){
	             	if(!flag){
				    return;
				 }
				 flag=false;
				 tp.eq(n).animate({opacity:0},1000);
				 tp.eq(index).animate({opacity:1},1000,function(){
				 	flag=true;
				 })
	          	 }else if(index<n){
	             	if(!flag){
				    return;
				 };
				 flag=false;
				 tp.eq(n).animate({opacity:0},1000);
				 tp.eq(index).animate({opacity:1},1000,function(){
				 	flag=true;
				 })
	         	 };
	         	lis.removeClass("lis1-first").eq(index).addClass("lis1-first")
	         n=index;
	         next=index;
		     })
		})
	}
})

$(document).ready(function(){
	$.banner($(".five:eq(0) .lunbo"),$(".five:eq(0) .lunbo .lunbotu"),$(".five:eq(0) .lunbo .uls1 .lis1"),$(".five:eq(0) .lunbo .lunbo-left"),$(".five:eq(0) .lunbo .lunbo-right"))
	$.banner($(".five:eq(1) .lunbo"),$(".five:eq(1) .lunbo .lunbotu"),$(".five:eq(1) .lunbo .uls1 .lis1"),$(".five:eq(1) .lunbo .lunbo-left"),$(".five:eq(1) .lunbo .lunbo-right"))
	$.banner($(".five:eq(2) .lunbo"),$(".five:eq(2) .lunbo .lunbotu"),$(".five:eq(2) .lunbo .uls1 .lis1"),$(".five:eq(2) .lunbo .lunbo-left"),$(".five:eq(2) .lunbo .lunbo-right"))
	$.banner($(".five:eq(3) .lunbo"),$(".five:eq(3) .lunbo .lunbotu"),$(".five:eq(3) .lunbo .uls1 .lis1"),$(".five:eq(3) .lunbo .lunbo-left"),$(".five:eq(3) .lunbo .lunbo-right"))
	$.banner($(".five:eq(4) .lunbo"),$(".five:eq(4) .lunbo .lunbotu"),$(".five:eq(4) .lunbo .uls1 .lis1"),$(".five:eq(4) .lunbo .lunbo-left"),$(".five:eq(4) .lunbo .lunbo-right"))
})

// 选项卡
// obj：选项；
// tp：选项下方内容；

jQuery.extend({
		xxk:function(obj,tp,left){
			obj.hover(function(){
				var index=$(this).index();
				tp.removeClass("first").eq(index).addClass("first");
				obj.removeClass("first").eq(index).addClass("first");
				console.log(index)
			},function(){
				var index=$(this).index();
				tp.removeClass("first").eq(index).addClass("first");
				obj.removeClass("first").eq(index).addClass("first");
			})
			var n=0;
			var next=0;
			left.click(function(){
				next=n+1;    	
				if(next>=obj.length){
					next=0;
				};
		    	obj.removeClass("first").eq(next).addClass("first")
				tp.removeClass("first").eq(next).addClass("first");
				n=next;
			})
		}
})
$(document).ready(function(){
	$.xxk($(".five:eq(0) .five-two .ft-right .bt"),$(".five:eq(0) .five-three .fthree-right"),$(".five:eq(0) .five-three .five-threeRight"));
	$.xxk($(".five:eq(1) .five-two .ft-right .bt"),$(".five:eq(1) .five-three .fthree-right"),$(".five:eq(1) .five-three .five-threeRight"));
	$.xxk($(".five:eq(2) .five-two .ft-right .bt"),$(".five:eq(2) .five-three .fthree-right"),$(".five:eq(2) .five-three .five-threeRight"));
	$.xxk($(".five:eq(3) .five-two .ft-right .bt"),$(".five:eq(3) .five-three .fthree-right"),$(".five:eq(3) .five-three .five-threeRight"));
	$.xxk($(".five:eq(4) .five-two .ft-right .bt"),$(".five:eq(4) .five-three .fthree-right"),$(".five:eq(4) .five-three .five-threeRight"));
})





// 楼层跳转

$(document).ready(function($) {
		$(".left-lis").click(function(event) { 
		  var index=this.title
		  var id='#'+'floor'+index
		 $("html,body").animate({scrollTop: $(id).offset().top}, 1000);

		});
		function a(x){
			l = $(window).height()
		w = $('.leftDaoh').height();
		$('.leftDaoh').css('left',88 + 'px');
		$('.leftDaoh').css('top',((l - w )/2 + x) + 'px');
		}//获取#tbox的div距浏览器底部和页面内容区域右侧的距离函数#main为页面的可视宽度
		$(function() {  
		$(window).scroll(function(){
		t = $(document).scrollTop();
		if(t>1200){
		  $('.leftDaoh').show();
		}else{
		  $('.leftDaoh').hide();
		}    
		})   
		a(0);//#tbox的div距浏览器底部和页面内容区域右侧的距离
		$('.leftDaoh .top-lis').click(function(){ 
		    $('body,html').animate({
		        scrollTop: 0
		    },
		    800);
		    return false;  
		})
		$('.leftDaoh .bottom-lis').click(function(){ 
		    $('body,html').animate({
		        scrollTop: 4400
		    },
		    800);
		    return false;  
		})
		});
		var now;
		$(window).scroll(function(){
		t = $(document).scrollTop();
		   for (var i = 0; i < $(".five").length; i++) {
			var h=$(".five").eq(i).offset().top;
			console.log(h)
			if(t>= h-500){
				for(var j = 0; j< $(".leftDaoh .left-lis").length; j++){
					$(".jiao").eq(j).css("display","none")
					$(".front span").eq(j).css("color","#777")
					$(".front p").eq(j).css("color","#777")
				}
					$(".jiao").eq(i).css("display","block")
					$(".front span").eq(i).css("color","red")
					$(".front p").eq(i).css("color","red")
				now=i;
			};
		};
		}) 	
		$(".leftDaoh .left-lis").click(function(){
			var index=$(this).index();
			$(".jiao").each(function(){
				$(".front span").css("color","#777")
				$(".front p").css("color","#777")
			})
			$(".front span").eq(index-1).css("color","red")
			$(".front p").eq(index-1).css("color","red")
						
		})
		$(".leftDaoh .left-lis").hover(function(){
			var index=$(this).index();
			$(".front span").eq(index-1).css("color","red")
			$(".front p").eq(index-1).css("color","red")
		},function(){
			var index=$(this).index();
			if(index-1==now){
				$(".front span").eq(index-1).css("color","red")
				$(".front p").eq(index-1).css("color","red")
				return
			}
			$(".front span").eq(index-1).css("color","#777")
			$(".front p").eq(index-1).css("color","#777")
		})
});

$(document).ready(function(){
	$('.back .back-one').hover(function(){
		$('.back-one .tu1 .backOne').stop(true)
		$('.back-one .tu1 .backOne').delay(200).animate({width:140},400)
	},function(){
		$('.back-one .tu1 .backOne').stop(true)
		$('.back-one .tu1 .backOne').delay(200).animate({width:0},400)
	})

	$('.back .back-two').hover(function(){
		$('.back-two .backTwo').stop(true)
		$('.back-two .backTwo').delay(200).animate({width:100},400)
	},function(){
		$('.back-two .backTwo').stop(true)
		$('.back-two .backTwo').delay(200).animate({width:0},400)
	})

	$('.back .back-three').hover(function(){
		$('.back-three .backThree').stop(true)
		$('.back-three .backThree').delay(200).animate({width:100},400)
	},function(){
		$('.back-three .backThree').stop(true)
		$('.back-three .backThree').delay(200).animate({width:0},400)
	})
})

// 小轮播
$(document).ready(function(){
		var flag=true;
		var n=0;
		var next=0;
		var height=$(".xians").height();
		function tu(){
			if(!flag){
				return false;
			}
			flag=false;
			next=n+1;
			if(next>=$(".xians ul li").length){
				next=0;
			};
			$(".xians ul li").eq(next).css("top",height).end().eq(n).animate({top:-height},1000).end().eq(next).animate({top:0},1000,function(){
				flag=true;
			});
			n=next;
		}
		var t=setInterval(tu,1500);
	    $(".d .dtop").click(function(){
	    	next=n-1;
	    	if(!flag){
				return false;
			}
			flag=false;
			if(next>=$(".xians ul li").length){
				next=0;
			};
			$(".xians ul li").eq(next).css("top",-height).end().eq(n).animate({top:height},1000).end().eq(next).animate({top:0},1000,function(){
				flag=true;
			});
			n=next;
	    })
	    $(".d .dbottom").click(function(){
	    	tu();
	    })


})