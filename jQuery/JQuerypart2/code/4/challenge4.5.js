$('button').on('click', function() {
    $.getJSON('/cities/deals', function(result) { // getJSON is a shorthhand for an ajax call with succcess (for a result injson)
        $.each(result, function(index, dealItem) {
            var dealElement = $('.deal-' + index);
            dealElement.find('.name').html(dealItem.name);
            dealElement.find('.price').html(dealItem.price);
        });
    });
});