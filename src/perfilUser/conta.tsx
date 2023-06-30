import Navbar from "../home/navbar";
import React from 'react';

function Conta() {
    const nome = "<<Davi Siqueira>>"
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <div className="text-center">
            <h1>Olá {nome}</h1> 
            <p className="mb-3">Seu email é davi.siqueira@estudante.ufla.br</p>
            <p className="mb-3">Seu cpf é 123.456.789.00</p>
            <button className="btn btn-primary">Alterar Dados</button>
            <br />
            <button className="btn btn-danger">Excluir Conta</button>
            <br />
            <button className="btn btn-secondary">Tela do Admin</button>
        </div>
        </div>
  );
}

export default Conta;


