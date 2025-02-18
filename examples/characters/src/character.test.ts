import { describe, it, expect, vi } from 'vitest';
import { Character } from './character.js';
import { Person } from './person.js';

describe('Character', () => {
  let character = null;
  const firstName = 'Son';
  const lastName = 'Goku';
  const role = 'Saijajin';

  beforeEach(() => {
    vi.spyOn(Math, 'random').mockImplementation(() => 0.5);
    character = new Character(firstName, lastName, role);
  });

  it('should create a character with a first name, last name, and role', () => {
    expect(character).toEqual({
      id: expect.stringContaining('person-'),
      firstName,
      lastName,
      role,
      level: 1,
      createdAt: expect.any(Date),
      lastModified: expect.any(Date),
      strength: 12,
      dexterity: 12,
      intelligence: 12,
      wisdom: 12,
      charisma: 12,
      constitution: 12,
    });
  });

  it('should allow you to increase the level', () => {
    expect(character.level).toBe(1);
    character.levelUp();
    expect(character.level).toBe(2);
  });

  it('should update the last modified date when leveling up', () => {
    const initialLastModified = character.lastModified;
    character.levelUp();

    const newLastModified = character.lastModified;
    expect(initialLastModified).not.toBe(newLastModified);
  });
});
