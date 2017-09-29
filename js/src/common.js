(function($){
  // gnb menu ___________________________

  var windowS = $(window);
  var addBanner= $('#addBanner');
  var gnb = $('#gnb');
  var menuButton = $('#menuButton');
  var buttonDeco = $('#buttonDeco')

  // menuButton.slideUp();

  windowS.on('scroll',function(){
  var wst = $(this).scrollTop();
  var mot = addBanner.offset().top;

  // if(wst>=mot){
  //   menuButton.slideDown().css({position:'fixed', top: '0'}).removeClass('button_deco');
  //   if(gnb.css('position')=='fixed' && gnb.css('top')=='0'){
  //   menuButton.css({position:'absolute', top: '60px'});
  //   }
  // }else{
  //   
  //   menuButton.slideUp();
  //   menuButton.css({position:'absolute', top: '60px'});
  //   if(gnb.css('position')=='fixed'){
  //     gnb.css({position:'relative', top: 0});
  //   }
  // }

 if(wst>=mot){
  gnb.addClass('fixed');
  menuButton.slideDown();
  if(!buttonDeco.hasClass('button_deco')){
  gnb.css({transform:'translateY(-60px)'});
  }
 }else{
  menuButton.slideUp();
  gnb.removeClass('fixed');
  buttonDeco.removeClass('button_deco');
  gnb.css({transform:'translateY(0)'});
 }


  });

  menuButton.on('click',function(e) {
    e.preventDefault();
     buttonDeco.stop().toggleClass('button_deco');
     if(buttonDeco.hasClass('button_deco')){
       gnb.css({transform:'translateY(0)',transition:'all 500ms'});
      }else{
       gnb.css({transform:'translateY(-60px)',transition:'all 500ms'});
      }
  });

  //   //버튼 눌렀을 떄--
  // var buttonDeco = $('#buttonDeco')
  //   menuButton.on('click',function(e){
  //     e.preventDefault();
  //     buttonDeco.stop().toggleClass('button_deco');
  //     if(buttonDeco.hasClass('button_deco')){
  //       gnb.css({position:'fixed', top: '-60px', zIndex:'6000'}).animate({top:'0'});
  //       menuButton.animate({position:'fixed', top: '60px'});
  //     }else{
  //       gnb.animate({position:'fixed', top: '-60px'});
  //       menuButton.animate({position:'fixed', top: '0'});
  //     }
  //       //버그가 많이 일어나고 있습니다. 도와주세요.
  //   });

  //---------------------------

    // addBanner 슬라이드 ____________________
  var bannerUl = $('.wrap_banner').children('ul');
  var banner_li = bannerUl.children()
  var clone_li = banner_li.last().clone();

  var indicatorBox = $('.btn_indicate');
  var indicator_li = indicatorBox.children();
  var clone_indi = indicator_li.last().clone();

  var btn_indi = indicatorBox.children('li');
  var btnLeft = $('.btn_left');
  var btnRight = $('.btn_right');

  var i = 1;

  bannerUl.prepend(clone_li);
  banner_li = bannerUl.children();
  var banner_i = banner_li.length;

  indicatorBox.prepend(clone_indi);
indicatorBox = $('.btn_indicate');
indicator_li = indicatorBox.children();
indicator_li.first().hide(); //---------------------------

bannerUl.css({width:banner_i*100+'%', marginLeft: -100+'%'});
banner_li.css({width: 100/banner_i+'%'});


function MoveUl(e){
  e.preventDefault();
  var _this = $(this);
  i = _this.index();
  bannerUl.stop().animate({marginLeft: -(100*i)+'%'});
  indicator_li.eq(i).css({backgroundColor:'#F18C00'}).siblings().css({backgroundColor:'#E4DBCF'});
  // console.log(i);
};

btn_indi.on('click',MoveUl); // indicate 클릭

btnLeft.on('click',MoveUl_l);

// console.log(i);

 indicator_li.eq(i).css({backgroundColor:'#F18C00'}).siblings().css({backgroundColor:'#E4DBCF'});

function MoveUl_l(){
  i -= 1 ;
  if(i<=0){
    
    bannerUl.stop().animate({marginLeft: -(100*i)+'%'},function() {
  //console.log(i);
    // i = banner_i-1;
    bannerUl.css({marginLeft: -(100*i)+'%'});
    });
    i = banner_i-1;
    // console.log(i);
    indicator_li.eq(i).css({backgroundColor:'#F18C00'}).siblings().css({backgroundColor:'#E4DBCF'});
   }else{
     bannerUl.stop().animate({marginLeft: -(100*i)+'%'});
     indicator_li.eq(i).css({backgroundColor:'#F18C00'}).siblings().css({backgroundColor:'#E4DBCF'});
  }
};
btnRight.on('click',MoveUl_r);


function MoveUl_r(){
  i += 1;
  indicator_li.eq(i).css({backgroundColor:'#F18C00'}).siblings().css({backgroundColor:'#E4DBCF'});
  if(i>=banner_i-1){
    i=banner_i-1;
    bannerUl.stop().animate({marginLeft: -(100*i)+'%'},function() {
    i = 0;
    bannerUl.css({marginLeft: -(100*i)+'%'});
    });
  }else{
    bannerUl.stop().animate({marginLeft: -(100*i)+'%'});
  }
  //console.log(i);
};

var autoMove;
var boxBtn = $('.box_btn');

function SetIn(){
 autoMove = setInterval(MoveUl_r,5000);
}
function ClearIn(){
  clearInterval(autoMove);
}

SetIn();
boxBtn.on('mouseenter',ClearIn);
boxBtn.on('mouseleave',SetIn);

//-------------------------
})(this.jQuery);