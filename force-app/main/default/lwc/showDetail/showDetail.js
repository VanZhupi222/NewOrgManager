import { LightningElement } from "lwc";

import getOrgList from "@salesforce/apex/OrgManageController.getOrgList";

export default class showDetail extends LightningElement {

  orgs = [];

  connectedCallback() {
    console.log("testTestTestTest");
    getOrgList()
      .then((res) => {
        console.log(res);
        let res1 = JSON.parse(JSON.stringify(res));
        res1.forEach((element) => {
          if (element.Org_User__r) {
            element.hasUser = true;
            element.firstUserName = element.Org_User__r[0].Name;
          } else {
            element.hasUser = false;
          }
          // if(element.Org_User__r == null){
          //     element.hasUser = false
          // }else{
          //     element.hasUser = true
          //     element.firstUserName = element.Org_User__r[0].Name;
          // }
        });
        this.orgs = res1;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
