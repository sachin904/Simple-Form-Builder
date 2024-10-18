function preview() {
    const fieldType = document.getElementById('selectField').value;
    const fieldLabel = document.getElementById('fieldLabel').value;
    const formPreview = document.getElementById('formPreview');
    
    if (!fieldLabel) {
        alert('Please enter a field label.');
        return;
    }

    const fieldContainer = document.createElement('div');
    fieldContainer.classList.add('field-container');

    const label = document.createElement('label');
    label.innerText = fieldLabel;

    let inputField;

    if (fieldType === 'text') {
        inputField = document.createElement('input');
        inputField.type = 'text';
        fieldContainer.appendChild(label);
        fieldContainer.appendChild(inputField);
    } 
    else if (fieldType === 'checkbox') {
        fieldContainer.appendChild(label);

        for (let i = 1; i <= 4; i++) {  
            const optionLabel = prompt(`Enter option ${i}:`); 

            if (optionLabel) {
                const checkboxContainer = document.createElement('div');

                inputField = document.createElement('input');
                inputField.type = 'checkbox';
                inputField.value = optionLabel;

                const optionText = document.createElement('span');
                optionText.textContent = optionLabel;

                checkboxContainer.appendChild(inputField);
                checkboxContainer.appendChild(optionText);
                fieldContainer.appendChild(checkboxContainer);
            }
        }
    } 
    else if (fieldType === 'radio') {
        fieldContainer.appendChild(label);
        const name=prompt("enter name for radio button");
        for(i=1;i<=4;i++){
            const radioboxContainer=document.createElement('div');
            const optionLabel=prompt(`enter option${i};`);
            if(optionLabel){
                inputField = document.createElement('input');
                inputField.value=optionLabel;
                inputField.type='radio';
                inputField.name=name;

                const inputText= document.createElement('span');
                inputText.textContent=optionLabel;
                radioboxContainer.appendChild(inputField);
                radioboxContainer.appendChild(inputText);
                fieldContainer.appendChild(radioboxContainer);
             }
        }
    
    }

    formPreview.appendChild(fieldContainer);
}
