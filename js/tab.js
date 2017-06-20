$(function(){
	$('.food-sorts li').eq(0).css({'color':'#1CBA66','border-bottom':'3px solid #2F9330'});
	var n=0;
	$('.food-sorts li').click(function(){
		var index = $(this).index();
		n=index;
		tab();
	});
	function tab(){
		$('.food-sorts li').eq(n).css({'color':'#1CBA66','border-bottom':'3px solid #2F9330'}).siblings().css({'color':'#000','border-bottom':'0'});
		$('.three-columns .eat').eq(n).css('display','block').siblings().css('display','none');
	}

	//表单提交
	$('.btn').click(function(){
		var _url = '../route/nutrition.getCcr.json';
		var _hei = $('input[name=tall]').val();
		var _wei = $('input[name=heavy]').val();
		var _age = $('input[name=age]').val();
		var _num = $('input[name=scr]').val();
		var _sex = $('input[name=sex]:checked').val();
		var _unit = $('input[name=unit]:checked').val();
		if(_hei==''||_wei==''||_age==''||_num==''||_sex==''||_unit==''){
			$('.alert').fadeIn().delay(2000).fadeOut();
			return false;
		}
		$.ajax({
			url:_url,
			data:{
				tall:_hei,
				heavy:_wei,
				age:_age,
				scr:_num,
				sex:_sex,
				unit:_unit
			},
			type: 'POST',
			dataType: 'json',
			success: function(msg){
				if(msg.success){
					var bmi = msg.srvresp.BMI;
					var calorie = msg.srvresp.calorie;
					var date = msg.srvresp.date;
					var good = msg.srvresp.good;
					var intake = msg.srvresp.intake;
					var lowProRice = msg.srvresp.lowProRice;
					var meat = msg.srvresp.meat;
					var normalFork = msg.srvresp.normalFork;
					var normalRice = msg.srvresp.normalRice;
					var notGood = msg.srvresp.notGood;
					var other = msg.srvresp.other;
					var portion = msg.srvresp.portion;
					var stage = msg.srvresp.stage;
					location.href="diet.html"+
						"?bmi="+bmi+"&calorie="+calorie+"&date="+date+"&good="+good+"&notGood="+notGood+"&portion="+portion+"&stage="+stage+"&intake="+intake+"&lowProRice="+lowProRice+"&meat="+meat+"&normalFork="+normalFork+"&normalRice="+normalRice+"&other="+other;
				}

			}
		})
	})
});