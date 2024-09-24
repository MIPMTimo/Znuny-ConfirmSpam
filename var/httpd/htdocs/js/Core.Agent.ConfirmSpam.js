// --
// Copyright (C) 2001-2021 OTRS AG, https://otrs.com/
// Copyright (C) 2021 Znuny GmbH, https://znuny.org/
// --
// This software comes with ABSOLUTELY NO WARRANTY. For details, see
// the enclosed file COPYING for license information (GPL). If you
// did not receive this file, see https://www.gnu.org/licenses/gpl-3.0.txt.
// --

"use strict";

var Core = Core || {};
Core.Agent = Core.Agent || {};

/**
 * @namespace Core.Agent.ConfirmSpam
 * @memberof Core.Agent.Admin
 * @author MIPM GmbH
 * @description
 *      This namespace contains the special module functions for the ticket FormDraft functionality.
 */
Core.Agent.ConfirmSpam = (function (TargetNS) {

    /**
     * @name Init
     * @memberof Core.Agent.ConfirmSpam
     * @function
     * @description
     *       Initialize module functionality
     */
    TargetNS.Init = function () {

        $('a.SpamConfirmation').on('click', function() {
            var $Link = $(this),

                DialogTemplate = Core.Template.Render('Agent/TicketZoom/SpamConfirmDialog', {
                    Title: $Link.data("title"),
            });
            console.log($Link.closest("fieldset.TableLike FixedLabelSmall Narrow"));

            Core.UI.Dialog.ShowContentDialog($(DialogTemplate), Core.Language.Translate('Delete draft'), '150px', 'Center', true);

            $("button#SpamConfirm").off("click").on("click", function() {
                var $AJAXLoader = $Link.closest(".AJAXLoader");

                $AJAXLoader.show();
                Core.UI.Dialog.CloseDialog($(".Dialog"));

                Core.AJAX.FunctionCall($Link.attr('href'), {}, function () {
                    
                    // Reload the page.
                    window.location.reload();

                }, 'text');
                
            });
            $("button.CloseDialog").off("click").on("click", function() {
                Core.UI.Dialog.CloseDialog($(".Dialog"));
            });
            return false;
        });


    };

    Core.Init.RegisterNamespace(TargetNS, 'APP_MODULE');

    return TargetNS;
}(Core.Agent.ConfirmSpam || {}));
