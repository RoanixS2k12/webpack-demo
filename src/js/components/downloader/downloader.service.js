
export default ['$http', 'SERVER_IP', function($http, SERVER_IP) {

    function download() {
        return $http.get(`${SERVER_IP}/getFile/test.zip`, { responseType: 'arraybuffer'});
    }

    return {
        download: download
    }

}]