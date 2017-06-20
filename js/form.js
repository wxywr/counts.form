// 生成饮食报告(表单验证)
var input = document.getElementsByClassName('please');
for(var i=0;i<input.length;i++){
	//限制只能输入数字和小数点
	input[i].onfocus = input[i].onblur = input[i].onkeyup = function(){
         this.value = this.value.replace(/[^\d.]/g,'');
    };
	input[i].onfocus=function(){
		this.placeholder="";
	}
}
input[0].onblur=function(){
	this.placeholder="请输入您的身高";
};
input[1].onblur=function(){
	this.placeholder="请输入您的体重";
};
input[2].onblur=function(){
	this.placeholder="请输入您的年龄";
};
input[3].onblur=function(){
	this.placeholder="请输血肌酐值";
};
