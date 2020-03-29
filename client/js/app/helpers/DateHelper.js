class DateHelper{
    
    textoParaData(texto){
        return new Date(...texto.split('-')
        .map((item, indice) => indice == 1 ? item - 1 : item ));
    }

    dataParaTexto(data){
        return data.getDate()
        + '/' + (data.getMonth() + 1)
        + '/' + data.getFullYear();
    }
    
}