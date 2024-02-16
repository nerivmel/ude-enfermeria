document.addEventListener("DOMContentLoaded", function() {
   
   //________________FORMACION DA______________________________________________________________________________
    var formacionDaLink = document.getElementById("formacion-da-link");
    formacionDaLink.addEventListener("click", function(event) {
        event.preventDefault(); 

        var contenidoACargar = document.getElementById("contenido-a-cargar");
        contenidoACargar.innerHTML = `
            <div class="formacionText">
                <p>En este espacio del campus virtual los docentes y empleados administrativos
                 de la Facultad de Enfermería cuentan con opciones de capacitación en línea que ofrecen 
                 oportunidades de desarrollo profesional, entrenamiento y actualización de conocimientos 
                 relacionados con la docencia, investigación, extensión y administración, en donde podrán
                 fortalecer asuntos disciplinarios y profesionales de su elección mediante el desarrollo de 
                 métodos pedagógicos que faciliten el logro de los fines éticos y académicos de la Facultad de Enfermería y la Universidad.</p>
            </div>
            <div class="formacionImg">
                <img src="./imagenes/campus_de_enfermeria_02_formacion_seminarios.png" alt="" class="">
                <img src="./imagenes/campus_de_enfermeria_02_formacion_cursos.png" alt="" class="">
            </div>
        `;
    });

    //_____________INICIO______________________________________________________________________________________
    var inicioLink = document.getElementById("inicio-link");
    inicioLink.addEventListener("click", function(event){
        event.preventDefault();
        var contenidoACargar = document.getElementById("contenido-a-cargar");
        contenidoACargar.innerHTML = `
        <div class="two">
        <div class="bienvenida">
            <p>El Campus Virtual de Enfermería UdeA es un entorno de aprendizaje colaborativo diseñado para fomentar el desarrollo de conocimientos acordes a las necesidades de formación de excelencia en el cuidado de la salud. En este espacio aprovechamos las posibilidades que ofrecen las Tecnologías de la Información y las Comunicaciones (TIC) y la plataforma Moodle para brindarte una experiencia educativa enriquecedora.

                        Nuestro compromiso es proporcionar a estudiantes, docentes y a todas las comunidades interesadas un espacio de aprendizaje interactivo, accesible y de calidad que impulse el crecimiento y conocimiento en el ámbito de la enfermería. 
                        
                        ¡Bienvenido a esta plataforma que apoya tu desarrollo profesional y personal en este campo tan importante!
                        
                        También puedes encontrarnos en:
                        </p>
                </div>
                <div class="video">
                    <img src="./imagenes/campus_de_enfermeria_03_pregrado_s1.png" alt="">
                </div>

            </div>
        </div>
        `
    });
    //_______________________________PREGRADO____________________________________________________________________
    var pregradoLink = document.getElementById("pregrado-link");
    pregradoLink.addEventListener("click", function(event){
        event.preventDefault();
        var contenidoACargar = document.getElementById("contenido-a-cargar");
        contenidoACargar.innerHTML=`
            <div class="pregradoText">
                <p>En este espacio del campus virtual los estudiantes del pregrado en Enfermería encontrarán, por nivel académico, una variedad de cursos, herramientas y contenido educativo contemplado en el plan de estudios que será de apoyo a la presencialidad a través de recursos y estrategias de participación como talleres en línea, foros de discusión, bibliotecas digitales y oportunidades de desarrollo profesional. 
                Conoce los componentes y las asignaturas de cada semestre haciendo clic sobre las tarjetas:
                </p>
            </div>
            <div class="pregradoImg">
                <img src="./imagenes/campus_de_enfermeria_03_pregrado_s1.png" alt="" class="">
                <img src="./imagenes/campus_de_enfermeria_03_pregrado_s2.png" alt="" class="">
                <img src="./imagenes/campus_de_enfermeria_03_pregrado_s3.png" alt="" class="">
                <img src="./imagenes/campus_de_enfermeria_03_pregrado_s4.png" alt="" class="">
                <img src="./imagenes/campus_de_enfermeria_03_pregrado_s5.png" alt="" class="">
                <img src="./imagenes/campus_de_enfermeria_03_pregrado_s6.png" alt="" class="">
                <img src="./imagenes/campus_de_enfermeria_03_pregrado_s7.png" alt="" class="">
                <img src="./imagenes/campus_de_enfermeria_03_pregrado_s8.png" alt="" class="">
                <img src="./imagenes/campus_de_enfermeria_03_pregrado_s9.png" alt="" class="">
                <img src="./imagenes/campus_de_enfermeria_03_pregrado_s10.png" alt="" class="">
            </div>
        `
    })

    //________________________________POSGRADO___________________________________________________________________
    var posgradoLink = document.getElementById("posgrados-link");
    posgradoLink.addEventListener("click", function(event){
        event.preventDefault();
        var contenidoACargar = document.getElementById("contenido-a-cargar");
        contenidoACargar.innerHTML=`
            <div class="posgradoText">
                <p>En este espacio del campus virtual los aspirantes y estudiantes de posgrado de 
                la Facultad de Enfermería encontrarán la oferta programas y cursos de apoyo a la 
                virtualidad que permiten flexibilidad de horarios, acceso a materiales de estudio en
                línea e interacción con profesores y compañeros a través de plataforma Moodle y otras 
                tecnologías de la información y las comunicaciones, además de la posibilidad de acceder
                a material y actividades de formación desde cualquier lugar con conexión a internet. </p>
            </div>
            <div class="pregradoImg">
                <img src="./imagenes/campus_de_enfermeria_04_tarejta_01.png" alt="" class="">
                <img src="./imagenes/campus_de_enfermeria_04_tarejta_02.png" alt="" class="">
                <img src="./imagenes/campus_de_enfermeria_04_tarejta_03.png" alt="" class="">
                <img src="./imagenes/campus_de_enfermeria_04_tarejta_04.png" alt="" class="">
                <img src="./imagenes/campus_de_enfermeria_04_tarejta_05.png" alt="" class="">
                <img src="./imagenes/campus_de_enfermeria_04_tarejta_06.png" alt="" class="">
            </div>
        `
    })
    //_________________________________EXTENCION_________________________________________________________________
    var extencionLink = document.getElementById("extencion-link");
    extencionLink.addEventListener("click", function(event){
        event.preventDefault();
        var contenidoACargar = document.getElementById("contenido-a-cargar");
        contenidoACargar.innerHTML=`
        <div class="posgradoText">
            <p>En este espacio del campus virtual todas las personas de las áreas de la salud vinculadas a la Facultad de Enfermería, incluyendo instituciones de educación y empresas, podrán encontrar una amplia oferta de capacitación, actualización y divulgación de conocimientos en áreas de interés. Este sitio es una oportunidad de formación virtual que conecta la Facultad de Enfermería con las personas, los sectores productivos, las regiones, el país y el mundo. 
            En la oferta académica se encuentran programas virtuales dirigidos o autogestionables, como diplomados, certificaciones en convenios, cursos de actualización, seminarios y proyectos, que permiten a los estudiantes adquirir conocimientos y habilidades en diferentes áreas de estudio.
             </p>
        </div>
        <div class="pregradoImg">
            <img src="./imagenes/campus_de_enfermeria_05_btn_01.png" alt="" class="">
            <img src="./imagenes/campus_de_enfermeria_05_btn_02.png" alt="" class="">
            <img src="./imagenes/campus_de_enfermeria_05_btn_03.png" alt="" class="">
            <img src="./imagenes/campus_de_enfermeria_05_btn_04.png" alt="" class="">
            <img src="./imagenes/campus_de_enfermeria_05_btn_05.png" alt="" class="">
            <img src="./imagenes/campus_de_enfermeria_05_btn_06.png" alt="" class="">
        </div>
        `
    })


});
