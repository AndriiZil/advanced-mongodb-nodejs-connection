module.exports.DatabaseError = class DatabaseError extends Error {
    constructor(message) {
        super(message);
        this.code = 500;
    }
};