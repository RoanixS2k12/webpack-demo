import angular from 'angular';

import downloaderComponent from './downloader.component';
import downloaderService from './downloader.service';

export default angular
    .module('downloader', [])
    .constant('SERVER_IP', 'http://localhost:3000')
    .service('downloaderService', downloaderService)
    .component('downloader', downloaderComponent);