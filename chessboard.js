//create a chess board
createBoard();
//add all the chess pieces on the board
addPieces();
const sudoku= document.querySelector('#sudoku');

//indicating which chess square you're currently hovering over
sudoku.addEventListener('mouseover', (e) => {
    if(e.target.matches('.odd')||e.target.matches('.even')){
        e.target.classList.add('hover');
    }else if(e.target.matches('img')){
        if(e.target.parentElement.matches('.odd')||e.target.parentElement.matches('.even'))
        e.target.parentElement.classList.add('hover');
    }
})
//remove the indication, when mouse pointer moved away from the chess square its currently hovering over
sudoku.addEventListener('mouseout', (e) => {
    if(e.target.matches('.odd')||e.target.matches('.even')){
        e.target.classList.remove('hover');
    }else if(e.target.matches('img')){
        if(e.target.parentElement.matches('.odd')||e.target.parentElement.matches('.even'))
        e.target.parentElement.classList.remove('hover');
    }
})




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
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', 'Chess_plt60.png');
            img.setAttribute('alt', 'White Pawn');
            img.classList.add('white');
            img.classList.add('pawn');
            div.appendChild(img);       
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
    //testing logic of legal moves for pieces

    const temp= document.createElement('img');
    temp.setAttribute('src', 'Chess_pdt60.png');
    temp.classList.add('black');
    temp.classList.add('pawn');
    sudoku.querySelector('#a2').removeChild(sudoku.querySelector('#a2').firstElementChild);
    sudoku.querySelector('#a2').appendChild(temp);
}