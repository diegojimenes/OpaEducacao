"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class NotificatioSchema extends Schema {
  up() {
    this.create("notificatios", table => {
      table.increments();
      table.string("title");
      table.string("body");
      table.json("data");
      table.timestamps();
    });
  }

  down() {
    this.drop("notificatios");
  }
}

module.exports = NotificatioSchema;
