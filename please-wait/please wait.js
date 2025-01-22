const container=document.querySelector(".container");

const colors=["#90ee90","#ff7f50","#20b2aa","#ffc0cb","#1e90ff"];

let angle=0;

for(let i=0;i<=4;i++){
    const childContainer=document.createElement("div");
    childContainer.className="child-container";
    childContainer.style.transform=`rotate(${angle}deg)`;
    childContainer.style.transformOrigin="center";

    const circle=document.createElement("div");
    circle.className="Circle";
    circle.style.boxShadow=`0 0 10px ${colors[i]}`;
    circle.style.backgroundColor=colors[i];

    childContainer.appendChild(circle);

    container.appendChild(childContainer);

    angle+=72;
}