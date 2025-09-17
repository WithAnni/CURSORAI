const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Application = sequelize.define('Application', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  candidateId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  jobId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'jobs',
      key: 'id'
    }
  },
  status: {
    type: DataTypes.ENUM('applied', 'shortlisted', 'interview_scheduled', 'interviewed', 'hired', 'rejected'),
    allowNull: false,
    defaultValue: 'applied'
  },
  appliedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  coverLetter: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  resumePath: {
    type: DataTypes.STRING,
    allowNull: true
  },
  matchScore: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  recruiterNotes: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  interviewDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  interviewType: {
    type: DataTypes.ENUM('phone', 'video', 'in_person', 'ai_mock'),
    allowNull: true
  },
  interviewFeedback: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: {}
  },
  salaryOffered: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  offerDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  joiningDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  aiAnalysis: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: {}
  }
}, {
  tableName: 'applications',
  indexes: [
    {
      unique: true,
      fields: ['candidateId', 'jobId']
    }
  ]
});

module.exports = Application;
