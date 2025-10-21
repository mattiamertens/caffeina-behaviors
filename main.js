import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Text } from 'troika-three-text';


const companyFit = [
    {
        id: 0,
        keyword: 'Ambition',
        text_description: 'L’ambizione non mi è mai mancata, specialmente se si considera che uno dei miei obiettivi principali è quello di essere pienamente soddisfatto dal lavoro e dei progetti che faccio, ma chiaramente questo non è sempre semplice. <br>Uno dei passi che ho intrapreso per provare ad avvicinarmi al sopracitato obiettivo è stato proprio quello di aprire partita IVA parallelamente al mio lavoro da dipendente full time. Un tentativo che reputo riuscito, considerando che sono riuscito a soddisfare varie necessità personali percepite a livello lavorativo, come quella di avere maggiore ownership sui progetti e una gestione omnicomprensiva del lavoro: a partire dalle prime chiamate esplorative, alla fase di trattative (scope di progetto, durata, compenso, milestones), fino alla consegna del progetto stesso. <br><br>Per molti questi aspetti “laterali”, ma comunque intrinsecamente legati alla professione, possono risultare un impiccio. Invece per me, la loro gestione ha rappresentato un’evoluzione naturale della mia figura lavorativa. Un tassello fondamentale per raggiungere la mia ambizione, quella di lavorare a qualcosa ed esserne soddisfatto, il che si concretizza nel riuscire a produrre un progetto che mi renda orgoglioso di averci messo mano.'
    },
    {
        id: 1,
        keyword: 'Excellence',
        text_description: 'Questo è un aneddoto che spesso mi capita di rievocare con piacere con i diretti interessati, nonostante la situazione in quel momento fosse tutto meno che tranquilla e rilassata. Un progetto di gruppo universitario che era partito un po’ a rilento, in cui il team faticava un po’ ad ingranare per via di gusti, opinioni e ad oggi possiamo ammettere, anche un po’ di ego personale. La collaborazione all’interno del gruppo comunque si consolida, dopo una fase iniziale di conoscenza e assestamento, purtroppo questo aveva fatto sì che il tempo rimasto a disposizione fosse sempre meno. <br>E qui il nocciolo della questione, il progetto (prototipo, landing page, branding e video promo di un servizio) eravamo riusciti ad instradarlo, noi ci vedevamo tanto potenziale e perciò volevamo un prodotto finale che andasse oltre le aspettative, che eccellesse. Volevamo che gli utenti navigando il prototipo quasi non si accorgessero di star interagendo con un mockup, ma pensassero fosse già un prodotto sviluppato. Tutto ciò però si scontrava ampiamente con le tempistiche, poiché prototipi completamente interattivi hanno una lunga coda di lavoro. Perciò la decisione, quasi subconscia, è stata quella di lavorare al progetto fino a tarda notte quasi quotidianamente per 2 mesi e mezzo. <br> Non consegnare un prodotto che eccedesse le aspettative di tutti quando questa possibilità c’era, avrebbe rappresentato per sempre una grande occasione sprecata. Sono convinto che valga sempre la pena fare quello sforzo in più per raggiungere il risultato.'
    },
    {
        id: 2,
        keyword: 'Caring',
        text_description: 'Ho sempre avuto un atteggiamento di premura verso le persone che mi circondano. Di recente questo si è dimostrato con il cercare o passare dei clienti/progetti freelance ad amici/colleghi che magari stavano passando un periodo un po’ più scarico e potevano beneficiare in primis dell’entrata economica. Un comportamento che mi viene naturale, ma che ho avuto la fortuna di sperimentare sulla mia pelle a parti inverse quando ero io a chiedere una mano.<br> <br> Totalmente a margine, poiché nella presentazione alla voce “Caring” si parla di “Ti prendi cura dei colleghi…”, vorrei anche menzionare il fatto che 2 mesi fa ho riparato e sostituito il lavandino di un collega che mi aveva chiesto una mano. <br>Sono sicuro che questo non sia uno dei primi esempi che vi verrebbe in mente, però ho pensato fosse simpatico da citare.'
    },
    {
        id: 3,
        keyword: 'Growth',
        text_description: 'È quasi ironico per me pensare quanto calzi a pennello questa company behavior, specialmente guardando come ho trascorso gli ultimi 6-9 mesi. Dall’inizio del 2025 ho quasi smaniato per la mia crescita personale, a livello sia di hard- che soft-skill. <br> Mi sono attivato autonomamente per partecipare a conferenze; ho cercato, trovato e frequentato talk ed eventi di networking per conoscere esperti del settore, confrontarmi con loro e beneficiare della loro esperienza; ho seguito corsi online per accrescere e migliorare le mie competenze come ad esempio quelle di product manager. <br> In generale quest’anno ho dovuto affrontare varie sfide e difficoltà che mi hanno fatto crescere molto, sia da un punto di vista personale che lavorativo. Trovo difficile trasmettere il mio personale “growth mindset” attraverso il racconto di un singolo episodio proprio per come affronto la crescita personale (o in generale quasi tutte le company behaviors citate): è un impegno costante, una spinta sempre presente.'
    },
    {
        id: 4,
        keyword: 'Courage',
        text_description: 'Mi trovo a parlare di quella che probabilmente è l’esperienza un po’ più eclatante dal punto di vista del coraggio e dell’intraprendenza. A 20 anni, finita la maturità sapevo di voler studiare design a Milano, però prima di iniziare con l’università ero determinato a fare un’esperienza di vita, sebbene questa tipologie di cose non siano molto incoraggiate in Italia. Volevo andare in Australia a fare un anno di quello che in gergo viene chiamato “Work&Travel”, appunto lavorare e una volta messi sufficienti soldi da parte viaggiare un po’. <br>Così ho fatto, mi sono trasferito a Melbourne dove ho lavorato 3 mesi sostanzialmente come muratore (sono molto dedito a lavori manuali / fai da te, come si evince dalla storia del bagno del collega). Dopo questo primo periodo ho viaggiato con un minivan un mese, arrivando con un amico fino a Brisbane, città scelta perché avevo trovato lavoro come “nanny”, cioè un/a babysitter che di base abita con la famiglia. La scelta era ricaduta su questo perché ciò mi avrebbe permesso di avere vitto e alloggio, per fortuna non in condivisione con altre 6 persone e soprattutto sufficiente tempo libero per iniziare a studiare e prepararmi per i test di ingresso del Politecnico. <br> Un piano impeccabile sulla carta, se non fosse per il fatto che la famiglia non aveva capito che io fossi un ragazzo e non una ragazza e questo rappresentava per loro un enorme problema. Vi risparmio i dettagli delle 6 ore che sono state tra le più tese della mia vita, ma alla fine la situazione si è risolta più o meno bene, riuscendo a trovare una soluzione che andasse bene sia per me che per la famiglia.'
    },
    {
        id: 5,
        keyword: 'Proactivity',
        text_description: 'Questa è una behavior che mi sembra possa fare da collante tra tutte le altre a cui ho già risposto fino ad ora e che sottende molti comportamenti già menzionati precedentemente. N.B. Le behavior sono state scritte in ordine come elencate all’interno della presentazione. <br><br>I due esempi che invece vorrei portare a dimostrazione della mia proattività sono uno da un contesto più personale, mentre il secondo lavorativo. <br> Alla conferenza IEEE VIS 2024 di Vienna, una speaker all’interno del proprio panel ha parlato di tipologie differenti di viaggiatori, tra cui il “Proactive traveler”. Mi rispecchio molto nella definizione che è stata data di questo viaggiatore, cioè una persona che pianifica il viaggio, le tappe, le cose da vedere con anticipo prima di partire. Una persona che sa cosa andrà a fare mentre è in viaggio così da ottimizzarlo e non perdere tempo a cercare cosa fare e vedere. <br> Questo comportamento fa pienamente parte della mia persona e del mio approccio lavorativo, per ottimizzare passaggi di consegne, anticipare comunicazione e in generale pianificare le attività. È esattamente quello che ho fatto per sfruttare al meglio uno scalo di 7h a San Francisco. Mi ero preparato un breve itinerario da poter vedere, mi ero informato e avevo acquistato un pass giornaliero per le city bikes, così da ottimizzare costi e tempistiche di spostamento. Infine, mi ero salvato un paio di posti in cui poter mangiare in base al quartiere della città in cui sarei stato in quel momento. <br><br>Il secondo esempio è una situazione molto più classica: ho segnalato con largo anticipo una criticità che si stava venendo a delineare, in quanto la metodologia usata iniziava a non essere compatibile con la logica di funzionamento del software che stavamo utilizzando, in questo caso Doxee. Questo ha poi portato a un consistente refactoring del contenuto e dell’impostazione dello stesso per evitare che il software continuasse a crashare a intervalli di 40 minuti. La soluzione è stata applicare principi di atomic design all’interno di un contesto di generazione di polizze assicurative, composte da contenuti statici e dinamici. Questo ha permesso di avere del contenuto dinamico riutilizzabile e riadattabile, riducendo considerevolmente il tempo necessario e l’errore umano.',
    }
]

const container = document.getElementById('canvas');
const c_width = container.clientWidth;
const c_height = container.clientHeight;

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(45, c_width / c_height);
camera.position.z = 6.5;
camera.position.y = 6;


// Create a renderer
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(c_width, c_height);
renderer.setClearColor(0xEBEBEB, 1);

// Enable zooming
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = true;
controls.maxDistance = 9;
controls.minDistance = 5;


// MOUSE EVENTS FOR USER
document.addEventListener('wheel', () => {
    var zoom = controls.target.distanceTo(controls.object.position);
    console.log(zoom);
});

var isDragging = false;
var mouseMoved = false;
var previousMousePosition = { x: 0, y: 0 };
var autoRotate = true;

renderer.domElement.addEventListener('mousedown', (e) => {
    isDragging = true;
    autoRotate = false;
});

renderer.domElement.addEventListener('mouseup', (e) => {
    isDragging = false;
    console.log(mouseMoved);

    if (mouseMoved) {
        setTimeout(() => {
            autoRotate = true;
        }, 800); 
    };
    mouseMoved = false;
});

renderer.domElement.addEventListener('mousemove', (e) => {
    if (isDragging) {
        var deltaMove = {
            x: e.offsetX - previousMousePosition.x,
            y: e.offsetY - previousMousePosition.y
        };

        const rotationSpeed = 0.005;
        scene.rotation.y += deltaMove.x * rotationSpeed;
        scene.rotation.x += deltaMove.y * rotationSpeed;
        mouseMoved = true;
    }

    previousMousePosition = {
        x: e.offsetX,
        y: e.offsetY
    };
});

container.appendChild(renderer.domElement);


// MODEL LOADER
var elefantino;
function loadOBJ() {
    return new Promise((resolve, reject) =>{
        const objLoader = new OBJLoader();
        objLoader.load('../assets/elefantino.obj', (loadedModel) => {
            elefantino = loadedModel;
            elefantino.traverse( function(child) {
                if (child.isMesh) {
                    child.material = new THREE.MeshStandardMaterial({ color: 0xffffff, wireframe: false });     
                }
            });
            elefantino.scale.set(5,5,5);
            elefantino.position.set(0, -0.5, 0);
            elefantino.rotation.y = Math.PI/2;
            scene.add(elefantino);
            console.log('OBJ model loaded');
            resolve(elefantino);
        });
    });
}

loadOBJ().then(() => {
    console.log('Model loaded');
    animate();
}).catch((error) => {
    console.error('Error loading model:', error);
});

const radius = 3;
const clickSpheres = new THREE.Group();
const labelGroup = new THREE.Group();

for (let i=0; i<companyFit.length; i++){
    const angle = (i / companyFit.length) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const y = 0.5;
    const z = Math.sin(angle) * radius;

    const {keyword, text_description} = companyFit[i];

    const sphereGeometry = new THREE.SphereGeometry(0.1, 45, 45);
    const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(x, y, z);
    sphere.userData = { keyword, text_description };
    clickSpheres.add(sphere);

    const label = new Text();
    label.text = sphere.userData.keyword.toString();
    label.fontSize = 0.2;
    label.font = 'CSS/fonts/AG/ApfelGrotezk-Fett.woff';
    label.color = 0x0000ff;
    label.position.set(x, y-0.3, z);
    label.anchorX = 'center';
    label.anchorY = 'top';
    label.rotation.x = -Math.PI/4;
    label.sync();

    labelGroup.add(label);
}

scene.add(clickSpheres);
scene.add(labelGroup);


const light = new THREE.AmbientLight(0xffffff); 
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
directionalLight.position.set(-2, 1, -1);
scene.add(directionalLight);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight2.position.set(1, -1, 3);
scene.add(directionalLight2);

//BLUE HIGLIGHTS
// const directionalLight = new THREE.DirectionalLight(0x0000ff, 2.5);
// directionalLight.position.set(-2, 1, -1);
// scene.add(directionalLight);


// Mouse position
let mouse = new THREE.Vector2();
let raycaster = new THREE.Raycaster();
let hoveredSphere = null;

window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / c_width) * 2 - 1;
    mouse.y = - (event.clientY / c_height) * 2 + 1;

    const maxRotation = 20;

    popUp.style.transform = `translate(-50%, -50%) rotateX(${-mouse.y*maxRotation}deg) rotateY(${mouse.x*maxRotation}deg)`;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(clickSpheres.children);
    

    if (intersects.length > 0) {
        document.body.style.cursor = 'pointer';
        const intersectedObject = intersects[0].object;

        if (hoveredSphere !== intersectedObject) {
            // hoveredSphere?.material.emissive.set(0x000000);
            intersectedObject.material.color.set(0x333333);
            console.log('yellohhh');
        }

        hoveredSphere = intersectedObject;
        hoveredSphere.material.color.set(0x1919FF);
        gsap.to(hoveredSphere.scale, {x:1.2, y:1.2, z:1.2, duration:0.3});

    }
    else {
        document.body.style.cursor = 'default';
        if (hoveredSphere) {
            hoveredSphere.material.color.set(0x0000ff);
            gsap.to(hoveredSphere.scale, {x:1, y:1, z:1, duration:0.3});    
            hoveredSphere = null;
        }
    }
});

renderer.domElement.addEventListener('click', (event) => {
    sphereIntersection();
});

function sphereIntersection() {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(clickSpheres.children);

    if (intersects.length > 0) {
        document.body.style.cursor = 'pointer';
        // const intersectedObject = intersects[0].object;
        hoveredSphere = intersects[0].object;
        const sphereK = hoveredSphere.userData.keyword;
        const sphereDesc = hoveredSphere.userData.text_description;

        openPopup(sphereK, sphereDesc);

        // Hover effect
        // hoveredSphere.material.color.set(0xffffff);
        gsap.to(hoveredSphere.scale, {x:1.2, y:1.2, z:1.2, duration:0.3});
    }
    else {
        document.body.style.cursor = 'default';
        if (hoveredSphere) {
            // hoveredSphere.material.color.set(0xffffff);
            gsap.to(hoveredSphere.scale, {x:1, y:1, z:1, duration:0.3});    
            hoveredSphere = null;
        }
    }
}

const popUp = document.getElementById('3dPopUp');
const popUpTitle = popUp.querySelector('.popUp-title');
const popUpDescription = popUp.querySelector('.popUp-descriptionText');

function openPopup(sphereK, sphereDesc) {
    console.log('This should open popup for ' + sphereK);
    console.log('This is the description: ' + sphereDesc);
    autoRotate = false;
    popUpTitle.textContent = sphereK;
    popUpDescription.innerHTML = sphereDesc;

    popUp.classList.remove('hidden');
};

const closeButton = popUp.querySelector('.close-button');
closeButton.addEventListener('click', () => {
    popUp.classList.add('hidden');
    autoRotate = true;
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    if (autoRotate && !isDragging) {
        elefantino.rotation.y += 0.004;
        clickSpheres.rotation.y += 0.001;
        labelGroup.rotation.y += 0.001;
    }

    raycaster.setFromCamera(mouse, camera);

    renderer.render(scene, camera);
}

function onWindowResize() {
    const newWidth = container.clientWidth;
    const newHeight = container.clientHeight;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
    console.log('resizing');
}
window.addEventListener('resize', onWindowResize);