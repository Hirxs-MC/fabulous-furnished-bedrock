/**
 * @license
 * MIT License
 *
 * Copyright (c) 2024 QuazChick
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { GameMode, EquipmentSlot, Player, BlockPermutation } from "@minecraft/server";

function getEntity(event) {
  if ("entity" in event && event.entity?.isValid()) return event.entity;
  else if ("player" in event && event.player?.isValid()) return event.player;
  throw new Error("Cannot find entity target for event response.");
}

function blockAddMobEffectResponse(options) {
  const { effect, duration, amplifier = 1, showParticles = true } = options;
  const entity = getEntity(this.event);
  entity.addEffect(effect, duration, {
    amplifier,
    showParticles,
  });
  return this;
}

function damageItem(options) {
  const { player, amount, ignoreDamageChance, ignoreGameMode } = options;
  if (!ignoreGameMode && player.getGameMode() === GameMode.creative) return;
  const equippable = player.getComponent("minecraft:equippable");
  if (!equippable) return;
  const mainhand = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);
  if (!mainhand.hasItem()) return;
  const itemStack = mainhand.getItem();
  if (!itemStack) return;
  const durability = itemStack.getComponent("minecraft:durability");
  if (!durability) return;
  if (!ignoreDamageChance) {
    const enchantable = itemStack.getComponent("minecraft:enchantable");
    const unbreakingLevel = enchantable?.getEnchantment("minecraft:unbreaking")?.level;
    const damageChance = durability.getDamageChance(unbreakingLevel) / 100;
    if (Math.random() > damageChance) return;
  }
  const shouldBreak = durability.damage + amount > durability.maxDurability;
  if (shouldBreak) {
    mainhand.setItem(undefined);
    player.dimension.playSound("random.break", player.location);
  } else {
    durability.damage += amount;
    mainhand.setItem(itemStack);
  }
}

function decrementStack(options) {
  const { player, amount = 1, ignoreGameMode } = options;
  if (!ignoreGameMode && player.getGameMode() === GameMode.creative) return;
  const equippable = player.getComponent("minecraft:equippable");
  if (!equippable) return;
  const mainhand = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);
  if (!mainhand.hasItem()) return;
  if (mainhand.amount - amount >= 1) {
    mainhand.amount -= amount;
  } else {
    mainhand.setItem(undefined);
  }
}

function getOffsetLocation(location, offset) {
  if (!offset) return location;
  return {
    x: location.x + offset.x,
    y: location.y + offset.y,
    z: location.z + offset.z,
  };
}

function random(mid, range) {
  const min = mid - range / 2;
  const max = min + range;
  return Math.random() * (max - min) + min;
}
function getRandomLocation(origin, range) {
  if (!range) return origin;
  return {
    x: random(origin.x, range.x),
    y: random(origin.y, range.y),
    z: random(origin.z, range.z),
  };
}

function blockDamageResponse(options) {
  if (options.target === "item") {
    const { amount, ignoreDamageChance, ignoreGameMode } = options;
    const player = getEntity(this.event);
    if (!(player instanceof Player)) {
      throw new Error("Involved entity must be a player for the damage item event response.");
    }
    damageItem({
      player,
      amount,
      ignoreDamageChance,
      ignoreGameMode,
    });
  } else {
    const { amount, target, ...other } = options;
    const entity = getEntity(this.event);
    entity.applyDamage(amount, other);
  }
  return this;
}

function blockDecrementStackResponse(options) {
  const { amount = 1, ignoreGameMode } = options ?? {};
  const player = getEntity(this.event);
  if (!(player instanceof Player)) {
    throw new Error("Involved entity must be a player for the decrement stack event response.");
  }
  decrementStack({
    player,
    amount,
    ignoreGameMode,
  });
  return this;
}

function blockDieResponse(options) {
  if (options?.target === "entity") {
    const entity = getEntity(this.event);
    entity.kill();
  } else {
    this.event.block.setType("minecraft:air");
  }
  return this;
}

function blockPlayEffectResponse(options) {
  const { effect, molangVariables, offset, target } = options;
  const origin = target === "entity" ? getEntity(this.event).location : this.event.block.center();
  const location = getOffsetLocation(origin, offset);
  this.event.dimension.spawnParticle(effect, location, molangVariables);
  return this;
}

function blockPlaySoundResponse(options) {
  const { sound, offset, target, ...other } = options;
  const origin = target === "entity" ? getEntity(this.event).location : this.event.block.center();
  const location = getOffsetLocation(origin, offset);
  this.event.dimension.playSound(sound, location, other);
  return this;
}

function blockRemoveMobEffectResponse(options) {
  const entity = getEntity(this.event);
  entity.removeEffect(options.effect);
  return this;
}

function blockRunCommandResponse(options) {
  let { command: commands, target } = options;
  if (typeof commands === "string") commands = [commands];
  const entity = target === "entity" ? getEntity(this.event) : this.event.dimension;
  for (const command of commands) entity.runCommand(command);
  return this;
}

function blockSetBlockResponse(options) {
  const { block, offset, target } = options;
  const origin = target === "entity" ? getEntity(this.event).location : this.event.block.location;
  const location = getOffsetLocation(origin, offset);
  location.x = Math.floor(location.x);
  location.y = Math.floor(location.y);
  location.z = Math.floor(location.z);
  if (block instanceof BlockPermutation) this.event.dimension.setBlockPermutation(location, block);
  else this.event.dimension.setBlockType(location, block);
  return this;
}

function blockSetBlockStateResponse(options) {
  const states = this.event.block.permutation.getAllStates();
  Object.assign(states, options);
  const permutation = BlockPermutation.resolve(this.event.block.typeId, states);
  this.event.block.setPermutation(permutation);
  return this;
}

function blockSpawnLootResponse(options) {
  const { table, offset, target } = options;
  const origin = target === "entity" ? getEntity(this.event).location : this.event.block.center();
  const location = getOffsetLocation(origin, offset);
  if (typeof table === "string") {
    const { x, y, z } = location;
    this.event.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot "${table}"`);
  } else {
    this.event.dimension.spawnItem(table, location);
  }
  return this;
}

function blockTeleportResponse(options) {
  const { location, range, ...other } = options;
  const entity = getEntity(this.event);
  const randomLocation = getRandomLocation(location, range);
  entity.teleport(randomLocation, other);
  return this;
}

function blockTransformItemResponse(options) {
  const player = getEntity(this.event);
  if (!(player instanceof Player)) {
    throw new Error("Involved entity must be a player for the transform item event response.");
  }
  const equippable = player.getComponent("minecraft:equippable");
  if (!equippable) return this;
  equippable.setEquipment(EquipmentSlot.Mainhand, options.itemStack);
  return this;
}

class BlockEventResponses {
  event;
  constructor(event) {
    this.event = event;
  }
  /**
   * Adds or updates an effect, like poison, to the involved entity.
   */
  addMobEffect = blockAddMobEffectResponse.bind(this);
  /**
   * Applies a set of damage to an involved item or entity.
   */
  damage = blockDamageResponse.bind(this);
  /**
   * Decreases the stack amount of the item in the involved player's main hand.
   */
  decrementStack = blockDecrementStackResponse.bind(this);
  /**
   * Sets the block to air or kills the involved entity.
   */
  die = blockDieResponse.bind(this);
  /**
   * Creates a particle emitter at the block.
   */
  playEffect = blockPlayEffectResponse.bind(this);
  /**
   * Plays a sound for all players at the block.
   */
  playSound = blockPlaySoundResponse.bind(this);
  /**
   * Removes an effect, like poison, from the involved entity.
   */
  removeMobEffect = blockRemoveMobEffectResponse.bind(this);
  /**
   * Runs commands synchronously using the context of the broader dimenion or involved entity.
   */
  runCommand = blockRunCommandResponse.bind(this);
  /**
   * Sets the block type or permutation at a specified offset to the block.
   */
  setBlock = blockSetBlockResponse.bind(this);
  /**
   * Updates the block's permutation to match inputted state values.
   */
  setBlockState = blockSetBlockStateResponse.bind(this);
  /**
   * Spawns loot table items at the block.
   */
  spawnLoot = blockSpawnLootResponse.bind(this);
  /**
   * Teleports the involved entity randomly around a specified destination.
   */
  teleport = blockTeleportResponse.bind(this);
  /**
   * Replaces the item in the involved player's main hand.
   */
  transformItem = blockTransformItemResponse.bind(this);
}

function getHolder(event) {
  if ("source" in event && event.source?.isValid()) return event.source;
  else if ("attackingEntity" in event && event.attackingEntity?.isValid()) return event.attackingEntity;
  throw new Error("Cannot find holder target for event response.");
}

function getVictim(event) {
  if ("hitEntity" in event && event.hitEntity?.isValid()) return event.hitEntity;
  throw new Error("Cannot find victim target for event response.");
}

function itemAddMobEffectResponse(options) {
  const { effect, duration, amplifier = 1, showParticles = true, target } = options;
  const getEntity = target === "victim" ? getVictim : getHolder;
  const entity = getEntity(this.event);
  entity.addEffect(effect, duration, {
    amplifier,
    showParticles,
  });
  return this;
}

function itemDamageResponse(options) {
  if (options.target === "item") {
    const { amount, ignoreDamageChance, ignoreGameMode } = options;
    const player = getHolder(this.event);
    if (!(player instanceof Player)) {
      throw new Error("Item holder must be a player for the damage event response.");
    }
    damageItem({
      player,
      amount,
      ignoreDamageChance,
      ignoreGameMode,
    });
  } else {
    const { amount, target, ...other } = options;
    const getEntity = target === "victim" ? getVictim : getHolder;
    const entity = getEntity(this.event);
    entity.applyDamage(amount, other);
  }
  return this;
}

function itemDecrementStackResponse(options) {
  const { amount, ignoreGameMode, target } = options ?? {};
  const getPlayer = target === "victim" ? getVictim : getHolder;
  const player = getPlayer(this.event);
  if (!(player instanceof Player)) {
    throw new Error(`Item ${target} must be a player for the decrement stack event response.`);
  }
  decrementStack({
    player,
    amount,
    ignoreGameMode,
  });
  return this;
}

function itemRemoveMobEffectResponse(options) {
  const { effect, target } = options;
  const getEntity = target === "victim" ? getVictim : getHolder;
  const entity = getEntity(this.event);
  entity.removeEffect(effect);
  return this;
}

function itemRunCommandResponse(options) {
  let { command: commands, target } = options;
  if (typeof commands === "string") commands = [commands];
  const getEntity = target === "victim" ? getVictim : getHolder;
  const entity = getEntity(this.event);
  for (const command of commands) entity.runCommand(command);
  return this;
}

function itemTeleportResponse(options) {
  const { target, location, range, ...other } = options;
  const getEntity = target === "victim" ? getVictim : getHolder;
  const entity = getEntity(this.event);
  const randomLocation = getRandomLocation(location, range);
  entity.teleport(randomLocation, other);
  return this;
}

function itemTransformItemResponse(options) {
  const { itemStack, target } = options;
  const getPlayer = target === "victim" ? getVictim : getHolder;
  const player = getPlayer(this.event);
  if (!(player instanceof Player)) {
    throw new Error(`Item ${target} must be a player for the transform item event response.`);
  }
  const equippable = player.getComponent("minecraft:equippable");
  if (!equippable) return this;
  equippable.setEquipment(EquipmentSlot.Mainhand, itemStack);
  return this;
}

class ItemEventResponses {
  event;
  constructor(event) {
    this.event = event;
  }
  /**
   * Adds or updates an effect, like poison, to an involved entity.
   */
  addMobEffect = itemAddMobEffectResponse.bind(this);
  /**
   * Applies a set of damage to an involved item or entity.
   */
  damage = itemDamageResponse.bind(this);
  /**
   * Decreases the stack amount of the item.
   */
  decrementStack = itemDecrementStackResponse.bind(this);
  /**
   * Removes an effect, like poison, from an involved entity.
   */
  removeMobEffect = itemRemoveMobEffectResponse.bind(this);
  /**
   * Runs commands synchronously using the context of the broader dimenion or involved entity.
   */
  runCommand = itemRunCommandResponse.bind(this);
  /**
   * Teleports an involved entity randomly around a specified destination.
   */
  teleport = itemTeleportResponse.bind(this);
  /**
   * Replaces the item.
   */
  transformItem = itemTransformItemResponse.bind(this);
}

export { BlockEventResponses, ItemEventResponses };
