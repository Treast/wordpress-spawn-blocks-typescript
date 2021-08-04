import * as wordPressBlocks from '@wordpress/blocks';
import * as wordPressBlockEditor from '@wordpress/block-editor';

declare module '@wordpress/blocks' {
  interface IBlockConfiguration<T> extends BlockConfiguration<T> {
    apiVersion: number;
  }
}

declare module '@wordpress/block-editor' {
  interface IUseBlockProps {
    // @ts-ignore
    (props: any = {}): any;
    // @ts-ignore
    save(props: any = {}): any;
  }

  const __experimentalUseInnerBlocksProps: any;

  const useBlockProps: IUseBlockProps;
}
