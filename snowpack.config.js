module.exports = {
  mount: {
    frontend: "/_dist_",
    public: "/",
  },
  plugins: [
    "@snowpack/plugin-svelte",
    [
      "@snowpack/plugin-run-script",
      {
        cmd: "tsc --noEmit",
        watch: "$1 --watch",
      },
    ],
    ["@snowpack/plugin-run-script", { cmd: "svelte-check" }],
    [
      "@snowpack/plugin-build-script",
      {
        cmd: "cp $FILE src/main/resources/templates/",
        input: [".html"],
        output: [".html"],
      },
    ],
    "@snowpack/plugin-webpack",
  ],
  installOptions: {
    installTypes: true,
    dest: "src/main/resources/static/web_modules",
    sourceMap: true,
  },
  devOptions: {
    out: "src/main/resources/static/",
    bundle: true,
  },
  buildOptions: { clean: true },
};
