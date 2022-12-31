-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : sam. 31 déc. 2022 à 17:55
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `aws-quiz`
--

-- --------------------------------------------------------

--
-- Structure de la table `choices`
--

CREATE TABLE `choices` (
  `id` int(11) NOT NULL,
  `choix1` text NOT NULL,
  `choix2` text NOT NULL,
  `choix3` text NOT NULL,
  `choix4` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `choices`
--

INSERT INTO `choices` (`id`, `choix1`, `choix2`, `choix3`, `choix4`) VALUES
(1, 'Amazon EC2 costs are billed on a monthly basis', 'Users retain full administrative access to their Amazon EC2 instances.', 'Amazon EC2 instances can be launched on demand when needed.', 'Users can permanently run enough instances to handle peak workloads.'),
(2, 'AWS Storage Gateway', ' AWS Database Migration Service (AWS DMS).', 'Amazon EC2', 'Amazon AppStream 2.0'),
(3, 'AWS Config', ' AWS OpsWorks', 'AWS SDK', 'AWS Marketplace'),
(4, 'AWS Config', 'Amazon Route 53', ' AWS Direct Connect', 'Amazon Virtual Private Cloud (Amazon VPC)\r\n'),
(5, ' Configuring third-party applications', 'Maintaining physical hardware', 'Securing application access and data', 'Managing guest operating systems'),
(6, 'AWS Regions', ' Edge locations', 'Availability Zones', 'Virtual Private Cloud (VPC)'),
(7, 'AWS Trusted Advisor', 'Audit AWS Identity and Access Management (IAM) roles', 'Enable multi-factor authentication', 'Enable AWS CloudTrail'),
(8, 'AWS Trusted Advisor', 'AWS CloudTrail', 'AWS X-Ray', 'AWS Identity and Access Management (AWS IAM)'),
(9, 'Amazon Simple Notification Service (Amazon SNS)', 'AWS CloudTrail', ' AWS Trusted Advisor', 'Amazon Route 53'),
(10, 'AWS Trusted Advisor', 'AWS Identity and Access Management (IAM)', 'AWS Billing Console\r\n', 'AWS Acceptable Use Policy');

-- --------------------------------------------------------

--
-- Structure de la table `question`
--

CREATE TABLE `question` (
  `id` int(11) NOT NULL,
  `choix0` text NOT NULL,
  `Explication` text NOT NULL,
  `RightAnswer` text NOT NULL,
  `Answer` int(11) NOT NULL,
  `choices_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `question`
--

INSERT INTO `question` (`id`, `choix0`, `Explication`, `RightAnswer`, `Answer`, `choices_id`) VALUES
(1, 'Why is AWS more economical than traditional data centers for applications with varying compute workloads?', 'The ability to launch instances on demand when needed allows users to launch and terminate instances in response to a varying workload. This is a more economical practice than purchasing enough on-premises servers to handle the peak load.', 'Amazon EC2 instances can be launched on demand when needed.', 3, 1),
(2, 'Which AWS service would simplify the migration of a database to AWS ?', 'AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases', 'AWS Database Migration Service (AWS DMS)', 2, 2),
(3, 'Which AWS offering enables users to find, buy, and immediately start using software solutions in theirAWS environment?', 'AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases', 'AWS Marketplace', 4, 3),
(4, 'Which AWS networking service enables a company to create a virtual network within AWS?', 'Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launch AWS resources in a virtual network that they define.', 'Amazon Virtual Private Cloud (Amazon VPC)', 4, 4),
(5, 'Which of the following is an AWS responsibility under the AWS shared responsibility model?', 'Maintaining physical hardware is an AWS responsibility under the AWS shared responsibility model.', 'Maintaining physical hardware ', 2, 6),
(6, 'Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?', 'To deliver content to users with lower latency, Amazon CloudFront uses a global network of points of presence (edge locations and regional edge caches) worldwide. ', 'Edge locations\r\n', 2, 6),
(7, 'How would a system administrator add an additional layer of login security to a user`s AWS Management Console?', 'Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to an AWS Management Console, they will be prompted for their username and password (the first factor—what they know), as well as for an authentication code from their MFA device (the second factor—what they have). Taken together, these multiple factors provide increased security for AWS account settings and resources.', ' Enable multi-factor authentication', 3, 7),
(8, 'Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?', 'AWS CloudTrail helps users enable governance, compliance, and operational and risk auditing of their AWS accounts. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Management Console, AWS Command Line Interface (CLI), and AWS SDKs and APIs.', 'AWS CloudTrail\r\n', 2, 8),
(9, 'Which service would be used to send alerts based on Amazon CloudWatch alarms?', 'Amazon SNS and Amazon CloudWatch are integrated so users can collect, view, and analyze metrics for every active SNS. Once users have configured CloudWatch for Amazon SNS, they can gain better insight into the performance of their Amazon SNS topics, push notifications, and SMS deliveries', 'Amazon Simple Notification Service (Amazon SNS)', 1, 9),
(10, ' Where can a user find information about prohibited actions on the AWS infrastructure?', 'The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS infrastructure.', 'AWS Acceptable Use Policy', 4, 10);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `choices`
--
ALTER TABLE `choices`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`),
  ADD KEY `choices_id` (`choices_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `choices`
--
ALTER TABLE `choices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `question`
--
ALTER TABLE `question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
