mybutton = document.getElementById("myBtn");
//
var popupmain = document.getElementById("popupmain");
var defaultp = document.getElementById("defaultp");

defaultp.addEventListener("click", (e) => {
  e.preventDefault();
});

const func = () => {
  popupmain.style.display = "block";
};
const submitFunc = () => {
  popupmain.style.display = "none";
};
const submitIdFunc = () => {
  popupmain.style.display = "none";
};
const myTimeout = setTimeout(func, 30000);
submitFunc();
submitIdFunc();

//
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
// validate email
function ValidateEmail(input) {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    alert("Valid email address!");

    document.form1.text1.focus();

    return true;
  } else {
    alert("Invalid email address!");

    document.form1.text1.focus();

    return false;
  }
}