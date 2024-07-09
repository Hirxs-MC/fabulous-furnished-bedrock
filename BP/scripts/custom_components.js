import { world, system, BlockPermutation, ItemStack } from '@minecraft/server'

world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockTypeRegistry.registerCustomComponent('ff:on_player_place', {
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
    initEvent.blockTypeRegistry.registerCustomComponent('ff:toilet_function', {
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
    initEvent.blockTypeRegistry.registerCustomComponent('ff:paper_fill', {
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
    initEvent.blockTypeRegistry.registerCustomComponent('ff:add_new_stacked_book', {
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
                const amount = selectedItem.amount
                if (amount == 1) {
                    equipment.setItem(selectedItem, null);
                }
                else {
                    selectedItem.amount -= 1
                    equipment.setItem(selectedItem)
                }
                return;
            }
            if (player.isSneaking && block.permutation.getState("book:state") === 3) {
                player.playSound("fall.wood");
                return;
                block.setPermutation(book_remove);
            }
        }
    });
});

world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockTypeRegistry.registerCustomComponent('ff:lamp_function_on', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            // white
            if (block.permutation.getState("ff:lamp_colors_on") === '0_on' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="north","ff:lamp_colors_off"="0_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '0_on' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="south","ff:lamp_colors_off"="0_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '0_on' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="west","ff:lamp_colors_off"="0_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '0_on' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="east","ff:lamp_colors_off"="0_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // orange
            if (block.permutation.getState("ff:lamp_colors_on") === '1_on' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="north","ff:lamp_colors_off"="1_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '1_on' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="south","ff:lamp_colors_off"="1_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '1_on' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="west","ff:lamp_colors_off"="1_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '1_on' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="east","ff:lamp_colors_off"="1_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // magenta
            if (block.permutation.getState("ff:lamp_colors_on") === '2_on' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="north","ff:lamp_colors_off"="2_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '2_on' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="south","ff:lamp_colors_off"="2_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '2_on' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="west","ff:lamp_colors_off"="2_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '2_on' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="east","ff:lamp_colors_off"="2_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // light_blue
            if (block.permutation.getState("ff:lamp_colors_on") === '3_on' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="north","ff:lamp_colors_off"="3_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '3_on' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="south","ff:lamp_colors_off"="3_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '3_on' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="west","ff:lamp_colors_off"="3_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '3_on' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="east","ff:lamp_colors_off"="3_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // yellow
            if (block.permutation.getState("ff:lamp_colors_on") === '4_on' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="north","ff:lamp_colors_off"="4_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '4_on' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="south","ff:lamp_colors_off"="4_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '4_on' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="west","ff:lamp_colors_off"="4_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '4_on' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="east","ff:lamp_colors_off"="4_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // lime
            if (block.permutation.getState("ff:lamp_colors_on") === '5_on' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="north","ff:lamp_colors_off"="5_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '5_on' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="south","ff:lamp_colors_off"="5_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '5_on' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="west","ff:lamp_colors_off"="5_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '5_on' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="east","ff:lamp_colors_off"="5_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // pink
            if (block.permutation.getState("ff:lamp_colors_on") === '6_on' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="north","ff:lamp_colors_off"="6_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '6_on' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="south","ff:lamp_colors_off"="6_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '6_on' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="west","ff:lamp_colors_off"="6_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '6_on' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="east","ff:lamp_colors_off"="6_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // gray
            if (block.permutation.getState("ff:lamp_colors_on") === '7_on' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="north","ff:lamp_colors_off"="7_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '7_on' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="south","ff:lamp_colors_off"="7_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '7_on' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="west","ff:lamp_colors_off"="7_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '7_on' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="east","ff:lamp_colors_off"="7_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // light_gray
            if (block.permutation.getState("ff:lamp_colors_on") === '8_on' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="north","ff:lamp_colors_off"="8_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '8_on' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="south","ff:lamp_colors_off"="8_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '8_on' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="west","ff:lamp_colors_off"="8_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '8_on' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="east","ff:lamp_colors_off"="8_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // cyan
            if (block.permutation.getState("ff:lamp_colors_on") === '9_on' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="north","ff:lamp_colors_off"="9_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '9_on' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="south","ff:lamp_colors_off"="9_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '9_on' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="west","ff:lamp_colors_off"="9_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '9_on' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="east","ff:lamp_colors_off"="9_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // purple
            if (block.permutation.getState("ff:lamp_colors_on") === '10_on' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="north","ff:lamp_colors_off"="10_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '10_on' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="south","ff:lamp_colors_off"="10_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '10_on' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="west","ff:lamp_colors_off"="10_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '10_on' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="east","ff:lamp_colors_off"="10_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // blue
            if (block.permutation.getState("ff:lamp_colors_on") === '11_on' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="north","ff:lamp_colors_off"="11_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '11_on' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="south","ff:lamp_colors_off"="11_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '11_on' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="west","ff:lamp_colors_off"="11_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '11_on' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="east","ff:lamp_colors_off"="11_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // brown
            if (block.permutation.getState("ff:lamp_colors_on") === '12_on' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="north","ff:lamp_colors_off"="12_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '12_on' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="south","ff:lamp_colors_off"="12_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '12_on' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="west","ff:lamp_colors_off"="12_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '12_on' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="east","ff:lamp_colors_off"="12_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // green
            if (block.permutation.getState("ff:lamp_colors_on") === '13_on' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="north","ff:lamp_colors_off"="13_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '13_on' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="south","ff:lamp_colors_off"="13_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '13_on' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="west","ff:lamp_colors_off"="13_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '13_on' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="east","ff:lamp_colors_off"="13_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // red
            if (block.permutation.getState("ff:lamp_colors_on") === '14_on' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="north","ff:lamp_colors_off"="14_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '14_on' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="south","ff:lamp_colors_off"="14_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '14_on' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="west","ff:lamp_colors_off"="14_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '14_on' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="east","ff:lamp_colors_off"="14_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // black
            if (block.permutation.getState("ff:lamp_colors_on") === '15_on' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="north","ff:lamp_colors_off"="15_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '15_on' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="south","ff:lamp_colors_off"="15_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '15_on' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="west","ff:lamp_colors_off"="15_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_on") === '15_on' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp["minecraft:cardinal_direction"="east","ff:lamp_colors_off"="15_off"]`);
                player.playSound("ff:lamp_on");
                return;
            }
        }
    });
});

world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockTypeRegistry.registerCustomComponent('ff:lamp_function_off', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            // white
            if (block.permutation.getState("ff:lamp_colors_off") === '0_off' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="north","ff:lamp_colors_on"="0_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '0_off' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="south","ff:lamp_colors_on"="0_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '0_off' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="west","ff:lamp_colors_on"="0_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '0_off' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="east","ff:lamp_colors_on"="0_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // orange
            if (block.permutation.getState("ff:lamp_colors_off") === '1_off' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="north","ff:lamp_colors_on"="1_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '1_off' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="south","ff:lamp_colors_on"="1_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '1_off' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="west","ff:lamp_colors_on"="1_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '1_off' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="east","ff:lamp_colors_on"="1_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // magenta
            if (block.permutation.getState("ff:lamp_colors_off") === '2_off' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="north","ff:lamp_colors_on"="2_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '2_off' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="south","ff:lamp_colors_on"="2_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '2_off' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="west","ff:lamp_colors_on"="2_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '2_off' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="east","ff:lamp_colors_on"="2_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // light_blue
            if (block.permutation.getState("ff:lamp_colors_off") === '3_off' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="north","ff:lamp_colors_on"="3_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '3_off' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="south","ff:lamp_colors_on"="3_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '3_off' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="west","ff:lamp_colors_on"="3_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '3_off' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="east","ff:lamp_colors_on"="3_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // yellow
            if (block.permutation.getState("ff:lamp_colors_off") === '4_off' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="north","ff:lamp_colors_on"="4_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '4_off' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="south","ff:lamp_colors_on"="4_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '4_off' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="west","ff:lamp_colors_on"="4_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '4_off' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="east","ff:lamp_colors_on"="4_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // lime
            if (block.permutation.getState("ff:lamp_colors_off") === '5_off' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="north","ff:lamp_colors_on"="5_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '5_off' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="south","ff:lamp_colors_on"="5_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '5_off' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="west","ff:lamp_colors_on"="5_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '5_off' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="east","ff:lamp_colors_on"="5_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // pink
            if (block.permutation.getState("ff:lamp_colors_off") === '6_off' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="north","ff:lamp_colors_on"="6_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '6_off' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="south","ff:lamp_colors_on"="6_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '6_off' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="west","ff:lamp_colors_on"="6_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '6_off' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="east","ff:lamp_colors_on"="6_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // gray
            if (block.permutation.getState("ff:lamp_colors_off") === '7_off' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="north","ff:lamp_colors_on"="7_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '7_off' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="south","ff:lamp_colors_on"="7_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '7_off' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="west","ff:lamp_colors_on"="7_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '7_off' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="east","ff:lamp_colors_on"="7_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // light_gray
            if (block.permutation.getState("ff:lamp_colors_off") === '8_off' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="north","ff:lamp_colors_on"="8_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '8_off' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="south","ff:lamp_colors_on"="8_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '8_off' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="west","ff:lamp_colors_on"="8_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '8_off' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="east","ff:lamp_colors_on"="8_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // cyan
            if (block.permutation.getState("ff:lamp_colors_off") === '9_off' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="north","ff:lamp_colors_on"="9_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '9_off' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="south","ff:lamp_colors_on"="9_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '9_off' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="west","ff:lamp_colors_on"="9_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '9_off' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="east","ff:lamp_colors_on"="9_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // purple
            if (block.permutation.getState("ff:lamp_colors_off") === '10_off' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="north","ff:lamp_colors_on"="10_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '10_off' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="south","ff:lamp_colors_on"="10_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '10_off' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="west","ff:lamp_colors_on"="10_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '10_off' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="east","ff:lamp_colors_on"="10_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // blue
            if (block.permutation.getState("ff:lamp_colors_off") === '11_off' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="north","ff:lamp_colors_on"="11_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '11_off' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="south","ff:lamp_colors_on"="11_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '11_off' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="west","ff:lamp_colors_on"="11_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '11_off' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="east","ff:lamp_colors_on"="11_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // brown
            if (block.permutation.getState("ff:lamp_colors_off") === '12_off' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="north","ff:lamp_colors_on"="12_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '12_off' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="south","ff:lamp_colors_on"="12_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '12_off' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="west","ff:lamp_colors_on"="12_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '12_off' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="east","ff:lamp_colors_on"="12_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // green
            if (block.permutation.getState("ff:lamp_colors_off") === '13_off' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="north","ff:lamp_colors_on"="13_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '13_off' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="south","ff:lamp_colors_on"="13_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '13_off' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="west","ff:lamp_colors_on"="13_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '13_off' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="east","ff:lamp_colors_on"="13_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // red
            if (block.permutation.getState("ff:lamp_colors_off") === '14_off' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="north","ff:lamp_colors_on"="14_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '14_off' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="south","ff:lamp_colors_on"="14_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '14_off' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="west","ff:lamp_colors_on"="14_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '14_off' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="east","ff:lamp_colors_on"="14_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // black
            if (block.permutation.getState("ff:lamp_colors_off") === '15_off' && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="north","ff:lamp_colors_on"="15_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '15_off' && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="south","ff:lamp_colors_on"="15_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '15_off' && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="west","ff:lamp_colors_on"="15_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ff:lamp_colors_off") === '15_off' && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:small_lamp_on["minecraft:cardinal_direction"="east","ff:lamp_colors_on"="15_on"]`);
                player.playSound("ff:lamp_on");
                return;
            }
        }
    });
});


world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockTypeRegistry.registerCustomComponent('ff:test_cushion', {
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
    initEvent.blockTypeRegistry.registerCustomComponent('ff:sink_open_close', {
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
    initEvent.blockTypeRegistry.registerCustomComponent('ff:trash_items', {
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
    initEvent.blockTypeRegistry.registerCustomComponent('ff:add_breads', {
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
    initEvent.blockTypeRegistry.registerCustomComponent('ff:give_breads', {
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
    initEvent.blockTypeRegistry.registerCustomComponent('ff:smoke_toaster', {
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
    initEvent.blockTypeRegistry.registerCustomComponent('ff:water_particle', {
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