//your JS code here. If required.
const form = document.querySelector('form');
const table=document.querySelector('.table');

const thead=document.querySelector('.table thead');
// thead.innerHTML="<hr>"
form.addEventListener('submit', (e) => {    
    e.preventDefault();
    const bookTitle= document.querySelector('#title').value;
    const bookAuthor= document.querySelector('#author').value;
    const bookisbn= document.querySelector('#isbn').value;
    const row=table.insertRow(-1);
    
    const cell1=row.insertCell(0);
    const cell2=row.insertCell(1);
    const cell3=row.insertCell(2);
    const cell4=row.insertCell(3);
   
    
    cell1.innerHTML=bookTitle;
    cell2.innerHTML=bookAuthor;
    cell3.innerHTML=bookisbn;
    

    const deleteButton = document.createElement('button');
    deleteButton.textContent='✖';
    deleteButton.style.color='red';
    deleteButton.style.cursor='pointer';
    deleteButton.addEventListener('click', () => {
        table.deleteRow(row.rowIndex);
    });

    cell4.appendChild(deleteButton);

    form.reset(); 

})