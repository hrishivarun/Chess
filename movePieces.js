//moving the selected chess piece when clicked on a potential position
sudoku.addEventListener('click', (e) => {
    
    //if the position doesn't already have a piece of opposite color
    if(e.target.matches('.potential-position')){
        
        //select the position and move the selected piece onto that position
        const nextSquare= e.target;
        nextSquare.appendChild(selectedPiece);
        
        //remove highlight from the previous position
        selectedSquare.classList.remove('selected');



        //get new position after the piece has been moved
        const position= nextSquare.getAttribute('id');

        //remove previous 'potential-positions' for the piece and update its current position
        const piece= selectedPiece.getAttribute('data-piece');
        if(whiteMove){
            piecesWhite[piece].potentialPositions.forEach(position => {
                position.classList.remove('potential-position');
            });

            piecesWhite[piece].position= position;

        }else{
            piecesBlack[piece].potentialPositions.forEach(position => {
                position.classList.remove('potential-position');
            });

            piecesBlack[piece].position= position;
        }



        //update 'potential-positions' for every piece onboard, after one move
        Object.entries(piecesWhite).forEach(piece => {
            piece[1].potentialPositions= [];
            if(piece[1].pieceType=== 'pawn'){
                legalPawnMoves(piece[1].position, 'black', piece[1].potentialPositions);
            }else if(piece[1].pieceType== 'knight'){
                legalKnightMoves(piece[1].position, 'black', piece[1].potentialPositions);
            }else if(piece[1].pieceType== 'bishop'){
                legalBishopMoves(piece[1].position, 'black', piece[1].potentialPositions);
            }else if(piece[1].pieceType== 'rook'){
                legalRookMoves(piece[1].position, 'black', piece[1].potentialPositions);
            }else if(piece[1].pieceType== 'queen'){
                legalQueenMoves(piece[1].position, 'black', piece[1].potentialPositions);
            }else if(piece[1].pieceType== 'king'){
                legalKingMoves(piece[1].position, 'black', piece[1].potentialPositions);
            }
        });

        Object.entries(piecesBlack).forEach(piece => {
            piece[1].potentialPositions= [];
            if(piece[1].pieceType=== 'pawn'){
                legalPawnMoves(piece[1].position, 'white', piece[1].potentialPositions);
            }else if(piece[1].pieceType== 'knight'){
                legalKnightMoves(piece[1].position, 'white', piece[1].potentialPositions);
            }else if(piece[1].pieceType== 'bishop'){
                legalBishopMoves(piece[1].position, 'white', piece[1].potentialPositions);
            }else if(piece[1].pieceType== 'rook'){
                legalRookMoves(piece[1].position, 'white', piece[1].potentialPositions);
            }else if(piece[1].pieceType== 'queen'){
                legalQueenMoves(piece[1].position, 'white', piece[1].potentialPositions);
            }else if(piece[1].pieceType== 'king'){
                legalKingMoves(piece[1].position, 'white', piece[1].potentialPositions);
            }
        });





        if(selectedPiece.matches('.pawn')){
            const pawnAtEndOfFile= /[a-h](1|8)/;
            const position= nextSquare.getAttribute('id');
            if(pawnAtEndOfFile.test(position)){
                nextSquare.removeChild(selectedPiece);
    
                const queen= document.createElement('img');
                if(whiteMove){
                    queen.setAttribute('src', 'Chess_qlt60.png');
                    queen.classList.add('white');
                    queen.classList.add('queen');
                    nextSquare.appendChild(queen);
                }else{
                    queen.setAttribute('src', 'Chess_qdt60.png');
                    queen.classList.add('black');
                    queen.classList.add('queen');
                    nextSquare.appendChild(queen);
                }
            }
        }





        //unselect the piece
        selectedPiece= null;

        //change turns of white/black
        if(whiteMove){
            whiteMove= false;
        }else{
            whiteMove= true;
        }
        
    }

    //else, if the position did have a piece of opposite color 
    else if(e.target.parentElement.matches('.potential-position')){
        

        const removedPiece= e.target.getAttribute('data-piece');
        console.log(removedPiece);



        

        //select the position, remove the piece of opposite color and move the selected piece onto that position
        const nextSquare= e.target.parentElement;
        nextSquare.removeChild(nextSquare.firstElementChild);
        nextSquare.appendChild(selectedPiece);

        selectedSquare.classList.remove('selected');



        //get new position after the piece has been moved
        const position= nextSquare.getAttribute('id');

        //remove previous 'potential-positions' for the piece and update its current position
        const piece= selectedPiece.getAttribute('data-piece');
        if(whiteMove){
            piecesWhite[piece].potentialPositions.forEach(position => {
                position.classList.remove('potential-position');
            });

            piecesWhite[piece].position= position;
        }else{
            piecesBlack[piece].potentialPositions.forEach(position => {
                position.classList.remove('potential-position');
            });

            piecesBlack[piece].position= position;
        }



        //update 'potential-positions' for every piece onboard, after one move
        Object.entries(piecesWhite).forEach(piece => {
            piece[1].potentialPositions= [];
            if(piece[1].pieceType=== 'pawn'){
                legalPawnMoves(piece[1].position, 'black', piece[1].potentialPositions);
            }else if(piece[1].pieceType== 'knight'){
                legalKnightMoves(piece[1].position, 'black', piece[1].potentialPositions);
            }else if(piece[1].pieceType== 'bishop'){
                legalBishopMoves(piece[1].position, 'black', piece[1].potentialPositions);
            }else if(piece[1].pieceType== 'rook'){
                legalRookMoves(piece[1].position, 'black', piece[1].potentialPositions);
            }else if(piece[1].pieceType== 'queen'){
                legalQueenMoves(piece[1].position, 'black', piece[1].potentialPositions);
            }else if(piece[1].pieceType== 'king'){
                legalKingMoves(piece[1].position, 'black', piece[1].potentialPositions);
            }
        });

        Object.entries(piecesBlack).forEach(piece => {
            piece[1].potentialPositions= [];
            if(piece[1].pieceType=== 'pawn'){
                legalPawnMoves(piece[1].position, 'white', piece[1].potentialPositions);
            }else if(piece[1].pieceType== 'knight'){
                legalKnightMoves(piece[1].position, 'white', piece[1].potentialPositions);
            }else if(piece[1].pieceType== 'bishop'){
                legalBishopMoves(piece[1].position, 'white', piece[1].potentialPositions);
            }else if(piece[1].pieceType== 'rook'){
                legalRookMoves(piece[1].position, 'white', piece[1].potentialPositions);
            }else if(piece[1].pieceType== 'queen'){
                legalQueenMoves(piece[1].position, 'white', piece[1].potentialPositions);
            }else if(piece[1].pieceType== 'king'){
                legalKingMoves(piece[1].position, 'white', piece[1].potentialPositions);
            }
        });





        if(selectedPiece.matches('.pawn')){
            const pawnAtEndOfFile= /[a-h](1|8)/;
            const position= nextSquare.getAttribute('id');
            if(pawnAtEndOfFile.test(position)){
                nextSquare.removeChild(selectedPiece);
    
                const queen= document.createElement('img');
                if(whiteMove){
                    queen.setAttribute('src', 'Chess_qlt60.png');
                    queen.classList.add('white');
                    queen.classList.add('queen');
                    nextSquare.appendChild(queen);
                }else{
                    queen.setAttribute('src', 'Chess_qdt60.png');
                    queen.classList.add('black');
                    queen.classList.add('queen');
                    nextSquare.appendChild(queen);
                }
            }
        }




        
        //unselect the piece
        selectedPiece= null;
        
        //change turns of white/black
        if(whiteMove){
            whiteMove= false;
        }else{
            whiteMove= true;
        }
        
    }
})