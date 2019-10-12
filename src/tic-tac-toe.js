class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = "x";
        this.arrTicTac = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];

        this.mapOfWin = [
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]]
        ]

    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.arrTicTac[rowIndex][columnIndex] == null) {
            this.arrTicTac[rowIndex][columnIndex] = this.currentPlayerSymbol;
        } else {
            return
        }

        if (this.currentPlayerSymbol == "x") {
            this.currentPlayerSymbol = "o"
        } else {
            this.currentPlayerSymbol = "x"
        }
    }

    isFinished() {
      if(Boolean(this.getWinner()) || this.noMoreTurns()){
          return true
      }
        return false
    }

    getWinner() {
        
        let ttt = this.arrTicTac;
        for (let i = 0; i < this.mapOfWin.length; i++) {
            let oneTestWin = this.mapOfWin[i];
            let fst = oneTestWin[0];
            let scd = oneTestWin[1];
            let thd = oneTestWin[2];
            
            if (
                ttt[fst[0]][fst[1]] == ttt[scd[0]][scd[1]] && ttt[fst[0]][fst[1]] == ttt[thd[0]][thd[1]] &&
                ttt[fst[0]][fst[1]] !== null
               ) {
                return ttt[fst[0]][fst[1]]
            }
        }
        return null

    }

    noMoreTurns() {

         for (let i =0; i < this.arrTicTac.length ; i++){
            for (let j = 0; j < this.arrTicTac[i].length ; j++){
                if (this.arrTicTac[i][j] == null){
                    return false
                }
            }
        }
        return true
    }

    isDraw() {
        
        if (this.getWinner() !== null){
            return false
        }
        for (let i =0; i < this.arrTicTac.length ; i++){
            for (let j = 0; j < this.arrTicTac[i].length ; j++){
                if (this.arrTicTac[i][j] == null){
                    return false
                }
            }
        }
        
        return true
        
    }

    getFieldValue(rowIndex, colIndex) {
        return this.arrTicTac[rowIndex][colIndex]
    }
}


module.exports = TicTacToe;
