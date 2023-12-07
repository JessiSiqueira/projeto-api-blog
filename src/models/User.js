module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          displayName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          image: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        },
          {
            timestamps: false,
            underscored: true,
            tableName: 'users'
          }
    );
    User.associate = (models) => {
      User.hasMany(models.BlogPost, {foreignKey: 'user_id'});
    };
    return User;
}
