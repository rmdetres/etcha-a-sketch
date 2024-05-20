


///.clientWidth;
//.clientHeight;

let boxNumber = 256;
let newBoxArea = 38;





element = document.querySelector("#button");
element.addEventListener("click", addNewBoxes);

function addNewBoxes() {
    let personBoxesChoice = prompt("Please enter the number of squares")

   boxNumber = (parseInt(personBoxesChoice))*2;
   console.log(boxNumber);

   //math.sqrt()
   const totalArea = 409600;
    newBoxArea = (Math.floor(Math.sqrt(totalArea/boxNumber))-2);
   console.log(newBoxArea);


   removeBoxes()
   insertBoxes()




}






//Generates the boxes, dynamically

function insertBoxes(){

    console.log(`lets see what the ${newBoxArea}`);

    const gridContainer = document.querySelector("#grid-container");

    for(i = 0; i<boxNumber ; i++){
    const box = document.createElement("div");
    box.classList.add("container");
    gridContainer.appendChild(box);

    
   
    }

    const boxes = document.getElementsByClassName("container");

  
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.width = `${newBoxArea}px`;
        boxes[i].style.height = `${newBoxArea}px`;
    }

    mouseOverColor();

}

function removeBoxes(){
    const gridContainer = document.querySelector("#grid-container");

  while(gridContainer.firstChild){
    gridContainer.removeChild(gridContainer.firstChild);
  }


   
}


insertBoxes();
mouseOverColor();


//mouse over changes color.

function mouseOverColor(){

 let items = document.getElementsByClassName("container");

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("mouseover", func, false);
    items[i].addEventListener("mouseout", func1, false);
}
}


function func() { 
    let hexColorRep = generateNewColor();
    this.style.backgroundColor = hexColorRep;
}

function func1() {  
    let hexColorRep = generateNewColor();

    this.style.backgroundColor = hexColorRep;
}


//Get Random Color Assignment
const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
function getCharacter(index) {
	return hexCharacters[index]
}

function generateNewColor() {
	let hexColorRep = "#"

	for (let index = 0; index < 6; index++){
		const randomPosition = Math.floor ( Math.random() * hexCharacters.length ) 
    	hexColorRep += getCharacter( randomPosition )
	}
	
	return hexColorRep

}

