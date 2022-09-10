import React from "react";
import CardsBlob from "./components/CardsBlog";

const frutosMar = {
  foto: "https://panapesca.com/wp-content/uploads/2022/04/seafood.png",
  titulo: "New seafood recipe perfect for losing weight",
  detalhes: "Hoje trazemos uma receita caseira de rosca doce para você saborear com aquele cafezinho gostoso",
  linkDetalhes: "https://google.com",
}

const proteinas = {
  foto: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/protein-or-carbs-balance-700-350-b14529c.jpg",
  titulo: "Balance of proteins, fats and carbo. How do I get it?",
  detalhes: "Hoje trazemos uma receita caseira de rosca doce para você saborear com aquele cafezinho gostoso",
  linkDetalhes: "https://google.com",
}

const saudaveis = {
  foto: "https://english.aawsat.com/sites/default/files/styles/article_img_top/public/2019/10/15/illustrative_image_of_food._getty_images.jpg",
  titulo: "The importance of proper and healthy eating.",
  detalhes: "Hoje trazemos uma receita caseira de rosca doce para você saborear com aquele cafezinho gostoso",
  linkDetalhes: "https://google.com",
}

function App() {
  return (
    <div>
      <div className="artigos">
        <h1>Artigos e dicas úteis</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum consequat nisl vel pretium lectus quam id. Laoreet sit amet cursus sit amet. Convallis posuere morbi leo urna molestie at. Egestas tellus rutrum tellus pellentesque eu tincidunt. Non arcu risus quis varius quam. Dictum sit amet justo donec enim diam vulputate ut pharetra. Eget dolor morbi non arcu risus quis varius. Arcu bibendum at varius vel pharetra vel turpis nunc. In tellus integer feugiat scelerisque. Egestas sed tempus urna et pharetra pharetra massa massa.</p>
      </div>
      <div className="linha">
        <CardsBlob receita={frutosMar}/>
        <CardsBlob receita={proteinas}/>
        <CardsBlob receita={saudaveis}/>
      </div>
    </div>
  );
}

export default App;

