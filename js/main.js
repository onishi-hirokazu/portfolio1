$(function(){

    //ハンバーガーメニューの開閉
    $('.hmb').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.drawer-nav').removeClass('open');
        } else{
            $(this).addClass('active');
            $('.drawer-nav').addClass('open');
        }
    });

    //スクロールでヘッダーが出現
    $(window).scroll(function(){
        const scroll = $(window).scrollTop();
        const elemPos = $('.section1').offset().top;
        const windowHeight = $(window).height();
        if(scroll > elemPos - windowHeight){
            $('.header-elem').fadeIn(800);
        } else{
            $('.header-elem').fadeOut(800);
        }
    })

    //スライドショー
    $('.slider').slick({
        autoplay: true,
        fade: true,
        speed: 1500,
        zindex: 1
    });

    //スクロールでフワッとアニメーション
    $('.inview').on('inview',function(event, isInView){
        if(isInView){
            $(this).stop().addClass('show');
        }
    });

    //ページ内リンクでスムーススクロール
    $('a[href^="#"]').click(function(){
        const href = $(this).attr('href');
        const target = $(href == '#' || href == '' ? 'html' : href);
        const position = target.offset().top;
        $('html, body').animate({scrollTop:position}, 600, 'swing');
        return false;
    });

    //スクロールでページトップへ戻るボタン出現
    $(window).scroll(function(){
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if(scroll > windowHeight){
            $('.to-top').fadeIn(800);
        } else{
            $('.to-top').fadeOut(800);
        }
    });

    //ページトップへ戻るボタンがフッター内で色変化
    $(window).scroll(function(){
        const elemPos = $('footer').offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if(scroll > elemPos - windowHeight){
            $('.to-top, .to-top a').addClass('in-footer');
        } else{
            $('.to-top, .to-top a').removeClass('in-footer');
        }
    });

    //Q&Aをアコーディオンメニュー
    $('.section5 dt').click(function(){
        $(this).next().slideToggle();
    });

});