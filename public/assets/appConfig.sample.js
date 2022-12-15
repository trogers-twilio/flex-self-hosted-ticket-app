// set your account sid here
var accountSid = "";


var appConfig = {
  // Uncomment the following lines to enable automatic log in
  //
  sso: {
    accountSid: accountSid
  },
  sdkOptions: {
    worker: {
      logLevel: "info"
    },
    insights: {
      logLevel: "info"
    },
    chat: {
      logLevel: "info"
    },
    flex: {
      logger: {
        level: "info"
      }
    },
    voice: {
      debug: false
    }
  }
}