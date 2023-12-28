// let openPopup, closePopup, popup;

// $.getScript('universal.js', () => {
//     console.log("openPopup")
//     console.log("closePopup")
//     console.log("popup")   
//     console.log(openPopup)
//     console.log(closePopup)
//     console.log(popup)    
    
//     // Call the popup function after the script is loaded
//     initializePopup();
// });

const popup = () => {
    const openPopup = document.querySelectorAll("#cta");
    const closePopup = document.querySelector(".popup__close");
    const popup = document.querySelector(".popup");
    
    openPopup.forEach(button => {
        button.addEventListener("click", () => {
            popup.style.opacity = "1";
            popup.style.zIndex = "999";
            document.body.style.overflow = "hidden";
        });
    });
    
    closePopup.addEventListener("click", () => {
        popup.style.opacity = "0";
        popup.style.zIndex = "-1";
        document.body.style.overflow = "auto"; 
    });

};

export default popup;

