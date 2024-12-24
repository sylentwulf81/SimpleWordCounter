
const textField = document.getElementById('text-field');
const wordCountDisplay = document.getElementById('word-count');


document.addEventListener('DOMContentLoaded', function() {
    textField.addEventListener('input', wordCounter);
})


function wordCounter() {
    const text = textField.value.trim()

    const words = text.split(/\s+/).filter( word => word.length > 0)

    wordCountDisplay.textContent = `Word count: ${words.length}`

}