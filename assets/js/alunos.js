
var aluno = {};
var listaAlunos = [];
var totalAlunos = 0;

function adicionarAluno(){

    if ($('#nomeAluno').valid()){
        aluno.nome = $('#nomeAluno').val();
        $('#nomeAluno').removeClass('is-invalid');
    }else{
        $('#nomeAluno').addClass('is-invalid');
    }


    if ($('#primeiroBi').valid()){
        aluno.nota1 =  parseInt($('#primeiroBi').val());
        $('#primeiroBi').removeClass('is-invalid');
    }else{
        $('#primeiroBi').addClass('is-invalid');
    }

    if ($('#segundoBi').valid()){
        aluno.nota2 = parseInt($('#segundoBi').val());
        $('#segundoBi').removeClass('is-invalid');
    }else{
        $('#segundoBi').addClass('is-invalid');
    }

    if ($('#terceiroBi').valid()){
        aluno.nota3 = parseInt($('#terceiroBi').val());
        $('#terceiroBi').removeClass('is-invalid');
    }else{
        $('#terceiroBi').addClass('is-invalid');
    }

    if ($('#quartoBi').valid()){
        aluno.nota4 = parseInt($('#quartoBi').val());
        $('#quartoBi').removeClass('is-invalid');
    }else{
        $('#quartoBi').addClass('is-invalid');
    }

    aluno.total = calcularTotal(aluno.nota1, aluno.nota2, aluno.nota3, aluno.nota4);
    aluno.media = calcularMedia(aluno.total);
    aluno.situacao = calcularSituacao(aluno.media);

    console.log($('#nomeAluno').valid());
    console.log($('#formAdicionarAluno').validate());



    if ($('#nomeAluno').valid()
        && $('#primeiroBi').valid()
        && $('#segundoBi').valid()
        && $('#terceiroBi').valid()
        && $('#quartoBi').valid()){
            adicionarLinhaTabela(aluno);
        $(':input').val ('');
    }

    aluno = {};
}

function calcularTotal(nota1, nota2, nota3, nota4) {
    return nota1 + nota2 + nota3 + nota4;
}

function calcularMedia(valor) {
    return valor / 4;
}
function calcularSituacao(media) {
  const mediaAprovacao = 7;
  
  if (media >= mediaAprovacao) {
      return '<span class="badge badge-success">Aprovado</span>';
  } else {
    return '<span class="badge badge-danger">Reprovado</span>';
  }  
}

function adicionarLinhaTabela(objeto) {
    totalAlunos = totalAlunos + 1;
    

    var tabela = document.querySelector('table');
    var tr = tabela.insertRow(1);
    tr.innerHTML = '<td>'+objeto.nome+'</td>'+
                    '<td>'+objeto.nota1+'</td>'+
                    '<td>'+objeto.nota2+'</td>'+
                    '<td>'+objeto.nota3+'</td>'+
                    '<td>'+objeto.nota4+'</td>'+
                    '<td>'+objeto.total+'</td>'+
                    '<td>'+objeto.media+'</td>'+
                    '<td>'+objeto.situacao+'</td>'+
                    "<td><button type='button' class='btn btn-danger btn-sm' onclick='deletarLinha(this)'><i class='fas fa-minus-circle'></i></button></td>";
                    toastr.success('Aluno adicionado com sucesso!!!');
}

function deletarLinha(linha) {
    totalAlunos = totalAlunos - 1;
    

    var i = linha.parentNode.parentNode.rowIndex;
    document.querySelector('table').deleteRow(i);
    toastr.info('Aluno removido!!!');
    //document.getElementById('tableAlunos').deleteRow(index)
}
