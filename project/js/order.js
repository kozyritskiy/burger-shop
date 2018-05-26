$('#order-form').on('submit', submitForm);

function submitForm(e) {
    console.log('in submitForm');
    e.preventDefault();

    let form = $(e.target);
    let request = ajaxForm(form);


    request.done(function (msg) {
        let mes = msg.mes,
            status = msg.status;

        if (status === 'OK') {
            form.append('<p class="success">' + mes + '</p>');
        } else {
            form.append('<p class="error">' + mes + '</p>');
        }
    });
    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

};

// Универсальная функция для работы с формами
let ajaxForm = function (form) {
    let data = form.serialize(),
        url = form.attr('action');
        type = form.attr('method');

    return $.ajax({
        type: type,
        url: url,
        dataType: 'JSON',
        data: data
    })
};

