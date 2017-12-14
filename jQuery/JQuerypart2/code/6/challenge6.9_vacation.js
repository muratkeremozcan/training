var Vacation = {
    getPrice: function(location) {
        var promise = $.Deferred();
        $.ajax('/vacation/prices', {
            data: { q: location },
            success: function(result) {
                promise.resolve(result.price);
            }
        });
        return promise;
    }
}