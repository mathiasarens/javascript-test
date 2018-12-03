module.exports = {
    "env": {
        "browser": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        // "quotes": [
        //     "error",
        //     "double",
        //     { "allowTemplateLiterals": true }
        // ],
        // "semi": [
        //     "error",
        //     "always"
        // ],
        "no-unexpected-multiline": "error",
        "global-require": "error"
    }
};