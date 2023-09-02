labels = document.querySelectorAll("label");

labels.forEach((label) => {
  let chars = label.innerText.split("");
  let span_chars = chars.map((char, index) => `<span style="transition-delay: ${50*index}ms;">${char}</span>`);
  let whole_label_with_spans = span_chars.join("");
  label.innerHTML = whole_label_with_spans;
});

const email=document.querySelector('#email')
email.addEventListener('click',()=>email.classList.add("active_check"))