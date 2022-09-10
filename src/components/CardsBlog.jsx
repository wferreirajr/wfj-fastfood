import React from "react";
import "./CardsBlog.css"

function CardsBlob(props) {
    return(
        <>
            <div className="receitas">
                <img src={ props.receita.foto } alt="Foto da Receita"></img>
                <h2>{ props.receita.titulo }</h2>
                <p>{ props.receita.detalhes }</p>
                <a href={ props.receita.linkDetalhes }>Leia mais →</a>
            </div>
        </>
    );
}

export default CardsBlob;