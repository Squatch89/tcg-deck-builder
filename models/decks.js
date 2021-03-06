module.exports = function (sequelize, DataTypes) {
    const decks = sequelize.define("decks", {
        deckName: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }, {timestamps: false});
    
    decks.associate = function(models) {
        decks.hasMany(models.cards, {
            onDelete: 'cascade'
        });
    };
    return decks;
};