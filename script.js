const infinitescroll = document.getElementById('infinite-scroll-list');
var next =1;
function loadNextSet(){
    for(let i=0;i<20;i++)
    {
        var li = document.createElement('li');
        li.innerText = "List Element" +next++;
        infinitescroll.appendChild(li);
    }
}
loadNextSet();
infinitescroll.addEventListener('scroll',(e)=>{
  if(infinitescroll.scrollTop  + infinitescroll.clientHeight  >= infinitescroll.scrollHeight)
  {
    loadNextSet();
  }
});



// infinitescroll.scrollTop: This represents the vertical scroll position of the infinitescroll element from the top. 
//                            When you scroll down, this value increases. When you're at the top, it's usually 0.

// infinitescroll.clientHeight: This represents the visible height of the infinitescroll element. It is the height of the part of the element that is currently visible in the viewport.

// infinitescroll.scrollHeight: This represents the total scrollable height of the infinitescroll element, including the height that is not visible (i.e., the height of the content that extends beyond the viewport).

// So, when infinitescroll.scrollTop + infinitescroll.clientHeight is greater than or equal to infinitescroll.scrollHeight, it means that you have scrolled to the bottom of the element or very close to it. 

//so scrollTop when we scroll down is 200px as written in css and clientHeight is also 200px so 400>200 so load next