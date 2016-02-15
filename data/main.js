$('div,span,img,a').each(function (index, element) {
    var title = 'test',
        titleId = parseInt(Math.random() * 100000),
        tiltleDiv = $('<div class="titleDiv" style="display:none" titleId="' + titleId + '">' + title + '</div>');
  $('#MainBodyContent').append(tiltleDiv);
    $(this).attr({
        'title': '',
        'original-title': title,
        'titleId': titleId
    }).contextMenu(tiltleDiv, {
        triggerOn: 'hover',
        displayAround: 'trigger',
         position: 'bottom'
    });
});

