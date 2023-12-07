module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id:{ 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
           },
           title: {
            type: DataTypes.STRING,
            allowNull: false,
           },
           content: {
            type: DataTypes.STRING,
            allowNull: false,
           },
           userId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'users',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            allowNull: false,
          },
            published: {
            type: DataTypes.DATE,
            allowNull: false,
          },
            updated: {
            type: DataTypes.DATE,
            allowNull: false,
          },
    },
    {
        timestamps: false,
        underscored: true,
        tableName: 'blog_posts'
      }
      );
      BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'});
      };
      return BlogPost;
};
