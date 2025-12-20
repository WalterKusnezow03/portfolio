

const SkillListGenerate = {
    
    
    GeneateSkillListsFromCentered: function
    (skillCollection, idToAddTo, skillCollectionId) {
        
        let collectionId = "skillCollection" + skillCollectionId;
        document.getElementById(idToAddTo).innerHTML += `
        
            <div class="barHorizontal" id="${collectionId}">
            </div>
        
        `;
        const _overlay = document.getElementById(collectionId);
        _overlay.style.alignItems = 'left';
        _overlay.style.justifyContent= 'center'; /* Centers the items horizontally */


        for (let i = 0; i < skillCollection.length; i++){
            let name = skillCollection[i][0];
            let innerSkills = skillCollection[i][1];
            let skillBarId = collectionId + "skillbar" + i;

            this.GeneateSkillListFrom(name, innerSkills, collectionId, skillBarId);
        
        
            const overlay = document.getElementById(skillBarId);
            overlay.style.alignItems = 'left';
            overlay.style.justifyContent= 'left'; /* Centers the items horizontally */
        }        

    },


    GeneateSkillListFrom: function
        (name, skills, idToAddTo, skillBarId) {
        
        document.getElementById(idToAddTo).innerHTML += `
            <div class="barVertical" id="${skillBarId}">
            <h3>${name}</h3>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        `;

        for (let i = 0; i < skills.length; i++) {
            let name = skills[i];
            this.AddSkillTo(name, skillBarId);
        }
        
    },

    AddSkillTo: function
        (skill, idtoaddto) {
        document.getElementById(idtoaddto).innerHTML += `
            <div class="skillbutton">${skill}</div>
        `;
    }




};

// Exportiere das ganze Objekt
window.SkillListGenerate = SkillListGenerate;