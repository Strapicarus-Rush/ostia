
module.exports = (Sequelize, dbConnection) => {
    const Weight = dbConnection.define('weight', {
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
            allowNull: true,
            defaultValue: now(),
            unique: false
        },
        weight: {
            type: Sequelize.DECIMAL(20, 4),
            field: 'date',
            allowNull: false,
            defaultValue: 0,
            unique: false
        },
        deleted: {
            type: Sequelize.BOOLEAN,
            field: 'deleted',
            allowNull: false,
            defaultValue: false
        }
    }, {
        freezeTableName: true
    });

    Weight.sync().then(() => { });

    return Weight;
}

// export interface Weight {
//     id?: number;
//     animal: Animal;
//     date: Date;
//     weight: number;
//     createdAt:Date;
//     updatedAt:Date;
// }