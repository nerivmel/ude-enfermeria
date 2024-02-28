document.addEventListener("DOMContentLoaded", function() {
   
   //________________FORMACION DA______________________________________________________________________________
   var formacionDaLink = document.getElementById("formacion-da-link");
   formacionDaLink.addEventListener("click", function(event) {
       event.preventDefault(); 
   
       var contenidoACargar = document.getElementById("contenido-a-cargar");
       contenidoACargar.innerHTML = `
           <!-- Contenido de formación -->
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
   
           <!-- Enlaces a Seminarios y Cursos -->
           <div class="formacionImg">
               <a href="#" class="enlace-imagen"><img src="./imagenes/campus_de_enfermeria_02_formacion_seminarios.png" alt="Seminarios"></a>
               <a href="#" class="enlace-imagen"><img src="./imagenes/campus_de_enfermeria_02_formacion_cursos.png" alt="Cursos"></a>
               
               <!-- Contenido de Seminarios -->
               <div id="seminariosContent" style="display: none;">
                   <h2 class="tituloSeminario">Seminarios</h2>
                   <div class="seminariosImg">

                     <a href="#" class="acordeon-seminario"><img src="./imagenes/campus_de_enfermeria_02_fondo_seminario01.png" alt="seminario 1"></a>
                     <a href="#" class="acordeon-seminario"><img src="./imagenes/campus_de_enfermeria_02_fondo_seminario02.png" alt="seminario 2"></a>
                     <a href="#" class="acordeon-seminario"><img src="./imagenes/campus_de_enfermeria_02_fondo_seminario03.png" alt="seminario 3"></a>
                   </div>
               </div>
   
               <!-- Contenido de Cursos -->
               <div id="cursosContent" style="display: none;">
                   <h2 class="tituloSeminario">Cursos</h2>
                      <div class="seminariosImg">

                      <a href="#" class="acordeon-cursos"><img src="./imagenes/campus_de_enfermeria_02_fondo_curso01.png" alt="curso 1"></a>
                      <a href="#" class="acordeon-cursos"><img src="./imagenes/campus_de_enfermeria_02_fondo_curso02.png" alt="curso 2"></a>
                      <a href="#" class="acordeon-cursos"><img src="./imagenes/campus_de_enfermeria_02_fondo_curso03.png" alt="curso 3"></a>

                      </div>
                </div>
           </div>
           <div id="modalc" class="modalc">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <div id="cursoContent" class="curso-content">
                    <!-- Contenido del curso -->
                    </div>
                </div>
            </div>
            <div id="modals" class="modals">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <div id="seminarioContent" class="seminario-content">
                    <!-- Contenido del seminario -->
                    </div>
                </div>
            </div>
            
           <!-- Pie de página -->
           <div class="pie">
               <img class="pieCurva" src="./imagenes/campus_de_enfermeria_pata_fondo.png" alt="">
               <img class="pieLogo" src="./imagenes/campus_de_enfermeria_pata_logo.png" alt="">
           </div>
       `;
   
       //  Seminarios
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
   
       //  Cursos
       var cursosContent = document.getElementById('cursosContent');
       var cursosLink = contenidoACargar.querySelector('.enlace-imagen:nth-child(2)');
       cursosLink.addEventListener('click', function(event) {
           event.preventDefault();
           if (cursosContent.style.display === 'block') {
               cursosContent.style.display = 'none';
           } else {
               cursosContent.style.display = 'block';
           }
       });

       //modal curso
        var cursosLink = contenidoACargar.querySelectorAll('.acordeon-cursos');
        var modalcurso = document.getElementById("modalc");
        var cursoContent = document.getElementById("cursoContent");
        cursosLink.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                // Agregar aquí el contenido del curso correspondiente
                var cursoAlt = this.querySelector('img').alt;
                cursoContent.innerHTML = "<h2>" + cursoAlt + "</h2><p>Descripción del curso " + cursoAlt + "</p>"+ "</h2><p>Duración " + "xxxxxxx" + "</p>"+ "</h2><p>Requisitos de inscripción" + "xxxxxxx" + "</p>"+ "</h2><p>Fechas " + "xxxxx"+ "</p>";
                modalcurso.style.display = "block";
            });
        });
        var closeBtn = document.getElementsByClassName("close")[0];
        closeBtn.addEventListener('click', function() {
            modalcurso.style.display = "none";
        });
        window.addEventListener('click', function(event) {
            if (event.target == modalcurso) {
                modalcurso.style.display = "none";
            }
        });

        //modal seminario
        var seminarioLink = contenidoACargar.querySelectorAll('.acordeon-seminario');
        var modalseminario = document.getElementById("modals");
        var seminarioContent = document.getElementById("seminarioContent");
        seminarioLink.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                // Agregar aquí el contenido del seminario correspondiente
                var seminarioAlt = this.querySelector('img').alt;
                seminarioContent.innerHTML = "<h2>" + seminarioAlt + "</h2><p>Descripción del seminario " + seminarioAlt + "</p>"+ "</h2><p>Duracion " + "xxxxxx" + "</p>"+ "</h2><p>Requisitos de inscripción " +  + "</p>"+ "</h2><p>fecha " + "xxxxxxx" + "</p>";
                modalseminario.style.display = "block";
            });
        });

        // Cerrar el modal al hacer clic en la 'x'
        var closeBtn = document.getElementsByClassName("close")[0];
        closeBtn.addEventListener('click', function() {
            modalseminario.style.display = "none";
        });

        // Cerrar el modal al hacer clic fuera de él
        window.addEventListener('click', function(event) {
        if (event.target == modalseminario) {
            modalseminario.style.display = "none";
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

                <a href="#" class="pregrado-imgs"><img src="./imagenes/campus_de_enfermeria_03_pregrado_s1.png" alt="semestre 1"></a>
                <a href="#" class="pregrado-imgs"><img src="./imagenes/campus_de_enfermeria_03_pregrado_s2.png" alt="semestre 2"></a>
                <a href="#" class="pregrado-imgs"><img src="./imagenes/campus_de_enfermeria_03_pregrado_s3.png" alt="semestre 3"></a>
                <a href="#" class="pregrado-imgs"><img src="./imagenes/campus_de_enfermeria_03_pregrado_s4.png" alt="semestre 4"></a>
                <a href="#" class="pregrado-imgs"><img src="./imagenes/campus_de_enfermeria_03_pregrado_s5.png" alt="semestre 5"></a>
                <a href="#" class="pregrado-imgs"><img src="./imagenes/campus_de_enfermeria_03_pregrado_s6.png" alt="semestre 6"></a>
                <a href="#" class="pregrado-imgs"><img src="./imagenes/campus_de_enfermeria_03_pregrado_s7.png" alt="semestre 7"></a>
                <a href="#" class="pregrado-imgs"><img src="./imagenes/campus_de_enfermeria_03_pregrado_s8.png" alt="semestre 8"></a>
                <a href="#" class="pregrado-imgs"><img src="./imagenes/campus_de_enfermeria_03_pregrado_s9.png" alt="semestre 9"></a>
                <a href="#" class="pregrado-imgs"><img src="./imagenes/campus_de_enfermeria_03_pregrado_s10.png" alt="semestre 10"></a>

            </div>


            <!-- Contenido semestre 1 -->
            <div id="semestre1Content" style="display: none;">
                <h2 class="tituloSemestre1">Semestre 1</h2>
                <ul class="materias">
                    <li>
                        <details>
                            <summary>Antropologia y Salud</summary>
                            <!-- Contenido de la materia 1 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Español Académico: habilidades comunicativas</summary>
                            <!-- Español Académico: habilidades comunicativas -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>English I</summary>
                            <!-- English I -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Biología celular y genética. Teoría y laboratorio</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Bioquímica I</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Desarrollo disciplinar de la enfermería</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Sociología de la salud I: sociedad y salud </summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Investigación I: fundamentos de investigación </summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>

                </ul>
            </div>
            <!-- SEMESTRE 2 -->
        
            <div id="semestre2Content" style="display: none;">
                <h2 class="tituloSemestre1">Semestre 2</h2>
                <ul class="materias">
                    <li>
                        <details>
                            <summary>materia 1</summary>
                            <!-- Contenido de la materia 1 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Español Académico: habilidades comunicativas</summary>
                            <!-- Español Académico: habilidades comunicativas -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>English I</summary>
                            <!-- English I -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Biología celular y genética. Teoría y laboratorio</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Bioquímica I</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                            <tr>
                                <th>Tipo de curso</th>
                                <th>Créditos</th>
                                <th>Horas de docencia</th>
                                <th>Horas de trabajo independiente</th>
                                <th>Total de horas</th>
                            </tr>
                            <tr>
                                <td>Teórico</td>
                                <td>1</td>
                                <td>24</td>
                                <td>24</td>
                                <td>48</td>
                            </tr>
                        </table>
                        <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                        <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                        <p class="resultadoText">
                            Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                        </p>
                        <div class="profe">
                            <h4 class="profeEncargado">Docente encargado: </h4>
                            <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                        </div>
                        <div class="contacto">
                            <h4 class="profeContacto">Contacto: </h4>
                            <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                        </div>
                    </details>
                    </li>
                    <li>
                        <details>
                            <summary>Desarrollo disciplinar de la enfermería</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Sociología de la salud I: sociedad y salud </summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Investigación I: fundamentos de investigación </summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>

                </ul>
            </div>
            <!-- SEMESTRE 3 -->
        
            <div id="semestre3Content" style="display: none;">
                <h2 class="tituloSemestre1">Semestre 3</h2>
                <ul class="materias">
                    <li>
                        <details>
                            <summary>materia 1</summary>
                            <!-- Contenido de la materia 1 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Español Académico: habilidades comunicativas</summary>
                            <!-- Español Académico: habilidades comunicativas -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>English I</summary>
                            <!-- English I -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Biología celular y genética. Teoría y laboratorio</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Bioquímica I</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Desarrollo disciplinar de la enfermería</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Sociología de la salud I: sociedad y salud </summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Investigación I: fundamentos de investigación </summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>

                </ul>
            </div>
            <!-- SEMESTRE 4 -->
        
            <div id="semestre4Content" style="display: none;">
                <h2 class="tituloSemestre1">Semestre 4</h2>
                <ul class="materias">
                    <li>
                        <details>
                            <summary>materia 1</summary>
                            <!-- Contenido de la materia 1 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Español Académico: habilidades comunicativas</summary>
                            <!-- Español Académico: habilidades comunicativas -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>English I</summary>
                            <!-- English I -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Biología celular y genética. Teoría y laboratorio</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Bioquímica I</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Desarrollo disciplinar de la enfermería</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Sociología de la salud I: sociedad y salud </summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Investigación I: fundamentos de investigación </summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>

                </ul>
            </div>
            <!-- SEMESTRE 5 -->
        
            <div id="semestre5Content" style="display: none;">
                <h2 class="tituloSemestre1">Semestre 5</h2>
                <ul class="materias">
                    <li>
                        <details>
                            <summary>materia 1</summary>
                            <!-- Contenido de la materia 1 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Español Académico: habilidades comunicativas</summary>
                            <!-- Español Académico: habilidades comunicativas -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>English I</summary>
                            <!-- English I -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Biología celular y genética. Teoría y laboratorio</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Bioquímica I</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Desarrollo disciplinar de la enfermería</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Sociología de la salud I: sociedad y salud </summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Investigación I: fundamentos de investigación </summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>

                </ul>
            </div>
            <!-- SEMESTRE 6 -->
        
            <div id="semestre6Content" style="display: none;">
                <h2 class="tituloSemestre1">Semestre 6</h2>
                <ul class="materias">
                    <li>
                        <details>
                            <summary>materia 1</summary>
                            <!-- Contenido de la materia 1 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Español Académico: habilidades comunicativas</summary>
                            <!-- Español Académico: habilidades comunicativas -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>English I</summary>
                            <!-- English I -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Biología celular y genética. Teoría y laboratorio</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Bioquímica I</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Desarrollo disciplinar de la enfermería</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Sociología de la salud I: sociedad y salud </summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Investigación I: fundamentos de investigación </summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>

                </ul>
            </div>
            <!-- SEMESTRE 7 -->
        
            <div id="semestre7Content" style="display: none;">
                <h2 class="tituloSemestre1">Semestre 7</h2>
                <ul class="materias">
                    <li>
                        <details>
                            <summary>materia 1</summary>
                            <!-- Contenido de la materia 1 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Español Académico: habilidades comunicativas</summary>
                            <!-- Español Académico: habilidades comunicativas -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>English I</summary>
                            <!-- English I -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Biología celular y genética. Teoría y laboratorio</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Bioquímica I</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Desarrollo disciplinar de la enfermería</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Sociología de la salud I: sociedad y salud </summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Investigación I: fundamentos de investigación </summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>

                </ul>
            </div>
            <!-- SEMESTRE 8 -->
        
            <div id="semestre8Content" style="display: none;">
                <h2 class="tituloSemestre1">Semestre 8</h2>
                <ul class="materias">
                    <li>
                        <details>
                            <summary>materia 1</summary>
                            <!-- Contenido de la materia 1 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Español Académico: habilidades comunicativas</summary>
                            <!-- Español Académico: habilidades comunicativas -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>English I</summary>
                            <!-- English I -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Biología celular y genética. Teoría y laboratorio</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Bioquímica I</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Desarrollo disciplinar de la enfermería</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Sociología de la salud I: sociedad y salud </summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Investigación I: fundamentos de investigación </summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>

                </ul>
            </div>
            <!-- SEMESTRE 9 -->
        
            <div id="semestre9Content" style="display: none;">
                <h2 class="tituloSemestre1">Semestre 9</h2>
                <ul class="materias">
                    <li>
                        <details>
                            <summary>materia 1</summary>
                            <!-- Contenido de la materia 1 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Español Académico: habilidades comunicativas</summary>
                            <!-- Español Académico: habilidades comunicativas -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>English I</summary>
                            <!-- English I -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Biología celular y genética. Teoría y laboratorio</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Bioquímica I</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Desarrollo disciplinar de la enfermería</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Sociología de la salud I: sociedad y salud </summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Investigación I: fundamentos de investigación </summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>

                </ul>
            </div>
            <!-- SEMESTRE 10 -->
        
            <div id="semestre10Content" style="display: none;">
                <h2 class="tituloSemestre1">Semestre 10</h2>
                <ul class="materias">
                    <li>
                        <details>
                            <summary>materia 1</summary>
                            <!-- Contenido de la materia 1 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Español Académico: habilidades comunicativas</summary>
                            <!-- Español Académico: habilidades comunicativas -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>English I</summary>
                            <!-- English I -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Biología celular y genética. Teoría y laboratorio</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Bioquímica I</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Desarrollo disciplinar de la enfermería</summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Sociología de la salud I: sociedad y salud </summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Investigación I: fundamentos de investigación </summary>
                            <!-- Contenido de la materia 2 -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td>Teórico</td>
                                    <td>1</td>
                                    <td>24</td>
                                    <td>24</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=4">6007001-Antropología y Salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Alirio López Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alirio.lopez@udea.edu.co</p>
                            </div>
                        </details>
                    </li>

                </ul>
            </div>

            


            <div class="pie">
                <img class="pieCurva" src="./imagenes/campus_de_enfermeria_pata_fondo.png" alt="">
                <img class="pieLogo" src="./imagenes/campus_de_enfermeria_pata_logo.png" alt="">
            </div>
        `;
    //  Semestre 1
    var semunoContent = document.getElementById('semestre1Content');
    var semunoLink = contenidoACargar.querySelector('.pregrado-imgs:first-child');
    semunoLink.addEventListener('click', function(event) {
            event.preventDefault();
            if (semunoContent.style.display === 'block') {
                semunoContent.style.display = 'none';
            } else {
                semunoContent.style.display = 'block';
            }
        });
    //  Semestre 2
    var semdosContent = document.getElementById('semestre2Content');
    var semdosLink = contenidoACargar.querySelector('.pregrado-imgs:nth-child(2)');
    semdosLink.addEventListener('click', function(event) {
            event.preventDefault();
            if (semdosContent.style.display === 'block') {
                semdosContent.style.display = 'none';
            } else {
                semdosContent.style.display = 'block';
            }
        });

    // Semestre 3
    var semtresContent = document.getElementById('semestre3Content');
    var semtresLink = contenidoACargar.querySelector('.pregrado-imgs:nth-child(3)');
    semtresLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (semtresContent.style.display === 'block') {
            semtresContent.style.display = 'none';
        } else {
            semtresContent.style.display = 'block';
        }
    });

    // Semestre 4
    var semcuatroContent = document.getElementById('semestre4Content');
    var semcuatroLink = contenidoACargar.querySelector('.pregrado-imgs:nth-child(4)');
    semcuatroLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (semcuatroContent.style.display === 'block') {
            semcuatroContent.style.display = 'none';
        } else {
            semcuatroContent.style.display = 'block';
        }
    });

    // Semestre 5
    var semcincoContent = document.getElementById('semestre5Content');
    var semcincoLink = contenidoACargar.querySelector('.pregrado-imgs:nth-child(5)');
    semcincoLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (semcincoContent.style.display === 'block') {
            semcincoContent.style.display = 'none';
        } else {
            semcincoContent.style.display = 'block';
        }
    });

    // Semestre 6
    var semseisContent = document.getElementById('semestre6Content');
    var semseisLink = contenidoACargar.querySelector('.pregrado-imgs:nth-child(6)');
    semseisLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (semseisContent.style.display === 'block') {
            semseisContent.style.display = 'none';
        } else {
            semseisContent.style.display = 'block';
        }
    });

    // Semestre 7
    var semsieteContent = document.getElementById('semestre7Content');
    var semsieteLink = contenidoACargar.querySelector('.pregrado-imgs:nth-child(7)');
    semsieteLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (semsieteContent.style.display === 'block') {
            semsieteContent.style.display = 'none';
        } else {
            semsieteContent.style.display = 'block';
        }
    });

    // Semestre 8
    var semochoContent = document.getElementById('semestre8Content');
    var semochoLink = contenidoACargar.querySelector('.pregrado-imgs:nth-child(8)');
    semochoLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (semochoContent.style.display === 'block') {
            semochoContent.style.display = 'none';
        } else {
            semochoContent.style.display = 'block';
        }
    });

    // Semestre 9
    var semnueveContent = document.getElementById('semestre9Content');
    var semnueveLink = contenidoACargar.querySelector('.pregrado-imgs:nth-child(9)');
    semnueveLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (semnueveContent.style.display === 'block') {
            semnueveContent.style.display = 'none';
        } else {
            semnueveContent.style.display = 'block';
        }
    });

    // Semestre 10
    var semdiezContent = document.getElementById('semestre10Content');
    var semdiezLink = contenidoACargar.querySelector('.pregrado-imgs:nth-child(10)');
    semdiezLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (semdiezContent.style.display === 'block') {
            semdiezContent.style.display = 'none';
        } else {
            semdiezContent.style.display = 'block';
        }
    });


    });
    
   


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

