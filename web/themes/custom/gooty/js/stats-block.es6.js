const { blocks, data, element, components, editor } = wp;
const { registerBlockType } = blocks;
const { dispatch, select } = data;
const { Fragment } = element;
const { PanelBody, BaseControl, Icon, RangeControl, IconButton, Toolbar, SelectControl } = components;
const { InnerBlocks, RichText, InspectorControls, PanelColorSettings, MediaUpload, BlockControls } = editor;
const __ = Drupal.t;

const settings = {
  title: __('Stats Block'),
  description: __('Phase2 Stats Block'),
  icon: 'chart-line',
  attributes: {
    text: {
      type: 'string',
    },
    number: {
      type: 'string',
    },
  },

  edit({ className, attributes, setAttributes }) {

    const { text, number } = attributes;

    return (
      <Fragment>
        <div className={className}>
          <div className="column">
            <RichText
              className="stats__text"
              identifier="text"
              tagName="div"
              value={text}
              placeholder={__('Text')}
              onChange={text => {
                setAttributes({
                  text,
                });
              }}
              onSplit={() => null}
              unstableOnSplit={() => null}
            />

            <RichText
              className="stats__number"
              identifier="string"
              tagName="div"
              value={number}
              placeholder={__('Number')}
              onChange={number => {
                setAttributes({
                  number,
                });
              }}
              onSplit={() => null}
              unstableOnSplit={() => null}
            />
          </div>
        </div>
        <InspectorControls>
          <PanelBody title={ __('Block Settings') }>
            <div>{text}</div>
            <div>{number}</div>
          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  },

  save({ className, attributes }) {
    const { text, number } = attributes;

    return (
      <div className={className}>
          {text && (
            <div className="stats__text">{text}</div>
          )}
          {number && (
            <div className="stats__number">{number}</div>
          )}
      </div>
    );
  },
};

const category = {
  slug: 'phase2',
  title: __('Phase2'),
};

const currentCategories = select('core/blocks').getCategories().filter(item => item.slug !== category.slug);
dispatch('core/blocks').setCategories([ category, ...currentCategories ]);

registerBlockType(`${category.slug}/stats-block`, { category: category.slug, ...settings });
