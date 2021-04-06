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
