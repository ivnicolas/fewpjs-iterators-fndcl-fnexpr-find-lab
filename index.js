function superbowlWin(games){
    const game = games.find( function(w) {return w.result === "W"})
    return (game ? game.year : undefined);
}