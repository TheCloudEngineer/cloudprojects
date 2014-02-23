/**
 * 
 */

$(document).ready(function(){
    startProcessing();
    });

var currentYear = 2014;
var interestRateArray = new Array();
/*interestRateArray[0]=0.1;//2014
interestRateArray[1]=0.1;//2013
interestRateArray[2]=0.1;//2012
interestRateArray[3]=0.1;//2011
interestRateArray[4]=0.1;//2010*/
interestRateArray[0]=0.076;//2014
interestRateArray[1]=0.076;//2013
interestRateArray[2]=0.080;//2012
interestRateArray[3]=0.085;//2011
interestRateArray[4]=0.061;//2010
interestRateArray[5]=0.05;//2009
interestRateArray[6]=0.05;//2008
interestRateArray[7]=0.07;//2007
interestRateArray[8]=0.07;//2006
interestRateArray[9]=0.062;//2005
interestRateArray[10]=0.06;//2004 




    
function startProcessing(){
	$('#year').change(calculateNPVForCurrentRow);
	$('#amount').change(calculateNPVForCurrentRow);
	$('#currentTotal').change(calculateprofitPercent);
	$('#salePrice').change(calculateprofitPercent);
	$('#principleOutStanding').change(calculateprofitPercent);
    $('#add').click(function(){
        //alert($(this).parentsUntil("tr"));
        //alert($("#repeater").parentsUntil("table"));
    	var nodeToAdd = $("#repeater").clone();
    	//alert(nodeToAdd.children('#amount').attr('name'));
    	nodeToAdd.find('#year').val(0);
    	nodeToAdd.find('#amount').val(0);
    	nodeToAdd.find('#currentAmount').val(0);
    	nodeToAdd.find('#year').change(calculateNPVForCurrentRow);
    	nodeToAdd.find('#amount').change(calculateNPVForCurrentRow);
       $("#workTable").append(nodeToAdd);
       $("#workTable").last.children();
       //$('#amount')
       
        
    });
    
    

    
    /*$('#year').change(function(){
        
    });*/
   
}

function calculateprofitPercent(){
	var currentTotal = Number($("#currentTotal").val());
	var investedTotal = Number($("#investedTotal").val());
	//alert('Investment '+investedTotal);
	var sellingPrice = Number($('#salePrice').val());
	//alert('Sales '+sellingPrice);
	var bankOutStanding = Number($('#principleOutStanding').val());
	//alert('Bank '+bankOutStanding);
	var costPrice = investedTotal+bankOutStanding;
	//alert('cost'+costPrice);
	var profitPercent = ((sellingPrice - costPrice)/costPrice)*100;
	var oppCostPercent = ((currentTotal - investedTotal)/investedTotal)*100;
	//alert('real profit '+profitPercent);
	$("#profitPercent").val(profitPercent);
	//alert('simple return'+oppCostPercent);
	$("#oppPercent").val(oppCostPercent);
	
	
}

function calculateNPVForCurrentRow(){
	
	//alert(this.value); 
    //alert($(this).closest("tr").find('#year').value); /*.find("#year").value);*/
    //$(this).closest("tr").find('#year').css({"color":"red","border":"2px solid red"});
    var investedYear = $(this).closest("tr").find('#year').val();
    var investedAmount = $(this).closest("tr").find("#amount").val();
    //alert(investedAmount);
	var presentValue = calcuatePresentValue(investedAmount, investedYear);
	$(this).closest("tr").find("#currentAmount").val(presentValue) ;
	calculateTotal();
	//alert(presentValue);
}

function calculateTotal(){
	
	//var summands = $(document).find("#currentAmount");
	//alert(summands);
	var sum = 0;
	$(".currentValue").each(function ()
			{
			    //alert('hello'+$(this).val());
				var value = Number($(this).val());
			    if (!isNaN(value)) sum += value;
			});
	$(document).find("#currentTotal").val(sum);
	var investedTotal = 0;
	$(".totalInvest").each(function (){
		var value = Number($(this).val());
	    if (!isNaN(value)) investedTotal += value;
	});
	$(document).find("#investedTotal").val(investedTotal);
}

function calcuatePresentValue(invAmount, invYear){
	
	var range = currentYear - invYear;
	//alert(range);
	//var factor = 0;
	/*var eachYear = invAmount;
	for(var i = range-1; i>=1; i-- ){
		alert(interestRateArray[i]);
		//factor = factor + Math.pow((1+interestRateArray[i]),i);
		eachYear = eachYear * Math.pow((1+interestRateArray[i]),1);
		alert(eachYear);
	}
	alert('final factore'+factor);
	return invAmount*factor;*/
	return ci(invAmount,range);
}


function ci(amount,period){
	//alert('Period '+period);
	if(period>0){
		//alert('Amount '+amount);
		//alert('Interest Rate '+interestRateArray[period]);
		return ci(amount*(1+interestRateArray[period]), period-1);
	}else{
		return amount;
	}
}


