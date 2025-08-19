STEPS_MAX=10;
STEPS_CURR=0;
NUMBER_AIM=0;

SIGN_END_GAME=0;
SIGN_NUMBER=0;
/*  0 -> Números iguais
    1 -> NÚmeros diferentes(NUMBER_AIM<num)
    2 -> Números diferentes(NUMBER_AIM>num)
    */

COMMANDS_ABLE=["guess"];

function number_generate(){
    return Math.random()*19099
}

function game_init(){
    if(!NUMBER_AIM)
        return;

    SIGN_END_GAME=1;
    NUMBER_AIM=number_generate()+1;
    STEPS_CURR=0;
}

function game_move(command){
    if(!command.length()){
        console.log("Comando vazio");
        return;
    }

    cmd=command.split();
    if(!COMMANDS_ABLE.includes(cmd[0])){
        console.log("Comando inválido");
        return;
    }

    if(cmd[0]=="guess"){
        number_guess();
        if(!SIGN_NUMBER)
        return;
    }
}

function number_guess(){
    if(STEPS_CURR>=STEPS_MAX){
        SIGN_END_GAME=1;
        return;
    }

    const input_box=document.getElementById("input_number");

    const num=Number(input_box.value);
    
    ++STEPS_CURR;

    if(NUMBER_AIM<num){
        SIGN_NUMBER=1;
        return;
    }

    if(NUMBER_AIM>num){
        SIGN_NUMBER=2;
        return;
    }

    SIGN_NUMBER=0;
    SIGN_END_GAME=0;
}

function number_output(){
    const output_box=document.getElementById("output");

    var message="";
    if(!SIGN_NUMBER){
        message="Parabens";
        return;
    }

}