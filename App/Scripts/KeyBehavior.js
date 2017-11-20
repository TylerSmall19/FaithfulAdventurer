$(function() {
    $(document).on('keyup', keyHandler);
    $(document).on('mousedown', mouseHandler);
});

function mouseHandler(e) {
    if ($.inArray('hide-cursor', e.target.classList) > -1) {
        setCursorType('none');
    }
}

function keyHandler(e) {
    if (e.key == 'Escape') {
        escapeBehavior();
    }
}

function escapeBehavior() {
    setCursorType('default');
}

function toggleCursorOnOff() {
    var cursorStyle = $(GAMEBOARD).css('cursor') == 'none' ? 'default' : 'none';
    setCursorType(cursorStyle);
}

function setCursorType(type) {
    $(GAMEBOARD).css('cursor', type);
}