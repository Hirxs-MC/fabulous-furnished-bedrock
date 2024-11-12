import {
    world,
    BlockPermutation,
    ItemStack
  } from '@minecraft/server'

world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:container_function', {
        onPlace: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            block.dimension.runCommandAsync(`summon ef:inventory ${x} ${y} ${z}`);
        },
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const openCabinent = block.permutation.withState("ff:cabinent_type", 2);
            player.playSound("block.barrel.open");
            block.setPermutation(openCabinent);
        },
        onTick: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const closeCabinet = block.permutation.withState("ff:cabinent_type", 1);
            if (block.permutation.getState("ff:cabinent_type") === 2) {
                block.dimension.runCommandAsync(`playsound block.barrel.open @p`);
                block.setPermutation(closeCabinet);
                return;
              }
        }
    });
});