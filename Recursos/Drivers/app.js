const form = document.getElementById("form");
const titulo = document.getElementById("titulo");

// SOLO si existe el título
if (titulo) {
    titulo.innerText = "Registro de " + config.tipo;
}

// SOLO si existe el formulario (evita errores en otras vistas)
if (form) {
    config.campos.forEach(campo => {
        const div = document.createElement("div");

        div.innerHTML = `
            <label>${campo.label}</label>
            <input type="${campo.type}" name="${campo.name}" />
        `;

        form.appendChild(div);
    });
}

// GUARDAR
function guardar() {
    let data = {};

    config.campos.forEach(campo => {
        const value = document.querySelector(`[name="${campo.name}"]`).value;
        data[campo.name] = value;
    });

    let registros = JSON.parse(localStorage.getItem(config.tipo)) || [];
    registros.push(data);

    localStorage.setItem(config.tipo, JSON.stringify(registros));

    alert("Guardado correctamente");

    // REDIRECCIÓN (importante)
    window.location.href = "index.html";
}
function logout(){
    localStorage.removeItem("session");
    window.location.href = "login.html";
}
