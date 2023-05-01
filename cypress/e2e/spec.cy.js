import { Login } from "../pages/Login";

const LoginPage = new Login();
describe('template spec', () => {

  beforeEach(() => {
    LoginPage.navigate();
    LoginPage.login();
  })
 
  it('passes', () => {
    LoginPage.logout();
  })
})


