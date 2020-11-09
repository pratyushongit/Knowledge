document.addEventListener('DOMContentLoaded',()=>{
    var element;

    element = document.getElementById('content').parentNode;
    element = document.getElementById('content').parentElement;
    element = document.getElementById('content').childNodes;
    element = document.getElementById('content').children;
    element = document.getElementById('content').hasChildNodes();
    element = document.getElementById('content').nextElementSibling;
    element = document.getElementById('content').nextSibling;
    element = document.getElementById('content').previousElementSibling;
    element = document.getElementById('content').previousSibling;
    element = document.querySelector('.list').firstChild;
    element = document.querySelector('.list').lastChild;
   
    
    // document.getElementById('content').querySelector('ul').innerHTML = '</br> This is a break!'
    
    
    
    Array.from(document.querySelectorAll('.button')).forEach((el)=>{
        el.addEventListener('click',(e)=>{
            e.preventDefault();
            let parent = e.target.closest('li');
            console.log(parent);
            parent.parentNode.removeChild(parent);
        })
    });
    
    
    // Forms
    
    element = document.forms;
    element = document.forms[0];
    element = document.forms['form-delete'];
    element = document.forms.myform;
    
    
    document.querySelector('#form-add').addEventListener('submit',(e)=>{
        e.preventDefault();
        let value = document.querySelector('#form-add').querySelector('input[type="text"]').value;
        let markup = `<li>${value}</li>`;
        document.querySelector('.list').insertAdjacentHTML('beforeend',markup);
        document.querySelector('input').value = "";
    });
    
    // Create Elements
    
    const li = document.createElement('li');
    const span = document.createElement('span');
    
    li.appendChild(span);
    
    // Add Classes
    
    li.className = "test";
    li.classList.add('test');
    li.classList.remove('test');
    
    // Change Attributes
    
    element = document.querySelector('.list:first-child .button');
    // element = element.getAttribute('class');
    // element.setAttribute('class','test1 test2');
    // element = element.hasAttribute('class');
    element.removeAttribute('class');

    console.log(element);
    

    // Select Tag
    document.querySelector('select').addEventListener('change',(e)=>{
        console.log(e.target.value);
    })
    
});

