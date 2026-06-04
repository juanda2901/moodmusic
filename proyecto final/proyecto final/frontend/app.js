let cancionesGlobal = [];
let moodActual = '';

const gradients = {

    feliz:
    'from-yellow-500 via-orange-500 to-pink-500',

    triste:
    'from-blue-900 via-indigo-900 to-black',

    motivado:
    'from-red-600 via-orange-600 to-yellow-500',

    relajado:
    'from-green-700 via-emerald-800 to-black'
};

window.onload = () => {

    setTimeout(() => {

        document
        .getElementById('pantallaCarga')
        .classList.add('opacity-0');

        setTimeout(() => {

            document
            .getElementById('pantallaCarga')
            .style.display = 'none';

        }, 1000);

    }, 2200);

    actualizarStats();

    mostrarHistorial();
};

async function buscarMusica(mood) {

    moodActual = mood;

    cambiarFondoMood(mood);

    guardarHistorial(mood);

    const loader =
    document.getElementById('loader');

    const resultado =
    document.getElementById('resultado');

    loader.classList.remove('hidden');

    resultado.innerHTML = '';

    try {

        const respuesta = await fetch(
            `http://192.168.1.106:3000/playlist/${mood}`
        );

        const datos = await respuesta.json();

        cancionesGlobal = datos.canciones;

        actualizarStats();

        mostrarCanciones(cancionesGlobal, mood);

        document
        .getElementById('seccionCanciones')
        .scrollIntoView({
            behavior: 'smooth'
        });

    } catch(error){

        console.log(error);

        mostrarToast('Error conectando con backend');

    } finally {

        loader.classList.add('hidden');
    }
}

function mostrarCanciones(canciones, mood){

    const resultado =
    document.getElementById('resultado');

    if(canciones.length === 0){

        resultado.innerHTML = `

            <div class="col-span-full text-center">

                <h2 class="text-white text-4xl font-black">
                    No se encontraron canciones
                </h2>

            </div>

        `;

        return;
    }

    resultado.innerHTML = `

        <div class="col-span-full mb-8">

            <h2 class="text-white text-5xl font-black capitalize">

                ${mood}

            </h2>

            <p class="text-gray-400 mt-2">

                Música recomendada para ti

            </p>

        </div>

        ${canciones.map((cancion, index) => `

            <div
                class="
                    bg-white/10
                    backdrop-blur-xl
                    border
                    border-white/10
                    hover:bg-white/20
                    hover:scale-[1.03]
                    duration-500
                    p-5
                    rounded-3xl
                    shadow-2xl
                    relative
                    overflow-hidden
                    group
                    opacity-0
                    animate-fadeIn
                "

                style="animation-delay:${index * 0.08}s"
            >

                <!-- Botones -->

                <div class="absolute top-4 right-4 flex gap-3 z-20">

                    <!-- Favorito -->

                    <button
                        onclick='guardarFavorito(${JSON.stringify(cancion)})'

                        class="

                            bg-black/40
                            backdrop-blur-xl

                            border
                            border-white/10

                            w-12
                            h-12

                            rounded-full

                            flex
                            items-center
                            justify-center

                            text-2xl

                            hover:bg-red-500
                            hover:scale-110
                            hover:shadow-red-500/50

                            duration-300
                            shadow-xl

                        "
                    >
                        ❤️
                    </button>

                    <!-- Eliminar -->

                    <button
                        onclick='eliminarFavorito("${cancion.titulo}")'

                        class="

                            bg-black/40
                            backdrop-blur-xl

                            border
                            border-white/10

                            w-12
                            h-12

                            rounded-full

                            flex
                            items-center
                            justify-center

                            text-xl

                            hover:bg-white
                            hover:text-black
                            hover:scale-110

                            duration-300
                            shadow-xl

                        "
                    >
                        ✖
                    </button>

                </div>

                <div class="overflow-hidden rounded-2xl">

                    <img
                        src="${cancion.imagen}"

                        class="
                            w-full
                            h-64
                            object-cover
                            rounded-2xl
                            group-hover:scale-110
                            duration-500
                        "
                    >

                </div>

                <h2 class="text-white text-2xl font-black mt-5">

                    ${cancion.titulo}

                </h2>

                <p class="text-gray-400 mt-1">

                    ${cancion.artista}

                </p>

                <div class="flex gap-3 mt-6">

                    <a
                        href="${cancion.spotify}"
                        target="_blank"

                        class="
                            flex-1
                            bg-green-500
                            hover:bg-green-400
                            hover:scale-105
                            text-black
                            font-black
                            py-3
                            rounded-full
                            text-center
                            duration-300
                        "
                    >
                        Spotify
                    </a>

                    <a
                        href="${cancion.youtube}"
                        target="_blank"

                        class="
                            flex-1
                            bg-red-500
                            hover:bg-red-400
                            hover:scale-105
                            text-white
                            font-black
                            py-3
                            rounded-full
                            text-center
                            duration-300
                        "
                    >
                        YouTube
                    </a>

                </div>

            </div>

        `).join('')}
    `;
}

function guardarFavorito(cancion){

    let favoritos =
    JSON.parse(localStorage.getItem('favoritos')) || [];

    const existe =
    favoritos.some(fav => fav.titulo === cancion.titulo);

    if(existe){

        mostrarToast('Ya está en favoritos ❤️');
        return;
    }

    favoritos.push(cancion);

    localStorage.setItem(
        'favoritos',
        JSON.stringify(favoritos)
    );

    actualizarStats();

    mostrarToast('Añadido a favoritos ❤️');
}

function eliminarFavorito(titulo){

    let favoritos =
    JSON.parse(localStorage.getItem('favoritos')) || [];

    favoritos =
    favoritos.filter(
        fav => fav.titulo !== titulo
    );

    localStorage.setItem(
        'favoritos',
        JSON.stringify(favoritos)
    );

    actualizarStats();

    mostrarToast('Eliminado de favoritos');

    mostrarFavoritos();
}

function mostrarFavoritos(){

    const favoritos =
    JSON.parse(localStorage.getItem('favoritos')) || [];

    cancionesGlobal = favoritos;

    mostrarCanciones(
        favoritos,
        '❤️ Favoritos'
    );

    document
    .getElementById('seccionCanciones')
    .scrollIntoView({
        behavior: 'smooth'
    });
}

function mostrarTrending(){

    const trending =
    cancionesGlobal.slice(0, 6);

    mostrarCanciones(
        trending,
        '🔥 Trending'
    );
}

function guardarHistorial(mood){

    let historial =
    JSON.parse(localStorage.getItem('historial')) || [];

    historial.unshift(mood);

    historial =
    [...new Set(historial)].slice(0, 5);

    localStorage.setItem(
        'historial',
        JSON.stringify(historial)
    );

    mostrarHistorial();
}

function mostrarHistorial(){

    const historial =
    JSON.parse(localStorage.getItem('historial')) || [];

    const contenedor =
    document.getElementById('historial');

    contenedor.innerHTML =
    historial.map(item => `

        <button
            onclick="buscarMusica('${item}')"

            class="
                bg-white/10
                hover:bg-white/20
                px-5
                py-3
                rounded-full
                text-white
                duration-300
            "
        >
            ${item}
        </button>

    `).join('');
}

function mostrarToast(texto){

    const toast =
    document.getElementById('toast');

    toast.innerText = texto;

    toast.classList.remove(
        'translate-x-[400px]'
    );

    setTimeout(() => {

        toast.classList.add(
            'translate-x-[400px]'
        );

    }, 2500);
}

function cambiarFondoMood(mood){

    const fondo =
    document.getElementById('fondoMood');

    fondo.className =
    `absolute inset-0 bg-gradient-to-br ${gradients[mood]}`;
}

function actualizarStats(){

    document.getElementById(
        'totalCanciones'
    ).innerText =
    cancionesGlobal.length;

    const favoritos =
    JSON.parse(localStorage.getItem('favoritos')) || [];

    document.getElementById(
        'totalFavoritos'
    ).innerText =
    favoritos.length;
}

document
.getElementById('buscador')
.addEventListener('input', function(e){

    const texto =
    e.target.value.toLowerCase().trim();

    if(texto === ''){

        mostrarCanciones(
            cancionesGlobal,
            moodActual || 'Resultados'
        );

        return;
    }

    const filtradas =
    cancionesGlobal.filter(cancion =>

        cancion.titulo
        .toLowerCase()
        .includes(texto)

        ||

        cancion.artista
        .toLowerCase()
        .includes(texto)
    );

    mostrarCanciones(
        filtradas,
        'Búsqueda'
    );
});

function volverInicio(){

    window.scrollTo({

        top: 0,

        behavior: 'smooth'
    });
}