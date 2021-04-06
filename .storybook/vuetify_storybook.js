import Vue from "vue";
import * as _Vuetify from "vuetify/lib";
import locales from "../src/locales";

const Vuetify = _Vuetify.default;

const isVueComponent = obj => obj.name === "VueComponent";

const VComponents = Object.keys(_Vuetify).reduce((acc, key) => {
  if (isVueComponent(_Vuetify[key])) {
    acc[key] = _Vuetify[key];
  }
  return acc;
}, {});

Vue.use(Vuetify, {
  components: {
    ...VComponents
  }
});

let language = "en";
if (language !== "en") {
  language = "ko";
}

export default new Vuetify({
  icons: {
    iconfont: "md"
  },
  lang: {
    current: language,
    locales: locales
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      dark: {
        primary: "#ee44aa",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      },
      light: {
        primary: "#ee44aa",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  }
});
