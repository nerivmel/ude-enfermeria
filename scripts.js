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
               cursosContent.style.display = 'none';
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
               seminariosContent.style.display = 'none';
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
                <a href="#" class="pregrado-imgs"><img src="./imagenes/campus_de_enfermeria_03_pregrado_electivas.png" alt="electivas"></a>
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
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=6">6007002- Español Académico: habilidades comunicativas</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">   NaN  </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">  NaN  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> NaN </p>
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
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=7">9060101-English I</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">   NaN  </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail">  </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Biología celular y genética. Teoría y laboratorio</summary>
                            <!-- Contenido de la materia -->
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
                                    <td>4</td>
                                    <td>85</td>
                                    <td>107</td>
                                    <td>192</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=8">6007003-Biología celular y genética. Teoría y laboratorio.</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">  
                                Reconozco los elementos biológicos que constituyen a los seres vivos, sus funciones y las situaciones del entorno que los modifican a través de métodos expositivos, talleres y realización de laboratorios con el fin entender los procesos normales y su influencia en el proceso salud-enfermedad.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Viviana Cardona  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Bioquímica I</summary>
                            <!-- Contenido de la materia -->
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
                                    <td>34</td>
                                    <td>14</td>
                                    <td>48</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=9">6007004-Bioquímica I</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Reconozco las principales características estructurales y funcionales de las moléculas, su relación con los procesos bioquímicos y su regulación a partir de la integración de los conceptos teóricos aplicados en situaciones específicas para la toma de decisiones en el cuidado de enfermería                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Leidy Astrid Hoyos Giraldo  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> leidyhoyos@gmail.com</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Desarrollo disciplinar de la enfermería</summary>
                            <!-- Contenido de la materia -->
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
                                    <td>3</td>
                                    <td>48</td>
                                    <td>96</td>
                                    <td>144</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=10">6007005-Desarrollo disciplinar de la enfermería</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Conozco el desarrollo de la enfermería como profesión, ciencia, disciplina y arte del cuidado desde los métodos histórico y científico; su evolución social, teórica y práctica, y conozco los aportes al cuidado de la experiencia de la salud de las personas, grupos y comunidades en todos los contextos en los que viven y se desarrollan, teniendo como fuentes del conocimiento la teoría, la práctica y la investigación y reconociendo cómo los cambios sociales han incidido en ello.                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Alba Luz Rodríguez Acelas  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> aluz.rodriguez@udea.edu.co</p>
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
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=11">6007006-Sociología de la salud I: Sociedad y salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">   </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
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
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=12">6007007-Investigación I: fundamentos de investigación</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Conozco conceptos y definiciones de los paradigmas de investigación científica a partir de la participación cooperativa en seminarios y debates en el contexto histórico y académico de enfermería para asumir una postura crítica desde la producción de conocimientos científicos y la innovación.                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Jaime Horacio Toro Ocampo   </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> horacio.toro@udea.edu.co</p>
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
                            <summary>Formación ciudadana</summary>
                            <!-- Contenido de la materia -->
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
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=18">6007013-Formación ciudadana</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">   </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Administración y Gestión</summary>
                            <!-- Administración y Gestión -->
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
                                    <td>2</td>
                                    <td>48</td>
                                    <td>48</td>
                                    <td>96</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=17">6007011-Administración y Gestión</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Analizo las dimensiones de la administración y la gestión para un cuidado de enfermería ético, afectivo, relacional y científico-técnico por medio de la gestión del conocimiento, los valores y la tecnología en el contexto clínico y social-comunitario para el mantenimiento de la salud y la vida de las personas, familias y comunidades.                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Nairoby Cárdenas Velásquez  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> nairoby.cardenas@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Bioquímica II (Teoría y laboratorio)</summary>
                            <!-- Bioquímica II (Teoría y laboratorio) -->
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
                                    <td> NaN </td>
                                    <td>107</td>
                                    <td>96</td>
                                    <td>203</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=16">6007010-Bioquímica II (Teoría y laboratorio)</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Comprendo los principios, procesos y mecanismos bioquímicos de regulación metabólica, sus excesos y carencias, a partir del conocimiento de sus efectos sobre el individuo en los procesos de salud-enfermedad y de la integración teórico-práctica del curso con el fin de adquirir un pensamiento crítico y reflexivo.                             </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Luis Eduardo Paiva Duque  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> luis.paiva@udea.edu.co </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Morfofisiología I</summary>
                            <!-- Contenido de la materia -->
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
                                    <td>3</td>
                                    <td>72</td>
                                    <td>72</td>
                                    <td>144</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=15">6007009-Morfo fisiología I</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Explico la estructura, funcionamiento y relación de los diferentes órganos y sistemas del cuerpo humano a través de métodos expositivos y utilización de modelos anatómicos o virtuales con el fin de entender los procesos normales y patológicos para el cuidado de la persona en las diferentes etapas del ciclo vital.                             </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Alex Mauricio Lopera Arango  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alex.lopera@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>English II</summary>
                            <!-- Contenido de la materia  -->
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
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                        <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=14">9060102-English II</a></p>
                        <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                        <p class="resultadoText">

                        </p>
                        <div class="profe">
                            <h4 class="profeEncargado">Docente encargado: </h4>
                            <p class="profeNombre">   </p>
                        </div>
                        <div class="contacto">
                            <h4 class="profeContacto">Contacto: </h4>
                            <p class="profeEmail"> </p>
                        </div>
                    </details>
                    </li>
                    <li>
                        <details>
                            <summary>Fundamentación ética</summary>
                            <!-- Contenido de la materia -->
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
                                    <td>3</td>
                                    <td>51</td>
                                    <td>93</td>
                                    <td>144</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=13">6007008-Fundamentación ética</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                 Reconoce los fundamentos éticos y jurídicos de la profesión relacionados con el ejercicio ciudadano y de la enfermería mediante metodologías que promueven la reflexión crítica para fomentar un cuidado humanizado en los diferentes escenarios del ejercicio de la profesión.                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Jasmín Viviana Cacante Caballero  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> jasmin.cacante@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Investigación II: Bioestadística</summary>
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
                                    <td>3</td>
                                    <td>72</td>
                                    <td>72</td>
                                    <td>144</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=3">6007012 - Investigación II: Bioestadística</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Uso fundamentos teóricos, metodológicos y prácticos de la bioestadística como una herramienta de análisis en la investigación e innovación para la toma de decisiones con un sentido crítico en contextos relacionados con el cuidado de enfermería.​                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Diego Alejandro Salazar Blandón  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alejandro.salazar@udea.edu.co</p>
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
                            <summary>Electiva I</summary>
                            <!-- Contenido de la materia -->
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
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=43">Electiva I</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">   </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Procesos y procedimientos básicos de la enfermería</summary>
                            <!-- Procesos y procedimientos básicos de la enfermería -->
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
                                    <td>5</td>
                                    <td>170</td>
                                    <td>70</td>
                                    <td>240</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=42">6007018 - Procesos y procedimientos básicos de enfermería</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Demuestro los conocimientos, las habilidades sicomotoras y técnicas y los valores necesarios para la realización de los procesos y procedimientos básicos de enfermería a través de la simulación y la práctica en el contexto hospitalario con el objetivo de brindar un cuidado de enfermería seguro y de calidad a las personas durante las diferentes etapas del ciclo vital con el fin de aportar a su bienestar.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">  Yadira Cardozo García   </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> yadira.cardozo@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Teorías para el cuidado de enfermería</summary>
                            <!-- Teorías para el cuidado de enfermería -->
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
                                    <td>2</td>
                                    <td>34</td>
                                    <td>62</td>
                                    <td>96</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=41">6007017 - Teorías para el cuidado de enfermería</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                    Analizo las teorías de enfermería a través de situaciones de cuidado y fenómenos de investigación originados en los contextos clínicos, comunitarios y de gestión, buscando como fin el proceso de integración de la teoría, la práctica y la investigación en enfermería.                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Alba Luz Rodríguez Acelas  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> aluz.rodriguez@udea.edu.co </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Farmacología básica</summary>
                            <!-- Contenido de la materia  -->
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
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=40">6007016 - Farmacología básica</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Morfofisiología II</summary>
                            <!-- Contenido de la materia  -->
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
                                    <td>3</td>
                                    <td>72</td>
                                    <td>72</td>
                                    <td>144</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=39">6007015 - Morfo fisiología II</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Explico la estructura, funcionamiento y relación de los diferentes órganos y sistemas del cuerpo humano a través de métodos expositivos y utilización de modelos anatómicos o virtuales con el fin de entender los procesos normales y patológicos para el cuidado de la persona en las diferentes etapas del ciclo vital.                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Alex Mauricio Lopera Arango   </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> alex.lopera@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>English III</summary>
                            <!-- Contenido de la materia  -->
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
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=38">9060103 - English III</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">   </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Microbiología y parasitología </summary>
                            <!-- Contenido de la materia -->
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
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=5">6007014 - Microbiología y parasitología</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
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
                            <summary>Procesos y procedimientos avanzados de enfermería</summary>
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
                                    <td>5</td>
                                    <td>170</td>
                                    <td>70</td>
                                    <td>240</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=49">6007022 - Procesos y Procedimientos avanzados de enfermería</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Demuestro los conocimientos, habilidades sicomotoras y técnicas y los valores necesarios para la realización de los procesos y procedimientos avanzados de enfermería a través de la simulación y la práctica en el contexto hospitalario con el objetivo de brindar un cuidado de enfermería seguro y de calidad a las personas durante las diferentes etapas del ciclo vital con el fin de aportar a su bienestar.                             </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Yadira Cardozo García  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> yadira.cardozo@udea.edu.co </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Investigación III: Epidemiología</summary>
                            <!-- Investigación III: Epidemiología -->
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
                                    <td>3</td>
                                    <td>51</td>
                                    <td>93</td>
                                    <td>144</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=48">6007023 - Investigación III: Epidemiología</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Integro los elementos teóricos, metodológicos y prácticos de la epidemiología en el análisis de la situación de salud de individuos, familias y comunidades mediante las diferentes herramientas epidemiológicas con el fin de responder a las necesidades de salud según el contexto donde ejerce el profesional de enfermería.                             </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> María Eugenia Hincapié Zapata   </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> meugenia.hincapie@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Ética del cuidado con perspectiva de derecho</summary>
                            <!-- Ética del cuidado con perspectiva de derecho -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=47">6007021 - Ética del cuidado con perspectiva de derecho</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">   </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Farmacología aplicada</summary>
                            <!-- Contenido de la materia  -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=46">6007020 - Farmacología aplicada</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">   </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>English IV</summary>
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
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=45">9060104 - English IV</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Psicología, salud y cuidado</summary>
                            <!-- Contenido de la materia -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=44">6007019 - Psicología, salud y cuidado</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">   </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Electiva I</summary>
                            <!-- Contenido de la materia  -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href=" ">NaN</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">   </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
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
                            <summary>Cuidado del ser humano en la dimensión sexual</summary>
                            <!-- Contenido de la materia  -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=56">6007028 - Cuidado del ser humano en la dimensión sexual</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Proceso de envejecimiento y vejez</summary>
                            <!-- Proceso de envejecimiento y vejez -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=55">6007027 - Proceso de envejecimiento y vejez</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Cuidado de enfermería de la salud mental</summary>
                            <!-- Cuidado de enfermería de la salud mental -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=54">6007026 - Cuidado de enfermería de la salud mental</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Cuidado al adulto con alteraciones crónicas de salud</summary>
                            <!-- Contenido de la materia  -->
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
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=53">6007025 - Cuidado al adulto con alteraciones crónicas de salud</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">   </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Proceso de enfermería y el sistema de lenguaje estandarizado</summary>
                            <!-- Contenido de la materia  -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=52">6007024 - Proceso de enfermería y el sistema de lenguaje estandarizado</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">   </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>English V</summary>
                            <!-- Contenido de la materia -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=50">9060105 - English V</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">   </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
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
                            <summary>Sociología de la salud II: Aportes de la sociología a la enfermería</summary>
                            <!-- Contenido de la materia -->
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
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=61">6007033 - Sociología de la salud II: Aportes de la sociología a la enfermería</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Analizo el proceso salud-enfermedad-cuidado de individuos y colectivos a partir de los elementos teóricos, metodológicos y prácticos que ofrece la sociología de la salud, teniendo en cuenta el contexto sociocultural y político con el propósito de identificar la complejidad de la práctica profesional en los distintos campos de actuación y reconociendo los aportes desde las ciencias sociales a la salud en perspectiva inter y transdisciplinar.                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Lilliana Blandón  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> lilliana.blandon@udea.edu.co </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Investigación IV: Tipos de estudio</summary>
                            <!-- Investigación IV: Tipos de estudio -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=60">6007032 - Investigación IV: Tipos de estudio</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Gestión en enfermería</summary>
                            <!-- Gestión en enfermería -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=59">6007031 - Gestión en enfermería</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Cuidado de enfermería a la persona con padecimiento mental y a su familia</summary>
                            <!-- Contenido de la materia  -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=58">6007030 - Cuidado de enfermería a la persona con padecimiento mental y a su familia</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Cuidado de enfermería al paciente en situación de urgencias y emergencias</summary>
                            <!-- Contenido de la materia -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=57">6007029 - Cuidado de enfermería al paciente en situación de urgencias y emergencias</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">   </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
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
                            <summary>Electiva II</summary>
                            <!-- Contenido de la materia -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=66">Electiva II</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">   </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Investigación V: Diseño de proyecto de investigación</summary>
                            <!-- Investigación V: Diseño de proyecto de investigación -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=65">6007037 - Investigación V: Diseño de proyecto de investigación</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">   </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Cuidado al niño y adolescente</summary>
                            <!-- Cuidado al niño y adolescente -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=64">6007036 - Cuidado al niño y Adolescente</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">
                                Identifico las formas heterogéneas en que las personas dan sentido al proceso salud-enfermedad-cuidado-atención-muerte a través de contenidos teóricos y de estudio de casos de la antropología, la enfermería y el cuidado cultural en el contexto sociocultural, territorial y cotidiano con el propósito de encontrar puntos de convergencia para pensar la práctica y la producción de conocimientos en enfermería.
                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Cuidado de la salud familiar y comunitaria I</summary>
                            <!-- Contenido de la materia  -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=63">6007035 - Cuidado de la salud familiar y comunitaria I</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Cultura de los cuidados</summary>
                            <!-- Contenido de la materia  -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=62">6007034 - Cultura de los cuidados</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
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
                            <summary>Investigación VI: ejecución de la investigación</summary>
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
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=71">6007041 - Investigación VI: ejecución de la investigación</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">   </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Cuidado a la salud de los trabajadores</summary>
                            <!-- Cuidado a la salud de los trabajadores -->
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
                                    <td>2</td>
                                    <td>48</td>
                                    <td>48</td>
                                    <td>96</td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=70">6007040 - Cuidado a la salud de los trabajadores</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> Catalina Sanmartín Laverde  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> catalina.sanmartin@udea.edu.co</p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Cuidado de la salud familiar y comunitaria II</summary>
                            <!-- Cuidado de la salud familiar y comunitaria II-->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=69">6007038 - Cuidado de la salud familiar y comunitaria II</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Cuidado al ser humano durante el periodo perioperatorio</summary>
                            <!-- Contenido de la materia -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=68">6007039 - Cuidado al Ser Humano durante el periodo peri-operatorio</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
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
                            <summary>Electiva III</summary>
                            <!-- Contenido de la materia -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=74">Electiva III</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Cuidado en la etapa reproductiva y perinatal</summary>
                            <!-- Cuidado en la etapa reproductiva y perinatal -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=73">6007043 - Cuidado en la etapa reproductiva y perinatal</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre"> </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Cuidado de la salud familiar y comunitaria III</summary>
                            <!-- Cuidado de la salud familiar y comunitaria III -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=72">6007042 - Cuidado de la salud familiar y comunitaria III</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
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
                            <summary>Práctica profesional comunitaria</summary>
                            <!-- Contenido de la materia  -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=76">6007045 - Práctica profesional comunitaria</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">   </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
                            </div>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Práctica profesional clínica</summary>
                            <!-- Práctica profesional clínica-->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=75">6007044 - Práctica profesional clínica</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">  </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
                            </div>
                        </details>
                    </li>
                </ul>
            </div>

            <!-- ELECTIVAS -->
            <div id="electivasContent" style="display: none;">
                <h2 class="tituloSemestre1">Electivas</h2>
                <ul class="materias">
                    <li>
                        <details>
                            <summary>La sexualidad en la vida humana</summary>
                            <!-- Contenido de la materia  -->
                            <table>
                                <tr>
                                    <th>Tipo de curso</th>
                                    <th>Créditos</th>
                                    <th>Horas de docencia</th>
                                    <th>Horas de trabajo independiente</th>
                                    <th>Total de horas</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <a class="linksito", href="https://campus.enfermeriaudea.co/course/view.php?id=77">La sexualidad en la vida Humana</a></p>
                            <h4 class="tituloResultado">Resultado de aprendizaje</h4>
                            <p class="resultadoText">

                            </p>
                            <div class="profe">
                                <h4 class="profeEncargado">Docente encargado: </h4>
                                <p class="profeNombre">   </p>
                            </div>
                            <div class="contacto">
                                <h4 class="profeContacto">Contacto: </h4>
                                <p class="profeEmail"> </p>
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
                semdosContent.style.display = 'none';
                semtresContent.style.display = 'none';
                semcuatroContent.style.display = 'none';
                semcincoContent.style.display = 'none';
                semseisContent.style.display = 'none';
                semsieteContent.style.display='none';
                semochoContent.style.display='none';
                semnueveContent.style.display='none';
                semdiezContent.style.display='none';
                electivasContent.style.display = 'none'
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
                semunoContent.style.display='none';
                semdosContent.style.display = 'block';
                semtresContent.style.display = 'none';
                semcuatroContent.style.display = 'none';
                semcincoContent.style.display = 'none';
                semseisContent.style.display = 'none';
                semsieteContent.style.display='none';
                semochoContent.style.display='none';
                semnueveContent.style.display='none';
                semdiezContent.style.display='none';
                electivasContent.style.display = 'none'
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
            semunoContent.style.display='none';
            semdosContent.style.display='none';
            semtresContent.style.display = 'block';
            semcuatroContent.style.display = 'none';
            semcincoContent.style.display = 'none';
            semseisContent.style.display = 'none';
            semsieteContent.style.display='none';
            semochoContent.style.display='none';
            semnueveContent.style.display='none';
            semdiezContent.style.display='none'; 
            electivasContent.style.display = 'none' 
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
            semunoContent.style.display='none';
            semdosContent.style.display='none';
            semtresContent.style.display='none';
            semcuatroContent.style.display = 'block';
            semcincoContent.style.display = 'none';
            semseisContent.style.display = 'none';
            semsieteContent.style.display='none';
            semochoContent.style.display='none';
            semnueveContent.style.display='none';
            semdiezContent.style.display='none';
            electivasContent.style.display = 'none'

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
            semunoContent.style.display='none';
            semdosContent.style.display='none';
            semtresContent.style.display='none';
            semcuatroContent.style.display='none';
            semcincoContent.style.display = 'block';
            semseisContent.style.display = 'none';
            semsieteContent.style.display='none';
            semochoContent.style.display='none';
            semnueveContent.style.display='none';
            semdiezContent.style.display='none';
            electivasContent.style.display = 'none'

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
            semunoContent.style.display='none';
            semdosContent.style.display='none';
            semtresContent.style.display='none';
            semcuatroContent.style.display='none';
            semcincoContent.style.display='none';
            semseisContent.style.display = 'block';
            semsieteContent.style.display='none';
            semochoContent.style.display='none';
            semnueveContent.style.display='none';
            semdiezContent.style.display='none';
            electivasContent.style.display = 'none'

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
            semunoContent.style.display='none';
            semdosContent.style.display='none';
            semtresContent.style.display='none';
            semcuatroContent.style.display='none';
            semcincoContent.style.display='none';
            semseisContent.style.display='none';
            semsieteContent.style.display = 'block';
            semochoContent.style.display='none';
            semnueveContent.style.display='none';
            semdiezContent.style.display='none';
            electivasContent.style.display = 'none'
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
            semunoContent.style.display='none';
            semdosContent.style.display='none';
            semtresContent.style.display='none';
            semcuatroContent.style.display='none';
            semcincoContent.style.display='none';
            semseisContent.style.display='none';
            semsieteContent.style.display='none';
            semochoContent.style.display = 'block';
            semnueveContent.style.display='none';
            semdiezContent.style.display='none';
            electivasContent.style.display = 'none'
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
            semunoContent.style.display='none';
            semdosContent.style.display='none';
            semtresContent.style.display='none';
            semcuatroContent.style.display='none';
            semcincoContent.style.display='none';
            semseisContent.style.display='none';
            semsieteContent.style.display='none';
            semochoContent.style.display='none';
            semnueveContent.style.display = 'block';
            semdiezContent.style.display='none';
            electivasContent.style.display = 'none'
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
            semunoContent.style.display='none';
            semdosContent.style.display='none';
            semtresContent.style.display='none';
            semcuatroContent.style.display='none';
            semcincoContent.style.display='none';
            semseisContent.style.display='none';
            semsieteContent.style.display='none';
            semochoContent.style.display='none';
            semnueveContent.style.display='none';
            semdiezContent.style.display = 'block';
            electivasContent.style.display = 'none'
        }
    });
    var electivasContent = document.getElementById('electivasContent');
    var electivasLink = contenidoACargar.querySelector('.pregrado-imgs:nth-child(11)');
    electivasLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (electivasContent.style.display === 'block') {
            electivasContent.style.display = 'none';
        } else {
            semunoContent.style.display='none';
            semdosContent.style.display='none';
            semtresContent.style.display='none';
            semcuatroContent.style.display='none';
            semcincoContent.style.display='none';
            semseisContent.style.display='none';
            semsieteContent.style.display='none';
            semochoContent.style.display='none';
            semnueveContent.style.display='none';
            semdiezContent.style.display = 'none';
            electivasContent.style.display='block';
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
                <a href="#" class="posgrado-imgs"><img src="./imagenes/campus_de_enfermeria_04_tarejta_01.png" alt="posgrado 1"></a>
                <a href="#" class="posgrado-imgs"><img src="./imagenes/campus_de_enfermeria_04_tarejta_02.png" alt="posgrado 2"></a>
                <a href="#" class="posgrado-imgs"><img src="./imagenes/campus_de_enfermeria_04_tarejta_03.png" alt="posgrado 3"></a>
                <a href="#" class="posgrado-imgs"><img src="./imagenes/campus_de_enfermeria_04_tarejta_04.png" alt="posgrado 4"></a>
                <a href="#" class="posgrado-imgs"><img src="./imagenes/campus_de_enfermeria_04_tarejta_05.png" alt="posgrado 5"></a>
                <a href="#" class="posgrado-imgs"><img src="./imagenes/campus_de_enfermeria_04_tarejta_06.png" alt="posgrado 6"></a>

            </div>

            <div id="pos1Content" style="display: none;">
                <h2 class="tituloSemestre1">Doctorado en Enfermería</h2>
                
            </div> 

            <div id="pos2Content" style="display: none;">
                <h2 class="tituloSemestre1">Maestría en Enfermería</h2>
                
            </div>
            <div id="pos3Content" style="display: none;">
                <h2 class="tituloSemestre1">Maestría en Salud Colectiva</h2>
                
            </div>
            <div id="pos4Content" style="display: none;">
                <h2 class="tituloSemestre1">Especialización en Enfermería en Cuidado al Adulto en Estado Crítico de Salud</h2>
                
            </div>
            <div id="pos5Content" style="display: none;">
                <h2 class="tituloSemestre1">Especialización en Enfermería en Cuidado al Niño en Estado Crítico de Salud</h2>
                
            </div>
            <div id="pos6Content" style="display: none;">
                <h2 class="tituloSemestre1">Especialización en Enfermería Oncológica</h2>
                
            </div>

            <div class="pie">
                <img class="pieCurva" src="./imagenes/campus_de_enfermeria_pata_fondo.png" alt="">
                <img class="pieLogo" src="./imagenes/campus_de_enfermeria_pata_logo.png" alt="">
            </div>
        `;
        //POSTGRADO1
        var pos1Content = document.getElementById('pos1Content');
        var pos1Link = contenidoACargar.querySelector('.posgrado-imgs:first-child');
        pos1Link.addEventListener('click', function(event) {
                event.preventDefault();
                if (pos1Content.style.display === 'block') {
                    pos1Content.style.display = 'none';
                } else {
                    pos1Content.style.display = 'block';
                    pos2Content.style.display = 'none';
                    pos3Content.style.display = 'none';
                    pos4Content.style.display = 'none'; 
                    pos5Content.style.display = 'none';
                    pos6Content.style.display = 'none';      
            }
        });
        //POSTGRADO2
        var pos2Content = document.getElementById('pos2Content');
        var pos2Link = contenidoACargar.querySelector('.posgrado-imgs:nth-child(2)');
        pos2Link.addEventListener('click', function(event) {
                event.preventDefault();
                if (pos2Content.style.display === 'block') {
                    pos2Content.style.display = 'none';
                } else {
                    pos1Content.style.display = 'none';
                    pos2Content.style.display = 'block';  
                    pos3Content.style.display = 'none';
                    pos4Content.style.display = 'none'; 
                    pos5Content.style.display = 'none';
                    pos6Content.style.display = 'none';      
            }
        });
        //POSTGRADO3
        var pos3Content = document.getElementById('pos3Content');
        var pos3Link = contenidoACargar.querySelector('.posgrado-imgs:nth-child(3)');
        pos3Link.addEventListener('click', function(event) {
                event.preventDefault();
                if (pos3Content.style.display === 'block') {
                    pos3Content.style.display = 'none';
                } else {
                    pos1Content.style.display = 'none';
                    pos2Content.style.display = 'none';
                    pos3Content.style.display = 'block'; 
                    pos4Content.style.display = 'none';
                    pos5Content.style.display = 'none';
                    pos6Content.style.display = 'none';      
            }
        });
        //POSTGRADO4
        var pos4Content = document.getElementById('pos4Content');
        var pos4Link = contenidoACargar.querySelector('.posgrado-imgs:nth-child(4)');
        pos4Link.addEventListener('click', function(event) {
                event.preventDefault();
                if (pos4Content.style.display === 'block') {
                    pos4Content.style.display = 'none';
                } else {
                    pos1Content.style.display = 'none';
                    pos2Content.style.display = 'none';
                    pos3Content.style.display = 'none';
                    pos4Content.style.display = 'block'; 
                    pos5Content.style.display = 'none';
                    pos6Content.style.display = 'none'     
            }
        });
        //POSTGRADO5
        var pos5Content = document.getElementById('pos5Content');
        var pos5Link = contenidoACargar.querySelector('.posgrado-imgs:nth-child(5)');
        pos5Link.addEventListener('click', function(event) {
                event.preventDefault();
                if (pos5Content.style.display === 'block') {
                    pos5Content.style.display = 'none';
                } else {
                    pos1Content.style.display = 'none';
                    pos2Content.style.display = 'none';
                    pos3Content.style.display = 'none';
                    pos4Content.style.display = 'none';
                    pos5Content.style.display = 'block';
                    pos6Content.style.display = 'none';       
            }
        });
        //POSTGRADO6
        var pos6Content = document.getElementById('pos6Content');
        var pos6Link = contenidoACargar.querySelector('.posgrado-imgs:nth-child(6)');
        pos6Link.addEventListener('click', function(event) {
                event.preventDefault();
                if (pos6Content.style.display === 'block') {
                    pos6Content.style.display = 'none';
                } else {
                    pos1Content.style.display = 'none';
                    pos2Content.style.display = 'none';
                    pos3Content.style.display = 'none';
                    pos4Content.style.display = 'none';
                    pos5Content.style.display = 'none';
                    pos6Content.style.display = 'block';       
            }
        });
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
        <div class="extensionImg">
            <a href="#" class="extension-imgs"><img src="./imagenes/campus_de_enfermeria_05_btn_01.png" alt="extension 1"></a>
            <a href="#" class="extension-imgs"><img src="./imagenes/campus_de_enfermeria_05_btn_02.png" alt="extension 2"></a>
            <a href="#" class="extension-imgs"><img src="./imagenes/campus_de_enfermeria_05_btn_03.png" alt="extension 3"></a>
            <a href="#" class="extension-imgs"><img src="./imagenes/campus_de_enfermeria_05_btn_04.png" alt="extension 4"></a>
            <a href="#" class="extension-imgs"><img src="./imagenes/campus_de_enfermeria_05_btn_05.png" alt="extension 5"></a>
            
            <!-- Contenido de diplomado -->
            <div id="diplomadoContent" style="display: none;">
                <h2 class="tituloSeminario">Diplomados</h2>
                <div class="diplomadosImg">
                  <a href="#" class="acordeon-diplomado"><img src="./imagenes/campus_de_enfermeria_04_diplomado_01.png" alt="diplomado 1"></a>
                  <a href="#" class="acordeon-diplomado"><img src="./imagenes/campus_de_enfermeria_04_diplomado_02.png" alt="diplomado 2"></a>
                  <a href="#" class="acordeon-diplomado"><img src="./imagenes/campus_de_enfermeria_04_diplomado_03.png" alt="diplomado 3"></a>
                  <a href="#" class="acordeon-diplomado"><img src="./imagenes/campus_de_enfermeria_04_diplomado_04.png" alt="diplomado 4"></a>
                </div>
            </div>

            <!-- Contenido de certificaciones -->
            <div id="certificacionesContent" style="display: none;">
                <h2 class="tituloSeminario">Certificaciones</h2>
                <div class="certificacionesImg">
                  <a href="#" class="acordeon-certificaciones"><img src="./imagenes/campus_de_enfermeria_04_certificaciones_01.png" alt="certificaciones 1"></a>
                  <a href="#" class="acordeon-certificaciones"><img src="./imagenes/campus_de_enfermeria_04_certificaciones_02.png" alt="certificaciones 2"></a>
                  <a href="#" class="acordeon-certificaciones"><img src="./imagenes/campus_de_enfermeria_04_certificaciones_03.png" alt="certificaciones 3"></a>
                </div>
            </div>
        
            <!-- Contenido de cursos -->
            <div id="cursos2Content" style="display: none;">
                <h2 class="tituloSeminario">Cursos</h2>
                <div class="cursos2Img">
                  <a href="#" class="acordeon-cursos2"><img src="./imagenes/campus_de_enfermeria_04_cursos_01.png" alt="curso 1"></a>
                  <a href="#" class="acordeon-cursos2"><img src="./imagenes/campus_de_enfermeria_04_cursos_02.png" alt="curso 2"></a>
                  <a href="#" class="acordeon-cursos2"><img src="./imagenes/campus_de_enfermeria_04_cursos_03.png" alt="curso 3"></a>
                  <a href="#" class="acordeon-cursos2"><img src="./imagenes/campus_de_enfermeria_04_cursos_04.png" alt="curso 4"></a>
                  <a href="#" class="acordeon-cursos2"><img src="./imagenes/campus_de_enfermeria_04_cursos_05.png" alt="curso 5"></a>

                </div>
            </div>

            <!-- Contenido de seminarios -->
            <div id="seminarios2Content" style="display: none;">
                <h2 class="tituloSeminario">Seminarios</h2>
                <div class="seminarios2Img">
                  <a href="#" class="acordeon-seminarios2"><img src="./imagenes/campus_de_enfermeria_04_seminario_01.png" alt="seminario 1"></a>
                  <a href="#" class="acordeon-seminarios2"><img src="./imagenes/campus_de_enfermeria_04_seminario_02.png" alt="seminario 1"></a>
                  <a href="#" class="acordeon-seminarios2"><img src="./imagenes/campus_de_enfermeria_04_seminario_03.png" alt="seminario 1"></a>
                </div>
            </div>

            <!-- Contenido de proyectos -->
            <div id="proyectosContent" style="display: none;">
                <h2 class="tituloSeminario">Proyectos</h2>
                <div class="proyectosImg">
                  <a href="#" class="acordeon-proyectos"><img src="./imagenes/campus_de_enfermeria_04_proyecto_01.png" alt="proyecto 1"></a>
                  <a href="#" class="acordeon-proyectos"><img src="./imagenes/campus_de_enfermeria_04_proyecto_01.png" alt="proyecto 2"></a>
                  <a href="#" class="acordeon-proyectos"><img src="./imagenes/campus_de_enfermeria_04_proyecto_01.png" alt="proyecto 3"></a>
                  </div>
            </div>

        </div>
        <div id="modaldiplomado" class="modaldiplomado">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <div id="diplomadoModalContent" class="diplomado-content">
                        <!-- Contenido del diplomado -->
                    </div>
                </div>
        </div>
        <div id="modalcert" class="modalcert">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <div id="certModalContent" class="cert-content">
                        <!-- Contenido del diplomado -->
                    </div>
                </div>
        </div>
       
        
        <div class="pie">
            <img class="pieCurva" src="./imagenes/campus_de_enfermeria_pata_fondo.png" alt="">
            <img class="pieLogo" src="./imagenes/campus_de_enfermeria_pata_logo.png" alt="">
        </div>
        `
        //  Diplomados
        var diplomadoContent = document.getElementById('diplomadoContent');
        var diplomadoLink = contenidoACargar.querySelector('.extension-imgs:first-child');
        diplomadoLink.addEventListener('click', function(event) {
            event.preventDefault();
            if (diplomadoContent.style.display === 'block') {
                diplomadoContent.style.display = 'none';
            } else {
                diplomadoContent.style.display = 'block';
                certificacionesContent.style.display = 'none';
                seminarios2Content.style.display = 'none';
                cursos2Content.style.display = 'none';
                proyectosContent.style.display = 'none';
            }
        });
        //  Certificaciones
        var certificacionesContent = document.getElementById('certificacionesContent');
        var certificacionesLink = contenidoACargar.querySelector('.extension-imgs:nth-child(2)');
        certificacionesLink.addEventListener('click', function(event) {
            event.preventDefault();
            if (certificacionesContent.style.display === 'block') {
                certificacionesContent.style.display = 'none';
            } else {
                certificacionesContent.style.display = 'block';
                diplomadoContent.style.display = 'none';
                seminarios2Content.style.display = 'none';
                cursos2Content.style.display = 'none';
                proyectosContent.style.display = 'none';  
            }
        });
        //  Cursos
        var cursos2Content = document.getElementById('cursos2Content');
        var cursos2Link = contenidoACargar.querySelector('.extension-imgs:nth-child(3)');
        cursos2Link.addEventListener('click', function(event) {
            event.preventDefault();
            if (cursos2Content.style.display === 'block') {
                cursos2Content.style.display = 'none';
            } else {
                cursos2Content.style.display = 'block';
                seminarios2Content.style.display = 'none';
                certificacionesContent.style.display = 'none';
                diplomadoContent.style.display = 'none';
                proyectosContent.style.display = 'none';
            }
        });
         //  Seminarios
        var seminarios2Content = document.getElementById('seminarios2Content');
        var seminarios2Link = contenidoACargar.querySelector('.extension-imgs:nth-child(4)');
        seminarios2Link.addEventListener('click', function(event) {
            event.preventDefault();
            if (seminarios2Content.style.display === 'block') {
                seminarios2Content.style.display = 'none';
            } else {
                seminarios2Content.style.display = 'block';
                certificacionesContent.style.display = 'none';
                cursos2Content.style.display = 'none';
                diplomadoContent.style.display = 'none';
                proyectosContent.style.display = 'none';   
            }
        });
        //  Proyectos
        var proyectosContent = document.getElementById('proyectosContent');
        var proyectosLink = contenidoACargar.querySelector('.extension-imgs:nth-child(5)');
        proyectosLink.addEventListener('click', function(event) {
            event.preventDefault();
            if (proyectosContent.style.display === 'block') {
                proyectosContent.style.display = 'none';
            } else {
                proyectosContent.style.display = 'block';
                certificacionesContent.style.display = 'none';
                cursos2Content.style.display = 'none';
                diplomadoContent.style.display = 'none';
                seminarios2Content.style.display = 'none';
            }
        });
        //modal diplomado
        var diplomadoModalLink = contenidoACargar.querySelectorAll('.acordeon-diplomado');
        var modaldiplomado = document.getElementById("modaldiplomado");
        var diplomadoModalContent = document.getElementById("diplomadoModalContent");
        diplomadoModalLink.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                // Agregar aquí el contenido del curso correspondiente
                var diplomadoAlt = this.querySelector('img').alt;
                diplomadoModalContent.innerHTML = "<h2>" + diplomadoAlt + "</h2><p>Descripción del diplomado " + diplomadoAlt + "</p>"+ "</h2><p>Duración " + "xxxxxxx" + "</p>"+ "</h2><p>Requisitos de inscripción" + "xxxxxxx"+"</p>" +"valor"+" xxxxxx"  + "</p>"+ "</h2><p>Fechas " + "xxxxx"+ "</p>";
                modaldiplomado.style.display = "block";
            });
        });
        var closeBtn = document.getElementsByClassName("close")[0];
        closeBtn.addEventListener('click', function() {
            modaldiplomado.style.display = "none";
        });
        window.addEventListener('click', function(event) {
            if (event.target == modalcurso) {
                modaldiplomado.style.display = "none";
            }
        });
        //modal certificaciones
        var certModalLink = contenidoACargar.querySelectorAll('.acordeon-certificaciones');
        var modalcert = document.getElementById("modalcert");
        var certModalContent = document.getElementById("certModalContent");
        certModalLink.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                // Agregar aquí el contenido del curso correspondiente
                var certAlt = this.querySelector('img').alt;
                certModalContent.innerHTML = "<h2>" + certAlt + "</h2><p>Descripción del certificado " + certAlt + "</p>"+ "</h2><p>Duración " + "xxxxxxx" + "</p>"+ "</h2><p>Requisitos de inscripción" + "xxxxxxx"+"</p>" +"valor"+" xxxxxx"  + "</p>"+ "</h2><p>Fechas " + "xxxxx"+ "</p>";
                modalcert.style.display = "block";
            });
        });
        var closeBtn = document.getElementsByClassName("close")[0];
        closeBtn.addEventListener('click', function() {
            modalcert.style.display = "none";
        });
        window.addEventListener('click', function(event) {
            if (event.target == modalcurso) {
                modalcert.style.display = "none";
            }
        });

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

