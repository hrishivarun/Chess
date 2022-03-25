//functions for calculating legal moves given any piece
//for PAWNS
function legalPawnMoves(position, colorOfOpposition, potentialPositions){
    if(colorOfOpposition== 'black'){
        const potentialPosition= sudoku.querySelector(`#${position[0]}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
        if(!potentialPosition.childElementCount){
            potentialPositions.push(potentialPosition);
            if(position[1]=='2'){
                potentialPositionSpecialCase= sudoku.querySelector(`#${position[0]}${String.fromCharCode(position.charCodeAt(1) + 2)}`);
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
                    potentialPositions.push(pawnUpPosition[i]);
                }
            }
        }
    }else if(colorOfOpposition== 'white'){
        const potentialPosition= sudoku.querySelector(`#${position[0]}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
        if(!potentialPosition.childElementCount){
            potentialPositions.push(potentialPosition);
            if(position[1]=='7'){
                potentialPositionSpecialCase= sudoku.querySelector(`#${position[0]}${String.fromCharCode(position.charCodeAt(1) - 2)}`);
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
                    potentialPositions.push(pawnUpPosition[i]);
                }
            }
        }
    }
}










//for KNIGHT
function legalKnightMoves(position, colorOfOpposition, potentialPositions){
    if((position.charCodeAt(0) + 2)<=104&&(position.charCodeAt(1) + 1)<=56){
        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 2)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
            potentialPositions.push(potentialPosition);
        }
    }
    if((position.charCodeAt(0) + 2)<=104&&(position.charCodeAt(1) - 1)>=49){
        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 2)}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
            potentialPositions.push(potentialPosition);
        }
    }
    if((position.charCodeAt(0) - 2)>=97&&(position.charCodeAt(1) + 1)<=56){
        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 2)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
            potentialPositions.push(potentialPosition);
        }
    }
    if((position.charCodeAt(0) - 2)>=97&&(position.charCodeAt(1) - 1)>=49){
        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 2)}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
            potentialPositions.push(potentialPosition);
        }
    }

    if((position.charCodeAt(0) + 1)<=104&&(position.charCodeAt(1) + 2)<=56){
        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) + 2)}`);
        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
            potentialPositions.push(potentialPosition);
        }
    }
    if((position.charCodeAt(0) + 1)<=104&&(position.charCodeAt(1) - 2)>=49){
        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) - 2)}`);
        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
            potentialPositions.push(potentialPosition);
        }
    }
    if((position.charCodeAt(0) - 1)>=97&&(position.charCodeAt(1) + 2)<=56){
        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) + 2)}`);
        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
            potentialPositions.push(potentialPosition);
        }
    }
    if((position.charCodeAt(0) - 1)>=97&&(position.charCodeAt(1) - 2)>=49){
        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) - 2)}`);
        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
            potentialPositions.push(potentialPosition);
        }
    }
}











//for BISHOP
function legalBishopMoves(position, colorOfOpposition, potentialPositions){
    if(position[0]<'h'&&position[1]<'8'){
        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
        potentialPositionId= potentialPosition.getAttribute('id');
        while((!potentialPosition.childElementCount&&(potentialPositionId[0]<='h'&&potentialPositionId[1]<='8'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
                break;
            }
            if(potentialPositionId[0]=='h'||potentialPositionId[1]=='8'){
                break;
            }
            potentialPosition= sudoku.querySelector(`#${String.fromCharCode(potentialPositionId.charCodeAt(0) + 1)}${String.fromCharCode(potentialPositionId.charCodeAt(1) + 1)}`);
            potentialPositionId= potentialPosition.getAttribute('id');
        }
    }
    
    if(position[0]<'h'&&position[1]>'1'){
        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
        potentialPositionId= potentialPosition.getAttribute('id');
        while((!potentialPosition.childElementCount&&(potentialPositionId[0]<='h'&&potentialPositionId[1]>='1'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
                break;
            }
            if(potentialPositionId[0]=='h'||potentialPositionId[1]=='1'){
                break;
            }
            potentialPosition= sudoku.querySelector(`#${String.fromCharCode(potentialPositionId.charCodeAt(0) + 1)}${String.fromCharCode(potentialPositionId.charCodeAt(1) - 1)}`);
            potentialPositionId= potentialPosition.getAttribute('id');
        }
    }
    
    if(position[0]>'a'&&position[1]>'1'){
        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
        potentialPositionId= potentialPosition.getAttribute('id');
        while((!potentialPosition.childElementCount&&(potentialPositionId[0]>='a'&&potentialPositionId[1]>='1'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
                break;
            }
            if(potentialPositionId[0]=='a'||potentialPositionId[1]=='1'){
                break;
            }
            potentialPosition= sudoku.querySelector(`#${String.fromCharCode(potentialPositionId.charCodeAt(0) - 1)}${String.fromCharCode(potentialPositionId.charCodeAt(1) - 1)}`);
            potentialPositionId= potentialPosition.getAttribute('id');
        }
    }

    if(position[0]>'a'&&position[1]<'8'){
        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
        potentialPositionId= potentialPosition.getAttribute('id');
        while((!potentialPosition.childElementCount&&(potentialPositionId[0]>='a'&&potentialPositionId[1]<='8'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
                break;
            }
            if(potentialPositionId[0]=='a'||potentialPositionId[1]=='8'){
                break;
            } 
            potentialPosition= sudoku.querySelector(`#${String.fromCharCode(potentialPositionId.charCodeAt(0) - 1)}${String.fromCharCode(potentialPositionId.charCodeAt(1) + 1)}`);
            potentialPositionId= potentialPosition.getAttribute('id');
        }
    }
}










//for ROOK
function legalRookMoves(position, colorOfOpposition, potentialPositions){
    if(position[1]<'8'){
        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0))}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
        potentialPositionId= potentialPosition.getAttribute('id');
        while((!potentialPosition.childElementCount&&(potentialPositionId[1]<='8'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
                break;
            }
            if(potentialPositionId[1]=='8'){
                break;
            }
            potentialPosition= sudoku.querySelector(`#${String.fromCharCode(potentialPositionId.charCodeAt(0))}${String.fromCharCode(potentialPositionId.charCodeAt(1) + 1)}`);
            potentialPositionId= potentialPosition.getAttribute('id');
        }
    }
    
    if(position[0]<'h'){
        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1))}`);
        potentialPositionId= potentialPosition.getAttribute('id');
        while((!potentialPosition.childElementCount&&(potentialPositionId[0]<='h'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
                break;
            }
            if(potentialPositionId[0]=='h'){
                break;
            }
            potentialPosition= sudoku.querySelector(`#${String.fromCharCode(potentialPositionId.charCodeAt(0) + 1)}${String.fromCharCode(potentialPositionId.charCodeAt(1))}`);
            potentialPositionId= potentialPosition.getAttribute('id');
        }
    }
    
    if(position[1]>'1'){
        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0))}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
        potentialPositionId= potentialPosition.getAttribute('id');
        while((!potentialPosition.childElementCount&&(potentialPositionId[1]>='1'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
                break;
            }
            if(potentialPositionId[1]=='1'){
                break;
            }
            potentialPosition= sudoku.querySelector(`#${String.fromCharCode(potentialPositionId.charCodeAt(0))}${String.fromCharCode(potentialPositionId.charCodeAt(1) - 1)}`);
            potentialPositionId= potentialPosition.getAttribute('id');
        }
    }

    if(position[0]>'a'){
        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1))}`);
        potentialPositionId= potentialPosition.getAttribute('id');
        while((!potentialPosition.childElementCount&&(potentialPositionId[0]>='a'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
                break;
            }
            if(potentialPositionId[0]=='a'){
                break;
            } 
            potentialPosition= sudoku.querySelector(`#${String.fromCharCode(potentialPositionId.charCodeAt(0) - 1)}${String.fromCharCode(potentialPositionId.charCodeAt(1))}`);
            potentialPositionId= potentialPosition.getAttribute('id');
        }
    }
}










//for QUEEN
function legalQueenMoves(position, colorOfOpposition, potentialPositions){
    legalBishopMoves(position, colorOfOpposition, potentialPositions);
    legalRookMoves(position, colorOfOpposition, potentialPositions);
}










//for KING
function legalKingMoves(position, colorOfOpposition, potentialPositions){
    if(position[0]<'h'&&position[1]<'8'){
        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
        potentialPositionId= potentialPosition.getAttribute('id');
        if((!potentialPosition.childElementCount&&(potentialPositionId[0]<='h'&&potentialPositionId[1]<='8'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
        }
    }
    
    if(position[0]<'h'&&position[1]>'1'){
        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
        potentialPositionId= potentialPosition.getAttribute('id');
        if((!potentialPosition.childElementCount&&(potentialPositionId[0]<='h'&&potentialPositionId[1]>='1'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
        }
    }
    
    if(position[0]>'a'&&position[1]>'1'){
        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
        potentialPositionId= potentialPosition.getAttribute('id');
        if((!potentialPosition.childElementCount&&(potentialPositionId[0]>='a'&&potentialPositionId[1]>='1'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
        }
    }

    if(position[0]>'a'&&position[1]<'8'){
        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
        potentialPositionId= potentialPosition.getAttribute('id');
        if((!potentialPosition.childElementCount&&(potentialPositionId[0]>='a'&&potentialPositionId[1]<='8'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
        }
    }


    if(position[1]<'8'){
        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0))}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
        potentialPositionId= potentialPosition.getAttribute('id');
        if((!potentialPosition.childElementCount&&(potentialPositionId[1]<='8'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
        }
    }
    
    if(position[0]<'h'){
        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1))}`);
        potentialPositionId= potentialPosition.getAttribute('id');
        if((!potentialPosition.childElementCount&&(potentialPositionId[0]<='h'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
        }
    }
    
    if(position[1]>'1'){
        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0))}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
        potentialPositionId= potentialPosition.getAttribute('id');
        if((!potentialPosition.childElementCount&&(potentialPositionId[1]>='1'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
        }
    }

    if(position[0]>'a'){
        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1))}`);
        potentialPositionId= potentialPosition.getAttribute('id');
        if((!potentialPosition.childElementCount&&(potentialPositionId[0]>='a'))
        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`))){
            potentialPositions.push(potentialPosition);
        }
    }
}