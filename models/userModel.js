module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {    
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        balance: {
            type: DataTypes.DOUBLE
        },
        validity_of_balance: {
            type: DataTypes.DOUBLE
        }, 
    
    }, {
        timestamps: false
    })

    return User

}