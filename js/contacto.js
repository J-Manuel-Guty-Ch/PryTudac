$(document).ready(function () {
    //FORMULARIO DE CONTACTO
    $('#form-contacto').validate({
        rules:{
            email:{
                required: true,
                email: true
            },
            name:{
                required: true,
                minlength: 10
            },
            surname:{
                required: true,
                minlength: 4
            },
            date:{
                required: true,
                date: true
            },
            year:{
                required: true,
                range: [18, 99]
            }
        },
        messages:{
            email:{
                required: "Se requiere su correo"
            },
            name:{
                required: "Se requiere su nombre",
                minlength: "Minimo de caracteres 3"
            },
            surname:{
                required: "Se requiere sus apellidos",
                minlength: "Minimo de caracteres 4"
            },
            date:{
                required: "Se requiere su fecha de nacimiento",
                date: "Formato no aceptado"
            },
            year:{
                required: "Se requiere su edad",
                range: "La edad oscila entre 18 y 99 años"
            }
        }
    });
    $('form input[name="date"]').datepicker();

    //SELECTOR DE TEMAS
    var theme = $('#theme');

    $('#to-red').click(function() {
        theme.attr("href", "css/themes/red.css");
        $('.to-theme').css("color", "white");
        $(this).css("background", "white");
        $(this).css("color", "black");
        $('#to-blue').css("background", "blue");
        $('#to-green').css("background", "green");
    });
    $('#to-blue').click(function() {
        theme.attr("href", "css/themes/blue.css");
        $('.to-theme').css("color", "white");
        $(this).css("background", "white");
        $(this).css("color", "black");
        $('#to-red').css("background", "red");
        $('#to-green').css("background", "green");
    });
    $('#to-green').click(function() {
        theme.attr("href", "css/themes/green.css");
        $('.to-theme').css("color", "white");
        $(this).css("background", "white");
        $(this).css("color", "black");
        $('#to-red').css("background", "red");
        $('#to-blue').css("background", "blue");
    });

    //SCROLL ARRIBA DE LA WEB
    $("#subir").show();
    $('.subir').click(function(e) {
        e.preventDefault() //Para que 'a' no redirija a otro link
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    });

    setInterval(() => {
        if ($('html, body').scrollTop()>=300) {
            $("#subir").fadeIn();
        }
        if ($('html, body').scrollTop() >= 0 && $('html, body').scrollTop() < 300){
            $("#subir").fadeOut();
        }
    }, 300);
    //LOGIN FALSO
    $('#formulario').submit(function() {
        var form_name = $('#name').val();
        var form_pass = $('#password').val();
        var form_email = $('#email').val();
        var user = form_name + form_email + form_pass;
        localStorage.setItem("usuario_registrado", user);
    });

    var user = localStorage.getItem("usuario_registrado");
    var about = $('#about p');
    if (user != null || user != "undefined" || user != "") {
        about.html("Bienvenido, " + user.substr(0, 14) + "<br/>Haz entrado con el correo: " + user.substr(14, 25));
        about.append('<br/><br/><a href="#" id="logout">Cerrar sesión</a>');
        $('#name').attr("disabled", "disabled");
        $('#password').attr("disabled", "disabled");
        $('#email').attr("disabled", "disabled");
        $('#ingresar').attr("disabled", "disabled");

        $('#logout').click(function (e) { 
            e.preventDefault();
            localStorage.clear();
            location.reload();
        });
    }
});