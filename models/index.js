const dbConfig = require('../config/dbConfig');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.sequelize = sequelize

db.users = require('./userModel.js')(sequelize, DataTypes)
db.products = require('./productModel.js')(sequelize, DataTypes)
db.packages = require('./packageModel.js')(sequelize, DataTypes)
db.billings = require('./billingModel.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})



// 1 to Many Relation users vs billing

db.users.hasMany(db.billings, {
    foreignKey: 'user_id',
    as: 'billing'
})

db.billings.belongsTo(db.users, {
    foreignKey: 'user_id',
    as: 'user'
})

// 1 to Many Relation products vs billing

db.products.hasMany(db.billings, {
    foreignKey: 'product_id',
    as: 'billing'
})

db.billings.belongsTo(db.products, {
    foreignKey: 'product_id',
    as: 'product'
})

// 1 to Many Relation packages vs billing

db.packages.hasMany(db.billings, {
    foreignKey: 'package_id',
    as: 'billing'
})

db.billings.belongsTo(db.products, {
    foreignKey: 'package_id',
    as: 'package'
})





module.exports = db
