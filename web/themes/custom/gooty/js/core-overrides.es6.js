const { registerBlockStyle } = blocks;
const __ = Drupal.t;

registerBlockStyle('core/media-text', {
  name: 'half-width',
  label: __( 'Half Width' ),
  isDefault: true,
});