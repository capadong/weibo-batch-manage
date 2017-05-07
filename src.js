function deleteWeibo(tags,index){
		tags[index].click();
		
		setTimeout(function(){
			confirmDelete();
		},200);
}

function confirmDelete(){
	console.log('确认删除');
	var confirmButton = document.getElementsByClassName('W_btn_a')[1];
	if(confirmButton){
		confirmButton.click();
	}
}

function deleteAll(){
	
	var tags = document.getElementsByTagName('a');

	for(var i = 0;i < tags.length - 1;i++){
		
		var attr = tags[i].getAttribute('action-type')
		
		if(attr && attr == 'feed_list_delete'){
			console.log('正在删除微博...');
			console.log(tags[i]);
			console.log(attr);
			deleteWeibo(tags,i);
			break;
		}
	}
}

setInterval(function(){
	console.log('开始删除微博');
	deleteAll();
},2000);

//微博批量删除工具
//chrome中打开个人微博列表页，F12进入控制台（console），粘贴以上代码，回车执行
