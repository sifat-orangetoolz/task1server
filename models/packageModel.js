module.exports = (sequelize, DataTypes) => {

    const Package = sequelize.define("package", {
        title: {
            type: DataTypes.STRING,
        },
        amount: {
            type: DataTypes.DOUBLE,
        },
        validity: {
            type: DataTypes.DOUBLE,
        },
    
    }, {
        timestamps: false
    })

    return Package

}