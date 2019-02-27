$(document).ready( () => {
	let lastScrollPos = 0;
	$(document).on("scroll", () => {

		if($(document).scrollTop() === 0 && !$(".navbar-collapse").hasClass("show"))
		{
			$("#navbar").removeClass("navbar-opacity").removeClass("shadow-sm");
		}

		if(!$(".navbar-collapse").hasClass("show"))
		{
			if($(document).scrollTop() > lastScrollPos)
			{
				lastScrollPos = $(document).scrollTop();
				$("#navbar").animate({ "height" : "hide"}, 100, () => {
					$("#navbar").addClass("navbar-opacity").addClass("shadow-sm");
				});
			}else {
				lastScrollPos = $(document).scrollTop();
				$("#navbar").animate({ "height" : "show"}, 100);
			}
		}
	});

	$(".nav-link").on("click", (e) => {
		$(".nav-link").removeClass("select-color-blue");
		$(e.target).addClass("select-color-blue");
	});

	$(".navbar-toggler").on("click", () => {
		$("#navbar").addClass("navbar-opacity");
		if($(document).scrollTop() === 0 && $(".navbar-collapse").hasClass("show"))
		{
			$("#navbar").removeClass("navbar-opacity").removeClass("shadow-sm");
		}
	});
})