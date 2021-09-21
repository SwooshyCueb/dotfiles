/********************************************************************
 KWin - the KDE window manager
 This file is semi part of the KDE project.

Copyright (C) 2014 Thomas Lübking <thomas.luebking@gmail.com>

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

var CLASSES = Array("libreoffice");

function handleClass(client) {
    return true;
    return CLASSES.indexOf(client.resourceClass.toString()) > -1;
}

var clientAdded = function(client) {
    if (client.transient && handleClass(client)) {
        if (client.transientFor)
            client.transientFor.minimized = false;
        client.minimized = false;
    }
};

workspace.clientAdded.connect(clientAdded);
