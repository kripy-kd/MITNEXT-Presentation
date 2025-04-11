// top
jQuery(document).ready(function ($) {

	// menu icon
    $(document).ready(function () {
        $(".menu-toggle").click(function () {
            $(this).toggleClass("menu-is-active");
            $('.main-navigation').toggleClass("toggled");
            // $('body').toggleClass("menu-toggled");
        });
    });

    jQuery(".submenu-toggle-button").click( function (){
        $(this).parent().toggleClass("submneu-menu-open");
      });

 
    	// Hero Slider
        $('.hero-slider').slick({
            autoplay: true,
            autoplaySpeed: 9000,
            speed: 900,
            infinite: true,
            pauseOnHover:false,
            slidesToShow: 1,
            dots: true, 
            arrows: true,
            //   fade: true,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    arrows: false,
                  }
                }
               ]
        }); 


        // product-slider
        $('.product-slider').slick({
            autoplay: true,
            autoplaySpeed: 9000,
            speed: 900,
            infinite: true, 
            pauseOnHover:false,
            slidesToShow: 1,
            dots: true,
            arrows: true,
            //   fade: true,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    arrows: false,
                  }
                }
               ]
        }); 





        // expanding-panels-section
        $(document).ready(function(){
            $(".read-more-button").on("click",function(){
                var $this = $(this);
                $this.next().slideToggle();
                if($this.text() === "Read More"){
                    $this.text("Read Less");
                }else{
                    $this.text("Read More");
                }
            })
        });
                







// map
// Show the first tab and hide the rest
// $('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
// $('.tab-content:first').show();

// Click function
// $('#tabs-nav li').click(function(){
//   $('#tabs-nav li').removeClass('active');
//   $(this).addClass('active');
//   $('.tab-content').hide();
  
//   var activeTab = $(this).find('a').attr('href');
//   $(activeTab).fadeIn();
//   return false;
// });



$('#tabs-nav a').click(function(){
    $('#tabs-nav a').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();
    
    var activeTab = $(this).attr('href');
    $(activeTab).fadeIn();
    return false;
  });
  



});





