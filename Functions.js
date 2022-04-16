//functions for legalMoveLogic.js
function addKnightMoves(position, colorOfOpposition, potentialPositions, potentialPosition){
    if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
        if(potentialPosition.childElementCount && potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
            if(potentialPosition.querySelector('img').matches('.king')){
                pushChecker(position, colorOfOpposition);
            }
        }
        potentialPositions.push(potentialPosition);
    }
}





function castling(colorOfOpposition, potentialPositions){
    //for black king
    if(colorOfOpposition == 'white'){
        if(castle['black']['kingNotMoved'] == true && !blackChecked){
            //for king side castle
            if(castle['black']['kingSideRook'] == true){
                castle['black'].f8= document.getElementById(`f8`).hasChildNodes();
                castle['black'].g8= document.getElementById(`g8`).hasChildNodes();

                let castlingBlocked = false;
                blockedPositionsForBlackKing.forEach(position => {
                    if(position == ('f8' || 'g8')){
                        castlingBlocked = true;
                    }
                });

                if(!castle['black'].f8 && !castle['black'].g8 && !castlingBlocked){
                    const potentialPosition= sudoku.querySelector('#g8');
                    potentialPositions.push(potentialPosition);
                }
            }

            //for queen side castle
            if(castle['black']['queenSideRook'] == true){
                castle['black'].b8= document.getElementById(`b8`).hasChildNodes();
                castle['black'].c8= document.getElementById(`c8`).hasChildNodes();
                castle['black'].d8= document.getElementById(`d8`).hasChildNodes();

                let castlingBlocked = false;
                blockedPositionsForBlackKing.forEach(position => {
                    if(position == ('b8' || 'c8' || 'd8')){
                        castlingBlocked = true;
                    }
                });

                if(!castle['black'].b8 && !castle['black'].c8 && !castle['black'].d8 && !castlingBlocked){
                    const potentialPosition= sudoku.querySelector('#c8');
                    potentialPositions.push(potentialPosition);
                }
            }
        }
    }

    //for white king
    else if(colorOfOpposition == 'black'){
        if(castle['white']['kingNotMoved'] == true && !whiteChecked){
            //for king side castle
            if(castle['white']['kingSideRook'] == true){
                castle['white'].f1= document.getElementById(`f1`).hasChildNodes();
                castle['white'].g1= document.getElementById(`g1`).hasChildNodes();

                let castlingBlocked = false;
                blockedPositionsForWhiteKing.forEach(position => {
                    if(position == ('f1' || 'g1')){
                        castlingBlocked = true;
                    }
                });
                
                if(!castle['white'].f1 && !castle['white'].g1 && !castlingBlocked){
                    const potentialPosition= sudoku.querySelector('#g1');
                    potentialPositions.push(potentialPosition);
                }
            }

            //for queen side castle
            if(castle['white']['queenSideRook'] == true){
                castle['white'].b1= document.getElementById(`b1`).hasChildNodes();
                castle['white'].c1= document.getElementById(`c1`).hasChildNodes();
                castle['white'].d1= document.getElementById(`d1`).hasChildNodes();

                let castlingBlocked = false;
                blockedPositionsForWhiteKing.forEach(position => {
                    if(position == ('b1' || 'c1' || 'd1')){
                        castlingBlocked = true;
                    }
                });

                if(!castle['white'].b1 && !castle['white'].c1 && !castle['white'].d1 && !castlingBlocked){
                    const potentialPosition= sudoku.querySelector('#c1');
                    potentialPositions.push(potentialPosition);
                }
            }
        }
    }
}





function backPieceOfSameColor(potentialPosition, colorOfOpposition){
    if(potentialPosition.childElementCount && !potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
        let potentialPositionId= potentialPosition.getAttribute('id');
        if(colorOfOpposition == 'black'){
            blockedPositionsForBlackKing.push(potentialPositionId);
        }else if(colorOfOpposition == 'white'){
            blockedPositionsForWhiteKing.push(potentialPositionId);
        }
    }
}





function pushChecker(position, colorOfOpposition){
    const checker= sudoku.querySelector(`#${position}`).querySelector('img').getAttribute('data-piece');
    if(colorOfOpposition== 'black'){
        blackChecked= true;
        blackChecker.push(piecesWhite[checker]);
    }
    else if(colorOfOpposition== 'white'){
        whiteChecked= true;
        whiteChecker.push(piecesBlack[checker]);
    }
}





function canBlockCheck(positionId, colorOfOpposition){
    let canBlock= false;
    if(colorOfOpposition== 'black'){
        if(positionId == whiteChecker[0]['position']){
            canBlock= true;
        }

        whiteChecker[0]['potentialPositions'].forEach( square => {
            const checkerPotentialPosition= square.getAttribute('id');
            if(positionId == checkerPotentialPosition){
                canBlock= true;
            }
        });
    }

    else if(colorOfOpposition== 'white'){
        if(positionId == blackChecker[0]['position']){
            canBlock= true;
        }

        blackChecker[0]['potentialPositions'].forEach( square => {
            const checkerPotentialPosition= square.getAttribute('id');
            if(positionId == checkerPotentialPosition){
                canBlock= true;
            }
        });
    }

    return canBlock;
}





function filterPositionsIfChecked(potentialPositions, tempPotentialPositions){
    while(potentialPositions.length){
        potentialPositions.pop();
    }
    tempPotentialPositions.forEach(blockingPosition => {
        potentialPositions.push(blockingPosition);
    });
}





function blockCheck(colorOfOpposition, potentialPositions){
    if(colorOfOpposition== 'black' && whiteChecked== true){
        if(whiteChecker.length== 2){
            while(potentialPositions.length){
                potentialPositions.pop();
            }
        }


        
        else if(whiteChecker.length== 1 && whiteChecker[0]['pieceType']!= ('pawn' || 'knight')){
            if(whiteChecker[0].position[0]> piecesWhite['kingWhite'].position[0] && whiteChecker[0].position[1]> piecesWhite['kingWhite'].position[1]){
                const tempPotentialPositions= potentialPositions.filter( checkBlockingPosition => {
                    const positionId= checkBlockingPosition.getAttribute('id');
                    if(positionId[0]> piecesWhite['kingWhite'].position[0] && positionId[1]> piecesWhite['kingWhite'].position[1]){
                        if(positionId[0]< whiteChecker[0].position[0] && positionId[1]< whiteChecker[0].position[1]){
                            return canBlockCheck(positionId, colorOfOpposition);
                        }else if(positionId[0]== whiteChecker[0].position[0] && positionId[1]== whiteChecker[0].position[1]){
                            return true;
                        }else{
                            return false;
                        }
                    }
                    else{
                        return false;
                    }
                });
                
                filterPositionsIfChecked(potentialPositions, tempPotentialPositions);
            }


            else if(whiteChecker[0].position[0]> piecesWhite['kingWhite'].position[0] && whiteChecker[0].position[1]< piecesWhite['kingWhite'].position[1]){
                const tempPotentialPositions= potentialPositions.filter( checkBlockingPosition => {
                    const positionId= checkBlockingPosition.getAttribute('id');
                    if(positionId[0]> piecesWhite['kingWhite'].position[0] && positionId[1]< piecesWhite['kingWhite'].position[1]){
                        if(positionId[0]< whiteChecker[0].position[0] && positionId[1]> whiteChecker[0].position[1]){
                            return canBlockCheck(positionId, colorOfOpposition);
                        }else if(positionId[0]== whiteChecker[0].position[0] && positionId[1]== whiteChecker[0].position[1]){
                            return true;
                        }else{
                            return false;
                        }
                    }
                    else{
                        return false;
                    }
                });

                filterPositionsIfChecked(potentialPositions, tempPotentialPositions);
            }


            else if(whiteChecker[0].position[0]< piecesWhite['kingWhite'].position[0] && whiteChecker[0].position[1]< piecesWhite['kingWhite'].position[1]){
                const tempPotentialPositions= potentialPositions.filter( checkBlockingPosition => {
                    const positionId= checkBlockingPosition.getAttribute('id');
                    console.log(positionId, colorOfOpposition);
                    if(positionId[0]< piecesWhite['kingWhite'].position[0] && positionId[1]< piecesWhite['kingWhite'].position[1]){
                        if(positionId[0]> whiteChecker[0].position[0] && positionId[1]> whiteChecker[0].position[1]){
                            return canBlockCheck(positionId, colorOfOpposition);
                        }else if(positionId[0]== whiteChecker[0].position[0] && positionId[1]== whiteChecker[0].position[1]){
                            return true;
                        }else{
                            return false;
                        }
                    }
                    else{
                        return false;
                    }
                });

                filterPositionsIfChecked(potentialPositions, tempPotentialPositions);
            }
            
            
            else if(whiteChecker[0].position[0]< piecesWhite['kingWhite'].position[0] && whiteChecker[0].position[1]> piecesWhite['kingWhite'].position[1]){
                const tempPotentialPositions= potentialPositions.filter( checkBlockingPosition => {
                    const positionId= checkBlockingPosition.getAttribute('id');
                    if(positionId[0]< piecesWhite['kingWhite'].position[0] && positionId[1]> piecesWhite['kingWhite'].position[1]){
                        if(positionId[0]> whiteChecker[0].position[0] && positionId[1]< whiteChecker[0].position[1]){
                            return canBlockCheck(positionId, colorOfOpposition);
                        }else if(positionId[0]== whiteChecker[0].position[0] && positionId[1]== whiteChecker[0].position[1]){
                            return true;
                        }else{
                            return false;
                        }
                    }
                    else{
                        return false;
                    }
                });

                filterPositionsIfChecked(potentialPositions, tempPotentialPositions);
            }


            else if(whiteChecker[0].position[0]== piecesWhite['kingWhite'].position[0] && whiteChecker[0].position[1]> piecesWhite['kingWhite'].position[1]){
                const tempPotentialPositions= potentialPositions.filter( checkBlockingPosition => {
                    const positionId= checkBlockingPosition.getAttribute('id');
                    if((positionId[0]== piecesWhite['kingWhite'].position[0] && positionId[1]> piecesWhite['kingWhite'].position[1]) &&
                    (positionId[0]== whiteChecker[0].position[0] && positionId[1]<= whiteChecker[0].position[1])){
                        return canBlockCheck(positionId, colorOfOpposition);
                    }
                    else{
                        return false;
                    }
                });

                filterPositionsIfChecked(potentialPositions, tempPotentialPositions);
            }


            else if(whiteChecker[0].position[0]> piecesWhite['kingWhite'].position[0] && whiteChecker[0].position[1]== piecesWhite['kingWhite'].position[1]){
                const tempPotentialPositions= potentialPositions.filter( checkBlockingPosition => {
                    const positionId= checkBlockingPosition.getAttribute('id');
                    if((positionId[0]> piecesWhite['kingWhite'].position[0] && positionId[1]== piecesWhite['kingWhite'].position[1]) &&
                    (positionId[0]<= whiteChecker[0].position[0] && positionId[1]== whiteChecker[0].position[1])){
                        return canBlockCheck(positionId, colorOfOpposition);
                    }
                    else{
                        return false;
                    }
                });

                filterPositionsIfChecked(potentialPositions, tempPotentialPositions);
            }
            

            else if(whiteChecker[0].position[0]== piecesWhite['kingWhite'].position[0] && whiteChecker[0].position[1]< piecesWhite['kingWhite'].position[1]){
                const tempPotentialPositions= potentialPositions.filter( checkBlockingPosition => {
                    const positionId= checkBlockingPosition.getAttribute('id');
                    if((positionId[0]== piecesWhite['kingWhite'].position[0] && positionId[1]< piecesWhite['kingWhite'].position[1]) &&
                    (positionId[0]== whiteChecker[0].position[0] && positionId[1]>= whiteChecker[0].position[1])){
                        return canBlockCheck(positionId, colorOfOpposition);
                    }
                    else{
                        return false;
                    }
                });

                filterPositionsIfChecked(potentialPositions, tempPotentialPositions);
            }
            

            else if(whiteChecker[0].position[0]< piecesWhite['kingWhite'].position[0] && whiteChecker[0].position[1]== piecesWhite['kingWhite'].position[1]){
                const tempPotentialPositions= potentialPositions.filter( checkBlockingPosition => {
                    const positionId= checkBlockingPosition.getAttribute('id');
                    if((positionId[0]< piecesWhite['kingWhite'].position[0] && positionId[1]== piecesWhite['kingWhite'].position[1]) &&
                    (positionId[0]>= whiteChecker[0].position[0] && positionId[1]== whiteChecker[0].position[1])){
                        return canBlockCheck(positionId, colorOfOpposition);
                    }
                    else{
                        return false;
                    }
                });

                filterPositionsIfChecked(potentialPositions, tempPotentialPositions);
            }
        }



        else{
            const tempPotentialPositions= potentialPositions.filter( checkBlockingPosition => {
                const positionId = checkBlockingPosition.getAttribute('id');
                if(positionId == whiteChecker[0].position){
                    return true;
                }else {
                    return false;
                }
            });

            filterPositionsIfChecked(potentialPositions, tempPotentialPositions);
        }
    }





    else if(colorOfOpposition== 'white' && blackChecked== true){
        if(blackChecker.length== 2){
            while(potentialPositions.length){
                potentialPositions.pop();
            }
        }



        else if(blackChecker.length== 1 && blackChecker[0]['pieceType']!= ('pawn' || 'knight')){
            if(blackChecker[0].position[0]> piecesBlack['kingBlack'].position[0] && blackChecker[0].position[1]> piecesBlack['kingBlack'].position[1]){
                const tempPotentialPositions= potentialPositions.filter( checkBlockingPosition => {
                    const positionId= checkBlockingPosition.getAttribute('id');
                    if(positionId[0]> piecesBlack['kingBlack'].position[0] && positionId[1]> piecesBlack['kingBlack'].position[1]){
                        if(positionId[0]<= blackChecker[0].position[0] && positionId[1]<= blackChecker[0].position[1]){
                            return canBlockCheck(positionId, colorOfOpposition);
                        }else if(positionId[0]== blackChecker[0].position[0] && positionId[1]== blackChecker[0].position[1]){
                            return true;
                        }else{
                            return false;
                        }
                    }
                    else{
                        return false;
                    }
                });
                
                filterPositionsIfChecked(potentialPositions, tempPotentialPositions);
            }


            else if(blackChecker[0].position[0]> piecesBlack['kingBlack'].position[0] && blackChecker[0].position[1]< piecesBlack['kingBlack'].position[1]){
                const tempPotentialPositions= potentialPositions.filter( checkBlockingPosition => {
                    const positionId= checkBlockingPosition.getAttribute('id');
                    if(positionId[0]> piecesBlack['kingBlack'].position[0] && positionId[1]< piecesBlack['kingBlack'].position[1]){
                        if(positionId[0]< blackChecker[0].position[0] && positionId[1]> blackChecker[0].position[1]){
                            return canBlockCheck(positionId, colorOfOpposition);
                        }else if(positionId[0]== blackChecker[0].position[0] && positionId[1]== blackChecker[0].position[1]){
                            return true;
                        }else{
                            return false;
                        }
                    }
                    else{
                        return false;
                    }
                });

                filterPositionsIfChecked(potentialPositions, tempPotentialPositions);
            }


            else if(blackChecker[0].position[0]< piecesBlack['kingBlack'].position[0] && blackChecker[0].position[1]< piecesBlack['kingBlack'].position[1]){
                const tempPotentialPositions= potentialPositions.filter( checkBlockingPosition => {
                    const positionId= checkBlockingPosition.getAttribute('id');
                    if(positionId[0]< piecesBlack['kingBlack'].position[0] && positionId[1]< piecesBlack['kingBlack'].position[1]){
                        if(positionId[0]> blackChecker[0].position[0] && positionId[1]> blackChecker[0].position[1]){
                            return canBlockCheck(positionId, colorOfOpposition);
                        }else if(positionId[0]== blackChecker[0].position[0] && positionId[1]== blackChecker[0].position[1]){
                            return true;
                        }else{
                            return false;
                        }
                    }
                    else{
                        return false;
                    }
                });

                filterPositionsIfChecked(potentialPositions, tempPotentialPositions);
            }
            
            
            else if(blackChecker[0].position[0]< piecesBlack['kingBlack'].position[0] && blackChecker[0].position[1]> piecesBlack['kingBlack'].position[1]){
                const tempPotentialPositions= potentialPositions.filter( checkBlockingPosition => {
                    const positionId= checkBlockingPosition.getAttribute('id');
                    if(positionId[0]< piecesBlack['kingBlack'].position[0] && positionId[1]> piecesBlack['kingBlack'].position[1]){
                        if(positionId[0]> blackChecker[0].position[0] && positionId[1]< blackChecker[0].position[1]){
                            return canBlockCheck(positionId, colorOfOpposition);
                        }else if(positionId[0]== blackChecker[0].position[0] && positionId[1]== blackChecker[0].position[1]){
                            return true;
                        }else{
                            return false;
                        }
                    }
                    else{
                        return false;
                    }
                });

                filterPositionsIfChecked(potentialPositions, tempPotentialPositions);
            }


            else if(blackChecker[0].position[0]== piecesBlack['kingBlack'].position[0] && blackChecker[0].position[1]> piecesBlack['kingBlack'].position[1]){
                const tempPotentialPositions= potentialPositions.filter( checkBlockingPosition => {
                    const positionId= checkBlockingPosition.getAttribute('id');
                    if((positionId[0]== piecesBlack['kingBlack'].position[0] && positionId[1]> piecesBlack['kingBlack'].position[1]) &&
                    (positionId[0]== blackChecker[0].position[0] && positionId[1]<= blackChecker[0].position[1])){
                        return canBlockCheck(positionId, colorOfOpposition);
                    }
                    else{
                        return false;
                    }
                });

                filterPositionsIfChecked(potentialPositions, tempPotentialPositions);
            }


            else if(blackChecker[0].position[0]> piecesBlack['kingBlack'].position[0] && blackChecker[0].position[1]== piecesBlack['kingBlack'].position[1]){
                const tempPotentialPositions= potentialPositions.filter( checkBlockingPosition => {
                    const positionId= checkBlockingPosition.getAttribute('id');
                    if((positionId[0]> piecesBlack['kingBlack'].position[0] && positionId[1]== piecesBlack['kingBlack'].position[1]) &&
                    (positionId[0]<= blackChecker[0].position[0] && positionId[1]== blackChecker[0].position[1])){
                        return canBlockCheck(positionId, colorOfOpposition);
                    }
                    else{
                        return false;
                    }
                });

                filterPositionsIfChecked(potentialPositions, tempPotentialPositions);
            }else if(blackChecker[0].position[0]== piecesBlack['kingBlack'].position[0] && blackChecker[0].position[1]< piecesBlack['kingBlack'].position[1]){
                const tempPotentialPositions= potentialPositions.filter( checkBlockingPosition => {
                    const positionId= checkBlockingPosition.getAttribute('id');
                    if((positionId[0]== piecesBlack['kingBlack'].position[0] && positionId[1]< piecesBlack['kingBlack'].position[1]) &&
                    (positionId[0]== blackChecker[0].position[0] && positionId[1]>= blackChecker[0].position[1])){
                        return canBlockCheck(positionId, colorOfOpposition);
                    }
                    else{
                        return false;
                    }
                });

                filterPositionsIfChecked(potentialPositions, tempPotentialPositions);
            }else if(blackChecker[0].position[0]< piecesBlack['kingBlack'].position[0] && blackChecker[0].position[1]== piecesBlack['kingBlack'].position[1]){
                const tempPotentialPositions= potentialPositions.filter( checkBlockingPosition => {
                    const positionId= checkBlockingPosition.getAttribute('id');
                    if((positionId[0]< piecesBlack['kingBlack'].position[0] && positionId[1]== piecesBlack['kingBlack'].position[1]) &&
                    (positionId[0]>= blackChecker[0].position[0] && positionId[1]== blackChecker[0].position[1])){
                        return canBlockCheck(positionId, colorOfOpposition);
                    }
                    else{
                        return false;
                    }
                });

                filterPositionsIfChecked(potentialPositions, tempPotentialPositions);
            }
        }



        else{
            const tempPotentialPositions= potentialPositions.filter( checkBlockingPosition => {
                const positionId = checkBlockingPosition.getAttribute('id');
                if(positionId == blackChecker[0].position){
                    return true;
                }else {
                    return false;
                }
            });

            filterPositionsIfChecked(potentialPositions, tempPotentialPositions);
        }
    }
}










//functions for movePieces.js
function addQueen(selectedPiece, nextSquare, piece){
    if(selectedPiece.matches('.pawn')){
        const pawnAtEndOfFile= /[a-h](1|8)/;
        const position= nextSquare.getAttribute('id');
        if(pawnAtEndOfFile.test(position)){

            

            const queen= document.createElement('img');
            if(whiteMove){
                delete piecesWhite[piece];

                queen.setAttribute('src', 'Chess_qlt60.png');
                if(extraWhiteQueenCount=== 0){
                    queen.setAttribute('data-piece', 'queenTwo');
                }else if(extraWhiteQueenCount=== 1){
                    queen.setAttribute('data-piece', 'queenThree');
                }else if(extraWhiteQueenCount=== 2){
                    queen.setAttribute('data-piece', 'queenFour');
                }else if(extraWhiteQueenCount=== 3){
                    queen.setAttribute('data-piece', 'queenFive');
                }else if(extraWhiteQueenCount=== 4){
                    queen.setAttribute('data-piece', 'queenSix');
                }else if(extraWhiteQueenCount=== 5){
                    queen.setAttribute('data-piece', 'queenSeven');
                }else if(extraWhiteQueenCount=== 6){
                    queen.setAttribute('data-piece', 'queenEight');
                }else if(extraWhiteQueenCount=== 7){
                    queen.setAttribute('data-piece', 'queenNine');
                }

                const extraQueen= {
                    pieceType: 'queen',
                    position: position,
                    potentialPositions: []
                };
                extraQueenName= queen.getAttribute('data-piece');
                piecesWhite[extraQueenName]= extraQueen;

                extraWhiteQueenCount++;

                queen.classList.add('white');
            }
            
            
            
            else{
                delete piecesBlack[piece];

                queen.setAttribute('src', 'Chess_qdt60.png');
                if(extraBlackQueenCount=== 0){
                    queen.setAttribute('data-piece', 'queenTwo');
                }else if(extraBlackQueenCount=== 1){
                    queen.setAttribute('data-piece', 'queenThree');
                }else if(extraBlackQueenCount=== 2){
                    queen.setAttribute('data-piece', 'queenFour');
                }else if(extraBlackQueenCount=== 3){
                    queen.setAttribute('data-piece', 'queenFive');
                }else if(extraBlackQueenCount=== 4){
                    queen.setAttribute('data-piece', 'queenSix');
                }else if(extraBlackQueenCount=== 5){
                    queen.setAttribute('data-piece', 'queenSeven');
                }else if(extraBlackQueenCount=== 6){
                    queen.setAttribute('data-piece', 'queenEight');
                }else if(extraBlackQueenCount=== 7){
                    queen.setAttribute('data-piece', 'queenNine');
                }
                
                const extraQueen= {
                    pieceType: 'queen',
                    position: position,
                    potentialPositions: []
                };
                extraQueenName= queen.getAttribute('data-piece');
                piecesBlack[extraQueenName]= extraQueen;

                extraBlackQueenCount++;

                queen.classList.add('black');
            }
            
            queen.classList.add('queen');

            nextSquare.replaceChild(queen, selectedPiece);
        }
    }
}





function checkForCheck(){
    if(!whiteMove){
        if(whiteChecked){
            const position= piecesWhite['kingWhite'].position;
            const checkedSquare= sudoku.querySelector(`#${position}`);
            checkedSquare.classList.add('checked');
        }
        else{
            const checkedSquare= sudoku.querySelector(`.checked`);
            if(checkedSquare){
                const pieceOnCheckedSquare= checkedSquare.querySelector('img');
                if(!pieceOnCheckedSquare){
                    checkedSquare.classList.remove('checked');
                }else if(!pieceOnCheckedSquare.querySelector('.black')){
                    checkedSquare.classList.remove('checked');
                }
            }
        }
    }





    if(whiteMove){
        if(blackChecked){
            const position= piecesBlack['kingBlack'].position;
            const checkedSquare= sudoku.querySelector(`#${position}`);
            checkedSquare.classList.add('checked');
        }
        else{
            const checkedSquare= sudoku.querySelector(`.checked`);
            if(checkedSquare){
                const pieceOnCheckedSquare= checkedSquare.querySelector('img');
                if(!pieceOnCheckedSquare){
                    checkedSquare.classList.remove('checked');
                }else if(!pieceOnCheckedSquare.querySelector('.white')){
                    checkedSquare.classList.remove('checked');
                }
            }
        }
    }
}





function cantCastle(piece){
    //if moved piece is rook, and castling can't be done no more
    if(whiteMove){
        if(piece == 'rookOne'){
            castle['white']['queenSideRook'] = false;
        }else if(piece == 'rookTwo'){
            castle['white']['kingSideRook'] = false;
        }
    }else{
        if(piece == 'rookOne'){
            castle['black']['queenSideRook'] = false;
        }else if(piece == 'rookTwo'){
            castle['black']['kingSideRook'] = false;
        }
    }

    //if moved piece is king, and castling can't be done no more
    if(piece == 'kingWhite'){
        castle['white']['kingNotMoved'] = false;
    }else if(piece == 'kingBlack'){
        castle['black']['kingNotMoved'] = false;
    }
}