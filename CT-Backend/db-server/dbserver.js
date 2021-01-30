const db = require('./dbconn');

class DBServer{
    constructor(){

    }
    async performQuery(query, params = []){
        let result = new Promise((resolve,reject) => {
            db.query(query, params, function(err, rows){                                                
                if(rows === undefined) reject(new Error("No results found"));
                else resolve(rows);
            })
        }).catch(err => {

        });
        return result;
    }
    async getReference(){
        let query = "SELECT `Ref_Code`, `Ref_Name` FROM `person_reference_table`";
        return this.performQuery(query);
    }
    async getStaffInfo(id){
        let query = "SELECT `Prefix_Ref`, `First_Name`, `Last_Name`, `Primary_MailID`, `Primary_ContactNumber`, `Designation`, `Photo` FROM `person` WHERE `Person_ID`= ?";
        return this.performQuery(query, [id]);
    }
    getStaffSpecialization(id){
        let query = "SELECT `AOS1`,`AOS2`,`AOS3`,`AOS4`,`AOS5` FROM `person_specialization` WHERE `Person_ID`= ?";
        return this.performQuery(query, [id]);
    }
    async getStaffEducation(id){
        let query = "SELECT `Qualification_Level_Ref`, `Degree_Ref`, `Branch_Ref`, `Institution`, `University` FROM `person_qualification` WHERE `Person_ID`= ? ORDER BY `Start_Date` DESC";
        return this.performQuery(query,[id]);
    }
    async getStaffExperience(id){
        let query = "SELECT `Designation_Ref`, `Organization`, `Department`, `Start_Date`, `End_Date` FROM `person_experience` WHERE `Person_ID`= ?";
        return this.performQuery(query, [id]);
    }
    async getStaffPublications(id){
        let query = "SELECT * FROM `person_publication` WHERE `Person_ID`= ?";
        return this.performQuery(query, [id]);
    }
    async getProjects(id){
        let query = "SELECT `Title`, `Project_Type_Ref`, `PI_Name`, `COI1_Name`, `COI2_Name`, `Fund_Agency`, `TotalSanctionedAmount` FROM `person_project_proposal` WHERE `Person_ID`= ?";
        return this.performQuery(query, [id]);
    }
    async getStaffAwards(id){
        let query = "SELECT `Title`, `Organization`, `Place`, `Start_Year` FROM `person_awards` WHERE `Person_ID`= ?";
        return this.performQuery(query, [id]);
    }
    async getActivities(id){
        let query = "SELECT `Event_Title`,`Hosting_Organization`, `Participation_Status_Ref`, `Event_Type_Ref`, `Place`, `End_Date` FROM `person_events_attended` WHERE `Person_ID`= ?";
        return this.performQuery(query, [id]);
    }
    async getStaffDetails(id){
        let personal = await this.getStaffInfo(id);
        let interest = await this.getStaffSpecialization(id);
        let education = await this.getStaffEducation(id);
        let experience = await this.getStaffExperience(id);
        let publications = await this.getStaffPublications(id);
        let projects = await this.getProjects(id);
        let awards = await this.getStaffAwards(id);
        let activity = await this.getActivities(id);

        let staff_json = {
            "personal":personal[0],
            "interest":interest[0],
            "education":education,
            "experience":experience,
            "publication":publications,
            "projects":projects,
            "awards":awards,
            "activity":activity
        }
        return staff_json;
    }
    async getStaffList(){
        let query = "SELECT `Prefix_Ref`, `person`.`Person_ID`, `Photo`, `Designation`,`First_Name`, `Last_Name`, `Primary_MailID`, `Primary_ContactNumber`, `AOS1`, `AOS2`, `AOS3`, `AOS4`, `AOS5` FROM `person` LEFT OUTER JOIN `person_specialization` ON `person`.`Person_ID` = `person_specialization`.`Person_ID`";
        return this.performQuery(query, []);
    }
    async getAlumniYear(){
        let query = "SELECT DISTINCT LEFT(`Register_No`, 4) as year FROM `student` ORDER BY year LIMIT 1";
        return this.performQuery(query, []);
    }
    async getAlumniList(data = null){
        let year;

        if(data) year = data;
        else{
            year = await this.getAlumniYear();
            year = (year && year[0]) ? year[0].year : "%";
        }

        let query = "SELECT `Register_No`, `First_Name`, `Last_Name`, `MailID`, `Working_Org`, `Designation` FROM `student` NATURAL JOIN `alumni` WHERE `Register_No` LIKE '" + year +"%'";
        let result = await this.performQuery(query, []);

        return {"result": result, "year":year};
    }
    async checkAlumni(data){
        let query = "SELECT `status` FROM `user_info` INNER JOIN `student` ON `username` = `Register_No` WHERE `username`= ? AND `DOB` = ?";
        let result = await this.performQuery(query, [data.reg_no, data.dob]);
        return result;
    }
    async checkRegistration(data){
        let query = "SELECT `Register_No` FROM `alumni` WHERE `Register_No` = ? AND `Alumni_Status` = 1";
        return this.performQuery(query, [data]);
    }
    async registerAlumni(data){
        let check = await this.checkRegistration(data.reg_no);
        if(check && check.length){
            return {"status":"Already registered"};
        }
        else{
            let query = "INSERT INTO `alumni`(`Register_No`,`Working_Org`,`Designation`,`Alumni_Status`) VALUES(?, ?, ?, ?)";
            let result = await this.performQuery(query, [data.reg_no, data.work, data.role, 1]);
            return result;
        }
    }
    async getPubYear(){
        let query = "SELECT `Year_Of_Publish`, COUNT(`Year_Of_Publish`) as number FROM `person_publication` GROUP BY `Year_Of_Publish` ORDER BY number DESC LIMIT 1";
        return this.performQuery(query, []);
    }
    async getPubList(data = null){
        let year;

        if(data) year = data;
        else {
            year = await this.getPubYear();
            year = year[0]["Year_Of_Publish"];
        }
    
        let query = "SELECT * from `person_publication` WHERE `Year_Of_Publish` = ?"
        let result = await this.performQuery(query, [year]);

        return { "result":result, "year":year };
    }
    async getProjectsList(){
        let query = "SELECT `Title`, `Project_Type_Ref`, `PI_Name`, `COI1_Name`, `COI2_Name`, `Fund_Agency`, `TotalSanctionedAmount`,YEAR(`End_Date`) as `Year` FROM `person_project_proposal` ORDER BY `Year` DESC";
        return this.performQuery(query, []);
    }
    async getRecentYear(type){
        let query = "SELECT DISTINCT LEFT(`Register_No`, 4) as year FROM `student` WHERE `Programme_Ref` = ? ORDER BY year DESC LIMIT 1";
        return this.performQuery(query, [type]);
    }
    async getStudentList(type, data){
        let type_num = { be:102, me:103, mept:103 }
        let year;
        
        if(data == null) {
            year = await this.getRecentYear(type_num[type]);
            year = year[0].year;
        }
        else year = data;

        let query = "SELECT `Register_No`, `First_Name`, `Last_Name` FROM `student` WHERE `Programme_Ref` = ? AND `Register_No` LIKE '"+ year +"%'";

        let result = await this.performQuery(query, [type_num[type]]);
        return {"result":result, "year":year};
    }
}

module.exports = new DBServer();