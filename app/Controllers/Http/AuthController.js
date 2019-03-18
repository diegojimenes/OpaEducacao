"use strict";

const User = use("App/Models/User");

class AuthController {
  async listUsers() {
    const user = await User.query()
      .orderBy("created_at")

      // .distinct("pontos", "updated_at", "id", "username", "img")
      .fetch();

    return user;
  }

  async ranking() {
    const user = await User.query()
      .with("videos")
      .limit(22)
      .orderBy("pontos", "updated_at")
      .distinct("pontos", "updated_at", "id", "username", "img")
      .fetch();

    return user;
  }

  async deleteUser({ params }) {
    const user = await User.findOrFail(params.id);

    await user.delete();
  }

  async register({ request }) {
    const data = request.only([
      "username",
      "email",
      "img",
      "password",
      "name",
      "isAdmin",
      "polo",
      "nucleo",
      "cpf",
      "fone",
      "dados"
    ]);

    const user = await User.create(data);
    user.password = null;
    return user;
  }

  async update({ params, request }) {
    const user = await User.findOrFail(params.id);
    const data = request.only([
      "username",
      "img",
      "name",
      "isAdmin",
      "polo",
      "nucleo",
      "cpf",
      "fone",
      "dados"
    ]);

    user.username = data.username;
    user.img = data.img;
    user.name = data.name;
    user.isAdmin = data.isAdmin;
    user.polo = data.polo;
    user.nucleo = data.nucleo;
    user.cpf = data.cpf;
    user.fone = data.fone;
    user.fone = data.fone;

    return user.save();
  }

  async authenticate({ request, auth }) {
    const { email, password } = request.all();

    const token = await auth.attempt(email, password);

    return token;
  }

  async verificateUser({ request, auth }) {
    var user = await auth.getUser();
    const userWithVideo = await User.findOrFail(user.id);
    await userWithVideo.load("videos");
    await userWithVideo.load("notificacoes");
    userWithVideo.password = null;
    return userWithVideo;
  }

  async changePoints({ request, auth }) {
    const data = request.only(["pontos"]);
    var user = await auth.getUser();
    const userForChange = await User.findOrFail(user.id);
    userForChange.pontos = data.pontos;

    return userForChange.save();
  }
}

module.exports = AuthController;
