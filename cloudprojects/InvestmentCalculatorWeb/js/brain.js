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
    $('#add').click(function(){
        //alert($(this).parentsUntil("tr"));
        //alert($("#repeater").parentsUntil("table"));
    	var nodeToAdd = $("#repeater").clone();
    	//alert(nodeToAdd.children('#amount').attr('name'));
    	nodeToAdd.find('#year').change(calculateNPVForCurrentRow);
       $("#workTable").append(nodeToAdd);
       $("#workTable").last.children();
       //$('#amount')
       
        
    });
    
    

    
    /*$('#year').change(function(){
        
    });*/
   
}

function calculateNPVForCurrentRow(){
	
	alert(this.value); 
    //alert($(this).closest("tr").find('#year').value); /*.find("#year").value);*/
    //$(this).closest("tr").find('#year').css({"color":"red","border":"2px solid red"});
    var investedYear = $(this).closest("tr").find('#year').val();
    var investedAmount = $(this).closest("tr").find("#amount").val();
    alert(investedAmount);
	var presentValue = calcuatePresentValue(investedAmount, investedYear);
	$(this).closest("tr").find("#currentAmount").val(presentValue) ;
	alert(presentValue);
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


