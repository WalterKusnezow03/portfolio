// generate link bar script

let data = [
    ["Youtube", "https://www.youtube.com/@WalterKusnezow1"], // Name of item, Link
    ["GitHub", "https://github.com/WalterKusnezow03/"],
    ["LinkedIn","https://www.linkedin.com/in/walter-kusnezow-b23620337"]
];

let namingBlockId = "Naming";
let navBarId = "navbar";


//generates the top link bar!
function genaerateLinkBar() {
    
    createNamingIfNeeded();
    createNavBarIfNeeded();
    for (let i = 0; i < data.length; i++){
        let linkToPut = data[i][1];
        let nameToShow = data[i][0];
        
        document.getElementById(navBarId).innerHTML += `       
            <div>
                <!-- link -->
                <a href="${linkToPut}" target="_blank" rel="noopener noreferrer">${nameToShow}</a>
            </div>
            
        `;


        //set background color on hover
    }
}

//creates naming at top if element not found "Naming"
function createNamingIfNeeded() {
    if (!document.getElementById(namingBlockId)) {
        //creates at top:
        //<h1 id="Naming">Walter Kusnezow: Portfolio</h1>

        let nameBlock = document.createElement("h1");
        nameBlock.id = "Naming";
        nameBlock.innerHTML = `
            Walter Kusnezow: Portfolio
        `;
        document.body.prepend(nameBlock);
    }
}




//creates the nav bar below portfolio title if needed
function createNavBarIfNeeded() {
    if (!document.getElementById(navBarId)) {
        let nav = document.createElement("div");
        nav.className = "navbar";
        nav.id = navBarId;
        nav.innerHTML = `
            <!--navbar links-->
        `;

        const namingElement = document.getElementById(namingBlockId);
        // Hänge die Navbar **nach** namingElement
        namingElement.insertAdjacentElement('afterend', nav);
    } else {
        //create seperator
        document.getElementById(navBarId).innerHTML += `       
            <div><p class="seperator">|</p></div>
        `;
    }
}


function main() {
    //execute!
    genaerateLinkBar();    
}


main(); //do not remove!