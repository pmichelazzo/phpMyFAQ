/**
 * JavaScript functions for search relevant administration stuff
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/.
 *
 * @package phpMyFAQ
 * @package   Administration
 * @author Thorsten Rinne <thorsten@phpmyfaq.de>
 * @copyright 2015-2019 phpMyFAQ Team
 * @license http://www.mozilla.org/MPL/2.0/ Mozilla Public License Version 2.0
 * @link https://www.phpmyfaq.de
 * @since 2015-12-26
 */

/*global $:false */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  $('button.pmf-elasticsearch').on('click', function() {
    const action = $(this).data('action');
    $.ajax({
      url: 'index.php?action=ajax&ajax=elasticsearch&ajaxaction=' + action,
      type: 'POST',
      dataType: 'json',
    }).done(message => {
      const result = $('.result'),
        indicator = $('#saving_data_indicator');

      indicator.html('<img src="../assets/svg/spinning-circles.svg"> Saving ...');
      result.empty();
      if (message.error) {
        result.append('<p class="alert alert-danger">✗ ' + message.error + '</p>');
      } else {
        result.append('<p class="alert alert-success">✓ ' + message.success + '</p>');
      }
      indicator.fadeOut();
    });
  });
});
