"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconTopicLabelNodeView = exports.ConceptNodeView = exports.IconConceptLabelNodeView = exports.IconImportedLabelNodeView = exports.IconPropertiesLabelNodeView = exports.FeatureLabelNodeView = exports.ClassNodeView = exports.CaptionNodeView = exports.TopicNodeView = exports.ConceptMapSpecializesEdgeView = exports.ConceptMapUsesEdgeView = exports.ConceptMapUsesTopicEdgeView = void 0;
const client_1 = require("@eclipse-glsp/client");
const inversify_1 = require("inversify");
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
//# sourceMappingURL=views.js.map