import React from "react";

const itens = [
    { nome: "Coloração Capilar", preco: 50.0, imagem: "/public/imagens/tintura.webp" },
    { nome: "Desing de Sobrancelha", preco: 50.0, imagem: "/public/imagens/desing.jpeg" },
    { nome: "Cutilagem dos pés", preco: 30.0, imagem:"/public/imagens/unhas.jpeg" },
    { nome: "Depilação(Axila,Nariz,Pernas e Virilha)", preco: 30.0, imagem: "/public/imagens/Depilação.jpg" },
    { nome: "Cutilagem  das Mãos", preco: 35.0, imagem: "/public/imagens/unhas.jpg" },

];

function Cardapio(){
    return(
        <div className="menu-container">
            {itens.map((item, index) => (
                <div key={index} className="menu-item">
                    <h2> {item.nome}  </h2>
                    <p><h3>R$ {item.preco.toFixed(2)} </h3> </p> 
                    <img src={item.imagem} className="menu-item-img"></img>
                    <input type="number" className="quantidade-input" placeholder="qtde." />
                </div>
            ))
            }
        </div>
    )
}


export { Cardapio };

