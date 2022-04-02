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
                    if((positionId[0]> piecesWhite['kingWhite'].position[0] && positionId[1]> piecesWhite['kingWhite'].position[1]) &&
                    (positionId[0]<= whiteChecker[0].position[0] && positionId[1]<= whiteChecker[0].position[1])){
                        return canBlockCheck(positionId, colorOfOpposition);
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
                    if((positionId[0]> piecesWhite['kingWhite'].position[0] && positionId[1]< piecesWhite['kingWhite'].position[1]) &&
                    (positionId[0]<= whiteChecker[0].position[0] && positionId[1]>= whiteChecker[0].position[1])){
                        return canBlockCheck(positionId, colorOfOpposition);
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
                    if((positionId[0]< piecesWhite['kingWhite'].position[0] && positionId[1]< piecesWhite['kingWhite'].position[1]) &&
                    (positionId[0]>= whiteChecker[0].position[0] && positionId[1]>= whiteChecker[0].position[1])){
                        return canBlockCheck(positionId, colorOfOpposition);
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
            
            
            else if(whiteChecker[0].position[0]<= piecesWhite['kingWhite'].position[0] && whiteChecker[0].position[1]>= piecesWhite['kingWhite'].position[1]){
                const tempPotentialPositions= potentialPositions.filter( checkBlockingPosition => {
                    const positionId= checkBlockingPosition.getAttribute('id');
                    if((positionId[0]< piecesWhite['kingWhite'].position[0] && positionId[1]> piecesWhite['kingWhite'].position[1]) &&
                    (positionId[0]>= whiteChecker[0].position[0] && positionId[1]<= whiteChecker[0].position[1])){
                        console.log(canBlockCheck(positionId, colorOfOpposition));
                        return canBlockCheck(positionId, colorOfOpposition);
                    }
                    else{
                        return false;
                    }
                });

                filterPositionsIfChecked(potentialPositions, tempPotentialPositions);
            }
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
                    if((positionId[0]> piecesBlack['kingBlack'].position[0] && positionId[1]> piecesBlack['kingBlack'].position[1]) &&
                    (positionId[0]<= blackChecker[0].position[0] && positionId[1]<= blackChecker[0].position[1])){
                        return canBlockCheck(positionId, colorOfOpposition);
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
                    if((positionId[0]> piecesBlack['kingBlack'].position[0] && positionId[1]< piecesBlack['kingBlack'].position[1]) &&
                    (positionId[0]<= blackChecker[0].position[0] && positionId[1]>= blackChecker[0].position[1])){
                        return canBlockCheck(positionId, colorOfOpposition);
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
                    if((positionId[0]< piecesBlack['kingBlack'].position[0] && positionId[1]< piecesBlack['kingBlack'].position[1]) &&
                    (positionId[0]>= blackChecker[0].position[0] && positionId[1]>= blackChecker[0].position[1])){
                        return canBlockCheck(positionId, colorOfOpposition);
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
            
            
            else if(blackChecker[0].position[0]<= piecesBlack['kingBlack'].position[0] && blackChecker[0].position[1]>= piecesBlack['kingBlack'].position[1]){
                const tempPotentialPositions= potentialPositions.filter( checkBlockingPosition => {
                    const positionId= checkBlockingPosition.getAttribute('id');
                    if((positionId[0]< piecesBlack['kingBlack'].position[0] && positionId[1]> piecesBlack['kingBlack'].position[1]) &&
                    (positionId[0]>= blackChecker[0].position[0] && positionId[1]<= blackChecker[0].position[1])){
                        return canBlockCheck(positionId, colorOfOpposition);
                    }
                    else{
                        return false;
                    }
                });

                filterPositionsIfChecked(potentialPositions, tempPotentialPositions);
            }
        }
    }
}