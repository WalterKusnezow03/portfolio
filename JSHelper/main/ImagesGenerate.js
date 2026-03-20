

const ImagesGenerate = {
    GetViewPortSizeMin: function () {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;  
        const minViewport = Math.min(viewportWidth, viewportHeight);
        return minViewport;
    },


    //generate image with title script
    //put tuples with: [title, imagePath]
    GenerateImagesWithTitle: function
        (data, idToAddTo) {
        for (let i = 0; i < data.length; i++) {
            let title = data[i][0];
            let imagePath = data[i][1];
            let overlayIndex = i;
            let type = data[i][2];
            this.GenerateImageWithTitle(imagePath, title, idToAddTo, overlayIndex, type)
        }
        console.log("ImagesGeneratePrint");
    },
    GenerateImageWithTitle: function
    (imagePath, title, idToAddTo, overlayIndex, type) {
        let overlayId = "ImageId" + overlayIndex;
        
        let typeOverlaybase = "overlayImage";
        let typeOverlay = "overlayImage" + type;
        
        document.getElementById(idToAddTo).innerHTML += `
        
        <div>
            <!-- title -->
            <p class="title">${title}</p>
            <!-- Overlay für bilder -->
            <div class="${typeOverlaybase} ${typeOverlay}" id="${overlayId}"></div>
        </div>
        
        `;

        //<div class="overlayImage" id="${overlayId}"></div>

        //set image 
        const overlay = document.getElementById(overlayId);
        overlay.style.backgroundImage = `url('${imagePath}')`;
        //overlay.style.backgroundImage = `url('${images[i]}')`;


        //set resoltuion
        if (type == "Auto") {
            const img = new Image();
            img.src = imagePath;

            img.onload = () => {
                const overlayUpdate = document.getElementById(overlayId);
                console.log("DEBUG_IMAGE overlay:", overlayUpdate);
                console.log("DEBUG_IMAGE Width:", img.naturalWidth);
                console.log("DEBUG_IMAGE Height:", img.naturalHeight);
                let x = img.naturalWidth;
                let y = img.naturalHeight;
                let maxCurrent = Math.max(x, y);
                let maxRes = ImagesGenerate.GetViewPortSizeMin() * 0.8;//800;
                console.log("DEBUG_IMAGE GetViewPortSizeMax:", maxRes);

                let scalar = maxRes / maxCurrent; //scalar = distTarget / distAll
                let xUpdate = x * scalar;
                let yUpdate = y * scalar;
                
                overlayUpdate.style.width = xUpdate + "px";
                overlayUpdate.style.height = yUpdate + "px";
                overlayUpdate.style.backgroundSize = "100%";
                

            };

        }


        


    },
    


    GenerateImagesWithTitleHorizontalAlign: function
    (title, images, idToAddTo, barId)
    { 
        //create bar
        //with title, and horizontalBar below

        //barVertical


        document.getElementById(idToAddTo).innerHTML += `
            <div class="container">
            <div class="barVertical">
                
                <!-- title -->
                <p class="title">${title}</p>
                

                <div class="barHorizontal" id="${barId}">
                    <!-- Overlay für bilder -->
                </div>
            </div>
            </div>
        `;

        //add images to bar
        for (let i = 0; i < images.length; i++) {
            let imagePath = images[i];
            let overlayIndex = i;
            
            let overlayId = barId + "ImageId" + overlayIndex;
            let innerId = overlayId + "";
            document.getElementById(barId).innerHTML += `
                <div class="overlayImage" id="${overlayId}"></div>
            `;
            //set image 
            const overlay = document.getElementById(overlayId);
            overlay.style.backgroundImage = `url('${imagePath}')`;
        }
    }




};




