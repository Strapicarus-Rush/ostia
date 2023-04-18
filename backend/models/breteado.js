module.exports = (Sequelize, dbConnection) => {
    const Breteado = dbConnection.define('breteado', {
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
        date: {
            type: Sequelize.DATE,
            field: 'date',
            allowNull: false,
            defaultValue: now()
        },
        period: {
            type: Sequelize.STRING,
            field: 'period',
            allowNull: false,
            defaultValue: '1 day',
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
                fields: ['animal', 'operation', 'date']
            }
        ],
        freezeTableName: true
    });

    Breteado.sync().then(() => { });

    return Breteado;
}


// Breteado {
//     id?: number;
//     animal: Animal;
//     operation: Operation;
//     date: Date;
//     period?: string;
//     createdAt:Date;
//     updatedAt:Date;
// }