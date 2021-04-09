import vuetifyConfig from "./vuetify_storybook";
import "vuetify/dist/vuetify.css";
require("./vuetify_style.scss");
import "material-design-icons-iconfont/dist/material-design-icons.css";

export const parameters = {
  controls: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "centered",
    backgrounds: {
      default: "light",
      values: [
        {
          name: "dark",
          value: "#323539"
        },
        {
          name: "light",
          value: "#f7f7f7"
        }
      ]
    },
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    },
    presetColors: [
      {
        color: "#528CFF",
        title: "Alchera Dream Blue"
      },
      {
        color: "#406EFF",
        title: "Alchera Modern Blue"
      },
      {
        color: "#5B63F3",
        title: "Alchera Deep Blue"
      },
      {
        color: "#FCFCFC",
        title: "Alchera White"
      },
      {
        color: "#FF4E00",
        title: "Alchera Orange"
      },
      {
        color: "#004BA0",
        title: "Alchera Blue"
      },
      {
        color: "#0000001E",
        title: "Transparent_Grey_01"
      },
      {
        color: "#00000042",
        title: "Transparent_Grey_02"
      },
      {
        color: "#00000060",
        title: "Transparent_Grey_03"
      },
      {
        color: "#F7F7F7",
        title: "Grey_01"
      },
      {
        color: "#D8D9DA",
        title: "Grey_02"
      },
      {
        color: "#363636",
        title: "Grey_03"
      },
      {
        color: "#1D1D1D",
        title: "Grey_04"
      },
      {
        color: "#D3D5DD",
        title: "Cool_Grey_01"
      },
      {
        color: "#8D90A2",
        title: "Cool_Grey_02"
      },
      {
        color: "#43425D",
        title: "Cool_Grey_03"
      },
      {
        color: "#74E08F",
        title: "Light_Green"
      },
      {
        color: "#34C759",
        title: "Green"
      },
      {
        color: "#FF6A6A",
        title: "Light_Red"
      },
      {
        color: "#FF3B30",
        title: "Red"
      },
      {
        color: "#3B77FF",
        title: "Highlight_Blue"
      }
    ]
  }
};

export const colors = {
  // brand color
  alcheradreamblue: "#528CFF",
  alcheramodernblue: "#406EFF",
  alcheradeepblue: "#5B63F3",
  alcherawhite: "#FCFCFC",
  alcheraorange: "#FF4E00",
  alcherablue: "#004BA0",
  // greyscale
  transparentgrey01: "#0000001E",
  transparentgrey02: "#00000042",
  transparentgrey03: "#00000060",
  grey01: "#F7F7F7",
  grey02: "#D8D9DA",
  grey03: "#363636",
  grey04: "#1D1D1D",
  coolgrey01: "#D3D5DD",
  coolgrey02: "#8D90A2",
  coolgrey03: "#43425D",
  // sub color
  lightgreen: "#74E08F",
  green: "#34C759",
  lightred: "#FF6A6A",
  red: "#FF3B30",
  highlightblue: "#3B77FF"
};

export const typography = {
  type: {
    avenirnext: '"Avenir Next"',
    nunitosans: '"Nunito Sans"',
    notosanskr: '"Noto Sans KR"'
  },
  weight: {
    regular: "400",
    bold: "700",
    extrabold: "800",
    black: "900"
  },
  size: {
    s1: 12,
    s2: 14,
    s3: 16,
    m1: 20,
    m2: 24,
    m3: 28,
    l1: 32,
    l2: 40,
    l3: 48
  }
};

export const decorators = [
  story => ({
    components: { story },
    vuetify: vuetifyConfig,
    template: `
      <v-app style="background-color: transparent;" class="storybook">
        <v-main>
          <v-container fluid>
            <story />
          </v-container>
        </v-main>
      </v-app>
    `
  })
];
