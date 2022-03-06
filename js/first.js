

$(window).scroll(function () { 

    let heightfromtop= $(window).scrollTop();

    if(heightfromtop>100)
    {
        $(".navbar").css("backgroundColor","rgba(255,255,255,1)");
    }
    else
    {
        $(".navbar").css("backgroundColor","transparent");

    }
});

$("a").click(function()
{
    let hrefdata=$(this).attr("href");
     let seoffset =$(hrefdata).offset().top;  
     $("html,body").animate({scrollTop:seoffset-200},0.5); 
       

});


  AOS.init();

