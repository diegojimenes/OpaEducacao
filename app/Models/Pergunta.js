"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Pergunta extends Model {
  video() {
    return this.belongsTo("App/Models/Video");
  }
}

module.exports = Pergunta;
