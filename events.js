var data={
    firstname:"",
    lastname:"",
    mobilenumber:"",
    select:""
}

function firstname(event){
    data.firstname=event.target.value;
}
function lastname(event){
    data.lastname=event.target.value;
}
function mobilenumber(event){
    data.mobilenumber=event.target.value;
}
function select(event){
    data.select=event.target.value;
}
function submit(e){
    e.preventDefault();
    console.log(data);

}