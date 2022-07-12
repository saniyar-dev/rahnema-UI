const startButton = document.getElementById('start_button');
const restartButton = document.getElementById('restart_button');
const app = document.getElementById('app');
const nInputField = document.getElementById('n');

const template = `<div class="flex justify-center flex-col gap-6">
            <div>
                <input type="text" id="name" placeholder="Enter a name" class="p-3 border-2 focus:border-blue-600">
            </div>
            <div>
                <input type="text" id="name" placeholder="Enter a food name" class="p-3 border-2 focus:border-blue-600">
            </div>
            <div>
                <input type="text" id="name" placeholder="Enter a color name" class="p-3 border-2 focus:border-blue-600">
            </div>
            <div>
                <input type="text" id="name" placeholder="Enter a city name" class="p-3 border-2 focus:border-blue-600">
            </div>
        </div>`;

const render = (n) => {
    console.log(n)
};

startButton.addEventListener('click', () => {
    render(nInputField.value);

    startButton.removeEventListener('click');
});

restartButton.addEventListener('click', () => {

});