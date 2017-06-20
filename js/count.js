// ----选择性别、单位------
var sex = document.querySelectorAll('.sex');
var label = document.getElementsByTagName('label');
//初始状态
sex[0].checked = true;
label[0].style.backgroundPosition='2px -20px';
label[2].style.backgroundPosition='2px -20px';

sex[0].onclick=function(){
	label[0].style.backgroundPosition='2px -20px';
	label[1].style.backgroundPosition='2px 1px';
	sex[0].checked = true;
	sex[1].checked = false;
};
sex[1].onclick=function(){
	label[0].style.backgroundPosition='2px 1px';
	label[1].style.backgroundPosition='2px -20px';
	sex[1].checked = true;
	sex[0].checked = false;
};

var unit = document.querySelectorAll('.unit');
var dw = document.getElementsByClassName('dw')[0];
unit[0].checked = true;
unit[0].onclick=function(){
	label[2].style.backgroundPosition='2px -20px';
	label[3].style.backgroundPosition='2px 1px';
	unit[0].checked = true;
	unit[1].checked = false;
	dw.innerHTML='umon/L';
};
unit[1].onclick=function(){
	label[3].style.backgroundPosition='2px -20px';
	label[2].style.backgroundPosition='2px 1px';
	unit[1].checked = true;
	unit[0].checked = false;
	dw.innerHTML='mg/dl';
};

//当input输入内容有删除图标，点击清空内容
var input = document.getElementsByClassName('please');
var no = document.getElementsByClassName('no');
for(var j=0;j<input.length;j++){
	input[j].index = j;
	input[j].addEventListener("keyup",function(){
		for(var k=0;k<no.length;k++){
			if(this.value.length>0){
			 	for(var i=0;i<no.length;i++){
					no[i].style.display = 'none';
				}
				no[this.index].style.display = 'block';
		    }else{no[k].style.display="none";}
		}
	})
}
no[0].onclick=function(){
	input[0].value="";
}
no[1].onclick=function(){
	input[1].value="";
}
no[2].onclick=function(){
	input[2].value="";
}
no[3].onclick=function(){
	input[3].value="";
}