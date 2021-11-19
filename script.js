const exampleCheck1 = document.querySelector("#exampleCheck1");
const exampleInputPassword1 = document.querySelector("#exampleInputPassword1");
console.log(exampleInputPassword1)

exampleCheck1.onclick = () => {
  if( exampleInputPassword1.type === "password") {
    exampleInputPassword1.type = "text"
  } else {
    exampleInputPassword1.type = "password"
  }
}
