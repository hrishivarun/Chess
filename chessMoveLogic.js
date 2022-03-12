let whiteMove= true;
let selectedPiece= null;
const sudoku= document.querySelector('#sudoku');
sudoku.addEventListener('click', (e) => {



    //if it's white turn to move
    if(whiteMove){
        if(e.target.matches('.white')){
            selectedPiece= e.target;
            selectedSquare= e.target.parentElement;
            selectedSquare.classList.toggle('selected');





            //if selected piece is pawn
            if(selectedPiece.matches('.pawn')){
                const position= selectedSquare.getAttribute('id');
                
                
                
                //calculating potential future positions
                if(selectedSquare.matches('.selected')){
                    const potentialPosition= sudoku.querySelector(`#${position[0]}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
                    if(!potentialPosition.childElementCount){
                        potentialPosition.classList.add('potential-position');
                        if(position[1]=='2'){
                            if(!sudoku.querySelector(`#${position[0]}${String.fromCharCode(position.charCodeAt(1) + 2)}`).childElementCount){
                                sudoku.querySelector(`#${position[0]}${String.fromCharCode(position.charCodeAt(1) + 2)}`).classList.add('potential-position');
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
                            if(pawnUpPosition[i].querySelector('img').matches('.black')){
                                pawnUpPosition[i].classList.add('potential-position');
                            }
                        }
                    }
                }



                //unselecting, in case player changes their mind
                else{
                    sudoku.querySelector(`#${position[0]}${String.fromCharCode(position.charCodeAt(1) + 1)}`).classList.remove('potential-position');
                    if(position[1]=='2'){
                        sudoku.querySelector(`#${position[0]}${String.fromCharCode(position.charCodeAt(1) + 2)}`).classList.remove('potential-position');
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
                            if(pawnUpPosition[i].querySelector('img').matches('.black')){
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
                        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches('.black')){
                            potentialPosition.classList.add('potential-position');
                        }
                    }
                    if((position.charCodeAt(0) + 2)<=104&&(position.charCodeAt(1) - 1)>=49){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 2)}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
                        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches('.black')){
                            potentialPosition.classList.add('potential-position');
                        }
                    }
                    if((position.charCodeAt(0) - 2)>=97&&(position.charCodeAt(1) + 1)<=56){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 2)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
                        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches('.black')){
                            potentialPosition.classList.add('potential-position');
                        }
                    }
                    if((position.charCodeAt(0) - 2)>=97&&(position.charCodeAt(1) - 1)>=49){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 2)}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
                        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches('.black')){
                            potentialPosition.classList.add('potential-position');
                        }
                    }

                    if((position.charCodeAt(0) + 1)<=104&&(position.charCodeAt(1) + 2)<=56){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) + 2)}`);
                        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches('.black')){
                            potentialPosition.classList.add('potential-position');
                        }
                    }
                    if((position.charCodeAt(0) + 1)<=104&&(position.charCodeAt(1) - 2)>=49){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) - 2)}`);
                        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches('.black')){
                            potentialPosition.classList.add('potential-position');
                        }
                    }
                    if((position.charCodeAt(0) - 1)>=97&&(position.charCodeAt(1) + 2)<=56){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) + 2)}`);
                        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches('.black')){
                            potentialPosition.classList.add('potential-position');
                        }
                    }
                    if((position.charCodeAt(0) - 1)>=97&&(position.charCodeAt(1) - 2)>=49){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) - 2)}`);
                        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches('.black')){
                            potentialPosition.classList.add('potential-position');
                        }
                    }
                }
                
                
                
                //unselecting, in case player changes their mind
                else{
                    if((position.charCodeAt(0) + 2)<=104&&(position.charCodeAt(1) + 1)<=56){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 2)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
                        potentialPosition.classList.remove('potential-position');
                    }
                    if((position.charCodeAt(0) + 2)<=104&&(position.charCodeAt(1) - 1)>=49){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 2)}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
                        potentialPosition.classList.remove('potential-position');
                    }
                    if((position.charCodeAt(0) - 2)>=97&&(position.charCodeAt(1) + 1)<=56){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 2)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
                        potentialPosition.classList.remove('potential-position');
                    }
                    if((position.charCodeAt(0) - 2)>=97&&(position.charCodeAt(1) - 1)>=49){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 2)}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
                        potentialPosition.classList.remove('potential-position');
                    }

                    if((position.charCodeAt(0) + 1)<=104&&(position.charCodeAt(1) + 2)<=56){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) + 2)}`);
                        potentialPosition.classList.remove('potential-position');
                    }
                    if((position.charCodeAt(0) + 1)<=104&&(position.charCodeAt(1) - 2)>=49){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) - 2)}`);
                        potentialPosition.classList.remove('potential-position');
                    }
                    if((position.charCodeAt(0) - 1)>=97&&(position.charCodeAt(1) + 2)<=56){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) + 2)}`);
                        potentialPosition.classList.remove('potential-position');
                    }
                    if((position.charCodeAt(0) - 1)>=97&&(position.charCodeAt(1) - 2)>=49){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) - 2)}`);
                        potentialPosition.classList.remove('potential-position');
                    }
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.add('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.add('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.add('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.add('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                    if(position[0]<'h'&&position[1]<'8'){
                        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
                        potentialPositionId= potentialPosition.getAttribute('id');
                        while((!potentialPosition.childElementCount&&(potentialPositionId[0]<='h'&&potentialPositionId[1]<='8'))
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.remove('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.remove('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.remove('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.remove('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
                                break;
                            }
                            if(potentialPositionId[0]=='a'||potentialPositionId[1]=='8'){
                                break;
                            } 
                            potentialPosition= sudoku.querySelector(`#${String.fromCharCode(potentialPositionId.charCodeAt(0) - 1)}${String.fromCharCode(potentialPositionId.charCodeAt(1) + 1)}`);
                            potentialPositionId= potentialPosition.getAttribute('id');
                        }
                    }

                    selectedPiece= null;
                }
            }





            //if selected piece is rook
            else if(selectedPiece.matches('.rook')){
                const position= selectedSquare.getAttribute('id');
                console.log(position);
                
                
                
                //calculating potential future positions
                if(selectedSquare.matches('.selected')){
                    if(position[1]<'8'){
                        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0))}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
                        potentialPositionId= potentialPosition.getAttribute('id');
                        while((!potentialPosition.childElementCount&&(potentialPositionId[1]<='8'))
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.add('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.add('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.add('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.add('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                    if(position[1]<'8'){
                        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0))}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
                        potentialPositionId= potentialPosition.getAttribute('id');
                        while((!potentialPosition.childElementCount&&(potentialPositionId[1]<='8'))
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.remove('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.remove('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.remove('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.remove('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
                                break;
                            }
                            if(potentialPositionId[0]=='a'){
                                break;
                            } 
                            potentialPosition= sudoku.querySelector(`#${String.fromCharCode(potentialPositionId.charCodeAt(0) - 1)}${String.fromCharCode(potentialPositionId.charCodeAt(1))}`);
                            potentialPositionId= potentialPosition.getAttribute('id');
                        }
                    }

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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.add('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.add('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.add('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.add('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.add('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.add('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.add('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.add('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                    if(position[0]<'h'&&position[1]<'8'){
                        potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
                        potentialPositionId= potentialPosition.getAttribute('id');
                        while((!potentialPosition.childElementCount&&(potentialPositionId[0]<='h'&&potentialPositionId[1]<='8'))
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.remove('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.remove('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.remove('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.remove('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.remove('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.remove('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.remove('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
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
                        ||(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black'))){
                            potentialPosition.classList.remove('potential-position');
                            if(potentialPosition.childElementCount&&potentialPosition.querySelector('img').matches('.black')){
                                break;
                            }
                            if(potentialPositionId[0]=='a'){
                                break;
                            } 
                            potentialPosition= sudoku.querySelector(`#${String.fromCharCode(potentialPositionId.charCodeAt(0) - 1)}${String.fromCharCode(potentialPositionId.charCodeAt(1))}`);
                            potentialPositionId= potentialPosition.getAttribute('id');
                        }
                    }

                    selectedPiece= null;
                }
            }





            //if selected piece is king
            else if(selectedPiece.matches('.king')){
                const position= selectedSquare.getAttribute('id');
                
                
                
                //calculating potential future positions
                if(selectedSquare.matches('.selected')){
                    if((position.charCodeAt(0) + 2)<=104&&(position.charCodeAt(1) + 1)<=56){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 2)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
                        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches('.black')){
                            potentialPosition.classList.add('potential-position');
                        }
                    }
                    if((position.charCodeAt(0) + 2)<=104&&(position.charCodeAt(1) - 1)>=49){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 2)}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
                        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches('.black')){
                            potentialPosition.classList.add('potential-position');
                        }
                    }
                    if((position.charCodeAt(0) - 2)>=97&&(position.charCodeAt(1) + 1)<=56){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 2)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
                        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches('.black')){
                            potentialPosition.classList.add('potential-position');
                        }
                    }
                    if((position.charCodeAt(0) - 2)>=97&&(position.charCodeAt(1) - 1)>=49){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 2)}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
                        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches('.black')){
                            potentialPosition.classList.add('potential-position');
                        }
                    }

                    if((position.charCodeAt(0) + 1)<=104&&(position.charCodeAt(1) + 2)<=56){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) + 2)}`);
                        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches('.black')){
                            potentialPosition.classList.add('potential-position');
                        }
                    }
                    if((position.charCodeAt(0) + 1)<=104&&(position.charCodeAt(1) - 2)>=49){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) - 2)}`);
                        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches('.black')){
                            potentialPosition.classList.add('potential-position');
                        }
                    }
                    if((position.charCodeAt(0) - 1)>=97&&(position.charCodeAt(1) + 2)<=56){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) + 2)}`);
                        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches('.black')){
                            potentialPosition.classList.add('potential-position');
                        }
                    }
                    if((position.charCodeAt(0) - 1)>=97&&(position.charCodeAt(1) - 2)>=49){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) - 2)}`);
                        if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches('.black')){
                            potentialPosition.classList.add('potential-position');
                        }
                    }
                }
                
                
                
                //unselecting, in case player changes their mind
                else{
                    if((position.charCodeAt(0) + 2)<=104&&(position.charCodeAt(1) + 1)<=56){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 2)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
                        potentialPosition.classList.remove('potential-position');
                    }
                    if((position.charCodeAt(0) + 2)<=104&&(position.charCodeAt(1) - 1)>=49){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 2)}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
                        potentialPosition.classList.remove('potential-position');
                    }
                    if((position.charCodeAt(0) - 2)>=97&&(position.charCodeAt(1) + 1)<=56){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 2)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
                        potentialPosition.classList.remove('potential-position');
                    }
                    if((position.charCodeAt(0) - 2)>=97&&(position.charCodeAt(1) - 1)>=49){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 2)}${String.fromCharCode(position.charCodeAt(1) - 1)}`);
                        potentialPosition.classList.remove('potential-position');
                    }

                    if((position.charCodeAt(0) + 1)<=104&&(position.charCodeAt(1) + 2)<=56){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) + 2)}`);
                        potentialPosition.classList.remove('potential-position');
                    }
                    if((position.charCodeAt(0) + 1)<=104&&(position.charCodeAt(1) - 2)>=49){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) - 2)}`);
                        potentialPosition.classList.remove('potential-position');
                    }
                    if((position.charCodeAt(0) - 1)>=97&&(position.charCodeAt(1) + 2)<=56){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) + 2)}`);
                        potentialPosition.classList.remove('potential-position');
                    }
                    if((position.charCodeAt(0) - 1)>=97&&(position.charCodeAt(1) - 2)>=49){
                        const potentialPosition= sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) - 1)}${String.fromCharCode(position.charCodeAt(1) - 2)}`);
                        potentialPosition.classList.remove('potential-position');
                    }
                    selectedPiece= null;
                }
            }
        }
    }
});