/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict";  // Operate in Strict mode such that variables must be declared before used!

function MonsterSet() {
    this.mSet = [];
    this.hasShaken = [];
    GameObject.call(this);
}
gEngine.Core.inheritPrototype(MonsterSet, GameObjectSet);

MonsterSet.prototype.delete = function (camera) {
    var i;
    for (i = 0; i < this.mSet.length; i++) {
        if (this.mSet[i].shouldDelete() || !this.mSet[i].isObjectInViewport(camera)) {
            this.mSet.splice(i, 1);
            this.hasShaken.splice(i, 1);
        }
    }
};

MonsterSet.prototype.addOther = function () {
    this.hasShaken.push(false);
};

MonsterSet.prototype.pixelTouches = function (hero, bSet, h) {
    var bulletSet = bSet.getSet();
    var i, j;
    for (i = 0; i < this.mSet.length; i++) {
        if (this.hasShaken[i]) continue;
        if (this.mSet[i].pixelTouches(hero, h)) {
            hero.hitByMonster(10);
            // hero.shake(0.2, 0.2, 10, 100);
        }
    }
    // for (i = 0; i < this.mSet.length; i++) {
    //     for (j = 0; j < bulletSet.length; j++) {
    //         if (this.hasShaken[i]) continue;
    //         if (this.mSet[i].pixelTouches(bulletSet[j].getSnow(), h)) {
    //             this.mSet[i].shake(0.2, 0.2, 10, 100);
    //             this.hasShaken[i] = true;
    //             // bulletSet[j].headHit();
    //         }
    //     }
    // }

};


