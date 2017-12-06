window.addEventListener("DOMContentLoaded", function(e){
  document.querySelector("#c").addEventListener("click",()=>{
    document.querySelector("#a").setMessage(0);
    document.querySelector("#b").setMessage(0);
  });
}, false);
