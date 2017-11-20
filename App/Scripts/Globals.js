const GAMEBOARD = '#game-field';
const PLAYER = '#player';
const ITEMBAR = '#items-bar';
const HUD = '#hud';

$(function () {
    // Item list toggle
    $('#items-collapse').on('click', toggleItemList);
});

var toggleItemList = function (e) {
    e.preventDefault();
    $('#items-bar').slideToggle(300);
}