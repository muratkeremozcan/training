var Vacation = { // this is like a class
    getPrice: function(location) { // this is like a method of that class
        var promise = $.ajax('/vacation/prices', {
            data: { q: location },
            success: function(result) {
                $('.price').text(result.price);
            }
        });
        return promise;

    }




}