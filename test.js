/** 
* @description MeshCentral Test Plugin
* @author Danny Scheelings
* @copyright 
* @license Apache-2.0
* @version v0.0.1
*/

"use strict";

module.exports.test = function (parent) {
    var obj = {};
    obj.parent = parent;
    obj.meshServer = parent.parent;
    
    //obj.db = null;
    //obj.intervalTimer = null;
    obj.debug = obj.meshServer.debug;
    //obj.VIEWS = __dirname + '/views/';

    // Export functions to Web UI
    obj.exports = 
    [
      'onDesktopDisconnect'
    //   'onDeviceRefreshEnd',
    //   'resizeContent',
    //   'historyData',
    //   'variableData',
    ];
    
    obj.onDesktopDisconnect = function() //handle event
    {
        //obj.debug('ScheelingsTest', 'Desktop disconnected. Node id: ' + currentNode._id);
        alert('Good bye');
    }
    
    return obj;
}