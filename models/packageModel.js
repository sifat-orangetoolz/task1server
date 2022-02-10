module.exports = (sequelize, DataTypes) => {

    const Package = sequelize.define("package", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        validity: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            
        },
    
    }, {
        timestamps: false
    })

    return Package

}