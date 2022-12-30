// *Smooth scroll

export const smoothScroll = $("a.navigation__link").on("click", function (e) {
  let $anchor = $(this);
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $($anchor.attr("href")).offset().top - 100,
      },
      {
        duration: 1500,
        specialEasing: {
          width: "linear",
          height: "easeInOutCubic",
        },
      }
    );
  e.preventDefault();
});
