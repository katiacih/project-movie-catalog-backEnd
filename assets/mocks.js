var faker = require('faker')
module.exports.list = function(){
  var movies = [
  { 
    title: faker.name.firstName(),
    genre: faker.fake(),
    releaseDate : faker.date.past(),
    mainActors : [
      faker.name.findName(),
      faker.name.findName(),
      faker.name.findName(),
    ],
    summarized: faker.lorem.paragraph(),
    // trailer: 
    thunbnail: faker.image.cats(),
  }, 
  { 
    title: faker.name.firstName(),
    genre: faker.fake(),
    releaseDate : faker.date.past(),
    mainActors : [
      faker.name.findName(),
      faker.name.findName(),
      faker.name.findName(),
    ],
    summarized: faker.lorem.paragraph(),
    // trailer: 
    thunbnail: faker.image.cats(),
  }, 
  { 
    title: faker.name.firstName(),
    genre: faker.fake(),
    releaseDate : faker.date.past(),
    mainActors : [
      faker.name.findName(),
      faker.name.findName(),
      faker.name.findName(),
    ],
    summarized: faker.lorem.paragraph(),
    // trailer: 
    thunbnail: faker.image.cats(),
  }, 
  { 
    title: faker.name.firstName(),
    genre: faker.fake(),
    releaseDate : faker.date.past(),
    mainActors : [
      faker.name.findName(),
      faker.name.findName(),
      faker.name.findName(),
    ],
    summarized: faker.lorem.paragraph(),
    // trailer: 
    thunbnail: faker.image.cats(),
  }, 
  { 
    title: faker.name.firstName(),
    genre: faker.fake(),
    releaseDate : faker.date.past(),
    mainActors : [
      faker.name.findName(),
      faker.name.findName(),
      faker.name.findName(),
    ],
    summarized: faker.lorem.paragraph(),
    // trailer: 
    thunbnail: faker.image.cats(),
  }, 
  { 
    title: faker.name.firstName(),
    genre: faker.fake(),
    releaseDate : faker.date.past(),
    mainActors : [
      faker.name.findName(),
      faker.name.findName(),
      faker.name.findName(),
    ],
    summarized: faker.lorem.paragraph(),
    // trailer: 
    thunbnail: faker.image.cats(),
  }, 
]
 return movies;
}

