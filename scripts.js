document.addEventListener("DOMContentLoaded", function() {
   
   //________________FORMACION DA______________________________________________________________________________
    var formacionDaLink = document.getElementById("formacion-da-link");
    formacionDaLink.addEventListener("click", function(event) {
        event.preventDefault(); 

        var contenidoACargar = document.getElementById("contenido-a-cargar");
        contenidoACargar.innerHTML = `
            <div class="cabezote"> 
                <img src="./cabezotes/campus_de_enfermeria_Identidad-Grafica_banner_02.png" alt="" class="">
            </div>

            <div class="formacionText">
                <p>En este espacio del campus virtual los docentes y empleados administrativos
                 de la Facultad de Enfermería cuentan con opciones de capacitación en línea que ofrecen 
                 oportunidades de desarrollo profesional, entrenamiento y actualización de conocimientos 
                 relacionados con la docencia, investigación, extensión y administración, en donde podrán
                 fortalecer asuntos disciplinarios y profesionales de su elección mediante el desarrollo de 
                 métodos pedagógicos que faciliten el logro de los fines éticos y académicos de la Facultad de Enfermería y la Universidad.</p>
            </div>
            <div class="formacionImg">
                <a href="#" class="enlace-imagen"><img src="./imagenes/campus_de_enfermeria_02_formacion_seminarios.png" alt="Seminarios"></a>
                <a href="#" class="enlace-imagen"><img src="./imagenes/campus_de_enfermeria_02_formacion_cursos.png" alt="Cursos"></a>
                    <div id="seminariosContent" style="display: none;">
                        <h2 class="tituloSeminario">Seminarios</h2>
                        <div class="seminariosImg">
                            <img src="./imagenes/campus_de_enfermeria_02_fondo_seminario01.png" alt="Seminario 1">
                            <img src="./imagenes/campus_de_enfermeria_02_fondo_seminario01.png">
                            <img src="./imagenes/campus_de_enfermeria_02_fondo_seminario01.png">
                        </div>
                    </div>
                    <div id="cursosContent" style="display: none;">
                        <h2 class="tituloSeminario">Cursos</h2>
                        <div class="seminariosImg">
                            <img src="./imagenes/campus_de_enfermeria_02_fondo_curso01.png" alt="Seminario 1">
                            <img src="./imagenes/campus_de_enfermeria_02_fondo_curso02.png">
                            <img src="./imagenes/campus_de_enfermeria_02_fondo_curso03.png">
                        </div>
                    </div>     
            </div>
                  
            <div class="pie">
                <img class="pieCurva" src="./imagenes/campus_de_enfermeria_pata_fondo.png" alt="">
                <img class="pieLogo" src="./imagenes/campus_de_enfermeria_pata_logo.png" alt="">
            </div>
        `;
        var seminariosContent = document.getElementById('seminariosContent');
        var seminariosLink = contenidoACargar.querySelector('.enlace-imagen:first-child');
        seminariosLink.addEventListener('click', function(event) {
            event.preventDefault();
            if (seminariosContent.style.display === 'block') {
                seminariosContent.style.display = 'none';
            } else {
                seminariosContent.style.display = 'block';
            }
        });
    });
    

    //_____________INICIO______________________________________________________________________________________
    var inicioLink = document.getElementById("inicio-link");
    inicioLink.addEventListener("click", function(event){
        event.preventDefault();
        var contenidoACargar = document.getElementById("contenido-a-cargar");
        contenidoACargar.innerHTML = `
        <div class="slider-container">
        <div class="slider">
            <img src="./Slider/campus_de_enfermeria_Identidad-Grafica_banner_01.png" alt="Imagen 1">
            <img src="./Slider/campus_de_enfermeria_Identidad-Grafica_banner_06.png">
            <img src="./Slider/campus_de_enfermeria_Identidad-Grafica_banner_07.png">
            <img src="./Slider/campus_de_enfermeria_Identidad-Grafica_banner_08.png">
            <!-- Agrega más imágenes según sea necesario -->
        </div>
    </div>
        
        <div class="two">
        <div class="bienvenida">
            <p>El Campus Virtual de Enfermería UdeA es un entorno de aprendizaje colaborativo diseñado para fomentar el desarrollo de conocimientos acordes a las necesidades de formación de excelencia en el cuidado de la salud. En este espacio aprovechamos las posibilidades que ofrecen las Tecnologías de la Información y las Comunicaciones (TIC) y la plataforma Moodle para brindarte una experiencia educativa enriquecedora.<br><br>

            Nuestro compromiso es proporcionar a estudiantes, docentes y a todas las comunidades interesadas un espacio de aprendizaje interactivo, accesible y de calidad que impulse el crecimiento y conocimiento en el ámbito de la enfermería. <br><br>
            ¡Bienvenido a esta plataforma que apoya tu desarrollo profesional y personal en este campo tan importante!<br><br>
            También puedes encontrarnos en:
                        </p>
                </div>
                <div class="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/watch?v=uP-ONtU7Fn8" frameborder="0" allowfullscreen></iframe>
                </div>

            </div>
        </div>
        <div class="redes">
            <div class="red-social" id="red1"></div>
            <div class="red-social" id="red2"></div>
            <div class="red-social" id="red3"></div>
            <div class="red-social" id="red4"></div>
        </div>
    
    <div class="pie">
        <img class="pieCurva" src="./imagenes/campus_de_enfermeria_pata_fondo.png" alt="">
        <img class="pieLogo" src="./imagenes/campus_de_enfermeria_pata_logo.png" alt="">
    </div>
        `
    });
    //_______________________________PREGRADO____________________________________________________________________
    var pregradoLink = document.getElementById("pregrado-link");
    pregradoLink.addEventListener("click", function(event){
        event.preventDefault();
        var contenidoACargar = document.getElementById("contenido-a-cargar");
        contenidoACargar.innerHTML=`
        <div class="cabezote">
                <img src="./cabezotes/campus_de_enfermeria_Identidad-Grafica_banner_03.png" alt="" class="">
            </div>

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
            
            <div class="pie">
                <img class="pieCurva" src="./imagenes/campus_de_enfermeria_pata_fondo.png" alt="">
                <img class="pieLogo" src="./imagenes/campus_de_enfermeria_pata_logo.png" alt="">
            </div>
        `
    })

    //________________________________POSGRADO___________________________________________________________________
    var posgradoLink = document.getElementById("posgrados-link");
    posgradoLink.addEventListener("click", function(event){
        event.preventDefault();
        var contenidoACargar = document.getElementById("contenido-a-cargar");
        contenidoACargar.innerHTML=`
            <div class="cabezote"> 
                <img src="./cabezotes/campus_de_enfermeria_Identidad-Grafica_banner_04.png" alt="" class="">
            </div>

            <div class="posgradoText">
                <p>En este espacio del campus virtual los aspirantes y estudiantes de posgrado de 
                la Facultad de Enfermería encontrarán la oferta programas y cursos de apoyo a la 
                virtualidad que permiten flexibilidad de horarios, acceso a materiales de estudio en
                línea e interacción con profesores y compañeros a través de plataforma Moodle y otras 
                tecnologías de la información y las comunicaciones, además de la posibilidad de acceder
                a material y actividades de formación desde cualquier lugar con conexión a internet. </p>
            </div>
            <div class="posgradoImg">
                <img src="./imagenes/campus_de_enfermeria_04_tarejta_01.png" alt="" class="">
                <img src="./imagenes/campus_de_enfermeria_04_tarejta_02.png" alt="" class="">
                <img src="./imagenes/campus_de_enfermeria_04_tarejta_03.png" alt="" class="">
                <img src="./imagenes/campus_de_enfermeria_04_tarejta_04.png" alt="" class="">
                <img src="./imagenes/campus_de_enfermeria_04_tarejta_05.png" alt="" class="">
                <img src="./imagenes/campus_de_enfermeria_04_tarejta_06.png" alt="" class="">
            </div>

            
            
            <div class="pie">
                <img class="pieCurva" src="./imagenes/campus_de_enfermeria_pata_fondo.png" alt="">
                <img class="pieLogo" src="./imagenes/campus_de_enfermeria_pata_logo.png" alt="">
            </div>
        `
    })
    //_________________________________EXTENCION_________________________________________________________________
    var extencionLink = document.getElementById("extencion-link");
    extencionLink.addEventListener("click", function(event){
        event.preventDefault();
        var contenidoACargar = document.getElementById("contenido-a-cargar");
        contenidoACargar.innerHTML=`
            <div class="cabezote"> 
                <img src="./cabezotes/campus_de_enfermeria_Identidad-Grafica_banner_05.png" alt="" class="">
            </div>

        <div class="posgradoText">
            <p>En este espacio del campus virtual todas las personas de las áreas de la salud vinculadas a la Facultad de Enfermería, incluyendo instituciones de educación y empresas, podrán encontrar una amplia oferta de capacitación, actualización y divulgación de conocimientos en áreas de interés. Este sitio es una oportunidad de formación virtual que conecta la Facultad de Enfermería con las personas, los sectores productivos, las regiones, el país y el mundo. 
            En la oferta académica se encuentran programas virtuales dirigidos o autogestionables, como diplomados, certificaciones en convenios, cursos de actualización, seminarios y proyectos, que permiten a los estudiantes adquirir conocimientos y habilidades en diferentes áreas de estudio.
             </p>
        </div>
        <div class="formacionImg">
            <img src="./imagenes/campus_de_enfermeria_05_btn_01.png" alt="" class="">
            <img src="./imagenes/campus_de_enfermeria_05_btn_02.png" alt="" class="">
            <img src="./imagenes/campus_de_enfermeria_05_btn_03.png" alt="" class="">
            <img src="./imagenes/campus_de_enfermeria_05_btn_04.png" alt="" class="">
            <img src="./imagenes/campus_de_enfermeria_05_btn_05.png" alt="" class="">
            <img src="./imagenes/campus_de_enfermeria_05_btn_06.png" alt="" class="">
        </div>
        
        
        <div class="pie">
            <img class="pieCurva" src="./imagenes/campus_de_enfermeria_pata_fondo.png" alt="">
            <img class="pieLogo" src="./imagenes/campus_de_enfermeria_pata_logo.png" alt="">
        </div>
        `
    })


});
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    let slideIndex = 0;
    const slides = slider.children;

    function nextSlide() {
        if (slideIndex === slides.length - 1) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }
        updateSlidePosition();
    }

    function updateSlidePosition() {
        const slideWidth = slides[0].clientWidth;
        slider.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
    }

    setInterval(nextSlide, 3000);
});


document.addEventListener('DOMContentLoaded', function() {
    var redes = document.querySelectorAll('.red-social');

    redes.forEach(function(red) {
        red.addEventListener('click', function() {
            var id = this.id;

            switch (id) {
                case 'red1':
                    window.location.href = 'https://www.facebook.com/extension.enfermeriaudea';
                    break;
                case 'red2':
                    window.location.href = 'https://www.instagram.com/enfermeriaudea_/';
                    break;
                case 'red3':
                    window.location.href = 'https://x.com/EnfemeriaUdeA';
                    break;
                case 'red4':
                    window.location.href = 'https://www.udea.edu.co/wps/portal/udea/web/inicio/unidades-academicas/enfermeria';
                    break;
                default:
                    break;
            }
        });
    });
});

