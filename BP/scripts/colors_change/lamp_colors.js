import { world, system, BlockPermutation, ItemStack } from '@minecraft/server'

world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:lamp_function_on', {
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
    initEvent.blockComponentRegistry.registerCustomComponent('ff:lamp_function_off', {
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

