public class CaseHandler {
    public static void CaseProductRequire(List<Case> listCase){
        for (Case c : listCase){
            //Record type is Supply Chain Support
            if(c.RecordTypeId == '0128b000001B3F5AAK'){
                c.Priority = 'High';
                if (c.Subject == null){
                    c.Subject = 'Supply Chain related problem. Must be solved ASAP!';
                }
                if(c.Product__c == null){
                    c.AddError('Please fill the Product field to speed up your request.');
                }
            }
            else {
                c.Priority = 'Low';
                if (c.Subject == null){
                    c.Subject = 'Product related problem.';
                }
                if (c.Product__c == null){
                    c.AddError('Please fill the Product field to speed up your request. <br/> C-01 : Leather Office Chair \n C-02 : Mesh Office Chair\n D-01 : 5 Foot Mahogany Desk\n D-02 : L-shaped Office Desk\n E-01 : 3 Pack Pink Erasers\n F-01 : 100 Pack File Folders\n F-02 : 3 Inch Binder', true);
                }
            }   
        }
    }
    
    public static void CaseTaskCreation(List<Case> listCase){
        List<Task> taskList = new List<Task>();
        for (Case c : listCase){
            Task t = new Task(Subject=c.Subject, WhatId=c.Id);
            taskList.add(t);
        }
        insert taskList;
    }
    
    public static void CaseDelete(List<Case> listCase){
        list<Task> taskList = [SELECT Id, WhatId FROM Task WHERE WhatId IN (SELECT Id FROM Case WHERE Id IN :listCase)];
    	delete taskList;
    }
}