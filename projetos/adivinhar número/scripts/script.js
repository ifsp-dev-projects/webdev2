STEPS_MAX=10;
STEPS_CURR=0;

NUMBER_RANGE=20
NUMBER_AIM=0;
NUMBER_INPUT=0;

SIGN_END_GAME=1;
SIGN_NUMBER=0;
/*  0 -> Números iguais
    1 -> NÚmeros diferentes(NUMBER_AIM<num)
    2 -> Números diferentes(NUMBER_AIM>num)
    */

COMMANDS_ABLE=["guess"];

const OUTPUT_BOX_STEPS=document.getElementById("output_steps");

const OUTPUT_BOX=document.getElementById("output_number");
const INPUT_BOX=document.getElementById("input_number");

function number_generate(){
    return Math.random()*NUMBER_RANGE+1
}

function input_valid(){
    INPUT_BOX.value=INPUT_BOX.value.trim();
    console.log(INPUT_BOX.value);
    if(isNaN(INPUT_BOX.value)){
        OUTPUT_BOX.innerHTML="Input invalido, insira outro";
        return 0;
    }

    return 1;
}


function game(command){
    if(!input_valid())
        return;
    // console.log(SIGN_END_GAME);

    game_init();
    game_move(command);
}

function game_init(){
    if(!SIGN_END_GAME){
        // console.log("O jogo já está rodando");
        return;
    }

    SIGN_END_GAME=0;
    NUMBER_AIM=parseInt(number_generate());
    STEPS_CURR=STEPS_MAX;

    OUTPUT_BOX.innerHTML='';
    INPUT_BOX.innerHTML='';
}

function game_move(command){
    // console.log(":PPPPP")

    if(!command.length){
        // console.log("Comando vazio");
        return;
    }

    cmd=command.split();
    if(!COMMANDS_ABLE.includes(cmd[0])){
        // console.log("Comando inválido");
        return;
    }

    if(cmd[0]=="guess"){
        number_guess();
    }

    game_events();
}


function game_events(){
    OUTPUT_BOX_STEPS.innerHTML=STEPS_CURR;

    if(SIGN_END_GAME){
        OUTPUT_BOX.innerHTML="O jogo já terminou paizão";
        return;
    }

    if(!SIGN_NUMBER){
        OUTPUT_BOX.innerHTML="Parabens, terminou o jogo!";
        SIGN_END_GAME=1;
        return;
    }

    if(SIGN_NUMBER==1){
        OUTPUT_BOX.innerHTML="Número secreto < "+NUMBER_INPUT+"<br>"+OUTPUT_BOX.innerHTML;
        return;
    }

    if(!STEPS_CURR){
        OUTPUT_BOX.innerHTML="Você não tem mais moves"
        return;
    }

    OUTPUT_BOX.innerHTML="Número secreto > "+NUMBER_INPUT+"<br>"+OUTPUT_BOX.innerHTML;
}

function number_guess(){
    if(!STEPS_CURR){
        SIGN_END_GAME=1;
        return;
    }

    NUMBER_INPUT=Number(INPUT_BOX.value);
    
    --STEPS_CURR;

    if(NUMBER_AIM<NUMBER_INPUT){
        SIGN_NUMBER=1;
        return;
    }

    if(NUMBER_AIM>NUMBER_INPUT){
        SIGN_NUMBER=2;
        return;
    }

    SIGN_NUMBER=0;
}
