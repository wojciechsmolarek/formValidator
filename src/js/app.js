(function() {
  

    var form = document.querySelector("#form"),
        nameField = form.querySelector("input[name='name]'"),
        emailField = form.querySelector("input[name='email]'"),
        textareaField = form.querySelector("textarea[name='textarea]'");


    console.log(nameField)

    form.addEventListener("submit", function(e) {

        e.preventDefault();
        
        var errors = [];

        if(nameField.value === '') {
            errors.push("Fill you name");
            nameField.classList.add('error');
        }

    }, false)


})();
