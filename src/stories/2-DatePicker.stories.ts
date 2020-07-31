import { moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { boolean, date, withKnobs } from "@storybook/addon-knobs";

import { DatePickerComponent } from "../app/date-picker/date-picker.component";
import { AppModule } from "../app/app.module";

export default {
  title: "DatePicker",
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [AppModule]
    })
  ]
};

export const DefaultDatePicker = () => ({
  component: DatePickerComponent,
  props: {
    disabled: boolean("disabled", false),
    minDate: date("minDate", new Date(2020, 6, 10)),
    maxDate: date("maxDate", new Date(2020, 6, 20))
  }
});
DefaultDatePicker.story = { name: "Default DatePicker" };
