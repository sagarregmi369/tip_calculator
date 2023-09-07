const billTotalInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeople = document.getElementById('numberOfPeople');
const perPersonTotal = document.getElementById('perPersonTotal');

let totalPerson= Number(numberOfPeople.innerText);

const calculateBill=()=>{
    const totalBill= Number(billTotalInput.value);
    const totalTip = Number(tipInput.value)/100;
    const totalCalculatedBill= (totalBill + (totalBill*totalTip))/totalPerson;
    perPersonTotal.innerText=`$${totalCalculatedBill.toFixed(2)}`;
};
const increasePeople=()=>{
    totalPerson+=1;
    numberOfPeople.innerText=totalPerson;
    calculateBill();
};
const decreasePeople=()=>{
    // guard clause
    if (totalPerson <=1){
        return
    }
    totalPerson-=1;
    numberOfPeople.innerText=totalPerson;
    calculateBill();
};