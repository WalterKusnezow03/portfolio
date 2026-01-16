

//click trough stack of images
const ImageStackGenerate = {
    

    imageStacks: {}, // payload pro overlayId

    GenerateImageStackWithTitleAndSkills: function
        (title, text, imagePaths, idToAddTo, stackId, linkedPageMore, skills)
    {
        this.GenerateImageStackWithTitle(title, text, imagePaths, idToAddTo, stackId, linkedPageMore);

        let skillOuterId = "text" + stackId;
        let skillBarId = skillOuterId + "skillbar";
        window.SkillBarGenerate.GeneateSkillBarFrom(skills, skillOuterId, skillBarId);
    },


        





    GenerateImageStackWithTitle: function(title, text, imagePaths, idToAddTo, stackId, linkedPageMore) {
        let stackIdElement = "stackId" + stackId;
        let textId = "text" + stackId;
        let overlayId = textId + "overlay";

        // speichere images & index in der Payload
        this.imageStacks[overlayId] = {
            images: imagePaths,
            index: 0
        };

        // HTML generieren
        document.getElementById(idToAddTo).innerHTML += `
            <div class="container" id="${stackIdElement}">
                <div class="image-wrapper">
                    <div id="${overlayId}" class="overlay"></div>
                    <div class="buttonStyle left" onclick="ImageStackGenerate.InternalShowImage('-', '${overlayId}')">&lt;</div>
                    <div class="buttonStyle right" onclick="ImageStackGenerate.InternalShowImage('+', '${overlayId}')">&gt;</div>
                </div>

                <div class="text" id="${textId}">
                    <h3>${title}</h3>
                    <p>${text}</p>
                </div>
                <div>
                    <a href="${linkedPageMore}">More &gt;</a>
                </div>
            </div>
        `;

        // Bild initial anzeigen
        this.InternalShowImage('+', overlayId);
        this.InternalShowImage('-', overlayId);
    },

    InternalShowImage: function(direction, overlayId) {
        const stack = this.imageStacks[overlayId];
        if (!stack) return;

        if (direction === '+') stack.index++;
        else stack.index--;

        if (stack.index < 0) stack.index = stack.images.length - 1;
        if (stack.index >= stack.images.length) stack.index = 0;

        this.InternalUpdateImage(overlayId, stack.images[stack.index]);
    },

    InternalUpdateImage: function(overlayId, image) {
        const overlay = document.getElementById(overlayId);
        overlay.style.backgroundImage = `url('${image}')`;
    }
};

