const container = document.querySelector('.container');
const cleanBtn = document.querySelector('#clean');
const lowBtn = document.querySelector('#lowres')
const midBtn = document.querySelector('#midres')
const highBtn = document.querySelector('#highres')
const color = document.querySelector('#color')
const btnClick = document.querySelector('button')


cleanBtn.addEventListener('click',(e) =>{
    location.reload();
    
})

 lowBtn.addEventListener('click' , (e) =>{
    low()
    e.target.style.background='red'
})

midBtn.addEventListener('click' , (e) =>{
    mid()
    e.target.style.background='red'
})

highBtn.addEventListener('click' , (e) =>{
    high()
    e.target.style.background='red' 
})

color.addEventListener('click',() => {
  grid.setAttribute('class','gridWhiteLow1')
})





function low(){
for(i=0;i<256;i++){
   const grid =  document.createElement('grid')
   container.appendChild(grid)
   grid.setAttribute('class','gridLow')
   grid.addEventListener('mouseover', () =>{
grid.setAttribute('class','gridLow1' )
   }) 
}
}


function mid(){
    for(i=0;i<1024;i++){
       const grid =  document.createElement('grid')
       container.appendChild(grid)
       grid.setAttribute('class','gridMid')
       grid.addEventListener('mouseover', () =>{
           grid.setAttribute('class','gridMid1' )
       }) 
    }
    }

    function high(){
        for(i=0;i<4096;i++){
           const grid =  document.createElement('grid')
           container.appendChild(grid)
           grid.setAttribute('class','gridHigh')
           grid.addEventListener('mouseover', () =>{
               grid.setAttribute('class','gridHigh1' )
           }) 
        }
        }
        function reloadGrid(){
            location.reload()
            
        }
    