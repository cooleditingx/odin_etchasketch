create_grid(16,16)
const imput = document.querySelector("#grid-size")
imput.addEventListener("input", function(){
    var gridsize = imput.value
    cleargrid()
    create_grid(gridsize,gridsize)
})
function cleargrid(){
    const container = document.querySelector("div")
    container.innerHTML = ""
    var theInput = document.getElementById("color-picker");
    theInput.value = "#ffffff"
}
function create_grid(row,column){
    //let row;
    //let column;
    for (let x =0;x<row;x++){
        const container = document.querySelector("div")
        const div = document.createElement("div")
        container.appendChild(div)
        div.style.display = "flex"
        div.style.flex = "1"
        div.style.width ="100%"
        for (let y = 0;y<column;y++){
            var div1 = document.createElement("div")
            div.appendChild(div1)
            div1.style.display = "flex"
            div1.style.flex = "1"
            div1.className =("tile")
            div1.style.backgroundColor ="white"
        }
    
    }
    var theInput = document.getElementById("color-picker");
    theInput.addEventListener("input", function(){
        var theColor = theInput.value;
        var div1 = document.getElementsByClassName("tile")
        array = div1
        let length = array.length;
        console.log(length)
        for (let i = 0;i<length;i++)
            array[i].addEventListener("mouseover", function (){
                array[i].style.backgroundColor = theColor
        })
        for (let i = 0;i<length;i++)
            array[i].addEventListener("mouseover", function (){
                array[i].style.backgroundColor = theColor
        })
    });
}
