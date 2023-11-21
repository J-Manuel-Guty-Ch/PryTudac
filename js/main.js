$(document).ready(function() {
    
    var posts = [{
            title: "TALLER INTRAFAMILIAR",
            date: "Publicado el " + moment().format("dddd D") + " de " + moment().format("MMMM") + " del año " + moment().format("YYYY"),
            content: "Se realiza la apertura de un curso taller intrafamiliar para una mejor comunicacion y desarrollo emocional entre padres e hijos y viseversa donde los ayudamos a tener un balance y trato con nuestros seres queridos,  Los requisitos son:  una fotocopia de certificado de nacimiento o de cedula de identidad del benificiario como del tutor acargo."
        },
        {
            title: "APERTURA DE COMEDOR",
            date: "Publicado el " + moment().format("dddd D") + " de " + moment().format("MMMM") + " del año " + moment().format("YYYY"),
            content: "Se realiza la apertura de comedor en nuestros ambientes para niños y adolecentes de bajos recursos en el horario de almurzo, realizando un aporte minimo para su atencion.  Los requisitos son:  una fotocopia de certificado de nacimiento o de cedula de identidad del benificiario como del tutor acargo."
        },
        {
            title: "TALLER DESCUBRE TU TALENTO",
            date: "Publicado el " + moment().format("dddd D") + " de " + moment().format("MMMM") + " del año " + moment().format("YYYY"),
            content: "Se hace el lanzamiento del taller descubre tu talento para niños y adolecentes que quieran descubrir y fortalecer su talento, en el area de musica, razonamiento y deportes, contamos con todas las medidas de apoyo,  Los requisitos son:  una fotocopia de certificado de nacimiento o de cedula de identidad del benificiario como del tutor acargo."
        },
        {
            title: "ESCUELA DE FUTSAL INFANTIL",
            date: "Publicado el " + moment().format("dddd D") + " de " + moment().format("MMMM") + " del año " + moment().format("YYYY"),
            content: "Se realiza las inscripciones en el area deportiva Futsal para una mejor estabilidad de defensas en nuestro cuerpo, realizando entrenamientos deportivosdel tacticas y demas, Los requisitos son:  una fotocopia de certificado de nacimiento o de cedula de identidad del benificiario como del tutor acargo."
        },
        {
            title: "TALLER PARA PADRES",
            date: "Publicado el " + moment().format("dddd D") + " de " + moment().format("MMMM") + " del año " + moment().format("YYYY"),
            content: "Se realiza la apertura de un curso taller para Padres de familia para una mejor comunicacion y desarrollo emocional entre padres e hijos donde los ayudamos a tener un balance y trato con nuestros seres queridos,  Los requisitos son:  una fotocopia de certificado de nacimiento o de cedula de identidad del benificiario como del tutor acargo."
        }
    ];

    posts.forEach((element, i) => {
        var post = `
        <article class="post">
            <h3>${element.title}</h3>
            <span class="fecha-publicado">${element.date}</span>
            <span class="comentarios">92 Comentarios</span>
            <p>${element.content}</p>
            <a href="#">Leer más...</a>
        </article>
        `;
        $('#posts').append(post);
    });

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
    $("#subir").hide();
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

    //LOGIN 
    
    let usuarios = ["manuel", "juan", "pedro"];
    let correos = ["manuel@gmail.com", "juan@gmail.com", "pedro@gmail.com"];
    let claves = ["123", "1234", "12345"];

    function userval(usuarios, correos, claves) {
        var i = 0 ;
        if(usuarios[i]==form_name & correos[i]==form_email & claves[i]==form_pass)
        {
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
        i++;
    }

    // $('#formulario').submit(function() {
    //     var form_name = $('#name').val();
    //     var form_pass = $('#password').val();
    //     var form_email = $('#email').val();
    //     var user = form_name + form_email + form_pass;
    //     localStorage.setItem("usuario_registrado", user);
    // });

    // var user = localStorage.getItem("usuario_registrado");
    // var about = $('#about p');

    // if (user != null || user != "undefined" || user != "") {
    //     about.html("Bienvenido, " + user.substr(0, 14) + "<br/>Haz entrado con el correo: " + user.substr(14, 25));
    //     about.append('<br/><br/><a href="#" id="logout">Cerrar sesión</a>');
    //     $('#name').attr("disabled", "disabled");
    //     $('#password').attr("disabled", "disabled");
    //     $('#email').attr("disabled", "disabled");
    //     $('#ingresar').attr("disabled", "disabled");

    //     $('#logout').click(function (e) { 
    //         e.preventDefault();
    //         localStorage.clear();
    //         location.reload();
    //     });
    // }

});