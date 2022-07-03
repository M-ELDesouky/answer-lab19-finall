/***************start change button********/
const button = document.querySelector("button"); ///select element
button.onclick = function (change_button) {
  if (button.innerText == "Show Password") {
    button.innerText = "Hide Password";
    document.getElementById("input").type = "text";
  } else {
    document.getElementById("input").type = "Password";
    button.innerText = "Show Password";
  }
};

document.getElementById("input").onchange = function () {
  if (this.value.length < 5) {
    this.style.border = "2px solid red";
  } else {
    this.style.border = "2px solid green";
  }
};
/***************End change button********/

/*************start validate form ***********/
document.getElementById("pass").onchange = function () {
  if (this.value.length < 5) {
    document.querySelector("form p").textContent = "password week";
    document.querySelector("form p").className = "alert alert-danger";
  } else {
    document.querySelector("form p").textContent = "password strong";

    document.querySelector("form p").className = "alert alert-success";
  }
};
/*************end validate form *********/

/*************start form lef&table right***********/

document.querySelector(".col-sm form button ").onclick = function () {
  let target = event.target;
  let input = event.target.previousElementSibling;
  if (input.value.length > 0) {
    for (let input of input) {
      let tr = document.createElement("td");
      tr.innerText = input.value;
      document.querySelector(".box-preview tbody tr ").append(tr);
    }
  } else {
    alert("please fill input");
  }
};
/*************end form lef&table right***********/
/**************  Start swap button photo /************ */

