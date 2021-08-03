import {registerBlockType} from '@wordpress/blocks';

import helloWorldBlock from './blocks/block-hello-world';

registerBlockType('spawn-blocks/helloworld', helloWorldBlock);

console.log('=======================');
console.log('Spawn blocks loaded !');
console.log('=======================');
