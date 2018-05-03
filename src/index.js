import style from "./_scss/main.scss";
require('expose-loader?angular!angular');

import emc2appModule from './js/components/emc2.module'

angular
    .module('emc2App', [
        emc2appModule.name
    ]);