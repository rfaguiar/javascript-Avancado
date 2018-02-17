class Pessoa {

    constructor(nome, sobrenome) {

        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get obtemNomeCompleto () {
        return nome + ' ' + sobrenome;
    }
}