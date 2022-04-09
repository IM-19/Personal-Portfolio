const sendEmail = () => {
  var subject = document.getElementById("emailSubject").value;
  const btn = document.getElementById("button");
  var message = document.getElementById("emailMessage").value;
  var inputs = document.querySelectorAll("input");
  var url =
    "mailto:ismat-maarouf@hotmail.com" +
    "?subject=" +
    subject +
    "&body=" +
    message;
  window.location = url;
  btn.addEventListener("click", () => {
    inputs.forEach((input) => (input.value = ""));
  });
};
