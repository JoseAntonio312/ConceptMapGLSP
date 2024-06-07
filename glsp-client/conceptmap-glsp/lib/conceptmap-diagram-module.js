"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const client_1 = require("@eclipse-glsp/client");
const inversify_1 = require("inversify");
require("../css/diagram.css");
const custom_types_1 = require("./custom-types");
const model_1 = require("./model");
const views_1 = require("./views");
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
//# sourceMappingURL=conceptmap-diagram-module.js.map