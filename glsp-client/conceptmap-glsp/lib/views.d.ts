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
import { GEdge, GLabel, GLabelView, GNode, Point, PolylineEdgeViewWithGapsOnIntersections, RectangularNode, RectangularNodeView, RenderingContext, RoundedCornerNodeView } from '@eclipse-glsp/client';
import { VNode } from 'snabbdom';
export declare class ConceptMapUsesTopicEdgeView extends PolylineEdgeViewWithGapsOnIntersections {
    protected renderAdditionals(edge: GEdge, segments: Point[], context: RenderingContext): VNode[];
}
export declare class ConceptMapUsesEdgeView extends PolylineEdgeViewWithGapsOnIntersections {
    protected renderAdditionals(edge: GEdge, segments: Point[], context: RenderingContext): VNode[];
}
export declare class ConceptMapSpecializesEdgeView extends PolylineEdgeViewWithGapsOnIntersections {
    protected renderAdditionals(edge: GEdge, segments: Point[], context: RenderingContext): VNode[];
}
export declare class TopicNodeView extends RoundedCornerNodeView {
    render(node: RectangularNode, context: RenderingContext): VNode;
}
export declare class CaptionNodeView extends RoundedCornerNodeView {
    render(node: RectangularNode, context: RenderingContext): VNode;
}
export declare class ClassNodeView extends RectangularNodeView {
    render(node: GNode, context: RenderingContext): VNode;
}
export declare class FeatureLabelNodeView extends GLabelView {
    render(labelNode: Readonly<GLabel>, context: RenderingContext): VNode;
}
export declare class IconPropertiesLabelNodeView extends GLabelView {
    render(labelNode: Readonly<GLabel>, context: RenderingContext): VNode;
}
export declare class IconImportedLabelNodeView extends GLabelView {
    render(labelNode: Readonly<GLabel>, context: RenderingContext): VNode;
}
export declare class IconConceptLabelNodeView extends GLabelView {
    render(labelNode: Readonly<GLabel>, context: RenderingContext): VNode;
}
export declare class ConceptNodeView extends RoundedCornerNodeView {
    render(model: GNode, context: RenderingContext): VNode;
}
export declare class IconTopicLabelNodeView extends GLabelView {
    render(labelNode: Readonly<GLabel>, context: RenderingContext): VNode;
}
//# sourceMappingURL=views.d.ts.map