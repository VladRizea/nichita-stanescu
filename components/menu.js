
var en='', home ="", life="", work="", critics="", createdby= "", video = "",quiz = "" ;
var ro='';

var menu = false;

var array = [];

if(window.location.pathname==="/pages/critica.html") critics = "active";
else if(window.location.pathname==="/pages/viata.html")life = "active";
else if(window.location.pathname==="/pages/opere.html")work = "active";
else if(window.location.pathname==="/index.html" || window.location.pathname==="/" ) home = "active";
else if(window.location.pathname==="/pages/video.html")video = "active";
else if(window.location.pathname==="/pages/quiz.html")quiz = "active";
 

function changeLangRO() {
    window.name ="RO";
    location.reload();
}
function changeLangEN() {
    window.name ="EN";
    location.reload();
}


const headerTemplate = document.createElement('template');

function openAndCloseMenu(){

    if(!menu){
    document.getElementById("left-menu-container").style.marginLeft = "0px"; 
    menu = true;
}
else{
    document.getElementById("left-menu-container").style.marginLeft = "-105vw"; 
    menu = false;
}


}

class Header extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    async connectedCallback() {

        await fetch('../data/interface.json')
        .then(response => response.json())
        .then(data => {array = data})
        .catch(error => console.log(error));
    
    
    if(window.name === "EN") 
    {
        en="active";
        ro="";

        array = array.EN
    
    }
    else {
        ro = "active";
        en="";
        array = array.RO
    }

    headerTemplate.innerHTML = `

    <style>
    .left-side{
        display: flex;
        flex-direction: column;
        justify-content: center   ;
        align-items: center;
        width: 400px;
        border-right: 6px black solid;
        margin:  0;
        position: fixed;
        height: 100vh;
        background-color:white;
    }
    .left-side-title{
        font-size: 35px;
        font-weight: bold;
    }
    .left-menu{
        display: flex;
        flex-direction: column;
        margin: 30px 0;
    }
    .menu-button{
        padding: 10px 100px;
        color: black;
        font-weight: bold;
        margin: 5px;
        text-align: center;
    }
    .inside-button{
        padding: 10px 20px;
        color: black;
        background-color: yellow;
        border: 4px yellow solid;
        font-weight: bold;
        margin: 10px;
        text-align: center;
    }
    
    .menu-button:hover{
        background-color: yellow    ;
        cursor: pointer;
    }
    .active{
        background-color: yellow    ;
    }
    
    .inside-button:hover{
        background-color: white;
        cursor: pointer;
    }
    
    a{
        text-decoration: none;
    }
    
    .footer{
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-content: flex-end;
        align-items: center;
        border-top: 6px black solid;
        width: 80%;
        text-align: center;
    }
    
    .language-buttons{
        display:flex;
        flex-direction:row;
        justify-content:center;
        width: 100%;
    }
    .individual-language-button:hover{
        cursor:pointer;
    }
    
    .individual-language-button{
        border: 3px yellow solid;
        color: black;
        height: 80px;
        width: 80px;
        margin: 2px 2px 20px 2px;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content:center;
        font-size: 25px;
    }

    @media (max-width: 800px) {

        .left-side{
            display: flex;
            flex-direction: column;
            justify-content: center   ;
            align-items: center;
            width: 100vw;
            border-right: 6px black solid;
            position: fixed;
            height: 100vh;
            background-color:white;
        }

    }     
        
    
    </style>
    
    <div class="menu-collapse" onclick="openAndCloseMenu()" id="menu-collapse" ></div>


    <div class="left-side" >
    <h1 class="left-side-title">Nichita Stănescu</h1>
    <div class="left-menu">
        <a href="../index.html"><div class="menu-button ${home}">${array.home}</div></a>
        <a href="../pages/viata.html"><div  id="viata-menu-button" class="menu-button ${life}">${array.life}</div></a>
        <a href="../pages/opere.html"><div class="menu-button ${work}">${array.work}</div></a>
        <a href="../pages/critica.html"><div class="menu-button ${critics}">${array.critics}</div></a>
        <a href="../pages/video.html"><div class="menu-button ${video}">Video</div></a>
        <a href="../pages/quiz.html"><div class="menu-button ${quiz}">Quiz</div></a>
    </div>
    <div class="footer">
    <div class="language-buttons">
        <div id="button-RO" onclick="changeLangRO()" class="individual-language-button ${ro}">
            RO
        </div>
        <div id="button-EN" onclick="changeLangEN()" class="individual-language-button ${en}">
            EN
        </div>
    </div>
        2021 <br/>
        ${array.createdby}
    </div>
    </div>
    
    `

        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}



customElements.define('menu-component', Header);
