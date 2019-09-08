import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/63ede31fb43c445ca737aa7600fd102e_9366/tenis-u_path-run.jpg"
          alt="Tênis"
        />
        <strong>Tênis U_PATH RUN</strong>
        <span>R$ 379,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/63ede31fb43c445ca737aa7600fd102e_9366/tenis-u_path-run.jpg"
          alt="Tênis"
        />
        <strong>Tênis U_PATH RUN</strong>
        <span>R$ 379,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/63ede31fb43c445ca737aa7600fd102e_9366/tenis-u_path-run.jpg"
          alt="Tênis"
        />
        <strong>Tênis U_PATH RUN</strong>
        <span>R$ 379,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/63ede31fb43c445ca737aa7600fd102e_9366/tenis-u_path-run.jpg"
          alt="Tênis"
        />
        <strong>Tênis U_PATH RUN</strong>
        <span>R$ 379,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
