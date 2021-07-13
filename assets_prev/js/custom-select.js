jQuery("[data-select]").each(function () {
  var item = jQuery(this),
    selectDrop = item.next().hide(),
    linkItems = selectDrop.find("a");

  item.click(function (e) {
    e.preventDefault();
    $(this).hasClass("custom-select-active")
      ? $(this).removeClass("custom-select-active").next().slideUp(200)
      : $(this).addClass("custom-select-active").next().slideToggle(200);
  });

  linkItems.on("click", function (e) {
    item.html(jQuery(this).html());
    selectDrop.slideUp(200);
    item.removeClass("custom-select-active").addClass("selected");

    selectDrop.find("li").removeClass("custom-select-active");
    jQuery(this).parent().addClass("custom-select-active");
  });

  if (selectDrop.children().hasClass("custom-select-active")) {
    item
      .html(jQuery(this).next().find(".custom-select-active a").html())
      .addClass("selected");
  }
  
  $('html').on('click touchstart pointerdown MSPointerDown', function(e) {
        var target = $(e.target);

        if(!(target.closest(item).length) && !(target.closest(item.next()).length)) {
            setTimeout (function() {
                $(item).removeClass('custom-select-active').next().slideUp(200);
            }, 200)
        }
    });
});
