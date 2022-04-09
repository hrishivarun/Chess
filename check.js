function checkForCheck(){
    if(!whiteMove){
        if(whiteChecked){
            console.log('success');
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