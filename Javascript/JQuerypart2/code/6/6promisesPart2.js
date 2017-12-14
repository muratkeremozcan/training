// Calling 2 promises one after the next
// -------------------------------------
// The problem with this approach is that the AJAX response won't always come in
// the exact same order, so it won't neccessarily always look the same in the site.
$('button').on('click', function() {
    var loc = $(this).parent().data('loc');
    var resultsDiv = $(this).parent().find('.results').empty();
    Weather.today(loc).done(function(weatherResult) {
        resultsDiv.append(weatherResult);
    });
    City.find(loc).done(function(cityResult) {
        resultsDiv.append(cityResult);
    });
});
// To resolve this issue we use:
// ---------------------
// $.when() and $.then()
// ---------------------
// $.when(<promise1>, <promise2>...) <-- This can't be an array, only promises separated by commas
// .then(function(promise1Data, promise2Data) {}); <-- Callback data is in the same order as promises
$('button').on('click', function() {
    var loc = $(this).parent().data('loc');
    var resultsDiv = $(this).parent().find('.results').empty();
    $.when(Weather.today(loc), City.find(loc)).then(function(weatherResult, cityResult) {
        resultsDiv.append(cityResult);
        resultsDiv.append(weatherResult);
    });
});