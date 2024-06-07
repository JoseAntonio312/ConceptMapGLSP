"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const client_1 = require("@eclipse-glsp/client");
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
//# sourceMappingURL=custom-types.js.map