const express = require('express');
const router = express.Router();
const { getAll, addDog } = require('../database/queries/dogs');
// will have all the dogs actions (like a controller)
router.get('/dogs', (_, response) => {
    // database('dogs')
    getAll()
    .then(dogs => response.json({ dogs }));
});

router.post('/dogs', (request, response) => {
    addDog(request.body)
        .then(dog => response.json(dog[0]));
    // const { name, age } = request.body;
    // database('dogs')
    //     .insert({ name, age })
    //     .returning(['name', 'age'])
    //     .then(dog => response.json(dog[0]));
});

module.exports = router;

