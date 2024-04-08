let expenses=[];
let total=0;

const Category=document.getElementById('Category');
const Amount=document.getElementById('Amount');
const Date=document.getElementById('Date');
const AddBtn=document.getElementById('AddBtn');
const TableBody=document.getElementById('TableBody');
const TotalAmount=document.getElementById('TotalAmount');

AddBtn.addEventListener('click',()=>{
    const category=Category.value;
    const amount=Number(Amount.value);
    const date=Date.value;
    if(category===''){
        alert('please select a category');
        return;
    }
    if(amount<=0 || isNaN(amount)){
        alert('please enter an amount');
        return;
    }
    if(date===''){
        alert('please select a date');
        return;
    }
    expenses.push({category,amount,date});
    total+=amount;

    TotalAmount.textContent=total;
    const newRow = TableBody.insertRow();    

    const categoryCell=newRow.insertCell();
    const amountCell=newRow.insertCell();
    const dateCell=newRow.insertCell();
    const deleteCell=newRow.insertCell();
    
    const deleteBtn=document.createElement('button');
    deleteBtn.textContent='Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click',()=>{
        expenses.splice(expenses.indexOf(expense),1)

        total-=expense.amount;
        TotalAmount.textContent=total;
        TableBody.removeChild(newRow);
    })
    const expense=expenses[expenses.length-1];
    categoryCell.textContent=expense.category;
    amountCell.textContent=expense.amount;
    dateCell.textContent=expense.date;
    deleteCell.appendChild(deleteBtn);
});
for(let expense of expenses){
    total+=amount;

    TotalAmount.textContent=total;
    const newRow = TableBody.insertRow();    

    const categoryCell=newRow.insertCell();
    const amountCell=newRow.insertCell();
    const dateCell=newRow.insertCell();
    const deleteCell=newRow.insertCell();
    
    const deleteBtn=document.createElement('button');
    deleteBtn.textContent='Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click',()=>{
        expenses.splice(expenses.indexOf(expense),1)

        total-=expense.amount;
        TotalAmount.textContent=total;
        TableBody.removeChild(newRow);
    })
    const expense=expenses[expenses.length-1];
    categoryCell.textContent=expense.category;
    amountCell.textContent=expense.amount;
    dateCell.textContent=expense.date;
    deleteCell.appendChild(deleteBtn);
}

