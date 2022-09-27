export class Character {

  private name: string;
  private strength: number;
  private defense: number;
  private health: number
  private MAX_HEALTH = 100

  constructor(
    name: string,
    strength: number,
    defense: number
  ) {
    this.name = name;
    this.strength = strength;
    this.defense = defense
    this.health = this.MAX_HEALTH
  }

  attack = (enemy: Character) => {

    const damage = this.strength - enemy.defense

    if (damage > 0) {
      enemy.health -= damage
    }
  }

  restore = () => {
    this.health = this.MAX_HEALTH
  }
}