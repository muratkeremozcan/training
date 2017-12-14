var Vacation = {
    getPrice: function(location) {
        var promise = $.ajax('/vacation/prices', {
            data: { q: location },
            success: function(result) {
                $('.price').text(result.price);
            }
        });
        return promise;

    }




}