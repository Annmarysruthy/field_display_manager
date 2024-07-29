(function ($, Drupal) {
  Drupal.behaviors.toggleFieldVisibility = {
    attach: function (context, settings) {
      // Select the radio buttons.
      const enableAllButton = $('#display-toggle-enable-all');
      const disableAllButton = $('#display-toggle-disable-all');

      // Function to change the region of all fields.
      function toggleFields(region) {
        $('select.field-region', context).each(function () {
          $(this).val(region).trigger('change');
        });
      }

      // Attach change event to the radio buttons.
      enableAllButton.on('change', function () {
        if (this.checked) {
          toggleFields('content');
        }
      });

      disableAllButton.on('change', function () {
        if (this.checked) {
          toggleFields('hidden');
        }
      });
    }
  };
})(jQuery, Drupal);
  