# Contributing to the Main Repository
This section describes how to contribute to the main repository. If you're looking to contribute to any of our other repositories, please refer to the [Contributing to VueTube](./README.md) page.

[![VueTube](https://github-readme-stats.vercel.app/api/pin/?username=VueTubeApp&repo=VueTube)](https://github.com/VueTubeApp/VueTube)

# Prerequisites
- Android Studio "Arctic Fox" or Later - [Download](https://developer.android.com/studio#downloads)
- NodeJS 16.x - [Download](https://nodejs.org/en/download/)
- Java JRE 11 - [Download your preferred java runner]
- Java JDK 11 - [Download your preferred JDK]
- (Optional) Xcode [iOS app development] - [Download](https://developer.apple.com/xcode/)

# Setup
Now that you have everything installed, you can proceed with installing your node dependencies. You can do this with the following commands in the project's root directory:
`npm i; cd NUXT; npm i; cd ..`

# Testing
If you wish to test the app within your browser, you can enter the `NUXT` directory, and run `npm run dev`. You can then navigate to `http://localhost:80/` in your favorite web browser.

:::danger
Testing the application from within your web browser disallows some features from working. Please compile to your android device before submitting your pull request
:::
::: tip
If you get an error about `EACCES: permission denied 0.0.0.0:80`, change the port in `nuxt.config.js` back to 3000.
:::
If you're done with your changes and are ready to submit your code, there is one last step: compiling to your android device.
- Plug in your Android or iOS device. (and make sure that ADB works for android by running `adb devices` in your ADB directory)
- Then, in the root directory of the project, run `./scripts/build.ps1` on Windows or `./scripts/build.sh` for linux or mac.
- Finally, run `npx cap run android` to push to your android device or `npx cap run ios` for your ios device!
