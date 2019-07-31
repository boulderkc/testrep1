'use strict';

myApp.directive('myThumbnail', function () {

    return {
        restrict: 'E',
        templateUrl: '/templates/thumbnailTemplate.html',
        scope: {
            event: "=event"
        }
    }
});