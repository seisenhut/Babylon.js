"use strict";

var BABYLON = BABYLON || {};

(function () {
    BABYLON._Animatable = function (target, from, to, loop, speedRatio, onAnimationEnd, name) {
        this.target = target;
        this.fromFrame = from || 0;
        this.toFrame = to;
        this.loopAnimation = loop;
        this.speedRatio = speedRatio ? speedRatio : 1.0;
        this.onAnimationEnd = onAnimationEnd;
		this.name = name;
		
		if (this.name) {
			var animations = this.target.animations;
			var frameHigh = 0;
			for (var index = 0; index < animations.length; index++) {
				if (this.name === animations[index].name) {
					frameHigh = Math.max(frameHigh, animations[index].getFrameCount() - 1);
				}
			}
			this.toFrame = frameHigh;
		}
    };
    
    // Members
    BABYLON._Animatable.prototype.target = null;
    BABYLON._Animatable.prototype.animationStarted = false;
    BABYLON._Animatable.prototype.loopAnimation = false;
    BABYLON._Animatable.prototype.fromFrame = 0;
    BABYLON._Animatable.prototype.toFrame = 100;
    BABYLON._Animatable.prototype.speedRatio = 1.0;
	BABYLON._Animatable.prototype.name = null;
    
    // Methods
    BABYLON._Animatable.prototype._animate = function (delay) {
        if (!this._localDelayOffset) {
            this._localDelayOffset = delay;
        }

        // Animating
        var running = false;
        var animations = this.target.animations;
        for (var index = 0; index < animations.length; index++) {
			if (!this.name || this.name === animations[index].name) {
				running = running || animations[index].animate(this.target, delay - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this.speedRatio);
			}
        }

        if (!running && this.onAnimationEnd) {
            this.onAnimationEnd();
        }

        return running;
    };
})();
