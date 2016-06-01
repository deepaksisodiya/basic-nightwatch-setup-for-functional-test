/**
 * Created by deepaksisodiya on 01/06/16.
 */


module.exports = {

  'should go to the localhost at 3000 port': (browser) => {
    browser
      .url('http://localhost:3000')
      .useXpath()
      .waitForElementVisible('//body', 2000)
      .assert.containsText('//pre[text()="Hello from koa.js"]', 'Hello from koa.js')
      .pause(2000)
      .end();
  }

};