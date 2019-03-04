import {AddUser} from '../controllers/userController'

const routes = (app) => {
    app.route('/user')
        .post(AddUser);
}

export default routes;