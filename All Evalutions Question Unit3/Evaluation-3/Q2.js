function blueRedBoard(grid) {
    // Check each row for all 'R'
    for (let i = 0; i < 8; i++) {
        let rowString = "";
        for (let j = 0; j < 8; j++) {
            rowString += grid[i][j];
        }
        if (rowString === "RRRRRRRR") {
            console.log("R");
            return;
        }
    }

    // Check each column for all 'B'
    for (let i = 0; i < 8; i++) {
        let colString = "";
        for (let j = 0; j < 8; j++) {
            colString += grid[j][i];
        }
        if (colString === "BBBBBBBB") {
            console.log("B");
            return;
        }
    }
}
