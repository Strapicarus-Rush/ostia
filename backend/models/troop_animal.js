module.exports = (Sequelize, dbConnection) => {
    const Troop = dbConnection.define('troop_animal', {
        animal: {
            type: Sequelize.INTEGER,
            field: 'animal',
            allowNull: true,
            defaultValue: 1,
            unique: false,
            references: {
                model: 'Animal',
                key: 'id'
            },
            onUpdate: 'cascade',
            onDelete: 'restrict'
        },
        troop: {
            type: Sequelize.INTEGER,
            field: 'troop',
            allowNull: false,
            defaultValue: 1,
            references: {
                model: 'Troop',
                key: 'id'
            },
            onUpdate: 'cascade',
            onDelete: 'restrict'
        },
        deleted: {
            type: Sequelize.BOOLEAN,
            field: 'deleted',
            allowNull: false,
            defaultValue: false
        }
    }, {
        indexes: [
            {
                unique: true,
                fields: ['troop', 'animal']
            }
        ],
        freezeTableName: true
    });

    Troop.sync().then(() => { });

    return Troop;
}