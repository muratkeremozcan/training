$('button').on('click', function() {
    $.ajax('/cities/deals', {
        success: function(result) {
            $.each(result, function(index, city) {
                console.log(city);
            });
        }
    });
});