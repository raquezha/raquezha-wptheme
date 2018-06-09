<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'r(a:&(sOoip/bSc>?rJ/KYP!]R5i+i~DommcXAM,{AmVt;Og|Yjw=&)tmtJc+do*');
define('SECURE_AUTH_KEY',  '8KQf3l?*5`%-OlBskM c9{bG7lB2#M_QjXapiM9!Tkw+3b|r|?tOZ j`=TN$t]~L');
define('LOGGED_IN_KEY',    '0l2%Gh$drkGT{9g)XF!gFy.(m:@T5C=aSC.W3i5,G^H<h?9LQ-MioW}TbT;%a!1[');
define('NONCE_KEY',        'Wx|V@%km7|az,M.N9r2=mqe-U/zJ-h/)s6RTSKxo8L*sL,N|N6t`&a_(!l@Cc:`C');
define('AUTH_SALT',        'kVAv<N7X5ZM`Z|`m@Zzd@[2V@!*akZMu^j*|Cl#cT;vg/?zeqc0.(/L^Nk1PB4Z/');
define('SECURE_AUTH_SALT', 'hmRoieCIT5@I]6bX _iGg#if-]({KgR=h2)E>+0xuyl#v60/EK`OwbZ@$KPkpSQS');
define('LOGGED_IN_SALT',   'cPCa3|=oH?)CiOj/)IqjsEM1Hf^X+nCQlhX[k&7JtUV0BVMT!Bnwf>r&~g,(AT%N');
define('NONCE_SALT',       '9^#U^H%09W(VdnS PC%@5h#;qn:0D?EBk)3`E]W;MCSwdX|C#=zJ&MqNi0rQ]9wj');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
