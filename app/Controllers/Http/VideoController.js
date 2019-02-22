"use strict";

const Video = use("App/Models/Video");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with videos
 */
class VideoController {
  /**
   * Show a list of all videos.
   * GET videos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index() {
    const videos = await Video.query()
      .with("perguntas")
      .fetch();

    return videos;
  }

  /**
   * Create/save a new video.
   * POST videos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request }) {
    const data = request.only(["url", "title", "description", "tags"]);
    const video = await Video.create(data);

    return video;
  }

  /**
   * Display a single video.
   * GET videos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params }) {
    const video = await Video.findOrFail(params.id);
    await video.load("perguntas");
    return video;
  }

  /**
   * Update video details.
   * PUT or PATCH videos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a video with id.
   * DELETE videos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params }) {
    const video = await Video.findOrFail(params.id);

    await video.delete();
  }
}

module.exports = VideoController;
