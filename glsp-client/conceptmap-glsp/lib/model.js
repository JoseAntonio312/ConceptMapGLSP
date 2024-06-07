"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const client_1 = require("@eclipse-glsp/client");
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
//# sourceMappingURL=model.js.map