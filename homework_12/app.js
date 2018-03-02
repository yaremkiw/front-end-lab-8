// Your code goes here
let root = document.getElementById("root");

function createBlocks (el){
   
let container = document.createElement("div");
    root.appendChild(container);
  
let header = document.createElement("header");
    header.innerHTML = "<h1>Most popular tanks</h1>";
    container.appendChild(header);

let main = document.createElement("div");
    main.className = "main";
    container.appendChild(main);

  for (let i = 0; i < el.length; i++){
    let tanksBlock = document.createElement("div");
        tanksBlock.className = "tank";
        tanksBlock.addEventListener("click", function(){
            window.location.hash = el[i].model;
        });
        main.appendChild(tanksBlock);

    let mainImg = document.createElement("img");
        mainImg.src = el[i].preview;
        mainImg.title = "Click to details";
        tanksBlock.appendChild(mainImg);

    let bottom = document.createElement("div");
        bottom.className = "bottom";
        tanksBlock.appendChild(bottom);

    let imgFlag = document.createElement("img");
        imgFlag.src = el[i].country_image;
        imgFlag.className = "flag";
        imgFlag.title = el[i].country;
        bottom.appendChild(imgFlag);

    let level = document.createElement("p");    
        level.innerHTML = el[i].level + "<span>" + el[i].model +"</span>";
        level.title = el[i].model;
        bottom.appendChild(level); 
    }   
  }

function createDatails() {
    root.removeChild(root.firstChild);
    let tank = find(tanks);
        function find (el){
                for (let i = 0; i < el.length; i++) {
                if("#"+el[i].model === window.location.hash){
                    return el[i];
                }  
            } 
        }

    let container = document.createElement("div");
        root.appendChild(container);
      
    let headerDetails = document.createElement("header");
        headerDetails.className = "header-detalis";
        container.appendChild(headerDetails);

    let flagDetails = document.createElement("img");
        flagDetails.src = tank.country_image;
        flagDetails.className = "flag-details";
        flagDetails.title = tank.country;
        headerDetails.appendChild(flagDetails);

    let h1Details = document.createElement("h1");
        h1Details.className = "h1-details";
        h1Details.innerText = tank.model;
        headerDetails.appendChild(h1Details);
        
    let spanDetails = document.createElement("span");
        spanDetails.className = "span-details";
        spanDetails.innerHTML = "(level "+tank.level+")";         
        h1Details.appendChild(spanDetails);

    let mainDetails = document.createElement("div");
        mainDetails.className = "main-detalis";
        container.appendChild(mainDetails);

    let imgDetails = document.createElement("div"); 
        imgDetails.className = "left";
        imgDetails.innerHTML = "<h2>Preview</h2>";
        mainDetails.appendChild(imgDetails);

    let detailsImg = document.createElement("img");
        detailsImg.src = tank.preview;                       
        imgDetails.appendChild(detailsImg);

    let tabDetails = document.createElement("div");
        tabDetails.className = "right";
        tabDetails.innerHTML = "<h2>Characteristic</h2>";
        mainDetails.appendChild(tabDetails);

    let table = document.createElement("table");
     
        for (key in tank.details){
            let tr = document.createElement('tr');
            let tdKey = document.createElement('td');
                tdKey.className = "col1";
                tdKey.innerHTML = key.replace(/_/g, ' ');
            let tdVal = document.createElement('td');
                tdVal.className = "col2";
                tdVal.innerHTML = tank.details[key];
            tr.appendChild(tdKey);
            tr.appendChild(tdVal);
            table.appendChild(tr);
        } 
        tabDetails.appendChild(table);  
        mainDetails.appendChild(tabDetails);

    let btn = document.createElement("button");
        btn.innerHTML = "Back to list view";
        btn.addEventListener("click", function(){
            window.location.hash = ' ';
        });
        container.appendChild(btn);      
}

window.addEventListener('hashchange',choice);
window.onload = choice;

function choice() {
        if(window.location.hash === ''){
            root.removeChild(root.firstChild);
            createBlocks(tanks);
        }else{
            createDatails()
        }   
}

createBlocks(tanks);