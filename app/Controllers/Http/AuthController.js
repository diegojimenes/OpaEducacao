"use strict";

const User = use("App/Models/User");

class AuthController {
  async register({ request }) {
    const data = request.only([
      "username",
      "email",
      "password",
      "name",
      "isAdmin",
      "polo",
      "nucleo",
      "cpf",
      "fone"
    ]);

    const user = await User.create(data);

    return user;
  }
  async authenticate({ request, auth }) {
    const { email, password } = request.all();

    const token = await auth.attempt(email, password);

    return token;
  }

  async verificateUser({ request, auth }) {
    var user = await auth.getUser();
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      created_at: user.created_at
    };
  }
}

module.exports = AuthController;
