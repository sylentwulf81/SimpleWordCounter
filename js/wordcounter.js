const textField = document.getElementById('text-field');
const wordCountDisplay = document.getElementById('word-count');

document.addEventListener('DOMContentLoaded', function() {
    textField.addEventListener('input', wordCounter);
})

function wordCounter() {
    // Access the value of the text field
    const text = textField.value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").trim();

    // Split the text by spaces and filter out empty strings
    const words = text.split(/\s+/).filter(word => word.length > 0);

    // Update the word count display
    wordCountDisplay.textContent = `Word count: ${words.length}`;
}