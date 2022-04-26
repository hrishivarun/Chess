//functions for calculating legal moves given any piece
//for PAWNS
function legalPawnMoves(position, colorOfOpposition, potentialPositions){
    if(colorOfOpposition== 'black'){
        const potentialPosition= sudoku.querySelector(`#${position[0]}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
        if(!potentialPosition.childElementCount){
            potentialPositions.push(potentialPosition);
            if(position[1]=='2'){
                const potentialPositionSpecialCase= sudoku.querySelector(`#${position[0]}${String.fromCharCode(position.charCodeAt(1) + 2)}`);
                if(!potentialPositionSpecialCase.childElementCount){
                    potentialPositions.push(potentialPositionSpecialCase);
                }
            }
        }
        const pawnUpPosition= [];
        if(position[0]>'a'){
            pawnUpPosition.push(sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) + 1)}`));
        }
        if(position[0]<'h'){
            pawnUpPosition.push(sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) + 1)}`));
        }
        for(let i=0; i<pawnUpPosition.length; i++){
            if(pawnUpPosition[i].childElementCount){
                if(pawnUpPosition[i].querySelector('img').matches(`.${colorOfOpposition}`)){
                    if(pawnUpPosition[i].querySelector('img').matches('.king')){
                        pushChecker(position, colorOfOpposition);
                    }
                    potentialPositions.push(pawnUpPosition[i]);
                }
            }
        }
    }
    else if(colorOfOpposition== 'white'){
        const potentialPosition= sudoku.querySelector(`#${position[0]}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
        if(!potentialPosition.childElementCount){
            potentialPositions.push(potentialPosition);
            if(position[1]=='7'){
                const potentialPositionSpecialCase= sudoku.querySelector(`#${position[0]}${String.fromCharCode(position.charCodeAt(1) - 2)}`);
                if(!potentialPositionSpecialCase.childElementCount){
                    potentialPositions.push(potentialPositionSpecialCase);
                }
            }
        }
        const pawnUpPosition= [];
        if(position[0]>'a'){
            pawnUpPosition.push(sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) - 1)}`));
        }
        if(position[0]<'h'){
            pawnUpPosition.push(sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) - 1)}`));
        }
        for(let i=0; i<pawnUpPosition.length; i++){
            if(pawnUpPosition[i].childElementCount){
                if(pawnUpPosition[i].querySelector('img').matches(`.${colorOfOpposition}`)){
                    if(pawnUpPosition[i].querySelector('img').matches('.king')){
                        pushChecker(position, colorOfOpposition);
                    }
                    potentialPositions.push(pawnUpPosition[i]);
                }
            }
        }
    }

    blockCheck(colorOfOpposition, potentialPositions);
}










//for KNIGHT
function legalKnightMoves(position, colorOfOpposition, potentialPositions){
    if((position.charCodeAt(0) + 2)<=104&&(position.charCodeAt(1) + 1)<=56){
        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 2)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
        addKnightMoves(position, colorOfOpposition, potentialPositions, potentialPosition);
        backPieceOfSameColor(potentialPosition, colorOfOpposition);
    }
    if((position.charCodeAt(0) + 2)<=104&&(position.charCodeAt(1) - 1)>=49){
        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 2)}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
        addKnightMoves(position, colorOfOpposition, potentialPositions, potentialPosition);
        backPieceOfSameColor(potentialPosition, colorOfOpposition);
    }
    if((position.charCodeAt(0) - 2)>=97&&(position.charCodeAt(1) + 1)<=56){
        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 2)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
        addKnightMoves(position, colorOfOpposition, potentialPositions, potentialPosition);
        backPieceOfSameColor(potentialPosition, colorOfOpposition);
    }
    if((position.charCodeAt(0) - 2)>=97&&(position.charCodeAt(1) - 1)>=49){
        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 2)}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
        addKnightMoves(position, colorOfOpposition, potentialPositions, potentialPosition);
        backPieceOfSameColor(potentialPosition, colorOfOpposition);
    }

    if((position.charCodeAt(0) + 1)<=104&&(position.charCodeAt(1) + 2)<=56){
        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) + 2)}`);
        addKnightMoves(position, colorOfOpposition, potentialPositions, potentialPosition);
        backPieceOfSameColor(potentialPosition, colorOfOpposition);
    }
    if((position.charCodeAt(0) + 1)<=104&&(position.charCodeAt(1) - 2)>=49){
        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) - 2)}`);
        addKnightMoves(position, colorOfOpposition, potentialPositions, potentialPosition);
        backPieceOfSameColor(potentialPosition, colorOfOpposition);
    }
    if((position.charCodeAt(0) - 1)>=97&&(position.charCodeAt(1) + 2)<=56){
        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) + 2)}`);
        addKnightMoves(position, colorOfOpposition, potentialPositions, potentialPosition);
        backPieceOfSameColor(potentialPosition, colorOfOpposition);
    }
    if((position.charCodeAt(0) - 1)>=97&&(position.charCodeAt(1) - 2)>=49){
        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) - 2)}`);
        addKnightMoves(position, colorOfOpposition, potentialPositions, potentialPosition);
        backPieceOfSameColor(potentialPosition, colorOfOpposition);
    }

    blockCheck(colorOfOpposition, potentialPositions);
}











//for BISHOP
function legalBishopMoves(position, colorOfOpposition, potentialPositions){
    if(position[0]<'h'&&position[1]<'8'){
        let potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
        let potentialPositionId= potentialPosition.getAttribute('id');
        while((!potentialPosition.childElementCount&&(potentialPositionId[0]<='h'&&potentialPositionId[1]<='8'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
                if(potentialPosition.querySelector('img').matches('.king')){
                    pushChecker(position, colorOfOpposition);
                }
                break;
            }
            if(potentialPositionId[0]=='h'||potentialPositionId[1]=='8'){
                break;
            }
            potentialPosition= sudoku.querySelector(`#${String.fromCharCode(potentialPositionId.charCodeAt(0) + 1)}${String.fromCharCode(potentialPositionId.charCodeAt(1) + 1)}`);
            potentialPositionId= potentialPosition.getAttribute('id');
            backPieceOfSameColor(potentialPosition, colorOfOpposition);
        }

        //check if bishop is pinning any piece
        let pinCounter = 0;
        let pinnedPiece;
        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
        potentialPositionId= potentialPosition.getAttribute('id');
        while(potentialPositionId[0]<='h'&&potentialPositionId[1]<='8'){
            if(potentialPosition.childElementCount&&!potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
                break;
            }
            else if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
                if(pinCounter === 0){
                    if(potentialPosition.querySelector('img').matches('.king')){
                        break;
                    }else{
                        pinCounter++;
                        pinnedPiece = potentialPosition.querySelector('img').getAttribute('data-piece');
                    }
                }
                else if(pinCounter === 1){
                    if(potentialPosition.querySelector('img').matches('.king')){
                        const pinner = sudoku.querySelector(`#${position}`).querySelector('img').getAttribute('data-piece');
                        pinnedPieces[colorOfOpposition][pinner] = pinnedPiece;
                    }else{
                        break;
                    }
                }
            }
            if(potentialPositionId[0]=='h'||potentialPositionId[1]=='8'){
                break;
            }
            potentialPosition= sudoku.querySelector(`#${String.fromCharCode(potentialPositionId.charCodeAt(0) + 1)}${String.fromCharCode(potentialPositionId.charCodeAt(1) + 1)}`);
            potentialPositionId= potentialPosition.getAttribute('id');
        }
    }
    
    
    if(position[0]<'h'&&position[1]>'1'){
        let potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
        let potentialPositionId= potentialPosition.getAttribute('id');
        while((!potentialPosition.childElementCount&&(potentialPositionId[0]<='h'&&potentialPositionId[1]>='1'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
                if(potentialPosition.querySelector('img').matches('.king')){
                    pushChecker(position, colorOfOpposition);
                }
                break;
            }
            if(potentialPositionId[0]=='h'||potentialPositionId[1]=='1'){
                break;
            }
            potentialPosition= sudoku.querySelector(`#${String.fromCharCode(potentialPositionId.charCodeAt(0) + 1)}${String.fromCharCode(potentialPositionId.charCodeAt(1) - 1)}`);
            potentialPositionId= potentialPosition.getAttribute('id');
            backPieceOfSameColor(potentialPosition, colorOfOpposition);
        }

        //check if bishop is pinning any piece
        let pinCounter = 0;
        let pinnedPiece;
        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
        potentialPositionId= potentialPosition.getAttribute('id');
        while(potentialPositionId[0]<='h'&&potentialPositionId[1]>='1'){
            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
                if(pinCounter === 0){
                    if(potentialPosition.querySelector('img').matches('.king')){
                        break;
                    }else{
                        pinCounter++;
                        pinnedPiece = potentialPosition.querySelector('img').getAttribute('data-piece');
                    }
                }
                else if(pinCounter === 1){
                    if(potentialPosition.querySelector('img').matches('.king')){
                        const pinner = sudoku.querySelector(`#${position}`).querySelector('img').getAttribute('data-piece');
                        pinnedPieces[colorOfOpposition][pinner] = pinnedPiece;
                    }else{
                        break;
                    }
                }
            }
            if(potentialPositionId[0]=='h'||potentialPositionId[1]=='1'){
                break;
            }
            potentialPosition= sudoku.querySelector(`#${String.fromCharCode(potentialPositionId.charCodeAt(0) + 1)}${String.fromCharCode(potentialPositionId.charCodeAt(1) - 1)}`);
            potentialPositionId= potentialPosition.getAttribute('id');
        }
    }
    

    if(position[0]>'a'&&position[1]>'1'){
        let potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
        let potentialPositionId= potentialPosition.getAttribute('id');
        while((!potentialPosition.childElementCount&&(potentialPositionId[0]>='a'&&potentialPositionId[1]>='1'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
                if(potentialPosition.querySelector('img').matches('.king')){
                    pushChecker(position, colorOfOpposition);
                }
                break;
            }
            if(potentialPositionId[0]=='a'||potentialPositionId[1]=='1'){
                break;
            }
            potentialPosition= sudoku.querySelector(`#${String.fromCharCode(potentialPositionId.charCodeAt(0) - 1)}${String.fromCharCode(potentialPositionId.charCodeAt(1) - 1)}`);
            potentialPositionId= potentialPosition.getAttribute('id');
            backPieceOfSameColor(potentialPosition, colorOfOpposition);
        }

        //check if bishop is pinning any piece
        let pinCounter = 0;
        let pinnedPiece;
        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
        potentialPositionId= potentialPosition.getAttribute('id');
        while(potentialPositionId[0]>='a'&&potentialPositionId[1]>='1'){
            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
                if(pinCounter === 0){
                    if(potentialPosition.querySelector('img').matches('.king')){
                        break;
                    }else{
                        pinCounter++;
                        pinnedPiece = potentialPosition.querySelector('img').getAttribute('data-piece');
                    }
                }
                else if(pinCounter === 1){
                    if(potentialPosition.querySelector('img').matches('.king')){
                        const pinner = sudoku.querySelector(`#${position}`).querySelector('img').getAttribute('data-piece');
                        pinnedPieces[colorOfOpposition][pinner] = pinnedPiece;
                    }else{
                        break;
                    }
                }
            }
            if(potentialPositionId[0]=='a'||potentialPositionId[1]=='1'){
                break;
            }
            potentialPosition= sudoku.querySelector(`#${String.fromCharCode(potentialPositionId.charCodeAt(0) - 1)}${String.fromCharCode(potentialPositionId.charCodeAt(1) - 1)}`);
            potentialPositionId= potentialPosition.getAttribute('id');
        }
    }


    if(position[0]>'a'&&position[1]<'8'){
        let potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
        let potentialPositionId= potentialPosition.getAttribute('id');
        while((!potentialPosition.childElementCount&&(potentialPositionId[0]>='a'&&potentialPositionId[1]<='8'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
                if(potentialPosition.querySelector('img').matches('.king')){
                    pushChecker(position, colorOfOpposition);
                }
                break;
            }
            if(potentialPositionId[0]=='a'||potentialPositionId[1]=='8'){
                break;
            } 
            potentialPosition= sudoku.querySelector(`#${String.fromCharCode(potentialPositionId.charCodeAt(0) - 1)}${String.fromCharCode(potentialPositionId.charCodeAt(1) + 1)}`);
            potentialPositionId= potentialPosition.getAttribute('id');
            backPieceOfSameColor(potentialPosition, colorOfOpposition);
        }

        //check if bishop is pinning any piece
        let pinCounter = 0;
        let pinnedPiece;
        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
        potentialPositionId= potentialPosition.getAttribute('id');
        while(potentialPositionId[0]>='a'&&potentialPositionId[1]<='8'){
            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
                if(pinCounter === 0){
                    if(potentialPosition.querySelector('img').matches('.king')){
                        break;
                    }else{
                        pinCounter++;
                        pinnedPiece = potentialPosition.querySelector('img').getAttribute('data-piece');
                    }
                }
                else if(pinCounter === 1){
                    if(potentialPosition.querySelector('img').matches('.king')){
                        const pinner = sudoku.querySelector(`#${position}`).querySelector('img').getAttribute('data-piece');
                        pinnedPieces[colorOfOpposition][pinner] = pinnedPiece;
                    }else{
                        break;
                    }
                }
            }
            if(potentialPositionId[0]=='a'||potentialPositionId[1]=='8'){
                break;
            }
            potentialPosition= sudoku.querySelector(`#${String.fromCharCode(potentialPositionId.charCodeAt(0) - 1)}${String.fromCharCode(potentialPositionId.charCodeAt(1) + 1)}`);
            potentialPositionId= potentialPosition.getAttribute('id');
        }
    }


    blockCheck(colorOfOpposition, potentialPositions);
}










//for ROOK
function legalRookMoves(position, colorOfOpposition, potentialPositions){
    if(position[1]<'8'){
        let potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0))}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
        let potentialPositionId= potentialPosition.getAttribute('id');
        while((!potentialPosition.childElementCount&&(potentialPositionId[1]<='8'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
                if(potentialPosition.querySelector('img').matches('.king')){
                    pushChecker(position, colorOfOpposition);
                }
                break;
            }
            if(potentialPositionId[1]=='8'){
                break;
            }
            potentialPosition= sudoku.querySelector(`#${String.fromCharCode(potentialPositionId.charCodeAt(0))}${String.fromCharCode(potentialPositionId.charCodeAt(1) + 1)}`);
            potentialPositionId= potentialPosition.getAttribute('id');
            backPieceOfSameColor(potentialPosition, colorOfOpposition);
        }

        //check if rook is pinning any piece
        let pinCounter = 0;
        let pinnedPiece;
        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0))}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
        potentialPositionId= potentialPosition.getAttribute('id');
        while(potentialPositionId[1]<='8'){
            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
                if(pinCounter === 0){
                    if(potentialPosition.querySelector('img').matches('.king')){
                        break;
                    }else{
                        pinCounter++;
                        pinnedPiece = potentialPosition.querySelector('img').getAttribute('data-piece');
                    }
                }
                else if(pinCounter === 1){
                    if(potentialPosition.querySelector('img').matches('.king')){
                        const pinner = sudoku.querySelector(`#${position}`).querySelector('img').getAttribute('data-piece');
                        pinnedPieces[colorOfOpposition][pinner] = pinnedPiece;
                    }else{
                        break;
                    }
                }
            }
            if(potentialPositionId[1]=='8'){
                break;
            }
            potentialPosition= sudoku.querySelector(`#${String.fromCharCode(potentialPositionId.charCodeAt(0))}${String.fromCharCode(potentialPositionId.charCodeAt(1) + 1)}`);
            potentialPositionId= potentialPosition.getAttribute('id');
        }
    }
    

    if(position[0]<'h'){
        let potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1))}`);
        let potentialPositionId= potentialPosition.getAttribute('id');
        while((!potentialPosition.childElementCount&&(potentialPositionId[0]<='h'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
                if(potentialPosition.querySelector('img').matches('.king')){
                    pushChecker(position, colorOfOpposition);
                }
                break;
            }
            if(potentialPositionId[0]=='h'){
                break;
            }
            potentialPosition= sudoku.querySelector(`#${String.fromCharCode(potentialPositionId.charCodeAt(0) + 1)}${String.fromCharCode(potentialPositionId.charCodeAt(1))}`);
            potentialPositionId= potentialPosition.getAttribute('id');
            backPieceOfSameColor(potentialPosition, colorOfOpposition);
        }

        //check if rook is pinning any piece
        let pinCounter = 0;
        let pinnedPiece;
        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1))}`);
        potentialPositionId= potentialPosition.getAttribute('id');
        while(potentialPositionId[0]<='h'){
            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
                if(pinCounter === 0){
                    if(potentialPosition.querySelector('img').matches('.king')){
                        break;
                    }else{
                        pinCounter++;
                        pinnedPiece = potentialPosition.querySelector('img').getAttribute('data-piece');
                    }
                }
                else if(pinCounter === 1){
                    if(potentialPosition.querySelector('img').matches('.king')){
                        const pinner = sudoku.querySelector(`#${position}`).querySelector('img').getAttribute('data-piece');
                        pinnedPieces[colorOfOpposition][pinner] = pinnedPiece;
                    }else{
                        break;
                    }
                }
            }
            if(potentialPositionId[0]=='h'){
                break;
            }
            potentialPosition= sudoku.querySelector(`#${String.fromCharCode(potentialPositionId.charCodeAt(0) + 1)}${String.fromCharCode(potentialPositionId.charCodeAt(1))}`);
            potentialPositionId= potentialPosition.getAttribute('id');
        }
    }
    

    if(position[1]>'1'){
        let potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0))}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
        let potentialPositionId= potentialPosition.getAttribute('id');
        while((!potentialPosition.childElementCount&&(potentialPositionId[1]>='1'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
                if(potentialPosition.querySelector('img').matches('.king')){
                    pushChecker(position, colorOfOpposition);
                }
                break;
            }
            if(potentialPositionId[1]=='1'){
                break;
            }
            potentialPosition= sudoku.querySelector(`#${String.fromCharCode(potentialPositionId.charCodeAt(0))}${String.fromCharCode(potentialPositionId.charCodeAt(1) - 1)}`);
            potentialPositionId= potentialPosition.getAttribute('id');
            backPieceOfSameColor(potentialPosition, colorOfOpposition);
        }

        //check if rook is pinning any piece
        let pinCounter = 0;
        let pinnedPiece;
        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0))}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
        potentialPositionId= potentialPosition.getAttribute('id');
        while(potentialPositionId[1]>='1'){
            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
                if(pinCounter === 0){
                    if(potentialPosition.querySelector('img').matches('.king')){
                        break;
                    }else{
                        pinCounter++;
                        pinnedPiece = potentialPosition.querySelector('img').getAttribute('data-piece');
                    }
                }
                else if(pinCounter === 1){
                    if(potentialPosition.querySelector('img').matches('.king')){
                        const pinner = sudoku.querySelector(`#${position}`).querySelector('img').getAttribute('data-piece');
                        pinnedPieces[colorOfOpposition][pinner] = pinnedPiece;
                    }else{
                        break;
                    }
                }
            }
            if(potentialPositionId[1]=='1'){
                break;
            }
            potentialPosition= sudoku.querySelector(`#${String.fromCharCode(potentialPositionId.charCodeAt(0))}${String.fromCharCode(potentialPositionId.charCodeAt(1) - 1)}`);
            potentialPositionId= potentialPosition.getAttribute('id');
        }
    }


    if(position[0]>'a'){
        let potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1))}`);
        let potentialPositionId= potentialPosition.getAttribute('id');
        while((!potentialPosition.childElementCount&&(potentialPositionId[0]>='a'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
                if(potentialPosition.querySelector('img').matches('.king')){
                    pushChecker(position, colorOfOpposition);
                }
                break;
            }
            if(potentialPositionId[0]=='a'){
                break;
            } 
            potentialPosition= sudoku.querySelector(`#${String.fromCharCode(potentialPositionId.charCodeAt(0) - 1)}${String.fromCharCode(potentialPositionId.charCodeAt(1))}`);
            potentialPositionId= potentialPosition.getAttribute('id');
            backPieceOfSameColor(potentialPosition, colorOfOpposition);
        }

        //check if rook is pinning any piece
        let pinCounter = 0;
        let pinnedPiece;
        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1))}`);
        potentialPositionId= potentialPosition.getAttribute('id');
        while(potentialPositionId[0]>='a'){
            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
                if(pinCounter === 0){
                    if(potentialPosition.querySelector('img').matches('.king')){
                        break;
                    }else{
                        pinCounter++;
                        pinnedPiece = potentialPosition.querySelector('img').getAttribute('data-piece');
                    }
                }
                else if(pinCounter === 1){
                    if(potentialPosition.querySelector('img').matches('.king')){
                        const pinner = sudoku.querySelector(`#${position}`).querySelector('img').getAttribute('data-piece');
                        pinnedPieces[colorOfOpposition][pinner] = pinnedPiece;
                    }else{
                        break;
                    }
                }
            }
            if(potentialPositionId[0]=='a'){
                break;
            }
            potentialPosition= sudoku.querySelector(`#${String.fromCharCode(potentialPositionId.charCodeAt(0) - 1)}${String.fromCharCode(potentialPositionId.charCodeAt(1))}`);
            potentialPositionId= potentialPosition.getAttribute('id');
        }
    }


    blockCheck(colorOfOpposition, potentialPositions);
}










//for QUEEN
function legalQueenMoves(position, colorOfOpposition, potentialPositions){
    legalBishopMoves(position, colorOfOpposition, potentialPositions);
    legalRookMoves(position, colorOfOpposition, potentialPositions);
}










//for KING
function legalKingMoves(position, colorOfOpposition, potentialPositions){
    if(position[0]<'h'&&position[1]<'8'){
        let potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
        let potentialPositionId= potentialPosition.getAttribute('id');
        if((!potentialPosition.childElementCount&&(potentialPositionId[0]<='h'&&potentialPositionId[1]<='8'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
        }
    }
    
    if(position[0]<'h'&&position[1]>'1'){
        let potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
        let potentialPositionId= potentialPosition.getAttribute('id');
        if((!potentialPosition.childElementCount&&(potentialPositionId[0]<='h'&&potentialPositionId[1]>='1'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
        }
    }
    
    if(position[0]>'a'&&position[1]>'1'){
        let potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
        let potentialPositionId= potentialPosition.getAttribute('id');
        if((!potentialPosition.childElementCount&&(potentialPositionId[0]>='a'&&potentialPositionId[1]>='1'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
        }
    }

    if(position[0]>'a'&&position[1]<'8'){
        let potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
        let potentialPositionId= potentialPosition.getAttribute('id');
        if((!potentialPosition.childElementCount&&(potentialPositionId[0]>='a'&&potentialPositionId[1]<='8'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
        }
    }


    if(position[1]<'8'){
        let potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0))}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
        let potentialPositionId= potentialPosition.getAttribute('id');
        if((!potentialPosition.childElementCount&&(potentialPositionId[1]<='8'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
        }
    }
    
    if(position[0]<'h'){
        let potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1))}`);
        let potentialPositionId= potentialPosition.getAttribute('id');
        if((!potentialPosition.childElementCount&&(potentialPositionId[0]<='h'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
        }
    }
    
    if(position[1]>'1'){
        let potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0))}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
        let potentialPositionId= potentialPosition.getAttribute('id');
        if((!potentialPosition.childElementCount&&(potentialPositionId[1]>='1'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
        }
    }

    if(position[0]>'a'){
        let potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1))}`);
        let potentialPositionId= potentialPosition.getAttribute('id');
        if((!potentialPosition.childElementCount&&(potentialPositionId[0]>='a'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
        }
    }


    castling(colorOfOpposition, potentialPositions);
    

    tempPotentialPositions= potentialPositions.filter(square => {
        let safePosition= true;
        const potentialPositionId= square.getAttribute('id');
        if(colorOfOpposition == 'white'){
            blockedPositionsForBlackKing.forEach(potentialPosition => {
                if(potentialPosition == potentialPositionId){
                    safePosition= false;
                }
            });  
        }

        else if(colorOfOpposition == 'black'){
            blockedPositionsForWhiteKing.forEach(potentialPosition => {
                if(potentialPosition == potentialPositionId){
                    safePosition= false;
                }
            });
        }

        return safePosition;
    });

    filterPositionsIfChecked(potentialPositions, tempPotentialPositions);
    console.log(potentialPositions);
}