

function myFunction() {
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  var d = new Date();
  var n = month[d.getMonth()];
  document.getElementById("currentDate").innerHTML = n;
}


  myFunction();

function myFunctionII() {
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  var d = new Date();
  var n = month[d.getMonth()];
  document.getElementById("currentDate2").innerHTML = n;
}




  myFunctionII();






function send() {
                var responses = document.getElementsByName("response");
                if (responses[0].checked == true) {
                    window.open('page-A.html');
                } else if (responses[1].checked == true) {
                    window.open('page-B.html');
                } else if (responses[2].checked == true) {
                    window.open('page-C.html');
                } else {
                    // no checked
                    var msg = alert('Please select an option!');
                    document.getElementById('msg').innerHTML = msg;
                    return false;
                }
                return true;
            }

            function reset_msg() {
                document.getElementById('msg').innerHTML = '';
            }

