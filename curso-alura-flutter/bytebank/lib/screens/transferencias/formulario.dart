import 'package:bytebank/components/campo.dart';
import 'package:bytebank/models/transferencia.dart';
import 'package:flutter/material.dart';

class FormularioTransacao extends StatelessWidget {

  final TextEditingController _controladorCampoDescricao = TextEditingController();
  final TextEditingController _controladorCampoValor = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Criar transação')),
      body: Column(
        children: <Widget>[
        Campo(controlador: _controladorCampoDescricao, rotulo: 'Descrição gasto', hint: 'Compra no supermercado'),
        Campo(controlador: _controladorCampoValor, rotulo: 'Valor', hint: '50,00', icone: Icons.monetization_on),
        RaisedButton(
          child: Text('Confirmar'),
          onPressed: () => _criaTransacao(context),
        )
      ])
    );
  }

  void _criaTransacao(BuildContext context){
    String descricao = _controladorCampoDescricao.text;
    String valor = _controladorCampoValor.text;
    Transferencia transferencia = Transferencia(descricao, double.tryParse(valor));
    Navigator.pop(context, transferencia);
  }
}