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

//Parallelogram Area

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

//Rhombus Area

const rhombus=document.getElementById('rhombus-button')
rhombus.addEventListener('click',function(){
    const diagonal1=document.getElementById('diagonal-1');
    const diagonal2=document.getElementById('diagonal-2');

    if(diagonal1.value === '' && diagonal2.value === ''){
        alert('fill your input number');
    }

    const d1=parseFloat(diagonal1.value);
    const d2=parseFloat(diagonal2.value);

    const area=(d1 * d2) /2;
    calculate.innerText=`Rhombus Area=${area}`
    setTimeout(()=>{
        calculate.innerText='';
    },3000)


    diagonal1.value='';
    diagonal2.value='';

})

//Pentagon Area

const pentagon=document.getElementById('pen-button')
pentagon.addEventListener('click',function(){
    const diagonal=document.getElementById('diagonal');
    const peramiter=document.getElementById('peramiter');

    if(diagonal.value === '' && peramiter.value === ''){
        alert('fill your input number');
    }

    const d1=parseFloat(diagonal.value);
    const d2=parseFloat(peramiter.value);

    const area=0.5 * d1 * d2;
    calculate.innerText=`Pentagon Area=${area}`
    setTimeout(()=>{
        calculate.innerText='';
    },3000)


    diagonal.value='';
    peramiter.value='';

})

//Ellipse Area

const ellipse=document.getElementById('ell-button')
ellipse.addEventListener('click',function(){
    const axis1=document.getElementById('axis-1');
    const axis2=document.getElementById('axis-2');

    if(axis1.value === '' && axis2.value === ''){
        alert('fill your input number');
    }

    const x1Flot=parseFloat(axis1.value);
    const x2Flot=parseFloat(axis1.value);

    const area=3.141 * x1Flot * x2Flot;
    calculate.innerText=`Ellipse Area=${area}`
    setTimeout(()=>{
        calculate.innerText='';
    },3000)


    axis1.value='';
    axis2.value='';

})
