export default {
  config: {
    locales: ["ru", "en"],
  },
  bootstrap(app: any) { // Specify 'app' as 'any' to suppress the TypeScript error
    console.log(app);
  },
};
