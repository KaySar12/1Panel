#!/bin/bash

# Update database
update_database() {
  if [[ -f /opt/nextweb/db/NextWeb.db ]]; then
    # Backup database file
    cp /opt/nextweb/db/NextWeb.db /opt/nextweb/db/NextWeb.db.bak

    #Use sqlite3 to execute the update operation
    sqlite3 /opt/nextweb/db/NextWeb.db <<EOF
UPDATE settings
SET value = '$PANELVER'
WHERE key = 'SystemVersion';
.exit
EOF

    echo "The database version has been updated as $PANELVER"
  else
    echo "Warning: /opt/nextweb/db/NextWeb.db file does not exist" >&2
    exit 0
  fi
}

# Main function
main() {
    update_database
}

# Call the main function
main