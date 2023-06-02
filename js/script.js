'use strict';
void function() {
    const form = document.querySelector('#form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        event.stopPropagation();

        const data = {};
        event.target.querySelectorAll('input, select, textarea').forEach(({name, value}) => {
            data[name] = value;
        });
        localStorage.setItem('formData', JSON.stringify(data));
        console.log(data);


    })


    document.addEventListener('DOMContentLoaded', () => {
        const dataList = document.getElementById('formDataList');
            for(const key in localStorage) {
                if(key) {
                    const li = document.createElement('li');
                    li.textContent = localStorage.getItem(key);
                    dataList.appendChild(li);
                } else {
                    const li = document.createElement('li');
                    li.textContent = 'Немає данних';
                    dataList.appendChild(li);
                }
            }
    })
}()