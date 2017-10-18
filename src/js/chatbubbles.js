var chatBubbles = jQuery.noConflict();
function chatBubblesEnter(child){
  chatBubbles(".chat-bubble:nth-child("+child+")").animate({ top:"0px", opacity:"0.2" });
  chatBubbles(".chat-bubble:nth-child("+child+")").animate({ top:"0px", opacity:"1" });
}
function chatBubblesWriting(){
  chatBubbles(".chat-bubble.writing").animate({ opacity:"1" });
  chatBubbles(".chat-bubble.writing").animate({ opacity:"0" });
}
function chatBubblesOut(){
  chatBubbles(".chat-bubble").animate({ opacity:"0" });
  chatBubbles(".chat-bubble").animate({ top:"600px" });
}
function chatBubblesPlay(){
  setTimeout(function(){chatBubblesWriting();});
  setTimeout(function(){chatBubblesEnter(1);}, 1000);
  setTimeout(function(){chatBubblesEnter(2);}, 3000);
  setTimeout(function(){chatBubblesWriting();}, 4000);
  setTimeout(function(){chatBubblesEnter(3);}, 5000);
  setTimeout(function(){chatBubblesEnter(4);}, 7000);
  setTimeout(function(){chatBubblesOut();}, 9000);
}
chatBubbles(document).ready(function(){
  chatBubblesPlay();
  setInterval(function(){chatBubblesPlay();}, 9500);
});
