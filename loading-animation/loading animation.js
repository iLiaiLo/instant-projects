const balls=document.querySelector(".balls");

for(let i=1;i<=11;i++){
    const parent=document.createElement("div");
    parent.className="container-ball";

    const child=document.createElement("div");
    child.className="ball";
    child.style.animationDelay=`${(i+1)/10}s`;

    parent.appendChild(child);
    balls.appendChild(parent);
}