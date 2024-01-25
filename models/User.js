const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPw) { // method to check the password as unhashed and return true or false
    return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
{
    id: { // id must be an integer, cannot be null, is the primary key, and auto increments
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: { // name must be a string and cannot be null 
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: { // email must be unique and must be a valid email address
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
        isEmail: true,
    },
    },
    password: { // password must be at least 8 characters long
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [8],
    },
    },
},
{
    hooks: {
        beforeCreate: async (newUserData) => { // beforeCreate hook to hash the password before the object is created in the database
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
        },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
}
);

module.exports = User;
