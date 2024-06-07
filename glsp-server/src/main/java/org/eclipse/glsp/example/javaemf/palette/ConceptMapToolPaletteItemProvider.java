/********************************************************************************
 * Copyright (c) 2022 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * https://www.eclipse.org/legal/epl-2.0.
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
package org.eclipse.glsp.example.javaemf.palette;

import java.util.List;
import java.util.Map;

import org.eclipse.glsp.example.javaemf.ConceptMapModelTypes;
import org.eclipse.glsp.server.actions.TriggerEdgeCreationAction;
import org.eclipse.glsp.server.actions.TriggerNodeCreationAction;
import org.eclipse.glsp.server.features.toolpalette.PaletteItem;
import org.eclipse.glsp.server.features.toolpalette.ToolPaletteItemProvider;

import com.google.common.collect.Lists;

public class ConceptMapToolPaletteItemProvider implements ToolPaletteItemProvider {

    @Override
    public List<PaletteItem> getItems(Map<String, String> args) {
        return Lists.newArrayList(elements(), edges());
    }

    private PaletteItem elements() {

        PaletteItem createCaption = node(ConceptMapModelTypes.LEGEND, "f) Legend", "symbol-enum");
        PaletteItem createTopic = node(ConceptMapModelTypes.TOPIC, "a) Topic", "table");
        PaletteItem createProperties = node(ConceptMapModelTypes.PROPERTIES, "e) Course Properties",
            "symbol-property");
        PaletteItem createFeature = node(ConceptMapModelTypes.FEATURE, "d) Concept Feature", "star-full");
        PaletteItem createConcept = node(ConceptMapModelTypes.CONCEPT, "b) Concept", "browser");
        PaletteItem createImportedConcept = node(ConceptMapModelTypes.IMPORTED_CONCEPT, "c) Imported Concept",
            "file-symlink-file");
        List<PaletteItem> nodes = Lists.newArrayList(createTopic, createConcept, createImportedConcept, createFeature,
            createProperties, createCaption);
        return PaletteItem.createPaletteGroup("nodes", "Elements", nodes, "insert");
    }

    private PaletteItem node(String elementTypeId, String label, String icon) {
        return new PaletteItem(elementTypeId, label, new TriggerNodeCreationAction(elementTypeId), icon);
    }

    private PaletteItem edges() {
        PaletteItem createUsesTopic = edge(ConceptMapModelTypes.AFTER, "a) after (Topic)");
        PaletteItem createUses = edge(ConceptMapModelTypes.USES, "b) uses (Concept)");
        PaletteItem createSpecilizes = edge(ConceptMapModelTypes.SPECIALIZES, "c) specializes (Concept)");
        List<PaletteItem> edges = Lists.newArrayList(createUsesTopic, createUses, createSpecilizes);
        return PaletteItem.createPaletteGroup("edges", "Connections", edges, "arrow-both");
    }

    private PaletteItem edge(String elementTypeId, String label) {
        return new PaletteItem(elementTypeId, label, new TriggerEdgeCreationAction(elementTypeId));
    }

}
