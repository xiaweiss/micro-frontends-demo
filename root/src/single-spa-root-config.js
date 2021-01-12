import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/welcome"],
});

registerApplication({
  name: "@single-spa/app",
  app: () => System.import("@single-spa/app"),
  activeWhen: ["/app"],
});

registerApplication({
  name: "@single-spa/app2",
  app: () => System.import("@single-spa/app2"),
  activeWhen: ["/app2"],
});

start({
  urlRerouteOnly: true,
});
