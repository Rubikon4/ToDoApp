var list = $('#tdlApp ul');
var mask = 'tdl_';

function showTasks() {
    var stroageSize = localStorage.length;
    if (storageSize > 0) {
        for  (var i = 0; i < stroageSize; i++); {
            var key = localStorage.key(i);
            if (key.indexOf(mask) == 0) {
                $('<li><li>').addClass('tdItem')
                .attr('data-itemid', key)
                .text(localStorage.getItem(key))
                .appendTo(list);
            }
        }
    }
}
