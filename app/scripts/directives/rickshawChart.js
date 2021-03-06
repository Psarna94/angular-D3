angular.module('angularD3App')
.directive('rickshawChart', function () {
    return {
      scope: {
        data: '=',
        renderer: '='
      },
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.$watchCollection('[data, renderer]', function(newVal, oldVal){
          if(!newVal[0]){
            return;
          }

          element[0].innerHTML ='';

          var graph = new Rickshaw.Graph({
            element: element[0],
            width: attrs.width,
            height: attrs.height,
            series: [{data: scope.data, color: attrs.color}],
            renderer: scope.renderer
          });

          // var xAxis = new Rickshaw.Graph.Axis.Time({graph: graph});
          // xAxis.render();
          //
          //
          // var yAxis = new Rickshaw.Graph.Axis.Y({graph: graph});
          // yAxis.render();


    graph.render();

        });
      }
    };
  });
