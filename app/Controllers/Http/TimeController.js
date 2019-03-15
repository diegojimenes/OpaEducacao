"use strict";
const Time = use("App/Models/Time");
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with times
 */
class TimeController {
  /**
   * Create/save a new time.
   * POST times
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, auth }) {
    var user = await auth.getUser();

    const data = request.only(["video_id", "time"]);
    const time = await Time.create({ user_id: user.id, ...data });

    return time;
  }
}

module.exports = TimeController;
