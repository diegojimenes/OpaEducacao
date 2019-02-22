"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PerguntaSchema extends Schema {
  up() {
    this.create("perguntas", table => {
      table.increments();
      table
        .integer("video_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("videos")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("question", 1000).notNullable();
      table.string("responseCorrect", 100).notNullable();
      table.json("responses").notNullable();
      table.integer("valor").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("perguntas");
  }
}

module.exports = PerguntaSchema;
