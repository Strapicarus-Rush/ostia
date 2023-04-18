module.exports = (Sequelize, dbConnection) => {
    const Troop_location = dbConnection.define('troop_location', {
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
        troop: {
            type: Sequelize.INTEGER,
            field: 'troop',
            allowNull: true,
            defaultValue: 1,
            unique: false,
            references: {
                model: 'Troop',
                key: 'id'
            },
            onUpdate: 'cascade',
            onDelete: 'restrict'
        },
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
                fields: ['corral', 'troop', 'grassland']
            }
        ],
        freezeTableName: true
    });

    Troop_location.sync().then(() => { });

    return Troop_location;
}


// export interface Weight {
//     id?: number;
//     name?: string;
//     troop: Troop;
//     animal: Animal;
//     corral?: Corral;
//     grassland?: Grassland;
//     createdAt:Date;
//     updatedAt:Date;
// }