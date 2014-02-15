/**
 * 
 */

$(document).ready(function(){
    startProcessing();
    });
    
function startProcessing(){
    $('#add').click(function(){
        alert($(this).parentsUntil("tr"));
        alert($("#repeater").parentsUntil("table"));
       $("#workTable").append($("#repeater").clone());
       $("#workTable").last.children();
        
    });
    
    /*$('#amount').change(function(){
        alert(this.value); 
    }); */
    
    $('#year').change(function(){
        
    });
}