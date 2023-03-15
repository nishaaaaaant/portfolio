$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "stat nishant viswanadha<br/>" +
      "><span class='caret'>$</span> job: Currently a fulltime student at Univeristy of Florida<br/> ^100" +
      "><span class='caret'>$</span> skills: Python, C, C++,Java, JavaScript, TypeScript, MySql, PostgreSQL, MongoDB<br/> ^100" +
      "><span class='caret'>$</span> hobbies: star-gazer, reading books<br/> ^300" +
      "><span class='caret'>$</span> alias: viswanis<br/> ^300" 
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
