"use strict";

const Video = use("App/Models/Video");
const Drive = use("Drive");
const Request = use("Request");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with videos
 */
class VideoController {
  /**
   * Sen Video to aws.
   * POST videos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async sendVideoToAWS({ request }) {
    request.multipart.file("profile", {}, async file => {
      await Drive.disk("s3").put("path", file.stream);
    });

    console.log(await request.multipart.process());
    // var url = Drive.disk("s3").getUrl(
    //   "profile/teste.png",
    //   "storage.cesva.opaeducacao"
    // );
    // console.log("The URL is", url);
  }
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
      .with("tempo")
      .with("comentarios.user")
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
    const data = request.only([
      "url",
      "thumbnail",
      "title",
      "description",
      "tags"
    ]);
    var obj = {
      url: data.url,
      thumbnail: data.thumbnail,
      title: data.title,
      description: data.description,
      tags: {
        tags: data.tags.split(",")
      }
    };
    const video = await Video.create(obj);

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
    await video.load("tempo");
    await video.load("comentarios.user");
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
  async update({ params, request }) {
    const videoForChange = await Video.findOrFail(params.id);
    const data = request.only([
      "url",
      "thumbnail",
      "title",
      "description",
      "tags"
    ]);

    videoForChange.url = data.url;
    videoForChange.tags = {
      tags: data.tags.split(",")
    };
    videoForChange.title = data.title;
    videoForChange.description = data.description;
    videoForChange.thumbnail = data.thumbnail;

    return videoForChange.save();
  }

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
