
export default {
    bindings: {},
    template: require('./downloader.template.html'),
    controller: ['downloaderService', function(downloaderService) {
        
        var $ctrl = this;

        $ctrl.download = download;

        function download() {
            downloaderService.download()
                .then(function(response) {
                    console.log(response);
                    let blob = new Blob([response.data], { type: "application/octet-stream"});
                    saveAs(blob, "test.zip");
                })
        }
    }]
}