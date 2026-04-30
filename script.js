function mostratxt(a) {
    if (a==1) {
        let recebe = document.getElementById('mensagem');
        document.getElementById("text01").textContent = recebe.value;
        recebe.value = "";
    } if (a==2) {
        let retornar = "";
        document.getElementById("text01").textContent = retornar;
    }
}
