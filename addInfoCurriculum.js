document.getElementById('addExperienceBtn').addEventListener('click', function () {
    // Experiencia
    const form = `
        <form action="php/addInfoCurriculum.php" method="post" id="experienceForm">
            <label for="jobTitle">Cargo:</label>
            <input type="text" id="jobTitle" name="jobTitle" required>
            <br>
            <label for="company">Empresa:</label>
            <input type="text" id="company" name="company" required>
            <br>
            <label for="startDate">Fecha de inicio:</label>
            <input type="date" id="startDate" name="startDate" required>
            <br>
            <label for="endDate">Fecha de finalización:</label>
            <input type="date" id="endDate" name="endDate">
            <br>
            <button type="submit" class="buttonForm">Guardar</button>
        </form>
    `;
    document.getElementById('formContainer').innerHTML = form;
    document.getElementById('experienceForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const jobTitle = document.getElementById('jobTitle').value;
        const company = document.getElementById('company').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value || 'Actualidad';
        const experience = `
            <div class="experience">
                <div>
                    <button id="anyadirformacion">Añadir formación</button>
                    <button id="anyadiridiomas">Añadir idioma</button>
                    <br/>
                    <h2>${jobTitle}</h2>
                    <h3>${company}</h3>
                    <p>${startDate} - ${endDate}</p>
                    <div id="idiomas">
                        <h1>Idiomas</h1>
                        <br/>
                    </div>
                    <br/>
                    <div id="formIdiomaContainer"></div>
                    <br/>
                    <br/>
                    <div id="formacion">
                        <h1>Formaciones</h1>
                        <br/>
                    </div>
                    <br/>
                    <div id="formFormacionContainer"></div>
                </div>
            </div>
        `;
        document.getElementById('experiencesContainer').innerHTML += experience;
        document.getElementById('formContainer').innerHTML = '';

        // Idiomas
        document.getElementById('anyadiridiomas').addEventListener('click', function () {
            formacionForm = '';
            const idiomaForm = `
                <form action="php/addInfoCurriculum.php" method="post" id="formularioIdiomas">
                    <label for="idioma">Idioma:</label>
                    <input type="text" id="idioma" name="idioma" required>
                    <br>
                    <label for="nivel">Nivel:</label>
                    <input type="text" id="nivel" name="nivel" required>
                    <br>
                    <label for="entidad">Entidad certificadora:</label>
                    <input type="text" id="entidad" name="entidad" required>
                    <br>
                    <label for="fechaExp">Fecha de expedición:</label>
                    <input type="date" id="fechaExp" name="fechaExp">
                    <br>
                    <button type="submit">Guardar</button>
                </form>
            `;

            document.getElementById('formIdiomaContainer').innerHTML = idiomaForm;
            document.getElementById('formFormacionContainer').innerHTML = '';
            document.getElementById('formularioIdiomas').addEventListener('submit', function (eI) {
                eI.preventDefault();
                const idioma = document.getElementById('idioma').value;
                const nivel = document.getElementById('nivel').value;
                const entidad = document.getElementById('entidad').value;
                const fechaExp = document.getElementById('fechaExp').value;
                const idiomas = `
                    <div class="divIdioma">
                        <button class="esconder">Mostrar/Esconder</button>
                        <div>
                            <h2>${idioma}</h2>
                            <h3>Nivel: ${nivel}</h3>
                            <p>Entidad: ${entidad}</p>
                            <p>Fecha Expedición: ${fechaExp}</p>
                        </div>
                    </div>
                    <br/>
                `;
                document.getElementById('formIdiomaContainer').innerHTML = '';
                document.getElementById('idiomas').innerHTML += idiomas;
                var coll = document.getElementsByClassName("esconder");
                var i;

                for (i = 0; i < coll.length; i++) {
                    coll[i].addEventListener("click", function () {
                        this.classList.toggle("active");
                        var content = this.nextElementSibling;
                        if (content.style.display === "block") {
                            content.style.display = "none";
                        } else {
                            content.style.display = "block";
                        }
                    });
                }
            });
        });

        document.getElementById('anyadirformacion').addEventListener('click', function () {
            document.getElementById('formIdiomaContainer').innerHTML = '';
            const formacionForm = `
                <form action="php/addInfoCurriculum.php" method="post" id="formularioFormacion">
                    <label for="titul">Titulación:</label>
                    <input type="text" id="titul" name="titul" required>
                    <br>
                    <label for="centro">Centro:</label>
                    <input type="text" id="centro" name="centro" required>
                    <br>
                    <label for="anyoIni">Fecha de inicio:</label>
                    <input type="date" id="anyoIni" name="anyoIni" required>
                    <br>
                    <label for="anyoFin">Fecha de finalización:</label>
                    <input type="date" id="anyoFin" name="anyoFin">
                    <br>
                    <button type="submit">Guardar</button>
                </form>
            `;
            document.getElementById('formFormacionContainer').innerHTML = formacionForm;
            document.getElementById('formularioFormacion').addEventListener('submit', function (eF) {
                eF.preventDefault();
                const titulacion = document.getElementById('titul').value;
                const centro = document.getElementById('centro').value;
                const anyoInicio = document.getElementById('anyoIni').value;
                const anyoFinalizacion = document.getElementById('anyoFin').value;
                const formaciones = `
                    <div class="divFormacion">
                        <button class="esconder2">Mostrar/Esconder</button>
                        <div>
                            <h2>Titulación: ${titulacion}</h2>
                            <h3>Centro: ${centro}</h3>
                            <p>Año Inicio: ${anyoInicio}</p>
                            <p>Año Finalización: ${anyoFinalizacion}</p>
                        </div>
                    </div>
                    <br/>
                `;
                document.getElementById('formFormacionContainer').innerHTML = '';
                document.getElementById('formacion').innerHTML += formaciones;
                var coll = document.getElementsByClassName("esconder2");
                var i;

                for (i = 0; i < coll.length; i++) {
                    coll[i].addEventListener("click", function () {
                        this.classList.toggle("active");
                        var content = this.nextElementSibling;
                        if (content.style.display === "block") {
                            content.style.display = "none";
                        } else {
                            content.style.display = "block";
                        }
                    });
                }
            });
        });
    });
});
