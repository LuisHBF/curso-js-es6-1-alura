class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);

        this.inputQuantidade = $('#quantidade');
        this.inputData = $("#data");
        this.inputValor = $("#valor");
    }

    adiciona(event){
        event.preventDefault();

        let data = new Date(...this.inputData.value.split('-')
        .map((item, indice) => indice == 1 ? item - 1 : item ));

        let negociacao = new Negociacao(
            data,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        let diaMesAno = negociacao.data.getDate()
        + '/' + (negociacao.data.getMonth() + 1)
        + '/' + negociacao.data.getFullYear();

        console.log(diaMesAno);

    }

}