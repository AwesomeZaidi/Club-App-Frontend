import store from "../js/store/index";
import { loginUser, signupUser, addArticle } from "../js/actions/loginUser";


window.store = store;
window.addArticle = addArticle;
window.loginUser = loginUser;
window.signupUser = signupUser;
