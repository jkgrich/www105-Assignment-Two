$(document).ready(function () { 
/*============================================================================
                        GALLERY.HTML
============================================================================*/
//    $("#gallery li a").mouseover(function (){
//           
//    });
    
    $("#gallery li a").mouseover(function () {
        var imgSrc = $(this).attr("href");
        var imgAlt = $(this).children("img").attr("alt");
        
        $("#big_image").attr("src", imgSrc);
        $("#big_image").attr("alt", imgAlt);
    });

/*============================================================================
                        ABOUT.HTML
============================================================================*/    
    $("#bios #one").click(function (i) {
        i.preventDefault(); // return false
        var target = $(this).attr("href");
        $("#bio_one").load(target, function() {  
            $("#bio_one").slideDown(1000);
        });
    });
    
    $("#bios #two").click(function (i) {
        i.preventDefault(); // return false
        var target = $(this).attr("href");
        $("#bio_two").load(target, function() {  
            $("#bio_two").slideDown(1000);
        });
    });
    
    $("#bios #three").click(function (i) {
        i.preventDefault(); // return false
        var target = $(this).attr("href");
        $("#bio_three").load(target, function() {  
            $("#bio_three").slideDown(1000);
        });
    });
  
/*============================================================================
                        CONTACT.HTML
============================================================================*/     
    var myForm = $('#myform'); 
    var errorName = $('#error-name'); 
    var errorEmail = $('#error-email'); 
    var errorMsg = $('#error-msg'); 
    var errorWarning = $('#errors'); 
    var theName = $('#username');
    var theEmail = $('#email');
    var theMessage = $('#my_message');
    
    myForm.submit(function(ev) {
        var errors = 0;
        var userName = $('#username').val(); 
        var userEmail = $('#email').val(); 
        var userMessage = $('#my_message').val();

        if (userName == '') {
            theName.css('border-color', 'red');
            errorName.text('This field is required');
            errorName.css('color', '#C00');
            errors++;
        } else {
            theName.css('border-color', 'green');
            errorName.text(' ');
        }
        if (userEmail == '') {
            theEmail.css('border-color', 'red');
            errorEmail.text('This field is required');
            errorEmail.css('color', '#C00');
            errors++;
        } else {
            theEmail.css('border-color', 'green');
            errorEmail.text(' ');
        }

        if (userMessage == '') {
            theMessage.css('border-color', '#C00');
            errorMsg.text('This field is required');
            errorMsg.css('color','#C00');
            errors++;
        } else {
            theMessage.css('border-color', 'green');;
            errorMsg.text(' ');
            }
            
        if (errors>0) {
            errorWarning.show();
            errorWarning.css('color', '#C00');
            ev.preventDefault();
        } 
        else {
            errorWarning.hide();  
        }
    });
    
});