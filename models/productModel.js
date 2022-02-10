module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define("product", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
    
    }, {
        timestamps: false
    })

    return Product

}