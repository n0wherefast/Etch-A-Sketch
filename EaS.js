const big = document.querySelector('.big')
const container = document.querySelector('.container');
const cleanBtn = document.querySelector('#clean');
const lowBtn = document.querySelector('#lowres')
const midBtn = document.querySelector('#midres')
const highBtn = document.querySelector('#highres')
const color = document.querySelector('#color')


lowBtn.addEventListener('click' , () =>{
    container.innerHTML ="";  
    theGrid(16) 
    
}) 
midBtn.addEventListener('click' , (e) =>{
    container.innerHTML =""; 

    theGrid(32,)    
    e.target.style.background='red'
})

highBtn.addEventListener('click' , (e) =>{
    container.innerHTML ="";  
    theGrid(64)
    e.target.style.background='red' 
})

color.addEventListener('click',() => {
 theGrid(32,1)
})




function theGrid(size,color){
    
  for(i=0;i<size*size;i++){

    const pixel =  document.createElement('grid');
    container.appendChild(pixel);
    
     if(size===16){
        
      pixel.setAttribute('class','gridLow');

      pixel.addEventListener('mousemove', () =>{

           if(color===1){
            pixel.setAttribute('class','gridWhitelow1' ) 
           }else{pixel.setAttribute('class','gridLow1' )}
             
        })
        cleanBtn.addEventListener('click',(e) =>{
        pixel.setAttribute('class','clean')
         e.target.style.background='red'
                 }) 
                    
                
                   
     }else if(size===32){

        pixel.setAttribute('class','gridMid')

        pixel.addEventListener('mouseover', () =>{

            if(color===1){
            pixel.setAttribute('class','gridWhiteMid1' ) 
            }else{pixel.setAttribute('class','gridMid1' )}
        }) 

        cleanBtn.addEventListener('click',(e) =>{
        pixel.setAttribute('class','clean')
        e.target.style.background='red'
            }) 
        
     }else if(size===64){

        pixel.setAttribute('class','gridHigh')
        pixel.addEventListener('mouseover', () =>{
        pixel.setAttribute('class','gridHigh1' )
       }) 
       cleanBtn.addEventListener('click',(e) =>{
       pixel.setAttribute('class','clean')
       e.target.style.background='red'
        }) 
     }
  }
}

/*
function theGridWhite(size){
    
    for(i=0;i<size*size;i++){
  
      const pixel =  document.createElement('grid')
      container.appendChild(pixel)
      
       if(size===16)
          
          pixel.setAttribute('class','gridLow')

          pixel.addEventListener('mouseover', () =>{

             pixel.setAttribute('class','gridWhitelow1' )
          }) 
                cleanBtn.addEventListener('click',(e) =>{
                     
                   pixel.setAttribute('class','clean')
                    e.target.style.background='red'
                 })

        }else if(size===32){
  
          pixel.setAttribute('class','gridMid')
          pixel.addEventListener('mouseover', () =>{
          pixel.setAttribute('class','gridMid1' )
          }) 
       }else if(size===64){
  
          pixel.setAttribute('class','gridHigh')
          pixel.addEventListener('mouseover', () =>{
          pixel.setAttribute('class','gridHigh1' )
         }) 
       }*/
    
  
  
  