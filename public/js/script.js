// Owlcarousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 5,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    center: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    responsive: {
      0: {
        stagePadding: 0,
        loop: false,
        responsiveClass: true,
        dots: true,
        nav: true,
        autoHeight: true,
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  });
});


//==================================================//

// var coll = document.getElementsByClassName("collapsible");
// var exps = document.getElementsByClassName('expicon');

// var expBtn1 = document.getElementById('exp-btn-1');
// var expBtn2 = document.getElementById('exp-btn-2');
// var expBtn3 = document.getElementById('exp-btn-3');

// var expIcon1 = document.getElementById('icon-exp-b1');
// var expIcon2 = document.getElementById('icon-exp-b2');
// var expIcon3 = document.getElementById('icon-exp-b3');

// var expCont1 = document.getElementById('content1');
// var expCont2 = document.getElementById('content2');
// var expCont2 = document.getElementById('content3');

// expBtn1.addEventListener("click", function () {
//   //this.classList.toggle("active");

//   if (content1.style.display === "block") {
//     content1.style.display = "none";
//     expIcon1.className = 'fa fa-plus';
//   } else {
//     content1.style.display = "block";
//     expIcon1.className = 'fa fa-minus';
//     content2.style.display = "none";
//     expIcon2.className = 'fa fa-plus';
//     content3.style.display = "none";
//     expIcon3.className = 'fa fa-plus';

//   }
// });

// expBtn2.addEventListener("click", function () {
//   //this.classList.toggle("active");

//   if (content2.style.display === "block") {
//     content2.style.display = "none";
//     expIcon2.className = 'fa fa-plus';
//   } else {
//     content2.style.display = "block";
//     expIcon2.className = 'fa fa-minus';
//     content1.style.display = "none";
//     expIcon1.className = 'fa fa-plus';
//     content3.style.display = "none";
//     expIcon3.className = 'fa fa-plus';
//   }
// });

// expBtn3.addEventListener("click", function () {
//   //this.classList.toggle("active");

//   if (content3.style.display === "block") {
//     content3.style.display = "none";
//     expIcon3.className = 'fa fa-plus';
//   } else {
//     content3.style.display = "block";
//     expIcon3.className = 'fa fa-minus';
//     content1.style.display = "none";
//     expIcon1.className = 'fa fa-plus';
//     content2.style.display = "none";
//     expIcon2.className = 'fa fa-plus';
//   }
// });

// var coll = document.getElementsByClassName("collap");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function () {
//     console.log('OPENED');
//     this.classList.toggle("opened");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }

//==================================== FORM CONTROLLER ==========================

const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

//=============================== Slider =================================

window.sldrcnt = 0;
function slider(direct) {
  if (direct == 'prev') {
    if (window.sldrcnt != 0)
      window.sldrcnt = window.sldrcnt + 1;
  } else {
    if (Math.abs(window.sldrcnt - 1) == $('.slider div img').length)
      window.sldrcnt = 0;
    else
      window.sldrcnt = window.sldrcnt - 1;
  }
  $('.slider div').animate({ 'marginLeft': window.sldrcnt * $('.slider div img').innerWidth() }, 600);
}

//===================================== SWIPER ========================================
// let swiper = new Swiper(".mySwiper", {
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

// letswiper = new Swiper(".mySwiper", {
//   scrollbar: {
//     el: ".swiper-scrollbar",
//     hide: true,
//   },
//  });

// let swiper = new Swiper(".mySwiper", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });


function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false; }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) { //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central Arfrican Republic", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts & Nevis", "St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
const nationality = document.getElementById("nationality");
autocomplete(nationality, countries);

//===============================================================

$('#search-doc').click(() => {
  $('#doc-info').html('');
  $('#client-message-main').html('');
  $('#client-message').hide();
  var doc_code = $('#doc-id').val();
  if (doc_code) {

    if (doc_code.endsWith('App')) {
      $('#loading-doc').show();
      $.ajax({
        url: "/document",
        type: "GET",
        data: {
          code: doc_code
        },
        success: function (data) {
          $('#loading-doc').hide();
          if (typeof data !== "object") {
            $('#doc-info').html(docHtml);
            if (!data.startsWith('Failed:')) {
              $('#client-message-main').html(data);
              $('#client-message').show();
            } else {
              var msg = data.replace('Failed:', '');
              $('#client-message-main').html(msg);
              $('#client-message').show();
            }
          } else {
            $('#loading-doc').hide();
            $('#client-message').hide();
            const appDoc = data[0];

            var docHtml = '<label><b>STUDENT APPLICATION</b></label><br>'
              + '<label><b>Application ID:</b>&nbsp;' + appDoc._id + '</label>'
              + '<br>'
              + '<label><b>Student names:</b>&nbsp;' + appDoc.lname + ' ' + appDoc.fname + '</label>'
              + '<label><b>Applied faculty:</b>&nbsp;' + appDoc.faculty + '</label>'
              + '<label><b>Applied departement:</b>&nbsp;' + appDoc.department + '</label>'
              + '<label><b>Date applied:</b>&nbsp;' + appDoc.ap_date + '</label>'
              + '<br>'
              + '<label><b>Application Status:</b>&nbsp;' + appDoc.status + '</label>';
            $('#doc-info').html(docHtml);
            $('#doc-id').val('');
          }

        },
        error: function (jqXHR, exception) {
          $('#loading-doc').hide();
          $('#doc-info').html('');
          $('#client-message-main').html('The server responded an error!');
          $('#client-message').show();
        }
      });
    } else if (doc_code.endsWith('Drp')) {
      $('#loading-doc').show();
      $.ajax({
        url: "/document",
        type: "GET",
        data: {
          code: doc_code
        },
        success: function (data) {
          $('#loading-doc').hide();
          if (typeof data !== "object") {
            if (!data.startsWith('Failed:')) {
              $('#client-message-main').html(data);
              $('#client-message').show();
            } else {
              var msg = data.replace('Failed:', '');
              $('#client-message-main').html(msg);
              $('#client-message').show();
            }
          } else {
            if (data.length >= 1) {
              var document = data[0];
              var ad = data[1];

              var docHtml = '<label><b>DROP OUT APPLICATION</b></label><br>'
                + '<label><b>Document code:</b>&nbsp;' + document._id + '</label>'
                + '<label><b>Student id:</b>&nbsp;' + document.st_id + '</label>'
                + '<label><b>Student names:</b>&nbsp;' + document.names + '</label>'
                + '<label><b>Student faculty:</b>&nbsp;' + document.faculty + '</label>'
                + '<label><b>Student departement:</b>&nbsp;' + document.depart + '</label>'
                + '<label><b>Date of request:</b>&nbsp;' + document.appl_date + '</label>'
                + '<br>'
                + '<label><b>Document status:</b>&nbsp;' + document.status + '</label>';
              $('#doc-info').html(docHtml);
            } else {
              $('#client-message-main').html('There was an internal error');
              $('#client-message').show();
            }


            $('#doc-id').val('');
            $('#client-message-main').html('');
            $('#client-message').hide();
          }

        },
        error: function (jqXHR, exception) {
          $('#loading-doc').hide();
          $('#client-message-main').html('The server responded an error!');
          $('#client-message').show();
        }
      });
    } else if (doc_code.endsWith('Car')) {
      $('#loading-doc').show();
      $.ajax({
        url: "/document",
        type: "GET",
        data: {
          code: doc_code
        },
        success: function (data) {
          $('#loading-doc').hide();
          if (typeof data !== "object") {
            if (!data.startsWith('Failed:')) {
              $('#client-message-main').html(data);
              $('#client-message').show();
            } else {
              var msg = data.replace('Failed:', '');
              $('#client-message-main').html(msg);
              $('#client-message').show();
            }
          } else {
            if (data.length >= 1) {
              var document = data[0];

              var docHtml = '<label><b>STUDENT CARD APPLICATION</b></label><br>'
                + '<label><b>Student id:</b>&nbsp;' + document.st_id + '</label>'
                + '<label><b>Student names:</b>&nbsp;' + document.st_names + '</label>'
                + '<label><b>Student faculty:</b>&nbsp;' + document.faculty + '</label>'
                + '<label><b>Student departement:</b>&nbsp;' + document.department + '</label>'
                + '<label><b>Student departement:</b>&nbsp;' + document.program + '</label>'
                + '<label><b>Date of request:</b>&nbsp;' + document.app_date + '</label>'
                + '<br>'
                + '<label><b>Document status:</b>&nbsp;' + document.status + '</label>';
              $('#doc-info').html(docHtml);
            } else {
              $('#client-message-main').html('There was an internal error');
              $('#client-message').show();
            }


            $('#doc-id').val('');
            $('#client-message-main').html('');
            $('#client-message').hide();
          }

        },
        error: function (jqXHR, exception) {
          $('#loading-doc').hide();
          $('#client-message-main').html('The server responded an error!');
          $('#client-message').show();
        }
      });
    } else {
      $('#client-message-main').html('Invalid document code');
      $('#client-message').show();
    }
  } else {
    $('#client-message-main').html('Please enter document code');
    $('#client-message').show();
  }
})

//================================================================
$('#drop-submit').click(() => {

  var sid = $('#id').val();
  if (sid) {

    var namesvar = $('#d-names').val();
    var facvar = $('#d-faculty').val();
    var depvar = $('#d-department').val();
    var mailvar = $('#d-email').val();
    var whyvar = $('#d-why').val();
    var msgvar = $('#d-msg').val();

    msgvar = msgvar === undefined ? '' : msgvar;

    console.log(whyvar);

    if (namesvar && facvar && depvar && mailvar) {
      $('#loading-drop-request').show();
      $.ajax({
        url: "/drop",
        type: "POST",
        data: {
          id: sid,
          names: namesvar,
          faculty: facvar,
          department: depvar,
          email: mailvar,
          why: whyvar,
          msg: msgvar
        },
        success: function (data) {
          $('#loading-drop-request').hide();
          console.log(data);
          if (!data.startsWith('Error:')) {

            $('#client-message-main').html(data);
            $('#client-message').show();
          } else {
            var msg = data.replace('Error:', '');
            $('#client-message-main').html(msg);
            $('#client-message').show();
          }
        },
        error: function (jqXHR, exception) {
          $('#loading-drop-request').hide();
          $('#client-message-main').html('The server responded with an error!');
          $('#client-message').show();
        }
      });
    } else {
      $('#client-message-main').html('Please fill all the required fields!');
      $('#client-message').show();
    }

  } else {
    $('#client-message-main').html('You are logged in as a guest!');
    $('#client-message').show();
    $('#idModal').modal('show');
  }

});

//==============================================================================================

$('#card-ctn-btn').click(() => {
  var sid = $('#id').val();
  if (sid) {
    var names = $('#s-names').val();
    var fac = $('#s-faculty').val();
    var dep = $('#s-department').val();
    var prog = $('#s-program').val();
    var first = $("#first-card").is(':checked')

    var formdata = new FormData();
    formdata.append('id', sid);
    formdata.append('names', names);
    formdata.append('faculty', fac);
    formdata.append('department', dep);
    formdata.append('program', prog);
    formdata.append('first', first);
    var file = document.getElementById("s-profile").files[0];
    formdata.append('photo', file);

    if (names && fac && dep && prog) {
      $('#loading-card-request').show();
      $.ajax(
        {
          url: '/request/studentcard/',
          type: 'POST',
          data: formdata,
          contentType: false,
          processData: false,
          success: function (data) {
            $('#loading-card-request').hide();
            $('#client-message-main').html(data);
            $('#client-message').show();
          },
          error: function (jqXHR, exception) {
            $('#loading-card-request').hide();
            $('#client-message-main').html('The server responded with an error!');
            $('#client-message').show();
          }
        }
      );
    } else {
      $('#loading-card-request').hide();
      $('#client-message-main').html('Please fill all the required fields!');
      $('#client-message').show();
    }
  } else {
    $('#idModal').modal('show');
  }
});

//======================================== POST ASSESSMENT ====================================
$('#submit-assessment').click(() => {
  var sid = $('#id').val();
  if (sid) {
    
    var course = $('#course-select').val();
    var message = $('#ass-comment').val();

    

    var availability = $("input[type='radio'][name='availability']:checked").val();
    var overall = $("input[type='radio'][name='thought']:checked").val();
    var coverance =  $("input[type='radio'][name='topic-covered']:checked").val();
    var assistance = $("input[type='radio'][name='assistance']:checked").val();
    var behavior = $("input[type='radio'][name='behaviors']:checked").val();
    var admirance = $("input[type='radio'][name='course-liked']:checked").val();
    var sufficiency = $("input[type='radio'][name='sufficient']:checked").val();

    var params = {'st_id': sid,
                'course': course,
                'availability': availability,
                'overall': overall,
                'coverance': coverance,
                'assistance': assistance,
                'behavior': behavior,
                'admirance': admirance,
                'sufficiency': sufficiency,
                'message': message
              }

    if (course) {
      console.log('Doing assessment as '+sid);
      $('#ass-pbar').show();
      $('#client-message-main').html('');
      $('#client-message').hide();
      $.ajax(
        {
          url: '/course/assessment/',
          type: 'POST',
          data: params,
          success: function (data) {
            $('#ass-pbar').hide();
            $('#client-message-main').html(data);
            $('#client-message').show();
          },
          error: function (jqXHR, exception) {
            console.log(exception);
            $('#ass-pbar').hide();
            $('#client-message-main').html('The server responded with an error!');
            $('#client-message').show();
          }
        });

    } else {
      $('#ass-pbar').hide();
      $('#client-message-main').html('Please select course!');
      $('#client-message').show();
    }
  } else {
    $('#loading-card-request').hide();
    $('#client-message-main').html('You are logged in as a guest');
    $('#client-message').show();
  }
});

$('#ass-msg-btn').click((e)=>{
  $('#ass-msg-btn').hide();
  $('#ass-comment').css({'display':'block', 'height':'124px'});
});