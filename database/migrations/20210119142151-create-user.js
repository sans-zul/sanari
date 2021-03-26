'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      verified: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      otp: {
        allowNull: true,
        type: Sequelize.STRING
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tanggal_lahir: {
        allowNull: true,
        type: Sequelize.DATEONLY
      },
      gender: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      image: {
        allowNull: true,
        defaultValue : 'avatar-1.jpg',
        type: Sequelize.STRING
      },
      foto_ktp: {
        allowNull: true,
        type: Sequelize.STRING
      },
      foto_ktp_wajah: {
        allowNull: true,
        type: Sequelize.STRING
      },
      phone: {
        allowNull: true,
        type: Sequelize.STRING
      },
      alamat: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      desa: {
        allowNull: true,
        type: Sequelize.STRING
      },
      kecamatan: {
        allowNull: true,
        type: Sequelize.STRING
      },
      kota: {
        allowNull: true,
        type: Sequelize.STRING
      },
      provinsi: {
        allowNull: true,
        type: Sequelize.STRING
      },
      kode_pos: {
        allowNull: true,
        type: Sequelize.STRING
      },
      cv: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      about_me: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      skill: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      experience: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      sosial_media: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};