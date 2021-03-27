document.querySelector('#todos').addEventListener('click',traerDatos());

function traerDatos(){

    console.log('dentro de la funcion');
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','portafolio.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            let datos = JSON.parse(this.responseText);
            console.log(datos);

            let res = document.querySelector('#portafolio');
            res.innerHTML = '';
            for(let index of datos){
                console.log(index)

                res.innerHTML += `<div>
                <div class="one">
                    <div class="branding">
                        ${index.img1}
                        
                    </div>
                    
                </div>

                <div class="two">
                    two  ${index.img2}
                </div>
                <div class="three">Three
                 ${index.img3}
                </div>
            </div>
            <div>
            <div class="four">
                    <div class="web">
                     ${index.img4}
                    </div>
                </div>
                <div class="five">Five
                    ${index.img5}
                </div>
                <div class="six">Six
                ${index.img6}
                </div>
            </div>

             <div>   
                <div class="seven">
                    <div class="photography">
                        < ${index.img7}
                    </div>
                </div>
                <div class="eight">eight
                  ${index.img8}
                </div>
                <div class="nine">nine
                 ${index.img9}
                </div>
                <div class="ten">ten
                ${index.img1}
                </div>
             </div>
    </div>`
                
            }
        }
    }


}