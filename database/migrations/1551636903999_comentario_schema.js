"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ComentarioSchema extends Schema {
  up() {
    this.create("comentarios", table => {
      table.increments();
      table
        .integer("video_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("videos")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("conteudo", 500).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("comentarios");
  }
}

module.exports = ComentarioSchema;
