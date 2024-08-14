import { world } from "@minecraft/server";

world.afterEvents.weatherChange.subscribe((event) => {
    const { dimension, lightning, raining } = event
    if (lightning) {
        console.log(`It is currently lightning in ${dimension}`);
    }
    if (raining) {
        console.log(`It is currently raining in ${dimension}`);
    }
})