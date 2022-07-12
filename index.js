const startButton = document.getElementById('start_button');
const restartButton = document.getElementById('restart_button');
const app = document.getElementById('app');
const nInputField = document.getElementById('n');


const solve = () => {
    console.log('solved');
};

const template = `<div class="flex justify-center flex-col gap-6">
            <h1></h1>
            <div>
                <input type="text" id="name" placeholder="Enter a name" class="p-3 border-2 focus:border-blue-600">
            </div>
            <div>
                <input type="text" id="food" placeholder="Enter a food name" class="p-3 border-2 focus:border-blue-600">
            </div>
            <div>
                <input type="text" id="color" placeholder="Enter a color name" class="p-3 border-2 focus:border-blue-600">
            </div>
            <div>
                <input type="text" id="city" placeholder="Enter a city name" class="p-3 border-2 focus:border-blue-600">
            </div>
        </div>`;

const render = (n) => {
    for (let i = 0; i < n; i++) {
        const el = document.createElement('div');
        el.innerHTML = template;
        const h1 = el.querySelector('h1');
        h1.innerText = `Participant ${i +1}:`
        app.appendChild(el)
    }
    const el = document.createElement('div');
    el.innerHTML = `        <button id="finish_button" class="bg-slate-700 text-white p-5 rounded-lg">
            Finish 
        </button>`;
    el.addEventListener('click', () => {
        solve();
    });
    app.appendChild(el);
};

startButton.addEventListener('click', () => {
    render(nInputField.value);
});

restartButton.addEventListener('click', () => {

});