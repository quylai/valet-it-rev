import models from '../models';
export default function (app) {
  app.post('/api/testUserSignup', (request, response) => {
    const body = request.body;

    models.User.create({
      username: body.userName,
      password: body.password,
      email: body.email,
      first_name: body.firstName,
      last_name: body.lastName

    }).then(() => {
      response.send();

		}).catch((error) => {
      console.log("----error in routes/newUser.js");
      console.log(error);
      
    })
  });
}