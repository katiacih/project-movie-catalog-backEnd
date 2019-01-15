

module.exports = function(){


  var express = require('express');
  var app = express();
  var expressLayouts = require('express-ejs-layouts')
  var port = 3000 
 
  app.set('view engine', 'ejs')    
  // Setamos que nossa engine será o ejs
  app.use(expressLayouts)         
   // Definimos que vamos utilizar o express-ejs-layouts na nossa aplicação
  //  Aparentemente é uma página em html apenas, 
  // porém quando iniciamos nosso aplicativo e requisitamos alguma rota que devolve o arquivo ejs ,
  //  o express-ejs-layouts procura o arquivo layout.ejs dentro da pasta views ,
  //   então onde está o código <%- body %> será carregado o conteúdo de outro arquivo ejs. 
  //   No próximo passo você vai entender como funciona essa ligação entre os arquivos. 


  // Rotas
  var rotas = require('./routes');
  rotas(app);

  app.listen(port, function () {
    console.log('App listening on port 3000!');
  });
};
