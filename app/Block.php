<?php

namespace Spawn;

class Block {
    private string $blockName;
    private string $style;
    private string $editor_script;
    
    public function __construct(string $blockName) {
        $this->blockName = $blockName;

        $formatted_name = str_replace('/', '-', $blockName);

        $this->style = $formatted_name;
        $this->editor_script = $formatted_name;
    }

    public function register() {
        register_block_type($this->blockName, array(
            'style' => 'spawn-blocks-styles',
            'editor_script' => 'spawn-blocks-editor',
            'editor_style' => 'spawn-blocks-editor',
        ));
    }
}