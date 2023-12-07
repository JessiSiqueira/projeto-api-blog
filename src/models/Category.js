module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    },
    {
        timestamps: false,
        underscored: true,
        tableName: 'categories'
      }
    )
    Category.associate = (models) => {
      Category.belongsToMany(models.BlogPost, {
        as: 'blogPosts',
        through: models.PostCategory,
        foreignKey: 'category_id',
        otherKey: 'post_id',
      });
    }
    return Category;
}