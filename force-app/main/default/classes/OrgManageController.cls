global without sharing class OrgManageController {
    @AuraEnabled(cacheable=true)
    public static List<Org__c> getOrgList() {
      return [
        SELECT
          Id,
          Name,
          Domain__c,
          (
            SELECT
              Name,
              Password__c,
              Persona__c,
              Security_Token__c,
              Salesforce_User__c,
              Confirm_Password__c
            FROM Org_User__r
          )
        FROM Org__c
        LIMIT 10
      ];
    }
  }
  