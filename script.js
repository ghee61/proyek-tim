//https://www.pexels.com/photo/photo-of-woman-taking-picture-1545980/
//https://www.pexels.com/photo/man-wearing-blue-crew-neck-t-shirt-2379005/
//https://www.pexels.com/photo/woman-wearing-brown-bucket-cap-732425/
//https://www.pexels.com/photo/woman-s-in-red-sari-portrait-764529/
//https://www.pexels.com/photo/woman-standing-beside-fence-2118052/

function submitCity() {
  let s = document.getElementById("kota").value;
  let t = document.getElementById("kota-2");
  let arr = [];
  t.value = s;
  document.querySelector(".box-1").style.display = "none";
  document.querySelector(".box-2").style.display = "block";
  document.querySelector(".box-3").style.display = "block";
  document.querySelector("footer").style.display = "block";
}

function calcMortgage() {
  let pv = Number(document.querySelector("#nilai-rumah").value);
  let downPayment = Number(document.querySelector("#uang-muka").value);
  let n = Number(document.querySelector("#tenor").value);
  let r = 0.015;
  let result = (pv - downPayment) * Math.pow((1 + r),n);
  result = result / n / 12;
  result = Math.ceil(result);
  result = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  result = "Rp" + result;
  document.querySelector("#calc-result").innerHTML = result;
  let str = "cicilan rumah per bulan:"
  document.querySelector("#text-result").innerHTML = str;
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";
}