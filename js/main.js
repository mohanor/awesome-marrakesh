const more = document.getElementById('more');
const btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    if( more.style.display == "block" )
    {
        more.style.display = "none";
    }else{
        more.style.display = "block";
    }
});