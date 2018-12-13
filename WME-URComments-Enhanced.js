// ==UserScript==
// @name        WME URComments-Enhanced
// @namespace   daniel@dbsooner.com
// @version     2018.12.12.04
// @description Handle WME update requests more quickly and efficiently.
// @grant       none
// @include     /^https:\/\/(www|beta)\.waze\.com\/(?!user\/)(.{2,6}\/)?editor\/?.*$/
// @require     https://greasyfork.org/scripts/24851-wazewrap/code/WazeWrap.js
// @author      dBsooner
// @license     MIT/BSD/X11
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAwCAYAAACFUvPfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQyQjZDNjdEODYzODExRTRBRDY0Q0I2QjA1MjU4N0EyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQyQjZDNjdFODYzODExRTRBRDY0Q0I2QjA1MjU4N0EyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDJCNkM2N0I4NjM4MTFFNEFENjRDQjZCMDUyNTg3QTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDJCNkM2N0M4NjM4MTFFNEFENjRDQjZCMDUyNTg3QTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6++Bk8AAANOElEQVR42tRZCWxU1xW9M39mPB5v431fMLYJdmpjthQUVsdlS9IQQkpIIDRhl5pKQUpbKkAEpakQIhVVRUytQIGwihCaBkgItQELQosxdrDZ7Njjbbx7vM0+f3ruZDz1NmTGhEj59tOb//979553313fl9jtdvqpXbLHRVgikTz0NbdJkyYJERERUp1OJ1Wr1WJLS4tYXFxswzu7s408+XFJ2g1oSUZGhtzf318piqLKx8dHZbPZFFKpVMC9TRAEs8lk0uNe39vbaywvL7eMBP5HAz179myZxWLxxfNg3IZHRkbG5OTkpEPSkQAs1Wq1nQUFBVXt7e2twNSGMdx3yuVyQ2FhofVHBw01kCsUigA8i1m9evXc3Nzc5TExMRMhUfnAOZC6VaPRlJ8+ffrzM2fOXMW9BvgazWZzD9TG8qOBZgnr9fqg5OTklPfff39bUlLSfL3ZKvmmqZ2q2rqoy2h2jAtSKmhsaBD9LDqUVAqZ/fbt29c2b978IfS9HCqjUalUXf0Sfyygp0+f7kB8584d6bhx4/xTU1PT9uzZk69WB2derdHSxQf1ZLTaRpyrlAmUkxpH05OiqbGxoWrjxo07Wltbb0KFNNevX+/FENEBmqUyWvCTJ0+WDPEKrh4S8oFXiDp+/HhedHT0M6fKvqWbDa0e0Z0YG05LMpPp/v37xWvXrn0XqlRWX1+vraysNEkfZu38zE1zXHPmzOH53ARuAQEBUuieBM2OJoaFhSl27NixAPr7TGFVo8eA+eKxPAc7Nen111/PgX5HxMXF+TIsmSe+1bkbEuintKamRoBeyqxWq6Knp0eA2xJAUAJ3Zce9+PTTT9tkMpkF7opgQEEwwjU6g4kKKhu83sWCynrKjg2jhQsXPrd///4L2Dkm0iv9PntiSUIF5JmZmSpMCsI2hwNMNBYSC4+QgLUkoE909vF4HoP3kVhY+Pz589Mh/czi+layiqLXoK2inXhuVFRUUlZWViIE45eSkiI8LCKyZAUAZbfki8sfxhA4bdq0+GXLluUmJCRMBqCxkHQY9E2BdxwY2iDtqtra2hsHDhy4jIVOYTqV8BIDr3ERakd/r0Xn9nf/9aBNx4YpmTlzZtrNmzcvBwUFuQXNIZaDgRJS84eDV8+bN2/cqlWr1rF+AqTMbDFRU72WdI29ZNZbSaGSKdQx/jFRcdExERGTZ6Snp/8GYbmGiXVBPQZeyyakOvrtX/7X7e/+S2f4ziXCPoIhaam73MMBGJcvBgXBP4bv3LnztSlTpmwAWOW9svtU/kkd1V/rINE23ONIBQnFTQuh1OciZXHJsSn8TBwy7NitB67g7O53/yX8386sHOqhgnbZSCrBEoaOqpVKZXReXt5W6OfC5uZGuvjnW9RU2v1QPbRZ7aS50kbVl5spY2kHLdg4i0L9lNRtMrvGDNx+d7/7rxCVj6Nva2vTArARPts21BClHR0dPqy7MKgIAOYItrD8ZgUdWXmFtCVdZIfYPGsILufqsBsipYYHjTpQpYWrCXjEixcv3oKX6oNXGgRasmDBAhkyMD+MCd21a9dKAF5QUVxB598uJZvR5nB9njZHcOm20oOva2lKfAT5yASvAXN0nIy5zc3NJRUVFd/CvvpY26QDsjABhqMEw0AYXQZ0eG1TUwOd+30pr9QrwA7Q+JfapVT0j1sE46BF4xO9Bv1sehIDF8+ePfsR7KmF01UOG/06LUGIFIKDg33hwtRvvPHGagzyOf9uMVlNVrdEx+ZEUdZLSZSYlkBymYK6ejrp/rVqupFfTT3NBodNNd1pp6IjJTRzxSRHcsR5hyfXL9LiaWJcOOcvJ/Pz8wvgSjud+bXLe0iR3yogIb+JEyeOiY+Pn1VRUkHaMt3I5Y5CSs/unkTjJ4wf9FwdGEJT54VQ1px0Or21kKqLWhGdZHRpXwn5h6goZ9F4ig5UEecgBsvIwghVKSHhRPjsYIIgv3jrrbfeMxqNWrhQA0DbXaChGhKkjwpI2W/JkiXsh4XS4xq3SdSczRnDAA+8fBS+9OKOuZS/4jPS1fUhlRTo0z8VUGeHjua+Ng3pp47+U9viGv8Egkp0oB+NCQlEehrI6mhEarpvw4YNfzMYDM3IEntPnjxpG1QjsmogPCtgnX6JiYnZJrPRISW7OBy0b4Ccsudkfu/2KuQ+NGXtGPrij9+QiD8b/vyDVWSDfVQ0dTrGBPjI6YUnk+mJyGDOF+wACCj1Xx47duwQ9Pge7ruReJmcdePgwjY8PFzKtRoinxKpZFJjbSNXESOCCc8IIgQdj/QyeUI8AkupA3DChCiaujCTyps7KF7tT2mQ7oSYMJJJyFp840beoUOHjiBM17OHAG8DUgTzgCJ3eDXOKSUsU4ZtUSDHUHc0drlVjYAYpcfWLyBL6KczY/kkkkgl9CQqE27skZAb30Cuve/ChQuFiA9aCM9YVFRke1gl7gKN1UkQtlnaUq7bLMglyA3omGzPA0VjdZODDjJwOrXlIl3PKiOFv5ySc8IoKT2BkMt8AL4VXMjCyPq+D+ywcw+AtbNKoFnkKplctItDPIZArx6cRWOSx3oMuvhgFfXTsejtVH2tyZHspuZGENwru68upAt9UDeLp4DJWXUQJyFI6kVMtvX19XWExquHBQsL/PX9As8T+Suffk0PLjcOCjZkl3CFR5Fjwnh3O2BDlv4kyJvA5QDNFYczizK3t7fXxMbHkVQhcUhpYCvaW0H7Vp+iqsoHDwX87xNF9MWOkmHzuTHdmLg4gg5XMz/m6+RPXkkamZOIbeItMty7d++WXCan1LnRHOaHtbpbzVT4QZljxTbRRof/8E/au+oEHd3+LxewygtNI87llga6TP/u3bulzI/5Mn+vz/JQMNpQdXCmrj948GBRbm7uqqmvjfOpOKsZcdK317T0l5c/JptJpM7671LV+jJCFvixw0O01ejcV++vphFU0XT48OEi2I+e8yrm77WkCwsLRURDM3S6j8t0RKPC1CfSaOysGLd61VrZSR11XYOetWl01Frd6XYO00sbP47gKQpRkmmZH/Nl/l6DZhMBWOT+FnY7nbt37z4Bwfcs3jaLfIOUXmd4IzWmw/SYLtNnPsyP+XrjOQaBhqO3wmfqwUBXVVVVjVj/kTooxL48fzYJPsKIRuVp4/lMh+kxXabPfJgf8x0taEcph2TbzPEev1v27t174dKlS6fGpqTSm0fnU0C4alQS5nk8n+mA3idMl+kzH+bntFAaLWiWNm+VHv6zHX3D1q1bD3/11VcnksYki7898yvKfGkMOHgGlsdlvphMPI/nMx3QO8R0nfT1Tn5en8e5zvIGFrZc6fDBDIhHwJfGvvLKK7NXrFjxa+QoIVptA109WUqlJ2uot1M/jKBcIaOpq9Jo+tIsio6O5RjQgWToo6NHj15C1G2AHrfA+PggxAgDdOUZ3pwlDgU9CDhcUgDcUxisPDIkJCQBCflzTz311BzUkUG1dTX01+c/Iat5sLd6YefPadaiGQy2+/r16wV79uz5rLOzUwNazdDhNtDqGQr4hwDtAg7GCpVK5YeQq4bUQyCpSDCOfeedd55HHTm/8MwV+nTzVdekJ+cn0Zu7XubsrWLNmjUfYpfq0Jqw8HaEah0KjT5OOYcC/qFAu87xAF6u0+mU2FJ/gOZTnkg8jz9w4MCm5OTkjL+/fYxun9eQOiqAfvf5ShQOEt26deve1Wg0d0FbC3VoR+tBns7StTgNzz7SIedoDJFGOGfmbbYhxzZBWj0A3c6SQ2vYtm1bPpKrruXvLSJ1tD+9ujeHfJV+Yl5e3n4EjkoGDJVoY8A8f0ColgykP6qvDCPp9NKlS6UlJSUyqIYMDAU+u8MYmfNLlD+kHQbgcYsXL56xadOm9XpDr9RPFUAFBQVfbtmy5Qho1rFb4zVjjhH31sDAQCvcHJ+7WLu7u22IitaBn94eRT1cugxg/CXKl8/vMEbOF/d8tIBxfIIaivvI7du3/zInJ2d2XV1dzcqVKz+EZDlb4tPzHrw3YryZQXNihN0y8yIw1xAREWE8d+5cv7o8EmhpSkqKHGWPH0Cr+XiMz4TZk3Apxh6tHziYx+J3KNYSCA+xaOfOnVeqq6ubQUuH941o7NYYlJULC4w14Z0ehtyLe37XY8SFOtD6HWa7d1newEVwkcuqwODQs5T5k4EvepY+PxMgMTkWwc9l4Gtfv379ebwX0QS89+HzE/Qc7fhs28qVCcYL/LUAcy0Od65QCJj7g3xmtrPBREVFOXJrMOdi1wYAnLbKISHWbWbOC+vg+XzPjZUV4/mrq5V7bpC2o7jghnszABv4EJH9NPhY+w9fHhl0dna2FQQNXE1gK01wdQpIhMexWjgAcyXt7LmxivEnGTvXmUyDF8D3zm13nCszcNZrVhN4HRaC2Z37G5X36P/YjtJLCA0NlfIRA38UQi+BtCT8Ycj5hVUy/NhAcIFgb8H3SqVSZCH4+fmJ7DmgguLjiIhDvwmyG+SyTALmHvtYLNIOcHaei5S0H5X9UYPL/wQYAOwQASZqvrLnAAAAAElFTkSuQmCC
// @contributionURL https://github.com/WazeDev/Thank-The-Authors
// ==/UserScript==

/*
 * Original concept and code for URComments (URC) was written by rickzabel and licensed under MIT/BSD/X11.
 * This script is a ground-up rewrite of URC. Special thanks is definitely given to rickzabel for his hard
 * work and dedication to the original script. You can reach him at rickzabel@gmail.com.
 *
 */

/* global GM_info */
/* global W */
/* global I18n */
/* global $ */
/* global WazeWrap */

(function() {
    'use strict';

    const SCRIPT_AUTHOR = GM_info.script.author;
    const SETTINGS_STORE_NAME = "WME_URC-E";
    const ALERT_UPDATE = true;
    const SCRIPT_VERSION = GM_info.script.version;
    const SCRIPT_VERSION_CHANGES = [ 'Initial release of URComments-Enhanced.','Official RC 1.' ];
    const doublClickIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGnRFWHRTb2Z0d2FyZQBQYWludC5ORVQgdjMuNS4xMDD0cqEAAAMnSURBVFhH7ZdNSFRRGIZH509ndGb8nZuCCSNE4CyGURmkTVCuBEmEiMSZBmaoRYsIgiDMhVFEFERBZITbEINQbFMtclGQtUgIalG0ioiMFkWlZc+53WN3rmfG64wSgS+8fOd8c8533u/83HPGsRZcLtedqqqqU0Z189De3q4ZxRyUlZVN+3y+EaNaENXV1VecTue8HZLYPO0v6B1jsZiG42soFErpDhPsCshkMgHM8npI7F/YP6ivr0+Wl5f/CAQCOSLsCkgmkyGMHtjtds8Q66Ig2Y5Jfx7+RV1dnS6CNT9kuBzUp5iZI0Y1L8wCEHzW4/Hs9Xq9MRJqEb7KysrHiPmM/w18JdvCXNTW1g4JEQTRRbS1tYkAOejt7Q12dnZqXV1d4VQq5RE+swAG+sKSfmImbkkB7LEo5QeNjY3DrP0x2RauBhkPof7ZwMCAHlygubm5o6KiYpyg76jKzsuIXULshFkA/Q9idUgBgmS+h/aXZN2gGul02i1sIpEgvm/M2DArHRlkP/5JUUbUE6uAmpqaEyTxgUE/Ch8JxPDfa2hoOM1yHJdtxTmfQpXYNDqZvplIJLKdHx3xeNxHgIcrjU0ks13slZuirBLQ2tq6MxwO72NfZYWPuPeJv4B9iX0u2zoIcpJMhiXpfJgfdPj9/huYnIElCwkg8ymEnzd4TfrzUI2mpqYO67SbaREwl81mi/kOCKsG6zSOWdVJ0iyAZVzo7u72MWPXqb+wS07DZawa1t1upVmAIIIno9HoNsqlo7+/f83ptAoQFFPKJluURNQE/vWDoxfG5AxopUqAgtNw/ZAC+PAMs74ZFfliapsugON0hqk8mo8csaeiXQGWJmADuCVgS8B/KoDv+r8V0NfX5zduqpLId0I8WIoDl9FbjDKwXXIXjGKLA52vYpSB7ZIHaAJbHDRN28HTaZGiMvha5B55NDs7S7EEcNmcwygHKESEfyeBOOXSMDg46OKVc5uiciAVxaxxUx6gvDFAhJOn0wiBv1FVDirJxn3Ns3s35Y0Hz+wWZmOUozXHe0D8xfrJgEvwPdf23WAwmO7p6fEazW3C4fgNPVAixOZacokAAAAASUVORK5CYII=';
    const DEBUG = true;
    const _loadBeginTime = performance.now();
    let _selUr = {};
    let _settings = {};
    let _commentList = [];
    let _alertBoxArray = [];
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
    let _urceInitialized = false;
    let _commentListLoaded = false;
    let _alertBoxInUse = false;
    let _restoreZoom, _$restoreTab, _restoreTabPosition, _wmeUserId;

    const _commentLists = [{idx:0, name:'CommentTeam', status:'enabled', oldVarName: 'CommentTeam', listOwner: 'CommentTeam', gSheetUrl: 'https://spreadsheets.google.com/feeds/list/1aVKBOwjYmO88x96fIHtIQgAwMaCV_NfklvPqf0J0pzQ/oz10sdb/public/values?alt=json' },
                           {idx:1, name:'Custom', status:'enabled', oldVarName:'Custom', listOwner: 'Custom', gSheetUrl: '', type: 'static' },
                           {idx:2, name:'USA - SCR', status:'enabled', oldVarName: 'USA_SouthCentral', listOwner: 'SCR CommentTeam', gSheetUrl: 'https://spreadsheets.google.com/feeds/list/1aVKBOwjYmO88x96fIHtIQgAwMaCV_NfklvPqf0J0pzQ/ope05au/public/values?alt=json' },
                           {idx:3, name:'USA - SER', status:'enabled', oldVarName: 'USA_Southeast', gSheetUrl: 'https://spreadsheets.google.com/feeds/list/1aVKBOwjYmO88x96fIHtIQgAwMaCV_NfklvPqf0J0pzQ/o35ezyr/public/values?alt=json' }
                          ].sort(dynamicSort('name'));

    function log(message) { console.log('URC-E:', message); }
    function logError(message) { console.error('URC-E:', message); }
    function logDebug(message) { if (DEBUG) console.log('URC-E:', message); }
    function logWarning(message) { console.warn('URC-E:', message); }

    function dynamicSort(property) {
        let sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            if (sortOrder == -1) {
                return b[property].localeCompare(a[property]);
            } else {
                return a[property].localeCompare(b[property]);
            }
        }
    }

    function loadSettingsFromStorage() {
        logDebug('Loading settings from storage.');
        let convertUrcSettings = false;
        let loadedSettings = $.parseJSON(localStorage.getItem(SETTINGS_STORE_NAME));
        if (loadedSettings && loadedSettings.lastVersion) {
            if (Object.keys(loadedSettings)[0].substring(0,1) === 'C') {
                logDebug('Converting settings keys to correct case.');
                const tempSettings = Object.entries(loadedSettings);
                let tempSettings2 = {};
                for (let idx = 0; idx < tempSettings.length; idx++) {
                    let key = tempSettings[idx][0].substring(0,1).toLowerCase();
                    key += tempSettings[idx][0].substring(1);
                    tempSettings2[key] = tempSettings[idx][1];
                }
                loadedSettings = tempSettings2;
            }
            _settings = loadedSettings;
        } else {
            if (localStorage.getItem('URCommentVersion') > '1.8.9') {
                convertUrcSettings = true;
                logDebug('Converting settings from URC ' + localStorage.getItem('URCommentVersion'));
            }
            _settings = {
                commentList: convertUrcSettings ? convertOldVarName(localStorage.getItem('BoilerPlateCreators')) : '0',
                autoCenterOnUr: convertUrcSettings ? (localStorage.getItem('WithCommentRecenter') === 'yes' ? true : false) : false,
                autoClickOpenSolvedNi: convertUrcSettings ? (localStorage.getItem('AutoClickURStatus') === 'yes' ? true : false) : false,
                autoCloseCommentWindow: convertUrcSettings ? (localStorage.getItem('UrCommentAutoCloseComment') === 'yes' ? true : false) : false,
                autoSaveAfterSolvedOrNiComment: convertUrcSettings ? (localStorage.getItem('SaveAfterComment') === 'yes' ? true : false) : false,
                autoSendReminders: convertUrcSettings ? (localStorage.getItem('URCommentsAutoSendMyReminders') === 'true') : false,
                autoSetNewUrComment: convertUrcSettings ? (localStorage.getItem('AutoSetNewComment') === 'yes' ? true : false) : false,
                autoSetReminderUrComment: convertUrcSettings ? (localStorage.getItem('UrCommentAutoSet4dayComment') === 'yes' ? true : false) : false,
                autoSwitchToUrCommentsTab: convertUrcSettings ? (localStorage.getItem('AutoSwitchToURCommentsTab') === 'yes' ? true : false) : false,
                autoZoomInOnNewUr: convertUrcSettings ? (localStorage.getItem('NewZoomIn') === 'yes' ? true : false) : false,
                autoZoomOutAfterComment: convertUrcSettings ? (localStorage.getItem('ZoomOutAfterComment') === 'yes' ? true : false) : false,
                disableDoneNextButtons: convertUrcSettings ? (localStorage.getItem('UrCommentDisableURDoneBtn') === 'true') : false,
                doNotShowTagNameOnPill: convertUrcSettings ? (localStorage.getItem('URCommentsDontShowTaggedText') === 'true') : false,
                doubleClickLinkNiComments: convertUrcSettings? (localStorage.getItem('DBLClk7DCAutoSend') === 'yes' || localStorage.getItem('DBLClkAll') === 'yes' ? true : false) : false,
                doubleClickLinkOpenComments: convertUrcSettings ? (localStorage.getItem('DBLClkAll') === 'yes' ? true : false) : false,
                doubleClickLinkSolvedComments: convertUrcSettings ? (localStorage.getItem('DBLClkAll') === 'yes' ? true : false) : false,
                replaceTagNameWithEditorName: convertUrcSettings ? (localStorage.getItem('URCommentsReplaceTagWithEditorName') === 'true') : false,
                unfollowUrAfterSend: convertUrcSettings ? (localStorage.getItem('URCommentURUnfollow') === 'true') : false,
                hideZoomOutLinks: false,
                reminderDays: convertUrcSettings? Math.min(13,Math.max(1,parseInt(localStorage.getItem('ReminderDays')))) : 3,
                closeDays: convertUrcSettings ? Math.min(14,Math.max(2,parseInt(localStorage.getItem('CloseDays')))) : 7,
                enableUrceUrFiltering: convertUrcSettings ? (localStorage.getItem('URCommentsFilterEnabled') === 'true') : false,
                enableUrPillCounts: convertUrcSettings ? (localStorage.getItem('URCommentsPillEnabled') === 'true') : false,
                onlyShowMyUrs: convertUrcSettings ? (localStorage.getItem('URCommentsHideNotMyUR') === 'true') : false,
                showOthersUrsPastReminderClose: convertUrcSettings ? (localStorage.getItem('URCommentsShowPastClose') === 'true') : false,
                hideClosedUrs: convertUrcSettings ? (localStorage.getItem('URCommentsHideClosed') === 'true') : false,
                hideTaggedUrs: convertUrcSettings ? (localStorage.getItem('URCommentsHideNotes') === 'true') : false,
                hideWaiting: convertUrcSettings ? (localStorage.getItem('URCommentsHideInbetween') === 'true') : false,
                hideUrsCloseNeeded: convertUrcSettings ? (localStorage.getItem('URCommentsHideCloseNeeded') === 'true') : false,
                hideUrsReminderNeeded: convertUrcSettings ? (localStorage.getItem('URCommentsHideReminderNeeded') === 'true') : false,
                hideUrsWithUserReplies: convertUrcSettings ? (localStorage.getItem('URCommentsHideReplies') === 'true') : false,
                hideUrsWoComments: convertUrcSettings ? (localStorage.getItem('URCommentsHideInital') === 'true') : false,
                hideUrsWoCommentsOrDescriptions: convertUrcSettings ? (localStorage.getItem('URCommentsHideWithoutDescript') === 'true') : false,
                hideUrsWoCommentsWithDescriptions: convertUrcSettings ? ( localStorage.getItem('URCommentsHideWithDescript') === 'true') : false,
                wmeUserId: null,
                commentListCollapses: {},
                lastVersion: null
            };
            if (_settings.reminderDays >= _settings.closeDays) {
                _settings.reminderDays = (_settings.closeDays - 1) < 0 ? 0 : (_settings.closeDays - 1);
            }
            _settings.reminderDays = Math.min(13,Math.max(0,parseInt(_settings.reminderDays)));
            if (_settings.closeDays <= _settings.reminderDays) {
                _settings.closeDays = (_settings.reminderDays + 1) > 14 ? 14 : (_settings.reminderDays + 1);
            }
            _settings.closeDays = Math.min(14,Math.max(1,parseInt(_settings.closeDays)));
        }
        if (_settings.wmeUserId !== _wmeUserId) _settings.wmeUserId = _wmeUserId;
    }

    async function saveSettingsToStorage() {
        if (localStorage) {
            if (_settings.commentListCollapses === undefined) _settings.commentListCollapses = {};
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
        if (_alertBoxArray.length > 0) buildAlertBoxFromArray();
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
        if (typeof _alertBoxArray[0].tickAction === 'function') alertBoxTickAction = _alertBoxArray[0].tickAction;
        if (_alertBoxArray[0].hasCross) {
            $('#urceAlertCrossBtnCaption').text(_alertBoxArray[0].crossText);
            $('#urceAlertCrossBtn').css('visibility', 'visible');
            if(typeof _alertBoxArray[0].crossAction === "function") alertBoxCrossAction = _alertBoxArray[0].crossAction;
        } else {
            $('#urceAlertCrossBtn').css('visibility', 'hidden');
        }
        $('#urceAlertTickBtn').off('click');
        $('#urceAlertTickBtn').on('click', function() {
            if (alertBoxTickAction !== null) alertBoxTickAction();
            closeAlertBox();
        });
        $('#urceAlertCrossBtn').off('click');
        $('#urceAlertCrossBtn').on('click', function() {
            if (alertBoxCrossAction !== null) alertBoxCrossAction();
            closeAlertBox();
        });
        $('#urceAlertBox').css('visibility', 'visible');
        _alertBoxArray.shift();
    }

    function showAlertBox(headerIcon, title, content, hasCross, tickText, crossText, tickAction, crossAction) {
        _alertBoxArray.push( { headerIcon: headerIcon, title: title, content: content, hasCross: hasCross, tickText: tickText, crossText: crossText, tickAction: tickAction, crossAction: crossAction });
        if (!_alertBoxInUse) buildAlertBoxFromArray();
    }

    function showScriptInfoAlert() {
        if (ALERT_UPDATE && SCRIPT_VERSION !== _settings.lastVersion) {
            let releaseNotes = '';
            releaseNotes += '<p>' + GM_info.script.name + '<br>v' + SCRIPT_VERSION + '<br><br>What\'s New:</p>';
            if (SCRIPT_VERSION_CHANGES.length > 0) {
                releaseNotes += '<ul>';
                for (let idx=0; idx < SCRIPT_VERSION_CHANGES.length; idx++) {
                    releaseNotes += '<li>' + SCRIPT_VERSION_CHANGES[idx];
                }
                releaseNotes += '</ul>';
            } else {
                releaseNotes += '<ul><li>Nothing major.</ul>';
            }
            if (!_settings.lastVersion) releaseNotes += '<p>This is the first time you have loaded URComments-Enhanced. If you have previously used URC, your URC settings have been copied into URC-E.</p>';
            showAlertBox('fa-info-circle', 'URC-E Release Notes', releaseNotes, false, "OK", "", null, null);
        }
    }

    function convertOldVarName(oldVarName) {
        const filterArr = _commentLists.filter(obj => obj.oldVarName === oldVarName);
        return filterArr.length > 0 ? filterArr[0].idx : 0;
    }

    function isChecked(checkboxId) {
        return $('#' + checkboxId).is(':checked');
    }

    function changeSetting(settingId, settingVal) {
        _settings[settingId] = settingVal;
        saveSettingsToStorage();
    }

    function getCollapsedGroups() {
        return new Promise((resolve) => {
            let $getDivs = $('div[id$="_body"]');
            let rObj = {};
            for (let idx = 0; idx < $getDivs.length; idx++) {
                let div = $getDivs[idx];
                if (div.id.indexOf('urceComments-for-') > -1) {
                    rObj[div.id] = $(div).hasClass('collapse');
                }
            }
            resolve(rObj);
        });
    }

    function getUrSessionsAsync(urIds, tries) {
        return new Promise((resolve,reject) => {
            (async function retry(urIds, tries) {
                tries = tries || 1;
                let urSessionsObj;
                try {
                    urSessionsObj = await W.model.updateRequestSessions.getAsync(urIds);
                } catch(error) {
                    let msg = 'Error retreiving urSessions async for urIds: ' + urIds.join(', ') + ' on try ' + tries + '.';
                    if (tries < 50) msg += ' Retrying.';
                    logDebug(msg);
                }
                if (tries > 49 && !urSessionsObj) {
                    reject('50 tries at getting urSessions async have elapsed. Stopping loop.');
                } else if (!urSessionsObj) {
                    setTimeout(retry, 100, urIds, ++tries);
                } else {
                    resolve(urSessionsObj);
                }
            })(urIds, null);
        });
    }

    function getMapUrsAsync(urIds, tries) {
        return new Promise((resolve,reject) => {
            (async function retry(urIds, tries) {
                tries = tries || 1;
                let mapUrsObj;
                try {
                    mapUrsObj = await W.model.mapUpdateRequests.getByIds(urIds);
                } catch(error) {
                    let msg = 'Error retrives mapUpdateRequests async for urIds: ' + urIds.join(', ') + ' on try ' + tries + '.';
                    if (tries < 50) msg += ' Retrying.';
                    logDebug(msg);
                }
                if (tries > 49 && !mapUrsObj) {
                    reject('50 tries at getting mapUpdateRequests async have elapsed. Stopping loop.');
                } else if (!mapUrsObj) {
                    setTimeout(retry, 100, urIds, ++tries);
                } else {
                    resolve(mapUrsObj);
                }
            })(urIds, null);
        });
    }

    function handleAfterCommentMutation(urId) {
        logDebug('Handling new comment mutation for urId: ' + urId);
        let unsavedDetected = _selUr.unsavedDetected;
        let newStatus = _selUr.newStatus;
        let doubleClick = _selUr.doubleClick;
        if (_settings.unfollowUrAfterSend) unfollowUrAfterSend(urId);
        if ((_settings.autoCloseCommentWindow && !newStatus) || doubleClick) {
            autoCloseUrPanel();
        } else {
            if (unsavedDetected && _settings.autoSaveAfterSolvedOrNiComment && (newStatus === 'solved' || newStatus === 'notidentified')) {
                logWarning('Unsaved changes detected and comment will require a save.');
                showAlertBox('fa-exclamation-circle', I18n.t('urce.prompts.UnsavedEditsHeader'), I18n.t('urce.prompts.UnsavedEdits'), true, I18n.t('urce.common.Yes'), I18n.t('urce.common.No'), clickSaveButton, null);
            } else if (!unsavedDetected && _settings.autoSaveAfterSolvedOrNiComment && (newStatus === 'solved' || newStatus === 'notidentified')) {
                clickSaveButton();
            } else {
                try {
                    handleUrLayer('sendComment')
                } catch(error) {
                    logWarning(error);
                }
            }
        }
    }

    function handleAfterCloseUpdateContainer(urId) {
        let unsavedDetected = _selUr.unsavedDetected;
        let newStatus = _selUr.newStatus;
        if (unsavedDetected && _settings.autoSaveAfterSolvedOrNiComment && (newStatus === 'solved' || newStatus === 'notidentified')) {
            logWarning('Unsaved changes detected and comment will require a save.');
            showAlertBox('fa-exclamation-circle', I18n.t('urce.prompts.UnsavedEditsHeader'), I18n.t('urce.prompts.UnsavedEdits'), true, I18n.t('urce.common.Yes'), I18n.t('urce.common.No'), clickSaveButton, null);
        } else if (!unsavedDetected && _settings.autoSaveAfterSolvedOrNiComment && (newStatus === 'solved' || newStatus === 'notidentified')) {
            clickSaveButton();
        } else {
            if (_settings.autoZoomOutAfterComemnt) autoZoomOut();
            if (_settings.autoSwitchToUrCommentsTab) autoSwitchToPrevTab();
            try {
                handleUrLayer('sendComment')
            } catch(error) {
                logWarning(error);
            }
        }
        _selUr = {};
    }

    function handleAfterSave() {
        if (_settings.autoZoomOutAfterComemnt) autoZoomOut();
        if (_settings.autoSwitchToUrCommentsTab) autoSwitchToPrevTab();
        try {
            handleUrLayer('save');
        } catch(error) {
            logWarning(error);
        }
    }

    async function handleUpdateRequestContainer(urId) {
        let commentNum, urSessionObj, mapUrsObj;
        _selUr.handling = true;
        logDebug('Handling update request container mutation. urId: ' + urId);
        try {
            urSessionObj = await getUrSessionsAsync([urId]);
        } catch(error) {
            logError(error);
            return;
        }
        try {
            mapUrsObj = await getMapUrsAsync([urId]);
        } catch(error) {
            logDebug(error);
            return;
        }
        const urData = urSessionObj[0];
        const mUrObj = mapUrsObj[0];
        _selUr.urOpen = mUrObj.attributes.open;
        _selUr.unsavedDetected = await checkForUnsavedChanges();
        if (_settings.autoSwitchToUrCommentsTab) autoSwitchToUrceTab();
        if ($('#panel-container .problem-edit .conversation').hasClass('collapsed')) {
            logDebug('Expanding conversation list.');
           $('#panel-container .problem-edit .conversation').removeClass('collapsed');
        }
        if (_settings.disableDoneNextButtons) {
            logDebug('Removing the done / next buttons.');
            $('#panel-container .content .navigation').css({'display':'none'});
        }
        logDebug('Setting event hook for center on UR crosshairs in UR panel title bar.');
        $('#panel-container > div > div > div.top-section > div.header > div.title > div > a.focus').off('click', handleUrPanelCrosshairsClick);
        $('#panel-container > div > div > div.top-section > div.header > div.title > div > a.focus').on('click', {mUrObj:mUrObj}, handleUrPanelCrosshairsClick);
        logDebug('Waiting 250ms before scrolling to bottom of the conversation list to give it time to load.');
        await setTimeout(scrollToBottom, 250);
        if (urData.comments.length === 0) {
            commentNum = Object.values(_defaultComments).find(defaultComment => { return defaultComment.urNum === mUrObj.attributes.type }).commentNum;
            if (_settings.autoSetNewUrComment) {
                if (_settings.autoZoomInOnNewUr) autoZoomIn(urId);
                if (_selUr.urOpen) {
                    if (_settings.autoClickOpenSolvedNi) autoClickOpenSolvedNi(commentNum);
                    try {
                        await postUrComment(_commentList[commentNum].comment);
                    } catch(error) {
                        logError(error);
                        showAlertBox('fa-exclamation-circle', I18n.t('urce.common.ErrorHeader'), I18n.t('urce.prompts.CommentInsertTimedOut'), false, 'OK', '', null, null);
                    }
                }
            }
        } else if (urData.comments.length === 1) {
            commentNum = _defaultComments.dr.commentNum;
            if (_settings.autoCenterOnUr) autoCenterOnUr(urId);
            const lastCommentBy = urData.comments[(urData.comments.length - 1)].userID;
            const commentDaysOld = urData.comments[(urData.comments.length - 1)].createdOn === null ? -1 : uroDateToDays(urData.comments[(urData.comments.length - 1)].createdOn);
            if (_settings.autoSetReminderUrComment && urData.comments.length > 0 && _settings.reminderDays !== 0 &&commentDaysOld > (_settings.reminderDays - 1) && lastCommentBy > 1) {
                if (_selUr.urOpen) {
                    if (_settings.autoZoomInOnNewUr) autoZoomIn(urId);
                    if (_settings.autoClickOpenSolvedNi) autoClickOpenSolvedNi(commentNum);
                    try {
                        await postUrComment(_commentList[commentNum].comment);
                    } catch(error) {
                        logError(error);
                        showAlertBox('fa-exclamation-circle', I18n.t('urce.common.ErrorHeader'), I18n.t('urce.prompts.CommentInsertTimedOut'), false, 'OK', '', null, null);
                    }
                }
            }
        } else {
            if (_settings.autoCenterOnUr) autoCenterOnUr(urId);
        }
    }

    async function handleClickedComment(commentNum, doubleClick) {
        const urId = _selUr.urId || getUrId();
        logDebug('Handling clicked comment. commentNum: ' + commentNum + ' | doubleClick: ' + doubleClick);
        _selUr.doubleClick = doubleClick;
        if (!$('.new-comment-text')[0]) {
            logWarning('No comment box found after clicking a comment from the list.');
            showAlertBanner(I18n.t('urce.prompts.NoCommentBox'), 5000);
            return;
        }
        if (!urId) {
            logError('No urId was found.');
            return;
        }
        if (doubleClick) {
            $('.new-comment-text').off('blur', autoClickSendButton);
            $('.new-comment-text').on('blur', autoClickSendButton);
        }
        if (_settings.autoClickOpenSolvedNi && _selUr.urOpen) autoClickOpenSolvedNi(commentNum);
        try {
            await postUrComment(_commentList[commentNum].comment);
        } catch(error) {
            logError(error);
            showAlertBox('fa-exclamation-circle', I18n.t('urce.common.ErrorHeader'), I18n.t('urce.prompts.CommentInsertTimedOut'), false, 'OK', '', null, null);
            return;
        }
    }

    function autoSwitchToUrceTab() {
        logDebug('Switching to URC-E > Comments tab.');
        _$restoreTab = $('#user-tabs > ul > li.active > a');
        _restoreTabPosition = $($('#user-info .tab-content')[0]).scrollTop();
        $('a[href="#sidepanel-urc-e"]').trigger('click');
        $('a[href="#panel-urce-comments"]').trigger('click');
        $($('#user-info .tab-content')[0]).scrollTop(0);
    }

    function autoSwitchToPrevTab() {
        if ($(_$restoreTab)) {
            logDebug('Switching to previous tab.');
            $(_$restoreTab).click();
            $($('#user-info .tab-content')[0]).scrollTop(_restoreTabPosition);
            _$restoreTab = null;
            _restoreTabPosition = null;
        }
    }

    function scrollToBottom() {
        logDebug('Scrolling to the bottom of comment list.');
        $('.top-section').scrollTop($('.top-section')[0].scrollHeight);
    }

    function handleUrPanelCrosshairsClick(event) {
        logDebug('Handling UR Panel crosshairs click event.');
        const mUrObj = event.data.mUrObj;
        const x = (mUrObj.attributes.geometry.realX === undefined) ? mUrObj.attributes.geometry.x : mUrObj.attributes.geometry.realX;
        const y = mUrObj.attributes.geometry.y;
        W.map.setCenter([x,y], 5);
    }

    function unfollowUrAfterSend(urId) {
        logDebug('Unfollowing UR: ' + urId);
        W.model.updateRequestSessions.objects[urId].setFollowing('false');
    }

    function autoCloseUrPanel() {
        logDebug('Clicking close on UR panel.');
        $("#panel-container > div > div > div.top-section > a").trigger('click')
    }

    function checkForUnsavedChanges() {
        logDebug('Checking for unsaved changes.');
        return new Promise((resolve) => {
            let result = ($('#edit-buttons > div > div.toolbar-button.waze-icon-save').hasClass('ItemDisabled') !== true) ? true : false;
            resolve(result);
        });
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
        window.confirm = function(msg) {
            // Dummy confirm to prevent WME from being able to send confirmations during auto clicking
            return true;
        }
        $('.problem-edit .body').scrollTop($('.problem-edit .body')[0].scrollHeight);
        if (_commentList[commentNum].urstatus === 'notidentified' && _selUr.newStatus !== 'notidentified') {
            logDebug('Clicking Not Identified');
            $('input[value="not-identified"]').trigger('click');
        } else if (_commentList[commentNum].urstatus === 'solved' && _selUr.newStatusn !== 'solved') {
            logDebug('Clicking Solved.');
            $('input[value="solved"]').trigger('click');
        } else if (_commentList[commentNum].urstatus === 'open' && (_selUr.newStatus === 'solved' || _selUr.newStatus === 'notidentified')) {
            logDebug('Clicking Open.');
            $('input[value="open"]').trigger('click');
        }
        logDebug('Unmasking confirm function.');
        window.confirm = confirmHold;
    }

    function autoZoomIn(urId) {
        logDebug('Checking zoom level and zooming in on UR if zoom level is less than 4.');
        const zoom = 4;
        _restoreZoom = getZoomLevel();
        if (_restoreZoom < zoom) {
            logDebug('Zooming to 4 from ' + _restoreZoom + '.');
            let x = (W.model.mapUpdateRequests.objects[urId].attributes.geometry.realX === undefined) ? W.model.mapUpdateRequests.objects[urId].attributes.geometry.x : W.model.mapUpdateRequests.objects[urId].attributes.geometry.realX;
            let y = (W.model.mapUpdateRequests.objects[urId].attributes.geometry.realY === undefined) ? W.model.mapUpdateRequests.objects[urId].attributes.geometry.y : W.model.mapUpdateRequests.objects[urId].attributes.geometry.realY;
            W.map.setCenter([x,y], 5);
        }
    }

    function autoCenterOnUr(urId) {
        logDebug('Checking zoom level and centering on UR if zoom level is less than 3.');
        let _restoreZoom = getZoomLevel();
        if (_restoreZoom < 3) {
            logDebug('Centering on UR because zoom level is ' + _restoreZoom + '.');
            let x = (W.model.mapUpdateRequests.objects[urId].attributes.geometry.realX === undefined) ? W.model.mapUpdateRequests.objects[urId].attributes.geometry.x : W.model.mapUpdateRequests.objects[urId].attributes.geometry.realX;
            let y = (W.model.mapUpdateRequests.objects[urId].attributes.geometry.realY === undefined) ? W.model.mapUpdateRequests.objects[urId].attributes.geometry.y : W.model.mapUpdateRequests.objects[urId].attributes.geometry.realY;
            W.map.setCenter([x,y], _restoreZoom);
        }
    }

    function autoZoomOut() {
        _restoreZoom = _restoreZoom || 4;
        logDebug('Zooming out to ' + _restoreZoom + '.');
        W.map.setCenter(W.map.getCenter(), _restoreZoom);
        _restoreZoom = null;
    }

    function getZoomLevel() {
        logDebug('Getting zoom level: ' + W.map.mapState.mapLocation.zoom);
        return W.map.mapState.mapLocation.zoom;
    }

    function formatText(text) {
        if (text.indexOf('$URD') > 0) {
            if ($('#update-request-panel .solution p').length > 0) {
                text = text.replace('$URD', $('#update-request.panel .solution p').text()).replace(/\n+/gmi, '');
            } else if ($('.description .content').length > 0) {
                text = text.replace('$URD', $('.description .content').text()).replace(/\n+/gmi, '').replace('$USERNAME', W.model.loginManager.user.userName);
            } else {
                text = text.replace(' "$URD"', '');
            }
        }
        if (text.indexOf('$SELSEGS') > 0) {
            let selFeatures = W.selectionManager.getSelectedFeatures();
            let streetName;
            if (selFeatures.length > 0 && selFeatures.length < 3) {
                for (let idx = 0; idx < selFeatures.length; idx++) {
                    if (selFeatures[idx].model.CLASS_NAME === 'W.Feature.Vector.Segment') {
                        if (selFeatures.length === 1) {
                            streetName = W.model.streets.objects[selFeatures[idx].model.attributes.primaryStreetID].name;
                        } else {
                            if (idx === 0) {
                                streetName = 'the intersection of ' + W.model.streets.objects[selFeatures[idx].model.attributes.primaryStreetID].name + ' and ';
                            } else {
                                streetName += W.model.streets.objects[selFeatures[idx].model.attributes.primaryStreetID].name;
                            }
                        }
                    }
                }
                if (streetName && streetName.length > 0) {
                    text = text.replace('$SELSEGS', streetName);
                } else {
                    text = text.replace('$SELSEGS', '');
                }
            }
        }
        return text.replace(/\\[r|n]+/gmi, '\n');
    }

    function postUrComment(comment) {
        return new Promise((resolve, reject) => {
            (function retry(comment, tries) {
                logDebug('Attemping to insert comment into comment box. Tries: ' + tries);
                if (tries > 100) {
                    reject('Timed out waiting for the comment text box to become available.');
                } else if (!$('.new-comment-text')[0]) {
                    setTimeout(retry, 100, comment, ++tries);
                } else {
                    $('.new-comment-text').val(formatText(comment)).change().keyup();
                    $('.new-comment-text').blur();
                    resolve();
                }
            })(comment, 1);
        });
    }

    function showAlertBanner(message, delay) {
        let dateNow = new Date().getTime();
        let width = message.length * 10;
        $('#map').append('<div id="urceMessage" style="width:100%; font-size:15px; font-weight:bold; margin-left:auto; position:absolute; top:0px; left:10px; z-index:1000;"></div>');
        $('#urceMessage').append('<div id="urceMapNote' + dateNow + '" style="width:' + width + 'px; font-size: 15px; font-weight:bold; margin-left:auto; margin-right:auto; background-color:orange;"><center><b>' + message + '</b></center></div>');
        $('#urceMapNote' + dateNow).show().delay(delay).queue(function() {
            $('#urceMessage').remove();
            $(this).remove();
        });
    }

    function updateUrMapMarkers(urIds, urSessionsObj, mapUrsObj) {
        const tagRegex = '/.*\[(ROADWORKS|CONSTRUCTION|CLOSURE|EVENT|NOTE|WSLM|BOG|DIFFICULT)\].*/gi';
        for (let idx = 0; idx < urIds.length; idx++) {
            const urId = urIds[idx];
            const $node = $(`[data-id="${urId}"]`);
            if (_settings.enableUrPillCounts) {
                const urData = urSessionsObj[idx];
                const mUrObj = mapUrsObj[idx];
                const urDesc = mUrObj.attributes.description;
                const urCommentCount = urData.comments.length;
                const wmeUsername = W.model.loginManager.user.userName;
                let commentDaysOld, lastCommentBy, fullText, tagType, urCountBackground, tagContent, tagOffset;
                let commentUserIds = [];
                if (urCommentCount > 0) {
                    commentDaysOld = uroDateToDays(urData.comments[(urCommentCount-1)].createdOn);
                    lastCommentBy = urData.comments[(urCommentCount-1)].userID;
                    fullText = urDesc ? urDesc + ' ' : '';
                    for (let idx = 0; idx < urCommentCount; idx++) {
                        fullText += urData.comments[idx].text + ' ';
                        commentUserIds.push(urData.comments[idx].userID);
                    }
                } else {
                    fullText = urDesc ? urDesc : '';
                    commentDaysOld = uroDateToDays(mUrObj.attributes.driveDate);
                }
                tagType = (fullText.search(tagRegex) > -1) ? fullText.replace(tagRegex, '$1') : null;
                if (!tagType || _settings.replaceTagNameWithEditorName) {
                    const regex = new RegExp(' ' + wmeUsername + ' ', 'gi');
                    tagType = fullText.search(regex) > -1 ? wmeUsername : tagType;
                }
                urCountBackground = '#FFFF99';
                const curEditorHasCommented = commentUserIds.indexOf(_wmeUserId) > -1 ? true : false;
                if (_wmeUserId === lastCommentBy) urCountBackground = '#FFFFFF';
                if (curEditorHasCommented && lastCommentBy < 1) urCountBackground = '#79B5C7';
                if (_wmeUserId !== lastCommentBy && lastCommentBy < 1 && commentDaysOld < _settings.closeDays) urCountBackground = '#FFCC99';
                if (_wmeUserId !== lastCommentBy && lastCommentBy > 1 && commentDaysOld > (_settings.closeDays - 1)) urCountBackground = '#FF8B8B';
                if (tagType) urCountBackground = '#CCCCCC';
                if (commentDaysOld === null || commentDaysOld === '' || commentDaysOld === undefined) commentDaysOld = (urCommentCount === '0') ? '0' : '?';
                if (tagType && _settings.doNotShowTagNameOnPill) {
                    tagContent = urCommentCount + 'c ' + commentDaysOld + 'd';
                    tagOffset = Math.round(tagContent.length * 2.28);
                } else if (tagType) {
                    tagContent = tagType + ' ' + urCommentCount + 'c';
                    tagOffset = (tagContent.length < 10) ? Math.round(tagContent.length * 2.86) : Math.round(tagContent.length * 3.33);
                } else {
                    tagContent = urCommentCount + 'c ' + commentDaysOld + 'd';
                    tagOffset = Math.round(tagContent.length * 2.28);
                }
                tagOffset = '-' + tagOffset + 'px';
                if (urCountBackground === '#CCCCCC') {
                    $($node).css({'z-index':'999'});
                } else if (urCountBackground === '#FFFFFF'|| urCountBackground === '#79B5C7') {
                    $($node).css({'z-index':'998'});
                } else if (urCountBackground === '#FF8B8B') {
                    $($node).css({'z-index':'997'});
                }
                if ($(`#urceCounters-${urId}`).length > 0) {
                    logDebug('Updating marker counters on UR marker for UR: ' + urId);
                    $(`#urceCounters-${urId}`).remove();
                } else {
                    logDebug('Adding marker counters on UR marker for UR: ' + urId);
                }
                $($node).append(
                    $('<div>', {id:`urceCounters-${urId}`}).css('clear', 'both').css('margin-bottom', '10px').append(
                        $('<div>').html(tagContent).css({'color':'black', 'background-color':urCountBackground, 'position':'absolute', 'top':'30px', 'right':tagOffset, 'display':'block', 'width':'auto', 'white-space':'nowrap', 'padding-left':'5px', 'padding-right':'5px', 'border':'1px solid', 'border-radius':'25px'}).addClass('urceCounts')
                    )
                );
            } else {
                if ($(`#urceCounters-${urId}`).length > 0) {
                    logDebug('Removing marker counters on UR marker for UR: ' + urId);
                    $(`#urceCounters-${urId}`).remove();
                }
            }
        }
    }

    function filterUrMapMarkers(urIds, urSessionsObj, mapUrsObj) {
        const tagRegex = '/.*\[(ROADWORKS|CONSTRUCTION|CLOSURE|EVENT|NOTE|WSLM|BOG|DIFFICULT)\].*/gi';
        for (let idx = 0; idx < urIds.length; idx++) {
            const urId = urIds[idx];
            const $node = $(`[data-id="${urId}"]`);
            if (_settings.enableUrceUrFiltering || _settings.autoSendReminders) {
                const urData = urSessionsObj[idx];
                const mUrObj = mapUrsObj[idx];
                const urDesc = mUrObj.attributes.description;
                const urOpen = mUrObj.attributes.open;
                const urReminderSent = mUrObj.attributes.reminderSent;
                const urCommentCount = urData.comments.length;
                const wmeUsername = W.model.loginManager.user.userName;
                let commentDaysOld, lastCommentBy, fullText, tagType;
                let commentUserIds = [];
                let hideUr = false;
                let needsReminder = false;
                let needsClosed = false;
                let urWaiting = false;
                if (urCommentCount > 0) {
                    commentDaysOld = uroDateToDays(urData.comments[(urCommentCount-1)].createdOn);
                    lastCommentBy = urData.comments[(urCommentCount-1)].userID;
                    fullText = urDesc ? urDesc + ' ' : '';
                    for (let idx = 0; idx < urCommentCount; idx++) {
                        fullText += urData.comments[idx].text + ' ';
                        commentUserIds.push(urData.comments[idx].userID);
                    }
                    if (urCommentCount === 1) {
                        if (lastCommentBy > 1) {
                            if (_settings.reminderDays !== 0 && commentDaysOld > (_settings.reminderDays - 1)) {
                                if (_wmeUserId === lastCommentBy && !urReminderSent && _settings.autoSendReminders) {
                                    showAlertBanner(I18n.t('urce.prompts.ReminderMessageAuto') + ' ' + urId, 3000);
                                    W.model.updateRequestSessions.objects[urId].addComment(_defaultComments.dr.commentNum);
                                    W.model.mapUpdateRequests.objects[urId].attributes.reminderSent = 'true';
                                    if (_settings.unfollowUrAfterSend) unfollowUrAfterSend(urId);
                                    urWaiting = true;
                                } else {
                                    needsReminder = true;
                                }
                            } else {
                                urWaiting = true;
                            }
                        }
                    }
                    if (urCommentCount > 1) {
                        if (lastCommentBy > 1) {
                            if (commentDaysOld > (_settings.closeDays - 1)) {
                                if (_wmeUserId === lastCommentBy) {
                                    needsClosed = true;
                                } else {
                                    if (commentDaysOld < (_settings.reminderDays + _settings.closeDays)) urWaiting = true;
                                }
                            } else {
                                urWaiting = true;
                            }
                        }
                    }
                } else {
                    fullText = urDesc ? urDesc : '';
                    commentDaysOld = uroDateToDays(mUrObj.attributes.driveDate);
                }
                tagType = (fullText.search(tagRegex) > -1) ? fullText.replace(tagRegex, '$1') : null;
                if (!tagType) {
                    const regex = new RegExp(' ' + wmeUsername + ' ', 'gi');
                    tagType = fullText.search(regex) > -1 ? wmeUsername : null;
                }
                if ((_settings.hideClosedUrs && !urOpen) ||
                    (_settings.hideTaggedUrs && tagType) ||
                    (_settings.hideWaiting && urWaiting) ||
                    (_settings.needsClosed && needsClosed) ||
                    (_settings.hideUrsReminderNeeded && needsReminder) ||
                    (_settings.hideUrsWithUserReplies && lastCommentBy < 1) ||
                    (_settings.hideUrsWoComments && urCommentCount === 0) ||
                    (_settings.hideUrsWoCommentsOrDescriptions && !urDesc && urCommentCount === 0) ||
                    (_settings.hideUrsWoCommentsWithDescriptions && urDesc && urCommentCount === 0) ||
                    (_settings.onlyShowMyUrs && commentUserIds.indexOf(_wmeUserId) === -1)) hideUr = true;
                // Put this here so it can be toggled separately from onlyShowMy and it overrides other hiding.
                if (_settings.showOthersUrsPastReminderClose && commentUserIds.indexOf(_wmeUserId) === -1 && commentDaysOld > (_settings.reminderDays + _settings.CloseDays)) hideUr = false;
                if (hideUr && _settings.enableUrceUrFiltering) {
                    logDebug('Hiding UR marker for UR: ' + urId);
                    $($node).hide();
                } else {
                    logDebug('Unhiding UR marker for UR: ' + urId);
                    $($node).show();
                }
            } else {
                logDebug('Unhiding UR marker for UR: ' + urId);
                $($node).show();
            }
            logDebug('Setting event listener on ' + urId);
            $($node).off('click', handleUrMarkerClick);
            $($node).on('click', handleUrMarkerClick);
        }
    }

    async function handleUrMapMarkers(urIds) {
        let urSessionsObj, mapUrsObj;
        urIds = urIds.sort();
        try {
            urSessionsObj = await getUrSessionsAsync(urIds);
            urSessionsObj.sort(function (a, b) {
                return a.id - b.id;
            });
        } catch(error) {
            logDebug(error);
            return;
        }
        try {
            mapUrsObj = await getMapUrsAsync(urIds);
        } catch(error) {
            logDebug(error);
            return;
        }
        filterUrMapMarkers(urIds, urSessionsObj, mapUrsObj);
        updateUrMapMarkers(urIds, urSessionsObj, mapUrsObj);
    }

    function handleUrLayer(phase) {
        return new Promise(async (resolve,reject) => {
            switch(phase) {
                case 'init':
                    logDebug('Checking for UR markers already present before URC-E completed initialization.');
                    break;
                case 'save':
                    logDebug('Updating UR markers after save.');
                    break;
                case 'close':
                    logDebug('Updating UR markers after closing UR panel.');
                    break;
                case 'settingsToggle':
                    logDebug('Updating UR markers after a setting toggle.');
                    break;
                case 'sendComment':
                    logDebug('Updating UR markers after sending a comment.');
                    break;
                default:
                    reject('No phase available in request.');
                    return;
            }
            let urList = [];
            let urMapMarkerIds = [];
            for (let urId in W.map.updateRequestLayer.markers) {
                if (urMapMarkerIds.indexOf(urId) === -1) urMapMarkerIds.push(urId);
            }
            if (urMapMarkerIds.length > 0) {
                try {
                    await handleUrMapMarkers(urMapMarkerIds);
                } catch(error) {
                    reject(error);
                    return;
                }
            }
            resolve();
        });
    }

    function handleUrMarkerClick() {
        if ($(this).hasClass('user-generated') || $(this).hasClass('has-comments')) {
            if (!(_selUr.urId > 0)) {
                _selUr.urId = $(this).attr('data-id');
                logDebug('Clicked UR: ' + _selUr.urId);
            }
        }
    }

    function getUrId() {
        if (!(_selUr.urId > 0)) {
            logWarning('Had to get the urId from the back yard. Please let dBsooner know.');
            _selUr.urId = $(".update-requests .selected").data("id")
        }
    }

    async function changeCommentList(commentListIdx) {
        commentListIdx = parseInt(commentListIdx || 0);
        if (commentListIdx != _settings.commentList) {
            logDebug('Switching comment list from ' + _commentLists[_settings.commentList].name + ' to ' + _commentLists[commentListIdx].name + '.');
            _settings.commentList = parseInt(commentListIdx);
            const buildCommentListResult = await buildCommentList(commentListIdx);
            if (buildCommentListResult.error) {
                handleBuildCommentListError(buildCommentListResult.error);
            }
            saveSettingsToStorage();
        }
    }

    function getCommentListInfo(commentListIdx) {
        commentListIdx = parseInt(commentListIdx || _settings.commentList);
        return _commentLists.find(cList => { return cList.idx === commentListIdx });
    }

    function checkForStaticListArray(oldVarName) {
        return new Promise((resolve, reject) => {
            (function checking(oldVarName, tries) {
                tries = tries || 1;
                if (tries > 100) {
                    reject('Timed out waiting for static list variable to be set.');
                } else if (!window['Urcomments' + oldVarName + 'Array2']) {
                    setTimeout(checking, 100, oldVarName, ++tries);
                } else {
                    resolve();
                }
            })(oldVarName, null);
        });
    }

    function convertCommentListStatic(commentListIdx) {
        return new Promise(async (resolve, reject) => {
            commentListIdx = parseInt(commentListIdx || _settings.commentList);
            let oldVarName = getCommentListInfo(commentListIdx).oldVarName;
            try {
                await checkForStaticListArray(oldVarName);
            } catch (error) {
                reject(error);
                return;
            }
            let oldUrcArr = window['Urcomments' + oldVarName + 'Array2'];
            let defaultReminderIdx = window['Urcomments' + oldVarName + 'ReminderPosistion'];
            let closedNiIdx = window['Urcomments' + oldVarName + 'CloseNotIdentifiedPosistion'];
            let data = { 'feed': {
                'entry': [ ]
            } };
            let entryIdx;
            logDebug('Converting static comment list to URC-E format for comment list: ' + oldVarName);
            data.feed.entry[0] = { 'title': {'$t':'2018.11.28.01'} };
            data.feed.entry[1] = { 'title': {'$t':'TITLE|COMMENT|URSTATUS|DR|DC|IT|IA|IR|MRA|GE|TNA|IJ|MBO|WDD|ME|MR|ML|BR|MSN|ISPS|SL'} };
            if (oldUrcArr[0].search(/<br>/gi) === -1) {
                data.feed.entry[2] = { 'title': {'$t':'||GROUP TITLE||||||||||||||||||'} };
                entryIdx = 3;
            } else {
                entryIdx = 2;
            }
            for (let oldUrcArrIdx = 0; oldUrcArrIdx < oldUrcArr.length; oldUrcArrIdx = oldUrcArrIdx + 3) {
                let temp;
                let title = oldUrcArr[oldUrcArrIdx];
                let comment = oldUrcArr[oldUrcArrIdx+1];
                let urstatus = oldUrcArr[oldUrcArrIdx+2] != '' ? oldUrcArr[oldUrcArrIdx+2].toLowerCase() : '';
                if (title.search(/<br>/gi) > -1) {
                    urstatus = 'GROUP TITLE';
                    title = $("<div>").html(title).text();
                }
                temp = title+'|'+comment+'|'+urstatus;
                temp += (oldUrcArrIdx == defaultReminderIdx) ? '|default_is_true' : '|';
                temp += (oldUrcArrIdx == closedNiIdx) ? '|default_is_true' : '|';
                for (let i=6; i<24; i++) {
                    if (i === 17 || i === 20) continue;
                    temp += (window['Urcomments' + oldVarName + 'def_names'][i] == title) ? '|default_is_true' : '|';
                }
                data.feed.entry[entryIdx] = { 'title': { '$t':temp} };
                entryIdx++;
            }
            resolve(data);
        });
    }

    function processCommentListJson(data) {
        return new Promise((resolve,reject) => {
            logDebug('Procesing comment list data.');
            if (data) {
                const EXPECTED_FIELD_NAMES = ['TITLE','COMMENT','URSTATUS','DR','DC','IT','IA','IR','MRA','GE','TNA','IJ','MBO','WDD','ME','MR','ML','BR','MSN','ISPS','SL'];
                let ssFieldNames, groupDivId;
                let checkFieldNames = fldName => ssFieldNames.indexOf(fldName) > -1;
                let commentId = 0
                let blankGroup = 0;
                let doubleClickLinkNiComments = _settings.doubleClickLinkNiComments;
                let doubleClickLinkOpenComments = _settings.doubleClickLinkOpenComments;
                let doubleClickLinkSolvedComments = _settings.doubleClickLinkSolvedComments;
                for (let entryIdx = 0; entryIdx < data.feed.entry.length; entryIdx++) {
                    let cellValue = data.feed.entry[entryIdx].title.$t;
                    if (entryIdx === 0) {
                        if (SCRIPT_VERSION < cellValue) {
                            reject('Script must be updated to at least version ' + cellValue + ' before comment definitions can be loaded.');
                            return;
                        }
                    } else if(entryIdx === 1) {
                        ssFieldNames = cellValue.split('|').map(fldName => fldName.trim());
                        if (ssFieldNames.length !== EXPECTED_FIELD_NAMES.length) {
                            reject('Expected ' + EXPECTED_FIELD_NAMES.length + ' columns in comment definition data. Spreadsheet returned ' + ssFieldNames.length + '.');
                            return;
                        } else if (!EXPECTED_FIELD_NAMES.every(fldName => checkFieldNames(fldName))) {
                            reject('Script expected to see the following column names in the comment definition spreadsheet:\n' + EXPECTED_FIELD_NAMES.join(', ') + '\nHowever, the spreadsheet returned these:\n' + ssFieldNames.join(', '));
                            return;
                        }
                    } else {
                        let splitRow = cellValue.split('|');
                        let rObj = {};
                        for (let i=0; i<splitRow.length; i++) {
                            let rObjKey = ssFieldNames[i].trim().toLowerCase();
                            rObj[rObjKey] = rObjKey === 'comment' ? splitRow[i] : rObjKey === 'title' ? splitRow[i].trim() : splitRow[i].trim().toLowerCase();
                        }
                        splitRow = rObj;
                        if (splitRow.title === 'URCE_REMOVED_SO_SKIP') {
                            // Nothing to do here. Move along. This is a comment that has been set to 'REMOVED' in the spreadsheet.
                            logDebug('SKIPPING a removed comment.');
                        } else if (splitRow.title === 'URCE_ERROR') {
                            // UH OH . This is bad. Something broke in the arrayformula on the spradsheet.
                            reject('There is an unknown error in the spreadsheet output. Please contact the list owner.');
                            return;
                        } else if (splitRow.urstatus === 'group title') {
                            // Group title row. Nothing to set in the arrays, but build html.
                            groupDivId = 'urceComments-for-';
                            if (splitRow.title != '') {
                                groupDivId += splitRow.title.replace(/[^\w]+/gi, '').toLowerCase();
                                if (splitRow.title === splitRow.title.toUpperCase()) {
                                    if (splitRow.title.length > 25) {
                                        splitRow.titleMouseOver = splitRow.title;
                                        splitRow.title = splitRow.title.substring(0, 25) + '...';
                                    }
                                } else if (splitRow.title.length > 30) {
                                    splitRow.titleMouseOver = splitRow.title;
                                    splitRow.title = splitRow.title.substring(0, 30) + '...';
                                }
                            } else {
                                groupDivId += 'blankGroup' + (++blankGroup);
                            }
                            let collapsed;
                            if (_settings.commentListCollapses.hasOwnProperty(_settings.commentList)) {
                                let cListCollapses = _settings.commentListCollapses[_settings.commentList];
                                collapsed = (cListCollapses.hasOwnProperty(groupDivId+'_body')) ? (cListCollapses[groupDivId+'_body'] === true) ? 'collapse' : '' : '';
                            } else {
                                collapsed = '';
                            }
                            let chevron = (collapsed === 'collapse') ? 'fa-chevron-right' : 'fa-chevron-down';
                            $('#_commentList').append(
                                $('<fieldset>', {id:groupDivId, class:'URCE-field'}).append(
                                    $('<legend>', {class:'URCE-legend'}).append(
                                        $('<i>', {class:`fa fa-fw ${chevron} URCE-chevron`}),
                                        $('<span>', {class:'URCE-span', title:splitRow.titleMouseOver}).text(splitRow.title)
                                    ).click(function() {
                                        $($(this).children()[0]).toggleClass('fa fa-fw fa-chevron-down');
                                        $($(this).children()[0]).toggleClass('fa fa-fw fa-chevron-right');
                                        $($(this).siblings()[0]).toggleClass('collapse');
                                        saveSettingsToStorage();
                                    })
                                ).append(
                                    $('<div>', {id:groupDivId+'_body', class:collapsed})
                                )
                            )
                        } else {
                            // SHOULD be a normal comments row, push values to arrays and build html.
                            if (splitRow.urstatus !== 'solved' && splitRow.urstatus !== 'notidentified' && splitRow.urstatus !== 'open' && splitRow.urstatus !== 'blank line') {
                                return reject('Your current selected list does not have a status set for ' + splitRow.title + '. Please contact list owner.');
                            } else {
                                _commentList[commentId] = { 'title':splitRow.title, 'comment':splitRow.comment, 'urstatus':splitRow.urstatus };
                                if (Object.values(splitRow).indexOf('default_is_true') > -1) {
                                    let drIdx = ssFieldNames.indexOf('DR');
                                    let splitRowDefaultCommentsBoolean = Object.values(splitRow).slice(drIdx);
                                    for (let boolIdx = 0; boolIdx < splitRowDefaultCommentsBoolean.length; boolIdx++) {
                                        if (splitRowDefaultCommentsBoolean[boolIdx].toLowerCase() === 'default_is_true') {
                                            _defaultComments[ssFieldNames[(boolIdx+drIdx)].toLowerCase()].commentNum = commentId;
                                        }
                                    }
                                }
                                let linkClass;
                                let divDoubleClickId;
                                let divDoubleClickClass;
                                let divDoubleClickStyle = 'display:initial;';
                                if (splitRow.urstatus === 'solved') {
                                    linkClass = 'URCE-solvedLink';
                                    divDoubleClickId = 'URCE-divDoubleClickSolved';
                                    if (!doubleClickLinkSolvedComments) {
                                        divDoubleClickStyle = 'display:none;';
                                    }
                                } else if (splitRow.urstatus === 'notidentified') {
                                    linkClass = 'URCE-niLink';
                                    divDoubleClickId = 'URCE-divDoubleClickNi';
                                    if (!doubleClickLinkNiComments) {
                                        divDoubleClickStyle = 'display:none;';
                                    }
                                } else {
                                    linkClass = 'URCE-openLink';
                                    divDoubleClickId = splitRow.title != '' ? 'URCE-divDoubleClickOpen' : 'URCE-divDoubleClickOpen-Hidden';
                                    divDoubleClickClass = splitRow.title != '' ? 'URCE-divDoubleClick' : 'URCE-divDoubleClick-Hidden';
                                    if (!doubleClickLinkOpenComments || splitRow.urstatus === 'blank line') {
                                        divDoubleClickStyle = 'display:none;';
                                    }
                                }
                                $(`#${groupDivId}_body`).append(
                                    $('<div>').append(
                                        $('<a>', {class:'URCE-Comments', id:'urce-cid-'+commentId, title:splitRow.comment, class:linkClass + ' URCE-Comments'}).text(splitRow.title).click(function() {
                                            handleClickedComment(parseInt(this.id.replace(/urce-cid-/, '')), false);
                                        })
                                    ).append(
                                        $('<div>', {class:'URCE-divDoubleClick', id:divDoubleClickId, style:divDoubleClickStyle, title:I18n.t('urce.common.DoubleClickTitle') + '\n' + splitRow.comment}).append(
                                            $('<img>', {src:doublClickIcon, class:'URCE-doubleClickIcon', id:'urce-img-cid-'+commentId}).dblclick(function() {
                                                handleClickedComment(parseInt(this.id.replace(/urce-img-cid-/, '')), true);
                                            })
                                        )
                                    ).append(
                                        $('<br>')
                                    ),
                                )
                                commentId++;
                            }
                        }
                    }
                }
            } else {
                reject('No data passed to the JSON processing function.');
                return;
            }
            resolve();
        });
    }

    function commentListAsync(commentListIdx) {
        commentListIdx = parseInt(commentListIdx || _settings.commentList);
        logDebug('Beginning comment list async for comment list: ' + getCommentListInfo(commentListIdx).name);
        return new Promise((resolve, reject) => {
            $.get({
                url: getCommentListInfo(commentListIdx).gSheetUrl,
                success: function(data) {
                    resolve(data);
                },
                error: function() {
                    reject('An error occurred while loading the selected comment lists definition spreadsheet.');
                }
            });
        });
    }

    async function buildCommentList(commentListIdx) {
        commentListIdx = parseInt(commentListIdx || _settings.commentList);
        logDebug('Building comment list for: ' + getCommentListInfo(commentListIdx).name);
        _commentListLoaded = false;
        let data, result;
        $('#_commentList').empty();
        $('#_commentList').append(
            $('<div>', {class:'URCE-commentListName'}).text(I18n.t('urce.prefs.CommentList') + ': ' + getCommentListInfo(_settings.commentList).name)
        );
        _commentList = [];
        if (getCommentListInfo(commentListIdx).type === 'static') {
            try {
                data = await convertCommentListStatic(commentListIdx);
            } catch (error) {
                return {error:error};
            }
            try {
                await processCommentListJson(data);
            } catch (error) {
                return {error:error};
            }
        } else {
            try {
                data = await commentListAsync(commentListIdx);
            } catch (error) {
                return {error:error};
            }
            try {
                await processCommentListJson(data);
            } catch (error) {
                return {error:error};
            }
        }
        $('#_selCommentList').val(_settings.commentList);
        _commentListLoaded = true;
        return {error:false};
    }

    function handleBuildCommentListError(error) {
        logError(error);
        _commentListLoaded = false;
        $('#_commentList').empty();
        $('#_commentList').append(
            $('<div>', {class:'URCE-divLoading'}).text(I18n.t('urce.common.ErrorGeneric'))
        );
    }

    function initMutationObservers(status) {
        let saveButtonObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if ($(mutation.target).hasClass('waze-icon-save') && mutation.type === 'attributes' && mutation.attributeName === 'class' && mutation.target.classList.contains('ItemDisabled')) {
                    if (mutation.oldValue.toString().indexOf('ItemDisabled') === -1) {
                        handleAfterSave();
                    }
                }
            });
        });
        let urPanelContainerObserver = new MutationObserver(function(mutations) {
            let urId = _selUr.urId || getUrId();
            mutations.forEach(function(mutation) {
                if ($(mutation.target).is('#panel-container') && mutation.type === 'childList' && mutation.addedNodes.length > 0 && urId > 0) {
                    handleUpdateRequestContainer(urId);
                } else if ($(mutation.target).is('#panel-container') && mutation.type === 'childList' && mutation.removedNodes.length > 0 && urId > 0) {
                    handleAfterCloseUpdateContainer(urId);
                } else if ($(mutation.target).hasClass('comment-list') && mutation.type === 'childList' && mutation.addedNodes.length > 0 && urId > 0) {
                    handleAfterCommentMutation(urId);
                } else if (mutation.type === 'attributes' && mutation.attributeName === 'data-state') {
                    logDebug('Handling UR status change mutation.');
                    if (mutation.target.attributes['data-state'].nodeValue === 'open') {
                        _selUr.newStatus = 'open';
                    } else if (mutation.target.attributes['data-state'].nodeValue === 'solved') {
                        _selUr.newStatus = 'solved';
                    } else if (mutation.target.attributes['data-state'].nodeValue === 'not-identified') {
                        _selUr.newStatus = 'notidentified';
                    } else {
                        logWarning(mutation.target.attributes['data-state'].nodeValue);
                    }
                }
            });
        });
        let urMarkerObserver = new MutationObserver(function(mutations) {
            let urMapMarkerIds = [];
            let i = 0;
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    for (let idx = 0; idx < mutation.addedNodes.length; idx++) {
                        const addedNode = mutation.addedNodes[idx];
                        if (addedNode.classList && addedNode.classList.contains('map-marker') && (addedNode.classList.contains('user-generated') || addedNode.classList.contains('map-marker'))) {
                            const urId = addedNode.getAttribute('data-id');
                            if (urId > 0 && urMapMarkerIds.indexOf(urId) === -1) urMapMarkerIds.push(urId);
                        }
                    }
                } else if (mutation.type === 'attributes' && mutation.target.classList && (mutation.target.classList.contains('user-generated') || mutation.target.classList.contains('has-comments'))) {
                    if ((!mutation.oldValue || !mutation.oldValue.match(/\bselected\b/)) && mutation.target.classList.contains('selected')) {
                        if (mutation.target.attributes['data-id'].nodeValue > 0) {
                            if (!_selUr.handling) {
                                _selUr.urId = mutation.target.attributes['data-id'].nodeValue;
                                logDebug('Caught selected UR by backdoor. Firing the minions. urId: ' + _selUr.urId);
                                handleUpdateRequestContainer(_selUr.urId);
                            }
                        }
                    }
                }
            });
            if (urMapMarkerIds.length > 0) {
                handleUrMapMarkers(urMapMarkerIds);
            }
        });
        if (status === 'enable' && (!saveButtonObserver.isObserving || !urPanelContainerObserver.isObserving || !urMarkerObserver.isObserving)) {
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
        } else if (status === 'disable' && (saveButtonObserver.isObserving || urPanelContainerObserver.isObserving || urMarkerObserver.isObserving)) {
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
        }
    }

    async function initBackgroundTasks() {
        logDebug('Initializing background tasks.');
        let parentLayerEnabled = $('#layer-switcher-group_issues').is(':checked');
        let mapIssuesEnabled = $('#layer-switcher-group_map_issues').is(':checked');
        let openUrsEnabled = $('#layer-switcher-item_update_requests').is(':checked');
        let closedUrsEnabled = $('#layer-switcher-item_closed_update_requests').is(':checked');
        logDebug('Setting event hooks on layer toggles.');
        $('#layer-switcher-group_issues').change(function() {
            if (!$(this).is(':checked')) {
                initMutationObservers('disable');
            } else {
                mapIssuesEnabled = $('#layer-switcher-group_map_issues').is(':checked');
                openUrsEnabled = $('#layer-switcher-item_update_requests').is(':checked');
                closedUrsEnabled = $('#layer-switcher-item_closed_update_requests').is(':checked');
                if ((mapIssuesEnabled) && (openUrsEnabled || closedUrsEnabled)) {
                    initMutationObservers('enable');
                } else {
                    initMutationObservers('disable');
                }
            }
        });
        $('#layer-switcher-group_map_issues').change(function() {
            if (!$(this).is(':checked')) {
                initMutationObservers('disable');
            } else {
                openUrsEnabled = $('#layer-switcher-item_update_requests').is(':checked');
                closedUrsEnabled = $('#layer-switcher-item_closed_update_requests').is(':checked');
                if (openUrsEnabled || closedUrsEnabled) {
                    initMutationObservers('enable');
                } else {
                    initMutationObservers('disable');
                }
            }
        });
        $('#layer-switcher-item_update_requests').change(function() {
            closedUrsEnabled = $('#layer-switcher-item_closed_update_requests').is(':checked');
            if (!$(this).is(':checked') && !closedUrsEnabled) {
                initMutationObservers('disable');
            } else {
                initMutationObservers('enable');
            }
        });
        $('#layer-switcher-item_closed_update_requests').change(function() {
            openUrsEnabled = $('#layer-switcher-item_update_requests').is(':checked');
            if (!$(this).is(':checked') && !openUrsEnabled) {
                initMutationObservers('disable');
            } else {
                initMutationObservers('enable');
            }
        });
        if (parentLayerEnabled && mapIssuesEnabled && (openUrsEnabled || closedUrsEnabled)) {
            try {
                await handleUrLayer('init');
            } catch(error) {
                logWarning(error);
                // Don't need to return here, go ahead and setup the MOs.
            }
            initMutationObservers('enable');
        }
    }

    function injectCss() {
        logDebug('Injecting CSS.');
        let css = [
            // Comments tab
            '#sidepanel-urc-e #panel-urce-comments .URCE-Comments { text-decoration:none; cursor:pointer; color: #000000; font-size:12px; }',
            '#sidepanel-urc-e #panel-urce-comments .URCE-commentListName { padding-left:12px; font-size:12px; }',
            '#sidepanel-urc-e #panel-urce-comments .URCE-divLoading { text-align:left; color:red; font-size:11px; }',
            '#sidepanel-urc-e #panel-urce-comments .URCE-divCCLinks { text-align:center; }',
            '#sidepanel-urc-e #panel-urce-comments .URCE-divIcon { height:0px; position:relative; top:-3px; left:-100px; }',
            '#sidepanel-urc-e #panel-urce-comments .URCE-icon { cursor:default; }',
            '#sidepanel-urc-e #panel-urce-comments .URCE-chevron { cursor:pointer; font-size:12px; margin-right: 4px; }',
            '#sidepanel-urc-e #panel-urce-comments .URCE-solvedLink { color:#008F00; }',
            '#sidepanel-urc-e #panel-urce-comments .URCE-niLink { color:#E68A00; }',
            '#sidepanel-urc-e #panel-urce-comments .URCE-openLink { color:#000000; }',
            '#sidepanel-urc-e #panel-urce-comments .URCE-doubleClickIcon { padding-bottom:4px; height:16px; float:right; }',
            '#sidepanel-urc-e #panel-urce-comments .URCE-divDoubleClick { display:inline; }',
            '#sidepanel-urc-e #panel-urce-comments .URCE-span { cursor:pointer; }',
            // Settings tab
            '#sidepanel-urc-e #panel-urce-settings .URCE-divWarningPre { margin-left:3px; }',
            '#sidepanel-urc-e #panel-urce-settings .URCE-divWarning { display:inline; }',
            '#sidepanel-urc-e #panel-urce-settings .URCE-divWarningTitle { color:red; text-decoration:underline; }',
            '#sidepanel-urc-e #panel-urce-settings .URCE-divDaysInput { padding-left:25px !important; }',
            '#sidepanel-urc-e #panel-urce-settings .URCE-daysInput { width:38px; height:20px; }',
            '#sidepanel-urc-e #panel-urce-settings .URCE-span { text-transform:uppercase; }',
            // Common
            '#sidepanel-urc-e .URCE-field { border:1px solid silver; padding:8px; border-radius:4px; -webkit-padding-before:0; }',
            '#sidepanel-urc-e .URCE-legend { margin-bottom:0px; border-bottom-style:none; width:auto; }',
            '#sidepanel-urc-e .URCE-divCC { padding-top:2px !important; }',
            '#sidepanel-urc-e .URCE-label { white-space:pre-line; }',
            '#sidepanel-urc-e .URCE-span { font-size:14px; font-weight:600; }',
            '#sidepanel-urc-e .URCE-spanTitle { font-size:14px; font-weight:600; }',
            '#sidepanel-urc-e .URCE-spanVersion { font-size:11px; margin-left:10px; color:#aaa; }',
            '#sidepanel-urc-e .URCE-divTabs { padding:8px; padding-top:2px; }',
            // Main Tabs
            '.URCE-tabIcon { padding-bottom:6px; width:18px; }',
            // Alert Box
            '#urceAlertBox { position:fixed; visibility:hidden; top:50%; left:50%; z-index:10000; background-color:aliceBlue; border-width:3px; border-style:solid; border-radius:10px; box-shadow:5px 5px 10px silver; padding:4px; -webkit-transform:translate(-50%, -50%); transform:translate(-50%, -50%); }',
            '.URCE-alertBox-header { padding:4px; background-color:LightBlue; font-weight:bold; font-size:14px; }',
            '.URCE-alertBox-content { padding:4px; background-color:White; overflow:auto; max-height:500px; }',
            '.URCE-alertBox-controls { text-align:center; padding:4px; }',
            '.URCE-alertBox-controls-span-urceAlertTickBtn, .URCE-alertBox-controls-span-urceAlertCrossBtn { cursor:pointer; font-size:14px; border:thin outset black; padding:2px 10px 2px 10px; }',
            '.URCE-alertBox-controls-span-urceAlertTickBtnCaption, .URCE-alertBox-controls-span-urceAlertCrossBtnCaption { font-weight:bold; }'
        ].join(' ');
        $('<style = type="text/css">' + css + '</style>').appendTo('head');
    }

    function initCommentsTab() {
        logDebug('Initializing Comments tab.');
        $('#panel-urce-comments').append(
            $('<div>', {id:'_divZoomOutLinks', class:'controls-container URCE-divCCLinks'}).append(
                $('<div>', {id:'urceIcon', class:'URCE-divIcon'}).append(
                    $('<img>', {src:GM_info.script.icon, class:'URCE-icon'})
                ),
                $('<a>', {id:'zoomOutLink1', class:'URCE-Comments', title:I18n.t('urce.commentsTab.ZoomOutLink1Title')}).text(I18n.t('urce.commentsTab.ZoomOutLink1')).append('<br>'),
                $('<a>', {id:'zoomOutlink2', class:'URCE-Comments', title:I18n.t('urce.commentsTab.ZoomOutLink2Title')}).text(I18n.t('urce.commentsTab.ZoomOutLink2')).append('<br>'),
                $('<a>', {id:'zoomOutlink3', class:'URCE-Comments', title:I18n.t('urce.commentsTab.ZoomOutLink3Title')}).text(I18n.t('urce.commentsTab.ZoomOutLink3')).append('<br>')
            ).append(function() {
                if (_settings.hideZoomOutLinks) $(this).hide();
            }),
            $('<div>', {id:'_commentList', class:'controls-container URCE-divCC'}).append(
                $('<div>', {class:'URCE-divLoading'}).text(I18n.t('urce.common.Loading') + ' ' + getCommentListInfo().name + ' comment list. ' + I18n.t('urce.common.PleaseWait') + '...')
            )
        )
    }

    function initSettingsTab() {
        logDebug('Initializing Settings tab.');
        $('#panel-urce-settings').append(
            // Comment List
            $('<fieldset>', {class:'URCE-field'}).append(
                $('<legend>', {class:'URCE-legend'}).append(
                    $('<span>', {class:'URCE-span'}).text(I18n.t('urce.prefs.CommentList'))
                ),
                $('<div>', {class:'controls-container URCE-divCC'}).append(function() {
                    let $selList = $('<select>', {id:'_selCommentList', urceprefs:'commentList'});
                    _commentLists.forEach(cList => {
                        if (cList.status === 'disabled') {
                            return;
                        } else if (cList.idx === _settings.commentList) {
                            $selList.append($('<option>', {value:cList.idx, selected:true}).text(cList.name));
                        } else {
                            $selList.append($('<option>', {value:cList.idx}).text(cList.name));
                        }
                    });
                    return $selList.val(_settings.commentList).change(function() {
                        changeCommentList($(this).val());
                    });
                }),
            ),
            // URC-E Preferences
            $('<fieldset>', {class:'URCE-field'}).append(
                $('<legend>', {class:'URCE-legend'}).append(
                    $('<span>', {class:'URCE-span'}).text(I18n.t('urce.prefs.UrcePrefs'))
                ),
                $('<div>', {class:'controls-container URCE-divCC'}).append(
                    $('<input>', {type:'checkbox', id:'_cbAutoCenterOnUr', urceprefs:'urce'}).change(function() { changeSetting('autoCenterOnUr', $(this).is(':checked')); }).prop('checked', _settings.autoCenterOnUr),
                    $('<label>', {for:'_cbAutoCenterOnUr', title:I18n.t('urce.prefs.AutoCenterOnUrTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoCenterOnUr')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbAutoClickOpenSolvedNi', urceprefs:'urce'}).change(function() {
                        _settings.autoClickOpenSolvedNi = $(this).is(':checked');
                        if (!$(this).is(':checked')) {
                            if (isChecked('_cbAutoSaveAfterSolvedOrNiComment')) {
                                _settings.autoSaveAfterSolvedOrNiComment = false;
                                $('#_cbAutoSaveAfterSolvedOrNiComment').prop('checked', false);
                            }
                            if (isChecked('_cbDoubleClickLinkNiComments')) {
                                _settings.doubleClickLinkNiComments = false;
                                $('#_cbDoubleClickLinkNiComments').prop('checked', false);
                            }
                            if (isChecked('_cbDoubleClickLinkOpenComments')) {
                                _settings.doubleClickLinkOpenComments = false;
                                $('#_cbDoubleClickLinkOpenComments').prop('checked', false);
                            }
                            if (isChecked('_cbDoubleClickLinkSolvedComments')) {
                                _settings.doubleClickLinkSolvedComments = false;
                                $('#_cbDoubleClickLinkSolvedComments').prop('checked', false);
                            }
                        }
                        saveSettingsToStorage();
                    }).prop('checked', _settings.autoClickOpenSolvedNi),
                    $('<label>', {for:'_cbAutoClickOpenSolvedNi', title:I18n.t('urce.prefs.AutoClickOpenSolvedNiTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoClickOpenSolvedNi')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbAutoCloseCommentWindow', urceprefs:'urce'}).change(function() { changeSetting('autoCloseCommentWindow', $(this).is(':checked')); }).prop('checked', _settings.autoCloseCommentWindow),
                    $('<label>', {for:'_cbAutoCloseCommentWindow', title:I18n.t('urce.prefs.AutoCloseCommentWindowTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoCloseCommentWindow')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbAutoSaveAfterSolvedOrNiComment', urceprefs:'urce'}).change(function() {
                        _settings.autoSaveAfterSolvedOrNiComment = $(this).is(':checked');
                        if ($(this).is(':checked') && !isChecked('_cbAutoClickOpenSolvedNi')) {
                            _settings.autoClickOpenSolvedNi = true;
                            $('#_cbAutoClickOpenSolvedNi').prop('checked', true);
                        }
                        saveSettingsToStorage();
                    }).prop('checked', _settings.autoSaveAfterSolvedOrNiComment),
                    $('<label>', {for:'_cbAutoSaveAfterSolvedOrNiComment', title:I18n.t('urce.prefs.AutoSaveAfterSolvedOrNiCommentTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoSaveAfterSolvedOrNiComment')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbAutoSendReminders', urceprefs:'urce'}).change(function() { changeSetting('autoSendReminders', $(this).is(':checked')); }).prop('checked', _settings.autoSendReminders),
                    $('<label>', {for:'_cbAutoSendReminders', title:I18n.t('urce.prefs.AutoSendRemindersTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoSendReminders')),
                    $('<div>', {class:'URCE-divWarning URCE-divWarningPre'}).text('(').append(
                        $('<div>', {class:'URCE-divWarning URCE-divWarningTitle', title:I18n.t('urce.prefs.AutoSendRemindersWarningTitle')}).text(I18n.t('urce.prefs.AutoSendRemindersWarning')),
                    ).append(
                        $('<div>', {class:'URCE-divWarning'}).text(')')
                    ),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbAutoSetNewUrComment', urceprefs:'urce'}).change(function() { changeSetting('autoSetNewUrComment', $(this).is(':checked')); }).prop('checked', _settings.autoSetNewUrComment),
                    $('<label>', {for:'_cbAutoSetNewUrComment', title:I18n.t('urce.prefs.AutoSetNewUrCommentTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoSetNewUrComment')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbAutoSetReminderUrComment', urceprefs:'urce'}).change(function() { changeSetting('autoSetReminderUrComment', $(this).is(':checked')); }).prop('checked', _settings.autoSetReminderUrComment),
                    $('<label>', {for:'_cbAutoSetReminderUrComment', title:I18n.t('urce.prefs.AutoSetReminderUrCommentTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoSetReminderUrComment')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbAutoSwitchToUrCommentsTab', urceprefs:'urce'}).change(function() { changeSetting('autoSwitchToUrCommentsTab', $(this).is(':checked')); }).prop('checked', _settings.autoSwitchToUrCommentsTab),
                    $('<label>', {for:'_cbAutoSwitchToUrCommentsTab', title:I18n.t('urce.prefs.AutoSwitchToUrCommentsTabTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoSwitchToUrCommentsTab')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbAutoZoomInOnNewUr', urceprefs:'urce'}).change(function() { changeSetting('autoZoomInOnNewUr', $(this).is(':checked')); }).prop('checked', _settings.autoZoomInOnNewUr),
                    $('<label>', {for:'_cbAutoZoomInOnNewUr', title:I18n.t('urce.prefs.AutoZoomInOnNewUrTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoZoomInOnNewUr')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbAutoZoomOutAfterComment', urceprefs:'urce'}).change(function() { changeSetting('autoZoomOutAfterComment', $(this).is(':checked')); }).prop('checked', _settings.autoZoomOutAfterComment),
                    $('<label>', {for:'_cbAutoZoomOutAfterComment', title:I18n.t('urce.prefs.AutoZoomOutAfterCommentTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoZoomOutAfterComment')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbDisableDoneNextButtons', urceprefs:'urce'}).change(function() {
                        changeSetting('disableDoneNextButtons', $(this).is(':checked'));
                        if ($(this).is(':checked')) {
                            $('#panel-container .content .navigation').css({'display':'none'});
                        } else {
                            $('#panel-container .content .navigation').css({'display':'block'});
                        }
                    }).prop('checked', _settings.disableDoneNextButtons),
                    $('<label>', {for:'_cbDisableDoneNextButtons', title:I18n.t('urce.prefs.DisableDoneNextButtonsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.DisableDoneNextButtons')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbDoubleClickLinkNiComments', urceprefs:'urce'}).change(function() {
                        _settings.doubleClickLinkNiComments = $(this).is(':checked');
                        if (!$(this).is(':checked')) {
                            $('div#URCE-divDoubleClickNi').hide();
                        } else {
                            if (!isChecked('_cbAutoClickOpenSolvedNi')) {
                                _settings.autoClickOpenSolvedNi = true;
                                $('#_cbAutoClickOpenSolvedNi').prop('checked', true);
                            }
                            $('div#URCE-divDoubleClickNi').show();
                        }
                        saveSettingsToStorage();
                    }).prop('checked', _settings.doubleClickLinkNiComments),
                    $('<label>', {for:'_cbDoubleClickLinkNiComments', title:I18n.t('urce.prefs.DoubleClickLinkNiCommentsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.DoubleClickLinkNiComments')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbDoubleClickLinkOpenComments', urceprefs:'urce'}).change(function() {
                        _settings.doubleClickLinkOpenComments = $(this).is(':checked');
                        if (!$(this).is(':checked')) {
                            $('div#URCE-divDoubleClickOpen').hide();
                        } else {
                            if (!isChecked('_cbAutoClickOpenSolvedNi')) {
                                _settings.autoClickOpenSolvedNi = true;
                                $('#_cbAutoClickOpenSolvedNi').prop('checked', true);
                            }
                            $('div#URCE-divDoubleClickOpen').show();
                        }
                        saveSettingsToStorage();
                    }).prop('checked', _settings.doubleClickLinkOpenComments),
                    $('<label>', {for:'_cbDoubleClickLinkOpenComments', title:I18n.t('urce.prefs.DoubleClickLinkOpenCommentsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.DoubleClickLinkOpenComments')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbDoubleClickLinkSolvedComments', urceprefs:'urce'}).change(function() {
                        _settings.doubleClickLinkSolvedComments = $(this).is(':checked');
                        if (!$(this).is(':checked')) {
                            $('div#URCE-divDoubleClickSolved').hide();
                        } else {
                            if (!isChecked('_cbAutoClickOpenSolvedNi')) {
                                _settings.autoClickOpenSolvedNi = true;
                                $('#_cbAutoClickOpenSolvedNi').prop('checked', true);
                            }
                            $('div#URCE-divDoubleClickSolved').show();
                        }
                        saveSettingsToStorage();
                    }).prop('checked', _settings.doubleClickLinkSolvedComments),
                    $('<label>', {for:'_cbDoubleClickLinkSolvedComments', title:I18n.t('urce.prefs.DoubleClickLinkSolvedCommentsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.DoubleClickLinkSolvedComments')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideZoomOutLinks', urceprefs:'urce'}).change(function() {
                        changeSetting('hideZoomOutLinks', $(this).is(':checked'));
                        if ($(this).is(':checked')) {
                            $('div#_divZoomOutLinks').hide();
                        } else {
                            $('div#_divZoomOutLinks').show();
                        }
                    }).prop('checked', _settings.hideZoomOutLinks),
                    $('<label>', {for:'_cbHideZoomOutLinks', title:I18n.t('urce.prefs.HideZoomOutLinksTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.HideZoomOutLinks')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbUnfollowUrAfterSend', urceprefs:'urce'}).change(function() { changeSetting('unfollowUrAfterSend', $(this).is(':checked')); }).prop('checked', _settings.unfollowUrAfterSend),
                    $('<label>', {for:'_cbUnfollowUrAfterSend', title:I18n.t('urce.prefs.UnfollowUrAfterSendTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.UnfollowUrAfterSend'))
                )
            ),
            // UR Marker Preferences
            $('<fieldset>', {class:'URCE-field'}).append(
                $('<legend>', {class:'URCE-legend'}).append(
                    $('<span>', {class:'URCE-span'}).text(I18n.t('urce.prefs.UrMarkerPrefs'))
                ),
                $('<div>', {class:'controls-container URCE-divCC'}).append(
                    $('<input>', {type:'checkbox', id:'_cbEnableUrPillCounts', urceprefs:'markerMaster'}).change(function() {
                        changeSetting('enableUrPillCounts', $(this).is(':checked'));
                        if (!$(this).is(':checked')) {
                            $('[urceprefs=marker]').prop('disabled', true);
                        } else {
                            $('[urceprefs=marker]').prop('disabled', false);
                        }
                        (async () => {
                            try {
                                await handleUrLayer('settingsToggle');
                            } catch(error) {
                                logWarning(error);
                            }
                        })();
                    }).prop('checked', _settings.enableUrPillCounts),
                    $('<label>', {for:'_cbEnableUrPillCounts', title:I18n.t('urce.prefs.EnableUrPillCountsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.EnableUrPillCounts')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbDoNotShowTagNameOnPill', urceprefs:'marker'}).change(function() {
                        changeSetting('doNotShowTagNameOnPill', $(this).is(':checked'));
                        (async () => {
                            try {
                                await handleUrLayer('settingsToggle');
                            } catch(error) {
                                logWarning(error);
                            }
                        })();
                    }).prop('checked', _settings.doNotShowTagNameOnPill),
                    $('<label>', {for:'_cbDoNotShowTagNameOnPill', title:I18n.t('urce.prefs.DoNotShowTagNameOnPillTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.DoNotShowTagNameOnPill')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbReplaceTagNameWithEditorName', urceprefs:'marker'}).change(function() {
                        changeSetting('replaceTagNameWithEditorName', $(this).is(':checked'));
                        (async () => {
                            try {
                                await handleUrLayer('settingsToggle');
                            } catch(error) {
                                logWarning(error);
                            }
                        })();
                    }).prop('checked', _settings.replaceTagNameWithEditorName),
                    $('<label>', {for:'_cbReplaceTagNameWithEditorName', title:I18n.t('urce.prefs.ReplaceTagNameWithEditorNameTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.ReplaceTagNameWithEditorName'))
                )
            ),
            // UR Filtering Preferences
            $('<fieldset>', {class:'URCE-field'}).append(
                $('<legend>', {class:'URCE-legend'}).append(
                    $('<span>', {class:'URCE-span'}).text(I18n.t('urce.prefs.UrFilteringPrefs'))
                ),
                $('<div>', {class:'controls-container URCE-divCC'}).append(
                    $('<input>', {type:'checkbox', id:'_cbEnableUrceUrFiltering', urceprefs:'filteringMaster'}).change(function() {
                        _settings.enableUrceUrFiltering = $(this).is(':checked');
                        if (!$(this).is(':checked')) {
                            $('[urceprefs=filtering]').prop('disabled', true);
                        } else {
                            $('[urceprefs=filtering]').prop('disabled', false);
                        }
                        saveSettingsToStorage();
                        (async () => {
                            try {
                                await handleUrLayer('settingsToggle');
                            } catch(error) {
                                logWarning(error);
                            }
                        })();
                    }).prop('checked', _settings.enableUrceUrFiltering),
                    $('<label>', {for:'_cbEnableUrceUrFiltering', title:I18n.t('urce.prefs.EnableUrceUrFilteringTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.EnableUrceUrFiltering')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbOnlyShowMyUrs', urceprefs:'filtering'}).change(function() {
                        changeSetting('onlyShowMyUrs', $(this).is(':checked'));
                        (async () => {
                            try {
                                await handleUrLayer('settingsToggle');
                            } catch(error) {
                                logWarning(error);
                            }
                        })();
                    }).prop('checked', _settings.onlyShowMyUrs),
                    $('<label>', {for:'_cbOnlyShowMyUrs', title:I18n.t('urce.prefs.OnlyShowMyUrsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.OnlyShowMyUrs')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbShowOthersUrsPastReminderClose', urceprefs:'filtering'}).change(function() {
                        changeSetting('showOthersUrsPastReminderClose', $(this).is(':checked'));
                        (async () => {
                            try {
                                await handleUrLayer('settingsToggle');
                            } catch(error) {
                                logWarning(error);
                            }
                        })();
                    }).prop('checked', _settings.showOthersUrsPastReminderClose),
                    $('<label>', {for:'_cbShowOthersUrsPastReminderClose', title:I18n.t('urce.prefs.ShowOthersUrsPastReminderCloseTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.ShowOthersUrsPastReminderClose')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideClosedUrs', urceprefs:'filtering'}).change(function() {
                        changeSetting('hideClosedUrs', $(this).is(':checked'));
                        (async () => {
                            try {
                                await handleUrLayer('settingsToggle');
                            } catch(error) {
                                logWarning(error);
                            }
                        })();
                    }).prop('checked', _settings.hideClosedUrs),
                    $('<label>', {for:'_cbHideClosedUrs', title:I18n.t('urce.prefs.HideClosedUrsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.HideClosedUrs')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideTaggedUrs', urceprefs:'filtering'}).change(function() {
                        changeSetting('hideTaggedUrs', $(this).is(':checked'));
                        (async () => {
                            try {
                                await handleUrLayer('settingsToggle');
                            } catch(error) {
                                logWarning(error);
                            }
                        })();
                    }).prop('checked', _settings.hideTaggedUrs),
                    $('<label>', {for:'_cbHideTaggedUrs', title:I18n.t('urce.prefs.HideTaggedUrsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.HideTaggedUrs')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideWaiting', urceprefs:'filtering'}).change(function() {
                        changeSetting('hideWaiting', $(this).is(':checked'));
                        (async () => {
                            try {
                                await handleUrLayer('settingsToggle');
                            } catch(error) {
                                logWarning(error);
                            }
                        })();
                    }).prop('checked', _settings.hideWaiting),
                    $('<label>', {for:'_cbHideWaiting', title:I18n.t('urce.prefs.HideWaitingTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.HideWaiting')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideUrsCloseNeeded', urceprefs:'filtering'}).change(function() {
                        changeSetting('hideUrsCloseNeeded', $(this).is(':checked'));
                        (async () => {
                            try {
                                await handleUrLayer('settingsToggle');
                            } catch(error) {
                                logWarning(error);
                            }
                        })();
                    }).prop('checked', _settings.hideUrsCloseNeeded),
                    $('<label>', {for:'_cbHideUrsCloseNeeded', title:I18n.t('urce.prefs.HideUrsCloseNeededTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.HideUrsCloseNeeded')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideUrsReminderNeeded', urceprefs:'filtering'}).change(function() {
                        changeSetting('hideUrsReminderNeeded', $(this).is(':checked'));
                        (async () => {
                            try {
                                await handleUrLayer('settingsToggle');
                            } catch(error) {
                                logWarning(error);
                            }
                        })();
                    }).prop('checked', _settings.hideUrsReminderNeeded),
                    $('<label>', {for:'_cbHideUrsReminderNeeded', title:I18n.t('urce.prefs.HideUrsReminderNeededTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.HideUrsReminderNeeded')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideUrsWithUserReplies', urceprefs:'filtering'}).change(function() {
                        changeSetting('hideUrsWithUserReplies', $(this).is(':checked'));
                        (async () => {
                            try {
                                await handleUrLayer('settingsToggle');
                            } catch(error) {
                                logWarning(error);
                            }
                        })();
                    }).prop('checked', _settings.hideUrsWithUserReplies),
                    $('<label>', {for:'_cbHideUrsWithUserReplies', title:I18n.t('urce.prefs.HideUrsWithUserRepliesTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.HideUrsWithUserReplies')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideUrsWoComments', urceprefs:'filtering'}).change(function() {
                        changeSetting('hideUrsWoComments', $(this).is(':checked'));
                        (async () => {
                            try {
                                await handleUrLayer('settingsToggle');
                            } catch(error) {
                                logWarning(error);
                            }
                        })();
                    }).prop('checked', _settings.hideUrsWoComments),
                    $('<label>', {for:'_cbHideUrsWoComments', title:I18n.t('urce.prefs.HideUrsWoCommentsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.HideUrsWoComments')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideUrsWoCommentsOrDescriptions', urceprefs:'filtering'}).change(function() {
                        changeSetting('hideUrsWoCommentsOrDescriptions', $(this).is(':checked'));
                        (async () => {
                            try {
                                await handleUrLayer('settingsToggle');
                            } catch(error) {
                                logWarning(error);
                            }
                        })();
                    }).prop('checked', _settings.hideUrsWoCommentsOrDescriptions),
                    $('<label>', {for:'_cbHideUrsWoCommentsOrDescriptions', title:I18n.t('urce.prefs.HideUrsWoCommentsOrDescriptionsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.HideUrsWoCommentsOrDescriptions')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideUrsWoCommentsWithDescriptions', urceprefs:'filtering'}).change(function() {
                        changeSetting('hideUrsWoCommentsWithDescriptions', $(this).is(':checked'));
                        (async () => {
                            try {
                                await handleUrLayer('settingsToggle');
                            } catch(error) {
                                logWarning(error);
                            }
                        })();
                    }).prop('checked', _settings.hideUrsWoCommentsWithDescriptions),
                    $('<label>', {for:'_cbHideUrsWoCommentsWithDescriptions', title:I18n.t('urce.prefs.HideUrsWoCommentsWithDescriptionsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.HideUrsWoCommentsWithDescriptions'))
                )
            ),
            // Common Preferences
            $('<fieldset>', {class:'URCE-field'}).append(
                $('<legend>', {class:'URCE-legend'}).append(
                    $('<span>', {class:'URCE-span'}).text(I18n.t('urce.prefs.CommonPrefs'))
                ),
                $('<div>', {class:'controls-container URCE-divCC'}).append(
                    $('<div>', {class:'URCE-divDaysInput'}).append(
                        $('<div>', {title:I18n.t('urce.prefs.ReminderDaysTitle'), class:'URCE-label', urceprefs:'common'}).append(I18n.t('urce.prefs.ReminderDays') + ': ').append(
                            $('<input>', {type:'number', id:'_numReminderDays', class:'URCE-daysInput', urceprefs:'common', min:'0', max:'13', step:'1', value:_settings.reminderDays, title:I18n.t('urce.prefs.ReminderDaysTitle')}).on('change', function() {
                                let numReminderDays = Math.abs(parseInt(this.value, 10) || 0);
                                if (numReminderDays >= _settings.closeDays) {
                                    numReminderDays = (_settings.closeDays - 1) < 0 ? 0 : (_settings.closeDays - 1);
                                }
                                numReminderDays = Math.min(13,Math.max(0,parseInt(numReminderDays)));
                                if (numReminderDays !== this.value) {
                                    changeSetting('reminderDays', numReminderDays);
                                    this.value = numReminderDays;
                                    (async () => {
                                        try {
                                            await handleUrLayer('settingsToggle');
                                        } catch(error) {
                                            logWarning(error);
                                        }
                                    })();
                                }
                            })
                        ),
                        $('<div>', {title:I18n.t('urce.prefs.CloseDaysTitle'), class:'URCE-label', urceprefs:'common'}).append(I18n.t('urce.prefs.CloseDays') + ': ').append(
                            $('<input>', {type:'number', id:'_numCloseDays', class:'URCE-daysInput', urceprefs:'common', min:'1', max:'14', step:'1', value:_settings.closeDays, title:I18n.t('urce.prefs.CloseDaysTitle')}).on('change', function() {
                                let numCloseDays = Math.abs(parseInt(this.value, 10) || 1);
                                if (numCloseDays <= _settings.reminderDays) {
                                    numCloseDays = (_settings.reminderDays + 1) > 14 ? 14 : (_settings.reminderDays + 1);
                                }
                                numCloseDays = Math.min(14,Math.max(1,parseInt(numCloseDays)));
                                if (numCloseDays !== this.value) {
                                    changeSetting('closeDays', numCloseDays);
                                    this.value = numCloseDays;
                                    (async () => {
                                        try {
                                            await handleUrLayer('settingsToggle');
                                        } catch(error) {
                                            logWarning(error);
                                        }
                                    })();
                                }
                            })
                        )
                    )
                )
            )
        );
        if (!isChecked('_cbEnableUrPillCounts')) {
            $('[urceprefs=marker]').prop('disabled', true);
        } else {
            $('[urceprefs=marker]').prop('disabled', false);
        }
        if (!isChecked('_cbEnableUrceUrFiltering')) {
            $('[urceprefs=filtering]').prop('disabled', true);
        } else {
            $('[urceprefs=filtering]').prop('disabled', false);
        }
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
            $('<div>', {id:'urceAlertBox', class:'urceAlertBox'})
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
        $('div#sidepanel-urc-e').width('290px');
        showScriptInfoAlert();
    }

    async function init() {
        log('Initializing.');
        _wmeUserId = W.loginManager.user.id;
        loadSettingsFromStorage();
        loadTranslations();
        initGui();
        window.addEventListener("beforeunload", function() {
            saveSettingsToStorage();
        }, false);
        log('Initialized.');
        setTimeout(saveSettingsToStorage, 5000);
        _urceInitialized = true;
        let buildCommentListResult = await buildCommentList();
        if (buildCommentListResult.error) {
            handleBuildCommentListError(buildCommentListResult.error);
        } else {
            initBackgroundTasks();
        }
        logDebug('Loaded in ' + Math.round(performance.now() - _loadBeginTime) + ' ms.');
    }

    function bootstrap(tries) {
        tries = tries || 1;
        if (W &&
            W.map &&
            W.model &&
            $ && WazeWrap.Ready) {
            log('Bootstrapping.');
            init();
        } else if (tries < 1000) {
            logDebug('Bootstrap failed. Retrying ' + tries + ' of 1000');
            setTimeout(function () { bootstrap(++tries); }, 200);
        } else {
            logError('Bootstrap timed out waiting for WME to become ready.');
        }
    }

    bootstrap();

    function loadTranslations() {
        logDebug('Loading translations.');
        setTranslations({
            en: {
                prefs: {
                    // Comment List
                    CommentList: 'Comment List',
                    CommentListTitle: 'Select the custom list you would like to use. CommentTeam is the default. If you would like your comment list built into this script or have suggestions on the CommentTeam list, please contact dBsooner on Discord or via PM.',
                    // URC-E Preferences
                    UrcePrefs: 'URC-E Preferences',
                    AutoCenterOnUr: 'Auto center on UR',
                    AutoCenterOnUrTitle: 'Auto Center the map at the current map zoom to the selected UR when it has comments and the zoom is less than 3.',
                    AutoClickOpenSolvedNi: 'Auto click open, solved or not identified',
                    AutoClickOpenSolvedNiTitle: 'Suppress the message about recent pending questions to the reporter and then, depending on the choice set for that comment, clicks Open, Solved or Not Identified.',
                    AutoCloseCommentWindow: 'Auto close comment window',
                    AutoCloseCommentWindowTitle: 'This will automatically close the UR window for user requests that do not require saving after you click a UR comment in the list and then the send button.',
                    AutoSaveAfterSolvedOrNiComment: 'Auto save after solved or NI comment',
                    AutoSaveAfterSolvedOrNiCommentTitle: 'If \'Auto Click Open, Solved or Not Identified\' is also checked, this will click the save button after clicking a UR comment in the list and then the send button.',
                    AutoSendReminders: 'Auto send reminders',
                    AutoSendRemindersTitle: 'Auto send reminders to your URs on the screen.',
                    AutoSendRemindersWarning: 'WARNING',
                    AutoSendRemindersWarningTitle: 'This will AUTOMATICALLY send reminders at the reminder days setting (currently: ' + _settings.reminderDays + ' days).\nThis only happens when they are visible on your screen.\n\nNOTE: When using this feature you should not leave URs open unless you asked a question\nthat needs a response from the reporter, as this script will send reminders to all open URs\nafter \'Reminder days\'.',
                    AutoSetNewUrComment: 'Auto set new UR comment',
                    AutoSetNewUrCommentTitle: 'Auto set the default UR comment for the UR type on new URs that do not already have comments.',
                    AutoSetReminderUrComment: 'Auto set reminder UR comment',
                    AutoSetReminderUrCommentTitle: 'Auto set the UR reminder comment for URs that are older than the \'Reminder days\' setting and have only one comment.',
                    AutoSwitchToUrCommentsTab: 'Auto switch to the URC-E tab',
                    AutoSwitchToUrCommentsTabTitle: 'Auto switch to the URComments-Enhanced tab when opening a UR. When the UR window is closed you will be switched back to your previous tab.',
                    AutoZoomInOnNewUr: 'Auto zoom in on new UR',
                    AutoZoomInOnNewUrTitle: 'Auto zoom in when opening URs with no comments and when sending UR reminders.',
                    AutoZoomOutAfterComment: 'Auto zoom out after comment',
                    AutoZoomOutAfterCommentTitle: 'After clicking on a UR comment in the list and then clicking send on the UR, the map zoom will be set back to your previous zoom.',
                    DisableDoneNextButtons: 'Disable done / next buttons',
                    DisableDoneNextButtonsTitle: 'Disable the done / next buttons at the bottom of the new UR window.',
                    DoubleClickLinkNiComments: 'Double click link - NI comments',
                    DoubleClickLinkNiCommentsTitle: 'Add an extra link to the \'not identified\' comments. When double clicked it will automatically send the comment to the UR window, click send, and then will launch all of the other options that are enabled.',
                    DoubleClickLinkOpenComments: 'Double click link - Open comments',
                    DoubleClickLinkOpenCommentsTitle: 'Add an extra link to the \'open\' comments. When double clicked it will automatically send the comment to the UR window, click send, and then will launch all of the other options that are enabled.',
                    DoubleClickLinkSolvedComments: 'Double click link - Solved comments',
                    DoubleClickLinkSolvedCommentsTitle: 'Add an extra link to the \'solved\' comments. When double clicked it will automatically send the comment to the UR window, click send, and then will launch all of the other options that are enabled.',
                    HideZoomOutLinks: 'Hide zoom out links',
                    HideZoomOutLinksTitle: 'Hide the zoom out links on the comments tab.',
                    UnfollowUrAfterSend: 'Unfollow UR after send',
                    UnfollowUrAfterSendTitle: 'Unfollow the UR after sending a comment.',
                    // Common Preferences
                    CommonPrefs: 'Common Preferences',
                    ReminderDays: 'Reminder days',
                    ReminderDaysTitle: 'Number of days to use when calculating UR filtering and when setting and/or sending the reminder comment. Must be between 0 and 13 and less than \'Close days\'. 0 is off (no reminder used).',
                    CloseDays: 'Close days',
                    CloseDaysTitle: 'Number of days to use when calculating UR filtering. Must be between 2 and 14 and greater than \'Reminder days\'.',
                    // UR Marker Preferences
                    UrMarkerPrefs: 'UR Marker Preferences',
                    EnableUrPillCounts: 'Enable UR pill counts',
                    EnableUrPillCountsTitle: 'Enable or disable the pill with UR counts.',
                    DoNotShowTagNameOnPill: 'Don\'t show tag name on pill',
                    DoNotShowTagNameOnPillTitle: 'Do not show the tag name on the pill where there is a URO tag.',
                    ReplaceTagNameWithEditorName: 'Replace tag name with editor name',
                    ReplaceTagNameWithEditorNameTitle: 'When a UR has the logged in editors name in the description or any of the comments of the UR (not the name Waze automatically adds when commenting), replace the tag type with the editors name.',
                    // UR Filtering Preferences
                    UrFilteringPrefs: 'UR Filtering Preferences',
                    EnableUrceUrFiltering: 'Enable URC-E UR filtering',
                    EnableUrceUrFilteringTitle: 'Enable or disable URComments-Enhanced built-in UR filtering.',
                    HideClosedUrs: 'Hide closed URs',
                    HideClosedUrsTitle: 'Hide closed URs.',
                    HideTaggedUrs: 'Hide tagged URs',
                    HideTaggedUrsTitle: 'Hide URs that are tagged with URO+ style tags. Ex: [NOTE].',
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
                    HideUrsWoCommentsWithDescriptions: 'Hide URs w/o comments w/ descripts',
                    HideUrsWoCommentsWithDescriptionsTitle: 'Hide URs that have descriptions and zero comments.',
                    OnlyShowMyUrs: 'Only show my URs',
                    OnlyShowMyUrsTitle: 'Hide URs where you have no comments.',
                    ShowOthersUrsPastReminderClose: 'Show others URs past remind+close',
                    ShowOthersUrsPastReminderCloseTitle: 'Show URs that others commented on that have gone past the reminder and close day settings added together.'
                },
                tabs: {
                    Comments: 'Comments',
                    Settings: 'Settings'
                },
                common: {
                    Title: 'URComments-Enhanced',
                    DoubleClickTitle: 'Double click here to send this comment:',
                    Loading: 'Loading',
                    PleaseWait: 'Please wait',
                    ErrorGeneric: 'An error has occurred within URC-E. Please contact dBsooner via Discord or PM.',
                    Yes: 'Yes',
                    No: 'No',
                    ErrorHeader: 'URC-E Error'
                },
                prompts: {
                    FilterUrs2Abort: 'URC-E - Aborting FilterURs2 because filtering, counts and auto reminders are disabled.',
                    LoadingUrDataTimeout: 'URC-E: Loading UR data has timed out, retrying.',
                    NoCommentBox: 'URC-E: Unable to find the comment box! In order for this script to work, you need to have a UR open.',
                    CommentInsertTimedOut: 'URCE-E timed out waiting for the comment text box to become available.',
                    ReminderMessageAuto: 'URC-E: Automatically sending reminder message to UR:',
                    UnsavedEdits: 'URC-E has detected you had unsaved edits before working this UR. As a precaution, URC-E\'s \'Auto save\' option gives you this warning before saving if there were unsaved edits before opening the UR. Would you like to go ahead and automatically process the unsaved edits as well as this UR?',
                    UnsavedEditsHeader: 'Unsaved Edits Detected',
                    UrFilteringDisabled: 'URC-E\'s UR Filterin cannot be enabled because URO+\'s UR filters are active. To use URC-E\'s filtering, please disable URO+\'s UR filters.',
                    CustomListUsed: 'URC-E has loaded your "Custom" comment list. However, only the comments themselves have been loaded. The settings text and tooltips were not loaded. Further, this functionality is deprecated and may be discontinued at any time. An alternative solution may or may not be offered at that time.'
                },
                commentsTab: {
                    ZoomOutLink1: 'Zoom out 0 & close UR',
                    ZoomOutLink1Title: 'Zooms all the way out and closes the UR dialogue.',
                    ZoomOutLink2: 'Zoom out 2 & close UR',
                    ZoomOutLink2Title: 'Zooms out to level 2 and closes the UR dialogue.',
                    ZoomOutLink3: 'Zoom out 3 & close UR',
                    ZoomOutLink3Title: 'Zooms out to level 3 and closes the UR dialogue.'
                }
            }
        });
    }

    function setTranslations(translations) {
        logDebug('Setting translations.');
        I18n.translations[I18n.currentLocale()].urce = translations.en;
        for (let i = 0; i < Object.keys(translations).length; i++) {
            let locale = Object.keys(translations)[i];
            if (I18n.currentLocale() == locale) {
                I18n.translations[locale].urce.prefs = translations[locale].prefs;
                return;
            }
        }
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
        } else if (elapsedSinceEvent < 0) {
            // event occurrs at some point in the future after midnight today, so return a minimum value of -1...
            return -1 - Math.floor((pendingUntilMidnight - elapsedSinceEvent) / 86400000);
        } else {
            // event occurred at some point prior to midnight this morning, so return a minimum value of 1...
            return 1 + Math.floor((elapsedSinceEvent - elapsedSinceMidnight) / 86400000);
        }
    }
})();
