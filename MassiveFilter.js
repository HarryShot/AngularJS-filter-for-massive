angular.module("massiveFilter")
    .filter("sortFunc", function () {
        return function (value) {
            if (angular.isArray(value)) {
                var arr1 = [];
                var arr2 = [];
                for(var i=0;i<value.length;i++){
                    if(value[i]%2==0){
                        arr1.push(value[i]);
                    }else{
                        arr2.push(value[i]);
                    };
                };

                function compareNumeric(a, b) {
                    if (a > b) return 1;
                    if (a < b) return -1;
                }


                arr1.sort(compareNumeric);
                arr2.sort(compareNumeric);

                var res = arr1.concat(arr2);

                return res;
            } else {
                return value;
            }
        };
    })
    .filter("filterMassive", function ($filter) {
        return function (data) {
            return $filter("sortFunc")(data);
        }
    });