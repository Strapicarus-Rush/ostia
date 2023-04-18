module.exports = (Sequelize, dbConnection) => {
    const Labor = dbConnection.define('labor', {
        name: {
            type: Sequelize.STRING,
            field: 'name',
            allowNull: false,
            defaultValue: 'Test Labor.',
            unique: true
        },
        description: {
            type: Sequelize.STRING,
            field: 'description',
            allowNull: false,
            defaultValue: 'Test Grassland description.',
            unique: false
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
            type: Sequelize.STRING,
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
        date: {
            type: Sequelize.DATE,
            field: 'date',
            allowNull: false,
            defaultValue: now(),
            unique: false
        },
        operation: {
            type: Sequelize.INTEGER,
            field: 'operation',
            allowNull: true,
            defaultValue: 1,
            unique: false,
            references: {
                model: 'Operation',
                key: 'id'
            },
            onUpdate: 'cascade',
            onDelete: 'restrict'
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
                fields: ['grassland', 'animal', 'corral', 'date', 'operation']
            }
        ],
        freezeTableName: true
    });

    Labor.sync().then(() => { });

    return Labor;
}





// export interface Labor {
//     id?: number;
//     corral?: Corral;
//     grassland?: Grassland;
//     animal?: Animal;
//     description: string;
//     createdAt:Date;
//     updatedAt:Date;
// }