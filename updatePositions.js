function updateWhitePositions(){
    while(blockedPositionsForBlackKing.length){
        blockedPositionsForBlackKing.pop();
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


        //pin pieces
        let pinned = false;
        let pinner;
        Object.entries(pinnedPieces['white']).forEach( potentialPinner => {
            if(potentialPinner[1] === piece[0]){
                pinner = potentialPinner[0];
                pinned = true;
            }
        });

        if(pinned){
            for(let i=0; i<piece[1].potentialPositions.length; i++){
                let popPosition = true;
                piecesBlack[pinner].potentialPositions.forEach( pinnerPosition => {
                    if(piece[1].potentialPositions[i] == pinnerPosition){
                        popPosition = false;
                    }
                });

                if(popPosition){
                    piece[1].potentialPositions.splice(i, 1);
                    i--
                }
            }
        }


        //block positions for king where it'll be checked
        if(piece[1].pieceType != 'pawn'){
            piece[1].potentialPositions.forEach(potentialPosition => {
                    blockedPositionsForBlackKing.push(potentialPosition.getAttribute('id'));
            });
        }
        else{
            if(piece[1].position[0]>'a'){
                blockedPositionsForBlackKing.push(`${String.fromCharCode(piece[1].position.charCodeAt(0) - 1)}${String.fromCharCode(piece[1].position.charCodeAt(1) + 1)}`);
            }
            if(piece[1].position[0]<'h'){
                blockedPositionsForBlackKing.push(`${String.fromCharCode(piece[1].position.charCodeAt(0) + 1)}${String.fromCharCode(piece[1].position.charCodeAt(1) + 1)}`);
            }
        }
    });
}





function updateBlackPositions(){
    while(blockedPositionsForWhiteKing.length){
        blockedPositionsForWhiteKing.pop();
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

        
        //pin pieces
        let pinned = false;
        let pinner;
        Object.entries(pinnedPieces['black']).forEach( potentialPinner => {
            if(potentialPinner[1] === piece[0]){
                pinner = potentialPinner[0];
                pinned = true;
            }
        });

        if(pinned){
            for(let i=0; i<piece[1].potentialPositions.length; i++){
                let popPosition = true;
                piecesWhite[pinner].potentialPositions.forEach( pinnerPosition => {
                    if(piece[1].potentialPositions[i] == pinnerPosition){
                        popPosition = false;
                    }
                });

                if(popPosition){
                    piece[1].potentialPositions.splice(i, 1);
                    i--
                }
            }
        }


        //block positions for king where it'll be checked
        if(piece[1].pieceType != 'pawn'){
            piece[1].potentialPositions.forEach(potentialPosition => {
                blockedPositionsForWhiteKing.push(potentialPosition.getAttribute('id'));
            });
        }
        else{
            if(piece[1].position[0]>'a'){
                blockedPositionsForWhiteKing.push(`${String.fromCharCode(piece[1].position.charCodeAt(0) - 1)}${String.fromCharCode(piece[1].position.charCodeAt(1) - 1)}`);
            }
            if(piece[1].position[0]<'h'){
                blockedPositionsForWhiteKing.push(`${String.fromCharCode(piece[1].position.charCodeAt(0) + 1)}${String.fromCharCode(piece[1].position.charCodeAt(1) - 1)}`);
            }
        }
    });
}





function updatePotentialPositions(){
    if(whiteMove){
        whiteChecked= false;
        whiteChecker= [];
        //calculating potential position for every White Piece
        updateWhitePositions();

        //calculating potential position for every Black Piece
        updateBlackPositions();
    }
    else{
        blackChecked= false;
        blackChecker= [];
        //calculating potential position for every Black Piece
        updateBlackPositions();

        //calculating potential position for every White Piece
        updateWhitePositions();
    }
}