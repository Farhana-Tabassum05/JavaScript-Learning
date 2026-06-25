let parent = document.querySelector('.parent');

function createToster(configuration){
    return (message, duration) => {
        let div = document.createElement('div');
        div.textContent = message;
        div.className = ` toster pointer-events-none transition-opacity  p-2 rounded border ${configuration.theme=== "light" ? "bg-100 text-grey" : "bg-black text-white"}  ${configuration.positionX === "top" ? "top-5" : "bottom-5"} ${configuration.positionY === "left" ? "left-5" : "right-2"}`;
        div.style.border = `2px solid ${configuration.theme === "black" ? "#afea51" : "#ff07c1"}`;
        setTimeout(()=>{
            div.style.border = `1px solid ${configuration.theme === "black" ? "white" : "black"}`
        }, (duration/2) * 1000);

        setTimeout(() => {
            div.remove();
        }, duration * 1000);
        
        parent.classList.add(`flex`, `items-start`, `gap-2`, `flex-col`);
        parent.classList.add(configuration.positionX === "top" ? "top-5" : "bottom-5", configuration.positionY === "left" ? "left-5" : "right-2");
        parent.appendChild(div);
    }
}

toster = createToster({
    positionX: "bottom",
    positionY: "right",
    theme: "light",
});

toster("hi", 3);
setTimeout(() => {
    toster("This is a dummy notification", 3);
}, 1000);
setTimeout(() => {
    toster("Hope you like it", 3);
}, 2000);
