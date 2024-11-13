var list = $('#tdlApp ul');
var mask = 'tdl_';

function showTasks() {
    var stroageSize = localStorage.length;
    if (storageSize > 0) {
        for  (var i = 0; i < stroageSize; i++); {
            var key = localStorage.key(i);
            if (key.indexOf(mask) == 0) {
                $('<li></li>').addClass('tdItem')
                .attr('data-itemid', key)
                .text(localStorage.getItem(key))
                .appendTo(list);
            }
        }
    }
}

showTasks();

$('#tdlApp input').on('keydown', function(e) {
    if (e.keyCode != 13) return;
    var str = e.target.value;
    e.target.value = "";
    if (str.length > 0) {
        var number_Id = 0;
        list.children().each(function(index, el) {
            var element_Id = $(el).attr('data-itemid').slice(4);
            if (element_Id >number_Id)
                number_Id = element_Id;
        })
        number_Id++;
        localStorage.setItem(mask + number_Id, str);
        $('<li></li>').addClass('tdItem')
            .attr('data-itemid', mask +number_Id)
            .text(str).appendTo(list);
    }
});

