Bmob.initialize("a03057ab125975875746a58f0f25314f", "28893726121e5e9667ed3a26743ecadb");

const query = Bmob.Query('Msg');

var ip = '0.0.0.0'
var address=''

var tag = new Vue({
	el: '#tag',
	data: {
		tag_str: '匿名发言   - ip:' + ip+'   -> '+address,
	}
})

var lists_data = new Vue({
	el: '#lists',
	data: {
		items: [{
			message: '哈宝集中营',
			date: new Date(),
			ip: '',
			address:''
		}]
	}
})

var input_content = new Vue({
	el: '#input_content',
	data: {
		content: ''
	}
})

var bt_send_content = new Vue({
	el: '#bt_send',
	data: {
		content: ''
	},
	methods: {
		send: function() {
			console.log('发送输入 内容 ' + input_content.content)
			//数据库写入数据
			query.set("content", input_content.content)
			query.set("ip", ip)
			query.save().then(res => {
				console.log(res)
				loadAllData()
			}).catch(err => {
				console.log(err)
			})
		}
	}
})


function loadAllData() {
	query.find().then(res => {
		if (res.length == 0) {
			console.log(lists_data.items[0])
			lists_data.items[0].message = '暂无数据'
		} else {
			console.log(res)
			datas = []
			for (var i in res) {
				datas.push({
					message: res[i].content,
					date: res[i].createdAt,
					ip: res[i].ip == undefined ? '' : res[i].ip
				});
			}
			lists_data.items = datas
		}
	}).catch(err => {
		console.log(err)
	})
}


$.getJSON('https://ipapi.co/json/', function(data) {
	str = JSON.stringify(data, null, 2)
	console.log(data)
	ip = data['ip']
	// console.log('ip  '+ip)
	tag.tag_str = '匿名发言   - ip:' + ip

	url = 'https://restapi.amap.com/v3/ip?ip={0}&output=json&key=cfaf0479361d0ff95cce40ca3d1a62c4';
	url = url.format(ip);
	console.log(url)

	$.getJSON(url, function(data) {
		tag.tag_str = '匿名发言   - ip:' + ip+' -> '+data['province']+data['city']
	});
});


loadAllData()



String.prototype.format = function() {
	if (arguments.length == 0) return this;
	var param = arguments[0];
	var s = this;
	if (typeof(param) == 'object') {
		for (var key in param)
			s = s.replace(new RegExp("\\{" + key + "\\}", "g"), param[key]);
		return s;
	} else {
		for (var i = 0; i < arguments.length; i++)
			s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
		return s;
	}
}
