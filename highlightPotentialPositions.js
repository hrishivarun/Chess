//logic for potential moves, for any selected white piece, at a given moment
sudoku.addEventListener('click', (e) => {



    //if it's white's turn to move
    if(whiteMove){
        if(e.target.matches('.white')){
            if(!whiteChecked){
                //highlight selected piece
                selectedPiece= e.target;
                selectedSquare= e.target.parentElement;
                selectedSquare.classList.toggle('selected');

                //get piece name
                const piece= selectedPiece.getAttribute('data-piece');
                console.log(piece);
                //highlighting potential future positions when a piece is selected
                if(selectedSquare.matches('.selected')){
                    piecesWhite[piece].potentialPositions.forEach(position =>{
                        position.classList.add('potential-position');
                    });
                }


                //removing highlights from future potential positions after unselecting, in case player changes their mind
                else{
                    piecesWhite[piece].potentialPositions.forEach(position =>{
                        position.classList.remove('potential-position');
                    });
                    selectedPiece= null;
                }
            }
        }
    }
});










//logic for potential moves, for any selected white piece, at a given moment
sudoku.addEventListener('click', (e) => {



    //if it's black's turn to move
    if(!whiteMove){
        if(e.target.matches('.black')){
            if(!blackChecked){
                //highlight selected piece
                selectedPiece= e.target;
                selectedSquare= e.target.parentElement;
                selectedSquare.classList.toggle('selected');


                //get piece name
                const piece= selectedPiece.getAttribute('data-piece');

                //highlighting potential future positions when a piece is selected
                if(selectedSquare.matches('.selected')){
                    piecesBlack[piece].potentialPositions.forEach(position =>{
                        position.classList.add('potential-position');
                    });
                }


                //removing highlights from future potential positions after unselecting, in case player changes their mind
                else{
                    piecesBlack[piece].potentialPositions.forEach(position =>{
                        position.classList.remove('potential-position');
                    });
                    selectedPiece= null;
                }
            }
        }
    }
});