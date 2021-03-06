// Uncomment to pull in all polyfills for IE11, ect..
// import "core-js" 

// Uncomment to pull in a single polyfill (for Map in this example) - look in jspm_packages/npm/core-js\@2.4.1/modules/ for full list
// import "core-js/modules/es6.map";

import * as ng from "angular";

import * as shrdSvcs from "./shared/index";

import * as userCmpt from "./user/components/index";
import * as userSvcs from "./user/index";

let moduleName = "demo";

ng.module(moduleName, [])
    .service(shrdSvcs.NotificationService.serviceName, shrdSvcs.NotificationService)

    .service(userSvcs.UserService.serviceName, userSvcs.UserService)
    .component(userCmpt.UserFormComponent.controller.componentName, userCmpt.UserFormComponent)
    .component(userCmpt.UserComponent.controller.componentName, userCmpt.UserComponent)
    .component(userCmpt.UserListComponent.controller.componentName, userCmpt.UserListComponent);

let appRootEl = document.querySelector("#app-container") || document.body;

ng.bootstrap(appRootEl, [moduleName]);