"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Comentario extends Model {
  video() {
    return this.belongsTo("App/Models/Video");
  }
  user() {
    return this.belongsTo("App/Models/User");
  }
}

module.exports = Comentario;
