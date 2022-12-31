window.onload = function(){
    const Number = document.querySelector('.number');
    const error = document.querySelector('#error');
    const submit = document.querySelector('#submit')
    submit.addEventListener("click",function() {
        if( Number.value.trim() == ""){
            error.style.display="block";
            Number.style.border="1px solid red";
        }
        else{
            error.style.display="none";
            Number.style.border="none";
        }
    })
    function changerBordure(input) {
        input.style.border = "1px solid hsl(172, 67%, 45%)";
    }
    
    function remettreBordure(input) {
        input.style.border = "";
    }

    submit.addEventListener("focus", changerBordure(submit));
    submit.addEventListener("blur", remettreBordure(submit));
    const bill = document.querySelector(".bill");
    const grid5 = document.querySelector(".grid5");

    bill.addEventListener("focus", changerBordure(bill));
    bill.addEventListener("blur", remettreBordure(bill));
    grid5.addEventListener("focus", changerBordure(grid5));
    grid5.addEventListener("blur", remettreBordure(grid5));

    const grid1 = document.querySelector(".grid1");
    const grid2 = document.querySelector(".grid2");
    const grid3 = document.querySelector(".grid3");
    const grid4 = document.querySelector(".grid4");
    const grid6 = document.querySelector(".grid6");
    function Valeur(){
    grid1.addEventListener("click",function(){
        grid1.value=0.05;
        grid2.value=0;
        grid3.value=0;
        grid4.value=0;
        grid5.value=0;
        grid6.value=0;
    })
    grid2.addEventListener("click",function(){
        grid1.value=0;
        grid2.value=0.10;
        grid3.value=0;
        grid4.value=0;
        grid5.value=0;
        grid6.value=0;
    })
    grid3.addEventListener("click",function(){
        grid1.value=0;
        grid2.value=0;
        grid3.value=0.15;
        grid4.value=0;
        grid5.value=0;
        grid6.value=0;
    })
    grid4.addEventListener("click",function(){
        grid1.value=0;
        grid2.value=0;
        grid3.value=0;
        grid4.value=0.25;
        grid5.value=0;
        grid6.value=0;
    })
    grid6.addEventListener("click",function(){
        grid1.value=0;
        grid2.value=0;
        grid3.value=0;
        grid4.value=0;
        grid5.value=0;
        grid6.value=0.50;
    }) 

    grid5.addEventListener("input",function(){
        grid1.value=0;
        grid2.value=0;
        grid3.value=0;
        grid4.value=0;
        grid6.value=0;
    })
    return Math.max(grid1.value,grid2.value,grid3.value,grid4.value,(grid5.value/100),grid6.value);
}
    console.log(Valeur());
    function Tips(Nbpeople,bill){
        
        return ((bill/Nbpeople)*Valeur());
    }
    const Total = document.querySelector(".res2");
    function Total1(Nbpeople,bill){
        return (bill/Nbpeople) +Tips(Nbpeople,bill);
    }
    const tips = document.querySelector(".res1");
    let event1Active = false;
    let event2Active = false;
    const people = document.querySelector(".number");

    bill.addEventListener('input', function() {
        event1Active= true;
        if(bill.value==""){
            tips.innerHTML="00.00";
            Total.innerHTML="00.00";
        } else if (Valeur()!= 0 && event1Active && event2Active){
            console.log(Tips(people.value,bill.value));
            let tipso = ""+Tips(people.value,bill.value);
            let totalso = Total1(people.value,bill.value)+"";
            if (tipso.length > 5 || totalso.length >5) {
                tipso = tipso.substring(0, 5);
                totalso = totalso.substring(0, 5);
                }
            tips.innerHTML=tipso;
            Total.innerHTML=totalso;
        }
        else{
            console.log("Non mon gars  ");
        }
    });
    people.addEventListener('input', function() {
        event2Active = true;
        if(people.value==""){
            tips.innerHTML="00.00";
            Total.innerHTML="00.00";
        } else if (Valeur()!= 0 && event1Active && event2Active){
            console.log(Tips(people.value,bill.value));
            let tipso = ""+Tips(people.value,bill.value);
            let totalso = Total1(people.value,bill.value)+"";
            if (tipso.length > 5 || totalso.length >5) {
                tipso = tipso.substring(0, 5);
                totalso = totalso.substring(0, 5);
                }
            tips.innerHTML=tipso
            Total.innerHTML=totalso
        }
        else{
            console.log("Non mon gars  ");
        }
    });
    const reset = document.querySelector("#submit");
    reset.addEventListener('click',function(){
        bill.removeEventListener('input',function(){
            tips.innerHTML="00.00";
            Total.innerHTML="00.00";
        });
        event1Active=false;
        people.removeEventListener('input',function(){});
        event2Active=false;
    })
    
    const submitButton = document.querySelector('#submit');

function resetInputs() {
  // Récupérez tous les champs de saisie du formulaire
    const inputs = document.querySelectorAll('input');
    const Total = document.querySelector(".res2");
    const tips = document.querySelector(".res1");

  // Pour chaque champ de saisie, réinitialisez sa valeur et sa bordure
    inputs.forEach(input => {
    input.value = '';
    input.style.border = '';
    Total.innerHTML="00.00"
    tips.innerHTML="00.00"
    });

  // Masquez également le message d'erreur s'il est affiché
    const error = document.querySelector('#error');
    error.style.display = 'none';
}

// Ajoutez un écouteur d'événement "click" au bouton "Reset" qui appelle la fonction resetInputs
submitButton.addEventListener('click', resetInputs);

}