module.exports = (sequelize, DataTypes) => {

    const Billing = sequelize.define("billing", {
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        }
    })

    return Billing

}