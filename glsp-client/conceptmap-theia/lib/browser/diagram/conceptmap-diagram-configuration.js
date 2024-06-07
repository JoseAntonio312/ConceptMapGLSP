"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConceptMapDiagramConfiguration = void 0;
const browser_1 = require("@eclipse-glsp/theia-integration/lib/browser");
const inversify_1 = require("@theia/core/shared/inversify");
const conceptmap_glsp_1 = require("../../../../conceptmap-glsp");
const conceptmap_language_1 = require("../../common/conceptmap-language");
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
//# sourceMappingURL=conceptmap-diagram-configuration.js.map