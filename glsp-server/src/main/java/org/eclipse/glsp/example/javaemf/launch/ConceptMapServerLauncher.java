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
package org.eclipse.glsp.example.javaemf.launch;

import org.apache.commons.cli.ParseException;
import org.eclipse.glsp.example.javaemf.ConceptMapDiagramModule;
import org.eclipse.glsp.server.di.ServerModule;
import org.eclipse.glsp.server.launch.DefaultCLIParser;
import org.eclipse.glsp.server.launch.GLSPServerLauncher;
import org.eclipse.glsp.server.launch.SocketGLSPServerLauncher;
import org.eclipse.glsp.server.utils.LaunchUtil;

public final class ConceptMapServerLauncher {
   private ConceptMapServerLauncher() {}

   @SuppressWarnings("uncommentedmain")
   public static void main(final String[] args) {
      String processName = "ConceptMapExampleGlspServer";
      try {
         DefaultCLIParser parser = new DefaultCLIParser(args, processName);

         int port = parser.parsePort();
         String host = parser.parseHostname();
         ServerModule conceptmapServerModule = new ServerModule()
            .configureDiagramModule(new ConceptMapDiagramModule());

         GLSPServerLauncher launcher = new SocketGLSPServerLauncher(conceptmapServerModule);
         launcher.start(host, port, parser);
      } catch (ParseException ex) {
         ex.printStackTrace();
         LaunchUtil.printHelp(processName, DefaultCLIParser.getDefaultOptions());
      }
   }
}
