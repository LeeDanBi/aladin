(function($){

  // gnb menu ___________________________

  var windowS = $(window);
  var addBanner= $('#addBanner');
  var menuButton = $('#menuButton');

  windowS.on('scroll',function(){
  var wst = $(this).scrollTop();
  var mot = addBanner.offset().top;
  if(wst>=mot){
    menuButton.css({position:'fixed', top: '0'});
  }else{
    menuButton.css({position:'absolute', top: '60px'});
  }
  });

    //버튼 눌렀을 떄--
  var buttonDeco = $('#buttonDeco');
    menuButton.on('click',function(e){
      e.preventDefault();
      buttonDeco.stop().toggleClass('button_deco');
    });


  // 배너의 maple effect _________________
  var maple_1_l = $('.maple_1_l');
  var maple_2_l = $('.maple_2_l');
  var maple_3_l = $('.maple_3_l');
  var maple_1_r = $('.maple_1_r');
  var maple_2_r = $('.maple_2_r');
  var maple_3_r = $('.maple_3_r');

  addBanner.on('mousemove',function(e){
    var pagex = e.pageX - addBanner.offset().top;
    var pagey = e.pageY;
    var winW = $(window).innerWidth();
    var winH = $(window).innerHeight();

    var myX = pagex/winW *100;
    var myY = pagey/winH *100;
    var percentX = parseInt(myX);
    var percentY = parseInt(myY);

    maple_1_l.css({transform:'translate('+ -percentX / 2 + 'px, '+ -percentY / 8 + 'px)'});
    maple_2_l.css({transform:'translate('+ percentX + 'px, '+ percentY / 8 + 'px)'});
    maple_3_l.css({transform:'translate('+ -1.8 * percentX + 'px, '+ percentY / 8 + 'px)'});
    maple_1_r.css({transform:'translate('+ percentX / 2 + 'px, '+ percentY / 8 + 'px)'});
    maple_2_r.css({transform:'translate('+ -percentX + 'px, '+ -percentY / 8 + 'px)'});
    maple_3_r.css({transform:'translate('+ 1.8 * percentX + 'px, '+ percentY / 8 + 'px)'});
  });

  // addBanner 슬라이드 ____________________
  var bannerUl = $('.wrap_banner').children('ul');
  var banner_li = bannerUl.children();
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
}

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
}
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
}

 window.setInterval(MoveUl_r,5500);

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
    console.log('if문 밖');
    if(reulmg == 0){
      reco_ul.css({marginLeft:'-950px'});
      console.log('if문 안');
    }else{
      reco_ul.css({marginLeft: reulmg + 950 + 'px'});
    }
  });// reco_btn_l.on('click',function()
  reco_btn_r.on('click',function(){
    var reulmg = parseInt(reco_ul.css('marginLeft'));
    //reco_ul.css({marginLeft: reulmg - 950 + 'px'});
    console.log('if문 밖');
    if(reulmg == -950){
      reco_ul.css({marginLeft: 0});
      console.log('if문 안');
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
    console.log('if문 밖');
    if(reulmg == 0){
      reco_ul.css({marginLeft:'-950px'});
      console.log('if문 안');
    }else{
      reco_ul.css({marginLeft: reulmg + 950 + 'px'});
    }
  });// reco_btn_l.on('click',function()
  reco_btn_r.on('click',function(){
    var reulmg = parseInt(reco_ul.css('marginLeft'));
    //reco_ul.css({marginLeft: reulmg - 950 + 'px'});
    console.log('if문 밖');
    if(reulmg == -950){
      reco_ul.css({marginLeft: 0});
      console.log('if문 안');
    }else{
      reco_ul.css({marginLeft: reulmg + -950 + 'px'});
    }
  });// reco_btn_r.on('click',function()
})();//즉시실행함수

 // notice__________________________

 var noticeUl = $('.menu_notice');
 var notice_dt = $('.menu_notice').children().children().children('dt');
 var notice_dd = $('.menu_notice').children().children().children('dd');

 notice_dt.on('click',function(e){
  e.preventDefault();
  var _this = $(this);
  var _this_li = _this.parent().parent('li');
  var _this_dd = _this_li.children().children('dd');

  notice_dd.css({display:'none'});
  _this_dd.css({display:'block'});

  notice_dt.css({backgroundColor:'#7F7F7F'});
  _this.css({backgroundColor:'#F18C00'});
 });

  //좌,우 버튼 움직이기
  (function(){
    var btnL = $('.btn_l');
    var btnR = $('.btn_r');
    btnL.hide();

    btnL.on('click',function(){
    var ulml = parseInt(noticeUl.css('marginLeft'));
      noticeUl.animate({marginLeft: ulml + 174 + 'px'},function() {
        ulml = parseInt(noticeUl.css('marginLeft'));
        if(ulml >= 0){
        btnL.hide();
        btnR.show();
      }else{
        btnL.show();
        btnR.show(); 
       }//if문,else
      });
  
    });//btnL.on
    btnR.on('click',function(){
    var ulml = parseInt(noticeUl.css('marginLeft'));
    noticeUl.animate({marginLeft: ulml -174+ 'px'},function(){
      ulml = parseInt(noticeUl.css('marginLeft'));
      if(ulml < -522){
      btnL.show();
      btnR.hide();
    }else{
      btnL.show();
      btnR.show();
     }//if문,else
    });
    
  });//btnR.on
  })();
  

})(this.jQuery);