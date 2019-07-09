$(document).ready(function(){
  
    $('#b1').click(function(){
     if($(this).html()=='Show'){
       $(this).html('Hide');
       $('img').show();
     } 
     else{
       $(this).html('Show');
       $('img').hide();
     }  
    })
  });