const btnAbrir = document.querySelector('.btn-enviar-conta');
const modalCamera = document.getElementById('modal-camera');
const btnFechar = document.getElementById('btn-fechar-camera');
const btnTirarFoto = document.getElementById('btn-tirar-foto');
const video = document.getElementById('camera-video');
const canvas = document.getElementById('camera-canvas');
const foto = document.getElementById('camera-foto');
const instrucao = document.getElementById('camera-instrucao');

let stream = null;

const constraints = {
    video: { facingMode: "environment" }
};

btnAbrir.addEventListener('click', async () => {
    modalCamera.classList.remove('hidden');
    
    video.style.display = 'block';
    foto.classList.add('hidden');
    btnTirarFoto.style.display = 'flex';
    instrucao.innerText = "Alinhe a conta na tela e tire a foto";

    try {
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;
    } catch (error) {
        console.error("Erro ao acessar a câmera: ", error);
        alert("Não foi possível acessar a câmera. Verifique as permissões de vídeo.");
        modalCamera.classList.add('hidden');
    }
});

btnTirarFoto.addEventListener('click', () => {
    if (!stream) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imgData = canvas.toDataURL('image/png');
    foto.src = imgData;

    video.style.display = 'none';
    foto.classList.remove('hidden');
    
    btnTirarFoto.style.display = 'none';
    instrucao.innerText = "Foto capturada com sucesso!";
});

btnFechar.addEventListener('click', () => {
    modalCamera.classList.add('hidden');
    
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        video.srcObject = null;
        stream = null;
    }
});
