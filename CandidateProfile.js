const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CandidateProfile = sequelize.define('CandidateProfile', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  resumePath: {
    type: DataTypes.STRING,
    allowNull: true
  },
  resumeScore: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      min: 0,
      max: 100
    }
  },
  skills: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: []
  },
  experience: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  currentSalary: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  expectedSalary: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  education: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: []
  },
  workExperience: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: []
  },
  preferredLocations: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: []
  },
  jobPreferences: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: {}
  },
  availability: {
    type: DataTypes.ENUM('immediate', '1_month', '2_months', '3_months', 'flexible'),
    allowNull: true
  },
  noticePeriod: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  isProfileComplete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  aiRecommendations: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: []
  }
}, {
  tableName: 'candidate_profiles'
});

module.exports = CandidateProfile;
