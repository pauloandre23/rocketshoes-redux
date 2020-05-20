import React from 'react';
import {MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md';
import {connect} from 'react-redux';
import { Container, ProductTable, Total } from './styles';

 function Cart() {
  return (
    <Container> 
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTDE</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>Total</span>
          <strong>R$129,00</strong>
        </Total>
      </footer>
    </Container>
  );
}



export default Cart;
