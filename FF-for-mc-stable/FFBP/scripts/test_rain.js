import { world, system } from "@minecraft/server";

world.beforeEvents.worldInitialize.subscribe((data) => {
  data.blockComponentRegistry.registerCustomComponent("aerial_beginnings:check_for_rain", {
    onTick(data) {
      const weather = data.dimension.getWeather()
      if (weather === 'Rain') {
        data.block.setType("ff:kitchen_floor");
      }
    },
  });
  data.blockComponentRegistry.registerCustomComponent("aerial_beginnings:check_for_clear", {
    onTick(data) {
      const weather = data.dimension.getWeather()
      if (weather === 'Clear') {
        data.block.setType("ff:marble_small_tiles");
      }
    },
  });
});
