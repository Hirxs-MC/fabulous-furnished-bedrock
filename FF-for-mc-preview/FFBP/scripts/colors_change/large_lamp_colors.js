import { world, system, BlockPermutation, ItemStack } from '@minecraft/server'

world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:large_lamp_function_on', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            // white
            if (block.permutation.getState("ef:colors") === 0 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="north","ef:colors"=0]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 0 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="south","ef:colors"=0]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 0 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="west","ef:colors"=0]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 0 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="east","ef:colors"=0]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // orange
            if (block.permutation.getState("ef:colors") === 1 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="north","ef:colors"=1]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 1 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="south","ef:colors"=1]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 1 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="west","ef:colors"=1]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 1 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="east","ef:colors"=1]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // magenta
            if (block.permutation.getState("ef:colors") === 2 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="north","ef:colors"=2]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 2 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="south","ef:colors"=2]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 2 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="west","ef:colors"=2]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 2 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="east","ef:colors"=2]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // light_blue
            if (block.permutation.getState("ef:colors") === 3 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="north","ef:colors"=3]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 3 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="south","ef:colors"=3]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 3 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="west","ef:colors"=3]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 3 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="east","ef:colors"=3]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // yellow
            if (block.permutation.getState("ef:colors") === 4 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="north","ef:colors"=4]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 4 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="south","ef:colors"=4]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 4 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="west","ef:colors"=4]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 4 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="east","ef:colors"=4]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // lime
            if (block.permutation.getState("ef:colors") === 5 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="north","ef:colors"=5]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 5 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="south","ef:colors"=5]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 5 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="west","ef:colors"=5]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 5 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="east","ef:colors"=5]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // pink
            if (block.permutation.getState("ef:colors") === 6 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="north","ef:colors"=6]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 6 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="south","ef:colors"=6]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 6 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="west","ef:colors"=6]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 6 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="east","ef:colors"=6]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // gray
            if (block.permutation.getState("ef:colors") === 7 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="north","ef:colors"=7]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 7 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="south","ef:colors"=7]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 7 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="west","ef:colors"=7]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 7 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="east","ef:colors"=7]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // light_gray
            if (block.permutation.getState("ef:colors") === 8 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="north","ef:colors"=8]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 8 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="south","ef:colors"=8]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 8 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="west","ef:colors"=8]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 8 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="east","ef:colors"=8]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // cyan
            if (block.permutation.getState("ef:colors") === 9 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="north","ef:colors"=9]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 9 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="south","ef:colors"=9]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 9 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="west","ef:colors"=9]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 9 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="east","ef:colors"=9]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // purple
            if (block.permutation.getState("ef:colors") === 10 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="north","ef:colors"=10]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 10 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="south","ef:colors"=10]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 10 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="west","ef:colors"=10]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 10 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="east","ef:colors"=10]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // blue
            if (block.permutation.getState("ef:colors") === 11 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="north","ef:colors"=11]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 11 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="south","ef:colors"=11]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 11 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="west","ef:colors"=11]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 11 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="east","ef:colors"=11]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // brown
            if (block.permutation.getState("ef:colors") === 12 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="north","ef:colors"=12]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 12 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="south","ef:colors"=12]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 12 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="west","ef:colors"=12]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 12 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="east","ef:colors"=12]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // green
            if (block.permutation.getState("ef:colors") === 13 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="north","ef:colors"=13]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 13 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="south","ef:colors"=13]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 13 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="west","ef:colors"=13]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 13 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="east","ef:colors"=13]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // red
            if (block.permutation.getState("ef:colors") === 14 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="north","ef:colors"=14]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 14 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="south","ef:colors"=14]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 14 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="west","ef:colors"=14]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 14 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="east","ef:colors"=14]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // black
            if (block.permutation.getState("ef:colors") === 15 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="north","ef:colors"=15]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 15 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="south","ef:colors"=15]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 15 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="west","ef:colors"=15]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 15 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp["minecraft:cardinal_direction"="east","ef:colors"=15]`);
                player.playSound("ff:lamp_on");
                return;
            }
        }
    });
});

world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('ff:large_lamp_function_off', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            // white
            if (block.permutation.getState("ef:colors") === 0 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="north","ef:colors"=0]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 0 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="south","ef:colors"=0]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 0 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="west","ef:colors"=0]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 0 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="east","ef:colors"=0]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // orange
            if (block.permutation.getState("ef:colors") === 1 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="north","ef:colors"=1]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 1 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="south","ef:colors"=1]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 1 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="west","ef:colors"=1]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 1 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="east","ef:colors"=1]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // magenta
            if (block.permutation.getState("ef:colors") === 2 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="north","ef:colors"=2]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 2 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="south","ef:colors"=2]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 2 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="west","ef:colors"=2]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 2 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="east","ef:colors"=2]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // light_blue
            if (block.permutation.getState("ef:colors") === 3 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="north","ef:colors"=3]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 3 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="south","ef:colors"=3]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 3 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="west","ef:colors"=3]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 3 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="east","ef:colors"=3]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // yellow
            if (block.permutation.getState("ef:colors") === 4 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="north","ef:colors"=4]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 4 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="south","ef:colors"=4]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 4 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="west","ef:colors"=4]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 4 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="east","ef:colors"=4]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // lime
            if (block.permutation.getState("ef:colors") === 5 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="north","ef:colors"=5]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 5 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="south","ef:colors"=5]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 5 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="west","ef:colors"=5]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 5 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="east","ef:colors"=5]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // pink
            if (block.permutation.getState("ef:colors") === 6 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="north","ef:colors"=6]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 6 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="south","ef:colors"=6]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 6 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="west","ef:colors"=6]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 6 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="east","ef:colors"=6]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // gray
            if (block.permutation.getState("ef:colors") === 7 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="north","ef:colors"=7]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 7 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="south","ef:colors"=7]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 7 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="west","ef:colors"=7]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 7 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="east","ef:colors"=7]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // light_gray
            if (block.permutation.getState("ef:colors") === 8 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="north","ef:colors"=8]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 8 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="south","ef:colors"=8]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 8 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="west","ef:colors"=8]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 8 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="east","ef:colors"=8]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // cyan
            if (block.permutation.getState("ef:colors") === 9 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="north","ef:colors"=9]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 9 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="south","ef:colors"=9]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 9 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="west","ef:colors"=9]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 9 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="east","ef:colors"=9]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // purple
            if (block.permutation.getState("ef:colors") === 10 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="north","ef:colors"=10]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 10 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="south","ef:colors"=10]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 10 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="west","ef:colors"=10]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 10 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="east","ef:colors"=10]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // blue
            if (block.permutation.getState("ef:colors") === 11 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="north","ef:colors"=11]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 11 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="south","ef:colors"=11]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 11 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="west","ef:colors"=11]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 11 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="east","ef:colors"=11]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // brown
            if (block.permutation.getState("ef:colors") === 12 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="north","ef:colors"=12]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 12 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="south","ef:colors"=12]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 12 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="west","ef:colors"=12]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 12 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="east","ef:colors"=12]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // green
            if (block.permutation.getState("ef:colors") === 13 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="north","ef:colors"=13]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 13 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="south","ef:colors"=13]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 13 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="west","ef:colors"=13]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 13 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="east","ef:colors"=13]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // red
            if (block.permutation.getState("ef:colors") === 14 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="north","ef:colors"=14]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 14 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="south","ef:colors"=14]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 14 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="west","ef:colors"=14]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 14 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="east","ef:colors"=14]`);
                player.playSound("ff:lamp_on");
                return;
            }
            // black
            if (block.permutation.getState("ef:colors") === 15 && block.permutation.getState("minecraft:cardinal_direction") === "north") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="north","ef:colors"=15]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 15 && block.permutation.getState("minecraft:cardinal_direction") === "south") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="south","ef:colors"=15]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 15 && block.permutation.getState("minecraft:cardinal_direction") === "west") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="west","ef:colors"=15]`);
                player.playSound("ff:lamp_on");
                return;
            }
            if (block.permutation.getState("ef:colors") === 15 && block.permutation.getState("minecraft:cardinal_direction") === "east") {
                block.dimension.runCommand(`setblock ${x} ${y} ${z} ff:large_lamp_on["minecraft:cardinal_direction"="east","ef:colors"=15]`);
                player.playSound("ff:lamp_on");
                return;
            }
        }
    });
});

