let estrutura1 = [  
    ["1", "2", "3", "4"],
    ["5", "6", "7", "8"],
    ["9", "10", "11", "12"],
    ["13", "14", "15", "16"]
];

let estrutura2 = [  
    ["1", "2", "3", "4"],
    ["5", "6", "7", "8"],
    ["9", "10", "11", "12"],
    ["13", "14", "15", "16"]
];

let estrutura_aguas1 = [  
    ["~", "~", "~", "~"],
    ["~", "~", "~", "~"],
    ["~", "~", "~", "~"],
    ["~", "~", "~", "~"]
];

let estrutura_aguas2 = [  
    ["~", "~", "~", "~"],
    ["~", "~", "~", "~"],
    ["~", "~", "~", "~"],
    ["~", "~", "~", "~"]
];


console.log(
    "Tem 5 navios para colocar!\nPosições: \n" +
    " " + estrutura1[0].join(" |  ") + "\n" + 
    "------------------\n" +
    " " + estrutura1[1].join(" |  ") + "\n" +
    "------------------\n" +
    " " + estrutura1[2].join(" | ") + "\n" +
    "------------------\n" +
    estrutura1[3].join(" | ")
);


let passo = 0;
let jogar = 0;
let aux1 = 0;
let aux2 = 0;

process.stdin.on('data', function(data) {
    let posicao = Number(data.toString().trim());

    if(passo < 5) {
        console.log("\nJogador 1, colocou o navio ");

        if(!isNaN(estrutura1[Math.floor((posicao-1)/4)][(posicao-1)%4])) {
            estrutura1[Math.floor((posicao-1)/4)][(posicao-1)%4] = "N";
            passo++
        } else {
            console.log("\nEscreva outra: ");
        }
        if(passo == 5){
            console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
        }
    } else if(passo >= 5 && passo < 10) {
        console.log("\njogador 2, colocou o navio ");

        if(!isNaN(estrutura2[Math.floor((posicao-1)/4)][(posicao-1)%4])) {
            estrutura2[Math.floor((posicao-1)/4)][(posicao-1)%4] = "N";
            passo++;
        } else {
            console.log("\nEscreva outra: ");
        }
        
        if(passo == 10) {
            console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
        }
    } else if(passo >= 10){

        if(jogar % 2 == 0) {
            console.log("\nVez do jogador 1: ");
            if(isNaN(estrutura2[Math.floor((posicao-1)/4)][(posicao-1)%4])) {
                estrutura_aguas2[Math.floor((posicao-1)/4)][(posicao-1)%4] = "O";

            } else {
                estrutura_aguas2[Math.floor((posicao-1)/4)][(posicao-1)%4] = "X";
            }
            jogar++;
        } else {
            console.log("\nVez do jogador 2: ");
            if(isNaN(estrutura1[Math.floor((posicao-1)/4)][(posicao-1)%4])) {
                estrutura_aguas1[Math.floor((posicao-1)/4)][(posicao-1)%4] = "O";
            } else {
                estrutura_aguas1[Math.floor((posicao-1)/4)][(posicao-1)%4] = "X";
            }
            jogar++
        }
    }

    if(jogar != 0) {
        console.log(
        estrutura_aguas1[0].join(" | ") + "\n" + 
        "---------------------------------\n" +
        estrutura_aguas1[1].join(" | ") + "\n" +
        "---------------------------------\n" +
        estrutura_aguas1[2].join(" | ") + "\n" +
        "----------------------------------\n" +
        estrutura_aguas1[3].join(" | ") + "\n" + "\n" +
        "----------------------------------\n" +
        estrutura_aguas2[0].join(" | ") + "\n" + 
        "---------------------------------\n" +
        estrutura_aguas2[1].join(" | ") + "\n" +
        "---------------------------------\n" +
        estrutura_aguas2[2].join(" | ") + "\n" +
        "----------------------------------\n" +
        estrutura_aguas2[3].join(" | ")
        );
    }

    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            if(estrutura_aguas1[i][j]  == "O") {
                aux1++;
            } else if(estrutura_aguas2[i][j] == "O") {
                aux2++;
            }
        }
    }
    
    if(aux1 != 5) {
        aux1 = 0;
    }
    
    if(aux2 != 5) {
        aux2 = 0;
    }

    if(aux1 == 5 || aux2 == 5) {
        if(aux1 == 5) {
            console.log("\nJogador 2 venceu!!");
        } else {
            console.log("\nJogador 1 venceu!!");
        }
        process.exit();
    }
    
})