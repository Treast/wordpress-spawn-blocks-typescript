import {registerBlockType} from '@wordpress/blocks';

import blockHelloWorld from './blocks/block-hello-world';

registerBlockType('spawn-blocks/helloworld', blockHelloWorld);
