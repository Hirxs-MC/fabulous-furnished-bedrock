import { world } from "@minecraft/server";

world.afterEvents.weatherChange.subscribe((data) => {
    let weather = data.newWeather;
    let oldWeather = data.oldWeather; 


    if (weather === 'Rain') {
        world.sendMessage('It is now raining!');
    } else if (weather === 'Thunder') {
        world.sendMessage('A thunderstorm is happening!');
    } else if (weather === 'Clear') {
        world.sendMessage('The weather is now clear!');
    } else if (weather === 'Snow') {
        world.sendMessage('It is now snowing!');
    }
});