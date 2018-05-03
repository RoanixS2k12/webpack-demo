import emc2app from './emc2app.component';
import angular from 'angular';

import downloader from './downloader/downloader.module';

export default angular.
    module('emc2', [
        downloader.name
    ])
    .component('emc2App', emc2app);