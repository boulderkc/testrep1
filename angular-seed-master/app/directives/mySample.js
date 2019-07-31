'use strict';


// myApp.directive('mySample', function ($compile) {
//     var markup = "<input type='text' ng-model='sampleData'/> {{sampleData}}<br/>";
    
//     return {
//         restrict: 'E',
//         link: function (scope, el) {
//             var linkFn = $compile(markup);
//             var content = linkFn(scope);
//             el.append(content);
//         }, 
//         scope: {

//         }
//     }
// });





    myApp.directive('mySample', function () {
        
        return {
            restrict: 'E', 
            template: "<input type='text' ng-model='sampleData'/>{{sampleData}}<br/>",
            scope: {    
                event: "=event"
            }
        }
    });