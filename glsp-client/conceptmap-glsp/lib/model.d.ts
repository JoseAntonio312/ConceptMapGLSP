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
import { Deletable, EditableLabel, GChildElement, GCompartment, GModelElement, Hoverable, Nameable, RectangularNode, Selectable, WithEditableLabel } from '@eclipse-glsp/client';
export declare class CourseNode extends RectangularNode implements Nameable, WithEditableLabel {
    static readonly DEFAULT_FEATURES: symbol[];
    get editableLabel(): (GChildElement & EditableLabel) | undefined;
    get name(): string;
}
export declare function isCourseNode(element: GModelElement): element is CourseNode;
export declare class IconLabelCompartment extends GCompartment implements Selectable, Deletable, Hoverable {
    selected: boolean;
    hoverFeedback: boolean;
    hasFeature(feature: symbol): boolean;
}
export declare class LabeledNode extends RectangularNode implements WithEditableLabel, Nameable {
    get editableLabel(): (GChildElement & EditableLabel) | undefined;
    get name(): string;
    hasFeature(feature: symbol): boolean;
}
//# sourceMappingURL=model.d.ts.map