function highlightSquare(e){
    if(e.target.matches('.odd')||e.target.matches('.even')){
        e.target.classList.add('hover');
    }else if(e.target.matches('img')){
        if(e.target.parentElement.matches('.odd')||e.target.parentElement.matches('.even'))
        e.target.parentElement.classList.add('hover');
    }
}


function unhighlightSquare(e){
    if(e.target.matches('.odd')||e.target.matches('.even')){
        e.target.classList.remove('hover');
    }else if(e.target.matches('img')){
        if(e.target.parentElement.matches('.odd')||e.target.parentElement.matches('.even'))
        e.target.parentElement.classList.remove('hover');
    }
}






function selectPiece(e){

    if(!selectedPiece || e.target == selectedPiece){
        //if it's white's turn to move
        if(whiteMove){
            if(e.target.matches('.white')){
                //highlight selected piece
                selectedPiece= e.target;
                selectedSquare= e.target.parentElement;
                selectedSquare.classList.toggle('selected');

                //get piece name
                const piece= selectedPiece.getAttribute('data-piece');
                //highlighting potential future positions when a piece is selected
                if(selectedSquare.matches('.selected')){
                    piecesWhite[piece].potentialPositions.forEach(position =>{
                        position.classList.add('potential-position');
                    });
                    addCaptureClass();
                }


                //removing highlights from future potential positions after unselecting, in case player changes their mind
                else{
                    piecesWhite[piece].potentialPositions.forEach(position =>{
                        position.classList.remove('potential-position');
                    });
                    document.querySelectorAll('.capture').forEach(el => el.classList.remove('capture'));
                    selectedPiece= null;
                }
            }
        }

        
        //if it's black's turn to move
        else{
            if(e.target.matches('.black')){
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
                    addCaptureClass();
                }
    
    
                //removing highlights from future potential positions after unselecting, in case player changes their mind
                else{
                    piecesBlack[piece].potentialPositions.forEach(position =>{
                        position.classList.remove('potential-position');
                    });
                    document.querySelectorAll('.capture').forEach(el => el.classList.remove('capture'));
                    selectedPiece= null;
                }
            }
        }
    }
}


function addCaptureClass() {
    // remove any old capture flags
    document.querySelectorAll('.capture').forEach(el => el.classList.remove('capture'));
    // for each highlighted square that already contains a piece of the opposite color, add .capture
    if (!selectedPiece) return;
    const enemyColor = selectedPiece.classList.contains('white') ? 'black' : 'white';
    document.querySelectorAll('.potential-position').forEach(square => {
      const img = square.querySelector('img');
      if (img && img.classList.contains(enemyColor)) {
        square.classList.add('capture');
      }
    });
  }