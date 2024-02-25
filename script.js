const slidervalue = document.getElementById('slidervalue');
const slider = document.getElementById('slider');
const container = document.getElementById('container');
const black = document.getElementById('default');
const rainbow = document.getElementById('rainbow');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');


slider.addEventListener('input', (e)=> {
    slidervalue.textContent = `${e.target.value} x ${e.target.value}`;
});

slider.addEventListener('change', (e)=>{
    generateBoard(e.target.value);
});


let mousedown = false;
window.addEventListener('mousedown', ()=> {
    mousedown = true;
});

window.addEventListener('mouseup', ()=>
{
    mousedown = false;
});

let color = 'default';
black.addEventListener('click',()=> color = 'default');
rainbow.addEventListener('click', ()=> color = 'rainbow');
eraser.addEventListener('click', ()=> color = 'white');
clear.addEventListener('click',()=> container.replaceChildren());


generateBoard(16);

function generateBoard(size)
{
    container.replaceChildren();

    for(let i = 1; i <= size; i++)
    {
        const row = document.createElement('div');
        row.classList.add('row');

            for(let i = 1; i <= size; i++)
            {
                const cell = document.createElement('div');
                cell.classList.add('cell');

                    cell.addEventListener('mouseover', (e) =>{
                        if(mousedown === true && color === 'default')
                        {                           
                            e.target.style['background-color'] = 'black';
                        }                          
                        else if (mousedown === true && color ==='rainbow')
                        {
                            const red = Math.floor(Math.random() * 256);
                            const green = Math.floor(Math.random() * 256);
                            const blue = Math.floor(Math.random() * 256);
                            e.target.style['background-color'] = `rgb(${red}, ${green}, ${blue})` ;
                        }  
                        else if (mousedown === true && color ==='white')
                        {
                            e.target.style['background-color'] = 'white';
                        }           
                    });

                row.appendChild(cell);
            }           
        container.appendChild(row);
    }
}

