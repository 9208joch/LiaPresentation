document.addEventListener("DOMContentLoaded", function () {

    const mobileMenu = document.getElementById("mobileMenu");
    const mobileLinks = document.querySelectorAll(".lia-mobile-link");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            const bootstrapCollapse =
                bootstrap.Collapse.getInstance(mobileMenu);

            if (bootstrapCollapse) {
                bootstrapCollapse.hide();
            }

        });

    });

});