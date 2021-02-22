// console.log('hello')
const typeOptions = document.getElementById('type');
const input = document.getElementById('inputText');
const btn = document.querySelector('.create');
const resultDiv = document.querySelector('.result');

btn.addEventListener('click',()=>{
    if(input.value === ""){
        alert('Please enter something in the text box!!')
        return
    }
    let markup;
    if(typeOptions.value.includes('h1')){
        markup=`
            <h1>${input.value}</h1>
        `
    } else if(typeOptions.value.includes('p')){
        markup=`
            <p>${input.value}</p>
        `
    } else{
        markup=`<img src="${input.value}" height="400" width="400">`
    }

    resultDiv.insertAdjacentHTML('beforeend',markup)
    input.value=""
})
