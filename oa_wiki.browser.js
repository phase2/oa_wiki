/**
 * @file
 * Javascript for producing wiki add documents via media browser.
 */

(function ($) {

Drupal.behaviors.oa_wiki_media = {
    attach: function(context, settings) {

      jQuery('#launcher').click(function () {
        var options = {
          'multiselect': true,
          'enabledPlugins': ['upload'],
        };
        Drupal.media.popups.mediaBrowser(Drupal.behaviors.oa_wiki_media.mediaSelected, options);
        return false;
      });
    },

    mediaSelected: function(selectedMedia) {
      var result = JSON.stringify(selectedMedia);
        jQuery('#edit-result').val(result);
    }
  }


})(jQuery);
