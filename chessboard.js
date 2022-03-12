//create a chess board
createBoard();
//add all the chess pieces on the board
addPieces();



//indicating which chess square you're currently hovering over
document.querySelector('#sudoku').addEventListener('mouseover', (e) => {
    if(e.target.matches('.odd')||e.target.matches('.even')){
        e.target.classList.add('hover');
    }else if(e.target.matches('img')){
        if(e.target.parentElement.matches('.odd')||e.target.parentElement.matches('.even'))
        e.target.parentElement.classList.add('hover');
    }
})
//remove the indication, when mouse pointer moved away from the chess square its currently hovering over
document.querySelector('#sudoku').addEventListener('mouseout', (e) => {
    if(e.target.matches('.odd')||e.target.matches('.even')){
        e.target.classList.remove('hover');
    }else if(e.target.matches('img')){
        if(e.target.parentElement.matches('.odd')||e.target.parentElement.matches('.even'))
        e.target.parentElement.classList.remove('hover');
    }
})




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
                        sudoku.querySelector(`#${position[0]}${String.fromCharCode(position.charCodeAt(1) + 1)}`).classList.add('potential-position');
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
                        sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
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
                        sudoku.querySelector(`#${String.fromCharCode(position.charCodeAt(0) + 1)}${String.fromCharCode(position.charCodeAt(1) + 1)}`);
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
                //
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
                }
            }
        }
    }
});




function createBoard(){
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
}




function addPieces(){
    const sudoku=document.getElementById('sudoku');
    for(let i=1; i<=64; i++){
        if(i==1|| i==8){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', 'Chess_rdt60.png');
            img.setAttribute('alt', 'Black Rook');
            img.classList.add('black');
            img.classList.add('rook');
            div.appendChild(img);
        }else if(i==2||i==7){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', 'Chess_ndt60.png');
            img.setAttribute('alt', 'Black Knight');
            img.classList.add('black');
            img.classList.add('knight');
            div.appendChild(img);
        }else if(i==3||i==6){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', 'Chess_bdt60.png');
            img.setAttribute('alt', 'Black Bishop');
            img.classList.add('black');
            img.classList.add('bishop');
            div.appendChild(img);
        }else if(i==57||i==64){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', 'Chess_rlt60.png');
            img.setAttribute('alt', 'White Rook');
            img.classList.add('white');
            img.classList.add('rook');
            div.appendChild(img);
        }else if(i==58||i==63){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', 'Chess_nlt60.png');
            img.setAttribute('alt', 'White Knight');
            img.classList.add('white');
            img.classList.add('knight');
            div.appendChild(img);
        }else if(i==59||i==62){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', 'Chess_blt60.png');
            img.setAttribute('alt', 'White Bishop');
            img.classList.add('white');
            img.classList.add('bishop');
            div.appendChild(img);
        }else if(i==9||i==10||i==11||i==12||i==13||i==14||i==15||i==16){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', 'Chess_pdt60.png');
            img.setAttribute('alt', 'Black Pawn');
            img.classList.add('black');
            img.classList.add('pawn');
            div.appendChild(img);
        }else if(i==49||i==50||i==51||i==52||i==53||i==54||i==55||i==56){
            // const div= sudoku.querySelector(`div:nth-child(${i})`);
            // const img= document.createElement('img');
            // img.setAttribute('src', 'Chess_plt60.png');
            // img.setAttribute('alt', 'White Pawn');
            // img.classList.add('white');
            // img.classList.add('pawn');
            // div.appendChild(img);       
        }else if(i==4){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', 'Chess_qdt60.png');
            img.setAttribute('alt', 'Black Queen');
            img.classList.add('black');
            img.classList.add('queen');
            div.appendChild(img);
        }else if(i==5){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', 'Chess_kdt60.png');
            img.setAttribute('alt', 'Black King');
            img.classList.add('black');
            img.classList.add('king');
            div.appendChild(img);
        }else if(i==61){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', 'Chess_klt60.png');
            img.setAttribute('alt', 'White King');
            img.classList.add('white');
            img.classList.add('king');
            div.appendChild(img);
        }else if(i==60){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', 'Chess_qlt60.png');
            img.setAttribute('alt', 'White Queen');
            img.classList.add('white');
            img.classList.add('queen');
            div.appendChild(img);
        }
    }
    //testing moves
    const temp1= document.createElement('img');
    temp1.setAttribute('src', 'Chess_nlt60.png');
    temp1.classList.add('white');
    temp1.classList.add('knight');
    sudoku.querySelector('#f4').appendChild(temp1);

    const temp= document.createElement('img');
    temp.setAttribute('src', 'Chess_plt60.png');
    temp.classList.add('white');
    sudoku.querySelector('#e2').appendChild(temp);
}



