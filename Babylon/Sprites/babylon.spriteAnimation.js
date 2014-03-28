"use strict";

var BABYLON = BABYLON || {};

(function () {
    BABYLON.SpriteAnimation = function (name, cellFrom, cellTo, loop, delay) {
        this.name = name;
        this.cellFrom = cellFrom;
        this.cellTo = cellTo;
        this.loop = loop;
		this.delay = delay;
    };
    
    BABYLON.SpriteAnimation.prototype.cellFrom = 0;
    BABYLON.SpriteAnimation.prototype.cellTo = 0;
    BABYLON.SpriteAnimation.prototype.loop = false;
    BABYLON.SpriteAnimation.prototype.delay = 1000 / 30;
})();