module.exports = (Sequelize, dbConnection) => {
    const Grazing = dbConnection.define('grazing', {
        grassland: {
            type: Sequelize.INTEGER,
            field: 'grassland',
            allowNull: true,
            defaultValue: 1,
            unique: false,
            references: {
                model: 'Grassland',
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
            unique: false,
            references: {
                model: 'Animal',
                key: 'id'
            },
            onUpdate: 'cascade',
            onDelete: 'restrict'
        },
        corral: {
            type: Sequelize.INTEGER,
            field: 'corral',
            allowNull: true,
            defaultValue: 1,
            unique: false,
            references: {
                model: 'Corral',
                key: 'id'
            },
            onUpdate: 'cascade',
            onDelete: 'restrict'
        },
        date: {
            type: Sequelize.DATE,
            field: 'date',
            allowNull: false,
            defaultValue: now(),
            unique: false
        },
        completed: {
            type: Sequelize.BOOLEAN,
            field: 'completed',
            allowNull: false,
            defaultValue: false
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
                fields: ['grassland', 'animal', 'corral']
            }
        ],
        freezeTableName: true
    });

    Grazing.sync().then(() => { });

    return Grazing;
}
// export interface Grazing {
//     id?: number;
//     grassland?: Grassland;
//     animal: Animal;
//     date: Date;
//     corral?: Corral;
//     createdAt:Date;
//     updatedAt:Date;
// }