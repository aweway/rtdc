const exampleCheck1 = document.querySelector("#exampleCheck1");
const exampleInputPassword1 = document.querySelector("#exampleInputPassword1");
console.log(exampleInputPassword1)

exampleCheck1.onclick = () => {
  if( exampleInputPassword1.type === "password") {
    exampleInputPassword1.type = "text"
  } else {
    exampleInputPassword1.type = "password"
  }
};

// const forget-password = document.querySelector("#forget-password");

// forget-password.onclick = () => {
  
// }

// const llc-video-poster = document.querySelector("#llc-video-poster");
// llc-video-poster.autoplay = true;

var vid = document.getElementById("llc-video-poster");
function enableAutoplay() { 
  vid.autoplay = true;
  vid.load();
}