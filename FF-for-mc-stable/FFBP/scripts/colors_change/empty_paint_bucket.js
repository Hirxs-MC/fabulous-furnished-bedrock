import { world, system, BlockPermutation, ItemStack } from '@minecraft/server'

world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:add_dye_color', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const equipment = player.getComponent('equippable');
            const selectedItem = equipment.getEquipment('Mainhand');
            /// white
            if (selectedItem && (selectedItem.typeId === 'minecraft:white_dye') && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_white["minecraft:cardinal_direction"="north"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:white_dye') && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_white["minecraft:cardinal_direction"="south"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:white_dye') && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_white["minecraft:cardinal_direction"="west"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:white_dye') && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_white["minecraft:cardinal_direction"="east"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            /// orange
            if (selectedItem && (selectedItem.typeId === 'minecraft:orange_dye') && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_orange["minecraft:cardinal_direction"="north"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:orange_dye') && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_orange["minecraft:cardinal_direction"="south"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:orange_dye') && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_orange["minecraft:cardinal_direction"="west"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:orange_dye') && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_orange["minecraft:cardinal_direction"="east"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            /// magenta
            if (selectedItem && (selectedItem.typeId === 'minecraft:magenta_dye') && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_magenta["minecraft:cardinal_direction"="north"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:magenta_dye') && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_magenta["minecraft:cardinal_direction"="south"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:magenta_dye') && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_magenta["minecraft:cardinal_direction"="west"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:magenta_dye') && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_magenta["minecraft:cardinal_direction"="east"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            /// light blue
            if (selectedItem && (selectedItem.typeId === 'minecraft:light_blue_dye') && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_light_blue["minecraft:cardinal_direction"="north"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:light_blue_dye') && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_light_blue["minecraft:cardinal_direction"="south"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:light_blue_dye') && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_light_blue["minecraft:cardinal_direction"="west"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:light_blue_dye') && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_light_blue["minecraft:cardinal_direction"="east"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            /// yellow
            if (selectedItem && (selectedItem.typeId === 'minecraft:yellow_dye') && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_yellow["minecraft:cardinal_direction"="north"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:yellow_dye') && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_yellow["minecraft:cardinal_direction"="south"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:yellow_dye') && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_yellow["minecraft:cardinal_direction"="west"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:yellow_dye') && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_yellow["minecraft:cardinal_direction"="east"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            /// lime
            if (selectedItem && (selectedItem.typeId === 'minecraft:lime_dye') && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_lime["minecraft:cardinal_direction"="north"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:lime_dye') && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_lime["minecraft:cardinal_direction"="south"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:lime_dye') && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_lime["minecraft:cardinal_direction"="west"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:lime_dye') && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_lime["minecraft:cardinal_direction"="east"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            /// pink
            if (selectedItem && (selectedItem.typeId === 'minecraft:pink_dye') && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_pink["minecraft:cardinal_direction"="north"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:pink_dye') && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_pink["minecraft:cardinal_direction"="south"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:pink_dye') && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_pink["minecraft:cardinal_direction"="west"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:pink_dye') && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_pink["minecraft:cardinal_direction"="east"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            /// gray
            if (selectedItem && (selectedItem.typeId === 'minecraft:gray_dye') && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_gray["minecraft:cardinal_direction"="north"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:gray_dye') && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_gray["minecraft:cardinal_direction"="south"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:gray_dye') && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_gray["minecraft:cardinal_direction"="west"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:gray_dye') && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_gray["minecraft:cardinal_direction"="east"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            /// light gray
            if (selectedItem && (selectedItem.typeId === 'minecraft:light_gray_dye') && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_light_gray["minecraft:cardinal_direction"="north"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:light_gray_dye') && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_light_gray["minecraft:cardinal_direction"="south"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:light_gray_dye') && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_light_gray["minecraft:cardinal_direction"="west"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:light_gray_dye') && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_light_gray["minecraft:cardinal_direction"="east"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            /// cyan
            if (selectedItem && (selectedItem.typeId === 'minecraft:cyan_dye') && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_cyan["minecraft:cardinal_direction"="north"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:cyan_dye') && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_cyan["minecraft:cardinal_direction"="south"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:cyan_dye') && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_cyan["minecraft:cardinal_direction"="west"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:cyan_dye') && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_cyan["minecraft:cardinal_direction"="east"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            /// purple
            if (selectedItem && (selectedItem.typeId === 'minecraft:purple_dye') && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_purple["minecraft:cardinal_direction"="north"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:purple_dye') && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_purple["minecraft:cardinal_direction"="south"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:purple_dye') && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_purple["minecraft:cardinal_direction"="west"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:purple_dye') && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_purple["minecraft:cardinal_direction"="east"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            /// blue
            if (selectedItem && (selectedItem.typeId === 'minecraft:blue_dye') && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_blue["minecraft:cardinal_direction"="north"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:blue_dye') && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_blue["minecraft:cardinal_direction"="south"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:blue_dye') && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_blue["minecraft:cardinal_direction"="west"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:blue_dye') && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_blue["minecraft:cardinal_direction"="east"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            /// brown
            if (selectedItem && (selectedItem.typeId === 'minecraft:brown_dye') && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_brown["minecraft:cardinal_direction"="north"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:brown_dye') && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_brown["minecraft:cardinal_direction"="south"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:brown_dye') && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_brown["minecraft:cardinal_direction"="west"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:brown_dye') && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_brown["minecraft:cardinal_direction"="east"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            /// green
            if (selectedItem && (selectedItem.typeId === 'minecraft:green_dye') && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_green["minecraft:cardinal_direction"="north"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:green_dye') && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_green["minecraft:cardinal_direction"="south"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:green_dye') && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_green["minecraft:cardinal_direction"="west"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:green_dye') && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_green["minecraft:cardinal_direction"="east"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            /// red
            if (selectedItem && (selectedItem.typeId === 'minecraft:red_dye') && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_red["minecraft:cardinal_direction"="north"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:red_dye') && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_red["minecraft:cardinal_direction"="south"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:red_dye') && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_red["minecraft:cardinal_direction"="west"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:red_dye') && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_red["minecraft:cardinal_direction"="east"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            /// black
            if (selectedItem && (selectedItem.typeId === 'minecraft:black_dye') && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_black["minecraft:cardinal_direction"="north"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:black_dye') && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_black["minecraft:cardinal_direction"="south"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:black_dye') && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_black["minecraft:cardinal_direction"="west"]`);
                player.playSound("bucket.fill_water");
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                return;
            }
            if (selectedItem && (selectedItem.typeId === 'minecraft:black_dye') && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:paint_bucket_black["minecraft:cardinal_direction"="east"]`);
                player.playSound("bucket.fill_water");
                return;
            }
        }
    });
});

/// Paint Buckets

/// white
world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:white_bucket_function', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const paint_remain = e.block.permutation.getState("ff:uses");
            const usePaintDye = block.permutation.withState("ff:uses", paint_remain + 1);
            const white_dye = new ItemStack("minecraft:white_dye");
            const equipment = player.getComponent('equippable');
            const selectedItem = equipment.getEquipment('Mainhand');
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") < 8) {
                block.setPermutation(usePaintDye);
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_white`);
                player.playSound("bucket.fill_water");
                block.dimension.spawnParticle("ff:paint_drip_white", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }

                return;
            }
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") === 8) {
                block.dimension.spawnParticle("ff:paint_drip_white", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                block.setPermutation(usePaintDye);
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                player.playSound("bucket.fill_water");
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_white`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_white["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_white["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_white["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_white["minecraft:cardinal_direction"="east"]`);
                return;
            }
            if (player.isSneaking && block.permutation.getState("ff:uses") === 1) {
                block.dimension.spawnParticle("ff:paint_drip_white", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                player.playSound("bucket.fill_water");
                block.dimension.spawnItem(white_dye, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_white["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_white["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_white["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_white["minecraft:cardinal_direction"="east"]`);
            }
        }
    });
});
/// orange
world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:orange_bucket_function', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const paint_remain = e.block.permutation.getState("ff:uses");
            const usePaintDye = block.permutation.withState("ff:uses", paint_remain + 1);
            const orange_dye = new ItemStack("minecraft:orange_dye");
            const equipment = player.getComponent('equippable');
            const selectedItem = equipment.getEquipment('Mainhand');
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") < 8) {
                block.setPermutation(usePaintDye);
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_orange`);
                player.playSound("bucket.fill_water");
                block.dimension.spawnParticle("ff:paint_drip_orange", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }

                return;
            }
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") === 8) {
                block.dimension.spawnParticle("ff:paint_drip_orange", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                block.setPermutation(usePaintDye);
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                player.playSound("bucket.fill_water");
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_orange`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_orange["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_orange["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_orange["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_orange["minecraft:cardinal_direction"="east"]`);
                return;
            }
            if (player.isSneaking && block.permutation.getState("ff:uses") === 1) {
                block.dimension.spawnParticle("ff:paint_drip_orange", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                player.playSound("bucket.fill_water");
                block.dimension.spawnItem(orange_dye, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_orange["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_orange["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_orange["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_orange["minecraft:cardinal_direction"="east"]`);
            }
        }
    });
});
/// magenta
world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:magenta_bucket_function', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const paint_remain = e.block.permutation.getState("ff:uses");
            const usePaintDye = block.permutation.withState("ff:uses", paint_remain + 1);
            const magenta_dye = new ItemStack("minecraft:magenta_dye");
            const equipment = player.getComponent('equippable');
            const selectedItem = equipment.getEquipment('Mainhand');
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") < 8) {
                block.setPermutation(usePaintDye);
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_magenta`);
                player.playSound("bucket.fill_water");
                block.dimension.spawnParticle("ff:paint_drip_magenta", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }

                return;
            }
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") === 8) {
                block.dimension.spawnParticle("ff:paint_drip_magenta", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                block.setPermutation(usePaintDye);
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                player.playSound("bucket.fill_water");
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_magenta`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_magenta["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_magenta["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_magenta["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_magenta["minecraft:cardinal_direction"="east"]`);
                return;
            }
            if (player.isSneaking && block.permutation.getState("ff:uses") === 1) {
                block.dimension.spawnParticle("ff:paint_drip_magenta", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                player.playSound("bucket.fill_water");
                block.dimension.spawnItem(magenta_dye, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_magenta["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_magenta["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_magenta["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_magenta["minecraft:cardinal_direction"="east"]`);
            }
        }
    });
});
/// light blue
world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:light_blue_bucket_function', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const paint_remain = e.block.permutation.getState("ff:uses");
            const usePaintDye = block.permutation.withState("ff:uses", paint_remain + 1);
            const light_blue_dye = new ItemStack("minecraft:light_blue_dye");
            const equipment = player.getComponent('equippable');
            const selectedItem = equipment.getEquipment('Mainhand');
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") < 8) {
                block.setPermutation(usePaintDye);
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_light_blue`);
                player.playSound("bucket.fill_water");
                block.dimension.spawnParticle("ff:paint_drip_light_blue", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }

                return;
            }
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") === 8) {
                block.dimension.spawnParticle("ff:paint_drip_light_blue", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                block.setPermutation(usePaintDye);
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                player.playSound("bucket.fill_water");
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_light_blue`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_light_blue["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_light_blue["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_light_blue["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_light_blue["minecraft:cardinal_direction"="east"]`);
                return;
            }
            if (player.isSneaking && block.permutation.getState("ff:uses") === 1) {
                block.dimension.spawnParticle("ff:paint_drip_light_blue", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                player.playSound("bucket.fill_water");
                block.dimension.spawnItem(light_blue_dye, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_light_blue["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_light_blue["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_light_blue["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_light_blue["minecraft:cardinal_direction"="east"]`);
            }
        }
    });
});
/// yellow
world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:yellow_bucket_function', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const paint_remain = e.block.permutation.getState("ff:uses");
            const usePaintDye = block.permutation.withState("ff:uses", paint_remain + 1);
            const yellow_dye = new ItemStack("minecraft:yellow_dye");
            const equipment = player.getComponent('equippable');
            const selectedItem = equipment.getEquipment('Mainhand');
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") < 8) {
                block.setPermutation(usePaintDye);
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_yellow`);
                player.playSound("bucket.fill_water");
                block.dimension.spawnParticle("ff:paint_drip_yellow", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }

                return;
            }
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") === 8) {
                block.dimension.spawnParticle("ff:paint_drip_yellow", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                block.setPermutation(usePaintDye);
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                player.playSound("bucket.fill_water");
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_yellow`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_yellow["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_yellow["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_yellow["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_yellow["minecraft:cardinal_direction"="east"]`);
                return;
            }
            if (player.isSneaking && block.permutation.getState("ff:uses") === 1) {
                block.dimension.spawnParticle("ff:paint_drip_yellow", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                player.playSound("bucket.fill_water");
                block.dimension.spawnItem(yellow_dye, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_yellow["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_yellow["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_yellow["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_yellow["minecraft:cardinal_direction"="east"]`);
            }
        }
    });
});
/// lime
world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:lime_bucket_function', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const paint_remain = e.block.permutation.getState("ff:uses");
            const usePaintDye = block.permutation.withState("ff:uses", paint_remain + 1);
            const lime_dye = new ItemStack("minecraft:lime_dye");
            const equipment = player.getComponent('equippable');
            const selectedItem = equipment.getEquipment('Mainhand');
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") < 8) {
                block.setPermutation(usePaintDye);
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_lime`);
                player.playSound("bucket.fill_water");
                block.dimension.spawnParticle("ff:paint_drip_lime", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }

                return;
            }
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") === 8) {
                block.dimension.spawnParticle("ff:paint_drip_lime", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                block.setPermutation(usePaintDye);
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                player.playSound("bucket.fill_water");
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_lime`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_lime["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_lime["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_lime["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_lime["minecraft:cardinal_direction"="east"]`);
                return;
            }
            if (player.isSneaking && block.permutation.getState("ff:uses") === 1) {
                block.dimension.spawnParticle("ff:paint_drip_lime", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                player.playSound("bucket.fill_water");
                block.dimension.spawnItem(lime_dye, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_lime["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_lime["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_lime["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_lime["minecraft:cardinal_direction"="east"]`);
            }
        }
    });
});
/// pink
world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:pink_bucket_function', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const paint_remain = e.block.permutation.getState("ff:uses");
            const usePaintDye = block.permutation.withState("ff:uses", paint_remain + 1);
            const pink_dye = new ItemStack("minecraft:pink_dye");
            const equipment = player.getComponent('equippable');
            const selectedItem = equipment.getEquipment('Mainhand');
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") < 8) {
                block.setPermutation(usePaintDye);
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_pink`);
                player.playSound("bucket.fill_water");
                block.dimension.spawnParticle("ff:paint_drip_pink", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }

                return;
            }
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") === 8) {
                block.dimension.spawnParticle("ff:paint_drip_pink", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                block.setPermutation(usePaintDye);
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                player.playSound("bucket.fill_water");
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_pink`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_pink["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_pink["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_pink["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_pink["minecraft:cardinal_direction"="east"]`);
                return;
            }
            if (player.isSneaking && block.permutation.getState("ff:uses") === 1) {
                block.dimension.spawnParticle("ff:paint_drip_pink", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                player.playSound("bucket.fill_water");
                block.dimension.spawnItem(pink_dye, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_pink["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_pink["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_pink["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_pink["minecraft:cardinal_direction"="east"]`);
            }
        }
    });
});
/// gray
world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:gray_bucket_function', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const paint_remain = e.block.permutation.getState("ff:uses");
            const usePaintDye = block.permutation.withState("ff:uses", paint_remain + 1);
            const gray_dye = new ItemStack("minecraft:gray_dye");
            const equipment = player.getComponent('equippable');
            const selectedItem = equipment.getEquipment('Mainhand');
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") < 8) {
                block.setPermutation(usePaintDye);
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_gray`);
                player.playSound("bucket.fill_water");
                block.dimension.spawnParticle("ff:paint_drip_gray", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }

                return;
            }
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") === 8) {
                block.dimension.spawnParticle("ff:paint_drip_gray", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                block.setPermutation(usePaintDye);
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                player.playSound("bucket.fill_water");
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_gray`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_gray["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_gray["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_gray["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_gray["minecraft:cardinal_direction"="east"]`);
                return;
            }
            if (player.isSneaking && block.permutation.getState("ff:uses") === 1) {
                block.dimension.spawnParticle("ff:paint_drip_gray", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                player.playSound("bucket.fill_water");
                block.dimension.spawnItem(gray_dye, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_gray["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_gray["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_gray["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_gray["minecraft:cardinal_direction"="east"]`);
            }
        }
    });
});
/// light gray
world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:light_gray_bucket_function', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const paint_remain = e.block.permutation.getState("ff:uses");
            const usePaintDye = block.permutation.withState("ff:uses", paint_remain + 1);
            const light_gray_dye = new ItemStack("minecraft:light_gray_dye");
            const equipment = player.getComponent('equippable');
            const selectedItem = equipment.getEquipment('Mainhand');
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") < 8) {
                block.setPermutation(usePaintDye);
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_light_gray`);
                player.playSound("bucket.fill_water");
                block.dimension.spawnParticle("ff:paint_drip_light_gray", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }

                return;
            }
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") === 8) {
                block.dimension.spawnParticle("ff:paint_drip_light_gray", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                block.setPermutation(usePaintDye);
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                player.playSound("bucket.fill_water");
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_light_gray`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_light_gray["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_light_gray["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_light_gray["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_light_gray["minecraft:cardinal_direction"="east"]`);
                return;
            }
            if (player.isSneaking && block.permutation.getState("ff:uses") === 1) {
                block.dimension.spawnParticle("ff:paint_drip_light_gray", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                player.playSound("bucket.fill_water");
                block.dimension.spawnItem(light_gray_dye, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_light_gray["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_light_gray["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_light_gray["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_light_gray["minecraft:cardinal_direction"="east"]`);
            }
        }
    });
});
/// cyan
world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:cyan_bucket_function', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const paint_remain = e.block.permutation.getState("ff:uses");
            const usePaintDye = block.permutation.withState("ff:uses", paint_remain + 1);
            const cyan_dye = new ItemStack("minecraft:cyan_dye");
            const equipment = player.getComponent('equippable');
            const selectedItem = equipment.getEquipment('Mainhand');
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") < 8) {
                block.setPermutation(usePaintDye);
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_cyan`);
                player.playSound("bucket.fill_water");
                block.dimension.spawnParticle("ff:paint_drip_cyan", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }

                return;
            }
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") === 8) {
                block.dimension.spawnParticle("ff:paint_drip_cyan", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                block.setPermutation(usePaintDye);
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                player.playSound("bucket.fill_water");
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_cyan`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_cyan["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_cyan["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_cyan["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_cyan["minecraft:cardinal_direction"="east"]`);
                return;
            }
            if (player.isSneaking && block.permutation.getState("ff:uses") === 1) {
                block.dimension.spawnParticle("ff:paint_drip_cyan", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                player.playSound("bucket.fill_water");
                block.dimension.spawnItem(cyan_dye, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_cyan["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_cyan["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_cyan["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_cyan["minecraft:cardinal_direction"="east"]`);
            }
        }
    });
});
/// purple
world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:purple_bucket_function', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const paint_remain = e.block.permutation.getState("ff:uses");
            const usePaintDye = block.permutation.withState("ff:uses", paint_remain + 1);
            const purple_dye = new ItemStack("minecraft:purple_dye");
            const equipment = player.getComponent('equippable');
            const selectedItem = equipment.getEquipment('Mainhand');
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") < 8) {
                block.setPermutation(usePaintDye);
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_purple`);
                player.playSound("bucket.fill_water");
                block.dimension.spawnParticle("ff:paint_drip_purple", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }

                return;
            }
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") === 8) {
                block.dimension.spawnParticle("ff:paint_drip_purple", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                block.setPermutation(usePaintDye);
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                player.playSound("bucket.fill_water");
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_purple`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_purple["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_purple["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_purple["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_purple["minecraft:cardinal_direction"="east"]`);
                return;
            }
            if (player.isSneaking && block.permutation.getState("ff:uses") === 1) {
                block.dimension.spawnParticle("ff:paint_drip_purple", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                player.playSound("bucket.fill_water");
                block.dimension.spawnItem(purple_dye, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_purple["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_purple["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_purple["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_purple["minecraft:cardinal_direction"="east"]`);
            }
        }
    });
});
/// blue
world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:blue_bucket_function', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const paint_remain = e.block.permutation.getState("ff:uses");
            const usePaintDye = block.permutation.withState("ff:uses", paint_remain + 1);
            const blue_dye = new ItemStack("minecraft:blue_dye");
            const equipment = player.getComponent('equippable');
            const selectedItem = equipment.getEquipment('Mainhand');
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") < 8) {
                block.setPermutation(usePaintDye);
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_blue`);
                player.playSound("bucket.fill_water");
                block.dimension.spawnParticle("ff:paint_drip_blue", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }

                return;
            }
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") === 8) {
                block.dimension.spawnParticle("ff:paint_drip_blue", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                block.setPermutation(usePaintDye);
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                player.playSound("bucket.fill_water");
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_blue`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_blue["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_blue["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_blue["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_blue["minecraft:cardinal_direction"="east"]`);
                return;
            }
            if (player.isSneaking && block.permutation.getState("ff:uses") === 1) {
                block.dimension.spawnParticle("ff:paint_drip_blue", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                player.playSound("bucket.fill_water");
                block.dimension.spawnItem(blue_dye, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_blue["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_blue["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_blue["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_blue["minecraft:cardinal_direction"="east"]`);
            }
        }
    });
});
/// brown
world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:brown_bucket_function', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const paint_remain = e.block.permutation.getState("ff:uses");
            const usePaintDye = block.permutation.withState("ff:uses", paint_remain + 1);
            const brown_dye = new ItemStack("minecraft:brown_dye");
            const equipment = player.getComponent('equippable');
            const selectedItem = equipment.getEquipment('Mainhand');
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") < 8) {
                block.setPermutation(usePaintDye);
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_brown`);
                player.playSound("bucket.fill_water");
                block.dimension.spawnParticle("ff:paint_drip_brown", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }

                return;
            }
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") === 8) {
                block.dimension.spawnParticle("ff:paint_drip_brown", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                block.setPermutation(usePaintDye);
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                player.playSound("bucket.fill_water");
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_brown`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_brown["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_brown["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_brown["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_brown["minecraft:cardinal_direction"="east"]`);
                return;
            }
            if (player.isSneaking && block.permutation.getState("ff:uses") === 1) {
                block.dimension.spawnParticle("ff:paint_drip_brown", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                player.playSound("bucket.fill_water");
                block.dimension.spawnItem(brown_dye, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_brown["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_brown["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_brown["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_brown["minecraft:cardinal_direction"="east"]`);
            }
        }
    });
});
/// green
world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:green_bucket_function', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const paint_remain = e.block.permutation.getState("ff:uses");
            const usePaintDye = block.permutation.withState("ff:uses", paint_remain + 1);
            const green_dye = new ItemStack("minecraft:green_dye");
            const equipment = player.getComponent('equippable');
            const selectedItem = equipment.getEquipment('Mainhand');
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") < 8) {
                block.setPermutation(usePaintDye);
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_green`);
                player.playSound("bucket.fill_water");
                block.dimension.spawnParticle("ff:paint_drip_green", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }

                return;
            }
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") === 8) {
                block.dimension.spawnParticle("ff:paint_drip_green", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                block.setPermutation(usePaintDye);
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                player.playSound("bucket.fill_water");
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_green`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_green["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_green["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_green["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_green["minecraft:cardinal_direction"="east"]`);
                return;
            }
            if (player.isSneaking && block.permutation.getState("ff:uses") === 1) {
                block.dimension.spawnParticle("ff:paint_drip_green", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                player.playSound("bucket.fill_water");
                block.dimension.spawnItem(green_dye, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_green["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_green["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_green["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_green["minecraft:cardinal_direction"="east"]`);
            }
        }
    });
});
/// red
world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:red_bucket_function', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const paint_remain = e.block.permutation.getState("ff:uses");
            const usePaintDye = block.permutation.withState("ff:uses", paint_remain + 1);
            const red_dye = new ItemStack("minecraft:red_dye");
            const equipment = player.getComponent('equippable');
            const selectedItem = equipment.getEquipment('Mainhand');
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") < 8) {
                block.setPermutation(usePaintDye);
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_red`);
                player.playSound("bucket.fill_water");
                block.dimension.spawnParticle("ff:paint_drip_red", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }

                return;
            }
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") === 8) {
                block.dimension.spawnParticle("ff:paint_drip_red", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                block.setPermutation(usePaintDye);
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                player.playSound("bucket.fill_water");
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_red`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_red["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_red["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_red["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_red["minecraft:cardinal_direction"="east"]`);
                return;
            }
            if (player.isSneaking && block.permutation.getState("ff:uses") === 1) {
                block.dimension.spawnParticle("ff:paint_drip_red", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                player.playSound("bucket.fill_water");
                block.dimension.spawnItem(red_dye, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_red["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_red["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_red["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_red["minecraft:cardinal_direction"="east"]`);
            }
        }
    });
});
/// black
world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:black_bucket_function', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const paint_remain = e.block.permutation.getState("ff:uses");
            const usePaintDye = block.permutation.withState("ff:uses", paint_remain + 1);
            const black_dye = new ItemStack("minecraft:black_dye");
            const equipment = player.getComponent('equippable');
            const selectedItem = equipment.getEquipment('Mainhand');
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") < 8) {
                block.setPermutation(usePaintDye);
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_black`);
                player.playSound("bucket.fill_water");
                block.dimension.spawnParticle("ff:paint_drip_black", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }

                return;
            }
            if (selectedItem && (selectedItem.typeId === 'ef:brush_empty') && block.permutation.getState("ff:uses") === 8) {
                block.dimension.spawnParticle("ff:paint_drip_black", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                block.setPermutation(usePaintDye);
                if (selectedItem.amount > 1) {
                    selectedItem.amount -= 1;
                    equipment.setEquipment('Mainhand', selectedItem);
                } else {
                    equipment.setEquipment('Mainhand', undefined);
                }
                player.playSound("bucket.fill_water");
                block.dimension.runCommand(`loot spawn ${x} ${y} ${z} loot brush_with_paint_black`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_black["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_black["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_black["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_black["minecraft:cardinal_direction"="east"]`);
                return;
            }
            if (player.isSneaking && block.permutation.getState("ff:uses") === 1) {
                block.dimension.spawnParticle("ff:paint_drip_black", { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
                player.playSound("bucket.fill_water");
                block.dimension.spawnItem(black_dye, { x: block.location.x + 0.5, y: block.location.y + 1, z: block.location.z + 0.5 });
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="north"] replace ff:paint_bucket_black["minecraft:cardinal_direction"="north"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="south"] replace ff:paint_bucket_black["minecraft:cardinal_direction"="south"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="west"] replace ff:paint_bucket_black["minecraft:cardinal_direction"="west"]`);
                block.dimension.runCommand(`fill ${x} ${y} ${z} ${x} ${y} ${z} ff:paint_bucket_empty["minecraft:cardinal_direction"="east"] replace ff:paint_bucket_black["minecraft:cardinal_direction"="east"]`);
            }
        }
    });
});