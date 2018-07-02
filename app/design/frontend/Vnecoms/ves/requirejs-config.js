/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        "*": {
            "carousel-init": "js/vendor/jquery.jcarousel.min",
            "bootstrap-carousel": "js/vendor/bootstrap/carousel",
            "carousel":      "js/carousel"
        }
    },
    // Define dependencies for none AMD third party modules - Do not use for scripts that use require
    "shim": {
        "js/vendor/jquery.jcarousel.min": {
            "deps": ["jquery"]
        },
        "js/vendor/bootstrap/carousel": {
            "deps": ["jquery"]
        }
    },
    paths: {

    },
    "deps": [

    ]
};
