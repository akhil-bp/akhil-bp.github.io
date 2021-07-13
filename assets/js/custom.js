// toggle list vs card view for courses
$(".btn-switch_grid-list_view").on("click", function() {
	$(".btn-switch_grid-list_view").removeClass("selected");
	$(this).addClass("selected");
	if ($(this).hasClass("option--grid")) {
		$(".results-section").attr("class", "results-section results--grid");
	} else if ($(this).hasClass("option--list")) {
		$(".results-section").attr("class", "results-section results--list");
	}
});

// toggle list vs card view for calendar
$(".btn-switch--calendar_grid-list_view").on("click", function() {
	$(".btn-switch--calendar_grid-list_view").removeClass("selected");
	$(this).addClass("selected");
	if ($(this).hasClass("option--grid")) {
		$(".results-section").attr("class", "results-section results--grid");
	} else if ($(this).hasClass("option--list")) {
		$(".results-section").attr("class", "results-section results--list");
	} else if ($(this).hasClass("option--calendar")) {
		$(".results-section").attr("class", "results-section event--calendar");
	} 
});


// Event Calendar
var defaultTheme = getRandom(4);
var today = new Date();
var active_events = [];
var week_date = [];
var curAdd, curRmv;

function getRandom(a) {
    return Math.floor(Math.random() * a);
}

function getWeeksInMonth(a, b) {
    var c = [], d = new Date(b, a, 1), e = new Date(b, a + 1, 0), f = e.getDate();
    var g = 1;
    var h = 7 - d.getDay();
    while (g <= f) {
        c.push({
            start: g,
            end: h
        });
        g = h + 1;
        h += 7;
        if (h > f) h = f;
    }
    return c;
}

$('[data-go*="#"]').on("click", function(a) {
    a.preventDefault();
    var b = $(this).data().go;
    if ("#top" === b) {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return;
    } else var c = $(b)[0].offsetTop - $("header")[0].offsetHeight - 10;
    $("html, body").animate({
        scrollTop: c
    }, 500);
});

$('#search-multiple').select2();
$('.search-select').select2();

$('#no-limit .create-video-select').select2({
    multiple: "multiple",
});


$(".flatpickr").flatpickr({
    enableTime: true,
    dateFormat: "Y-m-d H:i",
});

$(".event-calender-flatpickr").flatpickr({
    inline: true,
    mode: "range",
    dateFormat: "Y-m-d",
    defaultDate: ["2021-3-15", "2021-3-19"],
    onDayCreate: function(dObj, dStr, fp, dayElem){
        // Utilize dayElem.dateObj, which is the corresponding Date

        // dummy logic
        if (Math.random() < 0.15)
            dayElem.innerHTML += "<span class='event'></span>";

        else if (Math.random() > 0.85)
            dayElem.innerHTML += "<span class='event busy'></span>";
    }
});

$('.same-height').matchHeight();