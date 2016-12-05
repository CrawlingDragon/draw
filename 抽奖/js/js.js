$(document).ready(function(){
	$('.unCur').each(function(){
		$(this).hover(function(){
			$(this).animate({
				'left':'0px'
			},600);
		},function(){
			$(this).animate({
				'left':'-110px'
			},600);
		});
	});

	$('.right-cur').each(function(){
		$(this).hover(function(){
			$(this).animate({
				'right':'0'
			},600);
		},function(){
			$(this).animate({
				'right':'-110px'	
			},600);
		})
	});
});


function setMoreItem(key,cls){     //设置缓存 key = 缓存的key class=缓存内容的class标签
	var sum = "";
	$(cls).each(function(){		      //获取 获奖列表
		var txt = '|' + $(this).text();  //为每个获奖号码加上一个'|'
		sum = txt + sum;				
		sum = sum.substr(0);			//去掉第一个'|'，便于后面的string转换成array。 
	});
	localStorage.setItem(key,sum);            //把所有的获奖内容存入内存
};

function getMoreItem(key,cls){ //'.getDraw-ul'   key=获取缓存的key  ，class=把缓存内容的写在的地方 
	var str = localStorage.getItem(key);     //从内存中获取获奖的string
	var arr1 = str.split('|');            //用split分割成array
	for(var i = 0;i<arr1.length;i++){
		if(arr1[i] != ""){               //去掉数组内空的元素
			arr1.sort(function(a,b){     //号码排序
				return a - b;
			});
			$(cls).append('<li class="drawList">' + arr1[i] + '</li>');     //重新把获奖名单插入到DOM
		}
	};
}





// localStorage.clear();