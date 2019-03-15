"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class VideoSchema extends Schema {
  up() {
    this.create("videos", table => {
      table.increments();
      table.string("url", 500).notNullable();
      table.string("thumbnail", 500).notNullable();
      table.string("title", 500).notNullable();
      table.string("description", 500).notNullable();
      table.json("tags");
      table.timestamps();
    });
  }

  down() {
    this.drop("videos");
  }
}

module.exports = VideoSchema;
