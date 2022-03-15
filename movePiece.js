//moving the selected chess piece when clicked on a potential position
sudoku.addEventListener('click', (e) => {
    
    //if the position doesn't already have a piece of opposite color
    if(e.target.matches('.potential-position')){
        
        //select the position and move the selected piece onto that position
        const nextSquare= e.target;
        nextSquare.appendChild(selectedPiece);

        
        //remove all the other potential-positions from the board for the previously selected piece
        previousPotentialPositions= sudoku.querySelectorAll('.potential-position');
        previousPotentialPositions.forEach(previousPotentialPosition => {
            previousPotentialPosition.classList.remove('potential-position');
        });
        selectedSquare.classList.remove('selected');


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
        const nextSquare= e.target.parentElement;
        nextSquare.removeChild(nextSquare.firstElementChild);
        nextSquare.appendChild(selectedPiece);


        //remove all the other potential-positions from the board for the previously selected piece
        previousPotentialPositions= sudoku.querySelectorAll('.potential-position');
        previousPotentialPositions.forEach(previousPotentialPosition => {
            previousPotentialPosition.classList.remove('potential-position');
        });
        selectedSquare.classList.remove('selected');

        
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