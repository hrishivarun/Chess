//logic for potential moves, for any selected white piece, at a given moment
sudoku.addEventListener('click', (e) => {



    //if it's white turn to move
    if(!whiteMove){
        if(e.target.matches('.black')){
            selectedPiece= e.target;
            selectedSquare= e.target.parentElement;
            selectedSquare.classList.toggle('selected');





            //if selected piece is pawn
            if(selectedPiece.matches('.pawn')){
                const position= selectedSquare.getAttribute('id');
                
                
                
                //calculating potential future positions
                if(selectedSquare.matches('.selected')){
                    const potentialPosition= sudoku.querySelector(`#${position[0]}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
                    if(!potentialPosition.childElementCount){
                        potentialPosition.classList.add('potential-position');
                        potentialPositions.push(potentialPosition);
                        if(position[1]=='7'){
                            potentialPositionSpecialCase= sudoku.querySelector(`#${position[0]}${String.fromCharCode(position.charCodeAt(1) - 2)}`);
                            if(!potentialPositionSpecialCase.childElementCount){
                                potentialPositionSpecialCase.classList.add('potential-position');
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
                            if(pawnUpPosition[i].querySelector('img').matches('.white')){
                                pawnUpPosition[i].classList.add('potential-position');
                            }
                        }
                    }
                }



                //unselecting, in case player changes their mind
                else{
                    potentialPositions.forEach( potentialPosition => {
                        potentialPosition.classList.remove('potential-position');
                    });
                    potentialPositions.length= 0;
                    const pawnUpPosition= [];
                    if(position[0]>'a'){
                        pawnUpPosition.push(sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) - 1)}`));
                    }
                    if(position[0]<'h'){
                        pawnUpPosition.push(sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) - 1)}`));
                    }
                    for(let i=0; i<pawnUpPosition.length; i++){
                        if(pawnUpPosition[i].childElementCount){
                            if(pawnUpPosition[i].querySelector('img').matches('.white')){
                                pawnUpPosition[i].classList.remove('potential-position');
                            }
                        }
                    }
                    selectedPiece= null;
                }
            }





            //if selected piece is knight
            else if(selectedPiece.matches('.knight')){
                const position= selectedSquare.getAttribute('id');
                
                
                
                //calculating potential future positions
                if(selectedSquare.matches('.selected')){
                    if((position.charCodeAt(0) + 2)<=104&&(position.charCodeAt(1) + 1)<=56){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 2)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
                        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches('.white')){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                        }
                    }
                    if((position.charCodeAt(0) + 2)<=104&&(position.charCodeAt(1) - 1)>=49){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 2)}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
                        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches('.white')){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                        }
                    }
                    if((position.charCodeAt(0) - 2)>=97&&(position.charCodeAt(1) + 1)<=56){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 2)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
                        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches('.white')){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                        }
                    }
                    if((position.charCodeAt(0) - 2)>=97&&(position.charCodeAt(1) - 1)>=49){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 2)}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
                        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches('.white')){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                        }
                    }

                    if((position.charCodeAt(0) + 1)<=104&&(position.charCodeAt(1) + 2)<=56){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) + 2)}`);
                        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches('.white')){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                        }
                    }
                    if((position.charCodeAt(0) + 1)<=104&&(position.charCodeAt(1) - 2)>=49){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) - 2)}`);
                        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches('.white')){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                        }
                    }
                    if((position.charCodeAt(0) - 1)>=97&&(position.charCodeAt(1) + 2)<=56){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) + 2)}`);
                        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches('.white')){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                        }
                    }
                    if((position.charCodeAt(0) - 1)>=97&&(position.charCodeAt(1) - 2)>=49){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) - 2)}`);
                        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches('.white')){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                        }
                    }
                }
                
                
                
                //unselecting, in case player changes their mind
                else{
                    potentialPositions.forEach( potentialPosition => {
                        potentialPosition.classList.remove('potential-position');
                    });
                    potentialPositions.length= 0;

                    selectedPiece= null;
                }
            }





            //if selected piece is bishop
            else if(selectedPiece.matches('.bishop')){
                const position= selectedSquare.getAttribute('id');
                
                
                
                //calculating potential future positions
                if(selectedSquare.matches('.selected')){
                    if(position[0]<'h'&&position[1]<'8'){
                        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
                        potentialPositionId= potentialPosition.getAttribute('id');
                        while((!potentialPosition.childElementCount&&(potentialPositionId[0]<='h'&&potentialPositionId[1]<='8'))
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white'))){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white'))){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white'))){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white'))){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white')){
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



                //unselecting, in case player changes their mind
                else{
                    potentialPositions.forEach( potentialPosition => {
                        potentialPosition.classList.remove('potential-position');
                    });
                    potentialPositions.length= 0;

                    selectedPiece= null;
                }
            }





            //if selected piece is rook
            else if(selectedPiece.matches('.rook')){
                const position= selectedSquare.getAttribute('id');
                
                
                
                //calculating potential future positions
                if(selectedSquare.matches('.selected')){
                    if(position[1]<'8'){
                        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0))}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
                        potentialPositionId= potentialPosition.getAttribute('id');
                        while((!potentialPosition.childElementCount&&(potentialPositionId[1]<='8'))
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white'))){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white'))){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white'))){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white'))){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white')){
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
                
                
                
                //unselecting, in case player changes their mind
                else{
                    potentialPositions.forEach( potentialPosition => {
                        potentialPosition.classList.remove('potential-position');
                    });
                    potentialPositions.length= 0;

                    selectedPiece= null;
                }
            }





            //if selected piece is queen
            else if(selectedPiece.matches('.queen')){
                const position= selectedSquare.getAttribute('id');
                
                
                
                //calculating potential future positions
                if(selectedSquare.matches('.selected')){
                    if(position[0]<'h'&&position[1]<'8'){
                        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
                        potentialPositionId= potentialPosition.getAttribute('id');
                        while((!potentialPosition.childElementCount&&(potentialPositionId[0]<='h'&&potentialPositionId[1]<='8'))
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white'))){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white'))){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white'))){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white'))){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white')){
                                break;
                            }
                            if(potentialPositionId[0]=='a'||potentialPositionId[1]=='8'){
                                break;
                            } 
                            potentialPosition= sudoku.querySelector(`#${String.fromCharCode(potentialPositionId.charCodeAt(0) - 1)}${String.fromCharCode(potentialPositionId.charCodeAt(1) + 1)}`);
                            potentialPositionId= potentialPosition.getAttribute('id');
                        }
                    }


                    if(position[1]<'8'){
                        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0))}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
                        potentialPositionId= potentialPosition.getAttribute('id');
                        while((!potentialPosition.childElementCount&&(potentialPositionId[1]<='8'))
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white'))){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white'))){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white'))){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white'))){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white')){
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



                //unselecting, in case player changes their mind
                else{
                    potentialPositions.forEach( potentialPosition => {
                        potentialPosition.classList.remove('potential-position');
                    });
                    potentialPositions.length= 0;

                    selectedPiece= null;
                }
            }





            //if selected piece is king
            else if(selectedPiece.matches('.king')){
                const position= selectedSquare.getAttribute('id');
                
                
                
                //calculating potential future positions
                if(selectedSquare.matches('.selected')){
                    if(position[0]<'h'&&position[1]<'8'){
                        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
                        potentialPositionId= potentialPosition.getAttribute('id');
                        if((!potentialPosition.childElementCount&&(potentialPositionId[0]<='h'&&potentialPositionId[1]<='8'))
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white'))){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                        }
                    }
                    
                    if(position[0]<'h'&&position[1]>'1'){
                        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
                        potentialPositionId= potentialPosition.getAttribute('id');
                        if((!potentialPosition.childElementCount&&(potentialPositionId[0]<='h'&&potentialPositionId[1]>='1'))
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white'))){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                        }
                    }
                    
                    if(position[0]>'a'&&position[1]>'1'){
                        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
                        potentialPositionId= potentialPosition.getAttribute('id');
                        if((!potentialPosition.childElementCount&&(potentialPositionId[0]>='a'&&potentialPositionId[1]>='1'))
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white'))){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                        }
                    }

                    if(position[0]>'a'&&position[1]<'8'){
                        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
                        potentialPositionId= potentialPosition.getAttribute('id');
                        if((!potentialPosition.childElementCount&&(potentialPositionId[0]>='a'&&potentialPositionId[1]<='8'))
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white'))){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                        }
                    }


                    if(position[1]<'8'){
                        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0))}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
                        potentialPositionId= potentialPosition.getAttribute('id');
                        if((!potentialPosition.childElementCount&&(potentialPositionId[1]<='8'))
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white'))){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                        }
                    }
                    
                    if(position[0]<'h'){
                        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1))}`);
                        potentialPositionId= potentialPosition.getAttribute('id');
                        if((!potentialPosition.childElementCount&&(potentialPositionId[0]<='h'))
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white'))){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                        }
                    }
                    
                    if(position[1]>'1'){
                        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0))}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
                        potentialPositionId= potentialPosition.getAttribute('id');
                        if((!potentialPosition.childElementCount&&(potentialPositionId[1]>='1'))
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white'))){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                        }
                    }

                    if(position[0]>'a'){
                        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1))}`);
                        potentialPositionId= potentialPosition.getAttribute('id');
                        if((!potentialPosition.childElementCount&&(potentialPositionId[0]>='a'))
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.white'))){
                            potentialPosition.classList.add('potential-position');
                            potentialPositions.push(potentialPosition);
                        }
                    }
                }



                //unselecting, in case player changes their mind
                else{
                    potentialPositions.forEach( potentialPosition => {
                        potentialPosition.classList.remove('potential-position');
                    });
                    potentialPositions.length= 0;

                    selectedPiece= null;
                }
            }
        }
    }
});