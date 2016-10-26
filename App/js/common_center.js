$(document).ready(function(){
	
	$('body').css('font-family','microsoft yahei');
    /*全部资源  微课大赛  精品资源点击  按钮效果切换==================================*/
    $('.allHeadWrap span').on('tap',function(){
        $(this).addClass('active').parent().siblings().children().removeClass('active');
    })

	
    /*作者资源格式点击效果=======================================================*/
    $('.listWrap .author span,.listWrap .format span').on('tap',function(){
        $(this).addClass('active').siblings('span').removeClass('active');
    })

    /*点击量，上传时间，投票量点击效果==================================================*/
    $('.loadDetailWrap .clickNum,.loadDetailWrap .uploadNum').on('tap',function(){
    	if($(this).hasClass('active')){
    		$(this).removeClass('active');
    	}else if(!$(this).hasClass('active')){
    		$(this).addClass('active');
    	}
    })
	
    /*搜索条件点击展开收起操作====================================================*/
    $('.fold').on('tap',function(){
        var text=$(this).children('span').text();
        if(text.indexOf('收起搜索条件')>=0){
            $(this).children().text('展开搜索条件').css('background-image','url(../img/lookup.png)');
            $('.searchWrap').hide();
        }else if(text.indexOf('展开搜索条件')>=0){
            $(this).children().text('收起搜索条件').css('background-image','url(../img/takeback.png)');
            $('.searchWrap').show();
        }
    })
    
    
    /*提交时验证是否输入时间===============================*/
    $('#subBtn').on('tap',function(){
    	var endTimeStr=$('#endTime').text();    
		if(endTimeStr==='结束时间')
		$('#endTime').text('请选择结束时间'); 
    })

	/*
	 * 底部刚加载显示版本册别
	 */
	$('.nianjiWrap').children().hide().siblings('.selectTxt').show();

    //文件格式左右滑动效果----------
    //$('.listWrap .format').on('swipeleft',function(){
        //var leftText=$(this).css('transform');
        //var reg = /-[1-9][0-9]*/g;  
        //var leftNum = Number(leftText.match(reg))||0; 
        //var boxWidth=$('.swipeLeft').outerWidth();
        //var winWidth=$(window).width();
        //var num=boxWidth+leftNum-winWidth;
        //var swipeWidth=(num>0&num<=winWidth)?num:winWidth;
        //if(num===0)return;
        //$('.listWrap .format').css({'transform':'translateX('+(-swipeWidth+leftNum)+'px)'});
        
    //})

    /*文件格式左右滑动效果----------*/
    leftRight();
    /*点击小学中学高中方法调用-------*/
    clickChangeNj('.fixedLWrap1 .xdWrap .nj li','.bottomFixWrap .fixedLeft  .nianjiWrap','.bottomFixWrap .fixedLeft .nianjiWrap .nianji');
    clickChangeNj('.fixedLWrap2 .xdWrap .nj li','.bottomFixWrap .fixedRight  .nianjiWrap','.bottomFixWrap .fixedRight .nianjiWrap .nianji');   
    /*点击科目下的版本方法调用-------*/
    clickChangeTxt('.fixedLWrap2 .subjectWrap li span','.bottomFixWrap .fixedRight  .nianjiWrap','.bottomFixWrap .fixedRight .subject','.bottomFixWrap .fixedRight .version');
    clickChangeTxt('.fixedLWrap1 .subjectWrap li span','.bottomFixWrap .fixedLeft  .nianjiWrap','.bottomFixWrap .fixedLeft .subject','.bottomFixWrap .fixedLeft .version');
    
    
    /*底部定位左边点击=======================*/
    $('.fixedLeft').on('tap',function(){ 
        if(!$(this).hasClass('active')){
	        $(this).addClass('active');
	        $('.fixedRight').removeClass('active');
	        $('.zhezhao,.fixedLWrap1').show();
	        $('.zhezhao').css('height',$(document).height());
	        $('.fixedLWrap2').hide();
        }else if($(this).hasClass('active')){
        	$('.zhezhao,.fixedLWrap').hide();
			$('.fixedRight,.fixedLeft').removeClass('active');
        }
       
    })
    /*底部定位右边点击=======================*/
    $('.fixedRight').on('tap',function(){
    	if(!$(this).hasClass('active')){
	        $(this).addClass('active');
	        $('.fixedLeft').removeClass('active');
	        $('.fixedLWrap2,.zhezhao').show();
	        $('.zhezhao').css('height',$(document).height());
	        $('.fixedLWrap1').hide();
	    }else if($(this).hasClass('active')){
	    	$('.zhezhao,.fixedLWrap').hide();
			$('.fixedRight,.fixedLeft').removeClass('active');
	    }
    })

    /*点击版本册别  折叠效果=======================*/
    $('.subjectWrap li .subj .foldArr').on('tap',function(){
        $('.zhezhao').css('height',$(document).height());
        if(!$(this).hasClass('ifClass')){
            $(this).addClass('ifClass').parent().parent('li').addClass('active');
        }else{
            $(this).removeClass('ifClass').parent().parent('li').removeClass('active');
        }
        
    })

})



/*点击小学中学高中效果==================================*/
function clickChangeNj(obj1,obj2,obj3){
    $(obj1).on('tap',function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.subjectWrap').hide();
        $(obj2).children().hide();
        $(obj2).children('.nianji').show();  
        $(obj2).children('.arr').eq(0).show();  
	    $(obj3).text($(this).text());
	    setTimeout(function(){
	        $('.subjectWrap').show();
	    },500)
	})
}

/*点击科目下的版本效果==================================*/
function clickChangeTxt(obj1,obj2,obj3,obj4){
	$(obj1).on('click',function(){        		
		$(this).addClass('active').siblings('span').removeClass('active').parent().parent().siblings('li').children().children('span').removeClass('active');
	   	$('html,body').css({'width':'100%','height':'auto','overflow':'visible'});
	    $(obj2).children().show().siblings('.selectTxt').hide();
	    var subj=$(this).parent().siblings('.subj').children('.sub').text();
	    var verson=$(this).text();
	    $(obj3).text(subj);
	    $(obj4).text(verson);
	    setTimeout(function(){
	        $('.fixedLWrap,.zhezhao').hide();
	    },1000);
	    $('.fixedRight,.fixedLeft').removeClass('active');
	})
}


/*点击实现跳转=====================================================*/
/*$(document).on('tap','.item_listWrap ul li',function(){
	window.location.href='../gonggongziyuan/viewResource.html';
})*/

$(document).on('tap','.noResultBack',function(){
	window.location.href='allResource.html';
})

 /*文件格式左右滑动效果=================================================*/
function leftRight(){
    var startX,moveX,moveEndX,leftNum,winWidth,moveNum;
    var winWidth=$(window).width();
    thisWidth=$('.listWrap .swipeLeft').outerWidth();
    if(thisWidth>winWidth){
    	$('.listWrap .format').on("touchstart",function(ev){
	        var leftText=$(this).css('transform');
	        var reg = /-[1-9][0-9]*/g;  
	        leftNum = Number(leftText.match(reg))||0;
	        var touches = ev.originalEvent.changedTouches[0];
	        startX = touches.pageX;
	    })
	    $('.listWrap .format').on('touchmove',function(ev){
	        ev.preventDefault();
	        var touches = ev.originalEvent.changedTouches[0];
	        moveEndX=touches.pageX;
	        moveX=moveEndX-startX;
	        moveNum=moveX+leftNum;
	        if(moveNum>=0){moveNum=0};
	        if(moveNum<=(winWidth-thisWidth)){moveNum=(winWidth-thisWidth)};
	        $('.listWrap .format').css({'transform':'translateX('+moveNum+'px)'});
	        moveX=0;
	    })
    }
    
}


