module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define("product", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
        },
    
    }, {
        timestamps: false
    })

    return Product

}