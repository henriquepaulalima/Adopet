const pets = require('../../data/pets.json');

module.exports = () => ({
  pets: pets
});

console.log("JSON Server running...");