if(play){
    //moving the selected chess piece when clicked on a potential position
    sudoku.addEventListener('click', (e) => {
        
        //if the position doesn't already have a piece of opposite color
        if(e.target.matches('.potential-position')){
            //select the position and move the selected piece onto that position


            //piece name
            const piece= selectedPiece.getAttribute('data-piece');

            //next square
            const nextSquare= e.target;
            
            //get new position of the next square
            const position= nextSquare.getAttribute('id');


            //castle the king
            if(piece == 'kingWhite' && castle['white']['kingNotMoved']){
                if(position == 'c1'){
                    //select queen side rook and move it
                    const rookOne = sudoku.querySelector('#a1').querySelector('img');
                    const castlePositionForRook = sudoku.querySelector('#d1');
                    castlePositionForRook.appendChild(rookOne);

                    piecesWhite['rookOne'].position = 'd1';
                }
                else if(position == 'g1'){
                    //select king side rook and move it
                    const rookTwo = sudoku.querySelector('#h1').querySelector('img');
                    const castlePositionForRook = sudoku.querySelector('#f1');
                    castlePositionForRook.appendChild(rookTwo);

                    piecesWhite['rookTwo'].position = 'f1';
                }
            }
            else if(piece == 'kingBlack' && castle['black']['kingNotMoved']){
                if(position == 'c8'){
                    //select queen side rook and move it
                    const rookOne = sudoku.querySelector('#a8').querySelector('img');
                    const castlePositionForRook = sudoku.querySelector('#d8');
                    castlePositionForRook.appendChild(rookOne);

                    piecesBlack['rookOne'].position = 'd8';
                }
                else if(position == 'g8'){
                    //select king side rook and move it
                    const rookTwo = sudoku.querySelector('#h8').querySelector('img');
                    const castlePositionForRook = sudoku.querySelector('#f8');
                    castlePositionForRook.appendChild(rookTwo);

                    piecesBlack['rookTwo'].position = 'f8';
                }
            }
            
            //move the selected piece onto next square
            nextSquare.appendChild(selectedPiece);
            

            //remove 'selected' highlight from the previous position
            selectedSquare.classList.remove('selected');

            //remove previous 'potential-positions' for the piece and update its current position
            removePreviousHighlight(piece, position);



            //functions other than just moving the piece

            //add extra queen on board if pawn reaches endOfFile
            addQueen(selectedPiece, nextSquare, piece);

            //check if castling is still possible
            cantCastle(piece);

            //unpin any piece of opposite color the current moved piece was pinning
            unpin(whiteMove, piece);


            //update 'potential-positions' for every piece onboard, after one move
            updatePotentialPositions();


            //check for check
            checkForCheck();


            //unselect the piece
            selectedPiece= null;

            //change turns of white/black and end game is someone is checkmated or stalemated
            changeTurn();
            
        }










        //else, if the position did have a piece of opposite color 
        else if(e.target.parentElement.matches('.potential-position')){
            //select the position and move the selected piece onto that position


            //piece name
            const piece= selectedPiece.getAttribute('data-piece');

            //next square
            const nextSquare= e.target.parentElement;

            //get new position
            const position= nextSquare.getAttribute('id');

            //select the position, remove the piece of opposite color and move the selected piece onto that position        
            
            //removing the captured piece from javascript data 
            const pieceToBeRemoved= e.target.getAttribute('data-piece');
            if(whiteMove){
                delete piecesBlack[pieceToBeRemoved];
            }else{
                delete piecesWhite[pieceToBeRemoved];
            }


            //replacing the captured piece in browser
            nextSquare.replaceChild(selectedPiece, nextSquare.firstElementChild);

            //remove highlight from the previous position
            selectedSquare.classList.remove('selected');

            //remove previous 'potential-positions' for the piece and update its current position
            removePreviousHighlight(piece, position);



            //functions other than just moving the piece

            //add extra queen on board
            addQueen(selectedPiece, nextSquare, piece);
            
            //check if castling is still possible
            cantCastle(piece);

            //unpin any piece of opposite color the current moved piece was pinning
            unpin(whiteMove, piece);


            //update 'potential-positions' for every piece onboard, after one move
            updatePotentialPositions();


            //check for check
            checkForCheck();


            //unselect the piece
            selectedPiece= null;
            
            //change turns of white/black and end game is someone is checkmated or stalemated
            changeTurn();
            
        }
    });
}