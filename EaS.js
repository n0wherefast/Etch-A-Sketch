const big = document.querySelector('.big');
const container = document.querySelector('.container');
const cleanBtn = document.querySelector('#clean');
const lowBtn = document.querySelector('#lowres');
const midBtn = document.querySelector('#midres');
const highBtn = document.querySelector('#highres');
const white = document.querySelector('#white');
const black = document.querySelector('#black');
const rainBow = document.querySelector('#rainbow');
const eraser = document.querySelector('#eraser');
let size ="";
const cont = 640;
let colo = '';

lowBtn.addEventListener('click' , () =>{
    container.innerHTML="";
    grid(16) ;
    
    
}) ;
midBtn.addEventListener('click' , (e) =>{
    container.innerHTML="";
    grid(32);
});

highBtn.addEventListener('click' , (e) =>{
    container.innerHTML ="";  
    grid(64)  ;
})
white.addEventListener('click',() => {
    container.addEventListener('mouseover',()=>{
         colo ='white';
  
      })
 
});

eraser.addEventListener('click',()=>{
    container.addEventListener('mouseover',()=>{
        colo ='rgb(179, 176, 176';
    
      })
    
});


black.addEventListener('click',()=>{
    container.addEventListener('mouseover',()=>{
        colo ='black';
    
      })
    
});


rainBow.addEventListener('click',()=>{
    container.addEventListener('mouseover',()=>{
      colo = rgb()
    
    })
    

});

function rgb(){

    let r =Math.random()*256;
    let g =Math.random()*256;
    let b =Math.random()*256;
    colo = `rgb(${r}, ${g} ,${b} )`; 
    return colo;
}




function grid(size,){ 

  let value = cont / size;

  for(i=0;i<size*size;i++){
     
    const pixel =  document.createElement('grid');
    container.appendChild(pixel);
    pixel.style.display ='flex';
    pixel.style.backgroundColor='rgb(179, 176, 176';
    pixel.style.height= `${value}px`;
    pixel.style.width= `${value}px`;

    

           pixel.addEventListener('mouseover',(e)=>{
           
           e.target.style.backgroundColor= `${colo}`
    });

    cleanBtn.addEventListener('click',()=>{ 

             pixel.style.display='none';
    });

  };
};
    
  
  
  