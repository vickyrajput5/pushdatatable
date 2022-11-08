// add row
var rindex, 
table = document.getElementById("table");

function emptyRow(){
    var isEmpty = false,
    fname=document.getElementById('fname').value,
    lname=document.getElementById('lname').value,
    age=document.getElementById('age').value;

    if(fname === ""){
        alert("Please fill First Name")
        isEmpty= true;
    }
    if(lname === ""){
        alert("Please fill Last Name")
        isEmpty= true;
    }
    if(age === ""){
        alert("Please fill Age")
        isEmpty= true;
    }
return isEmpty;
}


function addrow(){

  if(!emptyRow()){

    // get table by Id

    var newRow = table.insertRow(table.length),

    // create row and cell

    cell1=newRow.insertCell(0),
    cell2=newRow.insertCell(1),
    cell3=newRow.insertCell(2),

    // get value from input text
    
    fname=document.getElementById('fname').value,
    lname=document.getElementById('lname').value,
    age=document.getElementById('age').value;
    
    // set input value text into table cell

    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = age;

    selectedRowToInput ()
  }
}

function selectedRowToInput (){
    for(var i=1; i<table.rows.length; i++){
        table.rows[i].onclick = function(){
            // get selected row index
            rindex = this.rowIndex;
           document.getElementById('fname').value = this.cells[0].innerHTML;
           document.getElementById('lname').value = this.cells[1].innerHTML;
           document.getElementById('age').value = this.cells[2].innerHTML;
        }
    }
    document.getElementById('fname').value='',
    document.getElementById('lname').value='',
    document.getElementById('age').value='';
}
selectedRowToInput ()

function editRowData(){
    var fname =document.getElementById('fname').value,
        lname =document.getElementById('lname').value,
        age =document.getElementById('age').value;
if(!emptyRow()){
        table.rows[rindex].cells[0].innerHTML=fname;
        table.rows[rindex].cells[1].innerHTML=lname;
        table.rows[rindex].cells[2].innerHTML=age;
}
}
function removeSelectedRow(){
    table.deleteRow(rindex);
    document.getElementById('fname').value='',
    document.getElementById('lname').value='',
    document.getElementById('age').value='';
}

const keySearch= ()=>{
    var filter = document.getElementById("Search").value.toUpperCase();
    var tr = table.getElementsByTagName('tr');
    for(var i =0; i<tr.length; i++){
        let td=tr[i].getElementsByTagName('td')[0];
        if(td){
            let textvalue = td.textContent || text.innerHTML;
            if(textvalue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display= '';
            }else{
                tr[i].style.display="none";
            }
        }
    }
}
