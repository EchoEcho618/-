function modal(modalId,areaId){
	var suzhou = document.getElementById("suzhouModal");
	//var wuxi = document.getElementById("wuxiModal");
	var changzhou = document.getElementById("changzhouModal");
	var zhenjiang = document.getElementById("zhenjiangModal");
	var nanjing = document.getElementById("nanjingModal");
	var su = document.getElementById("suModal");
	var xi = document.getElementById("xiModal");
	var body = document.body;
	// 获取弹窗
	var modal = document.getElementById(modalId);
	 
	// 打开弹窗的按钮对象
	var btn = document.getElementById(areaId);
	
	// 点击按钮打开弹窗
	btn.onclick = function() {
		modal.style.left = event.pageX + "px";
		modal.style.top = event.pageY + "px";
	    modal.style.display = "block";
	}
	// 点击空白关闭弹窗
	$(document).mouseup(function(e){
	  var _con = $('jiangSuMap');   // 设置目标区域
	  if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1
	    suzhou.style.display = "none";
	    //wuxi.style.display = "none";
	    changzhou.style.display = "none";
	    zhenjiang.style.display = "none";
	    nanjing.style.display = "none";
	    su.style.display = "none";
	    xi.style.display = "none";
	  }
	});
}

window.onload = function(){
	modal("suzhouModal","suzhou");
	modal("wuxiModal","wuxi");
	modal("changzhouModal","changzhou");
	modal("zhenjiangModal","zhenjiang");
	modal("nanjingModal","nanjing");
	modal("suModal","su");
	modal("xiModal","xi");
}