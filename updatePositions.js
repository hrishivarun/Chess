function updateWhitePositions(){
    while(potentialPositionIdsWhite.length){
        potentialPositionIdsWhite.pop();
    }

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

        if(piece[1].pieceType != 'pawn'){
            piece[1].potentialPositions.forEach(potentialPosition => {
                    potentialPositionIdsWhite.push(potentialPosition.getAttribute('id'));
            });
        }
        else{
            if(piece[1].position[0]>'a'){
                potentialPositionIdsWhite.push(`${String.fromCharCode(piece[1].position.charCodeAt(0) - 1)}${String.fromCharCode(piece[1].position.charCodeAt(1) + 1)}`);
            }
            if(piece[1].position[0]<'h'){
                potentialPositionIdsWhite.push(`${String.fromCharCode(piece[1].position.charCodeAt(0) + 1)}${String.fromCharCode(piece[1].position.charCodeAt(1) + 1)}`);
            }
        }
    });
}





function updateBlackPositions(){
    while(potentialPositionIdsBlack.length){
        potentialPositionIdsBlack.pop();
    }

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

        if(piece[1].pieceType != 'pawn'){
            piece[1].potentialPositions.forEach(potentialPosition => {
                potentialPositionIdsBlack.push(potentialPosition.getAttribute('id'));
            });
        }
        else{
            if(piece[1].position[0]>'a'){
                potentialPositionIdsBlack.push(`${String.fromCharCode(piece[1].position.charCodeAt(0) - 1)}${String.fromCharCode(piece[1].position.charCodeAt(1) - 1)}`);
            }
            if(piece[1].position[0]<'h'){
                potentialPositionIdsBlack.push(`${String.fromCharCode(piece[1].position.charCodeAt(0) + 1)}${String.fromCharCode(piece[1].position.charCodeAt(1) - 1)}`);
            }
        }
    });
}





function updatePotentialPositions(){
    if(whiteMove){
        //calculating potential position for every White Piece
        updateWhitePositions();

        //calculating potential position for every Black Piece
        updateBlackPositions();
    }
    else{
        //calculating potential position for every Black Piece
        updateBlackPositions();

        //calculating potential position for every White Piece
        updateWhitePositions();
    }
}