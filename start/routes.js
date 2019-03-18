"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.post("/register", "AuthController.register");
Route.post("/authenticate", "AuthController.authenticate");
Route.get("/verificateUser", "AuthController.verificateUser").middleware(
  "auth"
);
Route.put("/editUser/:id", "AuthController.update").middleware("auth");
Route.get("/listUsers", "AuthController.listUsers").middleware("auth");
Route.get("/ranking", "AuthController.ranking").middleware("auth");
Route.delete("/deleteUser/:id", "AuthController.deleteUser").middleware("auth");
Route.post("/changePoints", "AuthController.changePoints").middleware("auth");
Route.post(
  "/notificacao_visualizada",
  "UserNotificateController.create"
).middleware("auth");
Route.post("/addTime", "TimeController.store").middleware("auth");

Route.group(() => {
  Route.resource("videos", "VideoController").apiOnly();
  Route.resource("perguntas", "PerguntaController").apiOnly();
  Route.resource("visualizado", "VisualizadoController").apiOnly();
  Route.resource("comentario", "ComentarioController").apiOnly();
  Route.resource("post", "PostController").apiOnly();
  Route.resource("notify", "NotificatioController").apiOnly();
  Route.post("/upload", "VideoController.sendVideoToAWS");
}).middleware("auth");
