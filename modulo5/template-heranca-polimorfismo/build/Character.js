"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
class Character {
    constructor(name, strength, defense) {
        this.MAX_HEALTH = 100;
        this.attack = (enemy) => {
            const damage = this.strength - enemy.defense;
            if (damage > 0) {
                enemy.health -= damage;
            }
        };
        this.restore = () => {
            this.health = this.MAX_HEALTH;
        };
        this.name = name;
        this.strength = strength;
        this.defense = defense;
        this.health = this.MAX_HEALTH;
    }
}
exports.Character = Character;
//# sourceMappingURL=Character.js.map