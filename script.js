let container = document.querySelector(".container");
let changeGrid = document.querySelector(".change-grid");

function createGrid(squares){
    for(let i = 0; i<squares;i++){
        for(let j=0; j<squares;j++){
        let grid = document.createElement("div");
        grid.classList.add("grid")
        container.appendChild(grid);   
        grid.style.width=600/squares+"px"
        grid.style.height=600/squares+"px"
        container.style.width=600+"px"
        container.style.height=600+"px"

        grid.addEventListener('mouseenter',()=>{
            grid.style.background = "black";
        })
        }
    }
}
    createGrid(30);

    changeGrid.addEventListener('click',()=>{
        container.innerHTML=" ";
        let newGrid = prompt("Input a number of squares (max 100):");
        createGrid(newGrid);
        
    })

   






