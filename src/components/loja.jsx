import React from "react";

const Lojas = [
   
    { nome: "Trança Nago", preco: 30.0, imagem: "/public/imagens/trança33.jpeg" },
    { nome: "Trança Boxeadora", preco: 50.0, imagem: "/public/imagens/boxer-boxeadora.png" },
    { nome: "Extensão de cilios Tufinhos", preco: 50.0, imagem: "/public/imagens/exten.jpg" },
    { nome: "maquiagem de hallowen ", preco: 150.0, imagem: "/public/imagens/hallow.jpeg" },
];

function Compos(){
    return(
        <div className=" loja-container">
            {Lojas.map((loja, index) => (
                <div key={index} className="menu-item">
                    <h2> {loja.nome}  </h2>
                   <p> <h3>R$ {loja.preco.toFixed(2)} </h3> </p> 
                    <img src={loja.imagem} className="menu-item-img"></img>
                    <input type="number" className="quantidade-input" placeholder="qtde." />
                </div>
            ))
            }
        </div>
    )
}
export default Compos;
