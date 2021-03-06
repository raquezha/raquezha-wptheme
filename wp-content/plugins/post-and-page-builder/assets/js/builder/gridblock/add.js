window.BOLDGRID = window.BOLDGRID || {};
BOLDGRID.EDITOR = BOLDGRID.EDITOR || {};
BOLDGRID.EDITOR.GRIDBLOCK = BOLDGRID.EDITOR.GRIDBLOCK || {};

/**
 * Handles adding gridblocks.
 */
( function( $ ) {
	'use strict';

	var BG = BOLDGRID.EDITOR,
		self = {
			$window: $( window ),

			init: function() {
				self.setupInsertClick();
			},

			/**
			 * Bind listener for the gridblock button add.
			 *
			 * @since 1.4
			 */
			setupInsertClick: function() {
				$( '.boldgrid-zoomout-section' ).on( 'click', '.add-gridblock', self.onGridblockClick );
			},

			/**
			 * Upon clicking the griblock add button, insert placeholder and replace the placeholder with a gridblock.
			 *
			 * @since 1.4
			 */
			onGridblockClick: function() {
				var $placeHolder,
					$this = $( this ),
					$gridblock = $this.closest( '.gridblock' ),
					gridblockId = $gridblock.attr( 'data-id' );

				if ( BG.GRIDBLOCK.Generate.needsUpgrade( $gridblock ) ) {
					window.open(
						BoldgridEditor.plugin_configs.urls.premium_key + '?source=plugin-add-gridblock',
						'_blank'
					);
				} else {
					$placeHolder = self.insertPlaceHolder( gridblockId );
					self.replaceGridblock( $placeHolder, gridblockId );
				}
			},

			/**
			 * Replace a placeholder gridblock with a gridblock from config.
			 *
			 * @since 1.4
			 *
			 * @param  {jQuery} $placeHolder Element created to show loading graphic.
			 * @param  {integer} gridblockId  Index from gridblocks config.
			 */
			replaceGridblock: function( $placeHolder, gridblockId ) {
				var selectedHtml = BG.GRIDBLOCK.Create.getHtml( gridblockId );
				IMHWPB['tinymce_undo_disabled'] = true;
				self.$window.trigger( 'resize' );

				// Insert into page aciton.
				if ( 'string' !== typeof selectedHtml ) {
					selectedHtml.always( function( html ) {

						//Ignore history until always returns.
						self.sendGridblock( html, $placeHolder, gridblockId );
					} );
				} else {
					self.sendGridblock( selectedHtml, $placeHolder, gridblockId );
				}
			},

			/**
			 * Add a placeholder to the top of the page.
			 *
			 * @since 1.4
			 *
			 * @param  {integer} gridblockId Index from gridblocks config.
			 * @return {jQuery}              Element created to show loading graphic.
			 */
			insertPlaceHolder: function( gridblockId ) {
				var $placeHolder = BG.GRIDBLOCK.configs.gridblocks[gridblockId].getPreviewPlaceHolder();
				IMHWPB.WP_MCE_Draggable.draggable_instance.$body.prepend( $placeHolder );
				return $placeHolder;
			},

			/**
			 * Send Gridblock to the view
			 *
			 * @since 1.4
			 *
			 * @param  {string} html         Html to insert.
			 * @param  {jQuery} $placeHolder Element created to show loading graphic.
			 */
			sendGridblock: function( html, $placeHolder, gridblockId ) {
				var html = wp.mce.views.setMarkers( html ),
					$inserting = $( html ),
					draggable = IMHWPB.WP_MCE_Draggable.draggable_instance;

				if ( ! $inserting || ! draggable ) {
					window.send_to_editor( $inserting.html() );
				} else {
					$placeHolder.replaceWith( $inserting.html() );
				}

				// Update editor fonts.
				BG.FontRender.updateFontLink( BG.Controls.$container );

				draggable.validate_markup();

				BOLDGRID.EDITOR.mce.fire( 'setContent' );
				BOLDGRID.EDITOR.mce.focus();

				setTimeout( function() {
					BG.CONTROLS.Add.scrollToElement( $inserting, 0 );
				} );

				self.$window.trigger( 'resize' );

				setTimeout( () => {
					self.$window.trigger( 'resize' );
				}, 1000 );

				IMHWPB['tinymce_undo_disabled'] = false;
				BOLDGRID.EDITOR.mce.undoManager.add();

				self.$window.trigger(
					'boldgrid_added_gridblock',
					BG.GRIDBLOCK.configs.gridblocks[gridblockId]
				);
			}
		};

	BG.GRIDBLOCK.Add = self;
	$( BG.GRIDBLOCK.Add.init );
} )( jQuery );
