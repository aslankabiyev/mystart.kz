document.addEventListener('DOMContentLoaded', function() {
    var addButton = document.getElementById('add-button');
    var formContainer = document.getElementById('form-container');
    var distanceNumber = 1;
    var priceNumber = 1;

    addButton.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы

        distanceNumber++;
        priceNumber++;

        var newFormRow = document.createElement('div');
        newFormRow.className = 'form-row';
        newFormRow.innerHTML = `
            <input type="text" class="distance" placeholder="Дистанция ${distanceNumber}">
            <input type="text" class="price" placeholder="Цена ${priceNumber}">
        `;

        formContainer.appendChild(newFormRow);
    });
});