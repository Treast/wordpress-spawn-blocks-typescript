import * as React from 'react';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { BlockEditProps, IBlockConfiguration } from '@wordpress/blocks';

import './style.scss';
import './editor.scss';

interface IHelloWorldProps {
  content: string;
  title: string;
}

const edit = (props: BlockEditProps<IHelloWorldProps>) => {
  const { attributes, setAttributes } = props;

  const blockProps = useBlockProps();

  const setContent = (content: string) => {
    console.log('BlockProps', blockProps);
    setAttributes({ content });
  };

  const setTitle = (title: string) => {
    setAttributes({ title });
  };

  return (
    <div {...blockProps}>
      <RichText tagName="h2" value={attributes.title} onChange={p => setTitle(p)} className="title" />
      <RichText tagName="p" value={attributes.content} onChange={p => setContent(p)} className="content" />
    </div>
  );
};

const save = (props: any) => {
  const { attributes } = props;

  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      <RichText.Content tagName="h2" value={attributes.title} className="title" />
      <RichText.Content tagName="p" value={attributes.content} className="content" />
    </div>
  );
};

const blockSettings: IBlockConfiguration<IHelloWorldProps> = {
  apiVersion: 2,
  title: 'Hello World 4',
  description: 'An example of Gutenberg block using SpawnBlocks',
  category: 'text',
  icon: 'yes-alt',
  attributes: {
    content: {
      type: 'string',
      source: 'html',
      selector: '.content'
    },
    title: {
      type: 'string',
      source: 'text',
      selector: '.title'
    }
  },
  edit,
  save
};

export default blockSettings;
