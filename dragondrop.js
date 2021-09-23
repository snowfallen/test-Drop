const items = document.querySelectorAll('.item'),
    placeholders = document.querySelectorAll('.placeholder');

console.log(items.length);

let = indexAS = 0;

items.forEach((i,j)=>{
    i.addEventListener('dragstart',function () {
    indexAS=j;
    activeItems(indexAS);
    });
    console.log(j);
});
const activeItems = kaka =>{
    for(const item of items){
    
    }
    items[kaka].addEventListener('dragstart',dragstart);
    items[kaka].addEventListener('dragend',dragend);
    function startup() {
        items[kaka].addEventListener("touchstart", handleStart);
        items[kaka].addEventListener("touchend", handleEnd);
        items[kaka].addEventListener("touchcancel", handleCancel);
        items[kaka].addEventListener("touchmove", handleMove);
      }
      
      document.addEventListener("DOMContentLoaded", startup);

}

for (const placeholder of placeholders){   
    placeholder.addEventListener('dragenter',dragenter);
    placeholder.addEventListener('dragover',dragover);
    placeholder.addEventListener('dragleave',dragleave);
    placeholder.addEventListener('drop',dragdrop);
}

function dragstart(event) {
    console.log('drag start');
    event.target.classList.add('hold');
    setTimeout(()=>  event.target.classList.add('hide'),0);
}

function dragend(event) {
    console.log('drag end');
    event.target.classList.remove('hold','hide');
}

function dragover(event) {
    event.preventDefault()
    console.log('over');
}

function dragenter(event) {
    event.target.classList.add('hovered')
    console.log('enter');
}

function dragleave(event) {
    event.target.classList.remove('hovered');
    console.log('leave');
}
function dragdrop(event) {
    event.target.append(items[indexAS]);

}
