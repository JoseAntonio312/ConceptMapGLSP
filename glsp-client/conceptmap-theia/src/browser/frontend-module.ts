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
import { ContainerContext, DiagramConfiguration, GLSPTheiaFrontendModule } from '@eclipse-glsp/theia-integration';
import { ConceptMapLanguage } from '../common/conceptmap-language';
import { ConceptMapDiagramConfiguration } from './diagram/conceptmap-diagram-configuration';

export class TaskListTheiaFrontendModule extends GLSPTheiaFrontendModule {
    readonly diagramLanguage = ConceptMapLanguage;

    bindDiagramConfiguration(context: ContainerContext): void {
        context.bind(DiagramConfiguration).to(ConceptMapDiagramConfiguration);
    }
}

export default new TaskListTheiaFrontendModule();
