

const ImageVideoContainerGenerate = {
    //generate image with title script
    //put tuples with: [title, imagePath]
    GenerateImageVideoContainer: function
        (data, idToAddTo) {
        for (let i = 0; i < data.length; i++) {
            let title = data[i][0];
            let imagePath = data[i][1];
            let textBlocks = data[i][2];
            let skills = data[i][3];
            let overlayIndex = i;
            let videoSubLink = "L2EdO0enGvI?enablejsapi=1";
            this.GenerateImageVideoContainerFrom(
                imagePath,
                title,
                idToAddTo,
                overlayIndex,
                videoSubLink,
                textBlocks,
                skills
            );
        }
        console.log("ImagesGeneratePrint");
    },

    GenerateImageVideoContainerFrom: function
    (
        imagePath,
        title,
        idToAddTo,
        overlayIndex,
        videoSubLink,
        textBlocks,
        skills
    ) {
        let containerId = "ContainerVideoImageId" + overlayIndex;
        let _skillBarId = "ContainerVideoImageIdSkillBar" + overlayIndex;
        let overlayId = "VideoImageId" + overlayIndex;
        let overlayIdYoutube = "VideoImageId_Youtbe" + overlayIndex;
        let textBoxId = "ContainerTextId" + overlayIndex;
        let link = "https://www.youtube.com/embed/" + videoSubLink; //"aTw4VbIOjms?enablejsapi=1";

        //TODO:Add Skills dynamic too!

        //---- BASE LAYOUT ----
        document.getElementById(idToAddTo).innerHTML += `
            
            <div class="container" id="${containerId}">
                <div class="video-wrapper">
                    <!-- Overlay zum Verdecken des Videos -->
                    <div id="${overlayId}" class="overlay"></div>

                    <!-- YouTube Video LINK TO BE REPLACED-->
                    
                    <iframe id="${overlayIdYoutube}"> 
                        src="${link}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                    </iframe>
                    
                </div>

                <div class="text" id="${textBoxId}">
                    <h3>${title}</h3>
                    


                    
                    <div class="barHorizontal" id="${_skillBarId}"></div>
                </div>
            </div>
            
        `;


        /// ---- STYLE ----

        //set image 
        const overlay = document.getElementById(overlayId);
        overlay.style.backgroundImage = `url('${imagePath}')`;
        overlay.style.backgroundPosition = "center";
        overlay.style.backgroundRepeat = "no-repeat";
        overlay.style.backgroundSize = "110%";

        overlay.style.transition = "background-size 1.0s ease, opacity 1.0s ease";
        overlay.style.opacity = "1.0";


        let isClicked = false;
        overlay.addEventListener("mouseenter", () => {
            console.log("ENTER");
            overlay.style.backgroundSize = "200%";
            overlay.style.opacity = "0.7";   
            
        });

        overlay.addEventListener("mouseleave", () => {
           
            overlay.style.backgroundSize = "100%";
            overlay.style.opacity = "1.0";
            
        });
        
        overlay.addEventListener("click", () => {
            isClicked = !isClicked;

            if (isClicked) {
                overlay.style.display = 'none';
            } else {
                overlay.style.display = ''; //reset
            }
        });


        



        

        //---- TEXT BLOCKS ---- (adding text blocks)
        for (let i = 0; i < textBlocks.length; i++) {
            let textcurrent = textBlocks[i];
            document.getElementById(textBoxId).innerHTML += `
                <p>${textcurrent}</p>    
            `;
        }

        //---- SKILLS ----
        for (let i = 0; i < skills.length; i++) {
            let skillCurrent = skills[i];
            document.getElementById(_skillBarId).innerHTML += `
                <div class="skillbutton">${skillCurrent}</div> 
            `;
        }








    }




};




