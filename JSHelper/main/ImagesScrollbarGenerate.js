

const ImagesScrollbarGenerate = {
    
    GenerateImagesWithTitleHorizontalAlign: function
    (title, images, idToAddTo, barId)
    { 
        //create bar
        //with title, and horizontalBar below

        //barVertical

        //class="container"
        let scrollbarId = "scrollH" + barId;
        document.getElementById(idToAddTo).innerHTML += `
            <div class="container">
                <div class="barVerticalCentered">
                    <!-- title -->
                    <p class="title">${title}</p>
                    <div class="scrollboxHorizontal" id="${scrollbarId}">
                    
                        <!-- Overlay für bilder -->
                    </div>
                </div>
            </div>
        `;

        //add images to bar
        for (let i = 0; i < images.length; i++) {
            let imagePath = images[i];
            let overlayIndex = i;
            
            let overlayId = scrollbarId + "ImageId" + overlayIndex;
            document.getElementById(scrollbarId).innerHTML += `
                <div class="overlayImage" id="${overlayId}"></div>
            `;
            //set image 
            const overlay = document.getElementById(overlayId);
            overlay.style.backgroundImage = `url('${imagePath}')`;
            overlay.style.flexShrink = 0; //nicht schrumpfen die bilder
        }
    }




};




