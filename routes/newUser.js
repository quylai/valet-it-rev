import models from '../models';
export default function (app) {
  app.post('/api/testUserSignup', (request, response) => {
    const body = request.body;
    console.log(body);  //db

    // models.user.create({
    // models.User.create({
    //   username: body.username,
    //   password: body.password,
    //   email: DataTypes.STRING,
    //   first_name: DataTypes.STRING,
    //   last_name: DataTypes.STRING,
    // }).then(() => {
    //   response.send();
    // })

  });
}