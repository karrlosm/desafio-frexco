# Desafio Frexco

# Hortifruti do Karlos

 *Este desafio consiste na implementação de um sistema web onde haja a listagem de itens consultando uma API, a adição dos itens no carrinho, 
 e um carrinho de compras onde nele seja possível alterar a quantidade de cada item, remover um item específico, exibir as informações nutricionais
 dos itens, e limpar o carrinho.*

Das Tecnologias:  
 - **React JS;
 - **JavaScript;
 - **HTML e CSS3.
   
  A princípio não consegui consultar a API devido o seguinte erro:
  
  *Access to XMLHttpRequest at 'https://www.fruityvice.com/api/fruit/all' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.*

  Porém, consegui contorná-lo utilizando a extensão *Moesif Origin & CORS Changer*, disponível para Chrome e Edge.
# Arquitetura 

Para esse sistema, optei por dividir os arquivos nas seguintes camadas:  

- **components**: Componentes JSX;
- **css**: Arquivos CSS3 para estilização;  
- **img**: Imagens / .svg utilizados no sistema.

# Mapeando Rotas

- localhost:3000/ : Home do sistema - Listagem dos produtos;
- localhost:3000/cart : Carrinho de compras.

Espero que eu tenha conseguido alcançar as expectativas. :)
