Requirements:

- Java JDK (https://www.oracle.com/java/technologies/javase-jdk8-downloads.html)
- Node.js (https://nodejs.org/en/)
- Android Studio (https://developer.android.com/studio/install)
- Appium (http://appium.io/)
- NPM 
- Preferred IDE

To consider:

- Please make sure you are using accordincly environment variables for Android and Java. Please read: https://developer.android.com/studio/command-line/variables

Setting up your virtual devices on Android Studio:

- On main screen go to Configure > AVD Manager
- Create Virtual Device, based on your requirements.
Note: For this project we will be using the device Pixel, Android version 7. This Capabilities are already added on project settings. 

Installing dependencies:

+ Verify current versions:
+ For Node, it is node -v
+ For NPM it is npm -v
+ For Java it is java -version

On Project folder please do:
+ npm init -y 

Now please install dependencies by:
+ npm i @wdio/cli

Please step inside folder node_modules and install "chai"
+ npm install chai

Configure wdio by running on the terminal:
+ ./node_modules/.bin/wdio config
Please select:
+ Local for where the test will be launched
+ Mocha as framework
+ Synchronous tests
+ original test path
+ Spec for reporting 
+ Selenium-Standalone as service
+ Base URL

Capabilities:
- This project already has an Adnroid Pixel device for running tests. Feel free to add, edit or remove the capabilities based on your preference. 

Appium:
- When starting session in Appium please use port 4444 as that´s the one configured on this projects. 

Test execution:
- By running the commant "npm test" the project shoud run as this command has been added to the project settings. You can also use ./node_modules/.bin/wdio wdio.conf.js to run the wdio file directly. 


