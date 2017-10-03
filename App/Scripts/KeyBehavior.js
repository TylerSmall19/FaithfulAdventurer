$(function() {
    console.log('Loaded!');
    $(document).on('keyup', keyHandler);
    $(document).on('mousedown', mouseHandler);
});

function mouseHandler(e) {
    setCursorType('none');
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