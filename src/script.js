$(document).ready(function () {
  $("#para1").hide();
  $("#para2").hide();
  $("#para3").hide();
  $("#para4").hide();
  $("#para5").hide();
  $("#para6").hide();
  $("#button").click(function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var education = $("#education :selected").text();
    var gender = $("input[type='radio'][name='gender']:checked").val();
    var hobbies = $('input[name="hobby"]:checked').serialize();
    console.log(hobbies);
    console.log(gender);
    console.log(name);
    console.log(education);
    var comment = document.getElementById("commentbox").value;
    console.log(comment);
    if (name == "") {
      $("#para1").show().css("color", "red");
      $("#name").css("border", "1px solid red");
    } else if (email == "") {
      $("#para2").show().css("color", "red");
      $("#email").css("border", "1px solid red");
    } else if (education == "") {
      $("#para3").show().css("color", "red");
      $("#education").css("border-color", "red");
    } else if (!(gender == "Male" || gender == "Female")) {
      $("#para4").show().css("color", "red");
    } else if (hobbies == "") {
      $("#para5").show().css("color", "red");
    } else if (comment == "") {
      $("#para6").show().css("color", "red");
      $("#commentbox").css("border", "1px solid red");
    } else if (
      name == "" &&
      email == "" &&
      education == "" &&
      gender == "" &&
      hobbies == "" &&
      comment == ""
    ) {
      $("#para1").show().css("color", "red");
      $("#para2").show().css("color", "red");
      $("#para3").show().css("color", "red");
      $("#para4").show().css("color", "red");
      $("#para5").show().css("color", "red");
      $("#para6").show().css("color", "red");
    } else if (Number.isInteger(parseInt(name))) {
      alert("name can not be a number");
    }
  });
  $("#email").change(function () {
    var email = document.getElementById("email").value;

    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
      alert("invalid email id");
    }
  });
});
