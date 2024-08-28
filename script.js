// Typed.js for Animated Text in Hero Section
var typed = new Typed('#typed', {
    strings: ["Cybersecurity Enthusiast", "Ethical Hacker", "Digital Forensics Specialist", "Python Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

// Three.js for 3D Background Animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('background-visual').appendChild(renderer.domElement);

const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshBasicMaterial({ color: 0x0073b1, wireframe: true });
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

camera.position.z = 50;

function animate() {
    requestAnimationFrame(animate);

    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();
