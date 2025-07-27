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
                    position.classList.remove('capture');
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
                    position.classList.remove('capture');
                    selectedPiece= null;
                }
            }
        }
    }
}
// Add this new function to eventFuncs.js
function addCaptureClass() {
    // Remove all existing capture classes
    document.querySelectorAll('.capture').forEach(el => {
        el.classList.remove('capture');
    });
    
    // Add capture class to squares with enemy pieces
    if (selectedPiece) {
        const piece = selectedPiece.getAttribute('data-piece');
        const colorOfPiece = selectedPiece.classList.contains('white') ? 'white' : 'black';
        const colorOfOpposition = colorOfPiece === 'white' ? 'black' : 'white';
        
        const pieceData = colorOfPiece === 'white' ? piecesWhite[piece] : piecesBlack[piece];
        
        pieceData.potentialPositions.forEach(position => {
            if (position.childElementCount && 
                position.querySelector('img').classList.contains(colorOfOpposition)) {
                position.classList.add('capture');
            }
        });
    }
}
