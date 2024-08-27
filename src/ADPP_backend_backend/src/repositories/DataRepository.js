const Data = require('../models/Data');

class DataRepository {
    async findAll() {
        return await Data.find();
    }

    async findById(id) {
        return await Data.findById(id);
    }

    async create(data) {
        const newData = new Data(data);
        return await newData.save();
    }

    async update(id, updatedData) {
        return await Data.findByIdAndUpdate(id, updatedData, { new: true });
    }

    async delete(id) {
        return await Data.findByIdAndDelete(id);
    }
}

module.exports = new DataRepository();
