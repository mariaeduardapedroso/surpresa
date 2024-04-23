$(document).ready(function() {
    // Obter a data de hoje
    var hoje = new Date();
    // Extrair o dia, mês e ano
    var dia = hoje.getDate();
    var mes = hoje.getMonth() + 1; // Os meses começam em 0, então adicionamos 1
    var ano = hoje.getFullYear();
    // Formatando a data para o formato YYYY-MM-DD
    var dataFormatada = ano + '-' + mes.toString().padStart(2, '0') + '-' + dia.toString().padStart(2, '0');

    // Carregar a frase do dia do arquivo frase.json
    $.getJSON('frase.json', function(data) {
        // Filtrar o JSON para obter a frase do dia atual
        var fraseDoDia = data.find(item => item.dia === dataFormatada);
        // Se não houver uma frase específica para o dia de hoje, selecione uma aleatória
        if (!fraseDoDia) {
            fraseDoDia = data[Math.floor(Math.random() * data.length)];
        }
        $('#fraseDoDia').text(fraseDoDia.frase);
    });
  
    // Carregar a foto do dia do arquivo foto.json
    $.getJSON('foto.json', function(data) {
        // Filtrar o JSON para obter a foto do dia atual
        var fotoDoDia = data.find(item => item.dia === dataFormatada);
        // Se não houver uma foto específica para o dia de hoje, selecione uma aleatória
        if (!fotoDoDia) {
            fotoDoDia = data[Math.floor(Math.random() * data.length)];
        }
        $('#fotoDoDia').attr('src', fotoDoDia.foto);
    });
});
