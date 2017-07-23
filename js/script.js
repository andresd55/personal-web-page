$(function(){
    $( ".info-left" ).animate({ "left": "+=200px" }, "slow" );
    $( ".info-right" ).animate({ "right": "+=200px" }, "slow" );
});
$(".social-icon").hover(function(){
    $(this).addClass('animated bounce');
})
