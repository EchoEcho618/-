function resetHostArea(imgId,areaId,width) {
	var srcw = width;
	var noww = $(imgId).prop("clientWidth") * 1.0;
	var scale = noww / srcw;
	var areas = $(areaId + " area");
	var coords;
	areas.each(function() {
		coords = this.coords;
		coords = coords.split(",");
		var max = coords.length;
		this.coords = Math.round(coords[0] * scale)
		for (i = 1; i < max; i++) {
			this.coords += "," + Math.round(coords[i] * scale);
		}
	});
}
$(function() {
	resetHostArea("#jiangSu","#jiangsu","2451");
	resetHostArea("#suNan","#sunan","1293");
});
