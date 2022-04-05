let Coordinate = ""
tiles.loadMap(tiles.createMap(tilemap`level1`))
game.splash(game.askForString(Coordinate))
Coordinate = game.askForString(Coordinate)
if (Coordinate == "a1") {
    game.over(true)
}
