import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";


//create a chess board
function chessboard(){
    const sudoku=document.getElementById('sudoku');
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            const innerContent=document.createElement('div');
            innerContent.setAttribute('id', `${String.fromCharCode(97+j)}${8-i}`);
            if((i+j)%2==0){
                innerContent.classList.add('odd');
            }
            else{
                innerContent.classList.add('even');
            }
            sudoku.appendChild(innerContent);
        }
    }      
};










//add all the chess pieces on the board
function chessPieces(){
    const sudoku=document.getElementById('sudoku');
    for(let i=1; i<=64; i++){
        if(i==1|| i==8){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', '../src/images/Chess_rdt60.png');
            img.setAttribute('alt', 'Black Rook');
            if(i==1){
                img.setAttribute('data-piece', `rookOne`);
            }else{
                img.setAttribute('data-piece', `rookTwo`);
            }
            img.classList.add('black');
            img.classList.add('rook');
            div.appendChild(img);
        }else if(i==2||i==7){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', '../src/images/Chess_ndt60.png');
            img.setAttribute('alt', 'Black Knight');
            if(i==2){
                img.setAttribute('data-piece', `knightOne`);
            }else{
                img.setAttribute('data-piece', `knightTwo`);
            }
            img.classList.add('black');
            img.classList.add('knight');
            div.appendChild(img);
        }else if(i==3||i==6){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', '../src/images/Chess_bdt60.png');
            img.setAttribute('alt', 'Black Bishop');
            if(i==3){
                img.setAttribute('data-piece', `bishopOne`);
            }else{
                img.setAttribute('data-piece', `bishopTwo`);
            }
            img.classList.add('black');
            img.classList.add('bishop');
            div.appendChild(img);
        }else if(i==57||i==64){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', '../src/images/Chess_rlt60.png');
            img.setAttribute('alt', 'White Rook');
            if(i==57){
                img.setAttribute('data-piece', `rookOne`);
            }else{
                img.setAttribute('data-piece', `rookTwo`);
            }
            img.classList.add('white');
            img.classList.add('rook');
            div.appendChild(img);
        }else if(i==58||i==63){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', '../src/images/Chess_nlt60.png');
            img.setAttribute('alt', 'White Knight');
            if(i==58){
                img.setAttribute('data-piece', `knightOne`);
            }else{
                img.setAttribute('data-piece', `knightTwo`);
            }
            img.classList.add('white');
            img.classList.add('knight');
            div.appendChild(img);
        }else if(i==59||i==62){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', '../src/images/Chess_blt60.png');
            img.setAttribute('alt', 'White Bishop');
            if(i==59){
                img.setAttribute('data-piece', `bishopOne`);
            }else{
                img.setAttribute('data-piece', `bishopTwo`);
            }
            img.classList.add('white');
            img.classList.add('bishop');
            div.appendChild(img);
        }else if(i==9||i==10||i==11||i==12||i==13||i==14||i==15||i==16){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', '../src/images/Chess_pdt60.png');
            img.setAttribute('alt', 'Black Pawn');
            if(i==9){
                img.setAttribute('data-piece', `pawnOne`);
            }else if(i==10){
                img.setAttribute('data-piece', `pawnTwo`);
            }else if(i==11){
                img.setAttribute('data-piece', `pawnThree`);
            }else if(i==12){
                img.setAttribute('data-piece', `pawnFour`);
            }else if(i==13){
                img.setAttribute('data-piece', `pawnFive`);
            }else if(i==14){
                img.setAttribute('data-piece', `pawnSix`);
            }else if(i==15){
                img.setAttribute('data-piece', `pawnSeven`);
            }else if(i==16){
                img.setAttribute('data-piece', `pawnEight`);
            }
            img.classList.add('black');
            img.classList.add('pawn');
            div.appendChild(img);
        }else if(i==49||i==50||i==51||i==52||i==53||i==54||i==55||i==56){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', '../src/images/Chess_plt60.png');
            img.setAttribute('alt', 'White Pawn');
            if(i==49){
                img.setAttribute('data-piece', `pawnOne`);
            }else if(i==50){
                img.setAttribute('data-piece', `pawnTwo`);
            }else if(i==51){
                img.setAttribute('data-piece', `pawnThree`);
            }else if(i==52){
                img.setAttribute('data-piece', `pawnFour`);
            }else if(i==53){
                img.setAttribute('data-piece', `pawnFive`);
            }else if(i==54){
                img.setAttribute('data-piece', `pawnSix`);
            }else if(i==55){
                img.setAttribute('data-piece', `pawnSeven`);
            }else if(i==56){
                img.setAttribute('data-piece', `pawnEight`);
            }
            img.classList.add('white');
            img.classList.add('pawn');
            div.appendChild(img);       
        }else if(i==4){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', '../src/images/Chess_qdt60.png');
            img.setAttribute('alt', 'Black Queen');
            img.setAttribute('data-piece', `queenOne`);
            img.classList.add('black');
            img.classList.add('queen');
            div.appendChild(img);
        }else if(i==5){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', '../src/images/Chess_kdt60.png');
            img.setAttribute('alt', 'Black King');
            img.setAttribute('data-piece', `kingBlack`);
            img.classList.add('black');
            img.classList.add('king');
            div.appendChild(img);
        }else if(i==61){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', '../src/images/Chess_klt60.png');
            img.setAttribute('alt', 'White King');
            img.setAttribute('data-piece', `kingWhite`);
            img.classList.add('white');
            img.classList.add('king');
            div.appendChild(img);
        }else if(i==60){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', '../src/images/Chess_qlt60.png');
            img.setAttribute('alt', 'White Queen');
            img.setAttribute('data-piece', `queenOne`);
            img.classList.add('white');
            img.classList.add('queen');
            div.appendChild(img);
        }
    }
    //testing logic of legal moves for pieces

    // const temp= document.createElement('img');
    // temp.setAttribute('src', 'Chess_pdt60.png');
    // temp.setAttribute('data-piece', `pawnOne`);
    // temp.classList.add('black');
    // temp.classList.add('pawn');
    // sudoku.querySelector('#a2').appendChild(temp);
};




















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
                const selectedSquare= e.target.parentElement;
                selectedSquare.classList.toggle('selected');

                //get piece name
                const piece= selectedPiece.getAttribute('data-piece');
                //highlighting potential future positions when a piece is selected
                if(selectedSquare.matches('.selected')){
                    piecesWhite[piece].potentialPositions.forEach(position =>{
                        position.classList.add('potential-position');
                    });
                }


                //removing highlights from future potential positions after unselecting, in case player changes their mind
                else{
                    piecesWhite[piece].potentialPositions.forEach(position =>{
                        position.classList.remove('potential-position');
                    });
                    selectedPiece= null;
                }
            }
        }

        
        //if it's black's turn to move
        else{
            if(e.target.matches('.black')){
                //highlight selected piece
                selectedPiece= e.target;
                const selectedSquare= e.target.parentElement;
                selectedSquare.classList.toggle('selected');
    
    
                //get piece name
                const piece= selectedPiece.getAttribute('data-piece');
    
                //highlighting potential future positions when a piece is selected
                if(selectedSquare.matches('.selected')){
                    piecesBlack[piece].potentialPositions.forEach(position =>{
                        position.classList.add('potential-position');
                    });
                }
    
    
                //removing highlights from future potential positions after unselecting, in case player changes their mind
                else{
                    piecesBlack[piece].potentialPositions.forEach(position =>{
                        position.classList.remove('potential-position');
                    });
                    selectedPiece= null;
                }
            }
        }
    }
}




















//functions for legalMoveLogic.js
function addKnightMoves(position, colorOfOpposition, potentialPositions, potentialPosition){
    if(!potentialPosition.childElementCount||potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
        if(potentialPosition.childElementCount && potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
            if(potentialPosition.querySelector('img').matches('.king')){
                pushChecker(position, colorOfOpposition);
            }
        }
        potentialPositions.push(potentialPosition);
    }
}





function castling(colorOfOpposition, potentialPositions){
    //for black king
    if(colorOfOpposition == 'white'){
        if(castle['black']['kingNotMoved'] == true && !blackChecked){
            //for king side castle
            if(castle['black']['kingSideRook'] == true){
                castle['black'].f8= document.getElementById(`f8`).hasChildNodes();
                castle['black'].g8= document.getElementById(`g8`).hasChildNodes();

                let castlingBlocked = false;
                blockedPositionsForBlackKing.forEach(position => {
                    if(position == ('f8' || 'g8')){
                        castlingBlocked = true;
                    }
                });

                if(!castle['black'].f8 && !castle['black'].g8 && !castlingBlocked){
                    const potentialPosition= sudoku.querySelector('#g8');
                    potentialPositions.push(potentialPosition);
                }
            }

            //for queen side castle
            if(castle['black']['queenSideRook'] == true){
                castle['black'].b8= document.getElementById(`b8`).hasChildNodes();
                castle['black'].c8= document.getElementById(`c8`).hasChildNodes();
                castle['black'].d8= document.getElementById(`d8`).hasChildNodes();

                let castlingBlocked = false;
                blockedPositionsForBlackKing.forEach(position => {
                    if(position == ('b8' || 'c8' || 'd8')){
                        castlingBlocked = true;
                    }
                });

                if(!castle['black'].b8 && !castle['black'].c8 && !castle['black'].d8 && !castlingBlocked){
                    const potentialPosition= sudoku.querySelector('#c8');
                    potentialPositions.push(potentialPosition);
                }
            }
        }
    }

    //for white king
    else if(colorOfOpposition == 'black'){
        if(castle['white']['kingNotMoved'] == true && !whiteChecked){
            //for king side castle
            if(castle['white']['kingSideRook'] == true){
                castle['white'].f1= document.getElementById(`f1`).hasChildNodes();
                castle['white'].g1= document.getElementById(`g1`).hasChildNodes();

                let castlingBlocked = false;
                blockedPositionsForWhiteKing.forEach(position => {
                    if(position == ('f1' || 'g1')){
                        castlingBlocked = true;
                    }
                });
                
                if(!castle['white'].f1 && !castle['white'].g1 && !castlingBlocked){
                    const potentialPosition= sudoku.querySelector('#g1');
                    potentialPositions.push(potentialPosition);
                }
            }

            //for queen side castle
            if(castle['white']['queenSideRook'] == true){
                castle['white'].b1= document.getElementById(`b1`).hasChildNodes();
                castle['white'].c1= document.getElementById(`c1`).hasChildNodes();
                castle['white'].d1= document.getElementById(`d1`).hasChildNodes();

                let castlingBlocked = false;
                blockedPositionsForWhiteKing.forEach(position => {
                    if(position == ('b1' || 'c1' || 'd1')){
                        castlingBlocked = true;
                    }
                });

                if(!castle['white'].b1 && !castle['white'].c1 && !castle['white'].d1 && !castlingBlocked){
                    const potentialPosition= sudoku.querySelector('#c1');
                    potentialPositions.push(potentialPosition);
                }
            }
        }
    }
}





function backPieceOfSameColor(potentialPosition, colorOfOpposition){
    if(potentialPosition.childElementCount && !potentialPosition.querySelector('img').matches(`.${colorOfOpposition}`)){
        let potentialPositionId= potentialPosition.getAttribute('id');
        if(colorOfOpposition == 'black'){
            blockedPositionsForBlackKing.push(potentialPositionId);
        }else if(colorOfOpposition == 'white'){
            blockedPositionsForWhiteKing.push(potentialPositionId);
        }
    }
}





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
                    if(positionId[0]> piecesWhite['kingWhite'].position[0] && positionId[1]> piecesWhite['kingWhite'].position[1]){
                        if(positionId[0]< whiteChecker[0].position[0] && positionId[1]< whiteChecker[0].position[1]){
                            return canBlockCheck(positionId, colorOfOpposition);
                        }else if(positionId[0]== whiteChecker[0].position[0] && positionId[1]== whiteChecker[0].position[1]){
                            return true;
                        }else{
                            return false;
                        }
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
                    if(positionId[0]> piecesWhite['kingWhite'].position[0] && positionId[1]< piecesWhite['kingWhite'].position[1]){
                        if(positionId[0]< whiteChecker[0].position[0] && positionId[1]> whiteChecker[0].position[1]){
                            return canBlockCheck(positionId, colorOfOpposition);
                        }else if(positionId[0]== whiteChecker[0].position[0] && positionId[1]== whiteChecker[0].position[1]){
                            return true;
                        }else{
                            return false;
                        }
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
                    console.log(positionId, colorOfOpposition);
                    if(positionId[0]< piecesWhite['kingWhite'].position[0] && positionId[1]< piecesWhite['kingWhite'].position[1]){
                        if(positionId[0]> whiteChecker[0].position[0] && positionId[1]> whiteChecker[0].position[1]){
                            return canBlockCheck(positionId, colorOfOpposition);
                        }else if(positionId[0]== whiteChecker[0].position[0] && positionId[1]== whiteChecker[0].position[1]){
                            return true;
                        }else{
                            return false;
                        }
                    }
                    else{
                        return false;
                    }
                });

                filterPositionsIfChecked(potentialPositions, tempPotentialPositions);
            }
            
            
            else if(whiteChecker[0].position[0]< piecesWhite['kingWhite'].position[0] && whiteChecker[0].position[1]> piecesWhite['kingWhite'].position[1]){
                const tempPotentialPositions= potentialPositions.filter( checkBlockingPosition => {
                    const positionId= checkBlockingPosition.getAttribute('id');
                    if(positionId[0]< piecesWhite['kingWhite'].position[0] && positionId[1]> piecesWhite['kingWhite'].position[1]){
                        if(positionId[0]> whiteChecker[0].position[0] && positionId[1]< whiteChecker[0].position[1]){
                            return canBlockCheck(positionId, colorOfOpposition);
                        }else if(positionId[0]== whiteChecker[0].position[0] && positionId[1]== whiteChecker[0].position[1]){
                            return true;
                        }else{
                            return false;
                        }
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
        }



        else{
            const tempPotentialPositions= potentialPositions.filter( checkBlockingPosition => {
                const positionId = checkBlockingPosition.getAttribute('id');
                if(positionId == whiteChecker[0].position){
                    return true;
                }else {
                    return false;
                }
            });

            filterPositionsIfChecked(potentialPositions, tempPotentialPositions);
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
                    if(positionId[0]> piecesBlack['kingBlack'].position[0] && positionId[1]> piecesBlack['kingBlack'].position[1]){
                        if(positionId[0]<= blackChecker[0].position[0] && positionId[1]<= blackChecker[0].position[1]){
                            return canBlockCheck(positionId, colorOfOpposition);
                        }else if(positionId[0]== blackChecker[0].position[0] && positionId[1]== blackChecker[0].position[1]){
                            return true;
                        }else{
                            return false;
                        }
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
                    if(positionId[0]> piecesBlack['kingBlack'].position[0] && positionId[1]< piecesBlack['kingBlack'].position[1]){
                        if(positionId[0]< blackChecker[0].position[0] && positionId[1]> blackChecker[0].position[1]){
                            return canBlockCheck(positionId, colorOfOpposition);
                        }else if(positionId[0]== blackChecker[0].position[0] && positionId[1]== blackChecker[0].position[1]){
                            return true;
                        }else{
                            return false;
                        }
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
                    if(positionId[0]< piecesBlack['kingBlack'].position[0] && positionId[1]< piecesBlack['kingBlack'].position[1]){
                        if(positionId[0]> blackChecker[0].position[0] && positionId[1]> blackChecker[0].position[1]){
                            return canBlockCheck(positionId, colorOfOpposition);
                        }else if(positionId[0]== blackChecker[0].position[0] && positionId[1]== blackChecker[0].position[1]){
                            return true;
                        }else{
                            return false;
                        }
                    }
                    else{
                        return false;
                    }
                });

                filterPositionsIfChecked(potentialPositions, tempPotentialPositions);
            }
            
            
            else if(blackChecker[0].position[0]< piecesBlack['kingBlack'].position[0] && blackChecker[0].position[1]> piecesBlack['kingBlack'].position[1]){
                const tempPotentialPositions= potentialPositions.filter( checkBlockingPosition => {
                    const positionId= checkBlockingPosition.getAttribute('id');
                    if(positionId[0]< piecesBlack['kingBlack'].position[0] && positionId[1]> piecesBlack['kingBlack'].position[1]){
                        if(positionId[0]> blackChecker[0].position[0] && positionId[1]< blackChecker[0].position[1]){
                            return canBlockCheck(positionId, colorOfOpposition);
                        }else if(positionId[0]== blackChecker[0].position[0] && positionId[1]== blackChecker[0].position[1]){
                            return true;
                        }else{
                            return false;
                        }
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
        }



        else{
            const tempPotentialPositions= potentialPositions.filter( checkBlockingPosition => {
                const positionId = checkBlockingPosition.getAttribute('id');
                if(positionId == blackChecker[0].position){
                    return true;
                }else {
                    return false;
                }
            });

            filterPositionsIfChecked(potentialPositions, tempPotentialPositions);
        }
    }
}










//functions for movePieces.js
function addQueen(selectedPiece, nextSquare, piece){
    if(selectedPiece.matches('.pawn')){
        const pawnAtEndOfFile= /[a-h](1|8)/;
        const position= nextSquare.getAttribute('id');
        if(pawnAtEndOfFile.test(position)){

            

            const queen= document.createElement('img');
            if(whiteMove){
                delete piecesWhite[piece];

                queen.setAttribute('src', '../src/images/Chess_qlt60.png');
                if(extraWhiteQueenCount=== 0){
                    queen.setAttribute('data-piece', 'queenTwo');
                }else if(extraWhiteQueenCount=== 1){
                    queen.setAttribute('data-piece', 'queenThree');
                }else if(extraWhiteQueenCount=== 2){
                    queen.setAttribute('data-piece', 'queenFour');
                }else if(extraWhiteQueenCount=== 3){
                    queen.setAttribute('data-piece', 'queenFive');
                }else if(extraWhiteQueenCount=== 4){
                    queen.setAttribute('data-piece', 'queenSix');
                }else if(extraWhiteQueenCount=== 5){
                    queen.setAttribute('data-piece', 'queenSeven');
                }else if(extraWhiteQueenCount=== 6){
                    queen.setAttribute('data-piece', 'queenEight');
                }else if(extraWhiteQueenCount=== 7){
                    queen.setAttribute('data-piece', 'queenNine');
                }

                const extraQueen= {
                    pieceType: 'queen',
                    position: position,
                    potentialPositions: []
                };
                const extraQueenName= queen.getAttribute('data-piece');
                piecesWhite[extraQueenName]= extraQueen;

                extraWhiteQueenCount++;

                queen.classList.add('white');
            }
            
            
            
            else{
                delete piecesBlack[piece];

                queen.setAttribute('src', '../src/images/Chess_qdt60.png');
                if(extraBlackQueenCount=== 0){
                    queen.setAttribute('data-piece', 'queenTwo');
                }else if(extraBlackQueenCount=== 1){
                    queen.setAttribute('data-piece', 'queenThree');
                }else if(extraBlackQueenCount=== 2){
                    queen.setAttribute('data-piece', 'queenFour');
                }else if(extraBlackQueenCount=== 3){
                    queen.setAttribute('data-piece', 'queenFive');
                }else if(extraBlackQueenCount=== 4){
                    queen.setAttribute('data-piece', 'queenSix');
                }else if(extraBlackQueenCount=== 5){
                    queen.setAttribute('data-piece', 'queenSeven');
                }else if(extraBlackQueenCount=== 6){
                    queen.setAttribute('data-piece', 'queenEight');
                }else if(extraBlackQueenCount=== 7){
                    queen.setAttribute('data-piece', 'queenNine');
                }
                
                const extraQueen= {
                    pieceType: 'queen',
                    position: position,
                    potentialPositions: []
                };
                const extraQueenName= queen.getAttribute('data-piece');
                piecesBlack[extraQueenName]= extraQueen;

                extraBlackQueenCount++;

                queen.classList.add('black');
            }
            
            queen.classList.add('queen');

            nextSquare.replaceChild(queen, selectedPiece);
        }
    }
}





function checkForCheck(){
    if(!whiteMove){
        if(whiteChecked){
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





function cantCastle(piece){
    //if moved piece is rook, and castling can't be done no more
    if(whiteMove){
        if(piece == 'rookOne'){
            castle['white']['queenSideRook'] = false;
        }else if(piece == 'rookTwo'){
            castle['white']['kingSideRook'] = false;
        }
    }else{
        if(piece == 'rookOne'){
            castle['black']['queenSideRook'] = false;
        }else if(piece == 'rookTwo'){
            castle['black']['kingSideRook'] = false;
        }
    }

    //if moved piece is king, and castling can't be done no more
    if(piece == 'kingWhite'){
        castle['white']['kingNotMoved'] = false;
    }else if(piece == 'kingBlack'){
        castle['black']['kingNotMoved'] = false;
    }
}





function unpin(whiteMove, piece){
    let colorOfOpposition;
    if(whiteMove){
        colorOfOpposition = 'black';
    }else{
        colorOfOpposition = 'white';
    }
    if(pinnedPieces[colorOfOpposition].hasOwnProperty(piece)){
        delete pinnedPieces[colorOfOpposition][piece];
    }
}





function removePreviousHighlight(piece, position){
    if(whiteMove){
        //remove previous 'potential-positions'
        piecesWhite[piece].potentialPositions.forEach(position => {
            position.classList.remove('potential-position');
        });

        //update current position
        piecesWhite[piece].position= position;
    }else{
        //remove previous 'potential-positions'
        piecesBlack[piece].potentialPositions.forEach(position => {
            position.classList.remove('potential-position');
        });

        //update current position
        piecesBlack[piece].position= position;
    }
}





function changeTurn(){
    if(whiteMove){
        if(piecesBlack['kingBlack'].potentialPositions.length == 0 && overallPotentialPositions['black'].length == 0){
            const announcement = document.querySelector('.announcement');
            if(blackChecked){
                announcement.textContent= 'White won the game!!';
            }else{
                announcement.textContent= 'Its a draw.';
            }
            announcement.style.display = 'block';

            play = false;
            sudoku.removeEventListener('mouseover', highlightSquare);
            sudoku.removeEventListener('mouseout', unhighlightSquare);
            sudoku.removeEventListener('click', selectPiece);
        }else{
            whiteMove= false;
        }
    }else{
        if(piecesWhite['kingWhite'].potentialPositions.length == 0 && overallPotentialPositions['white'].length == 0){
            const announcement = document.querySelector('.announcement');
            if(whiteChecked){
                announcement.textContent= 'Black won the game!!';
            }else{
                announcement.textContent= 'Its a draw.';
            }
            announcement.style.display = 'block';

            play = false;
            sudoku.removeEventListener('mouseover', highlightSquare);
            sudoku.removeEventListener('mouseout', unhighlightSquare);
            sudoku.removeEventListener('click', selectPiece);
        }else{
            whiteMove= true;
        }
    }
}




















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
    

    const tempPotentialPositions= potentialPositions.filter(square => {
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
    //console.log(potentialPositions);
}




















function updateWhitePositions(){
    while(blockedPositionsForBlackKing.length){
        blockedPositionsForBlackKing.pop();
    }
    while(overallPotentialPositions['white'].length){
        overallPotentialPositions['white'].pop();
    }

    Object.entries(piecesWhite).forEach(piece => {
        piece[1].potentialPositions= [];
        if(piece[1].pieceType=== 'pawn'){
            legalPawnMoves(piece[1].position, 'black', piece[1].potentialPositions);
        }else if(piece[1].pieceType== 'knight'){
            legalKnightMoves(piece[1].position, 'black', piece[1].potentialPositions);
        }else if(piece[1].pieceType== 'bishop'){
            legalBishopMoves(piece[1].position, 'black', piece[1].potentialPositions);
        }else if(piece[1].pieceType== 'rook'){
            legalRookMoves(piece[1].position, 'black', piece[1].potentialPositions);
        }else if(piece[1].pieceType== 'queen'){
            legalQueenMoves(piece[1].position, 'black', piece[1].potentialPositions);
        }else if(piece[1].pieceType== 'king'){
            legalKingMoves(piece[1].position, 'black', piece[1].potentialPositions);
        }


        //pin pieces
        let pinned = false;
        let pinner;
        Object.entries(pinnedPieces['white']).forEach( potentialPinner => {
            if(potentialPinner[1] === piece[0]){
                pinner = potentialPinner[0];
                pinned = true;
            }
        });

        if(pinned){
            for(let i=0; i<piece[1].potentialPositions.length; i++){
                let popPosition = true;
                const pinnerPosition = sudoku.querySelector(`#${piecesBlack[pinner].position}`);

                if(piece[1].potentialPositions[i] == pinnerPosition){
                    popPosition = false;
                }else{
                    piecesBlack[pinner].potentialPositions.forEach( pinnerPotentialPosition => {
                        if(piece[1].potentialPositions[i] == pinnerPotentialPosition){
                            popPosition = false;
                        }
                    });
                }

                if(popPosition){
                    piece[1].potentialPositions.splice(i, 1);
                    i--
                }
            }
        }


        //store all potential positions for white pieces
        piece[1].potentialPositions.forEach(potentialPosition => {
            overallPotentialPositions['white'].push(potentialPosition.getAttribute('id'));
        });

        //block positions for king where it'll be checked
        if(piece[1].pieceType != 'pawn'){
            piece[1].potentialPositions.forEach(potentialPosition => {
                    blockedPositionsForBlackKing.push(potentialPosition.getAttribute('id'));
            });
        }
        else{
            if(piece[1].position[0]>'a'){
                blockedPositionsForBlackKing.push(`${String.fromCharCode(piece[1].position.charCodeAt(0) - 1)}${String.fromCharCode(piece[1].position.charCodeAt(1) + 1)}`);
            }
            if(piece[1].position[0]<'h'){
                blockedPositionsForBlackKing.push(`${String.fromCharCode(piece[1].position.charCodeAt(0) + 1)}${String.fromCharCode(piece[1].position.charCodeAt(1) + 1)}`);
            }
        }
    });
}





function updateBlackPositions(){
    while(blockedPositionsForWhiteKing.length){
        blockedPositionsForWhiteKing.pop();
    }
    while(overallPotentialPositions['black'].length){
        overallPotentialPositions['black'].pop();
    }

    Object.entries(piecesBlack).forEach(piece => {
        piece[1].potentialPositions= [];

        if(piece[1].pieceType=== 'pawn'){
            legalPawnMoves(piece[1].position, 'white', piece[1].potentialPositions);
        }else if(piece[1].pieceType== 'knight'){
            legalKnightMoves(piece[1].position, 'white', piece[1].potentialPositions);
        }else if(piece[1].pieceType== 'bishop'){
            legalBishopMoves(piece[1].position, 'white', piece[1].potentialPositions);
        }else if(piece[1].pieceType== 'rook'){
            legalRookMoves(piece[1].position, 'white', piece[1].potentialPositions);
        }else if(piece[1].pieceType== 'queen'){
            legalQueenMoves(piece[1].position, 'white', piece[1].potentialPositions);
        }else if(piece[1].pieceType== 'king'){
            legalKingMoves(piece[1].position, 'white', piece[1].potentialPositions);
        }

        
        //pin pieces
        let pinned = false;
        let pinner;
        Object.entries(pinnedPieces['black']).forEach( potentialPinner => {
            if(potentialPinner[1] === piece[0]){
                pinner = potentialPinner[0];
                pinned = true;
            }
        });

        if(pinned){
            for(let i=0; i<piece[1].potentialPositions.length; i++){
                let popPosition = true;
                const pinnerPosition = sudoku.querySelector(`#${piecesWhite[pinner].position}`);
                
                if(piece[1].potentialPositions[i] == pinnerPosition){
                    popPosition = false;
                }else{
                    piecesWhite[pinner].potentialPositions.forEach( pinnerPotentialPosition => {
                        if(piece[1].potentialPositions[i] == pinnerPotentialPosition){
                            popPosition = false;
                        }
                    });
                }

                if(popPosition){
                    piece[1].potentialPositions.splice(i, 1);
                    i--
                }
            }
        }


        //store all potential positions for black pieces
        piece[1].potentialPositions.forEach(potentialPosition => {
            overallPotentialPositions['black'].push(potentialPosition.getAttribute('id'));
        });

        //block positions for king where it'll be checked
        if(piece[1].pieceType != 'pawn'){
            piece[1].potentialPositions.forEach(potentialPosition => {
                blockedPositionsForWhiteKing.push(potentialPosition.getAttribute('id'));
            });
        }
        else{
            if(piece[1].position[0]>'a'){
                blockedPositionsForWhiteKing.push(`${String.fromCharCode(piece[1].position.charCodeAt(0) - 1)}${String.fromCharCode(piece[1].position.charCodeAt(1) - 1)}`);
            }
            if(piece[1].position[0]<'h'){
                blockedPositionsForWhiteKing.push(`${String.fromCharCode(piece[1].position.charCodeAt(0) + 1)}${String.fromCharCode(piece[1].position.charCodeAt(1) - 1)}`);
            }
        }
    });
}





function updatePotentialPositions(){
    if(whiteMove){
        whiteChecked= false;
        whiteChecker= [];
        //calculating potential position for every White Piece
        updateWhitePositions();

        //calculating potential position for every Black Piece
        updateBlackPositions();
    }
    else{
        blackChecked= false;
        blackChecker= [];
        //calculating potential position for every Black Piece
        updateBlackPositions();

        //calculating potential position for every White Piece
        updateWhitePositions();
    }
}




















//Storing positions for every White Piece
const piecesWhite= {
    pawnOne: { pieceType: 'pawn', position: 'a2', potentialPositions: [] },
    pawnTwo: { pieceType: 'pawn', position:'b2', potentialPositions: [] },
    pawnThree: { pieceType: 'pawn', position:'c2', potentialPositions: [] },
    pawnFour: { pieceType: 'pawn', position: 'd2', potentialPositions: [] },
    pawnFive: { pieceType: 'pawn', position: 'e2', potentialPositions: [] },
    pawnSix: { pieceType: 'pawn', position: 'f2', potentialPositions: [] },
    pawnSeven: { pieceType: 'pawn', position: 'g2', potentialPositions: [] },
    pawnEight: { pieceType: 'pawn', position: 'h2', potentialPositions: [] },

    knightOne: { pieceType: 'knight', position: 'b1', potentialPositions: [] },
    knightTwo: { pieceType: 'knight', position: 'g1', potentialPositions: [] },

    bishopOne: { pieceType: 'bishop', position: 'c1', potentialPositions: [] },
    bishopTwo: { pieceType: 'bishop', position: 'f1', potentialPositions: [] },

    rookOne: { pieceType: 'rook', position:'a1', potentialPositions: [] },
    rookTwo: { pieceType: 'rook', position: 'h1', potentialPositions: [] },

    kingWhite: { pieceType: 'king', position: 'e1', potentialPositions: [] },
    queenOne: { pieceType: 'queen', position: 'd1', potentialPositions: [] }
};

//Storing positions for every Black Piece
const piecesBlack= {
    pawnOne: { pieceType: 'pawn', position: 'a7', potentialPositions: [] },
    pawnTwo: { pieceType: 'pawn', position:'b7', potentialPositions: [] },
    pawnThree: { pieceType: 'pawn', position:'c7', potentialPositions: [] },
    pawnFour: { pieceType: 'pawn', position: 'd7', potentialPositions: [] },
    pawnFive: { pieceType: 'pawn', position: 'e7', potentialPositions: [] },
    pawnSix: { pieceType: 'pawn', position: 'f7', potentialPositions: [] },
    pawnSeven: { pieceType: 'pawn', position: 'g7', potentialPositions: [] },
    pawnEight: { pieceType: 'pawn', position: 'h7', potentialPositions: [] },

    knightOne: { pieceType: 'knight', position: 'b8', potentialPositions: [] },
    knightTwo: { pieceType: 'knight', position: 'g8', potentialPositions: [] },

    bishopOne: { pieceType: 'bishop', position: 'c8', potentialPositions: [] },
    bishopTwo: { pieceType: 'bishop', position: 'f8', potentialPositions: [] },

    rookOne: { pieceType: 'rook', position:'a8', potentialPositions: [] },
    rookTwo: { pieceType: 'rook', position: 'h8', potentialPositions: [] },

    kingBlack: { pieceType: 'king', position: 'e8', potentialPositions: [] },
    queenOne: { pieceType: 'queen', position: 'd8', potentialPositions: [] }
};

let castle;


const blockedPositionsForBlackKing= [];
const blockedPositionsForWhiteKing= [];

const overallPotentialPositions = {
    white: [],
    black: []
}



//initially it's white's move
let whiteMove= true;

//at the start of game, no piece is selected
let selectedPiece= null;

//initially neither White's or Black's King is in check
let whiteChecked= false;
let blackChecked= false;

//pieces checking the king
let blackChecker= [];
let whiteChecker= [];

//pinned pieces
const pinnedPieces = {
    white: {},
    black: {}
}

//initially no extra queen on board from either side
let extraWhiteQueenCount= 0;
let extraBlackQueenCount= 0;

//play game
let play = true;




















//logic for potential moves, for any selected white piece, at a given moment
sudoku.addEventListener('click', selectPiece);





//moving the selected chess piece when clicked on a potential position
sudoku.addEventListener('click', (e) => {
    
    //if the position doesn't already have a piece of opposite color
    if(e.target.matches('.potential-position')){
        //select the position and move the selected piece onto that position

        
        const selectedSquare= selectedPiece.parentElement;
        //piece name
        const piece= selectedPiece.getAttribute('data-piece');

        //next square
        const nextSquare= e.target;
        
        //get new position of the next square
        const position= nextSquare.getAttribute('id');


        //castle the king
        if(piece == 'kingWhite' && castle['white']['kingNotMoved']){
            if(position == 'c1'){
                //select queen side rook and move it
                const rookOne = sudoku.querySelector('#a1').querySelector('img');
                const castlePositionForRook = sudoku.querySelector('#d1');
                castlePositionForRook.appendChild(rookOne);

                piecesWhite['rookOne'].position = 'd1';
            }
            else if(position == 'g1'){
                //select king side rook and move it
                const rookTwo = sudoku.querySelector('#h1').querySelector('img');
                const castlePositionForRook = sudoku.querySelector('#f1');
                castlePositionForRook.appendChild(rookTwo);

                piecesWhite['rookTwo'].position = 'f1';
            }
        }
        else if(piece == 'kingBlack' && castle['black']['kingNotMoved']){
            if(position == 'c8'){
                //select queen side rook and move it
                const rookOne = sudoku.querySelector('#a8').querySelector('img');
                const castlePositionForRook = sudoku.querySelector('#d8');
                castlePositionForRook.appendChild(rookOne);

                piecesBlack['rookOne'].position = 'd8';
            }
            else if(position == 'g8'){
                //select king side rook and move it
                const rookTwo = sudoku.querySelector('#h8').querySelector('img');
                const castlePositionForRook = sudoku.querySelector('#f8');
                castlePositionForRook.appendChild(rookTwo);

                piecesBlack['rookTwo'].position = 'f8';
            }
        }
        
        //move the selected piece onto next square
        nextSquare.appendChild(selectedPiece);
        

        //remove 'selected' highlight from the previous position
        selectedSquare.classList.remove('selected');

        //remove previous 'potential-positions' for the piece and update its current position
        removePreviousHighlight(piece, position);



        //functions other than just moving the piece

        //add extra queen on board if pawn reaches endOfFile
        addQueen(selectedPiece, nextSquare, piece);

        //check if castling is still possible
        cantCastle(piece);

        //unpin any piece of opposite color the current moved piece was pinning
        unpin(whiteMove, piece);


        //update 'potential-positions' for every piece onboard, after one move
        updatePotentialPositions();


        //check for check
        checkForCheck();


        //unselect the piece
        selectedPiece= null;

        //change turns of white/black and end game is someone is checkmated or stalemated
        changeTurn();
        
    }










    //else, if the position did have a piece of opposite color 
    else if(e.target.parentElement.matches('.potential-position')){
        //select the position and move the selected piece onto that position

        
        const selectedSquare= selectedPiece.parentElement;
        //piece name
        const piece= selectedPiece.getAttribute('data-piece');

        //next square
        const nextSquare= e.target.parentElement;

        //get new position
        const position= nextSquare.getAttribute('id');

        //select the position, remove the piece of opposite color and move the selected piece onto that position        
        
        //removing the captured piece from javascript data 
        const pieceToBeRemoved= e.target.getAttribute('data-piece');
        if(whiteMove){
            delete piecesBlack[pieceToBeRemoved];
        }else{
            delete piecesWhite[pieceToBeRemoved];
        }


        //replacing the captured piece in browser
        nextSquare.replaceChild(selectedPiece, nextSquare.firstElementChild);

        //remove highlight from the previous position
        selectedSquare.classList.remove('selected');

        //remove previous 'potential-positions' for the piece and update its current position
        removePreviousHighlight(piece, position);



        //functions other than just moving the piece

        //add extra queen on board
        addQueen(selectedPiece, nextSquare, piece);
        
        //check if castling is still possible
        cantCastle(piece);

        //unpin any piece of opposite color the current moved piece was pinning
        unpin(whiteMove, piece);


        //update 'potential-positions' for every piece onboard, after one move
        updatePotentialPositions();


        //check for check
        checkForCheck();


        //unselect the piece
        selectedPiece= null;
        
        //change turns of white/black and end game is someone is checkmated or stalemated
        changeTurn();
        
    }
});




















//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyCLcmnSIXuODybPcdxfhO17e0r8sEvokoU",
  authDomain: "chess-2791a.firebaseapp.com",
  projectId: "chess-2791a",
  storageBucket: "chess-2791a.appspot.com",
  messagingSenderId: "830195312550",
  appId: "1:830195312550:web:3e35aec2da7e393991d167",
  measurementId: "G-4JMWRBJ2EH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);

const signInButton = document.querySelector('button');
signInButton.addEventListener('click', (e) => {
    e.target.style.display = "none";





    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        


        const chessBoard = document.querySelector('#sudoku');
        chessBoard.style.display = 'grid';

        chessboard();
        chessPieces();


        castle= {
            white: {
                kingNotMoved: true,
        
                queenSideRook: true,
                kingSideRook: true,
                
                b1: document.getElementById(`b1`).hasChildNodes(),
                c1: document.getElementById(`c1`).hasChildNodes(),
                d1: document.getElementById(`d1`).hasChildNodes(),
                f1: document.getElementById(`f1`).hasChildNodes(),
                g1: document.getElementById(`g1`).hasChildNodes()
            },
        
            black: {
                kingNotMoved: true,
        
                queenSideRook: true,
                kingSideRook: true,
        
                b8: document.getElementById(`b8`).hasChildNodes(),
                c8: document.getElementById(`c8`).hasChildNodes(),
                d8: document.getElementById(`d8`).hasChildNodes(),
                f8: document.getElementById(`f8`).hasChildNodes(),
                g8: document.getElementById(`g8`).hasChildNodes()
            }
        };




        //light up the square you're hovering on
        if(play){
            const sudoku= document.querySelector('#sudoku');

            //indicating which chess square you're currently hovering over
            sudoku.addEventListener('mouseover', highlightSquare);
            //remove the indication, when mouse pointer moved away from the chess square its currently hovering over
            sudoku.addEventListener('mouseout', unhighlightSquare);
        }


        updatePotentialPositions();




        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
});