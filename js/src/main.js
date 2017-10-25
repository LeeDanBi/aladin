(function($){

  // 배너의 maple effect _________________
  var addBanner = $('#addBanner');
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
 //-------------------------------------

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
      btnL.hide();
    var ulml = parseInt(noticeUl.css('marginLeft'));
    noticeUl.animate({marginLeft: ulml + 174+ 'px'},function(){
      ulml = parseInt(noticeUl.css('marginLeft') );

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
      btnR.hide();
    var ulml = parseInt(noticeUl.css('marginLeft'));
    noticeUl.animate({marginLeft: ulml -174+ 'px'},function(){
      ulml = parseInt(noticeUl.css('marginLeft') );

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

  // 오프라인 매장 지도 시작 .box_map_store------------------------
  // *핀셋 버튼 누르면 우측에 정보 뜨기

  (function(){
    var map = $('.map');
    var map_li = map.children('li');
    var boxContents = $('.box_contents');
    var boxcon_li = boxContents.children('li');
 
    map_li.on('click',function(e){
      e.preventDefault();
      var _this = $(this);
      var _this_in = _this.index();
      _this.siblings().removeClass('actPoint');
      _this.addClass('actPoint');
      boxcon_li.eq(_this_in).siblings().removeClass('active');
      boxcon_li.eq(_this_in).addClass('active');
    });

  // *매장 이미지 사진

   for(var i=0; i < map_li.length; i++){
    var _store_img = boxcon_li.eq(i).find('.store_img');
    var _dataImg = map_li.eq(i).attr('data-img');
    // console.log(_dataImg);
    _store_img.css({backgroundImage:'url("../img/main/store/' + _dataImg+ '.jpg")'});
   }

  })();//즉시실행함수 끝
  // 오프라인 매장 지도 끝  //.box_map_store-----------------------
  

})(this.jQuery);