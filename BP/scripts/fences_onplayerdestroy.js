
import { world } from '@minecraft/server';
world.beforeEvents.worldInitialize.subscribe(eventData => {
    eventData.blockTypeRegistry.registerCustomComponent('ff:oak_on_player_destroy', {
        onPlayerDestroy(e) {
            const { block } = e;
            const aboveBlock = block.above();
            if (aboveBlock.typeId === 'ff:garden_fence_oak_inventory') {
                aboveBlock.setType('minecraft:air')
            }
        }
    });
});

world.beforeEvents.worldInitialize.subscribe(eventData => {
    eventData.blockTypeRegistry.registerCustomComponent('ff:birch_on_player_destroy', {
        onPlayerDestroy(e) {
            const { block } = e;
            const aboveBlock = block.above();
            if (aboveBlock.typeId === 'ff:garden_fence_birch_inventory') {
                aboveBlock.setType('minecraft:air')
            }
        }
    });
});

world.beforeEvents.worldInitialize.subscribe(eventData => {
    eventData.blockTypeRegistry.registerCustomComponent('ff:dark_oak_on_player_destroy', {
        onPlayerDestroy(e) {
            const { block } = e;
            const aboveBlock = block.above();
            if (aboveBlock.typeId === 'ff:garden_fence_dark_oak_inventory') {
                aboveBlock.setType('minecraft:air')
            }
        }
    });
});

world.beforeEvents.worldInitialize.subscribe(eventData => {
    eventData.blockTypeRegistry.registerCustomComponent('ff:spruce_on_player_destroy', {
        onPlayerDestroy(e) {
            const { block } = e;
            const aboveBlock = block.above();
            if (aboveBlock.typeId === 'ff:garden_fence_spruce_inventory') {
                aboveBlock.setType('minecraft:air')
            }
        }
    });
});

world.beforeEvents.worldInitialize.subscribe(eventData => {
    eventData.blockTypeRegistry.registerCustomComponent('ff:acacia_on_player_destroy', {
        onPlayerDestroy(e) {
            const { block } = e;
            const aboveBlock = block.above();
            if (aboveBlock.typeId === 'ff:garden_fence_acacia_inventory') {
                aboveBlock.setType('minecraft:air')
            }
        }
    });
});

world.beforeEvents.worldInitialize.subscribe(eventData => {
    eventData.blockTypeRegistry.registerCustomComponent('ff:jungle_on_player_destroy', {
        onPlayerDestroy(e) {
            const { block } = e;
            const aboveBlock = block.above();
            if (aboveBlock.typeId === 'ff:garden_fence_jungle_inventory') {
                aboveBlock.setType('minecraft:air')
            }
        }
    });
});

world.beforeEvents.worldInitialize.subscribe(eventData => {
    eventData.blockTypeRegistry.registerCustomComponent('ff:mangrove_on_player_destroy', {
        onPlayerDestroy(e) {
            const { block } = e;
            const aboveBlock = block.above();
            if (aboveBlock.typeId === 'ff:garden_fence_mangrove_inventory') {
                aboveBlock.setType('minecraft:air')
            }
        }
    });
});

world.beforeEvents.worldInitialize.subscribe(eventData => {
    eventData.blockTypeRegistry.registerCustomComponent('ff:cherry_on_player_destroy', {
        onPlayerDestroy(e) {
            const { block } = e;
            const aboveBlock = block.above();
            if (aboveBlock.typeId === 'ff:garden_fence_cherry_inventory') {
                aboveBlock.setType('minecraft:air')
            }
        }
    });
});

world.beforeEvents.worldInitialize.subscribe(eventData => {
    eventData.blockTypeRegistry.registerCustomComponent('ff:warped_on_player_destroy', {
        onPlayerDestroy(e) {
            const { block } = e;
            const aboveBlock = block.above();
            if (aboveBlock.typeId === 'ff:garden_fence_warped_inventory') {
                aboveBlock.setType('minecraft:air')
            }
        }
    });
});

world.beforeEvents.worldInitialize.subscribe(eventData => {
    eventData.blockTypeRegistry.registerCustomComponent('ff:crimson_on_player_destroy', {
        onPlayerDestroy(e) {
            const { block } = e;
            const aboveBlock = block.above();
            if (aboveBlock.typeId === 'ff:garden_fence_crimson_inventory') {
                aboveBlock.setType('minecraft:air')
            }
        }
    });
});