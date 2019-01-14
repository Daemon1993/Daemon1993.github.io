Bmob.initialize("a03057ab125975875746a58f0f25314f", "28893726121e5e9667ed3a26743ecadb");

const query = Bmob.Query('Msg');

var lists_data = new Vue({
	el: '#lists',
	data: {
		items: [{
			message: '哈宝集中营',
			date:new Date()
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
			datas=[]
			for (var i in res) {
				datas.push({message:res[i].content,date:res[i].createdAt});
			}
			lists_data.items = datas
		}
	}).catch(err => {
		console.log(err)
	})
}


loadAllData()
