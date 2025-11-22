let container = document.querySelector(".container");

for(let i = 0; i < 256; i++){
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid-square");

    newDiv.addEventListener("mouseover", () => {
        newDiv.style.background = "black";
    } )

    container.appendChild(newDiv);
}

let newPixelValue;
const myBtn = document.getElementById("grid_btn");

function createGrid(size){
    container.innerHTML = "";
    newPixelValue = size * size;
    for(let i = 0; i < newPixelValue; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-square");

        newDiv.addEventListener("mouseover", () => {
            newDiv.style.background = "black";
        })
        container.appendChild(newDiv);
    }
}


myBtn.addEventListener("click", () => {
   newPixelValue = window.prompt("Enter the number of squares you want per side for a new grid (maximum value of 100)")
   if (newPixelValue > 100){
    alert("Can't be greater than 100")
    window.prompt("Enter the number of squares you want per side for a new grid (maximum value of 100)")
   }
   createGrid(newPixelValue);
})
















