import Sequelize from "sequelize";
import connection from "../Config/sequelize-config.js";

const Pedido = connection.define({
  numero: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  valor: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
});
Pedido.sync({ force: false });
export default Pedido;
