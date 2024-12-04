$(document).ready(function () {
    $("#myform").validate({
        rules: {
            firstname: "required",
            surname: "required",
            email: {
                required: true,
                email: true,
            },
            phonenumber: {
                required: true,
                minlength: 10,
            },
            tour: {
                required: true,
            },
            date: {
                required: true,
            },
            tube: {
                required: true,
            },
            location: {
                required: true,
            },
        },
        messages: {
            firstname: " Please enter your first name!",
            surname: " Please enter your surname!",
            phonenumber: {
                required: " Please enter your phone number!",
                minlength: " Your phone number must be at least 10 digits!"
            },
            email: {
                required: " Please enter a valid e-mail address!",
                email: " Your e-mail address must contain an '@' character!"
            },
            tour: " Please select a tour type!",
            date: " Please select a date!",
            tube: " Please enter a value!",
            location: " Filling this field is mandatory!",
        },

    });
});