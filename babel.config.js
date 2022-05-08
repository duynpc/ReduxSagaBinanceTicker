module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          "@root": "./",
          "@components": "./src/core/components",
          "@constants": "./src/core/constants",
          "@entities": "./src/core/entities",
          "@navigation": "./src/core/navigation",
          "@store": "./src/core/store",
          "@features": "./src/features",
        },
      },
    ],
  ],
};
