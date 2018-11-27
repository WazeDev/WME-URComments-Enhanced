// ==UserScript==
// @name        WME URComments-Enhanced
// @namespace   daniel@dbsooner.com
// @version     2018.11.27.01
// @description This script is for replying to user requests the goal is to speed up and simplify the process. It is a fork of rickzabel's original script.
// @grant       none
// @include     /^https:\/\/(www|beta)\.waze\.com\/(?!user\/)(.{2,6}\/)?editor\/?.*$/
// @require     https://greasyfork.org/scripts/24851-wazewrap/code/WazeWrap.js
// @author      dBsooner
// @license     MIT/BSD/X11
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAwCAYAAACFUvPfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQyQjZDNjdEODYzODExRTRBRDY0Q0I2QjA1MjU4N0EyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQyQjZDNjdFODYzODExRTRBRDY0Q0I2QjA1MjU4N0EyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDJCNkM2N0I4NjM4MTFFNEFENjRDQjZCMDUyNTg3QTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDJCNkM2N0M4NjM4MTFFNEFENjRDQjZCMDUyNTg3QTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6++Bk8AAANOElEQVR42tRZ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
// @contributionURL https://github.com/WazeDev/Thank-The-Authors
// ==/UserScript==

/* global GM_info */
/* global W */
/* global I18n */
/* global $ */
/* global WazeWrap */

(function() {
    'use strict';

    const SCRIPT_AUTHOR = 'dBsooner';
    const SETTINGS_STORE_NAME = "wme_urc-e";
    const ALERT_UPDATE = true;
    const SCRIPT_VERSION = GM_info.script.version;
    const SCRIPT_VERSION_CHANGES = [
        GM_info.script.name + '\nv' + SCRIPT_VERSION + '\n\nWhat\'s New\n------------------------------\n',
        '\n- Initial release of URComments-Enhanced.'
        ].join('');
    const DEBUG = true;
    var settings = {};
    function log(message) { console.log('URC-E:', message); }
    function logError(message) { console.error('URC-E:', message); }
    function logDebug(message) { if (DEBUG) console.debug('URC-E:', message); }
    function logWarning(message) { console.warn('URC-E:', message); }

    function loadSettingsFromStorage() {
        let loadedSettings = $.parseJSON(localStorage.getItem(SETTINGS_STORE_NAME));
        let defaultSettings = {
            AutoCenterOnUr: false,
            AutoClickOpenSolvedNi: false,
            AutoCloseCommentWindow: false,
            AutoSaveAfterSolvedOrNiComment: false,
            AutoSendReminders: false,
            AutoSetNewUrComment: false,
            AutoSetReminderUrComment: false,
            AutoSwitchToUrCommentsTab: false,
            AutoZoomInOnNewUr: false,
            AutoZoomOutAfterComment: false,
            DisableDoneNextButtons: false,
            DoNotShowTagNameOnPill: false,
            DoubleClickLinkCloseMessages: false,
            DoubleClickLinkAllComments: false,
            ReplaceTagNameWithEditorName: false,
            UnfollowUrAfterSend: false,
            ReminderDays: 3,
            CloseDays: 7,
            EnableUrceUrFiltering: false,
            EnableUrPillCounts: false,
            OnlyShowMyUrs: false,
            ShowOthersUrsPastReminderClose: false,
            HideClosedUrs: false,
            HideTaggedUrs: false,
            HideWaiting: false,
            HideUrsCloseNeeded: false,
            HideUrsReminderNeeded: false,
            HideUrsWithUserReplies: false,
            HideUrsWoComments: false,
            HideUrsWoCommentsOrDescriptions: false,
            HideUrsWoCommentsWithDescriptions: false,
            lastVersion: null
        };
        settings = loadedSettings ? loadedSettings : defaultSettings;
        for (let prop in defaultSettings) {
            if (!settings.hasOwnProperty(prop)) {
                settings[prop] = defaultSettings[prop];
            }
        }
        if(!loadedSettings) saveSettingsToStorage();
    }

    function saveSettingsToStorage() {
        if(localStorage) {
            settings.lastVersion = SCRIPT_VERSION;
            localStorage.setItem(SETTINGS_STORE_NAME, JSON.stringify(settings));
            logDebug('Settings saved.');
        }
    }

    function showScriptInfoAlert() {
        if (ALERT_UPDATE && SCRIPT_VERSION !== settings.lastVersion) {
            alert(SCRIPT_VERSION_CHANGES);
        }
    }

    function settingsCheckedChanged(id, checked) {
        settings[id] = checked;
        saveSettingsToStorage();
    }

    function initCommentsTab() {
    }

    function initSettingsTab() {
        $('#panel-urce-settings').append(
            $('<fieldset>', {style:'border:1px solid silver; padding:8px; border-radius:4px; -webkit-padding-before:0;'}).append(
                $('<legend>', {style:'margin-bottom:0px; border-bottom-style:none; width:auto;'}).append($('<span>', {style:'font-size:14px; font-weight:600; text-transform:uppercase;'}).text(I18n.t('urce.prefs.CommentList'))),
                $('<div>', {class:'controls-container'}).css({'padding-top':'2px'}).append(
                    $('<select>', {id:'_selCustomList'}).append(
                        $('<option>', {value:'CommentTeam'}).text('CommentTeam')
                    )
                ),
            ),
            $('<fieldset>', {style:'border:1px solid silver; padding:8px; border-radius:4px; -webkit-padding-before:0;'}).append(
                $('<legend>', {style:'margin-bottom:0px; border-bottom-style:none; width:auto;'}).append($('<span>', {style:'font-size:14px; font-weight:600; text-transform:uppercase;'}).text(I18n.t('urce.prefs.UrcePrefs'))),
                $('<div>', {class:'controls-container'}).css({'padding-top':'2px'}).append(
                    $('<input>', {type:'checkbox', id:'_cbAutoCenterOnUr'}).change(function() { settingsCheckedChanged('AutoCenterOnUr', $(this).is(':checked')); }).prop('checked', settings.AutoCenterOnUr),
                    $('<label>', {for:'_cbAutoCenterOnUr', title:I18n.t('urce.prefs.AutoCenterOnUrTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.AutoCenterOnUr')).append($('<br>')),
                    $('<input>', {type:'checkbox', id:'_cbAutoClickOpenSolvedNi'}).change(function() { settingsCheckedChanged('AutoClickOpenSolvedNi', $(this).is(':checked')); }).prop('checked', settings.AutoClickOpenSolvedNi),
                    $('<label>', {for:'_cbAutoClickOpenSolvedNi', title:I18n.t('urce.prefs.AutoClickOpenSolvedNiTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.AutoClickOpenSolvedNi')).append($('<br>')),
                    $('<input>', {type:'checkbox', id:'_cbAutoCloseCommentWindow'}).change(function() { settingsCheckedChanged('AutoCloseCommentWindow', $(this).is(':checked')); }).prop('checked', settings.AutoCloseCommentWindow),
                    $('<label>', {for:'_cbAutoCloseCommentWindow', title:I18n.t('urce.prefs.AutoCloseCommentWindowTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.AutoCloseCommentWindow')).append($('<br>')),
                    $('<input>', {type:'checkbox', id:'_cbAutoSaveAfterSolvedOrNiComment'}).change(function() { settingsCheckedChanged('AutoSaveAfterSolvedOrNiComment', $(this).is(':checked')); }).prop('checked', settings.AutoSaveAfterSolvedOrNiComment),
                    $('<label>', {for:'_cbAutoSaveAfterSolvedOrNiComment', title:I18n.t('urce.prefs.AutoSaveAfterSolvedOrNiCommentTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.AutoSaveAfterSolvedOrNiComment')).append($('<br>')),
                    $('<input>', {type:'checkbox', id:'_cbAutoSendReminders'}).change(function() { settingsCheckedChanged('AutoSendReminders', $(this).is(':checked')); }).prop('checked', settings.AutoSendReminders),
                    $('<label>', {for:'_cbAutoSendReminders', title:I18n.t('urce.prefs.AutoSendRemindersTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.AutoSendReminders')).append($('<br>')),
                    $('<input>', {type:'checkbox', id:'_cbAutoSetNewUrComment'}).change(function() { settingsCheckedChanged('AutoSetNewUrComment', $(this).is(':checked')); }).prop('checked', settings.AutoSetNewUrComment),
                    $('<label>', {for:'_cbAutoSetNewUrComment', title:I18n.t('urce.prefs.AutoSetNewUrCommentTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.AutoSetNewUrComment')).append($('<br>')),
                    $('<input>', {type:'checkbox', id:'_cbAutoSetReminderUrComment'}).change(function() { settingsCheckedChanged('AutoSetReminderUrComment', $(this).is(':checked')); }).prop('checked', settings.AutoSetReminderUrComment),
                    $('<label>', {for:'_cbAutoSetReminderUrComment', title:I18n.t('urce.prefs.AutoSetReminderUrCommentTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.AutoSetReminderUrComment')).append($('<br>')),
                    $('<input>', {type:'checkbox', id:'_cbAutoSwitchToUrCommentsTab'}).change(function() { settingsCheckedChanged('AutoSwitchToUrCommentsTab', $(this).is(':checked')); }).prop('checked', settings.AutoSwitchToUrCommentsTab),
                    $('<label>', {for:'_cbAutoSwitchToUrCommentsTab', title:I18n.t('urce.prefs.AutoSwitchToUrCommentsTabTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.AutoSwitchToUrCommentsTab')).append($('<br>')),
                    $('<input>', {type:'checkbox', id:'_cbAutoZoomInOnNewUr'}).change(function() { settingsCheckedChanged('AutoZoomInOnNewUr', $(this).is(':checked')); }).prop('checked', settings.AutoZoomInOnNewUr),
                    $('<label>', {for:'_cbAutoZoomInOnNewUr', title:I18n.t('urce.prefs.AutoZoomInOnNewUrTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.AutoZoomInOnNewUr')).append($('<br>')),
                    $('<input>', {type:'checkbox', id:'_cbAutoZoomOutAfterComment'}).change(function() { settingsCheckedChanged('AutoZoomOutAfterComment', $(this).is(':checked')); }).prop('checked', settings.AutoZoomOutAfterComment),
                    $('<label>', {for:'_cbAutoZoomOutAfterComment', title:I18n.t('urce.prefs.AutoZoomOutAfterCommentTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.AutoZoomOutAfterComment')).append($('<br>')),
                    $('<input>', {type:'checkbox', id:'_cbDisableDoneNextButtons'}).change(function() { settingsCheckedChanged('DisableDoneNextButtons', $(this).is(':checked')); }).prop('checked', settings.DisableDoneNextButtons),
                    $('<label>', {for:'_cbDisableDoneNextButtons', title:I18n.t('urce.prefs.DisableDoneNextButtonsTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.DisableDoneNextButtons')).append($('<br>')),
                    $('<input>', {type:'checkbox', id:'_cbDoNotShowTagNameOnPill'}).change(function() { settingsCheckedChanged('DoNotShowTagNameOnPill', $(this).is(':checked')); }).prop('checked', settings.DoNotShowTagNameOnPill),
                    $('<label>', {for:'_cbDoNotShowTagNameOnPill', title:I18n.t('urce.prefs.DoNotShowTagNameOnPillTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.DoNotShowTagNameOnPill')).append($('<br>')),
                    $('<input>', {type:'checkbox', id:'_cbDoubleClickLinkCloseMessages'}).change(function() { settingsCheckedChanged('DoubleClickLinkCloseMessages', $(this).is(':checked')); }).prop('checked', settings.DoubleClickLinkCloseMessages),
                    $('<label>', {for:'_cbDoubleClickLinkCloseMessages', title:I18n.t('urce.prefs.DoubleClickLinkCloseMessagesTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.DoubleClickLinkCloseMessages')).append($('<br>')),
                    $('<input>', {type:'checkbox', id:'_cbDoubleClickLinkAllComments'}).change(function() { settingsCheckedChanged('DoubleClickLinkAllComments', $(this).is(':checked')); }).prop('checked', settings.DoubleClickLinkAllComments),
                    $('<label>', {for:'_cbDoubleClickLinkAllComments', title:I18n.t('urce.prefs.DoubleClickLinkAllCommentsTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.DoubleClickLinkAllComments')).append($('<br>')),
                    $('<input>', {type:'checkbox', id:'_cbReplaceTagNameWithEditorName'}).change(function() { settingsCheckedChanged('ReplaceTagNameWithEditorName', $(this).is(':checked')); }).prop('checked', settings.ReplaceTagNameWithEditorName),
                    $('<label>', {for:'_cbReplaceTagNameWithEditorName', title:I18n.t('urce.prefs.ReplaceTagNameWithEditorNameTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.ReplaceTagNameWithEditorName')).append($('<br>')),
                    $('<input>', {type:'checkbox', id:'_cbUnfollowUrAfterSend'}).change(function() { settingsCheckedChanged('UnfollowUrAfterSend', $(this).is(':checked')); }).prop('checked', settings.UnfollowUrAfterSend),
                    $('<label>', {for:'_cbUnfollowUrAfterSend', title:I18n.t('urce.prefs.UnfollowUrAfterSendTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.UnfollowUrAfterSend')).append($('<br>')),
                    $('<div>', {style:'padding-left:25px;'}).append(
                        $('<div>', {title:I18n.t('urce.prefs.ReminderDaysTitle')}).css({'white-space':'pre-line'}).append(I18n.t('urce.prefs.ReminderDays') + ': ').append(
                            $('<input>', {type:'number', id:'_numReminderDays', min:'1', max:'14', step:'1', value:settings.ReminderDays, title:I18n.t('urce.prefs.ReminderDaysTitle')}).css({'width':'38px', 'height':'20px'}).on('change', function() { // tried keyup, mousup, but this works good enough
                                var numReminderDays = Math.abs(parseInt(this.value, 10) || 1);
                                numReminderDays = numReminderDays > 14 ? 14 : numReminderDays;
                                numReminderDays = numReminderDays < 1 ? 1 : numReminderDays;
                                settingsCheckedChanged('ReminderDays', numReminderDays);
                                this.value = numReminderDays;
                            })
                        ),
                        $('<div>', {title:I18n.t('urce.prefs.CloseDaysTitle')}).css({'white-space':'pre-line'}).append(I18n.t('urce.prefs.CloseDays') + ': ').append(
                            $('<input>', {type:'number', id:'_numCloseDays', min:'1', max:'14', step:'1', value:settings.CloseDays, title:I18n.t('urce.prefs.CloseDaysTitle')}).css({'width':'38px', 'height':'20px'}).on('change', function() { // tried keyup, mousup, but this works good enough
                                var numCloseDays = Math.abs(parseInt(this.value, 10) || 1);
                                numCloseDays = numCloseDays > 14 ? 14 : numCloseDays;
                                numCloseDays = numCloseDays < 1 ? 1 : numCloseDays;
                                settingsCheckedChanged('CloseDays', numCloseDays);
                                this.value = numCloseDays;
                            })
                        )
                    )
                )
            ),
            $('<fieldset>', {style:'border:1px solid silver; padding:8px; border-radius:4px; -webkit-padding-before:0;'}).append(
                $('<legend>', {style:'margin-bottom:0px; border-bottom-style:none; width:auto;'}).append($('<span>', {style:'font-size:14px; font-weight:600; text-transform:uppercase;'}).text(I18n.t('urce.prefs.UrFilteringPrefs'))),
                $('<div>', {class:'controls-container'}).css({'padding-top':'2px'}).append(
                    $('<input>', {type:'checkbox', id:'_cbEnableUrceUrFiltering'}).change(function() { settingsCheckedChanged('EnableUrceUrFiltering', $(this).is(':checked')); }).prop('checked', settings.EnableUrceUrFiltering),
                    $('<label>', {for:'_cbEnableUrceUrFiltering', title:I18n.t('urce.prefs.EnableUrceUrFilteringTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.EnableUrceUrFiltering')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbEnableUrPillCounts'}).change(function() { settingsCheckedChanged('EnableUrPillCounts', $(this).is(':checked')); }).prop('checked', settings.EnableUrPillCounts),
                    $('<label>', {for:'_cbEnableUrPillCounts', title:I18n.t('urce.prefs.EnableUrPillCountsTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.EnableUrPillCounts')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbOnlyShowMyUrs'}).change(function() { settingsCheckedChanged('OnlyShowMyUrs', $(this).is(':checked')); }).prop('checked', settings.OnlyShowMyUrs),
                    $('<label>', {for:'_cbOnlyShowMyUrs', title:I18n.t('urce.prefs.OnlyShowMyUrsTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.OnlyShowMyUrs')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbShowOthersUrsPastReminderClose'}).change(function() { settingsCheckedChanged('ShowOthersUrsPastReminderClose', $(this).is(':checked')); }).prop('checked', settings.ShowOthersUrsPastReminderClose),
                    $('<label>', {for:'_cbShowOthersUrsPastReminderClose', title:I18n.t('urce.prefs.ShowOthersUrsPastReminderCloseTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.ShowOthersUrsPastReminderClose')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideClosedUrs'}).change(function() { settingsCheckedChanged('HideClosedUrs', $(this).is(':checked')); }).prop('checked', settings.HideClosedUrs),
                    $('<label>', {for:'_cbHideClosedUrs', title:I18n.t('urce.prefs.HideClosedUrsTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.HideClosedUrs')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideTaggedUrs'}).change(function() { settingsCheckedChanged('HideTaggedUrs', $(this).is(':checked')); }).prop('checked', settings.HideTaggedUrs),
                    $('<label>', {for:'_cbHideTaggedUrs', title:I18n.t('urce.prefs.HideTaggedUrsTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.HideTaggedUrs')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideWaiting'}).change(function() { settingsCheckedChanged('HideWaiting', $(this).is(':checked')); }).prop('checked', settings.HideWaiting),
                    $('<label>', {for:'_cbHideWaiting', title:I18n.t('urce.prefs.HideWaitingTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.HideWaiting')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideUrsCloseNeeded'}).change(function() { settingsCheckedChanged('HideUrsCloseNeeded', $(this).is(':checked')); }).prop('checked', settings.HideUrsCloseNeeded),
                    $('<label>', {for:'_cbHideUrsCloseNeeded', title:I18n.t('urce.prefs.HideUrsCloseNeededTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.HideUrsCloseNeeded')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideUrsReminderNeeded'}).change(function() { settingsCheckedChanged('HideUrsReminderNeeded', $(this).is(':checked')); }).prop('checked', settings.HideUrsReminderNeeded),
                    $('<label>', {for:'_cbHideUrsReminderNeeded', title:I18n.t('urce.prefs.HideUrsReminderNeededTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.HideUrsReminderNeeded')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideUrsWithUserReplies'}).change(function() { settingsCheckedChanged('HideUrsWithUserReplies', $(this).is(':checked')); }).prop('checked', settings.HideUrsWithUserReplies),
                    $('<label>', {for:'_cbHideUrsWithUserReplies', title:I18n.t('urce.prefs.HideUrsWithUserRepliesTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.HideUrsWithUserReplies')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideUrsWoComments'}).change(function() { settingsCheckedChanged('HideUrsWoComments', $(this).is(':checked')); }).prop('checked', settings.HideUrsWoComments),
                    $('<label>', {for:'_cbHideUrsWoComments', title:I18n.t('urce.prefs.HideUrsWoCommentsTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.HideUrsWoComments')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideUrsWoCommentsOrDescriptions'}).change(function() { settingsCheckedChanged('HideUrsWoCommentsOrDescriptions', $(this).is(':checked')); }).prop('checked', settings.HideUrsWoCommentsOrDescriptions),
                    $('<label>', {for:'_cbHideUrsWoCommentsOrDescriptions', title:I18n.t('urce.prefs.HideUrsWoCommentsOrDescriptionsTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.HideUrsWoCommentsOrDescriptions')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideUrsWoCommentsWithDescriptions'}).change(function() { settingsCheckedChanged('HideUrsWoCommentsWithDescriptions', $(this).is(':checked')); }).prop('checked', settings.HideUrsWoCommentsWithDescriptions),
                    $('<label>', {for:'_cbHideUrsWoCommentsWithDescriptions', title:I18n.t('urce.prefs.HideUrsWoCommentsWithDescriptionsTitle')}).css({'white-space':'pre-line'}).text(I18n.t('urce.prefs.HideUrsWoCommentsWithDescriptions'))
                )
            )
        )
    }

    function initTab() {
        initSettingsTab();
        initCommentsTab();
        $('a[href="#sidepanel-urc-e"]').prepend(
            $('<img>', {style:'padding-bottom:6px;',
                        src:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAwCAYAAACFUvPfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQyQjZDNjdEODYzODExRTRBRDY0Q0I2QjA1MjU4N0EyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQyQjZDNjdFODYzODExRTRBRDY0Q0I2QjA1MjU4N0EyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDJCNkM2N0I4NjM4MTFFNEFENjRDQjZCMDUyNTg3QTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDJCNkM2N0M4NjM4MTFFNEFENjRDQjZCMDUyNTg3QTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6++Bk8AAANOElEQVR42tRZ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',
                        width:"18px"})
        )
    }

    function initGui() {
        let content = $('<div>').append(
            $('<span>', {style:'font-size:14px;font-weight:600'}).text(I18n.t('urce.common.title')),
            $('<span>', {style:'font-size:11px;margin-left:10px;color:#aaa;'}).text(GM_info.script.version),
            '<ul class="nav nav-tabs">' +
            '<li class="active"><a data-toggle="tab" href="#panel-urce-comments" aria-expanded="true">' + I18n.t('urce.tabs.Comments') + '</a></li>' +
            '<li><a data-toggle="tab" href="#panel-urce-settings" aria-expanded="true">' + I18n.t('urce.tabs.Settings') + '</a></li>' +
            '</ul>',
            $('<div>', {class:'tab-content', style:'padding:8px;padding-top:2px'}).append(
                $('<div>', {class:'tab-pane active', id:'panel-urce-comments'}),
                $('<div>', {class:'tab-pane', id:'panel-urce-settings'})
                )
            ).html();
        new WazeWrap.Interface.Tab('URC-E', content, initTab, null);
        showScriptInfoAlert();
    }

    function init() {
        loadSettingsFromStorage();
        loadTranslations();
        initGui();
        log('Initialized.');
    }

    function bootstrap(tries) {
        tries = tries || 1;

        if (W &&
            W.map &&
            W.model &&
            $ && WazeWrap.Ready) {
            log('Initializing...');
            init();
        } else if (tries < 1000) {
            setTimeout(function () { bootstrap(++tries); }, 200);
        } else {
            logError('Timed out waiting for WME to become ready.');
        }
    }

    bootstrap();

    function loadTranslations() {
        setTranslations({
            en: {
                prefs: {
                    // URC-E Preferences
                    UrcePrefs: 'URC-E Preferences',
                    AutoCenterOnUr: 'Auto center on UR',
                    AutoCenterOnUrTitle: 'Auto Center the map at the current map zoom when UR has comments and the zoom is less than 3',
                    AutoClickOpenSolvedNi: 'Auto click open, solved, not identified',
                    AutoClickOpenSolvedNiTitle: 'Suppress the message about recent pending questions to the reporter and then depending on the choice set for that comment Clicks Open, Solved, Not Identified',
                    AutoCloseCommentWindow: 'Auto close comment window',
                    AutoCloseCommentWindowTitle: 'For the user requests that do not require saving this will close the user request after clicking on a UR-Comment and then the send button',
                    AutoSaveAfterSolvedOrNiComment: 'Auto save after solved or NI comment',
                    AutoSaveAfterSolvedOrNiCommentTitle: 'If Auto Click Open, Solved, Not Identified is also checked, this option will click the save button after clicking on a UR-Comment and then the send button',
                    AutoSendReminders: 'Auto send reminders',
                    AutoSendRemindersTitle: 'Auto send reminders to my UR as they are on screen',
                    AutoSendRemindersWarning: 'URCommentsEnchanced - This will snd reminders at the reminder days setting. This only happens when they are visible on your screen.\n\nNOTE: When using this feature, you should not leave any UR open unless you have a question that needs an answer from the reporter as this script will send reminders.',
                    AutoSetNewUrComment: 'Auto set new UR comment',
                    AutoSetNewUrCommentTitle: 'Auto set the UR comment on new URs that do not already have comments',
                    AutoSetReminderUrComment: 'Auto set reminder UR comment',
                    AutoSetReminderUrCommentTitle: 'Auto set the UR reminder comment for URs that are older than reminder days setting and have only one comment',
                    AutoSwitchToUrCommentsTab: 'Auto switch to the URC-E tab',
                    AutoSwitchToUrCommentsTabTitle: 'Auto switch to the URComments-Enhanced tab when opening a UR, when the UR window is closed you will be switched to your previous tab',
                    AutoZoomInOnNewUr: 'Auto zoom in on new UR',
                    AutoZoomInOnNewUrTitle: 'Auto zoom in when opening URs with no comments and when sending UR reminders',
                    AutoZoomOutAfterComment: 'Auto zoom out after comment',
                    AutoZoomOutAfterCommentTitle: 'After clicking on a UR-Comment in the list and clicking send on the UR the map zoom will be set back to your previous zoom',
                    CommentList: 'Comment List',
                    CommentListTitle: 'This shows the selected comment list. There is support for a custom list. If you would like your comment list built into this script or have suggestions on the Comments team’s list, please contact dBsooner on Discord or via PM.',
                    DisableDoneNextButtons: 'Disable done / next buttons',
                    DisableDoneNextButtonsTitle: 'Disable the done / next buttons at the bottom of the new UR window',
                    DoNotShowTagNameOnPill: 'Don\'t show tag name on pill',
                    DoNotShowTagNameOnPillTitle: 'Do not show tag name on pill where there is a URO tag',
                    DoubleClickLinkCloseMessages: 'Double click link - Close messages',
                    DoubleClickLinkCloseMessagesTitle: 'Add an extra link to the close comment when double clicked will auto send the comment to the UR windows and click send, and then will launch all of the other options that are enabled',
                    DoubleClickLinkAllComments: 'Double click link - All comments',
                    DoubleClickLinkAllCommentsTitle: 'Add an extra link to each comment in the list that when double clicked will auto send the comment to the UR windows and click send, and then will launch all of the other options that are enabled',
                    ReminderDays: 'Reminder days',
                    ReminderDaysTitle: 'Number of days to (auto) set reminder comment.',
                    CloseDays: 'Close days',
                    CloseDaysTitle: 'Number of days to (auto) close URs.',
                    ReplaceTagNameWithEditorName: 'Replace tag name with editor name',
                    ReplaceTagNameWithEditorNameTitle: 'When a UR has the logged in editors name in the description or any of the comments of the UR (not the name Waze automatically adds when commenting) replace the tag type with the editors name',
                    UnfollowUrAfterSend: 'Unfollow UR after send',
                    UnfollowUrAfterSendTitle: 'Unfollow UR after sending comment',
                    // UR Filtering Preferences
                    UrFilteringPrefs: 'UR Filtering Preferences',
                    EnableUrceUrFiltering: 'Enable URC-E UR filtering',
                    EnableUrceUrFilteringTitle: 'Enable or disable URComments filtering.',
                    EnableUrPillCounts: 'Enable UR pill counts',
                    EnableUrPillCountsTitle: 'Enable or disable the pill with UR counts.',
                    OnlyShowMyUrs: 'Only show my URs',
                    OnlyShowMyUrsTitle: 'Hide URs where you have no comments.',
                    ShowOthersUrsPastReminderClose: 'Show others URs past remind+close',
                    ShowOthersUrsPastReminderCloseTitle: 'Show URs that other commented on that have gone past the reminder and close day settings added together.',
                    HideClosedUrs: 'Hide closed URs',
                    HideClosedUrsTitle: 'Hide closed URs.',
                    HideTaggedUrs: 'Hide tagged URs',
                    HideTaggedUrsTitle: 'Hide URs that are tagged with URO+ style tags ex. [NOTE].',
                    HideWaiting: 'Hide waiting',
                    HideWaitingTitle: 'Only show URs that need work (hide URs in other parts of the life-cycle).',
                    HideUrsCloseNeeded: 'Hide URs where close needed',
                    HideUrsCloseNeededTitle: 'Hide URs that need closing.',
                    HideUrsReminderNeeded: 'Hide URs where reminders needed',
                    HideUrsReminderNeededTitle: 'Hide URs where reminders are needed.',
                    HideUrsWithUserReplies: 'Hide URs with user replies',
                    HideUrsWithUserRepliesTitle: 'Hide UR with user replies.',
                    HideUrsWoComments: 'Hide URs w/o comments',
                    HideUrsWoCommentsTitle: 'Hide URs that have zero comments.',
                    HideUrsWoCommentsOrDescriptions: 'Hide URs w/o comments or descripts',
                    HideUrsWoCommentsOrDescriptionsTitle: 'Hide URs that do not have descriptions or comments.',
                    HideUrsWoCommentsWithDescriptions: 'Hide URs w/ descripts w/o comments',
                    HideUrsWoCommentsWithDescriptionsTitle: 'Hide URs that have descriptions and zero comments.'
                },
                tabs: {
                    Comments: 'Comments',
                    Settings: 'Settings'
                },
                common: {
                    title: 'URComments-Enhanced',
                    DoubleClick: '(double click)'
                },
                prompts: {
                    CloseDaysZero: 'URC-E - You cannot set the close days to zero.',
                    DoubleClick: 'URC-E - To use the double click links, you must have the \'Auto click open, solved, not identified\' option enabled.',
                    FilterUrs2Abort: 'URC-E - Aborting FilterURs2 because filtering, counts and auto reminders are disabled.',
                    LoadingUrDataTimeout: 'URC-E: Loading UR data has timed out, retrying.',
                    NoCommentBox: 'URC-E: Unable to find the comment box! In order for this script to work, you need to have a UR open.',
                    ReminderMessageAuto: 'URC-E: Adding reminder message to UR: ',
                    UnsavedEdits: 'URC-E has detected that you hav unsaved edits!\n\nWith the \'Auto save\' option enabled, you cannot send comments that would require the script to save, if you have previous unsaved edits. Please save your edits and then re-click the comment you wish to send.',
                    UrFilteringDisabled: 'URC-E\'s UR Filtering has been disabled because URO+\'s UR filters are active.'
                }
            },
            "es-419": {
            },
            fr: {
            }
        });
    }

    function setTranslations(translations) {
        I18n.translations[I18n.currentLocale()].urce = translations.en;
        for (var i = 0; i < Object.keys(translations).length; i++) {
            var locale = Object.keys(translations)[i];
            if (I18n.currentLocale() == locale) {
                I18n.translations[locale].urce.prefs = translations[locale].prefs;
                return;
            }
        }
    }
})();
