// let img = document.querySelector("img");

// document.addEventListener("keydown", function(event) {
//     if (event.key === 'w') {
//         img.style.transform += 'translateY(-20px)';
//         img.style.transition = '0.5s';
//     }
//     else if (event.key === 's') {
//         img.style.transform += 'translateY(20px)';
//         img.style.transition = '0.5s';
//     }
//     else if (event.key === 'a') {
         
//         img.style.transform += 'translateX(-20px)';
//         img.style.transition = '0.5s';
//     }
//     else if (event.key === 'd') {
//         img.style.transform += 'translateX(20px)';
//         img.style.transition = '0.5s';
//     }
// })


const spanSelectors = [
    ".wrapper .span1",
    ".wrapper .span2",
    ".wrapper .span3",
    ".wrapper .span4",
    ".wrapper .span5",
    ".wrapper .span6",
];

const toggleClasses = [
    "active",
    "active",
    "active1",
    "active1",
    "active2",
    "active2",
];

for (let i = 0; i < spanSelectors.length; i++) {
    const element = document.querySelector(spanSelectors[i]);
    if (element) {
        element.addEventListener('click', () => {
            element.classList.toggle(toggleClasses[i]);
        });
    }
}













