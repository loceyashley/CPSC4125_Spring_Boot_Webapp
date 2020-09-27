arrayOfBreeds = [];

//Add breeds to the list 
function addBreed(){
    var Breed = document.getElementById('exampleFormControlTextarea1');
    arrayOfBreeds.unshift(Breed.value);
    printList();
}

//print breed list
function printList(){
    document.getElementById("result").innerHTML = arrayOfBreeds;
}