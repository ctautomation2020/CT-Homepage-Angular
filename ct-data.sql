-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 19, 2021 at 08:27 AM
-- Server version: 8.0.22
-- PHP Version: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ct-data`
--

-- --------------------------------------------------------

--
-- Table structure for table `alumni`
--

CREATE TABLE `alumni` (
  `Register_No` int NOT NULL,
  `Working_Org` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Designation` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Alumni_Status` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `alumni`
--

INSERT INTO `alumni` (`Register_No`, `Working_Org`, `Designation`, `Alumni_Status`) VALUES
(2015506789, 'RBS', 'System Designer', 1),
(2017503048, 'Vivriti Captial', 'Software Engineer', 1),
(2017503056, 'Barclays Pvt Ltd', 'Software Engineer', 1),
(2017503525, 'Siemens Pvt Limited', 'Software Analyst', 1),
(2017503537, 'Accolite', 'Software Engineer', 1);

-- --------------------------------------------------------

--
-- Table structure for table `course_artimat`
--

CREATE TABLE `course_artimat` (
  `cartimat_id` int NOT NULL,
  `course_code` varchar(15) NOT NULL,
  `conum` int NOT NULL,
  `costmt` varchar(255) NOT NULL,
  `po1` int NOT NULL,
  `po2` int NOT NULL,
  `po3` int NOT NULL,
  `po4` int NOT NULL,
  `po5` int NOT NULL,
  `po6` int NOT NULL,
  `po7` int NOT NULL,
  `po8` int NOT NULL,
  `po9` int NOT NULL,
  `po10` int NOT NULL,
  `po11` int NOT NULL,
  `po12` int NOT NULL,
  `ps1` int NOT NULL,
  `ps2` int NOT NULL,
  `ps3` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `course_assesseval`
--

CREATE TABLE `course_assesseval` (
  `cassesseval_id` int NOT NULL,
  `course_code` varchar(15) NOT NULL,
  `group_ref` int NOT NULL,
  `session_ref` int NOT NULL,
  `assess_num` int NOT NULL,
  `question_num` varchar(10) NOT NULL,
  `reg_no` int NOT NULL,
  `mark` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `course_assessment`
--

CREATE TABLE `course_assessment` (
  `cassess_id` int NOT NULL,
  `course_code` varchar(15) NOT NULL,
  `group_ref` int NOT NULL,
  `session_ref` int NOT NULL,
  `assess_num` int NOT NULL,
  `question_num` varchar(10) NOT NULL,
  `question_stmt` longtext,
  `question_img` varchar(100) DEFAULT NULL,
  `blooms_level` int NOT NULL,
  `co_num` int NOT NULL,
  `marks` int NOT NULL,
  `entry_date` datetime NOT NULL,
  `section` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `course_assessment`
--

INSERT INTO `course_assessment` (`cassess_id`, `course_code`, `group_ref`, `session_ref`, `assess_num`, `question_num`, `question_stmt`, `question_img`, `blooms_level`, `co_num`, `marks`, `entry_date`, `section`) VALUES
(4, 'sergh', 1, 2, 1, '1', 'explain oops', NULL, 3, 1, 2, '2019-01-28 17:14:30', 'part A'),
(5, 'sergh', 1, 2, 1, '2', 'explain oops2', NULL, 3, 1, 2, '2019-01-28 17:14:30', 'part A'),
(6, 'sergh', 1, 2, 1, '2', 'explain oops2', NULL, 3, 1, 2, '2019-01-28 17:14:30', 'part A'),
(7, 'sergh', 1, 2, 1, '1', 'explain oops', NULL, 3, 1, 2, '2019-01-28 17:14:30', 'part A');

-- --------------------------------------------------------

--
-- Table structure for table `course_assigneval`
--

CREATE TABLE `course_assigneval` (
  `cassigneval_id` int NOT NULL,
  `course_code` varchar(15) NOT NULL,
  `group_ref` int NOT NULL,
  `session_ref` int NOT NULL,
  `assign_num` int NOT NULL,
  `question_num` int NOT NULL,
  `reg_no` int NOT NULL,
  `mark` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `course_assignment`
--

CREATE TABLE `course_assignment` (
  `cassign_id` int NOT NULL,
  `course_code` varchar(15) NOT NULL,
  `group_ref` int NOT NULL,
  `session_ref` int NOT NULL,
  `entry_date` date NOT NULL,
  `assign_num` int NOT NULL,
  `question_num` varchar(10) NOT NULL,
  `question_stmt` blob,
  `question_img` varchar(100) DEFAULT NULL,
  `co_num` int NOT NULL,
  `marks` int NOT NULL,
  `deadline` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `course_attendance`
--

CREATE TABLE `course_attendance` (
  `cattend_id` int NOT NULL,
  `course_code` varchar(15) NOT NULL,
  `group_ref` int NOT NULL,
  `session_ref` int NOT NULL,
  `reg_no` int NOT NULL,
  `date` date NOT NULL,
  `period` int NOT NULL,
  `presence` char(1) NOT NULL DEFAULT 'P'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `course_cacomp`
--

CREATE TABLE `course_cacomp` (
  `ccacomp_id` int NOT NULL,
  `course_code` varchar(15) NOT NULL,
  `group_ref` int NOT NULL,
  `session_ref` int NOT NULL,
  `component` varchar(15) NOT NULL,
  `total_marks` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `course_extcalc`
--

CREATE TABLE `course_extcalc` (
  `cextcalc_id` int NOT NULL,
  `course_code` varchar(15) NOT NULL,
  `group_ref` int NOT NULL,
  `session_ref` int NOT NULL,
  `reg_num` int NOT NULL,
  `question_num` varchar(10) NOT NULL,
  `marks` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `course_extcomp`
--

CREATE TABLE `course_extcomp` (
  `cextcomp_id` int NOT NULL,
  `course_code` varchar(15) NOT NULL,
  `group_ref` int NOT NULL,
  `session_ref` int NOT NULL,
  `question_num` varchar(10) NOT NULL,
  `question_co` int NOT NULL,
  `question_mark` int NOT NULL,
  `question_section` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `course_internalcalc`
--

CREATE TABLE `course_internalcalc` (
  `cintcalc_id` int NOT NULL,
  `course_code` varchar(15) NOT NULL,
  `group_ref` int NOT NULL,
  `session_ref` int NOT NULL,
  `reg_no` int NOT NULL,
  `ca` float NOT NULL,
  `midterm` float NOT NULL,
  `total_marks` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `course_lessonplan`
--

CREATE TABLE `course_lessonplan` (
  `clp_id` int NOT NULL,
  `course_code` varchar(15) NOT NULL,
  `group_ref` int NOT NULL,
  `session_ref` int NOT NULL,
  `actual_date` date NOT NULL,
  `period` int NOT NULL,
  `course_ctopic_id` int NOT NULL,
  `references` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `course_list`
--

CREATE TABLE `course_list` (
  `course_code` varchar(15) NOT NULL,
  `stream` int NOT NULL,
  `regulation` int NOT NULL,
  `semester` int NOT NULL,
  `title` varchar(55) NOT NULL,
  `credit` int NOT NULL,
  `objectives` mediumtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `course_list`
--

INSERT INTO `course_list` (`course_code`, `stream`, `regulation`, `semester`, `title`, `credit`, `objectives`) VALUES
('sergh', 245, 5742, 78, 'uiog9', 3, 'e56u567rhu');

-- --------------------------------------------------------

--
-- Table structure for table `course_reference_table`
--

CREATE TABLE `course_reference_table` (
  `reference_id` int NOT NULL,
  `ref_code` int NOT NULL,
  `category` varchar(30) DEFAULT NULL,
  `ref_name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `course_reference_table`
--

INSERT INTO `course_reference_table` (`reference_id`, `ref_code`, `category`, `ref_name`, `description`) VALUES
(1, 1, 'Group', 'MM', 'null'),
(2, 2, 'Group', 'MN', 'null'),
(3, 3, 'Group', 'G1', 'null'),
(4, 4, 'Group', 'G2', 'null'),
(5, 5, 'Group', 'Common', 'null'),
(6, 6, 'Session', 'N20', 'August 2020-November 2020'),
(7, 7, 'Session', 'A20', 'December 2020 - April 2021'),
(8, 8, 'Session', 'N21', 'July 2021-November 2021'),
(9, 9, 'Session', 'A21', 'December 2021 - April 2022'),
(10, 10, 'Group', 'MO', 'null');

-- --------------------------------------------------------

--
-- Table structure for table `course_registered_students`
--

CREATE TABLE `course_registered_students` (
  `cregst_id` int NOT NULL,
  `course_code` varchar(15) NOT NULL,
  `reg_no` int NOT NULL,
  `group_ref` int NOT NULL,
  `session_ref` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `course_topic`
--

CREATE TABLE `course_topic` (
  `ctopic_id` int NOT NULL,
  `course_code` varchar(15) NOT NULL,
  `module_num` int NOT NULL,
  `topic_num` varchar(10) NOT NULL,
  `topic` varchar(100) NOT NULL,
  `conum` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `credentials`
--

CREATE TABLE `credentials` (
  `Credentials_ID` int NOT NULL,
  `Person_ID` int NOT NULL,
  `Username` text NOT NULL,
  `Password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `credentials`
--

INSERT INTO `credentials` (`Credentials_ID`, `Person_ID`, `Username`, `Password`) VALUES
(1, 1, 'not admin123', '$2b$08$U0VES/hQqaNBzeM90mijUuzEEd.8alRIq9nRZJbF54KCLL4ljSxG.');

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

CREATE TABLE `person` (
  `Person_ID` int NOT NULL,
  `Prefix_Ref` int DEFAULT NULL,
  `First_Name` varchar(50) DEFAULT NULL,
  `Last_Name` varchar(50) DEFAULT NULL,
  `Gender_Ref` int DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `Designation` int DEFAULT NULL,
  `Community_Ref` int DEFAULT NULL,
  `Caste` varchar(50) DEFAULT NULL,
  `Primary_MailID` varchar(50) DEFAULT NULL,
  `Secondary_MailID` varchar(50) DEFAULT NULL,
  `Aadhar_Card` bigint DEFAULT NULL,
  `PAN_Card` varchar(10) DEFAULT NULL,
  `Passport_Number` varchar(10) DEFAULT NULL,
  `Primary_ContactNumber` varchar(15) DEFAULT NULL,
  `Secondary_ContactNumber` varchar(15) DEFAULT NULL,
  `Intercom_Number` varchar(5) DEFAULT NULL,
  `Alias_Name` varchar(5) DEFAULT NULL,
  `Address_Line1` varchar(250) DEFAULT NULL,
  `Address_Line2` varchar(250) DEFAULT NULL,
  `Address_Line3` varchar(45) DEFAULT NULL,
  `Address_Line4` varchar(45) DEFAULT NULL,
  `Photo` varchar(255) DEFAULT NULL,
  `Marital_Status_Ref` int DEFAULT NULL,
  `Room_Num` varchar(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `person`
--

INSERT INTO `person` (`Person_ID`, `Prefix_Ref`, `First_Name`, `Last_Name`, `Gender_Ref`, `DOB`, `Designation`, `Community_Ref`, `Caste`, `Primary_MailID`, `Secondary_MailID`, `Aadhar_Card`, `PAN_Card`, `Passport_Number`, `Primary_ContactNumber`, `Secondary_ContactNumber`, `Intercom_Number`, `Alias_Name`, `Address_Line1`, `Address_Line2`, `Address_Line3`, `Address_Line4`, `Photo`, `Marital_Status_Ref`, `Room_Num`) VALUES
(60623, 3, 'Jayashree', 'P', NULL, NULL, 41, NULL, NULL, 'pjshree@annauniv.edu', NULL, NULL, NULL, NULL, '044-22516230', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'assets/img/staffs/Dr.P.Jayashree.jpg', NULL, NULL),
(60779, 3, 'Valliyammai', 'C', NULL, NULL, 41, NULL, NULL, 'cva@annauniv.edu', NULL, NULL, NULL, NULL, '044-22516230', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'assets/img/staffs/valliyammaiC.jpg', NULL, NULL),
(66269, 3, 'Thanasekhar', 'B', NULL, NULL, 43, NULL, NULL, 'thanasekhar@mitindia.edu', NULL, NULL, NULL, NULL, '044-22516230', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'assets/img/staffs/thanasekhar.jpg', NULL, NULL),
(66392, 3, 'Gunasekaran', 'R', NULL, NULL, 40, NULL, NULL, 'gunasekaran@mitindia.edu', NULL, NULL, NULL, NULL, '044-22516230', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'assets/img/staffs/hod.jpg', NULL, NULL),
(66449, 3, 'Ponsy R K Sathia Bhama', '', NULL, NULL, 41, NULL, NULL, 'ponsy@mitindia.edu', NULL, NULL, NULL, NULL, '044-22516230', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'assets/img/staffs/ponsy.jpg', NULL, NULL),
(66517, 3, 'Varalakshmi', 'P', NULL, NULL, 41, NULL, NULL, 'varanip@annauniv.edu', NULL, NULL, NULL, NULL, '044-22516230', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'assets/img/staffs/DrPVaralakshmi.jpg', NULL, NULL),
(67068, 3, 'Jayachitra', 'V.P', NULL, NULL, 44, NULL, NULL, 'jayachitravp@annauniv.edu', NULL, NULL, NULL, NULL, '044-22516230', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'assets/img/staffs/jayachitra.jpg', NULL, NULL),
(67079, 3, 'Nancy Jane', 'Y', NULL, NULL, 44, NULL, NULL, 'nancyjaney@mitindia.edu', NULL, NULL, NULL, NULL, '044-22516230', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'assets/img/staffs/MsNancyJane.jpg', NULL, NULL),
(67393, 3, 'Neelavathy Pari', 'S', NULL, NULL, 42, NULL, NULL, 'neela@annauniv.edu', NULL, NULL, NULL, NULL, '044-22516230', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'assets/img/staffs/neela.jpg', NULL, NULL),
(67406, 3, 'Kathiroli', 'R', NULL, NULL, 42, NULL, NULL, 'kathiroli@mitindia.edu', NULL, NULL, NULL, NULL, '044-22516230', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'assets/img/staffs/kathir1.jpg', NULL, NULL),
(67507, 3, 'Pabitha', 'B', NULL, NULL, 44, NULL, NULL, 'pabithap@gmail.com', NULL, NULL, NULL, NULL, '044-22516230', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'assets/img/staffs/pabitha.jpg', NULL, NULL),
(69520, 3, 'Muthurajkumar', 'S', NULL, NULL, 44, NULL, NULL, 'muthuraj@annauniv.edu', NULL, NULL, NULL, NULL, '044-22516230', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'assets/img/staffs/S.Muthurajkumar.jpg', NULL, NULL),
(701538, 4, 'Jenila Vincent', 'M', NULL, NULL, 45, NULL, NULL, 'jenilamit@gmail.com', NULL, NULL, NULL, NULL, '044-22516230', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'assets/img/staffs/jenila.jpg', NULL, NULL),
(702635, 4, 'Anitha', 'S', NULL, NULL, 45, NULL, NULL, 'anithacse@gmail.com', NULL, NULL, NULL, NULL, '044-22516230', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'assets/img/staffs/Anitha.jpg', NULL, NULL),
(702636, 4, 'Keerthana', 'R', NULL, NULL, 45, NULL, NULL, 'rskeerthana1293@gmail.com', NULL, NULL, NULL, NULL, '044-22516230', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'assets/img/staffs/Keerthana.jpg', NULL, NULL),
(702637, 4, 'Nagasudha', 'C.M', NULL, NULL, 45, NULL, NULL, 'cmsudha30@gmail.com', NULL, NULL, NULL, NULL, '044-22516230', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'assets/img/staffs/Nagasudha.jpg', NULL, NULL),
(702638, 4, 'Dhanalaxmi', 'S', NULL, NULL, 45, NULL, NULL, 'dhanalaxmibtech@gmail.com', NULL, NULL, NULL, NULL, '044-22516230', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'assets/img/staffs/Dhanalaxmi.jpg', NULL, NULL),
(702639, 4, 'Rampriya', 'R.S', NULL, NULL, 45, NULL, NULL, 'mail2rampriya@gmail.com', NULL, NULL, NULL, NULL, '044-22516230', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'assets/img/staffs/Rampriya.jpg', NULL, NULL),
(702735, 1, 'Arumuga Arun', 'R', NULL, NULL, 45, NULL, NULL, 'arun6f.rajesh@gmail.com', NULL, NULL, NULL, NULL, '044-22516230', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'assets/img/staffs/arumuga-arun.jpg', NULL, NULL),
(702750, 1, 'Yoganand', 'S', NULL, NULL, 45, NULL, NULL, 'yoganand.cse@gmail.com', NULL, NULL, NULL, NULL, '044-22516230', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'assets/img/staffs/yoganand.jpg', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `person_academic`
--

CREATE TABLE `person_academic` (
  `Academic_ID` int NOT NULL,
  `Person_ID` int NOT NULL,
  `Course_Code` varchar(7) DEFAULT NULL,
  `Session` varchar(20) DEFAULT NULL,
  `Semester` int DEFAULT NULL,
  `Group` varchar(2) DEFAULT NULL,
  `Degree_Ref` int DEFAULT NULL,
  `Branch_Ref` int DEFAULT NULL,
  `Class_Time` time DEFAULT NULL,
  `Class_Type_Ref` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `person_additional_duties`
--

CREATE TABLE `person_additional_duties` (
  `Duty_ID` int NOT NULL,
  `Person_ID` int NOT NULL,
  `Duty_Allotted` varchar(45) DEFAULT NULL,
  `Organization` varchar(100) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Start_Date` date DEFAULT NULL,
  `End_Date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `person_awards`
--

CREATE TABLE `person_awards` (
  `Award_ID` int NOT NULL,
  `Person_ID` int NOT NULL,
  `Title` varchar(100) DEFAULT NULL,
  `Organization` varchar(100) DEFAULT NULL,
  `Place` varchar(15) DEFAULT NULL,
  `Start_Year` year DEFAULT NULL,
  `Details` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `person_awards`
--

INSERT INTO `person_awards` (`Award_ID`, `Person_ID`, `Title`, `Organization`, `Place`, `Start_Year`, `Details`) VALUES
(3, 66392, 'Young Faculty Research Fellowship - under the Visvesvaraya PhD Scheme', 'Ministry of Electronics & Information Technology, Govt. of India', NULL, 2018, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `person_course_details`
--

CREATE TABLE `person_course_details` (
  `Course_ID` int NOT NULL,
  `Course_Code` varchar(7) NOT NULL,
  `Course_Name` varchar(50) DEFAULT NULL,
  `Regulation` year DEFAULT NULL,
  `Credit` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `person_events_attended`
--

CREATE TABLE `person_events_attended` (
  `Event_ID` int NOT NULL,
  `Person_ID` int NOT NULL,
  `Event_Type_Ref` int DEFAULT NULL,
  `Level_Ref` int DEFAULT NULL,
  `Event_Title` varchar(100) DEFAULT NULL,
  `Hosting_Organization` varchar(100) DEFAULT NULL,
  `Place` varchar(45) DEFAULT NULL,
  `Participation_Status_Ref` int DEFAULT NULL,
  `Role` varchar(45) DEFAULT NULL,
  `Start_Date` date DEFAULT NULL,
  `End_Date` date DEFAULT NULL,
  `Funding_Agency` varchar(255) DEFAULT NULL,
  `No_Of_Participants` int DEFAULT NULL,
  `Summary_File` blob,
  `Event_Schedule` blob,
  `Participants_Lists` blob,
  `Budget` blob
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `person_events_attended`
--

INSERT INTO `person_events_attended` (`Event_ID`, `Person_ID`, `Event_Type_Ref`, `Level_Ref`, `Event_Title`, `Hosting_Organization`, `Place`, `Participation_Status_Ref`, `Role`, `Start_Date`, `End_Date`, `Funding_Agency`, `No_Of_Participants`, `Summary_File`, `Event_Schedule`, `Participants_Lists`, `Budget`) VALUES
(1, 66392, 54, NULL, 'Faculty Development Programme on Mobile Communication', 'Department of Computer Technology', 'Chennai, India', 74, NULL, NULL, '2020-10-02', NULL, NULL, NULL, NULL, NULL, NULL),
(2, 66392, 55, NULL, 'Faculty Development Programme on Digital Image Processing', 'Anna University', 'Chennai, India', 75, NULL, NULL, '2019-08-08', NULL, NULL, NULL, NULL, NULL, NULL),
(3, 66392, 56, NULL, 'International Conference on Recent Treads in Information Technology', 'Anna University', 'Chennai, India', 74, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 66392, 55, NULL, 'International Conference on Recent Treads in Information Technology', 'Anna University', 'Chennai, India', 75, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `person_experience`
--

CREATE TABLE `person_experience` (
  `Experience_ID` int NOT NULL,
  `Person_ID` int NOT NULL,
  `Designation_Ref` int DEFAULT NULL,
  `Organization` varchar(100) DEFAULT NULL,
  `Department` varchar(50) DEFAULT NULL,
  `Start_Date` date DEFAULT NULL,
  `End_Date` date DEFAULT NULL,
  `Emp_Category_Ref` int DEFAULT NULL,
  `Work_Nature_Ref` int DEFAULT NULL,
  `Position_Held` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `person_experience`
--

INSERT INTO `person_experience` (`Experience_ID`, `Person_ID`, `Designation_Ref`, `Organization`, `Department`, `Start_Date`, `End_Date`, `Emp_Category_Ref`, `Work_Nature_Ref`, `Position_Held`) VALUES
(4, 66392, 40, 'Madras Institute of Technology', 'Department of Computer Technology', '2017-01-01', '0000-00-00', NULL, NULL, NULL),
(5, 66392, 41, 'Madras Institute of Technology', 'Department of Computer Technology', '2015-01-01', '2017-01-01', NULL, NULL, NULL),
(6, 66392, 43, 'Madras Institute of Technology', 'Department of Computer Technology', '2014-01-01', '2015-01-01', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `person_guestlecture`
--

CREATE TABLE `person_guestlecture` (
  `GuestLecture_ID` int NOT NULL,
  `Person_ID` int NOT NULL,
  `Level_Ref` int DEFAULT NULL,
  `Topic` varchar(100) DEFAULT NULL,
  `Programme` varchar(100) DEFAULT NULL,
  `Organization` varchar(100) DEFAULT NULL,
  `Place` varchar(20) DEFAULT NULL,
  `Start_Date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `person_membership`
--

CREATE TABLE `person_membership` (
  `Member_ID` int NOT NULL,
  `Person_ID` int NOT NULL,
  `Prof_Body` varchar(45) DEFAULT NULL,
  `Membership_NUM` varchar(15) DEFAULT NULL,
  `Member_Type` int DEFAULT NULL,
  `Sart_Date` date DEFAULT NULL,
  `End_Date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `person_patents`
--

CREATE TABLE `person_patents` (
  `Patent_ID` int NOT NULL,
  `Person_ID` int NOT NULL,
  `Title` varchar(100) DEFAULT NULL,
  `Patent_Number` varchar(15) DEFAULT NULL,
  `Start_Date` date DEFAULT NULL,
  `Place` varchar(15) DEFAULT NULL,
  `Patent_Status_Ref` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `person_project_allocation`
--

CREATE TABLE `person_project_allocation` (
  `Project_ID` int NOT NULL,
  `Person_ID` int NOT NULL,
  `Qualification_Level_Ref` int DEFAULT NULL,
  `Batch_ID` varchar(5) DEFAULT NULL,
  `Reg_Num` bigint DEFAULT NULL,
  `Title` varchar(100) DEFAULT NULL,
  `Project_Domain` varchar(45) DEFAULT NULL,
  `Start_Date` date DEFAULT NULL,
  `End_Date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `person_project_proposal`
--

CREATE TABLE `person_project_proposal` (
  `Proposal_ID` int NOT NULL,
  `Person_ID` int NOT NULL,
  `Title` varchar(100) DEFAULT NULL,
  `Project_Type_Ref` int DEFAULT NULL,
  `PI_Name` varchar(45) DEFAULT NULL,
  `COI1_Name` varchar(45) DEFAULT NULL,
  `COI2_Name` varchar(45) DEFAULT NULL,
  `Status_Ref` int DEFAULT NULL,
  `Fund_Agency` varchar(100) DEFAULT NULL,
  `TotalSanctionedAmount` double DEFAULT NULL,
  `Start_Date` date DEFAULT NULL,
  `End_Date` date DEFAULT NULL,
  `Dept` varchar(45) DEFAULT NULL,
  `Co_Dept` varchar(45) DEFAULT NULL,
  `Co_Institution` varchar(100) DEFAULT NULL,
  `Abstract` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `person_project_proposal`
--

INSERT INTO `person_project_proposal` (`Proposal_ID`, `Person_ID`, `Title`, `Project_Type_Ref`, `PI_Name`, `COI1_Name`, `COI2_Name`, `Status_Ref`, `Fund_Agency`, `TotalSanctionedAmount`, `Start_Date`, `End_Date`, `Dept`, `Co_Dept`, `Co_Institution`, `Abstract`) VALUES
(1, 66392, 'Development of Trust Component for Secured Commercial Grid Services', 59, 'Dr. B. Thanasekhar', 'Dr. R. Gunasekaran', NULL, NULL, 'DIT-MCIT, New Delhi', 46000000, '2020-11-10', '2021-01-21', NULL, NULL, NULL, NULL),
(2, 66392, 'Adhoc Smart Examination System for Class Rooms', 59, 'Dr. R. Gunasekaran', '', NULL, NULL, 'CTDT , Anna University', 20000, '2020-11-10', '2021-01-21', NULL, NULL, NULL, NULL),
(3, 69520, 'Automating payment of toll taxes and theft detection using ETC', 59, 'Dr.S.Muthurajkumar', '', NULL, NULL, 'CTDT , Anna University', 20000, '2016-11-10', '2017-01-21', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `person_publication`
--

CREATE TABLE `person_publication` (
  `Publication_ID` int NOT NULL,
  `Person_ID` int NOT NULL,
  `Publication_Type_Ref` int DEFAULT NULL,
  `Level_Ref` int DEFAULT NULL,
  `Paper_Title` varchar(255) DEFAULT NULL,
  `First_Author` varchar(50) DEFAULT NULL,
  `Second_Author` varchar(50) DEFAULT NULL,
  `Other_Authors` varchar(255) DEFAULT NULL,
  `Journal_Name` varchar(255) DEFAULT NULL,
  `Volume` int DEFAULT NULL,
  `Issue` int DEFAULT NULL,
  `DOI` varchar(50) DEFAULT NULL,
  `Year_Of_Publish` year DEFAULT NULL,
  `Start_Page_No` int DEFAULT NULL,
  `End_Page_No` int DEFAULT NULL,
  `Publisher` varchar(50) DEFAULT NULL,
  `Impact_Factor` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `person_publication`
--

INSERT INTO `person_publication` (`Publication_ID`, `Person_ID`, `Publication_Type_Ref`, `Level_Ref`, `Paper_Title`, `First_Author`, `Second_Author`, `Other_Authors`, `Journal_Name`, `Volume`, `Issue`, `DOI`, `Year_Of_Publish`, `Start_Page_No`, `End_Page_No`, `Publisher`, `Impact_Factor`) VALUES
(1, 66449, 77, 51, 'Fault Tolerance Clustering of Scientific Workflow with Resource Provisioning in Cloud', '', ' Dr.Ponsy R. K. Sathia Bhama', '', 'International Conference on Computer Networks, Big Data and IoT (ICCBI - 2018)', 31, 4, '10.1007/978-3-030-24643-3_88', 2018, 737, 1000, 'IEEE', 0),
(2, 66392, 77, 51, 'Energy-Efficient End-to-End Security for Software Defined Vehicular Networks', 'Gunasekaran Raja', 'Geetha Vijayaraghavan', 'Sudha Anbalagan, Priyanka Dhanasekaran', 'IEEE Transactions on Industrial Informatics', NULL, NULL, '10.1109/TITS.2020.3036071', 2020, NULL, NULL, 'IEEE', NULL),
(3, 60623, 77, 51, 'An improved database synchronization mechanism for mobile data using software-defined networking control', 'Jayashree Padmanabhan', 'Gunasekaran Raja', 'Vaishnavi Srinivasan', 'Computers & Electrical Engineering', NULL, NULL, NULL, 2017, NULL, NULL, 'Elseiver', NULL),
(4, 60779, 78, 51, 'An alternate approach to Resource Allocation Strategy using Network Metrics in Grid', 'Valliyammai. C', 'Thamarai Selvi. S', NULL, 'International Journal of Grid Computing and Applications', NULL, NULL, NULL, 2010, NULL, NULL, 'IEEE', NULL),
(5, 66449, 77, 51, 'Heuristics aware advance reservation and scheduling (HAARS) mechanism in hybrid (Grid/Cloud) environment', 'Ponsy R.K. Sathia Bama', ' Dr.Ponsy R. K. Sathia Bhama', 'Ponsy R.K. Sathia Bama ; Thamarai Selvi Somasundaram ; Kannan Govindarajan', 'National Conference on Parallel Computing Technologies (PARCOMPTECH)', 0, 4, '10.1109/ParCompTech.2013.6621404', 2013, 1, 1000, 'IEEE', 0),
(6, 66449, 77, 51, 'Tender Based Resource Scheduling in Grid with Ricardo', 'Ponsy R.K. Sathia Bama', ' Dr.Ponsy R. K. Sathia Bhama', 'Ponsy R. K. Sathiabhama, Ganeshram Mahalingam, Harish Kumar, Dipika Ramachandran', 'International Conference on Advances in Computing and Information Technology, ACITY 2011', 198, 4, 'https://doi.org/10.1007/978-3-642-22555-0_6', 2011, 49, 1000, 'IEEE', 0),
(7, 66449, 77, 51, 'Compaction of Schedules in a Force Based Clustering Method', 'Ponsy R.K. Sathia Bama', ' Dr.Ponsy R. K. Sathia Bhama', 'Ponsy R.K. Sathia Bhama,Thamarai Selvi S, G.Kannan', 'INTERNATIONAL CONFERENCE ON ADVANCED COMPUTING, ICoAC 2010', 0, 4, 'https://doi.org%2F10.1109%2FICOAC.2010.5725352', 2010, 88, 1000, 'IEEE', 0),
(8, 66449, 77, 51, 'Scheduling of Jobs in a Dynamic Heterogeneous Environment', 'Ponsy R.K. Sathia Bama', ' Dr.Ponsy R. K. Sathia Bhama', ' Ponsy R. K , Sathia Bhama , Thamarai Selvi Soma Sundaram , Supriya Vasudevan , P. Al Niyas , K. Swadha', 'International level conference on International Conference on Grid Computing & Applications, GCA 2006', 0, 4, '-', 2006, 0, 1000, 'IEEE', 0),
(9, 60779, 77, 51, 'Multivariate Regression Analysis of Climate Indices for Forecasting the Indian Rainfall', 'Manoj S', 'Dr. C. Valliyammai', 'Manoj S,Valliyammai C, Kalyani V,', 'International Conference on Innovations in Electronics & Communication Engineering', 107, 4, 'https://doi.org/10.1007/978-981-15-3172-9_67', 2020, 713, 1000, 'IEEE', 0),
(10, 60779, 77, 51, 'Automation of Traffic Violation Detection and Penalization', 'Valliyammai C', 'Dr. C. Valliyammai', 'Valliyammai C, Sridharan J, Ramanathan A', 'International Conference on Advanced Computing and Intelligent Engineering', 1089, 4, 'https://doi.org/10.1007/978-981-15-1483-8_21', 2020, 235, 1000, 'IEEE', 0),
(11, 60779, 77, 51, 'Multivariate Regression Analysis of Climate Variables for Weather Forecasting in Indian Subcontinent', 'Kalyani V', 'Dr. C. Valliyammai', 'Kalyani V, Valliyammai C, Manoj S.', '2nd International Conference on Soft Computing and Signal Processing,', 1118, 4, 'https://doi.org/10.1007/978-981-15-2475-2_57', 2019, 621, 1000, 'IEEE', 0),
(12, 60779, 77, 51, 'A Dynamic Resource Allocation Strategy to Minimize the Operational Cost in Cloud', 'Valliyammai C', 'Dr. C. Valliyammai', 'Valliyammai C,Mythreyi R.', 'International Conference on Emerging Technologies in Data Mining and Information Security.', 755, 4, 'https://doi.org/10.1007/978-981-13-1951-8_28', 2019, 309, 1000, 'IEEE', 0),
(13, 60779, 77, 51, 'Social Context based Naive - Bayes Filtering of Spam Messages from Online Social Networks', 'Valliyammai C', 'Dr. C. Valliyammai', 'Valliyammai C,Cinu C.Kiliroor', 'International Conference on Soft Computing in Data Analytics', 758, 4, 'https://doi.org/10.1007/978-981-13-0514-6_66', 2019, 699, 1000, 'IEEE', 0),
(14, 60779, 77, 51, 'An Enhanced Deep Learning Model for Duplicate Question Pairs Recognition', 'K. Abishek', 'Dr. C. Valliyammai', 'K. Abishek, Basuthkar Rajaram Hariharan,C Valliyammai', 'International Conference on Soft Computing in Data Analytics', 0, 4, 'http://doi.org%2F10.1007%2F978-981-13-0514-6_73', 2019, 769, 1000, 'IEEE', 0),
(15, 60779, 77, 51, 'Identifying Event Bursts Using Log-Normal Distribution of Tweet Arrival Rate in Twitter Stream', 'A. Bhuvaneswari,', 'Dr. C. Valliyammai', 'Bhuvaneswari A, Valliyammai C', '10th International Conference on Advanced Computing', 0, 4, 'https://doi.org/10.1109/ICoAC44903.2018.8939094', 2018, 339, 1000, 'IEEE', 0),
(16, 60779, 77, 51, 'Data De-duplication Using Cuckoo Hashing in Cloud Storage.', 'Sridharan J', 'Dr. C. Valliyammai', 'Sridharan J., Valliyamma C,Karthika R.N., Nihil Kulasekaran L', 'International Conference on Soft Computing in Data Analytics', 0, 4, '10.1007/978-981-13-0514-6_67', 2018, 707, 1000, 'IEEE', 0),
(17, 60779, 77, 51, 'Social IoT-Enabled Emergency Event Detection Framework Using Geo-Tagged Microblogs and Crowdsourced Photographs.', 'Bhuvaneswari A', 'Dr. C. Valliyammai', 'Bhuvaneswari A,Valliyammai C', 'International Conference on Emerging Technologies in Data Mining and Information Security.', 814, 4, 'https://doi.org/10.1007/978-981-13-1501-5_13', 2018, 151, 1000, 'IEEE', 0),
(18, 60779, 77, 51, 'Data Deduplication and Fine-Grained Auditing on Big Data in Cloud Storage', 'Karthika RN', 'Dr. C. Valliyammai', 'Karthika R N,Valliyammai C, Abisha D.', 'International Conference on Latest Advances in Machine Learning and Data Science', 705, 4, 'https://doi.org/10.1007/978-981-10-8569-7_38', 2018, 369, 1000, 'IEEE', 0),
(19, 60779, 77, 51, 'Privacy Preserving Schemes for Secure Interactions in Online Social Networks', 'Devakunchari R', 'Dr. C. Valliyammai', 'Devakunchari Ramalingam,Valliyammai Chinnaiah, Abirami Jeyagobi', 'Second International Conference on Soft Computing Systems', 0, 4, 'https://doi.org/10.1007/978-981-13-1936-5_57', 2018, 0, 1000, 'IEEE', 0),
(20, 60779, 77, 51, 'Epileptic Seizure Prediction Using WeightedVisibility Graph', 'T. Ebenezer Rajadurai', 'Dr. C. Valliyammai', 'T. Ebenezer Rajadurai,  Valliyammai C', 'Second International Conference on Soft Computing Systems', 837, 4, 'https://doi.org/10.1007/978-981-13-1936-5_48', 2018, 453, 1000, 'IEEE', 0),
(21, 60779, 77, 51, 'Switch Failure Detection inSoftware Defined Networks', 'Muthumanikandan V', 'Dr. C. Valliyammai', 'Muthumanikandan V, Valliyammai C,Swarna Deepa B', 'International Conference on Advances in Big Data and Cloud Computing.', 0, 4, 'https:doi.org%2F10.1007%2F978-981-13-1882-5_13', 2018, 0, 1000, 'IEEE', 0),
(22, 60779, 77, 51, 'Semantic-Based Sensitive Topic Dissemination Control Mechanism for Safe Social Networking', 'Bhuvaneswari A', 'Dr. C. Valliyammai', 'Bhuvaneswari Anbalagan, Valliyammai Chinnaiah', 'International Conference on Advances in Big Data and Cloud Computing.', 0, 4, 'https://doi.org%2F10.1007%2F978-981-10-7200-0_17', 2018, 197, 1000, 'IEEE', 0),
(23, 60779, 77, 51, 'Binary and Continuous Feature Engineering Analysis on Twitter Data Stream for Classification of Spam', 'Valliyammai C', 'Dr. C. Valliyammai', 'Valliyammai C ,Cinu C.Kiliroor', '2nd International Conference on Communication,Devices and Computing', 602, 4, 'https://doi.org/10.1007/978-981-15-0829-5_55', 2018, 581, 1000, 'IEEE', 0),
(24, 60779, 77, 51, 'Perlustration on Techno Level Classification in De-Duplication Techniques', 'Valliyammai C', 'Dr. C. Valliyammai', 'Karthika R N, Valliyammai C, Abisha D', 'IEEE Eighth International Conference on Advanced Computing', 0, 4, 'https://doi.org/10.1109/ICoAC.2017.7951771', 2017, 206, 1000, 'IEEE', 0),
(25, 60779, 77, 51, 'An Intelligent Personalized Recommendation for Travel Group Planning based on Reviews', 'Valliyammai C', 'Dr. C. Valliyammai', 'Valliyammai C, Prasanna Venkatesh R, Vennila C, Gopi Krishnan S', 'IEEE Eighth International Conference on Advanced Computing', 0, 4, 'https://doi.org/10.1109/ICoAC.2017.7951747', 2017, 67, 1000, 'IEEE', 0),
(26, 60779, 77, 51, 'Clustering Based Transfer Learning In Cross Domain Recommender System', 'Ephina Thendral', 'Dr. C. Valliyammai', 'Ephina Thendral, Valliyammai Chinnaiah', 'IEEE Eighth International Conference on Advanced Computing', 0, 4, 'https://doi.org/10.1109/ICoAC.2017.7951744', 2017, 51, 1000, 'IEEE', 0),
(27, 60779, 77, 51, 'Trust Analysis on Social Networks for Identifying Authenticated Users', 'Cinu C Kiliroor', 'Dr. C. Valliyammai', 'Cinu C Kiliroor, Valliyammai C', 'IEEE Eighth International Conference on Advanced Computing', 0, 4, 'https://doi.org/10.1109/ICoAC.2017.7951741', 2017, 37, 1000, 'IEEE', 0),
(28, 60779, 77, 51, 'Link Failure Detection and Alternate Path Tracing in OpenFlow Based Ethernet Networks', 'V. Muthumanikandan', 'Dr. C. Valliyammai', 'Muthumanikandan V,Valliyammai C, Harish Sekar', 'IEEE NINTH International Conference on Advanced Computing', 0, 4, 'https://doi.org/10.1109/ICoAC.2017.8441439', 2017, 352, 1000, 'IEEE', 0),
(29, 60779, 77, 51, 'Feature Constrained Parallel Data Processing Approach for Spatiotemporal Event Detection', 'A. Bhuvaneswari,', 'Dr. C. Valliyammai', 'Bhuvaneswari A, Valliyammai C,  R. Devakunchari', 'IEEE NINTH International Conference on Advanced Computing', 0, 4, '10.1109/ICoAC.2017.8441190', 2017, 345, 1000, 'IEEE', 0),
(30, 60779, 77, 51, 'A Survey on link failures in Software Defined Networks', 'V. Muthumanikandan', 'Dr. C. Valliyammai', 'Muthumanikandan V,Valliyammai C ', 'Seventh International Conference on Advanced Computing,', 0, 4, 'https://doi.org/10.1109/ICoAC.2015.7562808', 2016, 0, 1000, 'IEEE', 0),
(31, 60779, 77, 51, 'An Efficient Management of Resources in Cloud using Supervised Learning', 'Valliyammai C', 'Dr. C. Valliyammai', 'Valliyammai C, Bharthwajan K', 'ACM International Conference on Informatics and Analytics', 0, 4, 'https://doi.org/10.1145/2980258.2980396', 2016, 0, 1000, 'IEEE', 0),
(32, 60779, 77, 51, 'Grid Resource Selection based on network Performance Prediction', 'Valliyammai C', 'Dr. C. Valliyammai', ' Valliyammai C,Thamarai Selvi S', 'Seventh International Conference on Advanced Computing,', 62, 4, 'https://doi.org/10.1109/ICoAC.2015.7562800', 2015, 1, 1000, 'IEEE', 0),
(33, 60779, 77, 51, 'Hadoop Framework based Ubiquitous Learning', 'Valliyammai C', 'Dr. C. Valliyammai', 'Valliyammai C,Ephina Thendral, Muthuvalliammai V, Anandhavalli S, Madhumathi K M', 'Seventh International Conference on Advanced Computing,', 0, 4, 'https://doi.org/10.1109/ICoAC.2015.7562801', 2015, 0, 1000, 'IEEE', 0),
(34, 60779, 77, 51, 'A top web security vulnerability SQL Injection attack ', 'Abirami J', 'Dr. C. Valliyammai', 'Abirami J, Devakunchari R,Valliyammai C', 'Seventh International Conference on Advanced Computing,', 0, 4, 'https://doi.org/10.1109/ICoAC.2015.7562806', 2015, 1, 1000, 'IEEE', 0),
(35, 60779, 77, 51, 'Predicting the risk of readmission of diabetic patients using mapreduce', 'M Gowsalya', 'Dr. C. Valliyammai', 'M Gowsalya, K. Krushitha,  Valliyammai C', 'International level conference on Fifth International Conference on Advanced Computing', 0, 4, 'https://doi.org/10.1109/ICoAC.2014.7229729', 2014, 297, 1000, 'IEEE', 0),
(36, 60779, 77, 51, 'A Trust Enhanced Recommender System for Medicare Applications', 'S Krishna', 'Dr. C. Valliyammai', 'Krishna S, Prasanna Venkatesh R, S Swagath, Valliyammai C', 'International level conference on Fifth International Conference on Advanced Computing', 0, 4, 'https://doi.org/10.1109/ICoAC.2014.7229734', 2014, 324, 1000, 'IEEE', 0),
(37, 60779, 77, 51, 'Dynamic Auditing and Updating Services in Cloud Storage', 'C. Valliyammai', 'Dr. C. Valliyammai', 'Thendral G, Valliyammai C', 'IEEE International Conference on Recent Trends in Information Technology', 0, 4, 'https://doi.org/10.1109/ICRTIT.2014.6996181', 2014, 0, 1000, 'IEEE', 0),
(38, 60779, 77, 51, 'Resource allocation issues and challenges in Cloud Computing', 'S.Thamarai Selvi', 'Dr. C. Valliyammai', 'Thamarai Selvi S, Valliyammai C,Neelaya Dhatchayani V', 'IEEE International Conference on Recent Trends in Information Technology', 0, 4, 'https://doi.org/10.1109/ICRTIT.2014.6996213', 2014, 0, 1000, 'IEEE', 0),
(39, 60779, 77, 51, 'Efficient energy consumption in green cloud', 'Valliyammai C', 'Dr. C. Valliyammai', 'Valliyammai C, Uma S, Divya Bharathi, Surya P,', 'IEEE International Conference on Recent Trends in Information Technology', 0, 4, 'https://doi.org/10.1109/ICRTIT.2014.6996212', 2014, 0, 1000, 'IEEE', 0),
(40, 60779, 77, 51, 'Dynamic Resource Management in Cloud', 'S.Thamarai Selvi', 'Dr. C. Valliyammai', 'Thamarai selvi S, Valliyammai C,Gudipudi Sindhu, Sameer Basha S', 'Sixth International Conference on Advanced Computing', 0, 4, 'https://doi.org/10.1109/ICoAC.2014.7229727', 2014, 287, 1000, 'IEEE', 0),
(41, 60779, 77, 51, 'Dynamic Resource Allocation with Efficient Power Utilization in Cloud', 'S.Thamarai Selvi', 'Dr. C. Valliyammai', 'Thamarai Selvi S, Valliyammai C', 'Sixth International Conference on Advanced Computing', 0, 4, 'https://doi.org/10.1109/ICoAC.2014.7229730', 2014, 302, 1000, 'IEEE', 0),
(42, 60779, 77, 51, 'Providing Secure Storage services in Cloud', 'C. Valliyammai', 'Dr. C. Valliyammai', 'Vanathi K,Valliyammai C', 'International Conference on Recent Trends in Information Technology', 0, 4, 'https://doi.org/10.1109/ICRTIT.2013.6844190', 2013, 113, 1000, 'IEEE', 0),
(43, 60779, 77, 51, 'Security Issues and Challenges in Cloud', 'C. Valliyammai', 'Dr. C. Valliyammai', 'Valliyammai C,Surya K, Nivedithaa M, Uma S', 'International Conference on Green Computing, Communication and Conservation of Energy', 0, 4, '-', 2013, 889, 1000, 'IEEE', 0),
(44, 60779, 77, 51, 'Probabilistic Search Service Based on User History on Cloud', 'C. Valliyammai', 'Dr. C. Valliyammai', 'Valliyammai C, Karthikeyan M, Nandha Gopala Krishnan V, Vinoth Kumar P', 'International level conference on Fifth International Conference on Advanced Computing', 0, 4, 'https://doi.org%2F10.1109%2FICoAC.2013.6921969', 2013, 311, 1000, 'IEEE', 0),
(45, 60779, 77, 51, 'Applying Problem Based Learning Approach on E-Learning System in Cloud', 'Thamarai Selvi  S', 'Dr. C. Valliyammai', 'S. Thamarai Selvi, Dhilshath Kaleel,Valliyammai C', 'International Conference on Recent Trends in Information Technology', 0, 4, 'DOI: 10.1109/ICRTIT.2012.6206814', 2012, 244, 1000, 'IEEE', 0),
(46, 60779, 77, 51, 'CPU load prediction using ANFIS for Grid Computing', 'C. Valliyammai', 'Dr. C. Valliyammai', 'Chemuduri Viswanath, Valliyammai C', 'IEEE International Conference on Advances in Engineering, Science And Management', 0, 4, '-', 2012, 0, 1000, 'IEEE', 0),
(47, 60779, 77, 51, 'Counter measures to Threats from Agent Platform and Malicious Code Check Using Dynamic Policy File', 'Thamarai Selvi  S', 'Dr. C. Valliyammai', 'Valliyammai C,Thamarai Selvi S, Amarnath T K, Pradeep Kumar B,  Siva S', 'Third International Conference on Advanced Computing', 0, 4, 'https://doi.org%2F10.1109%2FICoAC.2011.6165206', 2011, 384, 1000, 'IEEE', 0),
(48, 60779, 77, 51, 'Network Fault Monitoring in Grid', 'Thamarai Selvi  S', 'Dr. C. Valliyammai', 'Valliyammai C,Thamarai Selvi S, Dinesh kumar M, Sakthivel C, Sunil M', 'Third International Conference on Advanced Computing', 0, 4, 'https://doi.org/10.1109/ICoAC.2011.6165208', 2011, 396, 1000, 'IEEE', 0),
(49, 66392, 77, 51, 'Human action analysis using K-NN classifier', 'G Akilandasowmya', 'Dr. P Anandhakumar', 'Akilandasowmya G, Sathiya P, AnandhaKumar P', '2015 Seventh International Conference on Advanced Computing (ICoAC)', 0, 4, 'https://doi.org/10.1109/ICoAC.2015.7562807', 2015, 1, 1000, 'IEEE', 0),
(50, 66392, 77, 51, 'A Hybrid Brain Tumor Classification and Detection Mechanism Using Knn and Hmm', 'R Meenakshi', 'Dr. P Anandhakumar', 'Meenakshi  R, P Anandhakumar', 'Current Medical Imaging Reviews', 11, 4, 'https://doi.org/10.2174/157340561102150624143233', 2015, 70, 1000, 'IEEE', 0),
(51, 66392, 77, 51, 'From P2P to cloud based P2P for live media streaming', 'D Preetha Evangeline', 'Dr. P Anandhakumar', 'Preetha Evangeline D, AnandhaKumar P', '2015 Seventh International Conference on Advanced Computing (ICoAC)', 0, 4, 'https://doi.org/10.1109/ICoAC.2015.7562809', 2015, 0, 1000, 'IEEE', 0),
(52, 66392, 77, 51, 'Improved identification of peers using enhanced gossip++ protocol in NAT', 'D Preetha Evangeline', 'Dr. P Anandhakumar', 'Preetha Evangeline D, AnandhaKumar P', '2015 Seventh International Conference on Advanced Computing (ICoAC)', 0, 4, 'https://doi.org%2F10.1109%2FICoAC.2015.7562803', 2015, 0, 1000, 'IEEE', 0),
(53, 66392, 77, 51, 'An efficient mechanism for storing photo albums on cloud storage', 'D Preetha Evangeline', 'Dr. P Anandhakumar', 'Preetha Evangeline D, Cephas Paul Edward V,  Anandhakumar P', '2015 Seventh International Conference on Advanced Computing (ICoAC)', 0, 4, 'https://doi.org/10.1109/ICoAC.2015.7562802', 2015, 0, 1000, 'IEEE', 0),
(54, 66392, 77, 51, 'Modified RPCA with Hessian matrix for object detection in video surveillance on highways', 'K Kiruba', 'Dr. P Anandhakumar', 'Kiruba K, Sathiya P ,AnandhaKumar P', '2014 Sixth International Conference on Advanced Computing (lCoAC)', 0, 4, 'https://doi.org/10.1109/ICoAC.2014.7229719', 2014, 0, 1000, 'IEEE', 0),
(55, 66392, 77, 51, 'Combined additive and multiplicative modulo encryption and transformation approach for finger print template security', 'C Balaji', 'Dr. P Anandhakumar', 'Balaji C, Ashoka Rajan R, Anandha Kumar P', '2014 Sixth International Conference on Advanced Computing (ICoAC)', 0, 4, 'https://doi.org/10.1109/ICoAC.2014.7229724', 2014, 0, 1000, 'IEEE', 0),
(56, 66392, 77, 51, 'Research challenges in multimedia & cloud computing', 'P Anandhakumar', 'Dr. P Anandhakumar', 'P Anandhakumar', '2014 Sixth International Conference on Advanced Computing (ICoAC)', 0, 4, 'https://doi.org/10.1109/ICoAC.2014.7229767', 2014, 0, 1000, 'IEEE', 0),
(57, 66392, 77, 51, 'Stabilizing the performance and fairness in dynamic p2p system using Do or Die incentive mechanism', 'D Preetha Evangeline', 'Dr. P Anandhakumar', 'Preetha Evangeline D, Asha R,  Anandhakumar P', '2014 Sixth International Conference on Advanced Computing (ICoAC)', 0, 4, 'https://doi.org/10.1109/ICoAC.2014.7229716', 2014, 0, 1000, 'IEEE', 0),
(58, 66392, 77, 51, 'Brain tumor classification using orthogonal polynomial based composite operators for mri', 'R Meenakshi', 'Dr. P Anandhakumar', 'Meenakshi R, Anandhakumar P', 'Shodhganga : a reservoir of Indian theses @ INFLIBNET', 85, 4, '-', 2014, 559, 1000, 'IEEE', 0),
(59, 69520, 77, 51, 'An Effective Data Storage Model for Cloud Databases using Temporal Data De-duplication Approach', 'S. Muthurajkumar', 'Dr. S.Muthurajkumar', 'Muthurajkumar S, Vijayalakshmi M, Kannan A', '8th International Conference on Advanced Computing(ICoAC)', 0, 4, 'https://doi.org/10.1109/ICoAC.2017.7951742', 2017, 42, 1000, 'IEEE', 0),
(60, 69520, 77, 51, 'Agent based intelligent approach for the malware detection for infected cloud data storage files', 'S. Muthurajkumar', 'Dr. S.Muthurajkumar', 'Muthurajkumar S, Ganapathy S, Vijayalakshmi M, Kannan A', '7th International Conference on Advanced Computing (lCoAC)', 0, 4, 'https://doi.org/10.1109/ICoAC.2015.7562810', 2015, 1, 1000, 'IEEE', 0),
(61, 69520, 77, 51, 'Intelligent Temporal Role Based Access Control for Data Storage in Cloud Database', 'S. Muthurajkumar', 'Dr. S.Muthurajkumar', 'Muthurajkumar S, Vijayalakshmi M, Kannan A', 'Sixth International Conference on Advanced Computing(lCoAC)', 0, 4, 'https://doi.org/10.1109/ICoAC.2014.7229706', 2014, 184, 1000, 'IEEE', 0),
(62, 66269, 77, 51, 'Machine Learning Based Academic Stress Management System', 'B.Thanasekhar', 'Dr.B.Thanasekhar', 'Thanasekhar B, Gomathy N, Kiruthika A , Swarnalaxmi S,', '2019 11th International Conference on Advanced Computing (ICoAC), Chennai, India', 0, 4, 'https://doi.org/10.1109/ICoAC48765.2019.246831', 2019, 0, 1000, 'IEEE', 0),
(63, 66269, 77, 51, 'Real Time Conversion of Sign Language using Deep Learning for Programming Basics', 'B.Thanasekhar', 'Dr.B.Thanasekhar', 'Thanasekhar B, Deepak Kumar G,  Akshay V, Ashfaaq A M', '2019 11th International Conference on Advanced Computing (ICoAC), Chennai, India', 0, 4, 'https://doi.org/10.1109/ICoAC48765.2019.246807', 2019, 0, 1000, 'IEEE', 0),
(64, 66269, 77, 51, 'Fault and Delay Tolerance in Deep Learning Framework under GPU', 'B.Thanasekhar', 'Dr.B.Thanasekhar', 'Thanasekhar B, Gomathy N, Shwetha S, Sumithra A', '2019 11th International Conference on Advanced Computing (ICoAC), Chennai, India', 0, 4, 'https://doi.org/10.1109/ICoAC48765.2019.246830', 2019, 0, 1000, 'IEEE', 0),
(65, 66269, 77, 51, 'A Deep Learning Framework for Automated Transfer Learning of Neural Networks', 'T. Balaiah', 'Dr.B.Thanasekhar', 'T. Balaiah, T. J. T. Jeyadoss, S. S. Thirumurugan and R. C. Ravi', '2019 11th International Conference on Advanced Computing (ICoAC), Chennai, India', 0, 4, 'DOI: 10.1109/ICoAC48765.2019.246880', 2019, 0, 1000, 'IEEE', 0),
(66, 66269, 77, 51, 'Memory Aware Thread Aggregation Framework for Dynamic Parallelism in GPUs', 'Thanasekhar Balaiah', 'Dr.B.Thanasekhar', 'Thanasekhar Balaiah and Ranjani Parthasarathi', '2018 Tenth International Conference on Advanced Computing (ICoAC), Chennai, India', 0, 4, 'https://doi.org/10.1109/ICoAC44903.2018.8939085', 2018, 0, 1000, 'IEEE', 0),
(67, 66269, 77, 51, 'Deep Learning Strategies for Predicting Iterative Stencil Computations', 'Aditya Natarajan', 'Dr.B.Thanasekhar', 'Aditya Natarajan, Thanasekhar B, Ranjani Parthasarathi', 'IEEE Conference on High Performance Computing, organised by HiPC, INDIA', 0, 4, 'https://doi.org/10.1109/ICoAC48765.2019.246880', 2017, 0, 1000, 'IEEE', 0),
(68, 66269, 77, 51, 'Fault Tolerance in Multi-Core Processors using Flexible Redundant Threading', 'Ashok Kumar P', 'Dr.B.Thanasekhar', 'Ashok Kumar P, Thanasekhar B', 'IEEE Conference on High Performance Computing, organised by HiPC, INDIA', 2, 4, '-', 2013, 92, 1000, 'IEEE', 0),
(69, 60779, 77, 51, 'Trust Analysis on Social Networks for Identifying Authenticated Users', 'Cinu C Kiliroor', 'Dr.Cinu C Kiliroor', 'Cinu C Kiliroor and Valliyammai C', 'IEEE International Conference on Advanced Computing', 0, 4, 'https://doi.org/10.1109/ICoAC.2017.7951741', 2017, 37, 1000, 'IEEE', 0),
(70, 60623, 77, 51, 'Early Detection of Alzheimer', 'MG Janakasudha', 'Dr.Jayashree', ' Janakasudha MG,  Jayashree P', 'Advanced Computing and Intelligent Engineering', 0, 4, 'https://doi.org/10.1007/978-981-15-1081-6_10', 2020, 113, 1000, 'IEEE', 0),
(71, 60623, 77, 51, 'Security and Energy Analysis on Revised Mutual Authentication Protocol in WiMAX Networks', 'Jayashree P', 'Dr.Jayashree', 'Jayashree P, Gunavathie M', 'Networking Communication and Data Knowledge Engineering', 4, 4, 'https://doi.org/10.1007/978-981-10-4600-1_18', 2018, 195, 1000, 'IEEE', 0),
(72, 60623, 77, 51, 'A study Report on Solving 0-1 Knapsack Problem with Imprecise Data', 'A Sravanthi', 'Dr.Jayashree', 'Jayashree P,  Swagath S', 'International Conference on Computer Communication and Informatics', 0, 4, '10.1109/ICCCI.2017.8117698', 2017, 0, 1000, 'IEEE', 0),
(73, 60623, 77, 51, 'Design and development of personal assistive device for elderly', 'A Sravanthi', 'Dr.Jayashree', 'Sravanthi A, Aishwarya V, Shrinidhi S, Jayashree P', 'Eighth International Conference on Advanced Computing', 0, 4, 'https://doi.org/10.1109/ICoAC.2017.7951763', 2017, 165, 1000, 'IEEE', 0),
(74, 60623, 77, 51, 'Smart assistive technologies for aging society: Requirements, response and reality', 'Jayashree P', 'Dr.Jayashree', 'Jayashree P, Shrinidhi S, Aishwarya V,  Sravanthi A', 'Eighth International Conference on Advanced Computing', 0, 4, 'https://doi.org/10.1109/ICoAC.2017.7951755', 2017, 112, 1000, 'IEEE', 0),
(75, 60623, 77, 51, 'Fuzzy System Based Vehicle Health Monitoring And Performance Calibration', 'Jayashree P', 'Dr.Jayashree', 'Jayashree P Sridhar Babu M , Anirudh TA', 'International Conference on Electrical, Electronics, and Optimization Techniques,', 0, 4, 'https://doi.org/10.1109/ICEEOT.2016.7755153', 2016, 2549, 1000, 'IEEE', 0),
(76, 60623, 77, 51, 'Advanced Deep Neural Networks for Pattern Recognition: An Experimental Study', 'Jayashree P', 'Dr.Jayashree', 'Jayashree P, Melvin Jose Premkumar J', 'International Conference on Soft Computing and Pattern Recognition', 614, 4, 'https://doi.org/10.1007/978-3-319-60618-7_17', 2016, 166, 1000, 'IEEE', 0),
(77, 60623, 77, 51, 'Leveraging SDN to Conserve Energy in WSN-An Analysis', 'Jayashree P', 'Dr.Jayashree', 'Jayashree P, Infant Princy', '3rd International Conference on Signal Processing, Communication and Networking, Chennai', 0, 4, 'https://doi.org%2F10.1109%2FICSCN.2015.7219904', 2015, 0, 1000, 'IEEE', 0),
(78, 66392, 77, 51, 'Computer Assisted System for Predicting Human Behavior using Time Delay Neural Networks\n\n', 'Dr.Nancy Y Jane', 'Dr.Nancy Y Jane', 'Nancy Y Jane', '2017 Ninth International Conference on Advanced Computing (ICoAC), IEEE', 0, 4, 'https://doi.org/10.1109/ICoAC.2017.8441365', 2017, 77, 1000, 'IEEE', 0),
(79, 67393, 77, 51, 'Combining Multimodal DNN and SigPid technique for detecting Malicious Android Apps', 'Balaji Vasu', 'Dr.Neelavathy Pari', 'Balaji Vasu,Neelavathy Pari S', '11th International Conference on Advanced Computing', 0, 4, 'https://doi.org/10.1109/ICoAC48765.2019.247134', 2019, 289, 1000, 'IEEE', 0),
(80, 67393, 77, 51, 'Randomized 5G AKA protocol Ensembling Security in Fast Forward Mobile Device', 'S.Neelavathy Pari', 'Dr.Neelavathy Pari', 'Neelavathy Pari S,  Azhagu Vasanth R, Amuthini  M, Balaji M', '11th International Conference on Advanced Computing', 0, 4, 'https://doi.org/10.1109/ICoAC48765.2019.247139', 2019, 0, 1000, 'IEEE', 0),
(81, 67393, 77, 51, 'A Reliable Prognostic Communication Routing for Flying Ad Hoc Networks', 'S.Neelavathy Pari', 'Dr.Neelavathy Pari', 'Neelavathy Pari S, Gangadharan D', '2nd International Conference on Trends in Electronics and Informatics (ICOEI)', 0, 4, 'https://doi.org/10.1109/ICOEI.2018.8553810', 2018, 33, 1000, 'IEEE', 0),
(82, 67393, 77, 51, 'Mobile recharging framework with secured packet scheduling for named data networking based WSN', 'Arumugam K', 'Dr.Neelavathy Pari', 'Arumugam K, Sathish M,Neelavathy Pari S', 'International Conference on Information Communication and Embedded Systems (ICICES)', 0, 4, 'https://doi.org/10.1109/ICICES.2017.8070710', 2017, 0, 1000, 'IEEE', 0),
(83, 67393, 77, 51, 'Detection of single and Collaborative Black Hole Attack in MANET', 'Arumugam K', 'Dr.Neelavathy Pari', 'Arumugam K, Sathish M,Neelavathy Pari S,Harikrishnan V S', 'International level conference on IEEE International Conference on Wireless Communications, Singal Processing and Networking(WiSPNET)', 0, 4, 'https://doi.org%2F10.1109%2FWiSPNET.2016.7566500', 2016, 2040, 1000, 'IEEE', 0),
(84, 67393, 77, 51, 'An Energy-Efficient and Reliable Depth-Based Routing Protocol for Underwater Wireless Sensor Network (ER-DBR)', 'M.Sathish', 'Dr.Neelavathy Pari', 'Sathish M , Arumugam K,Neelavathy Pari S', 'International level conference on 1st Springer International Conference on Emerging Trends and Advances in Electrical Engineering and Renewable Energy (ETAEERE-2016)', 436, 4, 'https://doi.org/10.1007/978-981-10-4394-9_45', 2016, 451, 1000, 'IEEE', 0),
(85, 67393, 77, 51, 'Detecting and Focalizing Spoofing Attacks in Wireless Networks', 'S.Neelavathy Pari', 'Dr.Neelavathy Pari', 'Neelavathy Pari S,Sivakumar G R , Vignesh P', '3rd International Conference on Advanced in Computing, Electronics and Communication ACEC\'15', 0, 4, 'https://doi.org%2F10.15224%2F978-1-63248-064-4-25', 2015, 121, 1000, 'IEEE', 0),
(86, 67393, 77, 51, 'A trust system in manet with secure key authentication mechanism', 'S.Neelavathy Pari', 'Dr.Neelavathy Pari', 'Neelavathy Pari S,Sabarish J, Sridharan D', 'International level conference on international conference on Recent Trends in Information Technology ', 0, 4, 'https://doi.org/10.1109/ICRTIT.2012.6206818', 2012, 261, 1000, 'IEEE', 0),
(87, 67393, 77, 51, 'Requisite trust-based Secure Routing Protocol for MANETs', 'S.Neelavathy Pari', 'Dr.Neelavathy Pari', 'Neelavathy Pari S,Narmadhadevi B, Sridharan D', 'International level conference on international conference on Recent Trends in Information Technology ', 0, 4, 'https://doi.org/10.1109/ICRTIT.2012.6206806', 2012, 276, 1000, 'IEEE', 0),
(88, 67393, 77, 51, 'Mitigating routing Misbehaviour in self organizing Mobile Ad hoc Network using K-neighbourhood in Local Reputation System', 'S.Neelavathy Pari', 'Dr.Neelavathy Pari', 'Neelavathy Pari S,Sridharan D', 'International Conference on Recent Trends in Information Technology-ICRTIT 2011', 0, 4, 'https://doi.org/10.1109/ICRTIT.2011.5972464', 2011, 314, 1000, 'IEEE', 0),
(89, 67393, 77, 51, 'ANAV Timer for Detecting MAC Layer Misbehavior in MANET', 'S.Neelavathy Pari', 'Dr.Neelavathy Pari', 'Kalaiarasi R ,Neelavathy Pari S , Sridharan D', 'International Conference on Advances in Communication, Network, and Computing', 2, 4, 'DOI : 10.5121/ijcsit.2010.2503 ', 2010, 31, 1000, 'IEEE', 0),
(90, 67393, 77, 51, 'Energy Efficient Mobile Wireless Sensor Network Routing Protoco', 'Getsy S Sara', 'Dr.Neelavathy Pari', 'Getsy S Sara ,Neelavathy Pari S,D.Sridharan', 'The Second International conference on Networks & Communications (NeCoM 2010)', 90, 4, 'https://doi.org/10.1007/978-3-642-14493-6_65', 2010, 642, 1000, 'IEEE', 0),
(91, 67507, 77, 51, 'Analysing the Competency of Various Decision Trees towards Community Formation in Multiple Social Networks', 'Divya, K', 'Dr.Pabitha P ', 'Divya, K., Prakash, M, Pabitha P', 'IEEE International Conference on Communication and Signal Processing (ICCSP)', 0, 4, 'https://doi.org/10.1109/ICCSP.2019.8698110', 2019, 99, 1000, 'IEEE', 0),
(92, 67507, 77, 51, 'A Novel Algorithm for Top- k Community Detection In Dynamic Social Networks', 'Prakash, M', 'Dr.Pabitha P', 'Prakash, M., Ramakrishnan, R.,Pabitha P', 'IEEE International Conference on Innovations in Power and Advanced Computing Technologies(i-Pact 19)', 0, 4, 'https://doi.org%2F10.1109%2Fi-PACT44901.2019.89600', 2019, 0, 1000, 'IEEE', 0),
(93, 67507, 77, 51, 'Robust Selection through Intelligent Clustering in a Uncertain Environment', 'K. Nivitha', 'Dr.Pabitha P', 'Nivitha K , Pabitha P', 'International Conference on Big Data and Cloud Computing', 0, 4, '', 2019, 0, 1000, 'IEEE', 0),
(94, 67507, 77, 51, 'A Survey on Machine Learning Based Fault Tolerant Mechanisms in Cloud Towards Uncertainty Analysis', 'K. Nivitha', 'Dr.Pabitha P', 'Nivitha K ,Pabitha P', 'International Conference on Computer Networks', 49, 4, 'https://doi.org/10.1007/978-3-030-43192-1_2', 2019, 13, 1000, 'IEEE', 0),
(95, 67507, 77, 51, 'An Efficient Cancer Prediction Mechanism Using SA and SVM', 'Keerthana R', 'Dr.Pabitha P', 'Keerthana R, Haripriya C,Pabitha P,Rajalakshmi S', 'IEEE International Conference on Intelligent Computing and Control Systems - ICCS 2018', 0, 4, 'https://doi.org/10.1109/ICCONS.2018.8663190', 2018, 1140, 1000, 'IEEE', 0),
(96, 67507, 77, 51, 'Freezing Of Gait Prediction In Parkinsons Patients Using Neural Network', 'Ramakrishnan R', 'Dr.Pabitha P', 'Ramakrishnan R,Sai Ram M,Pabitha P,Rajalakshmi S', 'IEEE International Conference on Intelligent Computing and Control Systems - ICCS 2018', 0, 4, 'https://doi.org/10.1109/ICCONS.2018.8663104', 2018, 61, 1000, 'IEEE', 0),
(97, 67507, 77, 51, 'A Study on Meta heuristic algorithms for feature selection', 'Rajalakshmi S', 'Dr.Pabitha P', 'Rajalakshmi S, Pabitha P ', 'Springer International Conference on Intelligent Data Communication Technologies and Internet of Things (ICICI 2018),', 26, 4, 'https://doi.org/10.1007/978-3-030-03146-6_151', 2018, 1291, 1000, 'IEEE', 0),
(98, 67507, 77, 51, 'Application of QFD techniques to enhance suggestions for agricultural information service', 'Preethy.S', 'Dr.Pabitha P', 'Preethy.S, Pabitha P', 'IEEE International conference on Information Communication and Embedded Systems', 0, 4, 'https://doi.org/10.1109/ICICES.2016.7518938', 2016, 0, 1000, 'IEEE', 0),
(99, 67507, 77, 51, 'Automatic Question Generation System', 'Pabitha P', 'Dr.Pabitha P', 'Pabitha P, Mohana.M, Suganthi.S, Sivanandhini.B', 'International Conference on Recent Trends in Information Technology', 0, 4, 'https://doi.org/10.1109/ICRTIT.2014.6996216', 2014, 0, 1000, 'IEEE', 0),
(100, 67507, 77, 51, 'Graph Based Resource Recommender System', 'Pabitha P', 'Dr.Pabitha P', 'Pabitha P, Amirthavalli.G, Vasuki.C, Mridhula.J', 'International Conference on Recent Trends in Information Technology', 0, 4, 'https://doi.org/10.1109/ICRTIT.2014.6996187', 2014, 0, 1000, 'IEEE', 0),
(101, 67507, 77, 51, 'Attribute based Classification and Annotation of Unstructured data in Social Networks', 'Pabitha P ', 'Dr.Pabitha P', 'Pabitha P ,  Mary Jenis Tino A', 'International Conference on Advanced Computing', 0, 4, 'https://doi.org%2F10.1109%2FICoAC.2014.7229726', 2014, 281, 1000, 'IEEE', 0),
(102, 67507, 77, 51, 'Web Service Discovery based on Semantic Description', 'Naveen Kumar S', 'Dr.Pabitha P', 'Naveen Kumar S, Mansoor A K,Pabitha P', 'International Conference on Cloud and Ubiquitious Computing and Emerging Technologies- CUBE 2013', 0, 4, 'https://doi.org/10.1109/CUBE.2013.44', 2013, 199, 1000, 'IEEE', 0),
(103, 67507, 77, 51, 'An Ontology Model for Mapping the User Request to Select Web Services', 'Sivapradha S', 'Dr.Pabitha P', 'Sivapradha.S,Pabitha P, Rajaram, M', 'International level conference on IEEE International Conference on Recent Trends in Information Technology', 0, 4, 'https://doi.org%2F10.1109%2FICRTIT.2012.6206801', 2012, 492, 1000, 'IEEE', 0),
(104, 67507, 77, 51, 'A Collaborative Tagging System with Formal Concept Analysis', 'Sanjana Babu', 'Dr.Pabitha P', 'Sanjana Babu,Gowtham V,Parmila Mary Sophia L,Pabitha P', 'International level conference on IEEE International Conference on Recent Trends in Information Technology', 0, 4, 'https://doi.org/10.1109/ICRTIT.2013.6844171', 2012, 1, 1000, 'IEEE', 0),
(105, 67507, 77, 51, 'A Review on Semantic Web languages and Tools', 'Pabitha P ', 'Dr.Pabitha P', 'Pabitha P , Lakshmipathy R', 'National level conference on Computer Science and Engineering NICE 2009', 0, 4, '', 2009, 0, 1000, 'IEEE', 0),
(106, 67507, 77, 51, 'A proposal for model driven design of semantic blood bank web service', 'P.Pabitha P', 'Dr.Pabitha P', 'Pabitha P', 'National level conference on National conference on Software Engineering and Applications', 0, 4, '', 2009, 0, 1000, 'IEEE', 0),
(107, 67507, 77, 51, 'Design and Search of Semantic Web service', 'K. Mullai', 'Dr.Pabitha P', 'Mullai K, Pabitha P , Lakshmipathy R', 'National conference on Intelligent Electrical Systems', 0, 4, '', 2009, 0, 1000, 'IEEE', 0),
(108, 67507, 77, 51, 'A Review on Semantic Web languages and Tools', 'Pabitha P ', 'Dr.Pabitha P', 'Pabitha P , Lakshmipathy R', 'National level conference on Computer Science and Engineering NICE 2009', 0, 4, '', 2009, 0, 1000, 'IEEE', 0),
(109, 67507, 77, 51, 'A proposal for model driven design of semantic blood bank web service', 'P.Pabitha P', 'Dr.Pabitha P', 'Pabitha P', 'National level conference on National conference on Software Engineering and Applications', 0, 4, '', 2009, 0, 1000, 'IEEE', 0);

-- --------------------------------------------------------

--
-- Table structure for table `person_qualification`
--

CREATE TABLE `person_qualification` (
  `Qualification_ID` int NOT NULL,
  `Person_ID` int NOT NULL,
  `Qualification_Level_Ref` int DEFAULT NULL,
  `Degree_Ref` int DEFAULT NULL,
  `Branch_Ref` int DEFAULT NULL,
  `Institution` varchar(100) DEFAULT NULL,
  `University` varchar(50) DEFAULT NULL,
  `Start_Date` year DEFAULT NULL,
  `End_Date` year DEFAULT NULL,
  `Class_Obtained_Ref` int DEFAULT NULL,
  `Thesis_Title` varchar(150) DEFAULT NULL,
  `Specialization` varchar(45) DEFAULT NULL,
  `Faculty_Research` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `person_qualification`
--

INSERT INTO `person_qualification` (`Qualification_ID`, `Person_ID`, `Qualification_Level_Ref`, `Degree_Ref`, `Branch_Ref`, `Institution`, `University`, `Start_Date`, `End_Date`, `Class_Obtained_Ref`, `Thesis_Title`, `Specialization`, `Faculty_Research`) VALUES
(4, 66392, 12, 20, 28, 'Madras Institute of Technology', 'Anna University', 2017, 2022, NULL, NULL, NULL, NULL),
(5, 66392, 13, 16, 28, 'Annamalai group of Technology', 'Annamalai University', 2014, 2017, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `person_reference_table`
--

CREATE TABLE `person_reference_table` (
  `Reference_ID` int NOT NULL,
  `Ref_Code` int NOT NULL,
  `Category` varchar(25) DEFAULT NULL,
  `Ref_Name` varchar(100) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `person_reference_table`
--

INSERT INTO `person_reference_table` (`Reference_ID`, `Ref_Code`, `Category`, `Ref_Name`, `Description`) VALUES
(1, 1, 'Prefix', 'Mr.', NULL),
(2, 2, 'Prefix', 'Mrs.', NULL),
(3, 3, 'Prefix', 'Dr.', NULL),
(4, 4, 'Prefix', 'Ms.', NULL),
(5, 5, 'Community', 'Backward Classes Muslims', NULL),
(6, 6, 'Community', 'Scheduled Tribes', NULL),
(7, 7, 'Community', 'Scheduled Castes', NULL),
(8, 8, 'Community', 'Most Backward Classes', NULL),
(9, 9, 'Community', 'Backward Classes', NULL),
(10, 10, 'Community', 'Denotified Communities', NULL),
(11, 11, 'Community', 'Others', NULL),
(12, 12, 'Qualification_Level', 'Under Graduate', NULL),
(13, 13, 'Qualification_Level', 'Post Graduate', NULL),
(14, 14, 'Qualification_Level', 'Doctorate', NULL),
(15, 15, 'Degree', 'B.C.A', NULL),
(16, 16, 'Degree', 'B.E.', NULL),
(17, 17, 'Degree', 'B.Sc.', NULL),
(18, 18, 'Degree', 'B.Tech.', NULL),
(19, 19, 'Degree', 'M.C.A', NULL),
(20, 20, 'Degree', 'M.E.', NULL),
(21, 21, 'Degree', 'M.Tech.', NULL),
(22, 22, 'Degree', 'M.Sc.', NULL),
(23, 23, 'Degree', 'M.S.', NULL),
(24, 24, 'Degree', 'Ph.D.', NULL),
(25, 25, 'Degree', 'M.B.A', NULL),
(26, 26, 'Degree', 'Postdoctoral Research', NULL),
(27, 27, 'Degree', 'Others', NULL),
(28, 28, 'Branch', 'Computer Science and Engineering', NULL),
(29, 29, 'Branch', 'Computer Science', NULL),
(30, 30, 'Branch', 'Electrical and Electronics Engineering', NULL),
(31, 31, 'Branch', 'Electronics and Communication Engineering', NULL),
(32, 32, 'Branch', 'Electronics and Instrumentation Engineering', NULL),
(33, 33, 'Branch', 'Information Technology', NULL),
(34, 34, 'Branch', 'Others', NULL),
(35, 35, 'Class_Obtained', 'Honors', NULL),
(36, 36, 'Class_Obtained', 'First Class with Distinction', NULL),
(37, 37, 'Class_Obtained', 'First Class', NULL),
(38, 38, 'Class_Obtained', 'Second Class', NULL),
(39, 39, 'Class_Obtained', 'Others', NULL),
(40, 40, 'Designation', 'Professor', NULL),
(41, 41, 'Designation', 'Associate Professor', NULL),
(42, 42, 'Designation', 'Assistant Professor Sr. Grade', NULL),
(43, 43, 'Designation', 'Assistant Professor Sl. Grade', NULL),
(44, 44, 'Designation', 'Assistant Professor', NULL),
(45, 45, 'Designation', 'Teaching Fellow', NULL),
(46, 46, 'Designation', 'Lecturer', NULL),
(47, 47, 'Emp_Category', 'Permanent', NULL),
(48, 48, 'Emp_Category', 'Temporary', NULL),
(49, 49, 'Work Nature', 'Industry', NULL),
(50, 50, 'Work Nature', 'Academics/Research', NULL),
(51, 51, 'Level', 'International', NULL),
(52, 52, 'Level', 'National', NULL),
(53, 53, 'Level', 'State', NULL),
(54, 54, 'Event_Type', 'Conference', NULL),
(55, 55, 'Event_Type', 'Seminar', NULL),
(56, 56, 'Event_Type', 'Workshop', NULL),
(57, 57, 'Event_Type', 'Guest_Lecture', NULL),
(58, 58, 'Event_Type', 'Short Course', NULL),
(59, 59, 'Project_Type', 'Research', NULL),
(60, 60, 'Project_Type', 'Infra Structure', NULL),
(61, 61, 'Project_Type', 'Consultancy', NULL),
(62, 62, 'Guide_Type', 'Supervisor', NULL),
(63, 63, 'Guide_Type', 'Joint Supervisor', NULL),
(64, 64, 'Status', 'Completed', NULL),
(65, 65, 'Status', 'Ongoing', NULL),
(66, 66, 'Patent_Status', 'Filed', NULL),
(67, 67, 'Patent_Status', 'Awarded', NULL),
(68, 68, 'Gender', 'Male', NULL),
(69, 69, 'Gender', 'Female', NULL),
(70, 70, 'Gender', 'Transgender', NULL),
(71, 71, 'Marital_Status', 'Married', NULL),
(72, 72, 'Marital_Status', 'Unmarried', NULL),
(73, 73, 'Marital_Status', 'Widow/Widower', NULL),
(74, 74, 'Participation_Status', 'Presented', NULL),
(75, 75, 'Participation_Status', 'Attended', NULL),
(76, 76, 'Publication_Type', 'Poster', NULL),
(77, 77, 'Publication_Type', 'Conference', NULL),
(78, 78, 'Publication_Type', 'Journal', NULL),
(79, 79, 'Class_Type', 'Theory', NULL),
(80, 80, 'Class_Type', 'Laboratory', NULL),
(81, 81, 'Class_Type', 'Project', NULL),
(82, 82, 'Class_Type', 'Theory cum Practical Integrated', NULL),
(83, 83, 'Responsibility_Ref', 'FA', NULL),
(84, 84, 'Responsibility_Ref', 'Library Incharge', NULL),
(85, 85, 'Responsibility_Ref', 'PI of proposal', NULL),
(86, 86, 'Responsibility_Ref', 'Project Coordinator', NULL),
(87, 87, 'Membership_Type', 'Member', NULL),
(88, 88, 'Membership_Type', 'Senior', NULL),
(89, 89, 'Option', 'Yes', NULL),
(90, 90, 'Option', 'No', NULL),
(91, 91, 'Registration_Mode', 'Full Time', NULL),
(92, 92, 'Registration_Mode', 'Part Time', NULL),
(93, 93, 'Admission_Category', 'Counselling', NULL),
(94, 94, 'Admission_Category', 'Sports', NULL),
(95, 95, 'Admission_Category', 'Industrial Consortium', NULL),
(96, 96, 'Admission_Category', 'Founders Quota', NULL),
(97, 97, 'Admission_Category', 'NRI', NULL),
(98, 98, 'Admission_Category', 'Others', NULL),
(99, 99, 'Residential_Type', 'Hostel', NULL),
(100, 100, 'Residential_Type', 'Day Scholar', NULL),
(101, 101, 'Residential_Type', 'PG Accomodation', NULL),
(102, 102, 'Programme', 'B.E.', NULL),
(103, 103, 'Programme', 'M.E.', NULL),
(104, 104, 'Programme', 'Ph.D.', NULL),
(105, 105, 'Placement_Type', 'On-Campus', NULL),
(106, 106, 'Placement_Type', 'Off-Campus', NULL),
(107, 107, 'Admission_Mode', 'GRE', NULL),
(108, 108, 'Admission_Mode', 'TOEFEL', NULL),
(109, 109, 'Admission_Mode', 'IELTS', NULL),
(110, 110, 'Admission_Mode', 'GMAT', NULL),
(111, 111, 'Admission_Mode', 'GATE', NULL),
(112, 112, 'Admission_Mode', 'TANCET', NULL),
(113, 113, 'Admission_Mode', 'Direct', NULL),
(114, 114, 'Admission_Mode', 'Others', NULL),
(115, 115, 'Award_Type', 'Technical', NULL),
(116, 116, 'Award_Type', 'Non-Technical', NULL),
(117, 117, 'Award_Category', 'State', NULL),
(118, 118, 'Award_Category', 'National', NULL),
(119, 119, 'Award_Category', 'International', NULL),
(120, 120, 'Selection_Mode', 'CUIC', NULL),
(121, 121, 'Selection_Mode', 'Direct', NULL),
(122, 122, 'Participation_Type', 'Individual', NULL),
(123, 123, 'Participation_Type', 'Group', NULL),
(124, 124, 'Blood_Group', 'O +ve', NULL),
(125, 125, 'Blood_Group', 'A +ve', NULL),
(126, 126, 'Blood_Group', 'A -ve', NULL),
(127, 127, 'Blood_Group', 'AB -ve', NULL),
(128, 128, 'Blood_Group', 'O -ve', NULL),
(129, 129, 'Blood_Group', 'B +ve', NULL),
(130, 130, 'Blood_Group', 'B -ve', NULL),
(131, 131, 'Blood_Group', 'AB +ve', NULL),
(132, 132, 'NSS/NSO/YRC_Volunteer', 'NSS', NULL),
(133, 133, 'NSS/NSO/YRC_Volunteer', 'NSO', NULL),
(134, 134, 'NSS/NSO/YRC_Volunteer', 'YRC', NULL),
(135, 135, 'SEvent_Type', 'Technical', NULL),
(136, 136, 'SEvent_Type', 'Non Technical', NULL),
(137, 137, 'Session', 'November 2016', NULL),
(138, 138, 'Session', 'April 2017', NULL),
(139, 139, 'Session', 'November 2017', NULL),
(140, 140, 'Session', 'April 2018', NULL),
(141, 141, 'Session', 'November 2018', NULL),
(142, 142, 'Session', 'April 2019', NULL),
(143, 143, 'Session', 'November 2019', NULL),
(144, 144, 'Session', 'April 2020', NULL),
(145, 145, 'Session', 'November 2020', NULL),
(146, 146, 'Session', 'April 2021', NULL),
(147, 147, 'Group', 'MM', NULL),
(148, 148, 'Group', 'MN', NULL),
(149, 149, 'Group', 'MO', NULL),
(150, 150, 'Group', 'G1', NULL),
(151, 151, 'Group', 'G2', NULL),
(152, 152, 'Group', 'Common', NULL),
(153, 153, 'Atype', 'Assessment', NULL),
(154, 154, 'Atype', 'Assignment', NULL),
(155, 155, 'Stream', 'UG', NULL),
(156, 156, 'Stream', 'PG', NULL),
(157, 157, 'Regulation', 'CBCS', NULL),
(158, 158, 'Regulation', 'RUSA', NULL),
(159, 159, 'Regulation', '2015', NULL),
(160, 160, 'Regulation', '2019', NULL),
(161, 161, 'Blooms Level', '1-Remember', NULL),
(162, 162, 'Blooms Level', '2-Understand', NULL),
(163, 163, 'Blooms Level', '3-Apply', NULL),
(164, 164, 'Blooms Level', '4-Analyze', NULL),
(165, 165, 'Blooms Level', '5-Evaluate', NULL),
(166, 166, 'Blooms Level', '6-Create', NULL),
(167, -1, 'None', 'None', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `person_responsibility`
--

CREATE TABLE `person_responsibility` (
  `Responsibility_ID` int NOT NULL,
  `Person_ID` int NOT NULL,
  `Responsibility_Ref` int DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Start_Date` date DEFAULT NULL,
  `End_Date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `person_scholardetails`
--

CREATE TABLE `person_scholardetails` (
  `Scholar_ID` int NOT NULL,
  `Person_ID` int NOT NULL,
  `Reg_No` varchar(10) DEFAULT NULL,
  `Scholar_Name` varchar(45) DEFAULT NULL,
  `Title` varchar(100) DEFAULT NULL,
  `Status_Ref` int DEFAULT NULL,
  `Guide_Type_Ref` int DEFAULT NULL,
  `Fellowship_Received_Ref` int DEFAULT NULL,
  `Fellowship_Agency` varchar(45) DEFAULT NULL,
  `Fellowship_Amount` float DEFAULT NULL,
  `Year_Of_Registration` date DEFAULT NULL,
  `Research_Area` varchar(45) DEFAULT NULL,
  `Registration_Mode_Ref` int DEFAULT NULL,
  `Fellowship_Name` varchar(45) DEFAULT NULL,
  `Fellowship_Year` date DEFAULT NULL,
  `Year_Of_Completion` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `person_scholardetails`
--

INSERT INTO `person_scholardetails` (`Scholar_ID`, `Person_ID`, `Reg_No`, `Scholar_Name`, `Title`, `Status_Ref`, `Guide_Type_Ref`, `Fellowship_Received_Ref`, `Fellowship_Agency`, `Fellowship_Amount`, `Year_Of_Registration`, `Research_Area`, `Registration_Mode_Ref`, `Fellowship_Name`, `Fellowship_Year`, `Year_Of_Completion`) VALUES
(1, 66269, '5015789', 'R. Arun Kumar', 'Mobility support in indoor LiFi/WiFi system', NULL, NULL, NULL, NULL, NULL, '2018-01-01', 'Networking', NULL, NULL, NULL, NULL),
(2, 69520, '5015794', 'E. Nirmala', 'Implementation of Security Aspects of the Cloud Computing Architecture for Social Remote Tracking So', NULL, NULL, NULL, NULL, NULL, '2015-01-01', 'Medical Blockchain', NULL, NULL, NULL, NULL),
(3, 66392, '5015790', 'A. Arunkumar', 'Efficient VNF On-boarding on Cloud Native Environments', NULL, NULL, NULL, NULL, NULL, '2016-01-01', 'NFV Cloud and Virtualization', NULL, NULL, NULL, NULL),
(4, 66449, '5015793', 'R. Naga Priyadarsini', 'Cognitive Blockchain Technology for Predictive Healthcare Management System', NULL, NULL, NULL, NULL, NULL, '2016-01-01', 'Medical Blockchain', NULL, NULL, NULL, NULL),
(5, 66392, '5015790', 'B. Sahaya Beni Prathiba', 'Energy-Efficient Learning Mechanism for Load Balancing in Software-Defined Next Generation Networks', NULL, NULL, NULL, NULL, NULL, '2017-01-01', 'Internet of Vehicles', NULL, NULL, NULL, NULL),
(6, 60623, '5015791', 'V. Brindha', 'Diagnostic Support System to Detect Brain Abnormalities', NULL, NULL, NULL, NULL, NULL, '2017-01-01', 'Medical Image Processing', NULL, NULL, NULL, NULL),
(7, 67079, '5015796', 'M. Amsa Prabhaa', 'A Spatio-Temporal Knowledge Mining Approach for Predictive Analysis', NULL, NULL, NULL, NULL, NULL, '2018-01-01', 'Image Processing', NULL, NULL, NULL, NULL),
(8, 66517, '5015794', 'K. Narmadha', 'Privacy in Machine Learning', NULL, NULL, NULL, NULL, NULL, '2018-01-01', 'Security and Privacy', NULL, NULL, NULL, NULL),
(9, 60623, '5015791', 'K. Laila\r\n', 'Spam Review Classification based on Social behaviour analysis', NULL, NULL, NULL, NULL, NULL, '2018-01-01', 'Big Data', NULL, NULL, NULL, NULL),
(10, 67079, '5015796', 'J. Saranya Devi', 'Multivariate Time Series Data Classification using Temporal Data Mining Approach', NULL, NULL, NULL, NULL, NULL, '2018-01-01', 'Data Mining', NULL, NULL, NULL, NULL),
(11, 60623, '5015791', 'P. Saranya', 'Security Enhancement Framework for Software Defined Networks', NULL, NULL, NULL, NULL, NULL, '2019-01-01', 'Software Defined Networks', NULL, NULL, NULL, NULL),
(12, 66449, '5015793', 'A. Anantha Babu', 'To construct the Secure Public Key Cryptosystem using Post Quantum Cryptography', NULL, NULL, NULL, NULL, NULL, '2019-01-01', 'Post Quantum Cryptography', NULL, NULL, NULL, NULL),
(13, 60779, '5015792', 'G. Puviarasi', 'Devising semantic model for Relational Database Co-operative query answering, checking and optimizat', NULL, NULL, NULL, NULL, NULL, '2019-01-01', 'Semantic Web', NULL, NULL, NULL, NULL),
(14, 67507, '5015797', 'Anusha Jayasimhan', 'Distributed deep learning analytics using Big data', NULL, NULL, NULL, NULL, NULL, '2020-01-01', 'Deep Learning, Big Data Analytics', NULL, NULL, NULL, NULL),
(15, 67507, '5015797', 'K. Nivitha', 'Measuring Uncertainity in Cloud Environment using Machine Learning Techniques', NULL, NULL, NULL, NULL, NULL, '2020-01-01', 'Cloud Computing', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `person_specialization`
--

CREATE TABLE `person_specialization` (
  `Specialization_ID` int NOT NULL,
  `Person_ID` int NOT NULL,
  `AOS1` varchar(45) DEFAULT NULL,
  `AOS2` varchar(45) DEFAULT NULL,
  `AOS3` varchar(45) DEFAULT NULL,
  `AOS4` varchar(45) DEFAULT NULL,
  `AOS5` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `person_specialization`
--

INSERT INTO `person_specialization` (`Specialization_ID`, `Person_ID`, `AOS1`, `AOS2`, `AOS3`, `AOS4`, `AOS5`) VALUES
(1, 66392, 'UAV Communications', '5G Networks', 'Internet of Vehicles', 'Wireless Security', 'Machine Learning'),
(2, 60623, 'Network Security', 'Object Technologies', NULL, NULL, NULL),
(3, 66517, 'Cloud computing', ' Machine Learning', 'Data Mining', 'Mobile Computing', NULL),
(4, 60779, 'Cloud Computing', 'Big Data', 'Grid Computing', NULL, NULL),
(5, 66449, 'Scheduling in Grid Computing', NULL, NULL, NULL, NULL),
(6, 66269, 'Programming Models', 'GPU Computing', 'Compilers', NULL, NULL),
(7, 67393, 'Security in Wireless Network', NULL, NULL, NULL, NULL),
(8, 67406, 'Security in Mobile Adhoc Networks', NULL, NULL, NULL, NULL),
(9, 67079, 'Machine Learning', 'Clinical Data Analytics', 'Health-care Intelligence', 'Real-time Decision Making Systems', NULL),
(10, 67068, 'Wireless Sensor Network', NULL, NULL, NULL, NULL),
(11, 67507, 'Internet Computing', 'Machine Intelligence', 'Software Engineering', NULL, NULL),
(12, 69520, 'Cloud Computing', 'Data Structures', NULL, NULL, NULL),
(13, 702635, 'Natural Language Processing', 'Machine Learning', NULL, NULL, NULL),
(14, 702639, 'Data Base Management', NULL, NULL, NULL, NULL),
(15, 702637, 'Image Processing', 'Network Security', 'Data Structures', NULL, NULL),
(16, 702638, 'Sentiment Analysis', ' Internet Of Things', 'Object Oriented Programming', NULL, NULL),
(17, 701538, 'Artificial Intelligence', NULL, NULL, NULL, NULL),
(18, 702636, 'Big Data Analytics', 'Data Mining', NULL, NULL, NULL),
(19, 702735, 'Machine Learning', NULL, NULL, NULL, NULL),
(20, 702750, 'Software Engineering', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `person_supervision`
--

CREATE TABLE `person_supervision` (
  `Supervision_ID` int NOT NULL,
  `Person_ID` int NOT NULL,
  `Degree_Ref` int DEFAULT NULL,
  `Guide_Type_Ref` int DEFAULT NULL,
  `Reg_No` bigint DEFAULT NULL,
  `Start_Year` year DEFAULT NULL,
  `End_Year` year DEFAULT NULL,
  `Status_Ref` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `person_supervision`
--

INSERT INTO `person_supervision` (`Supervision_ID`, `Person_ID`, `Degree_Ref`, `Guide_Type_Ref`, `Reg_No`, `Start_Year`, `End_Year`, `Status_Ref`) VALUES
(1, 66269, 41, 62, 5015789, 2010, NULL, 64),
(2, 66392, NULL, 62, 5015790, 2010, NULL, 64),
(3, 60623, NULL, 62, 5015791, 2010, NULL, 64),
(4, 60779, NULL, 62, 5015792, 2010, NULL, 64),
(5, 66449, NULL, 62, 5015793, 2010, NULL, 64),
(6, 66517, NULL, 62, 5015794, 2010, NULL, 64),
(7, 69520, NULL, 62, 5015795, 2010, NULL, 64),
(8, 67079, NULL, 62, 5015796, 2010, NULL, 64),
(9, 67507, NULL, 62, 5015797, 2010, NULL, 64);

-- --------------------------------------------------------

--
-- Table structure for table `person_travel_history`
--

CREATE TABLE `person_travel_history` (
  `Travel_ID` int NOT NULL,
  `Person_ID` int NOT NULL,
  `Title` varchar(100) DEFAULT NULL,
  `Start_Date` date DEFAULT NULL,
  `End_Date` date DEFAULT NULL,
  `Organization` varchar(100) DEFAULT NULL,
  `Place` varchar(15) DEFAULT NULL,
  `Agency` varchar(100) DEFAULT NULL,
  `Purpose` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `staff_list`
--

CREATE TABLE `staff_list` (
  `staff_id` int NOT NULL,
  `name` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `Register_No` int NOT NULL,
  `First_Name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `Last_Name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `DOB` date NOT NULL,
  `MailID` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `Programme_Ref` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`Register_No`, `First_Name`, `Last_Name`, `DOB`, `MailID`, `Programme_Ref`) VALUES
(2015506789, 'Ramesh', 'G', '1999-05-03', 'ram@gmail.com', 102),
(2016503614, 'Suresh', 'M', '1999-01-04', 'sureshv@yahoo.com', 102),
(2017503001, 'Akshaya K', '', '0000-00-00', '', 102),
(2017503002, 'Alson A', '', '0000-00-00', '', 102),
(2017503003, 'Aravind S', '', '0000-00-00', '', 102),
(2017503004, 'Arthi T', '', '0000-00-00', '', 102),
(2017503005, 'Aruna Devi V', '', '0000-00-00', '', 102),
(2017503006, 'Babysruthi S', '', '0000-00-00', '', 102),
(2017503007, 'Balaji C', '', '0000-00-00', '', 102),
(2017503008, 'Barakath Meharajnisa H', '', '0000-00-00', '', 102),
(2017503009, 'Bhuvanesh I', '', '0000-00-00', '', 102),
(2017503010, 'Bhuvaneshwari R', '', '0000-00-00', '', 102),
(2017503011, 'Crystal M', '', '0000-00-00', '', 102),
(2017503012, 'Devi Priya B', '', '0000-00-00', '', 102),
(2017503013, 'Dharani B', '', '0000-00-00', '', 102),
(2017503014, 'Dharsini S', '', '0000-00-00', '', 102),
(2017503015, 'Ezhilarasi M', '', '0000-00-00', '', 102),
(2017503016, 'Fouzul Hidayaa', '', '0000-00-00', '', 102),
(2017503017, 'Geetha A', '', '0000-00-00', '', 102),
(2017503018, 'Gifty Gildona Gilbert', '', '0000-00-00', '', 102),
(2017503019, 'Gurudakshnamoorthy P L', '', '0000-00-00', '', 102),
(2017503020, 'Jayabharathi M', '', '0000-00-00', '', 102),
(2017503021, 'Jenet Rashma S D S', '', '0000-00-00', '', 102),
(2017503022, 'Kathiravan M', '', '0000-00-00', '', 102),
(2017503023, 'Kavimalar M', '', '0000-00-00', '', 102),
(2017503024, 'Kavin R', '', '0000-00-00', '', 102),
(2017503025, 'Kavithanjali B', '', '0000-00-00', '', 102),
(2017503026, 'Keerthi Vasan K P', '', '0000-00-00', '', 102),
(2017503027, 'Loganath Balaji R', '', '0000-00-00', '', 102),
(2017503028, 'Mohamed Suhaib S A', '', '0000-00-00', '', 102),
(2017503029, 'Mugilarasan C', '', '0000-00-00', '', 102),
(2017503030, 'Nasrin Banu A', '', '0000-00-00', '', 102),
(2017503031, 'Naveena M', '', '0000-00-00', '', 102),
(2017503032, 'Nirupama S', '', '0000-00-00', '', 102),
(2017503033, 'Nivetha S', '', '0000-00-00', '', 102),
(2017503034, 'Priya P', '', '0000-00-00', '', 102),
(2017503035, 'Rajesh M', '', '0000-00-00', '', 102),
(2017503036, 'Rajeshwaran P', '', '0000-00-00', '', 102),
(2017503037, 'Ramanujan V', '', '0000-00-00', '', 102),
(2017503038, 'Ravindhran Jabaraj G', '', '0000-00-00', '', 102),
(2017503039, 'Sandhiya U', '', '0000-00-00', '', 102),
(2017503040, 'Santhosh M', '', '0000-00-00', '', 102),
(2017503041, 'Saravanakumar T', '', '0000-00-00', '', 102),
(2017503042, 'Saravanan C', '', '0000-00-00', '', 102),
(2017503043, 'Shruthi M', '', '0000-00-00', '', 102),
(2017503044, 'Sivaseelan G', '', '0000-00-00', '', 102),
(2017503045, 'Srimathi Janaki U', '', '0000-00-00', '', 102),
(2017503046, 'Thamizhmani R', '', '0000-00-00', '', 102),
(2017503047, 'Ulagammal S', '', '0000-00-00', '', 102),
(2017503048, 'Vignesh', 'Antony', '2000-06-03', 'vigneshantony5@gmail.com', 102),
(2017503049, 'Vignesh M', '', '0000-00-00', '', 102),
(2017503050, 'Vijay M', '', '0000-00-00', '', 102),
(2017503051, 'Viknesh N', '', '0000-00-00', '', 102),
(2017503052, 'Yashvandh B', '', '0000-00-00', '', 102),
(2017503053, 'Yuvaraj V', '', '0000-00-00', '', 102),
(2017503054, 'Archana Ramakrishnan', '', '0000-00-00', '', 102),
(2017503055, 'Ashmitha Jeyakumar Raja', '', '0000-00-00', '', 102),
(2017503056, 'Aswatth', 'G', '1999-09-14', 'aswatth@gmail.com', 102),
(2017503057, 'Balaji Sai Sruthi', '', '0000-00-00', '', 102),
(2017503058, 'Balasubramanian R', '', '0000-00-00', '', 102),
(2017503059, 'Gunashree Kannan', '', '0000-00-00', '', 102),
(2017503060, 'Indraja Subramanian', '', '0000-00-00', '', 102),
(2017503061, 'Kriti Gupta', '', '0000-00-00', '', 102),
(2017503062, 'Pernamitta Hanumareddy', '', '0000-00-00', '', 102),
(2017503063, 'Preetiha Jayashanker', '', '0000-00-00', '', 102),
(2017503064, 'Ravi Vignesh', '', '0000-00-00', '', 102),
(2017503065, 'Renuka Narayanan', '', '0000-00-00', '', 102),
(2017503066, 'Saranya A M', '', '0000-00-00', '', 102),
(2017503067, 'Shibi Chakravarthy E P', '', '0000-00-00', '', 102),
(2017503068, 'Sibi K', '', '0000-00-00', '', 102),
(2017503501, 'Ajay Theetharappan A', '', '0000-00-00', '', 102),
(2017503502, 'Akash Kumar R', '', '0000-00-00', '', 102),
(2017503503, 'Aravindhan S', '', '0000-00-00', '', 102),
(2017503504, 'Arul S D', '', '0000-00-00', '', 102),
(2017503505, 'Arunsha', 'R', '2000-07-14', '', 102),
(2017503506, 'Bhavadharani G', '', '0000-00-00', '', 102),
(2017503507, 'Caushik Subramaniam C', '', '0000-00-00', '', 102),
(2017503508, 'Charanya S K', '', '0000-00-00', '', 102),
(2017503509, 'Dharshini T', '', '0000-00-00', '', 102),
(2017503510, 'Gaurav Garikaparthi', '', '0000-00-00', '', 102),
(2017503511, 'Geetanjali V', '', '0000-00-00', '', 102),
(2017503512, 'Gokul P', '', '0000-00-00', '', 102),
(2017503513, 'Gopika N', '', '0000-00-00', '', 102),
(2017503514, 'Hariharan M', '', '0000-00-00', '', 102),
(2017503515, 'Hemanth Kishore G', '', '0000-00-00', '', 102),
(2017503516, 'Ilakkiya U G', '', '0000-00-00', '', 102),
(2017503517, 'Jaii Sabarish P K', '', '0000-00-00', '', 102),
(2017503518, 'Jayashree S', '', '0000-00-00', '', 102),
(2017503519, 'Jeevanantham M', '', '0000-00-00', '', 102),
(2017503520, 'Karthikraj V', '', '0000-00-00', '', 102),
(2017503521, 'Karunika S', '', '0000-00-00', '', 102),
(2017503522, 'Krishant Tharun D', '', '0000-00-00', '', 102),
(2017503523, 'Krishna Vamshi Nethi', '', '0000-00-00', '', 102),
(2017503524, 'Krithika K', '', '0000-00-00', '', 102),
(2017503525, 'Kugan', 'S', '2000-07-14', 'kugansri@gmail.com', 102),
(2017503526, 'Laxman B R', '', '0000-00-00', '', 102),
(2017503527, 'Mageshwaran M', '', '0000-00-00', '', 102),
(2017503528, 'Makesh Arvindan V', '', '0000-00-00', '', 102),
(2017503529, 'Mani Shankar R', '', '0000-00-00', '', 102),
(2017503530, 'Medhana K', '', '0000-00-00', '', 102),
(2017503531, 'Muhammed Naufal H', '', '0000-00-00', '', 102),
(2017503532, 'Muthu K', '', '0000-00-00', '', 102),
(2017503533, 'Nafesha B', '', '0000-00-00', '', 102),
(2017503534, 'Nisha Deborah Philips', '', '0000-00-00', '', 102),
(2017503535, 'Nivetha R', '', '0000-00-00', '', 102),
(2017503536, 'Porsiya R', '', '0000-00-00', '', 102),
(2017503537, 'Prabhakar', 'R', '2000-04-29', 'prabha@gmail.com', 102),
(2017503538, 'Priyanka S', '', '0000-00-00', '', 102),
(2017503539, 'Ragavan B', '', '0000-00-00', '', 102),
(2017503540, 'Ragavi R', '', '0000-00-00', '', 102),
(2017503541, 'Rekshalin Jaicy A', '', '0000-00-00', '', 102),
(2017503542, 'Rithika E', '', '0000-00-00', '', 102),
(2017503543, 'Sai Prakash N', '', '0000-00-00', '', 102),
(2017503544, 'Saiabirami R V', '', '0000-00-00', '', 102),
(2017503545, 'Saikaushik K', '', '0000-00-00', '', 102),
(2017503546, 'Saloni S Jain', '', '0000-00-00', '', 102),
(2017503547, 'Sandhiya N', '', '0000-00-00', '', 102),
(2017503548, 'Saravanan C', '', '0000-00-00', '', 102),
(2017503549, 'Senbagapriya S', '', '0000-00-00', '', 102),
(2017503550, 'Soundhar K', '', '0000-00-00', '', 102),
(2017503551, 'Sree Shreya M', '', '0000-00-00', '', 102),
(2017503552, 'Surakhsha N', '', '0000-00-00', '', 102),
(2017503553, 'Tamilarasan R', '', '0000-00-00', '', 102),
(2017503554, 'Vasanth B', '', '0000-00-00', '', 102),
(2017503555, 'Vengam Udaya Kumar', '', '0000-00-00', '', 102),
(2017503556, 'Vijaybarath A M', '', '0000-00-00', '', 102),
(2017503557, 'Harini', '', '0000-00-00', '', 102),
(2017503558, 'Jayashree S', '', '0000-00-00', '', 102),
(2017503559, 'Karthik R', '', '0000-00-00', '', 102),
(2017503560, 'Vishnupriya E', '', '0000-00-00', '', 102),
(2017503561, 'Manikandan S', '', '0000-00-00', '', 102),
(2017503562, 'Aditya Vishwakarma R', '', '0000-00-00', '', 102),
(2017503563, 'Pitchuka Yamini', '', '0000-00-00', '', 102),
(2017503564, 'Sabrish Kumar P', '', '0000-00-00', '', 102),
(2017503565, 'Ashwin Balaji G', '', '0000-00-00', '', 102),
(2017503566, 'Devi Shri K', '', '0000-00-00', '', 102),
(2017503567, 'Kaaviya A', '', '0000-00-00', '', 102),
(2018503001, 'Aanandan T Ma', '', '0000-00-00', '', 102),
(2018503002, 'Aarthi Ganesan', '', '0000-00-00', '', 102),
(2018503003, 'Abirami S', '', '0000-00-00', '', 102),
(2018503004, 'Adarsh Raj Patel', '', '0000-00-00', '', 102),
(2018503005, 'Adithya Prakash', '', '0000-00-00', '', 102),
(2018503006, 'Aishwarya Lakshmi A', '', '0000-00-00', '', 102),
(2018503007, 'Ajithkumar K', '', '0000-00-00', '', 102),
(2018503008, 'Akash A', '', '0000-00-00', '', 102),
(2018503009, 'Akash Ilangovan', '', '0000-00-00', '', 102),
(2018503010, 'Anjum F', '', '0000-00-00', '', 102),
(2018503011, 'Anu Rithiga B', '', '0000-00-00', '', 102),
(2018503012, 'Aravind C', '', '0000-00-00', '', 102),
(2018503013, 'Aravind Priyamvadan Vedadhri', '', '0000-00-00', '', 102),
(2018503014, 'Aruna Prakash', '', '0000-00-00', '', 102),
(2018503015, 'Ashokkumar M', '', '0000-00-00', '', 102),
(2018503016, 'Balaji Rajaguru Rajakumar', '', '0000-00-00', '', 102),
(2018503017, 'Bharatharaj Babu', '', '0000-00-00', '', 102),
(2018503018, 'Bharathi', '', '0000-00-00', '', 102),
(2018503019, 'Celsia S', '', '0000-00-00', '', 102),
(2018503020, 'Chelladurai Prakash Raj', '', '0000-00-00', '', 102),
(2018503021, 'Dhanusree R P', '', '0000-00-00', '', 102),
(2018503022, 'Dhilip Kumar G', '', '0000-00-00', '', 102),
(2018503023, 'Dhivyabharathi D', '', '0000-00-00', '', 102),
(2018503024, 'Elakiya K S', '', '0000-00-00', '', 102),
(2018503025, 'Ganesh Kumaar Somasundaram', '', '0000-00-00', '', 102),
(2018503026, 'Gayathri Saravanan', '', '0000-00-00', '', 102),
(2018503027, 'Gowtham A', '', '0000-00-00', '', 102),
(2018503028, 'Harini Devi K', '', '0000-00-00', '', 102),
(2018503029, 'Harini J', '', '0000-00-00', '', 102),
(2018503030, 'Hariprasanth M S', '', '0000-00-00', '', 102),
(2018503031, 'Hariprasanth R', '', '0000-00-00', '', 102),
(2018503032, 'Harsha Padma S', '', '0000-00-00', '', 102),
(2018503033, 'Iraianbu T', '', '0000-00-00', '', 102),
(2018503034, 'Kalpana Devi K', '', '0000-00-00', '', 102),
(2018503035, 'Kanimozhi M', '', '0000-00-00', '', 102),
(2018503036, 'Karthiknaveen E', '', '0000-00-00', '', 102),
(2018503037, 'Keerthana R', '', '0000-00-00', '', 102),
(2018503038, 'Kishore V', '', '0000-00-00', '', 102),
(2018503040, 'Mahalakshmi B', '', '0000-00-00', '', 102),
(2018503041, 'Manashadevi S', '', '0000-00-00', '', 102),
(2018503042, 'Mirudula R', '', '0000-00-00', '', 102),
(2018503044, 'Monika A', '', '0000-00-00', '', 102),
(2018503045, 'Muppala Chandana', '', '0000-00-00', '', 102),
(2018503046, 'Muthukumaran A', '', '0000-00-00', '', 102),
(2018503047, 'Nirupama V M', '', '0000-00-00', '', 102),
(2018503048, 'Nithish P', '', '0000-00-00', '', 102),
(2018503049, 'Pavithra B', '', '0000-00-00', '', 102),
(2018503050, 'Pradeepa S', '', '0000-00-00', '', 102),
(2018503051, 'Prasanna Kumar T D', '', '0000-00-00', '', 102),
(2018503052, 'Raguram S', '', '0000-00-00', '', 102),
(2018503053, 'Rajashree S', '', '0000-00-00', '', 102),
(2018503054, 'Rakini B', '', '0000-00-00', '', 102),
(2018503055, 'Ramyadevi S', '', '0000-00-00', '', 102),
(2018503056, 'Rishi Kesavan B', '', '0000-00-00', '', 102),
(2018503057, 'Saikrishna Balakrishnan', '', '0000-00-00', '', 102),
(2018503058, 'Sakthivel Murugan A', '', '0000-00-00', '', 102),
(2018503059, 'Shanthosh R M', '', '0000-00-00', '', 102),
(2018503060, 'Siva Hari A S', '', '0000-00-00', '', 102),
(2018503061, 'Soundhara Pandiyan K', '', '0000-00-00', '', 102),
(2018503062, 'Sriram V S', '', '0000-00-00', '', 102),
(2018503063, 'Suriyaa T', '', '0000-00-00', '', 102),
(2018503064, 'Surya Siddharthan S', '', '0000-00-00', '', 102),
(2018503065, 'Swetha R', '', '0000-00-00', '', 102),
(2018503066, 'Vanapalli Siva Shankara Naga Vara Prasad', '', '0000-00-00', '', 102),
(2018503067, 'Vijay K', '', '0000-00-00', '', 102),
(2018503068, 'Vinayaka Murthy Vijay', '', '0000-00-00', '', 102),
(2018503069, 'Vishal Ravichandran', '', '0000-00-00', '', 102),
(2018503070, 'Vismitha S', '', '0000-00-00', '', 102),
(2018503071, 'Viswapriya Srinivas', '', '0000-00-00', '', 102),
(2018503072, 'Yogeshwar S', '', '0000-00-00', '', 102),
(2018503501, 'Aara Amuthan B', '', '0000-00-00', '', 102),
(2018503503, 'Abishake S', '', '0000-00-00', '', 102),
(2018503504, 'Abishek C', '', '0000-00-00', '', 102),
(2018503505, 'Ajeeth P', '', '0000-00-00', '', 102),
(2018503506, 'Apoorva Chandar P', '', '0000-00-00', '', 102),
(2018503507, 'Apsana Rahema M', '', '0000-00-00', '', 102),
(2018503508, 'Aravindhan B', '', '0000-00-00', '', 102),
(2018503509, 'Ashwath R', '', '0000-00-00', '', 102),
(2018503510, 'Barath S', '', '0000-00-00', '', 102),
(2018503511, 'Bhuvaneaswari R', '', '0000-00-00', '', 102),
(2018503512, 'Chandhru R', '', '0000-00-00', '', 102),
(2018503513, 'Chandrakanth D', '', '0000-00-00', '', 102),
(2018503514, 'Chityala Rama Naga Sainadh', '', '0000-00-00', '', 102),
(2018503515, 'Cibi M', '', '0000-00-00', '', 102),
(2018503516, 'Cibi Sharan C', '', '0000-00-00', '', 102),
(2018503517, 'Devadarshan R K', '', '0000-00-00', '', 102),
(2018503518, 'Dinesh Prabhu M', '', '0000-00-00', '', 102),
(2018503519, 'Divya Chelshia J', '', '0000-00-00', '', 102),
(2018503520, 'Elamaran P', '', '0000-00-00', '', 102),
(2018503521, 'Gokul B J', '', '0000-00-00', '', 102),
(2018503522, 'Harini C', '', '0000-00-00', '', 102),
(2018503523, 'Indira Priyadharshini B', '', '0000-00-00', '', 102),
(2018503524, 'Jaivishnu S', '', '0000-00-00', '', 102),
(2018503525, 'Jaya Surya V', '', '0000-00-00', '', 102),
(2018503526, 'Jeevitha P M', '', '0000-00-00', '', 102),
(2018503527, 'Jitiendran K S', '', '0000-00-00', '', 102),
(2018503529, 'Karthick R', '', '0000-00-00', '', 102),
(2018503530, 'Karthikeyan V', '', '0000-00-00', '', 102),
(2018503531, 'Keshav R', '', '0000-00-00', '', 102),
(2018503532, 'Kowsi N', '', '0000-00-00', '', 102),
(2018503533, 'Krishnaraj T', '', '0000-00-00', '', 102),
(2018503534, 'Lokesh Vikram A', '', '0000-00-00', '', 102),
(2018503535, 'Mohamed Afzal M K T', '', '0000-00-00', '', 102),
(2018503536, 'Mohamed Arshad M', '', '0000-00-00', '', 102),
(2018503537, 'Mohammed Ibrahim S', '', '0000-00-00', '', 102),
(2018503538, 'Monika Shree E S', '', '0000-00-00', '', 102),
(2018503539, 'Mukilan V', '', '0000-00-00', '', 102),
(2018503540, 'Nivetha G R', '', '0000-00-00', '', 102),
(2018503541, 'Parkavi G', '', '0000-00-00', '', 102),
(2018503542, 'Pon Sathya Narayanan T K', '', '0000-00-00', '', 102),
(2018503543, 'Prasanth S', '', '0000-00-00', '', 102),
(2018503544, 'Prathiksha P', '', '0000-00-00', '', 102),
(2018503545, 'Priyadharshini P', '', '0000-00-00', '', 102),
(2018503546, 'Priyanga G', '', '0000-00-00', '', 102),
(2018503547, 'Rohan Rajkumar', '', '0000-00-00', '', 102),
(2018503548, 'Sadheesh N', '', '0000-00-00', '', 102),
(2018503549, 'Sai Ganesh S', '', '0000-00-00', '', 102),
(2018503550, 'Sanjana B', '', '0000-00-00', '', 102),
(2018503551, 'Saroja S', '', '0000-00-00', '', 102),
(2018503552, 'Satish V', '', '0000-00-00', '', 102),
(2018503553, 'Shimola S', '', '0000-00-00', '', 102),
(2018503554, 'Shivani Saw R', '', '0000-00-00', '', 102),
(2018503555, 'Shreya Ravindranath', '', '0000-00-00', '', 102),
(2018503556, 'Siddharth R', '', '0000-00-00', '', 102),
(2018503557, 'Sivaganesh B', '', '0000-00-00', '', 102),
(2018503558, 'Sivaranjani A', '', '0000-00-00', '', 102),
(2018503559, 'Sivassri S', '', '0000-00-00', '', 102),
(2018503560, 'Sneha D', '', '0000-00-00', '', 102),
(2018503561, 'Soundarya K', '', '0000-00-00', '', 102),
(2018503563, 'Subha Shakthi M', '', '0000-00-00', '', 102),
(2018503564, 'Subhash Sandhar S', '', '0000-00-00', '', 102),
(2018503565, 'Surya P', '', '0000-00-00', '', 102),
(2018503566, 'Tamilvanan B', '', '0000-00-00', '', 102),
(2018503567, 'Tharani Priya B', '', '0000-00-00', '', 102),
(2018503568, 'Utthra P', '', '0000-00-00', '', 102),
(2018503569, 'Vasumitha P', '', '0000-00-00', '', 102),
(2018503570, 'Venuprasath P', '', '0000-00-00', '', 102),
(2018503571, 'Vijayshree P', '', '0000-00-00', '', 102),
(2018503572, 'Yuva Raaj J G', '', '0000-00-00', '', 102),
(2018614026, 'Adlin Sylvia A', '', '0000-00-00', '', 103),
(2018614029, 'Bhagya Rathi R', '', '0000-00-00', '', 103),
(2018614030, 'Christy K T', '', '0000-00-00', '', 103),
(2018614031, 'Dhanapriya D', '', '0000-00-00', '', 103),
(2018614032, 'Gausalya M', '', '0000-00-00', '', 103),
(2018614033, 'Indumathy R', '', '0000-00-00', '', 103),
(2018614034, 'Kavinilavu A', '', '0000-00-00', '', 103),
(2018614035, 'Kaviya P', '', '0000-00-00', '', 103),
(2018614036, 'Keerthana T', '', '0000-00-00', '', 103),
(2018614037, 'Manikandan D', '', '0000-00-00', '', 103),
(2018614038, 'Mohamed Athil \nSafras U Z', '', '0000-00-00', '', 103),
(2018614039, 'Nandhashree K R', '', '0000-00-00', '', 103),
(2018614040, 'Pradeesshma T', '', '0000-00-00', '', 103),
(2018614042, 'Priyanka D', '', '0000-00-00', '', 103),
(2018614043, 'Safia Mahmoodha S', '', '0000-00-00', '', 103),
(2018614044, 'Shibani Raju S', '', '0000-00-00', '', 103),
(2018614045, 'Soundharya K', '', '0000-00-00', '', 103),
(2018614046, 'Sujith Kumar S', '', '0000-00-00', '', 103),
(2018614047, 'Vaishnavi A K', '', '0000-00-00', '', 103),
(2018614048, 'Vijayabhaskar J', '', '0000-00-00', '', 103),
(2018614049, 'Vijayalakshmi V', '', '0000-00-00', '', 103),
(2019503001, 'ABINESH V', '', '0000-00-00', '', 102),
(2019503002, 'ADHETYA NARAYAN J M', '', '0000-00-00', '', 102),
(2019503003, 'AKSHAYA ARUNACHALAM', '', '0000-00-00', '', 102),
(2019503004, 'AMARESH SADDISH', '', '0000-00-00', '', 102),
(2019503005, 'AMY MERIN THOMAS', '', '0000-00-00', '', 102),
(2019503006, 'ANTONY GUNAL P', '', '0000-00-00', '', 102),
(2019503007, 'APARNAA A S', '', '0000-00-00', '', 102),
(2019503008, 'ASHOK KUMAR R', '', '0000-00-00', '', 102),
(2019503009, 'BARGHAVI P', '', '0000-00-00', '', 102),
(2019503010, 'CYRIL TONY A', '', '0000-00-00', '', 102),
(2019503011, 'DAMPELLA SHALINI PRIYA', '', '0000-00-00', '', 102),
(2019503012, 'DANUSH GUPTA V K', '', '0000-00-00', '', 102),
(2019503013, 'DHANUSH TATINENI', '', '0000-00-00', '', 102),
(2019503014, 'GAYATHRISRI R', '', '0000-00-00', '', 102),
(2019503015, 'GUHAN B', '', '0000-00-00', '', 102),
(2019503016, 'HAFNA FATHIMA M', '', '0000-00-00', '', 102),
(2019503017, 'INIYAN SHANMUGAM', '', '0000-00-00', '', 102),
(2019503018, 'JAGADISH K', '', '0000-00-00', '', 102),
(2019503019, 'JEYTHA SAHANA VENKATESH BABU', '', '0000-00-00', '', 102),
(2019503020, 'KARTHIKEYAN C', '', '0000-00-00', '', 102),
(2019503022, 'KAVINKUMAR S', '', '0000-00-00', '', 102),
(2019503023, 'KEERTHIKA M', '', '0000-00-00', '', 102),
(2019503024, 'KRISHNA PADMANABHAN', '', '0000-00-00', '', 102),
(2019503025, 'MOHAMMED JUNAID ALAM N', '', '0000-00-00', '', 102),
(2019503026, 'MOHAMMED THAFSEEL M', '', '0000-00-00', '', 102),
(2019503027, 'MONISHA C', '', '0000-00-00', '', 102),
(2019503028, 'NAMRRITHA S', '', '0000-00-00', '', 102),
(2019503029, 'NITHARSHAN C V', '', '0000-00-00', '', 102),
(2019503030, 'NITHYA U', '', '0000-00-00', '', 102),
(2019503031, 'PAAVENDHAN K S', '', '0000-00-00', '', 102),
(2019503032, 'PREMAL RAJ VELLAISAMY', '', '0000-00-00', '', 102),
(2019503033, 'PRIYA HARSHINI R', '', '0000-00-00', '', 102),
(2019503034, 'PRIYADHARSHINI R', '', '0000-00-00', '', 102),
(2019503035, 'PRIYADHARSHINI S', '', '0000-00-00', '', 102),
(2019503036, 'RAGUL B', '', '0000-00-00', '', 102),
(2019503037, 'RAJESH G', '', '0000-00-00', '', 102),
(2019503038, 'RAYAN H', '', '0000-00-00', '', 102),
(2019503039, 'RIDU VARSHINI A S', '', '0000-00-00', '', 102),
(2019503040, 'SAIKRISHNA R', '', '0000-00-00', '', 102),
(2019503041, 'SAKTHEESWARAN K', '', '0000-00-00', '', 102),
(2019503042, 'SANJAY KUMAR L S', '', '0000-00-00', '', 102),
(2019503043, 'SANTHIYA L', '', '0000-00-00', '', 102),
(2019503044, 'SANTHOSH S', '', '0000-00-00', '', 102),
(2019503045, 'SARAH DEEPTI SAHAYA KINGSLEY', '', '0000-00-00', '', 102),
(2019503046, 'SARAVANASETHU G', '', '0000-00-00', '', 102),
(2019503047, 'SHANDANI S', '', '0000-00-00', '', 102),
(2019503048, 'SHANGEETH R', '', '0000-00-00', '', 102),
(2019503049, 'SHIVANI R', '', '0000-00-00', '', 102),
(2019503050, 'SHREYAS KARTHIK RAMESH', '', '0000-00-00', '', 102),
(2019503051, 'SNEGA R', '', '0000-00-00', '', 102),
(2019503052, 'SOWMYA J', '', '0000-00-00', '', 102),
(2019503053, 'SRI JAYAN E', '', '0000-00-00', '', 102),
(2019503054, 'SRISWARNALATHA S', '', '0000-00-00', '', 102),
(2019503055, 'SWETHA B', '', '0000-00-00', '', 102),
(2019503056, 'TANOOJ CHEEKATI', '', '0000-00-00', '', 102),
(2019503057, 'THILAKSURYA B', '', '0000-00-00', '', 102),
(2019503058, 'VAISHNAVANAMBI S V', '', '0000-00-00', '', 102),
(2019503059, 'VIGNESH SIVA P', '', '0000-00-00', '', 102),
(2019503060, 'VIGNESHWAR C', '', '0000-00-00', '', 102),
(2019503061, 'VIJAY RAGHAV S', '', '0000-00-00', '', 102),
(2019503062, 'VIJAYASHREE V', '', '0000-00-00', '', 102),
(2019503063, 'YASWANTH KUMAR R S', '', '0000-00-00', '', 102),
(2019503502, 'ABHISHEK MANOHARAN', '', '0000-00-00', '', 102),
(2019503503, 'ABIRAMI R', '', '0000-00-00', '', 102),
(2019503504, 'AISWARYA S', '', '0000-00-00', '', 102),
(2019503506, 'AMALA DEJOE NETHIN J', '', '0000-00-00', '', 102),
(2019503507, 'ANIKA LAKSHMI S', '', '0000-00-00', '', 102),
(2019503508, 'BALAKUMAR R', '', '0000-00-00', '', 102),
(2019503509, 'BHARATH M', '', '0000-00-00', '', 102),
(2019503510, 'BHARGAVI R', '', '0000-00-00', '', 102),
(2019503511, 'BHAVANI VENKATA KARTHIK K', '', '0000-00-00', '', 102),
(2019503512, 'BINDESH GUGAN S', '', '0000-00-00', '', 102),
(2019503513, 'DEEPTHI A', '', '0000-00-00', '', 102),
(2019503514, 'DHANUSHRI R', '', '0000-00-00', '', 102),
(2019503515, 'DHARSHAN R', '', '0000-00-00', '', 102),
(2019503516, 'EZHIL SARAVANAN T', '', '0000-00-00', '', 102),
(2019503517, 'GOKKUL E', '', '0000-00-00', '', 102),
(2019503518, 'GURBANI BEDI', '', '0000-00-00', '', 102),
(2019503519, 'HEMANTH N', '', '0000-00-00', '', 102),
(2019503520, 'INDHUMATHI B', '', '0000-00-00', '', 102),
(2019503521, 'JERFIN NISHANTH S', '', '0000-00-00', '', 102),
(2019503522, 'JOTHIKA S', '', '0000-00-00', '', 102),
(2019503523, 'KAMMA CHERUVU JAYARAJA CHANDANA', '', '0000-00-00', '', 102),
(2019503524, 'KARTHIKA DEVI K', '', '0000-00-00', '', 102),
(2019503525, 'KATHERINE B ANCHERI', '', '0000-00-00', '', 102),
(2019503526, 'KAVIN B', '', '0000-00-00', '', 102),
(2019503527, 'KEERTHANA V S', '', '0000-00-00', '', 102),
(2019503528, 'KRITHIKSHAN K', '', '0000-00-00', '', 102),
(2019503529, 'KUMARAN S', '', '0000-00-00', '', 102),
(2019503530, 'MAGESH P', '', '0000-00-00', '', 102),
(2019503531, 'MALINI R R', '', '0000-00-00', '', 102),
(2019503532, 'MEDHA SHREE R', '', '0000-00-00', '', 102),
(2019503533, 'MITHESH A', '', '0000-00-00', '', 102),
(2019503534, 'MOHAMED NOUFHAL ABBAS K', '', '0000-00-00', '', 102),
(2019503535, 'MUHILAN B', '', '0000-00-00', '', 102),
(2019503536, 'NIRANJAAN V M', '', '0000-00-00', '', 102),
(2019503537, 'NISHANTHINI S', '', '0000-00-00', '', 102),
(2019503538, 'NITHISH KUMAR G S', '', '0000-00-00', '', 102),
(2019503539, 'NITIN A', '', '0000-00-00', '', 102),
(2019503540, 'NITISH KUMAR K M', '', '0000-00-00', '', 102),
(2019503541, 'NIVEDITHA B', '', '0000-00-00', '', 102),
(2019503542, 'PADMAJA H', '', '0000-00-00', '', 102),
(2019503543, 'PONLIBARNAA S', '', '0000-00-00', '', 102),
(2019503544, 'PONNADA SRIVIDYA', '', '0000-00-00', '', 102),
(2019503545, 'RAHUL B', '', '0000-00-00', '', 102),
(2019503546, 'RAMANUJAN R', '', '0000-00-00', '', 102),
(2019503547, 'RAMYAA P', '', '0000-00-00', '', 102),
(2019503548, 'RANJITH D', '', '0000-00-00', '', 102),
(2019503549, 'RAVI KANT', '', '0000-00-00', '', 102),
(2019503550, 'RAVI V', '', '0000-00-00', '', 102),
(2019503551, 'RITIKA E C', '', '0000-00-00', '', 102),
(2019503552, 'ROHAN G', '', '0000-00-00', '', 102),
(2019503553, 'RUBAK PREYAN G', '', '0000-00-00', '', 102),
(2019503554, 'SAI SOUNDHARYA LAKSHMI B', '', '0000-00-00', '', 102),
(2019503555, 'SAKTHI DASAN B A', '', '0000-00-00', '', 102),
(2019503556, 'SANJAYKUMAR S', '', '0000-00-00', '', 102),
(2019503557, 'SANJIV PRAKASH J V', '', '0000-00-00', '', 102),
(2019503558, 'SANTHOSH P', '', '0000-00-00', '', 102),
(2019503559, 'SHAM GANESH M', '', '0000-00-00', '', 102),
(2019503560, 'SHRI NIKHITHAA R M', '', '0000-00-00', '', 102),
(2019503561, 'SIDDARTH M', '', '0000-00-00', '', 102),
(2019503562, 'SONA S', '', '0000-00-00', '', 102),
(2019503564, 'SUDARSAN KUMAR N', '', '0000-00-00', '', 102),
(2019503565, 'SUDHARSAN G V', '', '0000-00-00', '', 102),
(2019503566, 'SUHRUTH K C', '', '0000-00-00', '', 102),
(2019503567, 'VAIBHAVA LAKSHMI R', '', '0000-00-00', '', 102),
(2019503568, 'VAMSI RAJU M', '', '0000-00-00', '', 102),
(2019503569, 'VARUNKRISHNA G', '', '0000-00-00', '', 102),
(2019503570, 'VEZHAVENTHAN T', '', '0000-00-00', '', 102),
(2019503571, 'VIMAL RAAJ M', '', '0000-00-00', '', 102),
(2019503572, 'VISHNU B M', '', '0000-00-00', '', 102),
(2019503573, 'YOGEESWAR S', '', '0000-00-00', '', 102),
(2019503574, 'PROMOTH G', '', '0000-00-00', '', 102),
(2019503575, 'RISHIKESH .D', '', '0000-00-00', '', 102),
(2019503576, 'SRINIVASAN A', '', '0000-00-00', '', 102),
(2019503577, 'SWASTHI.B', '', '0000-00-00', '', 102),
(2019503578, 'VENKATESH R', '', '0000-00-00', '', 102),
(2019614026, 'ARTHI R                                ', '', '0000-00-00', '', 103),
(2019614027, 'GAUTAM R                                ', '', '0000-00-00', '', 103),
(2019614028, 'GAYATHRI S                              ', '', '0000-00-00', '', 103),
(2019614029, 'HARINI M                                ', '', '0000-00-00', '', 103),
(2019614030, 'JAYASREE M.A                            ', '', '0000-00-00', '', 103),
(2019614031, 'JEBIYA S                                ', '', '0000-00-00', '', 103),
(2019614032, 'KANIYAMUTHU T                           ', '', '0000-00-00', '', 103),
(2019614033, 'KAVIMANIBHARATHI  C                     ', '', '0000-00-00', '', 103),
(2019614034, 'NARGEEZ M                               ', '', '0000-00-00', '', 103),
(2019614035, 'PRAGATHI S                              ', '', '0000-00-00', '', 103),
(2019614036, 'PRAKASH RAJHAN PA                       ', '', '0000-00-00', '', 103),
(2019614037, 'RISHABA V                               ', '', '0000-00-00', '', 103),
(2019614038, 'SABHARINATH S                           ', '', '0000-00-00', '', 103),
(2019614039, 'SANGEETHA S                             ', '', '0000-00-00', '', 103),
(2019614040, 'SARAVANAN S                             ', '', '0000-00-00', '', 103),
(2019614041, 'SHIMONA E                               ', '', '0000-00-00', '', 103),
(2019614042, 'SHRIYA SURESH                           ', '', '0000-00-00', '', 103),
(2019614043, 'SIDDHARTHAN K C                         ', '', '0000-00-00', '', 103),
(2019614044, 'SIVAPRIYA R                             ', '', '0000-00-00', '', 103),
(2019614045, 'THIRUMALAI DEVI RAMYA D                 ', '', '0000-00-00', '', 103),
(2019614046, 'VIJAYALAKSHMI R                         ', '', '0000-00-00', '', 103),
(2019614047, 'VINITHA C                               ', '', '0000-00-00', '', 103),
(2019614048, 'VINOTHINI R                             ', '', '0000-00-00', '', 103),
(2019614049, 'VISHNU PRIYA R                          ', '', '0000-00-00', '', 103),
(2019614050, 'SOWNDHARIYA K                           ', '', '0000-00-00', '', 103);

-- --------------------------------------------------------

--
-- Table structure for table `student_list`
--

CREATE TABLE `student_list` (
  `reg_no` int NOT NULL,
  `name` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `subj_allot`
--

CREATE TABLE `subj_allot` (
  `sallot_id` int NOT NULL,
  `staff_id` int NOT NULL,
  `course_code` varchar(15) NOT NULL,
  `group_ref` int NOT NULL,
  `session_ref` int NOT NULL,
  `class_room` varchar(15) DEFAULT NULL,
  `student_count` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `subj_allot`
--

INSERT INTO `subj_allot` (`sallot_id`, `staff_id`, `course_code`, `group_ref`, `session_ref`, `class_room`, `student_count`) VALUES
(1, 1, '1', 2, 7, '4kol', 45);

-- --------------------------------------------------------

--
-- Table structure for table `user_info`
--

CREATE TABLE `user_info` (
  `user_ID` int NOT NULL,
  `username` int NOT NULL,
  `user_role` varchar(10) DEFAULT NULL,
  `password` varchar(10) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_info`
--

INSERT INTO `user_info` (`user_ID`, `username`, `user_role`, `password`, `status`, `create_time`) VALUES
(1, 2017503048, NULL, NULL, '1', '2021-01-24 07:25:53'),
(2, 2017503525, NULL, NULL, '1', '2021-01-24 07:25:53'),
(3, 2017503537, NULL, NULL, '1', '2021-01-24 07:53:22'),
(4, 2017503056, NULL, NULL, '1', '2021-01-24 13:03:49'),
(5, 2016503614, NULL, NULL, '1', '2021-01-24 13:14:29'),
(6, 2015506789, NULL, NULL, '1', '2021-01-24 13:15:07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alumni`
--
ALTER TABLE `alumni`
  ADD PRIMARY KEY (`Register_No`);

--
-- Indexes for table `course_artimat`
--
ALTER TABLE `course_artimat`
  ADD PRIMARY KEY (`cartimat_id`),
  ADD KEY `code_fk_idx` (`course_code`);

--
-- Indexes for table `course_assesseval`
--
ALTER TABLE `course_assesseval`
  ADD PRIMARY KEY (`cassesseval_id`),
  ADD KEY `code_fk_idx` (`course_code`),
  ADD KEY `group_fk_idx` (`group_ref`),
  ADD KEY `session_fk_idx` (`session_ref`),
  ADD KEY `regnum_fk_idx` (`reg_no`);

--
-- Indexes for table `course_assessment`
--
ALTER TABLE `course_assessment`
  ADD PRIMARY KEY (`cassess_id`),
  ADD UNIQUE KEY `cassess_id_UNIQUE` (`cassess_id`),
  ADD KEY `code_fk_idx` (`course_code`),
  ADD KEY `group_fk_idx` (`group_ref`),
  ADD KEY `session_fk_idx` (`session_ref`);

--
-- Indexes for table `course_assigneval`
--
ALTER TABLE `course_assigneval`
  ADD PRIMARY KEY (`cassigneval_id`),
  ADD UNIQUE KEY `cassigneval_id_UNIQUE` (`cassigneval_id`),
  ADD KEY `code_fk_idx` (`course_code`),
  ADD KEY `group_fk_idx` (`group_ref`),
  ADD KEY `session_fk_idx` (`session_ref`),
  ADD KEY `regnum_fk_idx` (`reg_no`);

--
-- Indexes for table `course_assignment`
--
ALTER TABLE `course_assignment`
  ADD PRIMARY KEY (`cassign_id`),
  ADD UNIQUE KEY `cassign_id_UNIQUE` (`cassign_id`),
  ADD KEY `code_fk_idx` (`course_code`),
  ADD KEY `group_fk_idx` (`group_ref`),
  ADD KEY `session_fk_idx` (`session_ref`);

--
-- Indexes for table `course_attendance`
--
ALTER TABLE `course_attendance`
  ADD PRIMARY KEY (`cattend_id`),
  ADD KEY `code_fk_idx` (`course_code`),
  ADD KEY `group_fk_idx` (`group_ref`),
  ADD KEY `session_fk_idx` (`session_ref`),
  ADD KEY `regno_fk_idx` (`reg_no`);

--
-- Indexes for table `course_cacomp`
--
ALTER TABLE `course_cacomp`
  ADD PRIMARY KEY (`ccacomp_id`),
  ADD UNIQUE KEY `cintcomp_id_UNIQUE` (`ccacomp_id`),
  ADD KEY `code_fk10_idx` (`course_code`),
  ADD KEY `group_fk10_idx` (`group_ref`),
  ADD KEY `session_fk10_idx` (`session_ref`);

--
-- Indexes for table `course_extcalc`
--
ALTER TABLE `course_extcalc`
  ADD PRIMARY KEY (`cextcalc_id`),
  ADD UNIQUE KEY `cextcalc_id_UNIQUE` (`cextcalc_id`),
  ADD KEY `code_fk13_idx` (`course_code`),
  ADD KEY `group_fk13_idx` (`group_ref`),
  ADD KEY `session_fk13_idx` (`session_ref`),
  ADD KEY `regno_fk13_idx` (`reg_num`);

--
-- Indexes for table `course_extcomp`
--
ALTER TABLE `course_extcomp`
  ADD PRIMARY KEY (`cextcomp_id`),
  ADD UNIQUE KEY `cextcomp_id_UNIQUE` (`cextcomp_id`),
  ADD KEY `code_fk12_idx` (`course_code`),
  ADD KEY `group_fk12_idx` (`group_ref`),
  ADD KEY `session_fk12_idx` (`session_ref`);

--
-- Indexes for table `course_internalcalc`
--
ALTER TABLE `course_internalcalc`
  ADD PRIMARY KEY (`cintcalc_id`),
  ADD UNIQUE KEY `cintcalc_id_UNIQUE` (`cintcalc_id`),
  ADD KEY `code_fk11_idx` (`course_code`),
  ADD KEY `group_fk11_idx` (`group_ref`),
  ADD KEY `session_fk11_idx` (`session_ref`),
  ADD KEY `regnum_fk11_idx` (`reg_no`);

--
-- Indexes for table `course_lessonplan`
--
ALTER TABLE `course_lessonplan`
  ADD PRIMARY KEY (`clp_id`),
  ADD UNIQUE KEY `clp_id_UNIQUE` (`clp_id`),
  ADD KEY `code_fk_idx` (`course_code`),
  ADD KEY `group_fk_idx` (`group_ref`),
  ADD KEY `session_fk_idx` (`session_ref`),
  ADD KEY `topic_fk_idx` (`course_ctopic_id`);

--
-- Indexes for table `course_list`
--
ALTER TABLE `course_list`
  ADD PRIMARY KEY (`course_code`);

--
-- Indexes for table `course_reference_table`
--
ALTER TABLE `course_reference_table`
  ADD PRIMARY KEY (`reference_id`),
  ADD UNIQUE KEY `reference_id_UNIQUE` (`reference_id`),
  ADD UNIQUE KEY `ref_code_UNIQUE` (`ref_code`);

--
-- Indexes for table `course_registered_students`
--
ALTER TABLE `course_registered_students`
  ADD PRIMARY KEY (`cregst_id`),
  ADD UNIQUE KEY `cregst_id_UNIQUE` (`cregst_id`),
  ADD KEY `code_fk_idx` (`course_code`),
  ADD KEY `regno_fk_idx` (`reg_no`),
  ADD KEY `group_fk_idx` (`group_ref`),
  ADD KEY `session_fk_idx` (`session_ref`);

--
-- Indexes for table `course_topic`
--
ALTER TABLE `course_topic`
  ADD PRIMARY KEY (`ctopic_id`),
  ADD UNIQUE KEY `ctopic_id_UNIQUE` (`ctopic_id`),
  ADD KEY `code_fk_idx` (`course_code`);

--
-- Indexes for table `credentials`
--
ALTER TABLE `credentials`
  ADD PRIMARY KEY (`Credentials_ID`),
  ADD UNIQUE KEY `Username` (`Username`(128)),
  ADD KEY `Person_ID` (`Person_ID`);

--
-- Indexes for table `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`Person_ID`),
  ADD UNIQUE KEY `Person_ID_UNIQUE` (`Person_ID`),
  ADD KEY `Gender_Reference_ID_FK_idx` (`Gender_Ref`),
  ADD KEY `Community_Reference_ID_FK_idx` (`Community_Ref`),
  ADD KEY `Marital_Status_Reference_ID_FK_idx` (`Marital_Status_Ref`),
  ADD KEY `Prefix_Reference_ID_FK_idx` (`Prefix_Ref`);

--
-- Indexes for table `person_academic`
--
ALTER TABLE `person_academic`
  ADD PRIMARY KEY (`Academic_ID`),
  ADD UNIQUE KEY `Academic_ID_UNIQUE` (`Academic_ID`),
  ADD KEY `Branch_Reference_ID_FK_idx` (`Branch_Ref`),
  ADD KEY `Person_ID_FK219` (`Person_ID`),
  ADD KEY `Degree_Reference_ID_FK2_idx` (`Degree_Ref`),
  ADD KEY `Class_Type_Reference_ID_FK2_idx` (`Class_Type_Ref`),
  ADD KEY `Course_Code_FK_idx` (`Course_Code`);

--
-- Indexes for table `person_additional_duties`
--
ALTER TABLE `person_additional_duties`
  ADD PRIMARY KEY (`Duty_ID`),
  ADD UNIQUE KEY `Supervision_ID_UNIQUE` (`Duty_ID`),
  ADD KEY `Person_ID_FK213` (`Person_ID`);

--
-- Indexes for table `person_awards`
--
ALTER TABLE `person_awards`
  ADD PRIMARY KEY (`Award_ID`),
  ADD UNIQUE KEY `Award_ID_UNIQUE` (`Award_ID`),
  ADD KEY `Person_ID_FK218` (`Person_ID`);

--
-- Indexes for table `person_course_details`
--
ALTER TABLE `person_course_details`
  ADD PRIMARY KEY (`Course_ID`,`Course_Code`),
  ADD UNIQUE KEY `Member_ID_UNIQUE` (`Course_ID`),
  ADD UNIQUE KEY `Course_Code_UNIQUE` (`Course_Code`);

--
-- Indexes for table `person_events_attended`
--
ALTER TABLE `person_events_attended`
  ADD PRIMARY KEY (`Event_ID`),
  ADD UNIQUE KEY `Event_ID_UNIQUE` (`Event_ID`),
  ADD KEY `Event_Type_Reference_ID_FK_idx` (`Event_Type_Ref`),
  ADD KEY `Participation_Status_Reference_ID_FK_idx` (`Participation_Status_Ref`),
  ADD KEY `Status_Reference_ID_FK_idx` (`Level_Ref`),
  ADD KEY `Person_ID_FK2110` (`Person_ID`);

--
-- Indexes for table `person_experience`
--
ALTER TABLE `person_experience`
  ADD PRIMARY KEY (`Experience_ID`),
  ADD UNIQUE KEY `Experience_ID_UNIQUE` (`Experience_ID`),
  ADD KEY `Designation_Reference_ID_FK_idx` (`Designation_Ref`),
  ADD KEY `Emp_category_Reference_ID_FK_idx` (`Emp_Category_Ref`),
  ADD KEY `Work_Nature_Reference_ID_FK_idx` (`Work_Nature_Ref`),
  ADD KEY `Person_ID_FK2` (`Person_ID`);

--
-- Indexes for table `person_guestlecture`
--
ALTER TABLE `person_guestlecture`
  ADD PRIMARY KEY (`GuestLecture_ID`),
  ADD UNIQUE KEY `GuestLecture_ID_UNIQUE` (`GuestLecture_ID`),
  ADD KEY `Level_Reference_ID_FK_idx` (`Level_Ref`),
  ADD KEY `Person_ID_FK215` (`Person_ID`);

--
-- Indexes for table `person_membership`
--
ALTER TABLE `person_membership`
  ADD PRIMARY KEY (`Member_ID`),
  ADD UNIQUE KEY `Member_ID_UNIQUE` (`Member_ID`),
  ADD KEY `Person_ID_FK210` (`Person_ID`),
  ADD KEY `Member_Type_Reference_FK_idx` (`Member_Type`);

--
-- Indexes for table `person_patents`
--
ALTER TABLE `person_patents`
  ADD PRIMARY KEY (`Patent_ID`),
  ADD UNIQUE KEY `Patent_ID_UNIQUE` (`Patent_ID`),
  ADD KEY `Patent_Status_idx` (`Patent_Status_Ref`),
  ADD KEY `Person_ID_FK217` (`Person_ID`);

--
-- Indexes for table `person_project_allocation`
--
ALTER TABLE `person_project_allocation`
  ADD PRIMARY KEY (`Project_ID`),
  ADD UNIQUE KEY `Supervision_ID_UNIQUE` (`Project_ID`),
  ADD KEY `Person_ID_FK213` (`Person_ID`);

--
-- Indexes for table `person_project_proposal`
--
ALTER TABLE `person_project_proposal`
  ADD PRIMARY KEY (`Proposal_ID`),
  ADD UNIQUE KEY `Proposal_ID_UNIQUE` (`Proposal_ID`),
  ADD KEY `Type_Reference_ID_FK_idx` (`Project_Type_Ref`),
  ADD KEY `Status_Reference_ID_FK_idx` (`Status_Ref`),
  ADD KEY `Person_ID_FK212` (`Person_ID`);

--
-- Indexes for table `person_publication`
--
ALTER TABLE `person_publication`
  ADD PRIMARY KEY (`Publication_ID`),
  ADD UNIQUE KEY `Journal_ID_UNIQUE` (`Publication_ID`),
  ADD KEY `Level_Reference_ID_FK_idx` (`Level_Ref`),
  ADD KEY `Person_ID_FK20` (`Person_ID`),
  ADD KEY `Type_Reference_ID_FK1_idx` (`Publication_Type_Ref`);

--
-- Indexes for table `person_qualification`
--
ALTER TABLE `person_qualification`
  ADD PRIMARY KEY (`Qualification_ID`),
  ADD UNIQUE KEY `Qualification_ID_UNIQUE` (`Qualification_ID`),
  ADD KEY `Qualify_Level_Reference_ID_FK_idx` (`Qualification_Level_Ref`),
  ADD KEY `Degree_Reference_ID_FK_idx` (`Degree_Ref`),
  ADD KEY `Branch_Reference_ID_FK_idx` (`Branch_Ref`),
  ADD KEY `Class_Reference_ID_FK_idx` (`Class_Obtained_Ref`),
  ADD KEY `Person_ID_FK1` (`Person_ID`);

--
-- Indexes for table `person_reference_table`
--
ALTER TABLE `person_reference_table`
  ADD PRIMARY KEY (`Reference_ID`),
  ADD UNIQUE KEY `Reference_ID_UNIQUE` (`Reference_ID`),
  ADD UNIQUE KEY `Ref_Code_Unique` (`Ref_Code`),
  ADD UNIQUE KEY `Ref_Code` (`Ref_Code`) USING BTREE;

--
-- Indexes for table `person_responsibility`
--
ALTER TABLE `person_responsibility`
  ADD PRIMARY KEY (`Responsibility_ID`),
  ADD UNIQUE KEY `Responsibility_ID_UNIQUE` (`Responsibility_ID`),
  ADD KEY `Person_ID_FK211` (`Person_ID`),
  ADD KEY `Responsibility_Type_Reference_FK_idx` (`Responsibility_Ref`);

--
-- Indexes for table `person_scholardetails`
--
ALTER TABLE `person_scholardetails`
  ADD PRIMARY KEY (`Scholar_ID`),
  ADD UNIQUE KEY `Scholar_ID_UNIQUE` (`Scholar_ID`),
  ADD KEY `Status_Reference_ID_FK_idx` (`Status_Ref`),
  ADD KEY `Guide_Type_Reference_ID_FK_idx` (`Guide_Type_Ref`),
  ADD KEY `Person_ID_FK214` (`Person_ID`),
  ADD KEY `Fellowship_Received_Ref_FK_idx` (`Fellowship_Received_Ref`),
  ADD KEY `Registration_Mode_Ref_FK_idx` (`Registration_Mode_Ref`);

--
-- Indexes for table `person_specialization`
--
ALTER TABLE `person_specialization`
  ADD PRIMARY KEY (`Specialization_ID`),
  ADD UNIQUE KEY `Supervision_ID_UNIQUE` (`Specialization_ID`),
  ADD KEY `Person_ID_FK213` (`Person_ID`);

--
-- Indexes for table `person_supervision`
--
ALTER TABLE `person_supervision`
  ADD PRIMARY KEY (`Supervision_ID`),
  ADD UNIQUE KEY `Supervision_ID_UNIQUE` (`Supervision_ID`),
  ADD KEY `Person_ID_FK213` (`Person_ID`),
  ADD KEY `Degree_Reference_ID_FK1_idx` (`Degree_Ref`),
  ADD KEY `Guide_Type_Reference_ID_FK2_idx` (`Guide_Type_Ref`),
  ADD KEY `Status_Reference_ID_FK2_idx` (`Status_Ref`);

--
-- Indexes for table `person_travel_history`
--
ALTER TABLE `person_travel_history`
  ADD PRIMARY KEY (`Travel_ID`),
  ADD UNIQUE KEY `Abroad_ID_UNIQUE` (`Travel_ID`),
  ADD KEY `Person_ID_FK216` (`Person_ID`);

--
-- Indexes for table `staff_list`
--
ALTER TABLE `staff_list`
  ADD PRIMARY KEY (`staff_id`),
  ADD UNIQUE KEY `staff_id_UNIQUE` (`staff_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`Register_No`);

--
-- Indexes for table `student_list`
--
ALTER TABLE `student_list`
  ADD PRIMARY KEY (`reg_no`),
  ADD UNIQUE KEY `reg_no_UNIQUE` (`reg_no`);

--
-- Indexes for table `subj_allot`
--
ALTER TABLE `subj_allot`
  ADD PRIMARY KEY (`sallot_id`),
  ADD UNIQUE KEY `sallot_id_UNIQUE` (`sallot_id`),
  ADD KEY `staff_id_fk_idx` (`staff_id`),
  ADD KEY `course_id_fk_idx` (`course_code`),
  ADD KEY `group_fk_idx` (`group_ref`),
  ADD KEY `session_fk_idx` (`session_ref`);

--
-- Indexes for table `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`user_ID`),
  ADD UNIQUE KEY `user_ID_UNIQUE` (`user_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `course_artimat`
--
ALTER TABLE `course_artimat`
  MODIFY `cartimat_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `course_assesseval`
--
ALTER TABLE `course_assesseval`
  MODIFY `cassesseval_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `course_assessment`
--
ALTER TABLE `course_assessment`
  MODIFY `cassess_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `course_assigneval`
--
ALTER TABLE `course_assigneval`
  MODIFY `cassigneval_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `course_assignment`
--
ALTER TABLE `course_assignment`
  MODIFY `cassign_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `course_cacomp`
--
ALTER TABLE `course_cacomp`
  MODIFY `ccacomp_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `course_extcalc`
--
ALTER TABLE `course_extcalc`
  MODIFY `cextcalc_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `course_extcomp`
--
ALTER TABLE `course_extcomp`
  MODIFY `cextcomp_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `course_internalcalc`
--
ALTER TABLE `course_internalcalc`
  MODIFY `cintcalc_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `course_lessonplan`
--
ALTER TABLE `course_lessonplan`
  MODIFY `clp_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `course_reference_table`
--
ALTER TABLE `course_reference_table`
  MODIFY `reference_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `course_registered_students`
--
ALTER TABLE `course_registered_students`
  MODIFY `cregst_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `course_topic`
--
ALTER TABLE `course_topic`
  MODIFY `ctopic_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `credentials`
--
ALTER TABLE `credentials`
  MODIFY `Credentials_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `person_academic`
--
ALTER TABLE `person_academic`
  MODIFY `Academic_ID` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `person_additional_duties`
--
ALTER TABLE `person_additional_duties`
  MODIFY `Duty_ID` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `person_awards`
--
ALTER TABLE `person_awards`
  MODIFY `Award_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `person_course_details`
--
ALTER TABLE `person_course_details`
  MODIFY `Course_ID` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `person_events_attended`
--
ALTER TABLE `person_events_attended`
  MODIFY `Event_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `person_experience`
--
ALTER TABLE `person_experience`
  MODIFY `Experience_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `person_guestlecture`
--
ALTER TABLE `person_guestlecture`
  MODIFY `GuestLecture_ID` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `person_membership`
--
ALTER TABLE `person_membership`
  MODIFY `Member_ID` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `person_patents`
--
ALTER TABLE `person_patents`
  MODIFY `Patent_ID` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `person_project_allocation`
--
ALTER TABLE `person_project_allocation`
  MODIFY `Project_ID` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `person_project_proposal`
--
ALTER TABLE `person_project_proposal`
  MODIFY `Proposal_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `person_publication`
--
ALTER TABLE `person_publication`
  MODIFY `Publication_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;

--
-- AUTO_INCREMENT for table `person_qualification`
--
ALTER TABLE `person_qualification`
  MODIFY `Qualification_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `person_reference_table`
--
ALTER TABLE `person_reference_table`
  MODIFY `Reference_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=168;

--
-- AUTO_INCREMENT for table `person_responsibility`
--
ALTER TABLE `person_responsibility`
  MODIFY `Responsibility_ID` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `person_scholardetails`
--
ALTER TABLE `person_scholardetails`
  MODIFY `Scholar_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `person_specialization`
--
ALTER TABLE `person_specialization`
  MODIFY `Specialization_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `person_supervision`
--
ALTER TABLE `person_supervision`
  MODIFY `Supervision_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `person_travel_history`
--
ALTER TABLE `person_travel_history`
  MODIFY `Travel_ID` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subj_allot`
--
ALTER TABLE `subj_allot`
  MODIFY `sallot_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_info`
--
ALTER TABLE `user_info`
  MODIFY `user_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `alumni`
--
ALTER TABLE `alumni`
  ADD CONSTRAINT `alumni_ibfk_1` FOREIGN KEY (`Register_No`) REFERENCES `student` (`Register_No`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `course_artimat`
--
ALTER TABLE `course_artimat`
  ADD CONSTRAINT `code_fk2` FOREIGN KEY (`course_code`) REFERENCES `course_list` (`course_code`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `course_assesseval`
--
ALTER TABLE `course_assesseval`
  ADD CONSTRAINT `code_fk6` FOREIGN KEY (`course_code`) REFERENCES `course_list` (`course_code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `group_fk6` FOREIGN KEY (`group_ref`) REFERENCES `course_reference_table` (`ref_code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `regnum_fk6` FOREIGN KEY (`reg_no`) REFERENCES `student_list` (`reg_no`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `session_fk6` FOREIGN KEY (`session_ref`) REFERENCES `course_reference_table` (`ref_code`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `course_assessment`
--
ALTER TABLE `course_assessment`
  ADD CONSTRAINT `code_fk5` FOREIGN KEY (`course_code`) REFERENCES `course_list` (`course_code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `group_fk5` FOREIGN KEY (`group_ref`) REFERENCES `course_reference_table` (`ref_code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `session_fk5` FOREIGN KEY (`session_ref`) REFERENCES `course_reference_table` (`ref_code`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `course_assigneval`
--
ALTER TABLE `course_assigneval`
  ADD CONSTRAINT `code_fk8` FOREIGN KEY (`course_code`) REFERENCES `course_list` (`course_code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `group_fk8` FOREIGN KEY (`group_ref`) REFERENCES `course_reference_table` (`ref_code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `regnum_fk8` FOREIGN KEY (`reg_no`) REFERENCES `student_list` (`reg_no`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `session_fk8` FOREIGN KEY (`session_ref`) REFERENCES `course_reference_table` (`ref_code`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `course_assignment`
--
ALTER TABLE `course_assignment`
  ADD CONSTRAINT `code_fk7` FOREIGN KEY (`course_code`) REFERENCES `course_list` (`course_code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `group_fk7` FOREIGN KEY (`group_ref`) REFERENCES `course_reference_table` (`ref_code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `session_fk7` FOREIGN KEY (`session_ref`) REFERENCES `course_reference_table` (`ref_code`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `course_attendance`
--
ALTER TABLE `course_attendance`
  ADD CONSTRAINT `code_fk4` FOREIGN KEY (`course_code`) REFERENCES `course_list` (`course_code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `group_fk4` FOREIGN KEY (`group_ref`) REFERENCES `course_reference_table` (`ref_code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `regno_fk4` FOREIGN KEY (`reg_no`) REFERENCES `student_list` (`reg_no`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `session_fk4` FOREIGN KEY (`session_ref`) REFERENCES `course_reference_table` (`ref_code`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `course_cacomp`
--
ALTER TABLE `course_cacomp`
  ADD CONSTRAINT `code_fk10` FOREIGN KEY (`course_code`) REFERENCES `course_list` (`course_code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `group_fk10` FOREIGN KEY (`group_ref`) REFERENCES `course_reference_table` (`ref_code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `session_fk10` FOREIGN KEY (`session_ref`) REFERENCES `course_reference_table` (`ref_code`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
