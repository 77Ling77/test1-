
// Создание холста для отрисовки сцены
var canvas = document.getElementById('render-canvas');

// Подключение движка Babylon.js
var engine = new BABYLON.Engine(canvas, true);

// Создание и инициализация движка и сцены
var scene = new BABYLON.Scene(engine);

// Создание камеры и света
var camera = new BABYLON.ArcRotateCamera('camera', 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);
camera.attachControl(canvas, true);
var light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);

// Запуск цикла рендеринга
engine.runRenderLoop(function () {
    scene.render();
});

// Создание объектов на сцене
var sphere = BABYLON.Mesh.CreateSphere('sphere', 16, 5, scene);
sphere.position.set(0, 0, 5);
var material = new BABYLON.StandardMaterial('sphereMaterial', scene);
material.diffuseColor = new BABYLON.Color3(1, 0, 0);
sphere.material = material;

// Обработка событий
window.addEventListener('resize', function () {
    engine.resize();
});

canvas.addEventListener('touchend', function (event) {
    var x = event.clientX;
    var y = event.clientY;
    sphere.position.x = x;
    sphere.position.y = ty
