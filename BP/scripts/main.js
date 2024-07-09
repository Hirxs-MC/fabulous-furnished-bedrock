import * as server from "@minecraft/server"

import 'custom_components'
import 'bounciness_test'
import 'wooden_supports_vertical'
import 'tables_connect'
import 'fences_onplayerdestroy'
import 'fences_onplayerinteract'
import 'fences_onplayerplaced'
import 'test_brush'
import 'wooden_chair_test'
import 'stove_and_pan'

server.world.afterEvents.playerPlaceBlock.subscribe(result => {
    if (result.block.typeId == "ff:pan") {
        result.block.dimension.spawnEntity("ff:pan_bottom_left", { x: result.block.x + 0.40, y: result.block.y, z: result.block.z + 0.60 })
        result.block.dimension.spawnEntity("ff:pan_bottom_right", { x: result.block.x + 0.60, y: result.block.y, z: result.block.z + 0.60 })
        result.block.dimension.spawnEntity("ff:pan_top_left", { x: result.block.x + 0.40, y: result.block.y, z: result.block.z + 0.40 })
        result.block.dimension.spawnEntity("ff:pan_top_right", { x: result.block.x + 0.60, y: result.block.y, z: result.block.z + 0.40 })
    }
})
