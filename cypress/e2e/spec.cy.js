import { HomePage } from "../pages/HomePage";
import { Login } from "../pages/Login";

const LoginPage = new Login();
const StartPage = new HomePage();
describe('template spec', () => {

  beforeEach(() => {
    StartPage.navigate();
    LoginPage.login();
  })
 
  it('passes', () => {
    StartPage.logout();
  })
})


