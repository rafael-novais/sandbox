import 'package:bytebank/models/transferencia.dart';
import 'package:bytebank/screens/transferencias/formulario.dart';
import 'package:flutter/material.dart';

class ListaTransferencias extends StatefulWidget {

  final List<Transferencia> _transferencias = List();

  @override
  State<StatefulWidget> createState() {
    return ListaTransferenciaState();
  }
}

class ListaTransferenciaState extends State<ListaTransferencias> {

  Widget build(BuildContext context) {
    return Scaffold(
          appBar: AppBar(title: Text('Transferencias')),
          body: ListView.builder(
            itemCount: widget._transferencias.length,
            itemBuilder: (context, indice) {
              final transferencia = widget._transferencias[indice];
              return ItemTransferencia(transferencia);
            },
        ),
        floatingActionButton: FloatingActionButton(
            child: Icon(Icons.add),
            onPressed: () {
              
              final Future<Transferencia> future = Navigator.push(context, MaterialPageRoute(builder: (context) {
                return FormularioTransacao();
              }));

              future.then((transferenciaRecebida) => {
                if(transferenciaRecebida != null){
                  setState(() {
                    widget._transferencias.add(transferenciaRecebida);
                  })
                }
              });

            },
          ),
    );
  }
}

class ItemTransferencia extends StatelessWidget {

  final Transferencia _transferencia;

  const ItemTransferencia(this._transferencia);

  @override
  Widget build(BuildContext context) {
    return Card(
            child: ListTile(
              leading: Icon(Icons.money_off),
              title: Text(this._transferencia.descricao),
              subtitle: Text(this._transferencia.valor.toString()),
            )
          );
  }
}