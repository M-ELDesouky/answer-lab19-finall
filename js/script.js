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
function add(){
  let table = document.getElementById("table");
  let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;
  let price = document.getElementById("price").value;
  let brand = document.getElementById("brand").value;
  var tr = document.createElement("tr");
  var td1 = tr.appendChild(document.createElement("td"));
  var td2 = tr.appendChild(document.createElement("td"));
  var td3 = tr.appendChild(document.createElement("td"));
  var td4 = tr.appendChild(document.createElement("td"));
  td1.innerHTML = name;
  table.appendChild(tr);
  td2.innerHtml = address;
  table.appendChild(tr);
  td3.innerHtml = price;
  table.appendChild(tr);
  td4.innerHtml = brand;
  table.appendChild(tr);
}
/*************end form lef&table right***********/
/**************  Start swap button photo /************ */
