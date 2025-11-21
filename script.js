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

myBtn.addEventListener("click", () => {
    newPixelValue = window.prompt('Enter the number of squares per side you want for a new grid (maximum value of 100): ');
    while (newPixelValue > 100){
        alert("Value can't be greater than 100");
        newPixelValue = window.prompt('Enter the number of squares per side you want for a new grid (maximum value of 100): ');
        console.log(newPixelValue);
    }
});











