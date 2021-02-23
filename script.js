

$(function(){

  $('.nav ul>li:not(:first-child)').hide();

  $('#nav-menu').click(function(){

    $('#nav-menu').siblings().slideToggle();
    
    
    $('nav .nav li:nth-of-type(2)').addClass('active');

    
 

     
    return false;
    });

    
    $('#nav-menu').click(function(){
      $('#nav-menu a').toggleClass('show');
      
    });  

  });  
  

  

 
