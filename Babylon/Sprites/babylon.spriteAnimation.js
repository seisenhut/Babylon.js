"use strict";

var BABYLON = BABYLON || {};

(function () {
    BABYLON.SpriteAnimation = function (name, cellFrom, cellTo, loop) {
        this.name = name;
        this.cellFrom = cellFrom;
        this.cellTo = cellTo;
        this.loop = loop;
    };
    
    BABYLON.SpriteAnimation.prototype.cellFrom = 0;
    BABYLON.SpriteAnimation.prototype.cellTo = 0;
    BABYLON.SpriteAnimation.prototype.loop = false;
    
})();