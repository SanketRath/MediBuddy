function setAlarm() {
  var alarmTimeInput = document.getElementById("time").value;
  var alarmTime = new Date(alarmTimeInput);
  var now = new Date();

  var timeUntilAlarm = alarmTime - now;

  if (timeUntilAlarm > 0) {
    setTimeout(function() {
      alert("Alarm! Wake up!");
    }, timeUntilAlarm);
  } else {
    alert("Please select a future time for the alarm.");
  }
}