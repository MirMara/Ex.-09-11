/*Continuare la funzione calculator vista a lezione, implementando le operazioni di moltiplicazione e divisione, inoltre provate a risolvere il problema della sottrazione. Risolvere l'esercizio senza utilizzare i metodi map filter e reduce.*/

function calculator(numbers) {
    function sum() {
      let sumTotal = 0;
      for (num of numbers) sumTotal += num;
      return sumTotal;
    }
  
    function sub() {
      let subTotal = numbers[0];
      for (num of numbers) subTotal -= num;
      return subTotal + numbers [0]
    };
     
    function mult() {
        let multTotal = 1;
        for (num of numbers) multTotal *= num;
        return multTotal;
    }
     
    function div() {
        let divTotal = numbers [0];
        for (num of numbers) divTotal /= num;
        return divTotal * numbers [0];
    }

    
    return {
        sum: sum (),
        sub: sub (),
        mult: mult(),
        div: div(),
        
     };

}
  