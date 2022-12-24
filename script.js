var a=document.querySelector('.forms');
a.addEventListener('submit',(e)=>{
    e.preventDefault();
    var first_name=document.querySelector('[placeholder="first name"]').value;
    var last_name=document.querySelector('[placeholder="last name"]').value;
    var address=document.querySelector('[placeholder="address"]').value
    var pincode=document.querySelector('[placeholder="pincode"]').value
    var choices_of_food=document.querySelector('[placeholder="food prefered"]').value;
    var state=document.querySelector('[placeholder="state"]').value;
    var country=document.querySelector('[placeholder="country"]').value;
    

    var count=0;
    var data=[first_name,last_name,address,pincode,choices_of_food,state,country]
    for(let i of data){
        if(i){
            count++;
        }
    }
    if(count>2){
       var cr_table_row= document.createElement('tr');
       for(i=0;i<data.length;i++){
        var cr_table_data=document.createElement('td');
        cr_table_data.innerText=data[i];
        cr_table_row.append(cr_table_data)
 
       }
       document.querySelector('tbody').append(cr_table_row)

       document.getElementById("form").reset();

    }
})