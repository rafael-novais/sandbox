class Transferencia {
  final String descricao;
  final double valor;

  Transferencia(this.descricao, this.valor);

  String toString() {
    return 'Transferencia {descrição: $descricao, valor: $valor}';
  }
}