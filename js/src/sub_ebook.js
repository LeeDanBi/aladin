(function($){
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
  //--------------------------------------
  //무료도서__
 (function(){
  var boxRecommend = $('.box_free');
  var reco_ul = boxRecommend.find('.list_book');
  var reco_btn_l = boxRecommend.find('.bnt_left_');
  var reco_btn_r = boxRecommend.find('.bnt_right_');

  reco_btn_l.on('click',function(){
    var reulmg = parseInt(reco_ul.css('marginLeft'));
    //reco_ul.css({marginLeft: reulmg + 950 + 'px'});
    if(reulmg == 0){
      reco_ul.css({marginLeft:'-950px'});
    }else{
      reco_ul.css({marginLeft: reulmg + 950 + 'px'});
    }
  });// reco_btn_l.on('click',function()
  reco_btn_r.on('click',function(){
    var reulmg = parseInt(reco_ul.css('marginLeft'));
    //reco_ul.css({marginLeft: reulmg - 950 + 'px'});
    if(reulmg == -950){
      reco_ul.css({marginLeft: 0});
    }else{
      reco_ul.css({marginLeft: reulmg + -950 + 'px'});
    }
  });// reco_btn_r.on('click',function()
 })();
})(this.jQuery);