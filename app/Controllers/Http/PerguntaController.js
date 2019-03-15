"use strict";

const Pergunta = use("App/Models/Pergunta");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with perguntas
 */
class PerguntaController {
  /**
   * Show a list of all perguntas.
   * GET perguntas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index() {
    const pergunta = await Pergunta.query()
      .with("video")
      .fetch();

    return pergunta;
  }

  /**
   * Create/save a new pergunta.
   * POST perguntas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request }) {
    const data = request.only([
      "video_id",
      "question",
      "responseCorrect",
      "responses",
      "valor"
    ]);
    const pergunta = await Pergunta.create(data);

    return pergunta;
  }

  /**
   * Display a single pergunta.
   * GET perguntas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params }) {
    const pergunta = await Pergunta.findOrFail(params.id);
    await pergunta.load("video");
    return pergunta;
  }
  /**
   * Update pergunta details.
   * PUT or PATCH perguntas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request }) {
    const pergunta = await Pergunta.findOrFail(params.id);
    const data = request.only([
      "video_id",
      "question",
      "responseCorrect",
      "responses",
      "valor"
    ]);

    pergunta.video_id = parseInt(data.video_id);
    pergunta.responses = data.responses;
    pergunta.question = data.question;
    pergunta.responseCorrect = data.responseCorrect;
    pergunta.valor = parseInt(data.valor);

    return pergunta.save();
  }

  /**
   * Delete a pergunta with id.
   * DELETE perguntas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const pergunta = await Pergunta.findOrFail(params.id);

    await pergunta.delete();
  }
}

module.exports = PerguntaController;
