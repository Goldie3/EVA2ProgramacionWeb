CREATE DATABASE  IF NOT EXISTS `tabla_evaluacionweb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tabla_evaluacionweb`;
-- MySQL dump 10.13  Distrib 8.0.45, for Win64 (x86_64)
--
-- Host: localhost    Database: tabla_evaluacionweb
-- ------------------------------------------------------
-- Server version	8.0.45

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `campanias_marketing`
--

DROP TABLE IF EXISTS `campanias_marketing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `campanias_marketing` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(140) DEFAULT NULL,
  `canal` varchar(50) DEFAULT NULL,
  `presupuesto` decimal(14,2) DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `objetivo` text,
  `activa` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campanias_marketing`
--

LOCK TABLES `campanias_marketing` WRITE;
/*!40000 ALTER TABLE `campanias_marketing` DISABLE KEYS */;
INSERT INTO `campanias_marketing` VALUES (1,'bruno','mega',120000.00,'2026-08-05','2026-08-09','test',1),(3,'pablo','tele13',2000000.00,'2026-03-01','2026-12-02','hola',1),(4,'pablo','tele13',2000000.00,'2026-03-01','2026-12-02','hola',0);
/*!40000 ALTER TABLE `campanias_marketing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `habitaciones_hostal`
--

DROP TABLE IF EXISTS `habitaciones_hostal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `habitaciones_hostal` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codigo` varchar(20) DEFAULT NULL,
  `tipo` varchar(50) DEFAULT NULL,
  `capacidad` int DEFAULT NULL,
  `precio_noche` decimal(10,2) DEFAULT NULL,
  `vista` varchar(50) DEFAULT NULL,
  `disponible` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `habitaciones_hostal`
--

LOCK TABLES `habitaciones_hostal` WRITE;
/*!40000 ALTER TABLE `habitaciones_hostal` DISABLE KEYS */;
INSERT INTO `habitaciones_hostal` VALUES (1,'12','chiquitito',1,5.00,'esta tapado todo',0);
/*!40000 ALTER TABLE `habitaciones_hostal` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-05-09  0:08:45
