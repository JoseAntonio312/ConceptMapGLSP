"use strict";
(self["webpackChunktasklist_browser_app"] = self["webpackChunktasklist_browser_app"] || []).push([["conceptmap-theia_lib_browser_frontend-module_js"],{

/***/ "../node_modules/css-loader/dist/cjs.js!../conceptmap-glsp/css/diagram.css":
/*!*********************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../conceptmap-glsp/css/diagram.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/********************************************************************************
 * Copyright (c) 2022 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: 
 * -- GNU General Public License, version 2 with the GNU Classpath Exception
 * which is available at https://www.gnu.org/software/classpath/license.html
 * -- MIT License which is available at https://opensource.org/license/mit.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0 OR MIT
 ********************************************************************************/

:root {
    --sprotty-background: var(--theia-layout-color3);
    --sprotty-edge: var(--theia-editor-foreground);
    --sprotty-border: var(--theia-editor-foreground);
}

svg {
    border-style: solid;
    border-width: 1px;
    border-color: #bbb;
}

.header {
    font-weight: bold;
    padding: 20px;
    margin: 2rem;
}

.sprotty-node {
    fill: inherit;
}

.sprotty-edge {
    fill: #000;
}

.course-node {
    fill: #f1bd6c;
}

.caption-node {
    fill: white;
}

.label-edge {
    fill: white;
    stroke: white;
}

.properties-node {
    fill: #d3e3e3;
}

.feature-node {
    fill: #f1bd6c;
}

.imported-concept-node {
    fill: #fabfa4;
    stroke-dasharray: 5, 5;
    border: 2px dashed #000; /* Ajusta el grosor, estilo y color del borde */
    padding: 10px;
}

.border {
    border: 2px dashed #000; /* Ajusta el grosor, estilo y color del borde */
    padding: 10px;
}

.topic-node {
    fill: #f5f5f5;
}

.mouseover {
    box-shadow: white;
}

.selected {
    fill: white;
}

.line-uses {
    stroke: black;
}

.line-specializes {
    stroke: gray;
}

.concept-node {
    fill: #fffcdf;
    stroke-width: 2px;
    font-weight: bold;
    border: 2px #000;
}

.border-stars {
    stroke: var(--sprotty-border);
}

.uses-edge {
    stroke: black;
}

.uses-arrow {
    fill: black;
    stroke: black;
}

.uses-topic-edge {
    stroke: black;
    stroke-dasharray: 5, 5;
}

.arrow-uses-topic {
    fill: black;
    stroke: black;
}

.specializes-edge {
    stroke: black;
}

.specializes-arrow {
    stroke: black;
    fill: #f5f5f5;
}

.p-MenuBar-item:nth-child(4), .p-MenuBar-item:nth-child(6), .p-MenuBar-item:nth-child(7), .p-MenuBar-item:nth-child(8) {
    display: none;
}

/* ad display none to last 4 childs of the fift .p-menuBar */
.p-MenuBar-item:nth-child(5) .p-Menu-item:nth-child(11),
.p-MenuBar-item:nth-child(5) .p-Menu-item:nth-child(12),
.p-MenuBar-item:nth-child(5) .p-Menu-item:nth-child(13),
.p-MenuBar-item:nth-child(5) .p-Menu-item:nth-child(14),
.p-MenuBar-item:nth-child(5) .p-Menu-item:nth-child(15),
.p-MenuBar-item:nth-child(5) .p-Menu-item:nth-child(16) {
    display: none;
} 

li[data-command="editor.action.toggleMinimap"] {
    display: none;
}
li[data-command="breadcrumbs.toggle"] {
    display: none;
}
li[data-command="editor.action.toggleRenderWhitespace"] {
    display: none;
}
li[data-command="editor.action.toggleStickyScroll"] {
    display: none;
}
li[data-command="editor.action.toggleWordWrap"]{
    display: none;
}`, "",{"version":3,"sources":["webpack://./../conceptmap-glsp/css/diagram.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;iFAeiF;;AAEjF;IACI,gDAAgD;IAChD,8CAA8C;IAC9C,gDAAgD;AACpD;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB,EAAE,+CAA+C;IACxE,aAAa;AACjB;;AAEA;IACI,uBAAuB,EAAE,+CAA+C;IACxE,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA,4DAA4D;AAC5D;;;;;;IAMI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB","sourcesContent":["/********************************************************************************\n * Copyright (c) 2022 EclipseSource and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: \n * -- GNU General Public License, version 2 with the GNU Classpath Exception\n * which is available at https://www.gnu.org/software/classpath/license.html\n * -- MIT License which is available at https://opensource.org/license/mit.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0 OR MIT\n ********************************************************************************/\n\n:root {\n    --sprotty-background: var(--theia-layout-color3);\n    --sprotty-edge: var(--theia-editor-foreground);\n    --sprotty-border: var(--theia-editor-foreground);\n}\n\nsvg {\n    border-style: solid;\n    border-width: 1px;\n    border-color: #bbb;\n}\n\n.header {\n    font-weight: bold;\n    padding: 20px;\n    margin: 2rem;\n}\n\n.sprotty-node {\n    fill: inherit;\n}\n\n.sprotty-edge {\n    fill: #000;\n}\n\n.course-node {\n    fill: #f1bd6c;\n}\n\n.caption-node {\n    fill: white;\n}\n\n.label-edge {\n    fill: white;\n    stroke: white;\n}\n\n.properties-node {\n    fill: #d3e3e3;\n}\n\n.feature-node {\n    fill: #f1bd6c;\n}\n\n.imported-concept-node {\n    fill: #fabfa4;\n    stroke-dasharray: 5, 5;\n    border: 2px dashed #000; /* Ajusta el grosor, estilo y color del borde */\n    padding: 10px;\n}\n\n.border {\n    border: 2px dashed #000; /* Ajusta el grosor, estilo y color del borde */\n    padding: 10px;\n}\n\n.topic-node {\n    fill: #f5f5f5;\n}\n\n.mouseover {\n    box-shadow: white;\n}\n\n.selected {\n    fill: white;\n}\n\n.line-uses {\n    stroke: black;\n}\n\n.line-specializes {\n    stroke: gray;\n}\n\n.concept-node {\n    fill: #fffcdf;\n    stroke-width: 2px;\n    font-weight: bold;\n    border: 2px #000;\n}\n\n.border-stars {\n    stroke: var(--sprotty-border);\n}\n\n.uses-edge {\n    stroke: black;\n}\n\n.uses-arrow {\n    fill: black;\n    stroke: black;\n}\n\n.uses-topic-edge {\n    stroke: black;\n    stroke-dasharray: 5, 5;\n}\n\n.arrow-uses-topic {\n    fill: black;\n    stroke: black;\n}\n\n.specializes-edge {\n    stroke: black;\n}\n\n.specializes-arrow {\n    stroke: black;\n    fill: #f5f5f5;\n}\n\n.p-MenuBar-item:nth-child(4), .p-MenuBar-item:nth-child(6), .p-MenuBar-item:nth-child(7), .p-MenuBar-item:nth-child(8) {\n    display: none;\n}\n\n/* ad display none to last 4 childs of the fift .p-menuBar */\n.p-MenuBar-item:nth-child(5) .p-Menu-item:nth-child(11),\n.p-MenuBar-item:nth-child(5) .p-Menu-item:nth-child(12),\n.p-MenuBar-item:nth-child(5) .p-Menu-item:nth-child(13),\n.p-MenuBar-item:nth-child(5) .p-Menu-item:nth-child(14),\n.p-MenuBar-item:nth-child(5) .p-Menu-item:nth-child(15),\n.p-MenuBar-item:nth-child(5) .p-Menu-item:nth-child(16) {\n    display: none;\n} \n\nli[data-command=\"editor.action.toggleMinimap\"] {\n    display: none;\n}\nli[data-command=\"breadcrumbs.toggle\"] {\n    display: none;\n}\nli[data-command=\"editor.action.toggleRenderWhitespace\"] {\n    display: none;\n}\nli[data-command=\"editor.action.toggleStickyScroll\"] {\n    display: none;\n}\nli[data-command=\"editor.action.toggleWordWrap\"]{\n    display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../conceptmap-glsp/lib/conceptmap-diagram-module.js":
/*!***********************************************************!*\
  !*** ../conceptmap-glsp/lib/conceptmap-diagram-module.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initializeConceptMapDiagramContainer = void 0;
/********************************************************************************
 * Copyright (c) 2022 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied:
 * -- GNU General Public License, version 2 with the GNU Classpath Exception
 * which is available at https://www.gnu.org/software/classpath/license.html
 * -- MIT License which is available at https://opensource.org/license/mit.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0 OR MIT
 ********************************************************************************/
const client_1 = __webpack_require__(/*! @eclipse-glsp/client */ "../node_modules/@eclipse-glsp/client/lib/index.js");
const inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/es/inversify.js");
__webpack_require__(/*! ../css/diagram.css */ "../conceptmap-glsp/css/diagram.css");
const custom_types_1 = __webpack_require__(/*! ./custom-types */ "../conceptmap-glsp/lib/custom-types.js");
const model_1 = __webpack_require__(/*! ./model */ "../conceptmap-glsp/lib/model.js");
const views_1 = __webpack_require__(/*! ./views */ "../conceptmap-glsp/lib/views.js");
const conceptMapDiagramModule = new inversify_1.ContainerModule((bind, unbind, isBound, rebind) => {
    rebind(client_1.TYPES.ILogger).to(client_1.ConsoleLogger).inSingletonScope();
    rebind(client_1.TYPES.LogLevel).toConstantValue(client_1.LogLevel.warn);
    const context = { bind, unbind, isBound, rebind };
    (0, client_1.configureDefaultModelElements)(context);
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.COURSE, model_1.CourseNode, client_1.RoundedCornerNodeView, { enable: [client_1.editFeature] });
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.IMPORTED_CONCEPT, client_1.GNode, client_1.RoundedCornerNodeView);
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.IMPORTED_CONCEPT_NAME, client_1.GLabel, client_1.GLabelView, { enable: [client_1.editLabelFeature] });
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.RELATED_TOPIC, client_1.GLabel, client_1.GLabelView, { enable: [client_1.editLabelFeature] });
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.LEGEND, client_1.GNode, views_1.CaptionNodeView);
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.TOPIC, client_1.GNode, views_1.TopicNodeView);
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.TOPIC_NAME, client_1.GLabel, client_1.GLabelView, { enable: [client_1.editLabelFeature] });
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.TOPIC_ANNOTATIONS, client_1.GLabel, client_1.GLabelView, { enable: [client_1.editLabelFeature] });
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.PROPERTIES, client_1.GNode, client_1.RoundedCornerNodeView);
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.BIBLIOGRAPHY, client_1.GLabel, client_1.GLabelView, { enable: [client_1.editLabelFeature] });
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.ICON_PROPERTIES, client_1.GLabel, views_1.IconPropertiesLabelNodeView);
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.PREVIOUS_REQUIREMENTS, client_1.GLabel, client_1.GLabelView, { enable: [client_1.editLabelFeature] });
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.SKILLS, client_1.GLabel, client_1.GLabelView, { enable: [client_1.editLabelFeature] });
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.ASSESMENT_CRITERIA, client_1.GLabel, client_1.GLabelView, { enable: [client_1.editLabelFeature] });
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.SUBJECT, client_1.GLabel, client_1.GLabelView, { enable: [client_1.editLabelFeature] });
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.AREA, client_1.GLabel, client_1.GLabelView, { enable: [client_1.editLabelFeature] });
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.OFFER, client_1.GLabel, client_1.GLabelView, { enable: [client_1.editLabelFeature] });
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.SEMESTER, client_1.GLabel, client_1.GLabelView, { enable: [client_1.editLabelFeature] });
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.CREDITS, client_1.GLabel, client_1.GLabelView, { enable: [client_1.editLabelFeature] });
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.LARGE_GROUP_HOURS, client_1.GLabel, client_1.GLabelView, { enable: [client_1.editLabelFeature] });
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.SMALL_GROUP_HOURS, client_1.GLabel, client_1.GLabelView, { enable: [client_1.editLabelFeature] });
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.COORDINATOR, client_1.GLabel, client_1.GLabelView, { enable: [client_1.editLabelFeature] });
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.CONCEPT, model_1.LabeledNode, views_1.ConceptNodeView);
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.CONCEPT_NAME, client_1.GLabel, client_1.GLabelView, { enable: [client_1.editLabelFeature] });
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.ANNOTATIONS, client_1.GLabel, client_1.GLabelView, { enable: [client_1.editLabelFeature] });
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.AFTER, client_1.GEdge, views_1.ConceptMapUsesTopicEdgeView);
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.AFTER_LABEL, client_1.GLabel, client_1.GLabelView);
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.USES, client_1.GEdge, views_1.ConceptMapUsesEdgeView);
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.USES_LABEL, client_1.GLabel, client_1.GLabelView);
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.SPECIALIZES, client_1.GEdge, views_1.ConceptMapSpecializesEdgeView);
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.SPECIALIZES_LABEL, client_1.GLabel, client_1.GLabelView);
    (0, client_1.configureModelElement)(context, client_1.DefaultTypes.ROUTING_POINT, client_1.GRoutingHandle, client_1.GRoutingHandleView);
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.COMP_NAME, client_1.GCompartment, client_1.GCompartmentView);
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.FEATURE, model_1.IconLabelCompartment, client_1.GCompartmentView);
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.NAME, client_1.GLabel, client_1.GLabelView, { enable: [client_1.editLabelFeature] });
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.FEATURE_NAME, client_1.GLabel, client_1.GLabelView, { enable: [client_1.editLabelFeature] });
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.FEATURE_IMAGE, client_1.GLabel, views_1.FeatureLabelNodeView);
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.COMP_AUTHOR, client_1.GCompartment, client_1.GCompartmentView);
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.AUTHOR, client_1.GLabel, client_1.GLabelView, { enable: [client_1.editLabelFeature] });
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.UBICATION, client_1.GLabel, client_1.GLabelView, { enable: [client_1.editLabelFeature] });
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.ICON_IMPORTED, client_1.GLabel, views_1.IconImportedLabelNodeView);
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.ICON_CONCEPT, client_1.GLabel, views_1.IconConceptLabelNodeView);
    (0, client_1.configureModelElement)(context, custom_types_1.CustomTypes.ICON_TOPIC, client_1.GLabel, views_1.IconTopicLabelNodeView);
});
function initializeConceptMapDiagramContainer(container, ...containerConfiguration) {
    return (0, client_1.initializeDiagramContainer)(container, conceptMapDiagramModule, ...containerConfiguration);
}
exports.initializeConceptMapDiagramContainer = initializeConceptMapDiagramContainer;


/***/ }),

/***/ "../conceptmap-glsp/lib/custom-types.js":
/*!**********************************************!*\
  !*** ../conceptmap-glsp/lib/custom-types.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomTypes = void 0;
/********************************************************************************
 * Copyright (c) 2024 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
const client_1 = __webpack_require__(/*! @eclipse-glsp/client */ "../node_modules/@eclipse-glsp/client/lib/index.js");
var CustomTypes;
(function (CustomTypes) {
    CustomTypes.COURSE = client_1.DefaultTypes.NODE + ':course';
    CustomTypes.COMP_NAME = client_1.DefaultTypes.COMPARTMENT + ':name';
    CustomTypes.NAME = client_1.DefaultTypes.LABEL + ':name';
    CustomTypes.COMP_AUTHOR = client_1.DefaultTypes.COMPARTMENT + ':author';
    CustomTypes.AUTHOR = client_1.DefaultTypes.LABEL + ':author';
    CustomTypes.IMPORTED_CONCEPT = client_1.DefaultTypes.NODE + ':imported_concept';
    CustomTypes.IMPORTED_CONCEPT_NAME = client_1.DefaultTypes.LABEL + ':imported_concept_name';
    CustomTypes.UBICATION = client_1.DefaultTypes.LABEL + ':ubication';
    CustomTypes.RELATED_TOPIC = client_1.DefaultTypes.LABEL + ':related_topic';
    CustomTypes.ICON_IMPORTED = client_1.DefaultTypes.LABEL + ':icon_imported';
    CustomTypes.LEGEND = client_1.DefaultTypes.NODE + ':legend';
    CustomTypes.TOPIC = client_1.DefaultTypes.NODE + ':topic';
    CustomTypes.TOPIC_NAME = client_1.DefaultTypes.LABEL + ':topic_name';
    CustomTypes.TOPIC_ANNOTATIONS = client_1.DefaultTypes.LABEL + ':topic_annotations';
    CustomTypes.ICON_TOPIC = client_1.DefaultTypes.LABEL + ':icon_topic';
    CustomTypes.PROPERTIES = client_1.DefaultTypes.NODE + ':properties';
    CustomTypes.ICON_PROPERTIES = client_1.DefaultTypes.LABEL + ':icon_properties';
    CustomTypes.BIBLIOGRAPHY = client_1.DefaultTypes.LABEL + ':bibliography';
    CustomTypes.PREVIOUS_REQUIREMENTS = client_1.DefaultTypes.LABEL + ':previous_requirements';
    CustomTypes.SKILLS = client_1.DefaultTypes.LABEL + ':skills';
    CustomTypes.ASSESMENT_CRITERIA = client_1.DefaultTypes.LABEL + ':assesment_criteria';
    CustomTypes.SUBJECT = client_1.DefaultTypes.LABEL + ':subject';
    CustomTypes.AREA = client_1.DefaultTypes.LABEL + ':area';
    CustomTypes.OFFER = client_1.DefaultTypes.LABEL + ':offer';
    CustomTypes.SEMESTER = client_1.DefaultTypes.LABEL + ':semester';
    CustomTypes.CREDITS = client_1.DefaultTypes.LABEL + ':credits';
    CustomTypes.LARGE_GROUP_HOURS = client_1.DefaultTypes.LABEL + ':large_group_hours';
    CustomTypes.SMALL_GROUP_HOURS = client_1.DefaultTypes.LABEL + ':small_group_hours';
    CustomTypes.COORDINATOR = client_1.DefaultTypes.LABEL + ':coordinator';
    CustomTypes.CONCEPT = client_1.DefaultTypes.NODE + ':concept';
    CustomTypes.CONCEPT_NAME = client_1.DefaultTypes.LABEL + ':concept_name';
    CustomTypes.ANNOTATIONS = client_1.DefaultTypes.LABEL + ':annotations';
    CustomTypes.ICON_CONCEPT = client_1.DefaultTypes.LABEL + ':icon_concept';
    CustomTypes.AFTER = client_1.DefaultTypes.EDGE + ':after';
    CustomTypes.AFTER_LABEL = client_1.DefaultTypes.LABEL + ':after_label';
    CustomTypes.USES = client_1.DefaultTypes.EDGE + ':uses';
    CustomTypes.USES_LABEL = client_1.DefaultTypes + ':uses_label';
    CustomTypes.SPECIALIZES = client_1.DefaultTypes.EDGE + ':specializes';
    CustomTypes.SPECIALIZES_LABEL = client_1.DefaultTypes.LABEL + ':specializes_label';
    CustomTypes.FEATURE = client_1.DefaultTypes.COMPARTMENT + ':feature';
    CustomTypes.FEATURE_NAME = client_1.DefaultTypes.LABEL + ':feature_name';
    CustomTypes.FEATURE_IMAGE = client_1.DefaultTypes.LABEL + ':feature_image';
    // eslint-disable-next-line eol-last
})(CustomTypes || (exports.CustomTypes = CustomTypes = {}));


/***/ }),

/***/ "../conceptmap-glsp/lib/index.js":
/*!***************************************!*\
  !*** ../conceptmap-glsp/lib/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/********************************************************************************
 * Copyright (c) 2022 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied:
 * -- GNU General Public License, version 2 with the GNU Classpath Exception
 * which is available at https://www.gnu.org/software/classpath/license.html
 * -- MIT License which is available at https://opensource.org/license/mit.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0 OR MIT
 ********************************************************************************/
__exportStar(__webpack_require__(/*! ./conceptmap-diagram-module */ "../conceptmap-glsp/lib/conceptmap-diagram-module.js"), exports);


/***/ }),

/***/ "../conceptmap-glsp/lib/model.js":
/*!***************************************!*\
  !*** ../conceptmap-glsp/lib/model.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LabeledNode = exports.IconLabelCompartment = exports.isCourseNode = exports.CourseNode = void 0;
/********************************************************************************
 * Copyright (c) 2020-2023 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
const client_1 = __webpack_require__(/*! @eclipse-glsp/client */ "../node_modules/@eclipse-glsp/client/lib/index.js");
class CourseNode extends client_1.RectangularNode {
    get editableLabel() {
        const label = this.children.find(element => element.type === 'label:name');
        if (label && (0, client_1.isEditableLabel)(label)) {
            return label;
        }
        return undefined;
    }
    get name() {
        var _a;
        const labelText = (_a = this.editableLabel) === null || _a === void 0 ? void 0 : _a.text;
        return labelText ? labelText : '<unknown>';
    }
}
exports.CourseNode = CourseNode;
CourseNode.DEFAULT_FEATURES = [
    client_1.connectableFeature,
    client_1.deletableFeature,
    client_1.selectFeature,
    client_1.boundsFeature,
    client_1.moveFeature,
    client_1.layoutContainerFeature,
    client_1.fadeFeature,
    client_1.hoverFeedbackFeature,
    client_1.popupFeature,
    client_1.nameFeature,
    client_1.withEditLabelFeature
];
function isCourseNode(element) {
    return element instanceof CourseNode || false;
}
exports.isCourseNode = isCourseNode;
class IconLabelCompartment extends client_1.GCompartment {
    constructor() {
        super(...arguments);
        this.selected = false;
        this.hoverFeedback = false;
    }
    hasFeature(feature) {
        return super.hasFeature(feature) || feature === client_1.selectFeature || feature === client_1.deletableFeature || feature === client_1.hoverFeedbackFeature;
    }
}
exports.IconLabelCompartment = IconLabelCompartment;
class LabeledNode extends client_1.RectangularNode {
    get editableLabel() {
        const headerNode = this.children.find(element => element.type === 'node:feature');
        if (headerNode) {
            const label = headerNode.children.find(element => element.type === 'label:feature_name');
            if (label && (0, client_1.isEditableLabel)(label)) {
                return label;
            }
        }
        return undefined;
    }
    get name() {
        if (this.editableLabel) {
            return this.editableLabel.text;
        }
        return this.id;
    }
    hasFeature(feature) {
        return super.hasFeature(feature) || feature === client_1.nameFeature || feature === client_1.withEditLabelFeature;
    }
}
exports.LabeledNode = LabeledNode;


/***/ }),

/***/ "../conceptmap-glsp/lib/views.js":
/*!***************************************!*\
  !*** ../conceptmap-glsp/lib/views.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/********************************************************************************
 * Copyright (c) 2019-2023 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IconTopicLabelNodeView = exports.ConceptNodeView = exports.IconConceptLabelNodeView = exports.IconImportedLabelNodeView = exports.IconPropertiesLabelNodeView = exports.FeatureLabelNodeView = exports.ClassNodeView = exports.CaptionNodeView = exports.TopicNodeView = exports.ConceptMapSpecializesEdgeView = exports.ConceptMapUsesEdgeView = exports.ConceptMapUsesTopicEdgeView = void 0;
const client_1 = __webpack_require__(/*! @eclipse-glsp/client */ "../node_modules/@eclipse-glsp/client/lib/index.js");
const inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/es/inversify.js");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const JSX = { createElement: client_1.svg };
let ConceptMapUsesTopicEdgeView = class ConceptMapUsesTopicEdgeView extends client_1.PolylineEdgeViewWithGapsOnIntersections {
    renderAdditionals(edge, segments, context) {
        const additionals = super.renderAdditionals(edge, segments, context);
        const p1 = segments[segments.length - 2];
        const p2 = segments[segments.length - 1];
        const arrow = (JSX.createElement("path", { "class-uses-topic-edge": true, "class-arrow-uses-topic": true, d: 'M 1,0 L 10,-4 L 10,4 Z', transform: `rotate(${(0, client_1.toDegrees)((0, client_1.angleOfPoint)(client_1.Point.subtract(p1, p2)))} ${p2.x} ${p2.y}) translate(${p2.x} ${p2.y})` }));
        const labelVnode = context.renderChildren(edge);
        additionals.push(arrow);
        return (JSX.createElement("g", null,
            additionals,
            labelVnode));
    }
};
exports.ConceptMapUsesTopicEdgeView = ConceptMapUsesTopicEdgeView;
exports.ConceptMapUsesTopicEdgeView = ConceptMapUsesTopicEdgeView = __decorate([
    (0, inversify_1.injectable)()
], ConceptMapUsesTopicEdgeView);
let ConceptMapUsesEdgeView = class ConceptMapUsesEdgeView extends client_1.PolylineEdgeViewWithGapsOnIntersections {
    renderAdditionals(edge, segments, context) {
        const additionals = super.renderAdditionals(edge, segments, context);
        const p1 = segments[segments.length - 2];
        const p2 = segments[segments.length - 1];
        const arrow = (JSX.createElement("path", { "class-uses-edge": true, "class-uses-arrow": true, d: 'M 1,0 L 10,-4 L 10,4 Z', transform: `rotate(${(0, client_1.toDegrees)((0, client_1.angleOfPoint)(client_1.Point.subtract(p1, p2)))} ${p2.x} ${p2.y}) translate(${p2.x} ${p2.y})` }));
        additionals.push(arrow);
        return additionals;
    }
};
exports.ConceptMapUsesEdgeView = ConceptMapUsesEdgeView;
exports.ConceptMapUsesEdgeView = ConceptMapUsesEdgeView = __decorate([
    (0, inversify_1.injectable)()
], ConceptMapUsesEdgeView);
let ConceptMapSpecializesEdgeView = class ConceptMapSpecializesEdgeView extends client_1.PolylineEdgeViewWithGapsOnIntersections {
    renderAdditionals(edge, segments, context) {
        const additionals = super.renderAdditionals(edge, segments, context);
        const p1 = segments[segments.length - 2];
        const p2 = segments[segments.length - 1];
        const arrow = (JSX.createElement("path", { "class-specializes-edge": true, "class-specializes-arrow": true, d: 'M 1,0 L 10,-4 L 10,4 Z M 1,0 L 10,4', fill: 'none', transform: `rotate(${(0, client_1.toDegrees)((0, client_1.angleOfPoint)(client_1.Point.subtract(p1, p2)))} ${p2.x} ${p2.y}) translate(${p2.x} ${p2.y})` }));
        additionals.push(arrow);
        return additionals;
    }
};
exports.ConceptMapSpecializesEdgeView = ConceptMapSpecializesEdgeView;
exports.ConceptMapSpecializesEdgeView = ConceptMapSpecializesEdgeView = __decorate([
    (0, inversify_1.injectable)()
], ConceptMapSpecializesEdgeView);
let TopicNodeView = class TopicNodeView extends client_1.RoundedCornerNodeView {
    render(node, context) {
        const rhombStr = 'M 0,38  L ' + node.bounds.width + ',38';
        const classNode = (JSX.createElement("g", { "class-node": true },
            JSX.createElement("defs", null,
                JSX.createElement("filter", { id: 'dropShadow' },
                    JSX.createElement("feDropShadow", { dx: '0.5', dy: '0.5', stdDeviation: '0.4' }))),
            JSX.createElement("rect", { "class-sprotty-node": true, "class-selected": node.selected, "class-mouseover": node.hoverFeedback, x: 0, y: 0, rx: 6, ry: 6, width: Math.max(0, node.bounds.width), height: Math.max(0, node.bounds.height) }),
            context.renderChildren(node),
            node.children[1] && node.children[1].children.length > 0 ? JSX.createElement("path", { "class-sprotty-edge": true, d: rhombStr }) : ''));
        return classNode;
    }
};
exports.TopicNodeView = TopicNodeView;
exports.TopicNodeView = TopicNodeView = __decorate([
    (0, inversify_1.injectable)()
], TopicNodeView);
let CaptionNodeView = class CaptionNodeView extends client_1.RoundedCornerNodeView {
    render(node, context) {
        const initialWidth = 180;
        const initialHeight = 250;
        const d = 'M14 2H8L7 3v3h1V3h6v5h-4v1h4l1-1V3l-1-1zM9 6h4v1H9.41L9 6.59V6zM7 7H2L1 8v5l1 1h6l1-1V8L8 7H7zm1 6H2V8h6v5zM3 9h4v1H3V9zm0 2h4v1H3v-1zm6-7h4v1H9V4z';
        const image = (JSX.createElement("svg", { width: '16', height: '16', viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fill: 'black', x: 5, y: 5 },
            JSX.createElement("path", { "fill-rule": 'evenodd', "clip-rule": 'evenodd', d: d })));
        const classNode = (JSX.createElement("g", { "class-node": true },
            JSX.createElement("defs", null,
                JSX.createElement("filter", { id: 'dropShadow' },
                    JSX.createElement("feDropShadow", { dx: '0.5', dy: '0.5', stdDeviation: '0.4' }))),
            JSX.createElement("rect", { "class-sprotty-node": true, "class-selected": node.selected, "class-mouseover": node.hoverFeedback, x: 0, y: 0, rx: 6, ry: 6, width: initialWidth, height: initialHeight, stroke: 'black', "stroke-width": '3', fill: 'white' }),
            context.renderChildren(node),
            image,
            JSX.createElement("text", { x: '95', y: '20', "class-header": true }, "LEGEND"),
            JSX.createElement("text", { x: '65', y: '70', "class-caption": true }, "Uses (For Concepts)"),
            JSX.createElement("line", { x1: '20', y1: '85', x2: '110', y2: '85', "class-line-uses": true }),
            JSX.createElement("polygon", { points: '100,80 110,85 100,90', fill: 'black' }),
            JSX.createElement("text", { x: '90', y: '140', "class-caption": true }, "Specializes (For Concepts)"),
            JSX.createElement("line", { x1: '20', y1: '155', x2: '110', y2: '155', "class-line-specializes": true }),
            JSX.createElement("polygon", { points: '100,150 110,155 100,160', fill: 'gray' }),
            JSX.createElement("text", { x: '60', y: '210', "class-caption": true }, "After (For Topics)"),
            JSX.createElement("line", { x1: '20', y1: '225', x2: '110', y2: '225', "class-uses-topic-edge": true }),
            JSX.createElement("polygon", { points: '100,220 110,225 100,230', fill: 'black' })));
        return classNode;
    }
};
exports.CaptionNodeView = CaptionNodeView;
exports.CaptionNodeView = CaptionNodeView = __decorate([
    (0, inversify_1.injectable)()
], CaptionNodeView);
let ClassNodeView = class ClassNodeView extends client_1.RectangularNodeView {
    render(node, context) {
        const rhombStr = 'M 0,38  L ' + node.bounds.width + ',38';
        const classNode = (JSX.createElement("g", { "class-node": true },
            JSX.createElement("defs", null,
                JSX.createElement("filter", { id: 'dropShadow' },
                    JSX.createElement("feDropShadow", { dx: '0.5', dy: '0.5', stdDeviation: '0.4' }))),
            JSX.createElement("rect", { "class-sprotty-node": true, "class-selected": node.selected, "class-mouseover": node.hoverFeedback, x: 0, y: 0, rx: 6, ry: 6, width: Math.max(0, node.bounds.width), height: Math.max(0, node.bounds.height) }),
            context.renderChildren(node),
            node.children[1] && node.children[1].children.length > 0 ? JSX.createElement("path", { "class-sprotty-edge": true, d: rhombStr }) : ''));
        return classNode;
    }
};
exports.ClassNodeView = ClassNodeView;
exports.ClassNodeView = ClassNodeView = __decorate([
    (0, inversify_1.injectable)()
], ClassNodeView);
let FeatureLabelNodeView = class FeatureLabelNodeView extends client_1.GLabelView {
    render(labelNode, context) {
        const d = 'M9.595 6.252L8 1 6.405 6.252H1l4.373 3.4L3.75 15 8 11.695 12.25 15l-1.623-5.348L15 6.252H9.595z';
        const image = (JSX.createElement("svg", { width: '16', height: '16', viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fill: 'black' },
            JSX.createElement("path", { "fill-rule": 'evenodd', "clip-rule": 'evenodd', d: d })));
        const vnode = (JSX.createElement("g", { "class-selected": labelNode.selected, "class-mouseover": true, "class-sprotty-label-node": true },
            image,
            JSX.createElement("text", { "class-sprotty-label": true, x: 20 }, labelNode.text)));
        const subType = (0, client_1.getSubType)(labelNode);
        if (subType) {
            (0, client_1.setAttr)(vnode, 'class', subType);
        }
        return vnode;
    }
};
exports.FeatureLabelNodeView = FeatureLabelNodeView;
exports.FeatureLabelNodeView = FeatureLabelNodeView = __decorate([
    (0, inversify_1.injectable)()
], FeatureLabelNodeView);
let IconPropertiesLabelNodeView = class IconPropertiesLabelNodeView extends client_1.GLabelView {
    render(labelNode, context) {
        const d = 'M2.807 14.975a1.75 1.75 0 0 1-1.255-.556 1.684 1.684 0 0 1-.544-1.1A1.72 1.72 0 0 1 1.36 12.1c1.208-1.27 3.587-3.65 5.318-5.345a4.257 4.257 0 0 1 .048-3.078 4.095 4.095 0 0 1 1.665-1.969 4.259 4.259 0 0 1 4.04-.36l.617.268-2.866 2.951 1.255 1.259 2.944-2.877.267.619a4.295 4.295 0 0 1 .04 3.311 4.198 4.198 0 0 1-.923 1.392 4.27 4.27 0 0 1-.743.581 4.217 4.217 0 0 1-3.812.446c-1.098 1.112-3.84 3.872-5.32 5.254a1.63 1.63 0 0 1-1.084.423zm7.938-13.047a3.32 3.32 0 0 0-1.849.557c-.213.13-.412.284-.591.458a3.321 3.321 0 0 0-.657 3.733l.135.297-.233.227c-1.738 1.697-4.269 4.22-5.485 5.504a.805.805 0 0 0 .132 1.05.911.911 0 0 0 .298.22c.1.044.209.069.319.072a.694.694 0 0 0 .45-.181c1.573-1.469 4.612-4.539 5.504-5.44l.23-.232.294.135a3.286 3.286 0 0 0 3.225-.254 3.33 3.33 0 0 0 .591-.464 3.28 3.28 0 0 0 .964-2.358c0-.215-.021-.43-.064-.642L11.43 7.125 8.879 4.578l2.515-2.59a3.286 3.286 0 0 0-.65-.06z';
        const image = (JSX.createElement("svg", { width: '16', height: '16', viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fill: 'black' },
            JSX.createElement("path", { "fill-rule": 'evenodd', "clip-rule": 'evenodd', d: d })));
        const vnode = (JSX.createElement("g", { "class-selected": labelNode.selected, "class-mouseover": true, "class-sprotty-label-node": true },
            image,
            JSX.createElement("text", { "class-sprotty-label": true, x: 20 }, labelNode.text)));
        const subType = (0, client_1.getSubType)(labelNode);
        if (subType) {
            (0, client_1.setAttr)(vnode, 'class', subType);
        }
        return vnode;
    }
};
exports.IconPropertiesLabelNodeView = IconPropertiesLabelNodeView;
exports.IconPropertiesLabelNodeView = IconPropertiesLabelNodeView = __decorate([
    (0, inversify_1.injectable)()
], IconPropertiesLabelNodeView);
let IconImportedLabelNodeView = class IconImportedLabelNodeView extends client_1.GLabelView {
    render(labelNode, context) {
        const d = 'M10.57 1.14l3.28 3.3.15.36v9.7l-.5.5H10v-1h3V6H9.5L9 5.5V2H3v4H2V1.5l.5-.5h7.72l.35.14zM10 5h3l-3-3v3zM8.5 7h-7l-.5.5v7l.5.5h7l.5-.5v-7L8.5 7zM8 14H2V8h6v6zM7 9.5v3H6v-1.793l-2.646 2.647-.708-.708L5.293 10H3.53V9H6.5l.5.5z';
        const image = (JSX.createElement("svg", { width: '16', height: '16', viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fill: 'black' },
            JSX.createElement("path", { "fill-rule": 'evenodd', "clip-rule": 'evenodd', d: d })));
        const vnode = (JSX.createElement("g", { "class-selected": labelNode.selected, "class-mouseover": true, "class-sprotty-label-node": true },
            image,
            JSX.createElement("text", { "class-sprotty-label": true, x: 20 }, labelNode.text)));
        const subType = (0, client_1.getSubType)(labelNode);
        if (subType) {
            (0, client_1.setAttr)(vnode, 'class', subType);
        }
        return vnode;
    }
};
exports.IconImportedLabelNodeView = IconImportedLabelNodeView;
exports.IconImportedLabelNodeView = IconImportedLabelNodeView = __decorate([
    (0, inversify_1.injectable)()
], IconImportedLabelNodeView);
let IconConceptLabelNodeView = class IconConceptLabelNodeView extends client_1.GLabelView {
    render(labelNode, context) {
        const d = 'M1.5 1h13l.5.5v12l-.5.5h-13l-.5-.5v-12l.5-.5zM2 5v8h12V5H2zm0-1h12V2H2v2z';
        const image = (JSX.createElement("svg", { width: '16', height: '16', viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fill: 'black' },
            JSX.createElement("path", { "fill-rule": 'evenodd', "clip-rule": 'evenodd', d: d })));
        const vnode = (JSX.createElement("g", { "class-selected": labelNode.selected, "class-mouseover": true, "class-sprotty-label-node": true },
            image,
            JSX.createElement("text", { "class-sprotty-label": true, x: 20 }, labelNode.text)));
        const subType = (0, client_1.getSubType)(labelNode);
        if (subType) {
            (0, client_1.setAttr)(vnode, 'class', subType);
        }
        return vnode;
    }
};
exports.IconConceptLabelNodeView = IconConceptLabelNodeView;
exports.IconConceptLabelNodeView = IconConceptLabelNodeView = __decorate([
    (0, inversify_1.injectable)()
], IconConceptLabelNodeView);
let ConceptNodeView = class ConceptNodeView extends client_1.RoundedCornerNodeView {
    render(model, context) {
        const vnode = (JSX.createElement("rect", { "class-sprotty-node": true, "class-concept-node": true, x: 0, y: 0, width: model.size.width, height: model.size.height }));
        const labelVnode = context.renderChildren(model);
        return (JSX.createElement("g", null,
            vnode,
            labelVnode));
    }
};
exports.ConceptNodeView = ConceptNodeView;
exports.ConceptNodeView = ConceptNodeView = __decorate([
    (0, inversify_1.injectable)()
], ConceptNodeView);
let IconTopicLabelNodeView = class IconTopicLabelNodeView extends client_1.GLabelView {
    render(labelNode, context) {
        const d = 'M13.5 2h-12l-.5.5v11l.5.5h12l.5-.5v-11l-.5-.5zM2 3h11v1H2V3zm7 4H6V5h3v2zm0 1v2H6V8h3zM2 5h3v2H2V5zm0 3h3v2H2V8zm0 5v-2h3v2H2zm4 0v-2h3v2H6zm7 0h-3v-2h3v2zm0-3h-3V8h3v2zm-3-3V5h3v2h-3z';
        const image = (JSX.createElement("svg", { width: '16', height: '16', viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fill: 'black' },
            JSX.createElement("path", { "fill-rule": 'evenodd', "clip-rule": 'evenodd', d: d })));
        const vnode = (JSX.createElement("g", { "class-selected": labelNode.selected, "class-mouseover": true, "class-sprotty-label-node": true },
            image,
            JSX.createElement("text", { "class-sprotty-label": true, x: 20 }, labelNode.text)));
        const subType = (0, client_1.getSubType)(labelNode);
        if (subType) {
            (0, client_1.setAttr)(vnode, 'class', subType);
        }
        return vnode;
    }
};
exports.IconTopicLabelNodeView = IconTopicLabelNodeView;
exports.IconTopicLabelNodeView = IconTopicLabelNodeView = __decorate([
    (0, inversify_1.injectable)()
], IconTopicLabelNodeView);


/***/ }),

/***/ "../conceptmap-theia/lib/browser/diagram/conceptmap-diagram-configuration.js":
/*!***********************************************************************************!*\
  !*** ../conceptmap-theia/lib/browser/diagram/conceptmap-diagram-configuration.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConceptMapDiagramConfiguration = void 0;
const browser_1 = __webpack_require__(/*! @eclipse-glsp/theia-integration/lib/browser */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/index.js");
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
const conceptmap_glsp_1 = __webpack_require__(/*! ../../../../conceptmap-glsp */ "../conceptmap-glsp/lib/index.js");
const conceptmap_language_1 = __webpack_require__(/*! ../../common/conceptmap-language */ "../conceptmap-theia/lib/common/conceptmap-language.js");
let ConceptMapDiagramConfiguration = class ConceptMapDiagramConfiguration extends browser_1.GLSPDiagramConfiguration {
    constructor() {
        super(...arguments);
        this.diagramType = conceptmap_language_1.ConceptMapLanguage.diagramType;
    }
    configureContainer(container, ...containerConfiguration) {
        (0, conceptmap_glsp_1.initializeConceptMapDiagramContainer)(container, ...containerConfiguration);
    }
};
exports.ConceptMapDiagramConfiguration = ConceptMapDiagramConfiguration;
exports.ConceptMapDiagramConfiguration = ConceptMapDiagramConfiguration = __decorate([
    (0, inversify_1.injectable)()
], ConceptMapDiagramConfiguration);


/***/ }),

/***/ "../conceptmap-theia/lib/browser/frontend-module.js":
/*!**********************************************************!*\
  !*** ../conceptmap-theia/lib/browser/frontend-module.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskListTheiaFrontendModule = void 0;
/********************************************************************************
 * Copyright (c) 2022 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied:
 * -- GNU General Public License, version 2 with the GNU Classpath Exception
 * which is available at https://www.gnu.org/software/classpath/license.html
 * -- MIT License which is available at https://opensource.org/license/mit.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0 OR MIT
 ********************************************************************************/
const theia_integration_1 = __webpack_require__(/*! @eclipse-glsp/theia-integration */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/index.js");
const conceptmap_language_1 = __webpack_require__(/*! ../common/conceptmap-language */ "../conceptmap-theia/lib/common/conceptmap-language.js");
const conceptmap_diagram_configuration_1 = __webpack_require__(/*! ./diagram/conceptmap-diagram-configuration */ "../conceptmap-theia/lib/browser/diagram/conceptmap-diagram-configuration.js");
class TaskListTheiaFrontendModule extends theia_integration_1.GLSPTheiaFrontendModule {
    constructor() {
        super(...arguments);
        this.diagramLanguage = conceptmap_language_1.ConceptMapLanguage;
    }
    bindDiagramConfiguration(context) {
        context.bind(theia_integration_1.DiagramConfiguration).to(conceptmap_diagram_configuration_1.ConceptMapDiagramConfiguration);
    }
}
exports.TaskListTheiaFrontendModule = TaskListTheiaFrontendModule;
exports["default"] = new TaskListTheiaFrontendModule();


/***/ }),

/***/ "../conceptmap-theia/lib/common/conceptmap-language.js":
/*!*************************************************************!*\
  !*** ../conceptmap-theia/lib/common/conceptmap-language.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConceptMapLanguage = void 0;
exports.ConceptMapLanguage = {
    contributionId: 'ConceptMap',
    label: 'ConceptMap Diagram',
    diagramType: 'conceptmap-diagram',
    iconClass: 'codicon codicon-map-filled',
    fileExtensions: ['.course']
};


/***/ }),

/***/ "../conceptmap-glsp/css/diagram.css":
/*!******************************************!*\
  !*** ../conceptmap-glsp/css/diagram.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_diagram_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./diagram.css */ "../node_modules/css-loader/dist/cjs.js!../conceptmap-glsp/css/diagram.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_diagram_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_diagram_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);
//# sourceMappingURL=conceptmap-theia_lib_browser_frontend-module_js.js.map