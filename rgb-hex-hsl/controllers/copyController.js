export const copyText=async (e)=>{
    if(e.target.tagName!=="BUTTON") return;

    const className=e.target.parentNode.className;

    try {
        const text=document.querySelector(`.${className}`).children[0].textContent;
        if (navigator.clipboard) {
            await navigator.clipboard.writeText(text);
            alert("Success!");
        } else {
            const input = document.createElement('textarea');
            input.value = text;
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
            alert("text copied");
        }
    } catch (error) {
        alert(error.message);
    }
}