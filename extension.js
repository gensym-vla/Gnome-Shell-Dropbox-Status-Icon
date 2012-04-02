// Creates a system status notification icon for skype
const StatusIconDispatcher = imports.ui.statusIconDispatcher;

function enable() {
    StatusIconDispatcher.STANDARD_TRAY_ICON_IMPLEMENTATIONS['dropbox'] = 'dropbox';
}

function disable() {
    StatusIconDispatcher.STANDARD_TRAY_ICON_IMPLEMENTATIONS['dropbox'] = '';
}

// gnome-shell extension entry point
function init() {
}
