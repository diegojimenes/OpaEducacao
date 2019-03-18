"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserNotificateSchema extends Schema {
  up() {
    this.create("user_notificates", table => {
      table.increments();
      table
        .integer("notificate_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("notificatios")
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
    this.drop("user_notificates");
  }
}

module.exports = UserNotificateSchema;
