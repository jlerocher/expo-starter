# Starter Template for Expo with Typescript and Navigation
![image](https://github.com/ikhlasdansantai/expo-typescript-nativewind-template/assets/95151018/c567bfee-2126-461a-ba76-9a12edbba1cb)

including
- expo-router
- nativewind
- tailwind 3.3.2
- Path Alias (@)
- typescript (ofc :D)
- @expo/vector-icons
- Manrope fonts

How To Running your application 🤔

install dep
```bash
npm install
or 
yarn install
```

Run your app on emulator or your mobile phone
```bash
npm run start -c
or 
npm run android
```

### Note
If you encounter the following error message:
```bash
Cannot find module '../assets/images/icon.png' or its corresponding type declarations.
```

You need to declare the type for the respective file format. You can achieve this by adding the following code to `app.d.ts`
```ts
declare module "*.png" {
  const value: ImageSourcePropType;
  export default value;
}

declare module "*.jpg" {
  const value: ImageSourcePropType;
  export default value;
}

declare module "*.jpeg" {
  const value: ImageSourcePropType;
  export default value;
}
```
