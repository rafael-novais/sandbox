import 'package:flutter/material.dart';

class Campo extends StatelessWidget {

  final TextEditingController controlador;
  final String rotulo;
  final String hint;
  final IconData icone;

  Campo({this.controlador, this.rotulo, this.hint, this.icone});

  @override
  Widget build(BuildContext context) {
    return Padding(
          padding: const EdgeInsets.all(8.0),
          child: TextField(
            controller: this.controlador,
            style: TextStyle(
              fontSize: 24.0
            ),
            decoration: InputDecoration(
              icon: this.icone != null ? Icon(icone) : null,
              labelText: this.rotulo,
              hintText: this.hint
            ),
          ),
        );
  }

}