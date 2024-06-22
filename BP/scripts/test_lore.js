import { world, system } from "@minecraft/server";

function StartCheck() {
    for (const player of world.getPlayers()) {
        const equip = player.getComponent('equippable');
        const item = equip.getEquipment('Mainhand');
        if (!item) continue;

        const lore = item.getLore();
        if (!lore.includes('Specific line')) continue;

        // Do something
    }
    system.run(StartCheck);
}
StartCheck();