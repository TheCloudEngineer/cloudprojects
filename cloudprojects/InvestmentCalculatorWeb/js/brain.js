/**
 * 
 */

$(document).ready(function(){
    startProcessing();
    });
    
function startProcessing(){
    $('#add').click(function(){
        //alert($(this).parentsUntil("tr"));
        //alert($("#repeater").parentsUntil("table"));
       $("#workTable").append($("#repeater").clone());
       $("#workTable").last.children();
        
    });
    
    $('#amount').change(function(){
        alert(this.value); 
        //alert($(this).closest("tr").find('#year').value); /*.find("#year").value);*/
        $(this).closest("tr").find('#year').css({"color":"red","border":"2px solid red"});
        var year = $(this).closest("tr").find('#year').val(); 
        alert(year);
    });
    
    /*$('#year').change(function(){
        
    });*/
}
