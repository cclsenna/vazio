class AnotacoesController{

    constructor(){
        this.arr=[];
    }


    addAnotacao(){
        let title=document.querySelector('#titulo').value;
        let note=document.querySelector('#nota').value;
        let novo=new Anotacoes(title,note);
        this.arr.push(novo);       

    }

}