(function() {

    function displayErrors(errors, form) { 

        var errorMessage = document.querySelector('.errors');

        if(!errorMessage) {
            errorMessage = document.createElement('p');
        }

        errorMessage.className = "errors";
        errorMessage.innerHTML = errors.join('<br>');

        document.body.appendChild(errorMessage);

    }

    



    var form = document.querySelector("#form"),
        nameField = form.querySelector('input[name="name"]'),
        emailField = form.querySelector('input[name="email"]'),
        textareaField = form.querySelector('textarea');




    form.addEventListener("submit", function(e) {

        e.preventDefault();
        
        var errors = [];

        if(nameField.value === '') {
            errors.push("Fill your name!");
            nameField.classList.add("error");
        } else {
            nameField.classList.remove("error");
        }

        if(emailField.value.indexOf('@') === -1) {
            errors.push("Incorrect email!");
            emailField.classList.add("error");
        } else {
            emailField.classList.remove("error");
        }

        if(textareaField.value === '') {
            errors.push("Enter your message!");
            textareaField.style.border = '3px solid #ec1212';
        } else {
            textareaField.style.border = '';
        }


        if(errors.length) {
            displayErrors(errors);
        } else {
            form.submit();
        }



    }, false)


})();
