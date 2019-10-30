

var listaMateriais = {
    totalGeral: 0,
    totalDisponivel: 0,
    quantidadeItensListados: 0
};
var aluno = '';

carregarListbox();

function adicionarMaterial() {

    if ($('#nomeAluno').valid()) {
        aluno = $('#nomeAluno').val();
        $('#nomeAluno').removeClass('is-invalid');
    } else {
        $('#nomeAluno').addClass('is-invalid');
    }
    if ($('#possoGastar').valid()) {
        listaMateriais.valorMax = $('#possoGastar').val();
        $('#possoGastar').removeClass('is-invalid');
    } else {
        $('#possoGastar').addClass('is-invalid');
    }
    if ($('#materialEscolar').valid()) {
        listaMateriais.material = $('#materialEscolar').val();
        $('#materialEscolar').removeClass('is-invalid');
    } else {
        $('#materialEscolar').addClass('is-invalid');
    }
    if ($('#Quantidade').valid()) {
        listaMateriais.quantidade = $('#Quantidade').val();
        $('#Quantidade').removeClass('is-invalid');
    } else {
        $('#Quantidade').addClass('is-invalid');
    }
    if ($('#precoUnitario').valid()) {
        listaMateriais.precoUnitario = $('#precoUnitario').val();
        $('#precoUnitario').removeClass('is-invalid');
    } else {
        $('#precoUnitario').addClass('is-invalid');
    }

    listaMateriais.total = parseInt(listaMateriais.quantidade * listaMateriais.precoUnitario);
    listaMateriais.totalGeral = parseInt(listaMateriais.totalGeral + listaMateriais.total);
    listaMateriais.totalDisponivel = parseInt(listaMateriais.valorMax - listaMateriais.totalGeral);
    listaMateriais.quantidadeItensListados++;

    if (listaMateriais.totalDisponivel < 0) {
        $('#cardCor').addClass('bg-danger');
        $('#cardCor').removeClass('bg-success');
        $('#totalDisponivel').text('Voce ultrapassou ' + listaMateriais.totalDisponivel * (-1) + ' R$');


    } else {
        $('#cardCor').addClass('bg-success');
        $('#cardCor').removeClass('bg-danger');
        $('#totalDisponivel').text('Voce tem ' + listaMateriais.totalDisponivel + ' R$ disponíveis');
    }
    $('#totalGeral').text('R$ ' + listaMateriais.totalGeral);
    $('#quantidadeItensListados').text('Itens listados: ' + listaMateriais.quantidadeItensListados);
    $('#nomeAlunoTitulo').text(' Lista de materiais do aluno: ' + aluno);


    if ($('#nomeAluno').valid()
        && $('#possoGastar').valid()
        && $('#materialEscolar').valid()
        && $('#Quantidade').valid()
        && $('#precoUnitario').valid()) {
        adicionarLinhaTabela(listaMateriais);
        $('#Quantidade').val('');
        console.log('validado');
    }

    console.log(listaMateriais);

}

function habilitarBotao() {
    if ($('#possoGastar').valid()
        && $('#nomeAluno').valid()) {
        $('#botaoAdicionar').attr('disabled', false);
    } else {
        $('#botaoAdicionar').attr('disabled', true);
    }
}



function adicionarLinhaTabela(objeto) {

    var tabela = document.querySelector('table');
    var tr = tabela.insertRow(1);
    tr.innerHTML = '<td>' + objeto.material + '</td>' +
        '<td>' + objeto.quantidade + '</td>' +
        '<td>' + objeto.precoUnitario + '</td>' +
        '<td>' + objeto.total + '</td>';
}

function carregarListbox() {

    var itensDaLista = ['Caneta',
        'Lápis',
        'borracha',
        'caderno',
        'cartolina',
        'lapis de cor',
        'cola',
        'mochila',
        'giz de cera'
    ];

    itensDaLista.forEach(function (item) {
        $('#materialEscolar').append('<option>' + item + '</option>');
    });


}
/*
criar array listaItensComprados
listaMateriais.material
listaMateriais.precoUnitario
listaMateriais.quantidade
listaMateriais.total
*/