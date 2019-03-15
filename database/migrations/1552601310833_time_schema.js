"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TimeSchema extends Schema {
  up() {
    this.create("times", table => {
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
      table.string("time");
      table.timestamps();
    });
  }

  down() {
    this.drop("times");
  }
}

module.exports = TimeSchema;
