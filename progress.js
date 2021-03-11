$(function () {
    const progressBar = $("#my-progress-bar"); 
    let percent = 0; 
    $("#button1").click(function () {
        percent = percent + 1; 
        progressBar.width(percent +'%') 
    });
    $("#button2").click(function () {
        percent = percent + 3; 
        progressBar.width(percent +'%') 
    });
    $("#button3").click(function () {
        percent = percent + 7; 
        progressBar.width(percent +'%') 
    });
});