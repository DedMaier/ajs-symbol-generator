export default class Team {
  constructor() {
    this.members = new Set([
      { name: 'Bowman' },
      { name: 'Swordsman' },
      { name: 'Magician' },
      { name: 'Daemon' },
      { name: 'Bowman' },
    ]);
  }

  * [Symbol.iterator]() {
    const charList = Array.from(this.members);

    for (const char of charList) {
      yield char;
    }
  }
}
