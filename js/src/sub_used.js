(function($){

  // gnb menu ___________________________

  var windowS = $(window);
  var aladinInfo= $('.aladin_info');
  var gnb = $('#gnb');
  var menuButton = $('#menuButton');
  var buttonDeco = $('#buttonDeco')

  // menuButton.slideUp();

  windowS.on('scroll',function(){
  var wst = $(this).scrollTop();
  var mot = aladinInfo.offset().top;

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

//알라딘 뉴스
(function(){

  var aladinNews = $('.aladin_news');
  var aladinArt = $('.aladin_info').children('.box_wrap');
  var aladin_li = aladinNews.find('li');
  var aladin_bth = aladinNews.find('.btn_more');
  var i = 0;
  var roll_in = setInterval(News_roll,5000);

  aladinNews.find('a').on('focus',function() {
    $(this).parent().addClass('focus');
    $(this).parent().siblings().removeClass('focus');
  });

  function News_roll(){
    console.log(i);
    i++
    if(i>=aladin_li.length){
      i=0;
    }
    aladin_li.eq(i).addClass('focus');
    aladin_li.eq(i).siblings().removeClass('focus');
  }
  // * 새소식 모달창 만들기
  aladin_bth.on('click',function(e){
    e.preventDefault();
    if((aladinArt.find('.box_clone')[0])==undefined){
      //console.log('oo');
      //창 나타나기 
      var news_clone = aladinNews.children('ul').clone();
      aladinArt.append('<div class="box_clone">');
      var _boxClone = $('.box_clone');
      _boxClone.prepend('<h4>알라딘 새소식</h4>');
      _boxClone.append('<div class="news_wrap">');
      var _newsWrap = $('.news_wrap');
      _newsWrap.append(news_clone[0]);
      _boxClone.parent().css({position:'relative'});

      //버튼 모양 바뀌기
      aladin_bth.css({transform: 'rotate(135deg)'});
    }else{
      //console.log('xx');
      //창 삭제
      $('.box_clone').remove();
      //버튼 모양 돌아가기
      aladin_bth.css({transform: 'rotate(0deg)'});
    }
  });
})(); //즉시실행 함수 (알라딘 뉴스)

//---------------------------

  // 추천도서, 신간도서_______ btn_book_____
 //추천도서__
 (function(){
  var boxRecommend = $('.box_recommend');
  var reco_ul = boxRecommend.find('.list_book');
  var reco_btn_l = boxRecommend.find('.bnt_left_');
  var reco_btn_r = boxRecommend.find('.bnt_right_');

  reco_btn_l.on('click',function(){
    var reulmg = parseInt(reco_ul.css('marginLeft'));
    //reco_ul.css({marginLeft: reulmg + 950 + 'px'});
    // console.log('if문 밖');
    if(reulmg == 0){
      reco_ul.css({marginLeft:'-950px'});
      // console.log('if문 안');
    }else{
      reco_ul.css({marginLeft: reulmg + 950 + 'px'});
    }
  });// reco_btn_l.on('click',function()
  reco_btn_r.on('click',function(){
    var reulmg = parseInt(reco_ul.css('marginLeft'));
    //reco_ul.css({marginLeft: reulmg - 950 + 'px'});
    // console.log('if문 밖');
    if(reulmg == -950){
      reco_ul.css({marginLeft: 0});
      // console.log('if문 안');
    }else{
      reco_ul.css({marginLeft: reulmg + -950 + 'px'});
    }
  });// reco_btn_r.on('click',function()
 })();
  //신간도서
(function(){
  var boxNew = $('.box_new');
  var reco_ul = boxNew.find('.list_book');
  var reco_btn_l = boxNew.find('.bnt_left_');
  var reco_btn_r = boxNew.find('.bnt_right_');

  reco_btn_l.on('click',function(){
    var reulmg = parseInt(reco_ul.css('marginLeft'));
    //reco_ul.css({marginLeft: reulmg + 950 + 'px'});
    // console.log('if문 밖');
    if(reulmg == 0){
      reco_ul.css({marginLeft:'-950px'});
      // console.log('if문 안');
    }else{
      reco_ul.css({marginLeft: reulmg + 950 + 'px'});
    }
  });// reco_btn_l.on('click',function()
  reco_btn_r.on('click',function(){
    var reulmg = parseInt(reco_ul.css('marginLeft'));
    //reco_ul.css({marginLeft: reulmg - 950 + 'px'});
    // console.log('if문 밖');
    if(reulmg == -950){
      reco_ul.css({marginLeft: 0});
      // console.log('if문 안');
    }else{
      reco_ul.css({marginLeft: reulmg + -950 + 'px'});
    }
  });// reco_btn_r.on('click',function()
})();//즉시실행함수

})(this.jQuery);