const textarea = document.getElementById("input");
textarea.addEventListener("keyup", e =>{
  textarea.style.height = "62px";
  let scHeight = e.target.scrollHeight;
  textarea.style.height = `${scHeight}px`;
});

$('#input').keyup(function () {
  var characterCount = $(this).val().length,
  current = $('#current_comment'),
  maximum = $('#maximum_comment'),
  theCount = $('#the-count_comment');
  var maxlength = $(this).attr('maxlength');
  var changeColor = 0.75 * maxlength;
  current.text(characterCount);

  if (characterCount > changeColor && characterCount < maxlength) {
    current.css('color', '#FF4500');
    current.css('fontWeight', 'bold');
  }
  else if (characterCount >= maxlength) {
    current.css('color', '#B22222');
    current.css('fontWeight', 'bold');
  }
  else {
    var col = maximum.css('color');
    var fontW = maximum.css('fontWeight');
    current.css('color', col);
    current.css('fontWeight', fontW);
  }
});