/********************************************************************
 KWin - the KDE window manager
 This file is part of the KDE project.

 Copyright (C) 2013 Thomas Lübking <thomas.luebking@gmail.com>

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*********************************************************************/

var debugClients = function() {
    var clients = workspace.clientList();
    for (var i = 0; i < clients.length; ++i) {
        print("\n------ Identification -------------------\n",
              "caption: ", clients[i].caption, "\n",
              "resourceName: ", clients[i].resourceName, "\n",
              "resourceClass: ", clients[i].resourceClass, "\n",
              "windowRole: ", clients[i].windowRole, "\n",
              "windowId: ", clients[i].windowId, "\n",
              "frameId: ", clients[i].frameId, "\n",
              "managed: ", clients[i].managed, "\n",
              "deleted: ", clients[i].deleted, "\n",

              "\n------ Type -------------------\n",
              "modal: ", clients[i].modal, "\n",
              "transient: ", clients[i].transient, "\n",
              "transientFor: ", clients[i].transientFor, "\n",
              "windowType: ", clients[i].windowType, "\n",
              "desktop: ", clients[i].desktopWindow, "\n",
              "dock: ", clients[i].dock, "\n",
              "toolbar: ", clients[i].toolbar, "\n",
              "menu: ", clients[i].menu, "\n",
              "normal: ", clients[i].normalWindow, "\n",
              "dialog: ", clients[i].dialog, "\n",
              "splash: ", clients[i].splash, "\n",
              "utility: ", clients[i].utility, "\n",
              "dropdownMenu: ", clients[i].dropdownMenu, "\n",
              "popupMenu: ", clients[i].popupMenu, "\n",
              "tooltip: ", clients[i].tooltip, "\n",
              "notification: ", clients[i].notification, "\n",
              "comboBox: ", clients[i].comboBox, "\n",
              "dndIcon: ", clients[i].dndIcon, "\n",
              "special: ", clients[i].specialWindow, "\n",

              "\n------ Location -------------------\n",
              "activities: ", clients[i].activities.join(", "), "\n",
              "desktop: ", clients[i].desktop, "\n",
              "onAllDesktops: ", clients[i].onAllDesktops, "\n",
              "screen: ", clients[i].screen, "\n",
              "geometry: ", clients[i].geometry.width,"x",clients[i].geometry.height,"+",clients[i].geometry.x,"+",clients[i].geometry.y, "\n",
              "rect: ", clients[i].rect.width,"x",clients[i].rect.height,"+",clients[i].rect.x,"+",clients[i].rect.y, "\n",
              "visibleRect: ", clients[i].visibleRect.width,"x",clients[i].visibleRect.height,"+",clients[i].visibleRect.x,"+",clients[i].visibleRect.y,"\n",
              "pos: ", clients[i].pos.x, clients[i].pos.y, "\n",
              "clientPos: ", clients[i].clientPos.x, clients[i].clientPos.y, "\n",
              "x: ", clients[i].x, "\n",
              "y: ", clients[i].y, "\n",
              "width: ", clients[i].width, "\n",
              "height: ", clients[i].height, "\n",
//               "size: ", clients[i].size.width,"x",clients[i].size.height, "\n",
//               "clientSize: ", clients[i].clientSize.width,"x",clients[i].clientSize.height, "\n",

              "\n------ State -------------------\n",
              "active: ", clients[i].active, "\n",
              "moving: ", clients[i].move, "\n",
              "resizing: ", clients[i].resize, "\n",
              "fullScreen: ", clients[i].fullScreen, "\n",
              "keepAbove: ", clients[i].keepAbove, "\n",
              "keepBelow: ", clients[i].keepBelow, "\n",
              "minimized: ", clients[i].minimized, "\n",
              "shaded: ", clients[i].shade, "\n",
              "demandsAttention: ", clients[i].demandsAttention, "\n",

              "\n------ Capabilities -------------------\n",
              "closeable: ", clients[i].closeable, "\n",
              "fullScreenable: ", clients[i].fullScreenable, "\n",
              "maximizable: ", clients[i].maximizable, "\n",
              "minimizable: ", clients[i].minimizable, "\n",
              "moveable: ", clients[i].moveable, "\n",
              "moveableAcrossScreens: ", clients[i].moveableAcrossScreens, "\n",
              "providesContextHelp: ", clients[i].providesContextHelp, "\n",
              "resizeable: ", clients[i].resizeable, "\n",
              "shadeable: ", clients[i].shadeable, "\n",
              "minimizable: ", clients[i].minimizable, "\n",
              "wantsInput: ", clients[i].wantsInput, "\n",

              "\n------ Limitations -------------------\n",
//               "basicUnit: ", clients[i].basicUnit.x,"x",clients[i].basicUnit.y, "\n",
//               "minSize: ", clients[i].minSize, "\n", // QSize doesn print and x,y,width,height are undefined :-(
//               "maxSize: ", clients[i].maxSize, "\n",
              "skipSwitcher: ", clients[i].skipSwitcher, "\n",
              "skipTaskbar: ", clients[i].skipTaskbar, "\n",
              "skipPager: ", clients[i].skipPager, "\n",
              "noBorder: ", clients[i].noBorder, "\n",

              "\n------ Other -------------------\n",
              "iconGeometry: ", clients[i].iconGeometry.width,"x",clients[i].iconGeometry.height,"+",clients[i].iconGeometry.x,"+",clients[i].iconGeometry.y, "\n",
              "tabGroup: ", clients[i].tabGroup, "\n",
              "isCurrentTab: ", clients[i].isCurrentTab, "\n",
              "decorationHasAlpha: ", clients[i].decorationHasAlpha, "\n",
              "ARGB: ", clients[i].alpha, "\n",
              "shaped: ", clients[i].shaped, "\n",
              "opacity: ", clients[i].opacity, "\n" );
    }
}

registerShortcut("Debug Clients", "Debug Clients", "Meta+Ctrl+Alt+d", debugClients);


