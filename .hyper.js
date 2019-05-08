module.exports = {
  config: {
    // color of the terminal background
    backgroundColor: "#1b2b34",

    // set to false for no bell
    bell: "SOUND",

    // border color (window, tabs)
    borderColor: "#5fb3b3",

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: false,

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: "#0f1c23",
      red: "#ed6f7d",
      green: "#99c794",
      yellow: "#fac863",
      blue: "#5a9bcf",
      magenta: "#c5a5c5",
      cyan: "#5fb3b3",
      white: "#d8dee9",
      lightBlack: "#65737e",
      lightRed: "#D6838C",
      lightGreen: "#C1DCBE",
      lightYellow: "#FFDE9B",
      lightBlue: "#8ABEE7",
      lightMagenta: "#EDCDED",
      lightCyan: "#9BE2E2",
      lightWhite: "#ffffff"
    },

    // custom css to embed in the main window
    css: `.hyper_main{border-width: 2px !important;}`,

    // The text color under BLOCK cursor
    cursorAccentColor: "#d8dee9",

    // set to true for blinking cursor
    cursorBlink: false,

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: "rgba(197,148,197,1)",

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: "BLOCK",

    // default font size in pixels for all tabs
    fontSize: 16,

    // font family with optional fallbacks
    fontFamily: '"Operator Mono", "Inconsolata for Powerline", monospace',

    // color of the text
    foregroundColor: "#d8dee9",

    // Clicking on them Links
    hyperlinks: {
      clickAction: "open",
      defaultBrowser: true
    },

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: "12px 14px",

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    shell: "/bin/zsh",

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ["--login"],

    // The update channel to receive updates from
    updateChannel: 'stable',
    webGLRenderer: false,
  },

  // a list of plugins to fetch and install from npm
  plugins: [
    "hyperterm-lastpass",
    // "hypercwd",
    "hyperlinks",
    "hyper-alt-click",
    //"hyperterm-oceanic-next",
    "hyperterm-paste",
    "hyperline",
    "hyper-dark-scrollbar",
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};
