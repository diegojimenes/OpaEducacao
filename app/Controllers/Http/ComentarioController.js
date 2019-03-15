"use strict";
const Comentario = use("App/Models/Comentario");
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with comentarios
 */
class ComentarioController {
  /**
   * Show a list of all comentarios.
   * GET comentarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {}

  /**
   * Create/save a new comentario.
   * POST comentarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.only(["video_id", "user_id", "conteudo"]);
    const comentario = await Comentario.create(data);

    return comentario;
  }

  /**
   * Display a single comentario.
   * GET comentarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Update comentario details.
   * PUT or PATCH comentarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    
  }

  /**
   * Delete a comentario with id.
   * DELETE comentarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const comentario = await Comentario.findOrFail(params.id);

    await comentario.delete();
  }
}

module.exports = ComentarioController;
