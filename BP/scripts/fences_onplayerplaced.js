import { world, BlockPermutation } from '@minecraft/server';
world.beforeEvents.worldInitialize.subscribe(eventData => {
    eventData.blockTypeRegistry.registerCustomComponent('ff:oak_on_player_placed', {
        onPlace(e) {
            const { block } = e;
            const aboveBlock = block.above();
            e.block.setType('ff:garden_fence_oak')
            if (aboveBlock.typeId === 'minecraft:air') {
                aboveBlock.setPermutation(BlockPermutation.resolve('ff:garden_fence_oak_inventory', { 'ff:post': 1 }))
            }
        }
    });
});

world.beforeEvents.worldInitialize.subscribe(eventData => {
    eventData.blockTypeRegistry.registerCustomComponent('ff:birch_on_player_placed', {
        onPlace(e) {
            const { block } = e;
            const aboveBlock = block.above();
            e.block.setType('ff:garden_fence_birch')
            if (aboveBlock.typeId === 'minecraft:air') {
                aboveBlock.setPermutation(BlockPermutation.resolve('ff:garden_fence_birch_inventory', { 'ff:post': 1 }))
            }
        }
    });
});

world.beforeEvents.worldInitialize.subscribe(eventData => {
    eventData.blockTypeRegistry.registerCustomComponent('ff:dark_oak_on_player_placed', {
        onPlace(e) {
            const { block } = e;
            const aboveBlock = block.above();
            e.block.setType('ff:garden_fence_dark_oak')
            if (aboveBlock.typeId === 'minecraft:air') {
                aboveBlock.setPermutation(BlockPermutation.resolve('ff:garden_fence_dark_oak_inventory', { 'ff:post': 1 }))
            }
        }
    });
});

world.beforeEvents.worldInitialize.subscribe(eventData => {
    eventData.blockTypeRegistry.registerCustomComponent('ff:jungle_on_player_placed', {
        onPlace(e) {
            const { block } = e;
            const aboveBlock = block.above();
            e.block.setType('ff:garden_fence_jungle')
            if (aboveBlock.typeId === 'minecraft:air') {
                aboveBlock.setPermutation(BlockPermutation.resolve('ff:garden_fence_jungle_inventory', { 'ff:post': 1 }))
            }
        }
    });
});

world.beforeEvents.worldInitialize.subscribe(eventData => {
    eventData.blockTypeRegistry.registerCustomComponent('ff:acacia_on_player_placed', {
        onPlace(e) {
            const { block } = e;
            const aboveBlock = block.above();
            e.block.setType('ff:garden_fence_acacia')
            if (aboveBlock.typeId === 'minecraft:air') {
                aboveBlock.setPermutation(BlockPermutation.resolve('ff:garden_fence_acacia_inventory', { 'ff:post': 1 }))
            }
        }
    });
});

world.beforeEvents.worldInitialize.subscribe(eventData => {
    eventData.blockTypeRegistry.registerCustomComponent('ff:cherry_on_player_placed', {
        onPlace(e) {
            const { block } = e;
            const aboveBlock = block.above();
            e.block.setType('ff:garden_fence_cherry')
            if (aboveBlock.typeId === 'minecraft:air') {
                aboveBlock.setPermutation(BlockPermutation.resolve('ff:garden_fence_cherry_inventory', { 'ff:post': 1 }))
            }
        }
    });
});

world.beforeEvents.worldInitialize.subscribe(eventData => {
    eventData.blockTypeRegistry.registerCustomComponent('ff:mangrove_on_player_placed', {
        onPlace(e) {
            const { block } = e;
            const aboveBlock = block.above();
            e.block.setType('ff:garden_fence_mangrove')
            if (aboveBlock.typeId === 'minecraft:air') {
                aboveBlock.setPermutation(BlockPermutation.resolve('ff:garden_fence_mangrove_inventory', { 'ff:post': 1 }))
            }
        }
    });
});

world.beforeEvents.worldInitialize.subscribe(eventData => {
    eventData.blockTypeRegistry.registerCustomComponent('ff:warped_on_player_placed', {
        onPlace(e) {
            const { block } = e;
            const aboveBlock = block.above();
            e.block.setType('ff:garden_fence_warped')
            if (aboveBlock.typeId === 'minecraft:air') {
                aboveBlock.setPermutation(BlockPermutation.resolve('ff:garden_fence_warped_inventory', { 'ff:post': 1 }))
            }
        }
    });
});

world.beforeEvents.worldInitialize.subscribe(eventData => {
    eventData.blockTypeRegistry.registerCustomComponent('ff:crimson_on_player_placed', {
        onPlace(e) {
            const { block } = e;
            const aboveBlock = block.above();
            e.block.setType('ff:garden_fence_crimson')
            if (aboveBlock.typeId === 'minecraft:air') {
                aboveBlock.setPermutation(BlockPermutation.resolve('ff:garden_fence_crimson_inventory', { 'ff:post': 1 }))
            }
        }
    });
});

world.beforeEvents.worldInitialize.subscribe(eventData => {
    eventData.blockTypeRegistry.registerCustomComponent('ff:spruce_on_player_placed', {
        onPlace(e) {
            const { block } = e;
            const aboveBlock = block.above();
            e.block.setType('ff:garden_fence_spruce')
            if (aboveBlock.typeId === 'minecraft:air') {
                aboveBlock.setPermutation(BlockPermutation.resolve('ff:garden_fence_spruce_inventory', { 'ff:post': 1 }))
            }
        }
    });
});