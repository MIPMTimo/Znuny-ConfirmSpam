# ConfirmSpam

**ConfirmSpam** is a Znuny add-on that adds an additional confirmation step before marking a ticket as spam and moving it to the junk folder.

## Installation
1. Run the script bin/otrs.Console.pl Maint::Package::Install /path/to/ConfirmSpam.opm to install the add-on.
2. Go to your Znuny Page and go to Admin
3. Scroll down and click on Package management
4. On the left choose the new .opm file you created and click on install package

## Usage
After installation, a new “Spam” button will appear in the ticket menu. When you click this button, a confirmation dialog will appear, asking if you really want to mark the ticket as spam and move it to the junk folder.

## License
This project is licensed under the GPL 3.0 License. For more details, see the LICENSE file.

