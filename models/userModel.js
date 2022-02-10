module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {    
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        balance: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        validity_of_balance: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        }, 
    
    }, {
        timestamps: false
    })

    return User

}