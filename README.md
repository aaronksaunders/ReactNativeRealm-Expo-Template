# Expo Template Realm React Native Starter Application
<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
</p>

## Video Link
- https://www.youtube.com/watch?v=5BwIpiC2H4E

Simple Expo application to quickly get started with Realm, based on the starter template that is provided by Realm

## 📝 Application Notes
- Added relationships so there is a project and a project has mutiple tasks associated with it
- added and additional screen which lists the Projects
- Added React Navigation so that we could move between the screens
- Added a new screen that lists all of the Projects that are in the application
- Added the project name to the task list
- Added the number of tasks associated with the Project to the project list
- Added try catch block to capture errors from the `realm.write` blocks
- Added code to delete the child `Task` objects of the `Project`
- I think that the introduction of the Realm Context is mising some helpful support documentation and links along with how to use the new `useQuery` function.
- I also think that the documentation on relationships is extremely lacking and I did my best to create something that will show it better



## 🏃 How to build and run locally

- [Setup development Environment](https://reactnative.dev/docs/environment-setup)
- Build/Run on iOS 🍎
```
yarn ios
```
```
npm run ios
```
- Build/Run on Android 🤖
```
yarn android
```
```
npm run android
```

## 📝 Notes

- [Setting up Sync](https://docs.mongodb.com/realm/sdk/react-native/quick-start/)
- [Realm JS Documentation](https://docs.mongodb.com/realm/sdk/react-native/)
- [Development Client docs](https://docs.expo.dev/clients/introduction/)
- [Building with EAS](https://docs.expo.dev/eas/)
