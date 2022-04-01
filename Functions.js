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
    if(colorOfOpposition== 'black'){
        if(positionId == whiteChecker[0]['position']){
            return true;
        }
        whiteChecker[0]['potentialPositions'].forEach( square => {
            const checkerPotentialPosition= square.getAttribute('id');
            if(positionId == checkerPotentialPosition){
                console.log(positionId, checkerPotentialPosition);
                return true;
            }
        });
    }
    else if(colorOfOpposition== 'white'){
        if(positionId == blackChecker[0]['position']){
            return true;
        }
        blackChecker[0]['potentialPositions'].forEach( square => {
            const checkerPotentialPosition= square.getAttribute('id');
            if(positionId == checkerPotentialPosition){
                return true;
            }
        });
    }
}





function filterPositionsIfChecked(potentialPositions, tempPotentialPositions){
    while(potentialPositions.length){
        potentialPositions.pop();
    }
    tempPotentialPositions.forEach(blockingPosition => {
        potentialPositions.push(blockingPosition);
    });
}