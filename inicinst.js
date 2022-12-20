
const atvcor = document.getElementById("cor");
const atlab = document.getElementById("clab");



atvcor.onchange = function alttema(){
    const altcor = document.getElementById("btnback")
    let corpr = 'black'
    let cornr =  'rgb(243,243, 243)';

    if(atvcor.checked){
        altcor.style.backgroundColor = corpr;
        atlab.style.color = cornr;
    }else{
        altcor.style.backgroundColor = cornr;
        atlab.style.color = corpr;
    }




}

  /*   const altcor = document.getElementById("btnback").style.backgroundColor = corpr;
    altcor.style.backgroundColor = corpr;
    atvcor = true

    if(atvcor == true ){
        altcor.style.backgroundColor = cornr;

    }
 */






 
