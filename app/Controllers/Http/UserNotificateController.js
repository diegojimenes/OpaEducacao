"use strict";
const UserNotificate = use("App/Models/UserNotificate");
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with usernotificates
 */
class UserNotificateController {
  /**
   * Render a form to be used for creating a new usernotificate.
   * GET usernotificates/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, auth }) {
    var user = await auth.getUser();
    const data = request.only(["notificate_id", "visualizado"]);
    const userNotificate = await UserNotificate.create({
      user_id: user.id,
      ...data
    });

    return userNotificate;
  }
}

module.exports = UserNotificateController;
