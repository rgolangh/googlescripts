function findFilesSharedByLink() {
    var filesToReport = []
    var files = DriveApp.getFiles();
    while (files.hasNext()) {
        var file = files.next();
        var access = file.getSharingAccess();
        if (access == DriveApp.Access.ANYONE_WITH_LINK) {
            filesToReport.push(file.getName());
      }
    }
    return filesToReport;
}


function mailToSelf(text) {
    MailApp.sendEmail({
        to: Session.getActiveUser().getEmail(),
        subject: 'Report to Self',
        htmlBody: text,
    });
}

function main() {
    mailToSelf(findFilesSharedByLink());
}
