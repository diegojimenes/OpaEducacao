"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class VisualizadoSchema extends Schema {
  up() {
    this.create("visualizados", table => {
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
      table.boolean("visualizado");
      table.timestamps();
    });
  }

  down() {
    this.drop("visualizados");
  }
}

module.exports = VisualizadoSchema;
