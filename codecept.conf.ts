import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
require('dotenv').config();
setHeadlessWhen(process.env.HEADLESS);
//setHeadlessWhen(process.env.mail);
//setHeadlessWhen(process.env.pass);
// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.e-typing.ne.jp/roma/variety/business.asp',
      show: true,
      keepVideoForPassedTests: true,
      video: true,
    }
  },
  include: {
    I: './steps_file',
    login: './login_steps_file',
    typ: './typing_steps_file',
    random: './random_steps_file'
  },
  plugins: {
    autoLogin: {
      enabled: true,
      saveToFile: false,
      inject: 'login',
      users: {
        suzuki: {
          // loginAdmin function is defined in `steps_file.js`
          login: (I) => {
            I.amOnPage("https://www.e-typing.ne.jp/roma/variety/business.asp");
            I.fillField('f_em', 'process.env.mail');
            I.fillField('f_pw', 'process.env.pass');
            I.click('ログイン');
            I.wait(3);
          },
          check: (I) => {
            I.amOnPage('https://www.e-typing.ne.jp/roma/variety/business.asp');
            I.see('ビジネス格言');
          },
        },
      }
    }
  },
  name: 'typing_test',
  translation: 'ja-JP'
}
