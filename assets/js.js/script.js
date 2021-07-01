moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

var currentTime = moment();
console.log(currentTime)

currentTime = currentTime.startOf ("hour");
// Calculate start of day + 9 to start the day at 9am
var beforeTime = moment().startOf('day').add(9, "hours");

// Time blocks
// 9 AM 
var time1 = beforeTime.add(0, "h");
// var time1 = beforeTime;
time1 = time1.format('hh:mm A');
// Populates time formula into html
$(".block1").text(time1);
console.log(time1)

// 10 AM 
var time2 = beforeTime.add(1, "h");
// var time1 = beforeTime;
time2 = time2.format('hh:mm A');
// Populates time formula into html
$(".block2").text(time2);
console.log(time2)

// 11 AM 
var time3 = beforeTime.add(1, "h");
// var time1 = beforeTime;
time3 = time3.format('hh:mm A');
// Populates time formula into html
$(".block3").text(time3);
console.log(time3)

// 12 PM 
var time4 = beforeTime.add(1, "h");
// var time1 = beforeTime;
time4 = time4.format('hh:mm A');
// Populates time formula into html
$(".block4").text(time4);
console.log(time4)

// 1PM 
var time5 = beforeTime.add(1, "h");
// var time1 = beforeTime;
time5 = time5.format('hh:mm A');
// Populates time formula into html
$(".block5").text(time5);
console.log(time5)

// 2PM
var time6 = beforeTime.add(1, "h");
// var time1 = beforeTime;
time6 = time6.format('hh:mm A');
// Populates time formula into html
$(".block6").text(time6);
console.log(time6)

// 3PM
var time7 = beforeTime.add(1, "h");
// var time1 = beforeTime;
time7 = time7.format('hh:mm A');
// Populates time formula into html
$(".block7").text(time7);
console.log(time7)

// 4PM
var time8 = beforeTime.add(1, "h");
// var time1 = beforeTime;
time8 = time8.format('hh:mm A');
// Populates time formula into html
$(".block8").text(time8);
console.log(time8)

// 5PM
var time9 = beforeTime.add(1, "h");
// var time1 = beforeTime;
time9 = time9.format('hh:mm A');
// Populates time formula into html
$(".block9").text(time9);
console.log(time9)

// The function that will change the colors on the page based on time
function testTime() {
    time1 = moment().startOf('day').add(9, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time1)) {
        $(".form9").addClass("past");
    } else if (currentTime.isBefore(time1)) {
        $(".form9").addClass("future");
    } else if (currentTime.isSame(time1)) {
        $(".form9").addClass("present")
    }
    // now we need to repeat this for all other times in the day. Start with 10AM
    time2 = moment().startOf('day').add(10, "hours")
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time2)) {
        $(".form10").addClass("past");
    } else if (currentTime.isBefore(time2)) {
        $(".form10").addClass("future");
    } else if (currentTime.isSame(time2)) {
        $(".form10").addClass("present")
    }
    // 11AM
    time3 = moment().startOf('day').add(11, "hours")
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time3)) {
        $(".form11").addClass("past")
    } else if (currentTime.isBefore(time3)) {
        $(".form11").addClass("future")
    } else if (currentTime.isSame(time3)) {
        $(".form11").addClass("present")
    }
    // 12PM 
    time4 = moment().startOf('day').add(12, "hours")
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time4)) {
        $(".form12").addClass("past")
    } else if (currentTime.isBefore(time4)) {
        $(".form12").addClass("future")
    } else if (currentTime.isSame(time4)) {
        $(".form12").addClass("present")
    }
    // 1PM
    time5 = moment().startOf('day').add(13, "hours")
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time5)) {
        $(".form1").addClass("past") 
    } else if (currentTime.isBefore(time5)) {
        $(".form1").addClass("future")
    } else if (currentTime.isSame(time5)) {
        $(".form1").addClass("present")
    }
    // 2PM
    time6 = moment().startOf('day').add(14, "hours")
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time6)) {
        $(".form2").addClass("past")
    } else if (currentTime.isBefore(time6)) {
        $(".form2").addClass("future")
    } else if (currentTime.isSame(time6)) {
        $(".form2").addClass("present")
    }
    // 3PM
    time7 = moment().startOf('day').add(15, "hours")
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time7)) {
        $(".form3").addClass("past")
    } else if (currentTime.isBefore(time7)) {
        $(".form3").addClass("future")
    } else if (currentTime.isSame(time7)) {
        $(".form3").addClass("present")
    }
    // 4PM
    time8 = moment().startOf('day').add(16, "hours")
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time8)) {
        $(".form4").addClass("past")
    } else if (currentTime.isBefore(time8)) {
        $(".form4").addClass("future")
    } else if (currentTime.isSame(time8)) {
        $(".form4").addClass("present")
    }
    // 5PM 
    time9 = moment().startOf('day').add(17, "hours")
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time9)) {
        $(".form5").addClass("past")
    } else if (currentTime.isBefore(time9)) {
        $(".form5").addClass("future")
    } else if (currentTime.isSame(time9)) {
        $(".form5").addClass("present")
    }
}
testTime();

// create var of all the hours in the day 
var hours = [9, 10, 11, 12, 1, 2, 3, 4, 5];

for (var i = 0; i < hours.length; i++) {
    var dataHour = localStorage.getItem(hours[i]);
    $(".form" + hours[i]).val(dataHour);
}


// Event listener to save to local stroage
$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("This worked");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});
