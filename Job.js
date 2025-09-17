const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Job = sequelize.define('Job', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  salaryMin: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  salaryMax: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  salaryCurrency: {
    type: DataTypes.STRING,
    defaultValue: 'INR'
  },
  employmentType: {
    type: DataTypes.ENUM('full_time', 'part_time', 'contract', 'internship'),
    allowNull: false,
    defaultValue: 'full_time'
  },
  experienceRequired: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  skills: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: []
  },
  requirements: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: []
  },
  benefits: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: []
  },
  recruiterId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  applicationDeadline: {
    type: DataTypes.DATE,
    allowNull: true
  },
  totalApplications: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  shortlistedCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  hiredCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  aiGenerated: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  biasScore: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true
  },
  tags: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: []
  }
}, {
  tableName: 'jobs'
});

module.exports = Job;
