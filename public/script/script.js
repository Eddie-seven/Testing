setTimeout(()=>{
document.querySelector("button").className="b1"
}, 3000 )

function size( el ) {
const v = el.scrollY
const h = el.scrollHeight
console.log(typeof v, v)
const one = document.querySelector("#one")
if ( +v > 1 ){
  one.className="none"
  console.log("none")
} else {
  one.className="effect"
}
}