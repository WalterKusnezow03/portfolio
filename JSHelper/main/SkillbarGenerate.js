

const SkillBarGenerate = {
    
    
    GeneateSkillBarFromCentered: function
    (skills, idToAddTo, skillBarId) {
        //align-items: center;     /* Ensures items are vertically centered */    
        this.GeneateSkillBarFrom(skills, idToAddTo, skillBarId);
        
        
        const overlay = document.getElementById(skillBarId);
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent= 'center'; /* Centers the items horizontally */
        

    },


    GeneateSkillBarFrom: function
        (skills, idToAddTo, skillBarId) {
        
        document.getElementById(idToAddTo).innerHTML += `
            
            <div class="barHorizontal" id="${skillBarId}">
            </div>
            
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
window.SkillBarGenerate = SkillBarGenerate;