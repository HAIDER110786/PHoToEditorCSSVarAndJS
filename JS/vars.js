const inputList = document.querySelectorAll('input');

inputList.forEach(input=>{
    input.addEventListener('change',updateTheImage);
    input.addEventListener('mousemove',updateTheImage);
})

function updateTheImage(){
    const suffix = this.dataset.suffix || '';
    document.documentElement.style.setProperty(`--${this.name}`,`${this.value}${suffix}`);
}