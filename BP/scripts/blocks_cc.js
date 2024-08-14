import { world, system, BlockPermutation, ItemStack } from '@minecraft/server'

world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:on_player_place', {
        beforeOnPlayerPlace: e => {
            const { block } = e;
            const { x, y, z } = block.location;
            if (block.typeId.includes("water") || block.typeId.includes("lava")) {
                e.cancel = true;
            }
            else {
                return;
            }
        }
    });
});

world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:toilet_function', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const toilet_open = block.permutation.withState("ff:bathroom_vars", 1);
            const toilet_function = block.permutation.withState("ff:bathroom_vars", 2);
            const toilet_close = block.permutation.withState("ff:bathroom_vars", 3);
            if (player.isSneaking && block.permutation.getState("ff:bathroom_vars") === 0) {
                block.setPermutation(toilet_open);
                return;
            }
            if (player.isSneaking && block.permutation.getState("ff:bathroom_vars") === 1) {
                block.setPermutation(toilet_function);
                player.playSound("ff:toilet");
                return;
            }
            if (player.isSneaking && block.permutation.getState("ff:bathroom_vars") === 2) {
                block.setPermutation(toilet_close);
                return;
            }
        }
    });
});

world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:interactive_block', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const updates = e.block.permutation.getState("ff:lamp_state");
            const update = block.permutation.withState("ff:lamp_state", updates + 1);
            block.setPermutation(update);
            player.playSound("random.click");
        }
    });
});

world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:paper_fill', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const equipment = player.getComponent('equippable');
            const selectedItem = equipment.getEquipment('Mainhand');
            const paper_remain = e.block.permutation.getState("ff:paper");
            const remove_paper_items = block.permutation.withState("ff:paper", paper_remain - 1);
            const remove_paper_items_fully = block.permutation.withState("ff:paper", 0);
            const paper_fill = block.permutation.withState("ff:paper", 9)
            const paperObtain = new ItemStack("minecraft:paper");
            const paperObtainItem = new ItemStack("ff:toilet_paper_item");
            if (selectedItem && (selectedItem.typeId === 'ff:toilet_paper_item') && block.permutation.getState("ff:paper") === 0) {
                block.setPermutation(paper_fill);
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (!player.isSneaking && block.permutation.getState("ff:paper") === 9) {
                block.setPermutation(remove_paper_items);

                block.dimension.spawnItem(paperObtain, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                return;
            }
            if (!player.isSneaking && block.permutation.getState("ff:paper") === 8) {
                block.setPermutation(remove_paper_items);
                block.dimension.spawnItem(paperObtain, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                return;
            }
            if (!player.isSneaking && block.permutation.getState("ff:paper") === 7) {
                block.setPermutation(remove_paper_items);
                block.dimension.spawnItem(paperObtain, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                return;
            }
            if (!player.isSneaking && block.permutation.getState("ff:paper") === 6) {
                block.setPermutation(remove_paper_items);
                block.dimension.spawnItem(paperObtain, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                return;
            }
            if (!player.isSneaking && block.permutation.getState("ff:paper") === 5) {
                block.setPermutation(remove_paper_items);
                block.dimension.spawnItem(paperObtain, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                return;
            }
            if (!player.isSneaking && block.permutation.getState("ff:paper") === 4) {
                block.setPermutation(remove_paper_items);
                block.dimension.spawnItem(paperObtain, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                return;
            }
            if (!player.isSneaking && block.permutation.getState("ff:paper") === 3) {
                block.setPermutation(remove_paper_items);
                block.dimension.spawnItem(paperObtain, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                return;
            }
            if (!player.isSneaking && block.permutation.getState("ff:paper") === 2) {
                block.setPermutation(remove_paper_items);
                block.dimension.spawnItem(paperObtain, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                return;
            }
            if (!player.isSneaking && block.permutation.getState("ff:paper") === 1) {
                block.setPermutation(remove_paper_items);
            }
            if (player.isSneaking && block.permutation.getState("ff:paper") === 9) {
                block.setPermutation(remove_paper_items_fully);

                block.dimension.spawnItem(paperObtainItem, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                return;
            }
            if (player.isSneaking && block.permutation.getState("ff:paper") === 8) {
                block.setPermutation(remove_paper_items_fully);
                block.dimension.spawnItem(paperObtainItem, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                return;
            }
            if (player.isSneaking && block.permutation.getState("ff:paper") === 7) {
                block.setPermutation(remove_paper_items_fully);
                block.dimension.spawnItem(paperObtainItem, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                return;
            }
            if (player.isSneaking && block.permutation.getState("ff:paper") === 6) {
                block.setPermutation(remove_paper_items_fully);
                block.dimension.spawnItem(paperObtainItem, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                return;
            }
            if (player.isSneaking && block.permutation.getState("ff:paper") === 5) {
                block.setPermutation(remove_paper_items_fully);
                block.dimension.spawnItem(paperObtainItem, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                return;
            }
            if (player.isSneaking && block.permutation.getState("ff:paper") === 4) {
                block.setPermutation(remove_paper_items_fully);
                block.dimension.spawnItem(paperObtainItem, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                return;
            }
            if (player.isSneaking && block.permutation.getState("ff:paper") === 3) {
                block.setPermutation(remove_paper_items_fully);
                block.dimension.spawnItem(paperObtainItem, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                return;
            }
            if (player.isSneaking && block.permutation.getState("ff:paper") === 2) {
                block.setPermutation(remove_paper_items_fully);
                block.dimension.spawnItem(paperObtainItem, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                return;
            }

        }
    });
});


world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:add_new_stacked_book', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const stacked_book = e.block.permutation.getState("book:state");
            const book_s = block.permutation.withState("book:state", stacked_book + 1);
            const book_remove = block.permutation.withState("book:vertical_stacked", + 1);
            const equipment = player.getComponent('equippable');
            const selectedItem = equipment.getEquipment('Mainhand');
            if (selectedItem && (selectedItem.typeId === 'ff:stacked_books') && block.permutation.getState("book:state") < 3) {
                player.playSound("use.candle");
                block.setPermutation(book_s);
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (player.isSneaking && block.permutation.getState("book:state") === 3) {
                player.playSound("fall.wood");
                block.setPermutation(book_remove);
                return;

            }
        }
    });
});

world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:test_cushion', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const equipment = player.getComponent('equippable');
            const selectedItem = equipment.getEquipment('Mainhand');
            if (selectedItem.typeId === 'ff:white_cushion' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommandAsync(`setblock ${x} ${y} ${z} ff:wooden_oak_chair_with_wool["minecraft:cardinal_direction"="north","ef:colors"=0]`);
                e.source.playSound("block.lantern.break");

            }
        }
    });
});

world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:sink_open_close', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const sink_open = block.permutation.withState("ff:sink_vars", 1);
            const sink_close = block.permutation.withState("ff:sink_vars", 0);
            if (block.permutation.getState("ff:sink_vars") === 0) {
                block.setPermutation(sink_open);
                player.playSound("mob.axolotl.splash");
                return;
            }
            if (block.permutation.getState("ff:sink_vars") === 1) {
                block.setPermutation(sink_close);
                return;
            }
        },
    });
});

world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:trash_items', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const equipment = player.getComponent('equippable');
            const selectedItem = equipment.getEquipment('Mainhand');

            if (!player.isSneaking && selectedItem) {
                player.playSound("random.pop2");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
        },
    });
});

world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:add_breads', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const equipment = player.getComponent('equippable');
            const selectedItem = equipment.getEquipment('Mainhand');
            const add_bread = block.permutation.withState("ff:toaster_with_breads", 1);
            const add_bread_2 = block.permutation.withState("ff:toaster_with_breads", 2);
            const remove_bread = block.permutation.withState("ff:toaster_with_breads", 0);
            const breadGive = new ItemStack("ff:bread_slice");
            const breadGive2 = new ItemStack("ff:bread_slice");
            if (!player.isSneaking && selectedItem && (selectedItem.typeId === 'ff:bread_slice') && block.permutation.getState("ff:toaster_with_breads") === 0) {
                block.setPermutation(add_bread);
                player.playSound("random.pop");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (!player.isSneaking && selectedItem && (selectedItem.typeId === 'ff:bread_slice') && block.permutation.getState("ff:toaster_with_breads") === 1) {
                block.setPermutation(add_bread_2);
                player.playSound("random.pop");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (!player.isSneaking && block.permutation.getState("ff:toaster_with_breads") === 2) {
                block.setPermutation(remove_bread);
                player.playSound("random.pop2");
                block.dimension.spawnItem(breadGive, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                block.dimension.spawnItem(breadGive2, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
            }
        },
    });
});

world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:give_breads', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const execute_toaster1 = block.permutation.withState("ff:toaster_with_breads", 3);
            const execute_toaster2 = block.permutation.withState("ff:toaster_with_breads", 4);
            if (player.isSneaking && block.permutation.getState("ff:toaster_with_breads") === 1) {
                block.setPermutation(execute_toaster1);
                player.playSound("hit.netherite");
            }
            if (player.isSneaking && block.permutation.getState("ff:toaster_with_breads") === 2) {
                block.setPermutation(execute_toaster2);
                player.playSound("hit.netherite");
            }
        },
        onRandomTick: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const breadtoastedGive = new ItemStack("ff:bread_slice_toasted");
            const breadtoastedGive2 = new ItemStack("ff:bread_slice_toasted");
            const finish_execute_toaster1 = block.permutation.withState("ff:toaster_with_breads", 0);
            const finish_execute_toaster2 = block.permutation.withState("ff:toaster_with_breads", 0);
            if (Math.floor(Math.random() * 20) && block.permutation.getState("ff:toaster_with_breads") === 3) {
                block.setPermutation(finish_execute_toaster1);

                block.dimension.runCommand(`playsound ff:toast_finish @p`);
                block.dimension.spawnItem(breadtoastedGive, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
            }
            if (Math.floor(Math.random() * 20) && block.permutation.getState("ff:toaster_with_breads") === 4) {
                block.setPermutation(finish_execute_toaster2);
                block.dimension.runCommand(`playsound ff:toast_finish @p`);
                block.dimension.spawnItem(breadtoastedGive, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                block.dimension.spawnItem(breadtoastedGive2, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
            }
        },
    });
});

world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:smoke_toaster', {
        onTick: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            if (block.permutation.getState("ff:toaster_with_breads") === 3) {
                block.dimension.spawnParticle("ff:toast_smoke", { x: block.location.x + 0.55, y: block.location.y + 0.5, z: block.location.z + 0.50 });
            }
            if (block.permutation.getState("ff:toaster_with_breads") === 4) {
                block.dimension.spawnParticle("ff:toast_smoke", { x: block.location.x + 0.55, y: block.location.y + 0.5, z: block.location.z + 0.50 });

            }

        },
    });
});


world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:water_particle', {
        onTick: e => {
            const { block } = e;
            const { x, y, z } = block.location;
            if (Math.floor(Math.random() * 20) && block.permutation.getState("ff:sink_vars") === 1 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.spawnParticle("minecraft:water_drip_particle", { x: block.location.x + 0.5, y: block.location.y + 0.975, z: block.location.z + 0.35 });
            }
            if (Math.floor(Math.random() * 20) && block.permutation.getState("ff:sink_vars") === 1 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.spawnParticle("minecraft:water_drip_particle", { x: block.location.x + 0.5, y: block.location.y + 0.975, z: block.location.z + 0.65 });
            }
            if (Math.floor(Math.random() * 20) && block.permutation.getState("ff:sink_vars") === 1 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.spawnParticle("minecraft:water_drip_particle", { x: block.location.x + 0.35, y: block.location.y + 0.975, z: block.location.z + 0.50 });
            }
            if (Math.floor(Math.random() * 20) && block.permutation.getState("ff:sink_vars") === 1 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.spawnParticle("minecraft:water_drip_particle", { x: block.location.x + 0.65, y: block.location.y + 0.975, z: block.location.z + 0.50 });
            }

        },
    });
});