// JavaScript Document
$(function(){
	//filenumber
	$('[name=all]').click(function(){
		$('[name=filenumber]').prop('checked',$('[name=all]').prop('checked'));
	});
	
	var num = $("[name='filenumber']").size();
	
	$("[name='filenumber']").click(function(){
		var allNum = $("[name='filenumber']:checked").size();
		$("[name='all']").prop("checked",num==allNum);
	});
	
	//sys set date
	
		
	
});	