$(function() {

var $body = $('body'), 
    $grid = $('.grid'),
    $a = $('.a'),
    $b = $('.b'),
    $c = $('.c'),
    $d = $('.d'),
    $stack = $('.Stack'),
    $holder = $('.Stack-holder'),
    $stackWrap = $('.Stack-wrap'),
    $slideNotFirst = $stackWrap.find('.Stack-sheet').slice(1),
    $slide = $stackWrap.find('.Stack-sheet'),
    $before = CSSRulePlugin.getRule(".Stack-sheet:before"),
    $after = CSSRulePlugin.getRule(".Stack-sheet:after"),
    $stackHeight = 375,
    $halfHeight = $stackHeight / -4,
    tlOpen, tlHover, tlInit;


  tlInit = new TimelineMax();
  tlInit
    .set([$a, $b, $c, $d], {scale: 0.5})
    .fromTo($grid, 1, {autoAlpha: 0, scale: 0.8}, {autoAlpha: 1, scale: 1})
    .to($holder, 2, {autoAlpha: 1, ease: Power3.easeOut}, '+=.2')
    
    //.to($a, 1.1, {autoAlpha: 1}, '-=1.7')
    .to($a, 1.3, {y: '-=47', x: '+=2', autoAlpha: 1, ease: Power3.easeInOut}, '-=1.4')
    .to($b, 1.3, {y: '-=20', x: '+=75', autoAlpha: 1, ease: Power3.easeInOut}, '-=1.4')
    .to($c, 1.3, {y: '-=20', x: '-=75', autoAlpha: 1, ease: Power3.easeInOut}, '-=1.4')
    .to($d, 1.3, {y: '+=7', x: '+=2', autoAlpha: 1, ease: Power3.easeInOut}, '-=1.4')

    .to($a, 1, {scale: 1, y: '+=47', x: '-=2'}, '+=.5')
    .to([$b, $c, $d], .4, {autoAlpha: 0}, '-=.8')

    .to($holder, 1.7, {height: '230px', ease: Power3.easeOut}, '-=1')
    
    .set([$a, $b, $c, $d], {scale: 1})
    .set($b, { y: '+=20', x: '-=75'})
    .set($c, { y: '+=20', x: '+=75'})
    .set($d, { y: '-=7', x: '-=2'})
    .to($b, .5, {y: '+=9', autoAlpha: 1, ease: Power3.easeOut})
    .to($c, .5, {y: '+=18', autoAlpha: 1, ease: Power3.easeOut},'+=.1')
    .to($d, .5, {y: '+=27', autoAlpha: 1, ease: Power3.easeOut}, '+=.2')
    // .set($c, {autoAlpha: 1}, '-=1.2')
    // .to($c, .5, {y: '+=18', ease: Power3.easeOut}, '-=1.2')
    // .set($d, {autoAlpha: 1}, '-=.7')
    // .to($d, 1, {y: '+=27', ease: Power3.easeOut}, '-=.7')

  $('.grow').on('click', function(){
    $body.addClass('noTrans');

    if($body.hasClass('gridOpen')) {
      $(this).text('Grow');
      tlOpen.reverse(0);
    } else {
      $(this).text('Shrink');
      tlOpen = new TimelineMax();

      tlOpen
        .to($d, 0.9, {y: '+=140', ease: Power3.easeOut}, 0.1)
        .to($c, 0.9, {y: '+=95', ease: Power3.easeOut}, 0.2)
        .to($b, 0.9, {y: '+=50', ease: Power3.easeOut}, 0.3)
        .to($holder, 1.4, {height: $stackHeight, ease: CubicBezier.config(0.9, 0, 0.46, 1)}, '-=1.9')
        .to($stack, 1.4, {y: $halfHeight, ease: CubicBezier.config(0.9, 0, 0.46, 1)}, '-=1.9')
    }
    $body.toggleClass('gridOpen');
  });

  $('.circle').on('click', function(){
    $body.removeClass('noTrans');
    $stack.toggleClass('circleWrap');
  });



  // $stackWrap.hover(function(){
  //   $body.addClass('noTrans');
  //   tlHover = new TimelineMax();

  //   tlHover
  //     .to($d, 0.9, {y: '+=15', ease: Power3.easeOut}, 0.1)
  //     .to($c, 0.9, {y: '+=10', ease: Power3.easeOut}, 0.2)
  //     .to($b, 0.9, {y: '+=5', ease: Power3.easeOut}, 0.3)
  //     .to($holder, 1, {height: '245px', ease: Power3.easeOut}, '-=1.3')
  //     //.to($stack, 1.4, {y: -30, ease: Power3.easeOut}, '-=1.3')

  // }, function(){
  //    tlHover.reverse(0);
  // });


  // if ciurcle .circleWrap .Stack-sheet should scale on hover

  // $slide.hover(function(){
  //   if($body.hasClass('gridOpen')) {
  //     TweenLite.to($(this), .5, {left: '40px', top: '15px', ease: Power3.easeInOut});
  //   } 
  // }, function(){
  //   if($body.hasClass('gridOpen')) {
  //     TweenLite.to($(this), .5, {left: '0', top: '0', ease: Power3.easeInOut});
  //   }   
  // });

});
