const textarea = document.getElementById("codeintrans");
textarea.addEventListener("keyup", e =>{
  textarea.style.height = "63px";
  let scHeight = e.target.scrollHeight;
  textarea.style.height = `${scHeight}px`;
});

const textareaout = document.getElementById("codeouttrans");
textareaout.addEventListener("ke", e =>{
  textareaout.style.height = "5px";
  let scHeight = e.target.scrollHeight;
  textareaout.style.height = `${scHeight}px`;
});