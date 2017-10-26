// é»˜è®¤objä¸ºæ‰§è¡Œå…ƒç´ 

// HOVER
	// é»˜è®¤æ ·å¼ .h , é»˜è®¤Hoveræ ·å¼ .hover
	// è‡ªå®šä¹‰HOVERå¯ä½¿ç”¨ Hover(obj, classname)
$(function(){
	$(".h").hover(function(){
		$(this).addClass("hover")
	}, function(){
		$(this).removeClass("hover")
	})
})
function Hover(obj, classname) {
	obj.hover(function(){
		$(this).addClass(classname)
	}, function(){
		$(this).removeClass(classname)
	})
}

// TAB
	// é»˜è®¤ç„¦ç‚¹æ ·å¼ .cur
	// ä¸ºé˜²æ­¢xpç³»ç»Ÿopacityå¯èƒ½å‡ºçŽ°çš„é”¯é½¿æˆ–è¾¹ç¼˜æ¨¡ç³Šï¼Œ é»˜è®¤.tabboxæ•ˆæžœ.show() / .hide()
	// æ‹“å±•.tabboxæˆopacityï¼Œ éœ€åœ¨.tabboxä¸ŠåŠ ä¸Š data-effect="true"
function Tab(tabBtn, tabBox) {
	var tabbl = true;
	tabBtn.eq(0).addClass("cur")
	tabBox.eq(0).show()
	tabBtn.click(function(){
        var n = $(this).index();
        $(this).addClass("cur").siblings().removeClass("cur")
        if(tabBox.attr("data-effect") == "true"){
        	if(!tabbl){
        		return
        	}
        	tabbl = false;
        	tabBox.eq(n).stop().fadeIn(800).siblings().stop().fadeOut(800, function(){
        		tabbl = true;
        	})
        }else{
        	tabBox.eq(n).show().siblings().hide()
        }
    })
}

// å›¾ç‰‡å…¨å± / å›¾ç‰‡å……æ»¡æ•´ä¸ªçˆ¶çº§
	// é»˜è®¤boxè‡ªå¸¦loadingèƒŒæ™¯å›¾
	// é»˜è®¤obj hide
function FullBg(box, obj){
	box.css("background", "none")
	obj.eq(0).stop().fadeIn(1000)
	function resizeBg() {
		obj.removeClass("w-f").removeClass("h-f").css("margin", 0)
		var boxR = box.outerWidth() / box.outerHeight(),
			objR = obj.width() / obj.height();
		if( objR < boxR ) {
		    obj.addClass('w-f').css("margin-top", -(obj.height() - box.outerHeight()) / 2);
		}else{
		    obj.addClass('h-f').css("margin-left", -(obj.width() - box.outerWidth()) / 2);
		}
	}
	$(window).resize(resizeBg).trigger("resize");
}


// æ ‡ç­¾è¿›åœºæ•ˆæžœ
	// ç”¨äºŽå¤šå¹³çº§æ ‡ç­¾ä¾æ¬¡è½½å…¥ é»˜è®¤æ ‡ç­¾å…·æœ‰positionå±žæ€§åŠopacuty: 0;
	// direction ä»Žå“ªä¸ªæ–¹å‘è¿›å…¥
	// distance  è¿›å…¥åˆ°æŒ‡å®šè·ç¦»
	// number    å¹³çº§æ ‡ç­¾çš„ä¸ªæ•°
	// time      è¿›åœºåŠ¨ç”»çš„æ—¶é—´
	// delay     ä¸‹ä¸€æ ‡ç­¾çš„å»¶è¿Ÿ
function Enter(obj, direction, distance, number, time, delay) {
	// ä»Žå·¦å¾€å³ï¼Œdistance > 0
	if(direction == "left"){
		obj.stop().animate({
			left : distance,
			opacity : 1
		}, time)
		setTimeout(function(){
			if(obj.next().index() + 1 <= number){
				Enter(obj.next(), direction, distance, number, time, delay)
			}
		}, delay)
	}
	// ä»Žä¸Šå¾€ä¸‹ï¼Œdistance > 0
	if(direction == "top"){
		obj.stop().animate({
			top : distance,
			opacity : 1
		}, time)
		setTimeout(function(){
			if(obj.next().index() + 1 <= number){
				Enter(obj.next(), direction, distance, number, time, delay)
			}
		}, delay)
	}
	// CSS3 Xä½ç§»
	if(direction == "X"){
		obj.stop().transition({
			x : distance,
			opacity : 1
		}, time)
		setTimeout(function(){
			if(obj.next().index() + 1 <= number){
				Enter(obj.next(), direction, distance, number, time, delay)
			}
		}, delay)
	}
	// CSS3 yä½ç§»
	if(direction == "Y"){
		obj.stop().transition({
			y : distance,
			opacity : 1
		}, time)
		setTimeout(function(){
			if(obj.next().index() + 1 <= number){
				Enter(obj.next(), direction, distance, number, time, delay)
			}
		}, delay)
	}
}

// å›¾ç‰‡åŠ è½½ è°ƒç”¨æ–¹æ³•
// _PreLoadImg([
	// å›¾ç‰‡è·¯å¾„
// ],function(){

// })
function _PreLoadImg(b,e){var c=0,a={},d=0;for(src in b){d++}for(src in b){a[src]=new Image();a[src].onload=function(){if(++c>=d){e(a)}};a[src].src=b[src]}};
