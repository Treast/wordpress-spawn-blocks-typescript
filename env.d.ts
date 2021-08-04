import * as wordPressBlocks from '@wordpress/blocks';
import * as wordPressBlockEditor from '@wordpress/block-editor';

declare module '@wordpress/blocks' {
  interface IBlockConfiguration<T> extends BlockConfiguration<T> {
    apiVersion: number;
  }
}

declare module '@wordpress/block-editor' {
  interface IUseBlockProps {
    (): Object;
    save(): Object;
  }

  const useBlockProps: IUseBlockProps;
}
