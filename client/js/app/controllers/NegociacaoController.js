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
        .map((item, indice) => {
            return indice == 1 ? item - 1 : item
        }));

        let negociacao = new Negociacao(
            data,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        console.log(negociacao);
    }

}