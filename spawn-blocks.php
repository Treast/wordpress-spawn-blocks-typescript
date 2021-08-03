<?php
/**
 * Plugin Name:       Spawn Blocks
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       spawn-blocks
 *
 * @package           create-block
 */

defined( 'ABSPATH' ) || exit;

require_once __DIR__ . '/app/Blocks.php';

use Spawn\Blocks;

$blocks = new Blocks();
$blocks->add_block('spawn-blocks/helloworld');

$blocks->init();
