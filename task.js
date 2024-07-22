
1. Find all the topics and tasks which are thought in the month of October

db.topics.find({month:"october"})

2. Find all the company drives which appeared between 15-oct-2020 and 31-oct-2020

db.company_drives.find({date:{$gt:new Date("2020-10-15"),$lt:new Date("2020-10-31")}})

3. Find all the company drives and students who are appeared for the placement

db.company_drives.find().forEach(function(value){
    print("Company Name : "+value.company_name);
    print("Students Appeared : "+value.students_appeared);
})

4. Find the number of problems solved by the user in codekata

db.codekata.find().forEach(function(value){
    print("Name : "+value.user_name);
    print("Problems Solved : "+value.problems_solved)
})

5. Find all the mentors with who has the mentee's count more than 15

db.mentors.find({mentees_count:{$gt:15}})

6. Find the number of users who are absent and task is not submitted between 15-oct-2020 and 31-oct-2020

db.usertask.find({date:{$gt:new Date("2020-10-15"),$lt:new Date("2020-10-31")}}).forEach(function(value){
    print("Name : "+value.user_name);
    print("Attendance :"+value.attendance);
    print("Task : "+value.task_submission)
})
