import React from 'react';
//@ts-ignore
import {RichText, useBlockProps} from '@wordpress/block-editor';
import {BlockConfiguration} from '@wordpress/blocks';

import './style.scss';
import './editor.scss';

const edit = (props: any) => {
  const {attributes, setAttributes} = props;
  const blockProps = useBlockProps();

  const set = (key: string, val: string) => {
    setAttributes({key: val});
  };

  return (
    <div {...blockProps}>
      <RichText tagName="p" value={attributes.content} onChange={p => set('content', p)} />
    </div>
  );
};

const save = (props: any) => {
  const {attributes} = props;
  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      <RichText.Content tagName="p" value={attributes.content} />
    </div>
  );
};

const blockSettings: BlockConfiguration = {
  title: 'Hello World',
  description: 'An example of Gutenberg block using SpawnBlocks',
  category: 'text',
  icon: 'yes-alt',
  attributes: {
    content: {
      type: 'string',
      select: '.content'
    }
  },
  edit,
  save
};

export default blockSettings;
