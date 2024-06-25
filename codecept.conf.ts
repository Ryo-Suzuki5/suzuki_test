import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
require('dotenv').config();
//setHeadlessWhen(process.env.HEADLESS);
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
            I.fillField('f_em', process.env.MAIL);
            I.fillField('f_pw', process.env.PASS);
            I.click('ログイン');
            I.wait(3);
            I.click('ビジネス');
            I.click(process.env.BUZINESS);//BUZINESSの部分を変えることで、他のカテゴリも選択可能
            I.wait(3);
          },
        },
      }
    }
  },
  name: 'typing_test',
  translation: 'ja-JP'
}
