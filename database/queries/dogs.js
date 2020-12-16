const database = require('../database');

module.exports = {
    getAll() {
        return database('dogs')
    },

    addDog(requestBody) {
        const { name, age } = request.Body;
        return database('dogs')
            .insert({ name, age })
            .returning(['name', 'age'])
    }
}