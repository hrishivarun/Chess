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





//calculating potential position for every White Piece before starting the game
Object.entries(piecesWhite).forEach(piece => {
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
});





//calculating potential position for every Black Piece before starting the game
Object.entries(piecesBlack).forEach(piece => {
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
});





//initially it's white's move
let whiteMove= true;

//at the start of game, no piece is selected
let selectedPiece= null;

//initially neither White's or Black's King is in check
let whiteChecked= false;
let blackChecked= false;

//initially no extra queen on board from either side
let extraWhiteQueenCount= 0;
let extraBlackQueenCount= 0;