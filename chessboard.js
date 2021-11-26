//create a chess board
function createBoard(){
    const sudoku=document.getElementById('sudoku');
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            if((i+j)%2==0){
                const innerContent=document.createElement('div');
                innerContent.classList.add('odd');
                sudoku.appendChild(innerContent);
            }
            else{
                const innerContent=document.createElement('div');
                innerContent.classList.add('even');
                sudoku.appendChild(innerContent);
            }
        }
    }
    console.log(sudoku);      
}

//add all the chess pieces on the board
function addPieces(){
    for(let i=1; i<=64; i++){
        if(i==1|| i==8){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', 'Chess_rdt60.png');
            img.setAttribute('alt', 'Black Rook');
            div.appendChild(img);
        }else if(i==2||i==7){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', 'Chess_ndt60.png');
            img.setAttribute('alt', 'Black Knight');
            div.appendChild(img);
        }else if(i==3||i==6){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', 'Chess_bdt60.png');
            img.setAttribute('alt', 'Black Bishop');
            div.appendChild(img);
        }else if(i==57||i==64){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', 'Chess_rlt60.png');
            img.setAttribute('alt', 'White Rook');
            div.appendChild(img);
        }else if(i==58||i==63){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', 'Chess_nlt60.png');
            img.setAttribute('alt', 'White Knight');
            div.appendChild(img);
        }else if(i==59||i==62){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', 'Chess_blt60.png');
            img.setAttribute('alt', 'White Bishop');
            div.appendChild(img);
        }else if(i==9||i==10||i==11||i==12||i==13||i==14||i==15||i==16){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', 'Chess_pdt60.png');
            img.setAttribute('alt', 'Black Pawn');
            div.appendChild(img);
        }else if(i==49||i==50||i==51||i==52||i==53||i==54||i==55||i==56){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', 'Chess_plt60.png');
            img.setAttribute('alt', 'White Pawn');
            div.appendChild(img);       
        }else if(i==4){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', 'Chess_qdt60.png');
            img.setAttribute('alt', 'Black Queen');
            div.appendChild(img);
        }else if(i==5){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', 'Chess_kdt60.png');
            img.setAttribute('alt', 'Black King');
            div.appendChild(img);
        }else if(i==61){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', 'Chess_klt60.png');
            img.setAttribute('alt', 'White King');
            div.appendChild(img);
        }else if(i==60){
            const div= sudoku.querySelector(`div:nth-child(${i})`);
            const img= document.createElement('img');
            img.setAttribute('src', 'Chess_qlt60.png');
            img.setAttribute('alt', 'White Queen');
            div.appendChild(img);
        }
    }
}

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
let squareNotSelected=true;
function movePieces(){
    const sudoku= document.querySelector('#sudoku');
    sudoku.addEventListener('click', (e) => {
        if(squareNotSelected){
            if((e.target.matches('.odd')||e.target.matches('.even'))&&e.target.hasChildNodes()){
                e.target.classList.add('selected');
                squareNotSelected=false;
            }else if(e.target.matches('img')){
                e.target.parentElement.classList.add('selected');
                squareNotSelected=false;
            }
            
            sudoku.addEventListener('click', (f) => {
                if(f.target.matches('.odd')||f.target.matches('.even')){
                    if(e.target.hasChildNodes()){
                        if(e.target===f.target){
                            squareNotSelected=true;
                            e.target.classList.remove('selected');
                        }
                    }else if(e.target.matches('img')){
                        if(e.target.parentElement===f.target){
                            squareNotSelected=true;
                            f.target.classList.remove('selected');
                        }
                    }
                }else if(f.target.matches('img')){
                    if(e.target.hasChildNodes()){
                        if(e.target===f.target.parentElement){
                            squareNotSelected=true;
                            e.target.classList.remove('selected');
                        }
                    }else if(e.target.matches('img')){
                        if(e.target===f.target){
                            squareNotSelected=true;
                            f.target.parentElement.classList.remove('selected');
                        }
                    }
                }
            })
        }
    })
}
// adding event listener to the button in addition to adding 'onclick' attribute in the html. Both give the same result though.
// document.querySelector('button').addEventListener('click',  function(e){
//     let a= e.target;
//     a.setAttribute('style','background-color: black');
// });


createBoard();
addPieces();
movePieces();

