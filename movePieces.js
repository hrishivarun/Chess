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





        //update 'potential-positions' for every piece onboard, after one move
        updatePotentialPositions();





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
        


        //select the position, remove the piece of opposite color and move the selected piece onto that position        
        
        //removing the captured piece from javascript data 
        const pieceToBeRemoved= e.target.getAttribute('data-piece');
        if(whiteMove){
            delete piecesBlack[pieceToBeRemoved];
        }else{
            delete piecesWhite[pieceToBeRemoved];
        }


        //replacing the captured piece in browser
        const nextSquare= e.target.parentElement;
        nextSquare.replaceChild(selectedPiece, nextSquare.firstElementChild);

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





        //update 'potential-positions' for every piece onboard, after one move
        updatePotentialPositions();




        
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