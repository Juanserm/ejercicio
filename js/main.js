		$("#logo").on('mouseover', function () {
    $("#logo").animate({
        opacity: 0.95,
        height: "+=300"
    }, 250, function () {
        // Animation complete.
        // Show Navigation
    });
});
$("#logo").on('mouseleave',function () {
    // Hide Navigation
    $("#logo").animate({
        opacity: 1,
        height : "-=300"
    }, 250, function() {
    });
 });