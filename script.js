document.alert('Tem certeza que deseja ascender?');

var quebrada = false;
        function mudaLampada(tipo) {
            
        if (!quebrada) {
        
         document.getElementById("luz").src = "./Imagens/" + tipo + ".jpg";
        if (tipo == 'lampada-quebrada') {
            quebrada = true;
        }
    }
}
