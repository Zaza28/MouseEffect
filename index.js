//1. Créer 3 ronds de tailles différentes
// (dont un qui remplacera la souris):

const mouseCircle = () => {
    const circle1 = document.createElement("span");
    circle1.classList.add("circle1");
    document.body.appendChild(circle1);

    const circle2 = document.createElement("span");
    circle2.classList.add("circle2");
    document.body.appendChild(circle2);

    const circle3 = document.createElement("span");
    circle3.classList.add("circle3");
    document.body.appendChild(circle3);

    //2. Ajouter un événement sur la fenetre (window) puis animer la position
    // de ces ronds (top, left injecter "e") :
    document.addEventListener("mousemove", (e) => {
        circle1.style.left = e.pageX + "px";
        circle1.style.top = e.pageY + "px";

        circle2.style.left = e.pageX + "px";
        circle2.style.top = e.pageY + "px";

        circle3.style.left = e.pageX + "px";
        circle3.style.top = e.pageY + "px";
    });
    //3. S'assurer que les liens sont clickables:
    //4. Donner un style de transparence aux 2 plus gros ronds
    // (mix-blend-mode):ok
};
mouseCircle();

// //correction de l'exo: les span sont créer en html ensuite appeler en JS:
// const mouses = document.querySelectorAll(".mouse");
// window.addEventListener("mousemove", (e) => {
//     mouses.forEach((mouse) => {
//         mouse.style.top = e.y + "px";
//         mouse.style.left = e.x + "px";
//     });
// });
