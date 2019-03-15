"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Video extends Model {
  perguntas() {
    return this.hasMany("App/Models/Pergunta");
  }
  comentarios() {
    return this.hasMany("App/Models/Comentario");
  }
  tempo() {
    return this.hasMany("App/Models/Time");
  }
}

module.exports = Video;
