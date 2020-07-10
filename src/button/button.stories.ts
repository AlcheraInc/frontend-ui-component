import { action } from '@storybook/addon-actions';
import { ButtonComponent } from './button.component';

export default { title: 'Button' };

export const withText = () => ({
  component: ButtonComponent,
  props: {
    text: 'Hello Button',
    click: action('Hello Button Click'),
  },
});

export const withEmoji = () => ({
  component: ButtonComponent,
  props: {
    text: '😀 😎 👍 💯',
    click: action('Emoji Button Click'),
  },
});
