import { registerBlockType } from '@wordpress/blocks';

import './global.scss';

// import blockHelloWorld from './blocks/block-hello-world';
import blockSectionContent from './blocks/block-section-content';

registerBlockType('spawn-blocks/section-content', blockSectionContent);
