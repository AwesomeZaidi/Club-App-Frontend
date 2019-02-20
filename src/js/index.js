import store from "../js/store/index";
import { addArticle } from "../js/actions/index";
import { loginUser } from "../js/actions/loginUser";


window.store = store;
window.addArticle = addArticle;
window.loginUser = loginUser;
