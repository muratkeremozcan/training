$('button').on('click', function() {
    $.ajax('/cities/deals', {
        success: function(result) {
            $.each(result, function(index, dealItem) {
                var dealElement = $('deal-' + index); // generic index identifier from the html
                dealElement.find('.name').html(dealItem.name);
                dealElement.find('price').html(dealItem.price);

            });
        }
    });
});