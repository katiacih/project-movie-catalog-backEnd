var mocks = require('../../assets/mocks');

module.exports.index = function(req, res, opts){
  // movieModel.all( movies => {
  //   res.render('../src', { 
  //     clientes: clients, 
  //     dados: req.body,
  //     errors: opts ? opts.error : {} });
  // });
  // res.send('PAgina Principal!');
  res.render('./movies', { 'movies': mocks.list()})


};

// module.exports.store = function(req, res ){
//   var dados = req.body;
//   dados.createdAt = new Date();
//   dados.updatedAt = new Date();

//   movieModel.save( dados , (( error, resultado) =>  {
//     if( error ){
//       res.redirect('/');
//       console.log('Erro ao adicionar');
//     }else{
//       res.redirect('/');
//     }
    
//   }) 
//   )
// };
// module.exports.show = function( req, res ){
//   movieModel.find(req.params.id, ( client => {
//     // console.log(client);
//     // res.sendStatus(200);
//     if( client[0] ){
//       res.render('site/detalhe', { client: client });
//     }else{
//       console.log('Esse registro nao existe');
//       res.redirect('/');
//     }
//     }) 
//   )
// };