const BtnAdd = document.querySelector(".btn-add");

BtnAdd.addEventListener("click", AddNew);

function AddNew() {
  const DivContainer = document.getElementById("div-container");
  const newDiv = document.createElement("div");
  console.log("add");
  newDiv.classList.add("div-shadow");
  DivContainer.appendChild(newDiv);
  const newContent = document.createTextNode("test");
  newDiv.appendChild(newContent);
}