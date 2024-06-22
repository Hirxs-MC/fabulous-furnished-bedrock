import { world, BlockPermutation, ItemStack } from '@minecraft/server'

world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockTypeRegistry.registerCustomComponent('ff:lamp_function', {
        onPlayerInteract: e => {
            const { player, block } = e;
            const { x, y, z } = block.location;
            const updates = e.block.permutation.getState("ff:lamp_state");
            const update = block.permutation.withState("ff:lamp_state", updates + 1);

            if (block.permutation.getState("ff:lamp_state") === 0) {
                player.playSound("random.click");
                block.setPermutation(update);
                return;
            }
            if (block.permutation.getState("ff:lamp_state") === 1) {
                player.playSound("random.click");
                block.setPermutation(update);
            }
        }
    });
});

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
            if (player.isSneaking) {
                player.playSound("fall.wood");
                block.setPermutation(book_remove);
            }
        }
    });
});