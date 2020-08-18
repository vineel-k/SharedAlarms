# SharedAlarms DataModel Schema
Schema below

## Example
```
"users"
{
    "TrainerUID": {
        "name": "Cruncher Rohan",
        "phoneNumber": "+1 (527)-898-1414",
        "tsJoined": 1597613566702,
        ...
    }
    // only admin can write to users
}

"roles"
{
    "TrainerUID": {
        "appuser": true 
        // add `"admin": true` to give extended privileges
    }
    // only admin can write to, user can read their own permissions
}

"userAlarmMap"
{
    "TrainerUID": {
        "RhinoUID": true,
        ...
    }
}

"userGroupMap"
{
    "TrainerUID": {
        "GroupId": true,
        ...
    }
}

"alarms"
{
   "$RhinoID": {
       "alarmInfo": {
           "name": "Rhino Time",
               "owner": "TrainerUID",
               "displayOptions": "display format options serialized",
               "photoURL": "photoURL",
               "timeMetadata": "time format string",
               "location": "LocationString",
               "active": true,
               // owner can modify all properties and edit/delete event
               // admin users can edit time and active
               // invited members can read all properties
               // members can read all properties
       }

       "alarmInvitedMembers": {
           "invitedUser1": true,
           ...
           // invited members can remove themselves
           // owner/admins can add users
       }

       "alarmMembers": {
           "invitedUser1": true, // true means admin, false means regular user, null/deleted means not member
           ...
           // user can add themself as false or delete
           // owner can toggle false/true and delete but not add
       }

        "alarmUpcomingInstance": "upcomingInstanceID",
        "alarmInstanceHistory": [...instanceID history]
    }
}

"alarmInstances"
{
    "RhinoInstanceID": {
        "instanceInfo": {
            "time": timestamp,
            "alarm": "RhinoID",
            "globalStatus": "active",
            "blame": "",
        },
        "userStatuses": {
            "TrainerUID": {
                "offset": timeInterval,
                "status": ("going" | "snoozed" | "woke" | "cancelled")
            }
        }
    }
}
```
