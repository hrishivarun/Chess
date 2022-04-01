function updatePotentialPositions(){
    //calculating potential position for every White Piece
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

        piece[1].potentialPositions.forEach(potentialPosition => {
            potentialPositionIdsWhite.push(potentialPosition.getAttribute('id'));
        });
    });





    //calculating potential position for every Black Piece
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
        
        piece[1].potentialPositions.forEach(potentialPosition => {
            potentialPositionIdsBlack.push(potentialPosition.getAttribute('id'));
        });
    });
}