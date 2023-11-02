import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import Teams from './TeamsModel';

class SequelizeMatches extends Model<InferAttributes<SequelizeMatches>,
InferCreationAttributes<SequelizeMatches>> {
  declare id: CreationOptional<number>;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}
SequelizeMatches.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  awayTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  inProgress: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
  underscored: true,
});

Teams.hasMany(SequelizeMatches, { foreignKey: 'homeTeamId' });
SequelizeMatches.belongsTo(Teams, { foreignKey: 'homeTeamId' });

Teams.hasMany(SequelizeMatches, { foreignKey: 'awayTeamId' });
SequelizeMatches.belongsTo(Teams, { foreignKey: 'awayTeamId' });
export default SequelizeMatches;
