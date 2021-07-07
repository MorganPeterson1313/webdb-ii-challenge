
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {makeOfCar:'Jeep', model:'Wrangler', vinNumber:'12345678',milageOfCar:'68000', TransmissionType:'manual transmission', titleStatus:'clear'},
        {makeOfCar:'Chevy', model:'Corcica', vinNumber:'15263258',milageOfCar:'28000', TransmissionType:'cvt', titleStatus:'clear'},
        {makeOfCar:'Dodge', model:'Charger', vinNumber:'15234785',milageOfCar:'89000', TransmissionType:'semi', titleStatus:'clear'}
      ]);
    });
};
