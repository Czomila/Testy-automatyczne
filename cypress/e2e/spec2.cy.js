import { HomePage } from "../pages/HomePage";

const StartPage = new HomePage();
describe('template spec', () => {

  beforeEach(() => {
    StartPage.navigate();

  })
 
 it('passes', () => {
    StartPage.login();
  //   StartPage.logout();
  //Dla dalszych testów wykomentowalam logout
 })
})