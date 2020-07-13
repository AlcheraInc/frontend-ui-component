import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { boolean, text, withKnobs, radios } from '@storybook/addon-knobs';

import { ButtonComponent } from '../app/button/button.component';
import { AppModule } from '../app/app.module';

export default {
  title: 'Button',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [AppModule],
    })
  ]
};

export const Text = () => ({
  component: ButtonComponent,
  props: {
    text: text('text', 'Hello Button'),
    click: action('click'),
    disabled: boolean('disabled', false)
  },
});
Text.story = { name: 'Default Button' }

export const TextEmoji = () => ({
  component: ButtonComponent,
  props: {
    text: radios('text', {"😀":"😀", "😎":"😎", "👍":"👍", "💯":"💯"}, "😀", 'emogi'),
    click: action('click'),
  },
});
TextEmoji.story = { name: 'Default Button(Emoji)' }