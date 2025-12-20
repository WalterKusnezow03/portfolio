

const ImagesGenerate = {
    //generate image with title script
    //put tuples with: [title, imagePath]
    GenerateImagesWithTitle: function
        (data, idToAddTo) {
        for (let i = 0; i < data.length; i++) {
            let title = data[i][0];
            let imagePath = data[i][1];
            let overlayIndex = i;
            this.GenerateImageWithTitle(imagePath, title, idToAddTo, overlayIndex)
        }
        console.log("ImagesGeneratePrint");
    },
    GenerateImageWithTitle: function
    (imagePath, title, idToAddTo, overlayIndex) {
            let overlayId = "ImageId" + overlayIndex;

            document.getElementById(idToAddTo).innerHTML += `
            
            <div>
                <!-- title -->
                <p class="title">${title}</p>
                <!-- Overlay für bilder -->
                <div class="overlayImage" id="${overlayId}"></div>
            </div>
            
        `;

        //set image 
        const overlay = document.getElementById(overlayId);
        overlay.style.backgroundImage = `url('${imagePath}')`;
        //overlay.style.backgroundImage = `url('${images[i]}')`;
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




