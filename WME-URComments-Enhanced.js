// ==UserScript==
// @name        WME URComments-Enhanced
// @namespace   https://greasyfork.org/users/166843
// @version     2019.02.04.02
// @description URComments-Enhanced (URC-E) allows Waze editors to handle WME update requests more quickly and efficiently. Also adds many UR filtering options, ability to change the markers, plus much, much, more!
// @grant       none
// @include     /^https:\/\/(www|beta)\.waze\.com\/(?!user\/)(.{2,6}\/)?editor\/?.*$/
// @require     https://greasyfork.org/scripts/24851-wazewrap/code/WazeWrap.js
// @author      dBsooner
// @license     MIT/BSD/X11
// @connect     sheets.googleapis.com
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAwCAYAAACFUvPfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQyQjZDNjdEODYzODExRTRBRDY0Q0I2QjA1MjU4N0EyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQyQjZDNjdFODYzODExRTRBRDY0Q0I2QjA1MjU4N0EyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDJCNkM2N0I4NjM4MTFFNEFENjRDQjZCMDUyNTg3QTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDJCNkM2N0M4NjM4MTFFNEFENjRDQjZCMDUyNTg3QTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6++Bk8AAANOElEQVR42tRZ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
// @contributionURL https://github.com/WazeDev/Thank-The-Authors
// ==/UserScript==

/* global GM_info */
/* global W */
/* global I18n */
/* global $ */
/* global WazeWrap */
/* global OL */
/* global _ */

/*
 * Original concept and code for URComments (URC) was written by rickzabel and licensed under MIT/BSD/X11.
 * This script is a ground-up rewrite of URC. Special thanks is definitely given to rickzabel for his hard
 * work and dedication to the original script. You can reach him at rickzabel@gmail.com.
 *
 */

/*
 * Portions of this script were inspired by URO+ written by Twister-UK. Credit is given to him and his team
 * for development of that script. Where code was directly copied, function name or variable name was retained
 * and a comment was placed before the code. The code that was inspired by was a complete rewrite using URO+
 * as a reference for the logic. URO+ is located at: https://greasyfork.org/en/scripts/1952-uroverview-plus-uro
 *
 */


(function() {
    'use strict';

    const SCRIPT_NAME = GM_info.script.name;
    const SCRIPT_AUTHOR = GM_info.script.author;
    const SCRIPT_GF_URL = 'https://greasyfork.org/en/scripts/375430-wme-urcomments-enhanced';
    const SCRIPT_FORUM_URL = 'https://www.waze.com/forum/viewtopic.php?f=819&t=275608';
    const SETTINGS_STORE_NAME = "WME_URC-E";
    const ALERT_UPDATE = true;
    const SCRIPT_VERSION = GM_info.script.version;
    const SCRIPT_VERSION_CHANGES = [ 'NEW: WazeWrap update integration.', 'BUGFIX: Not able to change lists in some situations.', 'BUGFIX: ZoomIn on new.', 'BUGFIX: WME bug workaround.', 'BUGFIX: AutoCenter on commented.', 'BUGFIX: Last Comment By in popup.', 'Other slight changes to prevent future bugs.' ];
    const DOUBLE_CLICK_ICON = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGnRFWHRTb2Z0d2FyZQBQYWludC5ORVQgdjMuNS4xMDD0cqEAAAMnSURBVFhH7ZdNSFRRGIZH509ndGb8nZuCCSNE4CyGURmkTVCuBEmEiMSZBmaoRYsIgiDMhVFEFERBZITbEINQbFMtclGQtUgIalG0ioiMFkWlZc+53WN3rmfG64wSgS+8fOd8c8533u/83HPGsRZcLtedqqqqU0Z189De3q4ZxRyUlZVN+3y+EaNaENXV1VecTue8HZLYPO0v6B1jsZiG42soFErpDhPsCshkMgHM8npI7F/YP6ivr0+Wl5f/CAQCOSLsCkgmkyGMHtjtds8Q66Ig2Y5Jfx7+RV1dnS6CNT9kuBzUp5iZI0Y1L8wCEHzW4/Hs9Xq9MRJqEb7KysrHiPmM/w18JdvCXNTW1g4JEQTRRbS1tYkAOejt7Q12dnZqXV1d4VQq5RE+swAG+sKSfmImbkkB7LEo5QeNjY3DrP0x2RauBhkPof7ZwMCAHlygubm5o6KiYpyg76jKzsuIXULshFkA/Q9idUgBgmS+h/aXZN2gGul02i1sIpEgvm/M2DArHRlkP/5JUUbUE6uAmpqaEyTxgUE/Ch8JxPDfa2hoOM1yHJdtxTmfQpXYNDqZvplIJLKdHx3xeNxHgIcrjU0ks13slZuirBLQ2tq6MxwO72NfZYWPuPeJv4B9iX0u2zoIcpJMhiXpfJgfdPj9/huYnIElCwkg8ymEnzd4TfrzUI2mpqYO67SbaREwl81mi/kOCKsG6zSOWdVJ0iyAZVzo7u72MWPXqb+wS07DZawa1t1upVmAIIIno9HoNsqlo7+/f83ptAoQFFPKJluURNQE/vWDoxfG5AxopUqAgtNw/ZAC+PAMs74ZFfliapsugON0hqk8mo8csaeiXQGWJmADuCVgS8B/KoDv+r8V0NfX5zduqpLId0I8WIoDl9FbjDKwXXIXjGKLA52vYpSB7ZIHaAJbHDRN28HTaZGiMvha5B55NDs7S7EEcNmcwygHKESEfyeBOOXSMDg46OKVc5uiciAVxaxxUx6gvDFAhJOn0wiBv1FVDirJxn3Ns3s35Y0Hz+wWZmOUozXHe0D8xfrJgEvwPdf23WAwmO7p6fEazW3C4fgNPVAixOZacokAAAAASUVORK5CYII=';
    const DEBUG = false;
    const LOAD_BEGIN_TIME = performance.now();
    const STATIC_ONLY_USERS = [ 'itzwolf' ];
    const URCE_API_KEY = 'AIzaSyA2xOeUfopDqhB8r8esEa2A-G0X64UMr1c';
    const URCE_SPREADSHEET_ID = '1aVKBOwjYmO88x96fIHtIQgAwMaCV_NfklvPqf0J0pzQ';

    let _selUr = {
        doubleClick: false,
        handling: false,
        newStatus: undefined,
        urId: -1,
        urOpen: false
    };
    let _settings = {};
    let _autoSwitchCountries = {};
    let _autoSwitchStates = {};
    let _commentLists = [];
    let _commentList = [];
    let _alertBoxArray = [];
    let _markerStackArray = [];
    let _defaultComments = {
        'dr': { 'commentNum':null, 'urNum':98 }, // Default reminder
        'dc': { 'commentNum':null, 'urNum':99 }, // Default closed / not identified
        'it': { 'commentNum':null, 'urNum':6 }, // Incorrect turn
        'ia': { 'commentNum':null, 'urNum':7 }, // Incorrect address
        'ir': { 'commentNum':null, 'urNum':8 }, // Incorrect route
        'mra': { 'commentNum':null, 'urNum':9 }, // Missing roundabout
        'ge': { 'commentNum':null, 'urNum':10 }, // General error
        'tna': { 'commentNum':null, 'urNum':11 }, // Turn not allowed
        'ij': { 'commentNum':null, 'urNum':12 }, // Incorrect junction
        'mbo': { 'commentNum':null, 'urNum':13 }, // Missing bridge overpass
        'wdd': { 'commentNum':null, 'urNum':14 }, // Wrong driving direction
        'me': { 'commentNum':null, 'urNum':15 }, // Missing exit
        'mr': { 'commentNum':null, 'urNum':16 }, // Missing road
        'ml': { 'commentNum':null, 'urNum':18 }, // Missing landmark
        'br': { 'commentNum':null, 'urNum':19 }, // Blocked road
        'msn': { 'commentNum':null, 'urNum':21 }, // Missing street name
        'isps': { 'commentNum':null, 'urNum':22 }, // Incorrect street prefix or suffix
        'sl': { 'commentNum':null, 'urNum':23 } // Speed Limit
    };
    let _alertBoxInUse = false;
    let _currentCommentList = null;
    let _filtersAppliedOnZoom = false;
    let _filtersApplying = false;
    let _markerCountOnInit = -1;
    let _mousedOverMarkerId = null;
    let _mouseIsDown = false;
    let _unstackedMasterId = null;
    let _restoreZoom, _$restoreTab, _restoreTabPosition, _wmeUserId, _popupTimeout, _urceTabLightboxTo, _urPanelLightboxTo, _initUrIdInUrlObserver, _initUrIdInUrlTo, _popupDelayTimout;

    function log(message) { console.log('URC-E:', message); }
    function logError(message) { console.error('URC-E:', message); }
    function logDebug(message) { if (DEBUG) console.debug('URC-E:', message); }
    function logWarning(message) { console.warn('URC-E:', message); }

    function dynamicSort(property) {
        let sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            if (sortOrder === -1)
                return b[property].localeCompare(a[property]);
            else
                return a[property].localeCompare(b[property]);
        }
    }

    function loadSettingsFromStorage() {
        logDebug('Loading settings from storage.');
        let loadedSettings = $.parseJSON(localStorage.getItem(SETTINGS_STORE_NAME));
        let defaultSettings = {
            //Comment List
            commentList: 0,
            commentListStyle: 'default',
            commentListCollapses: {},
            tagEmail: '',
            autoSwitchCommentList: false,
            // URC-E Preferences
            autoCenterOnUr: false,
            autoClickOpenSolvedNi: false,
            autoCloseUrPanel: (_settings.autoCloseCommentWindow),
            autoSaveAfterSolvedOrNiComment: false,
            autoSendReminders: false,
            autoSetNewUrComment: false,
            autoSetReminderUrComment:false,
            autoSwitchToUrCommentsTab: false,
            autoZoomInOnNewUr: false,
            autoZoomOutAfterComment: false,
            disableDoneNextButtons: false,
            replaceNextWithDoneButton: false,
            doubleClickLinkNiComments: false,
            doubleClickLinkOpenComments: false,
            doubleClickLinkSolvedComments: false,
            hideZoomOutLinks: false,
            unfollowUrAfterSend: false,
            // UR Marker Prefs
            enableUrPillCounts: false,
            disableUrMarkerPopup: false,
            urMarkerPopupDelay: 2,
            urMarkerPopupTimeout: 3,
            doNotShowTagNameOnPill: false,
            replaceTagNameWithEditorName: false,
            unstackMarkers: false,
            customMarkersRoadworks: false,
            customMarkersConstruction: false,
            customMarkersClosures: false,
            customMarkersEvents: false,
            customMarkersNotes: false,
            customMarkersWslm: false,
            customMarkersBog: false,
            customMarkersDifficult: false,
            customMarkersNativeSl: false,
            customMarkersCustom: false,
            customMarkersCustomText: '',
            // UR Filtering Prefs
            enableUrceUrFiltering: false,
            hideOutsideEditableArea: false,
            doNotFilterTaggedUrs: false,
            doNotHideSelectedUr: false,
            disableFilteringAboveZoom: false,
            disableFilteringAboveZoomLevel: 0,
            disableFilteringBelowZoom: false,
            disableFilteringBelowZoomLevel: 10,
            // -- Lifecycle
            hideWaiting: false,
            hideUrsCloseNeeded: false,
            hideUrsReminderNeeded: false,
            // -- Hide by status
            hideByStatusOpen: false,
            hideByStatusClosed: false,
            hideByStatusNotIdentified: false,
            hideByStatusSolved: false,
            // -- Hide by type
            hideByTypeBlockedRoad: false,
            hideByTypeGeneralError: false,
            hideByTypeIncorrectAddress: false,
            hideByTypeIncorrectJunction: false,
            hideByTypeIncorrectRoute: false,
            hideByTypeIncorrectStreetPrefixOrSuffix: false,
            hideByTypeIncorrectTurn: false,
            hideByTypeMissingBridgeOverpass: false,
            hideByTypeMissingExit: false,
            hideByTypeMissingLandmark: false,
            hideByTypeMissingOrInvalidSpeedLimit: false,
            hideByTypeMissingRoad: false,
            hideByTypeMissingRoundabout: false,
            hideByTypeMissingStreetName: false,
            hideByTypeTurnNotAllowed: false,
            hideByTypeUndefined: false,
            hideByTypeWazeAutomatic: false,
            hideByTypeWrongDrivingDirection: false,
            // -- Hide by tag
            hideByTaggedBog: false,
            hideByTaggedClosure: false,
            hideByTaggedConstruction: false,
            hideByTaggedDifficult: false,
            hideByTaggedEvent: false,
            hideByTaggedNote: false,
            hideByTaggedRoadworks: false,
            hideByTaggedWslm: false,
            // -- Hide by age of submission
            hideByAgeOfSubmissionLessThan: false,
            hideByAgeOfSubmissionLessThanDaysOld: '',
            hideByAgeOfSubmissionMoreThan: false,
            hideByAgeOfSubmissionMoreThanDaysOld: '',
            // -- Hide by Descriptions / Comments / Following
            hideFollowing: false,
            hideNotFollowing: false,
            hideWithDescription: false,
            hideWithoutDeescription: false,
            hideWithCommentsFromMe: false,
            hideWithoutCommentsFromMe: false,
            hideFirstCommentByMe: false,
            hideFirstCommentNotByMe: false,
            hideLastCommentByMe: false,
            hideLastCommentNotByMe: false,
            hideLastCommentByReporter: false,
            hideLastCommentNotByReporter: false,
            hideByCommentCountLessThan: false,
            hideByCommentCountLessThanNumber: '',
            hideByCommentCountMoreThan: false,
            hideByCommentCountMoreThanNumber: '',
            hideByAgeOfFirstCommentLessThan: false,
            hideByAgeOfFirstCommentLessThanDaysOld: '',
            hideByAgeOfFirstCommentMoreThan: false,
            hideByAgeOfFirstCommentMoreThanDaysOld: '',
            hideByAgeOfLastCommentLessThan: false,
            hideByAgeOfLastCommentLessThanDaysOld: '',
            hideByAgeOfLastCommentMoreThan: false,
            hideByAgeOfLastCommentMoreThanDaysOld: '',
            hideByKeywordIncluding: false,
            hideByKeywordIncludingKeyword: '',
            hideByKeywordNotIncluding: false,
            hideByKeywordNotIncludingKeyword: '',
            hideByKeywordCaseInsensitive: false,
            // Common Prefs
            reminderDays: 0,
            closeDays: 7,
            wmeUserId: undefined,
            lastVersion: undefined
        };
        _settings = loadedSettings ? loadedSettings : defaultSettings;
        for (let prop in defaultSettings) {
            if (!_settings.hasOwnProperty(prop))
                _settings[prop] = defaultSettings[prop];
        }
        if (_settings.wmeUserId !== _wmeUserId)
            _settings.wmeUserId = _wmeUserId;
        // Remove old settings
        let deleted = false;
        ['autoCloseCommentWindow', 'hideClosedUrs', 'showOthersUrsPastReminderClose', 'onlyShowMyUrs', 'hideTaggedUrs', 'hideUrsWoComments', 'hideUrsWoCommentsOrDescriptions', 'hideUrsWoCommentsWithDescriptions',
         'hideUrsWithUserReplies', 'disableAboveZoomLevel', 'hideByAgeOfLastCommentLessThanDaysAgo', 'hideByAgeOfLastCommentMoreThanDaysAgo', 'hideByAgeOfFirstCommentMoreThanDaysAgo' ].forEach((oldSetting) => {
            if (_settings.hasOwnProperty(oldSetting)) {
                delete(_settings[oldSetting]);
                deleted = true;
            }
        });
        // Fix bad settings
        let changed = false;
        ['reminderDays', 'closeDays', 'hideByAgeOfLastCommentMoreThanDaysOld', 'hideByAgeOfLastCommentLessThanDaysOld', 'hideByAgeOfFirstCommentMoreThanDaysOld', 'hideByAgeOfFirstCommentLessThanDaysOld',
         'hideByCommentCountMoreThanNumber', 'hideByCommentCountLessThanNumber', 'hideByAgeOfSubmissionMoreThanDaysOld', 'hideByAgeOfSubmissionLessThanDaysOld' ].forEach((setting) => {
            if (_settings[setting] === undefined || _settings[setting] === null || ((_settings[setting].length === 0) && (_settings[setting] !== ''))) {
                _settings[setting] = '';
                changed = true;
            }
        });
        if (deleted || changed)
            setTimeout(saveSettingsToStorage, 5000);
    }

    async function saveSettingsToStorage() {
        if (localStorage) {
            if (_settings.commentListCollapses === undefined)
                _settings.commentListCollapses = {};
            _settings.commentListCollapses[_settings.commentList] = await getCollapsedGroups();
            _settings.lastVersion = SCRIPT_VERSION;
            localStorage.setItem(SETTINGS_STORE_NAME, JSON.stringify(_settings));
            logDebug('Settings saved.');
        }
    }

    function closeAlertBox() {
        $('#urceAlertBoxHeader').empty();
        $('#urceAlertBoxContent').empty();
        $('#urceAlertTickBtnCaption').text('');
        $('#urceAlertCrossBtnCaption').text('');
        $('#urceAlertBox').css('visibility', 'hidden');
        $('#urceAlertCrossBtn').css('visibility', 'hidden');
        _alertBoxInUse = false;
        if (_alertBoxArray.length > 0)
            buildAlertBoxFromArray();
    }

    function buildAlertBoxFromArray() {
        _alertBoxInUse = true;
        let alertBoxTickAction = null;
        let alertBoxCrossAction = null;
        $('#urceAlertBoxHeader').append(
            $('<span>').append(
                $('<i>', {class:'fa ' + _alertBoxArray[0].headerIcon})
            ).append(' ' + _alertBoxArray[0].title)
        );
        $('#urceAlertBoxContent').html(_alertBoxArray[0].content);
        $('#urceAlertTickBtnCaption').text(_alertBoxArray[0].tickText);
        if (typeof _alertBoxArray[0].tickAction === 'function')
            alertBoxTickAction = _alertBoxArray[0].tickAction;
        if (_alertBoxArray[0].hasCross) {
            $('#urceAlertCrossBtnCaption').text(_alertBoxArray[0].crossText);
            $('#urceAlertCrossBtn').css('visibility', 'visible');
            if(typeof _alertBoxArray[0].crossAction === "function")
                alertBoxCrossAction = _alertBoxArray[0].crossAction;
        }
        else
            $('#urceAlertCrossBtn').css('visibility', 'hidden');
        $('#urceAlertTickBtn').off('click').on('click', () => {
            if (alertBoxTickAction !== null)
                alertBoxTickAction();
            closeAlertBox();
        });
        $('#urceAlertCrossBtn').off('click').on('click', () => {
            if (alertBoxCrossAction !== null)
                alertBoxCrossAction();
            closeAlertBox();
        });
        $('#urceAlertBox').css('visibility', 'visible');
        _alertBoxArray.shift();
    }

    function showAlertBox(headerIcon, title, content, hasCross, tickText, crossText, tickAction, crossAction) {
        _alertBoxArray.push( { headerIcon: headerIcon, title: title, content: content, hasCross: hasCross, tickText: tickText, crossText: crossText, tickAction: tickAction, crossAction: crossAction });
        if (!_alertBoxInUse)
            buildAlertBoxFromArray();
    }

    function showScriptInfoAlert() {
        if (ALERT_UPDATE && SCRIPT_VERSION !== _settings.lastVersion) {
            let releaseNotes = '';
            releaseNotes += '<p>What\'s New:</p>';
            if (SCRIPT_VERSION_CHANGES.length > 0) {
                releaseNotes += '<ul>';
                for (let idx=0; idx < SCRIPT_VERSION_CHANGES.length; idx++) {
                    releaseNotes += '<li>' + SCRIPT_VERSION_CHANGES[idx];
                }
                releaseNotes += '</ul>';
            }
            else
                releaseNotes += '<ul><li>Nothing major.</ul>';
            WazeWrap.Interface.ShowScriptUpdate(SCRIPT_NAME, SCRIPT_VERSION, releaseNotes, SCRIPT_GF_URL, SCRIPT_FORUM_URL);
        }
    }

    function isChecked(obj) {
        return $(obj).is(':checked');
    }

    function getCollapsedGroups() {
        return new Promise((resolve) => {
            let $getDivs = $('div[id$="_body"]');
            let rObj = {};
            for (let idx = 0; idx < $getDivs.length; idx++) {
                if ($getDivs[idx].id.indexOf('urceComments-for-') > -1)
                    rObj[$getDivs[idx].id] = $($getDivs[idx]).hasClass('collapse');
            }
            resolve(rObj);
        });
    }

    function getUrSessionsAsync(urIds) {
        return new Promise((resolve, reject) => {
            (async function retry(urIds, tries) {
                let urSessionsObj;
                try {
                    urSessionsObj = await W.model.updateRequestSessions.getAsync(urIds);
                    urSessionsObj.sort((a, b) => { return a.id - b.id; });
                }
                catch(error) {
                    let debugMsg = 'Error retreiving urSessions async for urIds: ' + urIds.join(', ') + ' on try ' + tries + '.'
                    if (tries < 50)
                        debugMsg += ' Retrying.';
                    logDebug(debugMsg);
                }
                if (tries > 49 && !urSessionsObj)
                    reject('50 tries at getting urSessions async have elapsed. Stopping loop.');
                else if (!urSessionsObj)
                    setTimeout(retry, 100, urIds, ++tries);
                else
                    resolve(urSessionsObj);
            })(urIds, 1);
        });
    }

    function getMapUrsAsync(urIds) {
        return new Promise((resolve, reject) => {
            (async function retry(urIds, tries) {
                let mapUrsObj;
                try {
                    mapUrsObj = await W.model.mapUpdateRequests.getByIds(urIds);
                    mapUrsObj.sort((a, b) => { return a.id - b.id; });
                }
                catch(error) {
                    let debugMsg = 'Error retrieving mapUpdateRequests async for urIds: ' + urIds.join(', ') + ' on try ' + tries + '.';
                    if (tries < 50)
                        debugMsg += ' Retrying.';
                    logDebug(debugMsg);
                }
                if (tries > 49 && !mapUrsObj)
                    reject('50 tries at getting mapUpdateRequests async have elapsed. Stopping loop.');
                else if (!mapUrsObj)
                    setTimeout(retry, 100, urIds, ++tries);
                else
                    resolve(mapUrsObj);
            })(urIds, 1);
        });
    }

    async function handleAfterCommentMutation(urId) {
        logDebug('Handling new comment mutation for urId: ' + urId);
        if (_settings.unfollowUrAfterSend)
            unfollowUrAfterSend(urId);
        if ((_settings.autoCloseUrPanel && !_selUr.newStatus) || _selUr.doubleClick)
            autoCloseUrPanel();
        else {
            await updateUrceData([urId]);
            if ($($('#panel-container .mapUpdateRequest .top-section .body .conversation .comment .comment-title').last()).has('#urceDaysAgo').length === 0) {
                $($('#panel-container .mapUpdateRequest .top-section .body .conversation .comment .comment-title').last()).children().filter('span.date').css('float', 'right');
                $($('#panel-container .mapUpdateRequest .top-section .body .conversation .comment .comment-title').last()).append(
                    $('<div>', {class:"date", style:"display:flex; justify-content:flex-end;"}).append(
                        $('<div>').text('(' + parseDaysAgo(uroDateToDays(W.model.updateRequestSessions.objects[urId].comments[(W.model.mapUpdateRequests.objects[urId].attributes.urceData.commentCount-1)].createdOn)) + ')')
                    )
                );
            }
            if (_settings.autoSaveAfterSolvedOrNiComment && (_selUr.newStatus === 'solved' || _selUr.newStatus === 'notidentified'))
                clickSaveButton();
            else
                await handleUrLayer('sendComment', null, [urId]);
        }
    }

    async function handleAfterCloseUpdateContainer() {
        if (parseInt($('.update-requests .selected').data('id')) > 0)
            return;
        if (_settings.autoSaveAfterSolvedOrNiComment && ((_selUr.newStatus === 'solved') || (_selUr.newStatus === 'notidentified')))
            clickSaveButton();
        else {
            if (_settings.autoZoomOutAfterComment)
                autoZoomOut();
            if (_settings.autoSwitchToUrCommentsTab)
                autoSwitchToPrevTab();
            await handleUrLayer('close', null, [_selUr.urId]);
        }
        _selUr = {
            doubleClick: false,
            handling: false,
            newStatus: undefined,
            urId: -1,
            urOpen: false
        };
    }

    async function handleAfterSave() {
        if (_settings.autoZoomOutAfterComment)
            autoZoomOut();
        if (_settings.autoSwitchToUrCommentsTab)
            autoSwitchToPrevTab();
        await handleUrLayer('save', null, null);
    }

    async function handleUpdateRequestContainer(urId, caller) {
        if (_settings.replaceNextWithDoneButton && ($('#panel-container .mapUpdateRequest.panel .section .content .navigation .done').length === 0))
            return W.reqres.request('problems:browse', _.extend({showNext: false, nextButtonString: I18n.t('problems.panel.done')}, {problem: W.model.mapUpdateRequests.objects[urId]}));
        _selUr.handling = true;
        if (_popupTimeout !== undefined)
            hidePopup();
        logDebug('Handling update request container after ' + caller + ' for urId: ' + urId);
        await updateUrceData([urId]);
        if ($('#panel-container .top-section .header .main-title').html().indexOf(urId) === -1)
            $('#panel-container .top-section .header .main-title').append(' (' + urId + ') ');
        if ($('#panel-container .top-section .header .reported').length === 1)
            $('#panel-container .top-section .header').append(
                $('<div>', {class:'reported'}).text(I18n.t('mte.edit.submitted') + ' ' + parseDaysAgo(W.model.mapUpdateRequests.objects[urId].attributes.urceData.driveDaysOld))
            );
        if (W.model.mapUpdateRequests.objects[urId].attributes.urceData.commentCount > 0) {
            for (let idx = 0; idx < W.model.mapUpdateRequests.objects[urId].attributes.urceData.commentCount; idx++) {
                if ($($('#panel-container .mapUpdateRequest .top-section .body .conversation .comment .comment-title')[idx]).has('#urceDaysAgo').length === 0) {
                    $($('#panel-container .mapUpdateRequest .top-section .body .conversation .comment .comment-title')[idx]).children().filter('span.date').css('float', 'right');
                    $($('#panel-container .mapUpdateRequest .top-section .body .conversation .comment .comment-title')[idx]).append(
                        $('<div>', {class:"date", style:"display:flex; justify-content:flex-end;"}).append(
                            $('<div>').text('(' + parseDaysAgo(uroDateToDays(W.model.updateRequestSessions.objects[urId].comments[idx].createdOn)) + ')')
                        )
                    );
                }
            }
        }
        if (_settings.autoSwitchCommentList) {
            if ((_autoSwitchCountries[W.model.countries.top.abbr] > -1) &&
                (!_autoSwitchStates[W.model.countries.top.abbr] || !_autoSwitchStates[W.model.countries.top.abbr][W.model.states.top.name]) &&
                (_autoSwitchCountries[W.model.countries.top.abbr] !== _settings.commentList))
                await changeCommentList(_autoSwitchCountries[W.model.countries.top.abbr], true, false);
            else if (_autoSwitchStates[W.model.countries.top.abbr] &&
                     (_autoSwitchStates[W.model.countries.top.abbr][W.model.states.top.name] > -1) &&
                     (_autoSwitchStates[W.model.countries.top.abbr][W.model.states.top.name] !== _settings.commentList))
                await changeCommentList(_autoSwitchStates[W.model.countries.top.abbr][W.model.states.top.name], true, false);
            else if (_currentCommentList !== _settings.commentList)
                await changeCommentList(_settings.commentList, true, false);
        }
        _selUr.urOpen = W.model.mapUpdateRequests.objects[urId].attributes.open;
        if (_settings.autoSwitchToUrCommentsTab)
            autoSwitchToUrceTab();
        if ($('#panel-container .mapUpdateRequest .top-section .body .conversation').hasClass('collapsed')) {
            logDebug('Expanding conversation list.');
            $('#panel-container .mapUpdateRequest .top-section .body .conversation').removeClass('collapsed');
        }
        if (_settings.disableDoneNextButtons) {
            logDebug('Removing the done / next buttons.');
            $('#panel-container .mapUpdateRequest .actions .content .navigation').css({'display':'none'});
        }
        logDebug('Setting event hook for center on UR crosshairs in UR panel title bar.');
        $('#panel-container .mapUpdateRequest .top-section .header .title .focus').off('click', handleUrPanelCrosshairsClick).on('click', {mUrObj:W.model.mapUpdateRequests.objects[urId]}, handleUrPanelCrosshairsClick);
        $('#panel-container .mapUpdateRequest .top-section').scrollTop($('#panel-container .mapUpdateRequest .top-section')[0].scrollHeight);
        if (W.model.mapUpdateRequests.objects[urId].attributes.urceData.commentCount === 0) {
            if (_settings.autoZoomInOnNewUr)
                autoZoomIn(urId);
            let commentNum = Object.values(_defaultComments).find((defaultComment) => { return defaultComment.urNum === W.model.mapUpdateRequests.objects[urId].attributes.type }).commentNum;
            if (_selUr.urOpen && _settings.autoSetNewUrComment && commentNum) {
                if (_settings.autoClickOpenSolvedNi)
                    autoClickOpenSolvedNi(commentNum);
                try {
                    await postUrComment(_commentList[commentNum].comment);
                }
                catch(error) {
                    logError(error);
                    showAlertBox('fa-exclamation-circle', I18n.t('urce.common.ErrorHeader'), I18n.t('urce.prompts.CommentInsertTimedOut'), false, 'OK', '', null, null);
                }
            }
        }
        else if (W.model.mapUpdateRequests.objects[urId].attributes.urceData.commentCount === 1) {
            if (_settings.autoCenterOnUr) autoCenterOnUr(urId);
            if (_selUr.urOpen && _settings.autoSetReminderUrComment && _defaultComments.dr.commentNum &&
                (W.model.mapUpdateRequests.objects[urId].attributes.urceData.commentCount > 0) && (_settings.reminderDays !== 0) &&
                (W.model.mapUpdateRequests.objects[urId].attributes.urceData.lastCommentDaysOld > (_settings.reminderDays - 1)) &&
                (W.model.mapUpdateRequests.objects[urId].attributes.urceData.lastCommentBy > 0)) {
                if (_settings.autoZoomInOnNewUr)
                    autoZoomIn(urId);
                if (_settings.autoClickOpenSolvedNi)
                    autoClickOpenSolvedNi(_defaultComments.dr.commentNum);
                try {
                    await postUrComment(_commentList[_defaultComments.dr.commentNum].comment);
                }
                catch(error) {
                    logError(error);
                    showAlertBox('fa-exclamation-circle', I18n.t('urce.common.ErrorHeader'), I18n.t('urce.prompts.CommentInsertTimedOut'), false, 'OK', '', null, null);
                }
            }
        }
        else {
            if (_settings.autoCenterOnUr)
                autoCenterOnUr(urId);
        }
    }

    async function handleClickedComment(commentNum, doubleClick) {
        logDebug('Handling clicked comment. commentNum: ' + commentNum + ' | doubleClick: ' + doubleClick);
        _selUr.doubleClick = doubleClick;
        if ($('#panel-container .mapUpdateRequest .top-section .body .conversation .new-comment-text').length === 0) {
            logWarning('No comment box found after clicking a comment from the list.');
            showAlertBanner(I18n.t('urce.prompts.NoCommentBox'), 5000);
            return;
        }
        if (doubleClick) {
            $('#panel-container .mapUpdateRequest .top-section .body .conversation .new-comment-text').off('blur', autoClickSendButton).on('blur', autoClickSendButton);
        }
        if (_settings.autoClickOpenSolvedNi && _selUr.urOpen)
            autoClickOpenSolvedNi(commentNum);
        try {
            await postUrComment(_commentList[commentNum].comment);
        }
        catch(error) {
            logError(error);
            showAlertBox('fa-exclamation-circle', I18n.t('urce.common.ErrorHeader'), I18n.t('urce.prompts.CommentInsertTimedOut'), false, 'OK', '', null, null);
        }
    }

    function autoSwitchToUrceTab() {
        logDebug('Switching to URC-E > Comments tab.');
        _$restoreTab = _$restoreTab || $('#user-tabs .nav .active > a');
        _restoreTabPosition = _restoreTabPosition || $($('#user-info .tab-content')[0]).scrollTop();
        $('a[href="#sidepanel-urc-e"]').trigger('click');
        $('a[href="#panel-urce-comments"]').trigger('click');
        $($('#user-info .tab-content')[0]).scrollTop(0);
    }

    function autoSwitchToPrevTab() {
        if ($(_$restoreTab) && !$(W.map.div).hasClass('problem-selected')) {
            logDebug('Switching to previous tab.');
            $(_$restoreTab).click();
            $($('#user-info .tab-content')[0]).scrollTop(_restoreTabPosition);
            _$restoreTab = null;
            _restoreTabPosition = null;
        }
    }

    function handleUrPanelCrosshairsClick(event) {
        logDebug('Handling UR Panel crosshairs click event.');
        W.map.setCenter([getXY(null, event.data.mUrObj).x, getXY(null, event.data.mUrObj).y], 5);
    }

    function unfollowUrAfterSend(urId) {
        logDebug('Unfollowing UR: ' + urId);
        W.model.updateRequestSessions.objects[urId].setFollowing('false');
    }

    function autoCloseUrPanel() {
        logDebug('Clicking close on UR panel.');
        $('#panel-container .mapUpdateRequest .top-section .close-panel').trigger('click');
    }

    function clickSaveButton() {
        logDebug('Clicking the save button.');
        $('.toolbar-button.waze-icon-save').trigger('click');
    }

    function autoClickSendButton() {
        logDebug('doubleClick is true. Clicking send.');
        $('.new-comment-form .send-button').trigger('click');
        $('.new-comment-text').off('blur', autoClickSendButton);
    }

    function autoClickOpenSolvedNi(commentNum) {
        logDebug('Running auto click open, solved or not identified routine.');
        logDebug('Masking confirm function.');
        let confirmHold = window.confirm;
        window.confirm = function() {
            // Dummy confirm to prevent WME from being able to send confirmations during auto clicking
            return true;
        }
        $('#panel-container .mapUpdateRequest .top-section .body').scrollTop($('#panel-container .mapUpdateRequest .top-section .body')[0].scrollHeight);
        if (_commentList[commentNum].urstatus === 'notidentified' && _selUr.newStatus !== 'notidentified') {
            logDebug('Clicking Not Identified');
            $('input[value="not-identified"]').trigger('click');
        }
        else if (_commentList[commentNum].urstatus === 'solved' && _selUr.newStatus !== 'solved') {
            logDebug('Clicking Solved.');
            $('input[value="solved"]').trigger('click');
        }
        else if (_commentList[commentNum].urstatus === 'open' && (_selUr.newStatus === 'solved' || _selUr.newStatus === 'notidentified')) {
            logDebug('Clicking Open.');
            $('input[value="open"]').trigger('click');
        }
        logDebug('Unmasking confirm function.');
        window.confirm = confirmHold;
    }

    function autoZoomIn(urId) {
        logDebug('Checking zoom level and zooming in on UR if zoom level is less than 4.');
        let zoom = 4;
        _restoreZoom = _restoreZoom || getZoomLevel();
        if (_restoreZoom < zoom) {
            logDebug('Zooming to 4 from ' + _restoreZoom + '.');
            W.map.setCenter([getXY(urId, null).x, getXY(urId, null).y], 5);
        }
    }

    function autoCenterOnUr(urId) {
        logDebug('Checking zoom level and centering on UR if zoom level is less than 4.');
        _restoreZoom = _restoreZoom || getZoomLevel();
        if (_restoreZoom < 4) {
            logDebug('Centering on UR because zoom level is ' + _restoreZoom + '.');
            W.map.setCenter([getXY(urId, null).x, getXY(urId, null).y], _restoreZoom);
        }
    }

    function autoZoomOut() {
        if (_restoreZoom && !$(W.map.div).hasClass('problem-selected')) {
            if (_restoreZoom !== getZoomLevel()) {
                logDebug('Zooming to ' + _restoreZoom + '.');
                W.map.setCenter(W.map.getCenter(), _restoreZoom);
            }
            _restoreZoom = null;
        }
    }

    function getZoomLevel() {
        logDebug('Getting zoom level: ' + W.map.mapState.mapLocation.zoom);
        return W.map.mapState.mapLocation.zoom;
    }

    function formatText(text) {
        if (text.indexOf('$CLOSED_NOR_EMAIL_TAG$') > 0) {
            if ((_settings.tagEmail.length > 0) && (W.model.loginManager.user.userName.length > 0))
                text = text.replace('$CLOSED_NOR_EMAIL_TAG$', 'Since this report is closed, please send further correspondence to ' + _settings.tagEmail + ' and include ' + W.model.loginManager.user.userName + ' in the subject line.');
            else
                text = text.replace('$CLOSED_NOR_EMAIL_TAG$', '');
        }
        if (text.indexOf('$URD$') > 0) {
            if ($('#update-request-panel .solution p').length > 0)
                text = text.replace('$URD$', $('#update-request.panel .solution p').text()).replace(/\n+/gmi, '');
            else if ($('.description .content').length > 0)
                text = text.replace('$URD$', $('.description .content').text()).replace(/\n+/gmi, '').replace('$USERNAME$', W.model.loginManager.user.userName);
            else
                text = text.replace(' "$URD$"', '');
        }
        if (text.indexOf('$URD') > 0) {
            if ($('#update-request-panel .solution p').length > 0)
                text = text.replace('$URD', $('#update-request.panel .solution p').text()).replace(/\n+/gmi, '');
            else if ($('.description .content').length > 0)
                text = text.replace('$URD', $('.description .content').text()).replace(/\n+/gmi, '').replace('$USERNAME', W.model.loginManager.user.userName);
            else
                text = text.replace(' "$URD"', '');
        }
        if (text.indexOf('$SELSEGS$') > 0) {
            let selFeatures = W.selectionManager.getSelectedFeatures();
            let streetName;
            if (selFeatures.length > 0 && selFeatures.length < 3) {
                for (let idx = 0; idx < selFeatures.length; idx++) {
                    if (selFeatures[idx].model.type === 'segment') {
                        if (selFeatures.length === 1)
                            streetName = W.model.streets.objects[selFeatures[idx].model.attributes.primaryStreetID].name;
                        else {
                            if (idx === 0)
                                streetName = 'the intersection of ' + W.model.streets.objects[selFeatures[idx].model.attributes.primaryStreetID].name + ' and ';
                            else
                                streetName += W.model.streets.objects[selFeatures[idx].model.attributes.primaryStreetID].name;
                        }
                    }
                }
                if (streetName && streetName.length > 0)
                    text = text.replace('$SELSEGS$', streetName);
                else
                    text = text.replace('$SELSEGS$', '');
            }
            else
                text = text.replace('$SELSEGS$', '');
        }
        if (text.indexOf('$SELSEGS') > 0) {
            let selFeatures = W.selectionManager.getSelectedFeatures();
            let streetName;
            if (selFeatures.length > 0 && selFeatures.length < 3) {
                for (let idx = 0; idx < selFeatures.length; idx++) {
                    if (selFeatures[idx].model.type === 'segment') {
                        if (selFeatures.length === 1)
                            streetName = W.model.streets.objects[selFeatures[idx].model.attributes.primaryStreetID].name;
                        else {
                            if (idx === 0)
                                streetName = 'the intersection of ' + W.model.streets.objects[selFeatures[idx].model.attributes.primaryStreetID].name + ' and ';
                            else
                                streetName += W.model.streets.objects[selFeatures[idx].model.attributes.primaryStreetID].name;
                        }
                    }
                }
                if (streetName && streetName.length > 0)
                    text = text.replace('$SELSEGS', streetName);
                else
                    text = text.replace('$SELSEGS', '');
            }
            else
                text = text.replace('$SELSEGS', '');
        }
        return text.replace(/\\[r|n]+/gmi, '\n');
    }

    function autoPostReminderComment(urId, comment) {
        return new Promise((resolve, reject) => {
            try {
                logDebug('Automatically sending reminder comment to urId: ' + urId);
                showAlertBanner(I18n.t('urce.prompts.ReminderMessageAuto') + ' ' + urId, 3000);
                W.model.updateRequestSessions.objects[urId].addComment(comment);
                W.model.mapUpdateRequests.objects[urId].attributes.reminderSent = 'true';
            }
            catch(error) {
                delete(W.model.mapUpdateRequests.objects[urId].attributes.reminderSent);
                return reject(error);
            }
            resolve();
        });
    }

    function postUrComment(comment) {
        return new Promise((resolve, reject) => {
            (function retry(comment, tries) {
                logDebug('Attemping to insert comment into comment box. Tries: ' + tries);
                if (tries > 100)
                    reject('Timed out waiting for the comment text box to become available.');
                else if (!$('.new-comment-text')[0])
                    setTimeout(retry, 100, comment, ++tries);
                else {
                    $('.new-comment-text').val(formatText(comment)).change().keyup();
                    $('.new-comment-text').blur();
                    resolve();
                }
            })(comment, 1);
        });
    }

    function showAlertBanner(message, delay) {
        let dateNow = new Date().getTime();
        $('#map').append('<div id="urceMessage" style="width:100%; font-size:15px; font-weight:bold; margin-left:auto; position:absolute; top:0px; left:10px; z-index:1000;"></div>');
        $('#urceMessage').append(`<div id="urceMapNote${dateNow}" style="width:${(message.length * 10)}px; font-size: 15px; font-weight:bold; margin-left:auto; margin-right:auto; background-color:orange;"><center><b>${message}</b></center></div>`);
        $('#urceMapNote' + dateNow).show().delay(delay).queue(function() {
            $('#urceMessage').remove();
            $(this).remove();
        });
    }

    function getXY(urId, mUrObj) {
        let x, y;
        if (!urId && mUrObj) {
            x = (mUrObj.attributes.geometry.urceRealX !== undefined) ?
                mUrObj.attributes.geometry.urceRealX :
                (mUrObj.attributes.geometry.realX !== undefined) ?
                    mUrObj.attributes.geometry.realX :
                    mUrObj.attributes.geometry.x;
            y = (mUrObj.attributes.geometry.urceRealY !== undefined) ?
                mUrObj.attributes.geometry.urceRealY :
                (mUrObj.attributes.geometry.realY !== undefined) ?
                    mUrObj.attributes.geometry.realY :
                    mUrObj.attributes.geometry.y;
        } else {
            x = (W.model.mapUpdateRequests.objects[urId].attributes.geometry.urceRealX !== undefined) ?
                W.model.mapUpdateRequests.objects[urId].attributes.geometry.urceRealX :
                (W.model.mapUpdateRequests.objects[urId].attributes.geometry.realX !== undefined) ?
                    W.model.mapUpdateRequests.objects[urId].attributes.geometry.realX :
                    W.model.mapUpdateRequests.objects[urId].attributes.geometry.x;
            y = (W.model.mapUpdateRequests.objects[urId].attributes.geometry.urceRealY !== undefined) ?
                W.model.mapUpdateRequests.objects[urId].attributes.geometry.urceRealY :
                (W.model.mapUpdateRequests.objects[urId].attributes.geometry.realY !== undefined) ?
                    W.model.mapUpdateRequests.objects[urId].attributes.geometry.realY :
                    W.model.mapUpdateRequests.objects[urId].attributes.geometry.y;
        }
        return {x:x, y:y};
    }

    function getUsernameAndRank(userId) {
        let username, rank;
        if (W.model.users.objects[userId] !== null &&  W.model.users.objects[userId] !== undefined) {
            username = (W.model.users.objects[userId].userName === undefined) ? userId :  W.model.users.objects[userId].userName;
            rank = W.model.users.objects[userId].rank + 1;
        }
        else {
            username = userId;
            rank = '?';
        }
        return {username:username, rank:rank};
    }

    function parsePxString(pxString) {
        return parseInt(pxString.split('px')[0]);
    }

    function parseDaysAgo(days) {
        if (days === 0)
            return I18n.t('date.today');
        if (days === 1)
            return I18n.t('date.yesterday');
        return I18n.t('common.time.ago', {time:I18n.t('common.time.days', {days:days})});
    }

    function isIdAlreadyUnstacked(urId) {
        if (_markerStackArray.length === 0)
            return false;
        for (let idx = 0; idx < _markerStackArray.length; idx++) {
            if (_markerStackArray[idx].urId === urId)
                return true;
        }
        return false;
    }

    function stackListObj(urId, x, y) {
        this.urId = urId;
        this.x = parseInt(x);
        this.y = parseInt(y);
    }

    function restackMarkers() {
        if (_markerStackArray.length === 0)
            return;
        let markerCollection = W.map.updateRequestLayer.markers;
        if (markerCollection !== null) {
            logDebug('Restacking markers.');
            for (let marker in markerCollection) {
                if (markerCollection.hasOwnProperty(marker)) {
                    let testMarkerObj = markerCollection[marker];
                    if (testMarkerObj.model.attributes.geometry.urceRealX !== undefined) {
                        testMarkerObj.model.attributes.geometry.x = testMarkerObj.model.attributes.geometry.urceRealX;
                        testMarkerObj.model.attributes.geometry.y = testMarkerObj.model.attributes.geometry.urceRealY;
                        delete(testMarkerObj.model.attributes.geometry.urceRealX);
                        delete(testMarkerObj.model.attributes.geometry.urceRealY);
                    }
                }
            }
            for (let idx=0; idx < _markerStackArray.length; idx++) {
                if (markerCollection[_markerStackArray[idx].urId] !== undefined) {
                    markerCollection[_markerStackArray[idx].urId].icon.imageDiv.style.left = _markerStackArray[idx].x + 'px';
                    markerCollection[_markerStackArray[idx].urId].icon.imageDiv.style.top = _markerStackArray[idx].y + 'px';
                }
            }
            _markerStackArray = [];
            _unstackedMasterId = null;
        }
    }

    function checkMarkerStacking(urId, unstackedX, unstackedY) {
        urId = parseInt(urId);
        if (!_settings.unstackMarkers || (isIdAlreadyUnstacked(urId) === true))
            return;
        logDebug('Checking for marker stack, urId: ' + urId);
        let stackList = [];
        let markerCollection = W.map.updateRequestLayer.markers;
        let offset = 1000000000;
        stackList.push(urId);
        if (markerCollection !== null) {
            for (let marker in markerCollection) {
                if (markerCollection.hasOwnProperty(marker)) {
                    if (markerCollection[marker].model.attributes.geometry.urceRealX === undefined) {
                        markerCollection[marker].model.attributes.geometry.urceRealX = (markerCollection[marker].model.attributes.geometry.realX) ?
                            markerCollection[marker].model.attributes.geometry.realX :
                            markerCollection[marker].model.attributes.geometry.x;
                        markerCollection[marker].model.attributes.geometry.x = (markerCollection[marker].model.attributes.geometry.realX) ?
                            (markerCollection[marker].model.attributes.geometry.realX + offset) :
                            (markerCollection[marker].model.attributes.geometry.x + offset);
                        markerCollection[marker].model.attributes.geometry.urceRealY = (markerCollection[marker].model.attributes.geometry.realY) ?
                            markerCollection[marker].model.attributes.geometry.realY :
                            markerCollection[marker].model.attributes.geometry.y;
                        markerCollection[marker].model.attributes.geometry.y = (markerCollection[marker].model.attributes.geometry.realY) ?
                            (markerCollection[marker].model.attributes.geometry.realY + offset) :
                            (markerCollection[marker].model.attributes.geometry.y + offset);
                        offset += 1000;
                    }
                    if (!(markerCollection[marker].icon.imageDiv.classList.contains('recently-closed') && (W.map.updateRequestLayer.showHidden === false)) && (markerCollection[marker].icon.imageDiv.style.visibility !== 'hidden')) {
                        if (parseInt(markerCollection[marker].id) !== urId) {
                            let xDiff = unstackedX - parsePxString(markerCollection[markerCollection[marker].id].icon.imageDiv.style.left);
                            let yDiff = unstackedY - parsePxString(markerCollection[markerCollection[marker].id].icon.imageDiv.style.top);
                            let distSquared = ((xDiff * xDiff) + (yDiff * yDiff));
                            if (distSquared < (15 * 15)) // unstackSensitivity * unstackSensitivity
                                stackList.push(parseInt(markerCollection[marker].id));
                        }
                    }
                }
            }
        }
        if (stackList.length > 0) {
            if ((W.map.mapState.mapLocation.zoom < 3) || (stackList.length === 1))
                logDebug('Single marker highlighted. Adjusting geometry properties to prevent recentering.');
            else
                logDebug('Markers are stacked!');
            if (_unstackedMasterId !== urId) {
                logDebug('Unstacked ID mismatch, relocating markers.');
                restackMarkers();
                _unstackedMasterId = urId;
                _markerStackArray = [];
                _markerStackArray.push(new stackListObj(urId, unstackedX, unstackedY));
                for (let idx = 0; idx < stackList.length; idx++) {
                    let thisUrId = stackList[idx];
                    let x = parsePxString(markerCollection[thisUrId].icon.imageDiv.style.left);
                    let y = parsePxString(markerCollection[thisUrId].icon.imageDiv.style.top);
                    _markerStackArray.push(new stackListObj(thisUrId, x, y));
                    if (!((W.map.mapState.mapLocation.zoom < 3) || (stackList.length === 1))) {
                        markerCollection[thisUrId].icon.imageDiv.style.left = unstackedX + 'px';
                        markerCollection[thisUrId].icon.imageDiv.style.top = unstackedY + 'px';
                        unstackedX += 10;
                        unstackedY -= 30;
                    }
                }
            }
        }
        else
            restackMarkers();
    }

    async function markerMouseOver(event) {
        if (_mouseIsDown) return;
        let popupX, popupY;
        let markerType = getMarkerType(this);
        let popupDelayTime = (Date.now() + (_settings.urMarkerPopupDelay * 100));
        if (markerType === 'ur') {
            let markerId = parseInt(this.attributes['data-id'].value);
            if ((markerId > 0) && ((_mousedOverMarkerId !== markerId) || ($('#urceDiv').css('visibility') === 'hidden'))) {
                _mousedOverMarkerId = markerId;
                let targetTab = '_urceTab_' + Math.round(Math.random() * 1000000);
                let mouseX = event.pageX - $('#map')[0].getBoundingClientRect().left;
                let mouseY = event.pageY - $('#map')[0].getBoundingClientRect().top;
                let popupXOffset = parsePxString($('#sidebar').css('width'));
                let unstackedX = parsePxString(W.map.updateRequestLayer.markers[_mousedOverMarkerId].icon.imageDiv.style.left);
                let unstackedY = parsePxString(W.map.updateRequestLayer.markers[_mousedOverMarkerId].icon.imageDiv.style.top);
                logDebug('Hover over ' + markerType + ' ID ' + markerId);
                checkMarkerStacking(_mousedOverMarkerId, unstackedX, unstackedY);
                if (!_settings.disableUrMarkerPopup) {
                    if (W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.urceData === undefined)
                        await updateUrceData([_mousedOverMarkerId]);
                    logDebug('Building popup for UR ' + _mousedOverMarkerId);
                    popupX = unstackedX - parsePxString(W.map.segmentLayer.div.style.left) + popupXOffset + 6;
                    popupY = unstackedY - parsePxString(W.map.segmentLayer.div.style.top) + 6;
                    let popupContent = '<b>' + I18n.t('problems.panel.titles.map_update_request') + ' (' + _mousedOverMarkerId + '): ' +
                        I18n.t('update_requests.types.' + W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.type) + '</b><br>';
                    if (!W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.description)
                        popupContent += '<i>' + I18n.t('urce.mouseOver.NoDescription') + '</i>';
                    else
                        popupContent += clickify(W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.description, '');
                    if (W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.urceData.driveDaysOld > -1) {
                        popupContent += '<br><i>' + I18n.t('mte.edit.submitted') + ' ' + parseDaysAgo(W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.urceData.driveDaysOld) + ' ';
                        if (W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.driveDate > -1)
                            popupContent += '(' + new Date(W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.driveDate).toLocaleDateString('en-us') +
                                ' ' + new Date(W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.driveDate).toLocaleTimeString('en-us') + ') ';
                        if (W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.guestUserName && (W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.guestUserName !== null)) {
                            popupContent += I18n.t('urce.mouseOver.ViaLivemap');
                            if (W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.guestUserName !== '')
                                popupContent += ' by '+ W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.guestUserName.replace(/<\/?[^>]+(>|$)/g, "");
                        }
                        popupContent += '</i>';
                    }
                    if ((W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.resolvedOn !== null) && (W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.urceData.resolveDaysAgo > -1)) {
                        popupContent += '<br><i>' + I18n.t('urce.urStatus.Closed') + ' ' + parseDaysAgo(W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.urceData.resolveDaysAgo) + ' ';
                        popupContent += '(' + new Date(W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.resolvedOn).toLocaleDateString('en-us') +
                            ' ' + new Date(W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.resolvedOn).toLocaleTimeString('en-us') + ')</i>';
                        popupContent += '<br><i>' + I18n.t('urce.mouseOver.MarkedAs') + ' ';
                        if (W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.resolution === 0)
                            popupContent += I18n.t('venues.update_requests.panel.solved');
                        else if (W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.resolution === 1)
                            popupContent += I18n.t('urce.urStatus.NotIdentified');
                        else
                            popupContent += I18n.t('segment.direction.0');
                        if (W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.resolvedBy !== null) {
                            popupContent += ' ' + I18n.t('element_history.changed_by') + ' ';
                            popupContent += '<a href="' + W.Config.user_profile.url + getUsernameAndRank(W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.resolvedBy).username + '">';
                            popupContent += getUsernameAndRank(W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.resolvedBy).username + '</a>';
                            popupContent += ' (' + getUsernameAndRank(W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.resolvedBy).rank + ')';
                        }
                        popupContent += '</i>';
                    }
                    popupContent += '<br><br>' + W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.urceData.commentCount + ' ' + I18n.t('urce.tabs.Comments');
                    if (!W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.urceData.commentsByMe && (W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.urceData.commentCount > 0))
                        popupContent += ' (' + I18n.t('urce.mouseOver.NoneByMe') + ')';
                    if ((W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.urceData.commentCount > 0) && (W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.urceData.lastCommentDaysOld > -1))
                        popupContent += ', ' + I18n.t('element_history.actions.default.UPDATE') + ' ' + parseDaysAgo(W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.urceData.lastCommentDaysOld);
                    if (W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.urceData.commentCount > 0) {
                        popupContent += '<br>' + I18n.t('urce.mouseOver.FirstComment') + ': ' + parseDaysAgo(W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.urceData.firstCommentDaysOld) +
                            ' '+ I18n.t('element_history.changed_by') + ' ';
                        if (W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.urceData.firstCommentBy === -1)
                            popupContent += I18n.t('conversation.reporter');
                        else {
                            popupContent += '<a href="' + W.Config.user_profile.url + getUsernameAndRank(W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.urceData.firstCommentBy).username + '">';
                            popupContent += getUsernameAndRank(W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.urceData.firstCommentBy).username + '</a>';
                            popupContent += ' (' + getUsernameAndRank(W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.urceData.firstCommentBy).rank + ')';
                        }
                        if (W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.urceData.commentCount > 1) {
                            popupContent += '<br>' + I18n.t('urce.mouseOver.LastComment') + ': ' + parseDaysAgo(W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.urceData.lastCommentDaysOld) +
                                ' ' + I18n.t('element_history.changed_by') + ' ';
                            if (W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.urceData.lastCommentBy === -1)
                                popupContent += I18n.t('conversation.reporter');
                            else {
                                popupContent += '<a href="' + W.Config.user_profile.url + getUsernameAndRank(W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.urceData.lastCommentBy).username + '">';
                                popupContent += getUsernameAndRank(W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.urceData.lastCommentBy).username + '</a>';
                                popupContent += ' (' + getUsernameAndRank(W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.urceData.lastCommentBy).rank + ')';
                            }
                        }
                        popupContent += '<br>' + I18n.t('urce.mouseOver.ReporterHasCommented') + ': <i>';
                        popupContent += (W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.urceData.reporterHasCommented) ? I18n.t('urce.common.Yes') : I18n.t('urce.common.No');
                        popupContent += '</i>';
                    }
                    let urPos = new OL.LonLat();
                    urPos.lon = (W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.geometry.urceRealX !== undefined) ?
                        W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.geometry.urceRealX :
                        (W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.geometry.realX !== undefined) ?
                            W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.geometry.realX :
                            W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.geometry.x;
                    urPos.lat = (W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.geometry.urceRealY !== undefined) ?
                        W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.geometry.urceRealY :
                        (W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.geometry.realY !== undefined) ?
                            W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.geometry.realY :
                            W.model.mapUpdateRequests.objects[_mousedOverMarkerId].attributes.geometry.y;
                    urPos.transform(new OL.Projection("EPSG:900913"), new OL.Projection("EPSG:4326"));
                    let urLink = $(document)[0].location.href;
                    let urLayers = '';
                    urLink = urLink.substr(0, urLink.indexOf('?zoom'));
                    urLink += '?zoom=5&lat=' + urPos.lat + '&lon=' + urPos.lon + urLayers + '&mapUpdateRequest=' + _mousedOverMarkerId;
                    popupContent +='<hr><ul><li><a href="' + urLink + '" id="_urceOpenInNewTab" target="' + targetTab + '">' + I18n.t('urce.mouseOver.OpenInNewTab') + '</a> - ';
                    popupContent += '<a href="#" id="_urceRecenterSession" data-id="' + _mousedOverMarkerId + '">' + I18n.t('urce.mouseOver.CenterInCurrentTab') + '</a>';
                    let lmLink = ($('#livemap-link').length > 0) ? lmLink = $('#livemap-link')[0].href : ($('.livemap-link').length > 0) ? $('.livemap-link')[0].href : null;
                    if (lmLink !== null) {
                        lmLink = (lmLink.indexOf('?') > -1) ? lmLink.substr(0, lmLink.indexOf('?')) : lmLink;
                        lmLink += '?zoom=17&lat=' + urPos.lat + '&lon=' + urPos.lon + '&layers=BTTTT';
                        popupContent += '<li><a href="' + lmLink + '" target="' + targetTab + '_lmTab">' + I18n.t('urce.mouseOver.OpenInNewLivemapTab') + '</a>';
                    }
                    let popupDelay = (Date.now() > popupDelayTime) ? -1 : (popupDelayTime - Date.now());
                    if (popupDelay < 0)
                        handlePopup({popupContent:popupContent, popupX:popupX, popupY:popupY, urId:_mousedOverMarkerId});
                    else {
                        if (_popupDelayTimout !== undefined)
                            window.clearTimeout(_popupDelayTimout);
                        _popupDelayTimout = window.setTimeout(handlePopup, popupDelay, {popupContent:popupContent, popupX:popupX, popupY:popupY, urId:_mousedOverMarkerId});
                    }
                }
            }
        }
    }

    function markerMouseOut(event) {
        let newUrId = ((event.toElement) && (parseInt($(event.toElement).attr('data-id')) > -1)) ? parseInt($(event.toElement).attr('data-id')) : null;
        if (!newUrId)
            _mousedOverMarkerId = null;
        if ((newUrId > 0 && isIdAlreadyUnstacked(newUrId)) || (event.toElement && ((event.toElement.id === 'urceDiv') || (event.toElement.id.indexOf('urceCounts') > -1) || (event.toElement.parentNode.id.indexOf('urce') > -1))))
            return;
        hidePopup();
        restackMarkers();
    }

    function handlePopup(popupObj) {
        if (_mousedOverMarkerId !== popupObj.urId)
            return;
        logDebug('Displaying popup at: ' + popupObj.popupX + ',' + popupObj.popupY);
        $('#urceDiv').css({'height':'auto', 'width':'auto'}).html(popupObj.popupContent).on('mouseleave', hidePopup).on('mouseenter', () => {
            if (_popupTimeout !== undefined)
                window.clearTimeout(_popupTimeout);
            if (_popupDelayTimout !== undefined)
                window.clearTimeout(_popupDelayTimout);
        }).on('dblclick', {doubleClick:true}, hidePopup);
        $('#_urceOpenInNewTab').on('mouseup', saveSettingsToStorage);
        $('#_urceRecenterSession').on('click', recenterSessionOnUr);
        let rw = parseInt($('#urceDiv')[0].clientWidth);
        if (rw > ($(window)[0].innerWidth * 0.45)) {
            rw = ($(window)[0].innerWidth * 0.45);
            $('#urceDiv').css({'width':`${rw}px`});
        }
        let rh = parseInt($('#urceDiv')[0].clientHeight);
        if ((popupObj.popupX + rw) > $(window)[0].innerWidth)
            popupObj.popupX -= (rw + 20);
        if ((popupObj.popupY + rh) > $(window)[0].innerHeight)
            popupObj.popupY -= (((popupObj.popupY + rh) - $(window)[0].innerHeight) + 30);
        popupObj.popupX = (popupObj.popupX < 0) ? 0 : popupObj.popupX;
        popupObj.popupY = (popupObj.popupY < 0) ? 0 : popupObj.popupY;
        $('#urceDiv').css({'top':`${popupObj.popupY}px`, 'left':`${popupObj.popupX}px`, 'visibility':'visible'});
        if (_popupDelayTimout !== undefined)
            window.clearTimeout(_popupDelayTimout);
        if (_popupTimeout !== undefined)
            window.clearTimeout(_popupTimeout);
        if (_settings.urMarkerPopupTimeout > 0)
            _popupTimeout = window.setTimeout(hidePopup, (_settings.urMarkerPopupTimeout * 1000));
    }

    function hidePopup(event) {
        let newUrId = (event && event.toElement && (parseInt($(event.toElement).attr('data-id')) > -1)) ? parseInt($(event.toElement).attr('data-id')) : null;
        if (_popupTimeout !== undefined)
            window.clearTimeout(_popupTimeout);
        if ($('#urceDiv').css('visibility') !== 'hidden')
            $('#urceDiv').css({'visibility':'hidden'});
        $('#urceDiv').off('mouseenter').off('mouseleave').off('dblclick');
        if ((newUrId > 0 && isIdAlreadyUnstacked(newUrId)) || (event && event.toElement && ((event.toElement.id === 'urceDiv') || (event.toElement.id.indexOf('urceCounts') > -1) || (event.toElement.parentNode.id.indexOf('urce') > -1))))
            if (event.data && !event.data.doubleClick)
                return;
        if (_mousedOverMarkerId === null)
            restackMarkers();
    }

    function openUrPanel(urId) {
        let t = {showNext: false, nextButtonString: I18n.t('problems.panel.done')};
        if (urId !== _selUr.urId) {
            _selUr = {
                doubleClick: false,
                handling: false,
                newStatus: undefined,
                urId: urId,
                urOpen: false
            };
        }
        W.reqres.request('problems:browse', _.extend(t, {problem: W.model.mapUpdateRequests.objects[urId]}));
    }

    function recenterSessionOnUr(event) {
        openUrPanel(parseInt($(event.target).attr('data-id')));
        W.map.moveTo(W.map.updateRequestLayer.markers[parseInt($(event.target).attr('data-id'))].lonlat, 5);
        hidePopup();
        return false;
    }

    function getMarkerType(marker) {
        if (marker.className.indexOf('user-generated') > -1)
            return 'ur';
        else
            return null;
    }

    function addCustomMarker(urId, urOpen, customType, $node) {
        let useCustomMarker = false;
        if (customType === 0)
            useCustomMarker = _settings.customMarkersRoadworks;
        else if (customType === 1)
            useCustomMarker = _settings.customMarkersConstruction;
        else if (customType === 2)
            useCustomMarker = _settings.customMarkersClosures;
        else if (customType === 3)
            useCustomMarker = _settings.customMarkersEvents;
        else if (customType === 4)
            useCustomMarker = _settings.customMarkersNotes;
        else if (customType === 5)
            useCustomMarker = _settings.customMarkersWslm;
        else if (customType === 6)
            useCustomMarker = _settings.customMarkersBog;
        else if (customType === 7)
            useCustomMarker = _settings.customMarkersDifficult;
        else if (customType === 98)
            useCustomMarker = _settings.customMarkersNativeSl;
        else if (customType === 99)
            useCustomMarker = _settings.customMarkersCustom;
        if (useCustomMarker)
            renderCustomMarker(urId, urOpen, customType, $node);
        else
            removeCustomMarker(urId);
    }

    function removeCustomMarker(urId) {
        if ($(`#urceCustomMarker_${urId}`).length > 0) {
            logDebug('Removing custom marker for UR: ' + urId);
            $(`#urceCustomMarker_${urId}`).remove();
        }
    }

    function customMarkersEnabledCheck() {
        if (_settings.customMarkersRoadworks || _settings.customMarkersConstruction || _settings.customMarkersClosures || _settings.customMarkersEvents || _settings.customMarkersNotes ||
            _settings.customMarkersWslm || _settings.customMarkersBog || _settings.customMarkersDifficult || _settings.customMarkersNativeSl || _settings.customMarkersCustom)
            return true;
        else
            return false;
    }

    function renderCustomMarker(urId, urOpen, customType, $node) {
        if ($(`#urceCustomMarker_${urId}`).length === 0) {
            logDebug('Adding custom marker for UR: ' + urId);
            $($node).append(
                $('<span>', {id:`urceCustomMarker_${urId}`, style:'position:absolute;pointer-events:none;top:-3px;left:-2px;'})
            );
        }
        else
            logDebug('Updating custom marker for UR: ' + urId);
        let variant = (!urOpen) ? 2 : 0;
        $(`#urceCustomMarker_${urId}`).empty().append(
            $('<img>', {src:uroAltMarkers[getCustomMarkerIdx(customType)][variant]})
        );
    }

    function getCustomMarkerIdx(customType) {
        if (customType === 0)      // ROADWORKS
            return 1;
        if (customType === 1)      // CONSTRUCTION
            return 1;
        if (customType === 2)      // CLOSURE
            return 0;
        if (customType === 3)      // EVENT
            return 4;
        if (customType === 4)      // NOTE
            return 3;
        if (customType === 5)      // WSLM
            return 5;
        if (customType === 6)      // BOG
            return 11;
        if (customType === 7)      // DIFFICULT
            return 12;
        if (customType === 98)     // Native speed limit URs
            return 5;
        if (customType === 99)     // custom text
            return 2;
        return -1;
    }

    function convertTagToCustomType(tag) {
        if (tag === 'ROADWORKS')
            return 0;
        if (tag === 'CONSTRUCTION')
            return 1;
        if (tag === 'CLOSURE')
            return 2;
        if (tag === 'EVENT')
            return 3;
        if (tag === 'NOTE')
            return 4;
        if (tag === 'WSLM')
            return 5;
        if (tag === 'BOG' || tag === 'BOTG')
            return 6;
        if (tag === 'DIFFICULT')
            return 7;
        return -1;
    }

    function updateUrMapMarkers(urIds, filter) {
        for (let idx = 0; idx < urIds.length; idx++) {
            if (filter && _settings.enableUrceUrFiltering && W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.hideUr &&
                (!((_selUr.urId === urIds[idx]) && _settings.doNotHideSelectedUr)) &&
                (!((W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.tagType !== -1) && _settings.doNotFilterTaggedUrs))
               ) {
                logDebug('Hiding UR marker for UR: ' + urIds[idx]);
                $(`.map-problem.user-generated[data-id="${urIds[idx]}"]`).css('visibility', 'hidden');
            }
            else {
                if ($(`.map-problem.user-generated[data-id="${urIds[idx]}"]`).css('visibility') === 'hidden') {
                    logDebug('Unhiding UR marker for UR: ' + urIds[idx]);
                    $(`.map-problem.user-generated[data-id="${urIds[idx]}"]`).css('visibility', 'visible');
                }
                if (_settings.enableUrPillCounts || customMarkersEnabledCheck()) {
                    if (_settings.enableUrPillCounts) {
                        let tagContent = '';
                        let tagOffset;
                        let urCountBackground = '#FFFF99';
                        if (_wmeUserId === W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.lastCommentBy)
                            urCountBackground = '#FFFFFF';
                        if ((W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.commentUserIds.indexOf(_wmeUserId) > -1) &&
                            (W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.lastCommentBy === -1))
                            urCountBackground = '#79B5C7';
                        if ((_wmeUserId !== W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.lastCommentBy) &&
                            (W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.commentCount > 0) &&
                            (W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.lastCommentBy === -1) &&
                            (W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.lastCommentDaysOld < _settings.closeDays))
                            urCountBackground = '#FFCC99';
                        if ((_wmeUserId !== W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.lastCommentBy) &&
                            (W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.commentCount > 0) &&
                            (W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.lastCommentBy > 0) &&
                            (W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.lastCommentDaysOld > (_settings.closeDays - 1)))
                            urCountBackground = '#FF8B8B';
                        if (W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.tagType !== -1)
                            urCountBackground = '#CCCCCC';
                        if ((W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.tagType !== -1) && _settings.doNotShowTagNameOnPill) {
                            if (W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.commentCount > 0)
                                tagContent += W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.commentCount + 'c ';
                            tagContent += (W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.lastCommentDaysOld !== -1) ?
                                W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.lastCommentDaysOld :
                                W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.driveDaysOld;
                            tagContent += 'd';
                            tagOffset = (tagContent.length < 3) ? 0 : Math.round(tagContent.length * 2.28);
                        }
                        else if (W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.tagType !== -1) {
                            tagContent += W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.tagType;
                            if (W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.commentCount > 0)
                                tagContent += ' ' + W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.commentCount + 'c';
                            tagOffset = (tagContent.length < 10) ? Math.round(tagContent.length * 2.86) : Math.round(tagContent.length * 3.33);
                        }
                        else {
                            if (W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.commentCount > 0)
                                tagContent += W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.commentCount + 'c ';
                            tagContent += (W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.lastCommentDaysOld !== -1) ?
                                W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.lastCommentDaysOld :
                                W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.driveDaysOld;
                            tagContent += 'd';
                            tagOffset = (tagContent.length < 3) ? 0 : Math.round(tagContent.length * 2.28);
                        }
                        tagOffset = '-' + tagOffset + 'px';
                        if ($(`#urceCounters-${urIds[idx]}`).length > 0) {
                            logDebug('Updating marker counters on UR marker for UR: ' + urIds[idx]);
                            $(`#urceCounters-${urIds[idx]}`).remove();
                        }
                        else
                            logDebug('Adding marker counters on UR marker for UR: ' + urIds[idx]);
                        $(`.map-problem.user-generated[data-id="${urIds[idx]}"]`).append(
                            $('<div>', {id:`urceCounters-${urIds[idx]}`, 'data-id':`${urIds[idx]}`}).css('clear', 'both').css('margin-bottom', '10px').append(
                                $('<div>', {id:`urceCounters-${urIds[idx]}-text`, 'data-id':`${urIds[idx]}`}).html(tagContent).css(
                                    {'color':'black', 'background-color':urCountBackground, 'position':'absolute', 'top':'30px', 'right':tagOffset, 'display':'block', 'width':'auto', 'white-space':'nowrap', 'padding-left':'5px', 'padding-right':'5px', 'border':'1px solid', 'border-radius':'25px'}
                                ).addClass('urceCounts')
                            )
                        );
                    }
                    else {
                        if ($(`#urceCounters-${urIds[idx]}`).length > 0) {
                            logDebug('Removing marker counters on UR marker for UR: ' + urIds[idx]);
                            $(`#urceCounters-${urIds[idx]}`).remove();
                        }
                    }
                    if (customMarkersEnabledCheck()) {
                        if (W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.customType > -1)
                            addCustomMarker(urIds[idx], W.model.mapUpdateRequests.objects[urIds[idx]].attributes.open, W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData.customType, $(`.map-problem.user-generated[data-id="${urIds[idx]}"]`));
                        else
                            removeCustomMarker(urIds[idx]);
                    }
                    else
                        removeCustomMarker(urIds[idx]);
                }
                else {
                    if ($(`#urceCounters-${urIds[idx]}`).length > 0) {
                        logDebug('Removing marker counters on UR marker for UR: ' + urIds[idx]);
                        $(`#urceCounters-${urIds[idx]}`).remove();
                    }
                    removeCustomMarker(urIds[idx]);
                }
            }
        }
    }

    function updateUrceData(urIds) {
        return new Promise(async (resolve) => {
            logDebug('Updating urceData for urIds: ' + urIds.join(', '));
            let urSessionsObj, mapUrsObj;
            let urceData = {};
            let tagRegex = /^.*?\[(ROADWORKS|CONSTRUCTION|CLOSURE|EVENT|NOTE|WSLM|BOG|BOTG|DIFFICULT)\].*$/gim;
            let tagUsernameRegex = new RegExp(' ' + W.model.loginManager.user.userName + ' ', 'gi');
            let includingKeyword = (_settings.hideByKeywordIncludingKeyword.length > 0) ? ' ' + _settings.hideByKeywordIncludingKeyword.trim().replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + ' ' : null;
            let keywordIncludingRegex = (_settings.hideByKeywordIncludingKeyword.length > 0) ? (_settings.hideByKeywordCaseInsensitive) ? new RegExp(includingKeyword, 'gim') : new RegExp(includingKeyword, 'gm') : null;
            let notIncludingKeyword = (_settings.hideByKeywordNotIncludingKeyword.length > 0) ? ' ' + _settings.hideByKeywordNotIncludingKeyword.trim().replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + ' ' : null;
            let keywordNotIncludingRegex = (_settings.hideByKeywordNotIncludingKeyword.length > 0) ? (_settings.hideByKeywordCaseInsensitive) ? new RegExp(notIncludingKeyword, 'gim') : new RegExp(notIncludingKeyword, 'gm') : null;
            try {
                urSessionsObj = await getUrSessionsAsync(urIds);
            }
            catch(error) {
                return logError(error);
            }
            try {
                mapUrsObj = await getMapUrsAsync(urIds);
            }
            catch(error) {
                return logDebug(error);
            }

            for (let idx = 0; idx < urIds.length; idx++) {
                urceData = {
                    commentCount: urSessionsObj[idx].comments.length,
                    commentsByMe: false,
                    commentUserIds: [],
                    customType: -1,
                    driveDaysOld: (mapUrsObj[idx].attributes.driveDate) ? uroDateToDays(mapUrsObj[idx].attributes.driveDate) : -1,
                    firstCommentBy: -2,
                    firstCommentDaysOld: -1,
                    fullText: '',
                    hideUr: false,
                    keywordIncluding: false,
                    keywordNotIncluding: false,
                    lastCommentBy: -2,
                    lastCommentDaysOld: -1,
                    needsClosed: false,
                    needsReminder: false,
                    reporterHasCommented: false,
                    resolveDaysAgo: (mapUrsObj[idx].attributes.resolvedOn !== null) ? uroDateToDays(mapUrsObj[idx].attributes.resolvedOn) : undefined,
                    tagType: -1,
                    waiting: false
                };
                if (urceData.commentCount > 0) {
                    urceData.firstCommentDaysOld = uroDateToDays(urSessionsObj[idx].comments[0].createdOn);
                    urceData.firstCommentBy = parseInt(urSessionsObj[idx].comments[0].userID);
                    urceData.lastCommentDaysOld = uroDateToDays(urSessionsObj[idx].comments[(urceData.commentCount - 1)].createdOn)
                    urceData.lastCommentBy = parseInt(urSessionsObj[idx].comments[(urceData.commentCount - 1)].userID);
                    urceData.fullText += (mapUrsObj[idx].attributes.description) ? mapUrsObj[idx].attributes.description + ' ' : '';
                    for (let commentIdx = 0; commentIdx < urceData.commentCount; commentIdx++) {
                        urceData.fullText += urSessionsObj[idx].comments[commentIdx].text + ' ';
                        urceData.commentUserIds.push(urSessionsObj[idx].comments[commentIdx].userID);
                    }
                    if (urceData.commentUserIds.indexOf(_wmeUserId) > -1)
                        urceData.commentsByMe = true;
                    if (urceData.commentUserIds.indexOf(-1) > -1)
                        urceData.reporterHasCommented = true;
                    if (mapUrsObj[idx].attributes.open && urceData.commentCount === 1) {
                        if ((_settings.reminderDays !== 0) && (urceData.lastCommentDaysOld > (_settings.reminderDays - 1))) {
                            if ((urceData.lastCommentBy > 1) && (_wmeUserId === urceData.lastCommentBy) && !mapUrsObj[idx].attributes.reminderSent && _settings.autoSendReminders) {
                                try {
                                    await autoPostReminderComment(urIds[idx], formatText(_commentList[_defaultComments.dr.commentNum].comment));
                                    if (_settings.unfollowAfterSend)
                                        unfollowUrAfterSend(urIds[idx]);
                                    urceData.waiting = true;
                                } catch(error) {
                                    urceData.needsReminder = true;
                                    logWarning(error); // Don't return here as we should go ahead and process the urceData.
                                }
                            } else
                                urceData.needsReminder = true;
                        }
                        else if (((_settings.reminderDays === 0) || (_settings.reminderDays === '')) && (urceData.lastCommentDaysOld > (_settings.closeDays - 1)))
                            urceData.needsClosed = true;
                        else
                            urceData.waiting = true;
                    }
                    if (mapUrsObj[idx].attributes.open && urceData.commentCount > 1) {
                        if (urceData.lastCommentBy > 1) {
                            if ((_settings.closeDays > 0) && (urceData.lastCommentDaysOld > (_settings.closeDays - 1))) {
                                if (_wmeUserId === urceData.lastCommentBy)
                                    urceData.needsClosed = true;
                                else if (urceData.lastCommentDaysOld < (_settings.reminderDays + _settings.closeDays))
                                    urceData.waiting = true;
                                else if (urceData.lastCommentDaysOld > (_settings.reminderDays + _settings.closeDays - 1))
                                    urceData.needsClosed = true;
                            }
                            else
                                urceData.waiting = true;
                        }
                    }
                } else
                    urceData.fullText += (mapUrsObj[idx].attributes.description) ? mapUrsObj[idx].attributes.description : '';
                urceData.fullText = urceData.fullText.replace(/[\r\n\x0B\x0C\u0085\u2028\u2029]+/g, ' ');
                urceData.tagType = (urceData.fullText.search(tagRegex) > -1) ? urceData.fullText.replace(tagRegex, '$1') : -1;
                if (urceData.tagType !== -1)
                    urceData.customType = convertTagToCustomType(urceData.tagType);
                else if (mapUrsObj[idx].attributes.type === 23)
                    urceData.customType = 98;
                else
                    urceData.customType = -1;
                if ((keywordIncludingRegex !== null) && (urceData.fullText.search(keywordIncludingRegex) > -1))
                    urceData.keywordIncluding = true;
                if ((keywordNotIncludingRegex !== null) && (urceData.fullText.search(keywordNotIncludingRegex) === -1))
                    urceData.keywordNotIncluding = true;
                if ((urceData.tagType === -1) && (mapUrsObj[idx].attributes.type === 23))
                    urceData.customType = 98;
                else if (urceData.tagType === -1)
                    urceData.customType = -1;
                if ((urceData.tagType === -1) || _settings.replaceTagNameWithEditorName)
                    urceData.tagType = urceData.fullText.search(tagUsernameRegex) > -1 ? W.model.loginManager.user.userName : (urceData.tagType) ? urceData.tagType : -1;
                if ((_settings.hideOutsideEditableArea && !mapUrsObj[idx].canEdit()) ||
                    (_settings.hideWaiting && urceData.waiting) ||
                    (_settings.needsClosed && urceData.needsClosed) ||
                    (_settings.hideUrsReminderNeeded && urceData.needsReminder) ||
                    (_settings.hideByStatusOpen && mapUrsObj[idx].attributes.open) ||
                    (_settings.hideByStatusClosed && !mapUrsObj[idx].attributes.open) ||
                    (_settings.hideByStatusNotIdentified && (mapUrsObj[idx].attributes.resolution === 1)) ||
                    (_settings.hideByStatusSolved && (mapUrsObj[idx].attributes.resolution === 0)) ||
                    // Types
                    (_settings.hideByTypeBlockedRoad && (mapUrsObj[idx].attributes.type === 19)) ||
                    (_settings.hideByTypeGeneralError && (mapUrsObj[idx].attributes.type === 10)) ||
                    (_settings.hideByTypeIncorrectAddress && (mapUrsObj[idx].attributes.type === 7)) ||
                    (_settings.hideByTypeIncorrectJunction && (mapUrsObj[idx].attributes.type === 12)) ||
                    (_settings.hideByTypeIncorrectRoute && (mapUrsObj[idx].attributes.type === 8)) ||
                    (_settings.hideByTypeIncorrectStreetPrefixOrSuffix && (mapUrsObj[idx].attributes.type === 22)) ||
                    (_settings.hideByTypeIncorrectTurn && (mapUrsObj[idx].attributes.type === 6)) ||
                    (_settings.hideByTypeMissingBridgeOverpass && (mapUrsObj[idx].attributes.type === 13)) ||
                    (_settings.hideByTypeMissingExit && (mapUrsObj[idx].attributes.type === 15)) ||
                    (_settings.hideByTypeMissingLandmark && (mapUrsObj[idx].attributes.type === 18)) ||
                    (_settings.hideByTypeMissingOrInvalidSpeedLimit && (mapUrsObj[idx].attributes.type === 23)) ||
                    (_settings.hideByTypeMissingRoad && (mapUrsObj[idx].attributes.type === 16)) ||
                    (_settings.hideByTypeMissingRoundabout && (mapUrsObj[idx].attributes.type === 9)) ||
                    (_settings.hideByTypeMissingStreetName && (mapUrsObj[idx].attributes.type === 21)) ||
                    (_settings.hideByTypeTurnNotAllowed && (mapUrsObj[idx].attributes.type === 11)) ||
                    (_settings.hideByTypeUndefined && (!mapUrsObj[idx].attributes.type || (mapUrsObj[idx].attributes.type > 23) || (mapUrsObj[idx].attributes.type < 6) || (mapUrsObj[idx].attributes.type === 17) || (mapUrsObj[idx].attributes.type === 20))) ||
                    (_settings.hideByTypeWazeAutomatic && mapUrsObj[idx].attributes.description.indexOf('Waze Automatic:') > -1) ||
                    (_settings.hideByTypeWrongDrivingDirection && (mapUrsObj[idx].attributes.type === 14)) ||
                    //Tags
                    (_settings.hideByTaggedBog && (urceData.customType === 6)) ||
                    (_settings.hideByTaggedClosure && (urceData.customType === 2)) ||
                    (_settings.hideByTaggedConstruction && (urceData.customType === 1)) ||
                    (_settings.hideByTaggedDifficult && (urceData.customType === 7)) ||
                    (_settings.hideByTaggedEvent && (urceData.customType === 3)) ||
                    (_settings.hideByTaggedNote && (urceData.customType === 4)) ||
                    (_settings.hideByTaggedRoadworks && (urceData.customType === 0)) ||
                    (_settings.hideByTaggedWslm && (urceData.customType === 5)) ||
                    // Age of submission
                    (_settings.hideByAgeOfSubmissionLessThan && (urceData.driveDaysOld < _settings.hideByAgeOfSubmissionLessThanDaysOld)) ||
                    (_settings.hideByAgeOfSubmissionMoreThan && (urceData.driveDaysOld > _settings.hideByAgeOfSubmissionMoreThanDaysOld)) ||
                    // Following, description, comments
                    (_settings.hideFollowing && urSessionsObj[idx].isFollowing) ||
                    (_settings.hideNotFollowing && !urSessionsObj[idx].isFollowing) ||
                    (_settings.hideDescription && mapUrsObj[idx].attributes.description && (mapUrsObj[idx].attributes.description.length > 0) && (mapUrsObj[idx].attributes.description !== '')) ||
                    (_settings.hideWithoutDescription && (!mapUrsObj[idx].attributes.description || (mapUrsObj[idx].attributes.description.length === 0) || (mapUrsObj[idx].attributes.description === ''))) ||
                    (_settings.hideWithCommentsFromMe && (urceData.commentsByMe)) ||
                    (_settings.hideWithoutCommentsFromMe && (!urceData.commentsByMe)) ||
                    (_settings.hideLastCommentByMe && (urceData.lastCommentBy === _wmeUserId)) ||
                    (_settings.hideLastCommentNotByMe && (urceData.lastCommentBy !== _wmeUserId)) ||
                    (_settings.hideLastCommentByReporter && (urceData.lastCommentBy === -1)) ||
                    (_settings.hideLastCommentNotByReporter && (urceData.lastCommentBy > 0)) ||
                    (_settings.hideByCommentCountLessThan && (urceData.commentCount < _settings.hideByCommentCountLessThanNumber)) ||
                    (_settings.hideByCommentCountMoreThan && (urceData.commentCount > _settings.hideByCommentCountMoreThanNumber)) ||
                    (_settings.hideByAgeOfFirstCommentLessThan && (urceData.commentCount > 0) && (urceData.firstCommentDaysOld < _settings.hideByAgeOfFirstCommentLessThanDaysOld)) ||
                    (_settings.hideByAgeOfFirstCommentMoreThan && (urceData.commentCount > 0) && (urceData.firstCommentDaysOld > _settings.hideByAgeOfFirstCommentMoreThanDaysOld)) ||
                    (_settings.hideByAgeOfLastCommentLessThan && (urceData.commentCount > 0) && (urceData.lastCommentDaysOld < _settings.hideByAgeOfLastCommentLessThanDaysOld)) ||
                    (_settings.hideByAgeOfLastCommentMoreThan && (urceData.commentCount > 0) && (urceData.lastcommentDaysOld > _settings.hideByAgeOfLastCommentMoreThanDaysOld)) ||
                    (_settings.hideByKeywordIncluding && urceData.keywordIncluding) ||
                    (_settings.hideByKeywordNotIncluding && urceData.keywordNotIncluding)
                   ) urceData.hideUr = true;
                W.model.mapUpdateRequests.objects[urIds[idx]].attributes.urceData = urceData;
            }
            resolve();
        });
    }

    async function handleUrMapMarkers(urIds, filter) {
        urIds = urIds.sort();
        await updateUrceData(urIds);
        updateUrMapMarkers(urIds, filter);
    }

    function handleUrLayer(phase, filter, urMapMarkerIds) {
        return new Promise(async (resolve) => {
            if (!_filtersApplying) {
                _filtersApplying = true;
                let zoomLevel = getZoomLevel();
                if (filter === undefined || filter === null)
                    filter = true;
                    if ((_settings.disableFilteringAboveZoom && (zoomLevel < _settings.disableFilteringAboveZoomLevel)) ||
                        (_settings.disableFilteringBelowZoom && (zoomLevel > _settings.disableFilteringBelowZoomLevel)))
                        filter = false;
                if (phase === 'init')
                    logDebug('Checking for UR markers already present before URC-E completed initialization.');
                if (phase === 'init_end')
                    logDebug('Updating UR markers that appeared after initialization completed.');
                if (phase === 'save')
                    logDebug('Updating UR markers after save.');
                if (phase === 'close')
                    logDebug('Updating UR markers after closing UR panel.');
                if (phase === 'settingsToggle')
                    logDebug('Updating UR markers after a setting toggle.');
                if (phase === 'sendComment')
                    logDebug('Updating UR markers after sending a comment.');
                if (phase === 'zoomMove')
                    logDebug('Updating UR markers after zooming or moving.');
                if (!urMapMarkerIds) {
                    urMapMarkerIds = [];
                    W.model.mapUpdateRequests.getObjectArray().forEach((urObj) => {
                        if (urMapMarkerIds.indexOf(urObj.attributes.id) === -1)
                            urMapMarkerIds.push(urObj.attributes.id);
                    });
                }
                if (urMapMarkerIds.length > 0) {
                    try {
                        if (phase === 'init')
                            _markerCountOnInit = urMapMarkerIds.length;
                        await handleUrMapMarkers(urMapMarkerIds, filter);
                        _filtersApplying = false;
                        _filtersAppliedOnZoom = filter;
                    }
                    catch(error) {
                        _filtersApplying = false;
                        _filtersAppliedOnZoom = filter;
                        return resolve(logWarning(error));
                    }
                }
            }
            resolve();
        });
    }

    function mouseDown() {
        _mouseIsDown = true;
    }

    function mouseUp() {
        _mouseIsDown = false;
    }

    async function invokeZoomMoveEnd() {
        logDebug('Invoking function on zoomEnd or moveEnd event.');
        let zoomLevel = getZoomLevel();
        let filter = null;
        if (_settings.disableFilteringAboveZoom || _settings.disableFilteringBelowZoom) {
            if (!_filtersAppliedOnZoom && _settings.disableFilteringAboveZoom && (zoomLevel > _settings.disableFilteringAboveZoomLevel))
                filter = true;
            if (!_filtersAppliedOnZoom && _settings.disableFilteringBelowZoom && (zoomLevel < _settings.disableFilteringBelowZoomLevel))
                filter = true;
            if (_filtersAppliedOnZoom && _settings.disableFilteringAboveZoom && (zoomLevel < _settings.disableFilteringAboveZoomLevel))
                filter = false;
            if (_filtersAppliedOnZoom && _settings.disableFilteringBelowZoom && (zoomLevel > _settings.disableFilteringBelowZoomLevel))
                filter = false;
        }
        if (filter !== null)
            await handleUrLayer('zoomMove', filter, null);
    }

    function handleUrMarkerClick() {
        if ($(this).hasClass('user-generated') || $(this).hasClass('has-comments')) {
            if (!(_selUr.urId > 0) || (_selUr.urId !== parseInt($(this).attr('data-id')))) {
                _selUr = {
                    doubleClick: false,
                    handling: false,
                    newStatus: undefined,
                    urId: parseInt($(this).attr('data-id')),
                    urOpen: false
                };
                logDebug('Clicked UR: ' + _selUr.urId);
            }
        }
    }

    function getUrId() {
        return new Promise((resolve) => {
            let newUrId = parseInt($('.update-requests .selected').data('id'));
            if (newUrId && newUrId !== undefined && newUrId !== null && newUrId > 0)
                resolve(parseInt($('.update-requests .selected').data('id')));
            resolve(undefined);
        });
    }

    function maskBoxes(message, unmask, phase, maskUrPanel) {
        let zIndex = (phase === 'init') ? 19999 : 10000;
        if (_urPanelLightboxTo !== undefined)
            window.clearTimeout(_urPanelLightboxTo);
        if (_urceTabLightboxTo !== undefined)
            window.clearTimeout(_urPanelLightboxTo);
        if (unmask) {
            $(`#urceTabLightbox-${phase}`).remove();
            $(`#urPanelLightbox-${phase}`).remove();
        }
        else if (!unmask) {
            if ($(`#urceTabLightbox-${phase}`).length === 0) {
                $('#sidepanel-urc-e').css('position', 'relative');
                let sidepanelHeight = $('aside#sidebar').height();
                let $urceTabDisabled = $('<div>', {id:`urceTabLightbox-${phase}`, style:`position:relative; top:0; left:0; width:100%; height:${sidepanelHeight}px; background:rgba(0,0,0,.75); color:white; z-index:${zIndex};`});
                $urceTabDisabled.html('<div style="text-align:center; padding-top:200px; width:100%; font-weight:800;">' + message + '</div>');
                (function retry(tries) {
                    let $urceSidePanel = $('#sidepanel-urc-e');
                    if ((tries > 99) && ($urceSidePanel.length === 0))
                        return logError('Timed out trying to add mask to URCE side panel.');
                    else if ($urceSidePanel.length === 0)
                        window.setTimeout(retry, 100, ++tries);
                    else
                        $urceSidePanel.prepend($urceTabDisabled);
                })(1);
            }
            if (maskUrPanel && ($(`#urPanelLightbox-${phase}`).length === 0)) {
                $($('#panel-container .mapUpdateRequest.panel.show').children()[0]).css('position', 'relative');
                let $urPanelDisabled = $('<div>', {id:`urPanelLightbox-${phase}`, style:`position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,.75); color:white; z-index:${zIndex};`});
                $urPanelDisabled.html('<div style="text-align:center; padding-top:200px; width:100%; font-weight:800;">' + message + '</div>');
                (function retry(tries) {
                    let $urPanel = $('#panel-container .mapUpdateRequest.panel.show');
                    if ((tries > 99) && ($urPanel.length === 0))
                        return logError('Timed out trying to add mask to UR panel.');
                    else if ($urPanel.length === 0)
                        window.setTimeout(retry, 100, ++tries);
                    else
                        $($urPanel.children()[0]).prepend($urPanelDisabled);
                })(1);
            }
        }
    }

    function changeCommentListStyle(settingVal) {
        if (_settings.commentListStyle !== settingVal) {
            if (settingVal === 'default') {
                $('fieldset[id^="urceComments-for-"], legend[id^="urceComments-for-"], div[id^="urceComments-for-"]').removeClass('urStyle');
                $('fieldset[id^="urce-prefs-fieldset"], legend[id^="urce-prefs-legend"]').removeClass('urStyle');
            }
            else if (settingVal === 'urStyle') {
                $('fieldset[id^="urceComments-for-"], legend[id^="urceComments-for-"], div[id^="urceComments-for-"]').addClass('urStyle');
                $('fieldset[id^="urce-prefs-fieldset"], legend[id^="urce-prefs-legend"]').addClass('urStyle');
            }
            _settings.commentListStyle = settingVal;
        }
        saveSettingsToStorage();
    }

    async function changeCommentList(commentListIdx, autoSwitch, refresh) {
        refresh = (refresh === true);
        commentListIdx = (isNaN(commentListIdx)) ? _settings.commentList : commentListIdx;
        if (refresh || (!autoSwitch && ((commentListIdx !== _settings.commentList) || (commentListIdx !== _currentCommentList))) || (autoSwitch && (commentListIdx !== _currentCommentList))) {
            let debugMsg = (autoSwitch) ? 'Automatically switching comment lists' : (refresh) ? 'Refreshing comment list' : 'Switching comment lists';
            if (_currentCommentList !== null)
                debugMsg += ' from ' + getCommentListInfo(_currentCommentList).name;
            logDebug(debugMsg + ' to ' + getCommentListInfo(commentListIdx).name + '.');
            if (!autoSwitch && !refresh)
                _settings.commentList = commentListIdx;
            let buildCommentListResult = await buildCommentList(commentListIdx, 'changeList');
            if (buildCommentListResult.error)
                handleError(buildCommentListResult.error, (getCommentListInfo(commentListIdx).type === 'static'), 'changeList', (_selUr.urId > 0));
            if (!autoSwitch && !refresh)
                saveSettingsToStorage();
        }
        return new Promise((resolve) => { resolve(); });
    }

    function getCommentListInfo(commentListIdx) {
        commentListIdx = (isNaN(commentListIdx)) ? _settings.commentList : commentListIdx;
        return _commentLists.find((cList) => { return cList.idx === commentListIdx });
    }

    function checkForStaticListArray(oldVarName) {
        return new Promise((resolve, reject) => {
            (function retry(oldVarName, tries) {
                if (tries > 100)
                    reject('timedOutWaitingStatic|');
                else if (!window['Urcomments' + oldVarName + 'Array2'])
                    window.setTimeout(retry, 100, oldVarName, ++tries);
                else
                    resolve();
            })(oldVarName, 1);
        });
    }

    function convertCommentListStatic(commentListIdx) {
        return new Promise(async (resolve, reject) => {
            commentListIdx = (isNaN(commentListIdx)) ? _settings.commentList : commentListIdx;
            let oldVarName = getCommentListInfo(commentListIdx).oldVarName;
            try {
                await checkForStaticListArray(oldVarName);
            }
            catch (error) {
                return reject(error);
            }
            let oldUrcArr = window['Urcomments' + oldVarName + 'Array2'];
            let defaultReminderIdx = parseInt(window['Urcomments' + oldVarName + 'ReminderPosistion']);
            let closedNiIdx = parseInt(window['Urcomments' + oldVarName + 'CloseNotIdentifiedPosistion']);
            let data = [];
            let entryIdx;
            logDebug('Converting static comment list to URC-E format for comment list: ' + oldVarName);
            data[0] = [ 'URCE' ];
            data[1] = [ '2018.11.28.01' ];
            data[2] = [ 'TITLE|COMMENT|URSTATUS|DR|DC|IT|IA|IR|MRA|GE|TNA|IJ|MBO|WDD|ME|MR|ML|BR|MSN|ISPS|SL' ];
            if (oldUrcArr[0].search(/<br>/gi) === -1) {
                data[3] = [ '||GROUP TITLE||||||||||||||||||' ];
                entryIdx = 4;
            }
            else
                entryIdx = 3;
            for (let oldUrcArrIdx = 0; oldUrcArrIdx < oldUrcArr.length; oldUrcArrIdx = oldUrcArrIdx + 3) {
                if (oldUrcArr[oldUrcArrIdx].search(/<br>/gi) > -1) {
                    oldUrcArr[oldUrcArrIdx+2] = 'GROUP TITLE';
                    oldUrcArr[oldUrcArrIdx] = $("<div>").html(oldUrcArr[oldUrcArrIdx]).text();
                }
                let temp = oldUrcArr[oldUrcArrIdx]+'|'+oldUrcArr[oldUrcArrIdx+1] + '|';
                temp += (oldUrcArr[oldUrcArrIdx+2] !== '') ? oldUrcArr[oldUrcArrIdx+2].toLowerCase() : '';
                temp += (oldUrcArrIdx === defaultReminderIdx) ? '|default_is_true' : '|';
                temp += (oldUrcArrIdx === closedNiIdx) ? '|default_is_true' : '|';
                for (let i=6; i<24; i++) {
                    if (i === 17 || i === 20)
                        continue;
                    temp += (window['Urcomments' + oldVarName + 'def_names'][i].toLowerCase() === oldUrcArr[oldUrcArrIdx].toLowerCase()) ? '|default_is_true' : '|';
                }
                data[entryIdx] = [ temp ];
                entryIdx++;
            }
            resolve(data);
        });
    }

    function processCommentList(data) {
        return new Promise((resolve, reject) => {
            logDebug('Procesing comment list data.');
            if (data) {
                const EXPECTED_FIELD_NAMES = ['TITLE', 'COMMENT', 'URSTATUS', 'DR', 'DC', 'IT', 'IA', 'IR', 'MRA', 'GE', 'TNA', 'IJ', 'MBO', 'WDD', 'ME', 'MR', 'ML', 'BR', 'MSN', 'ISPS', 'SL'];
                let ssFieldNames, groupDivId;
                let checkFieldNames = (fldName) => ssFieldNames.indexOf(fldName) > -1;
                let commentId = 0
                let blankGroup = 0;
                for (let entryIdx = 0; entryIdx < data.length; entryIdx++) {
                    if (entryIdx === 0) {
                        if (data[entryIdx][0] !== 'URCE')
                            return reject('Incorrect format in spreadsheet data received.');
                    }
                    else if (entryIdx === 1) {
                        if (SCRIPT_VERSION < data[entryIdx][0])
                            return reject('updateRequired|' + data[entryIdx][0]);
                    }
                    else if (entryIdx === 2) {
                        ssFieldNames = data[entryIdx][0].split('|').map((fldName) => fldName.trim());
                        if (ssFieldNames.length !== EXPECTED_FIELD_NAMES.length)
                            return reject('Expected ' + EXPECTED_FIELD_NAMES.length + ' columns in comment definition data. Spreadsheet returned ' + ssFieldNames.length + '.');
                        else if (!EXPECTED_FIELD_NAMES.every((fldName) => checkFieldNames(fldName)))
                            return reject('Script expected to see the following column names in the comment definition spreadsheet:\n' + EXPECTED_FIELD_NAMES.join(', ') + '\nHowever, the spreadsheet returned these:\n' + ssFieldNames.join(', '));
                    }
                    else {
                        let rowObj = {};
                        data[entryIdx][0].split('|').forEach((entry, i) => {
                            i = i || 0;
                            rowObj[ssFieldNames[i].trim().toLowerCase()] = (ssFieldNames[i].trim().toLowerCase() === 'comment') ? entry : (ssFieldNames[i].trim().toLowerCase() === 'title') ? entry.trim() : entry.trim().toLowerCase();
                            i++;
                        });
                        if (rowObj.title === 'URCE_REMOVED_SO_SKIP')
                            logDebug('SKIPPING a removed comment.'); // Nothing to do here. Move along. This is a comment that has been set to 'REMOVED' in the spreadsheet.
                        else if (rowObj.title === 'URCE_ERROR')
                            return reject('There is an unknown error in the spreadsheet output. Please contact the list owner: ' + getCommentListInfo(_settings.commentList).listOwner); // UH OH . This is bad. Something broke in the arrayformula on the spradsheet.
                        else if (rowObj.urstatus === 'group title') { // Group title row. Nothing to set in the arrays, but build html.
                            groupDivId = 'urceComments-for-';
                            if (rowObj.title !== '') {
                                groupDivId += rowObj.title.replace(/[^\w]+/gi, '').toLowerCase();
                                if (rowObj.title === rowObj.title.toUpperCase()) {
                                    if (rowObj.title.length > 30) {
                                        rowObj.titleMouseOver = rowObj.title;
                                        rowObj.title = rowObj.title.substring(0, 30) + '...';
                                    }
                                }
                                else if (rowObj.title.length > 35) {
                                    rowObj.titleMouseOver = rowObj.title;
                                    rowObj.title = rowObj.title.substring(0, 35) + '...';
                                }
                            }
                            else
                                groupDivId += 'blankGroup' + (++blankGroup);
                            let collapsed = (_settings.commentListCollapses.hasOwnProperty(_settings.commentList) &&
                                             _settings.commentListCollapses[_settings.commentList].hasOwnProperty(groupDivId+'_body') &&
                                             (_settings.commentListCollapses[_settings.commentList][groupDivId+'_body'] === true)) ? 'collapse' : '';
                            let chevron = (collapsed === 'collapse') ? 'fa-chevron-right' : 'fa-chevron-down';
                            let urStyle = (_settings.commentListStyle === 'urStyle') ? ' urStyle' : '';
                            $('#_commentList').append(
                                $('<fieldset>', {id:groupDivId, class:`URCE-field ${urStyle}`}).append(
                                    $('<legend>', {id:groupDivId+'_legend', class:`URCE-legend ${urStyle}`}).append(
                                        $('<i>', {class:`fa fa-fw ${chevron} URCE-chevron`}),
                                        $('<span>', {class:'URCE-span', title:rowObj.titleMouseOver}).text(rowObj.title)
                                    ).click(function() {
                                        $($(this).children()[0]).toggleClass('fa fa-fw fa-chevron-down');
                                        $($(this).children()[0]).toggleClass('fa fa-fw fa-chevron-right');
                                        $($(this).siblings()[0]).toggleClass('collapse');
                                        saveSettingsToStorage();
                                    })
                                ).append(
                                    $('<div>', {id:groupDivId+'_body', class:`${collapsed} URCE-group_body ${urStyle}`})
                                )
                            )
                        }
                        else { // SHOULD be a normal comments row, push values to arrays and build html.
                            if ((rowObj.urstatus !== 'solved') && (rowObj.urstatus !== 'notidentified') && (rowObj.urstatus !== 'open') && (rowObj.urstatus !== 'blank line'))
                                return reject('Your current selected list does not have a status set for ' + rowObj.title + '. Please contact list owner: ' + getCommentListInfo(_settings.commentList).listOwner);
                            else {
                                _commentList[commentId] = { 'title':rowObj.title, 'comment':rowObj.comment, 'urstatus':rowObj.urstatus };
                                if (Object.values(rowObj).indexOf('default_is_true') > -1) {
                                    let drIdx = ssFieldNames.indexOf('DR');
                                    let splitRowDefaultCommentsBoolean = Object.values(rowObj).slice(drIdx);
                                    for (let boolIdx = 0; boolIdx < splitRowDefaultCommentsBoolean.length; boolIdx++) {
                                        if (splitRowDefaultCommentsBoolean[boolIdx].toLowerCase() === 'default_is_true')
                                            _defaultComments[ssFieldNames[(boolIdx+drIdx)].toLowerCase()].commentNum = commentId;
                                    }
                                }
                                let linkClass;
                                let divDoubleClickId;
                                let divDoubleClickStyle = 'display:initial;';
                                if (rowObj.urstatus === 'solved') {
                                    linkClass = 'URCE-solvedLink';
                                    divDoubleClickId = 'URCE-divDoubleClickSolved';
                                    if (!_settings.doubleClickLinkSolvedComments)
                                        divDoubleClickStyle = 'display:none;';
                                }
                                else if (rowObj.urstatus === 'notidentified') {
                                    linkClass = 'URCE-niLink';
                                    divDoubleClickId = 'URCE-divDoubleClickNi';
                                    if (!_settings.doubleClickLinkNiComments)
                                        divDoubleClickStyle = 'display:none;';
                                }
                                else {
                                    linkClass = (rowObj.urstatus === 'blank line') ? 'URCE-blankLine' : 'URCE-openLink';
                                    divDoubleClickId = (rowObj.title !== '') ? 'URCE-divDoubleClickOpen' : 'URCE-divDoubleClickOpen-Hidden';
                                    if (!_settings.doubleClickLinkOpenComments || (rowObj.urstatus === 'blank line'))
                                        divDoubleClickStyle = 'display:none;';
                                }
                                $(`#${groupDivId}_body`).append(
                                    $('<div>', {class:`URCE-divComment hover expand ${linkClass}`, style:'position:relative;'}).append(
                                        $('<div>', {style:'width:225px; display:inline-flex;'}).append(
                                            $('<a>', {class:'URCE-Comments ' + linkClass + ' URCE-Comments', id:'urce-cid-'+commentId, title:formatText(rowObj.comment)}).text(rowObj.title).click(function() {
                                                handleClickedComment(parseInt(this.id.replace(/urce-cid-/, '')), false);
                                            })
                                        )
                                    ).append(
                                        $('<div>', {class:'URCE-divDoubleClick', id:divDoubleClickId, style:divDoubleClickStyle, title:I18n.t('urce.common.DoubleClickTitle') + ':\n' + formatText(rowObj.comment)}).append(
                                            $('<img>', {src:DOUBLE_CLICK_ICON, class:'URCE-doubleClickIcon', id:'urce-img-cid-'+commentId}).dblclick(function() {
                                                handleClickedComment(parseInt(this.id.replace(/urce-img-cid-/, '')), true);
                                            })
                                        )
                                    ).append($('<br>')),
                                )
                                commentId++;
                            }
                        }
                    }
                }
            }
            else
                return reject('No data passed to the JSON processing function.');
            resolve();
        });
    }

    function commentListAsync(commentListIdx) {
        commentListIdx = (isNaN(commentListIdx)) ? _settings.commentList : commentListIdx;
        let commentListInfo = getCommentListInfo(commentListIdx);
        logDebug('Beginning comment list async for comment list: ' + commentListInfo.name);
        return new Promise(async (resolve, reject) => {
            let data = await $.getJSON(`https://sheets.googleapis.com/v4/spreadsheets/${URCE_SPREADSHEET_ID}/values/${commentListInfo.gSheetRange}?key=${URCE_API_KEY}`).fail((response) => {
                reject('Spreadsheet call failed. Code: ' + response.status + ' - Text: ' + response.statusText);
            });
            if (data.values.length > 0)
                resolve(data.values);
            else
                reject('No comments found in spreadsheet sheet.');
        });
    }

    async function buildCommentList(commentListIdx, phase) {
        commentListIdx = (isNaN(commentListIdx)) ? _settings.commentList : commentListIdx;
        let commentListInfo = getCommentListInfo(commentListIdx);
        logDebug('Building comment list for: ' + commentListInfo.name);
        let data;
        if (phase !== 'init')
            maskBoxes(I18n.t('urce.prompts.SwitchingCommentLists') + '.<br>' + I18n.t('urce.common.PleaseWait') + '.', false, phase, (_selUr.urId > 0));
        $('#_commentList').empty();
        $('#_commentList').append(
            $('<div>', {class:'URCE-commentListName'}).text(I18n.t('urce.common.CommentList') + ': ' + commentListInfo.name)
        );
        _commentList = [];
        try {
            data = (commentListInfo.type === 'static') ? await convertCommentListStatic(commentListIdx) : await commentListAsync(commentListIdx);
        }
        catch (error) {
            return {error:error, staticList:(commentListInfo.type === 'static'), phase:phase, maskUrPanel:(_selUr.urId > 0)};
        }
        try {
            await processCommentList(data);
        }
        catch (error) {
            return {error:error, staticList:(commentListInfo.type === 'static'), phase:phase, maskUrPanel:(_selUr.urId > 0)};
        }
        _currentCommentList = commentListIdx;
        if (phase !== 'init')
            maskBoxes(null, true, phase, (_selUr.urId > 0));
        return {error:undefined, staticList:(commentListInfo.type === 'static'), phase:phase, maskUrPanel:(_selUr.urId > 0)};
    }

    function handleError(error, staticList, phase, maskUrPanel) {
        let errorText, outputText;
        if (error.indexOf('|') > -1) {
            if (error.split('|')[0] === 'updateRequired')
                errorText = I18n.t('urce.prompts.UpdateRequired') + ': ' + error.split('|')[1];
            else if (error.split('|')[0] === 'timedOutWaitingStatic')
                errorText = I18n.t('urce.prompts.TimedOutWaitingStatic');
            outputText = errorText;
        }
        else {
            errorText = error;
            outputText = I18n.t('urce.common.ErrorGeneric');
        }
        logError(errorText);
        _currentCommentList = null;
        if (phase === 'changeList') {
            if (staticList)
                outputText += '\n\n' + I18n.t('urce.common.Type') + ': ' + I18n.t('urce.common.Static');
            else {
                let commentListInfo = getCommentListInfo(_settings.commentList);
                outputText += '\n\n' + I18n.t('urce.common.CommentList') + ': ' + commentListInfo.name;
                outputText += '\n' + I18n.t('urce.common.ListOwner') + ': ' + commentListInfo.listOwner;
            }
        }
        $('#_commentList').empty();
        $('#_commentList').append(
            $('<div>', {class:'URCE-divLoading'}).text(outputText)
        );
        showAlertBox('fa-exclamation-circle', I18n.t('urce.common.ErrorHeader'), outputText, false, 'OK', '', null, null);
        maskBoxes(null, true, phase, maskUrPanel);
    }

    function initMutationObservers(status) {
        let saveButtonObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if ($(mutation.target).hasClass('waze-icon-save') && mutation.type === 'attributes' && mutation.attributeName === 'class' && mutation.target.classList.contains('ItemDisabled') && (mutation.oldValue.toString().indexOf('ItemDisabled') === -1))
                    return handleAfterSave();
            });
        });
        let urPanelContainerObserver = new MutationObserver(async (mutations) => {
            let newUrId = await getUrId();
            mutations.forEach((mutation) => {
                if ($(mutation.target).is('#panel-container') && (mutation.type === 'childList') && (mutation.addedNodes.length > 0) && (mutation.addedNodes[0].className.indexOf('show') > -1) && (newUrId > 0))
                    return handleUpdateRequestContainer(newUrId, 'UR panel mutation');
                else if ($(mutation.target).is('#panel-container') && (mutation.type === 'childList') && (mutation.removedNodes.length > 0) && (mutation.removedNodes[0].className.indexOf('show') > -1))
                    return handleAfterCloseUpdateContainer();
                else if ($(mutation.target).hasClass('comment-list') && (mutation.type === 'childList') && (mutation.addedNodes.length > 0) && (newUrId > 0) && (newUrId === _selUr.urId))
                    handleAfterCommentMutation(newUrId);
                else if ((mutation.type === 'attributes') && (mutation.attributeName === 'data-state')) {
                    logDebug('Handling UR status change mutation.');
                    if (mutation.target.attributes['data-state'].nodeValue === 'open')
                        _selUr.newStatus = 'open';
                    else if (mutation.target.attributes['data-state'].nodeValue === 'solved')
                        _selUr.newStatus = 'solved';
                    else if (mutation.target.attributes['data-state'].nodeValue === 'not-identified')
                        _selUr.newStatus = 'notidentified';
                    else
                        logWarning(mutation.target.attributes['data-state'].nodeValue);
                }
            });
        });
        let urMarkerObserver = new MutationObserver((mutations) => {
            let urMapMarkerIds = [];
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    for (let idx = 0; idx < mutation.addedNodes.length; idx++) {
                        let addedNode = mutation.addedNodes[idx];
                        if (mutation.addedNodes[idx].classList && addedNode.classList.contains('map-problem') && mutation.addedNodes[idx].classList.contains('user-generated')) {
                            if ((parseInt(mutation.addedNodes[idx].attributes['data-id'].value) > 0) && (urMapMarkerIds.indexOf(parseInt(mutation.addedNodes[idx].attributes['data-id'].value)) === -1))
                                urMapMarkerIds.push(parseInt(mutation.addedNodes[idx].attributes['data-id'].value));
                        }
                    }
                }
                else if (mutation.type === 'attributes' && mutation.target.classList && (mutation.target.classList.contains('user-generated') || mutation.target.classList.contains('has-comments'))) {
                    if ((!mutation.oldValue || !mutation.oldValue.match(/\bselected\b/)) && mutation.target.classList.contains('selected')) {
                        if (parseInt(mutation.target.attributes['data-id'].value) > 0) {
                            if (!_selUr.handling) {
                                if (!(_selUr.urId > 0) || (_selUr.urId !== parseInt(mutation.target.attributes['data-id'].value))) {
                                    _selUr = {
                                        doubleClick: false,
                                        handling: false,
                                        newStatus: undefined,
                                        urId: parseInt(mutation.target.attributes['data-id'].value),
                                        urOpen: false
                                    };
                                    logDebug('Caught selected UR by backdoor. Firing the minions. urId: ' + _selUr.urId);
                                }
                            }
                        }
                    }
                }
            });
            let zoomLevel = getZoomLevel();
            let filter = true;
            if ((_settings.disableFilteringAboveZoom && (zoomLevel < _settings.disableFilteringAboveZoomLevel)) ||
                (_settings.disableFilteringBelowZoom && (zoomLevel > _settings.disableFilteringBelowZoomLevel)))
                filter = false;
            if (urMapMarkerIds.length > 0)
                handleUrMapMarkers(urMapMarkerIds, filter);
        });
        if ((status === 'enable') && (!saveButtonObserver.isObserving || !urPanelContainerObserver.isObserving || !urMarkerObserver.isObserving)) {
            logDebug('Enabling MOs.');
            if (!saveButtonObserver.isObserving) {
                saveButtonObserver.observe(document.getElementById('toolbar'), { childList: true, attributes: true, attributeOldValue: true, characterData: true, characterDataOldValue: true, subtree: true });
                saveButtonObserver.isObserving = true;
            }
            if (!urPanelContainerObserver.isObserving) {
                urPanelContainerObserver.observe(document.getElementById('panel-container'), { childList: true, attributes: true, attributeOldValue: true, characterData: true, characterDataOldValue: true, subtree: true });
                urPanelContainerObserver.isObserving = true;
            }
            if (!urMarkerObserver.isObserving) {
                urMarkerObserver.observe(W.map.updateRequestLayer.div, { childList: true, attributes: true, attributeOldValue: true, characterData: true, characterDataOldValue: true, subtree: true });
                urMarkerObserver.isObserving = true;
            }
            logDebug('Registering map.events event hooks.');
            W.map.events.register('zoomend', null, invokeZoomMoveEnd);
            W.map.events.register('moveend', null, invokeZoomMoveEnd);
            W.map.events.registerPriority('mousedown', null, mouseDown);
            W.map.events.register('mouseup', null, mouseUp);
        } else if ((status === 'disable') && (saveButtonObserver.isObserving || urPanelContainerObserver.isObserving || urMarkerObserver.isObserving)) {
            logDebug('Disabling MOs.');
            if (saveButtonObserver.isObserving) {
                saveButtonObserver.disconnect();
                saveButtonObserver.isObserving = false;
            }
            if (urPanelContainerObserver.isObserving) {
                urPanelContainerObserver.disconnect();
                urPanelContainerObserver.isObserving = false;
            }
            if (urMarkerObserver.isObserving) {
                urMarkerObserver.disconnect();
                urMarkerObserver.isObserving = false;
            }
            logDebug('Disabling event listeners for UR markers.');
            $(W.map.updateRequestLayer.div)
                .off('click', '.map-problem.user-generated', handleUrMarkerClick)
                .off('mouseover', '.map-problem.user-generated', markerMouseOver)
                .off('mouseout', '.map-problem.user-generated', markerMouseOut);
            logDebug('Unregistering map.events event hook.');
            W.map.events.unregister('zoomend', null, invokeZoomMoveEnd);
            W.map.events.unregister('moveend', null, invokeZoomMoveEnd);
            W.map.events.unregister('mousedown', null, mouseDown);
            W.map.events.unregister('mouseup', null, mouseUp);
        }
    }

    async function initBackgroundTasks() {
        logDebug('Initializing background tasks.');
        logDebug('Setting event listeners for UR markers.');
        $(W.map.updateRequestLayer.div)
            .off('click', '.map-problem.user-generated', handleUrMarkerClick)
            .on('click', '.map-problem.user-generated', handleUrMarkerClick)
            .off('mouseover', '.map-problem.user-generated', markerMouseOver)
            .on('mouseover', '.map-problem.user-generated', markerMouseOver)
            .off('mouseout', '.map-problem.user-generated', markerMouseOut)
            .on('mouseout', '.map-problem.user-generated', markerMouseOut);
        try {
            await handleUrLayer('init', null, null);
        }
        catch(error) {
            logWarning(error); // Don't need to return here, go ahead and setup the MOs.
        }
        initMutationObservers('enable');
        return new Promise((resolve) => { resolve(); });
    }

    function injectCss() {
        logDebug('Injecting CSS.');
        $('<style = type="text/css">' +
          // Comments tab
          '#sidepanel-urc-e #panel-urce-comments .URCE-Comments { text-decoration:none; cursor:pointer; color: #000000; font-size:12px; }' +
          '#sidepanel-urc-e #panel-urce-comments .URCE-commentListName { padding-left:12px; font-size:11px; }' +
          '#sidepanel-urc-e #panel-urce-comments .URCE-divLoading { text-align:left; color:red; font-size:12px; }' +
          '#sidepanel-urc-e #panel-urce-comments .URCE-divCCLinks { text-align:center; }' +
          '#sidepanel-urc-e #panel-urce-comments .URCE-divIcon { height:0px; position:relative; top:-3px; left:-100px; }' +
          '#sidepanel-urc-e #panel-urce-comments .URCE-icon { cursor:default; }' +
          '#sidepanel-urc-e #panel-urce-comments .URCE-divComment { padding:0px 4px 0px 4px; }' +
          '#sidepanel-urc-e #panel-urce-comments .URCE-divComment:before, #sidepanel-urc-e #panel-urce-comments .URCE-divComment.hover:after { content:""; position:absolute; bottom:-2px; width:0px; height:2px; transition:all 0.2s ease-in-out; transition-duration:0.5s; opacity:0; }' +
          '#sidepanel-urc-e #panel-urce-comments .URCE-divComment.hover.expand.URCE-openLink:before { left:calc(50%); background-color:#000000; margin-right:5px; }' +
          '#sidepanel-urc-e #panel-urce-comments .URCE-divComment.hover.expand.URCE-openLink:after { right:calc(50%); background-color:#000000; }' +
          '#sidepanel-urc-e #panel-urce-comments .URCE-divComment.hover.expand.URCE-solvedLink:before { left:calc(50%); background-color:#008F00; margin-right:5px; }' +
          '#sidepanel-urc-e #panel-urce-comments .URCE-divComment.hover.expand.URCE-solvedLink:after { right:calc(50%); background-color:#008F00;}' +
          '#sidepanel-urc-e #panel-urce-comments .URCE-divComment.hover.expand.URCE-niLink:before { left:calc(50%); background-color:#E68A00; margin-right:5px; }' +
          '#sidepanel-urc-e #panel-urce-comments .URCE-divComment.hover.expand.URCE-niLink:after { right:calc(50%); background-color:#E68A00; }' +
          '#sidepanel-urc-e #panel-urce-comments .URCE-divComment.hover:hover { cursor:pointer; }' +
          '#sidepanel-urc-e #panel-urce-comments .URCE-divComment.hover.URCE-blankLine:hover { cursor:default; }' +
          '#sidepanel-urc-e #panel-urce-comments .URCE-divComment:hover:after { width:100%; opacity:1; }' +
          '#sidepanel-urc-e #panel-urce-comments .URCE-divComment:hover:before { width:100%; opacity:1; margin-right:5px; }' +
          '#sidepanel-urc-e #panel-urce-comments .URCE-divComment.hover:hover.expand:after { width:50%; }' +
          '#sidepanel-urc-e #panel-urce-comments .URCE-divComment.hover:hover.expand:before { width:50%; margin-right:5px; }' +
          '#sidepanel-urc-e #panel-urce-comments .URCE-solvedLink { color:#008F00; }' +
          '#sidepanel-urc-e #panel-urce-comments .URCE-niLink { color:#E68A00; }' +
          '#sidepanel-urc-e #panel-urce-comments .URCE-openLink { color:#000000; }' +
          '#sidepanel-urc-e #panel-urce-comments .URCE-doubleClickIcon { padding-top:4px; height:16px; float:right; }' +
          '#sidepanel-urc-e #panel-urce-comments .URCE-divDoubleClick { display:inline; }' +
          '#sidepanel-urc-e #panel-urce-comments .URCE-span { cursor:pointer; }' +
          '#sidepanel-urc-e #panel-urce-settings .URCE-spreadsheetLink { font-size:11px; text-align:right; }' +
          '#sidepanel-urc-e #panel-urce-comments .URCE-group_body.urStyle { padding-left:23px !important; }' +
          // Settings tab
          '#sidepanel-urc-e #panel-urce-settings .URCE-divWarningPre { margin-left:3px; }' +
          '#sidepanel-urc-e #panel-urce-settings .URCE-divWarning { display:inline; }' +
          '#sidepanel-urc-e #panel-urce-settings .URCE-divWarningTitle { color:red; text-decoration:underline; }' +
          '#sidepanel-urc-e #panel-urce-settings .URCE-daysInput { width:38px; height:20px; }' +
          '#sidepanel-urc-e #panel-urce-settings .URCE-textInput { width:175px; height:20px; }' +
          '#sidepanel-urc-e #panel-urce-settings .URCE-span { font-size:12px; text-transform:uppercase; cursor:pointer; }' +
          '#sidepanel-urc-e #panel-urce-settings .URCE-controls { padding:5px 0 5px 0; font-size:11px;}' +
          '#sidepanel-urc-e #panel-urce-settings .URCE-controls .URCE-subHeading { font-weight:600; }' +
          '#sidepanel-urc-e #panel-urce-settings .URCE-controls .URCE-textFirst, .URCE-controls.URCE-textFirst { padding:0 0 0 16px !important; }' +
          '#sidepanel-urc-e #panel-urce-settings .URCE-controls .URCE-textFirst.urceDisabled, .URCE-controls.URCE-textFirst.urceDisabled { color:#808080; }' +
          '#sidepanel-urc-e #panel-urce-settings .URCE-controls .URCE-divDaysInline { display:inline; padding-left:3px; }' +
          '#sidepanel-urc-e #panel-urce-settings .URCE-controls .URCE-divDaysInline.urceDisabled { display:inline; padding-left:2px; cursor:default; color:#808080; }' +
          '#sidepanel-urc-e #panel-urce-settings .URCE-controls input[type="checkbox"] { margin:2px; vertical-align:middle; cursor:pointer; position:absolute }' +
          '#sidepanel-urc-e #panel-urce-settings .URCE-controls input[type="checkbox"][disabled] { margin:2px; vertical-align:middle; cursor:default; position:absolute; }' +
          '#sidepanel-urc-e #panel-urce-settings .URCE-controls select { height:22px; vertical-align:middle; }' +
          '#sidepanel-urc-e #panel-urce-settings .URCE-controls label { font-weight:normal; cursor:pointer; display:inline-block; position:relative; padding-left:16px; }' +
          '#sidepanel-urc-e #panel-urce-settings .URCE-controls label.urceDisabled { font-weight:normal; cursor:default; color:#808080;  display:inline-block; position:relative; padding-left:16px; }' +
          // Common
          '#sidepanel-urc-e .URCE-chevron { cursor:pointer; font-size:12px; margin-right: 4px; }' +
          '#sidepanel-urc-e .URCE-field { border:1px solid silver; padding:5px; border-radius:4px; -webkit-padding-before:0; }' +
          '#sidepanel-urc-e .URCE-field.urStyle { border:unset !important; padding:unset !important; border-radius:unset !important; }' +
          '#sidepanel-urc-e .URCE-legend { margin-bottom:0px; border-bottom-style:none; width:auto; }' +
          '#sidepanel-urc-e .URCE-legend.urStyle { border-bottom-style:unset !important; margin-bottom:2px !important; width:100% !important; background-color:#F6F7F7 !important; line-height:20px !important; padding:0 2px 0 2px !important; border-top:1px solid #C0C0C0 !important; border-bottom:1px solid #C0C0C0 !important; }' +
          '#sidepanel-urc-e .URCE-divCC { /* padding-top:2px !important; */ }' +
          '#sidepanel-urc-e .URCE-label { white-space:pre-line; margin:0 0 0 0; }' +
          '#sidepanel-urc-e .URCE-span { font-size:13px; font-weight:600; }' +
          '#sidepanel-urc-e .URCE-spanTitle { font-size:13px; font-weight:600; }' +
          '#sidepanel-urc-e .URCE-spanVersion { font-size:11px; margin-left:11px; color:#000000; }' +
          '#sidepanel-urc-e .URCE-divTabs { padding:8px; padding-top:2px; }' +
          // Main Tabs
          '.URCE-tabIcon { padding-bottom:6px; width:18px; }' +
          // Alert Box
          '#urceAlertBox { position:fixed; visibility:hidden; top:50%; left:50%; z-index:10000; background-color:aliceBlue; border-width:3px; border-style:solid; border-radius:10px; box-shadow:5px 5px 10px silver; padding:4px; -webkit-transform:translate(-50%, -50%); transform:translate(-50%, -50%); }' +
          '.URCE-alertBox-header { padding:4px; background-color:LightBlue; font-weight:bold; font-size:14px; }' +
          '.URCE-alertBox-content { padding:4px; background-color:White; overflow:auto; max-height:500px; }' +
          '.URCE-alertBox-controls { text-align:center; padding:4px; }' +
          '.URCE-alertBox-controls-span-urceAlertTickBtn, .URCE-alertBox-controls-span-urceAlertCrossBtn { cursor:pointer; font-size:14px; border:thin outset black; padding:2px 10px 2px 10px; }' +
          '.URCE-alertBox-controls-span-urceAlertTickBtnCaption, .URCE-alertBox-controls-span-urceAlertCrossBtnCaption { font-weight:bold; }' +
          // urceDiv
          '#urceDiv { position:absolute; visibility:hidden; top:0; left:0; z-index:15000; background-color:aliceBlue; border-width:3px; border-style:solid; border-radius:10px; box-shadow:5px 5px 10px silver; padding:4px; }' +
          '#urceDiv hr { border-top:1px solid #000000; }' +
          // UR Panel Manipulation
          '#panel-container .mapUpdateRequest.panel { width:290px; }' +
          '</style>'
         ).appendTo('head');
    }

    function initCommentsTab() {
        logDebug('Initializing Comments tab.');
        $('#panel-urce-comments').append(
            $('<div>', {id:'_divZoomOutLinks', class:'URCE-divCCLinks', style:(_settings.hideZoomOutLinks) ? 'display: none;' : ''}).append(
                $('<div>', {id:'urceIcon', class:'URCE-divIcon'}).append(
                    $('<img>', {src:GM_info.script.icon, class:'URCE-icon'})
                ),
                $('<a>', {id:'zoomOutLink1', class:'URCE-Comments', zoomTo:0, title:I18n.t('urce.commentsTab.ZoomOutLink1Title')}).text(I18n.t('urce.commentsTab.ZoomOutLink1')).append('<br>'),
                $('<a>', {id:'zoomOutLink2', class:'URCE-Comments', zoomTo:2, title:I18n.t('urce.commentsTab.ZoomOutLink2Title')}).text(I18n.t('urce.commentsTab.ZoomOutLink2')).append('<br>'),
                $('<a>', {id:'zoomOutLink3', class:'URCE-Comments', zoomTo:3, title:I18n.t('urce.commentsTab.ZoomOutLink3Title')}).text(I18n.t('urce.commentsTab.ZoomOutLink3')).append('<br>')
            ),
            $('<div>', {id:'_commentList', class:'URCE-divCC'})
        );
        $('a[id^="zoomOutLink"]').on('click', function() {
            if ($('#panel-container .mapUpdateRequest .top-section .close-panel').length > 0 )
                autoCloseUrPanel();
            W.map.setCenter(W.map.getCenter(), parseInt(this.getAttribute('zoomTo')));
        });
    }

    function initSettingsTab() {
        logDebug('Initializing Settings tab.');
        let urStyle = (_settings.commentListStyle === 'urStyle') ? ' urStyle' : '';
        $('#panel-urce-settings').append(
            // Comment List
            $('<fieldset>', {id:'urce-prefs-fieldset-commentList', class:`URCE-field${urStyle}`}).append(
                $('<legend>', {id:'urce-prefs-legend-commentList', class:`URCE-legend${urStyle}`}).append(
                    $('<i>', {class:'fa fa-fw fa-chevron-down URCE-chevron'}),
                    $('<span>', {class:'URCE-span'}).text(I18n.t('urce.common.CommentList'))
                ).click(function() {
                    $($(this).children()[0]).toggleClass('fa fa-fw fa-chevron-down');
                    $($(this).children()[0]).toggleClass('fa fa-fw fa-chevron-right');
                    $($(this).siblings()[0]).toggleClass('collapse');
                }),
                $('<div>', {class:'URCE-controls URCE-divCC'}).append(
                    // Comment list
                    $('<div>').text(I18n.t('urce.prefs.DefaultList') + ': ').append(() => {
                        let $selList = $('<select>', {id:'_selCommentList', title:I18n.t('urce.prefs.DefaultListTitle'), urceprefs:'commentList'});
                        _commentLists.forEach((cList) => {
                            if (cList.status !== 'disabled') {
                                if (cList.idx === _settings.commentList)
                                    $selList.append($('<option>', {value:cList.idx, selected:true}).text(cList.name));
                                else
                                    $selList.append($('<option>', {value:cList.idx}).text(cList.name));
                            }
                        });
                        return $selList.val(_settings.commentList).change(function() {
                            changeCommentList(parseInt($(this).val()), false, false);
                        });
                    }),
                    // Comment list style
                    $('<div>').text(I18n.t('urce.common.Style') + ': ').append(() => {
                        let $selList = $('<select>', {id:'_selCommentListStyle', title:I18n.t('urce.prefs.CommentListStyleTitle'), urceprefs:'commentList'});
                        let defaultSelected = false, urStyleSelected = false;
                        if (_settings.commentListStyle === 'default')
                            defaultSelected = true;
                        $selList.append(
                            $('<option>', {value:'default'}).prop('selected', defaultSelected).text(I18n.t('urce.prefs.StyleDefault'))
                        )
                        if (_settings.commentListStyle === 'urStyle')
                            urStyleSelected = true;
                        $selList.append(
                            $('<option>', {value:'urStyle'}).prop('selected', urStyleSelected).text(I18n.t('urce.prefs.StyleUrStyle'))
                        )
                        $selList.change(function() {
                            changeCommentListStyle($(this).val());
                        })
                        return $selList;
                    }),
                    $('<div>', {title:I18n.t('urce.prefs.TagEmailTitle')}).text(I18n.t('urce.prefs.TagEmail') + ': ').append(
                        $('<div>', {style:'display:inline;'}).append(
                            $('<div>', {class:'URCE-divDaysInline'}).append(
                                $('<input>', {type:'text', id:'_texttagEmail', class:'URCE-textInput urceSettingsTextBox', urceprefs:'commentList', value:_settings.tagEmail, title:I18n.t('urce.prefs.TagEmailTitle')})
                            )
                        )
                    ),
                    $('<input>', {type:'checkbox', id:'_cbautoSwitchCommentList', urceprefs:'commentList', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.AutoSwitchCommentListTitle')}).prop('checked', _settings.autoSwitchCommentList),
                    $('<label>', {for:'_cbautoSwitchCommentList', title:I18n.t('urce.prefs.AutoSwitchCommentListTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoSwitchCommentList')),
                    $('<div>', {class:'URCE-spreadsheetLink'}).append(
                        $('<a>', {class:'URCE-Controls URCE-spreadsheetLink', id:'urce-spreadsheet-link', title:I18n.t('urce.prefs.SpreadsheetLinkTitle'), href:'http://bit.ly/urc-e_ss'}).text(I18n.t('urce.prefs.SpreadsheetLink')).click(function(e) {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(this.href, '_blank');
                        })
                    )
                )
            ),
            // URC-E Preferences
            $('<fieldset>', {id:'urce-prefs-fieldset-urc-e-prefs', class:`URCE-field${urStyle}`}).append(
                $('<legend>', {id:'urce-prefs-legend-urc-e-prefs', class:`URCE-legend${urStyle}`}).append(
                    $('<i>', {class:'fa fa-fw fa-chevron-down URCE-chevron'}),
                    $('<span>', {class:'URCE-span'}).text(I18n.t('urce.prefs.UrcePrefs'))
                ).click(function() {
                    $($(this).children()[0]).toggleClass('fa fa-fw fa-chevron-down');
                    $($(this).children()[0]).toggleClass('fa fa-fw fa-chevron-right');
                    $($(this).siblings()[0]).toggleClass('collapse');
                }),
                $('<div>', {class:'URCE-controls URCE-divCC'}).append(
                    $('<input>', {type:'checkbox', id:'_cbautoCenterOnUr', urceprefs:'urce', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.AutoCenterOnUrTitle')}).prop('checked', _settings.autoCenterOnUr),
                    $('<label>', {for:'_cbautoCenterOnUr', title:I18n.t('urce.prefs.AutoCenterOnUrTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoCenterOnUr')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbautoClickOpenSolvedNi', urceprefs:'urce', title:I18n.t('urce.prefs.AutoClickOpenSolvedNiTitle')}).change(function() {
                        _settings.autoClickOpenSolvedNi = isChecked(this);
                        if (!_settings.autoClickOpenSolvedNi) {
                            if (isChecked('#_cbautoSaveAfterSolvedOrNiComment')) {
                                _settings.autoSaveAfterSolvedOrNiComment = false;
                                $('#_cbautoSaveAfterSolvedOrNiComment').prop('checked', false);
                            }
                            if (isChecked('#_cbdoubleClickLinkNiComments')) {
                                _settings.doubleClickLinkNiComments = false;
                                $('#_cbdoubleClickLinkNiComments').prop('checked', false);
                            }
                            if (isChecked('#_cbdoubleClickLinkOpenComments')) {
                                _settings.doubleClickLinkOpenComments = false;
                                $('#_cbdoubleClickLinkOpenComments').prop('checked', false);
                            }
                            if (isChecked('#_cbdoubleClickLinkSolvedComments')) {
                                _settings.doubleClickLinkSolvedComments = false;
                                $('#_cbdoubleClickLinkSolvedComments').prop('checked', false);
                            }
                        }
                        saveSettingsToStorage();
                    }).prop('checked', _settings.autoClickOpenSolvedNi),
                    $('<label>', {for:'_cbautoClickOpenSolvedNi', title:I18n.t('urce.prefs.AutoClickOpenSolvedNiTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoClickOpenSolvedNi')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbautoCloseUrPanel', urceprefs:'urce', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.AutoCloseUrPanelTitle')}).prop('checked', _settings.autoCloseUrPanel),
                    $('<label>', {for:'_cbautoCloseUrPanel', title:I18n.t('urce.prefs.AutoCloseUrPanelTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoCloseUrPanel')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbautoSaveAfterSolvedOrNiComment', urceprefs:'urce', title:I18n.t('urce.prefs.AutoSaveAfterSolvedOrNiCommentTitle')}).change(function() {
                        _settings.autoSaveAfterSolvedOrNiComment = isChecked(this);
                        if (_settings.autoClickOpenSolvedNi && !isChecked('#_cbautoClickOpenSolvedNi')) {
                            _settings.autoClickOpenSolvedNi = true;
                            $('#_cbautoClickOpenSolvedNi').prop('checked', true);
                        }
                        saveSettingsToStorage();
                    }).prop('checked', _settings.autoSaveAfterSolvedOrNiComment),
                    $('<label>', {for:'_cbautoSaveAfterSolvedOrNiComment', title:I18n.t('urce.prefs.AutoSaveAfterSolvedOrNiCommentTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoSaveAfterSolvedOrNiComment')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbautoSendReminders', urceprefs:'urce', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.AutoSendRemindersTitle')}).prop('checked', _settings.autoSendReminders),
                    $('<label>', {for:'_cbautoSendReminders', title:I18n.t('urce.prefs.AutoSendRemindersTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoSendReminders')),
                    $('<div>', {class:'URCE-divWarning URCE-divWarningPre'}).text('(').append(
                        $('<div>', {class:'URCE-divWarning URCE-divWarningTitle', title:I18n.t('urce.prefs.AutoSendRemindersWarningTitle')}).text(I18n.t('urce.prefs.AutoSendRemindersWarning')),
                    ).append(
                        $('<div>', {class:'URCE-divWarning'}).text(')')
                    ),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbautoSetNewUrComment', urceprefs:'urce', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.AutoSetNewUrCommentTitle')}).prop('checked', _settings.autoSetNewUrComment),
                    $('<label>', {for:'_cbautoSetNewUrComment', title:I18n.t('urce.prefs.AutoSetNewUrCommentTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoSetNewUrComment')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbautoSetReminderUrComment', urceprefs:'urce', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.AutoSetReminderUrCommentTitle')}).prop('checked', _settings.autoSetReminderUrComment),
                    $('<label>', {for:'_cbautoSetReminderUrComment', title:I18n.t('urce.prefs.AutoSetReminderUrCommentTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoSetReminderUrComment')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbautoSwitchToUrCommentsTab', urceprefs:'urce', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.AutoSwitchToUrCommentsTabTitle')}).prop('checked', _settings.autoSwitchToUrCommentsTab),
                    $('<label>', {for:'_cbautoSwitchToUrCommentsTab', title:I18n.t('urce.prefs.AutoSwitchToUrCommentsTabTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoSwitchToUrCommentsTab')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbautoZoomInOnNewUr', urceprefs:'urce', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.AutoZoomInOnNewUrTitle')}).prop('checked', _settings.autoZoomInOnNewUr),
                    $('<label>', {for:'_cbautoZoomInOnNewUr', title:I18n.t('urce.prefs.AutoZoomInOnNewUrTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoZoomInOnNewUr')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbautoZoomOutAfterComment', urceprefs:'urce', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.AutoZoomOutAfterCommentTitle')}).prop('checked', _settings.autoZoomOutAfterComment),
                    $('<label>', {for:'_cbautoZoomOutAfterComment', title:I18n.t('urce.prefs.AutoZoomOutAfterCommentTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoZoomOutAfterComment')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbdisableDoneNextButtons', urceprefs:'urce', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.DisableDoneNextButtonsTitle')}).prop('checked', _settings.disableDoneNextButtons),
                    $('<label>', {for:'_cbdisableDoneNextButtons', title:I18n.t('urce.prefs.DisableDoneNextButtonsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.DisableDoneNextButtons')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbreplaceNextWithDoneButton', urceprefs:'urce', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.ReplaceNextWithDoneButtonTitle')}).prop('checked', _settings.replaceNextWithDoneButton),
                    $('<label>', {for:'_cbreplaceNextWithDoneButton', title:I18n.t('urce.prefs.ReplaceNextWithDoneButtonTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.ReplaceNextWithDoneButton')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbdoubleClickLinkNiComments', urceprefs:'urce', title:I18n.t('urce.prefs.DoubleClickLinkNiCommentsTitle')}).change(function() {
                        _settings.doubleClickLinkNiComments = isChecked(this);
                        if (!_settings.doubleClickLinkNiComments)
                            $('div#URCE-divDoubleClickNi').hide();
                        else {
                            if (!isChecked('#_cbautoClickOpenSolvedNi')) {
                                _settings.autoClickOpenSolvedNi = true;
                                $('#_cbautoClickOpenSolvedNi').prop('checked', true);
                            }
                            $('div#URCE-divDoubleClickNi').show();
                        }
                        saveSettingsToStorage();
                    }).prop('checked', _settings.doubleClickLinkNiComments),
                    $('<label>', {for:'_cbdoubleClickLinkNiComments', title:I18n.t('urce.prefs.DoubleClickLinkNiCommentsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.DoubleClickLinkNiComments')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbdoubleClickLinkOpenComments', urceprefs:'urce', title:I18n.t('urce.prefs.DoubleClickLinkOpenCommentsTitle')}).change(function() {
                        _settings.doubleClickLinkOpenComments = isChecked(this);
                        if (!_settings.doubleClickLinkOpenComments)
                            $('div#URCE-divDoubleClickOpen').hide();
                        else {
                            if (!isChecked('#_cbautoClickOpenSolvedNi')) {
                                _settings.autoClickOpenSolvedNi = true;
                                $('#_cbautoClickOpenSolvedNi').prop('checked', true);
                            }
                            $('div#URCE-divDoubleClickOpen').show();
                        }
                        saveSettingsToStorage();
                    }).prop('checked', _settings.doubleClickLinkOpenComments),
                    $('<label>', {for:'_cbdoubleClickLinkOpenComments', title:I18n.t('urce.prefs.DoubleClickLinkOpenCommentsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.DoubleClickLinkOpenComments')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbdoubleClickLinkSolvedComments', urceprefs:'urce', title:I18n.t('urce.prefs.DoubleClickLinkSolvedCommentsTitle')}).change(function() {
                        _settings.doubleClickLinkSolvedComments = isChecked(this);
                        if (!_settings.doubleClickLinkSolvedComments)
                            $('div#URCE-divDoubleClickSolved').hide();
                        else {
                            if (!isChecked('#_cbautoClickOpenSolvedNi')) {
                                _settings.autoClickOpenSolvedNi = true;
                                $('#_cbautoClickOpenSolvedNi').prop('checked', true);
                            }
                            $('div#URCE-divDoubleClickSolved').show();
                        }
                        saveSettingsToStorage();
                    }).prop('checked', _settings.doubleClickLinkSolvedComments),
                    $('<label>', {for:'_cbdoubleClickLinkSolvedComments', title:I18n.t('urce.prefs.DoubleClickLinkSolvedCommentsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.DoubleClickLinkSolvedComments')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbhideZoomOutLinks', urceprefs:'urce', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideZoomOutLinksTitle')}).prop('checked', _settings.hideZoomOutLinks),
                    $('<label>', {for:'_cbhideZoomOutLinks', title:I18n.t('urce.prefs.HideZoomOutLinksTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.HideZoomOutLinks')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbunfollowUrAfterSend', urceprefs:'urce', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.UnfollowUrAfterSendTitle')}).prop('checked', _settings.unfollowUrAfterSend),
                    $('<label>', {for:'_cbunfollowUrAfterSend', title:I18n.t('urce.prefs.UnfollowUrAfterSendTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.UnfollowUrAfterSend'))
                )
            ),
            // UR Marker Preferences
            $('<fieldset>', {id:'urce-prefs-fieldset-ur-marker-prefs', class:`URCE-field${urStyle}`}).append(
                $('<legend>', {id:'urce-prefs-legend-ur-marker-prefs', class:`URCE-legend${urStyle}`}).append(
                    $('<i>', {class:'fa fa-fw fa-chevron-down URCE-chevron'}),
                    $('<span>', {class:'URCE-span'}).text(I18n.t('urce.prefs.UrMarkerPrefs'))
                ).click(function() {
                    $($(this).children()[0]).toggleClass('fa fa-fw fa-chevron-down');
                    $($(this).children()[0]).toggleClass('fa fa-fw fa-chevron-right');
                    $($(this).siblings()[0]).toggleClass('collapse');
                }),
                $('<div>', {class:'URCE-controls URCE-divCC'}).append(
                    $('<input>', {type:'checkbox', id:'_cbenableUrPillCounts', urceprefs:'markerMaster', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.EnableUrPillCountsTitle')}).prop('checked', _settings.enableUrPillCounts),
                    $('<label>', {for:'_cbenableUrPillCounts', urceprefs:'markerMaster', title:I18n.t('urce.prefs.EnableUrPillCountsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.EnableUrPillCounts')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbdisableUrMarkerPopup', urceprefs:'marker-nodisable', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.DisableUrMarkerPopupTitle')}).prop('checked', _settings.disableUrMarkerPopup),
                    $('<label>', {for:'_cbdisableUrMarkerPopup', urceprefs:'marker-nodisable', title:I18n.t('urce.prefs.DisableUrMarkerPopupTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.DisableUrMarkerPopup')),
                    $('<br>'),
                    $('<div>', {class:'URCE-textFirst', urceprefs:'marker-nodisable'}).append(
                        $('<div>', {title:I18n.t('urce.prefs.UrMarkerPopupDelayTitle')}).text(I18n.t('urce.prefs.UrMarkerPopupDelay') + ': ').append(
                            $('<div>', {style:'display:inline;'}).append(
                                $('<div>', {class:'URCE-divDaysInline'}).append(
                                    $('<input>', {type:'number', id:'_numurMarkerPopupDelay', class:'URCE-daysInput urceSettingsNumberBox', urceprefs:'marker-nodisable', min:'1', max:'99', step:'1', value:_settings.urMarkerPopupDelay, title:I18n.t('urce.prefs.UrMarkerPopupDelayTitle')}),
                                    '* 100ms'
                                )
                            )
                        ),
                        $('<div>', {title:I18n.t('urce.prefs.UrMarkerPopupTimeoutTitle')}).text(I18n.t('urce.prefs.UrMarkerPopupTimeout') + ': ').append(
                            $('<div>', {style:'display:inline;'}).append(
                                $('<div>', {class:'URCE-divDaysInline'}).append(
                                    $('<input>', {type:'number', id:'_numurMarkerPopupTimeout', class:'URCE-daysInput urceSettingsNumberBox', urceprefs:'marker-nodisable', min:'1', max:'99', step:'1', value:_settings.urMarkerPopupTimeout, title:I18n.t('urce.prefs.UrMarkerPopupTimeoutTitle')}),
                                    I18n.t('datetime.distance_in_words.x_seconds.other', {count:30}).replace('30', '')
                                )
                            )
                        )
                    ),
                    $('<input>', {type:'checkbox', id:'_cbdoNotShowTagNameOnPill', urceprefs:'marker', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.DoNotShowTagNameOnPillTitle')}).prop('checked', _settings.doNotShowTagNameOnPill),
                    $('<label>', {for:'_cbdoNotShowTagNameOnPill', urceprefs:'marker', title:I18n.t('urce.prefs.DoNotShowTagNameOnPillTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.DoNotShowTagNameOnPill')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbreplaceTagNameWithEditorName', urceprefs:'marker', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.ReplaceTagNameWithEditorNameTitle')}).prop('checked', _settings.replaceTagNameWithEditorName),
                    $('<label>', {for:'_cbreplaceTagNameWithEditorName', urceprefs:'marker', title:I18n.t('urce.prefs.ReplaceTagNameWithEditorNameTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.ReplaceTagNameWithEditorName')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbunstackMarkers', urceprefs:'marker-nodisable', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.UnstackMarkersTitle')}).prop('checked', _settings.unstackMarkers),
                    $('<label>', {for:'_cbunstackMarkers', urceprefs:'marker-nodisable', title:I18n.t('urce.prefs.UnstackMarkersTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.UnstackMarkers')),
                    $('<br>'),
                    // -- Custom markers
                    $('<div>').append(
                        $('<div>', {class:'URCE-subHeading'}).text(I18n.t('urce.prefs.UseCustomMarkersFor') + ':').css({fontWeight:'600'}).append('<br>')
                    ).append(
                        $('<input>', {type:'checkbox', id:'_cbcustomMarkersBog', urceprefs:'marker-nodisable', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.BogTitle')}).prop('checked', _settings.customMarkersBog),
                        $('<label>', {for:'_cbcustomMarkersBog', urceprefs:'marker-nodisable', title:I18n.t('urce.prefs.BogTitle'), class:'URCE-label'}).text(I18n.t('urce.tags.Bog')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbcustomMarkersClosures', urceprefs:'marker-nodisable', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.ClosureTitle')}).prop('checked', _settings.customMarkersClosures),
                        $('<label>', {for:'_cbcustomMarkersClosures', urceprefs:'marker-nodisable', title:I18n.t('urce.prefs.ClosureTitle'), class:'URCE-label'}).text(I18n.t('urce.tags.Closure')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbcustomMarkersConstruction', urceprefs:'marker-nodisable', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.ConstructionTitle')}).prop('checked', _settings.customMarkersConstruction),
                        $('<label>', {for:'_cbcustomMarkersConstruction', urceprefs:'marker-nodisable', title:I18n.t('urce.prefs.ConstructionTitle'), class:'URCE-label'}).text(I18n.t('urce.tags.Construction')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbcustomMarkersDifficult', urceprefs:'marker-nodisable', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.DifficultTitle')}).prop('checked', _settings.customMarkersDifficult),
                        $('<label>', {for:'_cbcustomMarkersDifficult', urceprefs:'marker-nodisable', title:I18n.t('urce.prefs.DifficultTitle'), class:'URCE-label'}).text(I18n.t('urce.tags.Difficult')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbcustomMarkersEvents', urceprefs:'marker-nodisable', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.EventTitle')}).prop('checked', _settings.customMarkersEvents),
                        $('<label>', {for:'_cbcustomMarkersEvents', urceprefs:'marker-nodisable', title:I18n.t('urce.prefs.EventTitle'), class:'URCE-label'}).text(I18n.t('urce.tags.Event')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbcustomMarkersNotes', urceprefs:'marker-nodisable', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.NoteTitle')}).prop('checked', _settings.customMarkersNotes),
                        $('<label>', {for:'_cbcustomMarkersNotes', urceprefs:'marker-nodisable', title:I18n.t('urce.prefs.NoteTitle'), class:'URCE-label'}).text(I18n.t('urce.tags.Note')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbcustomMarkersRoadworks', urceprefs:'marker-nodisable', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.RoadworksTitle')}).prop('checked', _settings.customMarkersRoadworks),
                        $('<label>', {for:'_cbcustomMarkersRoadworks', urceprefs:'marker-nodisable', title:I18n.t('urce.prefs.RoadworksTitle'), class:'URCE-label'}).text(I18n.t('urce.tags.Roadworks')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbcustomMarkersWslm', urceprefs:'marker-nodisable', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.WslmTitle')}).prop('checked', _settings.customMarkersWslm),
                        $('<label>', {for:'_cbcustomMarkersWslm', urceprefs:'marker-nodisable', title:I18n.t('urce.prefs.WslmTitle'), class:'URCE-label'}).text(I18n.t('urce.tags.Wslm')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbcustomMarkersNativeSl', urceprefs:'marker-nodisable', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.NativeSpeedLimitsTitle')}).prop('checked', _settings.customMarkersNativeSl),
                        $('<label>', {for:'_cbcustomMarkersNativeSl', urceprefs:'marker-nodisable', title:I18n.t('urce.prefs.NativeSpeedLimitsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.NativeSpeedLimits')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbcustomMarkersCustom', urceprefs:'marker-nodisable', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.CustomTitle')}).prop('checked', _settings.customMarkersCustom),
                        $('<label>', {for:'_cbcustomMarkersCustom', urceprefs:'marker-nodisable', title:I18n.t('urce.prefs.CustomTitle'), class:'URCE-label'}).text(I18n.t('urce.common.Custom') + ': '),
                        $('<div>', {class:'URCE-divDaysInline'}).append(
                            $('<input>', {type:'text', id:'_textcustomMarkersCustomText', class:'urceSettingsTextBox', style:'width:100px; height:20px;', urceprefs:'marker-nodisable', value:_settings.customMarkersCustomText, title:I18n.t('urce.prefs.CustomTitle')})
                        )
                    )
                )
            ),
            // UR Filtering Preferences
            $('<fieldset>', {id:'urce-prefs-fieldset-ur-filtering-prefs', class:`URCE-field${urStyle}`}).append(
                $('<legend>', {id:'urce-prefs-legend-ur-filtering-prefs', class:`URCE-legend${urStyle}`}).append(
                    $('<i>', {class:'fa fa-fw fa-chevron-down URCE-chevron'}),
                    $('<span>', {class:'URCE-span'}).text(I18n.t('urce.prefs.UrFilteringPrefs'))
                ).click(function() {
                    $($(this).children()[0]).toggleClass('fa fa-fw fa-chevron-down');
                    $($(this).children()[0]).toggleClass('fa fa-fw fa-chevron-right');
                    $($(this).siblings()[0]).toggleClass('collapse');
                }),
                $('<div>', {class:'URCE-controls URCE-divCC'}).append(
                    $('<input>', {type:'checkbox', id:'_cbenableUrceUrFiltering', urceprefs:'filteringMaster', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.EnableUrceUrFilteringTitle')}).prop('checked', _settings.enableUrceUrFiltering),
                    $('<label>', {for:'_cbenableUrceUrFiltering', urceprefs:'filteringMaster', title:I18n.t('urce.prefs.EnableUrceUrFilteringTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.EnableUrceUrFiltering')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbhideOutsideEditableArea', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideOutsideEditableAreaTitle')}).prop('checked', _settings.hideOutsideEditableArea),
                    $('<label>', {for:'_cbhideOutsideEditableArea', urceprefs:'filtering', title:I18n.t('urce.prefs.HideOutsideEditableAreaTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.HideOutsideEditableArea')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbdoNotFilterTaggedUrs', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.DoNotFilterTaggedUrsTitle')}).prop('checked', _settings.doNotFilterTaggedUrs),
                    $('<label>', {for:'_cbdoNotFilterTaggedUrs', urceprefs:'filtering', title:I18n.t('urce.prefs.DoNotFilterTaggedUrsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.DoNotFilterTaggedUrs')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbdoNotHideSelectedUr', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.DoNotHideSelectedUrTitle')}).prop('checked', _settings.doNotHideSelectedUr),
                    $('<label>', {for:'_cbdoNotHideSelectedUr', urceprefs:'filtering', title:I18n.t('urce.prefs.DoNotHideSelectedUrTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.DoNotHideSelectedUr')),
                    $('<br>'),
                    $('<div>').append(
                        $('<input>', {type:'checkbox', id:'_cbdisableFilteringAboveZoom', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.DisableFilteringAboveZoomLevelTitle')}).prop('checked', _settings.disableFilteringAboveZoom),
                        $('<label>', {for:'_cbdisableFilteringAboveZoom', urceprefs:'filtering', class:'URCE-label', title:I18n.t('urce.prefs.DisableFilteringAboveZoomLevelTitle')}).text(I18n.t('urce.prefs.DisableFilteringAboveZoomLevel')),
                        $('<div>', {class:'URCE-divDaysInline'}).append(
                            $('<input>', {type:'number', id:'_numdisableFilteringAboveZoomLevel', class:'URCE-daysInput urceSettingsNumberBox', urceprefs:'filtering', min:'0', max:'10', step:'1', value:_settings.disableFilteringAboveZoomLevel, title:I18n.t('urce.prefs.DisableFilteringAboveZoomLevelTitle')})
                        )
                    ),
                    $('<div>').append(
                        $('<input>', {type:'checkbox', id:'_cbdisableFilteringBelowZoom', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.DisableFilteringBelowZoomLevelTitle')}).prop('checked', _settings.disableFilteringBelowZoom),
                        $('<label>', {for:'_cbdiableFilteringBelowZoom', urceprefs:'filtering', class:'URCE-label', title:I18n.t('urce.prefs.DisableFilteringBelowZoomLevelTitle')}).text(I18n.t('urce.prefs.DisableFilteringBelowZoomLevel')),
                        $('<div>', {class:'URCE-divDaysInline'}).append(
                            $('<input>', {type:'number', id:'_numdisableFilteringBelowZoomLevel', class:'URCE-daysInput urceSettingsNumberBox', urceprefs:'filtering', min:'0', max:'10', step:'1', value:_settings.disableFilteringBelowZoomLevel, title:I18n.t('urce.prefs.DisableFilteringBelowZoomLevelTitle')})
                        )
                    ),
                    $('<br>'),
                    // -- Lifecycle
                    $('<div>').append(
                        $('<div>', {class:'URCE-subHeading'}).text(I18n.t('urce.prefs.LifeCycleStatus') + ':').append('<br>')
                    ).append(
                        $('<input>', {type:'checkbox', id:'_cbhideWaiting', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideWaitingTitle')}).prop('checked', _settings.hideWaiting),
                        $('<label>', {for:'_cbhideWaiting', urceprefs:'filtering', title:I18n.t('urce.prefs.HideWaitingTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.HideWaiting')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideUrsCloseNeeded', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideUrsCloseNeededTitle')}).prop('checked', _settings.hideUrsCloseNeeded),
                        $('<label>', {for:'_cbhideUrsCloseNeeded', urceprefs:'filtering', title:I18n.t('urce.prefs.HideUrsCloseNeededTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.HideUrsCloseNeeded')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideUrsReminderNeeded', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideUrsReminderNeededTitle')}).prop('checked', _settings.hideUrsReminderNeeded),
                        $('<label>', {for:'_cbhideUrsReminderNeeded', urceprefs:'filtering', title:I18n.t('urce.prefs.HideUrsReminderNeededTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.HideUrsReminderNeeded')),
                        $('<br>')
                    ),
                    // -- Hide by status
                    $('<div>').append(
                        $('<div>', {class:'URCE-subHeading'}).text(I18n.t('urce.prefs.HideByStatus') + ':').append('<br>')
                    ).append(
                        $('<input>', {type:'checkbox', id:'_cbhideByStatusOpen', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByStatusOpenTitle')}).prop('checked', _settings.hideByStatusOpen),
                        $('<label>', {for:'_cbhideByStatusOpen', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByStatusOpenTitle'), class:'URCE-label'}).text(I18n.t('venues.update_requests.panel.action.open')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideByStatusClosed', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByStatusClosedTitle')}).prop('checked', _settings.hideByStatusClosed),
                        $('<label>', {for:'_cbhideByStatusClosed', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByStatusClosedTitle'), class:'URCE-label'}).text(I18n.t('urce.urStatus.Closed')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideByStatusNotIdentified', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByStatusNotIdentifiedTitle')}).prop('checked', _settings.hideByStatusNotIdentified),
                        $('<label>', {for:'_cbhideByStatusNotIdentified', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByStatusNotIdentifiedTitle'), class:'URCE-label'}).text(I18n.t('urce.urStatus.NotIdentified')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideByStatusSolved', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByStatusSolvedTitle')}).prop('checked', _settings.hideByStatusSolved),
                        $('<label>', {for:'_cbhideByStatusSolved', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByStatusSolvedTitle'), class:'URCE-label'}).text(I18n.t('venues.update_requests.panel.solved')),
                        $('<br>')
                    ),
                    // -- Hide by type
                    $('<div>').append(
                        $('<div>', {class:'URCE-subHeading'}).text(I18n.t('urce.prefs.HideByType') + ':').append('<br>')
                    ).append(
                        $('<input>', {type:'checkbox', id:'_cbhideByTypeBlockedRoad', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByTypeBlockedRoadTitle')}).prop('checked', _settings.hideByTypeBlockedRoad),
                        $('<label>', {for:'_cbhideByTypeBlockedRoad', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByTypeBlockedRoadTitle'), class:'URCE-label'}).text(I18n.t('update_requests.types.19')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideByTypeGeneralError', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByTypeGeneralErrorTitle')}).prop('checked', _settings.hideByTypeGeneralError),
                        $('<label>', {for:'_cbhideByTypeGeneralError', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByTypeGeneralErrorTitle'), class:'URCE-label'}).text(I18n.t('update_requests.types.10')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideByTypeIncorrectAddress', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByTypeIncorrectAddressTitle')}).prop('checked', _settings.hideByTypeIncorrectAddress),
                        $('<label>', {for:'_cbhideByTypeIncorrectAddress', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByTypeIncorrectAddressTitle'), class:'URCE-label'}).text(I18n.t('update_requests.types.7')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideByTypeIncorrectJunction', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByTypeIncorrectJunctionTitle')}).prop('checked', _settings.hideByTypeIncorrectJunction),
                        $('<label>', {for:'_cbhideByTypeIncorrectJunction', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByTypeIncorrectJunctionTitle'), class:'URCE-label'}).text(I18n.t('update_requests.types.12')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideByTypeIncorrectRoute', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByTypeIncorrectRouteTitle')}).prop('checked', _settings.hideByTypeIncorrectRoute),
                        $('<label>', {for:'_cbhideByTypeIncorrectRoute', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByTypeIncorrectRouteTitle'), class:'URCE-label'}).text(I18n.t('update_requests.types.8')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideByTypeIncorrectStreetPrefixOrSuffix', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByTypeIncorrectStreetPrefixOrSuffixTitle')}).prop('checked', _settings.hideByTypeIncorrectStreetPrefixOrSuffix),
                        $('<label>', {for:'_cbhideByTypeIncorrectStreetPrefixOrSuffix', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByTypeIncorrectStreetPrefixOrSuffixTitle'), class:'URCE-label'}).text(I18n.t('update_requests.types.22')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideByTypeIncorrectTurn', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByTypeIncorrectTurnTitle')}).prop('checked', _settings.hideByTypeIncorrectTurn),
                        $('<label>', {for:'_cbhideByTypeIncorrectTurn', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByTypeIncorrectTurnTitle'), class:'URCE-label'}).text(I18n.t('update_requests.types.6')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideByTypeMissingBridgeOverpass', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByTypeMissingBridgeOverpassTitle')}).prop('checked', _settings.hideByTypeMissingBridgeOverpass),
                        $('<label>', {for:'_cbhideByTypeMissingBridgeOverpass', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByTypeMissingBridgeOverpassTitle'), class:'URCE-label'}).text(I18n.t('update_requests.types.13')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideByTypeMissingExit', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByTypeMissingExitTitle')}).prop('checked', _settings.hideByTypeMissingExit),
                        $('<label>', {for:'_cbhideByTypeMissingExit', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByTypeMissingExitTitle'), class:'URCE-label'}).text(I18n.t('update_requests.types.15')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideByTypeMissingLandmark', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByTypeMissingLandmarkTitle')}).prop('checked', _settings.hideByTypeMissingLandmark),
                        $('<label>', {for:'_cbhideByTypeMissingLandmark', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByTypeMissingLandmarkTitle'), class:'URCE-label'}).text(I18n.t('update_requests.types.18')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideByTypeMissingOrInvalidSpeedLimit', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByTypeMissingOrInvalidSpeedLimitTitle')}).prop('checked', _settings.hideByTypeMissingOrInvalidSpeedLimit),
                        $('<label>', {for:'_cbhideByTypeMissingOrInvalidSpeedLimit', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByTypeMissingOrInvalidSpeedLimitTitle'), class:'URCE-label'}).text(I18n.t('update_requests.types.23')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideByTypeMissingRoad', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByTypeMissingRoadTitle')}).prop('checked', _settings.hideByTypeMissingRoad),
                        $('<label>', {for:'_cbhideByTypeMissingRoad', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByTypeMissingRoadTitle'), class:'URCE-label'}).text(I18n.t('update_requests.types.16')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideByTypeMissingRoundabout', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByTypeMissingRoundaboutTitle')}).prop('checked', _settings.hideByTypeMissingRoundabout),
                        $('<label>', {for:'_cbhideByTypeMissingRoundabout', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByTypeMissingRoundaboutTitle'), class:'URCE-label'}).text(I18n.t('update_requests.types.9')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideByTypeMissingStreetName', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByTypeMissingStreetNameTitle')}).prop('checked', _settings.hideByTypeMissingStreetName),
                        $('<label>', {for:'_cbhideByTypeMissingStreetName', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByTypeMissingStreetNameTitle'), class:'URCE-label'}).text(I18n.t('update_requests.types.21')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideByTypeTurnNotAllowed', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByTypeTurnNotAllowedTitle')}).prop('checked', _settings.hideByTypeTurnNotAllowed),
                        $('<label>', {for:'_cbhideByTypeTurnNotAllowed', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByTypeTurnNotAllowedTitle'), class:'URCE-label'}).text(I18n.t('update_requests.types.11')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideByTypeUndefined', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByTypeUndefinedTitle')}).prop('checked', _settings.hideByTypeUndefined),
                        $('<label>', {for:'_cbhideByTypeUndefined', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByTypeUndefinedTitle'), class:'URCE-label'}).text(I18n.t('urce.urTypes.Undefined')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideByTypeWazeAutomatic', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByTypeWazeAutomaticTitle')}).prop('checked', _settings.hideByTypeWazeAutomatic),
                        $('<label>', {for:'_cbhideByTypeWazeAutomatic', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByTypeWazeAutomaticTitle'), class:'URCE-label'}).text(I18n.t('urce.urTypes.WazeAutomatic')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideByTypeWrongDrivingDirection', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByTypeWrongDrivingDirectionTitle')}).prop('checked', _settings.hideByTypeWrongDrivingDirection),
                        $('<label>', {for:'_cbhideByTypeWrongDrivingDirection', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByTypeWrongDrivingDirectionTitle'), class:'URCE-label'}).text(I18n.t('update_requests.types.14')),
                        $('<br>')
                    ),
                    // -- Hide by tagged
                    $('<div>').append(
                        $('<div>', {class:'URCE-subHeading'}).text(I18n.t('urce.prefs.HideByTagged') + ':').append('<br>')
                    ).append(
                        $('<input>', {type:'checkbox', id:'_cbhideByTaggedBog', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByTaggedBogTitle')}).prop('checked', _settings.hideByTaggedBog),
                        $('<label>', {for:'_cbhideByTaggedBog', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByTaggedBogTitle'), class:'URCE-label'}).text(I18n.t('urce.tags.Bog')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideByTaggedClosure', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByTaggedClosureTitle')}).prop('checked', _settings.hideByTaggedClosure),
                        $('<label>', {for:'_cbhideByTaggedClosure', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByTaggedClosureTitle'), class:'URCE-label'}).text(I18n.t('urce.tags.Closure')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideByTaggedConstruction', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByTaggedConstructionTitle')}).prop('checked', _settings.hideByTaggedConstruction),
                        $('<label>', {for:'_cbhideByTaggedConstruction', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByTaggedConstructionTitle'), class:'URCE-label'}).text(I18n.t('urce.tags.Construction')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideByTaggedDifficult', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByTaggedDifficultTitle')}).prop('checked', _settings.hideByTaggedDifficult),
                        $('<label>', {for:'_cbhideByTaggedDifficult', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByTaggedDifficultTitle'), class:'URCE-label'}).text(I18n.t('urce.tags.Difficult')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideByTaggedEvent', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByTaggedEventTitle')}).prop('checked', _settings.hideByTaggedEvent),
                        $('<label>', {for:'_cbhideByTaggedEvent', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByTaggedEventTitle'), class:'URCE-label'}).text(I18n.t('urce.tags.Event')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideByTaggedNote', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByTaggedNoteTitle')}).prop('checked', _settings.hideByTaggedNote),
                        $('<label>', {for:'_cbhideByTaggedNote', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByTaggedNoteTitle'), class:'URCE-label'}).text(I18n.t('urce.tags.Note')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideByTaggedRoadworks', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByTaggedRoadworksTitle')}).prop('checked', _settings.hideByTaggedRoadworks),
                        $('<label>', {for:'_cbhideByTaggedRoadworks', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByTaggedRoadworksTitle'), class:'URCE-label'}).text(I18n.t('urce.tags.Roadworks')),
                        $('<br>'),
                        $('<input>', {type:'checkbox', id:'_cbhideByTaggedWslm', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByTaggedWslmTitle')}).prop('checked', _settings.hideByTaggedWslm),
                        $('<label>', {for:'_cbhideByTaggedWslm', urceprefs:'filtering', title:I18n.t('urce.prefs.HideByTaggedWslmTitle'), class:'URCE-label'}).text(I18n.t('urce.tags.Wslm')),
                        $('<br>')
                    ),
                    // -- Hide by age of submission
                    $('<div>').append(
                        $('<div>', {class:'URCE-subHeading'}).text(I18n.t('urce.prefs.HideByAgeOfSubmission') + ':').append('<br>')
                    ).append(
                        $('<div>').append(
                            $('<input>', {type:'checkbox', id:'_cbhideByAgeOfSubmissionLessThan', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByAgeOfSubmissionLessThanTitle')}).prop('checked', _settings.hideByAgeOfSubmissionLessThan),
                            $('<label>', {for:'_cbhideByAgeOfSubmissionLessThan', urceprefs:'filtering', class:'URCE-label', title:I18n.t('urce.prefs.HideByAgeOfSubmissionLessThanTitle')}).text(I18n.t('urce.common.LessThan')),
                            $('<div>', {class:'URCE-divDaysInline'}).append(
                                $('<input>', {type:'number', id:'_numhideByAgeOfSubmissionLessThanDaysOld', class:'URCE-daysInput urceSettingsNumberBox', urceprefs:'filtering', min:'0', max:'9999', step:'1', value:_settings.hideByAgeOfSubmissionLessThanDaysOld, title:I18n.t('urce.prefs.HideByAgeOfSubmissionLessThanTitle')}),
                                $('<div>', {class:'URCE-divDaysInline', urceprefs:'filtering'}).append(I18n.translations[I18n.currentLocale()].common.time.days.replace(/%{days} /gi, ''))
                            )
                        ),
                        $('<div>').append(
                            $('<input>', {type:'checkbox', id:'_cbhideByAgeOfSubmissionMoreThan', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByAgeOfSubmissionMoreThanTitle')}).prop('checked', _settings.hideByAgeOfSubmissionMoreThan),
                            $('<label>', {for:'_cbhideByAgeOfSubmissionMoreThan', urceprefs:'filtering', class:'URCE-label', title:I18n.t('urce.prefs.HideByAgeOfSubmissionMoreThanTitle')}).text(I18n.t('urce.common.MoreThan')),
                            $('<div>', {class:'URCE-divDaysInline'}).append(
                                $('<input>', {type:'number', id:'_numhideByAgeOfSubmissionMoreThanDaysOld', class:'URCE-daysInput urceSettingsNumberBox', urceprefs:'filtering', min:'0', max:'9999', step:'1', value:_settings.hideByAgeOfSubmissionMoreThanDaysOld, title:I18n.t('urce.prefs.HideByAgeOfSubmissionMoreThanTitle')}),
                                $('<div>', {class:'URCE-divDaysInline', urceprefs:'filtering'}).append(I18n.translations[I18n.currentLocale()].common.time.days.replace(/%{days} /gi, ''))
                            )
                        )
                    ),
                    // -- Hide by description, comments, following
                    $('<div>').append(
                        $('<div>', {class:'URCE-subHeading'}).text(I18n.t('urce.prefs.DescriptionCommentsFollowing') + ':').append('<br>')
                    ).append(
                        // -- -- Following / not following
                        $('<div>', {class:'URCE-textFirst', urceprefs:'filtering'}).append(
                            $('<div>').text(I18n.t('urce.common.Following') + ': ').append(
                                $('<div>', {style:'display:inline;'}).append(
                                    $('<input>', {type:'checkbox', id:'_cbhideFollowing', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideFollowingTitle')}).prop('checked', _settings.hideFollowing),
                                    $('<label>', {for:'_cbhideFollowing', urceprefs:'filtering', title:I18n.t('urce.prefs.HideFollowingTitle')}).text(I18n.t('urce.common.Following')),
                                    $('<input>', {type:'checkbox', id:'_cbhideNotFollowing', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideNotFollowingTitle')}).prop('checked', _settings.hideNotFollowing),
                                    $('<label>', {for:'_cbhideNotFollowing', urceprefs:'filtering', title:I18n.t('urce.prefs.HideNotFollowingTitle')}).text(I18n.t('urce.common.NotFollowing')),
                                )
                            ),
                            // -- -- With / without description
                            $('<div>').text(I18n.t('objects.venue.fields.description') + ': ').append(
                                $('<div>', {style:'display:inline;'}).append(
                                    $('<input>', {type:'checkbox', id:'_cbhideWithDescription', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideWithDescriptionTitle')}).prop('checked', _settings.hideWithDescription),
                                    $('<label>', {for:'_cbhideWithDescription', urceprefs:'filtering', title:I18n.t('urce.prefs.HideWithDescriptionTitle')}).text(I18n.t('urce.common.With')),
                                    $('<input>', {type:'checkbox', id:'_cbhideWithoutDescription', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideWithoutDescriptionTitle')}).prop('checked', _settings.hideWithoutDescription),
                                    $('<label>', {for:'_cbhideWithoutDescription', urceprefs:'filtering', title:I18n.t('urce.prefs.HideWithoutDescriptionTitle')}).text(I18n.t('urce.common.Without')),
                                )
                            ),
                            // -- -- With / without comments from me
                            $('<div>').text(I18n.t('urce.prefs.HideCommentsFromMe') + ': ').append(
                                $('<div>', {style:'display:inline;'}).append(
                                    $('<input>', {type:'checkbox', id:'_cbhideWithCommentsFromMe', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideWithCommentsFromMeTitle')}).prop('checked', _settings.hideWithCommentsFromMe),
                                    $('<label>', {for:'_cbhideWithCommentsFromMe', urceprefs:'filtering', title:I18n.t('urce.prefs.HideWithCommentsFromMeTitle')}).text(I18n.t('urce.common.With')),
                                    $('<input>', {type:'checkbox', id:'_cbhideWithoutCommentsFromMe', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideWithoutCommentsFromMeTitle')}).prop('checked', _settings.hideWithoutCommentsFromMe),
                                    $('<label>', {for:'_cbhideWithoutCommentsFromMe', urceprefs:'filtering', title:I18n.t('urce.prefs.HideWithoutCommentsFromMeTitle')}).text(I18n.t('urce.common.Without')),
                                )
                            ),
                            // -- -- First comment by me yes / no
                            $('<div>').text(I18n.t('urce.prefs.HideFirstCommentByMe') + ': ').append(
                                $('<div>', {style:'display:inline;'}).append(
                                    $('<input>', {type:'checkbox', id:'_cbhideFirstCommentByMe', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideFirstCommentByMeTitle')}).prop('checked', _settings.hideFirstCommentByMe),
                                    $('<label>', {for:'_cbhideFirstCommentByMe', urceprefs:'filtering', title:I18n.t('urce.prefs.HideFirstCommentByMeTitle')}).text(I18n.t('urce.common.Yes')),
                                    $('<input>', {type:'checkbox', id:'_cbhideFirstCommentNotByMe', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideFirstCommentNotByMeTitle')}).prop('checked', _settings.hideFirstCommentNotByMe),
                                    $('<label>', {for:'_cbhideFirstCommentNotByMe', urceprefs:'filtering', title:I18n.t('urce.prefs.HideFirstCommentNotByMeTitle')}).text(I18n.t('urce.common.No')),
                                )
                            ),
                            // -- -- Last comment by me yes / no
                            $('<div>').text(I18n.t('urce.prefs.HideLastCommentByMe') + ': ').append(
                                $('<div>', {style:'display:inline;'}).append(
                                    $('<input>', {type:'checkbox', id:'_cbhideLastCommentByMe', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideLastCommentByMeTitle')}).prop('checked', _settings.hideLastCommentByMe),
                                    $('<label>', {for:'_cbhideLastCommentByMe', urceprefs:'filtering', title:I18n.t('urce.prefs.HideLastCommentByMeTitle')}).text(I18n.t('urce.common.Yes')),
                                    $('<input>', {type:'checkbox', id:'_cbhideLastCommentNotByMe', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideLastCommentNotByMeTitle')}).prop('checked', _settings.hideLastCommentNotByMe),
                                    $('<label>', {for:'_cbhideLastCommentNotByMe', urceprefs:'filtering', title:I18n.t('urce.prefs.HideLastCommentNotByMeTitle')}).text(I18n.t('urce.common.No')),
                                )
                            ),
                            // -- -- Last comment by reporter yes / no
                            $('<div>').text(I18n.t('urce.prefs.HideLastCommentByReporter') + ': ').append(
                                $('<div>', {style:'display:inline;'}).append(
                                    $('<input>', {type:'checkbox', id:'_cbhideLastCommentByReporter', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideLastCommentByReporterTitle')}).prop('checked', _settings.hideLastCommentByReporter),
                                    $('<label>', {for:'_cbhideLastCommentByReporter', urceprefs:'filtering', title:I18n.t('urce.prefs.HideLastCommentByReporterTitle')}).text(I18n.t('urce.common.Yes')),
                                    $('<input>', {type:'checkbox', id:'_cbhideLastCommentNotByReporter', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideLastCommentNotByReporterTitle')}).prop('checked', _settings.hideLastCommentNotByReporter),
                                    $('<label>', {for:'_cbhideLastCommentNotByReporter', urceprefs:'filtering', title:I18n.t('urce.prefs.HideLastCommentNotByReporterTitle')}).text(I18n.t('urce.common.No')),
                                )
                            )
                        ),
                        // -- -- Less than / more than XX comments
                        $('<div>').append(
                            $('<input>', {type:'checkbox', id:'_cbhideByCommentCountLessThan', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByCommentCountLessThanTitle')}).prop('checked', _settings.hideByCommentCountLessThan),
                            $('<label>', {for:'_cbhideByCommentCountLessThan', urceprefs:'filtering', class:'URCE-label', title:I18n.t('urce.prefs.HideByCommentCountLessThanTitle')}).text(I18n.t('urce.common.LessThan')),
                            $('<div>', {class:'URCE-divDaysInline'}).append(
                                $('<input>', {type:'number', id:'_numhideByCommentCountLessThanNumber', class:'urceSettingsNumberBox', style:'width:36px; height:20px;', urceprefs:'filtering', min:'0', max:'9999', step:'1', value:_settings.hideByCommentCountLessThanNumber, title:I18n.t('urce.prefs.HideByCommentCountLessThanTitle')}),
                                $('<div>', {class:'URCE-divDaysInline', urceprefs:'filtering'}).append(I18n.t('urce.tabs.Comments').toLowerCase())
                            )
                        ),
                        $('<div>').append(
                            $('<input>', {type:'checkbox', id:'_cbhideByCommentCountMoreThan', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByCommentCountMoreThanTitle')}).prop('checked', _settings.hideByCommentCountMoreThan),
                            $('<label>', {for:'_cbhideByCommentCountMoreThan', urceprefs:'filtering', class:'URCE-label', title:I18n.t('urce.prefs.HideByCommentCountMoreThanTitle')}).text(I18n.t('urce.common.MoreThan')),
                            $('<div>', {class:'URCE-divDaysInline'}).append(
                                $('<input>', {type:'number', id:'_numhideByCommentCountMoreThanNumber', class:'urceSettingsNumberBox', style:'width:36px; height:20px;', urceprefs:'filtering', min:'0', max:'9999', step:'1', value:_settings.hideByCommentCountMoreThanNumber, title:I18n.t('urce.prefs.HideByCommentCountMoreThanTitle')}),
                                $('<div>', {class:'URCE-divDaysInline', urceprefs:'filtering'}).append(I18n.t('urce.tabs.Comments').toLowerCase())
                            )
                        ),
                        // -- -- Age of first comment less than / more than XX days old
                        $('<div>').append(
                            $('<input>', {type:'checkbox', id:'_cbhideByAgeOfFirstCommentLessThan', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByAgeOfFirstCommentLessThanTitle')}).prop('checked', _settings.hideByAgeOfFirstCommentLessThan),
                            $('<label>', {for:'_cbhideByAgeOfFirstCommentLessThan', urceprefs:'filtering', class:'URCE-label', title:I18n.t('urce.prefs.HideByAgeOfFirstCommentLessThanTitle')}).text(I18n.t('urce.prefs.HideByAgeOfFirstCommentLessThan')),
                            $('<div>', {class:'URCE-divDaysInline'}).append(
                                $('<input>', {type:'number', id:'_numhideByAgeOfFirstCommentLessThanDaysOld', class:'urceSettingsNumberBox', style:'width:36px; height:20px;', urceprefs:'filtering', min:'0', max:'9999', step:'1', value:_settings.hideByAgeOfFirstCommentLessThanDaysOld, title:I18n.t('urce.prefs.HideByAgeOfFirstCommentLessThanTitle')}),
                                $('<div>', {class:'URCE-divDaysInline', urceprefs:'filtering'}).append(I18n.translations[I18n.currentLocale()].common.time.days.replace(/%{days} /gi, ''))
                            )
                        ),
                        $('<div>').append(
                            $('<input>', {type:'checkbox', id:'_cbhideByAgeOfFirstCommentMoreThan', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByAgeOfFirstCommentMoreThanTitle')}).prop('checked', _settings.hideByAgeOfFirstCommentMoreThan),
                            $('<label>', {for:'_cbhideByAgeOfFirstCommentMoreThan', urceprefs:'filtering', class:'URCE-label', title:I18n.t('urce.prefs.HideByAgeOfFirstCommentMoreThanTitle')}).text(I18n.t('urce.prefs.HideByAgeOfFirstCommentMoreThan')),
                            $('<div>', {class:'URCE-divDaysInline'}).append(
                                $('<input>', {type:'number', id:'_numhideByAgeOfFirstCommentMoreThanDaysOld', class:'urceSettingsNumberBox', style:'width:36px; height:20px;', urceprefs:'filtering', min:'0', max:'9999', step:'1', value:_settings.hideByAgeOfFirstCommentMoreThanDaysOld, title:I18n.t('urce.prefs.HideByAgeOfFirstCommentMoreThanTitle')}),
                                $('<div>', {class:'URCE-divDaysInline', urceprefs:'filtering'}).append(I18n.translations[I18n.currentLocale()].common.time.days.replace(/%{days} /gi, ''))
                            )
                        ),
                        // -- -- Age of last comment less than / more than XX days old
                        $('<div>').append(
                            $('<input>', {type:'checkbox', id:'_cbhideByAgeOfLastCommentLessThan', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByAgeOfLastCommentLessThanTitle')}).prop('checked', _settings.hideByAgeOfLastCommentLessThan),
                            $('<label>', {for:'_cbhideByAgeOfLastCommentLessThan', urceprefs:'filtering', class:'URCE-label', title:I18n.t('urce.prefs.HideByAgeOfLastCommentLessThanTitle')}).text(I18n.t('urce.prefs.HideByAgeOfLastCommentLessThan')),
                            $('<div>', {class:'URCE-divDaysInline'}).append(
                                $('<input>', {type:'number', id:'_numhideByAgeOfLastCommentLessThanDaysOld', class:'urceSettingsNumberBox URCE-daysInput URCE-daysInput', urceprefs:'filtering', min:'0', max:'9999', step:'1', value:_settings.hideByAgeOfLastCommentLessThanDaysOld, title:I18n.t('urce.prefs.HideByAgeOfLastCommentLessThanTitle')}),
                                $('<div>', {class:'URCE-divDaysInline', urceprefs:'filtering'}).append(I18n.translations[I18n.currentLocale()].common.time.days.replace(/%{days} /gi, ''))
                            )
                        ),
                        $('<div>').append(
                            $('<input>', {type:'checkbox', id:'_cbhideByAgeOfLastCommentMoreThan', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByAgeOfLastCommentMoreThanTitle')}).prop('checked', _settings.hideByAgeOfLastCommentMoreThan),
                            $('<label>', {for:'_cbhideByAgeOfLastCommentMoreThan', urceprefs:'filtering', class:'URCE-label', title:I18n.t('urce.prefs.HideByAgeOfLastCommentMoreThanTitle')}).text(I18n.t('urce.prefs.HideByAgeOfLastCommentMoreThan')),
                            $('<div>', {class:'URCE-divDaysInline'}).append(
                                $('<input>', {type:'number', id:'_numhideByAgeOfLastCommentMoreThanDaysOld', class:'urceSettingsNumberBox', style:'width:36px; height:20px;', urceprefs:'filtering', min:'0', max:'9999', step:'1', value:_settings.hideByAgeOfLastCommentMoreThanDaysOld, title:I18n.t('urce.prefs.HideByAgeOfLastCommentMoreThanTitle')}),
                                $('<div>', {class:'URCE-divDaysInline', urceprefs:'filtering'}).append(I18n.translations[I18n.currentLocale()].common.time.days.replace(/%{days} /gi, ''))
                            )
                        ),
                        // -- -- Including / not including keyword
                        $('<div>').append(
                            $('<input>', {type:'checkbox', id:'_cbhideByKeywordIncluding', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByKeywordIncludingTitle')}).prop('checked', _settings.hideByKeywordIncluding),
                            $('<label>', {for:'_cbhideByKeywordIncluding', urceprefs:'filtering', class:'URCE-label', title:I18n.t('urce.prefs.HideByKeywordIncludingTitle')}).text(I18n.t('urce.prefs.HideByKeywordIncluding')),
                            $('<div>', {class:'URCE-divDaysInline'}).append(
                                $('<input>', {type:'text', id:'_texthideByKeywordIncludingKeyword', class:'urceSettingsTextBox', style:'width:75px; height:20px;', urceprefs:'filtering', value:_settings.hideByKeywordIncludingKeyword, title:I18n.t('urce.prefs.HideByKeywordIncludingTitle')})
                            )
                        ),
                        $('<div>').append(
                            $('<input>', {type:'checkbox', id:'_cbhideByKeywordNotIncluding', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByKeywordNotIncludingTitle')}).prop('checked', _settings.hideByKeywordNotIncluding),
                            $('<label>', {for:'_cbhideByKeywordNotIncluding', urceprefs:'filtering', class:'URCE-label', title:I18n.t('urce.prefs.HideByKeywordNotIncludingTitle')}).text(I18n.t('urce.prefs.HideByKeywordNotIncluding')),
                            $('<div>', {class:'URCE-divDaysInline'}).append(
                                $('<input>', {type:'text', id:'_texthideByKeywordNotIncludingKeyword', class:'urceSettingsTextBox', style:'width:75px; height:20px;', urceprefs:'filtering', value:_settings.hideByKeywordNotIncludingKeyword, title:I18n.t('urce.prefs.HideByKeywordNotIncludingTitle')})
                            )
                        ),
                        $('<div>', {style:'padding-left:15px; font-style:italic;'}).append(
                            $('<input>', {type:'checkbox', id:'_cbhideByKeywordCaseInsensitive', urceprefs:'filtering', class:'urceSettingsCheckbox', title:I18n.t('urce.prefs.HideByKeywordCaseInsensitiveTitle')}).prop('checked', _settings.hideByKeywordCaseInsensitive),
                            $('<label>', {for:'_cbhideByKeywordCaseInsensitive', urceprefs:'filtering', class:'URCE-label', title:I18n.t('urce.prefs.HideByKeywordCaseInsensitiveTitle')}).text(I18n.t('urce.prefs.HideByKeywordCaseInsensitive'))
                        )
                    )
                )
            ),
            // Common Preferences
            $('<fieldset>', {id:'urce-prefs-fieldset-common-prefs', class:`URCE-field${urStyle}`}).append(
                $('<legend>', {id:'urce-prefs-legend-common-prefs', class:`URCE-legend${urStyle}`}).append(
                    $('<i>', {class:'fa fa-fw fa-chevron-down URCE-chevron'}),
                    $('<span>', {class:'URCE-span'}).text(I18n.t('urce.prefs.CommonPrefs'))
                ).click(function() {
                    $($(this).children()[0]).toggleClass('fa fa-fw fa-chevron-down');
                    $($(this).children()[0]).toggleClass('fa fa-fw fa-chevron-right');
                    $($(this).siblings()[0]).toggleClass('collapse');
                }),
                $('<div>', {class:'URCE-controls URCE-textFirst'}).append(
                    $('<div>', {title:formatText(I18n.t('urce.prefs.ReminderDaysTitle')), class:'URCE-label', urceprefs:'common'}).append(I18n.t('urce.prefs.ReminderDays') + ': ').append(
                        $('<input>', {type:'number', id:'_numreminderDays', class:'URCE-daysInput urceSettingsNumberBox', urceprefs:'common', min:'0', max:'9999', step:'1', value:_settings.reminderDays, title:formatText(I18n.t('urce.prefs.ReminderDaysTitle'))})
                    ),
                    $('<div>', {title:formatText(I18n.t('urce.prefs.CloseDaysTitle')), class:'URCE-label', urceprefs:'common'}).append(I18n.t('urce.prefs.CloseDays') + ': ').append(
                        $('<input>', {type:'number', id:'_numcloseDays', class:'URCE-daysInput urceSettingsNumberBox', urceprefs:'common', min:'1', max:'9999', step:'1', value:_settings.closeDays, title:formatText(I18n.t('urce.prefs.CloseDaysTitle'))})
                    )
                )
            )
        );
        if (!isChecked('#_cbenableUrPillCounts'))
            $('[urceprefs=marker]').prop('disabled', true).addClass('urceDisabled');
        else
            $('[urceprefs=marker]').prop('disabled', false).removeClass('urceDisabled');
        if (!isChecked('#_cbenableUrceUrFiltering'))
            $('[urceprefs=filtering]').prop('disabled', true).addClass('urceDisabled');
        else
            $('[urceprefs=filtering]').prop('disabled', false).removeClass('urceDisabled');
        $('.urceSettingsCheckbox').change(function() {
            let otherSettingName = null;
            let settingName = $(this)[0].id.substr(3);
            let urcePrefs = $(this).attr('urceprefs');
            if (settingName === 'hideFollowing')
                otherSettingName = 'hideNotFollowing';
            if (settingName === 'hideNotFollowing')
                otherSettingName = 'hideFollowing';
            if (settingName === 'hideWithDescription')
                otherSettingName = 'hideWithoutDescription';
            if (settingName === 'hideWithoutDescription')
                otherSettingName = 'hideWithDescription';
            if (settingName === 'hideWithCommentsFromMe')
                otherSettingName = 'hideWithoutCommentsFromMe';
            if (settingName === 'hideWithoutCommentsFromMe')
                otherSettingName = 'hideWithCommentsFromMe';
            if (settingName === 'hideFirstCommentByMe')
                otherSettingName = 'hideFirstCommentNotByMe';
            if (settingName === 'hideFirstCommentNotByMe')
                otherSettingName = 'hideFirstCommentByMe';
            if (settingName === 'hideLastCommentByMe')
                otherSettingName = 'hideLastCommentNotByMe';
            if (settingName === 'hideLastCommentNotByMe')
                otherSettingName = 'hideLastCommentByMe';
            if (settingName === 'hideLastCommentByReporter')
                otherSettingName = 'hideLastCommentNotByReporter';
            if (settingName === 'hideLastCommentNotByReporter')
                otherSettingName = 'hideLastCommentByReporter';
            if (settingName === 'replaceNextWithDoneButton')
                otherSettingName = 'disableDoneNextButtons';
            if (settingName === 'disableDoneNextButtons')
                otherSettingName = 'replaceNextWithDoneButton';
            if (otherSettingName !== null) {
                if (this.checked && isChecked('#_cb' + otherSettingName)) {
                    _settings[otherSettingName] = false;
                    $(`#_cb${otherSettingName}`).prop('checked', false);
                }
            }
            if (settingName === 'disableDoneNextButtons') {
                if (this.checked)
                    $('#panel-container .content .navigation').css({'display':'none'});
                else
                    $('#panel-container .content .navigation').css({'display':'block'});
            }
            if (settingName === 'hideZoomOutLinks') {
                if (this.checked)
                    $('div#_divZoomOutLinks').hide();
                else
                    $('div#_divZoomOutLinks').show();
            }
            if (urcePrefs === 'markerMaster') {
                if (!this.checked)
                    $('[urceprefs=marker]').prop('disabled', true).addClass('urceDisabled');
                else
                    $('[urceprefs=marker]').prop('disabled', false).removeClass('urceDisabled');
            }
            if (urcePrefs === 'filteringMaster') {
                if (!this.checked)
                    $('[urceprefs=filtering]').prop('disabled', true).addClass('urceDisabled');
                else
                    $('[urceprefs=filtering]').prop('disabled', false).removeClass('urceDisabled');
            }
            _settings[settingName] = this.checked;
            saveSettingsToStorage();
            if ((urcePrefs.indexOf('marker') > -1) || (urcePrefs.indexOf('filtering') > -1))
                handleUrLayer('settingsToggle', null, null);
        });
        $('.urceSettingsNumberBox').on('change', function() {
            let settingName = $(this)[0].id.substr(4);
            let val = Math.abs(parseInt(this.value) || 0);
            let maxVal = (settingName === 'disableFilteringAboveZoomLevel' || settingName === 'disableFilteringBelowZoomLevel') ? 10 : 9999;
            val = Math.min(maxVal, Math.max(0, parseInt(val)));
            if ((val !== this.value) || (_settings[settingName] !== val)) {
                if (val !== this.value)
                    this.value = val;
                _settings[settingName] = val;
                saveSettingsToStorage();
                handleUrLayer('settingsToggle', null, null);
            }
        });
        $('.urceSettingsTextBox').on('change', function() {
            let settingName = $(this)[0].id.substr(5);
            let val = this.value.trim();
            if ((val !== this.value) || (_settings[settingName] !== val)) {
                if (val !== this.value)
                    this.value = val;
                _settings[settingName] = val;
                saveSettingsToStorage();
                if (settingName === 'tagEmail')
                    changeCommentList(_settings.commentList, false, true);
                else
                    handleUrLayer('settingsToggle', null, null);
            }
        });
    }

    function initTab() {
        logDebug('Firing initTab via callback.');
        initSettingsTab();
        initCommentsTab();
        $('a[href="#sidepanel-urc-e"]').prepend($('<img>', {class:'URCE-tabIcon', src:GM_info.script.icon}));
    }

    function initGui() {
        logDebug('Initializing GUI.');
        injectCss();
        $('body').append(
            $('<div>', {id:'urceAlertBox', class:'urceAlertBox'}),
            $('<div>', {id:'urceDiv'})
        );
        $('#urceAlertBox').append(
            $('<div>', {id:'urceAlertBoxHeader', class:'URCE-alertBox-header'})
        ).append(
            $('<div>', {id:'urceAlertBoxContent', class:'URCE-alertBox-content'})
        ).append(
            $('<div>', {id:'urceAlertBoxControls', class:'URCE-alertBox-controls'}).append(
                $('<span>', {id:'urceAlertTickBtn', class:'URCE-alertBox-controls-span-urceAlertTickBtn'}).append(
                    $('<i>', {class:'fa fa-check'})
                ).append(
                    $('<span>', {id:'urceAlertTickBtnCaption', class:'URCE-alertBox-controls-span-urceAlertTickBtnCaption'})
                )
            ).append(
                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
            ).append(
                $('<span>', {id:'urceAlertCrossBtn', class:'URCE-alertBox-controls-span-urceAlertCrossBtn'}).append(
                    $('<i>', {class:'fa fa-times'})
                ).append(
                    $('<span>', {id:'urceAlertCrossBtnCaption', class:'URCE-alertBox-controls-span-urceAlertCrossBtnCaption'})
                )
            )
        );
        let $content = $('<div>').append(
            $('<span>', {class:'URCE-spanTitle'}).text(I18n.t('urce.common.Title')),
            $('<span>', {class:'URCE-spanVersion'}).text(GM_info.script.version),
            '<ul class="nav nav-tabs">' +
            '<li class="active"><a data-toggle="tab" href="#panel-urce-comments" aria-expanded="true">' + I18n.t('urce.tabs.Comments') + '</a></li>' +
            '<li><a data-toggle="tab" href="#panel-urce-settings" aria-expanded="true">' + I18n.t('urce.tabs.Settings') + '</a></li>' +
            '</ul>',
            $('<div>', {class:'tab-content URCE-divTabs'}).append(
                $('<div>', {class:'tab-pane active', id:'panel-urce-comments'}),
                $('<div>', {class:'tab-pane', id:'panel-urce-settings'})
            )
        ).html();
        new WazeWrap.Interface.Tab('URC-E', $content, initTab, null);
        $('div#sidepanel-urc-e').width('300px');
        showScriptInfoAlert();
        return new Promise((resolve) => { resolve(); });
    }

    function initCommentLists() {
        logDebug('Initializing available comment lists.');
        return new Promise(async (resolve) => {
            let errorText, data;
            try {
                data = await $.getJSON(`https://sheets.googleapis.com/v4/spreadsheets/${URCE_SPREADSHEET_ID}/values/CommentLists!A3:G?key=${URCE_API_KEY}`).fail((response) => {
                    errorText = 'Spreadsheet call failed. Code: ' + response.status + ' - Text: ' + response.responseText;
                });
            }
            catch(error) {
                if (!errorText)
                    errorText = 'Spreadsheet call failed. Code: ' + error.status + ' - Text: ' + error.responseText;
            }
            if (data && data.values.length > 0) {
                const EXPECTED_FIELD_NAMES = ['idx', 'name', 'status', 'type', 'oldVarName', 'Prefix', 'listOwner'];
                let ssFieldNames;
                let checkFieldNames = (fldName) => ssFieldNames.indexOf(fldName) > -1;
                for (let entryIdx = 0; entryIdx < data.values.length; entryIdx++) {
                    if (entryIdx === 0) {
                        if (SCRIPT_VERSION < data.values[entryIdx][0]) {
                            errorText = 'updateRequired' + data.values[entryIdx][0];
                            break;
                        }
                    }
                    else if (entryIdx === 1) {
                        ssFieldNames = data.values[entryIdx].map((fldName) => fldName.trim());
                        if (ssFieldNames.length !== EXPECTED_FIELD_NAMES.length)
                            errorText = 'Expected ' + EXPECTED_FIELD_NAMES.length + ' columns in comment lists data. Spreadsheet returned ' + ssFieldNames.length + '.';
                        else if (!EXPECTED_FIELD_NAMES.every((fldName) => checkFieldNames(fldName)))
                            errorText = 'Script expected to see the following column names in the comment definition spreadsheet:\n' + EXPECTED_FIELD_NAMES.join(', ') + '\nHowever, the spreadsheet returned these:\n' + ssFieldNames.join(', ');
                        if (errorText)
                            break;
                    }
                    else {
                        let output = Object.create(null);
                        for (let valIdx = 0; valIdx < data.values[entryIdx].length; valIdx++) {
                            if (ssFieldNames[valIdx] === 'idx')
                                output[ssFieldNames[valIdx]] = parseInt(data.values[entryIdx][valIdx]);
                            else if (ssFieldNames[valIdx] === 'Prefix')
                                output.gSheetRange = data.values[entryIdx][valIdx] + '_Output_(do_not_edit)!A1:A';
                            else
                                output[ssFieldNames[valIdx]] = data.values[entryIdx][valIdx];
                        }
                        _commentLists.push(output);
                    }
                }
                if (!errorText)
                    _commentLists.sort(dynamicSort('name'));
            }
            else
                errorText = errorText || 'No lists available.';
            if (errorText)
                logWarning(errorText);
            if (errorText && (STATIC_ONLY_USERS.indexOf(W.model.loginManager.user.userName) > -1)) {
                _commentLists.push({idx:1, name:'Custom', status:'enabled', type:'static', oldVarName:'Custom', listOwner:'Custom', gSheetRange:''});
                _commentLists.push({idx:3, name:'USA - SER', status:'enabled', type:'static', oldVarName:'USA_Southeast', listOwner:'itzwolf', gSheetRange:''});
                return resolve({error:undefined});
            }
            resolve({error:errorText});
        });
    }

    function initAutoSwitchArrays() {
        logDebug('Initializing auto switch arrays.');
        return new Promise(async (resolve) => {
            let errorText, data;
            try {
                data = await $.getJSON(`https://sheets.googleapis.com/v4/spreadsheets/${URCE_SPREADSHEET_ID}/values/CommentLists_AutoSwitch!A3:ZZ?majorDimension=COLUMNS&key=${URCE_API_KEY}`).fail((response) => {
                    errorText = 'Spreadsheet call failed. Code: ' + response.status + ' - Text: ' + response.responseText;
                });
            } catch(error) {
                if (!errorText)
                    errorText = 'Spreadsheet call failed. Code: ' + error.status + ' - Text: ' + error.responseText;
            }
            if (data && data.values.length > 0) {
                for (let entryIdx = 0; entryIdx < data.values.length; entryIdx++) {
                    if (entryIdx === 0 && SCRIPT_VERSION < data.values[entryIdx][0]) {
                        errorText = 'updateRequired|' + data.values[entryIdx][0];
                        break;
                    }
                    if (data.values[entryIdx].length < 4)
                        continue;
                    let commentListNum = parseInt(data.values[entryIdx][2]);
                    for (let idx = 3; idx < data.values[entryIdx].length; idx++) {
                        let values = data.values[entryIdx][idx].split('.');
                        let country = values[1];
                        let state = (values[0] === 'state') ? values[2] : null;
                        if ((values[0] === 'state') && (!_autoSwitchStates[country]))
                            _autoSwitchStates[country] = {};
                        if (values[0] === 'state')
                            _autoSwitchStates[country][state] = commentListNum;
                        if ((values[0] === 'country') && (!_autoSwitchCountries[country]))
                            _autoSwitchCountries[country] = commentListNum;
                    }
                }
            }
            else
                errorText = errorText || 'No autoswitch data available';
            if (errorText)
                logWarning(errorText);
            if (errorText && (STATIC_ONLY_USERS.indexOf(W.model.loginManager.user.userName) > -1))
                return resolve({error:undefined});
            resolve({error:errorText});
        });
    }

    async function initFinish(urId) {
        if (_initUrIdInUrlTo !== undefined)
            window.clearTimeout(_initUrIdInUrlTo);
        if (_initUrIdInUrlObserver && _initUrIdInUrlObserver.isObserving) {
            _initUrIdInUrlObserver.isObserving = false;
            _initUrIdInUrlObserver.disconnect();
        }
        maskBoxes(null, true, 'init', (urId > 0));
        await initBackgroundTasks();
        if (W.model.mapUpdateRequests.getObjectArray().length > _markerCountOnInit)
            await handleUrLayer('init_end', null, null);
        _markerCountOnInit = -1;
        logDebug('UR ' + urId + ' marker in URL. Re-opening.');
        openUrPanel(urId);
    }

    function initCheckForUrPanel(urId, tries) {
        if (tries > 150)
            return logWarning('UR ' + urId + ' found in URL, but UR panel failed to open.');
        else if ($('#panel-container').children().length === 0) {
            if ($(`.map-problem.user-generated[data-id="${urId}"]`).length > 0)
                openUrPanel(urId);
            else
                _initUrIdInUrlTo = window.setTimeout(initCheckForUrPanel, 100, urId, ++tries);
        }
    }

    async function init() {
        log('Initializing.');
        let urIdInUrl = parseInt(location.search.split('mapUpdateRequest=')[1]);
        _wmeUserId = W.loginManager.user.id;
        loadSettingsFromStorage();
        let loadTranslationsError = await loadTranslations();
        let initCommentListsError = await initCommentLists();
        let initAutoSwitchArraysError = await initAutoSwitchArrays();
        await initGui();
        let errorText = loadTranslationsError.error || initCommentListsError.error || initAutoSwitchArraysError.error || undefined;
        if (!errorText) {
            maskBoxes(I18n.t('urce.prompts.WaitingOnInit') + '.<br>' + I18n.t('urce.common.PleaseWait') + '.', false, 'init', ($('#panel-container').children().length > 0));
            let buildCommentListResult = await buildCommentList(undefined, 'init');
            if (buildCommentListResult.error)
                handleError(buildCommentListResult.error, buildCommentListResult.static, buildCommentListResult.phase, (urIdInUrl > 0));
            else if (!urIdInUrl)
                await initBackgroundTasks();
            window.addEventListener("beforeunload", () => {
                saveSettingsToStorage();
            }, false);
            log('Fully initialized in ' + Math.round(performance.now() - LOAD_BEGIN_TIME) + ' ms.');
            if (urIdInUrl > 0) {
                if ($('#panel-container').children().length === 0) {
                    logDebug('urId ' + urIdInUrl + ' found in URL, but the UR Panel has not shown up yet. Waiting.');
                    _initUrIdInUrlObserver = new MutationObserver((mutations) => {
                        mutations.forEach((mutation) => {
                            if (mutation.type === 'attributes' && $(mutation.target.parentNode).is('#panel-container') && $(mutation.target).hasClass('show')) {
                                return initFinish(urIdInUrl);
                            }
                        });
                    });
                    _initUrIdInUrlObserver.observe(document.getElementById('panel-container'), { childList: true, attributes: true, attributeOldValue: true, characterData: true, characterDataOldValue: true, subtree: true });
                    _initUrIdInUrlObserver.isObserving = true;
                    _initUrIdInUrlTo = window.setTimeout(initCheckForUrPanel, 100, urIdInUrl, 1);
                }
                else
                    initFinish(urIdInUrl);
            }
            else {
                if (W.model.mapUpdateRequests.getObjectArray().length > _markerCountOnInit)
                    await handleUrLayer('init_end', null, null);
                _markerCountOnInit = -1;
                maskBoxes(null, true, 'init', (urIdInUrl > 0));
            }
        }
        else
            handleError(errorText, false, 'init', (urIdInUrl > 0))
    }

    function bootstrap(tries) {
        if (W && W.map && W.model && $ && WazeWrap.Ready) {
            log('Bootstrapping.');
            init();
        }
        else if (tries < 1000) {
            logDebug('Bootstrap failed. Retrying ' + tries + ' of 1000');
            setTimeout(bootstrap, 200, ++tries);
        }
        else
            logError('Bootstrap timed out waiting for WME to become ready.');
    }

    bootstrap(1);

    function loadTranslations() {
        logDebug('Loading translations.');
        return new Promise(async (resolve) => {
            let errorText, data;
            try {
                data = await $.getJSON(`https://sheets.googleapis.com/v4/spreadsheets/${URCE_SPREADSHEET_ID}/values/Script_Translations!A3:AA?key=${URCE_API_KEY}`).fail((response) => {
                    errorText = 'Spreadsheet call failed. Code: ' + response.status + ' - Text: ' + response.responseText;
                });
            }
            catch(error) {
                if (!errorText)
                    errorText = 'Spreadsheet call failed. Code: ' + error.status + ' - Text: ' + error.responseText;
            }
            let translationLocales = [];
            let translations = {};
            if (data && data.values.length > 0) {
                for (let entryIdx = 0; entryIdx < data.values.length; entryIdx++) {
                    if (entryIdx === 0) {
                        if (SCRIPT_VERSION < data.values[entryIdx][0]) {
                            errorText = 'updateRequired|' + data.values[entryIdx][0];
                            break;
                        }
                    }
                    else if (entryIdx === 1) {
                        for (let idx = 0; idx < data.values[entryIdx].length; idx++) {
                            if (idx === 0)
                                continue;
                            else {
                                translationLocales.push(data.values[entryIdx][idx].trim());
                                translations[data.values[entryIdx][idx].trim()] = {};
                            }
                        }
                    }
                    else {
                        let translationDefinition = [];
                        for (let valIdx = 0; valIdx < data.values[entryIdx].length; valIdx++) {
                            if (valIdx === 0)
                                translationDefinition = data.values[entryIdx][valIdx].split('.');
                            else {
                                let translationLocale = translationLocales[(valIdx-1)];
                                let translationDef0 = translationDefinition[0];
                                let translationDef1 = translationDefinition[1];
                                if (typeof translations[translationLocale][translationDef0] === 'undefined')
                                    translations[translationLocale][translationDef0] = {};
                                translations[translationLocale][translationDef0][translationDef1] = data.values[entryIdx][valIdx].replace('$SCRIPT_AUTHOR$', SCRIPT_AUTHOR).replace(/\\[r|n]+/gmi, '\n');
                            }
                        }
                    }
                }
            }
            else
                errorText = errorText || 'No translations available.';
            if (errorText || !data || (data.values.length < 1)) {
                translations = {
                    "en": {
                        "commentsTab": {
                            "ZoomOutLink1": "Zoom out 0 & close UR",
                            "ZoomOutLink1Title": "Zooms all the way out and closes the UR panel.",
                            "ZoomOutLink2": "Zoom out 2 & close UR",
                            "ZoomOutLink2Title": "Zooms out to level 2 and closes the UR panel.",
                            "ZoomOutLink3": "Zoom out 3 & close UR",
                            "ZoomOutLink3Title": "Zooms out to level 3 and closes the UR panel."
                        },
                        "common": {
                            "All": "All",
                            "CommentList": "Comment List",
                            "Custom": "Custom",
                            "Description": "Description",
                            "DoubleClickTitle": "Double click here to send this comment",
                            "ErrorGeneric": "An error has occurred within URC-E. Please contact " + SCRIPT_AUTHOR + " via Discord or PM.",
                            "ErrorHeader": "URC-E Error",
                            "Following": "Following",
                            "LessThan": "Less than",
                            "List": "List",
                            "ListOwner": "List owner",
                            "Loading": "Loading",
                            "MoreThan": "More than",
                            "No": "No",
                            "NotFollowing": "Not following",
                            "PleaseWait": "Please wait",
                            "Style": "Style",
                            "Title": "URComment-Enhanced",
                            "Type": "Type",
                            "With": "With",
                            "Without": "Without",
                            "Yes": "Yes"
                        },
                        "mouseOver": {
                            "CenterInCurrentTab": "Center in current tab",
                            "FirstComment": "First comment",
                            "LastComment": "Last comment",
                            "MarkedAs": "Marked as",
                            "NoneByMe": "none by me",
                            "OpenInNewLivemapTab": "Open in new Livemap tab",
                            "OpenInNewTab": "Open in new tab",
                            "ReporterHasCommented": "Reporter has commented",
                            "ViaLivemap": "via Livemap"
                        },
                        "prefs": {
                            "DefaultList": "Default list",
                            "DefaultListTitle": "Select the custom list you would like to use. CommentTeam is the default. If you would like your comment list built into this script or have suggestions on the CommentTeam list, please contact " + SCRIPT_AUTHOR + " on Discord or via PM.",
                            "CommentListStyleTitle": "Select the style you would like the URC-E panel to be displayed in. This only affects the look of the tab, no functionality is changed.",
                            "SpreadsheetLink": "Spreadsheet",
                            "SpreadsheetLinkTitle": "Click here to view the URC-E spreadsheet.",
                            "StyleDefault": "Default",
                            "StyleUrStyle": "UR Style",
                            "TagEmail": "Tag email",
                            "TagEmailTitle": "Some comment lists have specific comments that use a replacement tag.\nThe replacement tag is used to specify an email address to send correspondence to.\nIf you are setup to use one of these email addresses, please specify it here. If not, leave it blank.",
                            "AutoSwitchCommentList": "Automatically switch comment lists",
                            "AutoSwitchCommentListTitle": "Automatically switch to the comment list designated for the area the UR is in, if there is a list associated with the area.\nOpening a UR in an area that does not have a list associated will use the \"Comment List\" you have selected above.",
                            "UrcePrefs": "URC-E Preferences",
                            "AutoCenterOnUr": "Auto center on UR",
                            "AutoCenterOnUrTitle": "Auto center the map to the selected UR at the current map zoom level when the UR has comments and the zoom level is less than 4.",
                            "AutoClickOpenSolvedNi": "Auto click open, solved or not identified",
                            "AutoClickOpenSolvedNiTitle": "Suppress the message about recent pending questions to the reporter and then, depending on the choice set for that comment, automatically select Open, Solved or Not Identified.",
                            "AutoCloseUrPanel": "Auto close UR panel",
                            "AutoCloseUrPanelTitle": "Automatically close the UR panel after you click send on a comment that does not require saving.",
                            "AutoSaveAfterSolvedOrNiComment": "Auto save after solved or NI comment",
                            "AutoSaveAfterSolvedOrNiCommentTitle": "If 'Auto Click Open, Solved or Not Identified' is also checked, this will automatically click the save button after you click send on a comment that set the UR to Solved or Not Identified.",
                            "AutoSendReminders": "Auto send reminders",
                            "AutoSendRemindersTitle": "Automatically send the reminder comment to the URs in the map window (as you pan around) you were the last to comment on and it has reached the days specified in 'Reminder Days'.",
                            "AutoSendRemindersWarning": "WARNING",
                            "AutoSendRemindersWarningTitle": "AUTOMATICALLY SEND REMINDERS at the reminder days setting.\nThis only happens when they are visible on your screen.\n\nNOTE: When using this feature you should not leave URs open unless you asked a question\nthat needs a response from the reporter, as this script will send reminders to all open URs\nafter 'Reminder days'.",
                            "AutoSetNewUrComment": "Auto set new UR comment",
                            "AutoSetNewUrCommentTitle": "Automatically set the default UR comment for the UR type on new (do not already have comments) URs.",
                            "AutoSetReminderUrComment": "Auto set reminder UR comment",
                            "AutoSetReminderUrCommentTitle": "Automatically set the UR reminder comment for URs that are older than the 'Reminder days' setting and have only one comment.",
                            "AutoSwitchToUrCommentsTab": "Auto switch to the URC-E tab",
                            "AutoSwitchToUrCommentsTabTitle": "Automatically switch to the URComments-Enhanced tab when opening a UR. When the UR panel is closed you will be switched back to your previous tab.",
                            "AutoZoomInOnNewUr": "Auto zoom in on new UR",
                            "AutoZoomInOnNewUrTitle": "Automatically zoom in when opening new (no comments) URs and when sending reminders.",
                            "AutoZoomOutAfterComment": "Auto zoom out after comment",
                            "AutoZoomOutAfterCommentTitle": "Automatically zoom the map back to the previous zoom after clicking clicking send on a UR comment.",
                            "DisableDoneNextButtons": "Disable done / next buttons",
                            "DisableDoneNextButtonsTitle": "Disable the done / next buttons at the bottom of the UR panel.",
                            "ReplaceNextWithDoneButton": "Replace Next UR button with Done button",
                            "ReplaceNextWithDoneButtonTitle": "Replace the Next Update Request button with a Done button.",
                            "DoubleClickLinkNiComments": "Double click link - NI comments",
                            "DoubleClickLinkNiCommentsTitle": "Add an image (extra link) to the 'not identified' comments. When double clicked it will automatically set and send the UR comment of the one you double clicked, and then launch all of the other options that are enabled.",
                            "DoubleClickLinkOpenComments": "Double click link - Open comments",
                            "DoubleClickLinkOpenCommentsTitle": "Add an image (extra link) to the 'open' comments. When double clicked it will automatically set and send the UR comment of the one you double clicked, and then launch all of the other options that are enabled.",
                            "DoubleClickLinkSolvedComments": "Double click link - Solved comments",
                            "DoubleClickLinkSolvedCommentsTitle": "Add an image (extra link) to the 'solved' comments. When double clicked it will automatically set and send the UR comment of the one you double clicked, and then launch all of the other options that are enabled.",
                            "HideZoomOutLinks": "Hide zoom out links",
                            "HideZoomOutLinksTitle": "Hide the zoom out links on the comments tab.",
                            "UnfollowUrAfterSend": "Unfollow UR after send",
                            "UnfollowUrAfterSendTitle": "Unfollow the UR after sending a comment.",
                            "UrMarkerPrefs": "UR Marker Preferences",
                            "EnableUrPillCounts": "Enable UR pill counts",
                            "EnableUrPillCountsTitle": "Enable or disable the pill with UR counts on the map marker.",
                            "DisableUrMarkerPopup": "Disable UR marker popup",
                            "DisableUrMarkerPopupTitle": "Do not show the UR popup tooltip when you mouse over a UR marker.",
                            "UrMarkerPopupDelay": "UR marker popup delay",
                            "UrMarkerPopupDelayTitle":"The number of milliseconds (* 100) to delay before the UR marker tooltip will be displayed.",
                            "UrMarkerPopupTimeout": "UR marker popup timeout",
                            "UrMarkerPopupTimeoutTitle": "Specify the number of seconds to leave the UR marker tooltip displayed, unless you are moused over the tooltip itself.",
                            "DoNotShowTagNameOnPill": "Don't show tag name on pill",
                            "DoNotShowTagNameOnPillTitle": "Do not show the tag name on the pill where there is a tag. Example: [NOTE]",
                            "ReplaceTagNameWithEditorName": "Replace tag name with editor name",
                            "ReplaceTagNameWithEditorNameTitle": "When a UR has the logged in editors name in the description or any of the comments of the UR (not the name Waze automatically adds when commenting), replace the tag type with the editors name.",
                            "UnstackMarkers": "Unstack markers",
                            "UnstackMarkersTitle": "Attempt to unstack markers by offsetting them. Similar to how URO+ unstacks markers.",
                            "UseCustomMarkersFor": "Use Custom Markers for",
                            "BogTitle": "Replace default UR marker with custom marker for the URs with '[BOG]' (boots on ground) / '[BOTG]' (boots on the ground) in the description or comments.",
                            "ClosureTitle": "Replace default UR marker with custom marker for the URs with '[CLOSURE]' in the description or comments.",
                            "ConstructionTitle": "Replace default UR marker with custom marker for the URs with '[CONSTRUCTION]' in the description or comments.",
                            "DifficultTitle": "Replace default UR marker with custom marker for the URs with '[DIFFICULT]' in the description or comments.",
                            "EventTitle": "Replace default UR marker with custom marker for the URs with '[EVENT]' in the description or comments.",
                            "NoteTitle": "Replace default UR marker with custom marker for the URs with '[NOTE]' in the description or comments.",
                            "RoadworksTitle": "Replace default UR marker with custom marker for the URs with '[ROADWORKS]' in the description or comments. Used in the UK.",
                            "WslmTitle": "Waze Speed Limit Marker",
                            "NativeSpeedLimits": "Native speed limits",
                            "NativeSpeedLimitsTitle": "Replace default UR marker with custom marker for the URs with 'speed limit' type.",
                            "CustomTitle": "Replace default UR marker with custom marker for the URs with the text in the box to the right in the description or comments.",
                            "UrFilteringPrefs": "UR Filtering Preferences",
                            "EnableUrceUrFiltering": "Enable URC-E UR filtering",
                            "EnableUrceUrFilteringTitle": "Enable or disable URComments-Enhanced built-in UR filtering.",
                            "HideOutsideEditableArea": "Hide outside editable area",
                            "HideOutsideEditableAreaTitle": "Hide URs outside your editable area.",
                            "DoNotFilterTaggedUrs": "Do not filter tagged URs",
                            "DoNotFilterTaggedUrsTitle": "Do not filter URs that are tagged with a [] tag. Example: [NOTE]",
                            "DoNotHideSelectedUr": "Do not hide selected UR",
                            "DoNotHideSelectedUrTitle": "Do not hide a UR if it is currently being selected.",
                            "HideByType": "Hide by type",
                            "HideByTypeBlockedRoadTitle": "Hide all blocked road URs.",
                            "HideByTypeGeneralErrorTitle": "Hide all general error URs.",
                            "HideByTypeIncorrectAddressTitle": "Hide all incorrect address URs.",
                            "HideByTypeIncorrectJunctionTitle": "Hide all incorrect junction URs.",
                            "HideByTypeIncorrectRouteTitle": "Hide all incorrect route URs.",
                            "HideByTypeIncorrectStreetPrefixOrSuffixTitle": "Hide all incorrect street prefix or suffix URs.",
                            "HideByTypeIncorrectTurnTitle": "Hide all incorrect turn URs.",
                            "HideByTypeMissingBridgeOverpassTitle": "Hide all missing bridge overpass URs.",
                            "HideByTypeMissingExitTitle": "Hide all missing exit URs.",
                            "HideByTypeMissingLandmarkTitle": "Hide all missing landmark URs.",
                            "HideByTypeMissingOrInvalidSpeedLimitTitle": "Hide all missing or invalid speed limit URs.",
                            "HideByTypeMissingRoadTitle": "Hide all missing road URs.",
                            "HideByTypeMissingRoundaboutTitle": "Hide all missing roundabout URs.",
                            "HideByTypeMissingStreetNameTitle": "Hide all missing street name URs.",
                            "HideByTypeTurnNotAllowedTitle": "Hide all turn not allowed URs.",
                            "HideByTypeUndefinedTitle": "Hide all undefined URs.",
                            "HideByTypeWazeAutomaticTitle": "Hide all Waze automatic URs.",
                            "HideByTypeWrongDrivingDirectionTitle": "Hide all wrong driving direction URs.",
                            "HideByTagged": "Hide by tagged",
                            "HideByTaggedBogTitle": "Hide all URs with [BOG] (boots on ground) / [BOTG] (boots on the ground) in description or comments.",
                            "HideByTaggedClosureTitle": "Hide all URs with [CLOSURE] in description or comments.",
                            "HideByTaggedConstructionTitle": "Hide all URs with [CONSTRUCTION] in description or comments.",
                            "HideByTaggedDifficultTitle": "Hide all URs with [DIFFICULT] in description or comments.",
                            "HideByTaggedEventTitle": "Hide all URs with [EVENT] in description or comments.",
                            "HideByTaggedNoteTitle": "Hide all URs with [NOTE] in description or comments.",
                            "HideByTaggedRoadworksTitle": "Hide all URs with [ROADWORKS] in description or comments. Used in the UK.",
                            "HideByTaggedWslmTitle": "Hide all URs with [WSLM] in description or comments.",
                            "HideByStatus": "Hide by status",
                            "HideByStatusOpenTitle": "Hide all open URs.",
                            "HideByStatusClosedTitle": "Hide all closed (solved and not identified) URs.",
                            "HideByStatusNotIdentifiedTitle": "Hide all closed as not identified URs.",
                            "HideByStatusSolvedTitle": "Hide all closed as solved URs.",
                            "HideByAgeOfSubmission": "Hide by age of submission",
                            "HideByAgeOfSubmissionLessThanTitle": "Hide URs that were originally created less than specified number of days ago.",
                            "HideByAgeOfSubmissionMoreThanTitle": "Hide URs that were originally created more than specified number of days ago.",
                            "DescriptionCommentsFollowing": "Hide by description, comment, following",
                            "HideFollowingTitle": "Hide URs you are following.",
                            "HideNotFollowingTitle": "Hide URs you are not following.",
                            "HideWithDescriptionTitle": "Hide URs that have a description.",
                            "HideWithoutDescriptionTitle": "Hide URs that do not have a description.",
                            "HideCommentsFromMe": "Comments from me",
                            "HideWithCommentsFromMeTitle": "Hide URs you have commented on.",
                            "HideWithoutCommentsFromMeTitle": "Hide URs you have not commented on.",
                            "HideFirstCommentByMe": "First comment by me",
                            "HideFirstCommentByMeTitle": "Hide URs where you were the first person to comment.",
                            "HideFirstCommentNotByMeTitle": "Hide URs where someone else was the first person to comment.",
                            "HideLastCommentByMe": "Last comment by me",
                            "HideLastCommentByMeTitle": "Hide URs where you are the last person to comment.",
                            "HideLastCommentNotByMeTitle": "Hide URs where someone else is the last person to comment.",
                            "HideLastCommentByReporter": "Last comment by reporter",
                            "HideLastCommentByReporterTitle": "Hide URs where the reporter is the last person to comment.",
                            "HideLastCommentNotByReporterTitle": "Hide URs where the reporter is not the last person to comment.",
                            "HideByCommentCountLessThanTitle": "Hide URs that contain less comments than the number specified.",
                            "HideByCommentCountMoreThanTitle": "Hide URs that contain more comments than the number specified.",
                            "HideByAgeOfFirstCommentLessThan": "First comment less than",
                            "HideByAgeOfFirstCommentLessThanTitle": "Hide URs where the first comment is less than the days specified ago.",
                            "HideByAgeOfFirstCommentMoreThan": "First comment more than",
                            "HideByAgeOfFirstCommentMoreThanTitle": "Hide URs where the first comment is more than the days specified ago.",
                            "HideByAgeOfLastCommentLessThan": "Last comment less than",
                            "HideByAgeOfLastCommentLessThanTitle": "Hide URs where the last comment is less than the days specified ago.",
                            "HideByAgeOfLastCommentMoreThan": "Last comment more than",
                            "HideByAgeOfLastCommentMoreThanTitle": "Hide URs where the last comment is more than the days specified ago.",
                            "HideByKeywordIncluding": "Hide URs including keyword",
                            "HideByKeywordIncludingTitle": "Hide URs that include the custom word / text specified.",
                            "HideByKeywordNotIncluding": "Hide URs not including keyword",
                            "HideByKeywordNotIncludingTitle": "Hide URs that do not include the custom word / text specified.",
                            "HideByKeywordCaseInsensitive": "Case-insensitive keyword matches",
                            "HideByKeywordCaseInsensitiveTitle": "If enabled, searching for the above including or not including keywords will be done using case insensitive searching.",
                            "LifeCycleStatus": "Hide by lifecycle status",
                            "HideWaiting": "Waiting",
                            "HideWaitingTitle": "Only show URs that need work (hide URs in other parts of the life-cycle).",
                            "HideUrsCloseNeeded": "Close needed",
                            "HideUrsCloseNeededTitle": "Hide URs that need closing.",
                            "HideUrsReminderNeeded": "Reminders needed",
                            "HideUrsReminderNeededTitle": "Hide URs where reminders are needed.",
                            "CommonPrefs": "Common Preferences",
                            "ReminderDays": "Reminder days",
                            "ReminderDaysTitle": "Number of days to use when calculating UR filtering and when setting and/or sending the reminder comment.\nThis is the number of days since the first comment.\nSet to 0 if you do not use reminders.",
                            "CloseDays": "Close days",
                            "CloseDaysTitle": "Number of days to use when calculating UR filtering.\nThis is the number of days since the last comment.\nExample:If you close 4 days after the last comment, set to 4.\nAnything less than this time will be cosndered 'waiting' as long as there is at least one comment already.",
                            "DisableFilteringAboveZoomLevel": "Disable filtering above zoom level",
                            "DisableFilteringAboveZoomLevelTitle": "Disabled UR filtering when zoomed out above the specified zoom level. Set to '0' to enable all filtering.",
                            "DisableFilteringBelowZoomLevel": "Disable filtering below zoom level",
                            "DisableFilteringBelowZoomLevelTitle": "Disable UR filtering when zoomed in below the specified zoom level. Set to '10' to enable all filtering."
                        },
                        "tabs": {
                            "Comments": "Comments",
                            "Settings": "Settings"
                        },
                        "tags": {
                            "Bog": "[BOG] / [BOTG]",
                            "Closure": "[CLOSURE]",
                            "Construction": "[CONSTRUCTION]",
                            "Difficult": "[DIFFICULT]",
                            "Event": "[EVENT]",
                            "Note": "[NOTE]",
                            "Roadworks": "[ROADWORKS]",
                            "Wslm": "[WSLM]"
                        },
                        "urStatus": {
                            "Closed": "Closed",
                            "NotIdentified": "Not identified"
                        },
                        "urTypes": {
                            "Undefined": "Undefined",
                            "WazeAutomatic": "Waze automatic"
                        },
                        "prompts": {
                            "NoCommentBox": "URC-E: Unable to find the comment box! In order for this script to work, you need to have a UR open.",
                            "CommentInsertTimedOut": "URC-E timed out waiting for the comment text box to become available.",
                            "ReminderMessageAuto": "URC-E: Automatically sending reminder message to UR:",
                            "CustomListUsed": "URC-E has loaded your \"Custom\" comment list. However, only the comments themselves have been loaded. The settings text and tooltips were not loaded. Further, this functionality is deprecated and may be discontinued at any time. An alternative solution may or may not be offered at that time.",
                            "SwitchingCommentLists": "Switching comment lists",
                            "TimedOutWaitingStatic": "Timed out waiting for the static list to become available. Is it enabled?",
                            "UpdateRequired": "You are using an older version of URC-E, which has caused an error. Please update to at least version",
                            "WaitingOnInit": "Waiting for URC-E to fully initialize"
                        }
                    }
                };
            }
            await setTranslations(translations);
            if (errorText)
                logWarning(errorText);
            if (errorText && (STATIC_ONLY_USERS.indexOf(W.model.loginManager.user.userName) > -1))
                return resolve({error:undefined});
            resolve({error:errorText});
        });
    }

    function setTranslations(translations) {
        return new Promise((resolve) => {
            logDebug('Setting translations.');
            I18n.translations[I18n.currentLocale()].urce = translations.en;
            for (let i = 0; i < Object.keys(translations).length; i++) {
                let locale = Object.keys(translations)[i];
                if (I18n.currentLocale() === locale)
                    return resolve(I18n.translations[locale].urce = translations[locale]);
            }
            resolve();
        });
    }

    // Modified version of uroClickify() -- Thank you!!
    function clickify(desc, suffix) {
        let terminators = [' ', ',', ')', ']', '\r', '\n'];
        if ((desc === null) || (desc === undefined) || (desc === ''))
            return '';
        desc = desc.replace(/<\/?[^>]+(>|$)/g, "");
        if (desc !== "null") {
            if (desc.indexOf('http') > -1) {
                let links = desc.split("http");
                desc = '';
                for (let i=0; i<links.length; i++) {
                    if (links[i][2] === '/') {
                        links[i] = "http" + links[i];
                        let linkEndPos = links[i].length + 1;
                        for (let j=0; j<terminators.length; j++) {
                            if (links[i].indexOf(terminators[j]) !== -1)
                                linkEndPos = Math.min(linkEndPos, links[i].indexOf(terminators[j]));
                        }
                        let descPostLink = '';
                        if (linkEndPos < links[i].length) {
                            descPostLink = links[i].slice(linkEndPos);
                            links[i] = links[i].slice(0, linkEndPos);
                        }
                        desc += '<a target="_wazeUR" href="'+links[i]+'">'+links[i]+'</a>' + descPostLink;
                    }
                    else
                        desc += links[i];
                }
            }
            desc = desc.replace(/\n/g, "<br>");
            return desc + suffix;
        }
        else
            return '';
    }

    // Date to Days, courtesy of URO+. Thank you!
    function uroDateToDays(dateToConvert) {
        let dateNow = new Date();
        let elapsedSinceEpoch = dateNow.getTime();
        let elapsedSinceEvent = elapsedSinceEpoch - dateToConvert;
        dateNow.setHours(0);
        dateNow.setMinutes(0);
        dateNow.setSeconds(0);
        dateNow.setMilliseconds(0);
        let elapsedSinceMidnight = elapsedSinceEpoch - dateNow.getTime();
        dateNow.setHours(24);
        let pendingUntilMidnight = elapsedSinceEpoch - dateNow.getTime();
        if ((elapsedSinceEvent < elapsedSinceMidnight) && (elapsedSinceEvent > pendingUntilMidnight)) {
            // event occurred today...
            return 0;
        }
        else if (elapsedSinceEvent < 0) {
            // event occurrs at some point in the future after midnight today, so return a minimum value of -1...
            return (-1 - Math.floor((pendingUntilMidnight - elapsedSinceEvent) / 86400000));
        }
        else {
            // event occurred at some point prior to midnight this morning, so return a minimum value of 1...
            return (1 + Math.floor((elapsedSinceEvent - elapsedSinceMidnight) / 86400000));
        }
    }

    // URO+ Alt Markers, courtesy of URO+. Thank you!
    let uroAltMarkers =
        [
            // each altMarker has 4 variants: 0 = normal open, 1 = selected open, 2 = normal closed, 3 = selected closed
            //  0: closure UR
            [
                "data:image/png;base64,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",
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAoCAYAAABw65OnAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB94ICBQeJZVOVOUAAAAdaVRYdENvbW1lbnQAAAAAAENyZWF0ZWQgd2l0aCBHSU1QZC5lBwAADKJJREFUWMOlWGuMXOV5ft7v+853zpnZuXnXaxvfxsYuNuZivMZksYnmh5uEQPsD5P4olUhQCUWtQoXS9kerXiw1pVKhJRUqWJEsUJGqWiISEoGGJAyKjcuGDTevXcNiNutl197Z3dmdMzPn8t36Yy/yjZC0RxrNnDmjeZ/v/Z73/Z7nJfzmFwNAtVqNoiii5S8LhYKr1+sOgANgf5M/pF/zN1Sr1djY2JioVqtCa+3Fccx932etVouKxaJL09SGYWiEEGpsbExXq1Vdr9ftEij3qwLwLwjOBgYGhLU2KBaL+UKhUIzjuGytrQBYJYSoSCkrjLGiMaZgjMmlaRqUy2VpjOFKKdqxY4ebmpr6P2WCarUaT9PUAxByznustcV9+/ZtfOCBB35706ZNe3t6eq4PgqCPMSattVmSJDPtdvuT8fHxd1588cXXh4aGzjPGWsaYNoDY931Vr9fNtbJyLRA0MDAggiAIkiTp8TyvfM8999zw4IMPPrJ+/fqDjDHxeSuKsw5CmYe1Vn/22Wc/fv7555975ZVXziql5oMgaCdJkgwPD+srgdC1AAghQt/3S1mWrX7qqaf+YN++fY8So4AR+7XJZp2Fsy4ZGhr6t8cff/zfpZSNNE0XtNbxlUDoyi1QSoVEVMnlcuuee+65v65Wq1/H//MaGxv74SOPPHK42+1OOeeanufFl27NpcTkcRwH5XK5RERrjx49+nebN2/+urUWSqmrXsYYWGthjIExBlrrlWdaazjnQEQgIpTL5e133XXX+pdeemnIWqs+/vhj3el0VkAsZ4LuvvtuubCwUEqSZO1TT/7To+1O94+SOF6sL7eYuSvfiWjl8/L98nMiAgPAGIPHOfKFAojRke/82Z8/EwTBhVKptPDqq69mAJwAgFqtxqenpwMpZfHeu792y63brn/o5X88jHYUwxBhwQLdIAArlGGFB6UyMCGgM40s6YKrFEWXwTcZbBovdjQNFHvy6PF95HI5eGvX4/bf+/1v3Hv31372+k/f6E5PT6e1Ws3U63VNS9mQu3btqqzt79/4/e/9yz+7d47vz+ZmkDRnYbgPtuY6lG+4CWLDZpDvg3OxtHKAnEX7s3OYPT0MMTkKrhTIEpzjMKmCtRbMzyFcX0XfnV9Gu6f85jcf/tZ3Go3GxMjISBNAJgCw/fv3yyRJ8vv23LbN+/mb+3W3A+ksglWrwfM9CDduQbhlK7y+tYBYpBE5B2sNVKeFLG4hp7qgIA+SBOIcTAOsxOAsgYSPIJ+DiGNs2HnzgT179mx58803m/v37++cOHFCs1qtRkopmcvl8r97771fsUkCSmIIz4MsVdCz/Ub07BmEt3b9CgAAcETIFmbRePdnWHj/BFhrHgwMjAkIyyAYg7CA73nI9eQR9q6GXNUH7nn8/vvvP5jL5fJKKVmr1YjV63VujJFpmubXb9hwK5MSTPjwSr3I77oV+T1fAiuWriq79vmPcOGt19AdGQJTGkQczDFwt0RIu0hKzjiC6zYjt2sA3oYq4izGpk2bbkvTNG+MkfV6nYvBwUFGRNLzvKBUqWzMVq8DKgr+thsRbN4GSHlZcGc0OtMTuPDWj+Bmp8DAACbALJYAEMi5xfsgRO6mPcjfMgDKFwAAvvBRLqMahmGglJKDg4NMFAoFNjs7K5xzMt9TKNmeIvwtN4D39sEJ77JupuM2mmeG0fzwbbDOPJjlABfgjsBBYG6RrMwRvL7VyN2yF8Fv7QL5wSWLMAjDsJxlmcyyTPT29jKRZRkJIZhzjjHP83K794H8ABZssZM4B3IO6XwDzVNvo/XRBxBpAiIPxDiYATjRYvoJIAvIjVXkd98Bf+MWQIhLiKzhlIMQOc85x4QQLMsyEgAQhqFLkgTGWsXzBc9aC20MAIIzBsnFcTTfOwE1fhbC0cr+MxAYYQUAI4Fwxy7kd98OsXod3FIayTkYlSGLmkhmL6C4dadejgsAQkrput2ulVKabrc7lw9za2CB1Fg4rRD/8gxap4aA6XEQ+CUA2GJwAAwMXPrI3bwX+Vv2gvI9lx2TVivEM5OIzp2G6rTAVq1ZkFIarbXN5XJORFFkOefaWpvNzs6O+dd5axgYgqyLuZEhzJ/5BVi7BYIHJgS4uYT9BMAxeOUK8rfejvDG3YDwrjhOLdoTn2Bh9EMk05Pwcj1YmJs7b63NAOgoiiw7efKkjeNYaa3js2fPvud5PtrTk7j485+geXoYLO4uZgAcpNwKACICWYJXrqB44CDCm/ZcBcCpDM2z72Lm/bfQmfgE6HThpwbnfjn+vtY6juNYnTx50rJarWaklCkRdV944YXj1to0nTqHePwcWJaBOSw2IFpsQCv7bwF/w2YUDxyEV90GsMuVomovYObDk2ieehuqMQXeiSE8AdfpuKP/8Z8/IaKulDKt1WqG1et16/t+xjnvTExMTI2MjNT16McQxMAtrm5ASwTM7bgFxS9/BV51GywIxjkY52CtRTwzhZn3jmPh7PswC00wbcGJQ6YOzS8d/On5iYlJznnH9/2sXq9bviQ6qFgsciGE99FHH83e//CjB/X4p9IZDZcZMABiiYg8zCN/6z7k99wBXumFcwTtLJxz0CpD97NPMHdqCJ2Jc3CdNihTkE5ACB8E5554+b++O91ofNpqtWaHhoa6AMxKDrdv3w7OOZ+fn0epVMpuvmNwb+vMaUpnL0CnCvBz6LlhF/zb74JdvxmxMWhFEdrtNppRhPm5OUx/fBoXz7yHeOx/YGcbcFEEl2iQkOB+iBN9W773o9df/2/O+UXf9xfOnz+fArB0icyTAwMDBcbYGul5W/7q23/8J6de/sFXJQPmuh10tEPEOILefniFEoqVCgTnsAA45xAAVDQHmbThJxGgNZw24MbBdjLs+Oa3Xv6bv//uEaXUmLX24vDwcAQgA1bayaIOGRgYCAqFQrHT6awNPLH124/96Tdm5uZ+p1KpXKamiAiMscsUFRHBWguCg7MOzjk4IszMzODpp59uMMb+Mp/Pv1MoFKaiKGoNDw8ny07tKqELIEjTtASgXwix8b777jt46tSph/fu3Rs89NBDK5oyy7JFwcIYrF3kBOd8BdCzzz6Lo0eP2uuvv/7Vubm55xhjEwCmfd9fAJBcKnTpWqYHQBBFUUFK2cc5X1MsFjfv3LnzD4UQdxw+fJg8z7tMa17emyyefPJJNzw8PNJqtf610+mcM8ZczLJsplAoRFcCuKYNHBsbc9Vq1WZZpn3fz9rtdqqUiiYnJ9+dnJw8MTo6untwcLDgeR4YYysrB4Bms4knnnii89prr/1Ft9v9QafT+SSO46kwDGeUUpHv++m1XBj/HJ/gpqam7NatW3WSJBnnPAWQAEg+/fTTXywsLAyWy+V8f3//iuJOkgTOuc6xY8f+dmZm5oxSasI5d9Fa28zlct2TJ09mY2Nj9lo2kP0qfxpFkQnDMNVaR4yxWWvtBWvtxAcffPAP1Wq1BQDGGDjn4Pu+PXLkyJHR0dGzxpgpxtiMUioKwzBtNBr2Uof/Ra6cDh06xE6fPu2tWbNGrlq1ShKRL4SQxhihlBK+73vz8/Os0+ks3HnnnQOtuEmhn8cbb7zx+jPPPPNjADOc84gxpuI4hhCC9/X18XXr1okNGzawUqlEjUbjc7eDarUav3jxor9x48Z8pVIpMMZKzrmiEKLEGCv6vl8gorwxJnfmzJm0Wq2GN+64qTo+Pj722GOPHTPGtBljGRExAH4YhqHWOpdlWQjAj6JIBEGA3bt3u9HRUXstG7g8BMl5nlfWWleklBXOeUUpVSGislKqxBgrOuc2GGP6jx8/Ht12221rDh8+fLzRaACAj8XmJZxzeedcD4A85zxkjEkpJZdS2jRNTX9/v52amrqqRPng4KAkogIRVbTWFc/zegCESikppfSIiGdZ5jnnNgEoaq1DIYQwxljnXEpEbSHENGOs6ZzTnHNNREoplUopO3EctzzPa0opF6Io6iy7c7qCpN6BAwdyAAppmhY8z8sRUeCc84wxgog4Y4wRETfGCCEEJyKulLLOOcM5184545wzRGSFEBqATtM0c87FSqmO1rrlnOuMjIwkAMyKF13WIIcOHdKNRiOOosimaZqGYSjn5+dFEAQeY4wbY5gxBkIIJoRgaZqSc46IyPm+74jIGWOs1toFQeDSNNXGGOP7viYiRUSpUipdOjPs53bMpUEJn52d5b29vaxQKLAoinihUCCtNRljaKk0ry41zldYH8ex5Zy7IAjs6Oio3bp1q221Wmb16tX2yoZFXzDLoqWyRaPRuGxk+EXX8kjx0KFDOHbs2HLAa07y/heCj6tRnpi21wAAAABJRU5ErkJggg==",
                "data:image/png;base64,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",
                "data:image/png;base64,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"
            ],
            //  1: roadworks UR
            [
                "data:image/png;base64,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",
                "data:image/png;base64,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",
                "data:image/png;base64,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",
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAoCAYAAABw65OnAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB94IDhUzEilwnu4AAAAdaVRYdENvbW1lbnQAAAAAAENyZWF0ZWQgd2l0aCBHSU1QZC5lBwAACkRJREFUWMO1mF1sXEcVx//zcb92fXfX9sbrxHHibhLy0URJCW2wEolVKKQND0WV/ARCIEUgBE+IBx4QlAIFFfH9IYKQQEKKqCpASNAS2sLSNjUtSRNHbWjBaTaJk7W96/V6767vzsydGR7iRE3quElF/y9XGt0z96czZ8495xDcvigAUiqVSBRF5OpiGIa2XC5bABaAuZ0NyS2+Q0qlEq1UKnxkZIQnSeLEccw8z6OtVotkMhkrhDBBEGjOuapUKsnIyEhSLpfNEpR9pxAEAFm9czVrXW65ufU5z8IGWmqfUOJba13mMmaNpYQSo6XWhBBpje0yl3UJSNw83xSZNRlZnajqlWBuBkFG9o6wRCSOhQ1A0WOtzeR35YdzD+Q+1Cg03jfrzm6YZ/N5RZXrGEf26t76gBw42zfTd7z5x+ZT9VP1i4SQFgzaBCTmHleVYxW9HMhyEGT37t18hs34STfpIQ7Jrf3g2s36Af2ZiezEvZpqflPfKQAOwAxLdi7sfJr9kR2eembqdatsk/u8XdCF7okTJ5IbQdhyAJzzoE3bOQNT2PjljZ86uf/kt6eCqS2WWrpi9CztZomlVb+6cW7n3Ee3b99uGsca5xhnJkuzenBw0FSr1ZtCkFKpxCilAWOst+W01hQeLXztxeEXP6GJ5rcUwjf4WBPNL+QvjL7nA+8Zjp+NX15QC0mHdpK+kT7dvNi0y0GwOI79XC6XJYQMOo84XzvZf/Ig/g+qpqqbiqPFofbR9kvWWtV4o5GoRXUtPq5CkPvvv99JpVKhEGKAf4l/6l/r/vUx/B81nZretGPrDlF/uv5aOp+W+3buU5OTk+YaRKlU4vPz8ynGWJ8aVbsmPjzxdU1WCMB3qJm+mV3FRvGFzsXOHO1QuXnz5qRSqRgKgJTLZdbtdgPP83JmzBySVHp4FySJ9MyYOURdmut2u0G5XGYACAVA9+7d6/q+n57bPHfH6f7T+/FuiQCv9L7ygd4dvXf4vp/eu3evC4DSUqlElFJuKpVKpw+k78W7LEMNSx9I35tKpdJKKbdUKhFaLpeZ1toVQqTnC/N33faup4Hk/E9hG7+9xTMB5gvzdwkh0lprt1wuMz46OkoJIa7jOP5kMDlyuwxTf/8IFusPwydtzKw7iMKhJ1Y2cIGaqY0MBoO+UsodHR2lNAxDKoTgUkq35bZyt0UwCcQv/ANePgMn7EP8yvFbMmu5rZyU0hVC8DAMKZVSEs45tdbShCbO7TCcq34T6T4XDgUM4+CzdeDi29slNHGstZRzTqWUhAJAEAQWALjm6nYg5l56BkGrAWINiFVI51KoVr8D6JXtrn7n2ndd17WLi4vGdV2dk7lGPagXbo0AcNMh/H37gS1DIF0Jj1fQbM2/9bd4g3Iy13BdVydJYlKplOVRFBnGWGKMkf1Rf6Xu1Au4hVxZ21oDPj8N6jAgmwUSATbfhKMMgEdWOAsg386fM8ZIAEkURYaOj4+bOI5VkiRxeCE8dSsAEIDqLCI1dwFOPAckEnjtZVDivL05B3rO90xMLk7GcRyr8fFxw0ulkhZCCACLjd83nnff637y7dK23mVAQWCzAcixI8CffwR79jyip1/Cpe13rugI17ii8fvG84SSRddxRalU0qxSqWDjxo0UgDu7MMvX3bVuaDY3u/Gmiab1BILePOD4IH4a2PR+YMcHgUwvFjdsBH//ffhB4U83hdh2ftszrT+1jlJCZweCgVa5XJYMACqVCslkMmzAG3AWzi7MyX1yv2Lqem9Y4OzCX3H2i4fQ53lwN2y4skg54KdBijsht+yGLqzHAx//JX69RwLp6wvItEpH3g+978qGrCTtZO7M8TOLAPS1ON60aRMYY2x2fhbre9YvThen94CAwACoA98f/wmOfuVzGLo8g+yJvyJ88hcg6AJr7gB0AhV30JESUmlMfvdRhGfuxsnBy8DgEoiF3f7M9p/PPzf/T0bZDPf4QutSSwAw1yAuXryIVatWIYssvNe8xuGdh3v2HN+z5dSnT6H94zaOPvkEhusx9qSBvA+EVIC+cQJ48bdA9RwW/vtfXHj2KAZ37sHFn/4Iv/z3ZTT+AIw8MYJmtokdnR1/mPnFzO+Q4JJVtnH55cvxlbty/Y22a9assT09Pabb7dpjx46dO3jwoHP8+PFt09PTwJVCGqsNMBgAqwKAphwgHQDTbyA4+RSCc2dx7nvfwj/qwN8M0AXQbDZRPFucJcfI4X6n/z9D2aFZL/Ha1WpVXi3vyI2FLgBfCJEFMABgaGxsbP/p06c/e+TIEV9KiQKAewDcmQHW5YB0hsPCImppXGgCL7eAFwDEAPL5vLn77rufbDQahymlUwBmPc9bANAtl8t6OYjrQKIoCl3XzTPGCplMZv3WrVsPPfbYY/dMTU2tWPYTQtDT02Pvu+++V1ut1o87nc4bWusZKWU9DMPoRoCbNj+lUolFUeSmUql0FEU53/f7GGMFzvlwKpX6wnPPPVdst9vLQhw4cGCh1Wo9xDmvSCmnhRBzYRg2FxcXO2EYyhsBlmt+sHRlbbVaNcViMel2u5IxJnDliLtxHJ9+8MEH75mYmAiVUiAE2LZtG2oP1RB+NWx2xjsP97R7XldKTVlrZ4wx86lUanF8fFxWKhWzXBvIV+pPoyjSQRAIKaX1fd8YY6wxhl66dOlR+ix9CD6y1gBnyBkQEDN8ZPhXjWpjUltdpZTWhRDtIAhErVYzN+y9chs4NjZGz5w54xQKBbevr88lhHicc1drzZVS3PM8p9lsUqfrLMztmNsNAQIX2HJqy1P139SfpqD1vJuPKKUqjmNwzlk+n2erV6/ma9eupdlsltRqtZXbwJmZGW94eDjd29sbUkqz1toM5zxLKc14nhcSQtJa69TU61NiaP1Q0FjXGFldW13pfKPz+Aa+od3v9EtCCAXgBUEQJEmSklIGALwoirjv+9i1a5ddanzsjRBXhyApx3FySZL0uq7byxjrVUr1EkJySqkspTRjrV2bQ25g6p9TUXhnWMDP8PxIewQAPABgjHFrbdpa2wMgzRgLKKWu67rMdV0jhNADAwPXGuM3xwRZKnq5tdahlPrW2gBAYK11KaWO53lMSulYawNCCC/aouXf4n/RWhttNSOEeEuektZahzGWMMaUUoo5jmPjOFaUUsd1XdbtdpedT1AAzr59+1IAQiFE6DhOihDiW2sdrTUnhDBKKSWEMK0155wzQghTShlrrWaMJdZaba3VhBDDOU8AJEIIaa2NlVKdJEla1trOq6++2sWVQtC+2RN2bGwsqdVqcRRFRgghgiBwm80m933foZQyrTXVWoNzTjnnVAhBrLWEEGI9z7OEEKu1NkmSWN/3rRAi0Vprz/MSQogihAillLhSFMDcNGMuDUrY3Nwc6+/vp2EY0iiKWBiGJEkSorUmAHD1eV2UM3Yt6uM4Nowx6/u+mZycNMVi0bRaLb1q1SpzKxnzzetk6dqiVqtdNzJ8O10dKY6NjeHxxx+3b8oPb0lW/wMlRCCqsKHLVAAAAABJRU5ErkJggg=="
            ],
            // 2: custom keyword UR
            [
                "data:image/png;base64,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",
                "data:image/png;base64,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",
                "data:image/png;base64,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",
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAoCAYAAABw65OnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIPACIVMlxQ3wAAAAZiS0dEAAAAAAAA+UO7fwAABsNJREFUWMO1WF1Mk1cY7j8oAsVVigylFXG1YK39oaX8hz9RsxuDCwEhcTMmS3EILIThLkY3Ij+JCe6CZTcmJNsys2U3xkVhbkFwCRvWm2WyBbHeYGK2CxOXeCF7ns9TVgr9dZK8nH7fOed9nvO+73nPez6ZLPE/BaW6ulppt9tVQeFzsE/2Cv7kQVCDwaBGm1peXp4O4EyPx5NVXFycxRbP6Xi/Ff0pYlyQlPylwblKvV6fWlpamg4hmN7pdBodDse+srIyE96Z2eLZgPc70a/jOEgG53F+smTkXAkUpVAZVqjHao1dXV3W+fn5M48ePfpi/2PdYphcx3sf+tsx7hDHcx7nU4+wTNxE5GSP1W1F+5rb7c73+XwVgUBgHEB3BeDqJvIYsgL5E+LH+Iucx/nUI/Sp4iEiEXC5XGmVlZXZULBvbm7OC6W/QZ4FATFuVZEuX1XlKV6I7kUbRirAebfnbnZSD/VRL/RHtYjkAjKmGRsaGsz3798fgaI7ocpJQJkll9rNJIzIU8j80u9fjTQ21JqpF/pTgRMxRhQiAHUMNBC4CAUL4QTikZA5zwWRwNIfP4y5XVaTy2XPAo5ms60sb2pqUiOYtDabrWB2drZXmPPpOgKK+Eiocje4hq78a/Kyr99iMe8CTjrw1scHzQNfbYEVcgcGBuoEgSfhMRAOlIBF1uKkr+/9SuDoiRe6Y/hPVVRUlImXhcvLy5c2WCBcVBtB1PnKuIhA/+fAKQCeFv3qIAkFgwXMsru7uyvFTngekYQq4irjtcZd4JQTj7hSbNAkJSUl2yoqKgyIhQ+EK1ajkYiQJ+IlsQocH/AKgJshXCJTM5ngxcGHDx9Ox1SseHkSwPkGeMXElVzClIpo1VdVVTkx4O9kFScQnJRF4NmIS3wZkhLjIRcPnmRJJLhDKH7g2YCbA/wUxsQWpNM8pNbyzUjEkogEFFFJzAHvAHCzefRLJCCvJ0MifMfEaQXKdeAVAVcnkaA7kNNzccCUJkIiCKTUrU9aCnGuxJj/LfD2A1cHfA0DU4OHHZCDS0tLX4dmyqTcEJvACs6lT4BXCGHxw4QlY42YCfMUXLt2rVvUBEmTiGPuXeC8DTwjcaUtynMDbNIgeS0tLbUYdO8VkfhHFES3iQM8I0vGYLJiEZtClyCLWf1+/3i8JDQ4L1Q5Ckk04uyIMF46RSG/QP8YcOyMQ26K4JEuHWComjNgor3t7e3H4nVJAkJ9v0JuQf8RVlqs0kMPsLVDDOxywNI2OTnZJUwX+B/cwbp0HjIDvZ3AOUQrsILDeGV4ec8zJIPlPNJp6dWrVy+Mj4/7xSqeJEmCJcECKvCfZmZmfNRL/VarVRtuhTVrgARL8+0YuBcTyq9cufLxwsLCz1NTU/cEmWcJkqAVbg0ODn5nMpmOQX8h9aNNjXRTkwpdBgvrTEhha2urZ3h42NvR0fEjTHknZrHzHwmW/4tDQ0OzExMTF7AbPNQn6tetse4ga0R4zJ4+fXrPqVOn7GfPnj3a09PzmSh8V4IkWOYrs18If4eQWOnv7/+ys7Pzzba2NjvA91CfOCLiugTJxWU3FQq0J06cyDt58qS5sbGxDMXpcfxNcaWRLNHX17fo9XpbMKcCB5QZ/s9DsGupL+FbmMgfGijZBmU76uvr9yDPO+rq6o719vbORqoTzp8/34Yt6GZcQbI5n3oSvY/KQy/DLDrQpsEKPGyMNTU1Tvj4LRF0K6FXwJGRkXPYfmUkQOIkwPkoatUhnw1iu6K5uZkD1bwI8drGCy2v/lQKMrsBcgDPtaOjo70ixZPI4vT09CUYoAl9rJi4zfVMSKwjYb00BmQYIXnUWOBEgmIS64x8FqUAfwPHbzHEiffM/c03btz4lBZ58ODBTbxvxdjDAHNDLCBhwhy6xAh9u9CXAwLbhVXVkbaoZAHxKSCXJgX4AeZ5KHBBcRmIVaGvDmNaoPgMfncjj3wP94zh2Yv+DvQdxZxq5hkmJ7wjaStJcUFQo4t2Q1eIojcLg3YzsgHCg8ZDcCiuxWrraXKCQd6FonNoP3Q4HB/h93to30H/cehooLUwtxrz+HnAhbkHRRLUw+LbIpKgJfgpiLdnkb5NwrQ2rojKuDpaBb8rBchh/D6Cfmn1LJg5Dm0JrciTGVYqIgFuV8YJ3LJFnBvyTYOS24l+42B+U7BYLDuFT/NJjMLkI/y9F6s3oWWpRvcVMCg5hpcpzmMlz9XTDYw1EggJzujfqQwGg0YkGGbPNJqQVhKffzKoUIhWSGawj8LtyXn0v/jkIO2MRBLWWq6gCAut+2QYS4Jf78SWj5oj/gVbNsLdh171HgAAAABJRU5ErkJggg=="
            ],
            //  3: note UR
            [
                "data:image/png;base64,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",
                "data:image/png;base64,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",
                "data:image/png;base64,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",
                "data:image/png;base64,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"
            ],
            //  4: event UR
            [
                "data:image/png;base64,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",
                "data:image/png;base64,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",
                "data:image/png;base64,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",
                "data:image/png;base64,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"
            ],
            // 5: WMSL/SLUR UR
            [
                "data:image/png;base64,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",
                "data:image/png;base64,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",
                "data:image/png;base64,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",
                "data:image/png;base64,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"
            ],
            // 6: Elgin MP
            [
                "data:image/png;base64,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",
                "data:image/png;base64,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",
                "data:image/png;base64,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",
                "data:image/png;base64,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"
            ],
            // 7: TrafficCast MP
            [
                "data:image/png;base64,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",
                "data:image/png;base64,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",
                "data:image/png;base64,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",
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAoCAYAAABw65OnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wcGFgE3AfrMGgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAABmJLR0QAAAAAAAD5Q7t/AAAK4klEQVRYw5VYWWxcVxm+Z7nL7LvH42XiODa1qyxuQ1JSUjVynwJUgFCFxPZCH0DqUyXggQeeEBICCYlKiEWgFoFQUxUqUVpeTEIpoTQJookTYzn1NHY89niZ9e733MN/xmcSx3HSdKxP5y7nnP+7/36MlI/+wwB07AvHkNNxkHjAOVeMmMEv/PECF7eA8KNsiB5wjhCK4aelB9Iq0DA8yyMYYeQ5HtJiGg9ZyOHWxwR77bW277u+d+m1S0ySuu+PfhiBx7/yOIUvjhRGC7FoNprV4lqBE55jjMU44wSEK4gijhXsAQEL7uuZocyG3bS3mtVmU42p7tzf5sL7kbmnJh797KMEVKzDhqloJlpU0+p+WqBHGoXGdIVXJqteNbXO1ikoHilE4SW15BeMQrMclufTq+k37fftC17b+6C12qptLW+1C+OFYOanM+EDk3j4qYcpCI+li+lCtC96wJgwpqup6uktulWqD9YTi2RR73qG2LIDMAFM3gPKqSHnUOfIe/lq/tXWXOud9fn1BTBPo75Ut+bPzd9FhOxBgOT35RP50fxwtBB9xHvEe27WmH26M9TJV9PVxE16U+1SdwHrAGeXooFcM9qiRtpI8AL/WDqbLuqB3kABcjRDC8ZOjvmVf1f4PUlMPT2FE4VELFPOlGODsU/UDta+fYVdOeKOuvqCvmBY2MJdgS1AU8aJ2MEARAFJCV1RarimG8QwWJTlqU7HDdfYRAzZnulZyWLSqy3U9iQhvs/on+jvi/RHpppTzeevs+vjN8ZvGC21RboCBYEtgCcJgDAlA0gAIgAVEMid4P06WteQgiI8xpNOy3nYaBsV7vJGq9rqbFQ22G4S6PgXj9NcOZeN5WPj9An6zXk8/+jmgU3DpS6+NUsQ8CWBGCAr40v4xJ8B3wX8EHAUUN4m00ANyhWuw9w4X+UDaku9pkW0jdxIzlmdW+W9xKMc/vRhZG6YES2h5ZOHkk/MkbnH2+W23qTNbQJImsCV14JAWvrDXwGjgG8A/gE4KDWEbmukqlZVUzMj4NxT0bHoMarRPPe5ujP7Ke+9/h4JgiACOaBYH65/hugEreG1bRMoUri5QwMp+ezngK/KOT8BvAX4MWDy7hy7RbZU47iBWodanwc5/ZBnelS3U/DhTx2m8Vw8ER+JT9ZpvWTmTGP7jURbzqTS/uLZ7wDfl0IuAb4shZekfyg71gM6tIObpBmpodqQMWw8BLkneuTpI9skDp4+qDCfqRBSKTbBnmKUqRvwBwK3c4gvc4Ai1SyIXAV8B3AccEXaX9kleI+K0yGdrnHRBHpCjagxopGut+Erb1xBYRhSrOLUirpyxM7ZMaKS25sFO8pRTI4vyPFbgH4ZNehDcjKMkN4VpU8h7VR7DKko47QdWhgrIDw5PYlUQ1XBKdOb7mZmGS1HmqiJb20S7BCiAZaFEwE+J53wQcugSK6oAxXOV63ASpEIyUH+iKT6UwgbCUMBp6SMszgUn7u3Y7tK3ao00QCg8BGbAEgaZmiqDnMMkJcHC8T0uE6x7/mIEIKhJ1Axw4zvzMG9zoD34kjWCk8mqQf57aqdoGXqeF0SUTBPFPyRdvMgsOFQnlWKaajsVXT5jrGnkfZ9hH5IB2Ehywh5iCAV4IAHGCOCOIcnkECYgQ0rGSaDOwT3NODLMS/rRB1g3/+r73q+o34SSjwWMKZSlWO7ZStIQ0KEo3LVigQRNw7uceuL6A7fEJvsk+n6GqByD23t1krPrIHCsyzrpNX0JmRMk7nM73P7Qrzw9wUOHRJohTcjkFnxBva5x5U7SCB5bcpc8TXABcCfpH+wPczAdz3bJqHgm9hL19PzXsvbgorqnTt3Luz6BJjDDdxgE1fwFWQiP+7EA1D/to/2akco1c9leJ6QKfq3e4Qo30MLoOukkwR/hBD4L3/bd/wG85g1PT3Nuhlr8JFBBSqbBgvSqIgmQC1RFEWqQx3c9Qkma0Ugy7XQxicBs4BfSyctyzxCdhEJ5XpP4akPUnaJlhb5ef6q1/DeD/2wMVYcC7pLzHWTJ/uTISQPXWNazE/4I+B8GiOM+sRHXaGmJOFLEllZsquAPwDeBNyUxESBy+0IbzBZ3s17hmPYmbOZX5o3zP+0llrVyvmKNTs72zWH0lxtctCEFdphJVwNL4DNruIl7KiWGnaFcrkplxpZlWX8AOAXgJ/Jr/0N4AeAJekrfHtewk4EpEKc8mp5xr5uX4YGeG00PtrrTG93VkuXlkJoNAJo23FYD10tpw11VjtZq8+iMAt1zaLuaGrbcrXQygTg64DTgFOyv0hsa0039dD4n+GWUfmy+4b7e3vNnrO37LXL5y+7Pbe9o8c8duAYh1bOD53Qp5t0MzoQ7Q9qQZKmKPaIh7skRLRYkoglnZXJnYqA/dIcQCBmxYLoYtSiq9Qmr5OXwnZ4EdzyZt7Jt1dWVtieje7Q0BDPhTlWwiVvg2248TBei0fiEWvRygUrgcZGGO46X0wScKWPdGTjKxJYYztaIPEx7V+aN+AOzA58MPAjtsnedU335rA/3FBV1a9Ubnfcd5BYXFxUBgcHWSQSYUWl6FhZy6QWXU9DgfUDf7C92k4qczBxTHbVRJKRIdj1A2/bZ9Kz6a0Ja+JX+vv6K/Vr9audamcZwrORQin3ySefDCE/3PfwgyB2CUJItx6CkquTIoqhQdd2D7Akm7ieuP6lRqmR7EZGL4nZEtehqdow3EPq4TN0g14w581r5oq5BDlow7d8czw17p09e/au8+kdZ1GwF8hGfGZmRkx0pvk0W8bLLo3SRqwY2wL118pr5WXe5M9bh62UH/rklj6hqsaTcXtyafIF8x3zErd4xW26q9aG1ZgsTDozb8/4z37vWQ4k+IMcA3vP8NGjR7FhGBRO43prqJUM/CAPiayMc/jjK6dXnoMOPRbQgIqaIPLGwdmDL1n/tP7C2mwBvr4WumFnJD7itlotBvmA7ZHM9zwGomeeeQZfvXpVLRaLWjabFW6oi15Dbah4rbFGxDXkfZTSUrhT6ByAfoBAlxTut/a/a75mvh6YwTJ00q0RdcQnLlEopSSfz5NSqUTB8XEqlULr6+v3JIFOnTpF1tbW9OHh4Vgmk0mABlIgNAkbpcBMyZyai2dRNprjuei+5j5WK9UGO6VOIR7Etx575bGXtY62mUZpJ4Mz3fMZOHgEurao53mi/9bb7TYFzSpTU1N8YWEh3CtPYAgbOjIyEoUQSsPijKZpGei6Mr7vZ4BEGkaRARLQlg26rpsduTGy9eLpFwv2y/Zby8vLnmgTu5sSQoF8DBAXAQ33EfEPFvgRQAhrWV9fX1itVvlunyAnTpzQQFgCkBEkgIzYJALCxQYqPCfwVSpsvg82TYoDE2iJwgi8Qgfed+C2Bu/qMCcA4QE8g+W+C+tN27ZbsGcdrpugFfPixYvdNhrt+l+UevLkSdE3JYBtAhZEYRND+AHYmQoS4n9GYhT3wt7iGoSEMIcJoWIUgOeh4CfKHuzlwTMb5plAuAXXJjiq0+tEdoYoB6cMwGlsYClU5oJJtUajIeyogmwhGAOEs2EBmIJ6Ya3rurjg8D4EQRzWcHgPDRyc93S9qxGAK7QiU9otn0B7/ZMMQpNsbm6SXC6HE4kEBlIERgSbI9izu6Y33uHlhNzyelB9KO6BTCiccHR0NBShWigUwt0J6wHOTd2wVUBDCMigBz1iAOluYhJrz5w5w+/Xi/8fCSWMwsZGkj4AAAAASUVORK5CYII="
            ],
            // 8: TrafficMaster MP
            [
                "data:image/png;base64,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",
                "data:image/png;base64,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",
                "data:image/png;base64,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",
                "data:image/png;base64,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"
            ],
            // 9: CalTrans
            [
                'data:image/png;base64,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',
                'data:image/png;base64,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',
                'data:image/png;base64,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',
                'data:image/png;base64,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'
            ],
            // 10: TfL
            [
                'data:image/png;base64,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',
                'data:image/png;base64,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',
                'data:image/png;base64,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',
                'data:image/png;base64,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'
            ],
            // 11: BOG
            [
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAoCAYAAABw65OnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QMQFysBHms3wgAAAAZiS0dEAP8A/wD/oL2nkwAACKBJREFUWMOtWGlMVtcWlcmvCH3VSrHF8moFWqtIUUCcEQcULUgqGHCsVGtMHVAxaLRPAy/GoSWEpFacYhzCD99LnvGBbYSYOLXWRI36QxPFeR5AZJ521zo95+Z+Xxmk7U1O7j3D3mufPZ19bpcunX/c0TzGjBnjGRER4WUa+xzX83/740bGBOnTp88bePuOHDmyB4D9hg8f7h8aGtqLb/Y5znm9zlML5PaXwbnLXr16+QwbNuxttN7oB0VFRQ2IjIwcNGLEiEiMDeGbfY5znuu4nnSk/7PCuHEnYORNZtjhP7Hb0IyMjPhz587lPn78+ER1dfX95ubmejThm32Oc57ruJ50WnhvrZnXFsSN0mN3b+L93tChQz/JyclJunPnztGmpqZGDSr4FvNt+jX1VabfyPU52dlJpCcfzc/rdQRRAkRHR/9j9OjRgWAw+MyZM7kAqHUF7LjfxHftmePHc8mH/Mi3I0GUCSgx1RgXFxd98+bNIjtztpaWFjGPqwDm4Ro7TVlhYVHcuHHR5Ev+7ZnGQztgbzoaBCh2FYDt9OnTkp2dLQcOHJD6+npLsOrqKtm9e7fAdHL+/Pk/CFhWWlo8NDw8MjoiojdxdDg7ayE+Pt7BUBs8eHAYgPJdVcx2/fp18fHxEawXh8MhW7ZsUeONjY2yevVq8fT0VHMAkUePHv3BXPtzcvLD+vcPIw7xnLShE89b0ELw2rVr00BUZxeCOy0vL5d58+YpEHd3d/UGI3n16pW8ePFCYHenuczMTEXjapqszMw04hBPm8XKB44BAwa8i8HIW7dulbr6wIULFyQoKEgx9/DwsIAmT56sTFJbWyujRo2yhDDz/fr1k8uXLzv5D/kTh3jENdrw0OETtGLFihRDYIgQ/5KYmOgE4Obmpt5Uf15enmzdutVpzsyTZtq0aVJTU2P3jybiEI+4yjeokiFDhvTETugLBca7ScSntLS0VQHsOzbzdgFMn3OnTp0S++aIQzziGpM4mEwwMOzu3bu/msXGloGBgRZQR4B2DdhbcHCwJURVbaUQh3jEVSZhSoW3fhATExMLJ3tiFvOZPXu2YuLr6yurVq2Sbdu2KWfkWHsCTJ06VQoKCmTZsmXSrVs3NbZgwQK1MTbiEI+4xO+CpOSjD52JAG8wCae4uFi8vb2VJq5duybInHLkyBE1t2PHjlY1wrF9+/ZxpyqP8Ll69aoEBAQoYWhavckG4hGX+PQJX6TTEIRYvD0TLlmyRDEtLCyUTZs2SVJSkuzZs8fKijNmzFDzdE5GDL8XLlwoV65cEZymsmHDBmvt3r17rbA1WiYecYmvhEAL5iCcUWmCEUFQEj579kymTJki9+7dU8TGYQ8fPqzmS0qOKQ3x+8SJE7Jo0SLZtWuX2H2LuYTz06dPV+FMHOIRVwlBdSCn98UBE/fy5ctHJObC1NRURXj//n15/vy5yoombPns3LlTh2CyJCQkqO+DBw9KRUWFVFVVOa29ceOGmp8zZ47KK8QhHnGVOegYPFjQxpSVlf1S11CjCGkCo2L7ocSHjEJCQlQKZxLjN/0HVZZlAiMAn7lz5ypeubm5Qv44l34mnq43vK0QhXqijx49ut0QPnz4UPz8/KRr166yfPlyaWj43WfppKiiFFOq/unTp/LkyROZP3++GmP65s6NsIsXL1Y8/P39lUa5GeIQzwpRXUGx+hmYlpY2i+eG2fHZs2elR48eVrx7eXlZqRvZTiorKy27m/PDOKlZy9azZ0+5dOmS4gmz1hGHeMQ1ycpdF699kcXGXbx48Ud7fYAKSdatWyeTJk1SwHSu7du3W+q2r+XOmUuSk5PVWuaU9evXy4MHDywTkT9xiKecUlfn6gBj1cwKCM6TXldXV2lyvfEF7ppOR6c1DFurrvjwrOBaRoV9DfmSP3GIZz/ArENMa2Ps/v3788C0pXPlXHOrzTbXQr7AiSWOdXi5lPd0UD+W7UinU4qKiv6Xn59vMaEGOhKA3659vlGBy8mTJ/9Lvvpa4OeqBetmhclusNO7WBgOgqmHDh36D0u1kpISp/rCtd6wf7v2+UY5+Bi1xXzwH0T+xGnrpqYKXTqLvrwMmjlz5mebN2/ORZzXQpVWAdPWYy+C+WzcuLEZTvx/REMC+ZGvztCeHVbcXMgYxsk3MD09ffzSpUu/XLly5c/SiWfNmjWXcf58NWvWrPEMR/J7HQGcBKHKwOAdhGQIjvToiRMnJiLkvkaldKM98KysrAokqAzQJOGAQoEdHgJnf0ebunO3MH3zfgNMuoPZ+xMmTBiIPD8eTzpOwwetCYDCthw5ZTkPJ/oVWiDpyUdHQqcEUELwtsTczsoYWgiAEKGxsbFxsHEG8kaFKQO1IzbjCpCL8EugABScApAeRW1X22+Djk2RkpLCxQ5eUHhtY2rlPYFMIUw/gIxEPxXF7fcQorm86pmpRX+CBuZibiwvw6yamJBYR0J7bzEv2ARqUxjLF0hIUN4PeKFlUQrsCBy/w3kEY5x3h4xjx44dpwC3b9++ifEsCgGwyWijIEQUaD5lXgC/jzDXh2W+1qqjrRDloEP/CuhLlQJ8BPM8bQzGiRBsGuZmYM0qMN6E723II7dhngPof4f5bzD3JWiSmWeYnDBGoWMoFDcEPgHt3dA9dNHrj0Uf07MBMp42JjgYp2K3M8HoC/T/hfYtGH2PdwGO9h/wnYf3vzG/FDxmU1ugTQEdfw/Eg3a0ToIfQOPd2xJCaYK/fFhs6PQdpVU7ljsiM+6OWsH35xokFd/TKSh3D/DPuI6FLLWIFsPyngIwXOknMAtPz1bDVTklw4l242L+UwgLC/tQ2/QTCsbG5KPtHa5/E4WzT9+hU3INvvuTjhU1d08z0NcogM052/9PxZ9fOsH46strd2pJF0Bvk6FrM3NsDE/S0f76l4OKjM4kLJMr1O9CrSGnX4YdNfNLUYe8e3th+RsT/b/mg6DR3gAAAABJRU5ErkJggg==',
                'data:image/png;base64,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',
                'data:image/png;base64,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',
                'data:image/png;base64,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'
            ],
            // 12: Difficult turn
            [
                'data:image/png;base64,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',
                'data:image/png;base64,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',
                'data:image/png;base64,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',
                'data:image/png;base64,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'
            ]
        ];
})();
