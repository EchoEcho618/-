function scatter() {
	var dom = document.getElementById("scatter");
	var myChart = echarts.init(dom);
	var option = {
		xAxis: {
			show: false
		},
		yAxis: {
			show: false
		},
		color: ['#93D8A9', '#FFB99D', '#AF7DCC', '#FFD83D', '#bbe2e8'],
		textStyle: {
			fontFamily: 'KaiTi'
		},
		series: [{
				type: 'scatter',
				itemStyle: {
					normal: {
						label: {
							show: true,
							formatter: function(params) {
								return params.value[2]
							}
						},
						shadowBlur: 10,
						shadowColor: 'rgba(98, 98, 98, 0.5)',
						shadowOffsetY: 5,
						color: {
							type: 'radial',
							x: 0.4,
							y: 0.3,
							r: 1,
							colorStops: [{
									offset: 0,
									color: 'rgb(147, 216, 169)'
								},
								{
									offset: 1,
									color: 'rgb(56, 223, 89)'
								}
							]
						}
					},
				},
				data: [{
						symbolSize: 120,
						value: [7, 20, '乡村景区化'],
					},
					{
						symbolSize: 40,
						value: [10, 27, ''],
					},
					{
						symbolSize: 30,
						value: [20, 25, ''],
					},
					{
						symbolSize: 50,
						value: [45, 12, ''],
					}
				],
			},
			{
				type: 'scatter',
				itemStyle: {
					normal: {
						label: {
							show: true,
							formatter: function(params) {
								return params.value[2]
							}
						},
						shadowBlur: 10,
						shadowColor: 'rgba(98, 98, 98, 0.5)',
						shadowOffsetY: 5,
						color: {
							type: 'radial',
							x: 0.4,
							y: 0.3,
							r: 1,
							colorStops: [{
									offset: 0,
									color: 'rgb(251, 118, 123)'
								},
								{
									offset: 1,
									color: 'rgb(204, 46, 72)'
								}
							]
						}
					},
				},
				data: [{
						symbolSize: 100,
						value: [19, 15, '乡村经济发展'],
					},
					{
						symbolSize: 30,
						value: [5, 6, ''],
					},
					{
						symbolSize: 35,
						value: [30, 10, ''],
					},
					{
						symbolSize: 40,
						value: [39, 22, ''],
					},
				],
			},
			{
				type: 'scatter',
				itemStyle: {
					normal: {
						label: {
							show: true,
							formatter: function(params) {
								return params.value[2]
							}
						},
						shadowBlur: 10,
						shadowColor: 'rgba(98, 98, 98, 0.5)',
						shadowOffsetY: 5,
						color: {
							type: 'radial',
							x: 0.4,
							y: 0.3,
							r: 1,
							colorStops: [{
									offset: 0,
									color: 'rgb(174, 129, 255)'
								},
								{
									offset: 1,
									color: 'rgb(131, 48, 255)'
								}
							]
						}
					},
				},
				data: [{
						symbolSize: 100,
						value: [29, 21, '乡村性别观念'],
					},
					{
						symbolSize: 30,
						value: [9, 28, ''],
					},
					{
						symbolSize: 35,
						value: [12, 12, ''],
					},
					{
						symbolSize: 30,
						value: [57, 24, ''],
					},
				],
			},
			{
				type: 'scatter',
				itemStyle: {
					normal: {
						label: {
							show: true,
							formatter: function(params) {
								return params.value[2]
							}
						},
						shadowBlur: 10,
						shadowColor: 'rgba(98, 98, 98, 0.5)',
						shadowOffsetY: 5,
						color: {
							type: 'radial',
							x: 0.4,
							y: 0.3,
							r: 1,
							colorStops: [{
									offset: 0,
									color: 'rgb(255, 255, 127)'
								},
								{
									offset: 1,
									color: 'rgb(223, 218, 50)'
								}
							]
						}
					},
				},
				data: [{
						symbolSize: 110,
						value: [39, 15, '乡村民生保障'],
					},
					{
						symbolSize: 40,
						value: [14, 22, ''],
					},
					{
						symbolSize: 40,
						value: [25, 25, ''],
					},
				],
			},
			{
				type: 'scatter',
				itemStyle: {
					normal: {
						label: {
							show: true,
							formatter: function(params) {
								return params.value[2]
							}
						},
						shadowBlur: 10,
						shadowColor: 'rgba(98, 98, 98, 0.5)',
						shadowOffsetY: 5,
						color: {
							type: 'radial',
							x: 0.4,
							y: 0.3,
							r: 1,
							colorStops: [{
									offset: 0,
									color: 'rgb(129, 227, 238)'
								},
								{
									offset: 1,
									color: 'rgb(25, 183, 207)'
								}
							]
						}
					},
				},
				data: [{
						symbolSize: 130,
						value: [45, 21, '乡村传统民俗'],
					},
					{
						symbolSize: 30,
						value: [60, 30, ''],
					},
					{
						symbolSize: 40,
						value: [8, 26, ''],
					},
					{
						symbolSize: 40,
						value: [26, 27, ''],
					},
					{
						symbolSize: 35,
						value: [25, 8, ''],
					},
				],
			},
		]
	};
	if (option && typeof option === "object") {
		myChart.setOption(option, true);
	}
	myChart.on("click", function(params) {
		console.log(params);
		if (params.value[2] == "乡村景区化") {
			window.location.href = "../country/jingquhua.html";
		}
		if (params.value[2] == "乡村经济发展") {
			window.location.href = "../country/jingjifazhan.html";
		}
		if (params.value[2] == "乡村性别观念") {
			window.location.href = "../country/xingbieguannian.html";
		}
		if (params.value[2] == "乡村民生保障") {
			window.location.href = "../country/minshengbaozhang.html";
		}
		if (params.value[2] == "乡村传统民俗") {
			window.location.href = "../country/chuantongminsu.html";
		}
	});
}
$(document).ready(function() {
	scatter();
});
