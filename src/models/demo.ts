import { AppImages } from '../assets';

export type ListType = {
  name: string;
  description: string;
  background: any;
  screenName: string;
};

export const DEMOS: ListType[] = [
  {
    name: 'Animated Toolbar',
    description:
      'A custom playful, interactive toolbar with cool gesture based interruptible animations.',
    background: AppImages.animated_toolbar,
    screenName: 'animated_toolbar',
  },
  {
    name: 'Color Swatch',
    description:
      'A color swatch that plays a circular rotation based on user gesture.',
    background: AppImages.color_swatch,
    screenName: 'color_swatch',
  },
  {
    name: 'Grid Magnification',
    description:
      'A grid list view that displays Magnify effect on long press & drag, focusing on the items near the touch area within a radius.',
    background: AppImages.grid_magnification,
    screenName: 'grid_mag_samples',
  },
  {
    name: 'Rope Physics',
    description:
      'Some samples showcasing the usage of Rope View Layout implemented using rn-skia & svg.',
    background: AppImages.rope_skia,
    screenName: 'rope_physics',
  },
];

export const GRID_MAGNIFICATION: ListType[] = [
  {
    name: 'Initial',
    description: 'Initial implementation.',
    background: AppImages.grid_mag_initial,
    screenName: 'grid_magnification_initial',
  },
  {
    name: 'Grid Magnification',
    description:
      'Implementation replicating the original demo with icon images.',
    background: AppImages.grid_magnification,
    screenName: 'grid_magnification',
  },
  {
    name: 'Grid Magnification: Skia (WIP)',
    description: 'Same implementation using RN-Skia provided APIs.',
    background: AppImages.grid_magnification,
    screenName: 'grid_magnification_skia',
  },
];

export const ROPE_PHYSICS_DEMOS: ListType[] = [
  {
    name: 'React-Native-Skia',
    description: 'A Rope view implementation using react-native-skia.',
    background: AppImages.rope_skia,
    screenName: 'rope-skia',
  },
  {
    name: 'React-Native-SVG',
    description: 'A Rope view implementation using react-native-svg.',
    background: AppImages.rope_svg,
    screenName: 'rope-svg',
  },
  {
    name: 'Connect the socket',
    description:
      'A Demo showcasing a very interactive usage of Rope view layout.',
    background: AppImages.rope_sockets_demo,
    screenName: 'rope-sockets-demo',
  },
];
