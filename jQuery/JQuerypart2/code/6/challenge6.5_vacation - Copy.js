var Vacation = {
    getPrice: function(location) {
        var promise = $.Deferred();
        $.ajax('/vacation/prices', {
            data: { q: location },
            success: function(result) {
                promise.resolve(result.price);
            },
            error: function() {
                var error = 'invalid location';
                promise.reject(error);
            }
        });

        return promise;
    }
}