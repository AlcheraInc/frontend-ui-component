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
        color: "##FF4E00",
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
