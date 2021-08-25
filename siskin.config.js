module.exports = {
  templates: [
    {
      name: 'block', // Name of the template used on command-line (siskin example ...)
      files: [
        {
          from: './.siskin/block/index.tsx',
          to: './src/blocks/block-$__0__$/'
        },
        {
          from: './.siskin/block/style.scss',
          to: './src/blocks/block-$__0__$/'
        },
        {
          from: './.siskin/block/editor.scss',
          to: './src/blocks/block-$__0__$/'
        }
      ],
      transformations: {
        1: args => {
          return args[0]
            .split('-')
            .map(e => e[0].toUpperCase() + e.substring(1))
            .join('');
        }
      }
    }
  ]
};
