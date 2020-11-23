import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mysql://root:furrier07@localhost:3306/pitu');
export default sequelize;