import * as React from 'react';
import {
  InnerBlocks,
  useBlockProps,
  InspectorControls,
  __experimentalUseInnerBlocksProps as useInnerBlocksProps
} from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { BlockEditProps, IBlockConfiguration, TemplateArray } from '@wordpress/blocks';
import cx from 'classnames';

import './style.scss';
import './editor.scss';

interface ISectionContentProps {
  background: boolean;
}

const edit = (props: BlockEditProps<ISectionContentProps>) => {
  const { attributes, setAttributes } = props;
  const { background } = attributes;

  const blockProps = useBlockProps({
    className: cx({ background })
  });

  const innerBlocksLayout: TemplateArray = [
    ['core/group', { className: 'col-image' }, [['core/image', {}]]],
    [
      'core/group',
      { className: 'col-content' },
      [
        ['core/heading', { placeholder: 'Le titre de la section', level: 2 }],
        [
          'core/paragraph',
          {
            placeholder:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus maximus felis ac venenatis. Sed egestas nisi ac risus facilisis vestibulum.'
          }
        ]
      ]
    ]
  ];

  const innerBlocksProps = useInnerBlocksProps(blockProps, {
    template: innerBlocksLayout,
    templateLock: 'all'
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title="Options">
          <ToggleControl
            onChange={() => setAttributes({ background: !background })}
            label="Fond coloré"
            help="Mettre un fond coloré sur la section ?"
            checked={background}
          />
        </PanelBody>
      </InspectorControls>

      <div {...innerBlocksProps}></div>
    </>
  );
};

const save = (props: BlockEditProps<ISectionContentProps>) => {
  const { attributes } = props;
  const { background } = attributes;

  const blockProps = useBlockProps.save({
    className: cx({ background })
  });

  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
    </div>
  );
};

const blockSettings: IBlockConfiguration<ISectionContentProps> = {
  apiVersion: 2,
  title: 'Section de contenu',
  description: 'Section de contenu simple, avec une image',
  category: 'layout',
  icon: 'align-right',
  attributes: {
    background: {
      type: 'boolean'
    }
  },
  edit,
  save
};

export default blockSettings;
