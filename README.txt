# individualProject - SpeakEazy

## Requirements

- Node.js / npm
- Mobile device (preferably iPhone)

## Installation

Although this app has been programmed in React Native and thus should work on Android and iOS, all testing for this app has been conducted on an iPhone (iOS device). Therefore it is recommended that this app is run on an iPhone.

- Extract the project files from the Zip
- Navigate to the 'Natural_Language_Translator' directory
- Download 'Expo Go' from the App Store on your mobile device- https://apps.apple.com/gb/app/expo-go/id982107779
- In the command line, run the command 'npm install' (in the directory containing package-lock.json)
- Once dependencies have been installed, run the command 'npm start' or 'expo start'
- A QR code should be presented on a new browswer tab/window or in the command line, scan this using your iPhone camera and press the prompt displayed on your iPhone, or if using an Android device, open the Expo Go app, and press 'Scan QR Code', then scan the QR code displayed
- The app should then open in the 'Expo Go' app

## Using the app

Once the app has loaded, you will be presented with the 'home' screen (App.js).

From here, you can access the English to French translation screen (EnglishToFrench.js), or the French to English translation screen (FrenchToEnglish.js).

On the screen, you can enter text in the respective language into a textbox, and translate this text using the 'Translate' button.

Once a translation has been processed, you can press the microphone icon to enable text-to-speech

Words and sentences must be correctly spelt.

It may appear at first when pressing the 'Translate' button, that it does not translate. The first press of this button deactivates the keyboard, and the second press will be registered and will then translate.
