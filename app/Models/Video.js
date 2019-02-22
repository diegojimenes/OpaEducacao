"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Video extends Model {
  perguntas() {
    return this.hasMany("App/Models/Pergunta");
  }
}

module.exports = Video;
