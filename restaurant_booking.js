let booking = document.getElementById("booking")
// let date = document.getElementById("date")
// let time = document.getElementById("time")
// let slot = document.getElementById("slot")
// let email = document.getElementById("email")
// let prson = document.getElementById("person")
// let mobile = document.getElementById("mobile")
// let user = document.getElementById("user")
let Time1 = document.getElementById("Time1")
let Slot1 = document.getElementById("Slot1")
let Slot = document.getElementById("Slot")






function select () {

    if (booking.value == "0"){
      Slot1.style.display = "none"   
      Time1.style.display = "none"
      }
      else if (booking.value == "1"){
        Slot1.style.display = "none"
        Time1.style.display = "none"
      }
      else if (booking.value == "2"){
        Slot1.style.display = "block"
      }
      else if (booking.value == "3"){
        Time1.style.display = "block"
      }
}
function  checkreq(anything) {
  var txt = document.createElement("SPAN");
  txt.innerHTML = "please fill this input";

  if (anything.value == "") {
    // console.log(anything.parentNode);
    console.log(this);
    console.log(event);
    if (anything.nextSibling == null) {
      anything.parentNode.appendChild(txt);
  }
} else {

  if (anything.nextSibling != null) {
      if (anything.nextSibling.nodeName == "SPAN") {
          anything.nextSibling.remove()
      }
  }
}
}


     