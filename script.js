(function ($) {
    "use strict"


    var elements = $("#elements");

    $("#searchButton").on("click", function (e) {
        $.getJSON("https://jsonplaceholder.typicode.com/users", function (data) {

            $.each(data, function (idx, el) {
                var name = el.name,
                    username = el.username,
                    email = el.email;
                elements.append("<li>" + name + " " + username + " " + email + "</li>");
            })
        })
    });

})(jQuery);