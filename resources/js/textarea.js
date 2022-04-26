const textarea = document.getElementById("input");
textarea.addEventListener("keyup", e =>{
  textarea.style.height = "62px";
  let scHeight = e.target.scrollHeight;
  textarea.style.height = `${scHeight}px`;
});