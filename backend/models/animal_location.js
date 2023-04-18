
module.exports = (Sequelize, dbConnection) => {
    const AnimalLocation = dbConnection.define('animal_location', {
        corral: {
            type: Sequelize.INTEGER,
            field: 'corral',
            allowNull: true,
            defaultValue: 1,
            references: {
                model: 'Corral',
                key: 'id'
            },
            onUpdate: 'cascade',
            onDelete: 'restrict'
        },
        animal: {
            type: Sequelize.INTEGER,
            field: 'animal',
            allowNull: true,
            defaultValue: 1,
            references: {
                model: 'Animal',
                key: 'id'
            },
            onUpdate: 'cascade',
            onDelete: 'restrict'
        },
        date: {
            type: Sequelize.DATE,
            field: 'date',
            allowNull: false,
            defaultValue: now()
        },
        operation: {
            type: Sequelize.INTEGER,
            field: 'operation',
            allowNull: true,
            defaultValue: 1,
            references: {
                model: 'Operation',
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
                fields: ['corral', 'animal', 'date', 'operation', 'delete']
            }
        ],
        freezeTableName: true
    });

    AnimalLocation.sync().then(() => { });

    return AnimalLocation;
}


// export interface Animal_location {
//     id?: number;
//     corral: Corral;
//     animal: Animal;
//     date: Date;
//     operation?: Operation;
//     createdAt:Date;
//     updatedAt:Date;
// }