module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "dima1288",
    DB: "cube2",
    dialect: "postgres",
    port:5433,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };