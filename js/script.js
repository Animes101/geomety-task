let calculate=document.getElementById('calculate');

//Triangle Calculation
const triangleButton=document.getElementById('triangle-button');

triangleButton.addEventListener('click',function(){
    const triangleBase=document.getElementById('base-triangle');
    const triangleHeight=document.getElementById('triangleHeight');

    if(triangleBase.value === '' && triangleHeight.value === ''){
        alert('fill your input number');
    }

    const base=parseFloat(triangleBase.value);
    const height=parseFloat(triangleHeight.value);

    const area=0.5*base*height;
    calculate.innerText=`Triangle Area=${area}`
    setTimeout(()=>{
        calculate.innerText='';
    },3000)


    triangleBase.value='';
    triangleHeight.value='';

})

//Rectangle Area

const rectangle=document.getElementById('rectangle-button')
rectangle.addEventListener('click',function(){
    const recLength=document.getElementById('rec-length');
    const recHeight=document.getElementById('rec-height');

    if(recLength.value === '' && recHeight.value === ''){
        alert('fill your input number');
    }

    const length=parseFloat(recLength.value);
    const height=parseFloat(recHeight.value);

    const area=length*height;
    calculate.innerText=`Rectangle Area=${area}`
    setTimeout(()=>{
        calculate.innerText='';
    },3000)


    recLength.value='';
    recHeight.value='';

})

//Rectangle Area

const parallelogram=document.getElementById('parallelogram-button')
parallelogram.addEventListener('click',function(){
    const paraBase=document.getElementById('para-base');
    const paraHeight=document.getElementById('para-height');

    if(paraBase.value === '' && paraHeight.value === ''){
        alert('fill your input number');
    }

    const base=parseFloat(paraBase.value);
    const height=parseFloat(paraHeight.value);

    const area=base*height;
    calculate.innerText=`Parallelogram Area=${area}`
    setTimeout(()=>{
        calculate.innerText='';
    },3000)


    paraBase.value='';
    paraHeight.value='';

})
