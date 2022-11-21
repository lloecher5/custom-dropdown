export function MICDropdown(element, options) {
    //create select div that contains entire component

    //assign the element pased into variable
    this.element = element;
    const selectDiv = document.createElement('div');
    selectDiv.classList.add('select');
    element.appendChild(selectDiv);

    //create div to hold all of the options
    const optionsDiv = document.createElement('div');
    optionsDiv.classList.add('options');
    selectDiv.appendChild(optionsDiv);

    //create inputs for each department passed in
    for (let department of options.departments) {
        //create label for the input
        const option = document.createElement('label');
        option.classList.add('option');
        option.setAttribute('for', department);

        //create the input element
        const input = document.createElement('input');
        input.setAttribute('type', 'radio');
        input.setAttribute('name', 'department');
        input.setAttribute('id', department);

        //create span to display name of the department
        const span = document.createElement('span');
        span.innerText = department;

        //append element to the DOM
        option.appendChild(input);
        option.appendChild(span);
        optionsDiv.appendChild(option);
    }

    const selected = document.createElement('div');
    selected.innerText = 'Select Department';
    selected.classList.add('selected');
    selectDiv.appendChild(selected);

    const optionList = document.querySelectorAll('.option');

    //add event listener to the select box
    selected.addEventListener('click', () => {
        //open up the options list when select box is clicked
        optionsDiv.classList.toggle('active');

        //scroll to the top functionality
        if (optionsDiv.classList.contains('active')) {
            for (let option of optionList) {
                //remvove the current class from old selection
                option.classList.remove('current');
                if (
                    option.querySelector('span').innerText ===
                    selected.innerHTML
                ) {
                    option.classList.add('current');
                    option.scrollIntoView({
                        behavior: 'smooth',
                    });
                }
            }
        }
    });

    //add event listener to each option to enable to selection
    optionList.forEach((option) => {
        option.addEventListener('click', () => {
            selected.innerHTML = option.querySelector('span').innerText;
            optionsDiv.classList.remove('active');
        });
    });
}
