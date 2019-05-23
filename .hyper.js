const backgroundColor = '#1b2b34'
const foregroundColor = '#d8dee9'
const cursorColor = '#5fb3b3'
const borderColor = '#1b2b34'
const selectionColor = 'rgba(95, 179, 169, .3)'
const tabNavBg = '#0f1c23'
const tabText = '#65737e'
const tabTextActive = '#d8dee9'
const dividerBg = 'rgba(27,43,66,.4)'

module.exports = {
  config: {
    // color of the terminal background
    backgroundColor,

    // set to false for no bell
    bell: "SOUND",

    // border color (window, tabs)
    borderColor,

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
    css: `
      #hyper {
        border: 1px solid ${borderColor};
      }
      .tabs_nav {
        background-color: ${tabNavBg};
        border-bottom: 1px solid ${borderColor};
      }
      /* hide the tab border shim, we are providing our own */
      .tabs_borderShim {
        border-bottom-width: 0px;
      }
      /* Hide title when only one tab */
      .tabs_title {
  			background-color: ${backgroundColor};
  		}
      .tab_textInner {
        color: ${tabText};
        font-weight: 500;
      }
      .tab_tab{
        border-left-color: ${tabNavBg} !important
        border-left-width: 3px;
      }
      .tab_tab.tab_active {
        background-color: ${backgroundColor};
        border-left-color: ${cursorColor} !important;
        border-left-width: 3px;
      }
      .tab_tab.tab_active .tab_textInner {
        color: ${tabTextActive};
      }
      .tab_icon {
        border-radius: 3px;
        background: ${backgroundColor};
        transition: all .2s;
      }
      .tab_icon:hover {
        background: ${tabNavBg};
      }
      .splitpane_divider {
        background-color: ${dividerBg} !important;
      }
    `,

    // The text color under BLOCK cursor
    cursorAccentColor: foregroundColor,

    // set to true for blinking cursor
    cursorBlink: false,

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor,

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: "BLOCK",

    // default font size in pixels for all tabs
    fontSize: 16,

    // font family with optional fallbacks
    fontFamily: '"Operator Mono", "Inconsolata for Powerline", monospace',

    // color of the text
    foregroundColor,

    // Clicking on them Links
    hyperlinks: {
      clickAction: "open",
      defaultBrowser: true
    },

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: "12px 14px",

    selectionColor,

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
    "hypercwd",
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
